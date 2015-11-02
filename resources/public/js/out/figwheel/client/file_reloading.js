// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19116__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19116__auto__){
return or__19116__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19116__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19116__auto__)){
return or__19116__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28266_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28266_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28271 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28272 = null;
var count__28273 = (0);
var i__28274 = (0);
while(true){
if((i__28274 < count__28273)){
var n = cljs.core._nth.call(null,chunk__28272,i__28274);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28275 = seq__28271;
var G__28276 = chunk__28272;
var G__28277 = count__28273;
var G__28278 = (i__28274 + (1));
seq__28271 = G__28275;
chunk__28272 = G__28276;
count__28273 = G__28277;
i__28274 = G__28278;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28271);
if(temp__4425__auto__){
var seq__28271__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28271__$1)){
var c__19919__auto__ = cljs.core.chunk_first.call(null,seq__28271__$1);
var G__28279 = cljs.core.chunk_rest.call(null,seq__28271__$1);
var G__28280 = c__19919__auto__;
var G__28281 = cljs.core.count.call(null,c__19919__auto__);
var G__28282 = (0);
seq__28271 = G__28279;
chunk__28272 = G__28280;
count__28273 = G__28281;
i__28274 = G__28282;
continue;
} else {
var n = cljs.core.first.call(null,seq__28271__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28283 = cljs.core.next.call(null,seq__28271__$1);
var G__28284 = null;
var G__28285 = (0);
var G__28286 = (0);
seq__28271 = G__28283;
chunk__28272 = G__28284;
count__28273 = G__28285;
i__28274 = G__28286;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28325_28332 = cljs.core.seq.call(null,deps);
var chunk__28326_28333 = null;
var count__28327_28334 = (0);
var i__28328_28335 = (0);
while(true){
if((i__28328_28335 < count__28327_28334)){
var dep_28336 = cljs.core._nth.call(null,chunk__28326_28333,i__28328_28335);
topo_sort_helper_STAR_.call(null,dep_28336,(depth + (1)),state);

var G__28337 = seq__28325_28332;
var G__28338 = chunk__28326_28333;
var G__28339 = count__28327_28334;
var G__28340 = (i__28328_28335 + (1));
seq__28325_28332 = G__28337;
chunk__28326_28333 = G__28338;
count__28327_28334 = G__28339;
i__28328_28335 = G__28340;
continue;
} else {
var temp__4425__auto___28341 = cljs.core.seq.call(null,seq__28325_28332);
if(temp__4425__auto___28341){
var seq__28325_28342__$1 = temp__4425__auto___28341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28325_28342__$1)){
var c__19919__auto___28343 = cljs.core.chunk_first.call(null,seq__28325_28342__$1);
var G__28344 = cljs.core.chunk_rest.call(null,seq__28325_28342__$1);
var G__28345 = c__19919__auto___28343;
var G__28346 = cljs.core.count.call(null,c__19919__auto___28343);
var G__28347 = (0);
seq__28325_28332 = G__28344;
chunk__28326_28333 = G__28345;
count__28327_28334 = G__28346;
i__28328_28335 = G__28347;
continue;
} else {
var dep_28348 = cljs.core.first.call(null,seq__28325_28342__$1);
topo_sort_helper_STAR_.call(null,dep_28348,(depth + (1)),state);

var G__28349 = cljs.core.next.call(null,seq__28325_28342__$1);
var G__28350 = null;
var G__28351 = (0);
var G__28352 = (0);
seq__28325_28332 = G__28349;
chunk__28326_28333 = G__28350;
count__28327_28334 = G__28351;
i__28328_28335 = G__28352;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28329){
var vec__28331 = p__28329;
var x = cljs.core.nth.call(null,vec__28331,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28331,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28331,x,xs,get_deps__$1){
return (function (p1__28287_SHARP_){
return clojure.set.difference.call(null,p1__28287_SHARP_,x);
});})(vec__28331,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28365 = cljs.core.seq.call(null,provides);
var chunk__28366 = null;
var count__28367 = (0);
var i__28368 = (0);
while(true){
if((i__28368 < count__28367)){
var prov = cljs.core._nth.call(null,chunk__28366,i__28368);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28369_28377 = cljs.core.seq.call(null,requires);
var chunk__28370_28378 = null;
var count__28371_28379 = (0);
var i__28372_28380 = (0);
while(true){
if((i__28372_28380 < count__28371_28379)){
var req_28381 = cljs.core._nth.call(null,chunk__28370_28378,i__28372_28380);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28381,prov);

var G__28382 = seq__28369_28377;
var G__28383 = chunk__28370_28378;
var G__28384 = count__28371_28379;
var G__28385 = (i__28372_28380 + (1));
seq__28369_28377 = G__28382;
chunk__28370_28378 = G__28383;
count__28371_28379 = G__28384;
i__28372_28380 = G__28385;
continue;
} else {
var temp__4425__auto___28386 = cljs.core.seq.call(null,seq__28369_28377);
if(temp__4425__auto___28386){
var seq__28369_28387__$1 = temp__4425__auto___28386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28369_28387__$1)){
var c__19919__auto___28388 = cljs.core.chunk_first.call(null,seq__28369_28387__$1);
var G__28389 = cljs.core.chunk_rest.call(null,seq__28369_28387__$1);
var G__28390 = c__19919__auto___28388;
var G__28391 = cljs.core.count.call(null,c__19919__auto___28388);
var G__28392 = (0);
seq__28369_28377 = G__28389;
chunk__28370_28378 = G__28390;
count__28371_28379 = G__28391;
i__28372_28380 = G__28392;
continue;
} else {
var req_28393 = cljs.core.first.call(null,seq__28369_28387__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28393,prov);

var G__28394 = cljs.core.next.call(null,seq__28369_28387__$1);
var G__28395 = null;
var G__28396 = (0);
var G__28397 = (0);
seq__28369_28377 = G__28394;
chunk__28370_28378 = G__28395;
count__28371_28379 = G__28396;
i__28372_28380 = G__28397;
continue;
}
} else {
}
}
break;
}

var G__28398 = seq__28365;
var G__28399 = chunk__28366;
var G__28400 = count__28367;
var G__28401 = (i__28368 + (1));
seq__28365 = G__28398;
chunk__28366 = G__28399;
count__28367 = G__28400;
i__28368 = G__28401;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28365);
if(temp__4425__auto__){
var seq__28365__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28365__$1)){
var c__19919__auto__ = cljs.core.chunk_first.call(null,seq__28365__$1);
var G__28402 = cljs.core.chunk_rest.call(null,seq__28365__$1);
var G__28403 = c__19919__auto__;
var G__28404 = cljs.core.count.call(null,c__19919__auto__);
var G__28405 = (0);
seq__28365 = G__28402;
chunk__28366 = G__28403;
count__28367 = G__28404;
i__28368 = G__28405;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28365__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28373_28406 = cljs.core.seq.call(null,requires);
var chunk__28374_28407 = null;
var count__28375_28408 = (0);
var i__28376_28409 = (0);
while(true){
if((i__28376_28409 < count__28375_28408)){
var req_28410 = cljs.core._nth.call(null,chunk__28374_28407,i__28376_28409);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28410,prov);

var G__28411 = seq__28373_28406;
var G__28412 = chunk__28374_28407;
var G__28413 = count__28375_28408;
var G__28414 = (i__28376_28409 + (1));
seq__28373_28406 = G__28411;
chunk__28374_28407 = G__28412;
count__28375_28408 = G__28413;
i__28376_28409 = G__28414;
continue;
} else {
var temp__4425__auto___28415__$1 = cljs.core.seq.call(null,seq__28373_28406);
if(temp__4425__auto___28415__$1){
var seq__28373_28416__$1 = temp__4425__auto___28415__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28373_28416__$1)){
var c__19919__auto___28417 = cljs.core.chunk_first.call(null,seq__28373_28416__$1);
var G__28418 = cljs.core.chunk_rest.call(null,seq__28373_28416__$1);
var G__28419 = c__19919__auto___28417;
var G__28420 = cljs.core.count.call(null,c__19919__auto___28417);
var G__28421 = (0);
seq__28373_28406 = G__28418;
chunk__28374_28407 = G__28419;
count__28375_28408 = G__28420;
i__28376_28409 = G__28421;
continue;
} else {
var req_28422 = cljs.core.first.call(null,seq__28373_28416__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28422,prov);

var G__28423 = cljs.core.next.call(null,seq__28373_28416__$1);
var G__28424 = null;
var G__28425 = (0);
var G__28426 = (0);
seq__28373_28406 = G__28423;
chunk__28374_28407 = G__28424;
count__28375_28408 = G__28425;
i__28376_28409 = G__28426;
continue;
}
} else {
}
}
break;
}

