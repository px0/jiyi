// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__19096__auto__ = v;
if(cljs.core.truth_(and__19096__auto__)){
return (v > (0));
} else {
return and__19096__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__27275_SHARP_,p2__27274_SHARP_){
var vec__27277 = clojure.string.split.call(null,p2__27274_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__27277,(0),null);
var v = cljs.core.nth.call(null,vec__27277,(1),null);
return cljs.core.assoc.call(null,p1__27275_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__27278_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__27278_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__27279){
var vec__27281 = p__27279;
var k = cljs.core.nth.call(null,vec__27281,(0),null);
var v = cljs.core.nth.call(null,vec__27281,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__27282_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__27282_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__19096__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__19096__auto__){
var and__19096__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__19096__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__19096__auto____$1;
}
} else {
return and__19096__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__27283_SHARP_){
return cljs_http.client.decode_body.call(null,p1__27283_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27288 = arguments.length;
var i__20168__auto___27289 = (0);
while(true){
if((i__20168__auto___27289 < len__20167__auto___27288)){
args__20174__auto__.push((arguments[i__20168__auto___27289]));

var G__27290 = (i__20168__auto___27289 + (1));
i__20168__auto___27289 = G__27290;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__27286){
var vec__27287 = p__27286;
var default_headers = cljs.core.nth.call(null,vec__27287,(0),null);
return ((function (vec__27287,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__19108__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19108__auto__)){
return or__19108__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__27287,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq27284){
var G__27285 = cljs.core.first.call(null,seq27284);
var seq27284__$1 = cljs.core.next.call(null,seq27284);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__27285,seq27284__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27295 = arguments.length;
var i__20168__auto___27296 = (0);
while(true){
if((i__20168__auto___27296 < len__20167__auto___27295)){
args__20174__auto__.push((arguments[i__20168__auto___27296]));

var G__27297 = (i__20168__auto___27296 + (1));
i__20168__auto___27296 = G__27297;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__27293){
var vec__27294 = p__27293;
var accept = cljs.core.nth.call(null,vec__27294,(0),null);
return ((function (vec__27294,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__19108__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19108__auto__)){
return or__19108__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__27294,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq27291){
var G__27292 = cljs.core.first.call(null,seq27291);
var seq27291__$1 = cljs.core.next.call(null,seq27291);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__27292,seq27291__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27302 = arguments.length;
var i__20168__auto___27303 = (0);
while(true){
if((i__20168__auto___27303 < len__20167__auto___27302)){
args__20174__auto__.push((arguments[i__20168__auto___27303]));

var G__27304 = (i__20168__auto___27303 + (1));
i__20168__auto___27303 = G__27304;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__27300){
var vec__27301 = p__27300;
var content_type = cljs.core.nth.call(null,vec__27301,(0),null);
return ((function (vec__27301,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__19108__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19108__auto__)){
return or__19108__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__27301,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq27298){
var G__27299 = cljs.core.first.call(null,seq27298);
var seq27298__$1 = cljs.core.next.call(null,seq27298);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__27299,seq27298__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__27307 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__27307__$1 = ((((!((map__27307 == null)))?((((map__27307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27307):map__27307);
var encoding = cljs.core.get.call(null,map__27307__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__27307__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__27313 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__27313__$1 = ((((!((map__27313 == null)))?((((map__27313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27313):map__27313);
var decoding = cljs.core.get.call(null,map__27313__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__27313__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__27313,map__27313__$1,decoding,decoding_opts){
return (function (p1__27309_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__27309_SHARP_,decoding,decoding_opts);
});})(map__27313,map__27313__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__27313,map__27313__$1,decoding,decoding_opts,transit_decode){
return (function (p1__27310_SHARP_){
return cljs_http.client.decode_body.call(null,p1__27310_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__27313,map__27313__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__27315_SHARP_){
return cljs_http.client.decode_body.call(null,p1__27315_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__27319){
var map__27320 = p__27319;
var map__27320__$1 = ((((!((map__27320 == null)))?((((map__27320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27320):map__27320);
var req = map__27320__$1;
var query_params = cljs.core.get.call(null,map__27320__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__27325){
var map__27326 = p__27325;
var map__27326__$1 = ((((!((map__27326 == null)))?((((map__27326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27326):map__27326);
var request = map__27326__$1;
var form_params = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__19096__auto__ = form_params;
if(cljs.core.truth_(and__19096__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__19096__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__27334_27340 = cljs.core.seq.call(null,params);
var chunk__27335_27341 = null;
var count__27336_27342 = (0);
var i__27337_27343 = (0);
while(true){
if((i__27337_27343 < count__27336_27342)){
var vec__27338_27344 = cljs.core._nth.call(null,chunk__27335_27341,i__27337_27343);
var k_27345 = cljs.core.nth.call(null,vec__27338_27344,(0),null);
var v_27346 = cljs.core.nth.call(null,vec__27338_27344,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_27346)){
form_data.append(cljs.core.name.call(null,k_27345),cljs.core.first.call(null,v_27346),cljs.core.second.call(null,v_27346));
} else {
form_data.append(cljs.core.name.call(null,k_27345),v_27346);
}

var G__27347 = seq__27334_27340;
var G__27348 = chunk__27335_27341;
var G__27349 = count__27336_27342;
var G__27350 = (i__27337_27343 + (1));
seq__27334_27340 = G__27347;
chunk__27335_27341 = G__27348;
count__27336_27342 = G__27349;
i__27337_27343 = G__27350;
continue;
} else {
var temp__4425__auto___27351 = cljs.core.seq.call(null,seq__27334_27340);
if(temp__4425__auto___27351){
var seq__27334_27352__$1 = temp__4425__auto___27351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27334_27352__$1)){
var c__19912__auto___27353 = cljs.core.chunk_first.call(null,seq__27334_27352__$1);
var G__27354 = cljs.core.chunk_rest.call(null,seq__27334_27352__$1);
var G__27355 = c__19912__auto___27353;
var G__27356 = cljs.core.count.call(null,c__19912__auto___27353);
var G__27357 = (0);
seq__27334_27340 = G__27354;
chunk__27335_27341 = G__27355;
count__27336_27342 = G__27356;
i__27337_27343 = G__27357;
continue;
} else {
var vec__27339_27358 = cljs.core.first.call(null,seq__27334_27352__$1);
var k_27359 = cljs.core.nth.call(null,vec__27339_27358,(0),null);
var v_27360 = cljs.core.nth.call(null,vec__27339_27358,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_27360)){
form_data.append(cljs.core.name.call(null,k_27359),cljs.core.first.call(null,v_27360),cljs.core.second.call(null,v_27360));
} else {
form_data.append(cljs.core.name.call(null,k_27359),v_27360);
}

var G__27361 = cljs.core.next.call(null,seq__27334_27352__$1);
var G__27362 = null;
var G__27363 = (0);
var G__27364 = (0);
seq__27334_27340 = G__27361;
chunk__27335_27341 = G__27362;
count__27336_27342 = G__27363;
i__27337_27343 = G__27364;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__27368){
var map__27369 = p__27368;
var map__27369__$1 = ((((!((map__27369 == null)))?((((map__27369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27369):map__27369);
var request = map__27369__$1;
var multipart_params = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__19096__auto__ = multipart_params;
if(cljs.core.truth_(and__19096__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__19096__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__27371_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__27371_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__27376){
var map__27377 = p__27376;
var map__27377__$1 = ((((!((map__27377 == null)))?((((map__27377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27377):map__27377);
var req = map__27377__$1;
var query_params = cljs.core.get.call(null,map__27377__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__27377,map__27377__$1,req,query_params){
return (function (p1__27372_SHARP_){
return cljs.core.merge.call(null,p1__27372_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__27377,map__27377__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27383 = arguments.length;
var i__20168__auto___27384 = (0);
while(true){
if((i__20168__auto___27384 < len__20167__auto___27383)){
args__20174__auto__.push((arguments[i__20168__auto___27384]));

var G__27385 = (i__20168__auto___27384 + (1));
i__20168__auto___27384 = G__27385;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__27381){
var vec__27382 = p__27381;
var credentials = cljs.core.nth.call(null,vec__27382,(0),null);
return ((function (vec__27382,credentials){
return (function (req){
var credentials__$1 = (function (){var or__19108__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__19108__auto__)){
return or__19108__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__27382,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq27379){
var G__27380 = cljs.core.first.call(null,seq27379);
var seq27379__$1 = cljs.core.next.call(null,seq27379);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__27380,seq27379__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27390 = arguments.length;
var i__20168__auto___27391 = (0);
while(true){
if((i__20168__auto___27391 < len__20167__auto___27390)){
args__20174__auto__.push((arguments[i__20168__auto___27391]));

var G__27392 = (i__20168__auto___27391 + (1));
i__20168__auto___27391 = G__27392;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27388){
var vec__27389 = p__27388;
var req = cljs.core.nth.call(null,vec__27389,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq27386){
var G__27387 = cljs.core.first.call(null,seq27386);
var seq27386__$1 = cljs.core.next.call(null,seq27386);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__27387,seq27386__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27397 = arguments.length;
var i__20168__auto___27398 = (0);
while(true){
if((i__20168__auto___27398 < len__20167__auto___27397)){
args__20174__auto__.push((arguments[i__20168__auto___27398]));

var G__27399 = (i__20168__auto___27398 + (1));
i__20168__auto___27398 = G__27399;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27395){
var vec__27396 = p__27395;
var req = cljs.core.nth.call(null,vec__27396,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq27393){
var G__27394 = cljs.core.first.call(null,seq27393);
var seq27393__$1 = cljs.core.next.call(null,seq27393);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__27394,seq27393__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27404 = arguments.length;
var i__20168__auto___27405 = (0);
while(true){
if((i__20168__auto___27405 < len__20167__auto___27404)){
args__20174__auto__.push((arguments[i__20168__auto___27405]));

var G__27406 = (i__20168__auto___27405 + (1));
i__20168__auto___27405 = G__27406;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27402){
var vec__27403 = p__27402;
var req = cljs.core.nth.call(null,vec__27403,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq27400){
var G__27401 = cljs.core.first.call(null,seq27400);
var seq27400__$1 = cljs.core.next.call(null,seq27400);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__27401,seq27400__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27411 = arguments.length;
var i__20168__auto___27412 = (0);
while(true){
if((i__20168__auto___27412 < len__20167__auto___27411)){
args__20174__auto__.push((arguments[i__20168__auto___27412]));

var G__27413 = (i__20168__auto___27412 + (1));
i__20168__auto___27412 = G__27413;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27409){
var vec__27410 = p__27409;
var req = cljs.core.nth.call(null,vec__27410,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq27407){
var G__27408 = cljs.core.first.call(null,seq27407);
var seq27407__$1 = cljs.core.next.call(null,seq27407);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__27408,seq27407__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27418 = arguments.length;
var i__20168__auto___27419 = (0);
while(true){
if((i__20168__auto___27419 < len__20167__auto___27418)){
args__20174__auto__.push((arguments[i__20168__auto___27419]));

var G__27420 = (i__20168__auto___27419 + (1));
i__20168__auto___27419 = G__27420;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27416){
var vec__27417 = p__27416;
var req = cljs.core.nth.call(null,vec__27417,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq27414){
var G__27415 = cljs.core.first.call(null,seq27414);
var seq27414__$1 = cljs.core.next.call(null,seq27414);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__27415,seq27414__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27425 = arguments.length;
var i__20168__auto___27426 = (0);
while(true){
if((i__20168__auto___27426 < len__20167__auto___27425)){
args__20174__auto__.push((arguments[i__20168__auto___27426]));

var G__27427 = (i__20168__auto___27426 + (1));
i__20168__auto___27426 = G__27427;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27423){
var vec__27424 = p__27423;
var req = cljs.core.nth.call(null,vec__27424,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq27421){
var G__27422 = cljs.core.first.call(null,seq27421);
var seq27421__$1 = cljs.core.next.call(null,seq27421);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__27422,seq27421__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27432 = arguments.length;
var i__20168__auto___27433 = (0);
while(true){
if((i__20168__auto___27433 < len__20167__auto___27432)){
args__20174__auto__.push((arguments[i__20168__auto___27433]));

var G__27434 = (i__20168__auto___27433 + (1));
i__20168__auto___27433 = G__27434;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27430){
var vec__27431 = p__27430;
var req = cljs.core.nth.call(null,vec__27431,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq27428){
var G__27429 = cljs.core.first.call(null,seq27428);
var seq27428__$1 = cljs.core.next.call(null,seq27428);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__27429,seq27428__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27439 = arguments.length;
var i__20168__auto___27440 = (0);
while(true){
if((i__20168__auto___27440 < len__20167__auto___27439)){
args__20174__auto__.push((arguments[i__20168__auto___27440]));

var G__27441 = (i__20168__auto___27440 + (1));
i__20168__auto___27440 = G__27441;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27437){
var vec__27438 = p__27437;
var req = cljs.core.nth.call(null,vec__27438,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq27435){
var G__27436 = cljs.core.first.call(null,seq27435);
var seq27435__$1 = cljs.core.next.call(null,seq27435);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__27436,seq27435__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__20174__auto__ = [];
var len__20167__auto___27446 = arguments.length;
var i__20168__auto___27447 = (0);
while(true){
if((i__20168__auto___27447 < len__20167__auto___27446)){
args__20174__auto__.push((arguments[i__20168__auto___27447]));

var G__27448 = (i__20168__auto___27447 + (1));
i__20168__auto___27447 = G__27448;
continue;
} else {
}
break;
}

var argseq__20175__auto__ = ((((1) < args__20174__auto__.length))?(new cljs.core.IndexedSeq(args__20174__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20175__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27444){
var vec__27445 = p__27444;
var req = cljs.core.nth.call(null,vec__27445,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq27442){
var G__27443 = cljs.core.first.call(null,seq27442);
var seq27442__$1 = cljs.core.next.call(null,seq27442);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__27443,seq27442__$1);
});

//# sourceMappingURL=client.js.map