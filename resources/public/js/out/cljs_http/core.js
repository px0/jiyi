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
var seq__27671 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__27676 = null;
var count__27677 = (0);
var i__27678 = (0);
while(true){
if((i__27678 < count__27677)){
var h_name = cljs.core._nth.call(null,chunk__27676,i__27678);
var seq__27679_27683 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__27680_27684 = null;
var count__27681_27685 = (0);
var i__27682_27686 = (0);
while(true){
if((i__27682_27686 < count__27681_27685)){
var h_val_27687 = cljs.core._nth.call(null,chunk__27680_27684,i__27682_27686);
xhr.headers.set(h_name,h_val_27687);

var G__27688 = seq__27679_27683;
var G__27689 = chunk__27680_27684;
var G__27690 = count__27681_27685;
var G__27691 = (i__27682_27686 + (1));
seq__27679_27683 = G__27688;
chunk__27680_27684 = G__27689;
count__27681_27685 = G__27690;
i__27682_27686 = G__27691;
continue;
} else {
var temp__4425__auto___27692 = cljs.core.seq.call(null,seq__27679_27683);
if(temp__4425__auto___27692){
var seq__27679_27693__$1 = temp__4425__auto___27692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27679_27693__$1)){
var c__19912__auto___27694 = cljs.core.chunk_first.call(null,seq__27679_27693__$1);
var G__27695 = cljs.core.chunk_rest.call(null,seq__27679_27693__$1);
var G__27696 = c__19912__auto___27694;
var G__27697 = cljs.core.count.call(null,c__19912__auto___27694);
var G__27698 = (0);
seq__27679_27683 = G__27695;
chunk__27680_27684 = G__27696;
count__27681_27685 = G__27697;
i__27682_27686 = G__27698;
continue;
} else {
var h_val_27699 = cljs.core.first.call(null,seq__27679_27693__$1);
xhr.headers.set(h_name,h_val_27699);

var G__27700 = cljs.core.next.call(null,seq__27679_27693__$1);
var G__27701 = null;
var G__27702 = (0);
var G__27703 = (0);
seq__27679_27683 = G__27700;
chunk__27680_27684 = G__27701;
count__27681_27685 = G__27702;
i__27682_27686 = G__27703;
continue;
}
} else {
}
}
break;
}

var G__27704 = seq__27671;
var G__27705 = chunk__27676;
var G__27706 = count__27677;
var G__27707 = (i__27678 + (1));
seq__27671 = G__27704;
chunk__27676 = G__27705;
count__27677 = G__27706;
i__27678 = G__27707;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27671);
if(temp__4425__auto__){
var seq__27671__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27671__$1)){
var c__19912__auto__ = cljs.core.chunk_first.call(null,seq__27671__$1);
var G__27708 = cljs.core.chunk_rest.call(null,seq__27671__$1);
var G__27709 = c__19912__auto__;
var G__27710 = cljs.core.count.call(null,c__19912__auto__);
var G__27711 = (0);
seq__27671 = G__27708;
chunk__27676 = G__27709;
count__27677 = G__27710;
i__27678 = G__27711;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__27671__$1);
var seq__27672_27712 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__27673_27713 = null;
var count__27674_27714 = (0);
var i__27675_27715 = (0);
while(true){
if((i__27675_27715 < count__27674_27714)){
var h_val_27716 = cljs.core._nth.call(null,chunk__27673_27713,i__27675_27715);
xhr.headers.set(h_name,h_val_27716);

var G__27717 = seq__27672_27712;
var G__27718 = chunk__27673_27713;
var G__27719 = count__27674_27714;
var G__27720 = (i__27675_27715 + (1));
seq__27672_27712 = G__27717;
chunk__27673_27713 = G__27718;
count__27674_27714 = G__27719;
i__27675_27715 = G__27720;
continue;
} else {
var temp__4425__auto___27721__$1 = cljs.core.seq.call(null,seq__27672_27712);
if(temp__4425__auto___27721__$1){
var seq__27672_27722__$1 = temp__4425__auto___27721__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27672_27722__$1)){
var c__19912__auto___27723 = cljs.core.chunk_first.call(null,seq__27672_27722__$1);
var G__27724 = cljs.core.chunk_rest.call(null,seq__27672_27722__$1);
var G__27725 = c__19912__auto___27723;
var G__27726 = cljs.core.count.call(null,c__19912__auto___27723);
var G__27727 = (0);
seq__27672_27712 = G__27724;
chunk__27673_27713 = G__27725;
count__27674_27714 = G__27726;
i__27675_27715 = G__27727;
continue;
} else {
var h_val_27728 = cljs.core.first.call(null,seq__27672_27722__$1);
xhr.headers.set(h_name,h_val_27728);

var G__27729 = cljs.core.next.call(null,seq__27672_27722__$1);
var G__27730 = null;
var G__27731 = (0);
var G__27732 = (0);
seq__27672_27712 = G__27729;
chunk__27673_27713 = G__27730;
count__27674_27714 = G__27731;
i__27675_27715 = G__27732;
continue;
}
} else {
}
}
break;
}

