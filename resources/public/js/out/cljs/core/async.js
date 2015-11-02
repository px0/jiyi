// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async29339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29339 = (function (fn_handler,f,meta29340){
this.fn_handler = fn_handler;
this.f = f;
this.meta29340 = meta29340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29341,meta29340__$1){
var self__ = this;
var _29341__$1 = this;
return (new cljs.core.async.t_cljs$core$async29339(self__.fn_handler,self__.f,meta29340__$1));
});

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29341){
var self__ = this;
var _29341__$1 = this;
return self__.meta29340;
});

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29340","meta29340",-1657043402,null)], null);
});

cljs.core.async.t_cljs$core$async29339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29339";

cljs.core.async.t_cljs$core$async29339.cljs$lang$ctorPrWriter = (function (this__19714__auto__,writer__19715__auto__,opt__19716__auto__){
return cljs.core._write.call(null,writer__19715__auto__,"cljs.core.async/t_cljs$core$async29339");
});

cljs.core.async.__GT_t_cljs$core$async29339 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async29339(fn_handler__$1,f__$1,meta29340){
return (new cljs.core.async.t_cljs$core$async29339(fn_handler__$1,f__$1,meta29340));
});

}

return (new cljs.core.async.t_cljs$core$async29339(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29344 = [];
var len__20174__auto___29347 = arguments.length;
var i__20175__auto___29348 = (0);
while(true){
if((i__20175__auto___29348 < len__20174__auto___29347)){
args29344.push((arguments[i__20175__auto___29348]));

var G__29349 = (i__20175__auto___29348 + (1));
i__20175__auto___29348 = G__29349;
continue;
} else {
}
break;
}

var G__29346 = args29344.length;
switch (G__29346) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29344.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29351 = [];
var len__20174__auto___29354 = arguments.length;
var i__20175__auto___29355 = (0);
while(true){
if((i__20175__auto___29355 < len__20174__auto___29354)){
args29351.push((arguments[i__20175__auto___29355]));

var G__29356 = (i__20175__auto___29355 + (1));
i__20175__auto___29355 = G__29356;
continue;
} else {
}
break;
}

var G__29353 = args29351.length;
switch (G__29353) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29351.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29358 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29358);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29358,ret){
return (function (){
return fn1.call(null,val_29358);
});})(val_29358,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29359 = [];
var len__20174__auto___29362 = arguments.length;
var i__20175__auto___29363 = (0);
while(true){
if((i__20175__auto___29363 < len__20174__auto___29362)){
args29359.push((arguments[i__20175__auto___29363]));

var G__29364 = (i__20175__auto___29363 + (1));
i__20175__auto___29363 = G__29364;
continue;
} else {
}
break;
}

var G__29361 = args29359.length;
switch (G__29361) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29359.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20019__auto___29366 = n;
var x_29367 = (0);
while(true){
if((x_29367 < n__20019__auto___29366)){
(a[x_29367] = (0));

var G__29368 = (x_29367 + (1));
x_29367 = G__29368;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29369 = (i + (1));
i = G__29369;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29373 = (function (alt_flag,flag,meta29374){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29374 = meta29374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29375,meta29374__$1){
var self__ = this;
var _29375__$1 = this;
return (new cljs.core.async.t_cljs$core$async29373(self__.alt_flag,self__.flag,meta29374__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29375){
var self__ = this;
var _29375__$1 = this;
return self__.meta29374;
});})(flag))
;

cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29373.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29374","meta29374",82112118,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29373";

cljs.core.async.t_cljs$core$async29373.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19714__auto__,writer__19715__auto__,opt__19716__auto__){
return cljs.core._write.call(null,writer__19715__auto__,"cljs.core.async/t_cljs$core$async29373");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29373 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29373(alt_flag__$1,flag__$1,meta29374){
return (new cljs.core.async.t_cljs$core$async29373(alt_flag__$1,flag__$1,meta29374));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29373(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29379 = (function (alt_handler,flag,cb,meta29380){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29380 = meta29380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29381,meta29380__$1){
var self__ = this;
var _29381__$1 = this;
return (new cljs.core.async.t_cljs$core$async29379(self__.alt_handler,self__.flag,self__.cb,meta29380__$1));
});

cljs.core.async.t_cljs$core$async29379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29381){
var self__ = this;
var _29381__$1 = this;
return self__.meta29380;
});

cljs.core.async.t_cljs$core$async29379.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29380","meta29380",1251473515,null)], null);
});

cljs.core.async.t_cljs$core$async29379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29379";

cljs.core.async.t_cljs$core$async29379.cljs$lang$ctorPrWriter = (function (this__19714__auto__,writer__19715__auto__,opt__19716__auto__){
return cljs.core._write.call(null,writer__19715__auto__,"cljs.core.async/t_cljs$core$async29379");
});

cljs.core.async.__GT_t_cljs$core$async29379 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29379(alt_handler__$1,flag__$1,cb__$1,meta29380){
return (new cljs.core.async.t_cljs$core$async29379(alt_handler__$1,flag__$1,cb__$1,meta29380));
});

}

