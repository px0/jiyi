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
if(typeof cljs.core.async.t_cljs$core$async47612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47612 = (function (fn_handler,f,meta47613){
this.fn_handler = fn_handler;
this.f = f;
this.meta47613 = meta47613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47614,meta47613__$1){
var self__ = this;
var _47614__$1 = this;
return (new cljs.core.async.t_cljs$core$async47612(self__.fn_handler,self__.f,meta47613__$1));
});

cljs.core.async.t_cljs$core$async47612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47614){
var self__ = this;
var _47614__$1 = this;
return self__.meta47613;
});

cljs.core.async.t_cljs$core$async47612.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta47613","meta47613",-2096070450,null)], null);
});

cljs.core.async.t_cljs$core$async47612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47612";

cljs.core.async.t_cljs$core$async47612.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cljs.core.async/t_cljs$core$async47612");
});

cljs.core.async.__GT_t_cljs$core$async47612 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async47612(fn_handler__$1,f__$1,meta47613){
return (new cljs.core.async.t_cljs$core$async47612(fn_handler__$1,f__$1,meta47613));
});

}

return (new cljs.core.async.t_cljs$core$async47612(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args47617 = [];
var len__20178__auto___47620 = arguments.length;
var i__20179__auto___47621 = (0);
while(true){
if((i__20179__auto___47621 < len__20178__auto___47620)){
args47617.push((arguments[i__20179__auto___47621]));

var G__47622 = (i__20179__auto___47621 + (1));
i__20179__auto___47621 = G__47622;
continue;
} else {
}
break;
}

var G__47619 = args47617.length;
switch (G__47619) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47617.length)].join('')));

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
var args47624 = [];
var len__20178__auto___47627 = arguments.length;
var i__20179__auto___47628 = (0);
while(true){
if((i__20179__auto___47628 < len__20178__auto___47627)){
args47624.push((arguments[i__20179__auto___47628]));

var G__47629 = (i__20179__auto___47628 + (1));
i__20179__auto___47628 = G__47629;
continue;
} else {
}
break;
}

var G__47626 = args47624.length;
switch (G__47626) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47624.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_47631 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47631);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47631,ret){
return (function (){
return fn1.call(null,val_47631);
});})(val_47631,ret))
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
var args47632 = [];
var len__20178__auto___47635 = arguments.length;
var i__20179__auto___47636 = (0);
while(true){
if((i__20179__auto___47636 < len__20178__auto___47635)){
args47632.push((arguments[i__20179__auto___47636]));

var G__47637 = (i__20179__auto___47636 + (1));
i__20179__auto___47636 = G__47637;
continue;
} else {
}
break;
}

var G__47634 = args47632.length;
switch (G__47634) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47632.length)].join('')));

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
var n__20023__auto___47639 = n;
var x_47640 = (0);
while(true){
if((x_47640 < n__20023__auto___47639)){
(a[x_47640] = (0));

var G__47641 = (x_47640 + (1));
x_47640 = G__47641;
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

var G__47642 = (i + (1));
i = G__47642;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47646 = (function (alt_flag,flag,meta47647){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta47647 = meta47647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47648,meta47647__$1){
var self__ = this;
var _47648__$1 = this;
return (new cljs.core.async.t_cljs$core$async47646(self__.alt_flag,self__.flag,meta47647__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47648){
var self__ = this;
var _47648__$1 = this;
return self__.meta47647;
});})(flag))
;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47646.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47647","meta47647",-1548615789,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47646";

cljs.core.async.t_cljs$core$async47646.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cljs.core.async/t_cljs$core$async47646");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47646 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47646(alt_flag__$1,flag__$1,meta47647){
return (new cljs.core.async.t_cljs$core$async47646(alt_flag__$1,flag__$1,meta47647));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47646(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47652 = (function (alt_handler,flag,cb,meta47653){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta47653 = meta47653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47654,meta47653__$1){
var self__ = this;
var _47654__$1 = this;
return (new cljs.core.async.t_cljs$core$async47652(self__.alt_handler,self__.flag,self__.cb,meta47653__$1));
});

cljs.core.async.t_cljs$core$async47652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47654){
var self__ = this;
var _47654__$1 = this;
return self__.meta47653;
});

cljs.core.async.t_cljs$core$async47652.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47653","meta47653",88373589,null)], null);
});

cljs.core.async.t_cljs$core$async47652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47652";

cljs.core.async.t_cljs$core$async47652.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cljs.core.async/t_cljs$core$async47652");
});

cljs.core.async.__GT_t_cljs$core$async47652 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47652(alt_handler__$1,flag__$1,cb__$1,meta47653){
return (new cljs.core.async.t_cljs$core$async47652(alt_handler__$1,flag__$1,cb__$1,meta47653));
});

}

