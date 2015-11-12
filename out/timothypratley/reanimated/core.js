// Compiled by ClojureScript 1.7.122 {}
goog.provide('timothypratley.reanimated.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.dom');
timothypratley.reanimated.core.now = (function timothypratley$reanimated$core$now(){
return (new Date());
});
/**
 * Calculates a value between a and b relative to t in duration.
 */
timothypratley.reanimated.core.interpolate = (function timothypratley$reanimated$core$interpolate(a,b,duration,t){
if((t <= (0))){
return a;
} else {
if((t >= duration)){
return b;
} else {
return (a + ((t * (b - a)) / duration));

}
}
});
/**
 * Wraps a component to animate creation and destruction
 */
timothypratley.reanimated.core.pop_when = (function timothypratley$reanimated$core$pop_when(var_args){
var args69496 = [];
var len__20180__auto___69503 = arguments.length;
var i__20181__auto___69504 = (0);
while(true){
if((i__20181__auto___69504 < len__20180__auto___69503)){
args69496.push((arguments[i__20181__auto___69504]));

var G__69505 = (i__20181__auto___69504 + (1));
i__20181__auto___69504 = G__69505;
continue;
} else {
}
break;
}

var G__69498 = args69496.length;
switch (G__69498) {
case 2:
return timothypratley.reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return timothypratley.reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69496.length)].join('')));

}
});

timothypratley.reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$2 = (function (condition,then){
return timothypratley.reanimated.core.pop_when.call(null,condition,then,cljs.core.PersistentArrayMap.EMPTY);
});

timothypratley.reanimated.core.pop_when.cljs$core$IFn$_invoke$arity$3 = (function (condition,then,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.not.call(null,condition)], null));
return ((function (anim){
return (function timothypratley$reanimated$core$a_pop_when(condition__$1,then__$1,options__$1){
if(cljs.core.not_EQ_.call(null,condition__$1,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)))){
cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),timothypratley.reanimated.core.now.call(null),new cljs.core.Keyword(null,"from","from",1815293044),condition__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], null));
} else {
}

var map__69501 = options__$1;
var map__69501__$1 = ((((!((map__69501 == null)))?((((map__69501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69501):map__69501);
var duration = cljs.core.get.call(null,map__69501__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.call(null,map__69501__$1,new cljs.core.Keyword(null,"easing","easing",735372043),timothypratley.reanimated.core.interpolate);
var t = (timothypratley.reanimated.core.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var scale__$1 = (cljs.core.truth_(condition__$1)?scale:((1) - scale));
if((t < duration)){
setTimeout(((function (map__69501,map__69501__$1,duration,easing,t,scale,scale__$1,anim){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(map__69501,map__69501__$1,duration,easing,t,scale,scale__$1,anim))
);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("scale("),cljs.core.str(scale__$1),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),scale__$1], null)], null),then__$1], null);
} else {
if(cljs.core.truth_(condition__$1)){
return then__$1;
} else {
return null;
}
}
});
;})(anim))
});

timothypratley.reanimated.core.pop_when.cljs$lang$maxFixedArity = 3;
timothypratley.reanimated.core.toggle_handler = (function timothypratley$reanimated$core$toggle_handler(r){
return (function timothypratley$reanimated$core$toggle_handler_$_a_toggle_handler(e){
cljs.core.swap_BANG_.call(null,r,cljs.core.not);

return e;
});
});
/**
 * Interpolates between two values when the conditon changes.
 */
timothypratley.reanimated.core.interpolate_if = (function timothypratley$reanimated$core$interpolate_if(var_args){
var args69507 = [];
var len__20180__auto___69512 = arguments.length;
var i__20181__auto___69513 = (0);
while(true){
if((i__20181__auto___69513 < len__20180__auto___69512)){
args69507.push((arguments[i__20181__auto___69513]));

var G__69514 = (i__20181__auto___69513 + (1));
i__20181__auto___69513 = G__69514;
continue;
} else {
}
break;
}

var G__69509 = args69507.length;
switch (G__69509) {
case 3:
return timothypratley.reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return timothypratley.reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69507.length)].join('')));

}
});

