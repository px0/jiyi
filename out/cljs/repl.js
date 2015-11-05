// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41022_41036 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41023_41037 = null;
var count__41024_41038 = (0);
var i__41025_41039 = (0);
while(true){
if((i__41025_41039 < count__41024_41038)){
var f_41040 = cljs.core._nth.call(null,chunk__41023_41037,i__41025_41039);
cljs.core.println.call(null,"  ",f_41040);

var G__41041 = seq__41022_41036;
var G__41042 = chunk__41023_41037;
var G__41043 = count__41024_41038;
var G__41044 = (i__41025_41039 + (1));
seq__41022_41036 = G__41041;
chunk__41023_41037 = G__41042;
count__41024_41038 = G__41043;
i__41025_41039 = G__41044;
continue;
} else {
var temp__4425__auto___41045 = cljs.core.seq.call(null,seq__41022_41036);
if(temp__4425__auto___41045){
var seq__41022_41046__$1 = temp__4425__auto___41045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41022_41046__$1)){
var c__19923__auto___41047 = cljs.core.chunk_first.call(null,seq__41022_41046__$1);
var G__41048 = cljs.core.chunk_rest.call(null,seq__41022_41046__$1);
var G__41049 = c__19923__auto___41047;
var G__41050 = cljs.core.count.call(null,c__19923__auto___41047);
var G__41051 = (0);
seq__41022_41036 = G__41048;
chunk__41023_41037 = G__41049;
count__41024_41038 = G__41050;
i__41025_41039 = G__41051;
continue;
} else {
var f_41052 = cljs.core.first.call(null,seq__41022_41046__$1);
cljs.core.println.call(null,"  ",f_41052);

var G__41053 = cljs.core.next.call(null,seq__41022_41046__$1);
var G__41054 = null;
var G__41055 = (0);
var G__41056 = (0);
seq__41022_41036 = G__41053;
chunk__41023_41037 = G__41054;
count__41024_41038 = G__41055;
i__41025_41039 = G__41056;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41057 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19120__auto__)){
return or__19120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41057);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41057)))?cljs.core.second.call(null,arglists_41057):arglists_41057));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41026 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41027 = null;
var count__41028 = (0);
var i__41029 = (0);
while(true){
if((i__41029 < count__41028)){
var vec__41030 = cljs.core._nth.call(null,chunk__41027,i__41029);
var name = cljs.core.nth.call(null,vec__41030,(0),null);
var map__41031 = cljs.core.nth.call(null,vec__41030,(1),null);
var map__41031__$1 = ((((!((map__41031 == null)))?((((map__41031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41031):map__41031);
var doc = cljs.core.get.call(null,map__41031__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41031__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41058 = seq__41026;
var G__41059 = chunk__41027;
var G__41060 = count__41028;
var G__41061 = (i__41029 + (1));
seq__41026 = G__41058;
chunk__41027 = G__41059;
count__41028 = G__41060;
i__41029 = G__41061;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41026);
if(temp__4425__auto__){
var seq__41026__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41026__$1)){
var c__19923__auto__ = cljs.core.chunk_first.call(null,seq__41026__$1);
var G__41062 = cljs.core.chunk_rest.call(null,seq__41026__$1);
var G__41063 = c__19923__auto__;
var G__41064 = cljs.core.count.call(null,c__19923__auto__);
var G__41065 = (0);
seq__41026 = G__41062;
chunk__41027 = G__41063;
count__41028 = G__41064;
i__41029 = G__41065;
continue;
} else {
var vec__41033 = cljs.core.first.call(null,seq__41026__$1);
var name = cljs.core.nth.call(null,vec__41033,(0),null);
var map__41034 = cljs.core.nth.call(null,vec__41033,(1),null);
var map__41034__$1 = ((((!((map__41034 == null)))?((((map__41034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41034):map__41034);
var doc = cljs.core.get.call(null,map__41034__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41034__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41066 = cljs.core.next.call(null,seq__41026__$1);
var G__41067 = null;
var G__41068 = (0);
var G__41069 = (0);
seq__41026 = G__41066;
chunk__41027 = G__41067;
count__41028 = G__41068;
i__41029 = G__41069;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map