(ns jiyi.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [alandipert.storage-atom :refer [local-storage]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! chan put! >!] :as async]
            )
  (:import goog.History))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Stores

(defonce deck (local-storage (atom {:reviewed []
                                    :to-review []
                                    :being-reviewed nil})
                             :local-deck))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Actions


;; Network
(defn- extract-content [] (map #(-> % :body :Entries)))

(defn <get-klickster 
  [userid]
  (http/jsonp "https://genome.klick.com:443/api/User.json"
              {:query-params {"UserID" userid}
               :channel (chan 1 (extract-content))}))

(defn <search-user 
  [keyword]
  (http/jsonp "https://genome.klick.com:443/api/User.json"
              {:query-params {:ForAutocompleter true
                              :Enabled true
                              :IsNotAPerson false
                              :Keyword keyword}
               :channel (chan 1 (extract-content))}))

(defn json->userdetails [json]
  {:id (:UserID json)
   :photo (str "https://genome.klick.com" (:PhotoPath json))
   :name (:Name json)
   :title (:Title json)
   :genomedetails (str "https://genome.klick.com/user/index.html#/" (:UserID json))
   :dept (:BusinessUnitName json)})


;; State manipulation

(defn set-to-being-reviewed [user]
  (swap! deck assoc :being-reviewed user))

(defn get-being-reviewed []
  (:being-reviewed @deck))

(defn all-to-review []
  (:to-review @deck))

(defn all-reviewed []
  (:reviewed @deck))

(defn set-reviewed [val]
  (swap! deck assoc :reviewed val))

(defn set-to-review [val]
  (swap! deck assoc :to-review val))

(defn remove-from-reviewed [userid]
  (swap! deck update-in [:reviewed]
         #(filterv (fn [m] (not= userid (:id m))) %)))

(defn remove-from-to-review [userid]
  (swap! deck update-in [:to-review]
         #(filterv (fn [m] (not= userid (:id m))) %)))

(defn add-to-reviewed [item]
  (swap! deck update-in [:reviewed] conj item))

(defn add-to-to-review [item]
  (swap! deck update-in [:to-review] conj item))

;; ---

(defn remove-from-deck [userid]
  (remove-from-reviewed userid)
  (remove-from-to-review userid))

(defn all-in-deck []
  (concat (all-to-review) (all-reviewed)))

(defn get-from-to-review [userid]
  (->> (all-to-review)
       (filterv #(= (:id %) userid))
       first))

(defn mark-as-successfully-reviewed [userid]
  (let [item (get-from-to-review userid)]
    (remove-from-to-review userid)
    (add-to-reviewed item)))

(defn mark-as-unsuccessfully-reviewed [userid]
  (let [item (get-from-to-review userid)]
    (remove-from-to-review userid)
    (add-to-to-review item)))

(defn in-deck? [userid]
  (some #(= userid (:id %)) (all-in-deck)))

(defn reset-reviewed []
  (set-to-review (all-reviewed)) 
  (set-reviewed []))

(defn set-next-to-review []
  (when-let [users (all-to-review)]
    (set-to-being-reviewed (first users))))

(defn add-to-deck [userid]
  (go
    (-> (<! (<get-klickster userid)) 
      (first ) 
      (json->userdetails )
      (add-to-to-review ))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Views / Components

(defn debounce [in ms]
;; Source: https://gist.github.com/Deraen/946ac9e6c6211c83f1e9
  "Creates a channel which will change put a new value to the output channel
   after timeout has passed. Each value change resets the timeout. If value
   changes more frequently only the latest value is put out.
   When input channel closes, the output channel is closed."
  (let [out (chan)]
    (go-loop [last-val nil]
      (let [val (if (nil? last-val)
                  (<! in)
                  last-val)
            timer (async/timeout ms)]
        (alt!
          in ([v] (if v
                    (recur v)
                    (async/close! out)))
          timer ([_] (do
                       (>! out val)
                       (recur nil))))))
    out))

(defn toast
  ([msg]
   (toast msg 1000))
  ([msg length]
   (.toast js/Materialize msg length)))


(defn Card []
  (let [{:keys [id photo name title dept]} (get-being-reviewed)]
    [:div.card {:style {:max-width "500px"}}
     [:div.card-image.waves-effect.waves-block.waves-light
      [:img.activator
       {:src photo}]]
     [:div.card-content.row {:style {:float "bottom"}}
       [:div.s6.left
        [:a
         {:href "#"
          :class "waves-effect waves-light btn"
          :on-click (fn [e]
                      (prn "Marking " name "with id" id "as successfully reviewed")
                      (mark-as-successfully-reviewed id)
                      (set-next-to-review))}
         [:i.material-icons.left "thumb_up"] "I KNOW!!!"]]
       [:div.s6.right
        [:a
         {:href "#"
          :class "waves-effect waves-light btn"
          :on-click (fn [e]
                      (prn "Marking " name "with id" id "as UNsuccessfully reviewed")
                      (mark-as-unsuccessfully-reviewed id)
                      (set-next-to-review))}
         [:i.material-icons.left "thumb_down"] "No idea :("]]]
     [:div.card-reveal
      [:span.card-title.grey-text.text-darken-4
       [:i.material-icons.right
        "close"]]
      [:span.card-title.grey-text.text-darken-4
       [:p.card-title
        [:br]
        [:h1 name]
        [:h5 title]
        [:h5 dept]]]]]))

(defn Add-Klicksters [text]
  [:div
   [:div.row>h2.center-align text]
   [:div.row.center-align>a {:href "#search"
                             :class "waves-effect center waves-light btn valign"}
    "Add more Klicksters"]])

(defn Review []
  (when (and
         (not (get-being-reviewed))
         (seq (all-to-review)))
    (set-next-to-review))
  
  (cond
    (seq (get-being-reviewed)) [Card]
    (seq (all-reviewed)) [:div
                          [Add-Klicksters "There are no more Klicksters to review!"]
                          [:div.row.center-align>a {:href "#"
                                                    :class "waves-effect waves-light btn"
                                                    :on-click (fn [e] (reset-reviewed))}
                           "Start over"]]
    :else [:div
           [:div.row>h2.center-align "You have no Klicksters in your deck to review!"]
           [:div.row.center-align>a {:href "#search"
                                     :class "waves-effect center waves-light btn valign"}
            "Add more Klicksters"]]))

(defn SearchResults [results]
  [:div.row
   [:ul.collection
    (doall (map (fn [result]
                  [:li.collection-item {:key (:UserID result)}
                   (:Name result)
                   
                   (if (in-deck? (:UserID result))
                     [:a.btn-small.waves-effect.waves-light {:style {:float "right"}
                                                             :on-click (fn [e]
                                                                         (do
                                                                           (remove-from-deck (:UserID result))
                                                                           (set-next-to-review)
                                                                           (toast (str "Removed " (:Name result) " from your list!"))))}
                      [:i.material-icons "delete"]]  
                     
                     [:a.btn-small.waves-effect.waves-light {:style {:float "right"}
                                                             :on-click (fn [e]
                                                                         (do
                                                                           (add-to-deck (:UserID result))
                                                                           (toast (str "Added " (:Name result) " to your list!"))))}
                      [:i.material-icons "add"]])])
                results
                ))]])

(defn Search []
  (let [search-term (atom "")
        search-results (atom [])
        search-channel (chan)
        <search-user-delayed (debounce search-channel 300)]
    #_(add-watch search-results :search-results
                 (fn  [k r o n]
                   (prn k n)))
    (go-loop []
      (let [keyword (<! <search-user-delayed)
            result (<! (<search-user keyword))]
        (reset! search-results result)
        (recur)))
    (fn []
      [:div
       [:div.row
      [:div.input-field.col.s12
         [:input {:placeholder "Search Klickster"
                  :type :text
                  :value @search-term
                  :on-change (fn [e]
                               (let [newval (-> e .-target .-value)]
                                 (reset! search-term newval)
                                 (when-not (empty? newval) 
                                   (put! search-channel newval))))}]]]
       (SearchResults @search-results)])))

(defn Deck-List []
  [:div.row
   [:ul.collection
    (doall (map (fn [result]
                  [:li.collection-item.avatar {:key (:id result)
                                               :style {:min-height 55}}
                   [:img.circle {:src (:photo result)}]
                   ;; [:a {:href (:genomedetails result)}]
                   [:div.title [:b (:name result)]]
                   (:title result)
                   
                   [:a.btn-small.waves-effect.waves-light {:style {:float "right"}
                                                           :on-click (fn [e]
                                                                       (do
                                                                         (remove-from-deck (:id result))
                                                                         (set-next-to-review)
                                                                         (toast (str "Removed " (:name result) " from your list!"))))}
                    [:i.material-icons "delete"]]])
                (all-in-deck)))]])


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Routes


(defn review [] (Review))
(defn card [] (Card))
(defn search [] (Search))

(defn decklist []
  (if-not (empty? (all-in-deck))
    [Deck-List]
    [Add-Klicksters "You have no Klicksters in your list!"]))

(defn current-page []
  [:div [(session/get :current-page)]])

(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page #'review))

(secretary/defroute "/review" []
  (session/put! :current-page #'review))

(secretary/defroute "/search" []
  (session/put! :current-page #'search))

(secretary/defroute "/list" []
  (session/put! :current-page #'decklist))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (mount-root))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Just for testing

(comment
  (do
    (reset! deck {:reviewed [{:id 5702, :photo "https://genome.klick.com/local-instance/staff images/5702_3525_sq.jpg", :name "Ashley Ho", :title "Medical Editor", :dept "Creative"}], :to-review [{:id 4967, :photo "https://genome.klick.com/local-instance/staff images/4967_2553.jpg", :name "Alfred Oo", :title "Application Developer", :dept "KH4 Tech"} {:id 4966, :photo "https://genome.klick.com/local-instance/staff images/4966_2688_sq.jpg", :name "Max Gerlach", :title "Senior Mobile Developer", :dept "KH4 Tech"}]})
    (set-to-being-reviewed (first (all-to-review))))

  (add-watch deck :deck (fn [k r o n]
                          (prn k o)
                          (prn '=>)
                          (prn k n)))
  )