timothypratley.reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$3 = (function (condition,a,b){
return timothypratley.reanimated.core.interpolate_if.call(null,condition,a,b,cljs.core.PersistentArrayMap.EMPTY);
});

timothypratley.reanimated.core.interpolate_if.cljs$core$IFn$_invoke$arity$4 = (function (condition,a,b,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),a], null));
var map__69510 = options;
var map__69510__$1 = ((((!((map__69510 == null)))?((((map__69510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69510):map__69510);
var duration = cljs.core.get.call(null,map__69510__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.call(null,map__69510__$1,new cljs.core.Keyword(null,"easing","easing",735372043),timothypratley.reanimated.core.interpolate);
return reagent.ratom.make_reaction.call(null,((function (anim,map__69510,map__69510__$1,duration,easing){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,condition),new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)))){
cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),timothypratley.reanimated.core.now.call(null),new cljs.core.Keyword(null,"condition","condition",1668437652),cljs.core.deref.call(null,condition),new cljs.core.Keyword(null,"from","from",1815293044),a,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], null));
} else {
}

var t = (timothypratley.reanimated.core.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var scale__$1 = (cljs.core.truth_(cljs.core.deref.call(null,condition))?scale:((1) - scale));
if((t < duration)){
setTimeout(((function (t,scale,scale__$1,anim,map__69510,map__69510__$1,duration,easing){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(t,scale,scale__$1,anim,map__69510,map__69510__$1,duration,easing))
);

return ((a * ((1) - scale__$1)) + (b * scale__$1));
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,condition))){
return b;
} else {
return a;
}
}
});})(anim,map__69510,map__69510__$1,duration,easing))
);
});

timothypratley.reanimated.core.interpolate_if.cljs$lang$maxFixedArity = 4;
/**
 * Interpolates toward new values.
 */
timothypratley.reanimated.core.interpolate_to = (function timothypratley$reanimated$core$interpolate_to(var_args){
var args69516 = [];
var len__20180__auto___69521 = arguments.length;
var i__20181__auto___69522 = (0);
while(true){
if((i__20181__auto___69522 < len__20180__auto___69521)){
args69516.push((arguments[i__20181__auto___69522]));

var G__69523 = (i__20181__auto___69522 + (1));
i__20181__auto___69522 = G__69523;
continue;
} else {
}
break;
}

var G__69518 = args69516.length;
switch (G__69518) {
case 1:
return timothypratley.reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return timothypratley.reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69516.length)].join('')));

}
});

timothypratley.reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$1 = (function (x){
return timothypratley.reanimated.core.interpolate_to.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

timothypratley.reanimated.core.interpolate_to.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"at","at",1476951349),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"start","start",-355208981),timothypratley.reanimated.core.now.call(null)], null));
var map__69519 = options;
var map__69519__$1 = ((((!((map__69519 == null)))?((((map__69519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69519):map__69519);
var duration = cljs.core.get.call(null,map__69519__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var easing = cljs.core.get.call(null,map__69519__$1,new cljs.core.Keyword(null,"easing","easing",735372043),timothypratley.reanimated.core.interpolate);
return reagent.ratom.make_reaction.call(null,((function (anim,map__69519,map__69519__$1,duration,easing){
return (function (){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),cljs.core.deref.call(null,x))){
cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),timothypratley.reanimated.core.now.call(null),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.deref.call(null,x),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),new cljs.core.Keyword(null,"frame","frame",-1711082588),(0));
} else {
}

var t = (timothypratley.reanimated.core.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
var scale = easing.call(null,(0),(1),duration,t);
var a = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim));
var b = cljs.core.deref.call(null,x);
if((t < duration)){
var at = ((a * ((1) - scale)) + (b * scale));
setTimeout(((function (at,t,scale,a,b,anim,map__69519,map__69519__$1,duration,easing){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"at","at",1476951349),at,new cljs.core.Keyword(null,"frame","frame",-1711082588),(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)) + (1)));
});})(at,t,scale,a,b,anim,map__69519,map__69519__$1,duration,easing))
);

