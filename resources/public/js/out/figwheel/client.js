// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27096__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27097__i = 0, G__27097__a = new Array(arguments.length -  0);
while (G__27097__i < G__27097__a.length) {G__27097__a[G__27097__i] = arguments[G__27097__i + 0]; ++G__27097__i;}
  args = new cljs.core.IndexedSeq(G__27097__a,0);
} 
return G__27096__delegate.call(this,args);};
G__27096.cljs$lang$maxFixedArity = 0;
G__27096.cljs$lang$applyTo = (function (arglist__27098){
var args = cljs.core.seq(arglist__27098);
return G__27096__delegate(args);
});
G__27096.cljs$core$IFn$_invoke$arity$variadic = G__27096__delegate;
return G__27096;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27099){
var map__27102 = p__27099;
var map__27102__$1 = ((((!((map__27102 == null)))?((((map__27102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27102):map__27102);
var message = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19116__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19116__auto__)){
return or__19116__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19104__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19104__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19104__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22596__auto___27250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___27250,ch){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___27250,ch){
return (function (state_27220){
var state_val_27221 = (state_27220[(1)]);
if((state_val_27221 === (7))){
var inst_27216 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27222_27251 = state_27220__$1;
(statearr_27222_27251[(2)] = inst_27216);

(statearr_27222_27251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (1))){
var state_27220__$1 = state_27220;
var statearr_27223_27252 = state_27220__$1;
(statearr_27223_27252[(2)] = null);

(statearr_27223_27252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (4))){
var inst_27179 = (state_27220[(7)]);
var inst_27179__$1 = (state_27220[(2)]);
var state_27220__$1 = (function (){var statearr_27224 = state_27220;
(statearr_27224[(7)] = inst_27179__$1);

return statearr_27224;
})();
if(cljs.core.truth_(inst_27179__$1)){
var statearr_27225_27253 = state_27220__$1;
(statearr_27225_27253[(1)] = (5));

} else {
var statearr_27226_27254 = state_27220__$1;
(statearr_27226_27254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (15))){
var inst_27186 = (state_27220[(8)]);
var inst_27201 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27186);
var inst_27202 = cljs.core.first.call(null,inst_27201);
var inst_27203 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27202);
var inst_27204 = console.warn("Figwheel: Not loading code with warnings - ",inst_27203);
var state_27220__$1 = state_27220;
var statearr_27227_27255 = state_27220__$1;
(statearr_27227_27255[(2)] = inst_27204);

(statearr_27227_27255[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (13))){
var inst_27209 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27228_27256 = state_27220__$1;
(statearr_27228_27256[(2)] = inst_27209);

(statearr_27228_27256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (6))){
var state_27220__$1 = state_27220;
var statearr_27229_27257 = state_27220__$1;
(statearr_27229_27257[(2)] = null);

(statearr_27229_27257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (17))){
var inst_27207 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27230_27258 = state_27220__$1;
(statearr_27230_27258[(2)] = inst_27207);

(statearr_27230_27258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (3))){
var inst_27218 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27220__$1,inst_27218);
} else {
if((state_val_27221 === (12))){
var inst_27185 = (state_27220[(9)]);
var inst_27199 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27185,opts);
var state_27220__$1 = state_27220;
if(cljs.core.truth_(inst_27199)){
var statearr_27231_27259 = state_27220__$1;
(statearr_27231_27259[(1)] = (15));

} else {
var statearr_27232_27260 = state_27220__$1;
(statearr_27232_27260[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (2))){
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27220__$1,(4),ch);
} else {
if((state_val_27221 === (11))){
var inst_27186 = (state_27220[(8)]);
var inst_27191 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27192 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27186);
var inst_27193 = cljs.core.async.timeout.call(null,(1000));
var inst_27194 = [inst_27192,inst_27193];
var inst_27195 = (new cljs.core.PersistentVector(null,2,(5),inst_27191,inst_27194,null));
var state_27220__$1 = state_27220;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27220__$1,(14),inst_27195);
} else {
if((state_val_27221 === (9))){
var state_27220__$1 = state_27220;
var statearr_27233_27261 = state_27220__$1;
(statearr_27233_27261[(2)] = null);

(statearr_27233_27261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (5))){
var inst_27179 = (state_27220[(7)]);
var inst_27181 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27182 = (new cljs.core.PersistentArrayMap(null,2,inst_27181,null));
var inst_27183 = (new cljs.core.PersistentHashSet(null,inst_27182,null));
var inst_27184 = figwheel.client.focus_msgs.call(null,inst_27183,inst_27179);
var inst_27185 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27184);
var inst_27186 = cljs.core.first.call(null,inst_27184);
var inst_27187 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_27220__$1 = (function (){var statearr_27234 = state_27220;
(statearr_27234[(9)] = inst_27185);

(statearr_27234[(8)] = inst_27186);

return statearr_27234;
})();
if(cljs.core.truth_(inst_27187)){
var statearr_27235_27262 = state_27220__$1;
(statearr_27235_27262[(1)] = (8));

} else {
var statearr_27236_27263 = state_27220__$1;
(statearr_27236_27263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (14))){
var inst_27197 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27237_27264 = state_27220__$1;
(statearr_27237_27264[(2)] = inst_27197);

(statearr_27237_27264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (16))){
var state_27220__$1 = state_27220;
var statearr_27238_27265 = state_27220__$1;
(statearr_27238_27265[(2)] = null);

(statearr_27238_27265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (10))){
var inst_27212 = (state_27220[(2)]);
var state_27220__$1 = (function (){var statearr_27239 = state_27220;
(statearr_27239[(10)] = inst_27212);

return statearr_27239;
})();
var statearr_27240_27266 = state_27220__$1;
(statearr_27240_27266[(2)] = null);

(statearr_27240_27266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27221 === (8))){
var inst_27185 = (state_27220[(9)]);
var inst_27189 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27185,opts);
var state_27220__$1 = state_27220;
if(cljs.core.truth_(inst_27189)){
var statearr_27241_27267 = state_27220__$1;
(statearr_27241_27267[(1)] = (11));

} else {
var statearr_27242_27268 = state_27220__$1;
(statearr_27242_27268[(1)] = (12));

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
});})(c__22596__auto___27250,ch))
;
return ((function (switch__22531__auto__,c__22596__auto___27250,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22532__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22532__auto____0 = (function (){
var statearr_27246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27246[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22532__auto__);

(statearr_27246[(1)] = (1));

return statearr_27246;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22532__auto____1 = (function (state_27220){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_27220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e27247){if((e27247 instanceof Object)){
var ex__22535__auto__ = e27247;
var statearr_27248_27269 = state_27220;
(statearr_27248_27269[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27270 = state_27220;
state_27220 = G__27270;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22532__auto__ = function(state_27220){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22532__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22532__auto____1.call(this,state_27220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22532__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22532__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___27250,ch))
})();
var state__22598__auto__ = (function (){var statearr_27249 = f__22597__auto__.call(null);
(statearr_27249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___27250);

return statearr_27249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___27250,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27271_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27271_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27278 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27278){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27276 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27277 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27276,_STAR_print_newline_STAR_27277,base_path_27278){
return (function() { 
var G__27279__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27280__i = 0, G__27280__a = new Array(arguments.length -  0);
while (G__27280__i < G__27280__a.length) {G__27280__a[G__27280__i] = arguments[G__27280__i + 0]; ++G__27280__i;}
  args = new cljs.core.IndexedSeq(G__27280__a,0);
} 
return G__27279__delegate.call(this,args);};
G__27279.cljs$lang$maxFixedArity = 0;
G__27279.cljs$lang$applyTo = (function (arglist__27281){
var args = cljs.core.seq(arglist__27281);
return G__27279__delegate(args);
});
G__27279.cljs$core$IFn$_invoke$arity$variadic = G__27279__delegate;
return G__27279;
})()
;})(_STAR_print_fn_STAR_27276,_STAR_print_newline_STAR_27277,base_path_27278))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27277;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27276;
}}catch (e27275){if((e27275 instanceof Error)){
var e = e27275;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27278], null));
} else {
var e = e27275;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27278))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27282){
var map__27289 = p__27282;
var map__27289__$1 = ((((!((map__27289 == null)))?((((map__27289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27289):map__27289);
var opts = map__27289__$1;
var build_id = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27289,map__27289__$1,opts,build_id){
return (function (p__27291){
var vec__27292 = p__27291;
var map__27293 = cljs.core.nth.call(null,vec__27292,(0),null);
var map__27293__$1 = ((((!((map__27293 == null)))?((((map__27293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27293):map__27293);
var msg = map__27293__$1;
var msg_name = cljs.core.get.call(null,map__27293__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27292,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27292,map__27293,map__27293__$1,msg,msg_name,_,map__27289,map__27289__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27292,map__27293,map__27293__$1,msg,msg_name,_,map__27289,map__27289__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27289,map__27289__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27299){
var vec__27300 = p__27299;
var map__27301 = cljs.core.nth.call(null,vec__27300,(0),null);
var map__27301__$1 = ((((!((map__27301 == null)))?((((map__27301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27301):map__27301);
var msg = map__27301__$1;
var msg_name = cljs.core.get.call(null,map__27301__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27300,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27303){
var map__27313 = p__27303;
var map__27313__$1 = ((((!((map__27313 == null)))?((((map__27313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27313):map__27313);
var on_compile_warning = cljs.core.get.call(null,map__27313__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27313__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27313,map__27313__$1,on_compile_warning,on_compile_fail){
return (function (p__27315){
var vec__27316 = p__27315;
var map__27317 = cljs.core.nth.call(null,vec__27316,(0),null);
var map__27317__$1 = ((((!((map__27317 == null)))?((((map__27317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27317):map__27317);
var msg = map__27317__$1;
var msg_name = cljs.core.get.call(null,map__27317__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27316,(1));
var pred__27319 = cljs.core._EQ_;
var expr__27320 = msg_name;
if(cljs.core.truth_(pred__27319.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27320))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27319.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27320))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27313,map__27313__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__,msg_hist,msg_names,msg){
return (function (state_27536){
var state_val_27537 = (state_27536[(1)]);
if((state_val_27537 === (7))){
var inst_27460 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27460)){
var statearr_27538_27584 = state_27536__$1;
(statearr_27538_27584[(1)] = (8));

} else {
var statearr_27539_27585 = state_27536__$1;
(statearr_27539_27585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (20))){
var inst_27530 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27540_27586 = state_27536__$1;
(statearr_27540_27586[(2)] = inst_27530);

(statearr_27540_27586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (27))){
var inst_27526 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27541_27587 = state_27536__$1;
(statearr_27541_27587[(2)] = inst_27526);

(statearr_27541_27587[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (1))){
var inst_27453 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27453)){
var statearr_27542_27588 = state_27536__$1;
(statearr_27542_27588[(1)] = (2));

} else {
var statearr_27543_27589 = state_27536__$1;
(statearr_27543_27589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (24))){
var inst_27528 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27544_27590 = state_27536__$1;
(statearr_27544_27590[(2)] = inst_27528);

(statearr_27544_27590[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (4))){
var inst_27534 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27536__$1,inst_27534);
} else {
if((state_val_27537 === (15))){
var inst_27532 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27545_27591 = state_27536__$1;
(statearr_27545_27591[(2)] = inst_27532);

(statearr_27545_27591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (21))){
var inst_27491 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27546_27592 = state_27536__$1;
(statearr_27546_27592[(2)] = inst_27491);

(statearr_27546_27592[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (31))){
var inst_27515 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27515)){
var statearr_27547_27593 = state_27536__$1;
(statearr_27547_27593[(1)] = (34));

} else {
var statearr_27548_27594 = state_27536__$1;
(statearr_27548_27594[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (32))){
var inst_27524 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27549_27595 = state_27536__$1;
(statearr_27549_27595[(2)] = inst_27524);

(statearr_27549_27595[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (33))){
var inst_27513 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27550_27596 = state_27536__$1;
(statearr_27550_27596[(2)] = inst_27513);

(statearr_27550_27596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (13))){
var inst_27474 = figwheel.client.heads_up.clear.call(null);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(16),inst_27474);
} else {
if((state_val_27537 === (22))){
var inst_27495 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27496 = figwheel.client.heads_up.append_message.call(null,inst_27495);
var state_27536__$1 = state_27536;
var statearr_27551_27597 = state_27536__$1;
(statearr_27551_27597[(2)] = inst_27496);

(statearr_27551_27597[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (36))){
var inst_27522 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27552_27598 = state_27536__$1;
(statearr_27552_27598[(2)] = inst_27522);

(statearr_27552_27598[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (29))){
var inst_27506 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27553_27599 = state_27536__$1;
(statearr_27553_27599[(2)] = inst_27506);

(statearr_27553_27599[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (6))){
var inst_27455 = (state_27536[(7)]);
var state_27536__$1 = state_27536;
var statearr_27554_27600 = state_27536__$1;
(statearr_27554_27600[(2)] = inst_27455);

(statearr_27554_27600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (28))){
var inst_27502 = (state_27536[(2)]);
var inst_27503 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27504 = figwheel.client.heads_up.display_warning.call(null,inst_27503);
var state_27536__$1 = (function (){var statearr_27555 = state_27536;
(statearr_27555[(8)] = inst_27502);

return statearr_27555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(29),inst_27504);
} else {
if((state_val_27537 === (25))){
var inst_27500 = figwheel.client.heads_up.clear.call(null);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(28),inst_27500);
} else {
if((state_val_27537 === (34))){
var inst_27517 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(37),inst_27517);
} else {
if((state_val_27537 === (17))){
var inst_27482 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27556_27601 = state_27536__$1;
(statearr_27556_27601[(2)] = inst_27482);

(statearr_27556_27601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (3))){
var inst_27472 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27472)){
var statearr_27557_27602 = state_27536__$1;
(statearr_27557_27602[(1)] = (13));

} else {
var statearr_27558_27603 = state_27536__$1;
(statearr_27558_27603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (12))){
var inst_27468 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27559_27604 = state_27536__$1;
(statearr_27559_27604[(2)] = inst_27468);

(statearr_27559_27604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (2))){
var inst_27455 = (state_27536[(7)]);
var inst_27455__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_27536__$1 = (function (){var statearr_27560 = state_27536;
(statearr_27560[(7)] = inst_27455__$1);

return statearr_27560;
})();
if(cljs.core.truth_(inst_27455__$1)){
var statearr_27561_27605 = state_27536__$1;
(statearr_27561_27605[(1)] = (5));

} else {
var statearr_27562_27606 = state_27536__$1;
(statearr_27562_27606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (23))){
var inst_27498 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27498)){
var statearr_27563_27607 = state_27536__$1;
(statearr_27563_27607[(1)] = (25));

} else {
var statearr_27564_27608 = state_27536__$1;
(statearr_27564_27608[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (35))){
var state_27536__$1 = state_27536;
var statearr_27565_27609 = state_27536__$1;
(statearr_27565_27609[(2)] = null);

(statearr_27565_27609[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (19))){
var inst_27493 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27493)){
var statearr_27566_27610 = state_27536__$1;
(statearr_27566_27610[(1)] = (22));

} else {
var statearr_27567_27611 = state_27536__$1;
(statearr_27567_27611[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (11))){
var inst_27464 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27568_27612 = state_27536__$1;
(statearr_27568_27612[(2)] = inst_27464);

(statearr_27568_27612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (9))){
var inst_27466 = figwheel.client.heads_up.clear.call(null);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(12),inst_27466);
} else {
if((state_val_27537 === (5))){
var inst_27457 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27536__$1 = state_27536;
var statearr_27569_27613 = state_27536__$1;
(statearr_27569_27613[(2)] = inst_27457);

(statearr_27569_27613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (14))){
var inst_27484 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27484)){
var statearr_27570_27614 = state_27536__$1;
(statearr_27570_27614[(1)] = (18));

} else {
var statearr_27571_27615 = state_27536__$1;
(statearr_27571_27615[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (26))){
var inst_27508 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27536__$1 = state_27536;
if(cljs.core.truth_(inst_27508)){
var statearr_27572_27616 = state_27536__$1;
(statearr_27572_27616[(1)] = (30));

} else {
var statearr_27573_27617 = state_27536__$1;
(statearr_27573_27617[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (16))){
var inst_27476 = (state_27536[(2)]);
var inst_27477 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27478 = figwheel.client.format_messages.call(null,inst_27477);
var inst_27479 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27480 = figwheel.client.heads_up.display_error.call(null,inst_27478,inst_27479);
var state_27536__$1 = (function (){var statearr_27574 = state_27536;
(statearr_27574[(9)] = inst_27476);

return statearr_27574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(17),inst_27480);
} else {
if((state_val_27537 === (30))){
var inst_27510 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27511 = figwheel.client.heads_up.display_warning.call(null,inst_27510);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(33),inst_27511);
} else {
if((state_val_27537 === (10))){
var inst_27470 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27575_27618 = state_27536__$1;
(statearr_27575_27618[(2)] = inst_27470);

(statearr_27575_27618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (18))){
var inst_27486 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27487 = figwheel.client.format_messages.call(null,inst_27486);
var inst_27488 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27489 = figwheel.client.heads_up.display_error.call(null,inst_27487,inst_27488);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(21),inst_27489);
} else {
if((state_val_27537 === (37))){
var inst_27519 = (state_27536[(2)]);
var state_27536__$1 = state_27536;
var statearr_27576_27619 = state_27536__$1;
(statearr_27576_27619[(2)] = inst_27519);

(statearr_27576_27619[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27537 === (8))){
var inst_27462 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27536__$1 = state_27536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27536__$1,(11),inst_27462);
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
});})(c__22596__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22531__auto__,c__22596__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto____0 = (function (){
var statearr_27580 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27580[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto__);

(statearr_27580[(1)] = (1));

return statearr_27580;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto____1 = (function (state_27536){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_27536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e27581){if((e27581 instanceof Object)){
var ex__22535__auto__ = e27581;
var statearr_27582_27620 = state_27536;
(statearr_27582_27620[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27621 = state_27536;
state_27536 = G__27621;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto__ = function(state_27536){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto____1.call(this,state_27536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__,msg_hist,msg_names,msg))
})();
var state__22598__auto__ = (function (){var statearr_27583 = f__22597__auto__.call(null);
(statearr_27583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_27583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__,msg_hist,msg_names,msg))
);

return c__22596__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22596__auto___27684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___27684,ch){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___27684,ch){
return (function (state_27667){
var state_val_27668 = (state_27667[(1)]);
if((state_val_27668 === (1))){
var state_27667__$1 = state_27667;
var statearr_27669_27685 = state_27667__$1;
(statearr_27669_27685[(2)] = null);

(statearr_27669_27685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (2))){
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27667__$1,(4),ch);
} else {
if((state_val_27668 === (3))){
var inst_27665 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27667__$1,inst_27665);
} else {
if((state_val_27668 === (4))){
var inst_27655 = (state_27667[(7)]);
var inst_27655__$1 = (state_27667[(2)]);
var state_27667__$1 = (function (){var statearr_27670 = state_27667;
(statearr_27670[(7)] = inst_27655__$1);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27655__$1)){
var statearr_27671_27686 = state_27667__$1;
(statearr_27671_27686[(1)] = (5));

} else {
var statearr_27672_27687 = state_27667__$1;
(statearr_27672_27687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (5))){
var inst_27655 = (state_27667[(7)]);
var inst_27657 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27655);
var state_27667__$1 = state_27667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27667__$1,(8),inst_27657);
} else {
if((state_val_27668 === (6))){
var state_27667__$1 = state_27667;
var statearr_27673_27688 = state_27667__$1;
(statearr_27673_27688[(2)] = null);

(statearr_27673_27688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (7))){
var inst_27663 = (state_27667[(2)]);
var state_27667__$1 = state_27667;
var statearr_27674_27689 = state_27667__$1;
(statearr_27674_27689[(2)] = inst_27663);

(statearr_27674_27689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27668 === (8))){
var inst_27659 = (state_27667[(2)]);
var state_27667__$1 = (function (){var statearr_27675 = state_27667;
(statearr_27675[(8)] = inst_27659);

return statearr_27675;
})();
var statearr_27676_27690 = state_27667__$1;
(statearr_27676_27690[(2)] = null);

(statearr_27676_27690[(1)] = (2));


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
});})(c__22596__auto___27684,ch))
;
return ((function (switch__22531__auto__,c__22596__auto___27684,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22532__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22532__auto____0 = (function (){
var statearr_27680 = [null,null,null,null,null,null,null,null,null];
(statearr_27680[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22532__auto__);

(statearr_27680[(1)] = (1));

return statearr_27680;
});
var figwheel$client$heads_up_plugin_$_state_machine__22532__auto____1 = (function (state_27667){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_27667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e27681){if((e27681 instanceof Object)){
var ex__22535__auto__ = e27681;
var statearr_27682_27691 = state_27667;
(statearr_27682_27691[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27692 = state_27667;
state_27667 = G__27692;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22532__auto__ = function(state_27667){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22532__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22532__auto____1.call(this,state_27667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22532__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22532__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___27684,ch))
})();
var state__22598__auto__ = (function (){var statearr_27683 = f__22597__auto__.call(null);
(statearr_27683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___27684);

return statearr_27683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___27684,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__){
return (function (state_27713){
var state_val_27714 = (state_27713[(1)]);
if((state_val_27714 === (1))){
var inst_27708 = cljs.core.async.timeout.call(null,(3000));
var state_27713__$1 = state_27713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27713__$1,(2),inst_27708);
} else {
if((state_val_27714 === (2))){
var inst_27710 = (state_27713[(2)]);
var inst_27711 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27713__$1 = (function (){var statearr_27715 = state_27713;
(statearr_27715[(7)] = inst_27710);

return statearr_27715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27713__$1,inst_27711);
} else {
return null;
}
}
});})(c__22596__auto__))
;
return ((function (switch__22531__auto__,c__22596__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22532__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22532__auto____0 = (function (){
var statearr_27719 = [null,null,null,null,null,null,null,null];
(statearr_27719[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22532__auto__);

(statearr_27719[(1)] = (1));

return statearr_27719;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22532__auto____1 = (function (state_27713){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_27713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e27720){if((e27720 instanceof Object)){
var ex__22535__auto__ = e27720;
var statearr_27721_27723 = state_27713;
(statearr_27721_27723[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27724 = state_27713;
state_27713 = G__27724;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22532__auto__ = function(state_27713){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22532__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22532__auto____1.call(this,state_27713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22532__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22532__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__))
})();
var state__22598__auto__ = (function (){var statearr_27722 = f__22597__auto__.call(null);
(statearr_27722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_27722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__))
);

return c__22596__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27725){
var map__27732 = p__27725;
var map__27732__$1 = ((((!((map__27732 == null)))?((((map__27732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27732):map__27732);
var ed = map__27732__$1;
var formatted_exception = cljs.core.get.call(null,map__27732__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27732__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27732__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27734_27738 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27735_27739 = null;
var count__27736_27740 = (0);
var i__27737_27741 = (0);
while(true){
if((i__27737_27741 < count__27736_27740)){
var msg_27742 = cljs.core._nth.call(null,chunk__27735_27739,i__27737_27741);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27742);

var G__27743 = seq__27734_27738;
var G__27744 = chunk__27735_27739;
var G__27745 = count__27736_27740;
var G__27746 = (i__27737_27741 + (1));
seq__27734_27738 = G__27743;
chunk__27735_27739 = G__27744;
count__27736_27740 = G__27745;
i__27737_27741 = G__27746;
continue;
} else {
var temp__4425__auto___27747 = cljs.core.seq.call(null,seq__27734_27738);
if(temp__4425__auto___27747){
var seq__27734_27748__$1 = temp__4425__auto___27747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27734_27748__$1)){
var c__19919__auto___27749 = cljs.core.chunk_first.call(null,seq__27734_27748__$1);
var G__27750 = cljs.core.chunk_rest.call(null,seq__27734_27748__$1);
var G__27751 = c__19919__auto___27749;
var G__27752 = cljs.core.count.call(null,c__19919__auto___27749);
var G__27753 = (0);
seq__27734_27738 = G__27750;
chunk__27735_27739 = G__27751;
count__27736_27740 = G__27752;
i__27737_27741 = G__27753;
continue;
} else {
var msg_27754 = cljs.core.first.call(null,seq__27734_27748__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27754);

var G__27755 = cljs.core.next.call(null,seq__27734_27748__$1);
var G__27756 = null;
var G__27757 = (0);
var G__27758 = (0);
seq__27734_27738 = G__27755;
chunk__27735_27739 = G__27756;
count__27736_27740 = G__27757;
i__27737_27741 = G__27758;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27759){
var map__27762 = p__27759;
var map__27762__$1 = ((((!((map__27762 == null)))?((((map__27762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27762):map__27762);
var w = map__27762__$1;
var message = cljs.core.get.call(null,map__27762__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19104__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19104__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19104__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27770 = cljs.core.seq.call(null,plugins);
var chunk__27771 = null;
var count__27772 = (0);
var i__27773 = (0);
while(true){
if((i__27773 < count__27772)){
var vec__27774 = cljs.core._nth.call(null,chunk__27771,i__27773);
var k = cljs.core.nth.call(null,vec__27774,(0),null);
var plugin = cljs.core.nth.call(null,vec__27774,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27776 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27770,chunk__27771,count__27772,i__27773,pl_27776,vec__27774,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27776.call(null,msg_hist);
});})(seq__27770,chunk__27771,count__27772,i__27773,pl_27776,vec__27774,k,plugin))
);
} else {
}

var G__27777 = seq__27770;
var G__27778 = chunk__27771;
var G__27779 = count__27772;
var G__27780 = (i__27773 + (1));
seq__27770 = G__27777;
chunk__27771 = G__27778;
count__27772 = G__27779;
i__27773 = G__27780;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27770);
if(temp__4425__auto__){
var seq__27770__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27770__$1)){
var c__19919__auto__ = cljs.core.chunk_first.call(null,seq__27770__$1);
var G__27781 = cljs.core.chunk_rest.call(null,seq__27770__$1);
var G__27782 = c__19919__auto__;
var G__27783 = cljs.core.count.call(null,c__19919__auto__);
var G__27784 = (0);
seq__27770 = G__27781;
chunk__27771 = G__27782;
count__27772 = G__27783;
i__27773 = G__27784;
continue;
} else {
var vec__27775 = cljs.core.first.call(null,seq__27770__$1);
var k = cljs.core.nth.call(null,vec__27775,(0),null);
var plugin = cljs.core.nth.call(null,vec__27775,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27785 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27770,chunk__27771,count__27772,i__27773,pl_27785,vec__27775,k,plugin,seq__27770__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27785.call(null,msg_hist);
});})(seq__27770,chunk__27771,count__27772,i__27773,pl_27785,vec__27775,k,plugin,seq__27770__$1,temp__4425__auto__))
);
} else {
}

var G__27786 = cljs.core.next.call(null,seq__27770__$1);
var G__27787 = null;
var G__27788 = (0);
var G__27789 = (0);
seq__27770 = G__27786;
chunk__27771 = G__27787;
count__27772 = G__27788;
i__27773 = G__27789;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27790 = [];
var len__20174__auto___27793 = arguments.length;
var i__20175__auto___27794 = (0);
while(true){
if((i__20175__auto___27794 < len__20174__auto___27793)){
args27790.push((arguments[i__20175__auto___27794]));

var G__27795 = (i__20175__auto___27794 + (1));
i__20175__auto___27794 = G__27795;
continue;
} else {
}
break;
}

var G__27792 = args27790.length;
switch (G__27792) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27790.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20181__auto__ = [];
var len__20174__auto___27801 = arguments.length;
var i__20175__auto___27802 = (0);
while(true){
if((i__20175__auto___27802 < len__20174__auto___27801)){
args__20181__auto__.push((arguments[i__20175__auto___27802]));

var G__27803 = (i__20175__auto___27802 + (1));
i__20175__auto___27802 = G__27803;
continue;
} else {
}
break;
}

var argseq__20182__auto__ = ((((0) < args__20181__auto__.length))?(new cljs.core.IndexedSeq(args__20181__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20182__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27798){
var map__27799 = p__27798;
var map__27799__$1 = ((((!((map__27799 == null)))?((((map__27799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27799):map__27799);
var opts = map__27799__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27797){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27797));
});

//# sourceMappingURL=client.js.map