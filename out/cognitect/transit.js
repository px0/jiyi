// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__50462_50466 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__50463_50467 = null;
var count__50464_50468 = (0);
var i__50465_50469 = (0);
while(true){
if((i__50465_50469 < count__50464_50468)){
var k_50470 = cljs.core._nth.call(null,chunk__50463_50467,i__50465_50469);
var v_50471 = (b[k_50470]);
(a[k_50470] = v_50471);

var G__50472 = seq__50462_50466;
var G__50473 = chunk__50463_50467;
var G__50474 = count__50464_50468;
var G__50475 = (i__50465_50469 + (1));
seq__50462_50466 = G__50472;
chunk__50463_50467 = G__50473;
count__50464_50468 = G__50474;
i__50465_50469 = G__50475;
continue;
} else {
var temp__4425__auto___50476 = cljs.core.seq.call(null,seq__50462_50466);
if(temp__4425__auto___50476){
var seq__50462_50477__$1 = temp__4425__auto___50476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50462_50477__$1)){
var c__19923__auto___50478 = cljs.core.chunk_first.call(null,seq__50462_50477__$1);
var G__50479 = cljs.core.chunk_rest.call(null,seq__50462_50477__$1);
var G__50480 = c__19923__auto___50478;
var G__50481 = cljs.core.count.call(null,c__19923__auto___50478);
var G__50482 = (0);
seq__50462_50466 = G__50479;
chunk__50463_50467 = G__50480;
count__50464_50468 = G__50481;
i__50465_50469 = G__50482;
continue;
} else {
var k_50483 = cljs.core.first.call(null,seq__50462_50477__$1);
var v_50484 = (b[k_50483]);
(a[k_50483] = v_50484);

var G__50485 = cljs.core.next.call(null,seq__50462_50477__$1);
var G__50486 = null;
var G__50487 = (0);
var G__50488 = (0);
seq__50462_50466 = G__50485;
chunk__50463_50467 = G__50486;
count__50464_50468 = G__50487;
i__50465_50469 = G__50488;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args50489 = [];
var len__20178__auto___50492 = arguments.length;
var i__20179__auto___50493 = (0);
while(true){
if((i__20179__auto___50493 < len__20178__auto___50492)){
args50489.push((arguments[i__20179__auto___50493]));

var G__50494 = (i__20179__auto___50493 + (1));
i__20179__auto___50493 = G__50494;
continue;
} else {
}
break;
}

var G__50491 = args50489.length;
switch (G__50491) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50489.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__50496 = (i + (2));
var G__50497 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__50496;
ret = G__50497;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__50498_50502 = cljs.core.seq.call(null,v);
var chunk__50499_50503 = null;
var count__50500_50504 = (0);
var i__50501_50505 = (0);
while(true){
if((i__50501_50505 < count__50500_50504)){
var x_50506 = cljs.core._nth.call(null,chunk__50499_50503,i__50501_50505);
ret.push(x_50506);

var G__50507 = seq__50498_50502;
var G__50508 = chunk__50499_50503;
var G__50509 = count__50500_50504;
var G__50510 = (i__50501_50505 + (1));
seq__50498_50502 = G__50507;
chunk__50499_50503 = G__50508;
count__50500_50504 = G__50509;
i__50501_50505 = G__50510;
continue;
} else {
var temp__4425__auto___50511 = cljs.core.seq.call(null,seq__50498_50502);
if(temp__4425__auto___50511){
var seq__50498_50512__$1 = temp__4425__auto___50511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50498_50512__$1)){
var c__19923__auto___50513 = cljs.core.chunk_first.call(null,seq__50498_50512__$1);
var G__50514 = cljs.core.chunk_rest.call(null,seq__50498_50512__$1);
var G__50515 = c__19923__auto___50513;
var G__50516 = cljs.core.count.call(null,c__19923__auto___50513);
var G__50517 = (0);
seq__50498_50502 = G__50514;
chunk__50499_50503 = G__50515;
count__50500_50504 = G__50516;
i__50501_50505 = G__50517;
continue;
} else {
var x_50518 = cljs.core.first.call(null,seq__50498_50512__$1);
ret.push(x_50518);

var G__50519 = cljs.core.next.call(null,seq__50498_50512__$1);
var G__50520 = null;
var G__50521 = (0);
var G__50522 = (0);
seq__50498_50502 = G__50519;
chunk__50499_50503 = G__50520;
count__50500_50504 = G__50521;
i__50501_50505 = G__50522;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__50523_50527 = cljs.core.seq.call(null,v);
var chunk__50524_50528 = null;
var count__50525_50529 = (0);
var i__50526_50530 = (0);
while(true){
if((i__50526_50530 < count__50525_50529)){
var x_50531 = cljs.core._nth.call(null,chunk__50524_50528,i__50526_50530);
ret.push(x_50531);

var G__50532 = seq__50523_50527;
var G__50533 = chunk__50524_50528;
var G__50534 = count__50525_50529;
var G__50535 = (i__50526_50530 + (1));
seq__50523_50527 = G__50532;
chunk__50524_50528 = G__50533;
count__50525_50529 = G__50534;
i__50526_50530 = G__50535;
continue;
} else {
var temp__4425__auto___50536 = cljs.core.seq.call(null,seq__50523_50527);
if(temp__4425__auto___50536){
var seq__50523_50537__$1 = temp__4425__auto___50536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50523_50537__$1)){
var c__19923__auto___50538 = cljs.core.chunk_first.call(null,seq__50523_50537__$1);
var G__50539 = cljs.core.chunk_rest.call(null,seq__50523_50537__$1);
var G__50540 = c__19923__auto___50538;
var G__50541 = cljs.core.count.call(null,c__19923__auto___50538);
var G__50542 = (0);
seq__50523_50527 = G__50539;
chunk__50524_50528 = G__50540;
count__50525_50529 = G__50541;
i__50526_50530 = G__50542;
continue;
} else {
var x_50543 = cljs.core.first.call(null,seq__50523_50537__$1);
ret.push(x_50543);

var G__50544 = cljs.core.next.call(null,seq__50523_50537__$1);
var G__50545 = null;
var G__50546 = (0);
var G__50547 = (0);
seq__50523_50527 = G__50544;
chunk__50524_50528 = G__50545;
count__50525_50529 = G__50546;
i__50526_50530 = G__50547;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__50548_50552 = cljs.core.seq.call(null,v);
var chunk__50549_50553 = null;
var count__50550_50554 = (0);
var i__50551_50555 = (0);
while(true){
if((i__50551_50555 < count__50550_50554)){
var x_50556 = cljs.core._nth.call(null,chunk__50549_50553,i__50551_50555);
ret.push(x_50556);

var G__50557 = seq__50548_50552;
var G__50558 = chunk__50549_50553;
var G__50559 = count__50550_50554;
var G__50560 = (i__50551_50555 + (1));
seq__50548_50552 = G__50557;
chunk__50549_50553 = G__50558;
count__50550_50554 = G__50559;
i__50551_50555 = G__50560;
continue;
} else {
var temp__4425__auto___50561 = cljs.core.seq.call(null,seq__50548_50552);
if(temp__4425__auto___50561){
var seq__50548_50562__$1 = temp__4425__auto___50561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50548_50562__$1)){
var c__19923__auto___50563 = cljs.core.chunk_first.call(null,seq__50548_50562__$1);
var G__50564 = cljs.core.chunk_rest.call(null,seq__50548_50562__$1);
var G__50565 = c__19923__auto___50563;
var G__50566 = cljs.core.count.call(null,c__19923__auto___50563);
var G__50567 = (0);
seq__50548_50552 = G__50564;
chunk__50549_50553 = G__50565;
count__50550_50554 = G__50566;
i__50551_50555 = G__50567;
continue;
} else {
var x_50568 = cljs.core.first.call(null,seq__50548_50562__$1);
ret.push(x_50568);

var G__50569 = cljs.core.next.call(null,seq__50548_50562__$1);
var G__50570 = null;
var G__50571 = (0);
var G__50572 = (0);
seq__50548_50552 = G__50569;
chunk__50549_50553 = G__50570;
count__50550_50554 = G__50571;
i__50551_50555 = G__50572;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args50573 = [];
var len__20178__auto___50584 = arguments.length;
var i__20179__auto___50585 = (0);
while(true){
if((i__20179__auto___50585 < len__20178__auto___50584)){
args50573.push((arguments[i__20179__auto___50585]));

var G__50586 = (i__20179__auto___50585 + (1));
i__20179__auto___50585 = G__50586;
continue;
} else {
}
break;
}

var G__50575 = args50573.length;
switch (G__50575) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50573.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__50576 = obj;
G__50576.push(kfn.call(null,k),vfn.call(null,v));

return G__50576;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x50577 = cljs.core.clone.call(null,handlers);
x50577.forEach = ((function (x50577,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__50578 = cljs.core.seq.call(null,coll);
var chunk__50579 = null;
var count__50580 = (0);
var i__50581 = (0);
while(true){
if((i__50581 < count__50580)){
var vec__50582 = cljs.core._nth.call(null,chunk__50579,i__50581);
var k = cljs.core.nth.call(null,vec__50582,(0),null);
var v = cljs.core.nth.call(null,vec__50582,(1),null);
f.call(null,v,k);

var G__50588 = seq__50578;
var G__50589 = chunk__50579;
var G__50590 = count__50580;
var G__50591 = (i__50581 + (1));
seq__50578 = G__50588;
chunk__50579 = G__50589;
count__50580 = G__50590;
i__50581 = G__50591;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__50578);
if(temp__4425__auto__){
var seq__50578__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50578__$1)){
var c__19923__auto__ = cljs.core.chunk_first.call(null,seq__50578__$1);
var G__50592 = cljs.core.chunk_rest.call(null,seq__50578__$1);
var G__50593 = c__19923__auto__;
var G__50594 = cljs.core.count.call(null,c__19923__auto__);
var G__50595 = (0);
seq__50578 = G__50592;
chunk__50579 = G__50593;
count__50580 = G__50594;
i__50581 = G__50595;
continue;
} else {
var vec__50583 = cljs.core.first.call(null,seq__50578__$1);
var k = cljs.core.nth.call(null,vec__50583,(0),null);
var v = cljs.core.nth.call(null,vec__50583,(1),null);
f.call(null,v,k);

var G__50596 = cljs.core.next.call(null,seq__50578__$1);
var G__50597 = null;
var G__50598 = (0);
var G__50599 = (0);
seq__50578 = G__50596;
chunk__50579 = G__50597;
count__50580 = G__50598;
i__50581 = G__50599;
continue;
}
} else {
return null;
}
}
break;
}
});})(x50577,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x50577;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args50600 = [];
var len__20178__auto___50606 = arguments.length;
var i__20179__auto___50607 = (0);
while(true){
if((i__20179__auto___50607 < len__20178__auto___50606)){
args50600.push((arguments[i__20179__auto___50607]));

var G__50608 = (i__20179__auto___50607 + (1));
i__20179__auto___50607 = G__50608;
continue;
} else {
}
break;
}

var G__50602 = args50600.length;
switch (G__50602) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50600.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit50603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit50603 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta50604){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta50604 = meta50604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit50603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50605,meta50604__$1){
var self__ = this;
var _50605__$1 = this;
return (new cognitect.transit.t_cognitect$transit50603(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta50604__$1));
});

cognitect.transit.t_cognitect$transit50603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50605){
var self__ = this;
var _50605__$1 = this;
return self__.meta50604;
});

cognitect.transit.t_cognitect$transit50603.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit50603.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit50603.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit50603.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit50603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta50604","meta50604",-1340167656,null)], null);
});

cognitect.transit.t_cognitect$transit50603.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit50603.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit50603";

cognitect.transit.t_cognitect$transit50603.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cognitect.transit/t_cognitect$transit50603");
});

cognitect.transit.__GT_t_cognitect$transit50603 = (function cognitect$transit$__GT_t_cognitect$transit50603(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta50604){
return (new cognitect.transit.t_cognitect$transit50603(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta50604));
});

}

return (new cognitect.transit.t_cognitect$transit50603(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map