return at;
} else {
return b;
}
});})(anim,map__69519,map__69519__$1,duration,easing))
);
});

timothypratley.reanimated.core.interpolate_to.cljs$lang$maxFixedArity = 2;
/**
 * Interpolates the argument of a component to x.
 */
timothypratley.reanimated.core.interpolate_arg = (function timothypratley$reanimated$core$interpolate_arg(var_args){
var args69525 = [];
var len__20180__auto___69532 = arguments.length;
var i__20181__auto___69533 = (0);
while(true){
if((i__20181__auto___69533 < len__20180__auto___69532)){
args69525.push((arguments[i__20181__auto___69533]));

var G__69534 = (i__20181__auto___69533 + (1));
i__20181__auto___69533 = G__69534;
continue;
} else {
}
break;
}

var G__69527 = args69525.length;
switch (G__69527) {
case 2:
return timothypratley.reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return timothypratley.reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69525.length)].join('')));

}
});

timothypratley.reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$2 = (function (component,x){
return timothypratley.reanimated.core.interpolate_arg.call(null,component,x,cljs.core.PersistentArrayMap.EMPTY);
});

timothypratley.reanimated.core.interpolate_arg.cljs$core$IFn$_invoke$arity$3 = (function (component,x,options){
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"to","to",192099007),x,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0),new cljs.core.Keyword(null,"current","current",-1088038603),x], null));
return ((function (anim){
return (function timothypratley$reanimated$core$an_interpolate_arg(component__$1,x__$1,options__$1){
if(cljs.core.not_EQ_.call(null,x__$1,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)))){
cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),timothypratley.reanimated.core.now.call(null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),new cljs.core.Keyword(null,"to","to",192099007),x__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0));
} else {
}

var map__69530 = options__$1;
var map__69530__$1 = ((((!((map__69530 == null)))?((((map__69530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69530):map__69530);
var easing = cljs.core.get.call(null,map__69530__$1,new cljs.core.Keyword(null,"easing","easing",735372043),timothypratley.reanimated.core.interpolate);
var duration = cljs.core.get.call(null,map__69530__$1,new cljs.core.Keyword(null,"duration","duration",1444101068),(200));
var t = (timothypratley.reanimated.core.now.call(null) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)));
if((t < duration)){
setTimeout(((function (map__69530,map__69530__$1,easing,duration,t,anim){
return (function (){
return cljs.core.swap_BANG_.call(null,anim,cljs.core.update,new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.inc);
});})(map__69530,map__69530__$1,easing,duration,t,anim))
);

var i = easing.call(null,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,anim)),x__$1,duration,t);
cljs.core.swap_BANG_.call(null,anim,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),i);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,i], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,x__$1], null);
}
});
;})(anim))
});