return (new cljs.core.async.t_cljs$core$async47652(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47655_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47655_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47656_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47656_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19120__auto__ = wport;
if(cljs.core.truth_(or__19120__auto__)){
return or__19120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47657 = (i + (1));
i = G__47657;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19120__auto__ = ret;
if(cljs.core.truth_(or__19120__auto__)){
return or__19120__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19108__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19108__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19108__auto__;
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
var args__20185__auto__ = [];
var len__20178__auto___47663 = arguments.length;
var i__20179__auto___47664 = (0);
while(true){
if((i__20179__auto___47664 < len__20178__auto___47663)){
args__20185__auto__.push((arguments[i__20179__auto___47664]));

var G__47665 = (i__20179__auto___47664 + (1));
i__20179__auto___47664 = G__47665;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47660){
var map__47661 = p__47660;
var map__47661__$1 = ((((!((map__47661 == null)))?((((map__47661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47661):map__47661);
var opts = map__47661__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47658){
var G__47659 = cljs.core.first.call(null,seq47658);
var seq47658__$1 = cljs.core.next.call(null,seq47658);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47659,seq47658__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args47666 = [];
var len__20178__auto___47716 = arguments.length;
var i__20179__auto___47717 = (0);
while(true){
if((i__20179__auto___47717 < len__20178__auto___47716)){
args47666.push((arguments[i__20179__auto___47717]));

var G__47718 = (i__20179__auto___47717 + (1));
i__20179__auto___47717 = G__47718;
continue;
} else {
}
break;
}

var G__47668 = args47666.length;
switch (G__47668) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47666.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22597__auto___47720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___47720){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___47720){
return (function (state_47692){
var state_val_47693 = (state_47692[(1)]);
if((state_val_47693 === (7))){
var inst_47688 = (state_47692[(2)]);
var state_47692__$1 = state_47692;
var statearr_47694_47721 = state_47692__$1;
(statearr_47694_47721[(2)] = inst_47688);

(statearr_47694_47721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47693 === (1))){
var state_47692__$1 = state_47692;
var statearr_47695_47722 = state_47692__$1;
(statearr_47695_47722[(2)] = null);

(statearr_47695_47722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47693 === (4))){
var inst_47671 = (state_47692[(7)]);
var inst_47671__$1 = (state_47692[(2)]);
var inst_47672 = (inst_47671__$1 == null);
var state_47692__$1 = (function (){var statearr_47696 = state_47692;
(statearr_47696[(7)] = inst_47671__$1);

return statearr_47696;
})();
if(cljs.core.truth_(inst_47672)){
var statearr_47697_47723 = state_47692__$1;
(statearr_47697_47723[(1)] = (5));

} else {
var statearr_47698_47724 = state_47692__$1;
(statearr_47698_47724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47693 === (13))){
var state_47692__$1 = state_47692;
var statearr_47699_47725 = state_47692__$1;
(statearr_47699_47725[(2)] = null);

(statearr_47699_47725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47693 === (6))){
var inst_47671 = (state_47692[(7)]);
var state_47692__$1 = state_47692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47692__$1,(11),to,inst_47671);
} else {
if((state_val_47693 === (3))){
var inst_47690 = (state_47692[(2)]);
var state_47692__$1 = state_47692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47692__$1,inst_47690);
} else {
if((state_val_47693 === (12))){
var state_47692__$1 = state_47692;
var statearr_47700_47726 = state_47692__$1;
(statearr_47700_47726[(2)] = null);

(statearr_47700_47726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47693 === (2))){
var state_47692__$1 = state_47692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47692__$1,(4),from);
} else {
if((state_val_47693 === (11))){
var inst_47681 = (state_47692[(2)]);
var state_47692__$1 = state_47692;
if(cljs.core.truth_(inst_47681)){
var statearr_47701_47727 = state_47692__$1;
(statearr_47701_47727[(1)] = (12));

} else {
var statearr_47702_47728 = state_47692__$1;
(statearr_47702_47728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47693 === (9))){
var state_47692__$1 = state_47692;
var statearr_47703_47729 = state_47692__$1;
(statearr_47703_47729[(2)] = null);

(statearr_47703_47729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47693 === (5))){
var state_47692__$1 = state_47692;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47704_47730 = state_47692__$1;
(statearr_47704_47730[(1)] = (8));

} else {
var statearr_47705_47731 = state_47692__$1;
(statearr_47705_47731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47693 === (14))){
var inst_47686 = (state_47692[(2)]);
var state_47692__$1 = state_47692;
var statearr_47706_47732 = state_47692__$1;
(statearr_47706_47732[(2)] = inst_47686);

(statearr_47706_47732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47693 === (10))){
var inst_47678 = (state_47692[(2)]);
var state_47692__$1 = state_47692;
var statearr_47707_47733 = state_47692__$1;
(statearr_47707_47733[(2)] = inst_47678);

(statearr_47707_47733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47693 === (8))){
var inst_47675 = cljs.core.async.close_BANG_.call(null,to);
var state_47692__$1 = state_47692;
var statearr_47708_47734 = state_47692__$1;
(statearr_47708_47734[(2)] = inst_47675);

(statearr_47708_47734[(1)] = (10));


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
});})(c__22597__auto___47720))
;
return ((function (switch__22532__auto__,c__22597__auto___47720){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_47712 = [null,null,null,null,null,null,null,null];
(statearr_47712[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_47712[(1)] = (1));

return statearr_47712;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_47692){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_47692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e47713){if((e47713 instanceof Object)){
var ex__22536__auto__ = e47713;
var statearr_47714_47735 = state_47692;
(statearr_47714_47735[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47736 = state_47692;
state_47692 = G__47736;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_47692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_47692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___47720))
})();
var state__22599__auto__ = (function (){var statearr_47715 = f__22598__auto__.call(null);
(statearr_47715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___47720);

return statearr_47715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___47720))
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
return (function (p__47920){
var vec__47921 = p__47920;
var v = cljs.core.nth.call(null,vec__47921,(0),null);
var p = cljs.core.nth.call(null,vec__47921,(1),null);
var job = vec__47921;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22597__auto___48103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___48103,res,vec__47921,v,p,job,jobs,results){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___48103,res,vec__47921,v,p,job,jobs,results){
return (function (state_47926){
var state_val_47927 = (state_47926[(1)]);
if((state_val_47927 === (1))){
var state_47926__$1 = state_47926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47926__$1,(2),res,v);
} else {
if((state_val_47927 === (2))){
var inst_47923 = (state_47926[(2)]);
var inst_47924 = cljs.core.async.close_BANG_.call(null,res);
var state_47926__$1 = (function (){var statearr_47928 = state_47926;
(statearr_47928[(7)] = inst_47923);

return statearr_47928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47926__$1,inst_47924);
} else {
return null;
}
}
});})(c__22597__auto___48103,res,vec__47921,v,p,job,jobs,results))
;
return ((function (switch__22532__auto__,c__22597__auto___48103,res,vec__47921,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0 = (function (){
var statearr_47932 = [null,null,null,null,null,null,null,null];
(statearr_47932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__);

(statearr_47932[(1)] = (1));

return statearr_47932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1 = (function (state_47926){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_47926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e47933){if((e47933 instanceof Object)){
var ex__22536__auto__ = e47933;
var statearr_47934_48104 = state_47926;
(statearr_47934_48104[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48105 = state_47926;
state_47926 = G__48105;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__ = function(state_47926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1.call(this,state_47926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___48103,res,vec__47921,v,p,job,jobs,results))
})();
var state__22599__auto__ = (function (){var statearr_47935 = f__22598__auto__.call(null);
(statearr_47935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___48103);

return statearr_47935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___48103,res,vec__47921,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47936){
var vec__47937 = p__47936;
var v = cljs.core.nth.call(null,vec__47937,(0),null);
var p = cljs.core.nth.call(null,vec__47937,(1),null);
var job = vec__47937;
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
var n__20023__auto___48106 = n;
var __48107 = (0);
while(true){
if((__48107 < n__20023__auto___48106)){
var G__47938_48108 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__47938_48108) {
case "compute":
var c__22597__auto___48110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48107,c__22597__auto___48110,G__47938_48108,n__20023__auto___48106,jobs,results,process,async){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (__48107,c__22597__auto___48110,G__47938_48108,n__20023__auto___48106,jobs,results,process,async){
return (function (state_47951){
var state_val_47952 = (state_47951[(1)]);
if((state_val_47952 === (1))){
var state_47951__$1 = state_47951;
var statearr_47953_48111 = state_47951__$1;
(statearr_47953_48111[(2)] = null);

(statearr_47953_48111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47952 === (2))){
var state_47951__$1 = state_47951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47951__$1,(4),jobs);
} else {
if((state_val_47952 === (3))){
var inst_47949 = (state_47951[(2)]);
var state_47951__$1 = state_47951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47951__$1,inst_47949);
} else {
if((state_val_47952 === (4))){
var inst_47941 = (state_47951[(2)]);
var inst_47942 = process.call(null,inst_47941);
var state_47951__$1 = state_47951;
if(cljs.core.truth_(inst_47942)){
var statearr_47954_48112 = state_47951__$1;
(statearr_47954_48112[(1)] = (5));

} else {
var statearr_47955_48113 = state_47951__$1;
(statearr_47955_48113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47952 === (5))){
var state_47951__$1 = state_47951;
var statearr_47956_48114 = state_47951__$1;
(statearr_47956_48114[(2)] = null);

(statearr_47956_48114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47952 === (6))){
var state_47951__$1 = state_47951;
var statearr_47957_48115 = state_47951__$1;
(statearr_47957_48115[(2)] = null);

(statearr_47957_48115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47952 === (7))){
var inst_47947 = (state_47951[(2)]);
var state_47951__$1 = state_47951;
var statearr_47958_48116 = state_47951__$1;
(statearr_47958_48116[(2)] = inst_47947);

(statearr_47958_48116[(1)] = (3));


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
});})(__48107,c__22597__auto___48110,G__47938_48108,n__20023__auto___48106,jobs,results,process,async))
;
return ((function (__48107,switch__22532__auto__,c__22597__auto___48110,G__47938_48108,n__20023__auto___48106,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0 = (function (){
var statearr_47962 = [null,null,null,null,null,null,null];
(statearr_47962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__);

(statearr_47962[(1)] = (1));

return statearr_47962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1 = (function (state_47951){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_47951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e47963){if((e47963 instanceof Object)){
var ex__22536__auto__ = e47963;
var statearr_47964_48117 = state_47951;
(statearr_47964_48117[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48118 = state_47951;
state_47951 = G__48118;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__ = function(state_47951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1.call(this,state_47951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__;
})()
;})(__48107,switch__22532__auto__,c__22597__auto___48110,G__47938_48108,n__20023__auto___48106,jobs,results,process,async))
})();
var state__22599__auto__ = (function (){var statearr_47965 = f__22598__auto__.call(null);
(statearr_47965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___48110);

return statearr_47965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(__48107,c__22597__auto___48110,G__47938_48108,n__20023__auto___48106,jobs,results,process,async))
);


break;
case "async":
var c__22597__auto___48119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48107,c__22597__auto___48119,G__47938_48108,n__20023__auto___48106,jobs,results,process,async){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (__48107,c__22597__auto___48119,G__47938_48108,n__20023__auto___48106,jobs,results,process,async){
return (function (state_47978){
var state_val_47979 = (state_47978[(1)]);
if((state_val_47979 === (1))){
var state_47978__$1 = state_47978;
var statearr_47980_48120 = state_47978__$1;
(statearr_47980_48120[(2)] = null);

(statearr_47980_48120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47979 === (2))){
var state_47978__$1 = state_47978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47978__$1,(4),jobs);
} else {
if((state_val_47979 === (3))){
var inst_47976 = (state_47978[(2)]);
var state_47978__$1 = state_47978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47978__$1,inst_47976);
} else {
if((state_val_47979 === (4))){
var inst_47968 = (state_47978[(2)]);
var inst_47969 = async.call(null,inst_47968);
var state_47978__$1 = state_47978;
if(cljs.core.truth_(inst_47969)){
var statearr_47981_48121 = state_47978__$1;
(statearr_47981_48121[(1)] = (5));

} else {
var statearr_47982_48122 = state_47978__$1;
(statearr_47982_48122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47979 === (5))){
var state_47978__$1 = state_47978;
var statearr_47983_48123 = state_47978__$1;
(statearr_47983_48123[(2)] = null);

(statearr_47983_48123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47979 === (6))){
var state_47978__$1 = state_47978;
var statearr_47984_48124 = state_47978__$1;
(statearr_47984_48124[(2)] = null);

(statearr_47984_48124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47979 === (7))){
var inst_47974 = (state_47978[(2)]);
var state_47978__$1 = state_47978;
var statearr_47985_48125 = state_47978__$1;
(statearr_47985_48125[(2)] = inst_47974);

(statearr_47985_48125[(1)] = (3));


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
});})(__48107,c__22597__auto___48119,G__47938_48108,n__20023__auto___48106,jobs,results,process,async))
;
return ((function (__48107,switch__22532__auto__,c__22597__auto___48119,G__47938_48108,n__20023__auto___48106,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0 = (function (){
var statearr_47989 = [null,null,null,null,null,null,null];
(statearr_47989[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__);

(statearr_47989[(1)] = (1));

return statearr_47989;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1 = (function (state_47978){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_47978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e47990){if((e47990 instanceof Object)){
var ex__22536__auto__ = e47990;
var statearr_47991_48126 = state_47978;
(statearr_47991_48126[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48127 = state_47978;
state_47978 = G__48127;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__ = function(state_47978){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1.call(this,state_47978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__;
})()
;})(__48107,switch__22532__auto__,c__22597__auto___48119,G__47938_48108,n__20023__auto___48106,jobs,results,process,async))
})();
var state__22599__auto__ = (function (){var statearr_47992 = f__22598__auto__.call(null);
(statearr_47992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___48119);

return statearr_47992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(__48107,c__22597__auto___48119,G__47938_48108,n__20023__auto___48106,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__48128 = (__48107 + (1));
__48107 = G__48128;
continue;
} else {
}
break;
}

var c__22597__auto___48129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___48129,jobs,results,process,async){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___48129,jobs,results,process,async){
return (function (state_48014){
var state_val_48015 = (state_48014[(1)]);
if((state_val_48015 === (1))){
var state_48014__$1 = state_48014;
var statearr_48016_48130 = state_48014__$1;
(statearr_48016_48130[(2)] = null);

(statearr_48016_48130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (2))){
var state_48014__$1 = state_48014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48014__$1,(4),from);
} else {
if((state_val_48015 === (3))){
var inst_48012 = (state_48014[(2)]);
var state_48014__$1 = state_48014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48014__$1,inst_48012);
} else {
if((state_val_48015 === (4))){
var inst_47995 = (state_48014[(7)]);
var inst_47995__$1 = (state_48014[(2)]);
var inst_47996 = (inst_47995__$1 == null);
var state_48014__$1 = (function (){var statearr_48017 = state_48014;
(statearr_48017[(7)] = inst_47995__$1);

return statearr_48017;
})();
if(cljs.core.truth_(inst_47996)){
var statearr_48018_48131 = state_48014__$1;
(statearr_48018_48131[(1)] = (5));

} else {
var statearr_48019_48132 = state_48014__$1;
(statearr_48019_48132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (5))){
var inst_47998 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48014__$1 = state_48014;
var statearr_48020_48133 = state_48014__$1;
(statearr_48020_48133[(2)] = inst_47998);

(statearr_48020_48133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (6))){
var inst_48000 = (state_48014[(8)]);
var inst_47995 = (state_48014[(7)]);
var inst_48000__$1 = cljs.core.async.chan.call(null,(1));
var inst_48001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48002 = [inst_47995,inst_48000__$1];
var inst_48003 = (new cljs.core.PersistentVector(null,2,(5),inst_48001,inst_48002,null));
var state_48014__$1 = (function (){var statearr_48021 = state_48014;
(statearr_48021[(8)] = inst_48000__$1);

return statearr_48021;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48014__$1,(8),jobs,inst_48003);
} else {
if((state_val_48015 === (7))){
var inst_48010 = (state_48014[(2)]);
var state_48014__$1 = state_48014;
var statearr_48022_48134 = state_48014__$1;
(statearr_48022_48134[(2)] = inst_48010);

(statearr_48022_48134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48015 === (8))){
var inst_48000 = (state_48014[(8)]);
var inst_48005 = (state_48014[(2)]);
var state_48014__$1 = (function (){var statearr_48023 = state_48014;
(statearr_48023[(9)] = inst_48005);

return statearr_48023;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48014__$1,(9),results,inst_48000);
} else {
if((state_val_48015 === (9))){
var inst_48007 = (state_48014[(2)]);
var state_48014__$1 = (function (){var statearr_48024 = state_48014;
(statearr_48024[(10)] = inst_48007);

return statearr_48024;
})();
var statearr_48025_48135 = state_48014__$1;
(statearr_48025_48135[(2)] = null);

(statearr_48025_48135[(1)] = (2));


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
});})(c__22597__auto___48129,jobs,results,process,async))
;
return ((function (switch__22532__auto__,c__22597__auto___48129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0 = (function (){
var statearr_48029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__);

(statearr_48029[(1)] = (1));

return statearr_48029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1 = (function (state_48014){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_48014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e48030){if((e48030 instanceof Object)){
var ex__22536__auto__ = e48030;
var statearr_48031_48136 = state_48014;
(statearr_48031_48136[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48137 = state_48014;
state_48014 = G__48137;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__ = function(state_48014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1.call(this,state_48014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___48129,jobs,results,process,async))
})();
var state__22599__auto__ = (function (){var statearr_48032 = f__22598__auto__.call(null);
(statearr_48032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___48129);

return statearr_48032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___48129,jobs,results,process,async))
);


var c__22597__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto__,jobs,results,process,async){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto__,jobs,results,process,async){
return (function (state_48070){
var state_val_48071 = (state_48070[(1)]);
if((state_val_48071 === (7))){
var inst_48066 = (state_48070[(2)]);
var state_48070__$1 = state_48070;
var statearr_48072_48138 = state_48070__$1;
(statearr_48072_48138[(2)] = inst_48066);

(statearr_48072_48138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (20))){
var state_48070__$1 = state_48070;
var statearr_48073_48139 = state_48070__$1;
(statearr_48073_48139[(2)] = null);

(statearr_48073_48139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (1))){
var state_48070__$1 = state_48070;
var statearr_48074_48140 = state_48070__$1;
(statearr_48074_48140[(2)] = null);

(statearr_48074_48140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (4))){
var inst_48035 = (state_48070[(7)]);
var inst_48035__$1 = (state_48070[(2)]);
var inst_48036 = (inst_48035__$1 == null);
var state_48070__$1 = (function (){var statearr_48075 = state_48070;
(statearr_48075[(7)] = inst_48035__$1);

return statearr_48075;
})();
if(cljs.core.truth_(inst_48036)){
var statearr_48076_48141 = state_48070__$1;
(statearr_48076_48141[(1)] = (5));

} else {
var statearr_48077_48142 = state_48070__$1;
(statearr_48077_48142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (15))){
var inst_48048 = (state_48070[(8)]);
var state_48070__$1 = state_48070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48070__$1,(18),to,inst_48048);
} else {
if((state_val_48071 === (21))){
var inst_48061 = (state_48070[(2)]);
var state_48070__$1 = state_48070;
var statearr_48078_48143 = state_48070__$1;
(statearr_48078_48143[(2)] = inst_48061);

(statearr_48078_48143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (13))){
var inst_48063 = (state_48070[(2)]);
var state_48070__$1 = (function (){var statearr_48079 = state_48070;
(statearr_48079[(9)] = inst_48063);

return statearr_48079;
})();
var statearr_48080_48144 = state_48070__$1;
(statearr_48080_48144[(2)] = null);

(statearr_48080_48144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (6))){
var inst_48035 = (state_48070[(7)]);
var state_48070__$1 = state_48070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48070__$1,(11),inst_48035);
} else {
if((state_val_48071 === (17))){
var inst_48056 = (state_48070[(2)]);
var state_48070__$1 = state_48070;
if(cljs.core.truth_(inst_48056)){
var statearr_48081_48145 = state_48070__$1;
(statearr_48081_48145[(1)] = (19));

} else {
var statearr_48082_48146 = state_48070__$1;
(statearr_48082_48146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (3))){
var inst_48068 = (state_48070[(2)]);
var state_48070__$1 = state_48070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48070__$1,inst_48068);
} else {
if((state_val_48071 === (12))){
var inst_48045 = (state_48070[(10)]);
var state_48070__$1 = state_48070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48070__$1,(14),inst_48045);
} else {
if((state_val_48071 === (2))){
var state_48070__$1 = state_48070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48070__$1,(4),results);
} else {
if((state_val_48071 === (19))){
var state_48070__$1 = state_48070;
var statearr_48083_48147 = state_48070__$1;
(statearr_48083_48147[(2)] = null);

(statearr_48083_48147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (11))){
var inst_48045 = (state_48070[(2)]);
var state_48070__$1 = (function (){var statearr_48084 = state_48070;
(statearr_48084[(10)] = inst_48045);

return statearr_48084;
})();
var statearr_48085_48148 = state_48070__$1;
(statearr_48085_48148[(2)] = null);

(statearr_48085_48148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (9))){
var state_48070__$1 = state_48070;
var statearr_48086_48149 = state_48070__$1;
(statearr_48086_48149[(2)] = null);

(statearr_48086_48149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (5))){
var state_48070__$1 = state_48070;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48087_48150 = state_48070__$1;
(statearr_48087_48150[(1)] = (8));

} else {
var statearr_48088_48151 = state_48070__$1;
(statearr_48088_48151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (14))){
var inst_48050 = (state_48070[(11)]);
var inst_48048 = (state_48070[(8)]);
var inst_48048__$1 = (state_48070[(2)]);
var inst_48049 = (inst_48048__$1 == null);
var inst_48050__$1 = cljs.core.not.call(null,inst_48049);
var state_48070__$1 = (function (){var statearr_48089 = state_48070;
(statearr_48089[(11)] = inst_48050__$1);

(statearr_48089[(8)] = inst_48048__$1);

return statearr_48089;
})();
if(inst_48050__$1){
var statearr_48090_48152 = state_48070__$1;
(statearr_48090_48152[(1)] = (15));

} else {
var statearr_48091_48153 = state_48070__$1;
(statearr_48091_48153[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (16))){
var inst_48050 = (state_48070[(11)]);
var state_48070__$1 = state_48070;
var statearr_48092_48154 = state_48070__$1;
(statearr_48092_48154[(2)] = inst_48050);

(statearr_48092_48154[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (10))){
var inst_48042 = (state_48070[(2)]);
var state_48070__$1 = state_48070;
var statearr_48093_48155 = state_48070__$1;
(statearr_48093_48155[(2)] = inst_48042);

(statearr_48093_48155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (18))){
var inst_48053 = (state_48070[(2)]);
var state_48070__$1 = state_48070;
var statearr_48094_48156 = state_48070__$1;
(statearr_48094_48156[(2)] = inst_48053);

(statearr_48094_48156[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48071 === (8))){
var inst_48039 = cljs.core.async.close_BANG_.call(null,to);
var state_48070__$1 = state_48070;
var statearr_48095_48157 = state_48070__$1;
(statearr_48095_48157[(2)] = inst_48039);

(statearr_48095_48157[(1)] = (10));


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
});})(c__22597__auto__,jobs,results,process,async))
;
return ((function (switch__22532__auto__,c__22597__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0 = (function (){
var statearr_48099 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__);

(statearr_48099[(1)] = (1));

return statearr_48099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1 = (function (state_48070){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_48070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e48100){if((e48100 instanceof Object)){
var ex__22536__auto__ = e48100;
var statearr_48101_48158 = state_48070;
(statearr_48101_48158[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48159 = state_48070;
state_48070 = G__48159;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__ = function(state_48070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1.call(this,state_48070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22533__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto__,jobs,results,process,async))
})();
var state__22599__auto__ = (function (){var statearr_48102 = f__22598__auto__.call(null);
(statearr_48102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto__);

return statearr_48102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto__,jobs,results,process,async))
);

return c__22597__auto__;
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
var args48160 = [];
var len__20178__auto___48163 = arguments.length;
var i__20179__auto___48164 = (0);
while(true){
if((i__20179__auto___48164 < len__20178__auto___48163)){
args48160.push((arguments[i__20179__auto___48164]));

var G__48165 = (i__20179__auto___48164 + (1));
i__20179__auto___48164 = G__48165;
continue;
} else {
}
break;
}

var G__48162 = args48160.length;
switch (G__48162) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48160.length)].join('')));

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
var args48167 = [];
var len__20178__auto___48170 = arguments.length;
var i__20179__auto___48171 = (0);
while(true){
if((i__20179__auto___48171 < len__20178__auto___48170)){
args48167.push((arguments[i__20179__auto___48171]));

var G__48172 = (i__20179__auto___48171 + (1));
i__20179__auto___48171 = G__48172;
continue;
} else {
}
break;
}

var G__48169 = args48167.length;
switch (G__48169) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48167.length)].join('')));

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
var args48174 = [];
var len__20178__auto___48227 = arguments.length;
var i__20179__auto___48228 = (0);
while(true){
if((i__20179__auto___48228 < len__20178__auto___48227)){
args48174.push((arguments[i__20179__auto___48228]));

var G__48229 = (i__20179__auto___48228 + (1));
i__20179__auto___48228 = G__48229;
continue;
} else {
}
break;
}

var G__48176 = args48174.length;
switch (G__48176) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48174.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22597__auto___48231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___48231,tc,fc){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___48231,tc,fc){
return (function (state_48202){
var state_val_48203 = (state_48202[(1)]);
if((state_val_48203 === (7))){
var inst_48198 = (state_48202[(2)]);
var state_48202__$1 = state_48202;
var statearr_48204_48232 = state_48202__$1;
(statearr_48204_48232[(2)] = inst_48198);

(statearr_48204_48232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (1))){
var state_48202__$1 = state_48202;
var statearr_48205_48233 = state_48202__$1;
(statearr_48205_48233[(2)] = null);

(statearr_48205_48233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (4))){
var inst_48179 = (state_48202[(7)]);
var inst_48179__$1 = (state_48202[(2)]);
var inst_48180 = (inst_48179__$1 == null);
var state_48202__$1 = (function (){var statearr_48206 = state_48202;
(statearr_48206[(7)] = inst_48179__$1);

return statearr_48206;
})();
if(cljs.core.truth_(inst_48180)){
var statearr_48207_48234 = state_48202__$1;
(statearr_48207_48234[(1)] = (5));

} else {
var statearr_48208_48235 = state_48202__$1;
(statearr_48208_48235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (13))){
var state_48202__$1 = state_48202;
var statearr_48209_48236 = state_48202__$1;
(statearr_48209_48236[(2)] = null);

(statearr_48209_48236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (6))){
var inst_48179 = (state_48202[(7)]);
var inst_48185 = p.call(null,inst_48179);
var state_48202__$1 = state_48202;
if(cljs.core.truth_(inst_48185)){
var statearr_48210_48237 = state_48202__$1;
(statearr_48210_48237[(1)] = (9));

} else {
var statearr_48211_48238 = state_48202__$1;
(statearr_48211_48238[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (3))){
var inst_48200 = (state_48202[(2)]);
var state_48202__$1 = state_48202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48202__$1,inst_48200);
} else {
if((state_val_48203 === (12))){
var state_48202__$1 = state_48202;
var statearr_48212_48239 = state_48202__$1;
(statearr_48212_48239[(2)] = null);

(statearr_48212_48239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (2))){
var state_48202__$1 = state_48202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48202__$1,(4),ch);
} else {
if((state_val_48203 === (11))){
var inst_48179 = (state_48202[(7)]);
var inst_48189 = (state_48202[(2)]);
var state_48202__$1 = state_48202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48202__$1,(8),inst_48189,inst_48179);
} else {
if((state_val_48203 === (9))){
var state_48202__$1 = state_48202;
var statearr_48213_48240 = state_48202__$1;
(statearr_48213_48240[(2)] = tc);

(statearr_48213_48240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (5))){
var inst_48182 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48183 = cljs.core.async.close_BANG_.call(null,fc);
var state_48202__$1 = (function (){var statearr_48214 = state_48202;
(statearr_48214[(8)] = inst_48182);

return statearr_48214;
})();
var statearr_48215_48241 = state_48202__$1;
(statearr_48215_48241[(2)] = inst_48183);

(statearr_48215_48241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (14))){
var inst_48196 = (state_48202[(2)]);
var state_48202__$1 = state_48202;
var statearr_48216_48242 = state_48202__$1;
(statearr_48216_48242[(2)] = inst_48196);

(statearr_48216_48242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (10))){
var state_48202__$1 = state_48202;
var statearr_48217_48243 = state_48202__$1;
(statearr_48217_48243[(2)] = fc);

(statearr_48217_48243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48203 === (8))){
var inst_48191 = (state_48202[(2)]);
var state_48202__$1 = state_48202;
if(cljs.core.truth_(inst_48191)){
var statearr_48218_48244 = state_48202__$1;
(statearr_48218_48244[(1)] = (12));

} else {
var statearr_48219_48245 = state_48202__$1;
(statearr_48219_48245[(1)] = (13));

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
});})(c__22597__auto___48231,tc,fc))
;
return ((function (switch__22532__auto__,c__22597__auto___48231,tc,fc){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_48223 = [null,null,null,null,null,null,null,null,null];
(statearr_48223[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_48223[(1)] = (1));

return statearr_48223;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_48202){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_48202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e48224){if((e48224 instanceof Object)){
var ex__22536__auto__ = e48224;
var statearr_48225_48246 = state_48202;
(statearr_48225_48246[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48247 = state_48202;
state_48202 = G__48247;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_48202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_48202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___48231,tc,fc))
})();
var state__22599__auto__ = (function (){var statearr_48226 = f__22598__auto__.call(null);
(statearr_48226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___48231);

return statearr_48226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___48231,tc,fc))
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
var c__22597__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto__){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto__){
return (function (state_48294){
var state_val_48295 = (state_48294[(1)]);
if((state_val_48295 === (1))){
var inst_48280 = init;
var state_48294__$1 = (function (){var statearr_48296 = state_48294;
(statearr_48296[(7)] = inst_48280);

return statearr_48296;
})();
var statearr_48297_48312 = state_48294__$1;
(statearr_48297_48312[(2)] = null);

(statearr_48297_48312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48295 === (2))){
var state_48294__$1 = state_48294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48294__$1,(4),ch);
} else {
if((state_val_48295 === (3))){
var inst_48292 = (state_48294[(2)]);
var state_48294__$1 = state_48294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48294__$1,inst_48292);
} else {
if((state_val_48295 === (4))){
var inst_48283 = (state_48294[(8)]);
var inst_48283__$1 = (state_48294[(2)]);
var inst_48284 = (inst_48283__$1 == null);
var state_48294__$1 = (function (){var statearr_48298 = state_48294;
(statearr_48298[(8)] = inst_48283__$1);

return statearr_48298;
})();
if(cljs.core.truth_(inst_48284)){
var statearr_48299_48313 = state_48294__$1;
(statearr_48299_48313[(1)] = (5));

} else {
var statearr_48300_48314 = state_48294__$1;
(statearr_48300_48314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48295 === (5))){
var inst_48280 = (state_48294[(7)]);
var state_48294__$1 = state_48294;
var statearr_48301_48315 = state_48294__$1;
(statearr_48301_48315[(2)] = inst_48280);

(statearr_48301_48315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48295 === (6))){
var inst_48280 = (state_48294[(7)]);
var inst_48283 = (state_48294[(8)]);
var inst_48287 = f.call(null,inst_48280,inst_48283);
var inst_48280__$1 = inst_48287;
var state_48294__$1 = (function (){var statearr_48302 = state_48294;
(statearr_48302[(7)] = inst_48280__$1);

return statearr_48302;
})();
var statearr_48303_48316 = state_48294__$1;
(statearr_48303_48316[(2)] = null);

(statearr_48303_48316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48295 === (7))){
var inst_48290 = (state_48294[(2)]);
var state_48294__$1 = state_48294;
var statearr_48304_48317 = state_48294__$1;
(statearr_48304_48317[(2)] = inst_48290);

(statearr_48304_48317[(1)] = (3));


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
});})(c__22597__auto__))
;
return ((function (switch__22532__auto__,c__22597__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22533__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22533__auto____0 = (function (){
var statearr_48308 = [null,null,null,null,null,null,null,null,null];
(statearr_48308[(0)] = cljs$core$async$reduce_$_state_machine__22533__auto__);

(statearr_48308[(1)] = (1));

return statearr_48308;
});
var cljs$core$async$reduce_$_state_machine__22533__auto____1 = (function (state_48294){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_48294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e48309){if((e48309 instanceof Object)){
var ex__22536__auto__ = e48309;
var statearr_48310_48318 = state_48294;
(statearr_48310_48318[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48319 = state_48294;
state_48294 = G__48319;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22533__auto__ = function(state_48294){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22533__auto____1.call(this,state_48294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22533__auto____0;
cljs$core$async$reduce_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22533__auto____1;
return cljs$core$async$reduce_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto__))
})();
var state__22599__auto__ = (function (){var statearr_48311 = f__22598__auto__.call(null);
(statearr_48311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto__);

return statearr_48311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto__))
);

return c__22597__auto__;
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
var args48320 = [];
var len__20178__auto___48372 = arguments.length;
var i__20179__auto___48373 = (0);
while(true){
if((i__20179__auto___48373 < len__20178__auto___48372)){
args48320.push((arguments[i__20179__auto___48373]));

var G__48374 = (i__20179__auto___48373 + (1));
i__20179__auto___48373 = G__48374;
continue;
} else {
}
break;
}

var G__48322 = args48320.length;
switch (G__48322) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48320.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22597__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto__){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto__){
return (function (state_48347){
var state_val_48348 = (state_48347[(1)]);
if((state_val_48348 === (7))){
var inst_48329 = (state_48347[(2)]);
var state_48347__$1 = state_48347;
var statearr_48349_48376 = state_48347__$1;
(statearr_48349_48376[(2)] = inst_48329);

(statearr_48349_48376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (1))){
var inst_48323 = cljs.core.seq.call(null,coll);
var inst_48324 = inst_48323;
var state_48347__$1 = (function (){var statearr_48350 = state_48347;
(statearr_48350[(7)] = inst_48324);

return statearr_48350;
})();
var statearr_48351_48377 = state_48347__$1;
(statearr_48351_48377[(2)] = null);

(statearr_48351_48377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (4))){
var inst_48324 = (state_48347[(7)]);
var inst_48327 = cljs.core.first.call(null,inst_48324);
var state_48347__$1 = state_48347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48347__$1,(7),ch,inst_48327);
} else {
if((state_val_48348 === (13))){
var inst_48341 = (state_48347[(2)]);
var state_48347__$1 = state_48347;
var statearr_48352_48378 = state_48347__$1;
(statearr_48352_48378[(2)] = inst_48341);

(statearr_48352_48378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (6))){
var inst_48332 = (state_48347[(2)]);
var state_48347__$1 = state_48347;
if(cljs.core.truth_(inst_48332)){
var statearr_48353_48379 = state_48347__$1;
(statearr_48353_48379[(1)] = (8));

} else {
var statearr_48354_48380 = state_48347__$1;
(statearr_48354_48380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (3))){
var inst_48345 = (state_48347[(2)]);
var state_48347__$1 = state_48347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48347__$1,inst_48345);
} else {
if((state_val_48348 === (12))){
var state_48347__$1 = state_48347;
var statearr_48355_48381 = state_48347__$1;
(statearr_48355_48381[(2)] = null);

(statearr_48355_48381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (2))){
var inst_48324 = (state_48347[(7)]);
var state_48347__$1 = state_48347;
if(cljs.core.truth_(inst_48324)){
var statearr_48356_48382 = state_48347__$1;
(statearr_48356_48382[(1)] = (4));

} else {
var statearr_48357_48383 = state_48347__$1;
(statearr_48357_48383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (11))){
var inst_48338 = cljs.core.async.close_BANG_.call(null,ch);
var state_48347__$1 = state_48347;
var statearr_48358_48384 = state_48347__$1;
(statearr_48358_48384[(2)] = inst_48338);

(statearr_48358_48384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (9))){
var state_48347__$1 = state_48347;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48359_48385 = state_48347__$1;
(statearr_48359_48385[(1)] = (11));

} else {
var statearr_48360_48386 = state_48347__$1;
(statearr_48360_48386[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (5))){
var inst_48324 = (state_48347[(7)]);
var state_48347__$1 = state_48347;
var statearr_48361_48387 = state_48347__$1;
(statearr_48361_48387[(2)] = inst_48324);

(statearr_48361_48387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (10))){
var inst_48343 = (state_48347[(2)]);
var state_48347__$1 = state_48347;
var statearr_48362_48388 = state_48347__$1;
(statearr_48362_48388[(2)] = inst_48343);

(statearr_48362_48388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (8))){
var inst_48324 = (state_48347[(7)]);
var inst_48334 = cljs.core.next.call(null,inst_48324);
var inst_48324__$1 = inst_48334;
var state_48347__$1 = (function (){var statearr_48363 = state_48347;
(statearr_48363[(7)] = inst_48324__$1);

return statearr_48363;
})();
var statearr_48364_48389 = state_48347__$1;
(statearr_48364_48389[(2)] = null);

(statearr_48364_48389[(1)] = (2));


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
});})(c__22597__auto__))
;
return ((function (switch__22532__auto__,c__22597__auto__){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_48368 = [null,null,null,null,null,null,null,null];
(statearr_48368[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_48368[(1)] = (1));

return statearr_48368;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_48347){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_48347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e48369){if((e48369 instanceof Object)){
var ex__22536__auto__ = e48369;
var statearr_48370_48390 = state_48347;
(statearr_48370_48390[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48391 = state_48347;
state_48347 = G__48391;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_48347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_48347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto__))
})();
var state__22599__auto__ = (function (){var statearr_48371 = f__22598__auto__.call(null);
(statearr_48371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto__);

return statearr_48371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto__))
);

return c__22597__auto__;
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
var x__19775__auto__ = (((_ == null))?null:_);
var m__19776__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,_);
} else {
var m__19776__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,_);
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
var x__19775__auto__ = (((m == null))?null:m);
var m__19776__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19776__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19775__auto__ = (((m == null))?null:m);
var m__19776__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,m,ch);
} else {
var m__19776__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,m,ch);
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
var x__19775__auto__ = (((m == null))?null:m);
var m__19776__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,m);
} else {
var m__19776__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async48613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48613 = (function (mult,ch,cs,meta48614){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta48614 = meta48614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48615,meta48614__$1){
var self__ = this;
var _48615__$1 = this;
return (new cljs.core.async.t_cljs$core$async48613(self__.mult,self__.ch,self__.cs,meta48614__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48615){
var self__ = this;
var _48615__$1 = this;
return self__.meta48614;
});})(cs))
;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48613.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48614","meta48614",-613342802,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48613";

cljs.core.async.t_cljs$core$async48613.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cljs.core.async/t_cljs$core$async48613");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48613 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48613(mult__$1,ch__$1,cs__$1,meta48614){
return (new cljs.core.async.t_cljs$core$async48613(mult__$1,ch__$1,cs__$1,meta48614));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48613(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22597__auto___48834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___48834,cs,m,dchan,dctr,done){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___48834,cs,m,dchan,dctr,done){
return (function (state_48746){
var state_val_48747 = (state_48746[(1)]);
if((state_val_48747 === (7))){
var inst_48742 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48748_48835 = state_48746__$1;
(statearr_48748_48835[(2)] = inst_48742);

(statearr_48748_48835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (20))){
var inst_48647 = (state_48746[(7)]);
var inst_48657 = cljs.core.first.call(null,inst_48647);
var inst_48658 = cljs.core.nth.call(null,inst_48657,(0),null);
var inst_48659 = cljs.core.nth.call(null,inst_48657,(1),null);
var state_48746__$1 = (function (){var statearr_48749 = state_48746;
(statearr_48749[(8)] = inst_48658);

return statearr_48749;
})();
if(cljs.core.truth_(inst_48659)){
var statearr_48750_48836 = state_48746__$1;
(statearr_48750_48836[(1)] = (22));

} else {
var statearr_48751_48837 = state_48746__$1;
(statearr_48751_48837[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (27))){
var inst_48689 = (state_48746[(9)]);
var inst_48687 = (state_48746[(10)]);
var inst_48694 = (state_48746[(11)]);
var inst_48618 = (state_48746[(12)]);
var inst_48694__$1 = cljs.core._nth.call(null,inst_48687,inst_48689);
var inst_48695 = cljs.core.async.put_BANG_.call(null,inst_48694__$1,inst_48618,done);
var state_48746__$1 = (function (){var statearr_48752 = state_48746;
(statearr_48752[(11)] = inst_48694__$1);

return statearr_48752;
})();
if(cljs.core.truth_(inst_48695)){
var statearr_48753_48838 = state_48746__$1;
(statearr_48753_48838[(1)] = (30));

} else {
var statearr_48754_48839 = state_48746__$1;
(statearr_48754_48839[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (1))){
var state_48746__$1 = state_48746;
var statearr_48755_48840 = state_48746__$1;
(statearr_48755_48840[(2)] = null);

(statearr_48755_48840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (24))){
var inst_48647 = (state_48746[(7)]);
var inst_48664 = (state_48746[(2)]);
var inst_48665 = cljs.core.next.call(null,inst_48647);
var inst_48627 = inst_48665;
var inst_48628 = null;
var inst_48629 = (0);
var inst_48630 = (0);
var state_48746__$1 = (function (){var statearr_48756 = state_48746;
(statearr_48756[(13)] = inst_48664);

(statearr_48756[(14)] = inst_48628);

(statearr_48756[(15)] = inst_48627);

(statearr_48756[(16)] = inst_48629);

(statearr_48756[(17)] = inst_48630);

return statearr_48756;
})();
var statearr_48757_48841 = state_48746__$1;
(statearr_48757_48841[(2)] = null);

(statearr_48757_48841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (39))){
var state_48746__$1 = state_48746;
var statearr_48761_48842 = state_48746__$1;
(statearr_48761_48842[(2)] = null);

(statearr_48761_48842[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (4))){
var inst_48618 = (state_48746[(12)]);
var inst_48618__$1 = (state_48746[(2)]);
var inst_48619 = (inst_48618__$1 == null);
var state_48746__$1 = (function (){var statearr_48762 = state_48746;
(statearr_48762[(12)] = inst_48618__$1);

return statearr_48762;
})();
if(cljs.core.truth_(inst_48619)){
var statearr_48763_48843 = state_48746__$1;
(statearr_48763_48843[(1)] = (5));

} else {
var statearr_48764_48844 = state_48746__$1;
(statearr_48764_48844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (15))){
var inst_48628 = (state_48746[(14)]);
var inst_48627 = (state_48746[(15)]);
var inst_48629 = (state_48746[(16)]);
var inst_48630 = (state_48746[(17)]);
var inst_48643 = (state_48746[(2)]);
var inst_48644 = (inst_48630 + (1));
var tmp48758 = inst_48628;
var tmp48759 = inst_48627;
var tmp48760 = inst_48629;
var inst_48627__$1 = tmp48759;
var inst_48628__$1 = tmp48758;
var inst_48629__$1 = tmp48760;
var inst_48630__$1 = inst_48644;
var state_48746__$1 = (function (){var statearr_48765 = state_48746;
(statearr_48765[(14)] = inst_48628__$1);

(statearr_48765[(18)] = inst_48643);

(statearr_48765[(15)] = inst_48627__$1);

(statearr_48765[(16)] = inst_48629__$1);

(statearr_48765[(17)] = inst_48630__$1);

return statearr_48765;
})();
var statearr_48766_48845 = state_48746__$1;
(statearr_48766_48845[(2)] = null);

(statearr_48766_48845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (21))){
var inst_48668 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48770_48846 = state_48746__$1;
(statearr_48770_48846[(2)] = inst_48668);

(statearr_48770_48846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (31))){
var inst_48694 = (state_48746[(11)]);
var inst_48698 = done.call(null,null);
var inst_48699 = cljs.core.async.untap_STAR_.call(null,m,inst_48694);
var state_48746__$1 = (function (){var statearr_48771 = state_48746;
(statearr_48771[(19)] = inst_48698);

return statearr_48771;
})();
var statearr_48772_48847 = state_48746__$1;
(statearr_48772_48847[(2)] = inst_48699);

(statearr_48772_48847[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (32))){
var inst_48688 = (state_48746[(20)]);
var inst_48689 = (state_48746[(9)]);
var inst_48687 = (state_48746[(10)]);
var inst_48686 = (state_48746[(21)]);
var inst_48701 = (state_48746[(2)]);
var inst_48702 = (inst_48689 + (1));
var tmp48767 = inst_48688;
var tmp48768 = inst_48687;
var tmp48769 = inst_48686;
var inst_48686__$1 = tmp48769;
var inst_48687__$1 = tmp48768;
var inst_48688__$1 = tmp48767;
var inst_48689__$1 = inst_48702;
var state_48746__$1 = (function (){var statearr_48773 = state_48746;
(statearr_48773[(20)] = inst_48688__$1);

(statearr_48773[(9)] = inst_48689__$1);

(statearr_48773[(22)] = inst_48701);

(statearr_48773[(10)] = inst_48687__$1);

(statearr_48773[(21)] = inst_48686__$1);

return statearr_48773;
})();
var statearr_48774_48848 = state_48746__$1;
(statearr_48774_48848[(2)] = null);

(statearr_48774_48848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (40))){
var inst_48714 = (state_48746[(23)]);
var inst_48718 = done.call(null,null);
var inst_48719 = cljs.core.async.untap_STAR_.call(null,m,inst_48714);
var state_48746__$1 = (function (){var statearr_48775 = state_48746;
(statearr_48775[(24)] = inst_48718);

return statearr_48775;
})();
var statearr_48776_48849 = state_48746__$1;
(statearr_48776_48849[(2)] = inst_48719);

(statearr_48776_48849[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (33))){
var inst_48705 = (state_48746[(25)]);
var inst_48707 = cljs.core.chunked_seq_QMARK_.call(null,inst_48705);
var state_48746__$1 = state_48746;
if(inst_48707){
var statearr_48777_48850 = state_48746__$1;
(statearr_48777_48850[(1)] = (36));

} else {
var statearr_48778_48851 = state_48746__$1;
(statearr_48778_48851[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (13))){
var inst_48637 = (state_48746[(26)]);
var inst_48640 = cljs.core.async.close_BANG_.call(null,inst_48637);
var state_48746__$1 = state_48746;
var statearr_48779_48852 = state_48746__$1;
(statearr_48779_48852[(2)] = inst_48640);

(statearr_48779_48852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (22))){
var inst_48658 = (state_48746[(8)]);
var inst_48661 = cljs.core.async.close_BANG_.call(null,inst_48658);
var state_48746__$1 = state_48746;
var statearr_48780_48853 = state_48746__$1;
(statearr_48780_48853[(2)] = inst_48661);

(statearr_48780_48853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (36))){
var inst_48705 = (state_48746[(25)]);
var inst_48709 = cljs.core.chunk_first.call(null,inst_48705);
var inst_48710 = cljs.core.chunk_rest.call(null,inst_48705);
var inst_48711 = cljs.core.count.call(null,inst_48709);
var inst_48686 = inst_48710;
var inst_48687 = inst_48709;
var inst_48688 = inst_48711;
var inst_48689 = (0);
var state_48746__$1 = (function (){var statearr_48781 = state_48746;
(statearr_48781[(20)] = inst_48688);

(statearr_48781[(9)] = inst_48689);

(statearr_48781[(10)] = inst_48687);

(statearr_48781[(21)] = inst_48686);

return statearr_48781;
})();
var statearr_48782_48854 = state_48746__$1;
(statearr_48782_48854[(2)] = null);

(statearr_48782_48854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (41))){
var inst_48705 = (state_48746[(25)]);
var inst_48721 = (state_48746[(2)]);
var inst_48722 = cljs.core.next.call(null,inst_48705);
var inst_48686 = inst_48722;
var inst_48687 = null;
var inst_48688 = (0);
var inst_48689 = (0);
var state_48746__$1 = (function (){var statearr_48783 = state_48746;
(statearr_48783[(20)] = inst_48688);

(statearr_48783[(9)] = inst_48689);

(statearr_48783[(10)] = inst_48687);

(statearr_48783[(21)] = inst_48686);

(statearr_48783[(27)] = inst_48721);

return statearr_48783;
})();
var statearr_48784_48855 = state_48746__$1;
(statearr_48784_48855[(2)] = null);

(statearr_48784_48855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (43))){
var state_48746__$1 = state_48746;
var statearr_48785_48856 = state_48746__$1;
(statearr_48785_48856[(2)] = null);

(statearr_48785_48856[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (29))){
var inst_48730 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48786_48857 = state_48746__$1;
(statearr_48786_48857[(2)] = inst_48730);

(statearr_48786_48857[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (44))){
var inst_48739 = (state_48746[(2)]);
var state_48746__$1 = (function (){var statearr_48787 = state_48746;
(statearr_48787[(28)] = inst_48739);

return statearr_48787;
})();
var statearr_48788_48858 = state_48746__$1;
(statearr_48788_48858[(2)] = null);

(statearr_48788_48858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (6))){
var inst_48678 = (state_48746[(29)]);
var inst_48677 = cljs.core.deref.call(null,cs);
var inst_48678__$1 = cljs.core.keys.call(null,inst_48677);
var inst_48679 = cljs.core.count.call(null,inst_48678__$1);
var inst_48680 = cljs.core.reset_BANG_.call(null,dctr,inst_48679);
var inst_48685 = cljs.core.seq.call(null,inst_48678__$1);
var inst_48686 = inst_48685;
var inst_48687 = null;
var inst_48688 = (0);
var inst_48689 = (0);
var state_48746__$1 = (function (){var statearr_48789 = state_48746;
(statearr_48789[(20)] = inst_48688);

(statearr_48789[(9)] = inst_48689);

(statearr_48789[(30)] = inst_48680);

(statearr_48789[(10)] = inst_48687);

(statearr_48789[(21)] = inst_48686);

(statearr_48789[(29)] = inst_48678__$1);

return statearr_48789;
})();
var statearr_48790_48859 = state_48746__$1;
(statearr_48790_48859[(2)] = null);

(statearr_48790_48859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (28))){
var inst_48686 = (state_48746[(21)]);
var inst_48705 = (state_48746[(25)]);
var inst_48705__$1 = cljs.core.seq.call(null,inst_48686);
var state_48746__$1 = (function (){var statearr_48791 = state_48746;
(statearr_48791[(25)] = inst_48705__$1);

return statearr_48791;
})();
if(inst_48705__$1){
var statearr_48792_48860 = state_48746__$1;
(statearr_48792_48860[(1)] = (33));

} else {
var statearr_48793_48861 = state_48746__$1;
(statearr_48793_48861[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (25))){
var inst_48688 = (state_48746[(20)]);
var inst_48689 = (state_48746[(9)]);
var inst_48691 = (inst_48689 < inst_48688);
var inst_48692 = inst_48691;
var state_48746__$1 = state_48746;
if(cljs.core.truth_(inst_48692)){
var statearr_48794_48862 = state_48746__$1;
(statearr_48794_48862[(1)] = (27));

} else {
var statearr_48795_48863 = state_48746__$1;
(statearr_48795_48863[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (34))){
var state_48746__$1 = state_48746;
var statearr_48796_48864 = state_48746__$1;
(statearr_48796_48864[(2)] = null);

(statearr_48796_48864[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (17))){
var state_48746__$1 = state_48746;
var statearr_48797_48865 = state_48746__$1;
(statearr_48797_48865[(2)] = null);

(statearr_48797_48865[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (3))){
var inst_48744 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48746__$1,inst_48744);
} else {
if((state_val_48747 === (12))){
var inst_48673 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48798_48866 = state_48746__$1;
(statearr_48798_48866[(2)] = inst_48673);

(statearr_48798_48866[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (2))){
var state_48746__$1 = state_48746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48746__$1,(4),ch);
} else {
if((state_val_48747 === (23))){
var state_48746__$1 = state_48746;
var statearr_48799_48867 = state_48746__$1;
(statearr_48799_48867[(2)] = null);

(statearr_48799_48867[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (35))){
var inst_48728 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48800_48868 = state_48746__$1;
(statearr_48800_48868[(2)] = inst_48728);

(statearr_48800_48868[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (19))){
var inst_48647 = (state_48746[(7)]);
var inst_48651 = cljs.core.chunk_first.call(null,inst_48647);
var inst_48652 = cljs.core.chunk_rest.call(null,inst_48647);
var inst_48653 = cljs.core.count.call(null,inst_48651);
var inst_48627 = inst_48652;
var inst_48628 = inst_48651;
var inst_48629 = inst_48653;
var inst_48630 = (0);
var state_48746__$1 = (function (){var statearr_48801 = state_48746;
(statearr_48801[(14)] = inst_48628);

(statearr_48801[(15)] = inst_48627);

(statearr_48801[(16)] = inst_48629);

(statearr_48801[(17)] = inst_48630);

return statearr_48801;
})();
var statearr_48802_48869 = state_48746__$1;
(statearr_48802_48869[(2)] = null);

(statearr_48802_48869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (11))){
var inst_48647 = (state_48746[(7)]);
var inst_48627 = (state_48746[(15)]);
var inst_48647__$1 = cljs.core.seq.call(null,inst_48627);
var state_48746__$1 = (function (){var statearr_48803 = state_48746;
(statearr_48803[(7)] = inst_48647__$1);

return statearr_48803;
})();
if(inst_48647__$1){
var statearr_48804_48870 = state_48746__$1;
(statearr_48804_48870[(1)] = (16));

} else {
var statearr_48805_48871 = state_48746__$1;
(statearr_48805_48871[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (9))){
var inst_48675 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48806_48872 = state_48746__$1;
(statearr_48806_48872[(2)] = inst_48675);

(statearr_48806_48872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (5))){
var inst_48625 = cljs.core.deref.call(null,cs);
var inst_48626 = cljs.core.seq.call(null,inst_48625);
var inst_48627 = inst_48626;
var inst_48628 = null;
var inst_48629 = (0);
var inst_48630 = (0);
var state_48746__$1 = (function (){var statearr_48807 = state_48746;
(statearr_48807[(14)] = inst_48628);

(statearr_48807[(15)] = inst_48627);

(statearr_48807[(16)] = inst_48629);

(statearr_48807[(17)] = inst_48630);

return statearr_48807;
})();
var statearr_48808_48873 = state_48746__$1;
(statearr_48808_48873[(2)] = null);

(statearr_48808_48873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (14))){
var state_48746__$1 = state_48746;
var statearr_48809_48874 = state_48746__$1;
(statearr_48809_48874[(2)] = null);

(statearr_48809_48874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (45))){
var inst_48736 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48810_48875 = state_48746__$1;
(statearr_48810_48875[(2)] = inst_48736);

(statearr_48810_48875[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (26))){
var inst_48678 = (state_48746[(29)]);
var inst_48732 = (state_48746[(2)]);
var inst_48733 = cljs.core.seq.call(null,inst_48678);
var state_48746__$1 = (function (){var statearr_48811 = state_48746;
(statearr_48811[(31)] = inst_48732);

return statearr_48811;
})();
if(inst_48733){
var statearr_48812_48876 = state_48746__$1;
(statearr_48812_48876[(1)] = (42));

} else {
var statearr_48813_48877 = state_48746__$1;
(statearr_48813_48877[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (16))){
var inst_48647 = (state_48746[(7)]);
var inst_48649 = cljs.core.chunked_seq_QMARK_.call(null,inst_48647);
var state_48746__$1 = state_48746;
if(inst_48649){
var statearr_48814_48878 = state_48746__$1;
(statearr_48814_48878[(1)] = (19));

} else {
var statearr_48815_48879 = state_48746__$1;
(statearr_48815_48879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (38))){
var inst_48725 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48816_48880 = state_48746__$1;
(statearr_48816_48880[(2)] = inst_48725);

(statearr_48816_48880[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (30))){
var state_48746__$1 = state_48746;
var statearr_48817_48881 = state_48746__$1;
(statearr_48817_48881[(2)] = null);

(statearr_48817_48881[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (10))){
var inst_48628 = (state_48746[(14)]);
var inst_48630 = (state_48746[(17)]);
var inst_48636 = cljs.core._nth.call(null,inst_48628,inst_48630);
var inst_48637 = cljs.core.nth.call(null,inst_48636,(0),null);
var inst_48638 = cljs.core.nth.call(null,inst_48636,(1),null);
var state_48746__$1 = (function (){var statearr_48818 = state_48746;
(statearr_48818[(26)] = inst_48637);

return statearr_48818;
})();
if(cljs.core.truth_(inst_48638)){
var statearr_48819_48882 = state_48746__$1;
(statearr_48819_48882[(1)] = (13));

} else {
var statearr_48820_48883 = state_48746__$1;
(statearr_48820_48883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (18))){
var inst_48671 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48821_48884 = state_48746__$1;
(statearr_48821_48884[(2)] = inst_48671);

(statearr_48821_48884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (42))){
var state_48746__$1 = state_48746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48746__$1,(45),dchan);
} else {
if((state_val_48747 === (37))){
var inst_48705 = (state_48746[(25)]);
var inst_48618 = (state_48746[(12)]);
var inst_48714 = (state_48746[(23)]);
var inst_48714__$1 = cljs.core.first.call(null,inst_48705);
var inst_48715 = cljs.core.async.put_BANG_.call(null,inst_48714__$1,inst_48618,done);
var state_48746__$1 = (function (){var statearr_48822 = state_48746;
(statearr_48822[(23)] = inst_48714__$1);

return statearr_48822;
})();
if(cljs.core.truth_(inst_48715)){
var statearr_48823_48885 = state_48746__$1;
(statearr_48823_48885[(1)] = (39));

} else {
var statearr_48824_48886 = state_48746__$1;
(statearr_48824_48886[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (8))){
var inst_48629 = (state_48746[(16)]);
var inst_48630 = (state_48746[(17)]);
var inst_48632 = (inst_48630 < inst_48629);
var inst_48633 = inst_48632;
var state_48746__$1 = state_48746;
if(cljs.core.truth_(inst_48633)){
var statearr_48825_48887 = state_48746__$1;
(statearr_48825_48887[(1)] = (10));

} else {
var statearr_48826_48888 = state_48746__$1;
(statearr_48826_48888[(1)] = (11));

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
});})(c__22597__auto___48834,cs,m,dchan,dctr,done))
;
return ((function (switch__22532__auto__,c__22597__auto___48834,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22533__auto__ = null;
var cljs$core$async$mult_$_state_machine__22533__auto____0 = (function (){
var statearr_48830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48830[(0)] = cljs$core$async$mult_$_state_machine__22533__auto__);

(statearr_48830[(1)] = (1));

return statearr_48830;
});
var cljs$core$async$mult_$_state_machine__22533__auto____1 = (function (state_48746){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_48746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e48831){if((e48831 instanceof Object)){
var ex__22536__auto__ = e48831;
var statearr_48832_48889 = state_48746;
(statearr_48832_48889[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48890 = state_48746;
state_48746 = G__48890;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22533__auto__ = function(state_48746){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22533__auto____1.call(this,state_48746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22533__auto____0;
cljs$core$async$mult_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22533__auto____1;
return cljs$core$async$mult_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___48834,cs,m,dchan,dctr,done))
})();
var state__22599__auto__ = (function (){var statearr_48833 = f__22598__auto__.call(null);
(statearr_48833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___48834);

return statearr_48833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___48834,cs,m,dchan,dctr,done))
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
var args48891 = [];
var len__20178__auto___48894 = arguments.length;
var i__20179__auto___48895 = (0);
while(true){
if((i__20179__auto___48895 < len__20178__auto___48894)){
args48891.push((arguments[i__20179__auto___48895]));

var G__48896 = (i__20179__auto___48895 + (1));
i__20179__auto___48895 = G__48896;
continue;
} else {
}
break;
}

var G__48893 = args48891.length;
switch (G__48893) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48891.length)].join('')));

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
var x__19775__auto__ = (((m == null))?null:m);
var m__19776__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,m,ch);
} else {
var m__19776__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,m,ch);
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
var x__19775__auto__ = (((m == null))?null:m);
var m__19776__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,m,ch);
} else {
var m__19776__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,m,ch);
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
var x__19775__auto__ = (((m == null))?null:m);
var m__19776__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,m);
} else {
var m__19776__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,m);
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
var x__19775__auto__ = (((m == null))?null:m);
var m__19776__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,m,state_map);
} else {
var m__19776__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,m,state_map);
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
var x__19775__auto__ = (((m == null))?null:m);
var m__19776__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,m,mode);
} else {
var m__19776__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20185__auto__ = [];
var len__20178__auto___48908 = arguments.length;
var i__20179__auto___48909 = (0);
while(true){
if((i__20179__auto___48909 < len__20178__auto___48908)){
args__20185__auto__.push((arguments[i__20179__auto___48909]));

var G__48910 = (i__20179__auto___48909 + (1));
i__20179__auto___48909 = G__48910;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((3) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20186__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48902){
var map__48903 = p__48902;
var map__48903__$1 = ((((!((map__48903 == null)))?((((map__48903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48903):map__48903);
var opts = map__48903__$1;
var statearr_48905_48911 = state;
(statearr_48905_48911[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__48903,map__48903__$1,opts){
return (function (val){
var statearr_48906_48912 = state;
(statearr_48906_48912[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48903,map__48903__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_48907_48913 = state;
(statearr_48907_48913[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48898){
var G__48899 = cljs.core.first.call(null,seq48898);
var seq48898__$1 = cljs.core.next.call(null,seq48898);
var G__48900 = cljs.core.first.call(null,seq48898__$1);
var seq48898__$2 = cljs.core.next.call(null,seq48898__$1);
var G__48901 = cljs.core.first.call(null,seq48898__$2);
var seq48898__$3 = cljs.core.next.call(null,seq48898__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48899,G__48900,G__48901,seq48898__$3);
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
if(typeof cljs.core.async.t_cljs$core$async49077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49077 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49078){
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
this.meta49078 = meta49078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49079,meta49078__$1){
var self__ = this;
var _49079__$1 = this;
return (new cljs.core.async.t_cljs$core$async49077(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49078__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49079){
var self__ = this;
var _49079__$1 = this;
return self__.meta49078;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49077.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async49077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49077.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async49077.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49077.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49077.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49077.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49077.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async49077.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49078","meta49078",-2082844643,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49077";

cljs.core.async.t_cljs$core$async49077.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cljs.core.async/t_cljs$core$async49077");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async49077 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async49077(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49078){
return (new cljs.core.async.t_cljs$core$async49077(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49078));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async49077(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22597__auto___49240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___49240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___49240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49177){
var state_val_49178 = (state_49177[(1)]);
if((state_val_49178 === (7))){
var inst_49095 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
var statearr_49179_49241 = state_49177__$1;
(statearr_49179_49241[(2)] = inst_49095);

(statearr_49179_49241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (20))){
var inst_49107 = (state_49177[(7)]);
var state_49177__$1 = state_49177;
var statearr_49180_49242 = state_49177__$1;
(statearr_49180_49242[(2)] = inst_49107);

(statearr_49180_49242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (27))){
var state_49177__$1 = state_49177;
var statearr_49181_49243 = state_49177__$1;
(statearr_49181_49243[(2)] = null);

(statearr_49181_49243[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (1))){
var inst_49083 = (state_49177[(8)]);
var inst_49083__$1 = calc_state.call(null);
var inst_49085 = (inst_49083__$1 == null);
var inst_49086 = cljs.core.not.call(null,inst_49085);
var state_49177__$1 = (function (){var statearr_49182 = state_49177;
(statearr_49182[(8)] = inst_49083__$1);

return statearr_49182;
})();
if(inst_49086){
var statearr_49183_49244 = state_49177__$1;
(statearr_49183_49244[(1)] = (2));

} else {
var statearr_49184_49245 = state_49177__$1;
(statearr_49184_49245[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (24))){
var inst_49137 = (state_49177[(9)]);
var inst_49130 = (state_49177[(10)]);
var inst_49151 = (state_49177[(11)]);
var inst_49151__$1 = inst_49130.call(null,inst_49137);
var state_49177__$1 = (function (){var statearr_49185 = state_49177;
(statearr_49185[(11)] = inst_49151__$1);

return statearr_49185;
})();
if(cljs.core.truth_(inst_49151__$1)){
var statearr_49186_49246 = state_49177__$1;
(statearr_49186_49246[(1)] = (29));

} else {
var statearr_49187_49247 = state_49177__$1;
(statearr_49187_49247[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (4))){
var inst_49098 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
if(cljs.core.truth_(inst_49098)){
var statearr_49188_49248 = state_49177__$1;
(statearr_49188_49248[(1)] = (8));

} else {
var statearr_49189_49249 = state_49177__$1;
(statearr_49189_49249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (15))){
var inst_49124 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
if(cljs.core.truth_(inst_49124)){
var statearr_49190_49250 = state_49177__$1;
(statearr_49190_49250[(1)] = (19));

} else {
var statearr_49191_49251 = state_49177__$1;
(statearr_49191_49251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (21))){
var inst_49129 = (state_49177[(12)]);
var inst_49129__$1 = (state_49177[(2)]);
var inst_49130 = cljs.core.get.call(null,inst_49129__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49131 = cljs.core.get.call(null,inst_49129__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49132 = cljs.core.get.call(null,inst_49129__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49177__$1 = (function (){var statearr_49192 = state_49177;
(statearr_49192[(12)] = inst_49129__$1);

(statearr_49192[(13)] = inst_49131);

(statearr_49192[(10)] = inst_49130);

return statearr_49192;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49177__$1,(22),inst_49132);
} else {
if((state_val_49178 === (31))){
var inst_49159 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
if(cljs.core.truth_(inst_49159)){
var statearr_49193_49252 = state_49177__$1;
(statearr_49193_49252[(1)] = (32));

} else {
var statearr_49194_49253 = state_49177__$1;
(statearr_49194_49253[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (32))){
var inst_49136 = (state_49177[(14)]);
var state_49177__$1 = state_49177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49177__$1,(35),out,inst_49136);
} else {
if((state_val_49178 === (33))){
var inst_49129 = (state_49177[(12)]);
var inst_49107 = inst_49129;
var state_49177__$1 = (function (){var statearr_49195 = state_49177;
(statearr_49195[(7)] = inst_49107);

return statearr_49195;
})();
var statearr_49196_49254 = state_49177__$1;
(statearr_49196_49254[(2)] = null);

(statearr_49196_49254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (13))){
var inst_49107 = (state_49177[(7)]);
var inst_49114 = inst_49107.cljs$lang$protocol_mask$partition0$;
var inst_49115 = (inst_49114 & (64));
var inst_49116 = inst_49107.cljs$core$ISeq$;
var inst_49117 = (inst_49115) || (inst_49116);
var state_49177__$1 = state_49177;
if(cljs.core.truth_(inst_49117)){
var statearr_49197_49255 = state_49177__$1;
(statearr_49197_49255[(1)] = (16));

} else {
var statearr_49198_49256 = state_49177__$1;
(statearr_49198_49256[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (22))){
var inst_49136 = (state_49177[(14)]);
var inst_49137 = (state_49177[(9)]);
var inst_49135 = (state_49177[(2)]);
var inst_49136__$1 = cljs.core.nth.call(null,inst_49135,(0),null);
var inst_49137__$1 = cljs.core.nth.call(null,inst_49135,(1),null);
var inst_49138 = (inst_49136__$1 == null);
var inst_49139 = cljs.core._EQ_.call(null,inst_49137__$1,change);
var inst_49140 = (inst_49138) || (inst_49139);
var state_49177__$1 = (function (){var statearr_49199 = state_49177;
(statearr_49199[(14)] = inst_49136__$1);

(statearr_49199[(9)] = inst_49137__$1);

return statearr_49199;
})();
if(cljs.core.truth_(inst_49140)){
var statearr_49200_49257 = state_49177__$1;
(statearr_49200_49257[(1)] = (23));

} else {
var statearr_49201_49258 = state_49177__$1;
(statearr_49201_49258[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (36))){
var inst_49129 = (state_49177[(12)]);
var inst_49107 = inst_49129;
var state_49177__$1 = (function (){var statearr_49202 = state_49177;
(statearr_49202[(7)] = inst_49107);

return statearr_49202;
})();
var statearr_49203_49259 = state_49177__$1;
(statearr_49203_49259[(2)] = null);

(statearr_49203_49259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (29))){
var inst_49151 = (state_49177[(11)]);
var state_49177__$1 = state_49177;
var statearr_49204_49260 = state_49177__$1;
(statearr_49204_49260[(2)] = inst_49151);

(statearr_49204_49260[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (6))){
var state_49177__$1 = state_49177;
var statearr_49205_49261 = state_49177__$1;
(statearr_49205_49261[(2)] = false);

(statearr_49205_49261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (28))){
var inst_49147 = (state_49177[(2)]);
var inst_49148 = calc_state.call(null);
var inst_49107 = inst_49148;
var state_49177__$1 = (function (){var statearr_49206 = state_49177;
(statearr_49206[(15)] = inst_49147);

(statearr_49206[(7)] = inst_49107);

return statearr_49206;
})();
var statearr_49207_49262 = state_49177__$1;
(statearr_49207_49262[(2)] = null);

(statearr_49207_49262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (25))){
var inst_49173 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
var statearr_49208_49263 = state_49177__$1;
(statearr_49208_49263[(2)] = inst_49173);

(statearr_49208_49263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (34))){
var inst_49171 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
var statearr_49209_49264 = state_49177__$1;
(statearr_49209_49264[(2)] = inst_49171);

(statearr_49209_49264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (17))){
var state_49177__$1 = state_49177;
var statearr_49210_49265 = state_49177__$1;
(statearr_49210_49265[(2)] = false);

(statearr_49210_49265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (3))){
var state_49177__$1 = state_49177;
var statearr_49211_49266 = state_49177__$1;
(statearr_49211_49266[(2)] = false);

(statearr_49211_49266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (12))){
var inst_49175 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49177__$1,inst_49175);
} else {
if((state_val_49178 === (2))){
var inst_49083 = (state_49177[(8)]);
var inst_49088 = inst_49083.cljs$lang$protocol_mask$partition0$;
var inst_49089 = (inst_49088 & (64));
var inst_49090 = inst_49083.cljs$core$ISeq$;
var inst_49091 = (inst_49089) || (inst_49090);
var state_49177__$1 = state_49177;
if(cljs.core.truth_(inst_49091)){
var statearr_49212_49267 = state_49177__$1;
(statearr_49212_49267[(1)] = (5));

} else {
var statearr_49213_49268 = state_49177__$1;
(statearr_49213_49268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (23))){
var inst_49136 = (state_49177[(14)]);
var inst_49142 = (inst_49136 == null);
var state_49177__$1 = state_49177;
if(cljs.core.truth_(inst_49142)){
var statearr_49214_49269 = state_49177__$1;
(statearr_49214_49269[(1)] = (26));

} else {
var statearr_49215_49270 = state_49177__$1;
(statearr_49215_49270[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (35))){
var inst_49162 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
if(cljs.core.truth_(inst_49162)){
var statearr_49216_49271 = state_49177__$1;
(statearr_49216_49271[(1)] = (36));

} else {
var statearr_49217_49272 = state_49177__$1;
(statearr_49217_49272[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (19))){
var inst_49107 = (state_49177[(7)]);
var inst_49126 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49107);
var state_49177__$1 = state_49177;
var statearr_49218_49273 = state_49177__$1;
(statearr_49218_49273[(2)] = inst_49126);

(statearr_49218_49273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (11))){
var inst_49107 = (state_49177[(7)]);
var inst_49111 = (inst_49107 == null);
var inst_49112 = cljs.core.not.call(null,inst_49111);
var state_49177__$1 = state_49177;
if(inst_49112){
var statearr_49219_49274 = state_49177__$1;
(statearr_49219_49274[(1)] = (13));

} else {
var statearr_49220_49275 = state_49177__$1;
(statearr_49220_49275[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (9))){
var inst_49083 = (state_49177[(8)]);
var state_49177__$1 = state_49177;
var statearr_49221_49276 = state_49177__$1;
(statearr_49221_49276[(2)] = inst_49083);

(statearr_49221_49276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (5))){
var state_49177__$1 = state_49177;
var statearr_49222_49277 = state_49177__$1;
(statearr_49222_49277[(2)] = true);

(statearr_49222_49277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (14))){
var state_49177__$1 = state_49177;
var statearr_49223_49278 = state_49177__$1;
(statearr_49223_49278[(2)] = false);

(statearr_49223_49278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (26))){
var inst_49137 = (state_49177[(9)]);
var inst_49144 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49137);
var state_49177__$1 = state_49177;
var statearr_49224_49279 = state_49177__$1;
(statearr_49224_49279[(2)] = inst_49144);

(statearr_49224_49279[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (16))){
var state_49177__$1 = state_49177;
var statearr_49225_49280 = state_49177__$1;
(statearr_49225_49280[(2)] = true);

(statearr_49225_49280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (38))){
var inst_49167 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
var statearr_49226_49281 = state_49177__$1;
(statearr_49226_49281[(2)] = inst_49167);

(statearr_49226_49281[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (30))){
var inst_49137 = (state_49177[(9)]);
var inst_49131 = (state_49177[(13)]);
var inst_49130 = (state_49177[(10)]);
var inst_49154 = cljs.core.empty_QMARK_.call(null,inst_49130);
var inst_49155 = inst_49131.call(null,inst_49137);
var inst_49156 = cljs.core.not.call(null,inst_49155);
var inst_49157 = (inst_49154) && (inst_49156);
var state_49177__$1 = state_49177;
var statearr_49227_49282 = state_49177__$1;
(statearr_49227_49282[(2)] = inst_49157);

(statearr_49227_49282[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (10))){
var inst_49083 = (state_49177[(8)]);
var inst_49103 = (state_49177[(2)]);
var inst_49104 = cljs.core.get.call(null,inst_49103,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49105 = cljs.core.get.call(null,inst_49103,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49106 = cljs.core.get.call(null,inst_49103,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49107 = inst_49083;
var state_49177__$1 = (function (){var statearr_49228 = state_49177;
(statearr_49228[(7)] = inst_49107);

(statearr_49228[(16)] = inst_49105);

(statearr_49228[(17)] = inst_49104);

(statearr_49228[(18)] = inst_49106);

return statearr_49228;
})();
var statearr_49229_49283 = state_49177__$1;
(statearr_49229_49283[(2)] = null);

(statearr_49229_49283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (18))){
var inst_49121 = (state_49177[(2)]);
var state_49177__$1 = state_49177;
var statearr_49230_49284 = state_49177__$1;
(statearr_49230_49284[(2)] = inst_49121);

(statearr_49230_49284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (37))){
var state_49177__$1 = state_49177;
var statearr_49231_49285 = state_49177__$1;
(statearr_49231_49285[(2)] = null);

(statearr_49231_49285[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49178 === (8))){
var inst_49083 = (state_49177[(8)]);
var inst_49100 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49083);
var state_49177__$1 = state_49177;
var statearr_49232_49286 = state_49177__$1;
(statearr_49232_49286[(2)] = inst_49100);

(statearr_49232_49286[(1)] = (10));


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
});})(c__22597__auto___49240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22532__auto__,c__22597__auto___49240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22533__auto__ = null;
var cljs$core$async$mix_$_state_machine__22533__auto____0 = (function (){
var statearr_49236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49236[(0)] = cljs$core$async$mix_$_state_machine__22533__auto__);

(statearr_49236[(1)] = (1));

return statearr_49236;
});
var cljs$core$async$mix_$_state_machine__22533__auto____1 = (function (state_49177){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_49177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e49237){if((e49237 instanceof Object)){
var ex__22536__auto__ = e49237;
var statearr_49238_49287 = state_49177;
(statearr_49238_49287[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49288 = state_49177;
state_49177 = G__49288;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22533__auto__ = function(state_49177){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22533__auto____1.call(this,state_49177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22533__auto____0;
cljs$core$async$mix_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22533__auto____1;
return cljs$core$async$mix_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___49240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22599__auto__ = (function (){var statearr_49239 = f__22598__auto__.call(null);
(statearr_49239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___49240);

return statearr_49239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___49240,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19775__auto__ = (((p == null))?null:p);
var m__19776__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19776__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19775__auto__ = (((p == null))?null:p);
var m__19776__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,p,v,ch);
} else {
var m__19776__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args49289 = [];
var len__20178__auto___49292 = arguments.length;
var i__20179__auto___49293 = (0);
while(true){
if((i__20179__auto___49293 < len__20178__auto___49292)){
args49289.push((arguments[i__20179__auto___49293]));

var G__49294 = (i__20179__auto___49293 + (1));
i__20179__auto___49293 = G__49294;
continue;
} else {
}
break;
}

var G__49291 = args49289.length;
switch (G__49291) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49289.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19775__auto__ = (((p == null))?null:p);
var m__19776__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,p);
} else {
var m__19776__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,p);
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
var x__19775__auto__ = (((p == null))?null:p);
var m__19776__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19775__auto__)]);
if(!((m__19776__auto__ == null))){
return m__19776__auto__.call(null,p,v);
} else {
var m__19776__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19776__auto____$1 == null))){
return m__19776__auto____$1.call(null,p,v);
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
var args49297 = [];
var len__20178__auto___49422 = arguments.length;
var i__20179__auto___49423 = (0);
while(true){
if((i__20179__auto___49423 < len__20178__auto___49422)){
args49297.push((arguments[i__20179__auto___49423]));

var G__49424 = (i__20179__auto___49423 + (1));
i__20179__auto___49423 = G__49424;
continue;
} else {
}
break;
}

var G__49299 = args49297.length;
switch (G__49299) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49297.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19120__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19120__auto__)){
return or__19120__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19120__auto__,mults){
return (function (p1__49296_SHARP_){
if(cljs.core.truth_(p1__49296_SHARP_.call(null,topic))){
return p1__49296_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49296_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19120__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49300 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49301){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49301 = meta49301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49302,meta49301__$1){
var self__ = this;
var _49302__$1 = this;
return (new cljs.core.async.t_cljs$core$async49300(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49301__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49302){
var self__ = this;
var _49302__$1 = this;
return self__.meta49301;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49300.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async49300.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49300.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async49300.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49300.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async49300.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49300.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49300.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49301","meta49301",-892852279,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49300";

cljs.core.async.t_cljs$core$async49300.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cljs.core.async/t_cljs$core$async49300");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async49300 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49300(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49301){
return (new cljs.core.async.t_cljs$core$async49300(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49301));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49300(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22597__auto___49426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___49426,mults,ensure_mult,p){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___49426,mults,ensure_mult,p){
return (function (state_49374){
var state_val_49375 = (state_49374[(1)]);
if((state_val_49375 === (7))){
var inst_49370 = (state_49374[(2)]);
var state_49374__$1 = state_49374;
var statearr_49376_49427 = state_49374__$1;
(statearr_49376_49427[(2)] = inst_49370);

(statearr_49376_49427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (20))){
var state_49374__$1 = state_49374;
var statearr_49377_49428 = state_49374__$1;
(statearr_49377_49428[(2)] = null);

(statearr_49377_49428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (1))){
var state_49374__$1 = state_49374;
var statearr_49378_49429 = state_49374__$1;
(statearr_49378_49429[(2)] = null);

(statearr_49378_49429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (24))){
var inst_49353 = (state_49374[(7)]);
var inst_49362 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49353);
var state_49374__$1 = state_49374;
var statearr_49379_49430 = state_49374__$1;
(statearr_49379_49430[(2)] = inst_49362);

(statearr_49379_49430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (4))){
var inst_49305 = (state_49374[(8)]);
var inst_49305__$1 = (state_49374[(2)]);
var inst_49306 = (inst_49305__$1 == null);
var state_49374__$1 = (function (){var statearr_49380 = state_49374;
(statearr_49380[(8)] = inst_49305__$1);

return statearr_49380;
})();
if(cljs.core.truth_(inst_49306)){
var statearr_49381_49431 = state_49374__$1;
(statearr_49381_49431[(1)] = (5));

} else {
var statearr_49382_49432 = state_49374__$1;
(statearr_49382_49432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (15))){
var inst_49347 = (state_49374[(2)]);
var state_49374__$1 = state_49374;
var statearr_49383_49433 = state_49374__$1;
(statearr_49383_49433[(2)] = inst_49347);

(statearr_49383_49433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (21))){
var inst_49367 = (state_49374[(2)]);
var state_49374__$1 = (function (){var statearr_49384 = state_49374;
(statearr_49384[(9)] = inst_49367);

return statearr_49384;
})();
var statearr_49385_49434 = state_49374__$1;
(statearr_49385_49434[(2)] = null);

(statearr_49385_49434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (13))){
var inst_49329 = (state_49374[(10)]);
var inst_49331 = cljs.core.chunked_seq_QMARK_.call(null,inst_49329);
var state_49374__$1 = state_49374;
if(inst_49331){
var statearr_49386_49435 = state_49374__$1;
(statearr_49386_49435[(1)] = (16));

} else {
var statearr_49387_49436 = state_49374__$1;
(statearr_49387_49436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (22))){
var inst_49359 = (state_49374[(2)]);
var state_49374__$1 = state_49374;
if(cljs.core.truth_(inst_49359)){
var statearr_49388_49437 = state_49374__$1;
(statearr_49388_49437[(1)] = (23));

} else {
var statearr_49389_49438 = state_49374__$1;
(statearr_49389_49438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (6))){
var inst_49353 = (state_49374[(7)]);
var inst_49305 = (state_49374[(8)]);
var inst_49355 = (state_49374[(11)]);
var inst_49353__$1 = topic_fn.call(null,inst_49305);
var inst_49354 = cljs.core.deref.call(null,mults);
var inst_49355__$1 = cljs.core.get.call(null,inst_49354,inst_49353__$1);
var state_49374__$1 = (function (){var statearr_49390 = state_49374;
(statearr_49390[(7)] = inst_49353__$1);

(statearr_49390[(11)] = inst_49355__$1);

return statearr_49390;
})();
if(cljs.core.truth_(inst_49355__$1)){
var statearr_49391_49439 = state_49374__$1;
(statearr_49391_49439[(1)] = (19));

} else {
var statearr_49392_49440 = state_49374__$1;
(statearr_49392_49440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (25))){
var inst_49364 = (state_49374[(2)]);
var state_49374__$1 = state_49374;
var statearr_49393_49441 = state_49374__$1;
(statearr_49393_49441[(2)] = inst_49364);

(statearr_49393_49441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (17))){
var inst_49329 = (state_49374[(10)]);
var inst_49338 = cljs.core.first.call(null,inst_49329);
var inst_49339 = cljs.core.async.muxch_STAR_.call(null,inst_49338);
var inst_49340 = cljs.core.async.close_BANG_.call(null,inst_49339);
var inst_49341 = cljs.core.next.call(null,inst_49329);
var inst_49315 = inst_49341;
var inst_49316 = null;
var inst_49317 = (0);
var inst_49318 = (0);
var state_49374__$1 = (function (){var statearr_49394 = state_49374;
(statearr_49394[(12)] = inst_49340);

(statearr_49394[(13)] = inst_49318);

(statearr_49394[(14)] = inst_49315);

(statearr_49394[(15)] = inst_49316);

(statearr_49394[(16)] = inst_49317);

return statearr_49394;
})();
var statearr_49395_49442 = state_49374__$1;
(statearr_49395_49442[(2)] = null);

(statearr_49395_49442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (3))){
var inst_49372 = (state_49374[(2)]);
var state_49374__$1 = state_49374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49374__$1,inst_49372);
} else {
if((state_val_49375 === (12))){
var inst_49349 = (state_49374[(2)]);
var state_49374__$1 = state_49374;
var statearr_49396_49443 = state_49374__$1;
(statearr_49396_49443[(2)] = inst_49349);

(statearr_49396_49443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (2))){
var state_49374__$1 = state_49374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49374__$1,(4),ch);
} else {
if((state_val_49375 === (23))){
var state_49374__$1 = state_49374;
var statearr_49397_49444 = state_49374__$1;
(statearr_49397_49444[(2)] = null);

(statearr_49397_49444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (19))){
var inst_49305 = (state_49374[(8)]);
var inst_49355 = (state_49374[(11)]);
var inst_49357 = cljs.core.async.muxch_STAR_.call(null,inst_49355);
var state_49374__$1 = state_49374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49374__$1,(22),inst_49357,inst_49305);
} else {
if((state_val_49375 === (11))){
var inst_49315 = (state_49374[(14)]);
var inst_49329 = (state_49374[(10)]);
var inst_49329__$1 = cljs.core.seq.call(null,inst_49315);
var state_49374__$1 = (function (){var statearr_49398 = state_49374;
(statearr_49398[(10)] = inst_49329__$1);

return statearr_49398;
})();
if(inst_49329__$1){
var statearr_49399_49445 = state_49374__$1;
(statearr_49399_49445[(1)] = (13));

} else {
var statearr_49400_49446 = state_49374__$1;
(statearr_49400_49446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (9))){
var inst_49351 = (state_49374[(2)]);
var state_49374__$1 = state_49374;
var statearr_49401_49447 = state_49374__$1;
(statearr_49401_49447[(2)] = inst_49351);

(statearr_49401_49447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (5))){
var inst_49312 = cljs.core.deref.call(null,mults);
var inst_49313 = cljs.core.vals.call(null,inst_49312);
var inst_49314 = cljs.core.seq.call(null,inst_49313);
var inst_49315 = inst_49314;
var inst_49316 = null;
var inst_49317 = (0);
var inst_49318 = (0);
var state_49374__$1 = (function (){var statearr_49402 = state_49374;
(statearr_49402[(13)] = inst_49318);

(statearr_49402[(14)] = inst_49315);

(statearr_49402[(15)] = inst_49316);

(statearr_49402[(16)] = inst_49317);

return statearr_49402;
})();
var statearr_49403_49448 = state_49374__$1;
(statearr_49403_49448[(2)] = null);

(statearr_49403_49448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (14))){
var state_49374__$1 = state_49374;
var statearr_49407_49449 = state_49374__$1;
(statearr_49407_49449[(2)] = null);

(statearr_49407_49449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (16))){
var inst_49329 = (state_49374[(10)]);
var inst_49333 = cljs.core.chunk_first.call(null,inst_49329);
var inst_49334 = cljs.core.chunk_rest.call(null,inst_49329);
var inst_49335 = cljs.core.count.call(null,inst_49333);
var inst_49315 = inst_49334;
var inst_49316 = inst_49333;
var inst_49317 = inst_49335;
var inst_49318 = (0);
var state_49374__$1 = (function (){var statearr_49408 = state_49374;
(statearr_49408[(13)] = inst_49318);

(statearr_49408[(14)] = inst_49315);

(statearr_49408[(15)] = inst_49316);

(statearr_49408[(16)] = inst_49317);

return statearr_49408;
})();
var statearr_49409_49450 = state_49374__$1;
(statearr_49409_49450[(2)] = null);

(statearr_49409_49450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (10))){
var inst_49318 = (state_49374[(13)]);
var inst_49315 = (state_49374[(14)]);
var inst_49316 = (state_49374[(15)]);
var inst_49317 = (state_49374[(16)]);
var inst_49323 = cljs.core._nth.call(null,inst_49316,inst_49318);
var inst_49324 = cljs.core.async.muxch_STAR_.call(null,inst_49323);
var inst_49325 = cljs.core.async.close_BANG_.call(null,inst_49324);
var inst_49326 = (inst_49318 + (1));
var tmp49404 = inst_49315;
var tmp49405 = inst_49316;
var tmp49406 = inst_49317;
var inst_49315__$1 = tmp49404;
var inst_49316__$1 = tmp49405;
var inst_49317__$1 = tmp49406;
var inst_49318__$1 = inst_49326;
var state_49374__$1 = (function (){var statearr_49410 = state_49374;
(statearr_49410[(17)] = inst_49325);

(statearr_49410[(13)] = inst_49318__$1);

(statearr_49410[(14)] = inst_49315__$1);

(statearr_49410[(15)] = inst_49316__$1);

(statearr_49410[(16)] = inst_49317__$1);

return statearr_49410;
})();
var statearr_49411_49451 = state_49374__$1;
(statearr_49411_49451[(2)] = null);

(statearr_49411_49451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (18))){
var inst_49344 = (state_49374[(2)]);
var state_49374__$1 = state_49374;
var statearr_49412_49452 = state_49374__$1;
(statearr_49412_49452[(2)] = inst_49344);

(statearr_49412_49452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49375 === (8))){
var inst_49318 = (state_49374[(13)]);
var inst_49317 = (state_49374[(16)]);
var inst_49320 = (inst_49318 < inst_49317);
var inst_49321 = inst_49320;
var state_49374__$1 = state_49374;
if(cljs.core.truth_(inst_49321)){
var statearr_49413_49453 = state_49374__$1;
(statearr_49413_49453[(1)] = (10));

} else {
var statearr_49414_49454 = state_49374__$1;
(statearr_49414_49454[(1)] = (11));

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
});})(c__22597__auto___49426,mults,ensure_mult,p))
;
return ((function (switch__22532__auto__,c__22597__auto___49426,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_49418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49418[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_49418[(1)] = (1));

return statearr_49418;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_49374){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_49374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e49419){if((e49419 instanceof Object)){
var ex__22536__auto__ = e49419;
var statearr_49420_49455 = state_49374;
(statearr_49420_49455[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49456 = state_49374;
state_49374 = G__49456;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_49374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_49374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___49426,mults,ensure_mult,p))
})();
var state__22599__auto__ = (function (){var statearr_49421 = f__22598__auto__.call(null);
(statearr_49421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___49426);

return statearr_49421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___49426,mults,ensure_mult,p))
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
var args49457 = [];
var len__20178__auto___49460 = arguments.length;
var i__20179__auto___49461 = (0);
while(true){
if((i__20179__auto___49461 < len__20178__auto___49460)){
args49457.push((arguments[i__20179__auto___49461]));

var G__49462 = (i__20179__auto___49461 + (1));
i__20179__auto___49461 = G__49462;
continue;
} else {
}
break;
}

var G__49459 = args49457.length;
switch (G__49459) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49457.length)].join('')));

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
var args49464 = [];
var len__20178__auto___49467 = arguments.length;
var i__20179__auto___49468 = (0);
while(true){
if((i__20179__auto___49468 < len__20178__auto___49467)){
args49464.push((arguments[i__20179__auto___49468]));

var G__49469 = (i__20179__auto___49468 + (1));
i__20179__auto___49468 = G__49469;
continue;
} else {
}
break;
}

var G__49466 = args49464.length;
switch (G__49466) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49464.length)].join('')));

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
var args49471 = [];
var len__20178__auto___49542 = arguments.length;
var i__20179__auto___49543 = (0);
while(true){
if((i__20179__auto___49543 < len__20178__auto___49542)){
args49471.push((arguments[i__20179__auto___49543]));

var G__49544 = (i__20179__auto___49543 + (1));
i__20179__auto___49543 = G__49544;
continue;
} else {
}
break;
}

var G__49473 = args49471.length;
switch (G__49473) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49471.length)].join('')));

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
var c__22597__auto___49546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___49546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___49546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49512){
var state_val_49513 = (state_49512[(1)]);
if((state_val_49513 === (7))){
var state_49512__$1 = state_49512;
var statearr_49514_49547 = state_49512__$1;
(statearr_49514_49547[(2)] = null);

(statearr_49514_49547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (1))){
var state_49512__$1 = state_49512;
var statearr_49515_49548 = state_49512__$1;
(statearr_49515_49548[(2)] = null);

(statearr_49515_49548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (4))){
var inst_49476 = (state_49512[(7)]);
var inst_49478 = (inst_49476 < cnt);
var state_49512__$1 = state_49512;
if(cljs.core.truth_(inst_49478)){
var statearr_49516_49549 = state_49512__$1;
(statearr_49516_49549[(1)] = (6));

} else {
var statearr_49517_49550 = state_49512__$1;
(statearr_49517_49550[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (15))){
var inst_49508 = (state_49512[(2)]);
var state_49512__$1 = state_49512;
var statearr_49518_49551 = state_49512__$1;
(statearr_49518_49551[(2)] = inst_49508);

(statearr_49518_49551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (13))){
var inst_49501 = cljs.core.async.close_BANG_.call(null,out);
var state_49512__$1 = state_49512;
var statearr_49519_49552 = state_49512__$1;
(statearr_49519_49552[(2)] = inst_49501);

(statearr_49519_49552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (6))){
var state_49512__$1 = state_49512;
var statearr_49520_49553 = state_49512__$1;
(statearr_49520_49553[(2)] = null);

(statearr_49520_49553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (3))){
var inst_49510 = (state_49512[(2)]);
var state_49512__$1 = state_49512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49512__$1,inst_49510);
} else {
if((state_val_49513 === (12))){
var inst_49498 = (state_49512[(8)]);
var inst_49498__$1 = (state_49512[(2)]);
var inst_49499 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49498__$1);
var state_49512__$1 = (function (){var statearr_49521 = state_49512;
(statearr_49521[(8)] = inst_49498__$1);

return statearr_49521;
})();
if(cljs.core.truth_(inst_49499)){
var statearr_49522_49554 = state_49512__$1;
(statearr_49522_49554[(1)] = (13));

} else {
var statearr_49523_49555 = state_49512__$1;
(statearr_49523_49555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (2))){
var inst_49475 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49476 = (0);
var state_49512__$1 = (function (){var statearr_49524 = state_49512;
(statearr_49524[(7)] = inst_49476);

(statearr_49524[(9)] = inst_49475);

return statearr_49524;
})();
var statearr_49525_49556 = state_49512__$1;
(statearr_49525_49556[(2)] = null);

(statearr_49525_49556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (11))){
var inst_49476 = (state_49512[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49512,(10),Object,null,(9));
var inst_49485 = chs__$1.call(null,inst_49476);
var inst_49486 = done.call(null,inst_49476);
var inst_49487 = cljs.core.async.take_BANG_.call(null,inst_49485,inst_49486);
var state_49512__$1 = state_49512;
var statearr_49526_49557 = state_49512__$1;
(statearr_49526_49557[(2)] = inst_49487);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49512__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (9))){
var inst_49476 = (state_49512[(7)]);
var inst_49489 = (state_49512[(2)]);
var inst_49490 = (inst_49476 + (1));
var inst_49476__$1 = inst_49490;
var state_49512__$1 = (function (){var statearr_49527 = state_49512;
(statearr_49527[(10)] = inst_49489);

(statearr_49527[(7)] = inst_49476__$1);

return statearr_49527;
})();
var statearr_49528_49558 = state_49512__$1;
(statearr_49528_49558[(2)] = null);

(statearr_49528_49558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (5))){
var inst_49496 = (state_49512[(2)]);
var state_49512__$1 = (function (){var statearr_49529 = state_49512;
(statearr_49529[(11)] = inst_49496);

return statearr_49529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49512__$1,(12),dchan);
} else {
if((state_val_49513 === (14))){
var inst_49498 = (state_49512[(8)]);
var inst_49503 = cljs.core.apply.call(null,f,inst_49498);
var state_49512__$1 = state_49512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49512__$1,(16),out,inst_49503);
} else {
if((state_val_49513 === (16))){
var inst_49505 = (state_49512[(2)]);
var state_49512__$1 = (function (){var statearr_49530 = state_49512;
(statearr_49530[(12)] = inst_49505);

return statearr_49530;
})();
var statearr_49531_49559 = state_49512__$1;
(statearr_49531_49559[(2)] = null);

(statearr_49531_49559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (10))){
var inst_49480 = (state_49512[(2)]);
var inst_49481 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49512__$1 = (function (){var statearr_49532 = state_49512;
(statearr_49532[(13)] = inst_49480);

return statearr_49532;
})();
var statearr_49533_49560 = state_49512__$1;
(statearr_49533_49560[(2)] = inst_49481);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49512__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49513 === (8))){
var inst_49494 = (state_49512[(2)]);
var state_49512__$1 = state_49512;
var statearr_49534_49561 = state_49512__$1;
(statearr_49534_49561[(2)] = inst_49494);

(statearr_49534_49561[(1)] = (5));


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
});})(c__22597__auto___49546,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22532__auto__,c__22597__auto___49546,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_49538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49538[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_49538[(1)] = (1));

return statearr_49538;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_49512){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_49512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e49539){if((e49539 instanceof Object)){
var ex__22536__auto__ = e49539;
var statearr_49540_49562 = state_49512;
(statearr_49540_49562[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49563 = state_49512;
state_49512 = G__49563;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_49512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_49512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___49546,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22599__auto__ = (function (){var statearr_49541 = f__22598__auto__.call(null);
(statearr_49541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___49546);

return statearr_49541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___49546,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args49565 = [];
var len__20178__auto___49621 = arguments.length;
var i__20179__auto___49622 = (0);
while(true){
if((i__20179__auto___49622 < len__20178__auto___49621)){
args49565.push((arguments[i__20179__auto___49622]));

var G__49623 = (i__20179__auto___49622 + (1));
i__20179__auto___49622 = G__49623;
continue;
} else {
}
break;
}

var G__49567 = args49565.length;
switch (G__49567) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49565.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22597__auto___49625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___49625,out){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___49625,out){
return (function (state_49597){
var state_val_49598 = (state_49597[(1)]);
if((state_val_49598 === (7))){
var inst_49577 = (state_49597[(7)]);
var inst_49576 = (state_49597[(8)]);
var inst_49576__$1 = (state_49597[(2)]);
var inst_49577__$1 = cljs.core.nth.call(null,inst_49576__$1,(0),null);
var inst_49578 = cljs.core.nth.call(null,inst_49576__$1,(1),null);
var inst_49579 = (inst_49577__$1 == null);
var state_49597__$1 = (function (){var statearr_49599 = state_49597;
(statearr_49599[(7)] = inst_49577__$1);

(statearr_49599[(8)] = inst_49576__$1);

(statearr_49599[(9)] = inst_49578);

return statearr_49599;
})();
if(cljs.core.truth_(inst_49579)){
var statearr_49600_49626 = state_49597__$1;
(statearr_49600_49626[(1)] = (8));

} else {
var statearr_49601_49627 = state_49597__$1;
(statearr_49601_49627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (1))){
var inst_49568 = cljs.core.vec.call(null,chs);
var inst_49569 = inst_49568;
var state_49597__$1 = (function (){var statearr_49602 = state_49597;
(statearr_49602[(10)] = inst_49569);

return statearr_49602;
})();
var statearr_49603_49628 = state_49597__$1;
(statearr_49603_49628[(2)] = null);

(statearr_49603_49628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (4))){
var inst_49569 = (state_49597[(10)]);
var state_49597__$1 = state_49597;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49597__$1,(7),inst_49569);
} else {
if((state_val_49598 === (6))){
var inst_49593 = (state_49597[(2)]);
var state_49597__$1 = state_49597;
var statearr_49604_49629 = state_49597__$1;
(statearr_49604_49629[(2)] = inst_49593);

(statearr_49604_49629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (3))){
var inst_49595 = (state_49597[(2)]);
var state_49597__$1 = state_49597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49597__$1,inst_49595);
} else {
if((state_val_49598 === (2))){
var inst_49569 = (state_49597[(10)]);
var inst_49571 = cljs.core.count.call(null,inst_49569);
var inst_49572 = (inst_49571 > (0));
var state_49597__$1 = state_49597;
if(cljs.core.truth_(inst_49572)){
var statearr_49606_49630 = state_49597__$1;
(statearr_49606_49630[(1)] = (4));

} else {
var statearr_49607_49631 = state_49597__$1;
(statearr_49607_49631[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (11))){
var inst_49569 = (state_49597[(10)]);
var inst_49586 = (state_49597[(2)]);
var tmp49605 = inst_49569;
var inst_49569__$1 = tmp49605;
var state_49597__$1 = (function (){var statearr_49608 = state_49597;
(statearr_49608[(10)] = inst_49569__$1);

(statearr_49608[(11)] = inst_49586);

return statearr_49608;
})();
var statearr_49609_49632 = state_49597__$1;
(statearr_49609_49632[(2)] = null);

(statearr_49609_49632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (9))){
var inst_49577 = (state_49597[(7)]);
var state_49597__$1 = state_49597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49597__$1,(11),out,inst_49577);
} else {
if((state_val_49598 === (5))){
var inst_49591 = cljs.core.async.close_BANG_.call(null,out);
var state_49597__$1 = state_49597;
var statearr_49610_49633 = state_49597__$1;
(statearr_49610_49633[(2)] = inst_49591);

(statearr_49610_49633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (10))){
var inst_49589 = (state_49597[(2)]);
var state_49597__$1 = state_49597;
var statearr_49611_49634 = state_49597__$1;
(statearr_49611_49634[(2)] = inst_49589);

(statearr_49611_49634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49598 === (8))){
var inst_49577 = (state_49597[(7)]);
var inst_49569 = (state_49597[(10)]);
var inst_49576 = (state_49597[(8)]);
var inst_49578 = (state_49597[(9)]);
var inst_49581 = (function (){var cs = inst_49569;
var vec__49574 = inst_49576;
var v = inst_49577;
var c = inst_49578;
return ((function (cs,vec__49574,v,c,inst_49577,inst_49569,inst_49576,inst_49578,state_val_49598,c__22597__auto___49625,out){
return (function (p1__49564_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49564_SHARP_);
});
;})(cs,vec__49574,v,c,inst_49577,inst_49569,inst_49576,inst_49578,state_val_49598,c__22597__auto___49625,out))
})();
var inst_49582 = cljs.core.filterv.call(null,inst_49581,inst_49569);
var inst_49569__$1 = inst_49582;
var state_49597__$1 = (function (){var statearr_49612 = state_49597;
(statearr_49612[(10)] = inst_49569__$1);

return statearr_49612;
})();
var statearr_49613_49635 = state_49597__$1;
(statearr_49613_49635[(2)] = null);

(statearr_49613_49635[(1)] = (2));


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
});})(c__22597__auto___49625,out))
;
return ((function (switch__22532__auto__,c__22597__auto___49625,out){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_49617 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49617[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_49617[(1)] = (1));

return statearr_49617;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_49597){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_49597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e49618){if((e49618 instanceof Object)){
var ex__22536__auto__ = e49618;
var statearr_49619_49636 = state_49597;
(statearr_49619_49636[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49637 = state_49597;
state_49597 = G__49637;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_49597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_49597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___49625,out))
})();
var state__22599__auto__ = (function (){var statearr_49620 = f__22598__auto__.call(null);
(statearr_49620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___49625);

return statearr_49620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___49625,out))
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
var args49638 = [];
var len__20178__auto___49687 = arguments.length;
var i__20179__auto___49688 = (0);
while(true){
if((i__20179__auto___49688 < len__20178__auto___49687)){
args49638.push((arguments[i__20179__auto___49688]));

var G__49689 = (i__20179__auto___49688 + (1));
i__20179__auto___49688 = G__49689;
continue;
} else {
}
break;
}

var G__49640 = args49638.length;
switch (G__49640) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49638.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22597__auto___49691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___49691,out){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___49691,out){
return (function (state_49664){
var state_val_49665 = (state_49664[(1)]);
if((state_val_49665 === (7))){
var inst_49646 = (state_49664[(7)]);
var inst_49646__$1 = (state_49664[(2)]);
var inst_49647 = (inst_49646__$1 == null);
var inst_49648 = cljs.core.not.call(null,inst_49647);
var state_49664__$1 = (function (){var statearr_49666 = state_49664;
(statearr_49666[(7)] = inst_49646__$1);

return statearr_49666;
})();
if(inst_49648){
var statearr_49667_49692 = state_49664__$1;
(statearr_49667_49692[(1)] = (8));

} else {
var statearr_49668_49693 = state_49664__$1;
(statearr_49668_49693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (1))){
var inst_49641 = (0);
var state_49664__$1 = (function (){var statearr_49669 = state_49664;
(statearr_49669[(8)] = inst_49641);

return statearr_49669;
})();
var statearr_49670_49694 = state_49664__$1;
(statearr_49670_49694[(2)] = null);

(statearr_49670_49694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (4))){
var state_49664__$1 = state_49664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49664__$1,(7),ch);
} else {
if((state_val_49665 === (6))){
var inst_49659 = (state_49664[(2)]);
var state_49664__$1 = state_49664;
var statearr_49671_49695 = state_49664__$1;
(statearr_49671_49695[(2)] = inst_49659);

(statearr_49671_49695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (3))){
var inst_49661 = (state_49664[(2)]);
var inst_49662 = cljs.core.async.close_BANG_.call(null,out);
var state_49664__$1 = (function (){var statearr_49672 = state_49664;
(statearr_49672[(9)] = inst_49661);

return statearr_49672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49664__$1,inst_49662);
} else {
if((state_val_49665 === (2))){
var inst_49641 = (state_49664[(8)]);
var inst_49643 = (inst_49641 < n);
var state_49664__$1 = state_49664;
if(cljs.core.truth_(inst_49643)){
var statearr_49673_49696 = state_49664__$1;
(statearr_49673_49696[(1)] = (4));

} else {
var statearr_49674_49697 = state_49664__$1;
(statearr_49674_49697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (11))){
var inst_49641 = (state_49664[(8)]);
var inst_49651 = (state_49664[(2)]);
var inst_49652 = (inst_49641 + (1));
var inst_49641__$1 = inst_49652;
var state_49664__$1 = (function (){var statearr_49675 = state_49664;
(statearr_49675[(10)] = inst_49651);

(statearr_49675[(8)] = inst_49641__$1);

return statearr_49675;
})();
var statearr_49676_49698 = state_49664__$1;
(statearr_49676_49698[(2)] = null);

(statearr_49676_49698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (9))){
var state_49664__$1 = state_49664;
var statearr_49677_49699 = state_49664__$1;
(statearr_49677_49699[(2)] = null);

(statearr_49677_49699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (5))){
var state_49664__$1 = state_49664;
var statearr_49678_49700 = state_49664__$1;
(statearr_49678_49700[(2)] = null);

(statearr_49678_49700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (10))){
var inst_49656 = (state_49664[(2)]);
var state_49664__$1 = state_49664;
var statearr_49679_49701 = state_49664__$1;
(statearr_49679_49701[(2)] = inst_49656);

(statearr_49679_49701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (8))){
var inst_49646 = (state_49664[(7)]);
var state_49664__$1 = state_49664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49664__$1,(11),out,inst_49646);
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
});})(c__22597__auto___49691,out))
;
return ((function (switch__22532__auto__,c__22597__auto___49691,out){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_49683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49683[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_49683[(1)] = (1));

return statearr_49683;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_49664){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_49664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e49684){if((e49684 instanceof Object)){
var ex__22536__auto__ = e49684;
var statearr_49685_49702 = state_49664;
(statearr_49685_49702[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49703 = state_49664;
state_49664 = G__49703;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_49664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_49664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___49691,out))
})();
var state__22599__auto__ = (function (){var statearr_49686 = f__22598__auto__.call(null);
(statearr_49686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___49691);

return statearr_49686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___49691,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49711 = (function (map_LT_,f,ch,meta49712){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta49712 = meta49712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49713,meta49712__$1){
var self__ = this;
var _49713__$1 = this;
return (new cljs.core.async.t_cljs$core$async49711(self__.map_LT_,self__.f,self__.ch,meta49712__$1));
});

cljs.core.async.t_cljs$core$async49711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49713){
var self__ = this;
var _49713__$1 = this;
return self__.meta49712;
});

cljs.core.async.t_cljs$core$async49711.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49711.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49711.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49711.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49711.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49714 = (function (map_LT_,f,ch,meta49712,_,fn1,meta49715){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta49712 = meta49712;
this._ = _;
this.fn1 = fn1;
this.meta49715 = meta49715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49716,meta49715__$1){
var self__ = this;
var _49716__$1 = this;
return (new cljs.core.async.t_cljs$core$async49714(self__.map_LT_,self__.f,self__.ch,self__.meta49712,self__._,self__.fn1,meta49715__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49716){
var self__ = this;
var _49716__$1 = this;
return self__.meta49715;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49714.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49704_SHARP_){
return f1.call(null,(((p1__49704_SHARP_ == null))?null:self__.f.call(null,p1__49704_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49714.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49712","meta49712",312941056,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49711","cljs.core.async/t_cljs$core$async49711",-1319610104,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49715","meta49715",-1518005411,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49714";

cljs.core.async.t_cljs$core$async49714.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cljs.core.async/t_cljs$core$async49714");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async49714 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49714(map_LT___$1,f__$1,ch__$1,meta49712__$1,___$2,fn1__$1,meta49715){
return (new cljs.core.async.t_cljs$core$async49714(map_LT___$1,f__$1,ch__$1,meta49712__$1,___$2,fn1__$1,meta49715));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49714(self__.map_LT_,self__.f,self__.ch,self__.meta49712,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19108__auto__ = ret;
if(cljs.core.truth_(and__19108__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19108__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49711.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49711.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49712","meta49712",312941056,null)], null);
});

cljs.core.async.t_cljs$core$async49711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49711";

cljs.core.async.t_cljs$core$async49711.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cljs.core.async/t_cljs$core$async49711");
});

cljs.core.async.__GT_t_cljs$core$async49711 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49711(map_LT___$1,f__$1,ch__$1,meta49712){
return (new cljs.core.async.t_cljs$core$async49711(map_LT___$1,f__$1,ch__$1,meta49712));
});

}

return (new cljs.core.async.t_cljs$core$async49711(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49720 = (function (map_GT_,f,ch,meta49721){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta49721 = meta49721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49722,meta49721__$1){
var self__ = this;
var _49722__$1 = this;
return (new cljs.core.async.t_cljs$core$async49720(self__.map_GT_,self__.f,self__.ch,meta49721__$1));
});

cljs.core.async.t_cljs$core$async49720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49722){
var self__ = this;
var _49722__$1 = this;
return self__.meta49721;
});

cljs.core.async.t_cljs$core$async49720.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49720.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49720.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49720.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49720.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49720.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49721","meta49721",1100066620,null)], null);
});

cljs.core.async.t_cljs$core$async49720.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49720";

cljs.core.async.t_cljs$core$async49720.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cljs.core.async/t_cljs$core$async49720");
});

cljs.core.async.__GT_t_cljs$core$async49720 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49720(map_GT___$1,f__$1,ch__$1,meta49721){
return (new cljs.core.async.t_cljs$core$async49720(map_GT___$1,f__$1,ch__$1,meta49721));
});

}

return (new cljs.core.async.t_cljs$core$async49720(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49726 = (function (filter_GT_,p,ch,meta49727){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta49727 = meta49727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49728,meta49727__$1){
var self__ = this;
var _49728__$1 = this;
return (new cljs.core.async.t_cljs$core$async49726(self__.filter_GT_,self__.p,self__.ch,meta49727__$1));
});

cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49728){
var self__ = this;
var _49728__$1 = this;
return self__.meta49727;
});

cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49726.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49727","meta49727",1850816625,null)], null);
});

cljs.core.async.t_cljs$core$async49726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49726";

cljs.core.async.t_cljs$core$async49726.cljs$lang$ctorPrWriter = (function (this__19718__auto__,writer__19719__auto__,opt__19720__auto__){
return cljs.core._write.call(null,writer__19719__auto__,"cljs.core.async/t_cljs$core$async49726");
});

cljs.core.async.__GT_t_cljs$core$async49726 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49726(filter_GT___$1,p__$1,ch__$1,meta49727){
return (new cljs.core.async.t_cljs$core$async49726(filter_GT___$1,p__$1,ch__$1,meta49727));
});

}

return (new cljs.core.async.t_cljs$core$async49726(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args49729 = [];
var len__20178__auto___49773 = arguments.length;
var i__20179__auto___49774 = (0);
while(true){
if((i__20179__auto___49774 < len__20178__auto___49773)){
args49729.push((arguments[i__20179__auto___49774]));

var G__49775 = (i__20179__auto___49774 + (1));
i__20179__auto___49774 = G__49775;
continue;
} else {
}
break;
}

var G__49731 = args49729.length;
switch (G__49731) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49729.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22597__auto___49777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___49777,out){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___49777,out){
return (function (state_49752){
var state_val_49753 = (state_49752[(1)]);
if((state_val_49753 === (7))){
var inst_49748 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
var statearr_49754_49778 = state_49752__$1;
(statearr_49754_49778[(2)] = inst_49748);

(statearr_49754_49778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (1))){
var state_49752__$1 = state_49752;
var statearr_49755_49779 = state_49752__$1;
(statearr_49755_49779[(2)] = null);

(statearr_49755_49779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (4))){
var inst_49734 = (state_49752[(7)]);
var inst_49734__$1 = (state_49752[(2)]);
var inst_49735 = (inst_49734__$1 == null);
var state_49752__$1 = (function (){var statearr_49756 = state_49752;
(statearr_49756[(7)] = inst_49734__$1);

return statearr_49756;
})();
if(cljs.core.truth_(inst_49735)){
var statearr_49757_49780 = state_49752__$1;
(statearr_49757_49780[(1)] = (5));

} else {
var statearr_49758_49781 = state_49752__$1;
(statearr_49758_49781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (6))){
var inst_49734 = (state_49752[(7)]);
var inst_49739 = p.call(null,inst_49734);
var state_49752__$1 = state_49752;
if(cljs.core.truth_(inst_49739)){
var statearr_49759_49782 = state_49752__$1;
(statearr_49759_49782[(1)] = (8));

} else {
var statearr_49760_49783 = state_49752__$1;
(statearr_49760_49783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (3))){
var inst_49750 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49752__$1,inst_49750);
} else {
if((state_val_49753 === (2))){
var state_49752__$1 = state_49752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49752__$1,(4),ch);
} else {
if((state_val_49753 === (11))){
var inst_49742 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
var statearr_49761_49784 = state_49752__$1;
(statearr_49761_49784[(2)] = inst_49742);

(statearr_49761_49784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (9))){
var state_49752__$1 = state_49752;
var statearr_49762_49785 = state_49752__$1;
(statearr_49762_49785[(2)] = null);

(statearr_49762_49785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (5))){
var inst_49737 = cljs.core.async.close_BANG_.call(null,out);
var state_49752__$1 = state_49752;
var statearr_49763_49786 = state_49752__$1;
(statearr_49763_49786[(2)] = inst_49737);

(statearr_49763_49786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (10))){
var inst_49745 = (state_49752[(2)]);
var state_49752__$1 = (function (){var statearr_49764 = state_49752;
(statearr_49764[(8)] = inst_49745);

return statearr_49764;
})();
var statearr_49765_49787 = state_49752__$1;
(statearr_49765_49787[(2)] = null);

(statearr_49765_49787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (8))){
var inst_49734 = (state_49752[(7)]);
var state_49752__$1 = state_49752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49752__$1,(11),out,inst_49734);
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
});})(c__22597__auto___49777,out))
;
return ((function (switch__22532__auto__,c__22597__auto___49777,out){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_49769 = [null,null,null,null,null,null,null,null,null];
(statearr_49769[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_49769[(1)] = (1));

return statearr_49769;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_49752){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_49752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e49770){if((e49770 instanceof Object)){
var ex__22536__auto__ = e49770;
var statearr_49771_49788 = state_49752;
(statearr_49771_49788[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49789 = state_49752;
state_49752 = G__49789;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_49752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_49752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___49777,out))
})();
var state__22599__auto__ = (function (){var statearr_49772 = f__22598__auto__.call(null);
(statearr_49772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___49777);

return statearr_49772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___49777,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args49790 = [];
var len__20178__auto___49793 = arguments.length;
var i__20179__auto___49794 = (0);
while(true){
if((i__20179__auto___49794 < len__20178__auto___49793)){
args49790.push((arguments[i__20179__auto___49794]));

var G__49795 = (i__20179__auto___49794 + (1));
i__20179__auto___49794 = G__49795;
continue;
} else {
}
break;
}

var G__49792 = args49790.length;
switch (G__49792) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49790.length)].join('')));

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
var c__22597__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto__){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto__){
return (function (state_49962){
var state_val_49963 = (state_49962[(1)]);
if((state_val_49963 === (7))){
var inst_49958 = (state_49962[(2)]);
var state_49962__$1 = state_49962;
var statearr_49964_50005 = state_49962__$1;
(statearr_49964_50005[(2)] = inst_49958);

(statearr_49964_50005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (20))){
var inst_49928 = (state_49962[(7)]);
var inst_49939 = (state_49962[(2)]);
var inst_49940 = cljs.core.next.call(null,inst_49928);
var inst_49914 = inst_49940;
var inst_49915 = null;
var inst_49916 = (0);
var inst_49917 = (0);
var state_49962__$1 = (function (){var statearr_49965 = state_49962;
(statearr_49965[(8)] = inst_49914);

(statearr_49965[(9)] = inst_49917);

(statearr_49965[(10)] = inst_49916);

(statearr_49965[(11)] = inst_49939);

(statearr_49965[(12)] = inst_49915);

return statearr_49965;
})();
var statearr_49966_50006 = state_49962__$1;
(statearr_49966_50006[(2)] = null);

(statearr_49966_50006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (1))){
var state_49962__$1 = state_49962;
var statearr_49967_50007 = state_49962__$1;
(statearr_49967_50007[(2)] = null);

(statearr_49967_50007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (4))){
var inst_49903 = (state_49962[(13)]);
var inst_49903__$1 = (state_49962[(2)]);
var inst_49904 = (inst_49903__$1 == null);
var state_49962__$1 = (function (){var statearr_49968 = state_49962;
(statearr_49968[(13)] = inst_49903__$1);

return statearr_49968;
})();
if(cljs.core.truth_(inst_49904)){
var statearr_49969_50008 = state_49962__$1;
(statearr_49969_50008[(1)] = (5));

} else {
var statearr_49970_50009 = state_49962__$1;
(statearr_49970_50009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (15))){
var state_49962__$1 = state_49962;
var statearr_49974_50010 = state_49962__$1;
(statearr_49974_50010[(2)] = null);

(statearr_49974_50010[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (21))){
var state_49962__$1 = state_49962;
var statearr_49975_50011 = state_49962__$1;
(statearr_49975_50011[(2)] = null);

(statearr_49975_50011[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (13))){
var inst_49914 = (state_49962[(8)]);
var inst_49917 = (state_49962[(9)]);
var inst_49916 = (state_49962[(10)]);
var inst_49915 = (state_49962[(12)]);
var inst_49924 = (state_49962[(2)]);
var inst_49925 = (inst_49917 + (1));
var tmp49971 = inst_49914;
var tmp49972 = inst_49916;
var tmp49973 = inst_49915;
var inst_49914__$1 = tmp49971;
var inst_49915__$1 = tmp49973;
var inst_49916__$1 = tmp49972;
var inst_49917__$1 = inst_49925;
var state_49962__$1 = (function (){var statearr_49976 = state_49962;
(statearr_49976[(8)] = inst_49914__$1);

(statearr_49976[(9)] = inst_49917__$1);

(statearr_49976[(10)] = inst_49916__$1);

(statearr_49976[(14)] = inst_49924);

(statearr_49976[(12)] = inst_49915__$1);

return statearr_49976;
})();
var statearr_49977_50012 = state_49962__$1;
(statearr_49977_50012[(2)] = null);

(statearr_49977_50012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (22))){
var state_49962__$1 = state_49962;
var statearr_49978_50013 = state_49962__$1;
(statearr_49978_50013[(2)] = null);

(statearr_49978_50013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (6))){
var inst_49903 = (state_49962[(13)]);
var inst_49912 = f.call(null,inst_49903);
var inst_49913 = cljs.core.seq.call(null,inst_49912);
var inst_49914 = inst_49913;
var inst_49915 = null;
var inst_49916 = (0);
var inst_49917 = (0);
var state_49962__$1 = (function (){var statearr_49979 = state_49962;
(statearr_49979[(8)] = inst_49914);

(statearr_49979[(9)] = inst_49917);

(statearr_49979[(10)] = inst_49916);

(statearr_49979[(12)] = inst_49915);

return statearr_49979;
})();
var statearr_49980_50014 = state_49962__$1;
(statearr_49980_50014[(2)] = null);

(statearr_49980_50014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (17))){
var inst_49928 = (state_49962[(7)]);
var inst_49932 = cljs.core.chunk_first.call(null,inst_49928);
var inst_49933 = cljs.core.chunk_rest.call(null,inst_49928);
var inst_49934 = cljs.core.count.call(null,inst_49932);
var inst_49914 = inst_49933;
var inst_49915 = inst_49932;
var inst_49916 = inst_49934;
var inst_49917 = (0);
var state_49962__$1 = (function (){var statearr_49981 = state_49962;
(statearr_49981[(8)] = inst_49914);

(statearr_49981[(9)] = inst_49917);

(statearr_49981[(10)] = inst_49916);

(statearr_49981[(12)] = inst_49915);

return statearr_49981;
})();
var statearr_49982_50015 = state_49962__$1;
(statearr_49982_50015[(2)] = null);

(statearr_49982_50015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (3))){
var inst_49960 = (state_49962[(2)]);
var state_49962__$1 = state_49962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49962__$1,inst_49960);
} else {
if((state_val_49963 === (12))){
var inst_49948 = (state_49962[(2)]);
var state_49962__$1 = state_49962;
var statearr_49983_50016 = state_49962__$1;
(statearr_49983_50016[(2)] = inst_49948);

(statearr_49983_50016[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (2))){
var state_49962__$1 = state_49962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49962__$1,(4),in$);
} else {
if((state_val_49963 === (23))){
var inst_49956 = (state_49962[(2)]);
var state_49962__$1 = state_49962;
var statearr_49984_50017 = state_49962__$1;
(statearr_49984_50017[(2)] = inst_49956);

(statearr_49984_50017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (19))){
var inst_49943 = (state_49962[(2)]);
var state_49962__$1 = state_49962;
var statearr_49985_50018 = state_49962__$1;
(statearr_49985_50018[(2)] = inst_49943);

(statearr_49985_50018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (11))){
var inst_49914 = (state_49962[(8)]);
var inst_49928 = (state_49962[(7)]);
var inst_49928__$1 = cljs.core.seq.call(null,inst_49914);
var state_49962__$1 = (function (){var statearr_49986 = state_49962;
(statearr_49986[(7)] = inst_49928__$1);

return statearr_49986;
})();
if(inst_49928__$1){
var statearr_49987_50019 = state_49962__$1;
(statearr_49987_50019[(1)] = (14));

} else {
var statearr_49988_50020 = state_49962__$1;
(statearr_49988_50020[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (9))){
var inst_49950 = (state_49962[(2)]);
var inst_49951 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49962__$1 = (function (){var statearr_49989 = state_49962;
(statearr_49989[(15)] = inst_49950);

return statearr_49989;
})();
if(cljs.core.truth_(inst_49951)){
var statearr_49990_50021 = state_49962__$1;
(statearr_49990_50021[(1)] = (21));

} else {
var statearr_49991_50022 = state_49962__$1;
(statearr_49991_50022[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (5))){
var inst_49906 = cljs.core.async.close_BANG_.call(null,out);
var state_49962__$1 = state_49962;
var statearr_49992_50023 = state_49962__$1;
(statearr_49992_50023[(2)] = inst_49906);

(statearr_49992_50023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (14))){
var inst_49928 = (state_49962[(7)]);
var inst_49930 = cljs.core.chunked_seq_QMARK_.call(null,inst_49928);
var state_49962__$1 = state_49962;
if(inst_49930){
var statearr_49993_50024 = state_49962__$1;
(statearr_49993_50024[(1)] = (17));

} else {
var statearr_49994_50025 = state_49962__$1;
(statearr_49994_50025[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (16))){
var inst_49946 = (state_49962[(2)]);
var state_49962__$1 = state_49962;
var statearr_49995_50026 = state_49962__$1;
(statearr_49995_50026[(2)] = inst_49946);

(statearr_49995_50026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49963 === (10))){
var inst_49917 = (state_49962[(9)]);
var inst_49915 = (state_49962[(12)]);
var inst_49922 = cljs.core._nth.call(null,inst_49915,inst_49917);
var state_49962__$1 = state_49962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49962__$1,(13),out,inst_49922);
} else {
if((state_val_49963 === (18))){
var inst_49928 = (state_49962[(7)]);
var inst_49937 = cljs.core.first.call(null,inst_49928);
var state_49962__$1 = state_49962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49962__$1,(20),out,inst_49937);
} else {
if((state_val_49963 === (8))){
var inst_49917 = (state_49962[(9)]);
var inst_49916 = (state_49962[(10)]);
var inst_49919 = (inst_49917 < inst_49916);
var inst_49920 = inst_49919;
var state_49962__$1 = state_49962;
if(cljs.core.truth_(inst_49920)){
var statearr_49996_50027 = state_49962__$1;
(statearr_49996_50027[(1)] = (10));

} else {
var statearr_49997_50028 = state_49962__$1;
(statearr_49997_50028[(1)] = (11));

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
});})(c__22597__auto__))
;
return ((function (switch__22532__auto__,c__22597__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22533__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22533__auto____0 = (function (){
var statearr_50001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50001[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22533__auto__);

(statearr_50001[(1)] = (1));

return statearr_50001;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22533__auto____1 = (function (state_49962){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_49962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e50002){if((e50002 instanceof Object)){
var ex__22536__auto__ = e50002;
var statearr_50003_50029 = state_49962;
(statearr_50003_50029[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50030 = state_49962;
state_49962 = G__50030;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22533__auto__ = function(state_49962){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22533__auto____1.call(this,state_49962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22533__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22533__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto__))
})();
var state__22599__auto__ = (function (){var statearr_50004 = f__22598__auto__.call(null);
(statearr_50004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto__);

return statearr_50004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto__))
);

return c__22597__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args50031 = [];
var len__20178__auto___50034 = arguments.length;
var i__20179__auto___50035 = (0);
while(true){
if((i__20179__auto___50035 < len__20178__auto___50034)){
args50031.push((arguments[i__20179__auto___50035]));

var G__50036 = (i__20179__auto___50035 + (1));
i__20179__auto___50035 = G__50036;
continue;
} else {
}
break;
}

var G__50033 = args50031.length;
switch (G__50033) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50031.length)].join('')));

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
var args50038 = [];
var len__20178__auto___50041 = arguments.length;
var i__20179__auto___50042 = (0);
while(true){
if((i__20179__auto___50042 < len__20178__auto___50041)){
args50038.push((arguments[i__20179__auto___50042]));

var G__50043 = (i__20179__auto___50042 + (1));
i__20179__auto___50042 = G__50043;
continue;
} else {
}
break;
}

var G__50040 = args50038.length;
switch (G__50040) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50038.length)].join('')));

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
var args50045 = [];
var len__20178__auto___50096 = arguments.length;
var i__20179__auto___50097 = (0);
while(true){
if((i__20179__auto___50097 < len__20178__auto___50096)){
args50045.push((arguments[i__20179__auto___50097]));

var G__50098 = (i__20179__auto___50097 + (1));
i__20179__auto___50097 = G__50098;
continue;
} else {
}
break;
}

var G__50047 = args50045.length;
switch (G__50047) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50045.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22597__auto___50100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___50100,out){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___50100,out){
return (function (state_50071){
var state_val_50072 = (state_50071[(1)]);
if((state_val_50072 === (7))){
var inst_50066 = (state_50071[(2)]);
var state_50071__$1 = state_50071;
var statearr_50073_50101 = state_50071__$1;
(statearr_50073_50101[(2)] = inst_50066);

(statearr_50073_50101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50072 === (1))){
var inst_50048 = null;
var state_50071__$1 = (function (){var statearr_50074 = state_50071;
(statearr_50074[(7)] = inst_50048);

return statearr_50074;
})();
var statearr_50075_50102 = state_50071__$1;
(statearr_50075_50102[(2)] = null);

(statearr_50075_50102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50072 === (4))){
var inst_50051 = (state_50071[(8)]);
var inst_50051__$1 = (state_50071[(2)]);
var inst_50052 = (inst_50051__$1 == null);
var inst_50053 = cljs.core.not.call(null,inst_50052);
var state_50071__$1 = (function (){var statearr_50076 = state_50071;
(statearr_50076[(8)] = inst_50051__$1);

return statearr_50076;
})();
if(inst_50053){
var statearr_50077_50103 = state_50071__$1;
(statearr_50077_50103[(1)] = (5));

} else {
var statearr_50078_50104 = state_50071__$1;
(statearr_50078_50104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50072 === (6))){
var state_50071__$1 = state_50071;
var statearr_50079_50105 = state_50071__$1;
(statearr_50079_50105[(2)] = null);

(statearr_50079_50105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50072 === (3))){
var inst_50068 = (state_50071[(2)]);
var inst_50069 = cljs.core.async.close_BANG_.call(null,out);
var state_50071__$1 = (function (){var statearr_50080 = state_50071;
(statearr_50080[(9)] = inst_50068);

return statearr_50080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50071__$1,inst_50069);
} else {
if((state_val_50072 === (2))){
var state_50071__$1 = state_50071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50071__$1,(4),ch);
} else {
if((state_val_50072 === (11))){
var inst_50051 = (state_50071[(8)]);
var inst_50060 = (state_50071[(2)]);
var inst_50048 = inst_50051;
var state_50071__$1 = (function (){var statearr_50081 = state_50071;
(statearr_50081[(10)] = inst_50060);

(statearr_50081[(7)] = inst_50048);

return statearr_50081;
})();
var statearr_50082_50106 = state_50071__$1;
(statearr_50082_50106[(2)] = null);

(statearr_50082_50106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50072 === (9))){
var inst_50051 = (state_50071[(8)]);
var state_50071__$1 = state_50071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50071__$1,(11),out,inst_50051);
} else {
if((state_val_50072 === (5))){
var inst_50051 = (state_50071[(8)]);
var inst_50048 = (state_50071[(7)]);
var inst_50055 = cljs.core._EQ_.call(null,inst_50051,inst_50048);
var state_50071__$1 = state_50071;
if(inst_50055){
var statearr_50084_50107 = state_50071__$1;
(statearr_50084_50107[(1)] = (8));

} else {
var statearr_50085_50108 = state_50071__$1;
(statearr_50085_50108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50072 === (10))){
var inst_50063 = (state_50071[(2)]);
var state_50071__$1 = state_50071;
var statearr_50086_50109 = state_50071__$1;
(statearr_50086_50109[(2)] = inst_50063);

(statearr_50086_50109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50072 === (8))){
var inst_50048 = (state_50071[(7)]);
var tmp50083 = inst_50048;
var inst_50048__$1 = tmp50083;
var state_50071__$1 = (function (){var statearr_50087 = state_50071;
(statearr_50087[(7)] = inst_50048__$1);

return statearr_50087;
})();
var statearr_50088_50110 = state_50071__$1;
(statearr_50088_50110[(2)] = null);

(statearr_50088_50110[(1)] = (2));


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
});})(c__22597__auto___50100,out))
;
return ((function (switch__22532__auto__,c__22597__auto___50100,out){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_50092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50092[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_50092[(1)] = (1));

return statearr_50092;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_50071){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_50071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e50093){if((e50093 instanceof Object)){
var ex__22536__auto__ = e50093;
var statearr_50094_50111 = state_50071;
(statearr_50094_50111[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50112 = state_50071;
state_50071 = G__50112;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_50071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_50071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___50100,out))
})();
var state__22599__auto__ = (function (){var statearr_50095 = f__22598__auto__.call(null);
(statearr_50095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___50100);

return statearr_50095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___50100,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args50113 = [];
var len__20178__auto___50183 = arguments.length;
var i__20179__auto___50184 = (0);
while(true){
if((i__20179__auto___50184 < len__20178__auto___50183)){
args50113.push((arguments[i__20179__auto___50184]));

var G__50185 = (i__20179__auto___50184 + (1));
i__20179__auto___50184 = G__50185;
continue;
} else {
}
break;
}

var G__50115 = args50113.length;
switch (G__50115) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50113.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22597__auto___50187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___50187,out){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___50187,out){
return (function (state_50153){
var state_val_50154 = (state_50153[(1)]);
if((state_val_50154 === (7))){
var inst_50149 = (state_50153[(2)]);
var state_50153__$1 = state_50153;
var statearr_50155_50188 = state_50153__$1;
(statearr_50155_50188[(2)] = inst_50149);

(statearr_50155_50188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50154 === (1))){
var inst_50116 = (new Array(n));
var inst_50117 = inst_50116;
var inst_50118 = (0);
var state_50153__$1 = (function (){var statearr_50156 = state_50153;
(statearr_50156[(7)] = inst_50117);

(statearr_50156[(8)] = inst_50118);

return statearr_50156;
})();
var statearr_50157_50189 = state_50153__$1;
(statearr_50157_50189[(2)] = null);

(statearr_50157_50189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50154 === (4))){
var inst_50121 = (state_50153[(9)]);
var inst_50121__$1 = (state_50153[(2)]);
var inst_50122 = (inst_50121__$1 == null);
var inst_50123 = cljs.core.not.call(null,inst_50122);
var state_50153__$1 = (function (){var statearr_50158 = state_50153;
(statearr_50158[(9)] = inst_50121__$1);

return statearr_50158;
})();
if(inst_50123){
var statearr_50159_50190 = state_50153__$1;
(statearr_50159_50190[(1)] = (5));

} else {
var statearr_50160_50191 = state_50153__$1;
(statearr_50160_50191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50154 === (15))){
var inst_50143 = (state_50153[(2)]);
var state_50153__$1 = state_50153;
var statearr_50161_50192 = state_50153__$1;
(statearr_50161_50192[(2)] = inst_50143);

(statearr_50161_50192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50154 === (13))){
var state_50153__$1 = state_50153;
var statearr_50162_50193 = state_50153__$1;
(statearr_50162_50193[(2)] = null);

(statearr_50162_50193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50154 === (6))){
var inst_50118 = (state_50153[(8)]);
var inst_50139 = (inst_50118 > (0));
var state_50153__$1 = state_50153;
if(cljs.core.truth_(inst_50139)){
var statearr_50163_50194 = state_50153__$1;
(statearr_50163_50194[(1)] = (12));

} else {
var statearr_50164_50195 = state_50153__$1;
(statearr_50164_50195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50154 === (3))){
var inst_50151 = (state_50153[(2)]);
var state_50153__$1 = state_50153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50153__$1,inst_50151);
} else {
if((state_val_50154 === (12))){
var inst_50117 = (state_50153[(7)]);
var inst_50141 = cljs.core.vec.call(null,inst_50117);
var state_50153__$1 = state_50153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50153__$1,(15),out,inst_50141);
} else {
if((state_val_50154 === (2))){
var state_50153__$1 = state_50153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50153__$1,(4),ch);
} else {
if((state_val_50154 === (11))){
var inst_50133 = (state_50153[(2)]);
var inst_50134 = (new Array(n));
var inst_50117 = inst_50134;
var inst_50118 = (0);
var state_50153__$1 = (function (){var statearr_50165 = state_50153;
(statearr_50165[(7)] = inst_50117);

(statearr_50165[(8)] = inst_50118);

(statearr_50165[(10)] = inst_50133);

return statearr_50165;
})();
var statearr_50166_50196 = state_50153__$1;
(statearr_50166_50196[(2)] = null);

(statearr_50166_50196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50154 === (9))){
var inst_50117 = (state_50153[(7)]);
var inst_50131 = cljs.core.vec.call(null,inst_50117);
var state_50153__$1 = state_50153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50153__$1,(11),out,inst_50131);
} else {
if((state_val_50154 === (5))){
var inst_50126 = (state_50153[(11)]);
var inst_50117 = (state_50153[(7)]);
var inst_50121 = (state_50153[(9)]);
var inst_50118 = (state_50153[(8)]);
var inst_50125 = (inst_50117[inst_50118] = inst_50121);
var inst_50126__$1 = (inst_50118 + (1));
var inst_50127 = (inst_50126__$1 < n);
var state_50153__$1 = (function (){var statearr_50167 = state_50153;
(statearr_50167[(12)] = inst_50125);

(statearr_50167[(11)] = inst_50126__$1);

return statearr_50167;
})();
if(cljs.core.truth_(inst_50127)){
var statearr_50168_50197 = state_50153__$1;
(statearr_50168_50197[(1)] = (8));

} else {
var statearr_50169_50198 = state_50153__$1;
(statearr_50169_50198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50154 === (14))){
var inst_50146 = (state_50153[(2)]);
var inst_50147 = cljs.core.async.close_BANG_.call(null,out);
var state_50153__$1 = (function (){var statearr_50171 = state_50153;
(statearr_50171[(13)] = inst_50146);

return statearr_50171;
})();
var statearr_50172_50199 = state_50153__$1;
(statearr_50172_50199[(2)] = inst_50147);

(statearr_50172_50199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50154 === (10))){
var inst_50137 = (state_50153[(2)]);
var state_50153__$1 = state_50153;
var statearr_50173_50200 = state_50153__$1;
(statearr_50173_50200[(2)] = inst_50137);

(statearr_50173_50200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50154 === (8))){
var inst_50126 = (state_50153[(11)]);
var inst_50117 = (state_50153[(7)]);
var tmp50170 = inst_50117;
var inst_50117__$1 = tmp50170;
var inst_50118 = inst_50126;
var state_50153__$1 = (function (){var statearr_50174 = state_50153;
(statearr_50174[(7)] = inst_50117__$1);

(statearr_50174[(8)] = inst_50118);

return statearr_50174;
})();
var statearr_50175_50201 = state_50153__$1;
(statearr_50175_50201[(2)] = null);

(statearr_50175_50201[(1)] = (2));


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
});})(c__22597__auto___50187,out))
;
return ((function (switch__22532__auto__,c__22597__auto___50187,out){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_50179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50179[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_50179[(1)] = (1));

return statearr_50179;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_50153){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_50153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e50180){if((e50180 instanceof Object)){
var ex__22536__auto__ = e50180;
var statearr_50181_50202 = state_50153;
(statearr_50181_50202[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50203 = state_50153;
state_50153 = G__50203;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_50153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_50153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___50187,out))
})();
var state__22599__auto__ = (function (){var statearr_50182 = f__22598__auto__.call(null);
(statearr_50182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___50187);

return statearr_50182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___50187,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args50204 = [];
var len__20178__auto___50278 = arguments.length;
var i__20179__auto___50279 = (0);
while(true){
if((i__20179__auto___50279 < len__20178__auto___50278)){
args50204.push((arguments[i__20179__auto___50279]));

var G__50280 = (i__20179__auto___50279 + (1));
i__20179__auto___50279 = G__50280;
continue;
} else {
}
break;
}

var G__50206 = args50204.length;
switch (G__50206) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50204.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22597__auto___50282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___50282,out){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___50282,out){
return (function (state_50248){
var state_val_50249 = (state_50248[(1)]);
if((state_val_50249 === (7))){
var inst_50244 = (state_50248[(2)]);
var state_50248__$1 = state_50248;
var statearr_50250_50283 = state_50248__$1;
(statearr_50250_50283[(2)] = inst_50244);

(statearr_50250_50283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (1))){
var inst_50207 = [];
var inst_50208 = inst_50207;
var inst_50209 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50248__$1 = (function (){var statearr_50251 = state_50248;
(statearr_50251[(7)] = inst_50209);

(statearr_50251[(8)] = inst_50208);

return statearr_50251;
})();
var statearr_50252_50284 = state_50248__$1;
(statearr_50252_50284[(2)] = null);

(statearr_50252_50284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (4))){
var inst_50212 = (state_50248[(9)]);
var inst_50212__$1 = (state_50248[(2)]);
var inst_50213 = (inst_50212__$1 == null);
var inst_50214 = cljs.core.not.call(null,inst_50213);
var state_50248__$1 = (function (){var statearr_50253 = state_50248;
(statearr_50253[(9)] = inst_50212__$1);

return statearr_50253;
})();
if(inst_50214){
var statearr_50254_50285 = state_50248__$1;
(statearr_50254_50285[(1)] = (5));

} else {
var statearr_50255_50286 = state_50248__$1;
(statearr_50255_50286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (15))){
var inst_50238 = (state_50248[(2)]);
var state_50248__$1 = state_50248;
var statearr_50256_50287 = state_50248__$1;
(statearr_50256_50287[(2)] = inst_50238);

(statearr_50256_50287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (13))){
var state_50248__$1 = state_50248;
var statearr_50257_50288 = state_50248__$1;
(statearr_50257_50288[(2)] = null);

(statearr_50257_50288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (6))){
var inst_50208 = (state_50248[(8)]);
var inst_50233 = inst_50208.length;
var inst_50234 = (inst_50233 > (0));
var state_50248__$1 = state_50248;
if(cljs.core.truth_(inst_50234)){
var statearr_50258_50289 = state_50248__$1;
(statearr_50258_50289[(1)] = (12));

} else {
var statearr_50259_50290 = state_50248__$1;
(statearr_50259_50290[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (3))){
var inst_50246 = (state_50248[(2)]);
var state_50248__$1 = state_50248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50248__$1,inst_50246);
} else {
if((state_val_50249 === (12))){
var inst_50208 = (state_50248[(8)]);
var inst_50236 = cljs.core.vec.call(null,inst_50208);
var state_50248__$1 = state_50248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50248__$1,(15),out,inst_50236);
} else {
if((state_val_50249 === (2))){
var state_50248__$1 = state_50248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50248__$1,(4),ch);
} else {
if((state_val_50249 === (11))){
var inst_50212 = (state_50248[(9)]);
var inst_50216 = (state_50248[(10)]);
var inst_50226 = (state_50248[(2)]);
var inst_50227 = [];
var inst_50228 = inst_50227.push(inst_50212);
var inst_50208 = inst_50227;
var inst_50209 = inst_50216;
var state_50248__$1 = (function (){var statearr_50260 = state_50248;
(statearr_50260[(7)] = inst_50209);

(statearr_50260[(8)] = inst_50208);

(statearr_50260[(11)] = inst_50228);

(statearr_50260[(12)] = inst_50226);

return statearr_50260;
})();
var statearr_50261_50291 = state_50248__$1;
(statearr_50261_50291[(2)] = null);

(statearr_50261_50291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (9))){
var inst_50208 = (state_50248[(8)]);
var inst_50224 = cljs.core.vec.call(null,inst_50208);
var state_50248__$1 = state_50248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50248__$1,(11),out,inst_50224);
} else {
if((state_val_50249 === (5))){
var inst_50209 = (state_50248[(7)]);
var inst_50212 = (state_50248[(9)]);
var inst_50216 = (state_50248[(10)]);
var inst_50216__$1 = f.call(null,inst_50212);
var inst_50217 = cljs.core._EQ_.call(null,inst_50216__$1,inst_50209);
var inst_50218 = cljs.core.keyword_identical_QMARK_.call(null,inst_50209,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50219 = (inst_50217) || (inst_50218);
var state_50248__$1 = (function (){var statearr_50262 = state_50248;
(statearr_50262[(10)] = inst_50216__$1);

return statearr_50262;
})();
if(cljs.core.truth_(inst_50219)){
var statearr_50263_50292 = state_50248__$1;
(statearr_50263_50292[(1)] = (8));

} else {
var statearr_50264_50293 = state_50248__$1;
(statearr_50264_50293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (14))){
var inst_50241 = (state_50248[(2)]);
var inst_50242 = cljs.core.async.close_BANG_.call(null,out);
var state_50248__$1 = (function (){var statearr_50266 = state_50248;
(statearr_50266[(13)] = inst_50241);

return statearr_50266;
})();
var statearr_50267_50294 = state_50248__$1;
(statearr_50267_50294[(2)] = inst_50242);

(statearr_50267_50294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (10))){
var inst_50231 = (state_50248[(2)]);
var state_50248__$1 = state_50248;
var statearr_50268_50295 = state_50248__$1;
(statearr_50268_50295[(2)] = inst_50231);

(statearr_50268_50295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (8))){
var inst_50208 = (state_50248[(8)]);
var inst_50212 = (state_50248[(9)]);
var inst_50216 = (state_50248[(10)]);
var inst_50221 = inst_50208.push(inst_50212);
var tmp50265 = inst_50208;
var inst_50208__$1 = tmp50265;
var inst_50209 = inst_50216;
var state_50248__$1 = (function (){var statearr_50269 = state_50248;
(statearr_50269[(7)] = inst_50209);

(statearr_50269[(8)] = inst_50208__$1);

(statearr_50269[(14)] = inst_50221);

return statearr_50269;
})();
var statearr_50270_50296 = state_50248__$1;
(statearr_50270_50296[(2)] = null);

(statearr_50270_50296[(1)] = (2));


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
});})(c__22597__auto___50282,out))
;
return ((function (switch__22532__auto__,c__22597__auto___50282,out){
return (function() {
var cljs$core$async$state_machine__22533__auto__ = null;
var cljs$core$async$state_machine__22533__auto____0 = (function (){
var statearr_50274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50274[(0)] = cljs$core$async$state_machine__22533__auto__);

(statearr_50274[(1)] = (1));

return statearr_50274;
});
var cljs$core$async$state_machine__22533__auto____1 = (function (state_50248){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_50248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e50275){if((e50275 instanceof Object)){
var ex__22536__auto__ = e50275;
var statearr_50276_50297 = state_50248;
(statearr_50276_50297[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50298 = state_50248;
state_50248 = G__50298;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs$core$async$state_machine__22533__auto__ = function(state_50248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22533__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22533__auto____1.call(this,state_50248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22533__auto____0;
cljs$core$async$state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22533__auto____1;
return cljs$core$async$state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___50282,out))
})();
var state__22599__auto__ = (function (){var statearr_50277 = f__22598__auto__.call(null);
(statearr_50277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___50282);

return statearr_50277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___50282,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map