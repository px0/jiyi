(ns jiyi.core
   (:require-macros [cljs.core.async.macros :refer [go go-loop]])
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

(defonce user (atom {}))
(defonce search-term (atom ""))
(defonce search-results (atom []))

;; -------------------------
;; Views



(defn home-page []
  [:div [:h2 "Yo, Welcome to jiyi"]])

(defn Card []
  (let [{:keys [id photo name title dept]} @user]
    [:div.card {:style {:width "400px" :height "600px"}}
     [:div.card-image.waves-effect.waves-block.waves-light
      [:img.activator
       {:src photo}]]
     [:div.card-content.row {:style {:float "bottom"}}
      [:div.s6.left
       [:a
        {:href "#"
         :class "waves-effect waves-light btn"}
        "I KNOW!"]]
      [:div.s6.right
       [:a
        {:href "#"
         :class "waves-effect waves-light btn"}
        "WHO?!?"]]]
     [:div.card-reveal
      [:span.card-title.grey-text.text-darken-4
       [:i.material-icons.right
        "close"]]
      [:p
       [:h1 name]
       [:b title]
       [:p dept]]]]))


(defn about-page []
  [:div [:h2 "About jiyi"]])

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

;; (go
;;   (prn (<! (<search-user "ash"))))


(defn SearchResults [results]
  [:div.row
   [:ul.collection
    (map (fn [result]
           [:li.collection-item {:key (:UserID result)} (:Name result)])
         results)]])

(defn Search []
  [:div
   [:div.row
    [:div.input-field.col.s12
     [:input {:placeholder "Search term"
              :type :text
              :value @search-term
              :on-change (fn [e]
                           (let [newval (-> e .-target .-value)]
                             (reset! search-term newval)
                             (when-not (empty? newval) 
                               (go
                                 (reset! search-results (<! (<search-user newval)))))))}]]]
   ;;Results
   [SearchResults @search-results ]])

(add-watch search-results :search-results
  (fn [key atom old-state new-state]
    (prn "-- Atom Changed --")
    (prn key new-state)))


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
      (reset! user $))))

(save-to-atom user 5702)

(defn card [] (Card))
(defn search [] (Search))


(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page #'card))

(secretary/defroute "/card" []
  (session/put! :current-page #'card))

(secretary/defroute "/search" []
  (session/put! :current-page #'search))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

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









