// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__20185__auto__ = [];
var len__20178__auto___46872 = arguments.length;
var i__20179__auto___46873 = (0);
while(true){
if((i__20179__auto___46873 < len__20178__auto___46872)){
args__20185__auto__.push((arguments[i__20179__auto___46873]));

var G__46874 = (i__20179__auto___46873 + (1));
i__20179__auto___46873 = G__46874;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__46870){
var vec__46871 = p__46870;
var default$ = cljs.core.nth.call(null,vec__46871,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq46868){
var G__46869 = cljs.core.first.call(null,seq46868);
var seq46868__$1 = cljs.core.next.call(null,seq46868);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__46869,seq46868__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__20185__auto__ = [];
var len__20178__auto___46879 = arguments.length;
var i__20179__auto___46880 = (0);
while(true){
if((i__20179__auto___46880 < len__20178__auto___46879)){
args__20185__auto__.push((arguments[i__20179__auto___46880]));

var G__46881 = (i__20179__auto___46880 + (1));
i__20179__auto___46880 = G__46881;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__46877){
var vec__46878 = p__46877;
var default$ = cljs.core.nth.call(null,vec__46878,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq46875){
var G__46876 = cljs.core.first.call(null,seq46875);
var seq46875__$1 = cljs.core.next.call(null,seq46875);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__46876,seq46875__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__20185__auto__ = [];
var len__20178__auto___46884 = arguments.length;
var i__20179__auto___46885 = (0);
while(true){
if((i__20179__auto___46885 < len__20178__auto___46884)){
args__20185__auto__.push((arguments[i__20179__auto___46885]));

var G__46886 = (i__20179__auto___46885 + (1));
i__20179__auto___46885 = G__46886;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq46882){
var G__46883 = cljs.core.first.call(null,seq46882);
var seq46882__$1 = cljs.core.next.call(null,seq46882);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46883,seq46882__$1);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__46887_SHARP_){
return cljs.core.assoc_in.call(null,p1__46887_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__20185__auto__ = [];
var len__20178__auto___46892 = arguments.length;
var i__20179__auto___46893 = (0);
while(true){
if((i__20179__auto___46893 < len__20178__auto___46892)){
args__20185__auto__.push((arguments[i__20179__auto___46893]));

var G__46894 = (i__20179__auto___46893 + (1));
i__20179__auto___46893 = G__46894;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__46890){
var vec__46891 = p__46890;
var default$ = cljs.core.nth.call(null,vec__46891,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq46888){
var G__46889 = cljs.core.first.call(null,seq46888);
var seq46888__$1 = cljs.core.next.call(null,seq46888);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46889,seq46888__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__20185__auto__ = [];
var len__20178__auto___46899 = arguments.length;
var i__20179__auto___46900 = (0);
while(true){
if((i__20179__auto___46900 < len__20178__auto___46899)){
args__20185__auto__.push((arguments[i__20179__auto___46900]));

var G__46901 = (i__20179__auto___46900 + (1));
i__20179__auto___46900 = G__46901;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__46897){
var vec__46898 = p__46897;
var default$ = cljs.core.nth.call(null,vec__46898,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq46895){
var G__46896 = cljs.core.first.call(null,seq46895);
var seq46895__$1 = cljs.core.next.call(null,seq46895);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46896,seq46895__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__20185__auto__ = [];
var len__20178__auto___46906 = arguments.length;
var i__20179__auto___46907 = (0);
while(true){
if((i__20179__auto___46907 < len__20178__auto___46906)){
args__20185__auto__.push((arguments[i__20179__auto___46907]));

var G__46908 = (i__20179__auto___46907 + (1));
i__20179__auto___46907 = G__46908;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((2) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20186__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__46902_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__46902_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq46903){
var G__46904 = cljs.core.first.call(null,seq46903);
var seq46903__$1 = cljs.core.next.call(null,seq46903);
var G__46905 = cljs.core.first.call(null,seq46903__$1);
var seq46903__$2 = cljs.core.next.call(null,seq46903__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46904,G__46905,seq46903__$2);
});

//# sourceMappingURL=session.js.map