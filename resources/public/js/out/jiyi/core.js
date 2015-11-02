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
if(typeof jiyi.core.deck !== 'undefined'){
} else {
jiyi.core.deck = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"to-review","to-review",1700427985),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"being-reviewed","being-reviewed",-528866688),null], null));
}
jiyi.core.extract_content = (function jiyi$core$extract_content(){
return cljs.core.map.call(null,(function (p1__59475_SHARP_){
return new cljs.core.Keyword(null,"Entries","Entries",1657497932).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__59475_SHARP_));
}));
});
jiyi.core._LT_get_klickster = (function jiyi$core$_LT_get_klickster(userid){
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
jiyi.core.all_to_review = (function jiyi$core$all_to_review(){
return new cljs.core.Keyword(null,"to-review","to-review",1700427985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jiyi.core.deck));
});
jiyi.core.all_reviewed = (function jiyi$core$all_reviewed(){
return new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,jiyi.core.deck));
});
jiyi.core.set_reviewed = (function jiyi$core$set_reviewed(val){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.assoc,new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500),val);
});
jiyi.core.set_to_review = (function jiyi$core$set_to_review(val){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.assoc,new cljs.core.Keyword(null,"to-review","to-review",1700427985),val);
});
jiyi.core.remove_from_reviewed = (function jiyi$core$remove_from_reviewed(userid){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500)], null),(function (p1__59476_SHARP_){
return cljs.core.filterv.call(null,(function (m){
return cljs.core.not_EQ_.call(null,userid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m));
}),p1__59476_SHARP_);
}));
});
jiyi.core.remove_from_to_review = (function jiyi$core$remove_from_to_review(userid){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-review","to-review",1700427985)], null),(function (p1__59477_SHARP_){
return cljs.core.filterv.call(null,(function (m){
return cljs.core.not_EQ_.call(null,userid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m));
}),p1__59477_SHARP_);
}));
});
jiyi.core.add_to_reviewed = (function jiyi$core$add_to_reviewed(item){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500)], null),cljs.core.conj,item);
});
jiyi.core.add_to_to_review = (function jiyi$core$add_to_to_review(item){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-review","to-review",1700427985)], null),cljs.core.conj,item);
});
jiyi.core.remove_from_deck = (function jiyi$core$remove_from_deck(userid){
jiyi.core.remove_from_reviewed.call(null,userid);

return jiyi.core.remove_from_to_review.call(null,userid);
});
jiyi.core.all_in_deck = (function jiyi$core$all_in_deck(){
return cljs.core.concat.call(null,jiyi.core.all_to_review.call(null),jiyi.core.all_reviewed.call(null));
});
jiyi.core.get_from_to_review = (function jiyi$core$get_from_to_review(userid){
return cljs.core.first.call(null,cljs.core.filterv.call(null,(function (p1__59478_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__59478_SHARP_),userid);
}),jiyi.core.all_to_review.call(null)));
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
jiyi.core.in_deck_QMARK_ = (function jiyi$core$in_deck_QMARK_(userid){
return cljs.core.some.call(null,(function (p1__59479_SHARP_){
return cljs.core._EQ_.call(null,userid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__59479_SHARP_));
}),jiyi.core.all_in_deck.call(null));
});
jiyi.core.reset_reviewed = (function jiyi$core$reset_reviewed(){
jiyi.core.set_to_review.call(null,jiyi.core.all_reviewed.call(null));

return jiyi.core.set_reviewed.call(null,cljs.core.PersistentVector.EMPTY);
});
jiyi.core.set_next_to_review = (function jiyi$core$set_next_to_review(){
var temp__4425__auto__ = jiyi.core.all_to_review.call(null);
if(cljs.core.truth_(temp__4425__auto__)){
var users = temp__4425__auto__;
return jiyi.core.set_to_being_reviewed.call(null,cljs.core.first.call(null,users));
} else {
return null;
}
});
jiyi.core.add_to_deck = (function jiyi$core$add_to_deck(userid){
var c__22597__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto__){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto__){
return (function (state_59503){
var state_val_59504 = (state_59503[(1)]);
if((state_val_59504 === (1))){
var inst_59496 = jiyi.core._LT_get_klickster.call(null,userid);
var state_59503__$1 = state_59503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59503__$1,(2),inst_59496);
} else {
if((state_val_59504 === (2))){
var inst_59498 = (state_59503[(2)]);
var inst_59499 = cljs.core.first.call(null,inst_59498);
var inst_59500 = jiyi.core.json__GT_userdetails.call(null,inst_59499);
var inst_59501 = jiyi.core.add_to_to_review.call(null,inst_59500);
var state_59503__$1 = state_59503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59503__$1,inst_59501);
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
var statearr_59508 = [null,null,null,null,null,null,null];
(statearr_59508[(0)] = jiyi$core$add_to_deck_$_state_machine__22533__auto__);

(statearr_59508[(1)] = (1));

return statearr_59508;
});
var jiyi$core$add_to_deck_$_state_machine__22533__auto____1 = (function (state_59503){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_59503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e59509){if((e59509 instanceof Object)){
var ex__22536__auto__ = e59509;
var statearr_59510_59512 = state_59503;
(statearr_59510_59512[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59513 = state_59503;
state_59503 = G__59513;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
jiyi$core$add_to_deck_$_state_machine__22533__auto__ = function(state_59503){
switch(arguments.length){
case 0:
return jiyi$core$add_to_deck_$_state_machine__22533__auto____0.call(this);
case 1:
return jiyi$core$add_to_deck_$_state_machine__22533__auto____1.call(this,state_59503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jiyi$core$add_to_deck_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = jiyi$core$add_to_deck_$_state_machine__22533__auto____0;
jiyi$core$add_to_deck_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = jiyi$core$add_to_deck_$_state_machine__22533__auto____1;
return jiyi$core$add_to_deck_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto__))
})();
var state__22599__auto__ = (function (){var statearr_59511 = f__22598__auto__.call(null);
(statearr_59511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto__);

return statearr_59511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto__))
);

return c__22597__auto__;
});
jiyi.core.debounce = (function jiyi$core$debounce(in$,ms){

var out = cljs.core.async.chan.call(null);
var c__22597__auto___59696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___59696,out){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___59696,out){
return (function (state_59658){
var state_val_59659 = (state_59658[(1)]);
if((state_val_59659 === (7))){
var inst_59610 = (state_59658[(2)]);
var state_59658__$1 = state_59658;
var statearr_59660_59697 = state_59658__$1;
(statearr_59660_59697[(2)] = inst_59610);

(statearr_59660_59697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (20))){
var state_59658__$1 = state_59658;
var statearr_59661_59698 = state_59658__$1;
(statearr_59661_59698[(2)] = null);

(statearr_59661_59698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (1))){
var inst_59605 = null;
var state_59658__$1 = (function (){var statearr_59662 = state_59658;
(statearr_59662[(7)] = inst_59605);

return statearr_59662;
})();
var statearr_59663_59699 = state_59658__$1;
(statearr_59663_59699[(2)] = null);

(statearr_59663_59699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (4))){
var state_59658__$1 = state_59658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59658__$1,(7),in$);
} else {
if((state_val_59659 === (15))){
var inst_59613 = (state_59658[(8)]);
var inst_59624 = (state_59658[(9)]);
var inst_59641 = cljs.core.nth.call(null,inst_59624,(0),null);
var state_59658__$1 = (function (){var statearr_59664 = state_59658;
(statearr_59664[(10)] = inst_59641);

return statearr_59664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59658__$1,(18),out,inst_59613);
} else {
if((state_val_59659 === (21))){
var inst_59650 = (state_59658[(2)]);
var state_59658__$1 = state_59658;
var statearr_59665_59700 = state_59658__$1;
(statearr_59665_59700[(2)] = inst_59650);

(statearr_59665_59700[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (13))){
var inst_59634 = cljs.core.async.close_BANG_.call(null,out);
var state_59658__$1 = state_59658;
var statearr_59666_59701 = state_59658__$1;
(statearr_59666_59701[(2)] = inst_59634);

(statearr_59666_59701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (6))){
var inst_59614 = (state_59658[(11)]);
var inst_59613 = (state_59658[(2)]);
var inst_59614__$1 = cljs.core.async.timeout.call(null,ms);
var inst_59620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59621 = [in$,inst_59614__$1];
var inst_59622 = (new cljs.core.PersistentVector(null,2,(5),inst_59620,inst_59621,null));
var state_59658__$1 = (function (){var statearr_59667 = state_59658;
(statearr_59667[(8)] = inst_59613);

(statearr_59667[(11)] = inst_59614__$1);

return statearr_59667;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_59658__$1,(8),inst_59622);
} else {
if((state_val_59659 === (17))){
var inst_59652 = (state_59658[(2)]);
var state_59658__$1 = state_59658;
var statearr_59668_59702 = state_59658__$1;
(statearr_59668_59702[(2)] = inst_59652);

(statearr_59668_59702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (3))){
var inst_59656 = (state_59658[(2)]);
var state_59658__$1 = state_59658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59658__$1,inst_59656);
} else {
if((state_val_59659 === (12))){
var inst_59630 = (state_59658[(12)]);
var inst_59605 = inst_59630;
var state_59658__$1 = (function (){var statearr_59669 = state_59658;
(statearr_59669[(7)] = inst_59605);

return statearr_59669;
})();
var statearr_59670_59703 = state_59658__$1;
(statearr_59670_59703[(2)] = null);

(statearr_59670_59703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (2))){
var inst_59605 = (state_59658[(7)]);
var inst_59607 = (inst_59605 == null);
var state_59658__$1 = state_59658;
if(cljs.core.truth_(inst_59607)){
var statearr_59671_59704 = state_59658__$1;
(statearr_59671_59704[(1)] = (4));

} else {
var statearr_59672_59705 = state_59658__$1;
(statearr_59672_59705[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (19))){
var inst_59625 = (state_59658[(13)]);
var state_59658__$1 = state_59658;
var statearr_59673_59706 = state_59658__$1;
(statearr_59673_59706[(2)] = inst_59625);

(statearr_59673_59706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (11))){
var inst_59654 = (state_59658[(2)]);
var state_59658__$1 = state_59658;
var statearr_59674_59707 = state_59658__$1;
(statearr_59674_59707[(2)] = inst_59654);

(statearr_59674_59707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (9))){
var inst_59624 = (state_59658[(9)]);
var inst_59630 = (state_59658[(12)]);
var inst_59630__$1 = cljs.core.nth.call(null,inst_59624,(0),null);
var state_59658__$1 = (function (){var statearr_59675 = state_59658;
(statearr_59675[(12)] = inst_59630__$1);

return statearr_59675;
})();
if(cljs.core.truth_(inst_59630__$1)){
var statearr_59676_59708 = state_59658__$1;
(statearr_59676_59708[(1)] = (12));

} else {
var statearr_59677_59709 = state_59658__$1;
(statearr_59677_59709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (5))){
var inst_59605 = (state_59658[(7)]);
var state_59658__$1 = state_59658;
var statearr_59678_59710 = state_59658__$1;
(statearr_59678_59710[(2)] = inst_59605);

(statearr_59678_59710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (14))){
var inst_59636 = (state_59658[(2)]);
var state_59658__$1 = state_59658;
var statearr_59679_59711 = state_59658__$1;
(statearr_59679_59711[(2)] = inst_59636);

(statearr_59679_59711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (16))){
var inst_59626 = (state_59658[(14)]);
var inst_59646 = cljs.core._EQ_.call(null,inst_59626,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_59658__$1 = state_59658;
if(inst_59646){
var statearr_59680_59712 = state_59658__$1;
(statearr_59680_59712[(1)] = (19));

} else {
var statearr_59681_59713 = state_59658__$1;
(statearr_59681_59713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (10))){
var inst_59614 = (state_59658[(11)]);
var inst_59626 = (state_59658[(14)]);
var inst_59638 = cljs.core._EQ_.call(null,inst_59626,inst_59614);
var state_59658__$1 = state_59658;
if(inst_59638){
var statearr_59682_59714 = state_59658__$1;
(statearr_59682_59714[(1)] = (15));

} else {
var statearr_59683_59715 = state_59658__$1;
(statearr_59683_59715[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (18))){
var inst_59643 = (state_59658[(2)]);
var inst_59605 = null;
var state_59658__$1 = (function (){var statearr_59684 = state_59658;
(statearr_59684[(7)] = inst_59605);

(statearr_59684[(15)] = inst_59643);

return statearr_59684;
})();
var statearr_59685_59716 = state_59658__$1;
(statearr_59685_59716[(2)] = null);

(statearr_59685_59716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59659 === (8))){
var inst_59624 = (state_59658[(9)]);
var inst_59626 = (state_59658[(14)]);
var inst_59624__$1 = (state_59658[(2)]);
var inst_59625 = cljs.core.nth.call(null,inst_59624__$1,(0),null);
var inst_59626__$1 = cljs.core.nth.call(null,inst_59624__$1,(1),null);
var inst_59627 = cljs.core._EQ_.call(null,inst_59626__$1,in$);
var state_59658__$1 = (function (){var statearr_59686 = state_59658;
(statearr_59686[(13)] = inst_59625);

(statearr_59686[(9)] = inst_59624__$1);

(statearr_59686[(14)] = inst_59626__$1);

return statearr_59686;
})();
if(inst_59627){
var statearr_59687_59717 = state_59658__$1;
(statearr_59687_59717[(1)] = (9));

} else {
var statearr_59688_59718 = state_59658__$1;
(statearr_59688_59718[(1)] = (10));

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
});})(c__22597__auto___59696,out))
;
return ((function (switch__22532__auto__,c__22597__auto___59696,out){
return (function() {
var jiyi$core$debounce_$_state_machine__22533__auto__ = null;
var jiyi$core$debounce_$_state_machine__22533__auto____0 = (function (){
var statearr_59692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59692[(0)] = jiyi$core$debounce_$_state_machine__22533__auto__);

(statearr_59692[(1)] = (1));

return statearr_59692;
});
var jiyi$core$debounce_$_state_machine__22533__auto____1 = (function (state_59658){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_59658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e59693){if((e59693 instanceof Object)){
var ex__22536__auto__ = e59693;
var statearr_59694_59719 = state_59658;
(statearr_59694_59719[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59720 = state_59658;
state_59658 = G__59720;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
jiyi$core$debounce_$_state_machine__22533__auto__ = function(state_59658){
switch(arguments.length){
case 0:
return jiyi$core$debounce_$_state_machine__22533__auto____0.call(this);
case 1:
return jiyi$core$debounce_$_state_machine__22533__auto____1.call(this,state_59658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jiyi$core$debounce_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = jiyi$core$debounce_$_state_machine__22533__auto____0;
jiyi$core$debounce_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = jiyi$core$debounce_$_state_machine__22533__auto____1;
return jiyi$core$debounce_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___59696,out))
})();
var state__22599__auto__ = (function (){var statearr_59695 = f__22598__auto__.call(null);
(statearr_59695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___59696);

return statearr_59695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___59696,out))
);


return out;
});
jiyi.core.toast = (function jiyi$core$toast(var_args){
var args59721 = [];
var len__20178__auto___59724 = arguments.length;
var i__20179__auto___59725 = (0);
while(true){
if((i__20179__auto___59725 < len__20178__auto___59724)){
args59721.push((arguments[i__20179__auto___59725]));

var G__59726 = (i__20179__auto___59725 + (1));
i__20179__auto___59725 = G__59726;
continue;
} else {
}
break;
}

var G__59723 = args59721.length;
switch (G__59723) {
case 1:
return jiyi.core.toast.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jiyi.core.toast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59721.length)].join('')));

}
});

jiyi.core.toast.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return jiyi.core.toast.call(null,msg,(1000));
});

jiyi.core.toast.cljs$core$IFn$_invoke$arity$2 = (function (msg,length){
return Materialize.toast(msg,length);
});

jiyi.core.toast.cljs$lang$maxFixedArity = 2;
jiyi.core.Card = (function jiyi$core$Card(){
var map__59730 = jiyi.core.get_being_reviewed.call(null);
var map__59730__$1 = ((((!((map__59730 == null)))?((((map__59730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59730):map__59730);
var id = cljs.core.get.call(null,map__59730__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var photo = cljs.core.get.call(null,map__59730__$1,new cljs.core.Keyword(null,"photo","photo",-52852781));
var name = cljs.core.get.call(null,map__59730__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title = cljs.core.get.call(null,map__59730__$1,new cljs.core.Keyword(null,"title","title",636505583));
var dept = cljs.core.get.call(null,map__59730__$1,new cljs.core.Keyword(null,"dept","dept",1704352380));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-image.waves-effect.waves-block.waves-light","div.card-image.waves-effect.waves-block.waves-light",-332571532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.activator","img.activator",-43989097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),photo], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content.row","div.card-content.row",1969461445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"bottom"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.s6.left","div.s6.left",-1831342014),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__59730,map__59730__$1,id,photo,name,title,dept){
return (function (e){
cljs.core.prn.call(null,"Marking ",name,"with id",id,"as successfully reviewed");

jiyi.core.mark_as_successfully_reviewed.call(null,id);

return jiyi.core.set_next_to_review.call(null);
});})(map__59730,map__59730__$1,id,photo,name,title,dept))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.left","i.material-icons.left",-84364562),"thumb_up"], null),"I KNOW!!!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.s6.right","div.s6.right",1972949196),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__59730,map__59730__$1,id,photo,name,title,dept){
return (function (e){
cljs.core.prn.call(null,"Marking ",name,"with id",id,"as UNsuccessfully reviewed");

jiyi.core.mark_as_unsuccessfully_reviewed.call(null,id);

return jiyi.core.set_next_to_review.call(null);
});})(map__59730,map__59730__$1,id,photo,name,title,dept))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.left","i.material-icons.left",-84364562),"thumb_down"], null),"WHO?!?"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-reveal","div.card-reveal",-128797511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.card-title.grey-text.text-darken-4","span.card-title.grey-text.text-darken-4",-1348895902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.right","i.material-icons.right",-676616889),"close"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),dept], null)], null)], null)], null);
});
jiyi.core.Add_Klicksters = (function jiyi$core$Add_Klicksters(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>h2.center-align","div.row>h2.center-align",147693372),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.center-align>a","div.row.center-align>a",1171113510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#search",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect center waves-light btn valign"], null),"Add more Klicksters"], null)], null);
});
jiyi.core.Review = (function jiyi$core$Review(){
if((cljs.core.not.call(null,jiyi.core.get_being_reviewed.call(null))) && (cljs.core.seq.call(null,jiyi.core.all_to_review.call(null)))){
jiyi.core.set_next_to_review.call(null);
} else {
}

if(cljs.core.seq.call(null,jiyi.core.get_being_reviewed.call(null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.Card], null);
} else {
if(cljs.core.seq.call(null,jiyi.core.all_reviewed.call(null))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.Add_Klicksters,"There are no more Klicksters to review!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.center-align>a","div.row.center-align>a",1171113510),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return jiyi.core.reset_reviewed.call(null);
})], null),"Start over"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>h2.center-align","div.row>h2.center-align",147693372),"You have no Klicksters in your deck to review!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.center-align>a","div.row.center-align>a",1171113510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#search",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect center waves-light btn valign"], null),"Add more Klicksters"], null)], null);

}
}
});
jiyi.core.SearchResults = (function jiyi$core$SearchResults(results){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.collection","ul.collection",-1432226322),cljs.core.doall.call(null,cljs.core.map.call(null,(function (result){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.collection-item","li.collection-item",-1652826771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(result)], null),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(result),(cljs.core.truth_(jiyi.core.in_deck_QMARK_.call(null,new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(result)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn-small.waves-effect.waves-light","a.btn-small.waves-effect.waves-light",-1799869564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
jiyi.core.remove_from_deck.call(null,new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(result));

jiyi.core.set_next_to_review.call(null);

return jiyi.core.toast.call(null,[cljs.core.str("Removed "),cljs.core.str(new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(result)),cljs.core.str(" from your list!")].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"delete"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn-small.waves-effect.waves-light","a.btn-small.waves-effect.waves-light",-1799869564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
jiyi.core.add_to_deck.call(null,new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(result));

return jiyi.core.toast.call(null,[cljs.core.str("Added "),cljs.core.str(new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(result)),cljs.core.str(" to your list!")].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"add"], null)], null))], null);
}),results))], null)], null);
});
jiyi.core.Search = (function jiyi$core$Search(){
var search_term = reagent.core.atom.call(null,"");
var search_results = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var search_channel = cljs.core.async.chan.call(null);
var _LT_search_user_delayed = jiyi.core.debounce.call(null,search_channel,(300));
var c__22597__auto___59778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___59778,search_term,search_results,search_channel,_LT_search_user_delayed){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___59778,search_term,search_results,search_channel,_LT_search_user_delayed){
return (function (state_59766){
var state_val_59767 = (state_59766[(1)]);
if((state_val_59767 === (1))){
var state_59766__$1 = state_59766;
var statearr_59768_59779 = state_59766__$1;
(statearr_59768_59779[(2)] = null);

(statearr_59768_59779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59767 === (2))){
var state_59766__$1 = state_59766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59766__$1,(4),_LT_search_user_delayed);
} else {
if((state_val_59767 === (3))){
var inst_59764 = (state_59766[(2)]);
var state_59766__$1 = state_59766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59766__$1,inst_59764);
} else {
if((state_val_59767 === (4))){
var inst_59757 = (state_59766[(2)]);
var inst_59758 = jiyi.core._LT_search_user.call(null,inst_59757);
var state_59766__$1 = state_59766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59766__$1,(5),inst_59758);
} else {
if((state_val_59767 === (5))){
var inst_59760 = (state_59766[(2)]);
var inst_59761 = cljs.core.reset_BANG_.call(null,search_results,inst_59760);
var state_59766__$1 = (function (){var statearr_59769 = state_59766;
(statearr_59769[(7)] = inst_59761);

return statearr_59769;
})();
var statearr_59770_59780 = state_59766__$1;
(statearr_59770_59780[(2)] = null);

(statearr_59770_59780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__22597__auto___59778,search_term,search_results,search_channel,_LT_search_user_delayed))
;
return ((function (switch__22532__auto__,c__22597__auto___59778,search_term,search_results,search_channel,_LT_search_user_delayed){
return (function() {
var jiyi$core$Search_$_state_machine__22533__auto__ = null;
var jiyi$core$Search_$_state_machine__22533__auto____0 = (function (){
var statearr_59774 = [null,null,null,null,null,null,null,null];
(statearr_59774[(0)] = jiyi$core$Search_$_state_machine__22533__auto__);

(statearr_59774[(1)] = (1));

return statearr_59774;
});
var jiyi$core$Search_$_state_machine__22533__auto____1 = (function (state_59766){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_59766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e59775){if((e59775 instanceof Object)){
var ex__22536__auto__ = e59775;
var statearr_59776_59781 = state_59766;
(statearr_59776_59781[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59782 = state_59766;
state_59766 = G__59782;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
jiyi$core$Search_$_state_machine__22533__auto__ = function(state_59766){
switch(arguments.length){
case 0:
return jiyi$core$Search_$_state_machine__22533__auto____0.call(this);
case 1:
return jiyi$core$Search_$_state_machine__22533__auto____1.call(this,state_59766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jiyi$core$Search_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = jiyi$core$Search_$_state_machine__22533__auto____0;
jiyi$core$Search_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = jiyi$core$Search_$_state_machine__22533__auto____1;
return jiyi$core$Search_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___59778,search_term,search_results,search_channel,_LT_search_user_delayed))
})();
var state__22599__auto__ = (function (){var statearr_59777 = f__22598__auto__.call(null);
(statearr_59777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___59778);

return statearr_59777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___59778,search_term,search_results,search_channel,_LT_search_user_delayed))
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
], null)], null)], null)], null),jiyi.core.SearchResults.call(null,cljs.core.deref.call(null,search_results))], null);
});
;})(search_term,search_results,search_channel,_LT_search_user_delayed))
});
jiyi.core.Deck_List = (function jiyi$core$Deck_List(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.collection","ul.collection",-1432226322),cljs.core.doall.call(null,cljs.core.map.call(null,(function (result){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.collection-item","li.collection-item",-1652826771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn-small.waves-effect.waves-light","a.btn-small.waves-effect.waves-light",-1799869564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
jiyi.core.remove_from_deck.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result));

