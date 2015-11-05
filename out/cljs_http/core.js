// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var seq__50663 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__50668 = null;
var count__50669 = (0);
var i__50670 = (0);
while(true){
if((i__50670 < count__50669)){
var h_name = cljs.core._nth.call(null,chunk__50668,i__50670);
var seq__50671_50675 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__50672_50676 = null;
var count__50673_50677 = (0);
var i__50674_50678 = (0);
while(true){
if((i__50674_50678 < count__50673_50677)){
var h_val_50679 = cljs.core._nth.call(null,chunk__50672_50676,i__50674_50678);
xhr.headers.set(h_name,h_val_50679);

var G__50680 = seq__50671_50675;
var G__50681 = chunk__50672_50676;
var G__50682 = count__50673_50677;
var G__50683 = (i__50674_50678 + (1));
seq__50671_50675 = G__50680;
chunk__50672_50676 = G__50681;
count__50673_50677 = G__50682;
i__50674_50678 = G__50683;
continue;
} else {
var temp__4425__auto___50684 = cljs.core.seq.call(null,seq__50671_50675);
if(temp__4425__auto___50684){
var seq__50671_50685__$1 = temp__4425__auto___50684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50671_50685__$1)){
var c__19923__auto___50686 = cljs.core.chunk_first.call(null,seq__50671_50685__$1);
var G__50687 = cljs.core.chunk_rest.call(null,seq__50671_50685__$1);
var G__50688 = c__19923__auto___50686;
var G__50689 = cljs.core.count.call(null,c__19923__auto___50686);
var G__50690 = (0);
seq__50671_50675 = G__50687;
chunk__50672_50676 = G__50688;
count__50673_50677 = G__50689;
i__50674_50678 = G__50690;
continue;
} else {
var h_val_50691 = cljs.core.first.call(null,seq__50671_50685__$1);
xhr.headers.set(h_name,h_val_50691);

var G__50692 = cljs.core.next.call(null,seq__50671_50685__$1);
var G__50693 = null;
var G__50694 = (0);
var G__50695 = (0);
seq__50671_50675 = G__50692;
chunk__50672_50676 = G__50693;
count__50673_50677 = G__50694;
i__50674_50678 = G__50695;
continue;
}
} else {
}
}
break;
}

var G__50696 = seq__50663;
var G__50697 = chunk__50668;
var G__50698 = count__50669;
var G__50699 = (i__50670 + (1));
seq__50663 = G__50696;
chunk__50668 = G__50697;
count__50669 = G__50698;
i__50670 = G__50699;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__50663);
if(temp__4425__auto__){
var seq__50663__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50663__$1)){
var c__19923__auto__ = cljs.core.chunk_first.call(null,seq__50663__$1);
var G__50700 = cljs.core.chunk_rest.call(null,seq__50663__$1);
var G__50701 = c__19923__auto__;
var G__50702 = cljs.core.count.call(null,c__19923__auto__);
var G__50703 = (0);
seq__50663 = G__50700;
chunk__50668 = G__50701;
count__50669 = G__50702;
i__50670 = G__50703;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__50663__$1);
var seq__50664_50704 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__50665_50705 = null;
var count__50666_50706 = (0);
var i__50667_50707 = (0);
while(true){
if((i__50667_50707 < count__50666_50706)){
var h_val_50708 = cljs.core._nth.call(null,chunk__50665_50705,i__50667_50707);
xhr.headers.set(h_name,h_val_50708);

var G__50709 = seq__50664_50704;
var G__50710 = chunk__50665_50705;
var G__50711 = count__50666_50706;
var G__50712 = (i__50667_50707 + (1));
seq__50664_50704 = G__50709;
chunk__50665_50705 = G__50710;
count__50666_50706 = G__50711;
i__50667_50707 = G__50712;
continue;
} else {
var temp__4425__auto___50713__$1 = cljs.core.seq.call(null,seq__50664_50704);
if(temp__4425__auto___50713__$1){
var seq__50664_50714__$1 = temp__4425__auto___50713__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50664_50714__$1)){
var c__19923__auto___50715 = cljs.core.chunk_first.call(null,seq__50664_50714__$1);
var G__50716 = cljs.core.chunk_rest.call(null,seq__50664_50714__$1);
var G__50717 = c__19923__auto___50715;
var G__50718 = cljs.core.count.call(null,c__19923__auto___50715);
var G__50719 = (0);
seq__50664_50704 = G__50716;
chunk__50665_50705 = G__50717;
count__50666_50706 = G__50718;
i__50667_50707 = G__50719;
continue;
} else {
var h_val_50720 = cljs.core.first.call(null,seq__50664_50714__$1);
xhr.headers.set(h_name,h_val_50720);

var G__50721 = cljs.core.next.call(null,seq__50664_50714__$1);
var G__50722 = null;
var G__50723 = (0);
var G__50724 = (0);
seq__50664_50704 = G__50721;
chunk__50665_50705 = G__50722;
count__50666_50706 = G__50723;
i__50667_50707 = G__50724;
continue;
}
} else {
}
}
break;
}