timothypratley.reanimated.core.interpolate_arg.cljs$lang$maxFixedArity = 3;
timothypratley.reanimated.core.mass = (10);
timothypratley.reanimated.core.stiffness = (1);
timothypratley.reanimated.core.damping = (1);
timothypratley.reanimated.core.evaluate = (function timothypratley$reanimated$core$evaluate(x2,dt,x,v,a){
var x__$1 = (x + (v * dt));
var v__$1 = (v + (a * dt));
var f = ((timothypratley.reanimated.core.stiffness * (x2 - x__$1)) - (timothypratley.reanimated.core.damping * v__$1));
var a__$1 = (f / timothypratley.reanimated.core.mass);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__$1,a__$1], null);
});
timothypratley.reanimated.core.integrate_rk4 = (function timothypratley$reanimated$core$integrate_rk4(x2,dt,x,v){
var dt2 = (dt * 0.5);
var vec__69540 = timothypratley.reanimated.core.evaluate.call(null,x2,0.0,x,v,0.0);
var av = cljs.core.nth.call(null,vec__69540,(0),null);
var aa = cljs.core.nth.call(null,vec__69540,(1),null);
var vec__69541 = timothypratley.reanimated.core.evaluate.call(null,x2,dt2,x,av,aa);
var bv = cljs.core.nth.call(null,vec__69541,(0),null);
var ba = cljs.core.nth.call(null,vec__69541,(1),null);
var vec__69542 = timothypratley.reanimated.core.evaluate.call(null,x2,dt2,x,bv,ba);
var cv = cljs.core.nth.call(null,vec__69542,(0),null);
var ca = cljs.core.nth.call(null,vec__69542,(1),null);
var vec__69543 = timothypratley.reanimated.core.evaluate.call(null,x2,dt,x,cv,ca);
var dv = cljs.core.nth.call(null,vec__69543,(0),null);
var da = cljs.core.nth.call(null,vec__69543,(1),null);
var dx = (((av + (2.0 * (bv + cv))) + dv) / 6.0);
var dv__$1 = (((aa + (2.0 * (ba + ca))) + da) / 6.0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (dx * dt)),(v + (dv__$1 * dt))], null);
});
timothypratley.reanimated.core.small = (function timothypratley$reanimated$core$small(x){
return (Math.abs(x) < 0.1);
});
/**
 * Interpolates the argument of a component to x.
 */
timothypratley.reanimated.core.spring = (function timothypratley$reanimated$core$spring(var_args){
var args69544 = [];
var len__20180__auto___69552 = arguments.length;
var i__20181__auto___69553 = (0);
while(true){
if((i__20181__auto___69553 < len__20180__auto___69552)){
args69544.push((arguments[i__20181__auto___69553]));

var G__69554 = (i__20181__auto___69553 + (1));
i__20181__auto___69553 = G__69554;
continue;
} else {
}
break;
}

var G__69546 = args69544.length;
switch (G__69546) {
case 1:
return timothypratley.reanimated.core.spring.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return timothypratley.reanimated.core.spring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69544.length)].join('')));

}
});

timothypratley.reanimated.core.spring.cljs$core$IFn$_invoke$arity$1 = (function (x2){
return timothypratley.reanimated.core.spring.call(null,x2,cljs.core.PersistentArrayMap.EMPTY);
});

