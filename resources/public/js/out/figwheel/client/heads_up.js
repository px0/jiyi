// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__20181__auto__ = [];
var len__20174__auto___27941 = arguments.length;
var i__20175__auto___27942 = (0);
while(true){
if((i__20175__auto___27942 < len__20174__auto___27941)){
args__20181__auto__.push((arguments[i__20175__auto___27942]));

var G__27943 = (i__20175__auto___27942 + (1));
i__20175__auto___27942 = G__27943;
continue;
} else {
}
break;
}

var argseq__20182__auto__ = ((((2) < args__20181__auto__.length))?(new cljs.core.IndexedSeq(args__20181__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20182__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27933_27944 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27934_27945 = null;
var count__27935_27946 = (0);
var i__27936_27947 = (0);
while(true){
if((i__27936_27947 < count__27935_27946)){
var k_27948 = cljs.core._nth.call(null,chunk__27934_27945,i__27936_27947);
e.setAttribute(cljs.core.name.call(null,k_27948),cljs.core.get.call(null,attrs,k_27948));

var G__27949 = seq__27933_27944;
var G__27950 = chunk__27934_27945;
var G__27951 = count__27935_27946;
var G__27952 = (i__27936_27947 + (1));
seq__27933_27944 = G__27949;
chunk__27934_27945 = G__27950;
count__27935_27946 = G__27951;
i__27936_27947 = G__27952;
continue;
} else {
var temp__4425__auto___27953 = cljs.core.seq.call(null,seq__27933_27944);
if(temp__4425__auto___27953){
var seq__27933_27954__$1 = temp__4425__auto___27953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27933_27954__$1)){
var c__19919__auto___27955 = cljs.core.chunk_first.call(null,seq__27933_27954__$1);
var G__27956 = cljs.core.chunk_rest.call(null,seq__27933_27954__$1);
var G__27957 = c__19919__auto___27955;
var G__27958 = cljs.core.count.call(null,c__19919__auto___27955);
var G__27959 = (0);
seq__27933_27944 = G__27956;
chunk__27934_27945 = G__27957;
count__27935_27946 = G__27958;
i__27936_27947 = G__27959;
continue;
} else {
var k_27960 = cljs.core.first.call(null,seq__27933_27954__$1);
e.setAttribute(cljs.core.name.call(null,k_27960),cljs.core.get.call(null,attrs,k_27960));

var G__27961 = cljs.core.next.call(null,seq__27933_27954__$1);
var G__27962 = null;
var G__27963 = (0);
var G__27964 = (0);
seq__27933_27944 = G__27961;
chunk__27934_27945 = G__27962;
count__27935_27946 = G__27963;
i__27936_27947 = G__27964;
continue;
}
} else {
}
}
break;
}

var seq__27937_27965 = cljs.core.seq.call(null,children);
var chunk__27938_27966 = null;
var count__27939_27967 = (0);
var i__27940_27968 = (0);
while(true){
if((i__27940_27968 < count__27939_27967)){
var ch_27969 = cljs.core._nth.call(null,chunk__27938_27966,i__27940_27968);
e.appendChild(ch_27969);

var G__27970 = seq__27937_27965;
var G__27971 = chunk__27938_27966;
var G__27972 = count__27939_27967;
var G__27973 = (i__27940_27968 + (1));
seq__27937_27965 = G__27970;
chunk__27938_27966 = G__27971;
count__27939_27967 = G__27972;
i__27940_27968 = G__27973;
continue;
} else {
var temp__4425__auto___27974 = cljs.core.seq.call(null,seq__27937_27965);
if(temp__4425__auto___27974){
var seq__27937_27975__$1 = temp__4425__auto___27974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27937_27975__$1)){
var c__19919__auto___27976 = cljs.core.chunk_first.call(null,seq__27937_27975__$1);
var G__27977 = cljs.core.chunk_rest.call(null,seq__27937_27975__$1);
var G__27978 = c__19919__auto___27976;
var G__27979 = cljs.core.count.call(null,c__19919__auto___27976);
var G__27980 = (0);
seq__27937_27965 = G__27977;
chunk__27938_27966 = G__27978;
count__27939_27967 = G__27979;
i__27940_27968 = G__27980;
continue;
} else {
var ch_27981 = cljs.core.first.call(null,seq__27937_27975__$1);
e.appendChild(ch_27981);

var G__27982 = cljs.core.next.call(null,seq__27937_27975__$1);
var G__27983 = null;
var G__27984 = (0);
var G__27985 = (0);
seq__27937_27965 = G__27982;
chunk__27938_27966 = G__27983;
count__27939_27967 = G__27984;
i__27940_27968 = G__27985;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27930){
var G__27931 = cljs.core.first.call(null,seq27930);
var seq27930__$1 = cljs.core.next.call(null,seq27930);
var G__27932 = cljs.core.first.call(null,seq27930__$1);
var seq27930__$2 = cljs.core.next.call(null,seq27930__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27931,G__27932,seq27930__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20029__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20030__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20031__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20032__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20033__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20029__auto__,prefer_table__20030__auto__,method_cache__20031__auto__,cached_hierarchy__20032__auto__,hierarchy__20033__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20029__auto__,prefer_table__20030__auto__,method_cache__20031__auto__,cached_hierarchy__20032__auto__,hierarchy__20033__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20033__auto__,method_table__20029__auto__,prefer_table__20030__auto__,method_cache__20031__auto__,cached_hierarchy__20032__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27986 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27986.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27986.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27986.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27986);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27987,st_map){
var map__27992 = p__27987;
var map__27992__$1 = ((((!((map__27992 == null)))?((((map__27992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27992):map__27992);
var container_el = cljs.core.get.call(null,map__27992__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27992,map__27992__$1,container_el){
return (function (p__27994){
var vec__27995 = p__27994;
var k = cljs.core.nth.call(null,vec__27995,(0),null);
var v = cljs.core.nth.call(null,vec__27995,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27992,map__27992__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27996,dom_str){
var map__27999 = p__27996;
var map__27999__$1 = ((((!((map__27999 == null)))?((((map__27999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27999):map__27999);
var c = map__27999__$1;
var content_area_el = cljs.core.get.call(null,map__27999__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28001){
var map__28004 = p__28001;
var map__28004__$1 = ((((!((map__28004 == null)))?((((map__28004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28004):map__28004);
var content_area_el = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__){
return (function (state_28047){
var state_val_28048 = (state_28047[(1)]);
if((state_val_28048 === (1))){
var inst_28032 = (state_28047[(7)]);
var inst_28032__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28033 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28034 = ["10px","10px","100%","68px","1.0"];
var inst_28035 = cljs.core.PersistentHashMap.fromArrays(inst_28033,inst_28034);
var inst_28036 = cljs.core.merge.call(null,inst_28035,style);
var inst_28037 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28032__$1,inst_28036);
var inst_28038 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28032__$1,msg);
var inst_28039 = cljs.core.async.timeout.call(null,(300));
var state_28047__$1 = (function (){var statearr_28049 = state_28047;
(statearr_28049[(8)] = inst_28038);

(statearr_28049[(9)] = inst_28037);

(statearr_28049[(7)] = inst_28032__$1);

return statearr_28049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28047__$1,(2),inst_28039);
} else {
if((state_val_28048 === (2))){
var inst_28032 = (state_28047[(7)]);
var inst_28041 = (state_28047[(2)]);
var inst_28042 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28043 = ["auto"];
var inst_28044 = cljs.core.PersistentHashMap.fromArrays(inst_28042,inst_28043);
var inst_28045 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28032,inst_28044);
var state_28047__$1 = (function (){var statearr_28050 = state_28047;
(statearr_28050[(10)] = inst_28041);

return statearr_28050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28047__$1,inst_28045);
} else {
return null;
}
}
});})(c__22596__auto__))
;
return ((function (switch__22531__auto__,c__22596__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto____0 = (function (){
var statearr_28054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28054[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto__);

(statearr_28054[(1)] = (1));

return statearr_28054;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto____1 = (function (state_28047){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_28047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e28055){if((e28055 instanceof Object)){
var ex__22535__auto__ = e28055;
var statearr_28056_28058 = state_28047;
(statearr_28056_28058[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28059 = state_28047;
state_28047 = G__28059;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto__ = function(state_28047){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto____1.call(this,state_28047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__))
})();
var state__22598__auto__ = (function (){var statearr_28057 = f__22597__auto__.call(null);
(statearr_28057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_28057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__))
);

return c__22596__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28061 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28061,(0),null);
var ln = cljs.core.nth.call(null,vec__28061,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28064 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28064,(0),null);
var file_line = cljs.core.nth.call(null,vec__28064,(1),null);
var file_column = cljs.core.nth.call(null,vec__28064,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28064,file_name,file_line,file_column){
return (function (p1__28062_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28062_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28064,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__19116__auto__ = file_line;
if(cljs.core.truth_(or__19116__auto__)){
return or__19116__auto__;
} else {
var and__19104__auto__ = cause;
if(cljs.core.truth_(and__19104__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__19104__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28067 = figwheel.client.heads_up.ensure_container.call(null);
var map__28067__$1 = ((((!((map__28067 == null)))?((((map__28067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28067):map__28067);
var content_area_el = cljs.core.get.call(null,map__28067__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__){
return (function (state_28115){
var state_val_28116 = (state_28115[(1)]);
if((state_val_28116 === (1))){
var inst_28098 = (state_28115[(7)]);
var inst_28098__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28099 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28100 = ["0.0"];
var inst_28101 = cljs.core.PersistentHashMap.fromArrays(inst_28099,inst_28100);
var inst_28102 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28098__$1,inst_28101);
var inst_28103 = cljs.core.async.timeout.call(null,(300));
var state_28115__$1 = (function (){var statearr_28117 = state_28115;
(statearr_28117[(8)] = inst_28102);

(statearr_28117[(7)] = inst_28098__$1);

return statearr_28117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28115__$1,(2),inst_28103);
} else {
if((state_val_28116 === (2))){
var inst_28098 = (state_28115[(7)]);
var inst_28105 = (state_28115[(2)]);
var inst_28106 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28107 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28108 = cljs.core.PersistentHashMap.fromArrays(inst_28106,inst_28107);
var inst_28109 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28098,inst_28108);
var inst_28110 = cljs.core.async.timeout.call(null,(200));
var state_28115__$1 = (function (){var statearr_28118 = state_28115;
(statearr_28118[(9)] = inst_28109);

(statearr_28118[(10)] = inst_28105);

return statearr_28118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28115__$1,(3),inst_28110);
} else {
if((state_val_28116 === (3))){
var inst_28098 = (state_28115[(7)]);
var inst_28112 = (state_28115[(2)]);
var inst_28113 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28098,"");
var state_28115__$1 = (function (){var statearr_28119 = state_28115;
(statearr_28119[(11)] = inst_28112);

return statearr_28119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28115__$1,inst_28113);
} else {
return null;
}
}
}
});})(c__22596__auto__))
;
return ((function (switch__22531__auto__,c__22596__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22532__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22532__auto____0 = (function (){
var statearr_28123 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28123[(0)] = figwheel$client$heads_up$clear_$_state_machine__22532__auto__);

(statearr_28123[(1)] = (1));

return statearr_28123;
});
var figwheel$client$heads_up$clear_$_state_machine__22532__auto____1 = (function (state_28115){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_28115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e28124){if((e28124 instanceof Object)){
var ex__22535__auto__ = e28124;
var statearr_28125_28127 = state_28115;
(statearr_28125_28127[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28128 = state_28115;
state_28115 = G__28128;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22532__auto__ = function(state_28115){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22532__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22532__auto____1.call(this,state_28115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22532__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22532__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__))
})();
var state__22598__auto__ = (function (){var statearr_28126 = f__22597__auto__.call(null);
(statearr_28126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_28126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__))
);

return c__22596__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__){
return (function (state_28160){
var state_val_28161 = (state_28160[(1)]);
if((state_val_28161 === (1))){
var inst_28150 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28160__$1 = state_28160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28160__$1,(2),inst_28150);
} else {
if((state_val_28161 === (2))){
var inst_28152 = (state_28160[(2)]);
var inst_28153 = cljs.core.async.timeout.call(null,(400));
var state_28160__$1 = (function (){var statearr_28162 = state_28160;
(statearr_28162[(7)] = inst_28152);

return statearr_28162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28160__$1,(3),inst_28153);
} else {
if((state_val_28161 === (3))){
var inst_28155 = (state_28160[(2)]);
var inst_28156 = figwheel.client.heads_up.clear.call(null);
var state_28160__$1 = (function (){var statearr_28163 = state_28160;
(statearr_28163[(8)] = inst_28155);

return statearr_28163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28160__$1,(4),inst_28156);
} else {
if((state_val_28161 === (4))){
var inst_28158 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28160__$1,inst_28158);
} else {
return null;
}
}
}
}
});})(c__22596__auto__))
;
return ((function (switch__22531__auto__,c__22596__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto____0 = (function (){
var statearr_28167 = [null,null,null,null,null,null,null,null,null];
(statearr_28167[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto__);

(statearr_28167[(1)] = (1));

return statearr_28167;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto____1 = (function (state_28160){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_28160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e28168){if((e28168 instanceof Object)){
var ex__22535__auto__ = e28168;
var statearr_28169_28171 = state_28160;
(statearr_28169_28171[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28172 = state_28160;
state_28160 = G__28172;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto__ = function(state_28160){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto____1.call(this,state_28160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__))
})();
var state__22598__auto__ = (function (){var statearr_28170 = f__22597__auto__.call(null);
(statearr_28170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_28170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__))
);

return c__22596__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map