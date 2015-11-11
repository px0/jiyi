// Compiled by ClojureScript 1.7.122 {}
goog.provide('jiyi.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('timothypratley.reanimated.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('alandipert.storage_atom');
goog.require('goog.History');
goog.require('goog.events');
if(typeof jiyi.core.deck !== 'undefined'){
} else {
jiyi.core.deck = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"to-review","to-review",1700427985),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"being-reviewed","being-reviewed",-528866688),null], null)),new cljs.core.Keyword(null,"local-deck","local-deck",1857342905));
}
jiyi.core.extract_content = (function jiyi$core$extract_content(){
return cljs.core.map.call(null,(function (p1__71289_SHARP_){
return new cljs.core.Keyword(null,"Entries","Entries",1657497932).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__71289_SHARP_));
}));
});
jiyi.core._LT_get_klickster = (function jiyi$core$_LT_get_klickster(userid){
return cljs_http.client.jsonp.call(null,"https://genome.klick.com:443/api/User.json",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, ["UserID",userid], null),new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null,(1),jiyi.core.extract_content.call(null))], null));
});
jiyi.core._LT_search_user = (function jiyi$core$_LT_search_user(keyword){
return cljs_http.client.jsonp.call(null,"https://genome.klick.com:443/api/User.json",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ForAutocompleter","ForAutocompleter",-1588828428),true,new cljs.core.Keyword(null,"Enabled","Enabled",-114192199),true,new cljs.core.Keyword(null,"IsNotAPerson","IsNotAPerson",1475104562),false,new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),keyword], null),new cljs.core.Keyword(null,"channel","channel",734187692),cljs.core.async.chan.call(null,(1),jiyi.core.extract_content.call(null))], null));
});
jiyi.core.json__GT_userdetails = (function jiyi$core$json__GT_userdetails(json){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(json),new cljs.core.Keyword(null,"photo","photo",-52852781),[cljs.core.str("https://genome.klick.com"),cljs.core.str(new cljs.core.Keyword(null,"PhotoPath","PhotoPath",192483639).cljs$core$IFn$_invoke$arity$1(json))].join(''),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(json),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"Title","Title",1956715563).cljs$core$IFn$_invoke$arity$1(json),new cljs.core.Keyword(null,"genomedetails","genomedetails",-554674135),[cljs.core.str("https://genome.klick.com/user/index.html#/"),cljs.core.str(new cljs.core.Keyword(null,"UserID","UserID",2022713555).cljs$core$IFn$_invoke$arity$1(json))].join(''),new cljs.core.Keyword(null,"dept","dept",1704352380),new cljs.core.Keyword(null,"BusinessUnitName","BusinessUnitName",-766614525).cljs$core$IFn$_invoke$arity$1(json)], null);
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
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reviewed","reviewed",-1938817500)], null),(function (p1__71290_SHARP_){
return cljs.core.filterv.call(null,(function (m){
return cljs.core.not_EQ_.call(null,userid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m));
}),p1__71290_SHARP_);
}));
});
jiyi.core.remove_from_to_review = (function jiyi$core$remove_from_to_review(userid){
return cljs.core.swap_BANG_.call(null,jiyi.core.deck,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-review","to-review",1700427985)], null),(function (p1__71291_SHARP_){
return cljs.core.filterv.call(null,(function (m){
return cljs.core.not_EQ_.call(null,userid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m));
}),p1__71291_SHARP_);
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
return cljs.core.first.call(null,cljs.core.filterv.call(null,(function (p1__71292_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__71292_SHARP_),userid);
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
return cljs.core.some.call(null,(function (p1__71293_SHARP_){
return cljs.core._EQ_.call(null,userid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__71293_SHARP_));
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
var c__22501__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22501__auto__){
return (function (){
var f__22502__auto__ = (function (){var switch__22436__auto__ = ((function (c__22501__auto__){
return (function (state_71317){
var state_val_71318 = (state_71317[(1)]);
if((state_val_71318 === (1))){
var inst_71310 = jiyi.core._LT_get_klickster.call(null,userid);
var state_71317__$1 = state_71317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71317__$1,(2),inst_71310);
} else {
if((state_val_71318 === (2))){
var inst_71312 = (state_71317[(2)]);
var inst_71313 = cljs.core.first.call(null,inst_71312);
var inst_71314 = jiyi.core.json__GT_userdetails.call(null,inst_71313);
var inst_71315 = jiyi.core.add_to_to_review.call(null,inst_71314);
var state_71317__$1 = state_71317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71317__$1,inst_71315);
} else {
return null;
}
}
});})(c__22501__auto__))
;
return ((function (switch__22436__auto__,c__22501__auto__){
return (function() {
var jiyi$core$add_to_deck_$_state_machine__22437__auto__ = null;
var jiyi$core$add_to_deck_$_state_machine__22437__auto____0 = (function (){
var statearr_71322 = [null,null,null,null,null,null,null];
(statearr_71322[(0)] = jiyi$core$add_to_deck_$_state_machine__22437__auto__);

(statearr_71322[(1)] = (1));

return statearr_71322;
});
var jiyi$core$add_to_deck_$_state_machine__22437__auto____1 = (function (state_71317){
while(true){
var ret_value__22438__auto__ = (function (){try{while(true){
var result__22439__auto__ = switch__22436__auto__.call(null,state_71317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22439__auto__;
}
break;
}
}catch (e71323){if((e71323 instanceof Object)){
var ex__22440__auto__ = e71323;
var statearr_71324_71326 = state_71317;
(statearr_71324_71326[(5)] = ex__22440__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71327 = state_71317;
state_71317 = G__71327;
continue;
} else {
return ret_value__22438__auto__;
}
break;
}
});
jiyi$core$add_to_deck_$_state_machine__22437__auto__ = function(state_71317){
switch(arguments.length){
case 0:
return jiyi$core$add_to_deck_$_state_machine__22437__auto____0.call(this);
case 1:
return jiyi$core$add_to_deck_$_state_machine__22437__auto____1.call(this,state_71317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jiyi$core$add_to_deck_$_state_machine__22437__auto__.cljs$core$IFn$_invoke$arity$0 = jiyi$core$add_to_deck_$_state_machine__22437__auto____0;
jiyi$core$add_to_deck_$_state_machine__22437__auto__.cljs$core$IFn$_invoke$arity$1 = jiyi$core$add_to_deck_$_state_machine__22437__auto____1;
return jiyi$core$add_to_deck_$_state_machine__22437__auto__;
})()
;})(switch__22436__auto__,c__22501__auto__))
})();
var state__22503__auto__ = (function (){var statearr_71325 = f__22502__auto__.call(null);
(statearr_71325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22501__auto__);

return statearr_71325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22503__auto__);
});})(c__22501__auto__))
);

return c__22501__auto__;
});
jiyi.core.debounce = (function jiyi$core$debounce(in$,ms){

var out = cljs.core.async.chan.call(null);
var c__22501__auto___71510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22501__auto___71510,out){
return (function (){
var f__22502__auto__ = (function (){var switch__22436__auto__ = ((function (c__22501__auto___71510,out){
return (function (state_71472){
var state_val_71473 = (state_71472[(1)]);
if((state_val_71473 === (7))){
var inst_71424 = (state_71472[(2)]);
var state_71472__$1 = state_71472;
var statearr_71474_71511 = state_71472__$1;
(statearr_71474_71511[(2)] = inst_71424);

(statearr_71474_71511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (20))){
var state_71472__$1 = state_71472;
var statearr_71475_71512 = state_71472__$1;
(statearr_71475_71512[(2)] = null);

(statearr_71475_71512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (1))){
var inst_71419 = null;
var state_71472__$1 = (function (){var statearr_71476 = state_71472;
(statearr_71476[(7)] = inst_71419);

return statearr_71476;
})();
var statearr_71477_71513 = state_71472__$1;
(statearr_71477_71513[(2)] = null);

(statearr_71477_71513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (4))){
var state_71472__$1 = state_71472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71472__$1,(7),in$);
} else {
if((state_val_71473 === (15))){
var inst_71427 = (state_71472[(8)]);
var inst_71438 = (state_71472[(9)]);
var inst_71455 = cljs.core.nth.call(null,inst_71438,(0),null);
var state_71472__$1 = (function (){var statearr_71478 = state_71472;
(statearr_71478[(10)] = inst_71455);

return statearr_71478;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71472__$1,(18),out,inst_71427);
} else {
if((state_val_71473 === (21))){
var inst_71464 = (state_71472[(2)]);
var state_71472__$1 = state_71472;
var statearr_71479_71514 = state_71472__$1;
(statearr_71479_71514[(2)] = inst_71464);

(statearr_71479_71514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (13))){
var inst_71448 = cljs.core.async.close_BANG_.call(null,out);
var state_71472__$1 = state_71472;
var statearr_71480_71515 = state_71472__$1;
(statearr_71480_71515[(2)] = inst_71448);

(statearr_71480_71515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (6))){
var inst_71428 = (state_71472[(11)]);
var inst_71427 = (state_71472[(2)]);
var inst_71428__$1 = cljs.core.async.timeout.call(null,ms);
var inst_71434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71435 = [in$,inst_71428__$1];
var inst_71436 = (new cljs.core.PersistentVector(null,2,(5),inst_71434,inst_71435,null));
var state_71472__$1 = (function (){var statearr_71481 = state_71472;
(statearr_71481[(8)] = inst_71427);

(statearr_71481[(11)] = inst_71428__$1);

return statearr_71481;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_71472__$1,(8),inst_71436);
} else {
if((state_val_71473 === (17))){
var inst_71466 = (state_71472[(2)]);
var state_71472__$1 = state_71472;
var statearr_71482_71516 = state_71472__$1;
(statearr_71482_71516[(2)] = inst_71466);

(statearr_71482_71516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (3))){
var inst_71470 = (state_71472[(2)]);
var state_71472__$1 = state_71472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71472__$1,inst_71470);
} else {
if((state_val_71473 === (12))){
var inst_71444 = (state_71472[(12)]);
var inst_71419 = inst_71444;
var state_71472__$1 = (function (){var statearr_71483 = state_71472;
(statearr_71483[(7)] = inst_71419);

return statearr_71483;
})();
var statearr_71484_71517 = state_71472__$1;
(statearr_71484_71517[(2)] = null);

(statearr_71484_71517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (2))){
var inst_71419 = (state_71472[(7)]);
var inst_71421 = (inst_71419 == null);
var state_71472__$1 = state_71472;
if(cljs.core.truth_(inst_71421)){
var statearr_71485_71518 = state_71472__$1;
(statearr_71485_71518[(1)] = (4));

} else {
var statearr_71486_71519 = state_71472__$1;
(statearr_71486_71519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (19))){
var inst_71439 = (state_71472[(13)]);
var state_71472__$1 = state_71472;
var statearr_71487_71520 = state_71472__$1;
(statearr_71487_71520[(2)] = inst_71439);

(statearr_71487_71520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (11))){
var inst_71468 = (state_71472[(2)]);
var state_71472__$1 = state_71472;
var statearr_71488_71521 = state_71472__$1;
(statearr_71488_71521[(2)] = inst_71468);

(statearr_71488_71521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (9))){
var inst_71438 = (state_71472[(9)]);
var inst_71444 = (state_71472[(12)]);
var inst_71444__$1 = cljs.core.nth.call(null,inst_71438,(0),null);
var state_71472__$1 = (function (){var statearr_71489 = state_71472;
(statearr_71489[(12)] = inst_71444__$1);

return statearr_71489;
})();
if(cljs.core.truth_(inst_71444__$1)){
var statearr_71490_71522 = state_71472__$1;
(statearr_71490_71522[(1)] = (12));

} else {
var statearr_71491_71523 = state_71472__$1;
(statearr_71491_71523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (5))){
var inst_71419 = (state_71472[(7)]);
var state_71472__$1 = state_71472;
var statearr_71492_71524 = state_71472__$1;
(statearr_71492_71524[(2)] = inst_71419);

(statearr_71492_71524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (14))){
var inst_71450 = (state_71472[(2)]);
var state_71472__$1 = state_71472;
var statearr_71493_71525 = state_71472__$1;
(statearr_71493_71525[(2)] = inst_71450);

(statearr_71493_71525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (16))){
var inst_71440 = (state_71472[(14)]);
var inst_71460 = cljs.core._EQ_.call(null,inst_71440,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_71472__$1 = state_71472;
if(inst_71460){
var statearr_71494_71526 = state_71472__$1;
(statearr_71494_71526[(1)] = (19));

} else {
var statearr_71495_71527 = state_71472__$1;
(statearr_71495_71527[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (10))){
var inst_71440 = (state_71472[(14)]);
var inst_71428 = (state_71472[(11)]);
var inst_71452 = cljs.core._EQ_.call(null,inst_71440,inst_71428);
var state_71472__$1 = state_71472;
if(inst_71452){
var statearr_71496_71528 = state_71472__$1;
(statearr_71496_71528[(1)] = (15));

} else {
var statearr_71497_71529 = state_71472__$1;
(statearr_71497_71529[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (18))){
var inst_71457 = (state_71472[(2)]);
var inst_71419 = null;
var state_71472__$1 = (function (){var statearr_71498 = state_71472;
(statearr_71498[(15)] = inst_71457);

(statearr_71498[(7)] = inst_71419);

return statearr_71498;
})();
var statearr_71499_71530 = state_71472__$1;
(statearr_71499_71530[(2)] = null);

(statearr_71499_71530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71473 === (8))){
var inst_71438 = (state_71472[(9)]);
var inst_71440 = (state_71472[(14)]);
var inst_71438__$1 = (state_71472[(2)]);
var inst_71439 = cljs.core.nth.call(null,inst_71438__$1,(0),null);
var inst_71440__$1 = cljs.core.nth.call(null,inst_71438__$1,(1),null);
var inst_71441 = cljs.core._EQ_.call(null,inst_71440__$1,in$);
var state_71472__$1 = (function (){var statearr_71500 = state_71472;
(statearr_71500[(13)] = inst_71439);

(statearr_71500[(9)] = inst_71438__$1);

(statearr_71500[(14)] = inst_71440__$1);

return statearr_71500;
})();
if(inst_71441){
var statearr_71501_71531 = state_71472__$1;
(statearr_71501_71531[(1)] = (9));

} else {
var statearr_71502_71532 = state_71472__$1;
(statearr_71502_71532[(1)] = (10));

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
});})(c__22501__auto___71510,out))
;
return ((function (switch__22436__auto__,c__22501__auto___71510,out){
return (function() {
var jiyi$core$debounce_$_state_machine__22437__auto__ = null;
var jiyi$core$debounce_$_state_machine__22437__auto____0 = (function (){
var statearr_71506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71506[(0)] = jiyi$core$debounce_$_state_machine__22437__auto__);

(statearr_71506[(1)] = (1));

return statearr_71506;
});
var jiyi$core$debounce_$_state_machine__22437__auto____1 = (function (state_71472){
while(true){
var ret_value__22438__auto__ = (function (){try{while(true){
var result__22439__auto__ = switch__22436__auto__.call(null,state_71472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22439__auto__;
}
break;
}
}catch (e71507){if((e71507 instanceof Object)){
var ex__22440__auto__ = e71507;
var statearr_71508_71533 = state_71472;
(statearr_71508_71533[(5)] = ex__22440__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71534 = state_71472;
state_71472 = G__71534;
continue;
} else {
return ret_value__22438__auto__;
}
break;
}
});
jiyi$core$debounce_$_state_machine__22437__auto__ = function(state_71472){
switch(arguments.length){
case 0:
return jiyi$core$debounce_$_state_machine__22437__auto____0.call(this);
case 1:
return jiyi$core$debounce_$_state_machine__22437__auto____1.call(this,state_71472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jiyi$core$debounce_$_state_machine__22437__auto__.cljs$core$IFn$_invoke$arity$0 = jiyi$core$debounce_$_state_machine__22437__auto____0;
jiyi$core$debounce_$_state_machine__22437__auto__.cljs$core$IFn$_invoke$arity$1 = jiyi$core$debounce_$_state_machine__22437__auto____1;
return jiyi$core$debounce_$_state_machine__22437__auto__;
})()
;})(switch__22436__auto__,c__22501__auto___71510,out))
})();
var state__22503__auto__ = (function (){var statearr_71509 = f__22502__auto__.call(null);
(statearr_71509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22501__auto___71510);

return statearr_71509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22503__auto__);
});})(c__22501__auto___71510,out))
);


return out;
});
jiyi.core.toast = (function jiyi$core$toast(var_args){
var args71535 = [];
var len__20180__auto___71538 = arguments.length;
var i__20181__auto___71539 = (0);
while(true){
if((i__20181__auto___71539 < len__20180__auto___71538)){
args71535.push((arguments[i__20181__auto___71539]));

var G__71540 = (i__20181__auto___71539 + (1));
i__20181__auto___71539 = G__71540;
continue;
} else {
}
break;
}

var G__71537 = args71535.length;
switch (G__71537) {
case 1:
return jiyi.core.toast.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jiyi.core.toast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71535.length)].join('')));

}
});

jiyi.core.toast.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return jiyi.core.toast.call(null,msg,(1000));
});

jiyi.core.toast.cljs$core$IFn$_invoke$arity$2 = (function (msg,length){
return Materialize.toast(msg,length);
});

jiyi.core.toast.cljs$lang$maxFixedArity = 2;
jiyi.core.review_buttons = (function jiyi$core$review_buttons(id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(15)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spacer","div.spacer",2037275558)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
cljs.core.prn.call(null,"Marking ",cljs.core.name,"with id",id,"as successfully reviewed");

jiyi.core.mark_as_successfully_reviewed.call(null,id);

return jiyi.core.set_next_to_review.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.left","i.material-icons.left",-84364562),"thumb_up"], null),"I KNOW!!!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
cljs.core.prn.call(null,"Marking ",cljs.core.name,"with id",id,"as UNsuccessfully reviewed");

jiyi.core.mark_as_unsuccessfully_reviewed.call(null,id);

return jiyi.core.set_next_to_review.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.left","i.material-icons.left",-84364562),"thumb_down"], null),"No idea :("], null)], null)], null);
});
jiyi.core.RCard = (function jiyi$core$RCard(user){
var revealed_QMARK_ = reagent.core.atom.call(null,false);
var reveal_div_pos = timothypratley.reanimated.core.interpolate_if.call(null,revealed_QMARK_,(-300),(60));
return ((function (revealed_QMARK_,reveal_div_pos){
return (function (){
var map__71544 = user;
var map__71544__$1 = ((((!((map__71544 == null)))?((((map__71544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71544):map__71544);
var id = cljs.core.get.call(null,map__71544__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var photo = cljs.core.get.call(null,map__71544__$1,new cljs.core.Keyword(null,"photo","photo",-52852781));
var name = cljs.core.get.call(null,map__71544__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title = cljs.core.get.call(null,map__71544__$1,new cljs.core.Keyword(null,"title","title",636505583));
var dept = cljs.core.get.call(null,map__71544__$1,new cljs.core.Keyword(null,"dept","dept",1704352380));
cljs.core.prn.call(null,revealed_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"z-depth-2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-image.waves-effect.waves-block.waves-light","div.card-image.waves-effect.waves-block.waves-light",-332571532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),photo,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,revealed_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),cljs.core.deref.call(null,reveal_div_pos),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"width","width",-384071477),(520),new cljs.core.Keyword(null,"height","height",1025178622),(220),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.6], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),cljs.core.deref.call(null,reveal_div_pos),new cljs.core.Keyword(null,"width","width",-384071477),(520),new cljs.core.Keyword(null,"height","height",1025178622),(220)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),dept], null)], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2)], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,revealed_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding","padding",1660304693),(15)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),timothypratley.reanimated.core.toggle_handler.call(null,revealed_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.left","i.material-icons.left",-84364562),"visibility"], null),"Reveal"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.review_buttons,id], null))], null)], null)], null);
});
;})(revealed_QMARK_,reveal_div_pos))
});
jiyi.core.Card = (function jiyi$core$Card(){
var map__71548 = jiyi.core.get_being_reviewed.call(null);
var map__71548__$1 = ((((!((map__71548 == null)))?((((map__71548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71548):map__71548);
var id = cljs.core.get.call(null,map__71548__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var photo = cljs.core.get.call(null,map__71548__$1,new cljs.core.Keyword(null,"photo","photo",-52852781));
var name = cljs.core.get.call(null,map__71548__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title = cljs.core.get.call(null,map__71548__$1,new cljs.core.Keyword(null,"title","title",636505583));
var dept = cljs.core.get.call(null,map__71548__$1,new cljs.core.Keyword(null,"dept","dept",1704352380));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-image.waves-effect.waves-block.waves-light","div.card-image.waves-effect.waves-block.waves-light",-332571532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.activator","img.activator",-43989097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),photo], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content.row","div.card-content.row",1969461445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"bottom"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.s6.left","div.s6.left",-1831342014),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__71548,map__71548__$1,id,photo,name,title,dept){
return (function (e){
cljs.core.prn.call(null,"Marking ",name,"with id",id,"as successfully reviewed");

jiyi.core.mark_as_successfully_reviewed.call(null,id);

return jiyi.core.set_next_to_review.call(null);
});})(map__71548,map__71548__$1,id,photo,name,title,dept))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.left","i.material-icons.left",-84364562),"thumb_up"], null),"I KNOW!!!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.s6.right","div.s6.right",1972949196),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"waves-effect waves-light btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__71548,map__71548__$1,id,photo,name,title,dept){
return (function (e){
cljs.core.prn.call(null,"Marking ",name,"with id",id,"as UNsuccessfully reviewed");

jiyi.core.mark_as_unsuccessfully_reviewed.call(null,id);

return jiyi.core.set_next_to_review.call(null);
});})(map__71548,map__71548__$1,id,photo,name,title,dept))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.left","i.material-icons.left",-84364562),"thumb_down"], null),"No idea :("], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-reveal","div.card-reveal",-128797511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.card-title.grey-text.text-darken-4","span.card-title.grey-text.text-darken-4",-1348895902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons.right","i.material-icons.right",-676616889),"close"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.card-title.grey-text.text-darken-4","span.card-title.grey-text.text-darken-4",-1348895902),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.card-title","p.card-title",-1336143422),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),dept], null)], null)], null)], null)], null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.RCard,jiyi.core.get_being_reviewed.call(null)], null);
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
var c__22501__auto___71596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22501__auto___71596,search_term,search_results,search_channel,_LT_search_user_delayed){
return (function (){
var f__22502__auto__ = (function (){var switch__22436__auto__ = ((function (c__22501__auto___71596,search_term,search_results,search_channel,_LT_search_user_delayed){
return (function (state_71584){
var state_val_71585 = (state_71584[(1)]);
if((state_val_71585 === (1))){
var state_71584__$1 = state_71584;
var statearr_71586_71597 = state_71584__$1;
(statearr_71586_71597[(2)] = null);

(statearr_71586_71597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71585 === (2))){
var state_71584__$1 = state_71584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71584__$1,(4),_LT_search_user_delayed);
} else {
if((state_val_71585 === (3))){
var inst_71582 = (state_71584[(2)]);
var state_71584__$1 = state_71584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71584__$1,inst_71582);
} else {
if((state_val_71585 === (4))){
var inst_71575 = (state_71584[(2)]);
var inst_71576 = jiyi.core._LT_search_user.call(null,inst_71575);
var state_71584__$1 = state_71584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71584__$1,(5),inst_71576);
} else {
if((state_val_71585 === (5))){
var inst_71578 = (state_71584[(2)]);
var inst_71579 = cljs.core.reset_BANG_.call(null,search_results,inst_71578);
var state_71584__$1 = (function (){var statearr_71587 = state_71584;
(statearr_71587[(7)] = inst_71579);

return statearr_71587;
})();
var statearr_71588_71598 = state_71584__$1;
(statearr_71588_71598[(2)] = null);

(statearr_71588_71598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__22501__auto___71596,search_term,search_results,search_channel,_LT_search_user_delayed))
;
return ((function (switch__22436__auto__,c__22501__auto___71596,search_term,search_results,search_channel,_LT_search_user_delayed){
return (function() {
var jiyi$core$Search_$_state_machine__22437__auto__ = null;
var jiyi$core$Search_$_state_machine__22437__auto____0 = (function (){
var statearr_71592 = [null,null,null,null,null,null,null,null];
(statearr_71592[(0)] = jiyi$core$Search_$_state_machine__22437__auto__);

(statearr_71592[(1)] = (1));

return statearr_71592;
});
var jiyi$core$Search_$_state_machine__22437__auto____1 = (function (state_71584){
while(true){
var ret_value__22438__auto__ = (function (){try{while(true){
var result__22439__auto__ = switch__22436__auto__.call(null,state_71584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22439__auto__;
}
break;
}
}catch (e71593){if((e71593 instanceof Object)){
var ex__22440__auto__ = e71593;
var statearr_71594_71599 = state_71584;
(statearr_71594_71599[(5)] = ex__22440__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71600 = state_71584;
state_71584 = G__71600;
continue;
} else {
return ret_value__22438__auto__;
}
break;
}
});
jiyi$core$Search_$_state_machine__22437__auto__ = function(state_71584){
switch(arguments.length){
case 0:
return jiyi$core$Search_$_state_machine__22437__auto____0.call(this);
case 1:
return jiyi$core$Search_$_state_machine__22437__auto____1.call(this,state_71584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jiyi$core$Search_$_state_machine__22437__auto__.cljs$core$IFn$_invoke$arity$0 = jiyi$core$Search_$_state_machine__22437__auto____0;
jiyi$core$Search_$_state_machine__22437__auto__.cljs$core$IFn$_invoke$arity$1 = jiyi$core$Search_$_state_machine__22437__auto____1;
return jiyi$core$Search_$_state_machine__22437__auto__;
})()
;})(switch__22436__auto__,c__22501__auto___71596,search_term,search_results,search_channel,_LT_search_user_delayed))
})();
var state__22503__auto__ = (function (){var statearr_71595 = f__22502__auto__.call(null);
(statearr_71595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22501__auto___71596);

return statearr_71595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22503__auto__);
});})(c__22501__auto___71596,search_term,search_results,search_channel,_LT_search_user_delayed))
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.collection-item.avatar","li.collection-item.avatar",-754709796),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(55)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.circle","img.circle",-1218725458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"photo","photo",-52852781).cljs$core$IFn$_invoke$arity$1(result)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(result)], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn-small.waves-effect.waves-light","a.btn-small.waves-effect.waves-light",-1799869564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
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
jiyi.core.rcard = (function jiyi$core$rcard(){
return jiyi.core.RCard.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(5702),new cljs.core.Keyword(null,"photo","photo",-52852781),"https://genome.klick.com/local-instance/staff images/5702_3525_sq.jpg",new cljs.core.Keyword(null,"name","name",1843675177),"Ashley Ho",new cljs.core.Keyword(null,"title","title",636505583),"Medical Editor",new cljs.core.Keyword(null,"dept","dept",1704352380),"Creative"], null));
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
var action__25986__auto___71604 = (function (params__25987__auto__){
if(cljs.core.map_QMARK_.call(null,params__25987__auto__)){
var map__71601 = params__25987__auto__;
var map__71601__$1 = ((((!((map__71601 == null)))?((((map__71601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71601):map__71601);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,377,377,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25987__auto__)){
var vec__71603 = params__25987__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,377,377,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__25986__auto___71604);

var action__25986__auto___71608 = (function (params__25987__auto__){
if(cljs.core.map_QMARK_.call(null,params__25987__auto__)){
var map__71605 = params__25987__auto__;
var map__71605__$1 = ((((!((map__71605 == null)))?((((map__71605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71605):map__71605);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,377,377,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25987__auto__)){
var vec__71607 = params__25987__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.review;},new cljs.core.Symbol("jiyi.core","review","jiyi.core/review",-371955720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"review","review",-1552743334,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,377,377,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.review)?jiyi.core.review.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/review",action__25986__auto___71608);

var action__25986__auto___71612 = (function (params__25987__auto__){
if(cljs.core.map_QMARK_.call(null,params__25987__auto__)){
var map__71609 = params__25987__auto__;
var map__71609__$1 = ((((!((map__71609 == null)))?((((map__71609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71609):map__71609);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.search;},new cljs.core.Symbol("jiyi.core","search","jiyi.core/search",1722351255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"search","search",-1089495947,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,380,380,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.search)?jiyi.core.search.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25987__auto__)){
var vec__71611 = params__25987__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.search;},new cljs.core.Symbol("jiyi.core","search","jiyi.core/search",1722351255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"search","search",-1089495947,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",13,1,380,380,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.search)?jiyi.core.search.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/search",action__25986__auto___71612);

var action__25986__auto___71616 = (function (params__25987__auto__){
if(cljs.core.map_QMARK_.call(null,params__25987__auto__)){
var map__71613 = params__25987__auto__;
var map__71613__$1 = ((((!((map__71613 == null)))?((((map__71613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71613):map__71613);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.rcard;},new cljs.core.Symbol("jiyi.core","rcard","jiyi.core/rcard",-771712125,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"rcard","rcard",1687796253,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",12,1,379,379,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.rcard)?jiyi.core.rcard.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25987__auto__)){
var vec__71615 = params__25987__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.rcard;},new cljs.core.Symbol("jiyi.core","rcard","jiyi.core/rcard",-771712125,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"rcard","rcard",1687796253,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",12,1,379,379,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.rcard)?jiyi.core.rcard.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rcard",action__25986__auto___71616);

var action__25986__auto___71620 = (function (params__25987__auto__){
if(cljs.core.map_QMARK_.call(null,params__25987__auto__)){
var map__71617 = params__25987__auto__;
var map__71617__$1 = ((((!((map__71617 == null)))?((((map__71617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71617):map__71617);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.decklist;},new cljs.core.Symbol("jiyi.core","decklist","jiyi.core/decklist",-1195709337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"decklist","decklist",1126289089,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",15,1,382,382,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.decklist)?jiyi.core.decklist.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__25987__auto__)){
var vec__71619 = params__25987__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return jiyi.core.decklist;},new cljs.core.Symbol("jiyi.core","decklist","jiyi.core/decklist",-1195709337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jiyi.core","jiyi.core",1675072534,null),new cljs.core.Symbol(null,"decklist","decklist",1126289089,null),"/Users/phyrex/Dropbox/Programming/jiyi/src/cljs/jiyi/core.cljs",15,1,382,382,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(jiyi.core.decklist)?jiyi.core.decklist.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/list",action__25986__auto___71620);

jiyi.core.hook_browser_navigation_BANG_ = (function jiyi$core$hook_browser_navigation_BANG_(){
var G__71622 = (new goog.History());
goog.events.listen(G__71622,goog.history.EventType.NAVIGATE,((function (G__71622){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__71622))
);

G__71622.setEnabled(true);

return G__71622;
});
jiyi.core.mount_root = (function jiyi$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jiyi.core.current_page], null),document.getElementById("app"));
});
jiyi.core.init_BANG_ = (function jiyi$core$init_BANG_(){
jiyi.core.hook_browser_navigation_BANG_.call(null);

return jiyi.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map