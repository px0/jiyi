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
var seq__28189_28203 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28190_28204 = null;
var count__28191_28205 = (0);
var i__28192_28206 = (0);
while(true){
if((i__28192_28206 < count__28191_28205)){
var f_28207 = cljs.core._nth.call(null,chunk__28190_28204,i__28192_28206);
cljs.core.println.call(null,"  ",f_28207);

var G__28208 = seq__28189_28203;
var G__28209 = chunk__28190_28204;
var G__28210 = count__28191_28205;
var G__28211 = (i__28192_28206 + (1));
seq__28189_28203 = G__28208;
chunk__28190_28204 = G__28209;
count__28191_28205 = G__28210;
i__28192_28206 = G__28211;
continue;
} else {
var temp__4425__auto___28212 = cljs.core.seq.call(null,seq__28189_28203);
if(temp__4425__auto___28212){
var seq__28189_28213__$1 = temp__4425__auto___28212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28189_28213__$1)){
var c__19919__auto___28214 = cljs.core.chunk_first.call(null,seq__28189_28213__$1);
var G__28215 = cljs.core.chunk_rest.call(null,seq__28189_28213__$1);
var G__28216 = c__19919__auto___28214;
var G__28217 = cljs.core.count.call(null,c__19919__auto___28214);
var G__28218 = (0);
seq__28189_28203 = G__28215;
chunk__28190_28204 = G__28216;
count__28191_28205 = G__28217;
i__28192_28206 = G__28218;
continue;
} else {
var f_28219 = cljs.core.first.call(null,seq__28189_28213__$1);
cljs.core.println.call(null,"  ",f_28219);

var G__28220 = cljs.core.next.call(null,seq__28189_28213__$1);
var G__28221 = null;
var G__28222 = (0);
var G__28223 = (0);
seq__28189_28203 = G__28220;
chunk__28190_28204 = G__28221;
count__28191_28205 = G__28222;
i__28192_28206 = G__28223;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28224 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19116__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19116__auto__)){
return or__19116__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28224);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28224)))?cljs.core.second.call(null,arglists_28224):arglists_28224));
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
var seq__28193 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28194 = null;
var count__28195 = (0);
var i__28196 = (0);
while(true){
if((i__28196 < count__28195)){
var vec__28197 = cljs.core._nth.call(null,chunk__28194,i__28196);
var name = cljs.core.nth.call(null,vec__28197,(0),null);
var map__28198 = cljs.core.nth.call(null,vec__28197,(1),null);
var map__28198__$1 = ((((!((map__28198 == null)))?((((map__28198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28198):map__28198);
var doc = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28225 = seq__28193;
var G__28226 = chunk__28194;
var G__28227 = count__28195;
var G__28228 = (i__28196 + (1));
seq__28193 = G__28225;
chunk__28194 = G__28226;
count__28195 = G__28227;
i__28196 = G__28228;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28193);
if(temp__4425__auto__){
var seq__28193__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28193__$1)){
var c__19919__auto__ = cljs.core.chunk_first.call(null,seq__28193__$1);
var G__28229 = cljs.core.chunk_rest.call(null,seq__28193__$1);
var G__28230 = c__19919__auto__;
var G__28231 = cljs.core.count.call(null,c__19919__auto__);
var G__28232 = (0);
seq__28193 = G__28229;
chunk__28194 = G__28230;
count__28195 = G__28231;
i__28196 = G__28232;
continue;
} else {
var vec__28200 = cljs.core.first.call(null,seq__28193__$1);
var name = cljs.core.nth.call(null,vec__28200,(0),null);
var map__28201 = cljs.core.nth.call(null,vec__28200,(1),null);
var map__28201__$1 = ((((!((map__28201 == null)))?((((map__28201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28201):map__28201);
var doc = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28233 = cljs.core.next.call(null,seq__28193__$1);
var G__28234 = null;
var G__28235 = (0);
var G__28236 = (0);
seq__28193 = G__28233;
chunk__28194 = G__28234;
count__28195 = G__28235;
i__28196 = G__28236;
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