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
if(cljs.core.truth_((function (){var and__19108__auto__ = v;
if(cljs.core.truth_(and__19108__auto__)){
return (v > (0));
} else {
return and__19108__auto__;
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
return cljs.core.reduce.call(null,(function (p1__47318_SHARP_,p2__47317_SHARP_){
var vec__47320 = clojure.string.split.call(null,p2__47317_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__47320,(0),null);
var v = cljs.core.nth.call(null,vec__47320,(1),null);
return cljs.core.assoc.call(null,p1__47318_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__47321_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__47321_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__47322){
var vec__47324 = p__47322;
var k = cljs.core.nth.call(null,vec__47324,(0),null);
var v = cljs.core.nth.call(null,vec__47324,(1),null);
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
return (function (p1__47325_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__47325_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__19108__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__19108__auto__){
var and__19108__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__19108__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__19108__auto____$1;
}
} else {
return and__19108__auto__;
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
return cljs.core.async.map.call(null,(function (p1__47326_SHARP_){
return cljs_http.client.decode_body.call(null,p1__47326_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47331 = arguments.length;
var i__20179__auto___47332 = (0);
while(true){
if((i__20179__auto___47332 < len__20178__auto___47331)){
args__20185__auto__.push((arguments[i__20179__auto___47332]));

var G__47333 = (i__20179__auto___47332 + (1));
i__20179__auto___47332 = G__47333;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__47329){
var vec__47330 = p__47329;
var default_headers = cljs.core.nth.call(null,vec__47330,(0),null);
return ((function (vec__47330,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__19120__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19120__auto__)){
return or__19120__auto__;
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
;})(vec__47330,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq47327){
var G__47328 = cljs.core.first.call(null,seq47327);
var seq47327__$1 = cljs.core.next.call(null,seq47327);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__47328,seq47327__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47338 = arguments.length;
var i__20179__auto___47339 = (0);
while(true){
if((i__20179__auto___47339 < len__20178__auto___47338)){
args__20185__auto__.push((arguments[i__20179__auto___47339]));

var G__47340 = (i__20179__auto___47339 + (1));
i__20179__auto___47339 = G__47340;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__47336){
var vec__47337 = p__47336;
var accept = cljs.core.nth.call(null,vec__47337,(0),null);
return ((function (vec__47337,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__19120__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19120__auto__)){
return or__19120__auto__;
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
;})(vec__47337,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq47334){
var G__47335 = cljs.core.first.call(null,seq47334);
var seq47334__$1 = cljs.core.next.call(null,seq47334);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__47335,seq47334__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47345 = arguments.length;
var i__20179__auto___47346 = (0);
while(true){
if((i__20179__auto___47346 < len__20178__auto___47345)){
args__20185__auto__.push((arguments[i__20179__auto___47346]));

var G__47347 = (i__20179__auto___47346 + (1));
i__20179__auto___47346 = G__47347;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__47343){
var vec__47344 = p__47343;
var content_type = cljs.core.nth.call(null,vec__47344,(0),null);
return ((function (vec__47344,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__19120__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19120__auto__)){
return or__19120__auto__;
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
;})(vec__47344,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq47341){
var G__47342 = cljs.core.first.call(null,seq47341);
var seq47341__$1 = cljs.core.next.call(null,seq47341);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__47342,seq47341__$1);
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
var map__47350 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__47350__$1 = ((((!((map__47350 == null)))?((((map__47350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47350):map__47350);
var encoding = cljs.core.get.call(null,map__47350__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__47350__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__47356 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__47356__$1 = ((((!((map__47356 == null)))?((((map__47356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47356):map__47356);
var decoding = cljs.core.get.call(null,map__47356__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__47356__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__47356,map__47356__$1,decoding,decoding_opts){
return (function (p1__47352_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__47352_SHARP_,decoding,decoding_opts);
});})(map__47356,map__47356__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__47356,map__47356__$1,decoding,decoding_opts,transit_decode){
return (function (p1__47353_SHARP_){
return cljs_http.client.decode_body.call(null,p1__47353_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__47356,map__47356__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__47358_SHARP_){
return cljs_http.client.decode_body.call(null,p1__47358_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__47362){
var map__47363 = p__47362;
var map__47363__$1 = ((((!((map__47363 == null)))?((((map__47363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47363):map__47363);
var req = map__47363__$1;
var query_params = cljs.core.get.call(null,map__47363__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__47368){
var map__47369 = p__47368;
var map__47369__$1 = ((((!((map__47369 == null)))?((((map__47369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47369):map__47369);
var request = map__47369__$1;
var form_params = cljs.core.get.call(null,map__47369__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__47369__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__47369__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__19108__auto__ = form_params;
if(cljs.core.truth_(and__19108__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__19108__auto__;
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
var seq__47377_47383 = cljs.core.seq.call(null,params);
var chunk__47378_47384 = null;
var count__47379_47385 = (0);
var i__47380_47386 = (0);
while(true){
if((i__47380_47386 < count__47379_47385)){
var vec__47381_47387 = cljs.core._nth.call(null,chunk__47378_47384,i__47380_47386);
var k_47388 = cljs.core.nth.call(null,vec__47381_47387,(0),null);
var v_47389 = cljs.core.nth.call(null,vec__47381_47387,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_47389)){
form_data.append(cljs.core.name.call(null,k_47388),cljs.core.first.call(null,v_47389),cljs.core.second.call(null,v_47389));
} else {
form_data.append(cljs.core.name.call(null,k_47388),v_47389);
}

var G__47390 = seq__47377_47383;
var G__47391 = chunk__47378_47384;
var G__47392 = count__47379_47385;
var G__47393 = (i__47380_47386 + (1));
seq__47377_47383 = G__47390;
chunk__47378_47384 = G__47391;
count__47379_47385 = G__47392;
i__47380_47386 = G__47393;
continue;
} else {
var temp__4425__auto___47394 = cljs.core.seq.call(null,seq__47377_47383);
if(temp__4425__auto___47394){
var seq__47377_47395__$1 = temp__4425__auto___47394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47377_47395__$1)){
var c__19923__auto___47396 = cljs.core.chunk_first.call(null,seq__47377_47395__$1);
var G__47397 = cljs.core.chunk_rest.call(null,seq__47377_47395__$1);
var G__47398 = c__19923__auto___47396;
var G__47399 = cljs.core.count.call(null,c__19923__auto___47396);
var G__47400 = (0);
seq__47377_47383 = G__47397;
chunk__47378_47384 = G__47398;
count__47379_47385 = G__47399;
i__47380_47386 = G__47400;
continue;
} else {
var vec__47382_47401 = cljs.core.first.call(null,seq__47377_47395__$1);
var k_47402 = cljs.core.nth.call(null,vec__47382_47401,(0),null);
var v_47403 = cljs.core.nth.call(null,vec__47382_47401,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_47403)){
form_data.append(cljs.core.name.call(null,k_47402),cljs.core.first.call(null,v_47403),cljs.core.second.call(null,v_47403));
} else {
form_data.append(cljs.core.name.call(null,k_47402),v_47403);
}

var G__47404 = cljs.core.next.call(null,seq__47377_47395__$1);
var G__47405 = null;
var G__47406 = (0);
var G__47407 = (0);
seq__47377_47383 = G__47404;
chunk__47378_47384 = G__47405;
count__47379_47385 = G__47406;
i__47380_47386 = G__47407;
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
return (function (p__47411){
var map__47412 = p__47411;
var map__47412__$1 = ((((!((map__47412 == null)))?((((map__47412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47412):map__47412);
var request = map__47412__$1;
var multipart_params = cljs.core.get.call(null,map__47412__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__47412__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__19108__auto__ = multipart_params;
if(cljs.core.truth_(and__19108__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__19108__auto__;
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
return (function (p1__47414_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__47414_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__47419){
var map__47420 = p__47419;
var map__47420__$1 = ((((!((map__47420 == null)))?((((map__47420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47420):map__47420);
var req = map__47420__$1;
var query_params = cljs.core.get.call(null,map__47420__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__47420,map__47420__$1,req,query_params){
return (function (p1__47415_SHARP_){
return cljs.core.merge.call(null,p1__47415_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__47420,map__47420__$1,req,query_params))
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
var args__20185__auto__ = [];
var len__20178__auto___47426 = arguments.length;
var i__20179__auto___47427 = (0);
while(true){
if((i__20179__auto___47427 < len__20178__auto___47426)){
args__20185__auto__.push((arguments[i__20179__auto___47427]));

var G__47428 = (i__20179__auto___47427 + (1));
i__20179__auto___47427 = G__47428;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__47424){
var vec__47425 = p__47424;
var credentials = cljs.core.nth.call(null,vec__47425,(0),null);
return ((function (vec__47425,credentials){
return (function (req){
var credentials__$1 = (function (){var or__19120__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__19120__auto__)){
return or__19120__auto__;
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
;})(vec__47425,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq47422){
var G__47423 = cljs.core.first.call(null,seq47422);
var seq47422__$1 = cljs.core.next.call(null,seq47422);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__47423,seq47422__$1);
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
var args__20185__auto__ = [];
var len__20178__auto___47433 = arguments.length;
var i__20179__auto___47434 = (0);
while(true){
if((i__20179__auto___47434 < len__20178__auto___47433)){
args__20185__auto__.push((arguments[i__20179__auto___47434]));

var G__47435 = (i__20179__auto___47434 + (1));
i__20179__auto___47434 = G__47435;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47431){
var vec__47432 = p__47431;
var req = cljs.core.nth.call(null,vec__47432,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq47429){
var G__47430 = cljs.core.first.call(null,seq47429);
var seq47429__$1 = cljs.core.next.call(null,seq47429);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__47430,seq47429__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47440 = arguments.length;
var i__20179__auto___47441 = (0);
while(true){
if((i__20179__auto___47441 < len__20178__auto___47440)){
args__20185__auto__.push((arguments[i__20179__auto___47441]));

var G__47442 = (i__20179__auto___47441 + (1));
i__20179__auto___47441 = G__47442;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47438){
var vec__47439 = p__47438;
var req = cljs.core.nth.call(null,vec__47439,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq47436){
var G__47437 = cljs.core.first.call(null,seq47436);
var seq47436__$1 = cljs.core.next.call(null,seq47436);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__47437,seq47436__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47447 = arguments.length;
var i__20179__auto___47448 = (0);
while(true){
if((i__20179__auto___47448 < len__20178__auto___47447)){
args__20185__auto__.push((arguments[i__20179__auto___47448]));

var G__47449 = (i__20179__auto___47448 + (1));
i__20179__auto___47448 = G__47449;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47445){
var vec__47446 = p__47445;
var req = cljs.core.nth.call(null,vec__47446,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq47443){
var G__47444 = cljs.core.first.call(null,seq47443);
var seq47443__$1 = cljs.core.next.call(null,seq47443);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__47444,seq47443__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47454 = arguments.length;
var i__20179__auto___47455 = (0);
while(true){
if((i__20179__auto___47455 < len__20178__auto___47454)){
args__20185__auto__.push((arguments[i__20179__auto___47455]));

var G__47456 = (i__20179__auto___47455 + (1));
i__20179__auto___47455 = G__47456;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47452){
var vec__47453 = p__47452;
var req = cljs.core.nth.call(null,vec__47453,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq47450){
var G__47451 = cljs.core.first.call(null,seq47450);
var seq47450__$1 = cljs.core.next.call(null,seq47450);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__47451,seq47450__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47461 = arguments.length;
var i__20179__auto___47462 = (0);
while(true){
if((i__20179__auto___47462 < len__20178__auto___47461)){
args__20185__auto__.push((arguments[i__20179__auto___47462]));

var G__47463 = (i__20179__auto___47462 + (1));
i__20179__auto___47462 = G__47463;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47459){
var vec__47460 = p__47459;
var req = cljs.core.nth.call(null,vec__47460,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq47457){
var G__47458 = cljs.core.first.call(null,seq47457);
var seq47457__$1 = cljs.core.next.call(null,seq47457);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__47458,seq47457__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47468 = arguments.length;
var i__20179__auto___47469 = (0);
while(true){
if((i__20179__auto___47469 < len__20178__auto___47468)){
args__20185__auto__.push((arguments[i__20179__auto___47469]));

var G__47470 = (i__20179__auto___47469 + (1));
i__20179__auto___47469 = G__47470;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47466){
var vec__47467 = p__47466;
var req = cljs.core.nth.call(null,vec__47467,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq47464){
var G__47465 = cljs.core.first.call(null,seq47464);
var seq47464__$1 = cljs.core.next.call(null,seq47464);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__47465,seq47464__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47475 = arguments.length;
var i__20179__auto___47476 = (0);
while(true){
if((i__20179__auto___47476 < len__20178__auto___47475)){
args__20185__auto__.push((arguments[i__20179__auto___47476]));

var G__47477 = (i__20179__auto___47476 + (1));
i__20179__auto___47476 = G__47477;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47473){
var vec__47474 = p__47473;
var req = cljs.core.nth.call(null,vec__47474,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq47471){
var G__47472 = cljs.core.first.call(null,seq47471);
var seq47471__$1 = cljs.core.next.call(null,seq47471);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__47472,seq47471__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47482 = arguments.length;
var i__20179__auto___47483 = (0);
while(true){
if((i__20179__auto___47483 < len__20178__auto___47482)){
args__20185__auto__.push((arguments[i__20179__auto___47483]));

var G__47484 = (i__20179__auto___47483 + (1));
i__20179__auto___47483 = G__47484;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47480){
var vec__47481 = p__47480;
var req = cljs.core.nth.call(null,vec__47481,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq47478){
var G__47479 = cljs.core.first.call(null,seq47478);
var seq47478__$1 = cljs.core.next.call(null,seq47478);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__47479,seq47478__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__20185__auto__ = [];
var len__20178__auto___47489 = arguments.length;
var i__20179__auto___47490 = (0);
while(true){
if((i__20179__auto___47490 < len__20178__auto___47489)){
args__20185__auto__.push((arguments[i__20179__auto___47490]));

var G__47491 = (i__20179__auto___47490 + (1));
i__20179__auto___47490 = G__47491;
continue;
} else {
}
break;
}

var argseq__20186__auto__ = ((((1) < args__20185__auto__.length))?(new cljs.core.IndexedSeq(args__20185__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20186__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47487){
var vec__47488 = p__47487;
var req = cljs.core.nth.call(null,vec__47488,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq47485){
var G__47486 = cljs.core.first.call(null,seq47485);
var seq47485__$1 = cljs.core.next.call(null,seq47485);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__47486,seq47485__$1);
});

//# sourceMappingURL=client.js.map