var G__50725 = cljs.core.next.call(null,seq__50663__$1);
var G__50726 = null;
var G__50727 = (0);
var G__50728 = (0);
seq__50663 = G__50725;
chunk__50668 = G__50726;
count__50669 = G__50727;
i__50670 = G__50728;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__50730 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__50730)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__50730)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__50730)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__50730)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__50730)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__50730)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__50731){
var map__50735 = p__50731;
var map__50735__$1 = ((((!((map__50735 == null)))?((((map__50735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50735):map__50735);
var request = map__50735__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__50735__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__50735__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__50735__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__19120__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19120__auto__)){
return or__19120__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__50737 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__50737,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__50737,response_type);

G__50737.setTimeoutInterval(timeout);

G__50737.setWithCredentials(send_credentials);

return G__50737;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__50738){
var map__50765 = p__50738;
var map__50765__$1 = ((((!((map__50765 == null)))?((((map__50765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50765):map__50765);
var request = map__50765__$1;
var request_method = cljs.core.get.call(null,map__50765__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__50765__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__50765__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__50765__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__50765__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__19120__auto__ = request_method;
if(cljs.core.truth_(or__19120__auto__)){
return or__19120__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__50765,map__50765__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__50765,map__50765__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__22597__auto___50791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___50791,channel,request_url,method,headers__$1,xhr__$1,map__50765,map__50765__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___50791,channel,request_url,method,headers__$1,xhr__$1,map__50765,map__50765__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_50777){
var state_val_50778 = (state_50777[(1)]);
if((state_val_50778 === (1))){
var state_50777__$1 = state_50777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50777__$1,(2),cancel);
} else {
if((state_val_50778 === (2))){
var inst_50768 = (state_50777[(2)]);
var inst_50769 = xhr__$1.isComplete();
var inst_50770 = cljs.core.not.call(null,inst_50769);
var state_50777__$1 = (function (){var statearr_50779 = state_50777;
(statearr_50779[(7)] = inst_50768);

return statearr_50779;
})();
if(inst_50770){
var statearr_50780_50792 = state_50777__$1;
(statearr_50780_50792[(1)] = (3));

} else {
var statearr_50781_50793 = state_50777__$1;
(statearr_50781_50793[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50778 === (3))){
var inst_50772 = xhr__$1.abort();
var state_50777__$1 = state_50777;
var statearr_50782_50794 = state_50777__$1;
(statearr_50782_50794[(2)] = inst_50772);

(statearr_50782_50794[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50778 === (4))){
var state_50777__$1 = state_50777;
var statearr_50783_50795 = state_50777__$1;
(statearr_50783_50795[(2)] = null);

(statearr_50783_50795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50778 === (5))){
var inst_50775 = (state_50777[(2)]);
var state_50777__$1 = state_50777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50777__$1,inst_50775);
} else {
return null;
}
}
}
}
}
});})(c__22597__auto___50791,channel,request_url,method,headers__$1,xhr__$1,map__50765,map__50765__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__22532__auto__,c__22597__auto___50791,channel,request_url,method,headers__$1,xhr__$1,map__50765,map__50765__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__22533__auto__ = null;
var cljs_http$core$xhr_$_state_machine__22533__auto____0 = (function (){
var statearr_50787 = [null,null,null,null,null,null,null,null];
(statearr_50787[(0)] = cljs_http$core$xhr_$_state_machine__22533__auto__);

(statearr_50787[(1)] = (1));

return statearr_50787;
});
var cljs_http$core$xhr_$_state_machine__22533__auto____1 = (function (state_50777){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_50777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e50788){if((e50788 instanceof Object)){
var ex__22536__auto__ = e50788;
var statearr_50789_50796 = state_50777;
(statearr_50789_50796[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50797 = state_50777;
state_50777 = G__50797;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__22533__auto__ = function(state_50777){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__22533__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__22533__auto____1.call(this,state_50777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__22533__auto____0;
cljs_http$core$xhr_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__22533__auto____1;
return cljs_http$core$xhr_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___50791,channel,request_url,method,headers__$1,xhr__$1,map__50765,map__50765__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__22599__auto__ = (function (){var statearr_50790 = f__22598__auto__.call(null);
(statearr_50790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___50791);

return statearr_50790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___50791,channel,request_url,method,headers__$1,xhr__$1,map__50765,map__50765__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__50798){
var map__50815 = p__50798;
var map__50815__$1 = ((((!((map__50815 == null)))?((((map__50815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50815):map__50815);
var request = map__50815__$1;
var timeout = cljs.core.get.call(null,map__50815__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__50815__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__50815__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_50831 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__50815,map__50815__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__50815,map__50815__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__50815,map__50815__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__50815,map__50815__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_50831], null));

if(cljs.core.truth_(cancel)){
var c__22597__auto___50832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22597__auto___50832,req_50831,channel,jsonp__$1,map__50815,map__50815__$1,request,timeout,callback_name,cancel){
return (function (){
var f__22598__auto__ = (function (){var switch__22532__auto__ = ((function (c__22597__auto___50832,req_50831,channel,jsonp__$1,map__50815,map__50815__$1,request,timeout,callback_name,cancel){
return (function (state_50821){
var state_val_50822 = (state_50821[(1)]);
if((state_val_50822 === (1))){
var state_50821__$1 = state_50821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50821__$1,(2),cancel);
} else {
if((state_val_50822 === (2))){
var inst_50818 = (state_50821[(2)]);
var inst_50819 = jsonp__$1.cancel(req_50831);
var state_50821__$1 = (function (){var statearr_50823 = state_50821;
(statearr_50823[(7)] = inst_50818);

return statearr_50823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50821__$1,inst_50819);
} else {
return null;
}
}
});})(c__22597__auto___50832,req_50831,channel,jsonp__$1,map__50815,map__50815__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__22532__auto__,c__22597__auto___50832,req_50831,channel,jsonp__$1,map__50815,map__50815__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__22533__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__22533__auto____0 = (function (){
var statearr_50827 = [null,null,null,null,null,null,null,null];
(statearr_50827[(0)] = cljs_http$core$jsonp_$_state_machine__22533__auto__);

(statearr_50827[(1)] = (1));

return statearr_50827;
});
var cljs_http$core$jsonp_$_state_machine__22533__auto____1 = (function (state_50821){
while(true){
var ret_value__22534__auto__ = (function (){try{while(true){
var result__22535__auto__ = switch__22532__auto__.call(null,state_50821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22535__auto__;
}
break;
}
}catch (e50828){if((e50828 instanceof Object)){
var ex__22536__auto__ = e50828;
var statearr_50829_50833 = state_50821;
(statearr_50829_50833[(5)] = ex__22536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50834 = state_50821;
state_50821 = G__50834;
continue;
} else {
return ret_value__22534__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__22533__auto__ = function(state_50821){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__22533__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__22533__auto____1.call(this,state_50821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__22533__auto____0;
cljs_http$core$jsonp_$_state_machine__22533__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__22533__auto____1;
return cljs_http$core$jsonp_$_state_machine__22533__auto__;
})()
;})(switch__22532__auto__,c__22597__auto___50832,req_50831,channel,jsonp__$1,map__50815,map__50815__$1,request,timeout,callback_name,cancel))
})();
var state__22599__auto__ = (function (){var statearr_50830 = f__22598__auto__.call(null);
(statearr_50830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22597__auto___50832);

return statearr_50830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22599__auto__);
});})(c__22597__auto___50832,req_50831,channel,jsonp__$1,map__50815,map__50815__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__50835){
var map__50838 = p__50835;
var map__50838__$1 = ((((!((map__50838 == null)))?((((map__50838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50838):map__50838);
var request__$1 = map__50838__$1;
var request_method = cljs.core.get.call(null,map__50838__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map