var G__27733 = cljs.core.next.call(null,seq__27671__$1);
var G__27734 = null;
var G__27735 = (0);
var G__27736 = (0);
seq__27671 = G__27733;
chunk__27676 = G__27734;
count__27677 = G__27735;
i__27678 = G__27736;
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
return xhr.setResponseType((function (){var G__27738 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__27738)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__27738)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__27738)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__27738)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__27738)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__27738)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__27739){
var map__27743 = p__27739;
var map__27743__$1 = ((((!((map__27743 == null)))?((((map__27743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27743):map__27743);
var request = map__27743__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__27743__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__27743__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__27743__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__19108__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19108__auto__)){
return or__19108__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__27745 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__27745,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__27745,response_type);

G__27745.setTimeoutInterval(timeout);

G__27745.setWithCredentials(send_credentials);

return G__27745;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__27746){
var map__27773 = p__27746;
var map__27773__$1 = ((((!((map__27773 == null)))?((((map__27773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27773):map__27773);
var request = map__27773__$1;
var request_method = cljs.core.get.call(null,map__27773__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__27773__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__27773__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__27773__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__27773__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__19108__auto__ = request_method;
if(cljs.core.truth_(or__19108__auto__)){
return or__19108__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__27773,map__27773__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__27773,map__27773__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__22586__auto___27799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22586__auto___27799,channel,request_url,method,headers__$1,xhr__$1,map__27773,map__27773__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__22587__auto__ = (function (){var switch__22521__auto__ = ((function (c__22586__auto___27799,channel,request_url,method,headers__$1,xhr__$1,map__27773,map__27773__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_27785){
var state_val_27786 = (state_27785[(1)]);
if((state_val_27786 === (1))){
var state_27785__$1 = state_27785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27785__$1,(2),cancel);
} else {
if((state_val_27786 === (2))){
var inst_27776 = (state_27785[(2)]);
var inst_27777 = xhr__$1.isComplete();
var inst_27778 = cljs.core.not.call(null,inst_27777);
var state_27785__$1 = (function (){var statearr_27787 = state_27785;
(statearr_27787[(7)] = inst_27776);

return statearr_27787;
})();
if(inst_27778){
var statearr_27788_27800 = state_27785__$1;
(statearr_27788_27800[(1)] = (3));

} else {
var statearr_27789_27801 = state_27785__$1;
(statearr_27789_27801[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (3))){
var inst_27780 = xhr__$1.abort();
var state_27785__$1 = state_27785;
var statearr_27790_27802 = state_27785__$1;
(statearr_27790_27802[(2)] = inst_27780);

(statearr_27790_27802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (4))){
var state_27785__$1 = state_27785;
var statearr_27791_27803 = state_27785__$1;
(statearr_27791_27803[(2)] = null);

(statearr_27791_27803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27786 === (5))){
var inst_27783 = (state_27785[(2)]);
var state_27785__$1 = state_27785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27785__$1,inst_27783);
} else {
return null;
}
}
}
}
}
});})(c__22586__auto___27799,channel,request_url,method,headers__$1,xhr__$1,map__27773,map__27773__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__22521__auto__,c__22586__auto___27799,channel,request_url,method,headers__$1,xhr__$1,map__27773,map__27773__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__22522__auto__ = null;
var cljs_http$core$xhr_$_state_machine__22522__auto____0 = (function (){
var statearr_27795 = [null,null,null,null,null,null,null,null];
(statearr_27795[(0)] = cljs_http$core$xhr_$_state_machine__22522__auto__);

(statearr_27795[(1)] = (1));

return statearr_27795;
});
var cljs_http$core$xhr_$_state_machine__22522__auto____1 = (function (state_27785){
while(true){
var ret_value__22523__auto__ = (function (){try{while(true){
var result__22524__auto__ = switch__22521__auto__.call(null,state_27785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22524__auto__;
}
break;
}
}catch (e27796){if((e27796 instanceof Object)){
var ex__22525__auto__ = e27796;
var statearr_27797_27804 = state_27785;
(statearr_27797_27804[(5)] = ex__22525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27805 = state_27785;
state_27785 = G__27805;
continue;
} else {
return ret_value__22523__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__22522__auto__ = function(state_27785){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__22522__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__22522__auto____1.call(this,state_27785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__22522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__22522__auto____0;
cljs_http$core$xhr_$_state_machine__22522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__22522__auto____1;
return cljs_http$core$xhr_$_state_machine__22522__auto__;
})()
;})(switch__22521__auto__,c__22586__auto___27799,channel,request_url,method,headers__$1,xhr__$1,map__27773,map__27773__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__22588__auto__ = (function (){var statearr_27798 = f__22587__auto__.call(null);
(statearr_27798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22586__auto___27799);

return statearr_27798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22588__auto__);
});})(c__22586__auto___27799,channel,request_url,method,headers__$1,xhr__$1,map__27773,map__27773__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__27806){
var map__27823 = p__27806;
var map__27823__$1 = ((((!((map__27823 == null)))?((((map__27823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27823):map__27823);
var request = map__27823__$1;
var timeout = cljs.core.get.call(null,map__27823__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__27823__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__27823__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_27839 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__27823,map__27823__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__27823,map__27823__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__27823,map__27823__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__27823,map__27823__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_27839], null));

if(cljs.core.truth_(cancel)){
var c__22586__auto___27840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22586__auto___27840,req_27839,channel,jsonp__$1,map__27823,map__27823__$1,request,timeout,callback_name,cancel){
return (function (){
var f__22587__auto__ = (function (){var switch__22521__auto__ = ((function (c__22586__auto___27840,req_27839,channel,jsonp__$1,map__27823,map__27823__$1,request,timeout,callback_name,cancel){
return (function (state_27829){
var state_val_27830 = (state_27829[(1)]);
if((state_val_27830 === (1))){
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27829__$1,(2),cancel);
} else {
if((state_val_27830 === (2))){
var inst_27826 = (state_27829[(2)]);
var inst_27827 = jsonp__$1.cancel(req_27839);
var state_27829__$1 = (function (){var statearr_27831 = state_27829;
(statearr_27831[(7)] = inst_27826);

return statearr_27831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27829__$1,inst_27827);
} else {
return null;
}
}
});})(c__22586__auto___27840,req_27839,channel,jsonp__$1,map__27823,map__27823__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__22521__auto__,c__22586__auto___27840,req_27839,channel,jsonp__$1,map__27823,map__27823__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__22522__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__22522__auto____0 = (function (){
var statearr_27835 = [null,null,null,null,null,null,null,null];
(statearr_27835[(0)] = cljs_http$core$jsonp_$_state_machine__22522__auto__);

(statearr_27835[(1)] = (1));

return statearr_27835;
});
var cljs_http$core$jsonp_$_state_machine__22522__auto____1 = (function (state_27829){
while(true){
var ret_value__22523__auto__ = (function (){try{while(true){
var result__22524__auto__ = switch__22521__auto__.call(null,state_27829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22524__auto__;
}
break;
}
}catch (e27836){if((e27836 instanceof Object)){
var ex__22525__auto__ = e27836;
var statearr_27837_27841 = state_27829;
(statearr_27837_27841[(5)] = ex__22525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27842 = state_27829;
state_27829 = G__27842;
continue;
} else {
return ret_value__22523__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__22522__auto__ = function(state_27829){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__22522__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__22522__auto____1.call(this,state_27829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__22522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__22522__auto____0;
cljs_http$core$jsonp_$_state_machine__22522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__22522__auto____1;
return cljs_http$core$jsonp_$_state_machine__22522__auto__;
})()
;})(switch__22521__auto__,c__22586__auto___27840,req_27839,channel,jsonp__$1,map__27823,map__27823__$1,request,timeout,callback_name,cancel))
})();
var state__22588__auto__ = (function (){var statearr_27838 = f__22587__auto__.call(null);
(statearr_27838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22586__auto___27840);

return statearr_27838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22588__auto__);
});})(c__22586__auto___27840,req_27839,channel,jsonp__$1,map__27823,map__27823__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__27843){
var map__27846 = p__27843;
var map__27846__$1 = ((((!((map__27846 == null)))?((((map__27846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27846):map__27846);
var request__$1 = map__27846__$1;
var request_method = cljs.core.get.call(null,map__27846__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map