jiyi.core.set_next_to_review.call(null);

return jiyi.core.toast.call(null,[cljs.core.str("Removed "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result)),cljs.core.str(" from your list!")].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"delete"], null)], null)], null);
}),jiyi.core.all_in_deck.call(null)))], null)], null);
});
jiyi.core.review = (function jiyi$core$review(){
return jiyi.core.Review.call(null);
});
jiyi.core.card = (function jiyi$core$card(){
return jiyi.core.Card.call(null);
});
jiyi.core.search = (function jiyi$core$search(){
return jiyi.core.Search.call(null);
});
jiyi.core.decklist = (function jiyi$core$decklist(){
if(!(cljs.core.empty_QMARK_.call(null,jiyi.core.all_in_deck.call(null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.Deck_List], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.Add_Klicksters,"You have no Klicksters in your list!"], null);
}
});
jiyi.core.current_page = (function jiyi$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__25095__auto___59786 = (function (params__25096__auto__){
if(cljs.core.map_QMARK_.call(null,params__25096__auto__)){
var map__59783 = params__25096__auto__;
var map__59783__$1 = ((((!((map__59783 == null)))?((((map__59783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59783):map__59783);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"src/cljs/jiyi/core.cljs",13,1,296,296,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25096__auto__)){
var vec__59785 = params__25096__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"src/cljs/jiyi/core.cljs",13,1,296,296,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25095__auto___59786);

var action__25095__auto___59790 = (function (params__25096__auto__){
if(cljs.core.map_QMARK_.call(null,params__25096__auto__)){
var map__59787 = params__25096__auto__;
var map__59787__$1 = ((((!((map__59787 == null)))?((((map__59787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59787):map__59787);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"src/cljs/jiyi/core.cljs",13,1,296,296,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25096__auto__)){
var vec__59789 = params__25096__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"src/cljs/jiyi/core.cljs",13,1,296,296,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/review",action__25095__auto___59790);

var action__25095__auto___59794 = (function (params__25096__auto__){
if(cljs.core.map_QMARK_.call(null,params__25096__auto__)){
var map__59791 = params__25096__auto__;
var map__59791__$1 = ((((!((map__59791 == null)))?((((map__59791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59791):map__59791);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.search;},new cljs.core.Symbol("jiyi.core","search","jiyi.core/search",1722351255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"search","search",-1089495947,null),"src/cljs/jiyi/core.cljs",13,1,298,298,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.search)?jiyi.core.search.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25096__auto__)){
var vec__59793 = params__25096__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.search;},new cljs.core.Symbol("jiyi.core","search","jiyi.core/search",1722351255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"search","search",-1089495947,null),"src/cljs/jiyi/core.cljs",13,1,298,298,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.search)?jiyi.core.search.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/search",action__25095__auto___59794);

var action__25095__auto___59798 = (function (params__25096__auto__){
if(cljs.core.map_QMARK_.call(null,params__25096__auto__)){
var map__59795 = params__25096__auto__;
var map__59795__$1 = ((((!((map__59795 == null)))?((((map__59795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59795):map__59795);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.decklist;},new cljs.core.Symbol("jiyi.core","decklist","jiyi.core/decklist",-1195709337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"decklist","decklist",1126289089,null),"src/cljs/jiyi/core.cljs",15,1,300,300,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.decklist)?jiyi.core.decklist.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25096__auto__)){
var vec__59797 = params__25096__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.decklist;},new cljs.core.Symbol("jiyi.core","decklist","jiyi.core/decklist",-1195709337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"decklist","decklist",1126289089,null),"src/cljs/jiyi/core.cljs",15,1,300,300,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.decklist)?jiyi.core.decklist.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/list",action__25095__auto___59798);

jiyi.core.hook_browser_navigation_BANG_ = (function jiyi$core$hook_browser_navigation_BANG_(){
var G__59800 = (new goog.History());
goog.events.listen(G__59800,goog.history.EventType.NAVIGATE,((function (G__59800){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__59800))
);

G__59800.setEnabled(true);

return G__59800;
});
jiyi.core.mount_root = (function jiyi$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.current_page], null),document.getElementById("app"));
});
jiyi.core.init_BANG_ = (function jiyi$core$init_BANG_(){
jiyi.core.hook_browser_navigation_BANG_.call(null);

return jiyi.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map