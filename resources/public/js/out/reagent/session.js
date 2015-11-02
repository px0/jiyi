// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__20181__auto__ = [];
var len__20174__auto___27057 = arguments.length;
var i__20175__auto___27058 = (0);
while(true){
if((i__20175__auto___27058 < len__20174__auto___27057)){
args__20181__auto__.push((arguments[i__20175__auto___27058]));

var G__27059 = (i__20175__auto___27058 + (1));
i__20175__auto___27058 = G__27059;
continue;
} else {
}
break;
}

var argseq__20182__auto__ = ((((1) < args__20181__auto__.length))?(new cljs.core.IndexedSeq(args__20181__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20182__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__27055){
var vec__27056 = p__27055;
var default$ = cljs.core.nth.call(null,vec__27056,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq27053){
var G__27054 = cljs.core.first.call(null,seq27053);
var seq27053__$1 = cljs.core.next.call(null,seq27053);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__27054,seq27053__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__20181__auto__ = [];
var len__20174__auto___27064 = arguments.length;
var i__20175__auto___27065 = (0);
while(true){
if((i__20175__auto___27065 < len__20174__auto___27064)){
args__20181__auto__.push((arguments[i__20175__auto___27065]));

var G__27066 = (i__20175__auto___27065 + (1));
i__20175__auto___27065 = G__27066;
continue;
} else {
}
break;
}

var argseq__20182__auto__ = ((((1) < args__20181__auto__.length))?(new cljs.core.IndexedSeq(args__20181__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20182__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__27062){
var vec__27063 = p__27062;
var default$ = cljs.core.nth.call(null,vec__27063,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq27060){
var G__27061 = cljs.core.first.call(null,seq27060);
var seq27060__$1 = cljs.core.next.call(null,seq27060);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__27061,seq27060__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__20181__auto__ = [];
var len__20174__auto___27069 = arguments.length;
var i__20175__auto___27070 = (0);
while(true){
if((i__20175__auto___27070 < len__20174__auto___27069)){
args__20181__auto__.push((arguments[i__20175__auto___27070]));

var G__27071 = (i__20175__auto___27070 + (1));
i__20175__auto___27070 = G__27071;
continue;
} else {
}
break;
}

var argseq__20182__auto__ = ((((1) < args__20181__auto__.length))?(new cljs.core.IndexedSeq(args__20181__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20182__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq27067){
var G__27068 = cljs.core.first.call(null,seq27067);
var seq27067__$1 = cljs.core.next.call(null,seq27067);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27068,seq27067__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__27072_SHARP_){
return cljs.core.assoc_in.call(null,p1__27072_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__20181__auto__ = [];
var len__20174__auto___27077 = arguments.length;
var i__20175__auto___27078 = (0);
while(true){
if((i__20175__auto___27078 < len__20174__auto___27077)){
args__20181__auto__.push((arguments[i__20175__auto___27078]));

var G__27079 = (i__20175__auto___27078 + (1));
i__20175__auto___27078 = G__27079;
continue;
} else {
}
break;
}

var argseq__20182__auto__ = ((((1) < args__20181__auto__.length))?(new cljs.core.IndexedSeq(args__20181__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20182__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__27075){
var vec__27076 = p__27075;
var default$ = cljs.core.nth.call(null,vec__27076,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq27073){
var G__27074 = cljs.core.first.call(null,seq27073);
var seq27073__$1 = cljs.core.next.call(null,seq27073);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27074,seq27073__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__20181__auto__ = [];
var len__20174__auto___27084 = arguments.length;
var i__20175__auto___27085 = (0);
while(true){
if((i__20175__auto___27085 < len__20174__auto___27084)){
args__20181__auto__.push((arguments[i__20175__auto___27085]));

var G__27086 = (i__20175__auto___27085 + (1));
i__20175__auto___27085 = G__27086;
continue;
} else {
}
break;
}

var argseq__20182__auto__ = ((((1) < args__20181__auto__.length))?(new cljs.core.IndexedSeq(args__20181__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20182__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__27082){
var vec__27083 = p__27082;
var default$ = cljs.core.nth.call(null,vec__27083,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq27080){
var G__27081 = cljs.core.first.call(null,seq27080);
var seq27080__$1 = cljs.core.next.call(null,seq27080);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27081,seq27080__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__20181__auto__ = [];
var len__20174__auto___27091 = arguments.length;
var i__20175__auto___27092 = (0);
while(true){
if((i__20175__auto___27092 < len__20174__auto___27091)){
args__20181__auto__.push((arguments[i__20175__auto___27092]));

var G__27093 = (i__20175__auto___27092 + (1));
i__20175__auto___27092 = G__27093;
continue;
} else {
}
break;
}

var argseq__20182__auto__ = ((((2) < args__20181__auto__.length))?(new cljs.core.IndexedSeq(args__20181__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20182__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__27087_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__27087_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq27088){
var G__27089 = cljs.core.first.call(null,seq27088);
var seq27088__$1 = cljs.core.next.call(null,seq27088);
var G__27090 = cljs.core.first.call(null,seq27088__$1);
var seq27088__$2 = cljs.core.next.call(null,seq27088__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27089,G__27090,seq27088__$2);
});

//# sourceMappingURL=session.js.map