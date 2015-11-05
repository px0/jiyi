// Compiled by ClojureScript 1.7.122 {}
goog.provide('jiyi.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('goog.History');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof jiyi.core.user !== 'undefined'){
} else {
jiyi.core.user = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof jiyi.core.deck !== 'undefined'){
} else {
jiyi.core.deck = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"to-review","to-review",1700427985),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"being-reviewed","being-reviewed",-528866688),null], null));
}
jiyi.core.extract_content = (function jiyi$core$extract_content(){
return cljs.core.map.call(null,(function (p1__46716_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__46716_SHARP_))){
return new cljs.core.Keyword(null,"Entries","Entries",1657497932).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__46716_SHARP_));
} else {
return p1__46716_SHARP_;
}
}));
});
jiyi.core._LT_get_user = (function jiyi$core$_LT_get_user(userid){
return cljs_http.client.jsonp.call(null,"https://genome.klick.com:443/api/User.json",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, ["UserID",userid], null),new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null,(1),jiyi.core.extract_content.call(null))], null));
});
jiyi.core._LT_search_user = (function jiyi$core$_LT_search_user(keyword){
return cljs_http.client.jsonp.call(null,"https://genome.klick.com:443/api/User.json",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ForAutocompleter","ForAutocompleter",-1588828428),true,new cljs.core.Keyword(null,"Enabled","Enabled",-114192199),true,new cljs.core.Keyword(null,"IsNotAPerson","IsNotAPerson",1475104562),false,new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),keyword], null),new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null,(1),jiyi.core.extract_content.call(null))], null));
});
jiyi.core.json__GT_userdetails = (function jiyi$core$json__GT_userdetails(json){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(json),new cljs.core.Keyword(null,"photo","photo",-52852781),[cljs.core.str("https://genome.klick.com"),cljs.core.str(new cljs.core.Keyword(null,"PhotoPath","PhotoPath",192483639).cljs$core$IFn$_invoke$arity$1(json))].join(''),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(json),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"Title","Title",1956715563).cljs$core$IFn$_invoke$arity$1(json),new cljs.core.Keyword(null,"dept","dept",1704352380),new cljs.core.Keyword(null,"BusinessUnitName","BusinessUnitName",-766614525).cljs$core$IFn$_invoke$arity$1(json)], null);
});
jiyi.core.set_to_being_reviewed = (function jiyi$core$set_to_being_reviewed(user){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.assoc,new cljs.core.Keyword(null,"being-reviewed","being-reviewed",-528866688),user);
});
jiyi.core.get_being_reviewed = (function jiyi$core$get_being_reviewed(){
return new cljs.core.Keyword(null,"being-reviewed","being-reviewed",-528866688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jiyi.core.deck));
});
jiyi.core.all_users_to_review = (function jiyi$core$all_users_to_review(){
return new cljs.core.Keyword(null,"to-review","to-review",1700427985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jiyi.core.deck));
});
jiyi.core.all_users_reviewed = (function jiyi$core$all_users_reviewed(){
return new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jiyi.core.deck));
});
jiyi.core.set_reviewed = (function jiyi$core$set_reviewed(val){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.assoc,new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500),val);
});
jiyi.core.set_to_review = (function jiyi$core$set_to_review(val){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.assoc,new cljs.core.Keyword(null,"to-review","to-review",1700427985),val);
});
jiyi.core.remove_from_reviewed = (function jiyi$core$remove_from_reviewed(userid){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500)], null),(function (p1__46796_SHARP_){
return cljs.core.filterv.call(null,(function (m){
return cljs.core.not_EQ_.call(null,userid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m));
}),p1__46796_SHARP_);
}));
});
jiyi.core.remove_from_to_review = (function jiyi$core$remove_from_to_review(userid){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-review","to-review",1700427985)], null),(function (p1__46808_SHARP_){
return cljs.core.filterv.call(null,(function (m){
return cljs.core.not_EQ_.call(null,userid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m));
}),p1__46808_SHARP_);
}));
});
jiyi.core.remove_from_deck = (function jiyi$core$remove_from_deck(userid){
jiyi.core.remove_from_reviewed.call(null,userid);

return jiyi.core.remove_from_to_review.call(null,userid);
});
jiyi.core.add_to_reviewed = (function jiyi$core$add_to_reviewed(item){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500)], null),cljs.core.conj,item);
});
jiyi.core.add_to_to_review = (function jiyi$core$add_to_to_review(item){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-review","to-review",1700427985)], null),cljs.core.conj,item);
});
jiyi.core.all_users_in_deck = (function jiyi$core$all_users_in_deck(){
return cljs.core.concat.call(null,jiyi.core.all_users_to_review.call(null),jiyi.core.all_users_reviewed.call(null));
});
jiyi.core.get_from_to_review = (function jiyi$core$get_from_to_review(userid){
return cljs.core.first.call(null,cljs.core.filterv.call(null,(function (p1__46874_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__46874_SHARP_),userid);
}),jiyi.core.all_users_to_review.call(null)));
});
jiyi.core.mark_as_successfully_reviewed = (function jiyi$core$mark_as_successfully_reviewed(userid){
var item = jiyi.core.get_from_to_review.call(null,userid);
jiyi.core.remove_from_to_review.call(null,userid);

return jiyi.core.add_to_reviewed.call(null,item);
});
jiyi.core.mark_as_unsuccessfully_reviewed = (function jiyi$core$mark_as_unsuccessfully_reviewed(userid){
var item = jiyi.core.get_from_to_review.call(null,userid);
jiyi.core.remove_from_to_review.call(null,userid);

return jiyi.core.add_to_to_review.call(null,item);
});
jiyi.core.add_to_deck = (function jiyi$core$add_to_deck(userid){
var c__22597__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto__){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto__){
return (function (state_46928){
var state_val_46929 = (state_46928[(1)]);
if((state_val_46929 === (1))){
var inst_46921 = jiyi.core._LT_get_user.call(null,userid);
var state_46928__$1 = state_46928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46928__$1,(2),inst_46921);
} else {
if((state_val_46929 === (2))){
var inst_46923 = (state_46928[(2)]);
var inst_46924 = cljs.core.first.call(null,inst_46923);
var inst_46925 = jiyi.core.json__GT_userdetails.call(null,inst_46924);
var inst_46926 = jiyi.core.add_to_to_review.call(null,inst_46925);
var state_46928__$1 = state_46928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46928__$1,inst_46926);
} else {
return null;
}
}
});})(c__22597__auto__))
;
return ((function (switch__22532__auto__,c__22597__auto__){
return (function() {
var jiyi$core$add_to_deck_$_state_machine__22533__auto__ = null;
var jiyi$core$add_to_deck_$_state_machine__22533__auto____0 = (function (){
var statearr_46934 = [null,null,null,null,null,null,null];
(statearr_46934[(0)] = jiyi$core$add_to_deck_$_state_machine__22533__auto__);

(statearr_46934[(1)] = (1));

return statearr_46934;
});
var jiyi$core$add_to_deck_$_state_machine__22533__auto____1 = (function (state_46928){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_46928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e46936){if((e46936 instanceof Object)){
var ex__22536__auto__ = e46936;
var statearr_46937_46941 = state_46928;
(statearr_46937_46941[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46943 = state_46928;
state_46928 = G__46943;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
jiyi$core$add_to_deck_$_state_machine__22533__auto__ = function(state_46928){
switch(arguments.length){
case 0:
return jiyi$core$add_to_deck_$_state_machine__22533__auto____0.call(this);
case 1:
return jiyi$core$add_to_deck_$_state_machine__22533__auto____1.call(this,state_46928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jiyi$core$add_to_deck_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = jiyi$core$add_to_deck_$_state_machine__22533__auto____0;
jiyi$core$add_to_deck_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = jiyi$core$add_to_deck_$_state_machine__22533__auto____1;
return jiyi$core$add_to_deck_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto__))
})();
var state__22599__auto__ = (function (){var statearr_46938 = f__22598__auto__.call(null);
(statearr_46938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto__);

return statearr_46938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto__))
);

return c__22597__auto__;
});
jiyi.core.user_in_deck_QMARK_ = (function jiyi$core$user_in_deck_QMARK_(userid){
return cljs.core.some.call(null,(function (p1__46946_SHARP_){
return cljs.core._EQ_.call(null,userid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__46946_SHARP_));
}),jiyi.core.all_users_in_deck.call(null));
});
jiyi.core.reset_reviewed = (function jiyi$core$reset_reviewed(){
jiyi.core.set_to_review.call(null,jiyi.core.all_users_reviewed.call(null));

return jiyi.core.set_reviewed.call(null,cljs.core.PersistentVector.EMPTY);
});
jiyi.core.set_next_user_to_review = (function jiyi$core$set_next_user_to_review(){
var temp__4425__auto__ = jiyi.core.all_users_to_review.call(null);
if(cljs.core.truth_(temp__4425__auto__)){
var users = temp__4425__auto__;
return cljs.core.reset_BANG_.call(null,jiyi.core.user,cljs.core.first.call(null,users));
} else {
return null;
}
});
jiyi.core.debounce = (function jiyi$core$debounce(in$,ms){

var out = cljs.core.async.chan.call(null);
var c__22597__auto___47154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___47154,out){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___47154,out){
return (function (state_47105){
var state_val_47106 = (state_47105[(1)]);
if((state_val_47106 === (7))){
var inst_47056 = (state_47105[(2)]);
var state_47105__$1 = state_47105;
var statearr_47107_47156 = state_47105__$1;
(statearr_47107_47156[(2)] = inst_47056);

(statearr_47107_47156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (20))){
var state_47105__$1 = state_47105;
var statearr_47109_47157 = state_47105__$1;
(statearr_47109_47157[(2)] = null);

(statearr_47109_47157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (1))){
var inst_47051 = null;
var state_47105__$1 = (function (){var statearr_47110 = state_47105;
(statearr_47110[(7)] = inst_47051);

return statearr_47110;
})();
var statearr_47111_47158 = state_47105__$1;
(statearr_47111_47158[(2)] = null);

(statearr_47111_47158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (4))){
var state_47105__$1 = state_47105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47105__$1,(7),in$);
} else {
if((state_val_47106 === (15))){
var inst_47059 = (state_47105[(8)]);
var inst_47070 = (state_47105[(9)]);
var inst_47087 = cljs.core.nth.call(null,inst_47070,(0),null);
var state_47105__$1 = (function (){var statearr_47112 = state_47105;
(statearr_47112[(10)] = inst_47087);

return statearr_47112;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47105__$1,(18),out,inst_47059);
} else {
if((state_val_47106 === (21))){
var inst_47096 = (state_47105[(2)]);
var state_47105__$1 = state_47105;
var statearr_47113_47159 = state_47105__$1;
(statearr_47113_47159[(2)] = inst_47096);

(statearr_47113_47159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (13))){
var inst_47080 = cljs.core.async.close_BANG_.call(null,out);
var state_47105__$1 = state_47105;
var statearr_47114_47160 = state_47105__$1;
(statearr_47114_47160[(2)] = inst_47080);

(statearr_47114_47160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (6))){
var inst_47060 = (state_47105[(11)]);
var inst_47059 = (state_47105[(2)]);
var inst_47060__$1 = cljs.core.async.timeout.call(null,ms);
var inst_47066 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47067 = [in$,inst_47060__$1];
var inst_47068 = (new cljs.core.PersistentVector(null,2,(5),inst_47066,inst_47067,null));
var state_47105__$1 = (function (){var statearr_47115 = state_47105;
(statearr_47115[(8)] = inst_47059);

(statearr_47115[(11)] = inst_47060__$1);

return statearr_47115;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_47105__$1,(8),inst_47068);
} else {
if((state_val_47106 === (17))){
var inst_47098 = (state_47105[(2)]);
var state_47105__$1 = state_47105;
var statearr_47116_47161 = state_47105__$1;
(statearr_47116_47161[(2)] = inst_47098);

(statearr_47116_47161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (3))){
var inst_47103 = (state_47105[(2)]);
var state_47105__$1 = state_47105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47105__$1,inst_47103);
} else {
if((state_val_47106 === (12))){
var inst_47076 = (state_47105[(12)]);
var inst_47051 = inst_47076;
var state_47105__$1 = (function (){var statearr_47118 = state_47105;
(statearr_47118[(7)] = inst_47051);

return statearr_47118;
})();
var statearr_47119_47162 = state_47105__$1;
(statearr_47119_47162[(2)] = null);

(statearr_47119_47162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (2))){
var inst_47051 = (state_47105[(7)]);
var inst_47053 = (inst_47051 == null);
var state_47105__$1 = state_47105;
if(cljs.core.truth_(inst_47053)){
var statearr_47121_47163 = state_47105__$1;
(statearr_47121_47163[(1)] = (4));

} else {
var statearr_47122_47164 = state_47105__$1;
(statearr_47122_47164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (19))){
var inst_47071 = (state_47105[(13)]);
var state_47105__$1 = state_47105;
var statearr_47123_47165 = state_47105__$1;
(statearr_47123_47165[(2)] = inst_47071);

(statearr_47123_47165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (11))){
var inst_47101 = (state_47105[(2)]);
var state_47105__$1 = state_47105;
var statearr_47125_47166 = state_47105__$1;
(statearr_47125_47166[(2)] = inst_47101);

(statearr_47125_47166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (9))){
var inst_47070 = (state_47105[(9)]);
var inst_47076 = (state_47105[(12)]);
var inst_47076__$1 = cljs.core.nth.call(null,inst_47070,(0),null);
var state_47105__$1 = (function (){var statearr_47126 = state_47105;
(statearr_47126[(12)] = inst_47076__$1);

return statearr_47126;
})();
if(cljs.core.truth_(inst_47076__$1)){
var statearr_47127_47167 = state_47105__$1;
(statearr_47127_47167[(1)] = (12));

} else {
var statearr_47128_47168 = state_47105__$1;
(statearr_47128_47168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (5))){
var inst_47051 = (state_47105[(7)]);
var state_47105__$1 = state_47105;
var statearr_47129_47169 = state_47105__$1;
(statearr_47129_47169[(2)] = inst_47051);

(statearr_47129_47169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (14))){
var inst_47082 = (state_47105[(2)]);
var state_47105__$1 = state_47105;
var statearr_47131_47170 = state_47105__$1;
(statearr_47131_47170[(2)] = inst_47082);

(statearr_47131_47170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (16))){
var inst_47072 = (state_47105[(14)]);
var inst_47092 = cljs.core._EQ_.call(null,inst_47072,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_47105__$1 = state_47105;
if(inst_47092){
var statearr_47133_47171 = state_47105__$1;
(statearr_47133_47171[(1)] = (19));

} else {
var statearr_47134_47172 = state_47105__$1;
(statearr_47134_47172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (10))){
var inst_47060 = (state_47105[(11)]);
var inst_47072 = (state_47105[(14)]);
var inst_47084 = cljs.core._EQ_.call(null,inst_47072,inst_47060);
var state_47105__$1 = state_47105;
if(inst_47084){
var statearr_47136_47173 = state_47105__$1;
(statearr_47136_47173[(1)] = (15));

} else {
var statearr_47137_47174 = state_47105__$1;
(statearr_47137_47174[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (18))){
var inst_47089 = (state_47105[(2)]);
var inst_47051 = null;
var state_47105__$1 = (function (){var statearr_47139 = state_47105;
(statearr_47139[(15)] = inst_47089);

(statearr_47139[(7)] = inst_47051);

return statearr_47139;
})();
var statearr_47140_47175 = state_47105__$1;
(statearr_47140_47175[(2)] = null);

(statearr_47140_47175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47106 === (8))){
var inst_47070 = (state_47105[(9)]);
var inst_47072 = (state_47105[(14)]);
var inst_47070__$1 = (state_47105[(2)]);
var inst_47071 = cljs.core.nth.call(null,inst_47070__$1,(0),null);
var inst_47072__$1 = cljs.core.nth.call(null,inst_47070__$1,(1),null);
var inst_47073 = cljs.core._EQ_.call(null,inst_47072__$1,in$);
var state_47105__$1 = (function (){var statearr_47141 = state_47105;
(statearr_47141[(9)] = inst_47070__$1);

(statearr_47141[(14)] = inst_47072__$1);

(statearr_47141[(13)] = inst_47071);

return statearr_47141;
})();
if(inst_47073){
var statearr_47142_47186 = state_47105__$1;
(statearr_47142_47186[(1)] = (9));

} else {
var statearr_47143_47191 = state_47105__$1;
(statearr_47143_47191[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22597__auto___47154,out))
;
return ((function (switch__22532__auto__,c__22597__auto___47154,out){
return (function() {
var jiyi$core$debounce_$_state_machine__22533__auto__ = null;
var jiyi$core$debounce_$_state_machine__22533__auto____0 = (function (){
var statearr_47148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47148[(0)] = jiyi$core$debounce_$_state_machine__22533__auto__);

(statearr_47148[(1)] = (1));

return statearr_47148;
});
var jiyi$core$debounce_$_state_machine__22533__auto____1 = (function (state_47105){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_47105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e47149){if((e47149 instanceof Object)){
var ex__22536__auto__ = e47149;
var statearr_47150_47198 = state_47105;
(statearr_47150_47198[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47202 = state_47105;
state_47105 = G__47202;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
jiyi$core$debounce_$_state_machine__22533__auto__ = function(state_47105){
switch(arguments.length){
case 0:
return jiyi$core$debounce_$_state_machine__22533__auto____0.call(this);
case 1:
return jiyi$core$debounce_$_state_machine__22533__auto____1.call(this,state_47105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jiyi$core$debounce_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = jiyi$core$debounce_$_state_machine__22533__auto____0;
jiyi$core$debounce_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = jiyi$core$debounce_$_state_machine__22533__auto____1;
return jiyi$core$debounce_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___47154,out))
})();
var state__22599__auto__ = (function (){var statearr_47152 = f__22598__auto__.call(null);
(statearr_47152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___47154);

return statearr_47152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___47154,out))
);


return out;
});
jiyi.core.toast = (function jiyi$core$toast(var_args){
var args47204 = [];
var len__20178__auto___47224 = arguments.length;
var i__20179__auto___47225 = (0);
while(true){
if((i__20179__auto___47225 < len__20178__auto___47224)){
args47204.push((arguments[i__20179__auto___47225]));

var G__47227 = (i__20179__auto___47225 + (1));
i__20179__auto___47225 = G__47227;
continue;
} else {
}
break;
}

var G__47221 = args47204.length;
switch (G__47221) {
case 1:
return jiyi.core.toast.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jiyi.core.toast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47204.length)].join('')));

}
});

jiyi.core.toast.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return jiyi.core.toast.call(null,msg,(1000));
});

jiyi.core.toast.cljs$core$IFn$_invoke$arity$2 = (function (msg,length){
return Materialize.toast(msg,length);
});

jiyi.core.toast.cljs$lang$maxFixedArity = 2;
jiyi.core.Card = (function jiyi$core$Card(user){
var map__47238 = jiyi.core.get_being_reviewed.call(null);
var map__47238__$1 = ((((!((map__47238 == null)))?((((map__47238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47238):map__47238);
var id = cljs.core.get.call(null,map__47238__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var photo = cljs.core.get.call(null,map__47238__$1,new cljs.core.Keyword(null,"photo","photo",-52852781));
var name = cljs.core.get.call(null,map__47238__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title = cljs.core.get.call(null,map__47238__$1,new cljs.core.Keyword(null,"title","title",636505583));
var dept = cljs.core.get.call(null,map__47238__$1,new cljs.core.Keyword(null,"dept","dept",1704352380));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-image.waves-effect.waves-block.waves-light","div.card-image.waves-effect.waves-block.waves-light",-332571532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.activator","img.activator",-43989097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),photo], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content.row","div.card-content.row",1969461445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"bottom"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.s6.left","div.s6.left",-1831342014),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__47238,map__47238__$1,id,photo,name,title,dept){
return (function (e){
cljs.core.prn.call(null,"Marking ",name,"with id",id,"as successfully reviewed");

jiyi.core.mark_as_successfully_reviewed.call(null,id);

return jiyi.core.set_next_user_to_review.call(null);
});})(map__47238,map__47238__$1,id,photo,name,title,dept))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.left","i.material-icons.left",-84364562),"thumb_up"], null),"I KNOW!!!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.s6.right","div.s6.right",1972949196),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__47238,map__47238__$1,id,photo,name,title,dept){
return (function (e){
cljs.core.prn.call(null,"Marking ",name,"with id",id,"as UNsuccessfully reviewed");

jiyi.core.mark_as_unsuccessfully_reviewed.call(null,id);

return jiyi.core.set_next_user_to_review.call(null);
});})(map__47238,map__47238__$1,id,photo,name,title,dept))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.left","i.material-icons.left",-84364562),"thumb_down"], null),"WHO?!?"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-reveal","div.card-reveal",-128797511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.card-title.grey-text.text-darken-4","span.card-title.grey-text.text-darken-4",-1348895902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.right","i.material-icons.right",-676616889),"close"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),dept], null)], null)], null)], null);
});
jiyi.core.Add_Klicksters = (function jiyi$core$Add_Klicksters(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>h2.center-align","div.row>h2.center-align",147693372),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.center-align>a","div.row.center-align>a",1171113510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#search",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect center waves-light btn valign"], null),"Add more Klicksters"], null)], null);
});
jiyi.core.Review = (function jiyi$core$Review(useratm){
if((cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.deref.call(null,useratm)))) && (cljs.core.seq.call(null,jiyi.core.all_users_to_review.call(null)))){
jiyi.core.set_next_user_to_review.call(null);
} else {
}

if(cljs.core.seq.call(null,cljs.core.deref.call(null,useratm))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.Card,useratm], null);
} else {
if(cljs.core.seq.call(null,jiyi.core.all_users_reviewed.call(null))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.Add_Klicksters,"There are no more Klicksters to review!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.center-align>a","div.row.center-align>a",1171113510),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return jiyi.core.reset_reviewed.call(null);
})], null),"Start over"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>h2.center-align","div.row>h2.center-align",147693372),"You have no Klicksters in your deck to review!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.center-align>a","div.row.center-align>a",1171113510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#search",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect center waves-light btn valign"], null),"Add more Klicksters"], null)], null);

}
}
});
jiyi.core.SearchResults = (function jiyi$core$SearchResults(results){
cljs.core.deref.call(null,jiyi.core.deck);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.collection","ul.collection",-1432226322),cljs.core.map.call(null,(function (result){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.collection-item","li.collection-item",-1652826771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(result)], null),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(result),(cljs.core.truth_(jiyi.core.user_in_deck_QMARK_.call(null,new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(result)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn-small.waves-effect.waves-light","a.btn-small.waves-effect.waves-light",-1799869564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
jiyi.core.remove_from_deck.call(null,new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(result));

jiyi.core.set_next_user_to_review.call(null);

return jiyi.core.toast.call(null,[cljs.core.str("Removed "),cljs.core.str(new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(result)),cljs.core.str(" from your list!")].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"delete"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn-small.waves-effect.waves-light","a.btn-small.waves-effect.waves-light",-1799869564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
jiyi.core.add_to_deck.call(null,new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(result));

return jiyi.core.toast.call(null,[cljs.core.str("Added "),cljs.core.str(new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(result)),cljs.core.str(" to your list!")].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"add"], null)], null))], null);
}),results)], null)], null);
});
jiyi.core.Search = (function jiyi$core$Search(){
var search_term = reagent.core.atom.call(null,"");
var search_results = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var search_channel = cljs.core.async.chan.call(null);
var _LT_search_user_delayed = jiyi.core.debounce.call(null,search_channel,(300));
cljs.core.add_watch.call(null,search_results,new cljs.core.Keyword(null,"search-results","search-results",306464634),((function (search_term,search_results,search_channel,_LT_search_user_delayed){
return (function (k,r,o,n){
return cljs.core.prn.call(null,k,n);
});})(search_term,search_results,search_channel,_LT_search_user_delayed))
);

var c__22597__auto___47304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___47304,search_term,search_results,search_channel,_LT_search_user_delayed){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___47304,search_term,search_results,search_channel,_LT_search_user_delayed){
return (function (state_47287){
var state_val_47288 = (state_47287[(1)]);
if((state_val_47288 === (1))){
var state_47287__$1 = state_47287;
var statearr_47290_47305 = state_47287__$1;
(statearr_47290_47305[(2)] = null);

(statearr_47290_47305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47288 === (2))){
var state_47287__$1 = state_47287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47287__$1,(4),_LT_search_user_delayed);
} else {
if((state_val_47288 === (3))){
var inst_47285 = (state_47287[(2)]);
var state_47287__$1 = state_47287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47287__$1,inst_47285);
} else {
if((state_val_47288 === (4))){
var inst_47276 = (state_47287[(2)]);
var inst_47277 = jiyi.core._LT_search_user.call(null,inst_47276);
var state_47287__$1 = state_47287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47287__$1,(5),inst_47277);
} else {
if((state_val_47288 === (5))){
var inst_47279 = (state_47287[(2)]);
var inst_47281 = cljs.core.prn.call(null,"search-user result:",inst_47279);
var inst_47282 = cljs.core.reset_BANG_.call(null,search_results,inst_47279);
var state_47287__$1 = (function (){var statearr_47291 = state_47287;
(statearr_47291[(7)] = inst_47281);

(statearr_47291[(8)] = inst_47282);

return statearr_47291;
})();
var statearr_47292_47310 = state_47287__$1;
(statearr_47292_47310[(2)] = null);

(statearr_47292_47310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__22597__auto___47304,search_term,search_results,search_channel,_LT_search_user_delayed))
;
return ((function (switch__22532__auto__,c__22597__auto___47304,search_term,search_results,search_channel,_LT_search_user_delayed){
return (function() {
var jiyi$core$Search_$_state_machine__22533__auto__ = null;
var jiyi$core$Search_$_state_machine__22533__auto____0 = (function (){
var statearr_47296 = [null,null,null,null,null,null,null,null,null];
(statearr_47296[(0)] = jiyi$core$Search_$_state_machine__22533__auto__);

(statearr_47296[(1)] = (1));

return statearr_47296;
});
var jiyi$core$Search_$_state_machine__22533__auto____1 = (function (state_47287){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_47287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e47297){if((e47297 instanceof Object)){
var ex__22536__auto__ = e47297;
var statearr_47298_47311 = state_47287;
(statearr_47298_47311[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47312 = state_47287;
state_47287 = G__47312;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
jiyi$core$Search_$_state_machine__22533__auto__ = function(state_47287){
switch(arguments.length){
case 0:
return jiyi$core$Search_$_state_machine__22533__auto____0.call(this);
case 1:
return jiyi$core$Search_$_state_machine__22533__auto____1.call(this,state_47287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jiyi$core$Search_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = jiyi$core$Search_$_state_machine__22533__auto____0;
jiyi$core$Search_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = jiyi$core$Search_$_state_machine__22533__auto____1;
return jiyi$core$Search_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___47304,search_term,search_results,search_channel,_LT_search_user_delayed))
})();
var state__22599__auto__ = (function (){var statearr_47301 = f__22598__auto__.call(null);
(statearr_47301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___47304);

return statearr_47301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___47304,search_term,search_results,search_channel,_LT_search_user_delayed))
);


return ((function (search_term,search_results,search_channel,_LT_search_user_delayed){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-field.col.s12","div.input-field.col.s12",-1865901144),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search Klickster",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,search_term),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (search_term,search_results,search_channel,_LT_search_user_delayed){
return (function (e){
var newval = e.target.value;
cljs.core.reset_BANG_.call(null,search_term,newval);

if(cljs.core.empty_QMARK_.call(null,newval)){
return null;
} else {
return cljs.core.async.put_BANG_.call(null,search_channel,newval);
}
});})(search_term,search_results,search_channel,_LT_search_user_delayed))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.SearchResults,cljs.core.deref.call(null,search_results)], null)], null);
});
;})(search_term,search_results,search_channel,_LT_search_user_delayed))
});
jiyi.core.Deck_List = (function jiyi$core$Deck_List(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.collection","ul.collection",-1432226322),cljs.core.map.call(null,(function (result){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.collection-item","li.collection-item",-1652826771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn-small.waves-effect.waves-light","a.btn-small.waves-effect.waves-light",-1799869564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
jiyi.core.remove_from_deck.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result));

jiyi.core.set_next_user_to_review.call(null);

return jiyi.core.toast.call(null,[cljs.core.str("Removed "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result)),cljs.core.str(" from your list!")].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"delete"], null)], null)], null);
}),jiyi.core.all_users_in_deck.call(null))], null)], null);
});
jiyi.core.review = (function jiyi$core$review(){
return jiyi.core.Review.call(null,jiyi.core.user);
});
jiyi.core.card = (function jiyi$core$card(){
return jiyi.core.Card.call(null,jiyi.core.user);
});
jiyi.core.search = (function jiyi$core$search(){
return jiyi.core.Search.call(null);
});
jiyi.core.decklist = (function jiyi$core$decklist(){
if(!(cljs.core.empty_QMARK_.call(null,jiyi.core.all_users_in_deck.call(null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.Deck_List], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.Add_Klicksters,"You have no Klicksters in your list!"], null);
}
});
jiyi.core.current_page = (function jiyi$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__25095__auto___47318 = (function (params__25096__auto__){
if(cljs.core.map_QMARK_.call(null,params__25096__auto__)){
var map__47315 = params__25096__auto__;
var map__47315__$1 = ((((!((map__47315 == null)))?((((map__47315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47315):map__47315);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,315,315,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25096__auto__)){
var vec__47317 = params__25096__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,315,315,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25095__auto___47318);

var action__25095__auto___47322 = (function (params__25096__auto__){
if(cljs.core.map_QMARK_.call(null,params__25096__auto__)){
var map__47319 = params__25096__auto__;
var map__47319__$1 = ((((!((map__47319 == null)))?((((map__47319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47319):map__47319);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,315,315,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25096__auto__)){
var vec__47321 = params__25096__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,315,315,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/review",action__25095__auto___47322);

var action__25095__auto___47326 = (function (params__25096__auto__){
if(cljs.core.map_QMARK_.call(null,params__25096__auto__)){
var map__47323 = params__25096__auto__;
var map__47323__$1 = ((((!((map__47323 == null)))?((((map__47323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47323):map__47323);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.search;},new cljs.core.Symbol("jiyi.core","search","jiyi.core/search",1722351255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"search","search",-1089495947,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,317,317,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.search)?jiyi.core.search.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25096__auto__)){
var vec__47325 = params__25096__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.search;},new cljs.core.Symbol("jiyi.core","search","jiyi.core/search",1722351255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"search","search",-1089495947,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,317,317,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.search)?jiyi.core.search.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/search",action__25095__auto___47326);

var action__25095__auto___47330 = (function (params__25096__auto__){
if(cljs.core.map_QMARK_.call(null,params__25096__auto__)){
var map__47327 = params__25096__auto__;
var map__47327__$1 = ((((!((map__47327 == null)))?((((map__47327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47327):map__47327);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.decklist;},new cljs.core.Symbol("jiyi.core","decklist","jiyi.core/decklist",-1195709337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"decklist","decklist",1126289089,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",15,1,319,319,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.decklist)?jiyi.core.decklist.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25096__auto__)){
var vec__47329 = params__25096__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.decklist;},new cljs.core.Symbol("jiyi.core","decklist","jiyi.core/decklist",-1195709337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"decklist","decklist",1126289089,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",15,1,319,319,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.decklist)?jiyi.core.decklist.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/list",action__25095__auto___47330);

jiyi.core.hook_browser_navigation_BANG_ = (function jiyi$core$hook_browser_navigation_BANG_(){
var G__47332 = (new goog.History());
goog.events.listen(G__47332,goog.history.EventType.NAVIGATE,((function (G__47332){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__47332))
);

G__47332.setEnabled(true);

return G__47332;
});
jiyi.core.mount_root = (function jiyi$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.current_page], null),document.getElementById("app"));
});
jiyi.core.init_BANG_ = (function jiyi$core$init_BANG_(){
jiyi.core.hook_browser_navigation_BANG_.call(null);

return jiyi.core.mount_root.call(null);
});
jiyi.core.test_user = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"IsObjectivesAdmin","IsObjectivesAdmin",778309088),new cljs.core.Keyword(null,"LaborCategoryID","LaborCategoryID",-1761579232),new cljs.core.Keyword(null,"FirstName","FirstName",-1791314207),new cljs.core.Keyword(null,"LaborRoleID","LaborRoleID",-1534020735),new cljs.core.Keyword(null,"OversightPercent","OversightPercent",-105028286),new cljs.core.Keyword(null,"WorkTeamID","WorkTeamID",-155001086),new cljs.core.Keyword(null,"BusinessUnitName","BusinessUnitName",-766614525),new cljs.core.Keyword(null,"IsCandidateAdmin","IsCandidateAdmin",1670452841),new cljs.core.Keyword(null,"CanCommunicateClient","CanCommunicateClient",-1056584055),new cljs.core.Keyword(null,"UserSystemID","UserSystemID",-1453641015),new cljs.core.Keyword(null,"Email","Email",-1481714678),new cljs.core.Keyword(null,"CreatedDate","CreatedDate",1835440810),new cljs.core.Keyword(null,"BillingTargetHoursPerYear","BillingTargetHoursPerYear",-790249461),new cljs.core.Keyword(null,"Title","Title",1956715563),new cljs.core.Keyword(null,"IsClient","IsClient",-1792364340),new cljs.core.Keyword(null,"IsScheduleConfirmationRulesEnforced","IsScheduleConfirmationRulesEnforced",-1717020530),new cljs.core.Keyword(null,"LastName","LastName",-1707106450),new cljs.core.Keyword(null,"IsScheduleAdmin","IsScheduleAdmin",-783187057),new cljs.core.Keyword(null,"UserName","UserName",1490596016),new cljs.core.Keyword(null,"Extension","Extension",488424400),new cljs.core.Keyword(null,"TimeZoneName","TimeZoneName",-1272657359),new cljs.core.Keyword(null,"IsNotAPerson","IsNotAPerson",1475104562),new cljs.core.Keyword(null,"UserID","UserID",2022713555),new cljs.core.Keyword(null,"KeyscanUpdated","KeyscanUpdated",-600794284),new cljs.core.Keyword(null,"HasDirectReports","HasDirectReports",58576788),new cljs.core.Keyword(null,"IsAdmin","IsAdmin",1726885333),new cljs.core.Keyword(null,"BusinessUnitID","BusinessUnitID",-1267115530),new cljs.core.Keyword(null,"CountryID","CountryID",398406230),new cljs.core.Keyword(null,"CompanyBusinessUnitID","CompanyBusinessUnitID",795779990),new cljs.core.Keyword(null,"TimeZoneID","TimeZoneID",934371286),new cljs.core.Keyword(null,"PhotoPath","PhotoPath",192483639),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Roles","Roles",1215530104),new cljs.core.Keyword(null,"CompanyBusinessUnitName","CompanyBusinessUnitName",921589016),new cljs.core.Keyword(null,"IsWeeklyReviewAdmin","IsWeeklyReviewAdmin",955550873),new cljs.core.Keyword(null,"Enabled","Enabled",-114192199),new cljs.core.Keyword(null,"TagName","TagName",-1558928326),new cljs.core.Keyword(null,"Supervisors","Supervisors",1808123355),new cljs.core.Keyword(null,"Status","Status",-1212030049)],[false,"TECHNCAL","Max","APPLDEVL",(25),"101","KH4 Tech",false,false,(80),"mgerlach@klick.com","/Date(1370232000000-0000)/",(1650),"Senior Mobile Developer",false,true,"Gerlach",false,"mgerlach","2381","America/Toronto",false,(4966),"/Date(1445623000000-0000)/",false,false,(24),"CA",(1),(90),"/local-instance/staff images/4966_2688_sq.jpg","Max Gerlach",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"RoleID","RoleID",-1466497308),"DWFullAccess",new cljs.core.Keyword(null,"IsBusinessUnitScope","IsBusinessUnitScope",-1284988389),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"RoleID","RoleID",-1466497308),"ws",new cljs.core.Keyword(null,"IsBusinessUnitScope","IsBusinessUnitScope",-1284988389),false], null)], null),"Klick Health",false,true,"Max_Gerlach",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3642),(3990),(4363),(3446),(3438),(3424),(3449)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"CanSMS","CanSMS",-520271424),false,new cljs.core.Keyword(null,"IsOnGenome","IsOnGenome",1400999115),true,new cljs.core.Keyword(null,"CanGTalk","CanGTalk",-1527015326),false], null)]);

//# sourceMappingURL=core.js.map