timothypratley.reanimated.core.spring.cljs$core$IFn$_invoke$arity$2 = (function (x2,options){
var map__69547 = options;
var map__69547__$1 = ((((!((map__69547 == null)))?((((map__69547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69547):map__69547);
var from = cljs.core.get.call(null,map__69547__$1,new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.deref.call(null,x2));
var velocity = cljs.core.get.call(null,map__69547__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355),(0));
var anim = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),timothypratley.reanimated.core.now.call(null),new cljs.core.Keyword(null,"x","x",2099068185),from,new cljs.core.Keyword(null,"v","v",21465059),velocity], null));
return reagent.ratom.make_reaction.call(null,((function (map__69547,map__69547__$1,from,velocity,anim){
return (function (){
var map__69549 = cljs.core.deref.call(null,anim);
var map__69549__$1 = ((((!((map__69549 == null)))?((((map__69549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69549):map__69549);
var x = cljs.core.get.call(null,map__69549__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var v = cljs.core.get.call(null,map__69549__$1,new cljs.core.Keyword(null,"v","v",21465059));
var t = cljs.core.get.call(null,map__69549__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var t2 = timothypratley.reanimated.core.now.call(null);
var dt = (function (){var x__19460__auto__ = (1);
var y__19461__auto__ = ((t2 - t) / 10.0);
return ((x__19460__auto__ < y__19461__auto__) ? x__19460__auto__ : y__19461__auto__);
})();
if(cljs.core.truth_((function (){var and__19110__auto__ = timothypratley.reanimated.core.small.call(null,(x - cljs.core.deref.call(null,x2)));
if(cljs.core.truth_(and__19110__auto__)){
return timothypratley.reanimated.core.small.call(null,v);
} else {
return and__19110__auto__;
}
})())){
return cljs.core.deref.call(null,x2);
} else {
var vec__69551 = timothypratley.reanimated.core.integrate_rk4.call(null,cljs.core.deref.call(null,x2),dt,x,v);
var x__$1 = cljs.core.nth.call(null,vec__69551,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__69551,(1),null);
setTimeout(((function (vec__69551,x__$1,v__$1,map__69549,map__69549__$1,x,v,t,t2,dt,map__69547,map__69547__$1,from,velocity,anim){
return (function (){
return cljs.core.reset_BANG_.call(null,anim,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),t2,new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
});})(vec__69551,x__$1,v__$1,map__69549,map__69549__$1,x,v,t,t2,dt,map__69547,map__69547__$1,from,velocity,anim))
);

return x__$1;
}
});})(map__69547,map__69547__$1,from,velocity,anim))
);
});

timothypratley.reanimated.core.spring.cljs$lang$maxFixedArity = 2;
/**
 * Watch a ref only while mounted in the DOM.
 */
timothypratley.reanimated.core.watch = (function timothypratley$reanimated$core$watch(r,f){
var k = cljs.core.keyword.call(null,cljs.core.gensym.call(null,"watch"));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"watch",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (k){
return (function timothypratley$reanimated$core$watch_$_watch_did_mount(this$){
return cljs.core.add_watch.call(null,r,k,f);
});})(k))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (k){
return (function timothypratley$reanimated$core$watch_$_watch_will_unmount(this$){
return cljs.core.remove_watch.call(null,r,k);
});})(k))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (k){
return (function timothypratley$reanimated$core$watch_$_watch_render(r__$1,f__$1){
return null;
});})(k))
], null));
});
/**
 * Call function f every period t while mounted in the DOM.
 */
timothypratley.reanimated.core.interval = (function timothypratley$reanimated$core$interval(f,t){
var id = cljs.core.atom.call(null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"interval",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (id){
return (function timothypratley$reanimated$core$interval_$_interval_did_mount(this$){
return cljs.core.reset_BANG_.call(null,id,setInterval(f,t));
});})(id))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (id){
return (function timothypratley$reanimated$core$interval_$_interval_will_unmount(this$){
return clearInterval(cljs.core.deref.call(null,id));
});})(id))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (id){
return (function timothypratley$reanimated$core$interval_$_interval_render(){
return null;
});})(id))
], null));
});
/**
 * Call function f after period t if still mounted in the DOM.
 */
timothypratley.reanimated.core.timeout = (function timothypratley$reanimated$core$timeout(f,t){
var id = cljs.core.atom.call(null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"interval",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (id){
return (function timothypratley$reanimated$core$timeout_$_interval_did_mount(this$){
return cljs.core.reset_BANG_.call(null,id,setTimeout(f,t));
});})(id))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (id){
return (function timothypratley$reanimated$core$timeout_$_interval_will_unmount(this$){
return clearInterval(cljs.core.deref.call(null,id));
});})(id))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (id){
return (function timothypratley$reanimated$core$timeout_$_interval_render(){
return null;
});})(id))
], null));
});
timothypratley.reanimated.core.get_scroll = (function timothypratley$reanimated$core$get_scroll(){
return goog.dom.getDocumentScroll().y;
});
timothypratley.reanimated.core.scroll = reagent.core.atom.call(null,timothypratley.reanimated.core.get_scroll.call(null));
goog.events.listen(window,goog.events.EventType.SCROLL,(function timothypratley$reanimated$core$a_scroll(e){
return cljs.core.reset_BANG_.call(null,timothypratley.reanimated.core.scroll,timothypratley.reanimated.core.get_scroll.call(null));
}));

//# sourceMappingURL=core.js.map