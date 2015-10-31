(ns jiyi.core
   (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [cljs-http.client :as http]
              [cljs.core.async :refer [<! chan put! >!] :as async]
              )
    (:import goog.History))


(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Stores

(defonce user (atom {}))
(defonce deck (atom {:reviewed []
                     :to-review []}))
(comment
  (do
    (reset! deck {:reviewed [{:id 5702, :photo "https://genome.klick.com/local-instance/staff images/5702_3525_sq.jpg", :name "Ashley Ho", :title "Medical Editor", :dept "Creative"}], :to-review [{:id 4967, :photo "https://genome.klick.com/local-instance/staff images/4967_2553.jpg", :name "Alfred Oo", :title "Application Developer", :dept "KH4 Tech"} {:id 4966, :photo "https://genome.klick.com/local-instance/staff images/4966_2688_sq.jpg", :name "Max Gerlach", :title "Senior Mobile Developer", :dept "KH4 Tech"}]})
    (reset! user (first (:to-review @deck))))

  (add-watch deck :deck (fn [k r o n]
                          (prn k o)
                          (prn '=>)
                          (prn k n)))
  )

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Actions


(defn- extract-content [] (map #(-> % :body :Entries)))

(defn <get-user 
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
   :dept (:BusinessUnitName json)})

(defn save-to-atom [atm id]
  (go
    (as-> (<! (<get-user id)) $
      (first $) 
      (json->userdetails $)
      (reset! atm $))))


;;--- directly accessing the atom

(defn all-users-to-review []
  (:to-review @deck))

(defn all-users-reviewed []
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

(defn remove-from-deck [userid]
  (remove-from-reviewed userid)
  (remove-from-to-review userid))

(defn add-to-reviewed [item]
  (swap! deck update-in [:reviewed] conj item))

(defn add-to-to-review [item]
  (swap! deck update-in [:to-review] conj item))

;; ===

(defn all-users-in-deck []
  (concat (all-users-to-review) (all-users-reviewed)))

(defn get-from-to-review [userid]
  (->> (all-users-to-review)
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

(defn add-to-deck [userid]
  (go
    (as-> (<! (<get-user userid)) $
      (first $) 
      (json->userdetails $)
      (add-to-to-review $))))


(defn user-in-deck? [userid]
  (some #(= userid (:id %)) (all-users-in-deck)))

(defn reset-reviewed []
  (set-to-review (all-users-reviewed)) 
  (set-reviewed []))


(defn set-next-user-to-review []
  (when-let [users (all-users-to-review)]
    (reset! user (first users))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Views

; Source: https://gist.github.com/Deraen/946ac9e6c6211c83f1e9
(defn debounce [in ms]
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
   (toast msg 1000)
   )
  ([msg length]
   (.toast js/Materialize msg length)))


(defn Card [user]
  (let [{:keys [id photo name title dept]} @user]
    [:div.card 
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
                     (set-next-user-to-review))
         }
        "I KNOW!"]]
      [:div.s6.right
       [:a
        {:href "#"
         :class "waves-effect waves-light btn"
         :on-click (fn [e]
                     (prn "Marking " name "with id" id "as UNsuccessfully reviewed")
                     (mark-as-unsuccessfully-reviewed id)
                     (set-next-user-to-review))
         }
        "WHO?!?"]]]
     [:div.card-reveal
      [:span.card-title.grey-text.text-darken-4
       [:i.material-icons.right
        "close"]]
      [:p
       [:h1 name]
       [:b title]
       [:p dept]]]]))

(defn Add-Klicksters [text]
  [:div
   [:div.row>h2.center-align text]
                                 [:div.row.center-align>a {:href "#search"
                                                           :class "waves-effect center waves-light btn valign"}
                                  "Add more Klicksters"]])

(defn Review [useratm]
  (when (and
         (not (seq @useratm))
         (seq (all-users-to-review)))
    (set-next-user-to-review))
  (cond
    (seq @useratm) [Card useratm]
    (seq (all-users-reviewed)) [:div
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
  (do
    @deck
    [:div.row
     [:ul.collection
      (map (fn [result]
             [:li.collection-item {:key (:UserID result)}
              (:Name result)
              
              (if (user-in-deck? (:UserID result))
                [:a.btn-small.waves-effect.waves-light.red {:style {:float "right"}
                                                            :on-click (fn [e]
                                                                        (do
                                                                          (remove-from-deck (:UserID result))
                                                                          (set-next-user-to-review)
                                                                          (toast (str "Removed " (:Name result) " from your list!"))))}
                 [:i.material-icons] "delete"]  
                
                [:a.btn-small.waves-effect.waves-light {:style {:float "right"}
                                                        :on-click (fn [e]
                                                                    (do
                                                                      (add-to-deck (:UserID result))
                                                                      (toast (str "Added " (:Name result) " to your list!"))))}
                 [:i.material-icons] "add"])])
           results
           )]]))

(defn Search []
  (let [search-term (atom "")
        search-results (atom [])
        search-channel (chan)
        <search-user-delayed (debounce search-channel 300)]
    (add-watch search-results :search-results
               (fn  [k r o n]
                 (prn k n)))
    (go-loop []
      (let [keyword (<! <search-user-delayed)]
        (reset! search-results (<! (<search-user keyword)))
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
       [SearchResults @search-results ]])))

(defn Deck-List []
  [:div.row
   [:ul.collection
    (map (fn [result]
           [:li.collection-item {:key (:id result)}
            (:name result)
            
            [:a.btn-small.waves-effect.waves-light.red {:style {:float "right"}
                                                          :on-click (fn [e]
                                                                      (do
                                                                        (remove-from-deck (:id result))
                                                                        (set-next-user-to-review)
                                                                        ;; (reset! plzupdate (new js/Date))
                                                                        (toast (str "Removed " (:name result) " from your list!"))))}
               [:i.material-icons] "delete"]])
         (all-users-in-deck)) 
         ]])


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Routes

;; (save-to-atom user 5702)


(defn review [] (Review user))
(defn card [] (Card user))
(defn search [] (Search))

(defn decklist []
  (if-not (empty? (all-users-in-deck))
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





(def test-user {:IsObjectivesAdmin false, :LaborCategoryID "TECHNCAL", :FirstName "Max", :LaborRoleID "APPLDEVL", :OversightPercent 25, :WorkTeamID "101", :BusinessUnitName "KH4 Tech", :IsCandidateAdmin false, :CanCommunicateClient false, :UserSystemID 80, :Email "mgerlach@klick.com", :CreatedDate "/Date(1370232000000-0000)/", :BillingTargetHoursPerYear 1650, :Title "Senior Mobile Developer", :IsClient false, :IsScheduleConfirmationRulesEnforced true, :LastName "Gerlach", :IsScheduleAdmin false, :UserName "mgerlach", :Extension "2381", :TimeZoneName "America/Toronto", :IsNotAPerson false, :UserID 4966, :KeyscanUpdated "/Date(1445623000000-0000)/", :HasDirectReports false, :IsAdmin false, :BusinessUnitID 24, :CountryID "CA", :CompanyBusinessUnitID 1, :TimeZoneID 90, :PhotoPath "/local-instance/staff images/4966_2688_sq.jpg", :Name "Max Gerlach", :Roles [{:RoleID "DWFullAccess", :IsBusinessUnitScope true} {:RoleID "ws", :IsBusinessUnitScope false}], :CompanyBusinessUnitName "Klick Health", :IsWeeklyReviewAdmin false, :Enabled true, :TagName "Max_Gerlach", :Supervisors [3642 3990 4363 3446 3438 3424 3449], :Status {:CanSMS false, :IsOnGenome true, :CanGTalk false}})