var G__28427 = cljs.core.next.call(null,seq__28365__$1);
var G__28428 = null;
var G__28429 = (0);
var G__28430 = (0);
seq__28365 = G__28427;
chunk__28366 = G__28428;
count__28367 = G__28429;
i__28368 = G__28430;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28435_28439 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28436_28440 = null;
var count__28437_28441 = (0);
var i__28438_28442 = (0);
while(true){
if((i__28438_28442 < count__28437_28441)){
var ns_28443 = cljs.core._nth.call(null,chunk__28436_28440,i__28438_28442);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28443);

var G__28444 = seq__28435_28439;
var G__28445 = chunk__28436_28440;
var G__28446 = count__28437_28441;
var G__28447 = (i__28438_28442 + (1));
seq__28435_28439 = G__28444;
chunk__28436_28440 = G__28445;
count__28437_28441 = G__28446;
i__28438_28442 = G__28447;
continue;
} else {
var temp__4425__auto___28448 = cljs.core.seq.call(null,seq__28435_28439);
if(temp__4425__auto___28448){
var seq__28435_28449__$1 = temp__4425__auto___28448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28435_28449__$1)){
var c__19919__auto___28450 = cljs.core.chunk_first.call(null,seq__28435_28449__$1);
var G__28451 = cljs.core.chunk_rest.call(null,seq__28435_28449__$1);
var G__28452 = c__19919__auto___28450;
var G__28453 = cljs.core.count.call(null,c__19919__auto___28450);
var G__28454 = (0);
seq__28435_28439 = G__28451;
chunk__28436_28440 = G__28452;
count__28437_28441 = G__28453;
i__28438_28442 = G__28454;
continue;
} else {
var ns_28455 = cljs.core.first.call(null,seq__28435_28449__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28455);

var G__28456 = cljs.core.next.call(null,seq__28435_28449__$1);
var G__28457 = null;
var G__28458 = (0);
var G__28459 = (0);
seq__28435_28439 = G__28456;
chunk__28436_28440 = G__28457;
count__28437_28441 = G__28458;
i__28438_28442 = G__28459;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19116__auto__ = goog.require__;
if(cljs.core.truth_(or__19116__auto__)){
return or__19116__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28460__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28461__i = 0, G__28461__a = new Array(arguments.length -  0);
while (G__28461__i < G__28461__a.length) {G__28461__a[G__28461__i] = arguments[G__28461__i + 0]; ++G__28461__i;}
  args = new cljs.core.IndexedSeq(G__28461__a,0);
} 
return G__28460__delegate.call(this,args);};
G__28460.cljs$lang$maxFixedArity = 0;
G__28460.cljs$lang$applyTo = (function (arglist__28462){
var args = cljs.core.seq(arglist__28462);
return G__28460__delegate(args);
});
G__28460.cljs$core$IFn$_invoke$arity$variadic = G__28460__delegate;
return G__28460;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28463 = cljs.core._EQ_;
var expr__28464 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28463.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28464))){
return ((function (pred__28463,expr__28464){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28466){if((e28466 instanceof Error)){
var e = e28466;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28466;

}
}})());
});
;})(pred__28463,expr__28464))
} else {
if(cljs.core.truth_(pred__28463.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28464))){
return ((function (pred__28463,expr__28464){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28463,expr__28464){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28463,expr__28464))
);

return deferred.addErrback(((function (deferred,pred__28463,expr__28464){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28463,expr__28464))
);
});
;})(pred__28463,expr__28464))
} else {
return ((function (pred__28463,expr__28464){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28463,expr__28464))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28467,callback){
var map__28470 = p__28467;
var map__28470__$1 = ((((!((map__28470 == null)))?((((map__28470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28470):map__28470);
var file_msg = map__28470__$1;
var request_url = cljs.core.get.call(null,map__28470__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28470,map__28470__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28470,map__28470__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__){
return (function (state_28494){
var state_val_28495 = (state_28494[(1)]);
if((state_val_28495 === (7))){
var inst_28490 = (state_28494[(2)]);
var state_28494__$1 = state_28494;
var statearr_28496_28516 = state_28494__$1;
(statearr_28496_28516[(2)] = inst_28490);

(statearr_28496_28516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (1))){
var state_28494__$1 = state_28494;
var statearr_28497_28517 = state_28494__$1;
(statearr_28497_28517[(2)] = null);

(statearr_28497_28517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (4))){
var inst_28474 = (state_28494[(7)]);
var inst_28474__$1 = (state_28494[(2)]);
var state_28494__$1 = (function (){var statearr_28498 = state_28494;
(statearr_28498[(7)] = inst_28474__$1);

return statearr_28498;
})();
if(cljs.core.truth_(inst_28474__$1)){
var statearr_28499_28518 = state_28494__$1;
(statearr_28499_28518[(1)] = (5));

} else {
var statearr_28500_28519 = state_28494__$1;
(statearr_28500_28519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (6))){
var state_28494__$1 = state_28494;
var statearr_28501_28520 = state_28494__$1;
(statearr_28501_28520[(2)] = null);

(statearr_28501_28520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (3))){
var inst_28492 = (state_28494[(2)]);
var state_28494__$1 = state_28494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28494__$1,inst_28492);
} else {
if((state_val_28495 === (2))){
var state_28494__$1 = state_28494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28494__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28495 === (11))){
var inst_28486 = (state_28494[(2)]);
var state_28494__$1 = (function (){var statearr_28502 = state_28494;
(statearr_28502[(8)] = inst_28486);

return statearr_28502;
})();
var statearr_28503_28521 = state_28494__$1;
(statearr_28503_28521[(2)] = null);

(statearr_28503_28521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (9))){
var inst_28480 = (state_28494[(9)]);
var inst_28478 = (state_28494[(10)]);
var inst_28482 = inst_28480.call(null,inst_28478);
var state_28494__$1 = state_28494;
var statearr_28504_28522 = state_28494__$1;
(statearr_28504_28522[(2)] = inst_28482);

(statearr_28504_28522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (5))){
var inst_28474 = (state_28494[(7)]);
var inst_28476 = figwheel.client.file_reloading.blocking_load.call(null,inst_28474);
var state_28494__$1 = state_28494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28494__$1,(8),inst_28476);
} else {
if((state_val_28495 === (10))){
var inst_28478 = (state_28494[(10)]);
var inst_28484 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28478);
var state_28494__$1 = state_28494;
var statearr_28505_28523 = state_28494__$1;
(statearr_28505_28523[(2)] = inst_28484);

(statearr_28505_28523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28495 === (8))){
var inst_28480 = (state_28494[(9)]);
var inst_28474 = (state_28494[(7)]);
var inst_28478 = (state_28494[(2)]);
var inst_28479 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28480__$1 = cljs.core.get.call(null,inst_28479,inst_28474);
var state_28494__$1 = (function (){var statearr_28506 = state_28494;
(statearr_28506[(9)] = inst_28480__$1);

(statearr_28506[(10)] = inst_28478);

return statearr_28506;
})();
if(cljs.core.truth_(inst_28480__$1)){
var statearr_28507_28524 = state_28494__$1;
(statearr_28507_28524[(1)] = (9));

} else {
var statearr_28508_28525 = state_28494__$1;
(statearr_28508_28525[(1)] = (10));

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
});})(c__22596__auto__))
;
return ((function (switch__22531__auto__,c__22596__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22532__auto__ = null;
var figwheel$client$file_reloading$state_machine__22532__auto____0 = (function (){
var statearr_28512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28512[(0)] = figwheel$client$file_reloading$state_machine__22532__auto__);

(statearr_28512[(1)] = (1));

return statearr_28512;
});
var figwheel$client$file_reloading$state_machine__22532__auto____1 = (function (state_28494){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_28494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e28513){if((e28513 instanceof Object)){
var ex__22535__auto__ = e28513;
var statearr_28514_28526 = state_28494;
(statearr_28514_28526[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28527 = state_28494;
state_28494 = G__28527;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22532__auto__ = function(state_28494){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22532__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22532__auto____1.call(this,state_28494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22532__auto____0;
figwheel$client$file_reloading$state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22532__auto____1;
return figwheel$client$file_reloading$state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__))
})();
var state__22598__auto__ = (function (){var statearr_28515 = f__22597__auto__.call(null);
(statearr_28515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_28515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__))
);

return c__22596__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28528,callback){
var map__28531 = p__28528;
var map__28531__$1 = ((((!((map__28531 == null)))?((((map__28531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28531):map__28531);
var file_msg = map__28531__$1;
var namespace = cljs.core.get.call(null,map__28531__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28531,map__28531__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28531,map__28531__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28533){
var map__28536 = p__28533;
var map__28536__$1 = ((((!((map__28536 == null)))?((((map__28536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28536):map__28536);
var file_msg = map__28536__$1;
var namespace = cljs.core.get.call(null,map__28536__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19104__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19104__auto__){
var or__19116__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19116__auto__)){
return or__19116__auto__;
} else {
var or__19116__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19116__auto____$1)){
return or__19116__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19104__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28538,callback){
var map__28541 = p__28538;
var map__28541__$1 = ((((!((map__28541 == null)))?((((map__28541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28541):map__28541);
var file_msg = map__28541__$1;
var request_url = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22596__auto___28629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto___28629,out){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto___28629,out){
return (function (state_28611){
var state_val_28612 = (state_28611[(1)]);
if((state_val_28612 === (1))){
var inst_28589 = cljs.core.nth.call(null,files,(0),null);
var inst_28590 = cljs.core.nthnext.call(null,files,(1));
var inst_28591 = files;
var state_28611__$1 = (function (){var statearr_28613 = state_28611;
(statearr_28613[(7)] = inst_28591);

(statearr_28613[(8)] = inst_28590);

(statearr_28613[(9)] = inst_28589);

return statearr_28613;
})();
var statearr_28614_28630 = state_28611__$1;
(statearr_28614_28630[(2)] = null);

(statearr_28614_28630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (2))){
var inst_28591 = (state_28611[(7)]);
var inst_28594 = (state_28611[(10)]);
var inst_28594__$1 = cljs.core.nth.call(null,inst_28591,(0),null);
var inst_28595 = cljs.core.nthnext.call(null,inst_28591,(1));
var inst_28596 = (inst_28594__$1 == null);
var inst_28597 = cljs.core.not.call(null,inst_28596);
var state_28611__$1 = (function (){var statearr_28615 = state_28611;
(statearr_28615[(11)] = inst_28595);

(statearr_28615[(10)] = inst_28594__$1);

return statearr_28615;
})();
if(inst_28597){
var statearr_28616_28631 = state_28611__$1;
(statearr_28616_28631[(1)] = (4));

} else {
var statearr_28617_28632 = state_28611__$1;
(statearr_28617_28632[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (3))){
var inst_28609 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28611__$1,inst_28609);
} else {
if((state_val_28612 === (4))){
var inst_28594 = (state_28611[(10)]);
var inst_28599 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28594);
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28611__$1,(7),inst_28599);
} else {
if((state_val_28612 === (5))){
var inst_28605 = cljs.core.async.close_BANG_.call(null,out);
var state_28611__$1 = state_28611;
var statearr_28618_28633 = state_28611__$1;
(statearr_28618_28633[(2)] = inst_28605);

(statearr_28618_28633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (6))){
var inst_28607 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28619_28634 = state_28611__$1;
(statearr_28619_28634[(2)] = inst_28607);

(statearr_28619_28634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (7))){
var inst_28595 = (state_28611[(11)]);
var inst_28601 = (state_28611[(2)]);
var inst_28602 = cljs.core.async.put_BANG_.call(null,out,inst_28601);
var inst_28591 = inst_28595;
var state_28611__$1 = (function (){var statearr_28620 = state_28611;
(statearr_28620[(7)] = inst_28591);

(statearr_28620[(12)] = inst_28602);

return statearr_28620;
})();
var statearr_28621_28635 = state_28611__$1;
(statearr_28621_28635[(2)] = null);

(statearr_28621_28635[(1)] = (2));


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
});})(c__22596__auto___28629,out))
;
return ((function (switch__22531__auto__,c__22596__auto___28629,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto____0 = (function (){
var statearr_28625 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28625[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto__);

(statearr_28625[(1)] = (1));

return statearr_28625;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto____1 = (function (state_28611){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_28611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e28626){if((e28626 instanceof Object)){
var ex__22535__auto__ = e28626;
var statearr_28627_28636 = state_28611;
(statearr_28627_28636[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28637 = state_28611;
state_28611 = G__28637;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto__ = function(state_28611){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto____1.call(this,state_28611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto___28629,out))
})();
var state__22598__auto__ = (function (){var statearr_28628 = f__22597__auto__.call(null);
(statearr_28628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto___28629);

return statearr_28628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto___28629,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28638,opts){
var map__28642 = p__28638;
var map__28642__$1 = ((((!((map__28642 == null)))?((((map__28642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28642):map__28642);
var eval_body__$1 = cljs.core.get.call(null,map__28642__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28642__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19104__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19104__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19104__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28644){var e = e28644;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28645_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28645_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28650){
var vec__28651 = p__28650;
var k = cljs.core.nth.call(null,vec__28651,(0),null);
var v = cljs.core.nth.call(null,vec__28651,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28652){
var vec__28653 = p__28652;
var k = cljs.core.nth.call(null,vec__28653,(0),null);
var v = cljs.core.nth.call(null,vec__28653,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28657,p__28658){
var map__28905 = p__28657;
var map__28905__$1 = ((((!((map__28905 == null)))?((((map__28905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28905):map__28905);
var opts = map__28905__$1;
var before_jsload = cljs.core.get.call(null,map__28905__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28905__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28905__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28906 = p__28658;
var map__28906__$1 = ((((!((map__28906 == null)))?((((map__28906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28906):map__28906);
var msg = map__28906__$1;
var files = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22596__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22597__auto__ = (function (){var switch__22531__auto__ = ((function (c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29059){
var state_val_29060 = (state_29059[(1)]);
if((state_val_29060 === (7))){
var inst_28921 = (state_29059[(7)]);
var inst_28920 = (state_29059[(8)]);
var inst_28923 = (state_29059[(9)]);
var inst_28922 = (state_29059[(10)]);
var inst_28928 = cljs.core._nth.call(null,inst_28921,inst_28923);
var inst_28929 = figwheel.client.file_reloading.eval_body.call(null,inst_28928,opts);
var inst_28930 = (inst_28923 + (1));
var tmp29061 = inst_28921;
var tmp29062 = inst_28920;
var tmp29063 = inst_28922;
var inst_28920__$1 = tmp29062;
var inst_28921__$1 = tmp29061;
var inst_28922__$1 = tmp29063;
var inst_28923__$1 = inst_28930;
var state_29059__$1 = (function (){var statearr_29064 = state_29059;
(statearr_29064[(7)] = inst_28921__$1);

(statearr_29064[(8)] = inst_28920__$1);

(statearr_29064[(9)] = inst_28923__$1);

(statearr_29064[(11)] = inst_28929);

(statearr_29064[(10)] = inst_28922__$1);

return statearr_29064;
})();
var statearr_29065_29151 = state_29059__$1;
(statearr_29065_29151[(2)] = null);

(statearr_29065_29151[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (20))){
var inst_28963 = (state_29059[(12)]);
var inst_28971 = figwheel.client.file_reloading.sort_files.call(null,inst_28963);
var state_29059__$1 = state_29059;
var statearr_29066_29152 = state_29059__$1;
(statearr_29066_29152[(2)] = inst_28971);

(statearr_29066_29152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (27))){
var state_29059__$1 = state_29059;
var statearr_29067_29153 = state_29059__$1;
(statearr_29067_29153[(2)] = null);

(statearr_29067_29153[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (1))){
var inst_28912 = (state_29059[(13)]);
var inst_28909 = before_jsload.call(null,files);
var inst_28910 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28911 = (function (){return ((function (inst_28912,inst_28909,inst_28910,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28654_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28654_SHARP_);
});
;})(inst_28912,inst_28909,inst_28910,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28912__$1 = cljs.core.filter.call(null,inst_28911,files);
var inst_28913 = cljs.core.not_empty.call(null,inst_28912__$1);
var state_29059__$1 = (function (){var statearr_29068 = state_29059;
(statearr_29068[(13)] = inst_28912__$1);

(statearr_29068[(14)] = inst_28910);

(statearr_29068[(15)] = inst_28909);

return statearr_29068;
})();
if(cljs.core.truth_(inst_28913)){
var statearr_29069_29154 = state_29059__$1;
(statearr_29069_29154[(1)] = (2));

} else {
var statearr_29070_29155 = state_29059__$1;
(statearr_29070_29155[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (24))){
var state_29059__$1 = state_29059;
var statearr_29071_29156 = state_29059__$1;
(statearr_29071_29156[(2)] = null);

(statearr_29071_29156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (39))){
var inst_29013 = (state_29059[(16)]);
var state_29059__$1 = state_29059;
var statearr_29072_29157 = state_29059__$1;
(statearr_29072_29157[(2)] = inst_29013);

(statearr_29072_29157[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (46))){
var inst_29054 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
var statearr_29073_29158 = state_29059__$1;
(statearr_29073_29158[(2)] = inst_29054);

(statearr_29073_29158[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (4))){
var inst_28957 = (state_29059[(2)]);
var inst_28958 = cljs.core.List.EMPTY;
var inst_28959 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28958);
var inst_28960 = (function (){return ((function (inst_28957,inst_28958,inst_28959,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28655_SHARP_){
var and__19104__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28655_SHARP_);
if(cljs.core.truth_(and__19104__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28655_SHARP_));
} else {
return and__19104__auto__;
}
});
;})(inst_28957,inst_28958,inst_28959,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28961 = cljs.core.filter.call(null,inst_28960,files);
var inst_28962 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28963 = cljs.core.concat.call(null,inst_28961,inst_28962);
var state_29059__$1 = (function (){var statearr_29074 = state_29059;
(statearr_29074[(12)] = inst_28963);

(statearr_29074[(17)] = inst_28957);

(statearr_29074[(18)] = inst_28959);

return statearr_29074;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29075_29159 = state_29059__$1;
(statearr_29075_29159[(1)] = (16));

} else {
var statearr_29076_29160 = state_29059__$1;
(statearr_29076_29160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (15))){
var inst_28947 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
var statearr_29077_29161 = state_29059__$1;
(statearr_29077_29161[(2)] = inst_28947);

(statearr_29077_29161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (21))){
var inst_28973 = (state_29059[(19)]);
var inst_28973__$1 = (state_29059[(2)]);
var inst_28974 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28973__$1);
var state_29059__$1 = (function (){var statearr_29078 = state_29059;
(statearr_29078[(19)] = inst_28973__$1);

return statearr_29078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29059__$1,(22),inst_28974);
} else {
if((state_val_29060 === (31))){
var inst_29057 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29059__$1,inst_29057);
} else {
if((state_val_29060 === (32))){
var inst_29013 = (state_29059[(16)]);
var inst_29018 = inst_29013.cljs$lang$protocol_mask$partition0$;
var inst_29019 = (inst_29018 & (64));
var inst_29020 = inst_29013.cljs$core$ISeq$;
var inst_29021 = (inst_29019) || (inst_29020);
var state_29059__$1 = state_29059;
if(cljs.core.truth_(inst_29021)){
var statearr_29079_29162 = state_29059__$1;
(statearr_29079_29162[(1)] = (35));

} else {
var statearr_29080_29163 = state_29059__$1;
(statearr_29080_29163[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (40))){
var inst_29034 = (state_29059[(20)]);
var inst_29033 = (state_29059[(2)]);
var inst_29034__$1 = cljs.core.get.call(null,inst_29033,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29035 = cljs.core.get.call(null,inst_29033,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29036 = cljs.core.not_empty.call(null,inst_29034__$1);
var state_29059__$1 = (function (){var statearr_29081 = state_29059;
(statearr_29081[(20)] = inst_29034__$1);

(statearr_29081[(21)] = inst_29035);

return statearr_29081;
})();
if(cljs.core.truth_(inst_29036)){
var statearr_29082_29164 = state_29059__$1;
(statearr_29082_29164[(1)] = (41));

} else {
var statearr_29083_29165 = state_29059__$1;
(statearr_29083_29165[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (33))){
var state_29059__$1 = state_29059;
var statearr_29084_29166 = state_29059__$1;
(statearr_29084_29166[(2)] = false);

(statearr_29084_29166[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (13))){
var inst_28933 = (state_29059[(22)]);
var inst_28937 = cljs.core.chunk_first.call(null,inst_28933);
var inst_28938 = cljs.core.chunk_rest.call(null,inst_28933);
var inst_28939 = cljs.core.count.call(null,inst_28937);
var inst_28920 = inst_28938;
var inst_28921 = inst_28937;
var inst_28922 = inst_28939;
var inst_28923 = (0);
var state_29059__$1 = (function (){var statearr_29085 = state_29059;
(statearr_29085[(7)] = inst_28921);

(statearr_29085[(8)] = inst_28920);

(statearr_29085[(9)] = inst_28923);

(statearr_29085[(10)] = inst_28922);

return statearr_29085;
})();
var statearr_29086_29167 = state_29059__$1;
(statearr_29086_29167[(2)] = null);

(statearr_29086_29167[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (22))){
var inst_28973 = (state_29059[(19)]);
var inst_28977 = (state_29059[(23)]);
var inst_28976 = (state_29059[(24)]);
var inst_28981 = (state_29059[(25)]);
var inst_28976__$1 = (state_29059[(2)]);
var inst_28977__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28976__$1);
var inst_28978 = (function (){var all_files = inst_28973;
var res_SINGLEQUOTE_ = inst_28976__$1;
var res = inst_28977__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28973,inst_28977,inst_28976,inst_28981,inst_28976__$1,inst_28977__$1,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28656_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28656_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28973,inst_28977,inst_28976,inst_28981,inst_28976__$1,inst_28977__$1,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28979 = cljs.core.filter.call(null,inst_28978,inst_28976__$1);
var inst_28980 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28981__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28980);
var inst_28982 = cljs.core.not_empty.call(null,inst_28981__$1);
var state_29059__$1 = (function (){var statearr_29087 = state_29059;
(statearr_29087[(23)] = inst_28977__$1);

(statearr_29087[(24)] = inst_28976__$1);

(statearr_29087[(26)] = inst_28979);

(statearr_29087[(25)] = inst_28981__$1);

return statearr_29087;
})();
if(cljs.core.truth_(inst_28982)){
var statearr_29088_29168 = state_29059__$1;
(statearr_29088_29168[(1)] = (23));

} else {
var statearr_29089_29169 = state_29059__$1;
(statearr_29089_29169[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (36))){
var state_29059__$1 = state_29059;
var statearr_29090_29170 = state_29059__$1;
(statearr_29090_29170[(2)] = false);

(statearr_29090_29170[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (41))){
var inst_29034 = (state_29059[(20)]);
var inst_29038 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29039 = cljs.core.map.call(null,inst_29038,inst_29034);
var inst_29040 = cljs.core.pr_str.call(null,inst_29039);
var inst_29041 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29040)].join('');
var inst_29042 = figwheel.client.utils.log.call(null,inst_29041);
var state_29059__$1 = state_29059;
var statearr_29091_29171 = state_29059__$1;
(statearr_29091_29171[(2)] = inst_29042);

(statearr_29091_29171[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (43))){
var inst_29035 = (state_29059[(21)]);
var inst_29045 = (state_29059[(2)]);
var inst_29046 = cljs.core.not_empty.call(null,inst_29035);
var state_29059__$1 = (function (){var statearr_29092 = state_29059;
(statearr_29092[(27)] = inst_29045);

return statearr_29092;
})();
if(cljs.core.truth_(inst_29046)){
var statearr_29093_29172 = state_29059__$1;
(statearr_29093_29172[(1)] = (44));

} else {
var statearr_29094_29173 = state_29059__$1;
(statearr_29094_29173[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (29))){
var inst_28973 = (state_29059[(19)]);
var inst_28977 = (state_29059[(23)]);
var inst_28976 = (state_29059[(24)]);
var inst_29013 = (state_29059[(16)]);
var inst_28979 = (state_29059[(26)]);
var inst_28981 = (state_29059[(25)]);
var inst_29009 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29012 = (function (){var all_files = inst_28973;
var res_SINGLEQUOTE_ = inst_28976;
var res = inst_28977;
var files_not_loaded = inst_28979;
var dependencies_that_loaded = inst_28981;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_29013,inst_28979,inst_28981,inst_29009,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29011){
var map__29095 = p__29011;
var map__29095__$1 = ((((!((map__29095 == null)))?((((map__29095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29095):map__29095);
var namespace = cljs.core.get.call(null,map__29095__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_29013,inst_28979,inst_28981,inst_29009,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29013__$1 = cljs.core.group_by.call(null,inst_29012,inst_28979);
var inst_29015 = (inst_29013__$1 == null);
var inst_29016 = cljs.core.not.call(null,inst_29015);
var state_29059__$1 = (function (){var statearr_29097 = state_29059;
(statearr_29097[(28)] = inst_29009);

(statearr_29097[(16)] = inst_29013__$1);

return statearr_29097;
})();
if(inst_29016){
var statearr_29098_29174 = state_29059__$1;
(statearr_29098_29174[(1)] = (32));

} else {
var statearr_29099_29175 = state_29059__$1;
(statearr_29099_29175[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (44))){
var inst_29035 = (state_29059[(21)]);
var inst_29048 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29035);
var inst_29049 = cljs.core.pr_str.call(null,inst_29048);
var inst_29050 = [cljs.core.str("not required: "),cljs.core.str(inst_29049)].join('');
var inst_29051 = figwheel.client.utils.log.call(null,inst_29050);
var state_29059__$1 = state_29059;
var statearr_29100_29176 = state_29059__$1;
(statearr_29100_29176[(2)] = inst_29051);

(statearr_29100_29176[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (6))){
var inst_28954 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
var statearr_29101_29177 = state_29059__$1;
(statearr_29101_29177[(2)] = inst_28954);

(statearr_29101_29177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (28))){
var inst_28979 = (state_29059[(26)]);
var inst_29006 = (state_29059[(2)]);
var inst_29007 = cljs.core.not_empty.call(null,inst_28979);
var state_29059__$1 = (function (){var statearr_29102 = state_29059;
(statearr_29102[(29)] = inst_29006);

return statearr_29102;
})();
if(cljs.core.truth_(inst_29007)){
var statearr_29103_29178 = state_29059__$1;
(statearr_29103_29178[(1)] = (29));

} else {
var statearr_29104_29179 = state_29059__$1;
(statearr_29104_29179[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (25))){
var inst_28977 = (state_29059[(23)]);
var inst_28993 = (state_29059[(2)]);
var inst_28994 = cljs.core.not_empty.call(null,inst_28977);
var state_29059__$1 = (function (){var statearr_29105 = state_29059;
(statearr_29105[(30)] = inst_28993);

return statearr_29105;
})();
if(cljs.core.truth_(inst_28994)){
var statearr_29106_29180 = state_29059__$1;
(statearr_29106_29180[(1)] = (26));

} else {
var statearr_29107_29181 = state_29059__$1;
(statearr_29107_29181[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (34))){
var inst_29028 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
if(cljs.core.truth_(inst_29028)){
var statearr_29108_29182 = state_29059__$1;
(statearr_29108_29182[(1)] = (38));

} else {
var statearr_29109_29183 = state_29059__$1;
(statearr_29109_29183[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (17))){
var state_29059__$1 = state_29059;
var statearr_29110_29184 = state_29059__$1;
(statearr_29110_29184[(2)] = recompile_dependents);

(statearr_29110_29184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (3))){
var state_29059__$1 = state_29059;
var statearr_29111_29185 = state_29059__$1;
(statearr_29111_29185[(2)] = null);

(statearr_29111_29185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (12))){
var inst_28950 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
var statearr_29112_29186 = state_29059__$1;
(statearr_29112_29186[(2)] = inst_28950);

(statearr_29112_29186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (2))){
var inst_28912 = (state_29059[(13)]);
var inst_28919 = cljs.core.seq.call(null,inst_28912);
var inst_28920 = inst_28919;
var inst_28921 = null;
var inst_28922 = (0);
var inst_28923 = (0);
var state_29059__$1 = (function (){var statearr_29113 = state_29059;
(statearr_29113[(7)] = inst_28921);

(statearr_29113[(8)] = inst_28920);

(statearr_29113[(9)] = inst_28923);

(statearr_29113[(10)] = inst_28922);

return statearr_29113;
})();
var statearr_29114_29187 = state_29059__$1;
(statearr_29114_29187[(2)] = null);

(statearr_29114_29187[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (23))){
var inst_28973 = (state_29059[(19)]);
var inst_28977 = (state_29059[(23)]);
var inst_28976 = (state_29059[(24)]);
var inst_28979 = (state_29059[(26)]);
var inst_28981 = (state_29059[(25)]);
var inst_28984 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28986 = (function (){var all_files = inst_28973;
var res_SINGLEQUOTE_ = inst_28976;
var res = inst_28977;
var files_not_loaded = inst_28979;
var dependencies_that_loaded = inst_28981;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28984,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28985){
var map__29115 = p__28985;
var map__29115__$1 = ((((!((map__29115 == null)))?((((map__29115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29115):map__29115);
var request_url = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28984,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28987 = cljs.core.reverse.call(null,inst_28981);
var inst_28988 = cljs.core.map.call(null,inst_28986,inst_28987);
var inst_28989 = cljs.core.pr_str.call(null,inst_28988);
var inst_28990 = figwheel.client.utils.log.call(null,inst_28989);
var state_29059__$1 = (function (){var statearr_29117 = state_29059;
(statearr_29117[(31)] = inst_28984);

return statearr_29117;
})();
var statearr_29118_29188 = state_29059__$1;
(statearr_29118_29188[(2)] = inst_28990);

(statearr_29118_29188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (35))){
var state_29059__$1 = state_29059;
var statearr_29119_29189 = state_29059__$1;
(statearr_29119_29189[(2)] = true);

(statearr_29119_29189[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (19))){
var inst_28963 = (state_29059[(12)]);
var inst_28969 = figwheel.client.file_reloading.expand_files.call(null,inst_28963);
var state_29059__$1 = state_29059;
var statearr_29120_29190 = state_29059__$1;
(statearr_29120_29190[(2)] = inst_28969);

(statearr_29120_29190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (11))){
var state_29059__$1 = state_29059;
var statearr_29121_29191 = state_29059__$1;
(statearr_29121_29191[(2)] = null);

(statearr_29121_29191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (9))){
var inst_28952 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
var statearr_29122_29192 = state_29059__$1;
(statearr_29122_29192[(2)] = inst_28952);

(statearr_29122_29192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (5))){
var inst_28923 = (state_29059[(9)]);
var inst_28922 = (state_29059[(10)]);
var inst_28925 = (inst_28923 < inst_28922);
var inst_28926 = inst_28925;
var state_29059__$1 = state_29059;
if(cljs.core.truth_(inst_28926)){
var statearr_29123_29193 = state_29059__$1;
(statearr_29123_29193[(1)] = (7));

} else {
var statearr_29124_29194 = state_29059__$1;
(statearr_29124_29194[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (14))){
var inst_28933 = (state_29059[(22)]);
var inst_28942 = cljs.core.first.call(null,inst_28933);
var inst_28943 = figwheel.client.file_reloading.eval_body.call(null,inst_28942,opts);
var inst_28944 = cljs.core.next.call(null,inst_28933);
var inst_28920 = inst_28944;
var inst_28921 = null;
var inst_28922 = (0);
var inst_28923 = (0);
var state_29059__$1 = (function (){var statearr_29125 = state_29059;
(statearr_29125[(7)] = inst_28921);

(statearr_29125[(8)] = inst_28920);

(statearr_29125[(9)] = inst_28923);

(statearr_29125[(32)] = inst_28943);

(statearr_29125[(10)] = inst_28922);

return statearr_29125;
})();
var statearr_29126_29195 = state_29059__$1;
(statearr_29126_29195[(2)] = null);

(statearr_29126_29195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (45))){
var state_29059__$1 = state_29059;
var statearr_29127_29196 = state_29059__$1;
(statearr_29127_29196[(2)] = null);

(statearr_29127_29196[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (26))){
var inst_28973 = (state_29059[(19)]);
var inst_28977 = (state_29059[(23)]);
var inst_28976 = (state_29059[(24)]);
var inst_28979 = (state_29059[(26)]);
var inst_28981 = (state_29059[(25)]);
var inst_28996 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28998 = (function (){var all_files = inst_28973;
var res_SINGLEQUOTE_ = inst_28976;
var res = inst_28977;
var files_not_loaded = inst_28979;
var dependencies_that_loaded = inst_28981;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28996,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28997){
var map__29128 = p__28997;
var map__29128__$1 = ((((!((map__29128 == null)))?((((map__29128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29128):map__29128);
var namespace = cljs.core.get.call(null,map__29128__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28996,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28999 = cljs.core.map.call(null,inst_28998,inst_28977);
var inst_29000 = cljs.core.pr_str.call(null,inst_28999);
var inst_29001 = figwheel.client.utils.log.call(null,inst_29000);
var inst_29002 = (function (){var all_files = inst_28973;
var res_SINGLEQUOTE_ = inst_28976;
var res = inst_28977;
var files_not_loaded = inst_28979;
var dependencies_that_loaded = inst_28981;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28996,inst_28998,inst_28999,inst_29000,inst_29001,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28996,inst_28998,inst_28999,inst_29000,inst_29001,state_val_29060,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29003 = setTimeout(inst_29002,(10));
var state_29059__$1 = (function (){var statearr_29130 = state_29059;
(statearr_29130[(33)] = inst_29001);

(statearr_29130[(34)] = inst_28996);

return statearr_29130;
})();
var statearr_29131_29197 = state_29059__$1;
(statearr_29131_29197[(2)] = inst_29003);

(statearr_29131_29197[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (16))){
var state_29059__$1 = state_29059;
var statearr_29132_29198 = state_29059__$1;
(statearr_29132_29198[(2)] = reload_dependents);

(statearr_29132_29198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (38))){
var inst_29013 = (state_29059[(16)]);
var inst_29030 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29013);
var state_29059__$1 = state_29059;
var statearr_29133_29199 = state_29059__$1;
(statearr_29133_29199[(2)] = inst_29030);

(statearr_29133_29199[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (30))){
var state_29059__$1 = state_29059;
var statearr_29134_29200 = state_29059__$1;
(statearr_29134_29200[(2)] = null);

(statearr_29134_29200[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (10))){
var inst_28933 = (state_29059[(22)]);
var inst_28935 = cljs.core.chunked_seq_QMARK_.call(null,inst_28933);
var state_29059__$1 = state_29059;
if(inst_28935){
var statearr_29135_29201 = state_29059__$1;
(statearr_29135_29201[(1)] = (13));

} else {
var statearr_29136_29202 = state_29059__$1;
(statearr_29136_29202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (18))){
var inst_28967 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
if(cljs.core.truth_(inst_28967)){
var statearr_29137_29203 = state_29059__$1;
(statearr_29137_29203[(1)] = (19));

} else {
var statearr_29138_29204 = state_29059__$1;
(statearr_29138_29204[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (42))){
var state_29059__$1 = state_29059;
var statearr_29139_29205 = state_29059__$1;
(statearr_29139_29205[(2)] = null);

(statearr_29139_29205[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (37))){
var inst_29025 = (state_29059[(2)]);
var state_29059__$1 = state_29059;
var statearr_29140_29206 = state_29059__$1;
(statearr_29140_29206[(2)] = inst_29025);

(statearr_29140_29206[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29060 === (8))){
var inst_28920 = (state_29059[(8)]);
var inst_28933 = (state_29059[(22)]);
var inst_28933__$1 = cljs.core.seq.call(null,inst_28920);
var state_29059__$1 = (function (){var statearr_29141 = state_29059;
(statearr_29141[(22)] = inst_28933__$1);

return statearr_29141;
})();
if(inst_28933__$1){
var statearr_29142_29207 = state_29059__$1;
(statearr_29142_29207[(1)] = (10));

} else {
var statearr_29143_29208 = state_29059__$1;
(statearr_29143_29208[(1)] = (11));

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
}
});})(c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22531__auto__,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto____0 = (function (){
var statearr_29147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29147[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto__);

(statearr_29147[(1)] = (1));

return statearr_29147;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto____1 = (function (state_29059){
while(true){
var ret_value__22533__auto__ = (function (){try{while(true){
var result__22534__auto__ = switch__22531__auto__.call(null,state_29059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22534__auto__;
}
break;
}
}catch (e29148){if((e29148 instanceof Object)){
var ex__22535__auto__ = e29148;
var statearr_29149_29209 = state_29059;
(statearr_29149_29209[(5)] = ex__22535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29210 = state_29059;
state_29059 = G__29210;
continue;
} else {
return ret_value__22533__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto__ = function(state_29059){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto____1.call(this,state_29059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22532__auto__;
})()
;})(switch__22531__auto__,c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22598__auto__ = (function (){var statearr_29150 = f__22597__auto__.call(null);
(statearr_29150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22596__auto__);

return statearr_29150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22598__auto__);
});})(c__22596__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22596__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29213,link){
var map__29216 = p__29213;
var map__29216__$1 = ((((!((map__29216 == null)))?((((map__29216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29216):map__29216);
var file = cljs.core.get.call(null,map__29216__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29216,map__29216__$1,file){
return (function (p1__29211_SHARP_,p2__29212_SHARP_){
if(cljs.core._EQ_.call(null,p1__29211_SHARP_,p2__29212_SHARP_)){
return p1__29211_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29216,map__29216__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29222){
var map__29223 = p__29222;
var map__29223__$1 = ((((!((map__29223 == null)))?((((map__29223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29223):map__29223);
var match_length = cljs.core.get.call(null,map__29223__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29223__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29218_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29218_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29225 = [];
var len__20174__auto___29228 = arguments.length;
var i__20175__auto___29229 = (0);
while(true){
if((i__20175__auto___29229 < len__20174__auto___29228)){
args29225.push((arguments[i__20175__auto___29229]));

var G__29230 = (i__20175__auto___29229 + (1));
i__20175__auto___29229 = G__29230;
continue;
} else {
}
break;
}

var G__29227 = args29225.length;
switch (G__29227) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29225.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29232_SHARP_,p2__29233_SHARP_){
return cljs.core.assoc.call(null,p1__29232_SHARP_,cljs.core.get.call(null,p2__29233_SHARP_,key),p2__29233_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29234){
var map__29237 = p__29234;
var map__29237__$1 = ((((!((map__29237 == null)))?((((map__29237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29237):map__29237);
var f_data = map__29237__$1;
var file = cljs.core.get.call(null,map__29237__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29239,files_msg){
var map__29246 = p__29239;
var map__29246__$1 = ((((!((map__29246 == null)))?((((map__29246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29246):map__29246);
var opts = map__29246__$1;
var on_cssload = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29248_29252 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29249_29253 = null;
var count__29250_29254 = (0);
var i__29251_29255 = (0);
while(true){
if((i__29251_29255 < count__29250_29254)){
var f_29256 = cljs.core._nth.call(null,chunk__29249_29253,i__29251_29255);
figwheel.client.file_reloading.reload_css_file.call(null,f_29256);

var G__29257 = seq__29248_29252;
var G__29258 = chunk__29249_29253;
var G__29259 = count__29250_29254;
var G__29260 = (i__29251_29255 + (1));
seq__29248_29252 = G__29257;
chunk__29249_29253 = G__29258;
count__29250_29254 = G__29259;
i__29251_29255 = G__29260;
continue;
} else {
var temp__4425__auto___29261 = cljs.core.seq.call(null,seq__29248_29252);
if(temp__4425__auto___29261){
var seq__29248_29262__$1 = temp__4425__auto___29261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29248_29262__$1)){
var c__19919__auto___29263 = cljs.core.chunk_first.call(null,seq__29248_29262__$1);
var G__29264 = cljs.core.chunk_rest.call(null,seq__29248_29262__$1);
var G__29265 = c__19919__auto___29263;
var G__29266 = cljs.core.count.call(null,c__19919__auto___29263);
var G__29267 = (0);
seq__29248_29252 = G__29264;
chunk__29249_29253 = G__29265;
count__29250_29254 = G__29266;
i__29251_29255 = G__29267;
continue;
} else {
var f_29268 = cljs.core.first.call(null,seq__29248_29262__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29268);

var G__29269 = cljs.core.next.call(null,seq__29248_29262__$1);
var G__29270 = null;
var G__29271 = (0);
var G__29272 = (0);
seq__29248_29252 = G__29269;
chunk__29249_29253 = G__29270;
count__29250_29254 = G__29271;
i__29251_29255 = G__29272;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29246,map__29246__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29246,map__29246__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map