return (new cljs.core.async.t_cljs$core$async29379(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29382_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29382_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29383_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29383_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19116__auto__ = wport;
if(cljs.core.truth_(or__19116__auto__)){
return or__19116__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29384 = (i + (1));
i = G__29384;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19116__auto__ = ret;
if(cljs.core.truth_(or__19116__auto__)){
return or__19116__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19104__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19104__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19104__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__20181__auto__ = [];
var len__20174__auto___29390 = arguments.length;
var i__20175__auto___29391 = (0);
while(true){
if((i__20175__auto___29391 < len__20174__auto___29390)){
args__20181__auto__.push((arguments[i__20175__auto___29391]));

var G__29392 = (i__20175__auto___29391 + (1));
i__20175__auto___29391 = G__29392;
continue;
} else {
}
break;
}

var argseq__20182__auto__ = ((((1) < args__20181__auto__.length))?(new cljs.core.IndexedSeq(args__20181__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20182__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29387){
var map__29388 = p__29387;
var map__29388__$1 = ((((!((map__29388 == null)))?((((map__29388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29388):map__29388);
var opts = map__29388__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29385){
var G__29386 = cljs.core.first.call(null,seq29385);
var seq29385__$1 = cljs.core.next.call(null,seq29385);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29386,seq29385__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29393 = [];
var len__20174__auto___29443 = arguments.length;
var i__20175__auto___29444 = (0);
while(true){
if((i__20175__auto___29444 < len__20174__auto___29443)){
args29393.push((arguments[i__20175__auto___29444]));

var G__29445 = (i__20175__auto___29444 + (1));
i__20175__auto___29444 = G__29445;
continue;
} else {
}
break;
}

var G__29395 = args29393.length;
switch (G__29395) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29393.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22596__auto___29447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___29447){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___29447){
return (function (state_29419){
var state_val_29420 = (state_29419[(1)]);
if((state_val_29420 === (7))){
var inst_29415 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29421_29448 = state_29419__$1;
(statearr_29421_29448[(2)] = inst_29415);

(statearr_29421_29448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (1))){
var state_29419__$1 = state_29419;
var statearr_29422_29449 = state_29419__$1;
(statearr_29422_29449[(2)] = null);

(statearr_29422_29449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (4))){
var inst_29398 = (state_29419[(7)]);
var inst_29398__$1 = (state_29419[(2)]);
var inst_29399 = (inst_29398__$1 == null);
var state_29419__$1 = (function (){var statearr_29423 = state_29419;
(statearr_29423[(7)] = inst_29398__$1);

return statearr_29423;
})();
if(cljs.core.truth_(inst_29399)){
var statearr_29424_29450 = state_29419__$1;
(statearr_29424_29450[(1)] = (5));

} else {
var statearr_29425_29451 = state_29419__$1;
(statearr_29425_29451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (13))){
var state_29419__$1 = state_29419;
var statearr_29426_29452 = state_29419__$1;
(statearr_29426_29452[(2)] = null);

(statearr_29426_29452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (6))){
var inst_29398 = (state_29419[(7)]);
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29419__$1,(11),to,inst_29398);
} else {
if((state_val_29420 === (3))){
var inst_29417 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29419__$1,inst_29417);
} else {
if((state_val_29420 === (12))){
var state_29419__$1 = state_29419;
var statearr_29427_29453 = state_29419__$1;
(statearr_29427_29453[(2)] = null);

(statearr_29427_29453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (2))){
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29419__$1,(4),from);
} else {
if((state_val_29420 === (11))){
var inst_29408 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
if(cljs.core.truth_(inst_29408)){
var statearr_29428_29454 = state_29419__$1;
(statearr_29428_29454[(1)] = (12));

} else {
var statearr_29429_29455 = state_29419__$1;
(statearr_29429_29455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (9))){
var state_29419__$1 = state_29419;
var statearr_29430_29456 = state_29419__$1;
(statearr_29430_29456[(2)] = null);

(statearr_29430_29456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (5))){
var state_29419__$1 = state_29419;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29431_29457 = state_29419__$1;
(statearr_29431_29457[(1)] = (8));

} else {
var statearr_29432_29458 = state_29419__$1;
(statearr_29432_29458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (14))){
var inst_29413 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29433_29459 = state_29419__$1;
(statearr_29433_29459[(2)] = inst_29413);

(statearr_29433_29459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (10))){
var inst_29405 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29434_29460 = state_29419__$1;
(statearr_29434_29460[(2)] = inst_29405);

(statearr_29434_29460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (8))){
var inst_29402 = cljs.core.async.close_BANG_.call(null,to);
var state_29419__$1 = state_29419;
var statearr_29435_29461 = state_29419__$1;
(statearr_29435_29461[(2)] = inst_29402);

(statearr_29435_29461[(1)] = (10));


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
});})(c__22596__auto___29447))
;
return ((function (switch__22531__auto__,c__22596__auto___29447){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_29439 = [null,null,null,null,null,null,null,null];
(statearr_29439[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_29439[(1)] = (1));

return statearr_29439;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_29419){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_29419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e29440){if((e29440 instanceof Object)){
var ex__22535__auto__ = e29440;
var statearr_29441_29462 = state_29419;
(statearr_29441_29462[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29463 = state_29419;
state_29419 = G__29463;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_29419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_29419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___29447))
})();
var state__22598__auto__ = (function (){var statearr_29442 = f__22597__auto__.call(null);
(statearr_29442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___29447);

return statearr_29442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___29447))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29647){
var vec__29648 = p__29647;
var v = cljs.core.nth.call(null,vec__29648,(0),null);
var p = cljs.core.nth.call(null,vec__29648,(1),null);
var job = vec__29648;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22596__auto___29830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___29830,res,vec__29648,v,p,job,jobs,results){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___29830,res,vec__29648,v,p,job,jobs,results){
return (function (state_29653){
var state_val_29654 = (state_29653[(1)]);
if((state_val_29654 === (1))){
var state_29653__$1 = state_29653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29653__$1,(2),res,v);
} else {
if((state_val_29654 === (2))){
var inst_29650 = (state_29653[(2)]);
var inst_29651 = cljs.core.async.close_BANG_.call(null,res);
var state_29653__$1 = (function (){var statearr_29655 = state_29653;
(statearr_29655[(7)] = inst_29650);

return statearr_29655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29653__$1,inst_29651);
} else {
return null;
}
}
});})(c__22596__auto___29830,res,vec__29648,v,p,job,jobs,results))
;
return ((function (switch__22531__auto__,c__22596__auto___29830,res,vec__29648,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0 = (function (){
var statearr_29659 = [null,null,null,null,null,null,null,null];
(statearr_29659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__);

(statearr_29659[(1)] = (1));

return statearr_29659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1 = (function (state_29653){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_29653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e29660){if((e29660 instanceof Object)){
var ex__22535__auto__ = e29660;
var statearr_29661_29831 = state_29653;
(statearr_29661_29831[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29832 = state_29653;
state_29653 = G__29832;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__ = function(state_29653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1.call(this,state_29653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___29830,res,vec__29648,v,p,job,jobs,results))
})();
var state__22598__auto__ = (function (){var statearr_29662 = f__22597__auto__.call(null);
(statearr_29662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___29830);

return statearr_29662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___29830,res,vec__29648,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29663){
var vec__29664 = p__29663;
var v = cljs.core.nth.call(null,vec__29664,(0),null);
var p = cljs.core.nth.call(null,vec__29664,(1),null);
var job = vec__29664;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20019__auto___29833 = n;
var __29834 = (0);
while(true){
if((__29834 < n__20019__auto___29833)){
var G__29665_29835 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29665_29835) {
case "compute":
var c__22596__auto___29837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29834,c__22596__auto___29837,G__29665_29835,n__20019__auto___29833,jobs,results,process,async){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (__29834,c__22596__auto___29837,G__29665_29835,n__20019__auto___29833,jobs,results,process,async){
return (function (state_29678){
var state_val_29679 = (state_29678[(1)]);
if((state_val_29679 === (1))){
var state_29678__$1 = state_29678;
var statearr_29680_29838 = state_29678__$1;
(statearr_29680_29838[(2)] = null);

(statearr_29680_29838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (2))){
var state_29678__$1 = state_29678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29678__$1,(4),jobs);
} else {
if((state_val_29679 === (3))){
var inst_29676 = (state_29678[(2)]);
var state_29678__$1 = state_29678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29678__$1,inst_29676);
} else {
if((state_val_29679 === (4))){
var inst_29668 = (state_29678[(2)]);
var inst_29669 = process.call(null,inst_29668);
var state_29678__$1 = state_29678;
if(cljs.core.truth_(inst_29669)){
var statearr_29681_29839 = state_29678__$1;
(statearr_29681_29839[(1)] = (5));

} else {
var statearr_29682_29840 = state_29678__$1;
(statearr_29682_29840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (5))){
var state_29678__$1 = state_29678;
var statearr_29683_29841 = state_29678__$1;
(statearr_29683_29841[(2)] = null);

(statearr_29683_29841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (6))){
var state_29678__$1 = state_29678;
var statearr_29684_29842 = state_29678__$1;
(statearr_29684_29842[(2)] = null);

(statearr_29684_29842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (7))){
var inst_29674 = (state_29678[(2)]);
var state_29678__$1 = state_29678;
var statearr_29685_29843 = state_29678__$1;
(statearr_29685_29843[(2)] = inst_29674);

(statearr_29685_29843[(1)] = (3));


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
});})(__29834,c__22596__auto___29837,G__29665_29835,n__20019__auto___29833,jobs,results,process,async))
;
return ((function (__29834,switch__22531__auto__,c__22596__auto___29837,G__29665_29835,n__20019__auto___29833,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0 = (function (){
var statearr_29689 = [null,null,null,null,null,null,null];
(statearr_29689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__);

(statearr_29689[(1)] = (1));

return statearr_29689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1 = (function (state_29678){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_29678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e29690){if((e29690 instanceof Object)){
var ex__22535__auto__ = e29690;
var statearr_29691_29844 = state_29678;
(statearr_29691_29844[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29845 = state_29678;
state_29678 = G__29845;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__ = function(state_29678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1.call(this,state_29678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__;
})()
;})(__29834,switch__22531__auto__,c__22596__auto___29837,G__29665_29835,n__20019__auto___29833,jobs,results,process,async))
})();
var state__22598__auto__ = (function (){var statearr_29692 = f__22597__auto__.call(null);
(statearr_29692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___29837);

return statearr_29692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(__29834,c__22596__auto___29837,G__29665_29835,n__20019__auto___29833,jobs,results,process,async))
);


break;
case "async":
var c__22596__auto___29846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29834,c__22596__auto___29846,G__29665_29835,n__20019__auto___29833,jobs,results,process,async){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (__29834,c__22596__auto___29846,G__29665_29835,n__20019__auto___29833,jobs,results,process,async){
return (function (state_29705){
var state_val_29706 = (state_29705[(1)]);
if((state_val_29706 === (1))){
var state_29705__$1 = state_29705;
var statearr_29707_29847 = state_29705__$1;
(statearr_29707_29847[(2)] = null);

(statearr_29707_29847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (2))){
var state_29705__$1 = state_29705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29705__$1,(4),jobs);
} else {
if((state_val_29706 === (3))){
var inst_29703 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29705__$1,inst_29703);
} else {
if((state_val_29706 === (4))){
var inst_29695 = (state_29705[(2)]);
var inst_29696 = async.call(null,inst_29695);
var state_29705__$1 = state_29705;
if(cljs.core.truth_(inst_29696)){
var statearr_29708_29848 = state_29705__$1;
(statearr_29708_29848[(1)] = (5));

} else {
var statearr_29709_29849 = state_29705__$1;
(statearr_29709_29849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (5))){
var state_29705__$1 = state_29705;
var statearr_29710_29850 = state_29705__$1;
(statearr_29710_29850[(2)] = null);

(statearr_29710_29850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (6))){
var state_29705__$1 = state_29705;
var statearr_29711_29851 = state_29705__$1;
(statearr_29711_29851[(2)] = null);

(statearr_29711_29851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29706 === (7))){
var inst_29701 = (state_29705[(2)]);
var state_29705__$1 = state_29705;
var statearr_29712_29852 = state_29705__$1;
(statearr_29712_29852[(2)] = inst_29701);

(statearr_29712_29852[(1)] = (3));


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
});})(__29834,c__22596__auto___29846,G__29665_29835,n__20019__auto___29833,jobs,results,process,async))
;
return ((function (__29834,switch__22531__auto__,c__22596__auto___29846,G__29665_29835,n__20019__auto___29833,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0 = (function (){
var statearr_29716 = [null,null,null,null,null,null,null];
(statearr_29716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__);

(statearr_29716[(1)] = (1));

return statearr_29716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1 = (function (state_29705){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_29705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e29717){if((e29717 instanceof Object)){
var ex__22535__auto__ = e29717;
var statearr_29718_29853 = state_29705;
(statearr_29718_29853[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29854 = state_29705;
state_29705 = G__29854;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__ = function(state_29705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1.call(this,state_29705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__;
})()
;})(__29834,switch__22531__auto__,c__22596__auto___29846,G__29665_29835,n__20019__auto___29833,jobs,results,process,async))
})();
var state__22598__auto__ = (function (){var statearr_29719 = f__22597__auto__.call(null);
(statearr_29719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___29846);

return statearr_29719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(__29834,c__22596__auto___29846,G__29665_29835,n__20019__auto___29833,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29855 = (__29834 + (1));
__29834 = G__29855;
continue;
} else {
}
break;
}

var c__22596__auto___29856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___29856,jobs,results,process,async){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___29856,jobs,results,process,async){
return (function (state_29741){
var state_val_29742 = (state_29741[(1)]);
if((state_val_29742 === (1))){
var state_29741__$1 = state_29741;
var statearr_29743_29857 = state_29741__$1;
(statearr_29743_29857[(2)] = null);

(statearr_29743_29857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (2))){
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,(4),from);
} else {
if((state_val_29742 === (3))){
var inst_29739 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29741__$1,inst_29739);
} else {
if((state_val_29742 === (4))){
var inst_29722 = (state_29741[(7)]);
var inst_29722__$1 = (state_29741[(2)]);
var inst_29723 = (inst_29722__$1 == null);
var state_29741__$1 = (function (){var statearr_29744 = state_29741;
(statearr_29744[(7)] = inst_29722__$1);

return statearr_29744;
})();
if(cljs.core.truth_(inst_29723)){
var statearr_29745_29858 = state_29741__$1;
(statearr_29745_29858[(1)] = (5));

} else {
var statearr_29746_29859 = state_29741__$1;
(statearr_29746_29859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (5))){
var inst_29725 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29741__$1 = state_29741;
var statearr_29747_29860 = state_29741__$1;
(statearr_29747_29860[(2)] = inst_29725);

(statearr_29747_29860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (6))){
var inst_29722 = (state_29741[(7)]);
var inst_29727 = (state_29741[(8)]);
var inst_29727__$1 = cljs.core.async.chan.call(null,(1));
var inst_29728 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29729 = [inst_29722,inst_29727__$1];
var inst_29730 = (new cljs.core.PersistentVector(null,2,(5),inst_29728,inst_29729,null));
var state_29741__$1 = (function (){var statearr_29748 = state_29741;
(statearr_29748[(8)] = inst_29727__$1);

return statearr_29748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29741__$1,(8),jobs,inst_29730);
} else {
if((state_val_29742 === (7))){
var inst_29737 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29749_29861 = state_29741__$1;
(statearr_29749_29861[(2)] = inst_29737);

(statearr_29749_29861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29742 === (8))){
var inst_29727 = (state_29741[(8)]);
var inst_29732 = (state_29741[(2)]);
var state_29741__$1 = (function (){var statearr_29750 = state_29741;
(statearr_29750[(9)] = inst_29732);

return statearr_29750;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29741__$1,(9),results,inst_29727);
} else {
if((state_val_29742 === (9))){
var inst_29734 = (state_29741[(2)]);
var state_29741__$1 = (function (){var statearr_29751 = state_29741;
(statearr_29751[(10)] = inst_29734);

return statearr_29751;
})();
var statearr_29752_29862 = state_29741__$1;
(statearr_29752_29862[(2)] = null);

(statearr_29752_29862[(1)] = (2));


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
});})(c__22596__auto___29856,jobs,results,process,async))
;
return ((function (switch__22531__auto__,c__22596__auto___29856,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0 = (function (){
var statearr_29756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__);

(statearr_29756[(1)] = (1));

return statearr_29756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1 = (function (state_29741){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_29741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e29757){if((e29757 instanceof Object)){
var ex__22535__auto__ = e29757;
var statearr_29758_29863 = state_29741;
(statearr_29758_29863[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29864 = state_29741;
state_29741 = G__29864;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__ = function(state_29741){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1.call(this,state_29741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___29856,jobs,results,process,async))
})();
var state__22598__auto__ = (function (){var statearr_29759 = f__22597__auto__.call(null);
(statearr_29759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___29856);

return statearr_29759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___29856,jobs,results,process,async))
);


var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__,jobs,results,process,async){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__,jobs,results,process,async){
return (function (state_29797){
var state_val_29798 = (state_29797[(1)]);
if((state_val_29798 === (7))){
var inst_29793 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29799_29865 = state_29797__$1;
(statearr_29799_29865[(2)] = inst_29793);

(statearr_29799_29865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (20))){
var state_29797__$1 = state_29797;
var statearr_29800_29866 = state_29797__$1;
(statearr_29800_29866[(2)] = null);

(statearr_29800_29866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (1))){
var state_29797__$1 = state_29797;
var statearr_29801_29867 = state_29797__$1;
(statearr_29801_29867[(2)] = null);

(statearr_29801_29867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (4))){
var inst_29762 = (state_29797[(7)]);
var inst_29762__$1 = (state_29797[(2)]);
var inst_29763 = (inst_29762__$1 == null);
var state_29797__$1 = (function (){var statearr_29802 = state_29797;
(statearr_29802[(7)] = inst_29762__$1);

return statearr_29802;
})();
if(cljs.core.truth_(inst_29763)){
var statearr_29803_29868 = state_29797__$1;
(statearr_29803_29868[(1)] = (5));

} else {
var statearr_29804_29869 = state_29797__$1;
(statearr_29804_29869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (15))){
var inst_29775 = (state_29797[(8)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29797__$1,(18),to,inst_29775);
} else {
if((state_val_29798 === (21))){
var inst_29788 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29805_29870 = state_29797__$1;
(statearr_29805_29870[(2)] = inst_29788);

(statearr_29805_29870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (13))){
var inst_29790 = (state_29797[(2)]);
var state_29797__$1 = (function (){var statearr_29806 = state_29797;
(statearr_29806[(9)] = inst_29790);

return statearr_29806;
})();
var statearr_29807_29871 = state_29797__$1;
(statearr_29807_29871[(2)] = null);

(statearr_29807_29871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (6))){
var inst_29762 = (state_29797[(7)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29797__$1,(11),inst_29762);
} else {
if((state_val_29798 === (17))){
var inst_29783 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
if(cljs.core.truth_(inst_29783)){
var statearr_29808_29872 = state_29797__$1;
(statearr_29808_29872[(1)] = (19));

} else {
var statearr_29809_29873 = state_29797__$1;
(statearr_29809_29873[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (3))){
var inst_29795 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29797__$1,inst_29795);
} else {
if((state_val_29798 === (12))){
var inst_29772 = (state_29797[(10)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29797__$1,(14),inst_29772);
} else {
if((state_val_29798 === (2))){
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29797__$1,(4),results);
} else {
if((state_val_29798 === (19))){
var state_29797__$1 = state_29797;
var statearr_29810_29874 = state_29797__$1;
(statearr_29810_29874[(2)] = null);

(statearr_29810_29874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (11))){
var inst_29772 = (state_29797[(2)]);
var state_29797__$1 = (function (){var statearr_29811 = state_29797;
(statearr_29811[(10)] = inst_29772);

return statearr_29811;
})();
var statearr_29812_29875 = state_29797__$1;
(statearr_29812_29875[(2)] = null);

(statearr_29812_29875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (9))){
var state_29797__$1 = state_29797;
var statearr_29813_29876 = state_29797__$1;
(statearr_29813_29876[(2)] = null);

(statearr_29813_29876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (5))){
var state_29797__$1 = state_29797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29814_29877 = state_29797__$1;
(statearr_29814_29877[(1)] = (8));

} else {
var statearr_29815_29878 = state_29797__$1;
(statearr_29815_29878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (14))){
var inst_29775 = (state_29797[(8)]);
var inst_29777 = (state_29797[(11)]);
var inst_29775__$1 = (state_29797[(2)]);
var inst_29776 = (inst_29775__$1 == null);
var inst_29777__$1 = cljs.core.not.call(null,inst_29776);
var state_29797__$1 = (function (){var statearr_29816 = state_29797;
(statearr_29816[(8)] = inst_29775__$1);

(statearr_29816[(11)] = inst_29777__$1);

return statearr_29816;
})();
if(inst_29777__$1){
var statearr_29817_29879 = state_29797__$1;
(statearr_29817_29879[(1)] = (15));

} else {
var statearr_29818_29880 = state_29797__$1;
(statearr_29818_29880[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (16))){
var inst_29777 = (state_29797[(11)]);
var state_29797__$1 = state_29797;
var statearr_29819_29881 = state_29797__$1;
(statearr_29819_29881[(2)] = inst_29777);

(statearr_29819_29881[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (10))){
var inst_29769 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29820_29882 = state_29797__$1;
(statearr_29820_29882[(2)] = inst_29769);

(statearr_29820_29882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (18))){
var inst_29780 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29821_29883 = state_29797__$1;
(statearr_29821_29883[(2)] = inst_29780);

(statearr_29821_29883[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (8))){
var inst_29766 = cljs.core.async.close_BANG_.call(null,to);
var state_29797__$1 = state_29797;
var statearr_29822_29884 = state_29797__$1;
(statearr_29822_29884[(2)] = inst_29766);

(statearr_29822_29884[(1)] = (10));


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
});})(c__22596__auto__,jobs,results,process,async))
;
return ((function (switch__22531__auto__,c__22596__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0 = (function (){
var statearr_29826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__);

(statearr_29826[(1)] = (1));

return statearr_29826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1 = (function (state_29797){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_29797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e29827){if((e29827 instanceof Object)){
var ex__22535__auto__ = e29827;
var statearr_29828_29885 = state_29797;
(statearr_29828_29885[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29886 = state_29797;
state_29797 = G__29886;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__ = function(state_29797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1.call(this,state_29797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22532__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__,jobs,results,process,async))
})();
var state__22598__auto__ = (function (){var statearr_29829 = f__22597__auto__.call(null);
(statearr_29829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_29829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__,jobs,results,process,async))
);

return c__22596__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29887 = [];
var len__20174__auto___29890 = arguments.length;
var i__20175__auto___29891 = (0);
while(true){
if((i__20175__auto___29891 < len__20174__auto___29890)){
args29887.push((arguments[i__20175__auto___29891]));

var G__29892 = (i__20175__auto___29891 + (1));
i__20175__auto___29891 = G__29892;
continue;
} else {
}
break;
}

var G__29889 = args29887.length;
switch (G__29889) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29887.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29894 = [];
var len__20174__auto___29897 = arguments.length;
var i__20175__auto___29898 = (0);
while(true){
if((i__20175__auto___29898 < len__20174__auto___29897)){
args29894.push((arguments[i__20175__auto___29898]));

var G__29899 = (i__20175__auto___29898 + (1));
i__20175__auto___29898 = G__29899;
continue;
} else {
}
break;
}

var G__29896 = args29894.length;
switch (G__29896) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29894.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29901 = [];
var len__20174__auto___29954 = arguments.length;
var i__20175__auto___29955 = (0);
while(true){
if((i__20175__auto___29955 < len__20174__auto___29954)){
args29901.push((arguments[i__20175__auto___29955]));

var G__29956 = (i__20175__auto___29955 + (1));
i__20175__auto___29955 = G__29956;
continue;
} else {
}
break;
}

var G__29903 = args29901.length;
switch (G__29903) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29901.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22596__auto___29958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___29958,tc,fc){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___29958,tc,fc){
return (function (state_29929){
var state_val_29930 = (state_29929[(1)]);
if((state_val_29930 === (7))){
var inst_29925 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29931_29959 = state_29929__$1;
(statearr_29931_29959[(2)] = inst_29925);

(statearr_29931_29959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (1))){
var state_29929__$1 = state_29929;
var statearr_29932_29960 = state_29929__$1;
(statearr_29932_29960[(2)] = null);

(statearr_29932_29960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (4))){
var inst_29906 = (state_29929[(7)]);
var inst_29906__$1 = (state_29929[(2)]);
var inst_29907 = (inst_29906__$1 == null);
var state_29929__$1 = (function (){var statearr_29933 = state_29929;
(statearr_29933[(7)] = inst_29906__$1);

return statearr_29933;
})();
if(cljs.core.truth_(inst_29907)){
var statearr_29934_29961 = state_29929__$1;
(statearr_29934_29961[(1)] = (5));

} else {
var statearr_29935_29962 = state_29929__$1;
(statearr_29935_29962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (13))){
var state_29929__$1 = state_29929;
var statearr_29936_29963 = state_29929__$1;
(statearr_29936_29963[(2)] = null);

(statearr_29936_29963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (6))){
var inst_29906 = (state_29929[(7)]);
var inst_29912 = p.call(null,inst_29906);
var state_29929__$1 = state_29929;
if(cljs.core.truth_(inst_29912)){
var statearr_29937_29964 = state_29929__$1;
(statearr_29937_29964[(1)] = (9));

} else {
var statearr_29938_29965 = state_29929__$1;
(statearr_29938_29965[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (3))){
var inst_29927 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29929__$1,inst_29927);
} else {
if((state_val_29930 === (12))){
var state_29929__$1 = state_29929;
var statearr_29939_29966 = state_29929__$1;
(statearr_29939_29966[(2)] = null);

(statearr_29939_29966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (2))){
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(4),ch);
} else {
if((state_val_29930 === (11))){
var inst_29906 = (state_29929[(7)]);
var inst_29916 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29929__$1,(8),inst_29916,inst_29906);
} else {
if((state_val_29930 === (9))){
var state_29929__$1 = state_29929;
var statearr_29940_29967 = state_29929__$1;
(statearr_29940_29967[(2)] = tc);

(statearr_29940_29967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (5))){
var inst_29909 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29910 = cljs.core.async.close_BANG_.call(null,fc);
var state_29929__$1 = (function (){var statearr_29941 = state_29929;
(statearr_29941[(8)] = inst_29909);

return statearr_29941;
})();
var statearr_29942_29968 = state_29929__$1;
(statearr_29942_29968[(2)] = inst_29910);

(statearr_29942_29968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (14))){
var inst_29923 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29943_29969 = state_29929__$1;
(statearr_29943_29969[(2)] = inst_29923);

(statearr_29943_29969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (10))){
var state_29929__$1 = state_29929;
var statearr_29944_29970 = state_29929__$1;
(statearr_29944_29970[(2)] = fc);

(statearr_29944_29970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (8))){
var inst_29918 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
if(cljs.core.truth_(inst_29918)){
var statearr_29945_29971 = state_29929__$1;
(statearr_29945_29971[(1)] = (12));

} else {
var statearr_29946_29972 = state_29929__$1;
(statearr_29946_29972[(1)] = (13));

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
});})(c__22596__auto___29958,tc,fc))
;
return ((function (switch__22531__auto__,c__22596__auto___29958,tc,fc){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_29950 = [null,null,null,null,null,null,null,null,null];
(statearr_29950[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_29950[(1)] = (1));

return statearr_29950;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_29929){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_29929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e29951){if((e29951 instanceof Object)){
var ex__22535__auto__ = e29951;
var statearr_29952_29973 = state_29929;
(statearr_29952_29973[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29974 = state_29929;
state_29929 = G__29974;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_29929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_29929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___29958,tc,fc))
})();
var state__22598__auto__ = (function (){var statearr_29953 = f__22597__auto__.call(null);
(statearr_29953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___29958);

return statearr_29953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___29958,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__){
return (function (state_30021){
var state_val_30022 = (state_30021[(1)]);
if((state_val_30022 === (1))){
var inst_30007 = init;
var state_30021__$1 = (function (){var statearr_30023 = state_30021;
(statearr_30023[(7)] = inst_30007);

return statearr_30023;
})();
var statearr_30024_30039 = state_30021__$1;
(statearr_30024_30039[(2)] = null);

(statearr_30024_30039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (2))){
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30021__$1,(4),ch);
} else {
if((state_val_30022 === (3))){
var inst_30019 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30021__$1,inst_30019);
} else {
if((state_val_30022 === (4))){
var inst_30010 = (state_30021[(8)]);
var inst_30010__$1 = (state_30021[(2)]);
var inst_30011 = (inst_30010__$1 == null);
var state_30021__$1 = (function (){var statearr_30025 = state_30021;
(statearr_30025[(8)] = inst_30010__$1);

return statearr_30025;
})();
if(cljs.core.truth_(inst_30011)){
var statearr_30026_30040 = state_30021__$1;
(statearr_30026_30040[(1)] = (5));

} else {
var statearr_30027_30041 = state_30021__$1;
(statearr_30027_30041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (5))){
var inst_30007 = (state_30021[(7)]);
var state_30021__$1 = state_30021;
var statearr_30028_30042 = state_30021__$1;
(statearr_30028_30042[(2)] = inst_30007);

(statearr_30028_30042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (6))){
var inst_30010 = (state_30021[(8)]);
var inst_30007 = (state_30021[(7)]);
var inst_30014 = f.call(null,inst_30007,inst_30010);
var inst_30007__$1 = inst_30014;
var state_30021__$1 = (function (){var statearr_30029 = state_30021;
(statearr_30029[(7)] = inst_30007__$1);

return statearr_30029;
})();
var statearr_30030_30043 = state_30021__$1;
(statearr_30030_30043[(2)] = null);

(statearr_30030_30043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (7))){
var inst_30017 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30031_30044 = state_30021__$1;
(statearr_30031_30044[(2)] = inst_30017);

(statearr_30031_30044[(1)] = (3));


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
});})(c__22596__auto__))
;
return ((function (switch__22531__auto__,c__22596__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22532__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22532__auto____0 = (function (){
var statearr_30035 = [null,null,null,null,null,null,null,null,null];
(statearr_30035[(0)] = cljs$core$async$reduce_$_state_machine__22532__auto__);

(statearr_30035[(1)] = (1));

return statearr_30035;
});
var cljs$core$async$reduce_$_state_machine__22532__auto____1 = (function (state_30021){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_30021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e30036){if((e30036 instanceof Object)){
var ex__22535__auto__ = e30036;
var statearr_30037_30045 = state_30021;
(statearr_30037_30045[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30046 = state_30021;
state_30021 = G__30046;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22532__auto__ = function(state_30021){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22532__auto____1.call(this,state_30021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22532__auto____0;
cljs$core$async$reduce_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22532__auto____1;
return cljs$core$async$reduce_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__))
})();
var state__22598__auto__ = (function (){var statearr_30038 = f__22597__auto__.call(null);
(statearr_30038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_30038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__))
);

return c__22596__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30047 = [];
var len__20174__auto___30099 = arguments.length;
var i__20175__auto___30100 = (0);
while(true){
if((i__20175__auto___30100 < len__20174__auto___30099)){
args30047.push((arguments[i__20175__auto___30100]));

var G__30101 = (i__20175__auto___30100 + (1));
i__20175__auto___30100 = G__30101;
continue;
} else {
}
break;
}

var G__30049 = args30047.length;
switch (G__30049) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30047.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__){
return (function (state_30074){
var state_val_30075 = (state_30074[(1)]);
if((state_val_30075 === (7))){
var inst_30056 = (state_30074[(2)]);
var state_30074__$1 = state_30074;
var statearr_30076_30103 = state_30074__$1;
(statearr_30076_30103[(2)] = inst_30056);

(statearr_30076_30103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (1))){
var inst_30050 = cljs.core.seq.call(null,coll);
var inst_30051 = inst_30050;
var state_30074__$1 = (function (){var statearr_30077 = state_30074;
(statearr_30077[(7)] = inst_30051);

return statearr_30077;
})();
var statearr_30078_30104 = state_30074__$1;
(statearr_30078_30104[(2)] = null);

(statearr_30078_30104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (4))){
var inst_30051 = (state_30074[(7)]);
var inst_30054 = cljs.core.first.call(null,inst_30051);
var state_30074__$1 = state_30074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30074__$1,(7),ch,inst_30054);
} else {
if((state_val_30075 === (13))){
var inst_30068 = (state_30074[(2)]);
var state_30074__$1 = state_30074;
var statearr_30079_30105 = state_30074__$1;
(statearr_30079_30105[(2)] = inst_30068);

(statearr_30079_30105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (6))){
var inst_30059 = (state_30074[(2)]);
var state_30074__$1 = state_30074;
if(cljs.core.truth_(inst_30059)){
var statearr_30080_30106 = state_30074__$1;
(statearr_30080_30106[(1)] = (8));

} else {
var statearr_30081_30107 = state_30074__$1;
(statearr_30081_30107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (3))){
var inst_30072 = (state_30074[(2)]);
var state_30074__$1 = state_30074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30074__$1,inst_30072);
} else {
if((state_val_30075 === (12))){
var state_30074__$1 = state_30074;
var statearr_30082_30108 = state_30074__$1;
(statearr_30082_30108[(2)] = null);

(statearr_30082_30108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (2))){
var inst_30051 = (state_30074[(7)]);
var state_30074__$1 = state_30074;
if(cljs.core.truth_(inst_30051)){
var statearr_30083_30109 = state_30074__$1;
(statearr_30083_30109[(1)] = (4));

} else {
var statearr_30084_30110 = state_30074__$1;
(statearr_30084_30110[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (11))){
var inst_30065 = cljs.core.async.close_BANG_.call(null,ch);
var state_30074__$1 = state_30074;
var statearr_30085_30111 = state_30074__$1;
(statearr_30085_30111[(2)] = inst_30065);

(statearr_30085_30111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (9))){
var state_30074__$1 = state_30074;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30086_30112 = state_30074__$1;
(statearr_30086_30112[(1)] = (11));

} else {
var statearr_30087_30113 = state_30074__$1;
(statearr_30087_30113[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (5))){
var inst_30051 = (state_30074[(7)]);
var state_30074__$1 = state_30074;
var statearr_30088_30114 = state_30074__$1;
(statearr_30088_30114[(2)] = inst_30051);

(statearr_30088_30114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (10))){
var inst_30070 = (state_30074[(2)]);
var state_30074__$1 = state_30074;
var statearr_30089_30115 = state_30074__$1;
(statearr_30089_30115[(2)] = inst_30070);

(statearr_30089_30115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30075 === (8))){
var inst_30051 = (state_30074[(7)]);
var inst_30061 = cljs.core.next.call(null,inst_30051);
var inst_30051__$1 = inst_30061;
var state_30074__$1 = (function (){var statearr_30090 = state_30074;
(statearr_30090[(7)] = inst_30051__$1);

return statearr_30090;
})();
var statearr_30091_30116 = state_30074__$1;
(statearr_30091_30116[(2)] = null);

(statearr_30091_30116[(1)] = (2));


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
});})(c__22596__auto__))
;
return ((function (switch__22531__auto__,c__22596__auto__){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_30095 = [null,null,null,null,null,null,null,null];
(statearr_30095[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_30095[(1)] = (1));

return statearr_30095;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_30074){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_30074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e30096){if((e30096 instanceof Object)){
var ex__22535__auto__ = e30096;
var statearr_30097_30117 = state_30074;
(statearr_30097_30117[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30118 = state_30074;
state_30074 = G__30118;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_30074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_30074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__))
})();
var state__22598__auto__ = (function (){var statearr_30098 = f__22597__auto__.call(null);
(statearr_30098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_30098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__))
);

return c__22596__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19771__auto__ = (((_ == null))?null:_);
var m__19772__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,_);
} else {
var m__19772__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19771__auto__ = (((m == null))?null:m);
var m__19772__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19772__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19771__auto__ = (((m == null))?null:m);
var m__19772__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,m,ch);
} else {
var m__19772__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19771__auto__ = (((m == null))?null:m);
var m__19772__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,m);
} else {
var m__19772__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30340 = (function (mult,ch,cs,meta30341){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30341 = meta30341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30342,meta30341__$1){
var self__ = this;
var _30342__$1 = this;
return (new cljs.core.async.t_cljs$core$async30340(self__.mult,self__.ch,self__.cs,meta30341__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30342){
var self__ = this;
var _30342__$1 = this;
return self__.meta30341;
});})(cs))
;

cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30340.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30340.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30341","meta30341",-93325933,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30340";

cljs.core.async.t_cljs$core$async30340.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19714__auto__,writer__19715__auto__,opt__19716__auto__){
return cljs.core._write.call(null,writer__19715__auto__,"cljs.core.async/t_cljs$core$async30340");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30340 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30340(mult__$1,ch__$1,cs__$1,meta30341){
return (new cljs.core.async.t_cljs$core$async30340(mult__$1,ch__$1,cs__$1,meta30341));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30340(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22596__auto___30561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___30561,cs,m,dchan,dctr,done){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___30561,cs,m,dchan,dctr,done){
return (function (state_30473){
var state_val_30474 = (state_30473[(1)]);
if((state_val_30474 === (7))){
var inst_30469 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30475_30562 = state_30473__$1;
(statearr_30475_30562[(2)] = inst_30469);

(statearr_30475_30562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (20))){
var inst_30374 = (state_30473[(7)]);
var inst_30384 = cljs.core.first.call(null,inst_30374);
var inst_30385 = cljs.core.nth.call(null,inst_30384,(0),null);
var inst_30386 = cljs.core.nth.call(null,inst_30384,(1),null);
var state_30473__$1 = (function (){var statearr_30476 = state_30473;
(statearr_30476[(8)] = inst_30385);

return statearr_30476;
})();
if(cljs.core.truth_(inst_30386)){
var statearr_30477_30563 = state_30473__$1;
(statearr_30477_30563[(1)] = (22));

} else {
var statearr_30478_30564 = state_30473__$1;
(statearr_30478_30564[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (27))){
var inst_30416 = (state_30473[(9)]);
var inst_30345 = (state_30473[(10)]);
var inst_30414 = (state_30473[(11)]);
var inst_30421 = (state_30473[(12)]);
var inst_30421__$1 = cljs.core._nth.call(null,inst_30414,inst_30416);
var inst_30422 = cljs.core.async.put_BANG_.call(null,inst_30421__$1,inst_30345,done);
var state_30473__$1 = (function (){var statearr_30479 = state_30473;
(statearr_30479[(12)] = inst_30421__$1);

return statearr_30479;
})();
if(cljs.core.truth_(inst_30422)){
var statearr_30480_30565 = state_30473__$1;
(statearr_30480_30565[(1)] = (30));

} else {
var statearr_30481_30566 = state_30473__$1;
(statearr_30481_30566[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (1))){
var state_30473__$1 = state_30473;
var statearr_30482_30567 = state_30473__$1;
(statearr_30482_30567[(2)] = null);

(statearr_30482_30567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (24))){
var inst_30374 = (state_30473[(7)]);
var inst_30391 = (state_30473[(2)]);
var inst_30392 = cljs.core.next.call(null,inst_30374);
var inst_30354 = inst_30392;
var inst_30355 = null;
var inst_30356 = (0);
var inst_30357 = (0);
var state_30473__$1 = (function (){var statearr_30483 = state_30473;
(statearr_30483[(13)] = inst_30356);

(statearr_30483[(14)] = inst_30357);

(statearr_30483[(15)] = inst_30354);

(statearr_30483[(16)] = inst_30355);

(statearr_30483[(17)] = inst_30391);

return statearr_30483;
})();
var statearr_30484_30568 = state_30473__$1;
(statearr_30484_30568[(2)] = null);

(statearr_30484_30568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (39))){
var state_30473__$1 = state_30473;
var statearr_30488_30569 = state_30473__$1;
(statearr_30488_30569[(2)] = null);

(statearr_30488_30569[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (4))){
var inst_30345 = (state_30473[(10)]);
var inst_30345__$1 = (state_30473[(2)]);
var inst_30346 = (inst_30345__$1 == null);
var state_30473__$1 = (function (){var statearr_30489 = state_30473;
(statearr_30489[(10)] = inst_30345__$1);

return statearr_30489;
})();
if(cljs.core.truth_(inst_30346)){
var statearr_30490_30570 = state_30473__$1;
(statearr_30490_30570[(1)] = (5));

} else {
var statearr_30491_30571 = state_30473__$1;
(statearr_30491_30571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (15))){
var inst_30356 = (state_30473[(13)]);
var inst_30357 = (state_30473[(14)]);
var inst_30354 = (state_30473[(15)]);
var inst_30355 = (state_30473[(16)]);
var inst_30370 = (state_30473[(2)]);
var inst_30371 = (inst_30357 + (1));
var tmp30485 = inst_30356;
var tmp30486 = inst_30354;
var tmp30487 = inst_30355;
var inst_30354__$1 = tmp30486;
var inst_30355__$1 = tmp30487;
var inst_30356__$1 = tmp30485;
var inst_30357__$1 = inst_30371;
var state_30473__$1 = (function (){var statearr_30492 = state_30473;
(statearr_30492[(13)] = inst_30356__$1);

(statearr_30492[(14)] = inst_30357__$1);

(statearr_30492[(18)] = inst_30370);

(statearr_30492[(15)] = inst_30354__$1);

(statearr_30492[(16)] = inst_30355__$1);

return statearr_30492;
})();
var statearr_30493_30572 = state_30473__$1;
(statearr_30493_30572[(2)] = null);

(statearr_30493_30572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (21))){
var inst_30395 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30497_30573 = state_30473__$1;
(statearr_30497_30573[(2)] = inst_30395);

(statearr_30497_30573[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (31))){
var inst_30421 = (state_30473[(12)]);
var inst_30425 = done.call(null,null);
var inst_30426 = cljs.core.async.untap_STAR_.call(null,m,inst_30421);
var state_30473__$1 = (function (){var statearr_30498 = state_30473;
(statearr_30498[(19)] = inst_30425);

return statearr_30498;
})();
var statearr_30499_30574 = state_30473__$1;
(statearr_30499_30574[(2)] = inst_30426);

(statearr_30499_30574[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (32))){
var inst_30416 = (state_30473[(9)]);
var inst_30413 = (state_30473[(20)]);
var inst_30414 = (state_30473[(11)]);
var inst_30415 = (state_30473[(21)]);
var inst_30428 = (state_30473[(2)]);
var inst_30429 = (inst_30416 + (1));
var tmp30494 = inst_30413;
var tmp30495 = inst_30414;
var tmp30496 = inst_30415;
var inst_30413__$1 = tmp30494;
var inst_30414__$1 = tmp30495;
var inst_30415__$1 = tmp30496;
var inst_30416__$1 = inst_30429;
var state_30473__$1 = (function (){var statearr_30500 = state_30473;
(statearr_30500[(9)] = inst_30416__$1);

(statearr_30500[(22)] = inst_30428);

(statearr_30500[(20)] = inst_30413__$1);

(statearr_30500[(11)] = inst_30414__$1);

(statearr_30500[(21)] = inst_30415__$1);

return statearr_30500;
})();
var statearr_30501_30575 = state_30473__$1;
(statearr_30501_30575[(2)] = null);

(statearr_30501_30575[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (40))){
var inst_30441 = (state_30473[(23)]);
var inst_30445 = done.call(null,null);
var inst_30446 = cljs.core.async.untap_STAR_.call(null,m,inst_30441);
var state_30473__$1 = (function (){var statearr_30502 = state_30473;
(statearr_30502[(24)] = inst_30445);

return statearr_30502;
})();
var statearr_30503_30576 = state_30473__$1;
(statearr_30503_30576[(2)] = inst_30446);

(statearr_30503_30576[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (33))){
var inst_30432 = (state_30473[(25)]);
var inst_30434 = cljs.core.chunked_seq_QMARK_.call(null,inst_30432);
var state_30473__$1 = state_30473;
if(inst_30434){
var statearr_30504_30577 = state_30473__$1;
(statearr_30504_30577[(1)] = (36));

} else {
var statearr_30505_30578 = state_30473__$1;
(statearr_30505_30578[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (13))){
var inst_30364 = (state_30473[(26)]);
var inst_30367 = cljs.core.async.close_BANG_.call(null,inst_30364);
var state_30473__$1 = state_30473;
var statearr_30506_30579 = state_30473__$1;
(statearr_30506_30579[(2)] = inst_30367);

(statearr_30506_30579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (22))){
var inst_30385 = (state_30473[(8)]);
var inst_30388 = cljs.core.async.close_BANG_.call(null,inst_30385);
var state_30473__$1 = state_30473;
var statearr_30507_30580 = state_30473__$1;
(statearr_30507_30580[(2)] = inst_30388);

(statearr_30507_30580[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (36))){
var inst_30432 = (state_30473[(25)]);
var inst_30436 = cljs.core.chunk_first.call(null,inst_30432);
var inst_30437 = cljs.core.chunk_rest.call(null,inst_30432);
var inst_30438 = cljs.core.count.call(null,inst_30436);
var inst_30413 = inst_30437;
var inst_30414 = inst_30436;
var inst_30415 = inst_30438;
var inst_30416 = (0);
var state_30473__$1 = (function (){var statearr_30508 = state_30473;
(statearr_30508[(9)] = inst_30416);

(statearr_30508[(20)] = inst_30413);

(statearr_30508[(11)] = inst_30414);

(statearr_30508[(21)] = inst_30415);

return statearr_30508;
})();
var statearr_30509_30581 = state_30473__$1;
(statearr_30509_30581[(2)] = null);

(statearr_30509_30581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (41))){
var inst_30432 = (state_30473[(25)]);
var inst_30448 = (state_30473[(2)]);
var inst_30449 = cljs.core.next.call(null,inst_30432);
var inst_30413 = inst_30449;
var inst_30414 = null;
var inst_30415 = (0);
var inst_30416 = (0);
var state_30473__$1 = (function (){var statearr_30510 = state_30473;
(statearr_30510[(9)] = inst_30416);

(statearr_30510[(20)] = inst_30413);

(statearr_30510[(27)] = inst_30448);

(statearr_30510[(11)] = inst_30414);

(statearr_30510[(21)] = inst_30415);

return statearr_30510;
})();
var statearr_30511_30582 = state_30473__$1;
(statearr_30511_30582[(2)] = null);

(statearr_30511_30582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (43))){
var state_30473__$1 = state_30473;
var statearr_30512_30583 = state_30473__$1;
(statearr_30512_30583[(2)] = null);

(statearr_30512_30583[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (29))){
var inst_30457 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30513_30584 = state_30473__$1;
(statearr_30513_30584[(2)] = inst_30457);

(statearr_30513_30584[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (44))){
var inst_30466 = (state_30473[(2)]);
var state_30473__$1 = (function (){var statearr_30514 = state_30473;
(statearr_30514[(28)] = inst_30466);

return statearr_30514;
})();
var statearr_30515_30585 = state_30473__$1;
(statearr_30515_30585[(2)] = null);

(statearr_30515_30585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (6))){
var inst_30405 = (state_30473[(29)]);
var inst_30404 = cljs.core.deref.call(null,cs);
var inst_30405__$1 = cljs.core.keys.call(null,inst_30404);
var inst_30406 = cljs.core.count.call(null,inst_30405__$1);
var inst_30407 = cljs.core.reset_BANG_.call(null,dctr,inst_30406);
var inst_30412 = cljs.core.seq.call(null,inst_30405__$1);
var inst_30413 = inst_30412;
var inst_30414 = null;
var inst_30415 = (0);
var inst_30416 = (0);
var state_30473__$1 = (function (){var statearr_30516 = state_30473;
(statearr_30516[(9)] = inst_30416);

(statearr_30516[(30)] = inst_30407);

(statearr_30516[(20)] = inst_30413);

(statearr_30516[(29)] = inst_30405__$1);

(statearr_30516[(11)] = inst_30414);

(statearr_30516[(21)] = inst_30415);

return statearr_30516;
})();
var statearr_30517_30586 = state_30473__$1;
(statearr_30517_30586[(2)] = null);

(statearr_30517_30586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (28))){
var inst_30413 = (state_30473[(20)]);
var inst_30432 = (state_30473[(25)]);
var inst_30432__$1 = cljs.core.seq.call(null,inst_30413);
var state_30473__$1 = (function (){var statearr_30518 = state_30473;
(statearr_30518[(25)] = inst_30432__$1);

return statearr_30518;
})();
if(inst_30432__$1){
var statearr_30519_30587 = state_30473__$1;
(statearr_30519_30587[(1)] = (33));

} else {
var statearr_30520_30588 = state_30473__$1;
(statearr_30520_30588[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (25))){
var inst_30416 = (state_30473[(9)]);
var inst_30415 = (state_30473[(21)]);
var inst_30418 = (inst_30416 < inst_30415);
var inst_30419 = inst_30418;
var state_30473__$1 = state_30473;
if(cljs.core.truth_(inst_30419)){
var statearr_30521_30589 = state_30473__$1;
(statearr_30521_30589[(1)] = (27));

} else {
var statearr_30522_30590 = state_30473__$1;
(statearr_30522_30590[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (34))){
var state_30473__$1 = state_30473;
var statearr_30523_30591 = state_30473__$1;
(statearr_30523_30591[(2)] = null);

(statearr_30523_30591[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (17))){
var state_30473__$1 = state_30473;
var statearr_30524_30592 = state_30473__$1;
(statearr_30524_30592[(2)] = null);

(statearr_30524_30592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (3))){
var inst_30471 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30473__$1,inst_30471);
} else {
if((state_val_30474 === (12))){
var inst_30400 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30525_30593 = state_30473__$1;
(statearr_30525_30593[(2)] = inst_30400);

(statearr_30525_30593[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (2))){
var state_30473__$1 = state_30473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30473__$1,(4),ch);
} else {
if((state_val_30474 === (23))){
var state_30473__$1 = state_30473;
var statearr_30526_30594 = state_30473__$1;
(statearr_30526_30594[(2)] = null);

(statearr_30526_30594[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (35))){
var inst_30455 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30527_30595 = state_30473__$1;
(statearr_30527_30595[(2)] = inst_30455);

(statearr_30527_30595[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (19))){
var inst_30374 = (state_30473[(7)]);
var inst_30378 = cljs.core.chunk_first.call(null,inst_30374);
var inst_30379 = cljs.core.chunk_rest.call(null,inst_30374);
var inst_30380 = cljs.core.count.call(null,inst_30378);
var inst_30354 = inst_30379;
var inst_30355 = inst_30378;
var inst_30356 = inst_30380;
var inst_30357 = (0);
var state_30473__$1 = (function (){var statearr_30528 = state_30473;
(statearr_30528[(13)] = inst_30356);

(statearr_30528[(14)] = inst_30357);

(statearr_30528[(15)] = inst_30354);

(statearr_30528[(16)] = inst_30355);

return statearr_30528;
})();
var statearr_30529_30596 = state_30473__$1;
(statearr_30529_30596[(2)] = null);

(statearr_30529_30596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (11))){
var inst_30374 = (state_30473[(7)]);
var inst_30354 = (state_30473[(15)]);
var inst_30374__$1 = cljs.core.seq.call(null,inst_30354);
var state_30473__$1 = (function (){var statearr_30530 = state_30473;
(statearr_30530[(7)] = inst_30374__$1);

return statearr_30530;
})();
if(inst_30374__$1){
var statearr_30531_30597 = state_30473__$1;
(statearr_30531_30597[(1)] = (16));

} else {
var statearr_30532_30598 = state_30473__$1;
(statearr_30532_30598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (9))){
var inst_30402 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30533_30599 = state_30473__$1;
(statearr_30533_30599[(2)] = inst_30402);

(statearr_30533_30599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (5))){
var inst_30352 = cljs.core.deref.call(null,cs);
var inst_30353 = cljs.core.seq.call(null,inst_30352);
var inst_30354 = inst_30353;
var inst_30355 = null;
var inst_30356 = (0);
var inst_30357 = (0);
var state_30473__$1 = (function (){var statearr_30534 = state_30473;
(statearr_30534[(13)] = inst_30356);

(statearr_30534[(14)] = inst_30357);

(statearr_30534[(15)] = inst_30354);

(statearr_30534[(16)] = inst_30355);

return statearr_30534;
})();
var statearr_30535_30600 = state_30473__$1;
(statearr_30535_30600[(2)] = null);

(statearr_30535_30600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (14))){
var state_30473__$1 = state_30473;
var statearr_30536_30601 = state_30473__$1;
(statearr_30536_30601[(2)] = null);

(statearr_30536_30601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (45))){
var inst_30463 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30537_30602 = state_30473__$1;
(statearr_30537_30602[(2)] = inst_30463);

(statearr_30537_30602[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (26))){
var inst_30405 = (state_30473[(29)]);
var inst_30459 = (state_30473[(2)]);
var inst_30460 = cljs.core.seq.call(null,inst_30405);
var state_30473__$1 = (function (){var statearr_30538 = state_30473;
(statearr_30538[(31)] = inst_30459);

return statearr_30538;
})();
if(inst_30460){
var statearr_30539_30603 = state_30473__$1;
(statearr_30539_30603[(1)] = (42));

} else {
var statearr_30540_30604 = state_30473__$1;
(statearr_30540_30604[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (16))){
var inst_30374 = (state_30473[(7)]);
var inst_30376 = cljs.core.chunked_seq_QMARK_.call(null,inst_30374);
var state_30473__$1 = state_30473;
if(inst_30376){
var statearr_30541_30605 = state_30473__$1;
(statearr_30541_30605[(1)] = (19));

} else {
var statearr_30542_30606 = state_30473__$1;
(statearr_30542_30606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (38))){
var inst_30452 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30543_30607 = state_30473__$1;
(statearr_30543_30607[(2)] = inst_30452);

(statearr_30543_30607[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (30))){
var state_30473__$1 = state_30473;
var statearr_30544_30608 = state_30473__$1;
(statearr_30544_30608[(2)] = null);

(statearr_30544_30608[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (10))){
var inst_30357 = (state_30473[(14)]);
var inst_30355 = (state_30473[(16)]);
var inst_30363 = cljs.core._nth.call(null,inst_30355,inst_30357);
var inst_30364 = cljs.core.nth.call(null,inst_30363,(0),null);
var inst_30365 = cljs.core.nth.call(null,inst_30363,(1),null);
var state_30473__$1 = (function (){var statearr_30545 = state_30473;
(statearr_30545[(26)] = inst_30364);

return statearr_30545;
})();
if(cljs.core.truth_(inst_30365)){
var statearr_30546_30609 = state_30473__$1;
(statearr_30546_30609[(1)] = (13));

} else {
var statearr_30547_30610 = state_30473__$1;
(statearr_30547_30610[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (18))){
var inst_30398 = (state_30473[(2)]);
var state_30473__$1 = state_30473;
var statearr_30548_30611 = state_30473__$1;
(statearr_30548_30611[(2)] = inst_30398);

(statearr_30548_30611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (42))){
var state_30473__$1 = state_30473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30473__$1,(45),dchan);
} else {
if((state_val_30474 === (37))){
var inst_30345 = (state_30473[(10)]);
var inst_30441 = (state_30473[(23)]);
var inst_30432 = (state_30473[(25)]);
var inst_30441__$1 = cljs.core.first.call(null,inst_30432);
var inst_30442 = cljs.core.async.put_BANG_.call(null,inst_30441__$1,inst_30345,done);
var state_30473__$1 = (function (){var statearr_30549 = state_30473;
(statearr_30549[(23)] = inst_30441__$1);

return statearr_30549;
})();
if(cljs.core.truth_(inst_30442)){
var statearr_30550_30612 = state_30473__$1;
(statearr_30550_30612[(1)] = (39));

} else {
var statearr_30551_30613 = state_30473__$1;
(statearr_30551_30613[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30474 === (8))){
var inst_30356 = (state_30473[(13)]);
var inst_30357 = (state_30473[(14)]);
var inst_30359 = (inst_30357 < inst_30356);
var inst_30360 = inst_30359;
var state_30473__$1 = state_30473;
if(cljs.core.truth_(inst_30360)){
var statearr_30552_30614 = state_30473__$1;
(statearr_30552_30614[(1)] = (10));

} else {
var statearr_30553_30615 = state_30473__$1;
(statearr_30553_30615[(1)] = (11));

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
}
}
}
});})(c__22596__auto___30561,cs,m,dchan,dctr,done))
;
return ((function (switch__22531__auto__,c__22596__auto___30561,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22532__auto__ = null;
var cljs$core$async$mult_$_state_machine__22532__auto____0 = (function (){
var statearr_30557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30557[(0)] = cljs$core$async$mult_$_state_machine__22532__auto__);

(statearr_30557[(1)] = (1));

return statearr_30557;
});
var cljs$core$async$mult_$_state_machine__22532__auto____1 = (function (state_30473){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_30473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e30558){if((e30558 instanceof Object)){
var ex__22535__auto__ = e30558;
var statearr_30559_30616 = state_30473;
(statearr_30559_30616[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30617 = state_30473;
state_30473 = G__30617;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22532__auto__ = function(state_30473){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22532__auto____1.call(this,state_30473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22532__auto____0;
cljs$core$async$mult_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22532__auto____1;
return cljs$core$async$mult_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___30561,cs,m,dchan,dctr,done))
})();
var state__22598__auto__ = (function (){var statearr_30560 = f__22597__auto__.call(null);
(statearr_30560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___30561);

return statearr_30560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___30561,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30618 = [];
var len__20174__auto___30621 = arguments.length;
var i__20175__auto___30622 = (0);
while(true){
if((i__20175__auto___30622 < len__20174__auto___30621)){
args30618.push((arguments[i__20175__auto___30622]));

var G__30623 = (i__20175__auto___30622 + (1));
i__20175__auto___30622 = G__30623;
continue;
} else {
}
break;
}

var G__30620 = args30618.length;
switch (G__30620) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30618.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19771__auto__ = (((m == null))?null:m);
var m__19772__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,m,ch);
} else {
var m__19772__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19771__auto__ = (((m == null))?null:m);
var m__19772__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,m,ch);
} else {
var m__19772__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19771__auto__ = (((m == null))?null:m);
var m__19772__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,m);
} else {
var m__19772__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19771__auto__ = (((m == null))?null:m);
var m__19772__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,m,state_map);
} else {
var m__19772__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19771__auto__ = (((m == null))?null:m);
var m__19772__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,m,mode);
} else {
var m__19772__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20181__auto__ = [];
var len__20174__auto___30635 = arguments.length;
var i__20175__auto___30636 = (0);
while(true){
if((i__20175__auto___30636 < len__20174__auto___30635)){
args__20181__auto__.push((arguments[i__20175__auto___30636]));

var G__30637 = (i__20175__auto___30636 + (1));
i__20175__auto___30636 = G__30637;
continue;
} else {
}
break;
}

var argseq__20182__auto__ = ((((3) < args__20181__auto__.length))?(new cljs.core.IndexedSeq(args__20181__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20182__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30629){
var map__30630 = p__30629;
var map__30630__$1 = ((((!((map__30630 == null)))?((((map__30630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30630):map__30630);
var opts = map__30630__$1;
var statearr_30632_30638 = state;
(statearr_30632_30638[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__30630,map__30630__$1,opts){
return (function (val){
var statearr_30633_30639 = state;
(statearr_30633_30639[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30630,map__30630__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_30634_30640 = state;
(statearr_30634_30640[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30625){
var G__30626 = cljs.core.first.call(null,seq30625);
var seq30625__$1 = cljs.core.next.call(null,seq30625);
var G__30627 = cljs.core.first.call(null,seq30625__$1);
var seq30625__$2 = cljs.core.next.call(null,seq30625__$1);
var G__30628 = cljs.core.first.call(null,seq30625__$2);
var seq30625__$3 = cljs.core.next.call(null,seq30625__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30626,G__30627,G__30628,seq30625__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30804 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30805){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30805 = meta30805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30806,meta30805__$1){
var self__ = this;
var _30806__$1 = this;
return (new cljs.core.async.t_cljs$core$async30804(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30805__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30806){
var self__ = this;
var _30806__$1 = this;
return self__.meta30805;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30804.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30804.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30805","meta30805",1442163941,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30804";

cljs.core.async.t_cljs$core$async30804.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19714__auto__,writer__19715__auto__,opt__19716__auto__){
return cljs.core._write.call(null,writer__19715__auto__,"cljs.core.async/t_cljs$core$async30804");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30804 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30804(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30805){
return (new cljs.core.async.t_cljs$core$async30804(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30805));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30804(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22596__auto___30967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___30967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___30967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30904){
var state_val_30905 = (state_30904[(1)]);
if((state_val_30905 === (7))){
var inst_30822 = (state_30904[(2)]);
var state_30904__$1 = state_30904;
var statearr_30906_30968 = state_30904__$1;
(statearr_30906_30968[(2)] = inst_30822);

(statearr_30906_30968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (20))){
var inst_30834 = (state_30904[(7)]);
var state_30904__$1 = state_30904;
var statearr_30907_30969 = state_30904__$1;
(statearr_30907_30969[(2)] = inst_30834);

(statearr_30907_30969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (27))){
var state_30904__$1 = state_30904;
var statearr_30908_30970 = state_30904__$1;
(statearr_30908_30970[(2)] = null);

(statearr_30908_30970[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (1))){
var inst_30810 = (state_30904[(8)]);
var inst_30810__$1 = calc_state.call(null);
var inst_30812 = (inst_30810__$1 == null);
var inst_30813 = cljs.core.not.call(null,inst_30812);
var state_30904__$1 = (function (){var statearr_30909 = state_30904;
(statearr_30909[(8)] = inst_30810__$1);

return statearr_30909;
})();
if(inst_30813){
var statearr_30910_30971 = state_30904__$1;
(statearr_30910_30971[(1)] = (2));

} else {
var statearr_30911_30972 = state_30904__$1;
(statearr_30911_30972[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (24))){
var inst_30864 = (state_30904[(9)]);
var inst_30857 = (state_30904[(10)]);
var inst_30878 = (state_30904[(11)]);
var inst_30878__$1 = inst_30857.call(null,inst_30864);
var state_30904__$1 = (function (){var statearr_30912 = state_30904;
(statearr_30912[(11)] = inst_30878__$1);

return statearr_30912;
})();
if(cljs.core.truth_(inst_30878__$1)){
var statearr_30913_30973 = state_30904__$1;
(statearr_30913_30973[(1)] = (29));

} else {
var statearr_30914_30974 = state_30904__$1;
(statearr_30914_30974[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (4))){
var inst_30825 = (state_30904[(2)]);
var state_30904__$1 = state_30904;
if(cljs.core.truth_(inst_30825)){
var statearr_30915_30975 = state_30904__$1;
(statearr_30915_30975[(1)] = (8));

} else {
var statearr_30916_30976 = state_30904__$1;
(statearr_30916_30976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (15))){
var inst_30851 = (state_30904[(2)]);
var state_30904__$1 = state_30904;
if(cljs.core.truth_(inst_30851)){
var statearr_30917_30977 = state_30904__$1;
(statearr_30917_30977[(1)] = (19));

} else {
var statearr_30918_30978 = state_30904__$1;
(statearr_30918_30978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (21))){
var inst_30856 = (state_30904[(12)]);
var inst_30856__$1 = (state_30904[(2)]);
var inst_30857 = cljs.core.get.call(null,inst_30856__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30858 = cljs.core.get.call(null,inst_30856__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30859 = cljs.core.get.call(null,inst_30856__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30904__$1 = (function (){var statearr_30919 = state_30904;
(statearr_30919[(10)] = inst_30857);

(statearr_30919[(13)] = inst_30858);

(statearr_30919[(12)] = inst_30856__$1);

return statearr_30919;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30904__$1,(22),inst_30859);
} else {
if((state_val_30905 === (31))){
var inst_30886 = (state_30904[(2)]);
var state_30904__$1 = state_30904;
if(cljs.core.truth_(inst_30886)){
var statearr_30920_30979 = state_30904__$1;
(statearr_30920_30979[(1)] = (32));

} else {
var statearr_30921_30980 = state_30904__$1;
(statearr_30921_30980[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (32))){
var inst_30863 = (state_30904[(14)]);
var state_30904__$1 = state_30904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30904__$1,(35),out,inst_30863);
} else {
if((state_val_30905 === (33))){
var inst_30856 = (state_30904[(12)]);
var inst_30834 = inst_30856;
var state_30904__$1 = (function (){var statearr_30922 = state_30904;
(statearr_30922[(7)] = inst_30834);

return statearr_30922;
})();
var statearr_30923_30981 = state_30904__$1;
(statearr_30923_30981[(2)] = null);

(statearr_30923_30981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (13))){
var inst_30834 = (state_30904[(7)]);
var inst_30841 = inst_30834.cljs$lang$protocol_mask$partition0$;
var inst_30842 = (inst_30841 & (64));
var inst_30843 = inst_30834.cljs$core$ISeq$;
var inst_30844 = (inst_30842) || (inst_30843);
var state_30904__$1 = state_30904;
if(cljs.core.truth_(inst_30844)){
var statearr_30924_30982 = state_30904__$1;
(statearr_30924_30982[(1)] = (16));

} else {
var statearr_30925_30983 = state_30904__$1;
(statearr_30925_30983[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (22))){
var inst_30864 = (state_30904[(9)]);
var inst_30863 = (state_30904[(14)]);
var inst_30862 = (state_30904[(2)]);
var inst_30863__$1 = cljs.core.nth.call(null,inst_30862,(0),null);
var inst_30864__$1 = cljs.core.nth.call(null,inst_30862,(1),null);
var inst_30865 = (inst_30863__$1 == null);
var inst_30866 = cljs.core._EQ_.call(null,inst_30864__$1,change);
var inst_30867 = (inst_30865) || (inst_30866);
var state_30904__$1 = (function (){var statearr_30926 = state_30904;
(statearr_30926[(9)] = inst_30864__$1);

(statearr_30926[(14)] = inst_30863__$1);

return statearr_30926;
})();
if(cljs.core.truth_(inst_30867)){
var statearr_30927_30984 = state_30904__$1;
(statearr_30927_30984[(1)] = (23));

} else {
var statearr_30928_30985 = state_30904__$1;
(statearr_30928_30985[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (36))){
var inst_30856 = (state_30904[(12)]);
var inst_30834 = inst_30856;
var state_30904__$1 = (function (){var statearr_30929 = state_30904;
(statearr_30929[(7)] = inst_30834);

return statearr_30929;
})();
var statearr_30930_30986 = state_30904__$1;
(statearr_30930_30986[(2)] = null);

(statearr_30930_30986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (29))){
var inst_30878 = (state_30904[(11)]);
var state_30904__$1 = state_30904;
var statearr_30931_30987 = state_30904__$1;
(statearr_30931_30987[(2)] = inst_30878);

(statearr_30931_30987[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (6))){
var state_30904__$1 = state_30904;
var statearr_30932_30988 = state_30904__$1;
(statearr_30932_30988[(2)] = false);

(statearr_30932_30988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (28))){
var inst_30874 = (state_30904[(2)]);
var inst_30875 = calc_state.call(null);
var inst_30834 = inst_30875;
var state_30904__$1 = (function (){var statearr_30933 = state_30904;
(statearr_30933[(7)] = inst_30834);

(statearr_30933[(15)] = inst_30874);

return statearr_30933;
})();
var statearr_30934_30989 = state_30904__$1;
(statearr_30934_30989[(2)] = null);

(statearr_30934_30989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (25))){
var inst_30900 = (state_30904[(2)]);
var state_30904__$1 = state_30904;
var statearr_30935_30990 = state_30904__$1;
(statearr_30935_30990[(2)] = inst_30900);

(statearr_30935_30990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (34))){
var inst_30898 = (state_30904[(2)]);
var state_30904__$1 = state_30904;
var statearr_30936_30991 = state_30904__$1;
(statearr_30936_30991[(2)] = inst_30898);

(statearr_30936_30991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (17))){
var state_30904__$1 = state_30904;
var statearr_30937_30992 = state_30904__$1;
(statearr_30937_30992[(2)] = false);

(statearr_30937_30992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (3))){
var state_30904__$1 = state_30904;
var statearr_30938_30993 = state_30904__$1;
(statearr_30938_30993[(2)] = false);

(statearr_30938_30993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (12))){
var inst_30902 = (state_30904[(2)]);
var state_30904__$1 = state_30904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30904__$1,inst_30902);
} else {
if((state_val_30905 === (2))){
var inst_30810 = (state_30904[(8)]);
var inst_30815 = inst_30810.cljs$lang$protocol_mask$partition0$;
var inst_30816 = (inst_30815 & (64));
var inst_30817 = inst_30810.cljs$core$ISeq$;
var inst_30818 = (inst_30816) || (inst_30817);
var state_30904__$1 = state_30904;
if(cljs.core.truth_(inst_30818)){
var statearr_30939_30994 = state_30904__$1;
(statearr_30939_30994[(1)] = (5));

} else {
var statearr_30940_30995 = state_30904__$1;
(statearr_30940_30995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (23))){
var inst_30863 = (state_30904[(14)]);
var inst_30869 = (inst_30863 == null);
var state_30904__$1 = state_30904;
if(cljs.core.truth_(inst_30869)){
var statearr_30941_30996 = state_30904__$1;
(statearr_30941_30996[(1)] = (26));

} else {
var statearr_30942_30997 = state_30904__$1;
(statearr_30942_30997[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (35))){
var inst_30889 = (state_30904[(2)]);
var state_30904__$1 = state_30904;
if(cljs.core.truth_(inst_30889)){
var statearr_30943_30998 = state_30904__$1;
(statearr_30943_30998[(1)] = (36));

} else {
var statearr_30944_30999 = state_30904__$1;
(statearr_30944_30999[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (19))){
var inst_30834 = (state_30904[(7)]);
var inst_30853 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30834);
var state_30904__$1 = state_30904;
var statearr_30945_31000 = state_30904__$1;
(statearr_30945_31000[(2)] = inst_30853);

(statearr_30945_31000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (11))){
var inst_30834 = (state_30904[(7)]);
var inst_30838 = (inst_30834 == null);
var inst_30839 = cljs.core.not.call(null,inst_30838);
var state_30904__$1 = state_30904;
if(inst_30839){
var statearr_30946_31001 = state_30904__$1;
(statearr_30946_31001[(1)] = (13));

} else {
var statearr_30947_31002 = state_30904__$1;
(statearr_30947_31002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (9))){
var inst_30810 = (state_30904[(8)]);
var state_30904__$1 = state_30904;
var statearr_30948_31003 = state_30904__$1;
(statearr_30948_31003[(2)] = inst_30810);

(statearr_30948_31003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (5))){
var state_30904__$1 = state_30904;
var statearr_30949_31004 = state_30904__$1;
(statearr_30949_31004[(2)] = true);

(statearr_30949_31004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (14))){
var state_30904__$1 = state_30904;
var statearr_30950_31005 = state_30904__$1;
(statearr_30950_31005[(2)] = false);

(statearr_30950_31005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (26))){
var inst_30864 = (state_30904[(9)]);
var inst_30871 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30864);
var state_30904__$1 = state_30904;
var statearr_30951_31006 = state_30904__$1;
(statearr_30951_31006[(2)] = inst_30871);

(statearr_30951_31006[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (16))){
var state_30904__$1 = state_30904;
var statearr_30952_31007 = state_30904__$1;
(statearr_30952_31007[(2)] = true);

(statearr_30952_31007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (38))){
var inst_30894 = (state_30904[(2)]);
var state_30904__$1 = state_30904;
var statearr_30953_31008 = state_30904__$1;
(statearr_30953_31008[(2)] = inst_30894);

(statearr_30953_31008[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (30))){
var inst_30864 = (state_30904[(9)]);
var inst_30857 = (state_30904[(10)]);
var inst_30858 = (state_30904[(13)]);
var inst_30881 = cljs.core.empty_QMARK_.call(null,inst_30857);
var inst_30882 = inst_30858.call(null,inst_30864);
var inst_30883 = cljs.core.not.call(null,inst_30882);
var inst_30884 = (inst_30881) && (inst_30883);
var state_30904__$1 = state_30904;
var statearr_30954_31009 = state_30904__$1;
(statearr_30954_31009[(2)] = inst_30884);

(statearr_30954_31009[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (10))){
var inst_30810 = (state_30904[(8)]);
var inst_30830 = (state_30904[(2)]);
var inst_30831 = cljs.core.get.call(null,inst_30830,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30832 = cljs.core.get.call(null,inst_30830,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30833 = cljs.core.get.call(null,inst_30830,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30834 = inst_30810;
var state_30904__$1 = (function (){var statearr_30955 = state_30904;
(statearr_30955[(7)] = inst_30834);

(statearr_30955[(16)] = inst_30833);

(statearr_30955[(17)] = inst_30831);

(statearr_30955[(18)] = inst_30832);

return statearr_30955;
})();
var statearr_30956_31010 = state_30904__$1;
(statearr_30956_31010[(2)] = null);

(statearr_30956_31010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (18))){
var inst_30848 = (state_30904[(2)]);
var state_30904__$1 = state_30904;
var statearr_30957_31011 = state_30904__$1;
(statearr_30957_31011[(2)] = inst_30848);

(statearr_30957_31011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (37))){
var state_30904__$1 = state_30904;
var statearr_30958_31012 = state_30904__$1;
(statearr_30958_31012[(2)] = null);

(statearr_30958_31012[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30905 === (8))){
var inst_30810 = (state_30904[(8)]);
var inst_30827 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30810);
var state_30904__$1 = state_30904;
var statearr_30959_31013 = state_30904__$1;
(statearr_30959_31013[(2)] = inst_30827);

(statearr_30959_31013[(1)] = (10));


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
});})(c__22596__auto___30967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22531__auto__,c__22596__auto___30967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22532__auto__ = null;
var cljs$core$async$mix_$_state_machine__22532__auto____0 = (function (){
var statearr_30963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30963[(0)] = cljs$core$async$mix_$_state_machine__22532__auto__);

(statearr_30963[(1)] = (1));

return statearr_30963;
});
var cljs$core$async$mix_$_state_machine__22532__auto____1 = (function (state_30904){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_30904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e30964){if((e30964 instanceof Object)){
var ex__22535__auto__ = e30964;
var statearr_30965_31014 = state_30904;
(statearr_30965_31014[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31015 = state_30904;
state_30904 = G__31015;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22532__auto__ = function(state_30904){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22532__auto____1.call(this,state_30904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22532__auto____0;
cljs$core$async$mix_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22532__auto____1;
return cljs$core$async$mix_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___30967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22598__auto__ = (function (){var statearr_30966 = f__22597__auto__.call(null);
(statearr_30966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___30967);

return statearr_30966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___30967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19771__auto__ = (((p == null))?null:p);
var m__19772__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19772__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19771__auto__ = (((p == null))?null:p);
var m__19772__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,p,v,ch);
} else {
var m__19772__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31016 = [];
var len__20174__auto___31019 = arguments.length;
var i__20175__auto___31020 = (0);
while(true){
if((i__20175__auto___31020 < len__20174__auto___31019)){
args31016.push((arguments[i__20175__auto___31020]));

var G__31021 = (i__20175__auto___31020 + (1));
i__20175__auto___31020 = G__31021;
continue;
} else {
}
break;
}

var G__31018 = args31016.length;
switch (G__31018) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31016.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19771__auto__ = (((p == null))?null:p);
var m__19772__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,p);
} else {
var m__19772__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19771__auto__ = (((p == null))?null:p);
var m__19772__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19771__auto__)]);
if(!((m__19772__auto__ == null))){
return m__19772__auto__.call(null,p,v);
} else {
var m__19772__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19772__auto____$1 == null))){
return m__19772__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31024 = [];
var len__20174__auto___31149 = arguments.length;
var i__20175__auto___31150 = (0);
while(true){
if((i__20175__auto___31150 < len__20174__auto___31149)){
args31024.push((arguments[i__20175__auto___31150]));

var G__31151 = (i__20175__auto___31150 + (1));
i__20175__auto___31150 = G__31151;
continue;
} else {
}
break;
}

var G__31026 = args31024.length;
switch (G__31026) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31024.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19116__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19116__auto__)){
return or__19116__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19116__auto__,mults){
return (function (p1__31023_SHARP_){
if(cljs.core.truth_(p1__31023_SHARP_.call(null,topic))){
return p1__31023_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31023_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19116__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31027 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31028){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31028 = meta31028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31029,meta31028__$1){
var self__ = this;
var _31029__$1 = this;
return (new cljs.core.async.t_cljs$core$async31027(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31028__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31029){
var self__ = this;
var _31029__$1 = this;
return self__.meta31028;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31027.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31027.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31028","meta31028",-303965076,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31027";

cljs.core.async.t_cljs$core$async31027.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19714__auto__,writer__19715__auto__,opt__19716__auto__){
return cljs.core._write.call(null,writer__19715__auto__,"cljs.core.async/t_cljs$core$async31027");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31027 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31027(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31028){
return (new cljs.core.async.t_cljs$core$async31027(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31028));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31027(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22596__auto___31153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___31153,mults,ensure_mult,p){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___31153,mults,ensure_mult,p){
return (function (state_31101){
var state_val_31102 = (state_31101[(1)]);
if((state_val_31102 === (7))){
var inst_31097 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31103_31154 = state_31101__$1;
(statearr_31103_31154[(2)] = inst_31097);

(statearr_31103_31154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (20))){
var state_31101__$1 = state_31101;
var statearr_31104_31155 = state_31101__$1;
(statearr_31104_31155[(2)] = null);

(statearr_31104_31155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (1))){
var state_31101__$1 = state_31101;
var statearr_31105_31156 = state_31101__$1;
(statearr_31105_31156[(2)] = null);

(statearr_31105_31156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (24))){
var inst_31080 = (state_31101[(7)]);
var inst_31089 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31080);
var state_31101__$1 = state_31101;
var statearr_31106_31157 = state_31101__$1;
(statearr_31106_31157[(2)] = inst_31089);

(statearr_31106_31157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (4))){
var inst_31032 = (state_31101[(8)]);
var inst_31032__$1 = (state_31101[(2)]);
var inst_31033 = (inst_31032__$1 == null);
var state_31101__$1 = (function (){var statearr_31107 = state_31101;
(statearr_31107[(8)] = inst_31032__$1);

return statearr_31107;
})();
if(cljs.core.truth_(inst_31033)){
var statearr_31108_31158 = state_31101__$1;
(statearr_31108_31158[(1)] = (5));

} else {
var statearr_31109_31159 = state_31101__$1;
(statearr_31109_31159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (15))){
var inst_31074 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31110_31160 = state_31101__$1;
(statearr_31110_31160[(2)] = inst_31074);

(statearr_31110_31160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (21))){
var inst_31094 = (state_31101[(2)]);
var state_31101__$1 = (function (){var statearr_31111 = state_31101;
(statearr_31111[(9)] = inst_31094);

return statearr_31111;
})();
var statearr_31112_31161 = state_31101__$1;
(statearr_31112_31161[(2)] = null);

(statearr_31112_31161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (13))){
var inst_31056 = (state_31101[(10)]);
var inst_31058 = cljs.core.chunked_seq_QMARK_.call(null,inst_31056);
var state_31101__$1 = state_31101;
if(inst_31058){
var statearr_31113_31162 = state_31101__$1;
(statearr_31113_31162[(1)] = (16));

} else {
var statearr_31114_31163 = state_31101__$1;
(statearr_31114_31163[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (22))){
var inst_31086 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
if(cljs.core.truth_(inst_31086)){
var statearr_31115_31164 = state_31101__$1;
(statearr_31115_31164[(1)] = (23));

} else {
var statearr_31116_31165 = state_31101__$1;
(statearr_31116_31165[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (6))){
var inst_31032 = (state_31101[(8)]);
var inst_31082 = (state_31101[(11)]);
var inst_31080 = (state_31101[(7)]);
var inst_31080__$1 = topic_fn.call(null,inst_31032);
var inst_31081 = cljs.core.deref.call(null,mults);
var inst_31082__$1 = cljs.core.get.call(null,inst_31081,inst_31080__$1);
var state_31101__$1 = (function (){var statearr_31117 = state_31101;
(statearr_31117[(11)] = inst_31082__$1);

(statearr_31117[(7)] = inst_31080__$1);

return statearr_31117;
})();
if(cljs.core.truth_(inst_31082__$1)){
var statearr_31118_31166 = state_31101__$1;
(statearr_31118_31166[(1)] = (19));

} else {
var statearr_31119_31167 = state_31101__$1;
(statearr_31119_31167[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (25))){
var inst_31091 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31120_31168 = state_31101__$1;
(statearr_31120_31168[(2)] = inst_31091);

(statearr_31120_31168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (17))){
var inst_31056 = (state_31101[(10)]);
var inst_31065 = cljs.core.first.call(null,inst_31056);
var inst_31066 = cljs.core.async.muxch_STAR_.call(null,inst_31065);
var inst_31067 = cljs.core.async.close_BANG_.call(null,inst_31066);
var inst_31068 = cljs.core.next.call(null,inst_31056);
var inst_31042 = inst_31068;
var inst_31043 = null;
var inst_31044 = (0);
var inst_31045 = (0);
var state_31101__$1 = (function (){var statearr_31121 = state_31101;
(statearr_31121[(12)] = inst_31044);

(statearr_31121[(13)] = inst_31043);

(statearr_31121[(14)] = inst_31045);

(statearr_31121[(15)] = inst_31067);

(statearr_31121[(16)] = inst_31042);

return statearr_31121;
})();
var statearr_31122_31169 = state_31101__$1;
(statearr_31122_31169[(2)] = null);

(statearr_31122_31169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (3))){
var inst_31099 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31101__$1,inst_31099);
} else {
if((state_val_31102 === (12))){
var inst_31076 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31123_31170 = state_31101__$1;
(statearr_31123_31170[(2)] = inst_31076);

(statearr_31123_31170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (2))){
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31101__$1,(4),ch);
} else {
if((state_val_31102 === (23))){
var state_31101__$1 = state_31101;
var statearr_31124_31171 = state_31101__$1;
(statearr_31124_31171[(2)] = null);

(statearr_31124_31171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (19))){
var inst_31032 = (state_31101[(8)]);
var inst_31082 = (state_31101[(11)]);
var inst_31084 = cljs.core.async.muxch_STAR_.call(null,inst_31082);
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31101__$1,(22),inst_31084,inst_31032);
} else {
if((state_val_31102 === (11))){
var inst_31056 = (state_31101[(10)]);
var inst_31042 = (state_31101[(16)]);
var inst_31056__$1 = cljs.core.seq.call(null,inst_31042);
var state_31101__$1 = (function (){var statearr_31125 = state_31101;
(statearr_31125[(10)] = inst_31056__$1);

return statearr_31125;
})();
if(inst_31056__$1){
var statearr_31126_31172 = state_31101__$1;
(statearr_31126_31172[(1)] = (13));

} else {
var statearr_31127_31173 = state_31101__$1;
(statearr_31127_31173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (9))){
var inst_31078 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31128_31174 = state_31101__$1;
(statearr_31128_31174[(2)] = inst_31078);

(statearr_31128_31174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (5))){
var inst_31039 = cljs.core.deref.call(null,mults);
var inst_31040 = cljs.core.vals.call(null,inst_31039);
var inst_31041 = cljs.core.seq.call(null,inst_31040);
var inst_31042 = inst_31041;
var inst_31043 = null;
var inst_31044 = (0);
var inst_31045 = (0);
var state_31101__$1 = (function (){var statearr_31129 = state_31101;
(statearr_31129[(12)] = inst_31044);

(statearr_31129[(13)] = inst_31043);

(statearr_31129[(14)] = inst_31045);

(statearr_31129[(16)] = inst_31042);

return statearr_31129;
})();
var statearr_31130_31175 = state_31101__$1;
(statearr_31130_31175[(2)] = null);

(statearr_31130_31175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (14))){
var state_31101__$1 = state_31101;
var statearr_31134_31176 = state_31101__$1;
(statearr_31134_31176[(2)] = null);

(statearr_31134_31176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (16))){
var inst_31056 = (state_31101[(10)]);
var inst_31060 = cljs.core.chunk_first.call(null,inst_31056);
var inst_31061 = cljs.core.chunk_rest.call(null,inst_31056);
var inst_31062 = cljs.core.count.call(null,inst_31060);
var inst_31042 = inst_31061;
var inst_31043 = inst_31060;
var inst_31044 = inst_31062;
var inst_31045 = (0);
var state_31101__$1 = (function (){var statearr_31135 = state_31101;
(statearr_31135[(12)] = inst_31044);

(statearr_31135[(13)] = inst_31043);

(statearr_31135[(14)] = inst_31045);

(statearr_31135[(16)] = inst_31042);

return statearr_31135;
})();
var statearr_31136_31177 = state_31101__$1;
(statearr_31136_31177[(2)] = null);

(statearr_31136_31177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (10))){
var inst_31044 = (state_31101[(12)]);
var inst_31043 = (state_31101[(13)]);
var inst_31045 = (state_31101[(14)]);
var inst_31042 = (state_31101[(16)]);
var inst_31050 = cljs.core._nth.call(null,inst_31043,inst_31045);
var inst_31051 = cljs.core.async.muxch_STAR_.call(null,inst_31050);
var inst_31052 = cljs.core.async.close_BANG_.call(null,inst_31051);
var inst_31053 = (inst_31045 + (1));
var tmp31131 = inst_31044;
var tmp31132 = inst_31043;
var tmp31133 = inst_31042;
var inst_31042__$1 = tmp31133;
var inst_31043__$1 = tmp31132;
var inst_31044__$1 = tmp31131;
var inst_31045__$1 = inst_31053;
var state_31101__$1 = (function (){var statearr_31137 = state_31101;
(statearr_31137[(12)] = inst_31044__$1);

(statearr_31137[(13)] = inst_31043__$1);

(statearr_31137[(14)] = inst_31045__$1);

(statearr_31137[(17)] = inst_31052);

(statearr_31137[(16)] = inst_31042__$1);

return statearr_31137;
})();
var statearr_31138_31178 = state_31101__$1;
(statearr_31138_31178[(2)] = null);

(statearr_31138_31178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (18))){
var inst_31071 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31139_31179 = state_31101__$1;
(statearr_31139_31179[(2)] = inst_31071);

(statearr_31139_31179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (8))){
var inst_31044 = (state_31101[(12)]);
var inst_31045 = (state_31101[(14)]);
var inst_31047 = (inst_31045 < inst_31044);
var inst_31048 = inst_31047;
var state_31101__$1 = state_31101;
if(cljs.core.truth_(inst_31048)){
var statearr_31140_31180 = state_31101__$1;
(statearr_31140_31180[(1)] = (10));

} else {
var statearr_31141_31181 = state_31101__$1;
(statearr_31141_31181[(1)] = (11));

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
}
}
}
}
});})(c__22596__auto___31153,mults,ensure_mult,p))
;
return ((function (switch__22531__auto__,c__22596__auto___31153,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_31145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31145[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_31145[(1)] = (1));

return statearr_31145;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_31101){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_31101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e31146){if((e31146 instanceof Object)){
var ex__22535__auto__ = e31146;
var statearr_31147_31182 = state_31101;
(statearr_31147_31182[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31183 = state_31101;
state_31101 = G__31183;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_31101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_31101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___31153,mults,ensure_mult,p))
})();
var state__22598__auto__ = (function (){var statearr_31148 = f__22597__auto__.call(null);
(statearr_31148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___31153);

return statearr_31148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___31153,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31184 = [];
var len__20174__auto___31187 = arguments.length;
var i__20175__auto___31188 = (0);
while(true){
if((i__20175__auto___31188 < len__20174__auto___31187)){
args31184.push((arguments[i__20175__auto___31188]));

var G__31189 = (i__20175__auto___31188 + (1));
i__20175__auto___31188 = G__31189;
continue;
} else {
}
break;
}

var G__31186 = args31184.length;
switch (G__31186) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31184.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31191 = [];
var len__20174__auto___31194 = arguments.length;
var i__20175__auto___31195 = (0);
while(true){
if((i__20175__auto___31195 < len__20174__auto___31194)){
args31191.push((arguments[i__20175__auto___31195]));

var G__31196 = (i__20175__auto___31195 + (1));
i__20175__auto___31195 = G__31196;
continue;
} else {
}
break;
}

var G__31193 = args31191.length;
switch (G__31193) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31191.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31198 = [];
var len__20174__auto___31269 = arguments.length;
var i__20175__auto___31270 = (0);
while(true){
if((i__20175__auto___31270 < len__20174__auto___31269)){
args31198.push((arguments[i__20175__auto___31270]));

var G__31271 = (i__20175__auto___31270 + (1));
i__20175__auto___31270 = G__31271;
continue;
} else {
}
break;
}

var G__31200 = args31198.length;
switch (G__31200) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31198.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22596__auto___31273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___31273,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___31273,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31239){
var state_val_31240 = (state_31239[(1)]);
if((state_val_31240 === (7))){
var state_31239__$1 = state_31239;
var statearr_31241_31274 = state_31239__$1;
(statearr_31241_31274[(2)] = null);

(statearr_31241_31274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (1))){
var state_31239__$1 = state_31239;
var statearr_31242_31275 = state_31239__$1;
(statearr_31242_31275[(2)] = null);

(statearr_31242_31275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (4))){
var inst_31203 = (state_31239[(7)]);
var inst_31205 = (inst_31203 < cnt);
var state_31239__$1 = state_31239;
if(cljs.core.truth_(inst_31205)){
var statearr_31243_31276 = state_31239__$1;
(statearr_31243_31276[(1)] = (6));

} else {
var statearr_31244_31277 = state_31239__$1;
(statearr_31244_31277[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (15))){
var inst_31235 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31245_31278 = state_31239__$1;
(statearr_31245_31278[(2)] = inst_31235);

(statearr_31245_31278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (13))){
var inst_31228 = cljs.core.async.close_BANG_.call(null,out);
var state_31239__$1 = state_31239;
var statearr_31246_31279 = state_31239__$1;
(statearr_31246_31279[(2)] = inst_31228);

(statearr_31246_31279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (6))){
var state_31239__$1 = state_31239;
var statearr_31247_31280 = state_31239__$1;
(statearr_31247_31280[(2)] = null);

(statearr_31247_31280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (3))){
var inst_31237 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31239__$1,inst_31237);
} else {
if((state_val_31240 === (12))){
var inst_31225 = (state_31239[(8)]);
var inst_31225__$1 = (state_31239[(2)]);
var inst_31226 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31225__$1);
var state_31239__$1 = (function (){var statearr_31248 = state_31239;
(statearr_31248[(8)] = inst_31225__$1);

return statearr_31248;
})();
if(cljs.core.truth_(inst_31226)){
var statearr_31249_31281 = state_31239__$1;
(statearr_31249_31281[(1)] = (13));

} else {
var statearr_31250_31282 = state_31239__$1;
(statearr_31250_31282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (2))){
var inst_31202 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31203 = (0);
var state_31239__$1 = (function (){var statearr_31251 = state_31239;
(statearr_31251[(7)] = inst_31203);

(statearr_31251[(9)] = inst_31202);

return statearr_31251;
})();
var statearr_31252_31283 = state_31239__$1;
(statearr_31252_31283[(2)] = null);

(statearr_31252_31283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (11))){
var inst_31203 = (state_31239[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31239,(10),Object,null,(9));
var inst_31212 = chs__$1.call(null,inst_31203);
var inst_31213 = done.call(null,inst_31203);
var inst_31214 = cljs.core.async.take_BANG_.call(null,inst_31212,inst_31213);
var state_31239__$1 = state_31239;
var statearr_31253_31284 = state_31239__$1;
(statearr_31253_31284[(2)] = inst_31214);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31239__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (9))){
var inst_31203 = (state_31239[(7)]);
var inst_31216 = (state_31239[(2)]);
var inst_31217 = (inst_31203 + (1));
var inst_31203__$1 = inst_31217;
var state_31239__$1 = (function (){var statearr_31254 = state_31239;
(statearr_31254[(7)] = inst_31203__$1);

(statearr_31254[(10)] = inst_31216);

return statearr_31254;
})();
var statearr_31255_31285 = state_31239__$1;
(statearr_31255_31285[(2)] = null);

(statearr_31255_31285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (5))){
var inst_31223 = (state_31239[(2)]);
var state_31239__$1 = (function (){var statearr_31256 = state_31239;
(statearr_31256[(11)] = inst_31223);

return statearr_31256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31239__$1,(12),dchan);
} else {
if((state_val_31240 === (14))){
var inst_31225 = (state_31239[(8)]);
var inst_31230 = cljs.core.apply.call(null,f,inst_31225);
var state_31239__$1 = state_31239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31239__$1,(16),out,inst_31230);
} else {
if((state_val_31240 === (16))){
var inst_31232 = (state_31239[(2)]);
var state_31239__$1 = (function (){var statearr_31257 = state_31239;
(statearr_31257[(12)] = inst_31232);

return statearr_31257;
})();
var statearr_31258_31286 = state_31239__$1;
(statearr_31258_31286[(2)] = null);

(statearr_31258_31286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (10))){
var inst_31207 = (state_31239[(2)]);
var inst_31208 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31239__$1 = (function (){var statearr_31259 = state_31239;
(statearr_31259[(13)] = inst_31207);

return statearr_31259;
})();
var statearr_31260_31287 = state_31239__$1;
(statearr_31260_31287[(2)] = inst_31208);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31239__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (8))){
var inst_31221 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31261_31288 = state_31239__$1;
(statearr_31261_31288[(2)] = inst_31221);

(statearr_31261_31288[(1)] = (5));


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
});})(c__22596__auto___31273,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22531__auto__,c__22596__auto___31273,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_31265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31265[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_31265[(1)] = (1));

return statearr_31265;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_31239){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_31239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e31266){if((e31266 instanceof Object)){
var ex__22535__auto__ = e31266;
var statearr_31267_31289 = state_31239;
(statearr_31267_31289[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31290 = state_31239;
state_31239 = G__31290;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_31239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_31239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___31273,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22598__auto__ = (function (){var statearr_31268 = f__22597__auto__.call(null);
(statearr_31268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___31273);

return statearr_31268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___31273,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31292 = [];
var len__20174__auto___31348 = arguments.length;
var i__20175__auto___31349 = (0);
while(true){
if((i__20175__auto___31349 < len__20174__auto___31348)){
args31292.push((arguments[i__20175__auto___31349]));

var G__31350 = (i__20175__auto___31349 + (1));
i__20175__auto___31349 = G__31350;
continue;
} else {
}
break;
}

var G__31294 = args31292.length;
switch (G__31294) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31292.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22596__auto___31352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___31352,out){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___31352,out){
return (function (state_31324){
var state_val_31325 = (state_31324[(1)]);
if((state_val_31325 === (7))){
var inst_31303 = (state_31324[(7)]);
var inst_31304 = (state_31324[(8)]);
var inst_31303__$1 = (state_31324[(2)]);
var inst_31304__$1 = cljs.core.nth.call(null,inst_31303__$1,(0),null);
var inst_31305 = cljs.core.nth.call(null,inst_31303__$1,(1),null);
var inst_31306 = (inst_31304__$1 == null);
var state_31324__$1 = (function (){var statearr_31326 = state_31324;
(statearr_31326[(7)] = inst_31303__$1);

(statearr_31326[(8)] = inst_31304__$1);

(statearr_31326[(9)] = inst_31305);

return statearr_31326;
})();
if(cljs.core.truth_(inst_31306)){
var statearr_31327_31353 = state_31324__$1;
(statearr_31327_31353[(1)] = (8));

} else {
var statearr_31328_31354 = state_31324__$1;
(statearr_31328_31354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (1))){
var inst_31295 = cljs.core.vec.call(null,chs);
var inst_31296 = inst_31295;
var state_31324__$1 = (function (){var statearr_31329 = state_31324;
(statearr_31329[(10)] = inst_31296);

return statearr_31329;
})();
var statearr_31330_31355 = state_31324__$1;
(statearr_31330_31355[(2)] = null);

(statearr_31330_31355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (4))){
var inst_31296 = (state_31324[(10)]);
var state_31324__$1 = state_31324;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31324__$1,(7),inst_31296);
} else {
if((state_val_31325 === (6))){
var inst_31320 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31331_31356 = state_31324__$1;
(statearr_31331_31356[(2)] = inst_31320);

(statearr_31331_31356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (3))){
var inst_31322 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31324__$1,inst_31322);
} else {
if((state_val_31325 === (2))){
var inst_31296 = (state_31324[(10)]);
var inst_31298 = cljs.core.count.call(null,inst_31296);
var inst_31299 = (inst_31298 > (0));
var state_31324__$1 = state_31324;
if(cljs.core.truth_(inst_31299)){
var statearr_31333_31357 = state_31324__$1;
(statearr_31333_31357[(1)] = (4));

} else {
var statearr_31334_31358 = state_31324__$1;
(statearr_31334_31358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (11))){
var inst_31296 = (state_31324[(10)]);
var inst_31313 = (state_31324[(2)]);
var tmp31332 = inst_31296;
var inst_31296__$1 = tmp31332;
var state_31324__$1 = (function (){var statearr_31335 = state_31324;
(statearr_31335[(10)] = inst_31296__$1);

(statearr_31335[(11)] = inst_31313);

return statearr_31335;
})();
var statearr_31336_31359 = state_31324__$1;
(statearr_31336_31359[(2)] = null);

(statearr_31336_31359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (9))){
var inst_31304 = (state_31324[(8)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31324__$1,(11),out,inst_31304);
} else {
if((state_val_31325 === (5))){
var inst_31318 = cljs.core.async.close_BANG_.call(null,out);
var state_31324__$1 = state_31324;
var statearr_31337_31360 = state_31324__$1;
(statearr_31337_31360[(2)] = inst_31318);

(statearr_31337_31360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (10))){
var inst_31316 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31338_31361 = state_31324__$1;
(statearr_31338_31361[(2)] = inst_31316);

(statearr_31338_31361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (8))){
var inst_31296 = (state_31324[(10)]);
var inst_31303 = (state_31324[(7)]);
var inst_31304 = (state_31324[(8)]);
var inst_31305 = (state_31324[(9)]);
var inst_31308 = (function (){var cs = inst_31296;
var vec__31301 = inst_31303;
var v = inst_31304;
var c = inst_31305;
return ((function (cs,vec__31301,v,c,inst_31296,inst_31303,inst_31304,inst_31305,state_val_31325,c__22596__auto___31352,out){
return (function (p1__31291_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31291_SHARP_);
});
;})(cs,vec__31301,v,c,inst_31296,inst_31303,inst_31304,inst_31305,state_val_31325,c__22596__auto___31352,out))
})();
var inst_31309 = cljs.core.filterv.call(null,inst_31308,inst_31296);
var inst_31296__$1 = inst_31309;
var state_31324__$1 = (function (){var statearr_31339 = state_31324;
(statearr_31339[(10)] = inst_31296__$1);

return statearr_31339;
})();
var statearr_31340_31362 = state_31324__$1;
(statearr_31340_31362[(2)] = null);

(statearr_31340_31362[(1)] = (2));


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
});})(c__22596__auto___31352,out))
;
return ((function (switch__22531__auto__,c__22596__auto___31352,out){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_31344 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31344[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_31344[(1)] = (1));

return statearr_31344;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_31324){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_31324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e31345){if((e31345 instanceof Object)){
var ex__22535__auto__ = e31345;
var statearr_31346_31363 = state_31324;
(statearr_31346_31363[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31364 = state_31324;
state_31324 = G__31364;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_31324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_31324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___31352,out))
})();
var state__22598__auto__ = (function (){var statearr_31347 = f__22597__auto__.call(null);
(statearr_31347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___31352);

return statearr_31347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___31352,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31365 = [];
var len__20174__auto___31414 = arguments.length;
var i__20175__auto___31415 = (0);
while(true){
if((i__20175__auto___31415 < len__20174__auto___31414)){
args31365.push((arguments[i__20175__auto___31415]));

var G__31416 = (i__20175__auto___31415 + (1));
i__20175__auto___31415 = G__31416;
continue;
} else {
}
break;
}

var G__31367 = args31365.length;
switch (G__31367) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31365.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22596__auto___31418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___31418,out){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___31418,out){
return (function (state_31391){
var state_val_31392 = (state_31391[(1)]);
if((state_val_31392 === (7))){
var inst_31373 = (state_31391[(7)]);
var inst_31373__$1 = (state_31391[(2)]);
var inst_31374 = (inst_31373__$1 == null);
var inst_31375 = cljs.core.not.call(null,inst_31374);
var state_31391__$1 = (function (){var statearr_31393 = state_31391;
(statearr_31393[(7)] = inst_31373__$1);

return statearr_31393;
})();
if(inst_31375){
var statearr_31394_31419 = state_31391__$1;
(statearr_31394_31419[(1)] = (8));

} else {
var statearr_31395_31420 = state_31391__$1;
(statearr_31395_31420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (1))){
var inst_31368 = (0);
var state_31391__$1 = (function (){var statearr_31396 = state_31391;
(statearr_31396[(8)] = inst_31368);

return statearr_31396;
})();
var statearr_31397_31421 = state_31391__$1;
(statearr_31397_31421[(2)] = null);

(statearr_31397_31421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (4))){
var state_31391__$1 = state_31391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31391__$1,(7),ch);
} else {
if((state_val_31392 === (6))){
var inst_31386 = (state_31391[(2)]);
var state_31391__$1 = state_31391;
var statearr_31398_31422 = state_31391__$1;
(statearr_31398_31422[(2)] = inst_31386);

(statearr_31398_31422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (3))){
var inst_31388 = (state_31391[(2)]);
var inst_31389 = cljs.core.async.close_BANG_.call(null,out);
var state_31391__$1 = (function (){var statearr_31399 = state_31391;
(statearr_31399[(9)] = inst_31388);

return statearr_31399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31391__$1,inst_31389);
} else {
if((state_val_31392 === (2))){
var inst_31368 = (state_31391[(8)]);
var inst_31370 = (inst_31368 < n);
var state_31391__$1 = state_31391;
if(cljs.core.truth_(inst_31370)){
var statearr_31400_31423 = state_31391__$1;
(statearr_31400_31423[(1)] = (4));

} else {
var statearr_31401_31424 = state_31391__$1;
(statearr_31401_31424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (11))){
var inst_31368 = (state_31391[(8)]);
var inst_31378 = (state_31391[(2)]);
var inst_31379 = (inst_31368 + (1));
var inst_31368__$1 = inst_31379;
var state_31391__$1 = (function (){var statearr_31402 = state_31391;
(statearr_31402[(10)] = inst_31378);

(statearr_31402[(8)] = inst_31368__$1);

return statearr_31402;
})();
var statearr_31403_31425 = state_31391__$1;
(statearr_31403_31425[(2)] = null);

(statearr_31403_31425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (9))){
var state_31391__$1 = state_31391;
var statearr_31404_31426 = state_31391__$1;
(statearr_31404_31426[(2)] = null);

(statearr_31404_31426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (5))){
var state_31391__$1 = state_31391;
var statearr_31405_31427 = state_31391__$1;
(statearr_31405_31427[(2)] = null);

(statearr_31405_31427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (10))){
var inst_31383 = (state_31391[(2)]);
var state_31391__$1 = state_31391;
var statearr_31406_31428 = state_31391__$1;
(statearr_31406_31428[(2)] = inst_31383);

(statearr_31406_31428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (8))){
var inst_31373 = (state_31391[(7)]);
var state_31391__$1 = state_31391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31391__$1,(11),out,inst_31373);
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
});})(c__22596__auto___31418,out))
;
return ((function (switch__22531__auto__,c__22596__auto___31418,out){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_31410 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31410[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_31410[(1)] = (1));

return statearr_31410;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_31391){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_31391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e31411){if((e31411 instanceof Object)){
var ex__22535__auto__ = e31411;
var statearr_31412_31429 = state_31391;
(statearr_31412_31429[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31430 = state_31391;
state_31391 = G__31430;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_31391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_31391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___31418,out))
})();
var state__22598__auto__ = (function (){var statearr_31413 = f__22597__auto__.call(null);
(statearr_31413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___31418);

return statearr_31413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___31418,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31438 = (function (map_LT_,f,ch,meta31439){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31439 = meta31439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31440,meta31439__$1){
var self__ = this;
var _31440__$1 = this;
return (new cljs.core.async.t_cljs$core$async31438(self__.map_LT_,self__.f,self__.ch,meta31439__$1));
});

cljs.core.async.t_cljs$core$async31438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31440){
var self__ = this;
var _31440__$1 = this;
return self__.meta31439;
});

cljs.core.async.t_cljs$core$async31438.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31438.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31438.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31438.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31438.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31441 = (function (map_LT_,f,ch,meta31439,_,fn1,meta31442){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31439 = meta31439;
this._ = _;
this.fn1 = fn1;
this.meta31442 = meta31442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31443,meta31442__$1){
var self__ = this;
var _31443__$1 = this;
return (new cljs.core.async.t_cljs$core$async31441(self__.map_LT_,self__.f,self__.ch,self__.meta31439,self__._,self__.fn1,meta31442__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31443){
var self__ = this;
var _31443__$1 = this;
return self__.meta31442;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31431_SHARP_){
return f1.call(null,(((p1__31431_SHARP_ == null))?null:self__.f.call(null,p1__31431_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31441.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31439","meta31439",1323062353,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31438","cljs.core.async/t_cljs$core$async31438",-1309492779,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31442","meta31442",2042602921,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31441";

cljs.core.async.t_cljs$core$async31441.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19714__auto__,writer__19715__auto__,opt__19716__auto__){
return cljs.core._write.call(null,writer__19715__auto__,"cljs.core.async/t_cljs$core$async31441");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31441 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31441(map_LT___$1,f__$1,ch__$1,meta31439__$1,___$2,fn1__$1,meta31442){
return (new cljs.core.async.t_cljs$core$async31441(map_LT___$1,f__$1,ch__$1,meta31439__$1,___$2,fn1__$1,meta31442));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31441(self__.map_LT_,self__.f,self__.ch,self__.meta31439,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19104__auto__ = ret;
if(cljs.core.truth_(and__19104__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19104__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31438.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31438.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31439","meta31439",1323062353,null)], null);
});

cljs.core.async.t_cljs$core$async31438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31438";

cljs.core.async.t_cljs$core$async31438.cljs$lang$ctorPrWriter = (function (this__19714__auto__,writer__19715__auto__,opt__19716__auto__){
return cljs.core._write.call(null,writer__19715__auto__,"cljs.core.async/t_cljs$core$async31438");
});

cljs.core.async.__GT_t_cljs$core$async31438 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31438(map_LT___$1,f__$1,ch__$1,meta31439){
return (new cljs.core.async.t_cljs$core$async31438(map_LT___$1,f__$1,ch__$1,meta31439));
});

}

return (new cljs.core.async.t_cljs$core$async31438(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31447 = (function (map_GT_,f,ch,meta31448){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31448 = meta31448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31449,meta31448__$1){
var self__ = this;
var _31449__$1 = this;
return (new cljs.core.async.t_cljs$core$async31447(self__.map_GT_,self__.f,self__.ch,meta31448__$1));
});

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31449){
var self__ = this;
var _31449__$1 = this;
return self__.meta31448;
});

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31448","meta31448",-589127262,null)], null);
});

cljs.core.async.t_cljs$core$async31447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31447";

cljs.core.async.t_cljs$core$async31447.cljs$lang$ctorPrWriter = (function (this__19714__auto__,writer__19715__auto__,opt__19716__auto__){
return cljs.core._write.call(null,writer__19715__auto__,"cljs.core.async/t_cljs$core$async31447");
});

cljs.core.async.__GT_t_cljs$core$async31447 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31447(map_GT___$1,f__$1,ch__$1,meta31448){
return (new cljs.core.async.t_cljs$core$async31447(map_GT___$1,f__$1,ch__$1,meta31448));
});

}

return (new cljs.core.async.t_cljs$core$async31447(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31453 = (function (filter_GT_,p,ch,meta31454){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31454 = meta31454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31455,meta31454__$1){
var self__ = this;
var _31455__$1 = this;
return (new cljs.core.async.t_cljs$core$async31453(self__.filter_GT_,self__.p,self__.ch,meta31454__$1));
});

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31455){
var self__ = this;
var _31455__$1 = this;
return self__.meta31454;
});

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31454","meta31454",1937104211,null)], null);
});

cljs.core.async.t_cljs$core$async31453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31453";

cljs.core.async.t_cljs$core$async31453.cljs$lang$ctorPrWriter = (function (this__19714__auto__,writer__19715__auto__,opt__19716__auto__){
return cljs.core._write.call(null,writer__19715__auto__,"cljs.core.async/t_cljs$core$async31453");
});

cljs.core.async.__GT_t_cljs$core$async31453 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31453(filter_GT___$1,p__$1,ch__$1,meta31454){
return (new cljs.core.async.t_cljs$core$async31453(filter_GT___$1,p__$1,ch__$1,meta31454));
});

}

return (new cljs.core.async.t_cljs$core$async31453(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31456 = [];
var len__20174__auto___31500 = arguments.length;
var i__20175__auto___31501 = (0);
while(true){
if((i__20175__auto___31501 < len__20174__auto___31500)){
args31456.push((arguments[i__20175__auto___31501]));

var G__31502 = (i__20175__auto___31501 + (1));
i__20175__auto___31501 = G__31502;
continue;
} else {
}
break;
}

var G__31458 = args31456.length;
switch (G__31458) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31456.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22596__auto___31504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___31504,out){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___31504,out){
return (function (state_31479){
var state_val_31480 = (state_31479[(1)]);
if((state_val_31480 === (7))){
var inst_31475 = (state_31479[(2)]);
var state_31479__$1 = state_31479;
var statearr_31481_31505 = state_31479__$1;
(statearr_31481_31505[(2)] = inst_31475);

(statearr_31481_31505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (1))){
var state_31479__$1 = state_31479;
var statearr_31482_31506 = state_31479__$1;
(statearr_31482_31506[(2)] = null);

(statearr_31482_31506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (4))){
var inst_31461 = (state_31479[(7)]);
var inst_31461__$1 = (state_31479[(2)]);
var inst_31462 = (inst_31461__$1 == null);
var state_31479__$1 = (function (){var statearr_31483 = state_31479;
(statearr_31483[(7)] = inst_31461__$1);

return statearr_31483;
})();
if(cljs.core.truth_(inst_31462)){
var statearr_31484_31507 = state_31479__$1;
(statearr_31484_31507[(1)] = (5));

} else {
var statearr_31485_31508 = state_31479__$1;
(statearr_31485_31508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (6))){
var inst_31461 = (state_31479[(7)]);
var inst_31466 = p.call(null,inst_31461);
var state_31479__$1 = state_31479;
if(cljs.core.truth_(inst_31466)){
var statearr_31486_31509 = state_31479__$1;
(statearr_31486_31509[(1)] = (8));

} else {
var statearr_31487_31510 = state_31479__$1;
(statearr_31487_31510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (3))){
var inst_31477 = (state_31479[(2)]);
var state_31479__$1 = state_31479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31479__$1,inst_31477);
} else {
if((state_val_31480 === (2))){
var state_31479__$1 = state_31479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31479__$1,(4),ch);
} else {
if((state_val_31480 === (11))){
var inst_31469 = (state_31479[(2)]);
var state_31479__$1 = state_31479;
var statearr_31488_31511 = state_31479__$1;
(statearr_31488_31511[(2)] = inst_31469);

(statearr_31488_31511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (9))){
var state_31479__$1 = state_31479;
var statearr_31489_31512 = state_31479__$1;
(statearr_31489_31512[(2)] = null);

(statearr_31489_31512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (5))){
var inst_31464 = cljs.core.async.close_BANG_.call(null,out);
var state_31479__$1 = state_31479;
var statearr_31490_31513 = state_31479__$1;
(statearr_31490_31513[(2)] = inst_31464);

(statearr_31490_31513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (10))){
var inst_31472 = (state_31479[(2)]);
var state_31479__$1 = (function (){var statearr_31491 = state_31479;
(statearr_31491[(8)] = inst_31472);

return statearr_31491;
})();
var statearr_31492_31514 = state_31479__$1;
(statearr_31492_31514[(2)] = null);

(statearr_31492_31514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31480 === (8))){
var inst_31461 = (state_31479[(7)]);
var state_31479__$1 = state_31479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31479__$1,(11),out,inst_31461);
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
});})(c__22596__auto___31504,out))
;
return ((function (switch__22531__auto__,c__22596__auto___31504,out){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_31496 = [null,null,null,null,null,null,null,null,null];
(statearr_31496[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_31496[(1)] = (1));

return statearr_31496;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_31479){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_31479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e31497){if((e31497 instanceof Object)){
var ex__22535__auto__ = e31497;
var statearr_31498_31515 = state_31479;
(statearr_31498_31515[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31516 = state_31479;
state_31479 = G__31516;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_31479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_31479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___31504,out))
})();
var state__22598__auto__ = (function (){var statearr_31499 = f__22597__auto__.call(null);
(statearr_31499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___31504);

return statearr_31499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___31504,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31517 = [];
var len__20174__auto___31520 = arguments.length;
var i__20175__auto___31521 = (0);
while(true){
if((i__20175__auto___31521 < len__20174__auto___31520)){
args31517.push((arguments[i__20175__auto___31521]));

var G__31522 = (i__20175__auto___31521 + (1));
i__20175__auto___31521 = G__31522;
continue;
} else {
}
break;
}

var G__31519 = args31517.length;
switch (G__31519) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31517.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__){
return (function (state_31689){
var state_val_31690 = (state_31689[(1)]);
if((state_val_31690 === (7))){
var inst_31685 = (state_31689[(2)]);
var state_31689__$1 = state_31689;
var statearr_31691_31732 = state_31689__$1;
(statearr_31691_31732[(2)] = inst_31685);

(statearr_31691_31732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (20))){
var inst_31655 = (state_31689[(7)]);
var inst_31666 = (state_31689[(2)]);
var inst_31667 = cljs.core.next.call(null,inst_31655);
var inst_31641 = inst_31667;
var inst_31642 = null;
var inst_31643 = (0);
var inst_31644 = (0);
var state_31689__$1 = (function (){var statearr_31692 = state_31689;
(statearr_31692[(8)] = inst_31644);

(statearr_31692[(9)] = inst_31641);

(statearr_31692[(10)] = inst_31666);

(statearr_31692[(11)] = inst_31642);

(statearr_31692[(12)] = inst_31643);

return statearr_31692;
})();
var statearr_31693_31733 = state_31689__$1;
(statearr_31693_31733[(2)] = null);

(statearr_31693_31733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (1))){
var state_31689__$1 = state_31689;
var statearr_31694_31734 = state_31689__$1;
(statearr_31694_31734[(2)] = null);

(statearr_31694_31734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (4))){
var inst_31630 = (state_31689[(13)]);
var inst_31630__$1 = (state_31689[(2)]);
var inst_31631 = (inst_31630__$1 == null);
var state_31689__$1 = (function (){var statearr_31695 = state_31689;
(statearr_31695[(13)] = inst_31630__$1);

return statearr_31695;
})();
if(cljs.core.truth_(inst_31631)){
var statearr_31696_31735 = state_31689__$1;
(statearr_31696_31735[(1)] = (5));

} else {
var statearr_31697_31736 = state_31689__$1;
(statearr_31697_31736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (15))){
var state_31689__$1 = state_31689;
var statearr_31701_31737 = state_31689__$1;
(statearr_31701_31737[(2)] = null);

(statearr_31701_31737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (21))){
var state_31689__$1 = state_31689;
var statearr_31702_31738 = state_31689__$1;
(statearr_31702_31738[(2)] = null);

(statearr_31702_31738[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (13))){
var inst_31644 = (state_31689[(8)]);
var inst_31641 = (state_31689[(9)]);
var inst_31642 = (state_31689[(11)]);
var inst_31643 = (state_31689[(12)]);
var inst_31651 = (state_31689[(2)]);
var inst_31652 = (inst_31644 + (1));
var tmp31698 = inst_31641;
var tmp31699 = inst_31642;
var tmp31700 = inst_31643;
var inst_31641__$1 = tmp31698;
var inst_31642__$1 = tmp31699;
var inst_31643__$1 = tmp31700;
var inst_31644__$1 = inst_31652;
var state_31689__$1 = (function (){var statearr_31703 = state_31689;
(statearr_31703[(8)] = inst_31644__$1);

(statearr_31703[(9)] = inst_31641__$1);

(statearr_31703[(11)] = inst_31642__$1);

(statearr_31703[(12)] = inst_31643__$1);

(statearr_31703[(14)] = inst_31651);

return statearr_31703;
})();
var statearr_31704_31739 = state_31689__$1;
(statearr_31704_31739[(2)] = null);

(statearr_31704_31739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (22))){
var state_31689__$1 = state_31689;
var statearr_31705_31740 = state_31689__$1;
(statearr_31705_31740[(2)] = null);

(statearr_31705_31740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (6))){
var inst_31630 = (state_31689[(13)]);
var inst_31639 = f.call(null,inst_31630);
var inst_31640 = cljs.core.seq.call(null,inst_31639);
var inst_31641 = inst_31640;
var inst_31642 = null;
var inst_31643 = (0);
var inst_31644 = (0);
var state_31689__$1 = (function (){var statearr_31706 = state_31689;
(statearr_31706[(8)] = inst_31644);

(statearr_31706[(9)] = inst_31641);

(statearr_31706[(11)] = inst_31642);

(statearr_31706[(12)] = inst_31643);

return statearr_31706;
})();
var statearr_31707_31741 = state_31689__$1;
(statearr_31707_31741[(2)] = null);

(statearr_31707_31741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (17))){
var inst_31655 = (state_31689[(7)]);
var inst_31659 = cljs.core.chunk_first.call(null,inst_31655);
var inst_31660 = cljs.core.chunk_rest.call(null,inst_31655);
var inst_31661 = cljs.core.count.call(null,inst_31659);
var inst_31641 = inst_31660;
var inst_31642 = inst_31659;
var inst_31643 = inst_31661;
var inst_31644 = (0);
var state_31689__$1 = (function (){var statearr_31708 = state_31689;
(statearr_31708[(8)] = inst_31644);

(statearr_31708[(9)] = inst_31641);

(statearr_31708[(11)] = inst_31642);

(statearr_31708[(12)] = inst_31643);

return statearr_31708;
})();
var statearr_31709_31742 = state_31689__$1;
(statearr_31709_31742[(2)] = null);

(statearr_31709_31742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (3))){
var inst_31687 = (state_31689[(2)]);
var state_31689__$1 = state_31689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31689__$1,inst_31687);
} else {
if((state_val_31690 === (12))){
var inst_31675 = (state_31689[(2)]);
var state_31689__$1 = state_31689;
var statearr_31710_31743 = state_31689__$1;
(statearr_31710_31743[(2)] = inst_31675);

(statearr_31710_31743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (2))){
var state_31689__$1 = state_31689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31689__$1,(4),in$);
} else {
if((state_val_31690 === (23))){
var inst_31683 = (state_31689[(2)]);
var state_31689__$1 = state_31689;
var statearr_31711_31744 = state_31689__$1;
(statearr_31711_31744[(2)] = inst_31683);

(statearr_31711_31744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (19))){
var inst_31670 = (state_31689[(2)]);
var state_31689__$1 = state_31689;
var statearr_31712_31745 = state_31689__$1;
(statearr_31712_31745[(2)] = inst_31670);

(statearr_31712_31745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (11))){
var inst_31655 = (state_31689[(7)]);
var inst_31641 = (state_31689[(9)]);
var inst_31655__$1 = cljs.core.seq.call(null,inst_31641);
var state_31689__$1 = (function (){var statearr_31713 = state_31689;
(statearr_31713[(7)] = inst_31655__$1);

return statearr_31713;
})();
if(inst_31655__$1){
var statearr_31714_31746 = state_31689__$1;
(statearr_31714_31746[(1)] = (14));

} else {
var statearr_31715_31747 = state_31689__$1;
(statearr_31715_31747[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (9))){
var inst_31677 = (state_31689[(2)]);
var inst_31678 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31689__$1 = (function (){var statearr_31716 = state_31689;
(statearr_31716[(15)] = inst_31677);

return statearr_31716;
})();
if(cljs.core.truth_(inst_31678)){
var statearr_31717_31748 = state_31689__$1;
(statearr_31717_31748[(1)] = (21));

} else {
var statearr_31718_31749 = state_31689__$1;
(statearr_31718_31749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (5))){
var inst_31633 = cljs.core.async.close_BANG_.call(null,out);
var state_31689__$1 = state_31689;
var statearr_31719_31750 = state_31689__$1;
(statearr_31719_31750[(2)] = inst_31633);

(statearr_31719_31750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (14))){
var inst_31655 = (state_31689[(7)]);
var inst_31657 = cljs.core.chunked_seq_QMARK_.call(null,inst_31655);
var state_31689__$1 = state_31689;
if(inst_31657){
var statearr_31720_31751 = state_31689__$1;
(statearr_31720_31751[(1)] = (17));

} else {
var statearr_31721_31752 = state_31689__$1;
(statearr_31721_31752[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (16))){
var inst_31673 = (state_31689[(2)]);
var state_31689__$1 = state_31689;
var statearr_31722_31753 = state_31689__$1;
(statearr_31722_31753[(2)] = inst_31673);

(statearr_31722_31753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31690 === (10))){
var inst_31644 = (state_31689[(8)]);
var inst_31642 = (state_31689[(11)]);
var inst_31649 = cljs.core._nth.call(null,inst_31642,inst_31644);
var state_31689__$1 = state_31689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31689__$1,(13),out,inst_31649);
} else {
if((state_val_31690 === (18))){
var inst_31655 = (state_31689[(7)]);
var inst_31664 = cljs.core.first.call(null,inst_31655);
var state_31689__$1 = state_31689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31689__$1,(20),out,inst_31664);
} else {
if((state_val_31690 === (8))){
var inst_31644 = (state_31689[(8)]);
var inst_31643 = (state_31689[(12)]);
var inst_31646 = (inst_31644 < inst_31643);
var inst_31647 = inst_31646;
var state_31689__$1 = state_31689;
if(cljs.core.truth_(inst_31647)){
var statearr_31723_31754 = state_31689__$1;
(statearr_31723_31754[(1)] = (10));

} else {
var statearr_31724_31755 = state_31689__$1;
(statearr_31724_31755[(1)] = (11));

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
}
}
});})(c__22596__auto__))
;
return ((function (switch__22531__auto__,c__22596__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22532__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22532__auto____0 = (function (){
var statearr_31728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31728[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22532__auto__);

(statearr_31728[(1)] = (1));

return statearr_31728;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22532__auto____1 = (function (state_31689){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_31689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e31729){if((e31729 instanceof Object)){
var ex__22535__auto__ = e31729;
var statearr_31730_31756 = state_31689;
(statearr_31730_31756[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31757 = state_31689;
state_31689 = G__31757;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22532__auto__ = function(state_31689){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22532__auto____1.call(this,state_31689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22532__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22532__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__))
})();
var state__22598__auto__ = (function (){var statearr_31731 = f__22597__auto__.call(null);
(statearr_31731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_31731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__))
);

return c__22596__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31758 = [];
var len__20174__auto___31761 = arguments.length;
var i__20175__auto___31762 = (0);
while(true){
if((i__20175__auto___31762 < len__20174__auto___31761)){
args31758.push((arguments[i__20175__auto___31762]));

var G__31763 = (i__20175__auto___31762 + (1));
i__20175__auto___31762 = G__31763;
continue;
} else {
}
break;
}

var G__31760 = args31758.length;
switch (G__31760) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31758.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31765 = [];
var len__20174__auto___31768 = arguments.length;
var i__20175__auto___31769 = (0);
while(true){
if((i__20175__auto___31769 < len__20174__auto___31768)){
args31765.push((arguments[i__20175__auto___31769]));

var G__31770 = (i__20175__auto___31769 + (1));
i__20175__auto___31769 = G__31770;
continue;
} else {
}
break;
}

var G__31767 = args31765.length;
switch (G__31767) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31765.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31772 = [];
var len__20174__auto___31823 = arguments.length;
var i__20175__auto___31824 = (0);
while(true){
if((i__20175__auto___31824 < len__20174__auto___31823)){
args31772.push((arguments[i__20175__auto___31824]));

var G__31825 = (i__20175__auto___31824 + (1));
i__20175__auto___31824 = G__31825;
continue;
} else {
}
break;
}

var G__31774 = args31772.length;
switch (G__31774) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31772.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22596__auto___31827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___31827,out){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___31827,out){
return (function (state_31798){
var state_val_31799 = (state_31798[(1)]);
if((state_val_31799 === (7))){
var inst_31793 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
var statearr_31800_31828 = state_31798__$1;
(statearr_31800_31828[(2)] = inst_31793);

(statearr_31800_31828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (1))){
var inst_31775 = null;
var state_31798__$1 = (function (){var statearr_31801 = state_31798;
(statearr_31801[(7)] = inst_31775);

return statearr_31801;
})();
var statearr_31802_31829 = state_31798__$1;
(statearr_31802_31829[(2)] = null);

(statearr_31802_31829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (4))){
var inst_31778 = (state_31798[(8)]);
var inst_31778__$1 = (state_31798[(2)]);
var inst_31779 = (inst_31778__$1 == null);
var inst_31780 = cljs.core.not.call(null,inst_31779);
var state_31798__$1 = (function (){var statearr_31803 = state_31798;
(statearr_31803[(8)] = inst_31778__$1);

return statearr_31803;
})();
if(inst_31780){
var statearr_31804_31830 = state_31798__$1;
(statearr_31804_31830[(1)] = (5));

} else {
var statearr_31805_31831 = state_31798__$1;
(statearr_31805_31831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (6))){
var state_31798__$1 = state_31798;
var statearr_31806_31832 = state_31798__$1;
(statearr_31806_31832[(2)] = null);

(statearr_31806_31832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (3))){
var inst_31795 = (state_31798[(2)]);
var inst_31796 = cljs.core.async.close_BANG_.call(null,out);
var state_31798__$1 = (function (){var statearr_31807 = state_31798;
(statearr_31807[(9)] = inst_31795);

return statearr_31807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31798__$1,inst_31796);
} else {
if((state_val_31799 === (2))){
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31798__$1,(4),ch);
} else {
if((state_val_31799 === (11))){
var inst_31778 = (state_31798[(8)]);
var inst_31787 = (state_31798[(2)]);
var inst_31775 = inst_31778;
var state_31798__$1 = (function (){var statearr_31808 = state_31798;
(statearr_31808[(7)] = inst_31775);

(statearr_31808[(10)] = inst_31787);

return statearr_31808;
})();
var statearr_31809_31833 = state_31798__$1;
(statearr_31809_31833[(2)] = null);

(statearr_31809_31833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (9))){
var inst_31778 = (state_31798[(8)]);
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31798__$1,(11),out,inst_31778);
} else {
if((state_val_31799 === (5))){
var inst_31778 = (state_31798[(8)]);
var inst_31775 = (state_31798[(7)]);
var inst_31782 = cljs.core._EQ_.call(null,inst_31778,inst_31775);
var state_31798__$1 = state_31798;
if(inst_31782){
var statearr_31811_31834 = state_31798__$1;
(statearr_31811_31834[(1)] = (8));

} else {
var statearr_31812_31835 = state_31798__$1;
(statearr_31812_31835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (10))){
var inst_31790 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
var statearr_31813_31836 = state_31798__$1;
(statearr_31813_31836[(2)] = inst_31790);

(statearr_31813_31836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (8))){
var inst_31775 = (state_31798[(7)]);
var tmp31810 = inst_31775;
var inst_31775__$1 = tmp31810;
var state_31798__$1 = (function (){var statearr_31814 = state_31798;
(statearr_31814[(7)] = inst_31775__$1);

return statearr_31814;
})();
var statearr_31815_31837 = state_31798__$1;
(statearr_31815_31837[(2)] = null);

(statearr_31815_31837[(1)] = (2));


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
});})(c__22596__auto___31827,out))
;
return ((function (switch__22531__auto__,c__22596__auto___31827,out){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_31819 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31819[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_31819[(1)] = (1));

return statearr_31819;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_31798){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_31798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e31820){if((e31820 instanceof Object)){
var ex__22535__auto__ = e31820;
var statearr_31821_31838 = state_31798;
(statearr_31821_31838[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31839 = state_31798;
state_31798 = G__31839;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_31798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_31798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___31827,out))
})();
var state__22598__auto__ = (function (){var statearr_31822 = f__22597__auto__.call(null);
(statearr_31822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___31827);

return statearr_31822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___31827,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31840 = [];
var len__20174__auto___31910 = arguments.length;
var i__20175__auto___31911 = (0);
while(true){
if((i__20175__auto___31911 < len__20174__auto___31910)){
args31840.push((arguments[i__20175__auto___31911]));

var G__31912 = (i__20175__auto___31911 + (1));
i__20175__auto___31911 = G__31912;
continue;
} else {
}
break;
}

var G__31842 = args31840.length;
switch (G__31842) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31840.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22596__auto___31914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___31914,out){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___31914,out){
return (function (state_31880){
var state_val_31881 = (state_31880[(1)]);
if((state_val_31881 === (7))){
var inst_31876 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31882_31915 = state_31880__$1;
(statearr_31882_31915[(2)] = inst_31876);

(statearr_31882_31915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (1))){
var inst_31843 = (new Array(n));
var inst_31844 = inst_31843;
var inst_31845 = (0);
var state_31880__$1 = (function (){var statearr_31883 = state_31880;
(statearr_31883[(7)] = inst_31844);

(statearr_31883[(8)] = inst_31845);

return statearr_31883;
})();
var statearr_31884_31916 = state_31880__$1;
(statearr_31884_31916[(2)] = null);

(statearr_31884_31916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (4))){
var inst_31848 = (state_31880[(9)]);
var inst_31848__$1 = (state_31880[(2)]);
var inst_31849 = (inst_31848__$1 == null);
var inst_31850 = cljs.core.not.call(null,inst_31849);
var state_31880__$1 = (function (){var statearr_31885 = state_31880;
(statearr_31885[(9)] = inst_31848__$1);

return statearr_31885;
})();
if(inst_31850){
var statearr_31886_31917 = state_31880__$1;
(statearr_31886_31917[(1)] = (5));

} else {
var statearr_31887_31918 = state_31880__$1;
(statearr_31887_31918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (15))){
var inst_31870 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31888_31919 = state_31880__$1;
(statearr_31888_31919[(2)] = inst_31870);

(statearr_31888_31919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (13))){
var state_31880__$1 = state_31880;
var statearr_31889_31920 = state_31880__$1;
(statearr_31889_31920[(2)] = null);

(statearr_31889_31920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (6))){
var inst_31845 = (state_31880[(8)]);
var inst_31866 = (inst_31845 > (0));
var state_31880__$1 = state_31880;
if(cljs.core.truth_(inst_31866)){
var statearr_31890_31921 = state_31880__$1;
(statearr_31890_31921[(1)] = (12));

} else {
var statearr_31891_31922 = state_31880__$1;
(statearr_31891_31922[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (3))){
var inst_31878 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31880__$1,inst_31878);
} else {
if((state_val_31881 === (12))){
var inst_31844 = (state_31880[(7)]);
var inst_31868 = cljs.core.vec.call(null,inst_31844);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31880__$1,(15),out,inst_31868);
} else {
if((state_val_31881 === (2))){
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31880__$1,(4),ch);
} else {
if((state_val_31881 === (11))){
var inst_31860 = (state_31880[(2)]);
var inst_31861 = (new Array(n));
var inst_31844 = inst_31861;
var inst_31845 = (0);
var state_31880__$1 = (function (){var statearr_31892 = state_31880;
(statearr_31892[(7)] = inst_31844);

(statearr_31892[(8)] = inst_31845);

(statearr_31892[(10)] = inst_31860);

return statearr_31892;
})();
var statearr_31893_31923 = state_31880__$1;
(statearr_31893_31923[(2)] = null);

(statearr_31893_31923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (9))){
var inst_31844 = (state_31880[(7)]);
var inst_31858 = cljs.core.vec.call(null,inst_31844);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31880__$1,(11),out,inst_31858);
} else {
if((state_val_31881 === (5))){
var inst_31844 = (state_31880[(7)]);
var inst_31845 = (state_31880[(8)]);
var inst_31853 = (state_31880[(11)]);
var inst_31848 = (state_31880[(9)]);
var inst_31852 = (inst_31844[inst_31845] = inst_31848);
var inst_31853__$1 = (inst_31845 + (1));
var inst_31854 = (inst_31853__$1 < n);
var state_31880__$1 = (function (){var statearr_31894 = state_31880;
(statearr_31894[(12)] = inst_31852);

(statearr_31894[(11)] = inst_31853__$1);

return statearr_31894;
})();
if(cljs.core.truth_(inst_31854)){
var statearr_31895_31924 = state_31880__$1;
(statearr_31895_31924[(1)] = (8));

} else {
var statearr_31896_31925 = state_31880__$1;
(statearr_31896_31925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (14))){
var inst_31873 = (state_31880[(2)]);
var inst_31874 = cljs.core.async.close_BANG_.call(null,out);
var state_31880__$1 = (function (){var statearr_31898 = state_31880;
(statearr_31898[(13)] = inst_31873);

return statearr_31898;
})();
var statearr_31899_31926 = state_31880__$1;
(statearr_31899_31926[(2)] = inst_31874);

(statearr_31899_31926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (10))){
var inst_31864 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31900_31927 = state_31880__$1;
(statearr_31900_31927[(2)] = inst_31864);

(statearr_31900_31927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (8))){
var inst_31844 = (state_31880[(7)]);
var inst_31853 = (state_31880[(11)]);
var tmp31897 = inst_31844;
var inst_31844__$1 = tmp31897;
var inst_31845 = inst_31853;
var state_31880__$1 = (function (){var statearr_31901 = state_31880;
(statearr_31901[(7)] = inst_31844__$1);

(statearr_31901[(8)] = inst_31845);

return statearr_31901;
})();
var statearr_31902_31928 = state_31880__$1;
(statearr_31902_31928[(2)] = null);

(statearr_31902_31928[(1)] = (2));


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
});})(c__22596__auto___31914,out))
;
return ((function (switch__22531__auto__,c__22596__auto___31914,out){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_31906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31906[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_31906[(1)] = (1));

return statearr_31906;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_31880){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_31880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e31907){if((e31907 instanceof Object)){
var ex__22535__auto__ = e31907;
var statearr_31908_31929 = state_31880;
(statearr_31908_31929[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31930 = state_31880;
state_31880 = G__31930;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_31880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_31880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___31914,out))
})();
var state__22598__auto__ = (function (){var statearr_31909 = f__22597__auto__.call(null);
(statearr_31909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___31914);

return statearr_31909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___31914,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31931 = [];
var len__20174__auto___32005 = arguments.length;
var i__20175__auto___32006 = (0);
while(true){
if((i__20175__auto___32006 < len__20174__auto___32005)){
args31931.push((arguments[i__20175__auto___32006]));

var G__32007 = (i__20175__auto___32006 + (1));
i__20175__auto___32006 = G__32007;
continue;
} else {
}
break;
}

var G__31933 = args31931.length;
switch (G__31933) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31931.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22596__auto___32009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___32009,out){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___32009,out){
return (function (state_31975){
var state_val_31976 = (state_31975[(1)]);
if((state_val_31976 === (7))){
var inst_31971 = (state_31975[(2)]);
var state_31975__$1 = state_31975;
var statearr_31977_32010 = state_31975__$1;
(statearr_31977_32010[(2)] = inst_31971);

(statearr_31977_32010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31976 === (1))){
var inst_31934 = [];
var inst_31935 = inst_31934;
var inst_31936 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31975__$1 = (function (){var statearr_31978 = state_31975;
(statearr_31978[(7)] = inst_31936);

(statearr_31978[(8)] = inst_31935);

return statearr_31978;
})();
var statearr_31979_32011 = state_31975__$1;
(statearr_31979_32011[(2)] = null);

(statearr_31979_32011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31976 === (4))){
var inst_31939 = (state_31975[(9)]);
var inst_31939__$1 = (state_31975[(2)]);
var inst_31940 = (inst_31939__$1 == null);
var inst_31941 = cljs.core.not.call(null,inst_31940);
var state_31975__$1 = (function (){var statearr_31980 = state_31975;
(statearr_31980[(9)] = inst_31939__$1);

return statearr_31980;
})();
if(inst_31941){
var statearr_31981_32012 = state_31975__$1;
(statearr_31981_32012[(1)] = (5));

} else {
var statearr_31982_32013 = state_31975__$1;
(statearr_31982_32013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31976 === (15))){
var inst_31965 = (state_31975[(2)]);
var state_31975__$1 = state_31975;
var statearr_31983_32014 = state_31975__$1;
(statearr_31983_32014[(2)] = inst_31965);

(statearr_31983_32014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31976 === (13))){
var state_31975__$1 = state_31975;
var statearr_31984_32015 = state_31975__$1;
(statearr_31984_32015[(2)] = null);

(statearr_31984_32015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31976 === (6))){
var inst_31935 = (state_31975[(8)]);
var inst_31960 = inst_31935.length;
var inst_31961 = (inst_31960 > (0));
var state_31975__$1 = state_31975;
if(cljs.core.truth_(inst_31961)){
var statearr_31985_32016 = state_31975__$1;
(statearr_31985_32016[(1)] = (12));

} else {
var statearr_31986_32017 = state_31975__$1;
(statearr_31986_32017[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31976 === (3))){
var inst_31973 = (state_31975[(2)]);
var state_31975__$1 = state_31975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31975__$1,inst_31973);
} else {
if((state_val_31976 === (12))){
var inst_31935 = (state_31975[(8)]);
var inst_31963 = cljs.core.vec.call(null,inst_31935);
var state_31975__$1 = state_31975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31975__$1,(15),out,inst_31963);
} else {
if((state_val_31976 === (2))){
var state_31975__$1 = state_31975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31975__$1,(4),ch);
} else {
if((state_val_31976 === (11))){
var inst_31939 = (state_31975[(9)]);
var inst_31943 = (state_31975[(10)]);
var inst_31953 = (state_31975[(2)]);
var inst_31954 = [];
var inst_31955 = inst_31954.push(inst_31939);
var inst_31935 = inst_31954;
var inst_31936 = inst_31943;
var state_31975__$1 = (function (){var statearr_31987 = state_31975;
(statearr_31987[(7)] = inst_31936);

(statearr_31987[(11)] = inst_31955);

(statearr_31987[(12)] = inst_31953);

(statearr_31987[(8)] = inst_31935);

return statearr_31987;
})();
var statearr_31988_32018 = state_31975__$1;
(statearr_31988_32018[(2)] = null);

(statearr_31988_32018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31976 === (9))){
var inst_31935 = (state_31975[(8)]);
var inst_31951 = cljs.core.vec.call(null,inst_31935);
var state_31975__$1 = state_31975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31975__$1,(11),out,inst_31951);
} else {
if((state_val_31976 === (5))){
var inst_31936 = (state_31975[(7)]);
var inst_31939 = (state_31975[(9)]);
var inst_31943 = (state_31975[(10)]);
var inst_31943__$1 = f.call(null,inst_31939);
var inst_31944 = cljs.core._EQ_.call(null,inst_31943__$1,inst_31936);
var inst_31945 = cljs.core.keyword_identical_QMARK_.call(null,inst_31936,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31946 = (inst_31944) || (inst_31945);
var state_31975__$1 = (function (){var statearr_31989 = state_31975;
(statearr_31989[(10)] = inst_31943__$1);

return statearr_31989;
})();
if(cljs.core.truth_(inst_31946)){
var statearr_31990_32019 = state_31975__$1;
(statearr_31990_32019[(1)] = (8));

} else {
var statearr_31991_32020 = state_31975__$1;
(statearr_31991_32020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31976 === (14))){
var inst_31968 = (state_31975[(2)]);
var inst_31969 = cljs.core.async.close_BANG_.call(null,out);
var state_31975__$1 = (function (){var statearr_31993 = state_31975;
(statearr_31993[(13)] = inst_31968);

return statearr_31993;
})();
var statearr_31994_32021 = state_31975__$1;
(statearr_31994_32021[(2)] = inst_31969);

(statearr_31994_32021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31976 === (10))){
var inst_31958 = (state_31975[(2)]);
var state_31975__$1 = state_31975;
var statearr_31995_32022 = state_31975__$1;
(statearr_31995_32022[(2)] = inst_31958);

(statearr_31995_32022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31976 === (8))){
var inst_31939 = (state_31975[(9)]);
var inst_31943 = (state_31975[(10)]);
var inst_31935 = (state_31975[(8)]);
var inst_31948 = inst_31935.push(inst_31939);
var tmp31992 = inst_31935;
var inst_31935__$1 = tmp31992;
var inst_31936 = inst_31943;
var state_31975__$1 = (function (){var statearr_31996 = state_31975;
(statearr_31996[(7)] = inst_31936);

(statearr_31996[(8)] = inst_31935__$1);

(statearr_31996[(14)] = inst_31948);

return statearr_31996;
})();
var statearr_31997_32023 = state_31975__$1;
(statearr_31997_32023[(2)] = null);

(statearr_31997_32023[(1)] = (2));


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
});})(c__22596__auto___32009,out))
;
return ((function (switch__22531__auto__,c__22596__auto___32009,out){
return (function() {
var cljs$core$async$state_machine__22532__auto__ = null;
var cljs$core$async$state_machine__22532__auto____0 = (function (){
var statearr_32001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32001[(0)] = cljs$core$async$state_machine__22532__auto__);

(statearr_32001[(1)] = (1));

return statearr_32001;
});
var cljs$core$async$state_machine__22532__auto____1 = (function (state_31975){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_31975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e32002){if((e32002 instanceof Object)){
var ex__22535__auto__ = e32002;
var statearr_32003_32024 = state_31975;
(statearr_32003_32024[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32025 = state_31975;
state_31975 = G__32025;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
cljs$core$async$state_machine__22532__auto__ = function(state_31975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22532__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22532__auto____1.call(this,state_31975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22532__auto____0;
cljs$core$async$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22532__auto____1;
return cljs$core$async$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___32009,out))
})();
var state__22598__auto__ = (function (){var statearr_32004 = f__22597__auto__.call(null);
(statearr_32004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___32009);

return statearr_32004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___32009,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map