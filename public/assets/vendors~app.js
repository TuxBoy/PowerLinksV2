(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app"],{

/***/ "./node_modules/choices.js/public/assets/scripts/choices.js":
/*!******************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/scripts/choices.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	try {
		return (key in target) // Properties are safe to merge if they don't exist in the target yet,
			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
	} catch (unused) {
		// Counterintuitively, it's safe to merge any property on a target that causes the `in` operator to throw.
		// This happens when trying to copy an object in the source over a plain string in the target.
		return false
	}
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(6)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t)}var t,n,c;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]))}L&&(k+=1)}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m)}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),c&&o(t,c),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n,s;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),s&&r(t,s),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=S+y,C=1<<S-1,I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O)}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/fuse.js/dist/fuse.js
var dist_fuse = __webpack_require__(2);
var fuse_default = /*#__PURE__*/__webpack_require__.n(dist_fuse);

// EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__(0);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}



// CONCATENATED MODULE: ./src/scripts/reducers/items.js
var defaultState = [];
function items_items(state, action) {
  if (state === void 0) {
    state = defaultState;
  }

  switch (action.type) {
    case 'ADD_ITEM':
      {
        // Add object to items array
        var newState = [].concat(state, [{
          id: action.id,
          choiceId: action.choiceId,
          groupId: action.groupId,
          value: action.value,
          label: action.label,
          active: true,
          highlighted: false,
          customProperties: action.customProperties,
          placeholder: action.placeholder || false,
          keyCode: null
        }]);
        return newState.map(function (obj) {
          var item = obj;
          item.highlighted = false;
          return item;
        });
      }

    case 'REMOVE_ITEM':
      {
        // Set item to inactive
        return state.map(function (obj) {
          var item = obj;

          if (item.id === action.id) {
            item.active = false;
          }

          return item;
        });
      }

    case 'HIGHLIGHT_ITEM':
      {
        return state.map(function (obj) {
          var item = obj;

          if (item.id === action.id) {
            item.highlighted = action.highlighted;
          }

          return item;
        });
      }

    default:
      {
        return state;
      }
  }
}
// CONCATENATED MODULE: ./src/scripts/reducers/groups.js
var groups_defaultState = [];
function groups(state, action) {
  if (state === void 0) {
    state = groups_defaultState;
  }

  switch (action.type) {
    case 'ADD_GROUP':
      {
        return [].concat(state, [{
          id: action.id,
          value: action.value,
          active: action.active,
          disabled: action.disabled
        }]);
      }

    case 'CLEAR_CHOICES':
      {
        return [];
      }

    default:
      {
        return state;
      }
  }
}
// CONCATENATED MODULE: ./src/scripts/reducers/choices.js
var choices_defaultState = [];
function choices_choices(state, action) {
  if (state === void 0) {
    state = choices_defaultState;
  }

  switch (action.type) {
    case 'ADD_CHOICE':
      {
        /*
            A disabled choice appears in the choice dropdown but cannot be selected
            A selected choice has been added to the passed input's value (added as an item)
            An active choice appears within the choice dropdown
         */
        return [].concat(state, [{
          id: action.id,
          elementId: action.elementId,
          groupId: action.groupId,
          value: action.value,
          label: action.label || action.value,
          disabled: action.disabled || false,
          selected: false,
          active: true,
          score: 9999,
          customProperties: action.customProperties,
          placeholder: action.placeholder || false,
          keyCode: null
        }]);
      }

    case 'ADD_ITEM':
      {
        // If all choices need to be activated
        if (action.activateOptions) {
          return state.map(function (obj) {
            var choice = obj;
            choice.active = action.active;
            return choice;
          });
        } // When an item is added and it has an associated choice,
        // we want to disable it so it can't be chosen again


        if (action.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;

            if (choice.id === parseInt(action.choiceId, 10)) {
              choice.selected = true;
            }

            return choice;
          });
        }

        return state;
      }

    case 'REMOVE_ITEM':
      {
        // When an item is removed and it has an associated choice,
        // we want to re-enable it so it can be chosen again
        if (action.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;

            if (choice.id === parseInt(action.choiceId, 10)) {
              choice.selected = false;
            }

            return choice;
          });
        }

        return state;
      }

    case 'FILTER_CHOICES':
      {
        return state.map(function (obj) {
          var choice = obj; // Set active state based on whether choice is
          // within filtered results

          choice.active = action.results.some(function (_ref) {
            var item = _ref.item,
                score = _ref.score;

            if (item.id === choice.id) {
              choice.score = score;
              return true;
            }

            return false;
          });
          return choice;
        });
      }

    case 'ACTIVATE_CHOICES':
      {
        return state.map(function (obj) {
          var choice = obj;
          choice.active = action.active;
          return choice;
        });
      }

    case 'CLEAR_CHOICES':
      {
        return choices_defaultState;
      }

    default:
      {
        return state;
      }
  }
}
// CONCATENATED MODULE: ./src/scripts/reducers/general.js
var general_defaultState = {
  loading: false
};

var general = function general(state, action) {
  if (state === void 0) {
    state = general_defaultState;
  }

  switch (action.type) {
    case 'SET_IS_LOADING':
      {
        return {
          loading: action.isLoading
        };
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ var reducers_general = (general);
// CONCATENATED MODULE: ./src/scripts/lib/utils.js
/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
/**
 * @param {number} length
 * @returns {string}
 */

var generateChars = function generateChars(length) {
  return Array.from({
    length: length
  }, function () {
    return getRandomNumber(0, 36).toString(36);
  }).join('');
};
/**
 * @param {HTMLInputElement | HTMLSelectElement} element
 * @param {string} prefix
 * @returns {string}
 */

var generateId = function generateId(element, prefix) {
  var id = element.id || element.name && element.name + "-" + generateChars(2) || generateChars(4);
  id = id.replace(/(:|\.|\[|\]|,)/g, '');
  id = prefix + "-" + id;
  return id;
};
/**
 * @param {any} obj
 * @returns {string}
 */

var getType = function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};
/**
 * @param {string} type
 * @param {any} obj
 * @returns {boolean}
 */

var isType = function isType(type, obj) {
  return obj !== undefined && obj !== null && getType(obj) === type;
};
/**
 * @param {HTMLElement} element
 * @param {HTMLElement} [wrapper={HTMLDivElement}]
 * @returns {HTMLElement}
 */

var utils_wrap = function wrap(element, wrapper) {
  if (wrapper === void 0) {
    wrapper = document.createElement('div');
  }

  if (element.nextSibling) {
    element.parentNode.insertBefore(wrapper, element.nextSibling);
  } else {
    element.parentNode.appendChild(wrapper);
  }

  return wrapper.appendChild(element);
};
/**
 * @param {Element} startEl
 * @param {string} selector
 * @param {1 | -1} direction
 * @returns {Element | undefined}
 */

var getAdjacentEl = function getAdjacentEl(startEl, selector, direction) {
  if (direction === void 0) {
    direction = 1;
  }

  if (!(startEl instanceof Element) || typeof selector !== 'string') {
    return undefined;
  }

  var prop = (direction > 0 ? 'next' : 'previous') + "ElementSibling";
  var sibling = startEl[prop];

  while (sibling) {
    if (sibling.matches(selector)) {
      return sibling;
    }

    sibling = sibling[prop];
  }

  return sibling;
};
/**
 * @param {Element} element
 * @param {Element} parent
 * @param {-1 | 1} direction
 * @returns {boolean}
 */

var isScrolledIntoView = function isScrolledIntoView(element, parent, direction) {
  if (direction === void 0) {
    direction = 1;
  }

  if (!element) {
    return false;
  }

  var isVisible;

  if (direction > 0) {
    // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
  } else {
    // In view from top
    isVisible = element.offsetTop >= parent.scrollTop;
  }

  return isVisible;
};
/**
 * @param {any} value
 * @returns {any}
 */

var sanitise = function sanitise(value) {
  if (typeof value !== 'string') {
    return value;
  }

  return value.replace(/&/g, '&amp;').replace(/>/g, '&rt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
};
/**
 * @returns {() => (str: string) => Element}
 */

var strToEl = function () {
  var tmpEl = document.createElement('div');
  return function (str) {
    var cleanedInput = str.trim();
    tmpEl.innerHTML = cleanedInput;
    var firldChild = tmpEl.children[0];

    while (tmpEl.firstChild) {
      tmpEl.removeChild(tmpEl.firstChild);
    }

    return firldChild;
  };
}();
/**
 * @param {{ label?: string, value: string }} a
 * @param {{ label?: string, value: string }} b
 * @returns {number}
 */

var sortByAlpha = function sortByAlpha(_ref, _ref2) {
  var value = _ref.value,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? value : _ref$label;
  var value2 = _ref2.value,
      _ref2$label = _ref2.label,
      label2 = _ref2$label === void 0 ? value2 : _ref2$label;
  return label.localeCompare(label2, [], {
    sensitivity: 'base',
    ignorePunctuation: true,
    numeric: true
  });
};
/**
 * @param {{ score: number }} a
 * @param {{ score: number }} b
 */

var sortByScore = function sortByScore(a, b) {
  return a.score - b.score;
};
/**
 * @param {HTMLElement} element
 * @param {string} type
 * @param {object} customArgs
 */

var dispatchEvent = function dispatchEvent(element, type, customArgs) {
  if (customArgs === void 0) {
    customArgs = null;
  }

  var event = new CustomEvent(type, {
    detail: customArgs,
    bubbles: true,
    cancelable: true
  });
  return element.dispatchEvent(event);
};
/**
 * @param {array} array
 * @param {any} value
 * @param {string} [key="value"]
 * @returns {boolean}
 */

var existsInArray = function existsInArray(array, value, key) {
  if (key === void 0) {
    key = 'value';
  }

  return array.some(function (item) {
    if (typeof value === 'string') {
      return item[key] === value.trim();
    }

    return item[key] === value;
  });
};
/**
 * @param {any} obj
 * @returns {any}
 */

var cloneObject = function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
};
/**
 * Returns an array of keys present on the first but missing on the second object
 * @param {object} a
 * @param {object} b
 * @returns {string[]}
 */

var diff = function diff(a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return aKeys.filter(function (i) {
    return bKeys.indexOf(i) < 0;
  });
};
// CONCATENATED MODULE: ./src/scripts/reducers/index.js






var appReducer = combineReducers({
  items: items_items,
  groups: groups,
  choices: choices_choices,
  general: reducers_general
});

var reducers_rootReducer = function rootReducer(passedState, action) {
  var state = passedState; // If we are clearing all items, groups and options we reassign
  // state and then pass that state to our proper reducer. This isn't
  // mutating our actual state
  // See: http://stackoverflow.com/a/35641992

  if (action.type === 'CLEAR_ALL') {
    state = undefined;
  } else if (action.type === 'RESET_TO') {
    return cloneObject(action.state);
  }

  return appReducer(state, action);
};

/* harmony default export */ var reducers = (reducers_rootReducer);
// CONCATENATED MODULE: ./src/scripts/store/store.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 * @typedef {import('../../../types/index').Choices.Group} Group
 * @typedef {import('../../../types/index').Choices.Item} Item
 */

var store_Store =
/*#__PURE__*/
function () {
  function Store() {
    this._store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  /**
   * Subscribe store to function call (wrapped Redux method)
   * @param  {Function} onChange Function to trigger when state changes
   * @return
   */


  var _proto = Store.prototype;

  _proto.subscribe = function subscribe(onChange) {
    this._store.subscribe(onChange);
  }
  /**
   * Dispatch event to store (wrapped Redux method)
   * @param  {{ type: string, [x: string]: any }} action Action to trigger
   * @return
   */
  ;

  _proto.dispatch = function dispatch(action) {
    this._store.dispatch(action);
  }
  /**
   * Get store object (wrapping Redux method)
   * @returns {object} State
   */
  ;

  /**
   * Get loading state from store
   * @returns {boolean} Loading State
   */
  _proto.isLoading = function isLoading() {
    return this.state.general.loading;
  }
  /**
   * Get single choice by it's ID
   * @param {string} id
   * @returns {Choice | undefined} Found choice
   */
  ;

  _proto.getChoiceById = function getChoiceById(id) {
    return this.activeChoices.find(function (choice) {
      return choice.id === parseInt(id, 10);
    });
  }
  /**
   * Get group by group id
   * @param  {number} id Group ID
   * @returns {Group | undefined} Group data
   */
  ;

  _proto.getGroupById = function getGroupById(id) {
    return this.groups.find(function (group) {
      return group.id === id;
    });
  };

  _createClass(Store, [{
    key: "state",
    get: function get() {
      return this._store.getState();
    }
    /**
     * Get items from store
     * @returns {Item[]} Item objects
     */

  }, {
    key: "items",
    get: function get() {
      return this.state.items;
    }
    /**
     * Get active items from store
     * @returns {Item[]} Item objects
     */

  }, {
    key: "activeItems",
    get: function get() {
      return this.items.filter(function (item) {
        return item.active === true;
      });
    }
    /**
     * Get highlighted items from store
     * @returns {Item[]} Item objects
     */

  }, {
    key: "highlightedActiveItems",
    get: function get() {
      return this.items.filter(function (item) {
        return item.active && item.highlighted;
      });
    }
    /**
     * Get choices from store
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "choices",
    get: function get() {
      return this.state.choices;
    }
    /**
     * Get active choices from store
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "activeChoices",
    get: function get() {
      return this.choices.filter(function (choice) {
        return choice.active === true;
      });
    }
    /**
     * Get selectable choices from store
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "selectableChoices",
    get: function get() {
      return this.choices.filter(function (choice) {
        return choice.disabled !== true;
      });
    }
    /**
     * Get choices that can be searched (excluding placeholders)
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "searchableChoices",
    get: function get() {
      return this.selectableChoices.filter(function (choice) {
        return choice.placeholder !== true;
      });
    }
    /**
     * Get placeholder choice from store
     * @returns {Choice | undefined} Found placeholder
     */

  }, {
    key: "placeholderChoice",
    get: function get() {
      return [].concat(this.choices).reverse().find(function (choice) {
        return choice.placeholder === true;
      });
    }
    /**
     * Get groups from store
     * @returns {Group[]} Group objects
     */

  }, {
    key: "groups",
    get: function get() {
      return this.state.groups;
    }
    /**
     * Get active groups from store
     * @returns {Group[]} Group objects
     */

  }, {
    key: "activeGroups",
    get: function get() {
      var groups = this.groups,
          choices = this.choices;
      return groups.filter(function (group) {
        var isActive = group.active === true && group.disabled === false;
        var hasActiveOptions = choices.some(function (choice) {
          return choice.active === true && choice.disabled === false;
        });
        return isActive && hasActiveOptions;
      }, []);
    }
  }]);

  return Store;
}();


// CONCATENATED MODULE: ./src/scripts/components/dropdown.js
function dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) dropdown_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */
var Dropdown =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   * }} args
   */
  function Dropdown(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.isActive = false;
  }
  /**
   * Bottom position of dropdown in viewport coordinates
   * @returns {number} Vertical position
   */


  var _proto = Dropdown.prototype;

  /**
   * Find element that matches passed selector
   * @param {string} selector
   * @returns {HTMLElement | null}
   */
  _proto.getChild = function getChild(selector) {
    return this.element.querySelector(selector);
  }
  /**
   * Show dropdown to user by adding active state class
   * @returns {this}
   */
  ;

  _proto.show = function show() {
    this.element.classList.add(this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isActive = true;
    return this;
  }
  /**
   * Hide dropdown from user
   * @returns {this}
   */
  ;

  _proto.hide = function hide() {
    this.element.classList.remove(this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'false');
    this.isActive = false;
    return this;
  };

  dropdown_createClass(Dropdown, [{
    key: "distanceFromTopWindow",
    get: function get() {
      return this.element.getBoundingClientRect().bottom;
    }
  }]);

  return Dropdown;
}();


// CONCATENATED MODULE: ./src/scripts/constants.js

/**
 * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../types/index').Choices.Options} Options
 */

/** @type {ClassNames} */

var DEFAULT_CLASSNAMES = {
  containerOuter: 'choices',
  containerInner: 'choices__inner',
  input: 'choices__input',
  inputCloned: 'choices__input--cloned',
  list: 'choices__list',
  listItems: 'choices__list--multiple',
  listSingle: 'choices__list--single',
  listDropdown: 'choices__list--dropdown',
  item: 'choices__item',
  itemSelectable: 'choices__item--selectable',
  itemDisabled: 'choices__item--disabled',
  itemChoice: 'choices__item--choice',
  placeholder: 'choices__placeholder',
  group: 'choices__group',
  groupHeading: 'choices__heading',
  button: 'choices__button',
  activeState: 'is-active',
  focusState: 'is-focused',
  openState: 'is-open',
  disabledState: 'is-disabled',
  highlightedState: 'is-highlighted',
  selectedState: 'is-selected',
  flippedState: 'is-flipped',
  loadingState: 'is-loading',
  noResults: 'has-no-results',
  noChoices: 'has-no-choices'
};
/** @type {Options} */

var DEFAULT_CONFIG = {
  items: [],
  choices: [],
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  addItems: true,
  addItemFilter: null,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  duplicateItemsAllowed: true,
  delimiter: ',',
  paste: true,
  searchEnabled: true,
  searchChoices: true,
  searchFloor: 1,
  searchResultLimit: 4,
  searchFields: ['label', 'value'],
  position: 'auto',
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  sorter: sortByAlpha,
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  prependValue: null,
  appendValue: null,
  renderSelectedChoices: 'auto',
  loadingText: 'Loading...',
  noResultsText: 'No results found',
  noChoicesText: 'No choices to choose from',
  itemSelectText: 'Press to select',
  uniqueItemText: 'Only unique values can be added',
  customAddItemText: 'Only values matching specific conditions can be added',
  addItemText: function addItemText(value) {
    return "Press Enter to add <b>\"" + sanitise(value) + "\"</b>";
  },
  maxItemText: function maxItemText(maxItemCount) {
    return "Only " + maxItemCount + " values can be added";
  },
  valueComparer: function valueComparer(value1, value2) {
    return value1 === value2;
  },
  fuseOptions: {
    includeScore: true
  },
  callbackOnInit: null,
  callbackOnCreateTemplates: null,
  classNames: DEFAULT_CLASSNAMES
};
var EVENTS = {
  showDropdown: 'showDropdown',
  hideDropdown: 'hideDropdown',
  change: 'change',
  choice: 'choice',
  search: 'search',
  addItem: 'addItem',
  removeItem: 'removeItem',
  highlightItem: 'highlightItem',
  highlightChoice: 'highlightChoice'
};
var ACTION_TYPES = {
  ADD_CHOICE: 'ADD_CHOICE',
  FILTER_CHOICES: 'FILTER_CHOICES',
  ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
  CLEAR_CHOICES: 'CLEAR_CHOICES',
  ADD_GROUP: 'ADD_GROUP',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
  CLEAR_ALL: 'CLEAR_ALL'
};
var KEY_CODES = {
  BACK_KEY: 46,
  DELETE_KEY: 8,
  ENTER_KEY: 13,
  A_KEY: 65,
  ESC_KEY: 27,
  UP_KEY: 38,
  DOWN_KEY: 40,
  PAGE_UP_KEY: 33,
  PAGE_DOWN_KEY: 34
};
var TEXT_TYPE = 'text';
var SELECT_ONE_TYPE = 'select-one';
var SELECT_MULTIPLE_TYPE = 'select-multiple';
var SCROLLING_SPEED = 4;
// CONCATENATED MODULE: ./src/scripts/components/container.js


/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */

var container_Container =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   *  position
   * }} args
   */
  function Container(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames,
        position = _ref.position;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.position = position;
    this.isOpen = false;
    this.isFlipped = false;
    this.isFocussed = false;
    this.isDisabled = false;
    this.isLoading = false;
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  var _proto = Container.prototype;

  _proto.addEventListeners = function addEventListeners() {
    this.element.addEventListener('focus', this._onFocus);
    this.element.addEventListener('blur', this._onBlur);
  };

  _proto.removeEventListeners = function removeEventListeners() {
    this.element.removeEventListener('focus', this._onFocus);
    this.element.removeEventListener('blur', this._onBlur);
  }
  /**
   * Determine whether container should be flipped based on passed
   * dropdown position
   * @param {number} dropdownPos
   * @returns {boolean}
   */
  ;

  _proto.shouldFlip = function shouldFlip(dropdownPos) {
    if (typeof dropdownPos !== 'number') {
      return false;
    } // If flip is enabled and the dropdown bottom position is
    // greater than the window height flip the dropdown.


    var shouldFlip = false;

    if (this.position === 'auto') {
      shouldFlip = !window.matchMedia("(min-height: " + (dropdownPos + 1) + "px)").matches;
    } else if (this.position === 'top') {
      shouldFlip = true;
    }

    return shouldFlip;
  }
  /**
   * @param {string} activeDescendantID
   */
  ;

  _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };

  _proto.removeActiveDescendant = function removeActiveDescendant() {
    this.element.removeAttribute('aria-activedescendant');
  }
  /**
   * @param {number} dropdownPos
   */
  ;

  _proto.open = function open(dropdownPos) {
    this.element.classList.add(this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isOpen = true;

    if (this.shouldFlip(dropdownPos)) {
      this.element.classList.add(this.classNames.flippedState);
      this.isFlipped = true;
    }
  };

  _proto.close = function close() {
    this.element.classList.remove(this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'false');
    this.removeActiveDescendant();
    this.isOpen = false; // A dropdown flips if it does not have space within the page

    if (this.isFlipped) {
      this.element.classList.remove(this.classNames.flippedState);
      this.isFlipped = false;
    }
  };

  _proto.focus = function focus() {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };

  _proto.addFocusState = function addFocusState() {
    this.element.classList.add(this.classNames.focusState);
  };

  _proto.removeFocusState = function removeFocusState() {
    this.element.classList.remove(this.classNames.focusState);
  };

  _proto.enable = function enable() {
    this.element.classList.remove(this.classNames.disabledState);
    this.element.removeAttribute('aria-disabled');

    if (this.type === SELECT_ONE_TYPE) {
      this.element.setAttribute('tabindex', '0');
    }

    this.isDisabled = false;
  };

  _proto.disable = function disable() {
    this.element.classList.add(this.classNames.disabledState);
    this.element.setAttribute('aria-disabled', 'true');

    if (this.type === SELECT_ONE_TYPE) {
      this.element.setAttribute('tabindex', '-1');
    }

    this.isDisabled = true;
  }
  /**
   * @param {HTMLElement} element
   */
  ;

  _proto.wrap = function wrap(element) {
    utils_wrap(element, this.element);
  }
  /**
   * @param {Element} element
   */
  ;

  _proto.unwrap = function unwrap(element) {
    // Move passed element outside this element
    this.element.parentNode.insertBefore(element, this.element); // Remove this element

    this.element.parentNode.removeChild(this.element);
  };

  _proto.addLoadingState = function addLoadingState() {
    this.element.classList.add(this.classNames.loadingState);
    this.element.setAttribute('aria-busy', 'true');
    this.isLoading = true;
  };

  _proto.removeLoadingState = function removeLoadingState() {
    this.element.classList.remove(this.classNames.loadingState);
    this.element.removeAttribute('aria-busy');
    this.isLoading = false;
  };

  _proto._onFocus = function _onFocus() {
    this.isFocussed = true;
  };

  _proto._onBlur = function _onBlur() {
    this.isFocussed = false;
  };

  return Container;
}();


// CONCATENATED MODULE: ./src/scripts/components/input.js
function input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function input_createClass(Constructor, protoProps, staticProps) { if (protoProps) input_defineProperties(Constructor.prototype, protoProps); if (staticProps) input_defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */

var input_Input =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLInputElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   *  preventPaste: boolean
   * }} args
   */
  function Input(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames,
        preventPaste = _ref.preventPaste;
    this.element = element;
    this.type = type;
    this.classNames = classNames;
    this.preventPaste = preventPaste;
    this.isFocussed = this.element === document.activeElement;
    this.isDisabled = element.disabled;
    this._onPaste = this._onPaste.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }
  /**
   * @param {string} placeholder
   */


  var _proto = Input.prototype;

  _proto.addEventListeners = function addEventListeners() {
    this.element.addEventListener('paste', this._onPaste);
    this.element.addEventListener('input', this._onInput, {
      passive: true
    });
    this.element.addEventListener('focus', this._onFocus, {
      passive: true
    });
    this.element.addEventListener('blur', this._onBlur, {
      passive: true
    });
  };

  _proto.removeEventListeners = function removeEventListeners() {
    this.element.removeEventListener('input', this._onInput, {
      passive: true
    });
    this.element.removeEventListener('paste', this._onPaste);
    this.element.removeEventListener('focus', this._onFocus, {
      passive: true
    });
    this.element.removeEventListener('blur', this._onBlur, {
      passive: true
    });
  };

  _proto.enable = function enable() {
    this.element.removeAttribute('disabled');
    this.isDisabled = false;
  };

  _proto.disable = function disable() {
    this.element.setAttribute('disabled', '');
    this.isDisabled = true;
  };

  _proto.focus = function focus() {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };

  _proto.blur = function blur() {
    if (this.isFocussed) {
      this.element.blur();
    }
  }
  /**
   * Set value of input to blank
   * @param {boolean} setWidth
   * @returns {this}
   */
  ;

  _proto.clear = function clear(setWidth) {
    if (setWidth === void 0) {
      setWidth = true;
    }

    if (this.element.value) {
      this.element.value = '';
    }

    if (setWidth) {
      this.setWidth();
    }

    return this;
  }
  /**
   * Set the correct input width based on placeholder
   * value or input value
   */
  ;

  _proto.setWidth = function setWidth() {
    // Resize input to contents or placeholder
    var _this$element = this.element,
        style = _this$element.style,
        value = _this$element.value,
        placeholder = _this$element.placeholder;
    style.minWidth = placeholder.length + 1 + "ch";
    style.width = value.length + 1 + "ch";
  }
  /**
   * @param {string} activeDescendantID
   */
  ;

  _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };

  _proto.removeActiveDescendant = function removeActiveDescendant() {
    this.element.removeAttribute('aria-activedescendant');
  };

  _proto._onInput = function _onInput() {
    if (this.type !== SELECT_ONE_TYPE) {
      this.setWidth();
    }
  }
  /**
   * @param {Event} event
   */
  ;

  _proto._onPaste = function _onPaste(event) {
    if (this.preventPaste) {
      event.preventDefault();
    }
  };

  _proto._onFocus = function _onFocus() {
    this.isFocussed = true;
  };

  _proto._onBlur = function _onBlur() {
    this.isFocussed = false;
  };

  input_createClass(Input, [{
    key: "placeholder",
    set: function set(placeholder) {
      this.element.placeholder = placeholder;
    }
    /**
     * @returns {string}
     */

  }, {
    key: "value",
    get: function get() {
      return sanitise(this.element.value);
    }
    /**
     * @param {string} value
     */
    ,
    set: function set(value) {
      this.element.value = value;
    }
  }]);

  return Input;
}();


// CONCATENATED MODULE: ./src/scripts/components/list.js

/**
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */

var list_List =
/*#__PURE__*/
function () {
  /**
   * @param {{ element: HTMLElement }} args
   */
  function List(_ref) {
    var element = _ref.element;
    this.element = element;
    this.scrollPos = this.element.scrollTop;
    this.height = this.element.offsetHeight;
  }

  var _proto = List.prototype;

  _proto.clear = function clear() {
    this.element.innerHTML = '';
  }
  /**
   * @param {Element | DocumentFragment} node
   */
  ;

  _proto.append = function append(node) {
    this.element.appendChild(node);
  }
  /**
   * @param {string} selector
   * @returns {Element | null}
   */
  ;

  _proto.getChild = function getChild(selector) {
    return this.element.querySelector(selector);
  }
  /**
   * @returns {boolean}
   */
  ;

  _proto.hasChildren = function hasChildren() {
    return this.element.hasChildNodes();
  };

  _proto.scrollToTop = function scrollToTop() {
    this.element.scrollTop = 0;
  }
  /**
   * @param {Element} element
   * @param {1 | -1} direction
   */
  ;

  _proto.scrollToChildElement = function scrollToChildElement(element, direction) {
    var _this = this;

    if (!element) {
      return;
    }

    var listHeight = this.element.offsetHeight; // Scroll position of dropdown

    var listScrollPosition = this.element.scrollTop + listHeight;
    var elementHeight = element.offsetHeight; // Distance from bottom of element to top of parent

    var elementPos = element.offsetTop + elementHeight; // Difference between the element and scroll position

    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
    requestAnimationFrame(function () {
      _this._animateScroll(destination, direction);
    });
  }
  /**
   * @param {number} scrollPos
   * @param {number} strength
   * @param {number} destination
   */
  ;

  _proto._scrollDown = function _scrollDown(scrollPos, strength, destination) {
    var easing = (destination - scrollPos) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos + distance;
  }
  /**
   * @param {number} scrollPos
   * @param {number} strength
   * @param {number} destination
   */
  ;

  _proto._scrollUp = function _scrollUp(scrollPos, strength, destination) {
    var easing = (scrollPos - destination) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos - distance;
  }
  /**
   * @param {*} destination
   * @param {*} direction
   */
  ;

  _proto._animateScroll = function _animateScroll(destination, direction) {
    var _this2 = this;

    var strength = SCROLLING_SPEED;
    var choiceListScrollTop = this.element.scrollTop;
    var continueAnimation = false;

    if (direction > 0) {
      this._scrollDown(choiceListScrollTop, strength, destination);

      if (choiceListScrollTop < destination) {
        continueAnimation = true;
      }
    } else {
      this._scrollUp(choiceListScrollTop, strength, destination);

      if (choiceListScrollTop > destination) {
        continueAnimation = true;
      }
    }

    if (continueAnimation) {
      requestAnimationFrame(function () {
        _this2._animateScroll(destination, direction);
      });
    }
  };

  return List;
}();


// CONCATENATED MODULE: ./src/scripts/components/wrapped-element.js
function wrapped_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wrapped_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapped_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapped_element_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */

var wrapped_element_WrappedElement =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLInputElement | HTMLSelectElement,
   *  classNames: ClassNames,
   * }} args
   */
  function WrappedElement(_ref) {
    var element = _ref.element,
        classNames = _ref.classNames;
    this.element = element;
    this.classNames = classNames;

    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
      throw new TypeError('Invalid element passed');
    }

    this.isDisabled = false;
  }

  var _proto = WrappedElement.prototype;

  _proto.conceal = function conceal() {
    // Hide passed input
    this.element.classList.add(this.classNames.input);
    this.element.hidden = true; // Remove element from tab index

    this.element.tabIndex = -1; // Backup original styles if any

    var origStyle = this.element.getAttribute('style');

    if (origStyle) {
      this.element.setAttribute('data-choice-orig-style', origStyle);
    }

    this.element.setAttribute('data-choice', 'active');
  };

  _proto.reveal = function reveal() {
    // Reinstate passed element
    this.element.classList.remove(this.classNames.input);
    this.element.hidden = false;
    this.element.removeAttribute('tabindex'); // Recover original styles if any

    var origStyle = this.element.getAttribute('data-choice-orig-style');

    if (origStyle) {
      this.element.removeAttribute('data-choice-orig-style');
      this.element.setAttribute('style', origStyle);
    } else {
      this.element.removeAttribute('style');
    }

    this.element.removeAttribute('data-choice'); // Re-assign values - this is weird, I know
    // @todo Figure out why we need to do this

    this.element.value = this.element.value; // eslint-disable-line no-self-assign
  };

  _proto.enable = function enable() {
    this.element.removeAttribute('disabled');
    this.element.disabled = false;
    this.isDisabled = false;
  };

  _proto.disable = function disable() {
    this.element.setAttribute('disabled', '');
    this.element.disabled = true;
    this.isDisabled = true;
  };

  _proto.triggerEvent = function triggerEvent(eventType, data) {
    dispatchEvent(this.element, eventType, data);
  };

  wrapped_element_createClass(WrappedElement, [{
    key: "isActive",
    get: function get() {
      return this.element.dataset.choice === 'active';
    }
  }, {
    key: "dir",
    get: function get() {
      return this.element.dir;
    }
  }, {
    key: "value",
    get: function get() {
      return this.element.value;
    },
    set: function set(value) {
      // you must define setter here otherwise it will be readonly property
      this.element.value = value;
    }
  }]);

  return WrappedElement;
}();


// CONCATENATED MODULE: ./src/scripts/components/wrapped-input.js
function wrapped_input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wrapped_input_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapped_input_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapped_input_defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../../types/index').Choices.Item} Item
 */

var WrappedInput =
/*#__PURE__*/
function (_WrappedElement) {
  _inheritsLoose(WrappedInput, _WrappedElement);

  /**
   * @param {{
   *  element: HTMLInputElement,
   *  classNames: ClassNames,
   *  delimiter: string
   * }} args
   */
  function WrappedInput(_ref) {
    var _this;

    var element = _ref.element,
        classNames = _ref.classNames,
        delimiter = _ref.delimiter;
    _this = _WrappedElement.call(this, {
      element: element,
      classNames: classNames
    }) || this;
    _this.delimiter = delimiter;
    return _this;
  }
  /**
   * @returns {string}
   */


  wrapped_input_createClass(WrappedInput, [{
    key: "value",
    get: function get() {
      return this.element.value;
    }
    /**
     * @param {Item[]} items
     */
    ,
    set: function set(items) {
      var itemValues = items.map(function (_ref2) {
        var value = _ref2.value;
        return value;
      });
      var joinedValues = itemValues.join(this.delimiter);
      this.element.setAttribute('value', joinedValues);
      this.element.value = joinedValues;
    }
  }]);

  return WrappedInput;
}(wrapped_element_WrappedElement);


// CONCATENATED MODULE: ./src/scripts/components/wrapped-select.js
function wrapped_select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wrapped_select_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapped_select_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapped_select_defineProperties(Constructor, staticProps); return Constructor; }

function wrapped_select_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../../types/index').Choices.Item} Item
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */

var WrappedSelect =
/*#__PURE__*/
function (_WrappedElement) {
  wrapped_select_inheritsLoose(WrappedSelect, _WrappedElement);

  /**
   * @param {{
   *  element: HTMLSelectElement,
   *  classNames: ClassNames,
   *  delimiter: string
   *  template: function
   * }} args
   */
  function WrappedSelect(_ref) {
    var _this;

    var element = _ref.element,
        classNames = _ref.classNames,
        template = _ref.template;
    _this = _WrappedElement.call(this, {
      element: element,
      classNames: classNames
    }) || this;
    _this.template = template;
    return _this;
  }

  var _proto = WrappedSelect.prototype;

  /**
   * @param {DocumentFragment} fragment
   */
  _proto.appendDocFragment = function appendDocFragment(fragment) {
    this.element.innerHTML = '';
    this.element.appendChild(fragment);
  };

  wrapped_select_createClass(WrappedSelect, [{
    key: "placeholderOption",
    get: function get() {
      return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
      this.element.querySelector('option[placeholder]');
    }
    /**
     * @returns {Element[]}
     */

  }, {
    key: "optionGroups",
    get: function get() {
      return Array.from(this.element.getElementsByTagName('OPTGROUP'));
    }
    /**
     * @returns {Item[] | Choice[]}
     */

  }, {
    key: "options",
    get: function get() {
      return Array.from(this.element.options);
    }
    /**
     * @param {Item[] | Choice[]} options
     */
    ,
    set: function set(options) {
      var _this2 = this;

      var fragment = document.createDocumentFragment();

      var addOptionToFragment = function addOptionToFragment(data) {
        // Create a standard select option
        var option = _this2.template(data); // Append it to fragment


        fragment.appendChild(option);
      }; // Add each list item to list


      options.forEach(function (optionData) {
        return addOptionToFragment(optionData);
      });
      this.appendDocFragment(fragment);
    }
  }]);

  return WrappedSelect;
}(wrapped_element_WrappedElement);


// CONCATENATED MODULE: ./src/scripts/components/index.js







// CONCATENATED MODULE: ./src/scripts/templates.js
/**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option
 * @typedef {import('../../types/index').Choices.Templates} Templates
 * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../types/index').Choices.Options} Options
 * @typedef {import('../../types/index').Choices.Item} Item
 * @typedef {import('../../types/index').Choices.Choice} Choice
 * @typedef {import('../../types/index').Choices.Group} Group
 */
var TEMPLATES =
/** @type {Templates} */
{
  /**
   * @param {Partial<ClassNames>} classNames
   * @param {"ltr" | "rtl" | "auto"} dir
   * @param {boolean} isSelectElement
   * @param {boolean} isSelectOneElement
   * @param {boolean} searchEnabled
   * @param {"select-one" | "select-multiple" | "text"} passedElementType
   */
  containerOuter: function containerOuter(_ref, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType) {
    var _containerOuter = _ref.containerOuter;
    var div = Object.assign(document.createElement('div'), {
      className: _containerOuter
    });
    div.dataset.type = passedElementType;

    if (dir) {
      div.dir = dir;
    }

    if (isSelectOneElement) {
      div.tabIndex = 0;
    }

    if (isSelectElement) {
      div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');

      if (searchEnabled) {
        div.setAttribute('aria-autocomplete', 'list');
      }
    }

    div.setAttribute('aria-haspopup', 'true');
    div.setAttribute('aria-expanded', 'false');
    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   */
  containerInner: function containerInner(_ref2) {
    var _containerInner = _ref2.containerInner;
    return Object.assign(document.createElement('div'), {
      className: _containerInner
    });
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {boolean} isSelectOneElement
   */
  itemList: function itemList(_ref3, isSelectOneElement) {
    var list = _ref3.list,
        listSingle = _ref3.listSingle,
        listItems = _ref3.listItems;
    return Object.assign(document.createElement('div'), {
      className: list + " " + (isSelectOneElement ? listSingle : listItems)
    });
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {string} value
   */
  placeholder: function placeholder(_ref4, value) {
    var _placeholder = _ref4.placeholder;
    return Object.assign(document.createElement('div'), {
      className: _placeholder,
      innerHTML: value
    });
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {Item} item
   * @param {boolean} removeItemButton
   */
  item: function item(_ref5, _ref6, removeItemButton) {
    var _item = _ref5.item,
        button = _ref5.button,
        highlightedState = _ref5.highlightedState,
        itemSelectable = _ref5.itemSelectable,
        placeholder = _ref5.placeholder;
    var id = _ref6.id,
        value = _ref6.value,
        label = _ref6.label,
        customProperties = _ref6.customProperties,
        active = _ref6.active,
        disabled = _ref6.disabled,
        highlighted = _ref6.highlighted,
        isPlaceholder = _ref6.placeholder;
    var div = Object.assign(document.createElement('div'), {
      className: _item,
      innerHTML: label
    });
    Object.assign(div.dataset, {
      item: '',
      id: id,
      value: value,
      customProperties: customProperties
    });

    if (active) {
      div.setAttribute('aria-selected', 'true');
    }

    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }

    if (isPlaceholder) {
      div.classList.add(placeholder);
    }

    div.classList.add(highlighted ? highlightedState : itemSelectable);

    if (removeItemButton) {
      if (disabled) {
        div.classList.remove(itemSelectable);
      }

      div.dataset.deletable = '';
      /** @todo This MUST be localizable, not hardcoded! */

      var REMOVE_ITEM_TEXT = 'Remove item';
      var removeButton = Object.assign(document.createElement('button'), {
        type: 'button',
        className: button,
        innerHTML: REMOVE_ITEM_TEXT
      });
      removeButton.setAttribute('aria-label', REMOVE_ITEM_TEXT + ": '" + value + "'");
      removeButton.dataset.button = '';
      div.appendChild(removeButton);
    }

    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {boolean} isSelectOneElement
   */
  choiceList: function choiceList(_ref7, isSelectOneElement) {
    var list = _ref7.list;
    var div = Object.assign(document.createElement('div'), {
      className: list
    });

    if (!isSelectOneElement) {
      div.setAttribute('aria-multiselectable', 'true');
    }

    div.setAttribute('role', 'listbox');
    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {Group} group
   */
  choiceGroup: function choiceGroup(_ref8, _ref9) {
    var group = _ref8.group,
        groupHeading = _ref8.groupHeading,
        itemDisabled = _ref8.itemDisabled;
    var id = _ref9.id,
        value = _ref9.value,
        disabled = _ref9.disabled;
    var div = Object.assign(document.createElement('div'), {
      className: group + " " + (disabled ? itemDisabled : '')
    });
    div.setAttribute('role', 'group');
    Object.assign(div.dataset, {
      group: '',
      id: id,
      value: value
    });

    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }

    div.appendChild(Object.assign(document.createElement('div'), {
      className: groupHeading,
      innerHTML: value
    }));
    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {Choice} choice
   * @param {Options['itemSelectText']} selectText
   */
  choice: function choice(_ref10, _ref11, selectText) {
    var item = _ref10.item,
        itemChoice = _ref10.itemChoice,
        itemSelectable = _ref10.itemSelectable,
        selectedState = _ref10.selectedState,
        itemDisabled = _ref10.itemDisabled,
        placeholder = _ref10.placeholder;
    var id = _ref11.id,
        value = _ref11.value,
        label = _ref11.label,
        groupId = _ref11.groupId,
        elementId = _ref11.elementId,
        isDisabled = _ref11.disabled,
        isSelected = _ref11.selected,
        isPlaceholder = _ref11.placeholder;
    var div = Object.assign(document.createElement('div'), {
      id: elementId,
      innerHTML: label,
      className: item + " " + itemChoice
    });

    if (isSelected) {
      div.classList.add(selectedState);
    }

    if (isPlaceholder) {
      div.classList.add(placeholder);
    }

    div.setAttribute('role', groupId > 0 ? 'treeitem' : 'option');
    Object.assign(div.dataset, {
      choice: '',
      id: id,
      value: value,
      selectText: selectText
    });

    if (isDisabled) {
      div.classList.add(itemDisabled);
      div.dataset.choiceDisabled = '';
      div.setAttribute('aria-disabled', 'true');
    } else {
      div.classList.add(itemSelectable);
      div.dataset.choiceSelectable = '';
    }

    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {string} placeholderValue
   */
  input: function input(_ref12, placeholderValue) {
    var _input = _ref12.input,
        inputCloned = _ref12.inputCloned;
    var inp = Object.assign(document.createElement('input'), {
      type: 'text',
      className: _input + " " + inputCloned,
      autocomplete: 'off',
      autocapitalize: 'off',
      spellcheck: false
    });
    inp.setAttribute('role', 'textbox');
    inp.setAttribute('aria-autocomplete', 'list');
    inp.setAttribute('aria-label', placeholderValue);
    return inp;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   */
  dropdown: function dropdown(_ref13) {
    var list = _ref13.list,
        listDropdown = _ref13.listDropdown;
    var div = document.createElement('div');
    div.classList.add(list, listDropdown);
    div.setAttribute('aria-expanded', 'false');
    return div;
  },

  /**
   *
   * @param {Partial<ClassNames>} classNames
   * @param {string} innerHTML
   * @param {"no-choices" | "no-results" | ""} type
   */
  notice: function notice(_ref14, innerHTML, type) {
    var item = _ref14.item,
        itemChoice = _ref14.itemChoice,
        noResults = _ref14.noResults,
        noChoices = _ref14.noChoices;

    if (type === void 0) {
      type = '';
    }

    var classes = [item, itemChoice];

    if (type === 'no-choices') {
      classes.push(noChoices);
    } else if (type === 'no-results') {
      classes.push(noResults);
    }

    return Object.assign(document.createElement('div'), {
      innerHTML: innerHTML,
      className: classes.join(' ')
    });
  },

  /**
   * @param {Item} option
   */
  option: function option(_ref15) {
    var label = _ref15.label,
        value = _ref15.value,
        customProperties = _ref15.customProperties,
        active = _ref15.active,
        disabled = _ref15.disabled;
    var opt = new Option(label, value, false, active);

    if (customProperties) {
      opt.dataset.customProperties = customProperties;
    }

    opt.disabled = disabled;
    return opt;
  }
};
/* harmony default export */ var templates = (TEMPLATES);
// CONCATENATED MODULE: ./src/scripts/actions/choices.js
/**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */

/**
 * @argument {Choice} choice
 * @returns {Action & Choice}
 */

var choices_addChoice = function addChoice(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      groupId = _ref.groupId,
      disabled = _ref.disabled,
      elementId = _ref.elementId,
      customProperties = _ref.customProperties,
      placeholder = _ref.placeholder,
      keyCode = _ref.keyCode;
  return {
    type: ACTION_TYPES.ADD_CHOICE,
    value: value,
    label: label,
    id: id,
    groupId: groupId,
    disabled: disabled,
    elementId: elementId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};
/**
 * @argument {Choice[]} results
 * @returns {Action & { results: Choice[] }}
 */

var choices_filterChoices = function filterChoices(results) {
  return {
    type: ACTION_TYPES.FILTER_CHOICES,
    results: results
  };
};
/**
 * @argument {boolean} active
 * @returns {Action & { active: boolean }}
 */

var choices_activateChoices = function activateChoices(active) {
  if (active === void 0) {
    active = true;
  }

  return {
    type: ACTION_TYPES.ACTIVATE_CHOICES,
    active: active
  };
};
/**
 * @returns {Action}
 */

var choices_clearChoices = function clearChoices() {
  return {
    type: ACTION_TYPES.CLEAR_CHOICES
  };
};
// CONCATENATED MODULE: ./src/scripts/actions/items.js

/**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Item} Item
 */

/**
 * @param {Item} item
 * @returns {Action & Item}
 */

var items_addItem = function addItem(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      choiceId = _ref.choiceId,
      groupId = _ref.groupId,
      customProperties = _ref.customProperties,
      placeholder = _ref.placeholder,
      keyCode = _ref.keyCode;
  return {
    type: ACTION_TYPES.ADD_ITEM,
    value: value,
    label: label,
    id: id,
    choiceId: choiceId,
    groupId: groupId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};
/**
 * @param {string} id
 * @param {string} choiceId
 * @returns {Action & { id: string, choiceId: string }}
 */

var items_removeItem = function removeItem(id, choiceId) {
  return {
    type: ACTION_TYPES.REMOVE_ITEM,
    id: id,
    choiceId: choiceId
  };
};
/**
 * @param {string} id
 * @param {boolean} highlighted
 * @returns {Action & { id: string, highlighted: boolean }}
 */

var items_highlightItem = function highlightItem(id, highlighted) {
  return {
    type: ACTION_TYPES.HIGHLIGHT_ITEM,
    id: id,
    highlighted: highlighted
  };
};
// CONCATENATED MODULE: ./src/scripts/actions/groups.js

/**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Group} Group
 */

/**
 * @param {Group} group
 * @returns {Action & Group}
 */

var groups_addGroup = function addGroup(_ref) {
  var value = _ref.value,
      id = _ref.id,
      active = _ref.active,
      disabled = _ref.disabled;
  return {
    type: ACTION_TYPES.ADD_GROUP,
    value: value,
    id: id,
    active: active,
    disabled: disabled
  };
};
// CONCATENATED MODULE: ./src/scripts/actions/misc.js
/**
 * @typedef {import('redux').Action} Action
 */

/**
 * @returns {Action}
 */
var clearAll = function clearAll() {
  return {
    type: 'CLEAR_ALL'
  };
};
/**
 * @param {any} state
 * @returns {Action & { state: object }}
 */

var resetTo = function resetTo(state) {
  return {
    type: 'RESET_TO',
    state: state
  };
};
/**
 * @param {boolean} isLoading
 * @returns {Action & { isLoading: boolean }}
 */

var setIsLoading = function setIsLoading(isLoading) {
  return {
    type: 'SET_IS_LOADING',
    isLoading: isLoading
  };
};
// CONCATENATED MODULE: ./src/scripts/choices.js
function choices_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function choices_createClass(Constructor, protoProps, staticProps) { if (protoProps) choices_defineProperties(Constructor.prototype, protoProps); if (staticProps) choices_defineProperties(Constructor, staticProps); return Constructor; }












/** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */

var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
/**
 * @typedef {import('../../types/index').Choices.Choice} Choice
 * @typedef {import('../../types/index').Choices.Item} Item
 * @typedef {import('../../types/index').Choices.Group} Group
 * @typedef {import('../../types/index').Choices.Options} Options
 */

/** @type {Partial<Options>} */

var USER_DEFAULTS = {};
/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */

var choices_Choices =
/*#__PURE__*/
function () {
  choices_createClass(Choices, null, [{
    key: "defaults",
    get: function get() {
      return Object.preventExtensions({
        get options() {
          return USER_DEFAULTS;
        },

        get templates() {
          return TEMPLATES;
        }

      });
    }
    /**
     * @param {string | HTMLInputElement | HTMLSelectElement} element
     * @param {Partial<Options>} userConfig
     */

  }]);

  function Choices(element, userConfig) {
    var _this = this;

    if (element === void 0) {
      element = '[data-choice]';
    }

    if (userConfig === void 0) {
      userConfig = {};
    }

    /** @type {Partial<Options>} */
    this.config = cjs_default.a.all([DEFAULT_CONFIG, Choices.defaults.options, userConfig], // When merging array configs, replace with a copy of the userConfig array,
    // instead of concatenating with the default array
    {
      arrayMerge: function arrayMerge(_, sourceArray) {
        return [].concat(sourceArray);
      }
    });
    var invalidConfigOptions = diff(this.config, DEFAULT_CONFIG);

    if (invalidConfigOptions.length) {
      console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
    }

    var passedElement = typeof element === 'string' ? document.querySelector(element) : element;

    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
      throw TypeError('Expected one of the following types text|select-one|select-multiple');
    }

    this._isTextElement = passedElement.type === TEXT_TYPE;
    this._isSelectOneElement = passedElement.type === SELECT_ONE_TYPE;
    this._isSelectMultipleElement = passedElement.type === SELECT_MULTIPLE_TYPE;
    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;

    if (!['auto', 'always'].includes(this.config.renderSelectedChoices)) {
      this.config.renderSelectedChoices = 'auto';
    }

    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
      var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
      this.config.addItemFilter = re.test.bind(re);
    }

    if (this._isTextElement) {
      this.passedElement = new WrappedInput({
        element: passedElement,
        classNames: this.config.classNames,
        delimiter: this.config.delimiter
      });
    } else {
      this.passedElement = new WrappedSelect({
        element: passedElement,
        classNames: this.config.classNames,
        template: function template(data) {
          return _this._templates.option(data);
        }
      });
    }

    this.initialised = false;
    this._store = new store_Store();
    this._initialState = {};
    this._currentState = {};
    this._prevState = {};
    this._currentValue = '';
    this._canSearch = this.config.searchEnabled;
    this._isScrollingOnIe = false;
    this._highlightPosition = 0;
    this._wasTap = true;
    this._placeholderValue = this._generatePlaceholderValue();
    this._baseId = generateId(this.passedElement.element, 'choices-');
    /**
     * setting direction in cases where it's explicitly set on passedElement
     * or when calculated direction is different from the document
     * @type {HTMLElement['dir']}
     */

    this._direction = this.passedElement.dir;

    if (!this._direction) {
      var _window$getComputedSt = window.getComputedStyle(this.passedElement.element),
          elementDirection = _window$getComputedSt.direction;

      var _window$getComputedSt2 = window.getComputedStyle(document.documentElement),
          documentDirection = _window$getComputedSt2.direction;

      if (elementDirection !== documentDirection) {
        this._direction = elementDirection;
      }
    }

    this._idNames = {
      itemChoice: 'item-choice'
    }; // Assign preset groups from passed element

    this._presetGroups = this.passedElement.optionGroups; // Assign preset options from passed element

    this._presetOptions = this.passedElement.options; // Assign preset choices from passed object

    this._presetChoices = this.config.choices; // Assign preset items from passed object first

    this._presetItems = this.config.items; // Add any values passed from attribute

    if (this.passedElement.value) {
      this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter));
    } // Create array of choices from option elements


    if (this.passedElement.options) {
      this.passedElement.options.forEach(function (o) {
        _this._presetChoices.push({
          value: o.value,
          label: o.innerHTML,
          selected: o.selected,
          disabled: o.disabled || o.parentNode.disabled,
          placeholder: o.value === '' || o.hasAttribute('placeholder'),
          customProperties: o.getAttribute('data-custom-properties')
        });
      });
    }

    this._render = this._render.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
    this._onAKey = this._onAKey.bind(this);
    this._onEnterKey = this._onEnterKey.bind(this);
    this._onEscapeKey = this._onEscapeKey.bind(this);
    this._onDirectionKey = this._onDirectionKey.bind(this);
    this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently

    if (this.passedElement.isActive) {
      if (!this.config.silent) {
        console.warn('Trying to initialise Choices on element already initialised');
      }

      this.initialised = true;
      return;
    } // Let's go


    this.init();
  }

  var _proto = Choices.prototype;

  _proto.init = function init() {
    if (this.initialised) {
      return;
    }

    this._createTemplates();

    this._createElements();

    this._createStructure(); // Set initial state (We need to clone the state because some reducers
    // modify the inner objects properties in the state) 🤢


    this._initialState = cloneObject(this._store.state);

    this._store.subscribe(this._render);

    this._render();

    this._addEventListeners();

    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');

    if (shouldDisable) {
      this.disable();
    }

    this.initialised = true;
    var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function

    if (callbackOnInit && typeof callbackOnInit === 'function') {
      callbackOnInit.call(this);
    }
  };

  _proto.destroy = function destroy() {
    if (!this.initialised) {
      return;
    }

    this._removeEventListeners();

    this.passedElement.reveal();
    this.containerOuter.unwrap(this.passedElement.element);
    this.clearStore();

    if (this._isSelectElement) {
      this.passedElement.options = this._presetOptions;
    }

    this._templates = null;
    this.initialised = false;
  };

  _proto.enable = function enable() {
    if (this.passedElement.isDisabled) {
      this.passedElement.enable();
    }

    if (this.containerOuter.isDisabled) {
      this._addEventListeners();

      this.input.enable();
      this.containerOuter.enable();
    }

    return this;
  };

  _proto.disable = function disable() {
    if (!this.passedElement.isDisabled) {
      this.passedElement.disable();
    }

    if (!this.containerOuter.isDisabled) {
      this._removeEventListeners();

      this.input.disable();
      this.containerOuter.disable();
    }

    return this;
  };

  _proto.highlightItem = function highlightItem(item, runEvent) {
    if (runEvent === void 0) {
      runEvent = true;
    }

    if (!item) {
      return this;
    }

    var id = item.id,
        _item$groupId = item.groupId,
        groupId = _item$groupId === void 0 ? -1 : _item$groupId,
        _item$value = item.value,
        value = _item$value === void 0 ? '' : _item$value,
        _item$label = item.label,
        label = _item$label === void 0 ? '' : _item$label;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

    this._store.dispatch(items_highlightItem(id, true));

    if (runEvent) {
      this.passedElement.triggerEvent(EVENTS.highlightItem, {
        id: id,
        value: value,
        label: label,
        groupValue: group && group.value ? group.value : null
      });
    }

    return this;
  };

  _proto.unhighlightItem = function unhighlightItem(item) {
    if (!item) {
      return this;
    }

    var id = item.id,
        _item$groupId2 = item.groupId,
        groupId = _item$groupId2 === void 0 ? -1 : _item$groupId2,
        _item$value2 = item.value,
        value = _item$value2 === void 0 ? '' : _item$value2,
        _item$label2 = item.label,
        label = _item$label2 === void 0 ? '' : _item$label2;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

    this._store.dispatch(items_highlightItem(id, false));

    this.passedElement.triggerEvent(EVENTS.highlightItem, {
      id: id,
      value: value,
      label: label,
      groupValue: group && group.value ? group.value : null
    });
    return this;
  };

  _proto.highlightAll = function highlightAll() {
    var _this2 = this;

    this._store.items.forEach(function (item) {
      return _this2.highlightItem(item);
    });

    return this;
  };

  _proto.unhighlightAll = function unhighlightAll() {
    var _this3 = this;

    this._store.items.forEach(function (item) {
      return _this3.unhighlightItem(item);
    });

    return this;
  };

  _proto.removeActiveItemsByValue = function removeActiveItemsByValue(value) {
    var _this4 = this;

    this._store.activeItems.filter(function (item) {
      return item.value === value;
    }).forEach(function (item) {
      return _this4._removeItem(item);
    });

    return this;
  };

  _proto.removeActiveItems = function removeActiveItems(excludedId) {
    var _this5 = this;

    this._store.activeItems.filter(function (_ref) {
      var id = _ref.id;
      return id !== excludedId;
    }).forEach(function (item) {
      return _this5._removeItem(item);
    });

    return this;
  };

  _proto.removeHighlightedItems = function removeHighlightedItems(runEvent) {
    var _this6 = this;

    if (runEvent === void 0) {
      runEvent = false;
    }

    this._store.highlightedActiveItems.forEach(function (item) {
      _this6._removeItem(item); // If this action was performed by the user
      // trigger the event


      if (runEvent) {
        _this6._triggerChange(item.value);
      }
    });

    return this;
  };

  _proto.showDropdown = function showDropdown(preventInputFocus) {
    var _this7 = this;

    if (this.dropdown.isActive) {
      return this;
    }

    requestAnimationFrame(function () {
      _this7.dropdown.show();

      _this7.containerOuter.open(_this7.dropdown.distanceFromTopWindow);

      if (!preventInputFocus && _this7._canSearch) {
        _this7.input.focus();
      }

      _this7.passedElement.triggerEvent(EVENTS.showDropdown, {});
    });
    return this;
  };

  _proto.hideDropdown = function hideDropdown(preventInputBlur) {
    var _this8 = this;

    if (!this.dropdown.isActive) {
      return this;
    }

    requestAnimationFrame(function () {
      _this8.dropdown.hide();

      _this8.containerOuter.close();

      if (!preventInputBlur && _this8._canSearch) {
        _this8.input.removeActiveDescendant();

        _this8.input.blur();
      }

      _this8.passedElement.triggerEvent(EVENTS.hideDropdown, {});
    });
    return this;
  };

  _proto.getValue = function getValue(valueOnly) {
    if (valueOnly === void 0) {
      valueOnly = false;
    }

    var values = this._store.activeItems.reduce(function (selectedItems, item) {
      var itemValue = valueOnly ? item.value : item;
      selectedItems.push(itemValue);
      return selectedItems;
    }, []);

    return this._isSelectOneElement ? values[0] : values;
  }
  /**
   * @param {string[] | import('../../types/index').Choices.Item[]} items
   */
  ;

  _proto.setValue = function setValue(items) {
    var _this9 = this;

    if (!this.initialised) {
      return this;
    }

    items.forEach(function (value) {
      return _this9._setChoiceOrItem(value);
    });
    return this;
  };

  _proto.setChoiceByValue = function setChoiceByValue(value) {
    var _this10 = this;

    if (!this.initialised || this._isTextElement) {
      return this;
    } // If only one value has been passed, convert to array


    var choiceValue = Array.isArray(value) ? value : [value]; // Loop through each value and

    choiceValue.forEach(function (val) {
      return _this10._findAndSelectChoiceByValue(val);
    });
    return this;
  }
  /**
   * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
   * a value field name and a label field name.
   * This behaves the same as passing items via the choices option but can be called after initialising Choices.
   * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
   * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
   *
   * **Input types affected:** select-one, select-multiple
   *
   * @template {Choice[] | ((instance: Choices) => object[] | Promise<object[]>)} T
   * @param {T} [choicesArrayOrFetcher]
   * @param {string} [value = 'value'] - name of `value` field
   * @param {string} [label = 'label'] - name of 'label' field
   * @param {boolean} [replaceChoices = false] - whether to replace of add choices
   * @returns {this | Promise<this>}
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([
   *   {value: 'One', label: 'Label One', disabled: true},
   *   {value: 'Two', label: 'Label Two', selected: true},
   *   {value: 'Three', label: 'Label Three'},
   * ], 'value', 'label', false);
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices(async () => {
   *   try {
   *      const items = await fetch('/items');
   *      return items.json()
   *   } catch(err) {
   *      console.error(err)
   *   }
   * });
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([{
   *   label: 'Group one',
   *   id: 1,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child One', label: 'Child One', selected: true},
   *     {value: 'Child Two', label: 'Child Two',  disabled: true},
   *     {value: 'Child Three', label: 'Child Three'},
   *   ]
   * },
   * {
   *   label: 'Group two',
   *   id: 2,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child Four', label: 'Child Four', disabled: true},
   *     {value: 'Child Five', label: 'Child Five'},
   *     {value: 'Child Six', label: 'Child Six', customProperties: {
   *       description: 'Custom description about child six',
   *       random: 'Another random custom property'
   *     }},
   *   ]
   * }], 'value', 'label', false);
   * ```
   */
  ;

  _proto.setChoices = function setChoices(choicesArrayOrFetcher, value, label, replaceChoices) {
    var _this11 = this;

    if (choicesArrayOrFetcher === void 0) {
      choicesArrayOrFetcher = [];
    }

    if (value === void 0) {
      value = 'value';
    }

    if (label === void 0) {
      label = 'label';
    }

    if (replaceChoices === void 0) {
      replaceChoices = false;
    }

    if (!this.initialised) {
      throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
    }

    if (!this._isSelectElement) {
      throw new TypeError("setChoices can't be used with INPUT based Choices");
    }

    if (typeof value !== 'string' || !value) {
      throw new TypeError("value parameter must be a name of 'value' field in passed objects");
    } // Clear choices if needed


    if (replaceChoices) {
      this.clearChoices();
    }

    if (typeof choicesArrayOrFetcher === 'function') {
      // it's a choices fetcher function
      var fetcher = choicesArrayOrFetcher(this);

      if (typeof Promise === 'function' && fetcher instanceof Promise) {
        // that's a promise
        // eslint-disable-next-line compat/compat
        return new Promise(function (resolve) {
          return requestAnimationFrame(resolve);
        }).then(function () {
          return _this11._handleLoadingState(true);
        }).then(function () {
          return fetcher;
        }).then(function (data) {
          return _this11.setChoices(data, value, label, replaceChoices);
        }).catch(function (err) {
          if (!_this11.config.silent) {
            console.error(err);
          }
        }).then(function () {
          return _this11._handleLoadingState(false);
        }).then(function () {
          return _this11;
        });
      } // function returned something else than promise, let's check if it's an array of choices


      if (!Array.isArray(fetcher)) {
        throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + typeof fetcher);
      } // recursion with results, it's sync and choices were cleared already


      return this.setChoices(fetcher, value, label, false);
    }

    if (!Array.isArray(choicesArrayOrFetcher)) {
      throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
    }

    this.containerOuter.removeLoadingState();

    this._startLoading();

    choicesArrayOrFetcher.forEach(function (groupOrChoice) {
      if (groupOrChoice.choices) {
        _this11._addGroup({
          id: parseInt(groupOrChoice.id, 10) || null,
          group: groupOrChoice,
          valueKey: value,
          labelKey: label
        });
      } else {
        _this11._addChoice({
          value: groupOrChoice[value],
          label: groupOrChoice[label],
          isSelected: groupOrChoice.selected,
          isDisabled: groupOrChoice.disabled,
          customProperties: groupOrChoice.customProperties,
          placeholder: groupOrChoice.placeholder
        });
      }
    });

    this._stopLoading();

    return this;
  };

  _proto.clearChoices = function clearChoices() {
    this._store.dispatch(choices_clearChoices());

    return this;
  };

  _proto.clearStore = function clearStore() {
    this._store.dispatch(clearAll());

    return this;
  };

  _proto.clearInput = function clearInput() {
    var shouldSetInputWidth = !this._isSelectOneElement;
    this.input.clear(shouldSetInputWidth);

    if (!this._isTextElement && this._canSearch) {
      this._isSearching = false;

      this._store.dispatch(choices_activateChoices(true));
    }

    return this;
  };

  _proto._render = function _render() {
    if (this._store.isLoading()) {
      return;
    }

    this._currentState = this._store.state;
    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
    var shouldRenderChoices = this._isSelectElement;
    var shouldRenderItems = this._currentState.items !== this._prevState.items;

    if (!stateChanged) {
      return;
    }

    if (shouldRenderChoices) {
      this._renderChoices();
    }

    if (shouldRenderItems) {
      this._renderItems();
    }

    this._prevState = this._currentState;
  };

  _proto._renderChoices = function _renderChoices() {
    var _this12 = this;

    var _this$_store = this._store,
        activeGroups = _this$_store.activeGroups,
        activeChoices = _this$_store.activeChoices;
    var choiceListFragment = document.createDocumentFragment();
    this.choiceList.clear();

    if (this.config.resetScrollPosition) {
      requestAnimationFrame(function () {
        return _this12.choiceList.scrollToTop();
      });
    } // If we have grouped options


    if (activeGroups.length >= 1 && !this._isSearching) {
      // If we have a placeholder choice along with groups
      var activePlaceholders = activeChoices.filter(function (activeChoice) {
        return activeChoice.placeholder === true && activeChoice.groupId === -1;
      });

      if (activePlaceholders.length >= 1) {
        choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
      }

      choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
    } else if (activeChoices.length >= 1) {
      choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
    } // If we have choices to show


    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
      var activeItems = this._store.activeItems;

      var canAddItem = this._canAddItem(activeItems, this.input.value); // ...and we can select them


      if (canAddItem.response) {
        // ...append them and highlight the first choice
        this.choiceList.append(choiceListFragment);

        this._highlightChoice();
      } else {
        // ...otherwise show a notice
        this.choiceList.append(this._getTemplate('notice', canAddItem.notice));
      }
    } else {
      // Otherwise show a notice
      var dropdownItem;
      var notice;

      if (this._isSearching) {
        notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
        dropdownItem = this._getTemplate('notice', notice, 'no-results');
      } else {
        notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
        dropdownItem = this._getTemplate('notice', notice, 'no-choices');
      }

      this.choiceList.append(dropdownItem);
    }
  };

  _proto._renderItems = function _renderItems() {
    var activeItems = this._store.activeItems || [];
    this.itemList.clear(); // Create a fragment to store our list items
    // (so we don't have to update the DOM for each item)

    var itemListFragment = this._createItemsFragment(activeItems); // If we have items to add, append them


    if (itemListFragment.childNodes) {
      this.itemList.append(itemListFragment);
    }
  };

  _proto._createGroupsFragment = function _createGroupsFragment(groups, choices, fragment) {
    var _this13 = this;

    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }

    var getGroupChoices = function getGroupChoices(group) {
      return choices.filter(function (choice) {
        if (_this13._isSelectOneElement) {
          return choice.groupId === group.id;
        }

        return choice.groupId === group.id && (_this13.config.renderSelectedChoices === 'always' || !choice.selected);
      });
    }; // If sorting is enabled, filter groups


    if (this.config.shouldSort) {
      groups.sort(this.config.sorter);
    }

    groups.forEach(function (group) {
      var groupChoices = getGroupChoices(group);

      if (groupChoices.length >= 1) {
        var dropdownGroup = _this13._getTemplate('choiceGroup', group);

        fragment.appendChild(dropdownGroup);

        _this13._createChoicesFragment(groupChoices, fragment, true);
      }
    });
    return fragment;
  };

  _proto._createChoicesFragment = function _createChoicesFragment(choices, fragment, withinGroup) {
    var _this14 = this;

    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }

    if (withinGroup === void 0) {
      withinGroup = false;
    }

    // Create a fragment to store our list items (so we don't have to update the DOM for each item)
    var _this$config = this.config,
        renderSelectedChoices = _this$config.renderSelectedChoices,
        searchResultLimit = _this$config.searchResultLimit,
        renderChoiceLimit = _this$config.renderChoiceLimit;
    var filter = this._isSearching ? sortByScore : this.config.sorter;

    var appendChoice = function appendChoice(choice) {
      var shouldRender = renderSelectedChoices === 'auto' ? _this14._isSelectOneElement || !choice.selected : true;

      if (shouldRender) {
        var dropdownItem = _this14._getTemplate('choice', choice, _this14.config.itemSelectText);

        fragment.appendChild(dropdownItem);
      }
    };

    var rendererableChoices = choices;

    if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
      rendererableChoices = choices.filter(function (choice) {
        return !choice.selected;
      });
    } // Split array into placeholders and "normal" choices


    var _rendererableChoices$ = rendererableChoices.reduce(function (acc, choice) {
      if (choice.placeholder) {
        acc.placeholderChoices.push(choice);
      } else {
        acc.normalChoices.push(choice);
      }

      return acc;
    }, {
      placeholderChoices: [],
      normalChoices: []
    }),
        placeholderChoices = _rendererableChoices$.placeholderChoices,
        normalChoices = _rendererableChoices$.normalChoices; // If sorting is enabled or the user is searching, filter choices


    if (this.config.shouldSort || this._isSearching) {
      normalChoices.sort(filter);
    }

    var choiceLimit = rendererableChoices.length; // Prepend placeholeder

    var sortedChoices = this._isSelectOneElement ? [].concat(placeholderChoices, normalChoices) : normalChoices;

    if (this._isSearching) {
      choiceLimit = searchResultLimit;
    } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
      choiceLimit = renderChoiceLimit;
    } // Add each choice to dropdown within range


    for (var i = 0; i < choiceLimit; i += 1) {
      if (sortedChoices[i]) {
        appendChoice(sortedChoices[i]);
      }
    }

    return fragment;
  };

  _proto._createItemsFragment = function _createItemsFragment(items, fragment) {
    var _this15 = this;

    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }

    // Create fragment to add elements to
    var _this$config2 = this.config,
        shouldSortItems = _this$config2.shouldSortItems,
        sorter = _this$config2.sorter,
        removeItemButton = _this$config2.removeItemButton; // If sorting is enabled, filter items

    if (shouldSortItems && !this._isSelectOneElement) {
      items.sort(sorter);
    }

    if (this._isTextElement) {
      // Update the value of the hidden input
      this.passedElement.value = items;
    } else {
      // Update the options of the hidden input
      this.passedElement.options = items;
    }

    var addItemToFragment = function addItemToFragment(item) {
      // Create new list element
      var listItem = _this15._getTemplate('item', item, removeItemButton); // Append it to list


      fragment.appendChild(listItem);
    }; // Add each list item to list


    items.forEach(addItemToFragment);
    return fragment;
  };

  _proto._triggerChange = function _triggerChange(value) {
    if (value === undefined || value === null) {
      return;
    }

    this.passedElement.triggerEvent(EVENTS.change, {
      value: value
    });
  };

  _proto._selectPlaceholderChoice = function _selectPlaceholderChoice() {
    var placeholderChoice = this._store.placeholderChoice;

    if (placeholderChoice) {
      this._addItem({
        value: placeholderChoice.value,
        label: placeholderChoice.label,
        choiceId: placeholderChoice.id,
        groupId: placeholderChoice.groupId,
        placeholder: placeholderChoice.placeholder
      });

      this._triggerChange(placeholderChoice.value);
    }
  };

  _proto._handleButtonAction = function _handleButtonAction(activeItems, element) {
    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
      return;
    }

    var itemId = element.parentNode.getAttribute('data-id');
    var itemToRemove = activeItems.find(function (item) {
      return item.id === parseInt(itemId, 10);
    }); // Remove item associated with button

    this._removeItem(itemToRemove);

    this._triggerChange(itemToRemove.value);

    if (this._isSelectOneElement) {
      this._selectPlaceholderChoice();
    }
  };

  _proto._handleItemAction = function _handleItemAction(activeItems, element, hasShiftKey) {
    var _this16 = this;

    if (hasShiftKey === void 0) {
      hasShiftKey = false;
    }

    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
      return;
    }

    var passedId = element.getAttribute('data-id'); // We only want to select one item with a click
    // so we deselect any items that aren't the target
    // unless shift is being pressed

    activeItems.forEach(function (item) {
      if (item.id === parseInt(passedId, 10) && !item.highlighted) {
        _this16.highlightItem(item);
      } else if (!hasShiftKey && item.highlighted) {
        _this16.unhighlightItem(item);
      }
    }); // Focus input as without focus, a user cannot do anything with a
    // highlighted item

    this.input.focus();
  };

  _proto._handleChoiceAction = function _handleChoiceAction(activeItems, element) {
    if (!activeItems || !element) {
      return;
    } // If we are clicking on an option


    var id = element.dataset.id;

    var choice = this._store.getChoiceById(id);

    if (!choice) {
      return;
    }

    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : null;
    var hasActiveDropdown = this.dropdown.isActive; // Update choice keyCode

    choice.keyCode = passedKeyCode;
    this.passedElement.triggerEvent(EVENTS.choice, {
      choice: choice
    });

    if (!choice.selected && !choice.disabled) {
      var canAddItem = this._canAddItem(activeItems, choice.value);

      if (canAddItem.response) {
        this._addItem({
          value: choice.value,
          label: choice.label,
          choiceId: choice.id,
          groupId: choice.groupId,
          customProperties: choice.customProperties,
          placeholder: choice.placeholder,
          keyCode: choice.keyCode
        });

        this._triggerChange(choice.value);
      }
    }

    this.clearInput(); // We want to close the dropdown if we are dealing with a single select box

    if (hasActiveDropdown && this._isSelectOneElement) {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  };

  _proto._handleBackspace = function _handleBackspace(activeItems) {
    if (!this.config.removeItems || !activeItems) {
      return;
    }

    var lastItem = activeItems[activeItems.length - 1];
    var hasHighlightedItems = activeItems.some(function (item) {
      return item.highlighted;
    }); // If editing the last item is allowed and there are not other selected items,
    // we can edit the item value. Otherwise if we can remove items, remove all selected items

    if (this.config.editItems && !hasHighlightedItems && lastItem) {
      this.input.value = lastItem.value;
      this.input.setWidth();

      this._removeItem(lastItem);

      this._triggerChange(lastItem.value);
    } else {
      if (!hasHighlightedItems) {
        // Highlight last item if none already highlighted
        this.highlightItem(lastItem, false);
      }

      this.removeHighlightedItems(true);
    }
  };

  _proto._startLoading = function _startLoading() {
    this._store.dispatch(setIsLoading(true));
  };

  _proto._stopLoading = function _stopLoading() {
    this._store.dispatch(setIsLoading(false));
  };

  _proto._handleLoadingState = function _handleLoadingState(setLoading) {
    if (setLoading === void 0) {
      setLoading = true;
    }

    var placeholderItem = this.itemList.getChild("." + this.config.classNames.placeholder);

    if (setLoading) {
      this.disable();
      this.containerOuter.addLoadingState();

      if (this._isSelectOneElement) {
        if (!placeholderItem) {
          placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
          this.itemList.append(placeholderItem);
        } else {
          placeholderItem.innerHTML = this.config.loadingText;
        }
      } else {
        this.input.placeholder = this.config.loadingText;
      }
    } else {
      this.enable();
      this.containerOuter.removeLoadingState();

      if (this._isSelectOneElement) {
        placeholderItem.innerHTML = this._placeholderValue || '';
      } else {
        this.input.placeholder = this._placeholderValue || '';
      }
    }
  };

  _proto._handleSearch = function _handleSearch(value) {
    if (!value || !this.input.isFocussed) {
      return;
    }

    var choices = this._store.choices;
    var _this$config3 = this.config,
        searchFloor = _this$config3.searchFloor,
        searchChoices = _this$config3.searchChoices;
    var hasUnactiveChoices = choices.some(function (option) {
      return !option.active;
    }); // Check that we have a value to search and the input was an alphanumeric character

    if (value && value.length >= searchFloor) {
      var resultCount = searchChoices ? this._searchChoices(value) : 0; // Trigger search event

      this.passedElement.triggerEvent(EVENTS.search, {
        value: value,
        resultCount: resultCount
      });
    } else if (hasUnactiveChoices) {
      // Otherwise reset choices to active
      this._isSearching = false;

      this._store.dispatch(choices_activateChoices(true));
    }
  };

  _proto._canAddItem = function _canAddItem(activeItems, value) {
    var canAddItem = true;
    var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;

    if (!this._isSelectOneElement) {
      var isDuplicateValue = existsInArray(activeItems, value);

      if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
        // If there is a max entry limit and we have reached that limit
        // don't update
        canAddItem = false;
        notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
      }

      if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
        canAddItem = false;
        notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
      }

      if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
        canAddItem = false;
        notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
      }
    }

    return {
      response: canAddItem,
      notice: notice
    };
  };

  _proto._searchChoices = function _searchChoices(value) {
    var newValue = typeof value === 'string' ? value.trim() : value;
    var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;

    if (newValue.length < 1 && newValue === currentValue + " ") {
      return 0;
    } // If new value matches the desired length and is not the same as the current value with a space


    var haystack = this._store.searchableChoices;
    var needle = newValue;
    var keys = [].concat(this.config.searchFields);
    var options = Object.assign(this.config.fuseOptions, {
      keys: keys
    });
    var fuse = new fuse_default.a(haystack, options);
    var results = fuse.search(needle);
    this._currentValue = newValue;
    this._highlightPosition = 0;
    this._isSearching = true;

    this._store.dispatch(choices_filterChoices(results));

    return results.length;
  };

  _proto._addEventListeners = function _addEventListeners() {
    var _document = document,
        documentElement = _document.documentElement; // capture events - can cancel event processing or propagation

    documentElement.addEventListener('touchend', this._onTouchEnd, true);
    this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
    this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true); // passive events - doesn't call `preventDefault` or `stopPropagation`

    documentElement.addEventListener('click', this._onClick, {
      passive: true
    });
    documentElement.addEventListener('touchmove', this._onTouchMove, {
      passive: true
    });
    this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
      passive: true
    });

    if (this._isSelectOneElement) {
      this.containerOuter.element.addEventListener('focus', this._onFocus, {
        passive: true
      });
      this.containerOuter.element.addEventListener('blur', this._onBlur, {
        passive: true
      });
    }

    this.input.element.addEventListener('keyup', this._onKeyUp, {
      passive: true
    });
    this.input.element.addEventListener('focus', this._onFocus, {
      passive: true
    });
    this.input.element.addEventListener('blur', this._onBlur, {
      passive: true
    });

    if (this.input.element.form) {
      this.input.element.form.addEventListener('reset', this._onFormReset, {
        passive: true
      });
    }

    this.input.addEventListeners();
  };

  _proto._removeEventListeners = function _removeEventListeners() {
    var _document2 = document,
        documentElement = _document2.documentElement;
    documentElement.removeEventListener('touchend', this._onTouchEnd, true);
    this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
    this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
    documentElement.removeEventListener('click', this._onClick);
    documentElement.removeEventListener('touchmove', this._onTouchMove);
    this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);

    if (this._isSelectOneElement) {
      this.containerOuter.element.removeEventListener('focus', this._onFocus);
      this.containerOuter.element.removeEventListener('blur', this._onBlur);
    }

    this.input.element.removeEventListener('keyup', this._onKeyUp);
    this.input.element.removeEventListener('focus', this._onFocus);
    this.input.element.removeEventListener('blur', this._onBlur);

    if (this.input.element.form) {
      this.input.element.form.removeEventListener('reset', this._onFormReset);
    }

    this.input.removeEventListeners();
  }
  /**
   * @param {KeyboardEvent} event
   */
  ;

  _proto._onKeyDown = function _onKeyDown(event) {
    var _keyDownActions;

    var target = event.target,
        keyCode = event.keyCode,
        ctrlKey = event.ctrlKey,
        metaKey = event.metaKey;
    var activeItems = this._store.activeItems;
    var hasFocusedInput = this.input.isFocussed;
    var hasActiveDropdown = this.dropdown.isActive;
    var hasItems = this.itemList.hasChildren();
    var keyString = String.fromCharCode(keyCode);
    var BACK_KEY = KEY_CODES.BACK_KEY,
        DELETE_KEY = KEY_CODES.DELETE_KEY,
        ENTER_KEY = KEY_CODES.ENTER_KEY,
        A_KEY = KEY_CODES.A_KEY,
        ESC_KEY = KEY_CODES.ESC_KEY,
        UP_KEY = KEY_CODES.UP_KEY,
        DOWN_KEY = KEY_CODES.DOWN_KEY,
        PAGE_UP_KEY = KEY_CODES.PAGE_UP_KEY,
        PAGE_DOWN_KEY = KEY_CODES.PAGE_DOWN_KEY;
    var hasCtrlDownKeyPressed = ctrlKey || metaKey; // If a user is typing and the dropdown is not active

    if (!this._isTextElement && /[a-zA-Z0-9-_ ]/.test(keyString)) {
      this.showDropdown();
    } // Map keys to key actions


    var keyDownActions = (_keyDownActions = {}, _keyDownActions[A_KEY] = this._onAKey, _keyDownActions[ENTER_KEY] = this._onEnterKey, _keyDownActions[ESC_KEY] = this._onEscapeKey, _keyDownActions[UP_KEY] = this._onDirectionKey, _keyDownActions[PAGE_UP_KEY] = this._onDirectionKey, _keyDownActions[DOWN_KEY] = this._onDirectionKey, _keyDownActions[PAGE_DOWN_KEY] = this._onDirectionKey, _keyDownActions[DELETE_KEY] = this._onDeleteKey, _keyDownActions[BACK_KEY] = this._onDeleteKey, _keyDownActions); // If keycode has a function, run it

    if (keyDownActions[keyCode]) {
      keyDownActions[keyCode]({
        event: event,
        target: target,
        keyCode: keyCode,
        metaKey: metaKey,
        activeItems: activeItems,
        hasFocusedInput: hasFocusedInput,
        hasActiveDropdown: hasActiveDropdown,
        hasItems: hasItems,
        hasCtrlDownKeyPressed: hasCtrlDownKeyPressed
      });
    }
  };

  _proto._onKeyUp = function _onKeyUp(_ref2) {
    var target = _ref2.target,
        keyCode = _ref2.keyCode;
    var value = this.input.value;
    var activeItems = this._store.activeItems;

    var canAddItem = this._canAddItem(activeItems, value);

    var backKey = KEY_CODES.BACK_KEY,
        deleteKey = KEY_CODES.DELETE_KEY; // We are typing into a text input and have a value, we want to show a dropdown
    // notice. Otherwise hide the dropdown

    if (this._isTextElement) {
      var canShowDropdownNotice = canAddItem.notice && value;

      if (canShowDropdownNotice) {
        var dropdownItem = this._getTemplate('notice', canAddItem.notice);

        this.dropdown.element.innerHTML = dropdownItem.outerHTML;
        this.showDropdown(true);
      } else {
        this.hideDropdown(true);
      }
    } else {
      var userHasRemovedValue = (keyCode === backKey || keyCode === deleteKey) && !target.value;
      var canReactivateChoices = !this._isTextElement && this._isSearching;
      var canSearch = this._canSearch && canAddItem.response;

      if (userHasRemovedValue && canReactivateChoices) {
        this._isSearching = false;

        this._store.dispatch(choices_activateChoices(true));
      } else if (canSearch) {
        this._handleSearch(this.input.value);
      }
    }

    this._canSearch = this.config.searchEnabled;
  };

  _proto._onAKey = function _onAKey(_ref3) {
    var hasItems = _ref3.hasItems,
        hasCtrlDownKeyPressed = _ref3.hasCtrlDownKeyPressed;

    // If CTRL + A or CMD + A have been pressed and there are items to select
    if (hasCtrlDownKeyPressed && hasItems) {
      this._canSearch = false;
      var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;

      if (shouldHightlightAll) {
        this.highlightAll();
      }
    }
  };

  _proto._onEnterKey = function _onEnterKey(_ref4) {
    var event = _ref4.event,
        target = _ref4.target,
        activeItems = _ref4.activeItems,
        hasActiveDropdown = _ref4.hasActiveDropdown;
    var enterKey = KEY_CODES.ENTER_KEY;
    var targetWasButton = target.hasAttribute('data-button');

    if (this._isTextElement && target.value) {
      var value = this.input.value;

      var canAddItem = this._canAddItem(activeItems, value);

      if (canAddItem.response) {
        this.hideDropdown(true);

        this._addItem({
          value: value
        });

        this._triggerChange(value);

        this.clearInput();
      }
    }

    if (targetWasButton) {
      this._handleButtonAction(activeItems, target);

      event.preventDefault();
    }

    if (hasActiveDropdown) {
      var highlightedChoice = this.dropdown.getChild("." + this.config.classNames.highlightedState);

      if (highlightedChoice) {
        // add enter keyCode value
        if (activeItems[0]) {
          activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
        }

        this._handleChoiceAction(activeItems, highlightedChoice);
      }

      event.preventDefault();
    } else if (this._isSelectOneElement) {
      this.showDropdown();
      event.preventDefault();
    }
  };

  _proto._onEscapeKey = function _onEscapeKey(_ref5) {
    var hasActiveDropdown = _ref5.hasActiveDropdown;

    if (hasActiveDropdown) {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  };

  _proto._onDirectionKey = function _onDirectionKey(_ref6) {
    var event = _ref6.event,
        hasActiveDropdown = _ref6.hasActiveDropdown,
        keyCode = _ref6.keyCode,
        metaKey = _ref6.metaKey;
    var downKey = KEY_CODES.DOWN_KEY,
        pageUpKey = KEY_CODES.PAGE_UP_KEY,
        pageDownKey = KEY_CODES.PAGE_DOWN_KEY; // If up or down key is pressed, traverse through options

    if (hasActiveDropdown || this._isSelectOneElement) {
      this.showDropdown();
      this._canSearch = false;
      var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
      var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
      var selectableChoiceIdentifier = '[data-choice-selectable]';
      var nextEl;

      if (skipKey) {
        if (directionInt > 0) {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier + ":last-of-type");
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      } else {
        var currentEl = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);

        if (currentEl) {
          nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      }

      if (nextEl) {
        // We prevent default to stop the cursor moving
        // when pressing the arrow
        if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) {
          this.choiceList.scrollToChildElement(nextEl, directionInt);
        }

        this._highlightChoice(nextEl);
      } // Prevent default to maintain cursor position whilst
      // traversing dropdown options


      event.preventDefault();
    }
  };

  _proto._onDeleteKey = function _onDeleteKey(_ref7) {
    var event = _ref7.event,
        target = _ref7.target,
        hasFocusedInput = _ref7.hasFocusedInput,
        activeItems = _ref7.activeItems;

    // If backspace or delete key is pressed and the input has no value
    if (hasFocusedInput && !target.value && !this._isSelectOneElement) {
      this._handleBackspace(activeItems);

      event.preventDefault();
    }
  };

  _proto._onTouchMove = function _onTouchMove() {
    if (this._wasTap) {
      this._wasTap = false;
    }
  };

  _proto._onTouchEnd = function _onTouchEnd(event) {
    var _ref8 = event || event.touches[0],
        target = _ref8.target;

    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);

    if (touchWasWithinContainer) {
      var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;

      if (containerWasExactTarget) {
        if (this._isTextElement) {
          this.input.focus();
        } else if (this._isSelectMultipleElement) {
          this.showDropdown();
        }
      } // Prevents focus event firing


      event.stopPropagation();
    }

    this._wasTap = true;
  }
  /**
   * Handles mousedown event in capture mode for containetOuter.element
   * @param {MouseEvent} event
   */
  ;

  _proto._onMouseDown = function _onMouseDown(event) {
    var target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    } // If we have our mouse down on the scrollbar and are on IE11...


    if (IS_IE11 && this.choiceList.element.contains(target)) {
      // check if click was on a scrollbar area
      var firstChoice =
      /** @type {HTMLElement} */
      this.choiceList.element.firstElementChild;
      var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
      this._isScrollingOnIe = isOnScrollbar;
    }

    if (target === this.input.element) {
      return;
    }

    var item = target.closest('[data-button],[data-item],[data-choice]');

    if (item instanceof HTMLElement) {
      var hasShiftKey = event.shiftKey;
      var activeItems = this._store.activeItems;
      var dataset = item.dataset;

      if ('button' in dataset) {
        this._handleButtonAction(activeItems, item);
      } else if ('item' in dataset) {
        this._handleItemAction(activeItems, item, hasShiftKey);
      } else if ('choice' in dataset) {
        this._handleChoiceAction(activeItems, item);
      }
    }

    event.preventDefault();
  }
  /**
   * Handles mouseover event over this.dropdown
   * @param {MouseEvent} event
   */
  ;

  _proto._onMouseOver = function _onMouseOver(_ref9) {
    var target = _ref9.target;

    if (target instanceof HTMLElement && 'choice' in target.dataset) {
      this._highlightChoice(target);
    }
  };

  _proto._onClick = function _onClick(_ref10) {
    var target = _ref10.target;
    var clickWasWithinContainer = this.containerOuter.element.contains(target);

    if (clickWasWithinContainer) {
      if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
        if (this._isTextElement) {
          if (document.activeElement !== this.input.element) {
            this.input.focus();
          }
        } else {
          this.showDropdown();
          this.containerOuter.focus();
        }
      } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
        this.hideDropdown();
      }
    } else {
      var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;

      if (hasHighlightedItems) {
        this.unhighlightAll();
      }

      this.containerOuter.removeFocusState();
      this.hideDropdown(true);
    }
  };

  _proto._onFocus = function _onFocus(_ref11) {
    var _this17 = this,
        _focusActions;

    var target = _ref11.target;
    var focusWasWithinContainer = this.containerOuter.element.contains(target);

    if (!focusWasWithinContainer) {
      return;
    }

    var focusActions = (_focusActions = {}, _focusActions[TEXT_TYPE] = function () {
      if (target === _this17.input.element) {
        _this17.containerOuter.addFocusState();
      }
    }, _focusActions[SELECT_ONE_TYPE] = function () {
      _this17.containerOuter.addFocusState();

      if (target === _this17.input.element) {
        _this17.showDropdown(true);
      }
    }, _focusActions[SELECT_MULTIPLE_TYPE] = function () {
      if (target === _this17.input.element) {
        _this17.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
        // isn't already open, focus and show dropdown


        _this17.containerOuter.addFocusState();
      }
    }, _focusActions);
    focusActions[this.passedElement.element.type]();
  };

  _proto._onBlur = function _onBlur(_ref12) {
    var _this18 = this;

    var target = _ref12.target;
    var blurWasWithinContainer = this.containerOuter.element.contains(target);

    if (blurWasWithinContainer && !this._isScrollingOnIe) {
      var _blurActions;

      var activeItems = this._store.activeItems;
      var hasHighlightedItems = activeItems.some(function (item) {
        return item.highlighted;
      });
      var blurActions = (_blurActions = {}, _blurActions[TEXT_TYPE] = function () {
        if (target === _this18.input.element) {
          _this18.containerOuter.removeFocusState();

          if (hasHighlightedItems) {
            _this18.unhighlightAll();
          }

          _this18.hideDropdown(true);
        }
      }, _blurActions[SELECT_ONE_TYPE] = function () {
        _this18.containerOuter.removeFocusState();

        if (target === _this18.input.element || target === _this18.containerOuter.element && !_this18._canSearch) {
          _this18.hideDropdown(true);
        }
      }, _blurActions[SELECT_MULTIPLE_TYPE] = function () {
        if (target === _this18.input.element) {
          _this18.containerOuter.removeFocusState();

          _this18.hideDropdown(true);

          if (hasHighlightedItems) {
            _this18.unhighlightAll();
          }
        }
      }, _blurActions);
      blurActions[this.passedElement.element.type]();
    } else {
      // On IE11, clicking the scollbar blurs our input and thus
      // closes the dropdown. To stop this, we refocus our input
      // if we know we are on IE *and* are scrolling.
      this._isScrollingOnIe = false;
      this.input.element.focus();
    }
  };

  _proto._onFormReset = function _onFormReset() {
    this._store.dispatch(resetTo(this._initialState));
  };

  _proto._highlightChoice = function _highlightChoice(el) {
    var _this19 = this;

    if (el === void 0) {
      el = null;
    }

    var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));

    if (!choices.length) {
      return;
    }

    var passedEl = el;
    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)); // Remove any highlighted choices

    highlightedChoices.forEach(function (choice) {
      choice.classList.remove(_this19.config.classNames.highlightedState);
      choice.setAttribute('aria-selected', 'false');
    });

    if (passedEl) {
      this._highlightPosition = choices.indexOf(passedEl);
    } else {
      // Highlight choice based on last known highlight location
      if (choices.length > this._highlightPosition) {
        // If we have an option to highlight
        passedEl = choices[this._highlightPosition];
      } else {
        // Otherwise highlight the option before
        passedEl = choices[choices.length - 1];
      }

      if (!passedEl) {
        passedEl = choices[0];
      }
    }

    passedEl.classList.add(this.config.classNames.highlightedState);
    passedEl.setAttribute('aria-selected', 'true');
    this.passedElement.triggerEvent(EVENTS.highlightChoice, {
      el: passedEl
    });

    if (this.dropdown.isActive) {
      // IE11 ignores aria-label and blocks virtual keyboard
      // if aria-activedescendant is set without a dropdown
      this.input.setActiveDescendant(passedEl.id);
      this.containerOuter.setActiveDescendant(passedEl.id);
    }
  };

  _proto._addItem = function _addItem(_ref13) {
    var value = _ref13.value,
        _ref13$label = _ref13.label,
        label = _ref13$label === void 0 ? null : _ref13$label,
        _ref13$choiceId = _ref13.choiceId,
        choiceId = _ref13$choiceId === void 0 ? -1 : _ref13$choiceId,
        _ref13$groupId = _ref13.groupId,
        groupId = _ref13$groupId === void 0 ? -1 : _ref13$groupId,
        _ref13$customProperti = _ref13.customProperties,
        customProperties = _ref13$customProperti === void 0 ? null : _ref13$customProperti,
        _ref13$placeholder = _ref13.placeholder,
        placeholder = _ref13$placeholder === void 0 ? false : _ref13$placeholder,
        _ref13$keyCode = _ref13.keyCode,
        keyCode = _ref13$keyCode === void 0 ? null : _ref13$keyCode;
    var passedValue = typeof value === 'string' ? value.trim() : value;
    var passedKeyCode = keyCode;
    var passedCustomProperties = customProperties;
    var items = this._store.items;
    var passedLabel = label || passedValue;
    var passedOptionId = choiceId || -1;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
    var id = items ? items.length + 1 : 1; // If a prepended value has been passed, prepend it

    if (this.config.prependValue) {
      passedValue = this.config.prependValue + passedValue.toString();
    } // If an appended value has been passed, append it


    if (this.config.appendValue) {
      passedValue += this.config.appendValue.toString();
    }

    this._store.dispatch(items_addItem({
      value: passedValue,
      label: passedLabel,
      id: id,
      choiceId: passedOptionId,
      groupId: groupId,
      customProperties: customProperties,
      placeholder: placeholder,
      keyCode: passedKeyCode
    }));

    if (this._isSelectOneElement) {
      this.removeActiveItems(id);
    } // Trigger change event


    this.passedElement.triggerEvent(EVENTS.addItem, {
      id: id,
      value: passedValue,
      label: passedLabel,
      customProperties: passedCustomProperties,
      groupValue: group && group.value ? group.value : undefined,
      keyCode: passedKeyCode
    });
    return this;
  };

  _proto._removeItem = function _removeItem(item) {
    if (!item || !isType('Object', item)) {
      return this;
    }

    var id = item.id,
        value = item.value,
        label = item.label,
        choiceId = item.choiceId,
        groupId = item.groupId;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

    this._store.dispatch(items_removeItem(id, choiceId));

    if (group && group.value) {
      this.passedElement.triggerEvent(EVENTS.removeItem, {
        id: id,
        value: value,
        label: label,
        groupValue: group.value
      });
    } else {
      this.passedElement.triggerEvent(EVENTS.removeItem, {
        id: id,
        value: value,
        label: label
      });
    }

    return this;
  };

  _proto._addChoice = function _addChoice(_ref14) {
    var value = _ref14.value,
        _ref14$label = _ref14.label,
        label = _ref14$label === void 0 ? null : _ref14$label,
        _ref14$isSelected = _ref14.isSelected,
        isSelected = _ref14$isSelected === void 0 ? false : _ref14$isSelected,
        _ref14$isDisabled = _ref14.isDisabled,
        isDisabled = _ref14$isDisabled === void 0 ? false : _ref14$isDisabled,
        _ref14$groupId = _ref14.groupId,
        groupId = _ref14$groupId === void 0 ? -1 : _ref14$groupId,
        _ref14$customProperti = _ref14.customProperties,
        customProperties = _ref14$customProperti === void 0 ? null : _ref14$customProperti,
        _ref14$placeholder = _ref14.placeholder,
        placeholder = _ref14$placeholder === void 0 ? false : _ref14$placeholder,
        _ref14$keyCode = _ref14.keyCode,
        keyCode = _ref14$keyCode === void 0 ? null : _ref14$keyCode;

    if (typeof value === 'undefined' || value === null) {
      return;
    } // Generate unique id


    var choices = this._store.choices;
    var choiceLabel = label || value;
    var choiceId = choices ? choices.length + 1 : 1;
    var choiceElementId = this._baseId + "-" + this._idNames.itemChoice + "-" + choiceId;

    this._store.dispatch(choices_addChoice({
      id: choiceId,
      groupId: groupId,
      elementId: choiceElementId,
      value: value,
      label: choiceLabel,
      disabled: isDisabled,
      customProperties: customProperties,
      placeholder: placeholder,
      keyCode: keyCode
    }));

    if (isSelected) {
      this._addItem({
        value: value,
        label: choiceLabel,
        choiceId: choiceId,
        customProperties: customProperties,
        placeholder: placeholder,
        keyCode: keyCode
      });
    }
  };

  _proto._addGroup = function _addGroup(_ref15) {
    var _this20 = this;

    var group = _ref15.group,
        id = _ref15.id,
        _ref15$valueKey = _ref15.valueKey,
        valueKey = _ref15$valueKey === void 0 ? 'value' : _ref15$valueKey,
        _ref15$labelKey = _ref15.labelKey,
        labelKey = _ref15$labelKey === void 0 ? 'label' : _ref15$labelKey;
    var groupChoices = isType('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
    var groupId = id || Math.floor(new Date().valueOf() * Math.random());
    var isDisabled = group.disabled ? group.disabled : false;

    if (groupChoices) {
      this._store.dispatch(groups_addGroup({
        value: group.label,
        id: groupId,
        active: true,
        disabled: isDisabled
      }));

      var addGroupChoices = function addGroupChoices(choice) {
        var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;

        _this20._addChoice({
          value: choice[valueKey],
          label: isType('Object', choice) ? choice[labelKey] : choice.innerHTML,
          isSelected: choice.selected,
          isDisabled: isOptDisabled,
          groupId: groupId,
          customProperties: choice.customProperties,
          placeholder: choice.placeholder
        });
      };

      groupChoices.forEach(addGroupChoices);
    } else {
      this._store.dispatch(groups_addGroup({
        value: group.label,
        id: group.id,
        active: false,
        disabled: group.disabled
      }));
    }
  };

  _proto._getTemplate = function _getTemplate(template) {
    var _this$_templates$temp;

    if (!template) {
      return null;
    }

    var classNames = this.config.classNames;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_this$_templates$temp = this._templates[template]).call.apply(_this$_templates$temp, [this, classNames].concat(args));
  };

  _proto._createTemplates = function _createTemplates() {
    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
    var userTemplates = {};

    if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
      userTemplates = callbackOnCreateTemplates.call(this, strToEl);
    }

    this._templates = cjs_default()(TEMPLATES, userTemplates);
  };

  _proto._createElements = function _createElements() {
    this.containerOuter = new container_Container({
      element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      position: this.config.position
    });
    this.containerInner = new container_Container({
      element: this._getTemplate('containerInner'),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      position: this.config.position
    });
    this.input = new input_Input({
      element: this._getTemplate('input', this._placeholderValue),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      preventPaste: !this.config.paste
    });
    this.choiceList = new list_List({
      element: this._getTemplate('choiceList', this._isSelectOneElement)
    });
    this.itemList = new list_List({
      element: this._getTemplate('itemList', this._isSelectOneElement)
    });
    this.dropdown = new Dropdown({
      element: this._getTemplate('dropdown'),
      classNames: this.config.classNames,
      type: this.passedElement.element.type
    });
  };

  _proto._createStructure = function _createStructure() {
    // Hide original element
    this.passedElement.conceal(); // Wrap input in container preserving DOM ordering

    this.containerInner.wrap(this.passedElement.element); // Wrapper inner container with outer container

    this.containerOuter.wrap(this.containerInner.element);

    if (this._isSelectOneElement) {
      this.input.placeholder = this.config.searchPlaceholderValue || '';
    } else if (this._placeholderValue) {
      this.input.placeholder = this._placeholderValue;
      this.input.setWidth();
    }

    this.containerOuter.element.appendChild(this.containerInner.element);
    this.containerOuter.element.appendChild(this.dropdown.element);
    this.containerInner.element.appendChild(this.itemList.element);

    if (!this._isTextElement) {
      this.dropdown.element.appendChild(this.choiceList.element);
    }

    if (!this._isSelectOneElement) {
      this.containerInner.element.appendChild(this.input.element);
    } else if (this.config.searchEnabled) {
      this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
    }

    if (this._isSelectElement) {
      this._highlightPosition = 0;
      this._isSearching = false;

      this._startLoading();

      if (this._presetGroups.length) {
        this._addPredefinedGroups(this._presetGroups);
      } else {
        this._addPredefinedChoices(this._presetChoices);
      }

      this._stopLoading();
    }

    if (this._isTextElement) {
      this._addPredefinedItems(this._presetItems);
    }
  };

  _proto._addPredefinedGroups = function _addPredefinedGroups(groups) {
    var _this21 = this;

    // If we have a placeholder option
    var placeholderChoice = this.passedElement.placeholderOption;

    if (placeholderChoice && placeholderChoice.parentNode.tagName === 'SELECT') {
      this._addChoice({
        value: placeholderChoice.value,
        label: placeholderChoice.innerHTML,
        isSelected: placeholderChoice.selected,
        isDisabled: placeholderChoice.disabled,
        placeholder: true
      });
    }

    groups.forEach(function (group) {
      return _this21._addGroup({
        group: group,
        id: group.id || null
      });
    });
  };

  _proto._addPredefinedChoices = function _addPredefinedChoices(choices) {
    var _this22 = this;

    // If sorting is enabled or the user is searching, filter choices
    if (this.config.shouldSort) {
      choices.sort(this.config.sorter);
    }

    var hasSelectedChoice = choices.some(function (choice) {
      return choice.selected;
    });
    var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
      return choice.disabled === undefined || !choice.disabled;
    });
    choices.forEach(function (choice, index) {
      var value = choice.value,
          label = choice.label,
          customProperties = choice.customProperties,
          placeholder = choice.placeholder;

      if (_this22._isSelectElement) {
        // If the choice is actually a group
        if (choice.choices) {
          _this22._addGroup({
            group: choice,
            id: choice.id || null
          });
        } else {
          /**
           * If there is a selected choice already or the choice is not the first in
           * the array, add each choice normally.
           *
           * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
           */
          var shouldPreselect = _this22._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
          var isSelected = shouldPreselect ? true : choice.selected;
          var isDisabled = choice.disabled;

          _this22._addChoice({
            value: value,
            label: label,
            isSelected: isSelected,
            isDisabled: isDisabled,
            customProperties: customProperties,
            placeholder: placeholder
          });
        }
      } else {
        _this22._addChoice({
          value: value,
          label: label,
          isSelected: choice.selected,
          isDisabled: choice.disabled,
          customProperties: customProperties,
          placeholder: placeholder
        });
      }
    });
  }
  /**
   * @param {Item[]} items
   */
  ;

  _proto._addPredefinedItems = function _addPredefinedItems(items) {
    var _this23 = this;

    items.forEach(function (item) {
      if (typeof item === 'object' && item.value) {
        _this23._addItem({
          value: item.value,
          label: item.label,
          choiceId: item.id,
          customProperties: item.customProperties,
          placeholder: item.placeholder
        });
      }

      if (typeof item === 'string') {
        _this23._addItem({
          value: item
        });
      }
    });
  };

  _proto._setChoiceOrItem = function _setChoiceOrItem(item) {
    var _this24 = this;

    var itemType = getType(item).toLowerCase();
    var handleType = {
      object: function object() {
        if (!item.value) {
          return;
        } // If we are dealing with a select input, we need to create an option first
        // that is then selected. For text inputs we can just add items normally.


        if (!_this24._isTextElement) {
          _this24._addChoice({
            value: item.value,
            label: item.label,
            isSelected: true,
            isDisabled: false,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        } else {
          _this24._addItem({
            value: item.value,
            label: item.label,
            choiceId: item.id,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        }
      },
      string: function string() {
        if (!_this24._isTextElement) {
          _this24._addChoice({
            value: item,
            label: item,
            isSelected: true,
            isDisabled: false
          });
        } else {
          _this24._addItem({
            value: item
          });
        }
      }
    };
    handleType[itemType]();
  };

  _proto._findAndSelectChoiceByValue = function _findAndSelectChoiceByValue(val) {
    var _this25 = this;

    var choices = this._store.choices; // Check 'value' property exists and the choice isn't already selected

    var foundChoice = choices.find(function (choice) {
      return _this25.config.valueComparer(choice.value, val);
    });

    if (foundChoice && !foundChoice.selected) {
      this._addItem({
        value: foundChoice.value,
        label: foundChoice.label,
        choiceId: foundChoice.id,
        groupId: foundChoice.groupId,
        customProperties: foundChoice.customProperties,
        placeholder: foundChoice.placeholder,
        keyCode: foundChoice.keyCode
      });
    }
  };

  _proto._generatePlaceholderValue = function _generatePlaceholderValue() {
    if (this._isSelectElement) {
      var placeholderOption = this.passedElement.placeholderOption;
      return placeholderOption ? placeholderOption.text : false;
    }

    var _this$config4 = this.config,
        placeholder = _this$config4.placeholder,
        placeholderValue = _this$config4.placeholderValue;
    var dataset = this.passedElement.element.dataset;

    if (placeholder) {
      if (placeholderValue) {
        return placeholderValue;
      }

      if (dataset.placeholder) {
        return dataset.placeholder;
      }
    }

    return false;
  };

  return Choices;
}();

/* harmony default export */ var scripts_choices = __webpack_exports__["default"] = (choices_Choices);

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ "./node_modules/core-js/internals/engine-is-webos-webkit.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "./node_modules/core-js/internals/engine-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hvaWNlcy5qcy9wdWJsaWMvYXNzZXRzL3NjcmlwdHMvY2hvaWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLWlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLW5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy13ZWJvcy13ZWJraXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLXdyYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBS3dCO0FBQzlCLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsSUFBSTtBQUNmLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQSxXQUFXLElBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLElBQUk7QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWUsU0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDs7QUFF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsNEJBQTRCO0FBQzVCOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQSx1RUFBdUU7OztBQUd2RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBLGtFQUFrRTs7O0FBR2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsTUFBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNERBQTREOzs7QUFHNUQ7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7OztBQUdMLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBFQUEwRTs7O0FBRzFFO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0EsdUVBQXVFOztBQUV2RTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0EsdUZBQXVGOztBQUV2RjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsOENBQThDLHFjQUFxYzs7QUFFbmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQ0FBbUM7QUFDbkM7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtIQUErSDs7QUFFL0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQyx5REFBeUQ7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFH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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidmVuZG9yc35hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgY2hvaWNlcy5qcyB2OS4wLjEgfCDCqSAyMDE5IEpvc2ggSm9obnNvbiB8IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2hqb2huc29uL0Nob2ljZXMjcmVhZG1lICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDaG9pY2VzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNob2ljZXNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcHVibGljL2Fzc2V0cy9zY3JpcHRzL1wiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGlzTWVyZ2VhYmxlT2JqZWN0ID0gZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSlcblx0XHQmJiAhaXNTcGVjaWFsKHZhbHVlKVxufTtcblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNTcGVjaWFsKHZhbHVlKSB7XG5cdHZhciBzdHJpbmdWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cblx0cmV0dXJuIHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBSZWdFeHBdJ1xuXHRcdHx8IHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBEYXRlXSdcblx0XHR8fCBpc1JlYWN0RWxlbWVudCh2YWx1ZSlcbn1cblxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I1YWM5NjNmYjc5MWQxMjk4ZTdmMzk2MjM2MzgzYmM5NTVmOTE2YzEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMjEtTDI1XG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcblxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEVcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHZhbHVlLCBvcHRpb25zKSB7XG5cdHJldHVybiAob3B0aW9ucy5jbG9uZSAhPT0gZmFsc2UgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpXG5cdFx0PyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9ucylcblx0XHQ6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdHJldHVybiB0YXJnZXQuY29uY2F0KHNvdXJjZSkubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoZWxlbWVudCwgb3B0aW9ucylcblx0fSlcbn1cblxuZnVuY3Rpb24gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpIHtcblx0aWYgKCFvcHRpb25zLmN1c3RvbU1lcmdlKSB7XG5cdFx0cmV0dXJuIGRlZXBtZXJnZVxuXHR9XG5cdHZhciBjdXN0b21NZXJnZSA9IG9wdGlvbnMuY3VzdG9tTWVyZ2Uoa2V5KTtcblx0cmV0dXJuIHR5cGVvZiBjdXN0b21NZXJnZSA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbU1lcmdlIDogZGVlcG1lcmdlXG59XG5cbmZ1bmN0aW9uIGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSB7XG5cdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzXG5cdFx0PyBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkuZmlsdGVyKGZ1bmN0aW9uKHN5bWJvbCkge1xuXHRcdFx0cmV0dXJuIHRhcmdldC5wcm9wZXJ0eUlzRW51bWVyYWJsZShzeW1ib2wpXG5cdFx0fSlcblx0XHQ6IFtdXG59XG5cbmZ1bmN0aW9uIGdldEtleXModGFyZ2V0KSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyh0YXJnZXQpLmNvbmNhdChnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpXG59XG5cbi8vIFByb3RlY3RzIGZyb20gcHJvdG90eXBlIHBvaXNvbmluZyBhbmQgdW5leHBlY3RlZCBtZXJnaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5mdW5jdGlvbiBwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIChrZXkgaW4gdGFyZ2V0KSAvLyBQcm9wZXJ0aWVzIGFyZSBzYWZlIHRvIG1lcmdlIGlmIHRoZXkgZG9uJ3QgZXhpc3QgaW4gdGhlIHRhcmdldCB5ZXQsXG5cdFx0XHQmJiAhKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSAvLyB1bnNhZmUgaWYgdGhleSBleGlzdCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLFxuXHRcdFx0XHQmJiBPYmplY3QucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXQsIGtleSkpIC8vIGFuZCBhbHNvIHVuc2FmZSBpZiB0aGV5J3JlIG5vbmVudW1lcmFibGUuXG5cdH0gY2F0Y2ggKHVudXNlZCkge1xuXHRcdC8vIENvdW50ZXJpbnR1aXRpdmVseSwgaXQncyBzYWZlIHRvIG1lcmdlIGFueSBwcm9wZXJ0eSBvbiBhIHRhcmdldCB0aGF0IGNhdXNlcyB0aGUgYGluYCBvcGVyYXRvciB0byB0aHJvdy5cblx0XHQvLyBUaGlzIGhhcHBlbnMgd2hlbiB0cnlpbmcgdG8gY29weSBhbiBvYmplY3QgaW4gdGhlIHNvdXJjZSBvdmVyIGEgcGxhaW4gc3RyaW5nIGluIHRoZSB0YXJnZXQuXG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGRlc3RpbmF0aW9uID0ge307XG5cdGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcblx0XHRnZXRLZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0S2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0aWYgKHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZiAoIW9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblx0b3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCA9IG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgfHwgaXNNZXJnZWFibGVPYmplY3Q7XG5cdC8vIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkIGlzIGFkZGVkIHRvIGBvcHRpb25zYCBzbyB0aGF0IGN1c3RvbSBhcnJheU1lcmdlKClcblx0Ly8gaW1wbGVtZW50YXRpb25zIGNhbiB1c2UgaXQuIFRoZSBjYWxsZXIgbWF5IG5vdCByZXBsYWNlIGl0LlxuXHRvcHRpb25zLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQ7XG5cblx0dmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG5cdHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuXHR2YXIgc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCA9IHNvdXJjZUlzQXJyYXkgPT09IHRhcmdldElzQXJyYXk7XG5cblx0aWYgKCFzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoKSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9ucykge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXknKVxuXHR9XG5cblx0cmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG5cdFx0cmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKVxuXHR9LCB7fSlcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwbWVyZ2VfMTtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsLCBtb2R1bGUpIHsvKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbnlmaWxsX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5cbnZhciByb290O1xuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0cnVlKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge31cblxudmFyIHJlc3VsdCA9IE9iamVjdChfcG9ueWZpbGxfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1svKiBkZWZhdWx0ICovIFwiYVwiXSkocm9vdCk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gKHJlc3VsdCk7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpKG1vZHVsZSkpKVxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyohXG4gKiBGdXNlLmpzIHYzLjQuNSAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTcgS2lyb2xsb3MgUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqIFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cbiFmdW5jdGlvbihlLHQpeyB0cnVlP21vZHVsZS5leHBvcnRzPXQoKTp1bmRlZmluZWR9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBBcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXkoZSk6XCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfX0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSl7cmV0dXJuKHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfWZ1bmN0aW9uIG8oZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXZhciBpPW4oMiksYT1uKDgpLHM9bigwKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4pe3ZhciByPW4ubG9jYXRpb24sbz12b2lkIDA9PT1yPzA6cixpPW4uZGlzdGFuY2Uscz12b2lkIDA9PT1pPzEwMDppLGM9bi50aHJlc2hvbGQsaD12b2lkIDA9PT1jPy42OmMsbD1uLm1heFBhdHRlcm5MZW5ndGgsdT12b2lkIDA9PT1sPzMyOmwsZj1uLmNhc2VTZW5zaXRpdmUsZD12b2lkIDAhPT1mJiZmLHY9bi50b2tlblNlcGFyYXRvcixwPXZvaWQgMD09PXY/LyArL2c6dixnPW4uZmluZEFsbE1hdGNoZXMseT12b2lkIDAhPT1nJiZnLG09bi5taW5NYXRjaENoYXJMZW5ndGgsaz12b2lkIDA9PT1tPzE6bSxTPW4uaWQseD12b2lkIDA9PT1TP251bGw6UyxiPW4ua2V5cyxNPXZvaWQgMD09PWI/W106YixfPW4uc2hvdWxkU29ydCxMPXZvaWQgMD09PV98fF8sdz1uLmdldEZuLEE9dm9pZCAwPT09dz9hOncsQz1uLnNvcnRGbixJPXZvaWQgMD09PUM/ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5zY29yZS10LnNjb3JlfTpDLE89bi50b2tlbml6ZSxqPXZvaWQgMCE9PU8mJk8sUD1uLm1hdGNoQWxsVG9rZW5zLEY9dm9pZCAwIT09UCYmUCxUPW4uaW5jbHVkZU1hdGNoZXMsej12b2lkIDAhPT1UJiZULEU9bi5pbmNsdWRlU2NvcmUsSz12b2lkIDAhPT1FJiZFLCQ9bi52ZXJib3NlLEo9dm9pZCAwIT09JCYmJDshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLHRoaXMub3B0aW9ucz17bG9jYXRpb246byxkaXN0YW5jZTpzLHRocmVzaG9sZDpoLG1heFBhdHRlcm5MZW5ndGg6dSxpc0Nhc2VTZW5zaXRpdmU6ZCx0b2tlblNlcGFyYXRvcjpwLGZpbmRBbGxNYXRjaGVzOnksbWluTWF0Y2hDaGFyTGVuZ3RoOmssaWQ6eCxrZXlzOk0saW5jbHVkZU1hdGNoZXM6eixpbmNsdWRlU2NvcmU6SyxzaG91bGRTb3J0OkwsZ2V0Rm46QSxzb3J0Rm46SSx2ZXJib3NlOkosdG9rZW5pemU6aixtYXRjaEFsbFRva2VuczpGfSx0aGlzLnNldENvbGxlY3Rpb24odCl9dmFyIHQsbixjO3JldHVybiB0PWUsKG49W3trZXk6XCJzZXRDb2xsZWN0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubGlzdD1lLGV9fSx7a2V5Olwic2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOntsaW1pdDohMX07dGhpcy5fbG9nKCctLS0tLS0tLS1cXG5TZWFyY2ggcGF0dGVybjogXCInLmNvbmNhdChlLCdcIicpKTt2YXIgbj10aGlzLl9wcmVwYXJlU2VhcmNoZXJzKGUpLHI9bi50b2tlblNlYXJjaGVycyxvPW4uZnVsbFNlYXJjaGVyLGk9dGhpcy5fc2VhcmNoKHIsbyksYT1pLndlaWdodHMscz1pLnJlc3VsdHM7cmV0dXJuIHRoaXMuX2NvbXB1dGVTY29yZShhLHMpLHRoaXMub3B0aW9ucy5zaG91bGRTb3J0JiZ0aGlzLl9zb3J0KHMpLHQubGltaXQmJlwibnVtYmVyXCI9PXR5cGVvZiB0LmxpbWl0JiYocz1zLnNsaWNlKDAsdC5saW1pdCkpLHRoaXMuX2Zvcm1hdChzKX19LHtrZXk6XCJfcHJlcGFyZVNlYXJjaGVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiXCIsdD1bXTtpZih0aGlzLm9wdGlvbnMudG9rZW5pemUpZm9yKHZhciBuPWUuc3BsaXQodGhpcy5vcHRpb25zLnRva2VuU2VwYXJhdG9yKSxyPTAsbz1uLmxlbmd0aDtyPG87cis9MSl0LnB1c2gobmV3IGkobltyXSx0aGlzLm9wdGlvbnMpKTtyZXR1cm57dG9rZW5TZWFyY2hlcnM6dCxmdWxsU2VhcmNoZXI6bmV3IGkoZSx0aGlzLm9wdGlvbnMpfX19LHtrZXk6XCJfc2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W10sdD1hcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxuPXRoaXMubGlzdCxyPXt9LG89W107aWYoXCJzdHJpbmdcIj09dHlwZW9mIG5bMF0pe2Zvcih2YXIgaT0wLGE9bi5sZW5ndGg7aTxhO2krPTEpdGhpcy5fYW5hbHl6ZSh7a2V5OlwiXCIsdmFsdWU6bltpXSxyZWNvcmQ6aSxpbmRleDppfSx7cmVzdWx0TWFwOnIscmVzdWx0czpvLHRva2VuU2VhcmNoZXJzOmUsZnVsbFNlYXJjaGVyOnR9KTtyZXR1cm57d2VpZ2h0czpudWxsLHJlc3VsdHM6b319Zm9yKHZhciBzPXt9LGM9MCxoPW4ubGVuZ3RoO2M8aDtjKz0xKWZvcih2YXIgbD1uW2NdLHU9MCxmPXRoaXMub3B0aW9ucy5rZXlzLmxlbmd0aDt1PGY7dSs9MSl7dmFyIGQ9dGhpcy5vcHRpb25zLmtleXNbdV07aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGQpe2lmKHNbZC5uYW1lXT17d2VpZ2h0OjEtZC53ZWlnaHR8fDF9LGQud2VpZ2h0PD0wfHxkLndlaWdodD4xKXRocm93IG5ldyBFcnJvcihcIktleSB3ZWlnaHQgaGFzIHRvIGJlID4gMCBhbmQgPD0gMVwiKTtkPWQubmFtZX1lbHNlIHNbZF09e3dlaWdodDoxfTt0aGlzLl9hbmFseXplKHtrZXk6ZCx2YWx1ZTp0aGlzLm9wdGlvbnMuZ2V0Rm4obCxkKSxyZWNvcmQ6bCxpbmRleDpjfSx7cmVzdWx0TWFwOnIscmVzdWx0czpvLHRva2VuU2VhcmNoZXJzOmUsZnVsbFNlYXJjaGVyOnR9KX1yZXR1cm57d2VpZ2h0czpzLHJlc3VsdHM6b319fSx7a2V5OlwiX2FuYWx5emVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPWUua2V5LHI9ZS5hcnJheUluZGV4LG89dm9pZCAwPT09cj8tMTpyLGk9ZS52YWx1ZSxhPWUucmVjb3JkLGM9ZS5pbmRleCxoPXQudG9rZW5TZWFyY2hlcnMsbD12b2lkIDA9PT1oP1tdOmgsdT10LmZ1bGxTZWFyY2hlcixmPXZvaWQgMD09PXU/W106dSxkPXQucmVzdWx0TWFwLHY9dm9pZCAwPT09ZD97fTpkLHA9dC5yZXN1bHRzLGc9dm9pZCAwPT09cD9bXTpwO2lmKG51bGwhPWkpe3ZhciB5PSExLG09LTEsaz0wO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpKXt0aGlzLl9sb2coXCJcXG5LZXk6IFwiLmNvbmNhdChcIlwiPT09bj9cIi1cIjpuKSk7dmFyIFM9Zi5zZWFyY2goaSk7aWYodGhpcy5fbG9nKCdGdWxsIHRleHQ6IFwiJy5jb25jYXQoaSwnXCIsIHNjb3JlOiAnKS5jb25jYXQoUy5zY29yZSkpLHRoaXMub3B0aW9ucy50b2tlbml6ZSl7Zm9yKHZhciB4PWkuc3BsaXQodGhpcy5vcHRpb25zLnRva2VuU2VwYXJhdG9yKSxiPVtdLE09MDtNPGwubGVuZ3RoO00rPTEpe3ZhciBfPWxbTV07dGhpcy5fbG9nKCdcXG5QYXR0ZXJuOiBcIicuY29uY2F0KF8ucGF0dGVybiwnXCInKSk7Zm9yKHZhciBMPSExLHc9MDt3PHgubGVuZ3RoO3crPTEpe3ZhciBBPXhbd10sQz1fLnNlYXJjaChBKSxJPXt9O0MuaXNNYXRjaD8oSVtBXT1DLnNjb3JlLHk9ITAsTD0hMCxiLnB1c2goQy5zY29yZSkpOihJW0FdPTEsdGhpcy5vcHRpb25zLm1hdGNoQWxsVG9rZW5zfHxiLnB1c2goMSkpLHRoaXMuX2xvZygnVG9rZW46IFwiJy5jb25jYXQoQSwnXCIsIHNjb3JlOiAnKS5jb25jYXQoSVtBXSkpfUwmJihrKz0xKX1tPWJbMF07Zm9yKHZhciBPPWIubGVuZ3RoLGo9MTtqPE87ais9MSltKz1iW2pdO20vPU8sdGhpcy5fbG9nKFwiVG9rZW4gc2NvcmUgYXZlcmFnZTpcIixtKX12YXIgUD1TLnNjb3JlO20+LTEmJihQPShQK20pLzIpLHRoaXMuX2xvZyhcIlNjb3JlIGF2ZXJhZ2U6XCIsUCk7dmFyIEY9IXRoaXMub3B0aW9ucy50b2tlbml6ZXx8IXRoaXMub3B0aW9ucy5tYXRjaEFsbFRva2Vuc3x8az49bC5sZW5ndGg7aWYodGhpcy5fbG9nKFwiXFxuQ2hlY2sgTWF0Y2hlczogXCIuY29uY2F0KEYpKSwoeXx8Uy5pc01hdGNoKSYmRil7dmFyIFQ9dltjXTtUP1Qub3V0cHV0LnB1c2goe2tleTpuLGFycmF5SW5kZXg6byx2YWx1ZTppLHNjb3JlOlAsbWF0Y2hlZEluZGljZXM6Uy5tYXRjaGVkSW5kaWNlc30pOih2W2NdPXtpdGVtOmEsb3V0cHV0Olt7a2V5Om4sYXJyYXlJbmRleDpvLHZhbHVlOmksc2NvcmU6UCxtYXRjaGVkSW5kaWNlczpTLm1hdGNoZWRJbmRpY2VzfV19LGcucHVzaCh2W2NdKSl9fWVsc2UgaWYocyhpKSlmb3IodmFyIHo9MCxFPWkubGVuZ3RoO3o8RTt6Kz0xKXRoaXMuX2FuYWx5emUoe2tleTpuLGFycmF5SW5kZXg6eix2YWx1ZTppW3pdLHJlY29yZDphLGluZGV4OmN9LHtyZXN1bHRNYXA6dixyZXN1bHRzOmcsdG9rZW5TZWFyY2hlcnM6bCxmdWxsU2VhcmNoZXI6Zn0pfX19LHtrZXk6XCJfY29tcHV0ZVNjb3JlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLl9sb2coXCJcXG5cXG5Db21wdXRpbmcgc2NvcmU6XFxuXCIpO2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyO24rPTEpe2Zvcih2YXIgbz10W25dLm91dHB1dCxpPW8ubGVuZ3RoLGE9MSxzPTEsYz0wO2M8aTtjKz0xKXt2YXIgaD1lP2Vbb1tjXS5rZXldLndlaWdodDoxLGw9KDE9PT1oP29bY10uc2NvcmU6b1tjXS5zY29yZXx8LjAwMSkqaDsxIT09aD9zPU1hdGgubWluKHMsbCk6KG9bY10ublNjb3JlPWwsYSo9bCl9dFtuXS5zY29yZT0xPT09cz9hOnMsdGhpcy5fbG9nKHRbbl0pfX19LHtrZXk6XCJfc29ydFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX2xvZyhcIlxcblxcblNvcnRpbmcuLi4uXCIpLGUuc29ydCh0aGlzLm9wdGlvbnMuc29ydEZuKX19LHtrZXk6XCJfZm9ybWF0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9W107aWYodGhpcy5vcHRpb25zLnZlcmJvc2Upe3ZhciBuPVtdO3RoaXMuX2xvZyhcIlxcblxcbk91dHB1dDpcXG5cXG5cIixKU09OLnN0cmluZ2lmeShlLGZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09PXIodCkmJm51bGwhPT10KXtpZigtMSE9PW4uaW5kZXhPZih0KSlyZXR1cm47bi5wdXNoKHQpfXJldHVybiB0fSkpLG49bnVsbH12YXIgbz1bXTt0aGlzLm9wdGlvbnMuaW5jbHVkZU1hdGNoZXMmJm8ucHVzaChmdW5jdGlvbihlLHQpe3ZhciBuPWUub3V0cHV0O3QubWF0Y2hlcz1bXTtmb3IodmFyIHI9MCxvPW4ubGVuZ3RoO3I8bztyKz0xKXt2YXIgaT1uW3JdO2lmKDAhPT1pLm1hdGNoZWRJbmRpY2VzLmxlbmd0aCl7dmFyIGE9e2luZGljZXM6aS5tYXRjaGVkSW5kaWNlcyx2YWx1ZTppLnZhbHVlfTtpLmtleSYmKGEua2V5PWkua2V5KSxpLmhhc093blByb3BlcnR5KFwiYXJyYXlJbmRleFwiKSYmaS5hcnJheUluZGV4Pi0xJiYoYS5hcnJheUluZGV4PWkuYXJyYXlJbmRleCksdC5tYXRjaGVzLnB1c2goYSl9fX0pLHRoaXMub3B0aW9ucy5pbmNsdWRlU2NvcmUmJm8ucHVzaChmdW5jdGlvbihlLHQpe3Quc2NvcmU9ZS5zY29yZX0pO2Zvcih2YXIgaT0wLGE9ZS5sZW5ndGg7aTxhO2krPTEpe3ZhciBzPWVbaV07aWYodGhpcy5vcHRpb25zLmlkJiYocy5pdGVtPXRoaXMub3B0aW9ucy5nZXRGbihzLml0ZW0sdGhpcy5vcHRpb25zLmlkKVswXSksby5sZW5ndGgpe2Zvcih2YXIgYz17aXRlbTpzLml0ZW19LGg9MCxsPW8ubGVuZ3RoO2g8bDtoKz0xKW9baF0ocyxjKTt0LnB1c2goYyl9ZWxzZSB0LnB1c2gocy5pdGVtKX1yZXR1cm4gdH19LHtrZXk6XCJfbG9nXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZTt0aGlzLm9wdGlvbnMudmVyYm9zZSYmKGU9Y29uc29sZSkubG9nLmFwcGx5KGUsYXJndW1lbnRzKX19XSkmJm8odC5wcm90b3R5cGUsbiksYyYmbyh0LGMpLGV9KCk7ZS5leHBvcnRzPWN9LGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiByKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX12YXIgbz1uKDMpLGk9big0KSxhPW4oNykscz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuKXt2YXIgcj1uLmxvY2F0aW9uLG89dm9pZCAwPT09cj8wOnIsaT1uLmRpc3RhbmNlLHM9dm9pZCAwPT09aT8xMDA6aSxjPW4udGhyZXNob2xkLGg9dm9pZCAwPT09Yz8uNjpjLGw9bi5tYXhQYXR0ZXJuTGVuZ3RoLHU9dm9pZCAwPT09bD8zMjpsLGY9bi5pc0Nhc2VTZW5zaXRpdmUsZD12b2lkIDAhPT1mJiZmLHY9bi50b2tlblNlcGFyYXRvcixwPXZvaWQgMD09PXY/LyArL2c6dixnPW4uZmluZEFsbE1hdGNoZXMseT12b2lkIDAhPT1nJiZnLG09bi5taW5NYXRjaENoYXJMZW5ndGgsaz12b2lkIDA9PT1tPzE6bTshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLHRoaXMub3B0aW9ucz17bG9jYXRpb246byxkaXN0YW5jZTpzLHRocmVzaG9sZDpoLG1heFBhdHRlcm5MZW5ndGg6dSxpc0Nhc2VTZW5zaXRpdmU6ZCx0b2tlblNlcGFyYXRvcjpwLGZpbmRBbGxNYXRjaGVzOnksbWluTWF0Y2hDaGFyTGVuZ3RoOmt9LHRoaXMucGF0dGVybj10aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlP3Q6dC50b0xvd2VyQ2FzZSgpLHRoaXMucGF0dGVybi5sZW5ndGg8PXUmJih0aGlzLnBhdHRlcm5BbHBoYWJldD1hKHRoaXMucGF0dGVybikpfXZhciB0LG4scztyZXR1cm4gdD1lLChuPVt7a2V5Olwic2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5vcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZXx8KGU9ZS50b0xvd2VyQ2FzZSgpKSx0aGlzLnBhdHRlcm49PT1lKXJldHVybntpc01hdGNoOiEwLHNjb3JlOjAsbWF0Y2hlZEluZGljZXM6W1swLGUubGVuZ3RoLTFdXX07dmFyIHQ9dGhpcy5vcHRpb25zLG49dC5tYXhQYXR0ZXJuTGVuZ3RoLHI9dC50b2tlblNlcGFyYXRvcjtpZih0aGlzLnBhdHRlcm4ubGVuZ3RoPm4pcmV0dXJuIG8oZSx0aGlzLnBhdHRlcm4scik7dmFyIGE9dGhpcy5vcHRpb25zLHM9YS5sb2NhdGlvbixjPWEuZGlzdGFuY2UsaD1hLnRocmVzaG9sZCxsPWEuZmluZEFsbE1hdGNoZXMsdT1hLm1pbk1hdGNoQ2hhckxlbmd0aDtyZXR1cm4gaShlLHRoaXMucGF0dGVybix0aGlzLnBhdHRlcm5BbHBoYWJldCx7bG9jYXRpb246cyxkaXN0YW5jZTpjLHRocmVzaG9sZDpoLGZpbmRBbGxNYXRjaGVzOmwsbWluTWF0Y2hDaGFyTGVuZ3RoOnV9KX19XSkmJnIodC5wcm90b3R5cGUsbikscyYmcih0LHMpLGV9KCk7ZS5leHBvcnRzPXN9LGZ1bmN0aW9uKGUsdCl7dmFyIG49L1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTovICsvZyxvPW5ldyBSZWdFeHAodC5yZXBsYWNlKG4sXCJcXFxcJCZcIikucmVwbGFjZShyLFwifFwiKSksaT1lLm1hdGNoKG8pLGE9ISFpLHM9W107aWYoYSlmb3IodmFyIGM9MCxoPWkubGVuZ3RoO2M8aDtjKz0xKXt2YXIgbD1pW2NdO3MucHVzaChbZS5pbmRleE9mKGwpLGwubGVuZ3RoLTFdKX1yZXR1cm57c2NvcmU6YT8uNToxLGlzTWF0Y2g6YSxtYXRjaGVkSW5kaWNlczpzfX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDUpLG89big2KTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LG4saSl7Zm9yKHZhciBhPWkubG9jYXRpb24scz12b2lkIDA9PT1hPzA6YSxjPWkuZGlzdGFuY2UsaD12b2lkIDA9PT1jPzEwMDpjLGw9aS50aHJlc2hvbGQsdT12b2lkIDA9PT1sPy42OmwsZj1pLmZpbmRBbGxNYXRjaGVzLGQ9dm9pZCAwIT09ZiYmZix2PWkubWluTWF0Y2hDaGFyTGVuZ3RoLHA9dm9pZCAwPT09dj8xOnYsZz1zLHk9ZS5sZW5ndGgsbT11LGs9ZS5pbmRleE9mKHQsZyksUz10Lmxlbmd0aCx4PVtdLGI9MDtiPHk7Yis9MSl4W2JdPTA7aWYoLTEhPT1rKXt2YXIgTT1yKHQse2Vycm9yczowLGN1cnJlbnRMb2NhdGlvbjprLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk7aWYobT1NYXRoLm1pbihNLG0pLC0xIT09KGs9ZS5sYXN0SW5kZXhPZih0LGcrUykpKXt2YXIgXz1yKHQse2Vycm9yczowLGN1cnJlbnRMb2NhdGlvbjprLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk7bT1NYXRoLm1pbihfLG0pfX1rPS0xO2Zvcih2YXIgTD1bXSx3PTEsQT1TK3ksQz0xPDxTLTEsST0wO0k8UztJKz0xKXtmb3IodmFyIE89MCxqPUE7TzxqOyl7cih0LHtlcnJvcnM6SSxjdXJyZW50TG9jYXRpb246ZytqLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk8PW0/Tz1qOkE9aixqPU1hdGguZmxvb3IoKEEtTykvMitPKX1BPWo7dmFyIFA9TWF0aC5tYXgoMSxnLWorMSksRj1kP3k6TWF0aC5taW4oZytqLHkpK1MsVD1BcnJheShGKzIpO1RbRisxXT0oMTw8SSktMTtmb3IodmFyIHo9Rjt6Pj1QO3otPTEpe3ZhciBFPXotMSxLPW5bZS5jaGFyQXQoRSldO2lmKEsmJih4W0VdPTEpLFRbel09KFRbeisxXTw8MXwxKSZLLDAhPT1JJiYoVFt6XXw9KExbeisxXXxMW3pdKTw8MXwxfExbeisxXSksVFt6XSZDJiYodz1yKHQse2Vycm9yczpJLGN1cnJlbnRMb2NhdGlvbjpFLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSkpPD1tKXtpZihtPXcsKGs9RSk8PWcpYnJlYWs7UD1NYXRoLm1heCgxLDIqZy1rKX19aWYocih0LHtlcnJvcnM6SSsxLGN1cnJlbnRMb2NhdGlvbjpnLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk+bSlicmVhaztMPVR9cmV0dXJue2lzTWF0Y2g6az49MCxzY29yZTowPT09dz8uMDAxOncsbWF0Y2hlZEluZGljZXM6byh4LHApfX19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIG49dC5lcnJvcnMscj12b2lkIDA9PT1uPzA6bixvPXQuY3VycmVudExvY2F0aW9uLGk9dm9pZCAwPT09bz8wOm8sYT10LmV4cGVjdGVkTG9jYXRpb24scz12b2lkIDA9PT1hPzA6YSxjPXQuZGlzdGFuY2UsaD12b2lkIDA9PT1jPzEwMDpjLGw9ci9lLmxlbmd0aCx1PU1hdGguYWJzKHMtaSk7cmV0dXJuIGg/bCt1L2g6dT8xOmx9fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W10sdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MSxuPVtdLHI9LTEsbz0tMSxpPTAsYT1lLmxlbmd0aDtpPGE7aSs9MSl7dmFyIHM9ZVtpXTtzJiYtMT09PXI/cj1pOnN8fC0xPT09cnx8KChvPWktMSktcisxPj10JiZuLnB1c2goW3Isb10pLHI9LTEpfXJldHVybiBlW2ktMV0mJmktcj49dCYmbi5wdXNoKFtyLGktMV0pLG59fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9e30sbj1lLmxlbmd0aCxyPTA7cjxuO3IrPTEpdFtlLmNoYXJBdChyKV09MDtmb3IodmFyIG89MDtvPG47bys9MSl0W2UuY2hhckF0KG8pXXw9MTw8bi1vLTE7cmV0dXJuIHR9fSxmdW5jdGlvbihlLHQsbil7dmFyIHI9bigwKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24gZSh0LG4sbyl7aWYobil7dmFyIGk9bi5pbmRleE9mKFwiLlwiKSxhPW4scz1udWxsOy0xIT09aSYmKGE9bi5zbGljZSgwLGkpLHM9bi5zbGljZShpKzEpKTt2YXIgYz10W2FdO2lmKG51bGwhPWMpaWYoc3x8XCJzdHJpbmdcIiE9dHlwZW9mIGMmJlwibnVtYmVyXCIhPXR5cGVvZiBjKWlmKHIoYykpZm9yKHZhciBoPTAsbD1jLmxlbmd0aDtoPGw7aCs9MSllKGNbaF0scyxvKTtlbHNlIHMmJmUoYyxzLG8pO2Vsc2Ugby5wdXNoKGMudG9TdHJpbmcoKSl9ZWxzZSBvLnB1c2godCk7cmV0dXJuIG99KGUsdCxbXSl9fV0pfSk7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsOyB9KTtcbmZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChTeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0U3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9mdXNlLmpzL2Rpc3QvZnVzZS5qc1xudmFyIGRpc3RfZnVzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgZnVzZV9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihkaXN0X2Z1c2UpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2RlZXBtZXJnZS9kaXN0L2Nqcy5qc1xudmFyIGNqcyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgY2pzX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNqcyk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanNcbnZhciBlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL3JlZHV4LmpzXG5cblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbn07XG5cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogXCJAQHJlZHV4L0lOSVRcIiArIHJhbmRvbVN0cmluZygpLFxuICBSRVBMQUNFOiBcIkBAcmVkdXgvUkVQTEFDRVwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICByZXR1cm4gXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIgKyByYW5kb21TdHJpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IG9iajtcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAvKipcbiAgICogVGhpcyBtYWtlcyBhIHNoYWxsb3cgY29weSBvZiBjdXJyZW50TGlzdGVuZXJzIHNvIHdlIGNhbiB1c2VcbiAgICogbmV4dExpc3RlbmVycyBhcyBhIHRlbXBvcmFyeSBsaXN0IHdoaWxlIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBUaGlzIHByZXZlbnRzIGFueSBidWdzIGFyb3VuZCBjb25zdW1lcnMgY2FsbGluZ1xuICAgKiBzdWJzY3JpYmUvdW5zdWJzY3JpYmUgaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLlxuICAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgJyArICdjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmUobGlzdGVuZXIpIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlKGxpc3RlbmVyKSBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7IC8vIFRoaXMgYWN0aW9uIGhhcyBhIHNpbWlsaWFyIGVmZmVjdCB0byBBY3Rpb25UeXBlcy5JTklULlxuICAgIC8vIEFueSByZWR1Y2VycyB0aGF0IGV4aXN0ZWQgaW4gYm90aCB0aGUgbmV3IGFuZCBvbGQgcm9vdFJlZHVjZXJcbiAgICAvLyB3aWxsIHJlY2VpdmUgdGhlIHByZXZpb3VzIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAgIC8vIHRoZSBuZXcgc3RhdGUgdHJlZSB3aXRoIGFueSByZWxldmFudCBkYXRhIGZyb20gdGhlIG9sZCBvbmUuXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRVBMQUNFXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbZXNbXCJhXCIgLyogZGVmYXVsdCAqL11dID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfSAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cblxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gIH0pO1xuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbZXNbXCJhXCIgLyogZGVmYXVsdCAqL11dID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbkRlc2NyaXB0aW9uID0gYWN0aW9uVHlwZSAmJiBcImFjdGlvbiBcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiB8fCAnYW4gYWN0aW9uJztcbiAgcmV0dXJuIFwiR2l2ZW4gXCIgKyBhY3Rpb25EZXNjcmlwdGlvbiArIFwiLCByZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIjtcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArIFwiXFxcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBcIiArIChcImtleXM6IFxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiXCIpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVQTEFDRSkgcmV0dXJuO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFwiVW5leHBlY3RlZCBcIiArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgXCIgXCIgKyAoXCJcXFwiXCIgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIiBmb3VuZCBpbiBcIiArIGFyZ3VtZW50TmFtZSArIFwiLiBcIikgKyBcIkV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIgKyAoXCJcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBcIiArIChcIkRvbid0IHRyeSB0byBoYW5kbGUgXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCIgb3Igb3RoZXIgYWN0aW9ucyBpbiBcXFwicmVkdXgvKlxcXCIgXCIpICsgXCJuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBcIiArIFwiY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgXCIgKyBcImluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBcIiArIFwiYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuXCIpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cblxuXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAoZmFsc2UpIHt9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTsgLy8gVGhpcyBpcyB1c2VkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCB3YXJuIGFib3V0IHRoZSBzYW1lXG4gIC8vIGtleXMgbXVsdGlwbGUgdGltZXMuXG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZTtcblxuICBpZiAoZmFsc2UpIHt9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlID0ge307XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKGZhbHNlKSB7IHZhciB3YXJuaW5nTWVzc2FnZTsgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cblxuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGFuIGFjdGlvbiBjcmVhdG9yIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBkaXNwYXRjaCB3cmFwcGVkIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCBcIiArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyBcIi4gXCIgKyBcIkRpZCB5b3Ugd3JpdGUgXFxcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIiBpbnN0ZWFkIG9mIFxcXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIj9cIik7XG4gIH1cblxuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkpO1xuICB9XG5cbiAgaWYgKGVudW1lcmFibGVPbmx5KSBrZXlzID0ga2V5cy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICB9KTtcbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gJyArICdPdGhlciBtaWRkbGV3YXJlIHdvdWxkIG5vdCBiZSBhcHBsaWVkIHRvIHRoaXMgZGlzcGF0Y2guJyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG4vKlxuICogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuICogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuICovXG5cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChmYWxzZSkge31cblxuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvcmVkdWNlcnMvaXRlbXMuanNcbnZhciBkZWZhdWx0U3RhdGUgPSBbXTtcbmZ1bmN0aW9uIGl0ZW1zX2l0ZW1zKHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZSA9IGRlZmF1bHRTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIC8vIEFkZCBvYmplY3QgdG8gaXRlbXMgYXJyYXlcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gW10uY29uY2F0KHN0YXRlLCBbe1xuICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgY2hvaWNlSWQ6IGFjdGlvbi5jaG9pY2VJZCxcbiAgICAgICAgICBncm91cElkOiBhY3Rpb24uZ3JvdXBJZCxcbiAgICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBhY3Rpb24ubGFiZWwsXG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIGhpZ2hsaWdodGVkOiBmYWxzZSxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBhY3Rpb24uY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogYWN0aW9uLnBsYWNlaG9sZGVyIHx8IGZhbHNlLFxuICAgICAgICAgIGtleUNvZGU6IG51bGxcbiAgICAgICAgfV0pO1xuICAgICAgICByZXR1cm4gbmV3U3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IG9iajtcbiAgICAgICAgICBpdGVtLmhpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnUkVNT1ZFX0lURU0nOlxuICAgICAge1xuICAgICAgICAvLyBTZXQgaXRlbSB0byBpbmFjdGl2ZVxuICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IG9iajtcblxuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnSElHSExJR0hUX0lURU0nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IG9iajtcblxuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgIGl0ZW0uaGlnaGxpZ2h0ZWQgPSBhY3Rpb24uaGlnaGxpZ2h0ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICB9XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL3JlZHVjZXJzL2dyb3Vwcy5qc1xudmFyIGdyb3Vwc19kZWZhdWx0U3RhdGUgPSBbXTtcbmZ1bmN0aW9uIGdyb3VwcyhzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSBncm91cHNfZGVmYXVsdFN0YXRlO1xuICB9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9HUk9VUCc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoc3RhdGUsIFt7XG4gICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aW9uLmFjdGl2ZSxcbiAgICAgICAgICBkaXNhYmxlZDogYWN0aW9uLmRpc2FibGVkXG4gICAgICAgIH1dKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ0NMRUFSX0NIT0lDRVMnOlxuICAgICAge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbn1cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvcmVkdWNlcnMvY2hvaWNlcy5qc1xudmFyIGNob2ljZXNfZGVmYXVsdFN0YXRlID0gW107XG5mdW5jdGlvbiBjaG9pY2VzX2Nob2ljZXMoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlID0gY2hvaWNlc19kZWZhdWx0U3RhdGU7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX0NIT0lDRSc6XG4gICAgICB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBBIGRpc2FibGVkIGNob2ljZSBhcHBlYXJzIGluIHRoZSBjaG9pY2UgZHJvcGRvd24gYnV0IGNhbm5vdCBiZSBzZWxlY3RlZFxuICAgICAgICAgICAgQSBzZWxlY3RlZCBjaG9pY2UgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHBhc3NlZCBpbnB1dCdzIHZhbHVlIChhZGRlZCBhcyBhbiBpdGVtKVxuICAgICAgICAgICAgQW4gYWN0aXZlIGNob2ljZSBhcHBlYXJzIHdpdGhpbiB0aGUgY2hvaWNlIGRyb3Bkb3duXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KHN0YXRlLCBbe1xuICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgZWxlbWVudElkOiBhY3Rpb24uZWxlbWVudElkLFxuICAgICAgICAgIGdyb3VwSWQ6IGFjdGlvbi5ncm91cElkLFxuICAgICAgICAgIHZhbHVlOiBhY3Rpb24udmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGFjdGlvbi5sYWJlbCB8fCBhY3Rpb24udmFsdWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGFjdGlvbi5kaXNhYmxlZCB8fCBmYWxzZSxcbiAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIHNjb3JlOiA5OTk5LFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGFjdGlvbi5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBhY3Rpb24ucGxhY2Vob2xkZXIgfHwgZmFsc2UsXG4gICAgICAgICAga2V5Q29kZTogbnVsbFxuICAgICAgICB9XSk7XG4gICAgICB9XG5cbiAgICBjYXNlICdBRERfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIC8vIElmIGFsbCBjaG9pY2VzIG5lZWQgdG8gYmUgYWN0aXZhdGVkXG4gICAgICAgIGlmIChhY3Rpb24uYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICB2YXIgY2hvaWNlID0gb2JqO1xuICAgICAgICAgICAgY2hvaWNlLmFjdGl2ZSA9IGFjdGlvbi5hY3RpdmU7XG4gICAgICAgICAgICByZXR1cm4gY2hvaWNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIFdoZW4gYW4gaXRlbSBpcyBhZGRlZCBhbmQgaXQgaGFzIGFuIGFzc29jaWF0ZWQgY2hvaWNlLFxuICAgICAgICAvLyB3ZSB3YW50IHRvIGRpc2FibGUgaXQgc28gaXQgY2FuJ3QgYmUgY2hvc2VuIGFnYWluXG5cblxuICAgICAgICBpZiAoYWN0aW9uLmNob2ljZUlkID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBjaG9pY2UgPSBvYmo7XG5cbiAgICAgICAgICAgIGlmIChjaG9pY2UuaWQgPT09IHBhcnNlSW50KGFjdGlvbi5jaG9pY2VJZCwgMTApKSB7XG4gICAgICAgICAgICAgIGNob2ljZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaG9pY2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICBjYXNlICdSRU1PVkVfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIC8vIFdoZW4gYW4gaXRlbSBpcyByZW1vdmVkIGFuZCBpdCBoYXMgYW4gYXNzb2NpYXRlZCBjaG9pY2UsXG4gICAgICAgIC8vIHdlIHdhbnQgdG8gcmUtZW5hYmxlIGl0IHNvIGl0IGNhbiBiZSBjaG9zZW4gYWdhaW5cbiAgICAgICAgaWYgKGFjdGlvbi5jaG9pY2VJZCA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICB2YXIgY2hvaWNlID0gb2JqO1xuXG4gICAgICAgICAgICBpZiAoY2hvaWNlLmlkID09PSBwYXJzZUludChhY3Rpb24uY2hvaWNlSWQsIDEwKSkge1xuICAgICAgICAgICAgICBjaG9pY2Uuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ0ZJTFRFUl9DSE9JQ0VTJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgdmFyIGNob2ljZSA9IG9iajsgLy8gU2V0IGFjdGl2ZSBzdGF0ZSBiYXNlZCBvbiB3aGV0aGVyIGNob2ljZSBpc1xuICAgICAgICAgIC8vIHdpdGhpbiBmaWx0ZXJlZCByZXN1bHRzXG5cbiAgICAgICAgICBjaG9pY2UuYWN0aXZlID0gYWN0aW9uLnJlc3VsdHMuc29tZShmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfcmVmLml0ZW0sXG4gICAgICAgICAgICAgICAgc2NvcmUgPSBfcmVmLnNjb3JlO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gY2hvaWNlLmlkKSB7XG4gICAgICAgICAgICAgIGNob2ljZS5zY29yZSA9IHNjb3JlO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjaG9pY2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnQUNUSVZBVEVfQ0hPSUNFUyc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBjaG9pY2UgPSBvYmo7XG4gICAgICAgICAgY2hvaWNlLmFjdGl2ZSA9IGFjdGlvbi5hY3RpdmU7XG4gICAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBjYXNlICdDTEVBUl9DSE9JQ0VTJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZXNfZGVmYXVsdFN0YXRlO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICB9XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL3JlZHVjZXJzL2dlbmVyYWwuanNcbnZhciBnZW5lcmFsX2RlZmF1bHRTdGF0ZSA9IHtcbiAgbG9hZGluZzogZmFsc2Vcbn07XG5cbnZhciBnZW5lcmFsID0gZnVuY3Rpb24gZ2VuZXJhbChzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSBnZW5lcmFsX2RlZmF1bHRTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfSVNfTE9BRElORyc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbG9hZGluZzogYWN0aW9uLmlzTG9hZGluZ1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICB9XG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciByZWR1Y2Vyc19nZW5lcmFsID0gKGdlbmVyYWwpO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9saWIvdXRpbHMuanNcbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xudmFyIGdldFJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufTtcbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG52YXIgZ2VuZXJhdGVDaGFycyA9IGZ1bmN0aW9uIGdlbmVyYXRlQ2hhcnMobGVuZ3RoKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHtcbiAgICBsZW5ndGg6IGxlbmd0aFxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFJhbmRvbU51bWJlcigwLCAzNikudG9TdHJpbmcoMzYpO1xuICB9KS5qb2luKCcnKTtcbn07XG4vKipcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cbnZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gZ2VuZXJhdGVJZChlbGVtZW50LCBwcmVmaXgpIHtcbiAgdmFyIGlkID0gZWxlbWVudC5pZCB8fCBlbGVtZW50Lm5hbWUgJiYgZWxlbWVudC5uYW1lICsgXCItXCIgKyBnZW5lcmF0ZUNoYXJzKDIpIHx8IGdlbmVyYXRlQ2hhcnMoNCk7XG4gIGlkID0gaWQucmVwbGFjZSgvKDp8XFwufFxcW3xcXF18LCkvZywgJycpO1xuICBpZCA9IHByZWZpeCArIFwiLVwiICsgaWQ7XG4gIHJldHVybiBpZDtcbn07XG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxudmFyIGdldFR5cGUgPSBmdW5jdGlvbiBnZXRUeXBlKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikuc2xpY2UoOCwgLTEpO1xufTtcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7YW55fSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbnZhciBpc1R5cGUgPSBmdW5jdGlvbiBpc1R5cGUodHlwZSwgb2JqKSB7XG4gIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgZ2V0VHlwZShvYmopID09PSB0eXBlO1xufTtcbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3dyYXBwZXI9e0hUTUxEaXZFbGVtZW50fV1cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuXG52YXIgdXRpbHNfd3JhcCA9IGZ1bmN0aW9uIHdyYXAoZWxlbWVudCwgd3JhcHBlcikge1xuICBpZiAod3JhcHBlciA9PT0gdm9pZCAwKSB7XG4gICAgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufTtcbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBzdGFydEVsXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7MSB8IC0xfSBkaXJlY3Rpb25cbiAqIEByZXR1cm5zIHtFbGVtZW50IHwgdW5kZWZpbmVkfVxuICovXG5cbnZhciBnZXRBZGphY2VudEVsID0gZnVuY3Rpb24gZ2V0QWRqYWNlbnRFbChzdGFydEVsLCBzZWxlY3RvciwgZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkge1xuICAgIGRpcmVjdGlvbiA9IDE7XG4gIH1cblxuICBpZiAoIShzdGFydEVsIGluc3RhbmNlb2YgRWxlbWVudCkgfHwgdHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICB2YXIgcHJvcCA9IChkaXJlY3Rpb24gPiAwID8gJ25leHQnIDogJ3ByZXZpb3VzJykgKyBcIkVsZW1lbnRTaWJsaW5nXCI7XG4gIHZhciBzaWJsaW5nID0gc3RhcnRFbFtwcm9wXTtcblxuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmIChzaWJsaW5nLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gc2libGluZztcbiAgICB9XG5cbiAgICBzaWJsaW5nID0gc2libGluZ1twcm9wXTtcbiAgfVxuXG4gIHJldHVybiBzaWJsaW5nO1xufTtcbi8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHstMSB8IDF9IGRpcmVjdGlvblxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxudmFyIGlzU2Nyb2xsZWRJbnRvVmlldyA9IGZ1bmN0aW9uIGlzU2Nyb2xsZWRJbnRvVmlldyhlbGVtZW50LCBwYXJlbnQsIGRpcmVjdGlvbikge1xuICBpZiAoZGlyZWN0aW9uID09PSB2b2lkIDApIHtcbiAgICBkaXJlY3Rpb24gPSAxO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzVmlzaWJsZTtcblxuICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgIC8vIEluIHZpZXcgZnJvbSBib3R0b21cbiAgICBpc1Zpc2libGUgPSBwYXJlbnQuc2Nyb2xsVG9wICsgcGFyZW50Lm9mZnNldEhlaWdodCA+PSBlbGVtZW50Lm9mZnNldFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIC8vIEluIHZpZXcgZnJvbSB0b3BcbiAgICBpc1Zpc2libGUgPSBlbGVtZW50Lm9mZnNldFRvcCA+PSBwYXJlbnQuc2Nyb2xsVG9wO1xuICB9XG5cbiAgcmV0dXJuIGlzVmlzaWJsZTtcbn07XG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybnMge2FueX1cbiAqL1xuXG52YXIgc2FuaXRpc2UgPSBmdW5jdGlvbiBzYW5pdGlzZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLz4vZywgJyZydDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcbi8qKlxuICogQHJldHVybnMgeygpID0+IChzdHI6IHN0cmluZykgPT4gRWxlbWVudH1cbiAqL1xuXG52YXIgc3RyVG9FbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIGNsZWFuZWRJbnB1dCA9IHN0ci50cmltKCk7XG4gICAgdG1wRWwuaW5uZXJIVE1MID0gY2xlYW5lZElucHV0O1xuICAgIHZhciBmaXJsZENoaWxkID0gdG1wRWwuY2hpbGRyZW5bMF07XG5cbiAgICB3aGlsZSAodG1wRWwuZmlyc3RDaGlsZCkge1xuICAgICAgdG1wRWwucmVtb3ZlQ2hpbGQodG1wRWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpcmxkQ2hpbGQ7XG4gIH07XG59KCk7XG4vKipcbiAqIEBwYXJhbSB7eyBsYWJlbD86IHN0cmluZywgdmFsdWU6IHN0cmluZyB9fSBhXG4gKiBAcGFyYW0ge3sgbGFiZWw/OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfX0gYlxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuXG52YXIgc29ydEJ5QWxwaGEgPSBmdW5jdGlvbiBzb3J0QnlBbHBoYShfcmVmLCBfcmVmMikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgX3JlZiRsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBsYWJlbCA9IF9yZWYkbGFiZWwgPT09IHZvaWQgMCA/IHZhbHVlIDogX3JlZiRsYWJlbDtcbiAgdmFyIHZhbHVlMiA9IF9yZWYyLnZhbHVlLFxuICAgICAgX3JlZjIkbGFiZWwgPSBfcmVmMi5sYWJlbCxcbiAgICAgIGxhYmVsMiA9IF9yZWYyJGxhYmVsID09PSB2b2lkIDAgPyB2YWx1ZTIgOiBfcmVmMiRsYWJlbDtcbiAgcmV0dXJuIGxhYmVsLmxvY2FsZUNvbXBhcmUobGFiZWwyLCBbXSwge1xuICAgIHNlbnNpdGl2aXR5OiAnYmFzZScsXG4gICAgaWdub3JlUHVuY3R1YXRpb246IHRydWUsXG4gICAgbnVtZXJpYzogdHJ1ZVxuICB9KTtcbn07XG4vKipcbiAqIEBwYXJhbSB7eyBzY29yZTogbnVtYmVyIH19IGFcbiAqIEBwYXJhbSB7eyBzY29yZTogbnVtYmVyIH19IGJcbiAqL1xuXG52YXIgc29ydEJ5U2NvcmUgPSBmdW5jdGlvbiBzb3J0QnlTY29yZShhLCBiKSB7XG4gIHJldHVybiBhLnNjb3JlIC0gYi5zY29yZTtcbn07XG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gY3VzdG9tQXJnc1xuICovXG5cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbGVtZW50LCB0eXBlLCBjdXN0b21BcmdzKSB7XG4gIGlmIChjdXN0b21BcmdzID09PSB2b2lkIDApIHtcbiAgICBjdXN0b21BcmdzID0gbnVsbDtcbiAgfVxuXG4gIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgZGV0YWlsOiBjdXN0b21BcmdzLFxuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleT1cInZhbHVlXCJdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG52YXIgZXhpc3RzSW5BcnJheSA9IGZ1bmN0aW9uIGV4aXN0c0luQXJyYXkoYXJyYXksIHZhbHVlLCBrZXkpIHtcbiAgaWYgKGtleSA9PT0gdm9pZCAwKSB7XG4gICAga2V5ID0gJ3ZhbHVlJztcbiAgfVxuXG4gIHJldHVybiBhcnJheS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBpdGVtW2tleV0gPT09IHZhbHVlLnRyaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVtrZXldID09PSB2YWx1ZTtcbiAgfSk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5cbnZhciBjbG9uZU9iamVjdCA9IGZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iaikge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn07XG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Yga2V5cyBwcmVzZW50IG9uIHRoZSBmaXJzdCBidXQgbWlzc2luZyBvbiB0aGUgc2Vjb25kIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBiXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cblxudmFyIGRpZmYgPSBmdW5jdGlvbiBkaWZmKGEsIGIpIHtcbiAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMoYSkuc29ydCgpO1xuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKS5zb3J0KCk7XG4gIHJldHVybiBhS2V5cy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gYktleXMuaW5kZXhPZihpKSA8IDA7XG4gIH0pO1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvcmVkdWNlcnMvaW5kZXguanNcblxuXG5cblxuXG5cbnZhciBhcHBSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgaXRlbXM6IGl0ZW1zX2l0ZW1zLFxuICBncm91cHM6IGdyb3VwcyxcbiAgY2hvaWNlczogY2hvaWNlc19jaG9pY2VzLFxuICBnZW5lcmFsOiByZWR1Y2Vyc19nZW5lcmFsXG59KTtcblxudmFyIHJlZHVjZXJzX3Jvb3RSZWR1Y2VyID0gZnVuY3Rpb24gcm9vdFJlZHVjZXIocGFzc2VkU3RhdGUsIGFjdGlvbikge1xuICB2YXIgc3RhdGUgPSBwYXNzZWRTdGF0ZTsgLy8gSWYgd2UgYXJlIGNsZWFyaW5nIGFsbCBpdGVtcywgZ3JvdXBzIGFuZCBvcHRpb25zIHdlIHJlYXNzaWduXG4gIC8vIHN0YXRlIGFuZCB0aGVuIHBhc3MgdGhhdCBzdGF0ZSB0byBvdXIgcHJvcGVyIHJlZHVjZXIuIFRoaXMgaXNuJ3RcbiAgLy8gbXV0YXRpbmcgb3VyIGFjdHVhbCBzdGF0ZVxuICAvLyBTZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM1NjQxOTkyXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ0xFQVJfQUxMJykge1xuICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnUkVTRVRfVE8nKSB7XG4gICAgcmV0dXJuIGNsb25lT2JqZWN0KGFjdGlvbi5zdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gYXBwUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHJlZHVjZXJzID0gKHJlZHVjZXJzX3Jvb3RSZWR1Y2VyKTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvc3RvcmUvc3RvcmUuanNcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNob2ljZX0gQ2hvaWNlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuR3JvdXB9IEdyb3VwXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuSXRlbX0gSXRlbVxuICovXG5cbnZhciBzdG9yZV9TdG9yZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0b3JlKCkge1xuICAgIHRoaXMuX3N0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkpO1xuICB9XG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgc3RvcmUgdG8gZnVuY3Rpb24gY2FsbCAod3JhcHBlZCBSZWR1eCBtZXRob2QpXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBvbkNoYW5nZSBGdW5jdGlvbiB0byB0cmlnZ2VyIHdoZW4gc3RhdGUgY2hhbmdlc1xuICAgKiBAcmV0dXJuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFN0b3JlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKG9uQ2hhbmdlKSB7XG4gICAgdGhpcy5fc3RvcmUuc3Vic2NyaWJlKG9uQ2hhbmdlKTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2ggZXZlbnQgdG8gc3RvcmUgKHdyYXBwZWQgUmVkdXggbWV0aG9kKVxuICAgKiBAcGFyYW0gIHt7IHR5cGU6IHN0cmluZywgW3g6IHN0cmluZ106IGFueSB9fSBhY3Rpb24gQWN0aW9uIHRvIHRyaWdnZXJcbiAgICogQHJldHVyblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBzdG9yZSBvYmplY3QgKHdyYXBwaW5nIFJlZHV4IG1ldGhvZClcbiAgICogQHJldHVybnMge29iamVjdH0gU3RhdGVcbiAgICovXG4gIDtcblxuICAvKipcbiAgICogR2V0IGxvYWRpbmcgc3RhdGUgZnJvbSBzdG9yZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gTG9hZGluZyBTdGF0ZVxuICAgKi9cbiAgX3Byb3RvLmlzTG9hZGluZyA9IGZ1bmN0aW9uIGlzTG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5nZW5lcmFsLmxvYWRpbmc7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgY2hvaWNlIGJ5IGl0J3MgSURcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAqIEByZXR1cm5zIHtDaG9pY2UgfCB1bmRlZmluZWR9IEZvdW5kIGNob2ljZVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXRDaG9pY2VCeUlkID0gZnVuY3Rpb24gZ2V0Q2hvaWNlQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNob2ljZXMuZmluZChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICByZXR1cm4gY2hvaWNlLmlkID09PSBwYXJzZUludChpZCwgMTApO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgZ3JvdXAgYnkgZ3JvdXAgaWRcbiAgICogQHBhcmFtICB7bnVtYmVyfSBpZCBHcm91cCBJRFxuICAgKiBAcmV0dXJucyB7R3JvdXAgfCB1bmRlZmluZWR9IEdyb3VwIGRhdGFcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0R3JvdXBCeUlkID0gZnVuY3Rpb24gZ2V0R3JvdXBCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXBzLmZpbmQoZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICByZXR1cm4gZ3JvdXAuaWQgPT09IGlkO1xuICAgIH0pO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdG9yZSwgW3tcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdG9yZS5nZXRTdGF0ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgaXRlbXMgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtJdGVtW119IEl0ZW0gb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXRlbXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aXZlIGl0ZW1zIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7SXRlbVtdfSBJdGVtIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFjdGl2ZUl0ZW1zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYWN0aXZlID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBoaWdobGlnaHRlZCBpdGVtcyBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0l0ZW1bXX0gSXRlbSBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoaWdobGlnaHRlZEFjdGl2ZUl0ZW1zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uYWN0aXZlICYmIGl0ZW0uaGlnaGxpZ2h0ZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGNob2ljZXMgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtDaG9pY2VbXX0gT3B0aW9uIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNob2ljZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmNob2ljZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhY3RpdmUgY2hvaWNlcyBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0Nob2ljZVtdfSBPcHRpb24gb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWN0aXZlQ2hvaWNlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICByZXR1cm4gY2hvaWNlLmFjdGl2ZSA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgc2VsZWN0YWJsZSBjaG9pY2VzIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7Q2hvaWNlW119IE9wdGlvbiBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3RhYmxlQ2hvaWNlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICByZXR1cm4gY2hvaWNlLmRpc2FibGVkICE9PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBjaG9pY2VzIHRoYXQgY2FuIGJlIHNlYXJjaGVkIChleGNsdWRpbmcgcGxhY2Vob2xkZXJzKVxuICAgICAqIEByZXR1cm5zIHtDaG9pY2VbXX0gT3B0aW9uIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlYXJjaGFibGVDaG9pY2VzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RhYmxlQ2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICByZXR1cm4gY2hvaWNlLnBsYWNlaG9sZGVyICE9PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBwbGFjZWhvbGRlciBjaG9pY2UgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtDaG9pY2UgfCB1bmRlZmluZWR9IEZvdW5kIHBsYWNlaG9sZGVyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwbGFjZWhvbGRlckNob2ljZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLmNob2ljZXMpLnJldmVyc2UoKS5maW5kKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZS5wbGFjZWhvbGRlciA9PT0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgZ3JvdXBzIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7R3JvdXBbXX0gR3JvdXAgb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ncm91cHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhY3RpdmUgZ3JvdXBzIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7R3JvdXBbXX0gR3JvdXAgb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWN0aXZlR3JvdXBzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgZ3JvdXBzID0gdGhpcy5ncm91cHMsXG4gICAgICAgICAgY2hvaWNlcyA9IHRoaXMuY2hvaWNlcztcbiAgICAgIHJldHVybiBncm91cHMuZmlsdGVyKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgICB2YXIgaXNBY3RpdmUgPSBncm91cC5hY3RpdmUgPT09IHRydWUgJiYgZ3JvdXAuZGlzYWJsZWQgPT09IGZhbHNlO1xuICAgICAgICB2YXIgaGFzQWN0aXZlT3B0aW9ucyA9IGNob2ljZXMuc29tZShmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgICAgcmV0dXJuIGNob2ljZS5hY3RpdmUgPT09IHRydWUgJiYgY2hvaWNlLmRpc2FibGVkID09PSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpc0FjdGl2ZSAmJiBoYXNBY3RpdmVPcHRpb25zO1xuICAgICAgfSwgW10pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdG9yZTtcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZHJvcGRvd24uanNcbmZ1bmN0aW9uIGRyb3Bkb3duX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBkcm9wZG93bl9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRyb3Bkb3duX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkcm9wZG93bl9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5wYXNzZWRFbGVtZW50fSBwYXNzZWRFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICovXG52YXIgRHJvcGRvd24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHt7XG4gICAqICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICogIHR5cGU6IHBhc3NlZEVsZW1lbnRbJ3R5cGUnXSxcbiAgICogIGNsYXNzTmFtZXM6IENsYXNzTmFtZXMsXG4gICAqIH19IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIERyb3Bkb3duKF9yZWYpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgY2xhc3NOYW1lcyA9IF9yZWYuY2xhc3NOYW1lcztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIEJvdHRvbSBwb3NpdGlvbiBvZiBkcm9wZG93biBpbiB2aWV3cG9ydCBjb29yZGluYXRlc1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBWZXJ0aWNhbCBwb3NpdGlvblxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93bi5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEZpbmQgZWxlbWVudCB0aGF0IG1hdGNoZXMgcGFzc2VkIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgX3Byb3RvLmdldENoaWxkID0gZnVuY3Rpb24gZ2V0Q2hpbGQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG4gIC8qKlxuICAgKiBTaG93IGRyb3Bkb3duIHRvIHVzZXIgYnkgYWRkaW5nIGFjdGl2ZSBzdGF0ZSBjbGFzc1xuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmFjdGl2ZVN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogSGlkZSBkcm9wZG93biBmcm9tIHVzZXJcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5hY3RpdmVTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBkcm9wZG93bl9jcmVhdGVDbGFzcyhEcm9wZG93biwgW3tcbiAgICBrZXk6IFwiZGlzdGFuY2VGcm9tVG9wV2luZG93XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanNcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLk9wdGlvbnN9IE9wdGlvbnNcbiAqL1xuXG4vKiogQHR5cGUge0NsYXNzTmFtZXN9ICovXG5cbnZhciBERUZBVUxUX0NMQVNTTkFNRVMgPSB7XG4gIGNvbnRhaW5lck91dGVyOiAnY2hvaWNlcycsXG4gIGNvbnRhaW5lcklubmVyOiAnY2hvaWNlc19faW5uZXInLFxuICBpbnB1dDogJ2Nob2ljZXNfX2lucHV0JyxcbiAgaW5wdXRDbG9uZWQ6ICdjaG9pY2VzX19pbnB1dC0tY2xvbmVkJyxcbiAgbGlzdDogJ2Nob2ljZXNfX2xpc3QnLFxuICBsaXN0SXRlbXM6ICdjaG9pY2VzX19saXN0LS1tdWx0aXBsZScsXG4gIGxpc3RTaW5nbGU6ICdjaG9pY2VzX19saXN0LS1zaW5nbGUnLFxuICBsaXN0RHJvcGRvd246ICdjaG9pY2VzX19saXN0LS1kcm9wZG93bicsXG4gIGl0ZW06ICdjaG9pY2VzX19pdGVtJyxcbiAgaXRlbVNlbGVjdGFibGU6ICdjaG9pY2VzX19pdGVtLS1zZWxlY3RhYmxlJyxcbiAgaXRlbURpc2FibGVkOiAnY2hvaWNlc19faXRlbS0tZGlzYWJsZWQnLFxuICBpdGVtQ2hvaWNlOiAnY2hvaWNlc19faXRlbS0tY2hvaWNlJyxcbiAgcGxhY2Vob2xkZXI6ICdjaG9pY2VzX19wbGFjZWhvbGRlcicsXG4gIGdyb3VwOiAnY2hvaWNlc19fZ3JvdXAnLFxuICBncm91cEhlYWRpbmc6ICdjaG9pY2VzX19oZWFkaW5nJyxcbiAgYnV0dG9uOiAnY2hvaWNlc19fYnV0dG9uJyxcbiAgYWN0aXZlU3RhdGU6ICdpcy1hY3RpdmUnLFxuICBmb2N1c1N0YXRlOiAnaXMtZm9jdXNlZCcsXG4gIG9wZW5TdGF0ZTogJ2lzLW9wZW4nLFxuICBkaXNhYmxlZFN0YXRlOiAnaXMtZGlzYWJsZWQnLFxuICBoaWdobGlnaHRlZFN0YXRlOiAnaXMtaGlnaGxpZ2h0ZWQnLFxuICBzZWxlY3RlZFN0YXRlOiAnaXMtc2VsZWN0ZWQnLFxuICBmbGlwcGVkU3RhdGU6ICdpcy1mbGlwcGVkJyxcbiAgbG9hZGluZ1N0YXRlOiAnaXMtbG9hZGluZycsXG4gIG5vUmVzdWx0czogJ2hhcy1uby1yZXN1bHRzJyxcbiAgbm9DaG9pY2VzOiAnaGFzLW5vLWNob2ljZXMnXG59O1xuLyoqIEB0eXBlIHtPcHRpb25zfSAqL1xuXG52YXIgREVGQVVMVF9DT05GSUcgPSB7XG4gIGl0ZW1zOiBbXSxcbiAgY2hvaWNlczogW10sXG4gIHNpbGVudDogZmFsc2UsXG4gIHJlbmRlckNob2ljZUxpbWl0OiAtMSxcbiAgbWF4SXRlbUNvdW50OiAtMSxcbiAgYWRkSXRlbXM6IHRydWUsXG4gIGFkZEl0ZW1GaWx0ZXI6IG51bGwsXG4gIHJlbW92ZUl0ZW1zOiB0cnVlLFxuICByZW1vdmVJdGVtQnV0dG9uOiBmYWxzZSxcbiAgZWRpdEl0ZW1zOiBmYWxzZSxcbiAgZHVwbGljYXRlSXRlbXNBbGxvd2VkOiB0cnVlLFxuICBkZWxpbWl0ZXI6ICcsJyxcbiAgcGFzdGU6IHRydWUsXG4gIHNlYXJjaEVuYWJsZWQ6IHRydWUsXG4gIHNlYXJjaENob2ljZXM6IHRydWUsXG4gIHNlYXJjaEZsb29yOiAxLFxuICBzZWFyY2hSZXN1bHRMaW1pdDogNCxcbiAgc2VhcmNoRmllbGRzOiBbJ2xhYmVsJywgJ3ZhbHVlJ10sXG4gIHBvc2l0aW9uOiAnYXV0bycsXG4gIHJlc2V0U2Nyb2xsUG9zaXRpb246IHRydWUsXG4gIHNob3VsZFNvcnQ6IHRydWUsXG4gIHNob3VsZFNvcnRJdGVtczogZmFsc2UsXG4gIHNvcnRlcjogc29ydEJ5QWxwaGEsXG4gIHBsYWNlaG9sZGVyOiB0cnVlLFxuICBwbGFjZWhvbGRlclZhbHVlOiBudWxsLFxuICBzZWFyY2hQbGFjZWhvbGRlclZhbHVlOiBudWxsLFxuICBwcmVwZW5kVmFsdWU6IG51bGwsXG4gIGFwcGVuZFZhbHVlOiBudWxsLFxuICByZW5kZXJTZWxlY3RlZENob2ljZXM6ICdhdXRvJyxcbiAgbG9hZGluZ1RleHQ6ICdMb2FkaW5nLi4uJyxcbiAgbm9SZXN1bHRzVGV4dDogJ05vIHJlc3VsdHMgZm91bmQnLFxuICBub0Nob2ljZXNUZXh0OiAnTm8gY2hvaWNlcyB0byBjaG9vc2UgZnJvbScsXG4gIGl0ZW1TZWxlY3RUZXh0OiAnUHJlc3MgdG8gc2VsZWN0JyxcbiAgdW5pcXVlSXRlbVRleHQ6ICdPbmx5IHVuaXF1ZSB2YWx1ZXMgY2FuIGJlIGFkZGVkJyxcbiAgY3VzdG9tQWRkSXRlbVRleHQ6ICdPbmx5IHZhbHVlcyBtYXRjaGluZyBzcGVjaWZpYyBjb25kaXRpb25zIGNhbiBiZSBhZGRlZCcsXG4gIGFkZEl0ZW1UZXh0OiBmdW5jdGlvbiBhZGRJdGVtVGV4dCh2YWx1ZSkge1xuICAgIHJldHVybiBcIlByZXNzIEVudGVyIHRvIGFkZCA8Yj5cXFwiXCIgKyBzYW5pdGlzZSh2YWx1ZSkgKyBcIlxcXCI8L2I+XCI7XG4gIH0sXG4gIG1heEl0ZW1UZXh0OiBmdW5jdGlvbiBtYXhJdGVtVGV4dChtYXhJdGVtQ291bnQpIHtcbiAgICByZXR1cm4gXCJPbmx5IFwiICsgbWF4SXRlbUNvdW50ICsgXCIgdmFsdWVzIGNhbiBiZSBhZGRlZFwiO1xuICB9LFxuICB2YWx1ZUNvbXBhcmVyOiBmdW5jdGlvbiB2YWx1ZUNvbXBhcmVyKHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuIHZhbHVlMSA9PT0gdmFsdWUyO1xuICB9LFxuICBmdXNlT3B0aW9uczoge1xuICAgIGluY2x1ZGVTY29yZTogdHJ1ZVxuICB9LFxuICBjYWxsYmFja09uSW5pdDogbnVsbCxcbiAgY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlczogbnVsbCxcbiAgY2xhc3NOYW1lczogREVGQVVMVF9DTEFTU05BTUVTXG59O1xudmFyIEVWRU5UUyA9IHtcbiAgc2hvd0Ryb3Bkb3duOiAnc2hvd0Ryb3Bkb3duJyxcbiAgaGlkZURyb3Bkb3duOiAnaGlkZURyb3Bkb3duJyxcbiAgY2hhbmdlOiAnY2hhbmdlJyxcbiAgY2hvaWNlOiAnY2hvaWNlJyxcbiAgc2VhcmNoOiAnc2VhcmNoJyxcbiAgYWRkSXRlbTogJ2FkZEl0ZW0nLFxuICByZW1vdmVJdGVtOiAncmVtb3ZlSXRlbScsXG4gIGhpZ2hsaWdodEl0ZW06ICdoaWdobGlnaHRJdGVtJyxcbiAgaGlnaGxpZ2h0Q2hvaWNlOiAnaGlnaGxpZ2h0Q2hvaWNlJ1xufTtcbnZhciBBQ1RJT05fVFlQRVMgPSB7XG4gIEFERF9DSE9JQ0U6ICdBRERfQ0hPSUNFJyxcbiAgRklMVEVSX0NIT0lDRVM6ICdGSUxURVJfQ0hPSUNFUycsXG4gIEFDVElWQVRFX0NIT0lDRVM6ICdBQ1RJVkFURV9DSE9JQ0VTJyxcbiAgQ0xFQVJfQ0hPSUNFUzogJ0NMRUFSX0NIT0lDRVMnLFxuICBBRERfR1JPVVA6ICdBRERfR1JPVVAnLFxuICBBRERfSVRFTTogJ0FERF9JVEVNJyxcbiAgUkVNT1ZFX0lURU06ICdSRU1PVkVfSVRFTScsXG4gIEhJR0hMSUdIVF9JVEVNOiAnSElHSExJR0hUX0lURU0nLFxuICBDTEVBUl9BTEw6ICdDTEVBUl9BTEwnXG59O1xudmFyIEtFWV9DT0RFUyA9IHtcbiAgQkFDS19LRVk6IDQ2LFxuICBERUxFVEVfS0VZOiA4LFxuICBFTlRFUl9LRVk6IDEzLFxuICBBX0tFWTogNjUsXG4gIEVTQ19LRVk6IDI3LFxuICBVUF9LRVk6IDM4LFxuICBET1dOX0tFWTogNDAsXG4gIFBBR0VfVVBfS0VZOiAzMyxcbiAgUEFHRV9ET1dOX0tFWTogMzRcbn07XG52YXIgVEVYVF9UWVBFID0gJ3RleHQnO1xudmFyIFNFTEVDVF9PTkVfVFlQRSA9ICdzZWxlY3Qtb25lJztcbnZhciBTRUxFQ1RfTVVMVElQTEVfVFlQRSA9ICdzZWxlY3QtbXVsdGlwbGUnO1xudmFyIFNDUk9MTElOR19TUEVFRCA9IDQ7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvY29udGFpbmVyLmpzXG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMucGFzc2VkRWxlbWVudH0gcGFzc2VkRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNsYXNzTmFtZXN9IENsYXNzTmFtZXNcbiAqL1xuXG52YXIgY29udGFpbmVyX0NvbnRhaW5lciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3tcbiAgICogIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgKiAgdHlwZTogcGFzc2VkRWxlbWVudFsndHlwZSddLFxuICAgKiAgY2xhc3NOYW1lczogQ2xhc3NOYW1lcyxcbiAgICogIHBvc2l0aW9uXG4gICAqIH19IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIENvbnRhaW5lcihfcmVmKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICAgIGNsYXNzTmFtZXMgPSBfcmVmLmNsYXNzTmFtZXMsXG4gICAgICAgIHBvc2l0aW9uID0gX3JlZi5wb3NpdGlvbjtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmlzRmxpcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkJsdXIgPSB0aGlzLl9vbkJsdXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDb250YWluZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMpO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1cik7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIGNvbnRhaW5lciBzaG91bGQgYmUgZmxpcHBlZCBiYXNlZCBvbiBwYXNzZWRcbiAgICogZHJvcGRvd24gcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGRyb3Bkb3duUG9zXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zaG91bGRGbGlwID0gZnVuY3Rpb24gc2hvdWxkRmxpcChkcm9wZG93blBvcykge1xuICAgIGlmICh0eXBlb2YgZHJvcGRvd25Qb3MgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBJZiBmbGlwIGlzIGVuYWJsZWQgYW5kIHRoZSBkcm9wZG93biBib3R0b20gcG9zaXRpb24gaXNcbiAgICAvLyBncmVhdGVyIHRoYW4gdGhlIHdpbmRvdyBoZWlnaHQgZmxpcCB0aGUgZHJvcGRvd24uXG5cblxuICAgIHZhciBzaG91bGRGbGlwID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2F1dG8nKSB7XG4gICAgICBzaG91bGRGbGlwID0gIXdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi1oZWlnaHQ6IFwiICsgKGRyb3Bkb3duUG9zICsgMSkgKyBcInB4KVwiKS5tYXRjaGVzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgIHNob3VsZEZsaXAgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzaG91bGRGbGlwO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aXZlRGVzY2VuZGFudElEXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldEFjdGl2ZURlc2NlbmRhbnQgPSBmdW5jdGlvbiBzZXRBY3RpdmVEZXNjZW5kYW50KGFjdGl2ZURlc2NlbmRhbnRJRCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGFjdGl2ZURlc2NlbmRhbnRJRCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUFjdGl2ZURlc2NlbmRhbnQgPSBmdW5jdGlvbiByZW1vdmVBY3RpdmVEZXNjZW5kYW50KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZHJvcGRvd25Qb3NcbiAgICovXG4gIDtcblxuICBfcHJvdG8ub3BlbiA9IGZ1bmN0aW9uIG9wZW4oZHJvcGRvd25Qb3MpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMub3BlblN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5zaG91bGRGbGlwKGRyb3Bkb3duUG9zKSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmZsaXBwZWRTdGF0ZSk7XG4gICAgICB0aGlzLmlzRmxpcHBlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5vcGVuU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB0aGlzLnJlbW92ZUFjdGl2ZURlc2NlbmRhbnQoKTtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlOyAvLyBBIGRyb3Bkb3duIGZsaXBzIGlmIGl0IGRvZXMgbm90IGhhdmUgc3BhY2Ugd2l0aGluIHRoZSBwYWdlXG5cbiAgICBpZiAodGhpcy5pc0ZsaXBwZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5mbGlwcGVkU3RhdGUpO1xuICAgICAgdGhpcy5pc0ZsaXBwZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZvY3VzID0gZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLmlzRm9jdXNzZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkRm9jdXNTdGF0ZSA9IGZ1bmN0aW9uIGFkZEZvY3VzU3RhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmZvY3VzU3RhdGUpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVGb2N1c1N0YXRlID0gZnVuY3Rpb24gcmVtb3ZlRm9jdXNTdGF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuZm9jdXNTdGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuZGlzYWJsZWRTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU0VMRUNUX09ORV9UWVBFKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5kaXNhYmxlZFN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IFNFTEVDVF9PTkVfVFlQRSkge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLndyYXAgPSBmdW5jdGlvbiB3cmFwKGVsZW1lbnQpIHtcbiAgICB1dGlsc193cmFwKGVsZW1lbnQsIHRoaXMuZWxlbWVudCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51bndyYXAgPSBmdW5jdGlvbiB1bndyYXAoZWxlbWVudCkge1xuICAgIC8vIE1vdmUgcGFzc2VkIGVsZW1lbnQgb3V0c2lkZSB0aGlzIGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcy5lbGVtZW50KTsgLy8gUmVtb3ZlIHRoaXMgZWxlbWVudFxuXG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfTtcblxuICBfcHJvdG8uYWRkTG9hZGluZ1N0YXRlID0gZnVuY3Rpb24gYWRkTG9hZGluZ1N0YXRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5sb2FkaW5nU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsICd0cnVlJyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVMb2FkaW5nU3RhdGUgPSBmdW5jdGlvbiByZW1vdmVMb2FkaW5nU3RhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmxvYWRpbmdTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8uX29uRm9jdXMgPSBmdW5jdGlvbiBfb25Gb2N1cygpIHtcbiAgICB0aGlzLmlzRm9jdXNzZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5fb25CbHVyID0gZnVuY3Rpb24gX29uQmx1cigpIHtcbiAgICB0aGlzLmlzRm9jdXNzZWQgPSBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gQ29udGFpbmVyO1xufSgpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9pbnB1dC5qc1xuZnVuY3Rpb24gaW5wdXRfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIGlucHV0X2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgaW5wdXRfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGlucHV0X2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5wYXNzZWRFbGVtZW50fSBwYXNzZWRFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICovXG5cbnZhciBpbnB1dF9JbnB1dCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3tcbiAgICogIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAqICB0eXBlOiBwYXNzZWRFbGVtZW50Wyd0eXBlJ10sXG4gICAqICBjbGFzc05hbWVzOiBDbGFzc05hbWVzLFxuICAgKiAgcHJldmVudFBhc3RlOiBib29sZWFuXG4gICAqIH19IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIElucHV0KF9yZWYpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgY2xhc3NOYW1lcyA9IF9yZWYuY2xhc3NOYW1lcyxcbiAgICAgICAgcHJldmVudFBhc3RlID0gX3JlZi5wcmV2ZW50UGFzdGU7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgdGhpcy5wcmV2ZW50UGFzdGUgPSBwcmV2ZW50UGFzdGU7XG4gICAgdGhpcy5pc0ZvY3Vzc2VkID0gdGhpcy5lbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGVsZW1lbnQuZGlzYWJsZWQ7XG4gICAgdGhpcy5fb25QYXN0ZSA9IHRoaXMuX29uUGFzdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbklucHV0ID0gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRm9jdXMgPSB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25CbHVyID0gdGhpcy5fb25CbHVyLmJpbmQodGhpcyk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGFjZWhvbGRlclxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBJbnB1dC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgdGhpcy5fb25QYXN0ZSk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fb25JbnB1dCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1ciwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX29uSW5wdXQsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLl9vblBhc3RlKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmZvY3VzID0gZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLmlzRm9jdXNzZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYmx1ciA9IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgaWYgKHRoaXMuaXNGb2N1c3NlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNldCB2YWx1ZSBvZiBpbnB1dCB0byBibGFua1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNldFdpZHRoXG4gICAqIEByZXR1cm5zIHt0aGlzfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKHNldFdpZHRoKSB7XG4gICAgaWYgKHNldFdpZHRoID09PSB2b2lkIDApIHtcbiAgICAgIHNldFdpZHRoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnZhbHVlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBpZiAoc2V0V2lkdGgpIHtcbiAgICAgIHRoaXMuc2V0V2lkdGgoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogU2V0IHRoZSBjb3JyZWN0IGlucHV0IHdpZHRoIGJhc2VkIG9uIHBsYWNlaG9sZGVyXG4gICAqIHZhbHVlIG9yIGlucHV0IHZhbHVlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldFdpZHRoID0gZnVuY3Rpb24gc2V0V2lkdGgoKSB7XG4gICAgLy8gUmVzaXplIGlucHV0IHRvIGNvbnRlbnRzIG9yIHBsYWNlaG9sZGVyXG4gICAgdmFyIF90aGlzJGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHN0eWxlID0gX3RoaXMkZWxlbWVudC5zdHlsZSxcbiAgICAgICAgdmFsdWUgPSBfdGhpcyRlbGVtZW50LnZhbHVlLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF90aGlzJGVsZW1lbnQucGxhY2Vob2xkZXI7XG4gICAgc3R5bGUubWluV2lkdGggPSBwbGFjZWhvbGRlci5sZW5ndGggKyAxICsgXCJjaFwiO1xuICAgIHN0eWxlLndpZHRoID0gdmFsdWUubGVuZ3RoICsgMSArIFwiY2hcIjtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGl2ZURlc2NlbmRhbnRJRFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRBY3RpdmVEZXNjZW5kYW50ID0gZnVuY3Rpb24gc2V0QWN0aXZlRGVzY2VuZGFudChhY3RpdmVEZXNjZW5kYW50SUQpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBhY3RpdmVEZXNjZW5kYW50SUQpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVBY3RpdmVEZXNjZW5kYW50ID0gZnVuY3Rpb24gcmVtb3ZlQWN0aXZlRGVzY2VuZGFudCgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgfTtcblxuICBfcHJvdG8uX29uSW5wdXQgPSBmdW5jdGlvbiBfb25JbnB1dCgpIHtcbiAgICBpZiAodGhpcy50eXBlICE9PSBTRUxFQ1RfT05FX1RZUEUpIHtcbiAgICAgIHRoaXMuc2V0V2lkdGgoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9vblBhc3RlID0gZnVuY3Rpb24gX29uUGFzdGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcmV2ZW50UGFzdGUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25Gb2N1cyA9IGZ1bmN0aW9uIF9vbkZvY3VzKCkge1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLl9vbkJsdXIgPSBmdW5jdGlvbiBfb25CbHVyKCkge1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IGZhbHNlO1xuICB9O1xuXG4gIGlucHV0X2NyZWF0ZUNsYXNzKElucHV0LCBbe1xuICAgIGtleTogXCJwbGFjZWhvbGRlclwiLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gc2FuaXRpc2UodGhpcy5lbGVtZW50LnZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXQ7XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2xpc3QuanNcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2hvaWNlfSBDaG9pY2VcbiAqL1xuXG52YXIgbGlzdF9MaXN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7eyBlbGVtZW50OiBIVE1MRWxlbWVudCB9fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBMaXN0KF9yZWYpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuc2Nyb2xsUG9zID0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTGlzdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50fSBub2RlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChub2RlKSB7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybnMge0VsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXRDaGlsZCA9IGZ1bmN0aW9uIGdldENoaWxkKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmhhc0NoaWxkcmVuID0gZnVuY3Rpb24gaGFzQ2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5oYXNDaGlsZE5vZGVzKCk7XG4gIH07XG5cbiAgX3Byb3RvLnNjcm9sbFRvVG9wID0gZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG4gICAgdGhpcy5lbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0gezEgfCAtMX0gZGlyZWN0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNjcm9sbFRvQ2hpbGRFbGVtZW50ID0gZnVuY3Rpb24gc2Nyb2xsVG9DaGlsZEVsZW1lbnQoZWxlbWVudCwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsaXN0SGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDsgLy8gU2Nyb2xsIHBvc2l0aW9uIG9mIGRyb3Bkb3duXG5cbiAgICB2YXIgbGlzdFNjcm9sbFBvc2l0aW9uID0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcCArIGxpc3RIZWlnaHQ7XG4gICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDsgLy8gRGlzdGFuY2UgZnJvbSBib3R0b20gb2YgZWxlbWVudCB0byB0b3Agb2YgcGFyZW50XG5cbiAgICB2YXIgZWxlbWVudFBvcyA9IGVsZW1lbnQub2Zmc2V0VG9wICsgZWxlbWVudEhlaWdodDsgLy8gRGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBlbGVtZW50IGFuZCBzY3JvbGwgcG9zaXRpb25cblxuICAgIHZhciBkZXN0aW5hdGlvbiA9IGRpcmVjdGlvbiA+IDAgPyB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudFBvcyAtIGxpc3RTY3JvbGxQb3NpdGlvbiA6IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5fYW5pbWF0ZVNjcm9sbChkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc1xuICAgKiBAcGFyYW0ge251bWJlcn0gc3RyZW5ndGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlc3RpbmF0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9zY3JvbGxEb3duID0gZnVuY3Rpb24gX3Njcm9sbERvd24oc2Nyb2xsUG9zLCBzdHJlbmd0aCwgZGVzdGluYXRpb24pIHtcbiAgICB2YXIgZWFzaW5nID0gKGRlc3RpbmF0aW9uIC0gc2Nyb2xsUG9zKSAvIHN0cmVuZ3RoO1xuICAgIHZhciBkaXN0YW5jZSA9IGVhc2luZyA+IDEgPyBlYXNpbmcgOiAxO1xuICAgIHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxQb3MgKyBkaXN0YW5jZTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc1xuICAgKiBAcGFyYW0ge251bWJlcn0gc3RyZW5ndGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlc3RpbmF0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9zY3JvbGxVcCA9IGZ1bmN0aW9uIF9zY3JvbGxVcChzY3JvbGxQb3MsIHN0cmVuZ3RoLCBkZXN0aW5hdGlvbikge1xuICAgIHZhciBlYXNpbmcgPSAoc2Nyb2xsUG9zIC0gZGVzdGluYXRpb24pIC8gc3RyZW5ndGg7XG4gICAgdmFyIGRpc3RhbmNlID0gZWFzaW5nID4gMSA/IGVhc2luZyA6IDE7XG4gICAgdGhpcy5lbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFBvcyAtIGRpc3RhbmNlO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0geyp9IGRlc3RpbmF0aW9uXG4gICAqIEBwYXJhbSB7Kn0gZGlyZWN0aW9uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9hbmltYXRlU2Nyb2xsID0gZnVuY3Rpb24gX2FuaW1hdGVTY3JvbGwoZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHN0cmVuZ3RoID0gU0NST0xMSU5HX1NQRUVEO1xuICAgIHZhciBjaG9pY2VMaXN0U2Nyb2xsVG9wID0gdGhpcy5lbGVtZW50LnNjcm9sbFRvcDtcbiAgICB2YXIgY29udGludWVBbmltYXRpb24gPSBmYWxzZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgICB0aGlzLl9zY3JvbGxEb3duKGNob2ljZUxpc3RTY3JvbGxUb3AsIHN0cmVuZ3RoLCBkZXN0aW5hdGlvbik7XG5cbiAgICAgIGlmIChjaG9pY2VMaXN0U2Nyb2xsVG9wIDwgZGVzdGluYXRpb24pIHtcbiAgICAgICAgY29udGludWVBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zY3JvbGxVcChjaG9pY2VMaXN0U2Nyb2xsVG9wLCBzdHJlbmd0aCwgZGVzdGluYXRpb24pO1xuXG4gICAgICBpZiAoY2hvaWNlTGlzdFNjcm9sbFRvcCA+IGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIGNvbnRpbnVlQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGludWVBbmltYXRpb24pIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5fYW5pbWF0ZVNjcm9sbChkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gTGlzdDtcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvd3JhcHBlZC1lbGVtZW50LmpzXG5mdW5jdGlvbiB3cmFwcGVkX2VsZW1lbnRfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIHdyYXBwZWRfZWxlbWVudF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIHdyYXBwZWRfZWxlbWVudF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgd3JhcHBlZF9lbGVtZW50X2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMucGFzc2VkRWxlbWVudH0gcGFzc2VkRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNsYXNzTmFtZXN9IENsYXNzTmFtZXNcbiAqL1xuXG52YXIgd3JhcHBlZF9lbGVtZW50X1dyYXBwZWRFbGVtZW50ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50LFxuICAgKiAgY2xhc3NOYW1lczogQ2xhc3NOYW1lcyxcbiAgICogfX0gYXJnc1xuICAgKi9cbiAgZnVuY3Rpb24gV3JhcHBlZEVsZW1lbnQoX3JlZikge1xuICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgICBjbGFzc05hbWVzID0gX3JlZi5jbGFzc05hbWVzO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblxuICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSAmJiAhKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgZWxlbWVudCBwYXNzZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBXcmFwcGVkRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbmNlYWwgPSBmdW5jdGlvbiBjb25jZWFsKCkge1xuICAgIC8vIEhpZGUgcGFzc2VkIGlucHV0XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmlucHV0KTtcbiAgICB0aGlzLmVsZW1lbnQuaGlkZGVuID0gdHJ1ZTsgLy8gUmVtb3ZlIGVsZW1lbnQgZnJvbSB0YWIgaW5kZXhcblxuICAgIHRoaXMuZWxlbWVudC50YWJJbmRleCA9IC0xOyAvLyBCYWNrdXAgb3JpZ2luYWwgc3R5bGVzIGlmIGFueVxuXG4gICAgdmFyIG9yaWdTdHlsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICBpZiAob3JpZ1N0eWxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNob2ljZS1vcmlnLXN0eWxlJywgb3JpZ1N0eWxlKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNob2ljZScsICdhY3RpdmUnKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZWFsID0gZnVuY3Rpb24gcmV2ZWFsKCkge1xuICAgIC8vIFJlaW5zdGF0ZSBwYXNzZWQgZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5pbnB1dCk7XG4gICAgdGhpcy5lbGVtZW50LmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7IC8vIFJlY292ZXIgb3JpZ2luYWwgc3R5bGVzIGlmIGFueVxuXG4gICAgdmFyIG9yaWdTdHlsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hvaWNlLW9yaWctc3R5bGUnKTtcblxuICAgIGlmIChvcmlnU3R5bGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY2hvaWNlLW9yaWctc3R5bGUnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ1N0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWNob2ljZScpOyAvLyBSZS1hc3NpZ24gdmFsdWVzIC0gdGhpcyBpcyB3ZWlyZCwgSSBrbm93XG4gICAgLy8gQHRvZG8gRmlndXJlIG91dCB3aHkgd2UgbmVlZCB0byBkbyB0aGlzXG5cbiAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1hc3NpZ25cbiAgfTtcblxuICBfcHJvdG8uZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmRpc2FibGUgPSBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8udHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24gdHJpZ2dlckV2ZW50KGV2ZW50VHlwZSwgZGF0YSkge1xuICAgIGRpc3BhdGNoRXZlbnQodGhpcy5lbGVtZW50LCBldmVudFR5cGUsIGRhdGEpO1xuICB9O1xuXG4gIHdyYXBwZWRfZWxlbWVudF9jcmVhdGVDbGFzcyhXcmFwcGVkRWxlbWVudCwgW3tcbiAgICBrZXk6IFwiaXNBY3RpdmVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZGF0YXNldC5jaG9pY2UgPT09ICdhY3RpdmUnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZGlyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAvLyB5b3UgbXVzdCBkZWZpbmUgc2V0dGVyIGhlcmUgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgcmVhZG9ubHkgcHJvcGVydHlcbiAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXcmFwcGVkRWxlbWVudDtcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvd3JhcHBlZC1pbnB1dC5qc1xuZnVuY3Rpb24gd3JhcHBlZF9pbnB1dF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gd3JhcHBlZF9pbnB1dF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIHdyYXBwZWRfaW5wdXRfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIHdyYXBwZWRfaW5wdXRfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW19IEl0ZW1cbiAqL1xuXG52YXIgV3JhcHBlZElucHV0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfV3JhcHBlZEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoV3JhcHBlZElucHV0LCBfV3JhcHBlZEVsZW1lbnQpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3tcbiAgICogIGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAqICBjbGFzc05hbWVzOiBDbGFzc05hbWVzLFxuICAgKiAgZGVsaW1pdGVyOiBzdHJpbmdcbiAgICogfX0gYXJnc1xuICAgKi9cbiAgZnVuY3Rpb24gV3JhcHBlZElucHV0KF9yZWYpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgY2xhc3NOYW1lcyA9IF9yZWYuY2xhc3NOYW1lcyxcbiAgICAgICAgZGVsaW1pdGVyID0gX3JlZi5kZWxpbWl0ZXI7XG4gICAgX3RoaXMgPSBfV3JhcHBlZEVsZW1lbnQuY2FsbCh0aGlzLCB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgY2xhc3NOYW1lczogY2xhc3NOYW1lc1xuICAgIH0pIHx8IHRoaXM7XG4gICAgX3RoaXMuZGVsaW1pdGVyID0gZGVsaW1pdGVyO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG5cblxuICB3cmFwcGVkX2lucHV0X2NyZWF0ZUNsYXNzKFdyYXBwZWRJbnB1dCwgW3tcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SXRlbVtdfSBpdGVtc1xuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChpdGVtcykge1xuICAgICAgdmFyIGl0ZW1WYWx1ZXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHZhciBqb2luZWRWYWx1ZXMgPSBpdGVtVmFsdWVzLmpvaW4odGhpcy5kZWxpbWl0ZXIpO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBqb2luZWRWYWx1ZXMpO1xuICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gam9pbmVkVmFsdWVzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXcmFwcGVkSW5wdXQ7XG59KHdyYXBwZWRfZWxlbWVudF9XcmFwcGVkRWxlbWVudCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3dyYXBwZWQtc2VsZWN0LmpzXG5mdW5jdGlvbiB3cmFwcGVkX3NlbGVjdF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gd3JhcHBlZF9zZWxlY3RfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSB3cmFwcGVkX3NlbGVjdF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgd3JhcHBlZF9zZWxlY3RfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gd3JhcHBlZF9zZWxlY3RfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DbGFzc05hbWVzfSBDbGFzc05hbWVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuSXRlbX0gSXRlbVxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNob2ljZX0gQ2hvaWNlXG4gKi9cblxudmFyIFdyYXBwZWRTZWxlY3QgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9XcmFwcGVkRWxlbWVudCkge1xuICB3cmFwcGVkX3NlbGVjdF9pbmhlcml0c0xvb3NlKFdyYXBwZWRTZWxlY3QsIF9XcmFwcGVkRWxlbWVudCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgZWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQsXG4gICAqICBjbGFzc05hbWVzOiBDbGFzc05hbWVzLFxuICAgKiAgZGVsaW1pdGVyOiBzdHJpbmdcbiAgICogIHRlbXBsYXRlOiBmdW5jdGlvblxuICAgKiB9fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBXcmFwcGVkU2VsZWN0KF9yZWYpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgY2xhc3NOYW1lcyA9IF9yZWYuY2xhc3NOYW1lcyxcbiAgICAgICAgdGVtcGxhdGUgPSBfcmVmLnRlbXBsYXRlO1xuICAgIF90aGlzID0gX1dyYXBwZWRFbGVtZW50LmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNcbiAgICB9KSB8fCB0aGlzO1xuICAgIF90aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFdyYXBwZWRTZWxlY3QucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50XG4gICAqL1xuICBfcHJvdG8uYXBwZW5kRG9jRnJhZ21lbnQgPSBmdW5jdGlvbiBhcHBlbmREb2NGcmFnbWVudChmcmFnbWVudCkge1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICB9O1xuXG4gIHdyYXBwZWRfc2VsZWN0X2NyZWF0ZUNsYXNzKFdyYXBwZWRTZWxlY3QsIFt7XG4gICAga2V5OiBcInBsYWNlaG9sZGVyT3B0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIlwiXScpIHx8IC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgbGF5ZXIgZm9yIHRoZSBub24tc3RhbmRhcmQgcGxhY2Vob2xkZXIgYXR0cmlidXRlIHN1cHBvcnRlZCBpbiBvbGRlciB2ZXJzaW9ucy5cbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bcGxhY2Vob2xkZXJdJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtFbGVtZW50W119XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvcHRpb25Hcm91cHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnT1BUR1JPVVAnKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtJdGVtW10gfCBDaG9pY2VbXX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9wdGlvbnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5vcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtJdGVtW10gfCBDaG9pY2VbXX0gb3B0aW9uc1xuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICB2YXIgYWRkT3B0aW9uVG9GcmFnbWVudCA9IGZ1bmN0aW9uIGFkZE9wdGlvblRvRnJhZ21lbnQoZGF0YSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBzdGFuZGFyZCBzZWxlY3Qgb3B0aW9uXG4gICAgICAgIHZhciBvcHRpb24gPSBfdGhpczIudGVtcGxhdGUoZGF0YSk7IC8vIEFwcGVuZCBpdCB0byBmcmFnbWVudFxuXG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH07IC8vIEFkZCBlYWNoIGxpc3QgaXRlbSB0byBsaXN0XG5cblxuICAgICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25EYXRhKSB7XG4gICAgICAgIHJldHVybiBhZGRPcHRpb25Ub0ZyYWdtZW50KG9wdGlvbkRhdGEpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFwcGVuZERvY0ZyYWdtZW50KGZyYWdtZW50KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3JhcHBlZFNlbGVjdDtcbn0od3JhcHBlZF9lbGVtZW50X1dyYXBwZWRFbGVtZW50KTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvaW5kZXguanNcblxuXG5cblxuXG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy90ZW1wbGF0ZXMuanNcbi8qKlxuICogSGVscGVycyB0byBjcmVhdGUgSFRNTCBlbGVtZW50cyB1c2VkIGJ5IENob2ljZXNcbiAqIENhbiBiZSBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBgY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlc2Agb3B0aW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuVGVtcGxhdGVzfSBUZW1wbGF0ZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DbGFzc05hbWVzfSBDbGFzc05hbWVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuT3B0aW9uc30gT3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW19IEl0ZW1cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DaG9pY2V9IENob2ljZVxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkdyb3VwfSBHcm91cFxuICovXG52YXIgVEVNUExBVEVTID1cbi8qKiBAdHlwZSB7VGVtcGxhdGVzfSAqL1xue1xuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7XCJsdHJcIiB8IFwicnRsXCIgfCBcImF1dG9cIn0gZGlyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZWxlY3RFbGVtZW50XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZWxlY3RPbmVFbGVtZW50XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VhcmNoRW5hYmxlZFxuICAgKiBAcGFyYW0ge1wic2VsZWN0LW9uZVwiIHwgXCJzZWxlY3QtbXVsdGlwbGVcIiB8IFwidGV4dFwifSBwYXNzZWRFbGVtZW50VHlwZVxuICAgKi9cbiAgY29udGFpbmVyT3V0ZXI6IGZ1bmN0aW9uIGNvbnRhaW5lck91dGVyKF9yZWYsIGRpciwgaXNTZWxlY3RFbGVtZW50LCBpc1NlbGVjdE9uZUVsZW1lbnQsIHNlYXJjaEVuYWJsZWQsIHBhc3NlZEVsZW1lbnRUeXBlKSB7XG4gICAgdmFyIF9jb250YWluZXJPdXRlciA9IF9yZWYuY29udGFpbmVyT3V0ZXI7XG4gICAgdmFyIGRpdiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogX2NvbnRhaW5lck91dGVyXG4gICAgfSk7XG4gICAgZGl2LmRhdGFzZXQudHlwZSA9IHBhc3NlZEVsZW1lbnRUeXBlO1xuXG4gICAgaWYgKGRpcikge1xuICAgICAgZGl2LmRpciA9IGRpcjtcbiAgICB9XG5cbiAgICBpZiAoaXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICBkaXYudGFiSW5kZXggPSAwO1xuICAgIH1cblxuICAgIGlmIChpc1NlbGVjdEVsZW1lbnQpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBzZWFyY2hFbmFibGVkID8gJ2NvbWJvYm94JyA6ICdsaXN0Ym94Jyk7XG5cbiAgICAgIGlmIChzZWFyY2hFbmFibGVkKSB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXV0b2NvbXBsZXRlJywgJ2xpc3QnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgJ3RydWUnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqL1xuICBjb250YWluZXJJbm5lcjogZnVuY3Rpb24gY29udGFpbmVySW5uZXIoX3JlZjIpIHtcbiAgICB2YXIgX2NvbnRhaW5lcklubmVyID0gX3JlZjIuY29udGFpbmVySW5uZXI7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogX2NvbnRhaW5lcklubmVyXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2VsZWN0T25lRWxlbWVudFxuICAgKi9cbiAgaXRlbUxpc3Q6IGZ1bmN0aW9uIGl0ZW1MaXN0KF9yZWYzLCBpc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICB2YXIgbGlzdCA9IF9yZWYzLmxpc3QsXG4gICAgICAgIGxpc3RTaW5nbGUgPSBfcmVmMy5saXN0U2luZ2xlLFxuICAgICAgICBsaXN0SXRlbXMgPSBfcmVmMy5saXN0SXRlbXM7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogbGlzdCArIFwiIFwiICsgKGlzU2VsZWN0T25lRWxlbWVudCA/IGxpc3RTaW5nbGUgOiBsaXN0SXRlbXMpXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBmdW5jdGlvbiBwbGFjZWhvbGRlcihfcmVmNCwgdmFsdWUpIHtcbiAgICB2YXIgX3BsYWNlaG9sZGVyID0gX3JlZjQucGxhY2Vob2xkZXI7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogX3BsYWNlaG9sZGVyLFxuICAgICAgaW5uZXJIVE1MOiB2YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVtb3ZlSXRlbUJ1dHRvblxuICAgKi9cbiAgaXRlbTogZnVuY3Rpb24gaXRlbShfcmVmNSwgX3JlZjYsIHJlbW92ZUl0ZW1CdXR0b24pIHtcbiAgICB2YXIgX2l0ZW0gPSBfcmVmNS5pdGVtLFxuICAgICAgICBidXR0b24gPSBfcmVmNS5idXR0b24sXG4gICAgICAgIGhpZ2hsaWdodGVkU3RhdGUgPSBfcmVmNS5oaWdobGlnaHRlZFN0YXRlLFxuICAgICAgICBpdGVtU2VsZWN0YWJsZSA9IF9yZWY1Lml0ZW1TZWxlY3RhYmxlLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF9yZWY1LnBsYWNlaG9sZGVyO1xuICAgIHZhciBpZCA9IF9yZWY2LmlkLFxuICAgICAgICB2YWx1ZSA9IF9yZWY2LnZhbHVlLFxuICAgICAgICBsYWJlbCA9IF9yZWY2LmxhYmVsLFxuICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZjYuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgYWN0aXZlID0gX3JlZjYuYWN0aXZlLFxuICAgICAgICBkaXNhYmxlZCA9IF9yZWY2LmRpc2FibGVkLFxuICAgICAgICBoaWdobGlnaHRlZCA9IF9yZWY2LmhpZ2hsaWdodGVkLFxuICAgICAgICBpc1BsYWNlaG9sZGVyID0gX3JlZjYucGxhY2Vob2xkZXI7XG4gICAgdmFyIGRpdiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogX2l0ZW0sXG4gICAgICBpbm5lckhUTUw6IGxhYmVsXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihkaXYuZGF0YXNldCwge1xuICAgICAgaXRlbTogJycsXG4gICAgICBpZDogaWQsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzXG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIGlmIChpc1BsYWNlaG9sZGVyKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChwbGFjZWhvbGRlcik7XG4gICAgfVxuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoaGlnaGxpZ2h0ZWQgPyBoaWdobGlnaHRlZFN0YXRlIDogaXRlbVNlbGVjdGFibGUpO1xuXG4gICAgaWYgKHJlbW92ZUl0ZW1CdXR0b24pIHtcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShpdGVtU2VsZWN0YWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGRpdi5kYXRhc2V0LmRlbGV0YWJsZSA9ICcnO1xuICAgICAgLyoqIEB0b2RvIFRoaXMgTVVTVCBiZSBsb2NhbGl6YWJsZSwgbm90IGhhcmRjb2RlZCEgKi9cblxuICAgICAgdmFyIFJFTU9WRV9JVEVNX1RFWFQgPSAnUmVtb3ZlIGl0ZW0nO1xuICAgICAgdmFyIHJlbW92ZUJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksIHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIGNsYXNzTmFtZTogYnV0dG9uLFxuICAgICAgICBpbm5lckhUTUw6IFJFTU9WRV9JVEVNX1RFWFRcbiAgICAgIH0pO1xuICAgICAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIFJFTU9WRV9JVEVNX1RFWFQgKyBcIjogJ1wiICsgdmFsdWUgKyBcIidcIik7XG4gICAgICByZW1vdmVCdXR0b24uZGF0YXNldC5idXR0b24gPSAnJztcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICAgIH1cblxuICAgIHJldHVybiBkaXY7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2VsZWN0T25lRWxlbWVudFxuICAgKi9cbiAgY2hvaWNlTGlzdDogZnVuY3Rpb24gY2hvaWNlTGlzdChfcmVmNywgaXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgdmFyIGxpc3QgPSBfcmVmNy5saXN0O1xuICAgIHZhciBkaXYgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IGxpc3RcbiAgICB9KTtcblxuICAgIGlmICghaXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLW11bHRpc2VsZWN0YWJsZScsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7R3JvdXB9IGdyb3VwXG4gICAqL1xuICBjaG9pY2VHcm91cDogZnVuY3Rpb24gY2hvaWNlR3JvdXAoX3JlZjgsIF9yZWY5KSB7XG4gICAgdmFyIGdyb3VwID0gX3JlZjguZ3JvdXAsXG4gICAgICAgIGdyb3VwSGVhZGluZyA9IF9yZWY4Lmdyb3VwSGVhZGluZyxcbiAgICAgICAgaXRlbURpc2FibGVkID0gX3JlZjguaXRlbURpc2FibGVkO1xuICAgIHZhciBpZCA9IF9yZWY5LmlkLFxuICAgICAgICB2YWx1ZSA9IF9yZWY5LnZhbHVlLFxuICAgICAgICBkaXNhYmxlZCA9IF9yZWY5LmRpc2FibGVkO1xuICAgIHZhciBkaXYgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IGdyb3VwICsgXCIgXCIgKyAoZGlzYWJsZWQgPyBpdGVtRGlzYWJsZWQgOiAnJylcbiAgICB9KTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2dyb3VwJyk7XG4gICAgT2JqZWN0LmFzc2lnbihkaXYuZGF0YXNldCwge1xuICAgICAgZ3JvdXA6ICcnLFxuICAgICAgaWQ6IGlkLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIGRpdi5hcHBlbmRDaGlsZChPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBjbGFzc05hbWU6IGdyb3VwSGVhZGluZyxcbiAgICAgIGlubmVySFRNTDogdmFsdWVcbiAgICB9KSk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7Q2hvaWNlfSBjaG9pY2VcbiAgICogQHBhcmFtIHtPcHRpb25zWydpdGVtU2VsZWN0VGV4dCddfSBzZWxlY3RUZXh0XG4gICAqL1xuICBjaG9pY2U6IGZ1bmN0aW9uIGNob2ljZShfcmVmMTAsIF9yZWYxMSwgc2VsZWN0VGV4dCkge1xuICAgIHZhciBpdGVtID0gX3JlZjEwLml0ZW0sXG4gICAgICAgIGl0ZW1DaG9pY2UgPSBfcmVmMTAuaXRlbUNob2ljZSxcbiAgICAgICAgaXRlbVNlbGVjdGFibGUgPSBfcmVmMTAuaXRlbVNlbGVjdGFibGUsXG4gICAgICAgIHNlbGVjdGVkU3RhdGUgPSBfcmVmMTAuc2VsZWN0ZWRTdGF0ZSxcbiAgICAgICAgaXRlbURpc2FibGVkID0gX3JlZjEwLml0ZW1EaXNhYmxlZCxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmMTAucGxhY2Vob2xkZXI7XG4gICAgdmFyIGlkID0gX3JlZjExLmlkLFxuICAgICAgICB2YWx1ZSA9IF9yZWYxMS52YWx1ZSxcbiAgICAgICAgbGFiZWwgPSBfcmVmMTEubGFiZWwsXG4gICAgICAgIGdyb3VwSWQgPSBfcmVmMTEuZ3JvdXBJZCxcbiAgICAgICAgZWxlbWVudElkID0gX3JlZjExLmVsZW1lbnRJZCxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF9yZWYxMS5kaXNhYmxlZCxcbiAgICAgICAgaXNTZWxlY3RlZCA9IF9yZWYxMS5zZWxlY3RlZCxcbiAgICAgICAgaXNQbGFjZWhvbGRlciA9IF9yZWYxMS5wbGFjZWhvbGRlcjtcbiAgICB2YXIgZGl2ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgaWQ6IGVsZW1lbnRJZCxcbiAgICAgIGlubmVySFRNTDogbGFiZWwsXG4gICAgICBjbGFzc05hbWU6IGl0ZW0gKyBcIiBcIiArIGl0ZW1DaG9pY2VcbiAgICB9KTtcblxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChzZWxlY3RlZFN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNQbGFjZWhvbGRlcikge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQocGxhY2Vob2xkZXIpO1xuICAgIH1cblxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBncm91cElkID4gMCA/ICd0cmVlaXRlbScgOiAnb3B0aW9uJyk7XG4gICAgT2JqZWN0LmFzc2lnbihkaXYuZGF0YXNldCwge1xuICAgICAgY2hvaWNlOiAnJyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHNlbGVjdFRleHQ6IHNlbGVjdFRleHRcbiAgICB9KTtcblxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChpdGVtRGlzYWJsZWQpO1xuICAgICAgZGl2LmRhdGFzZXQuY2hvaWNlRGlzYWJsZWQgPSAnJztcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChpdGVtU2VsZWN0YWJsZSk7XG4gICAgICBkaXYuZGF0YXNldC5jaG9pY2VTZWxlY3RhYmxlID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGFjZWhvbGRlclZhbHVlXG4gICAqL1xuICBpbnB1dDogZnVuY3Rpb24gaW5wdXQoX3JlZjEyLCBwbGFjZWhvbGRlclZhbHVlKSB7XG4gICAgdmFyIF9pbnB1dCA9IF9yZWYxMi5pbnB1dCxcbiAgICAgICAgaW5wdXRDbG9uZWQgPSBfcmVmMTIuaW5wdXRDbG9uZWQ7XG4gICAgdmFyIGlucCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSwge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgY2xhc3NOYW1lOiBfaW5wdXQgKyBcIiBcIiArIGlucHV0Q2xvbmVkLFxuICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgIGF1dG9jYXBpdGFsaXplOiAnb2ZmJyxcbiAgICAgIHNwZWxsY2hlY2s6IGZhbHNlXG4gICAgfSk7XG4gICAgaW5wLnNldEF0dHJpYnV0ZSgncm9sZScsICd0ZXh0Ym94Jyk7XG4gICAgaW5wLnNldEF0dHJpYnV0ZSgnYXJpYS1hdXRvY29tcGxldGUnLCAnbGlzdCcpO1xuICAgIGlucC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwbGFjZWhvbGRlclZhbHVlKTtcbiAgICByZXR1cm4gaW5wO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICovXG4gIGRyb3Bkb3duOiBmdW5jdGlvbiBkcm9wZG93bihfcmVmMTMpIHtcbiAgICB2YXIgbGlzdCA9IF9yZWYxMy5saXN0LFxuICAgICAgICBsaXN0RHJvcGRvd24gPSBfcmVmMTMubGlzdERyb3Bkb3duO1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChsaXN0LCBsaXN0RHJvcGRvd24pO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICByZXR1cm4gZGl2O1xuICB9LFxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlubmVySFRNTFxuICAgKiBAcGFyYW0ge1wibm8tY2hvaWNlc1wiIHwgXCJuby1yZXN1bHRzXCIgfCBcIlwifSB0eXBlXG4gICAqL1xuICBub3RpY2U6IGZ1bmN0aW9uIG5vdGljZShfcmVmMTQsIGlubmVySFRNTCwgdHlwZSkge1xuICAgIHZhciBpdGVtID0gX3JlZjE0Lml0ZW0sXG4gICAgICAgIGl0ZW1DaG9pY2UgPSBfcmVmMTQuaXRlbUNob2ljZSxcbiAgICAgICAgbm9SZXN1bHRzID0gX3JlZjE0Lm5vUmVzdWx0cyxcbiAgICAgICAgbm9DaG9pY2VzID0gX3JlZjE0Lm5vQ2hvaWNlcztcblxuICAgIGlmICh0eXBlID09PSB2b2lkIDApIHtcbiAgICAgIHR5cGUgPSAnJztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IFtpdGVtLCBpdGVtQ2hvaWNlXTtcblxuICAgIGlmICh0eXBlID09PSAnbm8tY2hvaWNlcycpIHtcbiAgICAgIGNsYXNzZXMucHVzaChub0Nob2ljZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25vLXJlc3VsdHMnKSB7XG4gICAgICBjbGFzc2VzLnB1c2gobm9SZXN1bHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgaW5uZXJIVE1MOiBpbm5lckhUTUwsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMuam9pbignICcpXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SXRlbX0gb3B0aW9uXG4gICAqL1xuICBvcHRpb246IGZ1bmN0aW9uIG9wdGlvbihfcmVmMTUpIHtcbiAgICB2YXIgbGFiZWwgPSBfcmVmMTUubGFiZWwsXG4gICAgICAgIHZhbHVlID0gX3JlZjE1LnZhbHVlLFxuICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZjE1LmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIGFjdGl2ZSA9IF9yZWYxNS5hY3RpdmUsXG4gICAgICAgIGRpc2FibGVkID0gX3JlZjE1LmRpc2FibGVkO1xuICAgIHZhciBvcHQgPSBuZXcgT3B0aW9uKGxhYmVsLCB2YWx1ZSwgZmFsc2UsIGFjdGl2ZSk7XG5cbiAgICBpZiAoY3VzdG9tUHJvcGVydGllcykge1xuICAgICAgb3B0LmRhdGFzZXQuY3VzdG9tUHJvcGVydGllcyA9IGN1c3RvbVByb3BlcnRpZXM7XG4gICAgfVxuXG4gICAgb3B0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgcmV0dXJuIG9wdDtcbiAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRlbXBsYXRlcyA9IChURU1QTEFURVMpO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9hY3Rpb25zL2Nob2ljZXMuanNcbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgncmVkdXgnKS5BY3Rpb259IEFjdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNob2ljZX0gQ2hvaWNlXG4gKi9cblxuLyoqXG4gKiBAYXJndW1lbnQge0Nob2ljZX0gY2hvaWNlXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgQ2hvaWNlfVxuICovXG5cbnZhciBjaG9pY2VzX2FkZENob2ljZSA9IGZ1bmN0aW9uIGFkZENob2ljZShfcmVmKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBpZCA9IF9yZWYuaWQsXG4gICAgICBncm91cElkID0gX3JlZi5ncm91cElkLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgZWxlbWVudElkID0gX3JlZi5lbGVtZW50SWQsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZi5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmLnBsYWNlaG9sZGVyLFxuICAgICAga2V5Q29kZSA9IF9yZWYua2V5Q29kZTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuQUREX0NIT0lDRSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIGlkOiBpZCxcbiAgICBncm91cElkOiBncm91cElkLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBlbGVtZW50SWQ6IGVsZW1lbnRJZCxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICBrZXlDb2RlOiBrZXlDb2RlXG4gIH07XG59O1xuLyoqXG4gKiBAYXJndW1lbnQge0Nob2ljZVtdfSByZXN1bHRzXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgeyByZXN1bHRzOiBDaG9pY2VbXSB9fVxuICovXG5cbnZhciBjaG9pY2VzX2ZpbHRlckNob2ljZXMgPSBmdW5jdGlvbiBmaWx0ZXJDaG9pY2VzKHJlc3VsdHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuRklMVEVSX0NIT0lDRVMsXG4gICAgcmVzdWx0czogcmVzdWx0c1xuICB9O1xufTtcbi8qKlxuICogQGFyZ3VtZW50IHtib29sZWFufSBhY3RpdmVcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiB7IGFjdGl2ZTogYm9vbGVhbiB9fVxuICovXG5cbnZhciBjaG9pY2VzX2FjdGl2YXRlQ2hvaWNlcyA9IGZ1bmN0aW9uIGFjdGl2YXRlQ2hvaWNlcyhhY3RpdmUpIHtcbiAgaWYgKGFjdGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLkFDVElWQVRFX0NIT0lDRVMsXG4gICAgYWN0aXZlOiBhY3RpdmVcbiAgfTtcbn07XG4vKipcbiAqIEByZXR1cm5zIHtBY3Rpb259XG4gKi9cblxudmFyIGNob2ljZXNfY2xlYXJDaG9pY2VzID0gZnVuY3Rpb24gY2xlYXJDaG9pY2VzKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTl9UWVBFUy5DTEVBUl9DSE9JQ0VTXG4gIH07XG59O1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9hY3Rpb25zL2l0ZW1zLmpzXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgncmVkdXgnKS5BY3Rpb259IEFjdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW19IEl0ZW1cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7SXRlbX0gaXRlbVxuICogQHJldHVybnMge0FjdGlvbiAmIEl0ZW19XG4gKi9cblxudmFyIGl0ZW1zX2FkZEl0ZW0gPSBmdW5jdGlvbiBhZGRJdGVtKF9yZWYpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGNob2ljZUlkID0gX3JlZi5jaG9pY2VJZCxcbiAgICAgIGdyb3VwSWQgPSBfcmVmLmdyb3VwSWQsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZi5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmLnBsYWNlaG9sZGVyLFxuICAgICAga2V5Q29kZSA9IF9yZWYua2V5Q29kZTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuQUREX0lURU0sXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICBpZDogaWQsXG4gICAgY2hvaWNlSWQ6IGNob2ljZUlkLFxuICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgY3VzdG9tUHJvcGVydGllczogY3VzdG9tUHJvcGVydGllcyxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAga2V5Q29kZToga2V5Q29kZVxuICB9O1xufTtcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hvaWNlSWRcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiB7IGlkOiBzdHJpbmcsIGNob2ljZUlkOiBzdHJpbmcgfX1cbiAqL1xuXG52YXIgaXRlbXNfcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaWQsIGNob2ljZUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLlJFTU9WRV9JVEVNLFxuICAgIGlkOiBpZCxcbiAgICBjaG9pY2VJZDogY2hvaWNlSWRcbiAgfTtcbn07XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHBhcmFtIHtib29sZWFufSBoaWdobGlnaHRlZFxuICogQHJldHVybnMge0FjdGlvbiAmIHsgaWQ6IHN0cmluZywgaGlnaGxpZ2h0ZWQ6IGJvb2xlYW4gfX1cbiAqL1xuXG52YXIgaXRlbXNfaGlnaGxpZ2h0SXRlbSA9IGZ1bmN0aW9uIGhpZ2hsaWdodEl0ZW0oaWQsIGhpZ2hsaWdodGVkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLkhJR0hMSUdIVF9JVEVNLFxuICAgIGlkOiBpZCxcbiAgICBoaWdobGlnaHRlZDogaGlnaGxpZ2h0ZWRcbiAgfTtcbn07XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2FjdGlvbnMvZ3JvdXBzLmpzXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgncmVkdXgnKS5BY3Rpb259IEFjdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkdyb3VwfSBHcm91cFxuICovXG5cbi8qKlxuICogQHBhcmFtIHtHcm91cH0gZ3JvdXBcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiBHcm91cH1cbiAqL1xuXG52YXIgZ3JvdXBzX2FkZEdyb3VwID0gZnVuY3Rpb24gYWRkR3JvdXAoX3JlZikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgYWN0aXZlID0gX3JlZi5hY3RpdmUsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQ7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLkFERF9HUk9VUCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgaWQ6IGlkLFxuICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICB9O1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvYWN0aW9ucy9taXNjLmpzXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3JlZHV4JykuQWN0aW9ufSBBY3Rpb25cbiAqL1xuXG4vKipcbiAqIEByZXR1cm5zIHtBY3Rpb259XG4gKi9cbnZhciBjbGVhckFsbCA9IGZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdDTEVBUl9BTEwnXG4gIH07XG59O1xuLyoqXG4gKiBAcGFyYW0ge2FueX0gc3RhdGVcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiB7IHN0YXRlOiBvYmplY3QgfX1cbiAqL1xuXG52YXIgcmVzZXRUbyA9IGZ1bmN0aW9uIHJlc2V0VG8oc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnUkVTRVRfVE8nLFxuICAgIHN0YXRlOiBzdGF0ZVxuICB9O1xufTtcbi8qKlxuICogQHBhcmFtIHtib29sZWFufSBpc0xvYWRpbmdcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiB7IGlzTG9hZGluZzogYm9vbGVhbiB9fVxuICovXG5cbnZhciBzZXRJc0xvYWRpbmcgPSBmdW5jdGlvbiBzZXRJc0xvYWRpbmcoaXNMb2FkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1NFVF9JU19MT0FESU5HJyxcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZ1xuICB9O1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY2hvaWNlcy5qc1xuZnVuY3Rpb24gY2hvaWNlc19kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gY2hvaWNlc19jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGNob2ljZXNfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGNob2ljZXNfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qKiBAc2VlIHtAbGluayBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1hY2VhMDc1ZDBhYzY5NTRmMjc1YTcwMDIzOTA2MDUwY30gKi9cblxudmFyIElTX0lFMTEgPSAnLW1zLXNjcm9sbC1saW1pdCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmICctbXMtaW1lLWFsaWduJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DaG9pY2V9IENob2ljZVxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW19IEl0ZW1cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5Hcm91cH0gR3JvdXBcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5PcHRpb25zfSBPcHRpb25zXG4gKi9cblxuLyoqIEB0eXBlIHtQYXJ0aWFsPE9wdGlvbnM+fSAqL1xuXG52YXIgVVNFUl9ERUZBVUxUUyA9IHt9O1xuLyoqXG4gKiBDaG9pY2VzXG4gKiBAYXV0aG9yIEpvc2ggSm9obnNvbjxqb3NoQGpvc2h1YWpvaG5zb24uY28udWs+XG4gKi9cblxudmFyIGNob2ljZXNfQ2hvaWNlcyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGNob2ljZXNfY3JlYXRlQ2xhc3MoQ2hvaWNlcywgbnVsbCwgW3tcbiAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe1xuICAgICAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgICByZXR1cm4gVVNFUl9ERUZBVUxUUztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgdGVtcGxhdGVzKCkge1xuICAgICAgICAgIHJldHVybiBURU1QTEFURVM7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtQYXJ0aWFsPE9wdGlvbnM+fSB1c2VyQ29uZmlnXG4gICAgICovXG5cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIENob2ljZXMoZWxlbWVudCwgdXNlckNvbmZpZykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoZWxlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBlbGVtZW50ID0gJ1tkYXRhLWNob2ljZV0nO1xuICAgIH1cblxuICAgIGlmICh1c2VyQ29uZmlnID09PSB2b2lkIDApIHtcbiAgICAgIHVzZXJDb25maWcgPSB7fTtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge1BhcnRpYWw8T3B0aW9ucz59ICovXG4gICAgdGhpcy5jb25maWcgPSBjanNfZGVmYXVsdC5hLmFsbChbREVGQVVMVF9DT05GSUcsIENob2ljZXMuZGVmYXVsdHMub3B0aW9ucywgdXNlckNvbmZpZ10sIC8vIFdoZW4gbWVyZ2luZyBhcnJheSBjb25maWdzLCByZXBsYWNlIHdpdGggYSBjb3B5IG9mIHRoZSB1c2VyQ29uZmlnIGFycmF5LFxuICAgIC8vIGluc3RlYWQgb2YgY29uY2F0ZW5hdGluZyB3aXRoIHRoZSBkZWZhdWx0IGFycmF5XG4gICAge1xuICAgICAgYXJyYXlNZXJnZTogZnVuY3Rpb24gYXJyYXlNZXJnZShfLCBzb3VyY2VBcnJheSkge1xuICAgICAgICByZXR1cm4gW10uY29uY2F0KHNvdXJjZUFycmF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgaW52YWxpZENvbmZpZ09wdGlvbnMgPSBkaWZmKHRoaXMuY29uZmlnLCBERUZBVUxUX0NPTkZJRyk7XG5cbiAgICBpZiAoaW52YWxpZENvbmZpZ09wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1Vua25vd24gY29uZmlnIG9wdGlvbihzKSBwYXNzZWQnLCBpbnZhbGlkQ29uZmlnT3B0aW9ucy5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICB2YXIgcGFzc2VkRWxlbWVudCA9IHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gICAgaWYgKCEocGFzc2VkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgcGFzc2VkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdFeHBlY3RlZCBvbmUgb2YgdGhlIGZvbGxvd2luZyB0eXBlcyB0ZXh0fHNlbGVjdC1vbmV8c2VsZWN0LW11bHRpcGxlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNUZXh0RWxlbWVudCA9IHBhc3NlZEVsZW1lbnQudHlwZSA9PT0gVEVYVF9UWVBFO1xuICAgIHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCA9IHBhc3NlZEVsZW1lbnQudHlwZSA9PT0gU0VMRUNUX09ORV9UWVBFO1xuICAgIHRoaXMuX2lzU2VsZWN0TXVsdGlwbGVFbGVtZW50ID0gcGFzc2VkRWxlbWVudC50eXBlID09PSBTRUxFQ1RfTVVMVElQTEVfVFlQRTtcbiAgICB0aGlzLl9pc1NlbGVjdEVsZW1lbnQgPSB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgfHwgdGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnQ7XG4gICAgdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZCA9IHRoaXMuX2lzU2VsZWN0TXVsdGlwbGVFbGVtZW50IHx8IHRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQ7XG5cbiAgICBpZiAoIVsnYXV0bycsICdhbHdheXMnXS5pbmNsdWRlcyh0aGlzLmNvbmZpZy5yZW5kZXJTZWxlY3RlZENob2ljZXMpKSB7XG4gICAgICB0aGlzLmNvbmZpZy5yZW5kZXJTZWxlY3RlZENob2ljZXMgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgaWYgKHVzZXJDb25maWcuYWRkSXRlbUZpbHRlciAmJiB0eXBlb2YgdXNlckNvbmZpZy5hZGRJdGVtRmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcmUgPSB1c2VyQ29uZmlnLmFkZEl0ZW1GaWx0ZXIgaW5zdGFuY2VvZiBSZWdFeHAgPyB1c2VyQ29uZmlnLmFkZEl0ZW1GaWx0ZXIgOiBuZXcgUmVnRXhwKHVzZXJDb25maWcuYWRkSXRlbUZpbHRlcik7XG4gICAgICB0aGlzLmNvbmZpZy5hZGRJdGVtRmlsdGVyID0gcmUudGVzdC5iaW5kKHJlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50ID0gbmV3IFdyYXBwZWRJbnB1dCh7XG4gICAgICAgIGVsZW1lbnQ6IHBhc3NlZEVsZW1lbnQsXG4gICAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICAgIGRlbGltaXRlcjogdGhpcy5jb25maWcuZGVsaW1pdGVyXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50ID0gbmV3IFdyYXBwZWRTZWxlY3Qoe1xuICAgICAgICBlbGVtZW50OiBwYXNzZWRFbGVtZW50LFxuICAgICAgICBjbGFzc05hbWVzOiB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLFxuICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gdGVtcGxhdGUoZGF0YSkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5fdGVtcGxhdGVzLm9wdGlvbihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3N0b3JlID0gbmV3IHN0b3JlX1N0b3JlKCk7XG4gICAgdGhpcy5faW5pdGlhbFN0YXRlID0ge307XG4gICAgdGhpcy5fY3VycmVudFN0YXRlID0ge307XG4gICAgdGhpcy5fcHJldlN0YXRlID0ge307XG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gJyc7XG4gICAgdGhpcy5fY2FuU2VhcmNoID0gdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZDtcbiAgICB0aGlzLl9pc1Njcm9sbGluZ09uSWUgPSBmYWxzZTtcbiAgICB0aGlzLl9oaWdobGlnaHRQb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5fd2FzVGFwID0gdHJ1ZTtcbiAgICB0aGlzLl9wbGFjZWhvbGRlclZhbHVlID0gdGhpcy5fZ2VuZXJhdGVQbGFjZWhvbGRlclZhbHVlKCk7XG4gICAgdGhpcy5fYmFzZUlkID0gZ2VuZXJhdGVJZCh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCwgJ2Nob2ljZXMtJyk7XG4gICAgLyoqXG4gICAgICogc2V0dGluZyBkaXJlY3Rpb24gaW4gY2FzZXMgd2hlcmUgaXQncyBleHBsaWNpdGx5IHNldCBvbiBwYXNzZWRFbGVtZW50XG4gICAgICogb3Igd2hlbiBjYWxjdWxhdGVkIGRpcmVjdGlvbiBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgZG9jdW1lbnRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbJ2RpciddfVxuICAgICAqL1xuXG4gICAgdGhpcy5fZGlyZWN0aW9uID0gdGhpcy5wYXNzZWRFbGVtZW50LmRpcjtcblxuICAgIGlmICghdGhpcy5fZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgX3dpbmRvdyRnZXRDb21wdXRlZFN0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQpLFxuICAgICAgICAgIGVsZW1lbnREaXJlY3Rpb24gPSBfd2luZG93JGdldENvbXB1dGVkU3QuZGlyZWN0aW9uO1xuXG4gICAgICB2YXIgX3dpbmRvdyRnZXRDb21wdXRlZFN0MiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCksXG4gICAgICAgICAgZG9jdW1lbnREaXJlY3Rpb24gPSBfd2luZG93JGdldENvbXB1dGVkU3QyLmRpcmVjdGlvbjtcblxuICAgICAgaWYgKGVsZW1lbnREaXJlY3Rpb24gIT09IGRvY3VtZW50RGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGVsZW1lbnREaXJlY3Rpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faWROYW1lcyA9IHtcbiAgICAgIGl0ZW1DaG9pY2U6ICdpdGVtLWNob2ljZSdcbiAgICB9OyAvLyBBc3NpZ24gcHJlc2V0IGdyb3VwcyBmcm9tIHBhc3NlZCBlbGVtZW50XG5cbiAgICB0aGlzLl9wcmVzZXRHcm91cHMgPSB0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9uR3JvdXBzOyAvLyBBc3NpZ24gcHJlc2V0IG9wdGlvbnMgZnJvbSBwYXNzZWQgZWxlbWVudFxuXG4gICAgdGhpcy5fcHJlc2V0T3B0aW9ucyA9IHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zOyAvLyBBc3NpZ24gcHJlc2V0IGNob2ljZXMgZnJvbSBwYXNzZWQgb2JqZWN0XG5cbiAgICB0aGlzLl9wcmVzZXRDaG9pY2VzID0gdGhpcy5jb25maWcuY2hvaWNlczsgLy8gQXNzaWduIHByZXNldCBpdGVtcyBmcm9tIHBhc3NlZCBvYmplY3QgZmlyc3RcblxuICAgIHRoaXMuX3ByZXNldEl0ZW1zID0gdGhpcy5jb25maWcuaXRlbXM7IC8vIEFkZCBhbnkgdmFsdWVzIHBhc3NlZCBmcm9tIGF0dHJpYnV0ZVxuXG4gICAgaWYgKHRoaXMucGFzc2VkRWxlbWVudC52YWx1ZSkge1xuICAgICAgdGhpcy5fcHJlc2V0SXRlbXMgPSB0aGlzLl9wcmVzZXRJdGVtcy5jb25jYXQodGhpcy5wYXNzZWRFbGVtZW50LnZhbHVlLnNwbGl0KHRoaXMuY29uZmlnLmRlbGltaXRlcikpO1xuICAgIH0gLy8gQ3JlYXRlIGFycmF5IG9mIGNob2ljZXMgZnJvbSBvcHRpb24gZWxlbWVudHNcblxuXG4gICAgaWYgKHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zKSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIF90aGlzLl9wcmVzZXRDaG9pY2VzLnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBvLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBvLmlubmVySFRNTCxcbiAgICAgICAgICBzZWxlY3RlZDogby5zZWxlY3RlZCxcbiAgICAgICAgICBkaXNhYmxlZDogby5kaXNhYmxlZCB8fCBvLnBhcmVudE5vZGUuZGlzYWJsZWQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IG8udmFsdWUgPT09ICcnIHx8IG8uaGFzQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IG8uZ2V0QXR0cmlidXRlKCdkYXRhLWN1c3RvbS1wcm9wZXJ0aWVzJylcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQmx1ciA9IHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uS2V5VXAgPSB0aGlzLl9vbktleVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25LZXlEb3duID0gdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25DbGljayA9IHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblRvdWNoTW92ZSA9IHRoaXMuX29uVG91Y2hNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Ub3VjaEVuZCA9IHRoaXMuX29uVG91Y2hFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1vdXNlRG93biA9IHRoaXMuX29uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Nb3VzZU92ZXIgPSB0aGlzLl9vbk1vdXNlT3Zlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRm9ybVJlc2V0ID0gdGhpcy5fb25Gb3JtUmVzZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkFLZXkgPSB0aGlzLl9vbkFLZXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkVudGVyS2V5ID0gdGhpcy5fb25FbnRlcktleS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRXNjYXBlS2V5ID0gdGhpcy5fb25Fc2NhcGVLZXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkRpcmVjdGlvbktleSA9IHRoaXMuX29uRGlyZWN0aW9uS2V5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25EZWxldGVLZXkgPSB0aGlzLl9vbkRlbGV0ZUtleS5iaW5kKHRoaXMpOyAvLyBJZiBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGlzZWQgd2l0aCBDaG9pY2VzLCBmYWlsIHNpbGVudGx5XG5cbiAgICBpZiAodGhpcy5wYXNzZWRFbGVtZW50LmlzQWN0aXZlKSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLnNpbGVudCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RyeWluZyB0byBpbml0aWFsaXNlIENob2ljZXMgb24gZWxlbWVudCBhbHJlYWR5IGluaXRpYWxpc2VkJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gTGV0J3MgZ29cblxuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ2hvaWNlcy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmICh0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlVGVtcGxhdGVzKCk7XG5cbiAgICB0aGlzLl9jcmVhdGVFbGVtZW50cygpO1xuXG4gICAgdGhpcy5fY3JlYXRlU3RydWN0dXJlKCk7IC8vIFNldCBpbml0aWFsIHN0YXRlIChXZSBuZWVkIHRvIGNsb25lIHRoZSBzdGF0ZSBiZWNhdXNlIHNvbWUgcmVkdWNlcnNcbiAgICAvLyBtb2RpZnkgdGhlIGlubmVyIG9iamVjdHMgcHJvcGVydGllcyBpbiB0aGUgc3RhdGUpIPCfpKJcblxuXG4gICAgdGhpcy5faW5pdGlhbFN0YXRlID0gY2xvbmVPYmplY3QodGhpcy5fc3RvcmUuc3RhdGUpO1xuXG4gICAgdGhpcy5fc3RvcmUuc3Vic2NyaWJlKHRoaXMuX3JlbmRlcik7XG5cbiAgICB0aGlzLl9yZW5kZXIoKTtcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB2YXIgc2hvdWxkRGlzYWJsZSA9ICF0aGlzLmNvbmZpZy5hZGRJdGVtcyB8fCB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICBpZiAoc2hvdWxkRGlzYWJsZSkge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgdmFyIGNhbGxiYWNrT25Jbml0ID0gdGhpcy5jb25maWcuY2FsbGJhY2tPbkluaXQ7IC8vIFJ1biBjYWxsYmFjayBpZiBpdCBpcyBhIGZ1bmN0aW9uXG5cbiAgICBpZiAoY2FsbGJhY2tPbkluaXQgJiYgdHlwZW9mIGNhbGxiYWNrT25Jbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFja09uSW5pdC5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMucGFzc2VkRWxlbWVudC5yZXZlYWwoKTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLnVud3JhcCh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCk7XG4gICAgdGhpcy5jbGVhclN0b3JlKCk7XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucyA9IHRoaXMuX3ByZXNldE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gbnVsbDtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5wYXNzZWRFbGVtZW50LmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC5lbmFibGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICB0aGlzLmlucHV0LmVuYWJsZSgpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5lbmFibGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLnBhc3NlZEVsZW1lbnQuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY29udGFpbmVyT3V0ZXIuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgdGhpcy5pbnB1dC5kaXNhYmxlKCk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uaGlnaGxpZ2h0SXRlbSA9IGZ1bmN0aW9uIGhpZ2hsaWdodEl0ZW0oaXRlbSwgcnVuRXZlbnQpIHtcbiAgICBpZiAocnVuRXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgcnVuRXZlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIGlkID0gaXRlbS5pZCxcbiAgICAgICAgX2l0ZW0kZ3JvdXBJZCA9IGl0ZW0uZ3JvdXBJZCxcbiAgICAgICAgZ3JvdXBJZCA9IF9pdGVtJGdyb3VwSWQgPT09IHZvaWQgMCA/IC0xIDogX2l0ZW0kZ3JvdXBJZCxcbiAgICAgICAgX2l0ZW0kdmFsdWUgPSBpdGVtLnZhbHVlLFxuICAgICAgICB2YWx1ZSA9IF9pdGVtJHZhbHVlID09PSB2b2lkIDAgPyAnJyA6IF9pdGVtJHZhbHVlLFxuICAgICAgICBfaXRlbSRsYWJlbCA9IGl0ZW0ubGFiZWwsXG4gICAgICAgIGxhYmVsID0gX2l0ZW0kbGFiZWwgPT09IHZvaWQgMCA/ICcnIDogX2l0ZW0kbGFiZWw7XG4gICAgdmFyIGdyb3VwID0gZ3JvdXBJZCA+PSAwID8gdGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKGdyb3VwSWQpIDogbnVsbDtcblxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGl0ZW1zX2hpZ2hsaWdodEl0ZW0oaWQsIHRydWUpKTtcblxuICAgIGlmIChydW5FdmVudCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuaGlnaGxpZ2h0SXRlbSwge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICBncm91cFZhbHVlOiBncm91cCAmJiBncm91cC52YWx1ZSA/IGdyb3VwLnZhbHVlIDogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnVuaGlnaGxpZ2h0SXRlbSA9IGZ1bmN0aW9uIHVuaGlnaGxpZ2h0SXRlbShpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgaWQgPSBpdGVtLmlkLFxuICAgICAgICBfaXRlbSRncm91cElkMiA9IGl0ZW0uZ3JvdXBJZCxcbiAgICAgICAgZ3JvdXBJZCA9IF9pdGVtJGdyb3VwSWQyID09PSB2b2lkIDAgPyAtMSA6IF9pdGVtJGdyb3VwSWQyLFxuICAgICAgICBfaXRlbSR2YWx1ZTIgPSBpdGVtLnZhbHVlLFxuICAgICAgICB2YWx1ZSA9IF9pdGVtJHZhbHVlMiA9PT0gdm9pZCAwID8gJycgOiBfaXRlbSR2YWx1ZTIsXG4gICAgICAgIF9pdGVtJGxhYmVsMiA9IGl0ZW0ubGFiZWwsXG4gICAgICAgIGxhYmVsID0gX2l0ZW0kbGFiZWwyID09PSB2b2lkIDAgPyAnJyA6IF9pdGVtJGxhYmVsMjtcbiAgICB2YXIgZ3JvdXAgPSBncm91cElkID49IDAgPyB0aGlzLl9zdG9yZS5nZXRHcm91cEJ5SWQoZ3JvdXBJZCkgOiBudWxsO1xuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goaXRlbXNfaGlnaGxpZ2h0SXRlbShpZCwgZmFsc2UpKTtcblxuICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLmhpZ2hsaWdodEl0ZW0sIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIGdyb3VwVmFsdWU6IGdyb3VwICYmIGdyb3VwLnZhbHVlID8gZ3JvdXAudmFsdWUgOiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmhpZ2hsaWdodEFsbCA9IGZ1bmN0aW9uIGhpZ2hsaWdodEFsbCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuX3N0b3JlLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfdGhpczIuaGlnaGxpZ2h0SXRlbShpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by51bmhpZ2hsaWdodEFsbCA9IGZ1bmN0aW9uIHVuaGlnaGxpZ2h0QWxsKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5fc3RvcmUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF90aGlzMy51bmhpZ2hsaWdodEl0ZW0oaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlQWN0aXZlSXRlbXNCeVZhbHVlID0gZnVuY3Rpb24gcmVtb3ZlQWN0aXZlSXRlbXNCeVZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnZhbHVlID09PSB2YWx1ZTtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX3RoaXM0Ll9yZW1vdmVJdGVtKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUFjdGl2ZUl0ZW1zID0gZnVuY3Rpb24gcmVtb3ZlQWN0aXZlSXRlbXMoZXhjbHVkZWRJZCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgaWQgPSBfcmVmLmlkO1xuICAgICAgcmV0dXJuIGlkICE9PSBleGNsdWRlZElkO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfdGhpczUuX3JlbW92ZUl0ZW0oaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlSGlnaGxpZ2h0ZWRJdGVtcyA9IGZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodGVkSXRlbXMocnVuRXZlbnQpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIGlmIChydW5FdmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBydW5FdmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuX3N0b3JlLmhpZ2hsaWdodGVkQWN0aXZlSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgX3RoaXM2Ll9yZW1vdmVJdGVtKGl0ZW0pOyAvLyBJZiB0aGlzIGFjdGlvbiB3YXMgcGVyZm9ybWVkIGJ5IHRoZSB1c2VyXG4gICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudFxuXG5cbiAgICAgIGlmIChydW5FdmVudCkge1xuICAgICAgICBfdGhpczYuX3RyaWdnZXJDaGFuZ2UoaXRlbS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc2hvd0Ryb3Bkb3duID0gZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKHByZXZlbnRJbnB1dEZvY3VzKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5kcm9wZG93bi5pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNy5kcm9wZG93bi5zaG93KCk7XG5cbiAgICAgIF90aGlzNy5jb250YWluZXJPdXRlci5vcGVuKF90aGlzNy5kcm9wZG93bi5kaXN0YW5jZUZyb21Ub3BXaW5kb3cpO1xuXG4gICAgICBpZiAoIXByZXZlbnRJbnB1dEZvY3VzICYmIF90aGlzNy5fY2FuU2VhcmNoKSB7XG4gICAgICAgIF90aGlzNy5pbnB1dC5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczcucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLnNob3dEcm9wZG93biwge30pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5oaWRlRHJvcGRvd24gPSBmdW5jdGlvbiBoaWRlRHJvcGRvd24ocHJldmVudElucHV0Qmx1cikge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLmRyb3Bkb3duLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM4LmRyb3Bkb3duLmhpZGUoKTtcblxuICAgICAgX3RoaXM4LmNvbnRhaW5lck91dGVyLmNsb3NlKCk7XG5cbiAgICAgIGlmICghcHJldmVudElucHV0Qmx1ciAmJiBfdGhpczguX2NhblNlYXJjaCkge1xuICAgICAgICBfdGhpczguaW5wdXQucmVtb3ZlQWN0aXZlRGVzY2VuZGFudCgpO1xuXG4gICAgICAgIF90aGlzOC5pbnB1dC5ibHVyKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzOC5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuaGlkZURyb3Bkb3duLCB7fSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWVPbmx5KSB7XG4gICAgaWYgKHZhbHVlT25seSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZU9ubHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMucmVkdWNlKGZ1bmN0aW9uIChzZWxlY3RlZEl0ZW1zLCBpdGVtKSB7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gdmFsdWVPbmx5ID8gaXRlbS52YWx1ZSA6IGl0ZW07XG4gICAgICBzZWxlY3RlZEl0ZW1zLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW1zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgPyB2YWx1ZXNbMF0gOiB2YWx1ZXM7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nW10gfCBpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5JdGVtW119IGl0ZW1zXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldFZhbHVlID0gZnVuY3Rpb24gc2V0VmFsdWUoaXRlbXMpIHtcbiAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBfdGhpczkuX3NldENob2ljZU9ySXRlbSh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnNldENob2ljZUJ5VmFsdWUgPSBmdW5jdGlvbiBzZXRDaG9pY2VCeVZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkIHx8IHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gLy8gSWYgb25seSBvbmUgdmFsdWUgaGFzIGJlZW4gcGFzc2VkLCBjb252ZXJ0IHRvIGFycmF5XG5cblxuICAgIHZhciBjaG9pY2VWYWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdOyAvLyBMb29wIHRocm91Z2ggZWFjaCB2YWx1ZSBhbmRcblxuICAgIGNob2ljZVZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIF90aGlzMTAuX2ZpbmRBbmRTZWxlY3RDaG9pY2VCeVZhbHVlKHZhbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjaG9pY2VzIG9mIHNlbGVjdCBpbnB1dCB2aWEgYW4gYXJyYXkgb2Ygb2JqZWN0cyAob3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFycmF5IG9mIG9iamVjdCBvciBwcm9taXNlIG9mIGl0KSxcbiAgICogYSB2YWx1ZSBmaWVsZCBuYW1lIGFuZCBhIGxhYmVsIGZpZWxkIG5hbWUuXG4gICAqIFRoaXMgYmVoYXZlcyB0aGUgc2FtZSBhcyBwYXNzaW5nIGl0ZW1zIHZpYSB0aGUgY2hvaWNlcyBvcHRpb24gYnV0IGNhbiBiZSBjYWxsZWQgYWZ0ZXIgaW5pdGlhbGlzaW5nIENob2ljZXMuXG4gICAqIFRoaXMgY2FuIGFsc28gYmUgdXNlZCB0byBhZGQgZ3JvdXBzIG9mIGNob2ljZXMgKHNlZSBleGFtcGxlIDIpOyBPcHRpb25hbGx5IHBhc3MgYSB0cnVlIGByZXBsYWNlQ2hvaWNlc2AgdmFsdWUgdG8gcmVtb3ZlIGFueSBleGlzdGluZyBjaG9pY2VzLlxuICAgKiBPcHRpb25hbGx5IHBhc3MgYSBgY3VzdG9tUHJvcGVydGllc2Agb2JqZWN0IHRvIGFkZCBhZGRpdGlvbmFsIGRhdGEgdG8geW91ciBjaG9pY2VzICh1c2VmdWwgd2hlbiBzZWFyY2hpbmcvZmlsdGVyaW5nIGV0YykuXG4gICAqXG4gICAqICoqSW5wdXQgdHlwZXMgYWZmZWN0ZWQ6Kiogc2VsZWN0LW9uZSwgc2VsZWN0LW11bHRpcGxlXG4gICAqXG4gICAqIEB0ZW1wbGF0ZSB7Q2hvaWNlW10gfCAoKGluc3RhbmNlOiBDaG9pY2VzKSA9PiBvYmplY3RbXSB8IFByb21pc2U8b2JqZWN0W10+KX0gVFxuICAgKiBAcGFyYW0ge1R9IFtjaG9pY2VzQXJyYXlPckZldGNoZXJdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWUgPSAndmFsdWUnXSAtIG5hbWUgb2YgYHZhbHVlYCBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xhYmVsID0gJ2xhYmVsJ10gLSBuYW1lIG9mICdsYWJlbCcgZmllbGRcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmVwbGFjZUNob2ljZXMgPSBmYWxzZV0gLSB3aGV0aGVyIHRvIHJlcGxhY2Ugb2YgYWRkIGNob2ljZXNcbiAgICogQHJldHVybnMge3RoaXMgfCBQcm9taXNlPHRoaXM+fVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBleGFtcGxlID0gbmV3IENob2ljZXMoZWxlbWVudCk7XG4gICAqXG4gICAqIGV4YW1wbGUuc2V0Q2hvaWNlcyhbXG4gICAqICAge3ZhbHVlOiAnT25lJywgbGFiZWw6ICdMYWJlbCBPbmUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAqICAge3ZhbHVlOiAnVHdvJywgbGFiZWw6ICdMYWJlbCBUd28nLCBzZWxlY3RlZDogdHJ1ZX0sXG4gICAqICAge3ZhbHVlOiAnVGhyZWUnLCBsYWJlbDogJ0xhYmVsIFRocmVlJ30sXG4gICAqIF0sICd2YWx1ZScsICdsYWJlbCcsIGZhbHNlKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGV4YW1wbGUgPSBuZXcgQ2hvaWNlcyhlbGVtZW50KTtcbiAgICpcbiAgICogZXhhbXBsZS5zZXRDaG9pY2VzKGFzeW5jICgpID0+IHtcbiAgICogICB0cnkge1xuICAgKiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgZmV0Y2goJy9pdGVtcycpO1xuICAgKiAgICAgIHJldHVybiBpdGVtcy5qc29uKClcbiAgICogICB9IGNhdGNoKGVycikge1xuICAgKiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgKiAgIH1cbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBleGFtcGxlID0gbmV3IENob2ljZXMoZWxlbWVudCk7XG4gICAqXG4gICAqIGV4YW1wbGUuc2V0Q2hvaWNlcyhbe1xuICAgKiAgIGxhYmVsOiAnR3JvdXAgb25lJyxcbiAgICogICBpZDogMSxcbiAgICogICBkaXNhYmxlZDogZmFsc2UsXG4gICAqICAgY2hvaWNlczogW1xuICAgKiAgICAge3ZhbHVlOiAnQ2hpbGQgT25lJywgbGFiZWw6ICdDaGlsZCBPbmUnLCBzZWxlY3RlZDogdHJ1ZX0sXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBUd28nLCBsYWJlbDogJ0NoaWxkIFR3bycsICBkaXNhYmxlZDogdHJ1ZX0sXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBUaHJlZScsIGxhYmVsOiAnQ2hpbGQgVGhyZWUnfSxcbiAgICogICBdXG4gICAqIH0sXG4gICAqIHtcbiAgICogICBsYWJlbDogJ0dyb3VwIHR3bycsXG4gICAqICAgaWQ6IDIsXG4gICAqICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgKiAgIGNob2ljZXM6IFtcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIEZvdXInLCBsYWJlbDogJ0NoaWxkIEZvdXInLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBGaXZlJywgbGFiZWw6ICdDaGlsZCBGaXZlJ30sXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBTaXgnLCBsYWJlbDogJ0NoaWxkIFNpeCcsIGN1c3RvbVByb3BlcnRpZXM6IHtcbiAgICogICAgICAgZGVzY3JpcHRpb246ICdDdXN0b20gZGVzY3JpcHRpb24gYWJvdXQgY2hpbGQgc2l4JyxcbiAgICogICAgICAgcmFuZG9tOiAnQW5vdGhlciByYW5kb20gY3VzdG9tIHByb3BlcnR5J1xuICAgKiAgICAgfX0sXG4gICAqICAgXVxuICAgKiB9XSwgJ3ZhbHVlJywgJ2xhYmVsJywgZmFsc2UpO1xuICAgKiBgYGBcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0Q2hvaWNlcyA9IGZ1bmN0aW9uIHNldENob2ljZXMoY2hvaWNlc0FycmF5T3JGZXRjaGVyLCB2YWx1ZSwgbGFiZWwsIHJlcGxhY2VDaG9pY2VzKSB7XG4gICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuXG4gICAgaWYgKGNob2ljZXNBcnJheU9yRmV0Y2hlciA9PT0gdm9pZCAwKSB7XG4gICAgICBjaG9pY2VzQXJyYXlPckZldGNoZXIgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWUgPSAndmFsdWUnO1xuICAgIH1cblxuICAgIGlmIChsYWJlbCA9PT0gdm9pZCAwKSB7XG4gICAgICBsYWJlbCA9ICdsYWJlbCc7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VDaG9pY2VzID09PSB2b2lkIDApIHtcbiAgICAgIHJlcGxhY2VDaG9pY2VzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJzZXRDaG9pY2VzIHdhcyBjYWxsZWQgb24gYSBub24taW5pdGlhbGl6ZWQgaW5zdGFuY2Ugb2YgQ2hvaWNlc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2VsZWN0RWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInNldENob2ljZXMgY2FuJ3QgYmUgdXNlZCB3aXRoIElOUFVUIGJhc2VkIENob2ljZXNcIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgIXZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwidmFsdWUgcGFyYW1ldGVyIG11c3QgYmUgYSBuYW1lIG9mICd2YWx1ZScgZmllbGQgaW4gcGFzc2VkIG9iamVjdHNcIik7XG4gICAgfSAvLyBDbGVhciBjaG9pY2VzIGlmIG5lZWRlZFxuXG5cbiAgICBpZiAocmVwbGFjZUNob2ljZXMpIHtcbiAgICAgIHRoaXMuY2xlYXJDaG9pY2VzKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjaG9pY2VzQXJyYXlPckZldGNoZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGl0J3MgYSBjaG9pY2VzIGZldGNoZXIgZnVuY3Rpb25cbiAgICAgIHZhciBmZXRjaGVyID0gY2hvaWNlc0FycmF5T3JGZXRjaGVyKHRoaXMpO1xuXG4gICAgICBpZiAodHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgZmV0Y2hlciBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgLy8gdGhhdCdzIGEgcHJvbWlzZVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGF0L2NvbXBhdFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc29sdmUpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMxMS5faGFuZGxlTG9hZGluZ1N0YXRlKHRydWUpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2hlcjtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczExLnNldENob2ljZXMoZGF0YSwgdmFsdWUsIGxhYmVsLCByZXBsYWNlQ2hvaWNlcyk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpZiAoIV90aGlzMTEuY29uZmlnLnNpbGVudCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMTEuX2hhbmRsZUxvYWRpbmdTdGF0ZShmYWxzZSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczExO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gZnVuY3Rpb24gcmV0dXJuZWQgc29tZXRoaW5nIGVsc2UgdGhhbiBwcm9taXNlLCBsZXQncyBjaGVjayBpZiBpdCdzIGFuIGFycmF5IG9mIGNob2ljZXNcblxuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZmV0Y2hlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIi5zZXRDaG9pY2VzIGZpcnN0IGFyZ3VtZW50IGZ1bmN0aW9uIG11c3QgcmV0dXJuIGVpdGhlciBhcnJheSBvZiBjaG9pY2VzIG9yIFByb21pc2UsIGdvdDogXCIgKyB0eXBlb2YgZmV0Y2hlcik7XG4gICAgICB9IC8vIHJlY3Vyc2lvbiB3aXRoIHJlc3VsdHMsIGl0J3Mgc3luYyBhbmQgY2hvaWNlcyB3ZXJlIGNsZWFyZWQgYWxyZWFkeVxuXG5cbiAgICAgIHJldHVybiB0aGlzLnNldENob2ljZXMoZmV0Y2hlciwgdmFsdWUsIGxhYmVsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNob2ljZXNBcnJheU9yRmV0Y2hlcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCIuc2V0Q2hvaWNlcyBtdXN0IGJlIGNhbGxlZCBlaXRoZXIgd2l0aCBhcnJheSBvZiBjaG9pY2VzIHdpdGggYSBmdW5jdGlvbiByZXN1bHRpbmcgaW50byBQcm9taXNlIG9mIGFycmF5IG9mIGNob2ljZXNcIik7XG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVMb2FkaW5nU3RhdGUoKTtcblxuICAgIHRoaXMuX3N0YXJ0TG9hZGluZygpO1xuXG4gICAgY2hvaWNlc0FycmF5T3JGZXRjaGVyLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwT3JDaG9pY2UpIHtcbiAgICAgIGlmIChncm91cE9yQ2hvaWNlLmNob2ljZXMpIHtcbiAgICAgICAgX3RoaXMxMS5fYWRkR3JvdXAoe1xuICAgICAgICAgIGlkOiBwYXJzZUludChncm91cE9yQ2hvaWNlLmlkLCAxMCkgfHwgbnVsbCxcbiAgICAgICAgICBncm91cDogZ3JvdXBPckNob2ljZSxcbiAgICAgICAgICB2YWx1ZUtleTogdmFsdWUsXG4gICAgICAgICAgbGFiZWxLZXk6IGxhYmVsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMxMS5fYWRkQ2hvaWNlKHtcbiAgICAgICAgICB2YWx1ZTogZ3JvdXBPckNob2ljZVt2YWx1ZV0sXG4gICAgICAgICAgbGFiZWw6IGdyb3VwT3JDaG9pY2VbbGFiZWxdLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGdyb3VwT3JDaG9pY2Uuc2VsZWN0ZWQsXG4gICAgICAgICAgaXNEaXNhYmxlZDogZ3JvdXBPckNob2ljZS5kaXNhYmxlZCxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBncm91cE9yQ2hvaWNlLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGdyb3VwT3JDaG9pY2UucGxhY2Vob2xkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zdG9wTG9hZGluZygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyQ2hvaWNlcyA9IGZ1bmN0aW9uIGNsZWFyQ2hvaWNlcygpIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjaG9pY2VzX2NsZWFyQ2hvaWNlcygpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclN0b3JlID0gZnVuY3Rpb24gY2xlYXJTdG9yZSgpIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjbGVhckFsbCgpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5jbGVhcklucHV0ID0gZnVuY3Rpb24gY2xlYXJJbnB1dCgpIHtcbiAgICB2YXIgc2hvdWxkU2V0SW5wdXRXaWR0aCA9ICF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQ7XG4gICAgdGhpcy5pbnB1dC5jbGVhcihzaG91bGRTZXRJbnB1dFdpZHRoKTtcblxuICAgIGlmICghdGhpcy5faXNUZXh0RWxlbWVudCAmJiB0aGlzLl9jYW5TZWFyY2gpIHtcbiAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGNob2ljZXNfYWN0aXZhdGVDaG9pY2VzKHRydWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uX3JlbmRlciA9IGZ1bmN0aW9uIF9yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlLmlzTG9hZGluZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY3VycmVudFN0YXRlID0gdGhpcy5fc3RvcmUuc3RhdGU7XG4gICAgdmFyIHN0YXRlQ2hhbmdlZCA9IHRoaXMuX2N1cnJlbnRTdGF0ZS5jaG9pY2VzICE9PSB0aGlzLl9wcmV2U3RhdGUuY2hvaWNlcyB8fCB0aGlzLl9jdXJyZW50U3RhdGUuZ3JvdXBzICE9PSB0aGlzLl9wcmV2U3RhdGUuZ3JvdXBzIHx8IHRoaXMuX2N1cnJlbnRTdGF0ZS5pdGVtcyAhPT0gdGhpcy5fcHJldlN0YXRlLml0ZW1zO1xuICAgIHZhciBzaG91bGRSZW5kZXJDaG9pY2VzID0gdGhpcy5faXNTZWxlY3RFbGVtZW50O1xuICAgIHZhciBzaG91bGRSZW5kZXJJdGVtcyA9IHRoaXMuX2N1cnJlbnRTdGF0ZS5pdGVtcyAhPT0gdGhpcy5fcHJldlN0YXRlLml0ZW1zO1xuXG4gICAgaWYgKCFzdGF0ZUNoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkUmVuZGVyQ2hvaWNlcykge1xuICAgICAgdGhpcy5fcmVuZGVyQ2hvaWNlcygpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRSZW5kZXJJdGVtcykge1xuICAgICAgdGhpcy5fcmVuZGVySXRlbXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcmV2U3RhdGUgPSB0aGlzLl9jdXJyZW50U3RhdGU7XG4gIH07XG5cbiAgX3Byb3RvLl9yZW5kZXJDaG9pY2VzID0gZnVuY3Rpb24gX3JlbmRlckNob2ljZXMoKSB7XG4gICAgdmFyIF90aGlzMTIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJF9zdG9yZSA9IHRoaXMuX3N0b3JlLFxuICAgICAgICBhY3RpdmVHcm91cHMgPSBfdGhpcyRfc3RvcmUuYWN0aXZlR3JvdXBzLFxuICAgICAgICBhY3RpdmVDaG9pY2VzID0gX3RoaXMkX3N0b3JlLmFjdGl2ZUNob2ljZXM7XG4gICAgdmFyIGNob2ljZUxpc3RGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB0aGlzLmNob2ljZUxpc3QuY2xlYXIoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5yZXNldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMxMi5jaG9pY2VMaXN0LnNjcm9sbFRvVG9wKCk7XG4gICAgICB9KTtcbiAgICB9IC8vIElmIHdlIGhhdmUgZ3JvdXBlZCBvcHRpb25zXG5cblxuICAgIGlmIChhY3RpdmVHcm91cHMubGVuZ3RoID49IDEgJiYgIXRoaXMuX2lzU2VhcmNoaW5nKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGxhY2Vob2xkZXIgY2hvaWNlIGFsb25nIHdpdGggZ3JvdXBzXG4gICAgICB2YXIgYWN0aXZlUGxhY2Vob2xkZXJzID0gYWN0aXZlQ2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGFjdGl2ZUNob2ljZSkge1xuICAgICAgICByZXR1cm4gYWN0aXZlQ2hvaWNlLnBsYWNlaG9sZGVyID09PSB0cnVlICYmIGFjdGl2ZUNob2ljZS5ncm91cElkID09PSAtMTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYWN0aXZlUGxhY2Vob2xkZXJzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGNob2ljZUxpc3RGcmFnbWVudCA9IHRoaXMuX2NyZWF0ZUNob2ljZXNGcmFnbWVudChhY3RpdmVQbGFjZWhvbGRlcnMsIGNob2ljZUxpc3RGcmFnbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGNob2ljZUxpc3RGcmFnbWVudCA9IHRoaXMuX2NyZWF0ZUdyb3Vwc0ZyYWdtZW50KGFjdGl2ZUdyb3VwcywgYWN0aXZlQ2hvaWNlcywgY2hvaWNlTGlzdEZyYWdtZW50KTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZUNob2ljZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIGNob2ljZUxpc3RGcmFnbWVudCA9IHRoaXMuX2NyZWF0ZUNob2ljZXNGcmFnbWVudChhY3RpdmVDaG9pY2VzLCBjaG9pY2VMaXN0RnJhZ21lbnQpO1xuICAgIH0gLy8gSWYgd2UgaGF2ZSBjaG9pY2VzIHRvIHNob3dcblxuXG4gICAgaWYgKGNob2ljZUxpc3RGcmFnbWVudC5jaGlsZE5vZGVzICYmIGNob2ljZUxpc3RGcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBhY3RpdmVJdGVtcyA9IHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zO1xuXG4gICAgICB2YXIgY2FuQWRkSXRlbSA9IHRoaXMuX2NhbkFkZEl0ZW0oYWN0aXZlSXRlbXMsIHRoaXMuaW5wdXQudmFsdWUpOyAvLyAuLi5hbmQgd2UgY2FuIHNlbGVjdCB0aGVtXG5cblxuICAgICAgaWYgKGNhbkFkZEl0ZW0ucmVzcG9uc2UpIHtcbiAgICAgICAgLy8gLi4uYXBwZW5kIHRoZW0gYW5kIGhpZ2hsaWdodCB0aGUgZmlyc3QgY2hvaWNlXG4gICAgICAgIHRoaXMuY2hvaWNlTGlzdC5hcHBlbmQoY2hvaWNlTGlzdEZyYWdtZW50KTtcblxuICAgICAgICB0aGlzLl9oaWdobGlnaHRDaG9pY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIC4uLm90aGVyd2lzZSBzaG93IGEgbm90aWNlXG4gICAgICAgIHRoaXMuY2hvaWNlTGlzdC5hcHBlbmQodGhpcy5fZ2V0VGVtcGxhdGUoJ25vdGljZScsIGNhbkFkZEl0ZW0ubm90aWNlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSBzaG93IGEgbm90aWNlXG4gICAgICB2YXIgZHJvcGRvd25JdGVtO1xuICAgICAgdmFyIG5vdGljZTtcblxuICAgICAgaWYgKHRoaXMuX2lzU2VhcmNoaW5nKSB7XG4gICAgICAgIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy5ub1Jlc3VsdHNUZXh0ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcubm9SZXN1bHRzVGV4dCgpIDogdGhpcy5jb25maWcubm9SZXN1bHRzVGV4dDtcbiAgICAgICAgZHJvcGRvd25JdGVtID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ25vdGljZScsIG5vdGljZSwgJ25vLXJlc3VsdHMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy5ub0Nob2ljZXNUZXh0ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcubm9DaG9pY2VzVGV4dCgpIDogdGhpcy5jb25maWcubm9DaG9pY2VzVGV4dDtcbiAgICAgICAgZHJvcGRvd25JdGVtID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ25vdGljZScsIG5vdGljZSwgJ25vLWNob2ljZXMnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jaG9pY2VMaXN0LmFwcGVuZChkcm9wZG93bkl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX3JlbmRlckl0ZW1zID0gZnVuY3Rpb24gX3JlbmRlckl0ZW1zKCkge1xuICAgIHZhciBhY3RpdmVJdGVtcyA9IHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zIHx8IFtdO1xuICAgIHRoaXMuaXRlbUxpc3QuY2xlYXIoKTsgLy8gQ3JlYXRlIGEgZnJhZ21lbnQgdG8gc3RvcmUgb3VyIGxpc3QgaXRlbXNcbiAgICAvLyAoc28gd2UgZG9uJ3QgaGF2ZSB0byB1cGRhdGUgdGhlIERPTSBmb3IgZWFjaCBpdGVtKVxuXG4gICAgdmFyIGl0ZW1MaXN0RnJhZ21lbnQgPSB0aGlzLl9jcmVhdGVJdGVtc0ZyYWdtZW50KGFjdGl2ZUl0ZW1zKTsgLy8gSWYgd2UgaGF2ZSBpdGVtcyB0byBhZGQsIGFwcGVuZCB0aGVtXG5cblxuICAgIGlmIChpdGVtTGlzdEZyYWdtZW50LmNoaWxkTm9kZXMpIHtcbiAgICAgIHRoaXMuaXRlbUxpc3QuYXBwZW5kKGl0ZW1MaXN0RnJhZ21lbnQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2NyZWF0ZUdyb3Vwc0ZyYWdtZW50ID0gZnVuY3Rpb24gX2NyZWF0ZUdyb3Vwc0ZyYWdtZW50KGdyb3VwcywgY2hvaWNlcywgZnJhZ21lbnQpIHtcbiAgICB2YXIgX3RoaXMxMyA9IHRoaXM7XG5cbiAgICBpZiAoZnJhZ21lbnQgPT09IHZvaWQgMCkge1xuICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgfVxuXG4gICAgdmFyIGdldEdyb3VwQ2hvaWNlcyA9IGZ1bmN0aW9uIGdldEdyb3VwQ2hvaWNlcyhncm91cCkge1xuICAgICAgcmV0dXJuIGNob2ljZXMuZmlsdGVyKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgaWYgKF90aGlzMTMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBjaG9pY2UuZ3JvdXBJZCA9PT0gZ3JvdXAuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hvaWNlLmdyb3VwSWQgPT09IGdyb3VwLmlkICYmIChfdGhpczEzLmNvbmZpZy5yZW5kZXJTZWxlY3RlZENob2ljZXMgPT09ICdhbHdheXMnIHx8ICFjaG9pY2Uuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgfTsgLy8gSWYgc29ydGluZyBpcyBlbmFibGVkLCBmaWx0ZXIgZ3JvdXBzXG5cblxuICAgIGlmICh0aGlzLmNvbmZpZy5zaG91bGRTb3J0KSB7XG4gICAgICBncm91cHMuc29ydCh0aGlzLmNvbmZpZy5zb3J0ZXIpO1xuICAgIH1cblxuICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgdmFyIGdyb3VwQ2hvaWNlcyA9IGdldEdyb3VwQ2hvaWNlcyhncm91cCk7XG5cbiAgICAgIGlmIChncm91cENob2ljZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3duR3JvdXAgPSBfdGhpczEzLl9nZXRUZW1wbGF0ZSgnY2hvaWNlR3JvdXAnLCBncm91cCk7XG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd25Hcm91cCk7XG5cbiAgICAgICAgX3RoaXMxMy5fY3JlYXRlQ2hvaWNlc0ZyYWdtZW50KGdyb3VwQ2hvaWNlcywgZnJhZ21lbnQsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfTtcblxuICBfcHJvdG8uX2NyZWF0ZUNob2ljZXNGcmFnbWVudCA9IGZ1bmN0aW9uIF9jcmVhdGVDaG9pY2VzRnJhZ21lbnQoY2hvaWNlcywgZnJhZ21lbnQsIHdpdGhpbkdyb3VwKSB7XG4gICAgdmFyIF90aGlzMTQgPSB0aGlzO1xuXG4gICAgaWYgKGZyYWdtZW50ID09PSB2b2lkIDApIHtcbiAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIH1cblxuICAgIGlmICh3aXRoaW5Hcm91cCA9PT0gdm9pZCAwKSB7XG4gICAgICB3aXRoaW5Hcm91cCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIGZyYWdtZW50IHRvIHN0b3JlIG91ciBsaXN0IGl0ZW1zIChzbyB3ZSBkb24ndCBoYXZlIHRvIHVwZGF0ZSB0aGUgRE9NIGZvciBlYWNoIGl0ZW0pXG4gICAgdmFyIF90aGlzJGNvbmZpZyA9IHRoaXMuY29uZmlnLFxuICAgICAgICByZW5kZXJTZWxlY3RlZENob2ljZXMgPSBfdGhpcyRjb25maWcucmVuZGVyU2VsZWN0ZWRDaG9pY2VzLFxuICAgICAgICBzZWFyY2hSZXN1bHRMaW1pdCA9IF90aGlzJGNvbmZpZy5zZWFyY2hSZXN1bHRMaW1pdCxcbiAgICAgICAgcmVuZGVyQ2hvaWNlTGltaXQgPSBfdGhpcyRjb25maWcucmVuZGVyQ2hvaWNlTGltaXQ7XG4gICAgdmFyIGZpbHRlciA9IHRoaXMuX2lzU2VhcmNoaW5nID8gc29ydEJ5U2NvcmUgOiB0aGlzLmNvbmZpZy5zb3J0ZXI7XG5cbiAgICB2YXIgYXBwZW5kQ2hvaWNlID0gZnVuY3Rpb24gYXBwZW5kQ2hvaWNlKGNob2ljZSkge1xuICAgICAgdmFyIHNob3VsZFJlbmRlciA9IHJlbmRlclNlbGVjdGVkQ2hvaWNlcyA9PT0gJ2F1dG8nID8gX3RoaXMxNC5faXNTZWxlY3RPbmVFbGVtZW50IHx8ICFjaG9pY2Uuc2VsZWN0ZWQgOiB0cnVlO1xuXG4gICAgICBpZiAoc2hvdWxkUmVuZGVyKSB7XG4gICAgICAgIHZhciBkcm9wZG93bkl0ZW0gPSBfdGhpczE0Ll9nZXRUZW1wbGF0ZSgnY2hvaWNlJywgY2hvaWNlLCBfdGhpczE0LmNvbmZpZy5pdGVtU2VsZWN0VGV4dCk7XG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd25JdGVtKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlbmRlcmVyYWJsZUNob2ljZXMgPSBjaG9pY2VzO1xuXG4gICAgaWYgKHJlbmRlclNlbGVjdGVkQ2hvaWNlcyA9PT0gJ2F1dG8nICYmICF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHJlbmRlcmVyYWJsZUNob2ljZXMgPSBjaG9pY2VzLmZpbHRlcihmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgIHJldHVybiAhY2hvaWNlLnNlbGVjdGVkO1xuICAgICAgfSk7XG4gICAgfSAvLyBTcGxpdCBhcnJheSBpbnRvIHBsYWNlaG9sZGVycyBhbmQgXCJub3JtYWxcIiBjaG9pY2VzXG5cblxuICAgIHZhciBfcmVuZGVyZXJhYmxlQ2hvaWNlcyQgPSByZW5kZXJlcmFibGVDaG9pY2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjaG9pY2UpIHtcbiAgICAgIGlmIChjaG9pY2UucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgYWNjLnBsYWNlaG9sZGVyQ2hvaWNlcy5wdXNoKGNob2ljZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2Mubm9ybWFsQ2hvaWNlcy5wdXNoKGNob2ljZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge1xuICAgICAgcGxhY2Vob2xkZXJDaG9pY2VzOiBbXSxcbiAgICAgIG5vcm1hbENob2ljZXM6IFtdXG4gICAgfSksXG4gICAgICAgIHBsYWNlaG9sZGVyQ2hvaWNlcyA9IF9yZW5kZXJlcmFibGVDaG9pY2VzJC5wbGFjZWhvbGRlckNob2ljZXMsXG4gICAgICAgIG5vcm1hbENob2ljZXMgPSBfcmVuZGVyZXJhYmxlQ2hvaWNlcyQubm9ybWFsQ2hvaWNlczsgLy8gSWYgc29ydGluZyBpcyBlbmFibGVkIG9yIHRoZSB1c2VyIGlzIHNlYXJjaGluZywgZmlsdGVyIGNob2ljZXNcblxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNob3VsZFNvcnQgfHwgdGhpcy5faXNTZWFyY2hpbmcpIHtcbiAgICAgIG5vcm1hbENob2ljZXMuc29ydChmaWx0ZXIpO1xuICAgIH1cblxuICAgIHZhciBjaG9pY2VMaW1pdCA9IHJlbmRlcmVyYWJsZUNob2ljZXMubGVuZ3RoOyAvLyBQcmVwZW5kIHBsYWNlaG9sZWRlclxuXG4gICAgdmFyIHNvcnRlZENob2ljZXMgPSB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgPyBbXS5jb25jYXQocGxhY2Vob2xkZXJDaG9pY2VzLCBub3JtYWxDaG9pY2VzKSA6IG5vcm1hbENob2ljZXM7XG5cbiAgICBpZiAodGhpcy5faXNTZWFyY2hpbmcpIHtcbiAgICAgIGNob2ljZUxpbWl0ID0gc2VhcmNoUmVzdWx0TGltaXQ7XG4gICAgfSBlbHNlIGlmIChyZW5kZXJDaG9pY2VMaW1pdCAmJiByZW5kZXJDaG9pY2VMaW1pdCA+IDAgJiYgIXdpdGhpbkdyb3VwKSB7XG4gICAgICBjaG9pY2VMaW1pdCA9IHJlbmRlckNob2ljZUxpbWl0O1xuICAgIH0gLy8gQWRkIGVhY2ggY2hvaWNlIHRvIGRyb3Bkb3duIHdpdGhpbiByYW5nZVxuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNob2ljZUxpbWl0OyBpICs9IDEpIHtcbiAgICAgIGlmIChzb3J0ZWRDaG9pY2VzW2ldKSB7XG4gICAgICAgIGFwcGVuZENob2ljZShzb3J0ZWRDaG9pY2VzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH07XG5cbiAgX3Byb3RvLl9jcmVhdGVJdGVtc0ZyYWdtZW50ID0gZnVuY3Rpb24gX2NyZWF0ZUl0ZW1zRnJhZ21lbnQoaXRlbXMsIGZyYWdtZW50KSB7XG4gICAgdmFyIF90aGlzMTUgPSB0aGlzO1xuXG4gICAgaWYgKGZyYWdtZW50ID09PSB2b2lkIDApIHtcbiAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBmcmFnbWVudCB0byBhZGQgZWxlbWVudHMgdG9cbiAgICB2YXIgX3RoaXMkY29uZmlnMiA9IHRoaXMuY29uZmlnLFxuICAgICAgICBzaG91bGRTb3J0SXRlbXMgPSBfdGhpcyRjb25maWcyLnNob3VsZFNvcnRJdGVtcyxcbiAgICAgICAgc29ydGVyID0gX3RoaXMkY29uZmlnMi5zb3J0ZXIsXG4gICAgICAgIHJlbW92ZUl0ZW1CdXR0b24gPSBfdGhpcyRjb25maWcyLnJlbW92ZUl0ZW1CdXR0b247IC8vIElmIHNvcnRpbmcgaXMgZW5hYmxlZCwgZmlsdGVyIGl0ZW1zXG5cbiAgICBpZiAoc2hvdWxkU29ydEl0ZW1zICYmICF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIGl0ZW1zLnNvcnQoc29ydGVyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgaGlkZGVuIGlucHV0XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQudmFsdWUgPSBpdGVtcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXBkYXRlIHRoZSBvcHRpb25zIG9mIHRoZSBoaWRkZW4gaW5wdXRcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zID0gaXRlbXM7XG4gICAgfVxuXG4gICAgdmFyIGFkZEl0ZW1Ub0ZyYWdtZW50ID0gZnVuY3Rpb24gYWRkSXRlbVRvRnJhZ21lbnQoaXRlbSkge1xuICAgICAgLy8gQ3JlYXRlIG5ldyBsaXN0IGVsZW1lbnRcbiAgICAgIHZhciBsaXN0SXRlbSA9IF90aGlzMTUuX2dldFRlbXBsYXRlKCdpdGVtJywgaXRlbSwgcmVtb3ZlSXRlbUJ1dHRvbik7IC8vIEFwcGVuZCBpdCB0byBsaXN0XG5cblxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH07IC8vIEFkZCBlYWNoIGxpc3QgaXRlbSB0byBsaXN0XG5cblxuICAgIGl0ZW1zLmZvckVhY2goYWRkSXRlbVRvRnJhZ21lbnQpO1xuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfTtcblxuICBfcHJvdG8uX3RyaWdnZXJDaGFuZ2UgPSBmdW5jdGlvbiBfdHJpZ2dlckNoYW5nZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuY2hhbmdlLCB7XG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uX3NlbGVjdFBsYWNlaG9sZGVyQ2hvaWNlID0gZnVuY3Rpb24gX3NlbGVjdFBsYWNlaG9sZGVyQ2hvaWNlKCkge1xuICAgIHZhciBwbGFjZWhvbGRlckNob2ljZSA9IHRoaXMuX3N0b3JlLnBsYWNlaG9sZGVyQ2hvaWNlO1xuXG4gICAgaWYgKHBsYWNlaG9sZGVyQ2hvaWNlKSB7XG4gICAgICB0aGlzLl9hZGRJdGVtKHtcbiAgICAgICAgdmFsdWU6IHBsYWNlaG9sZGVyQ2hvaWNlLnZhbHVlLFxuICAgICAgICBsYWJlbDogcGxhY2Vob2xkZXJDaG9pY2UubGFiZWwsXG4gICAgICAgIGNob2ljZUlkOiBwbGFjZWhvbGRlckNob2ljZS5pZCxcbiAgICAgICAgZ3JvdXBJZDogcGxhY2Vob2xkZXJDaG9pY2UuZ3JvdXBJZCxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyQ2hvaWNlLnBsYWNlaG9sZGVyXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZShwbGFjZWhvbGRlckNob2ljZS52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5faGFuZGxlQnV0dG9uQWN0aW9uID0gZnVuY3Rpb24gX2hhbmRsZUJ1dHRvbkFjdGlvbihhY3RpdmVJdGVtcywgZWxlbWVudCkge1xuICAgIGlmICghYWN0aXZlSXRlbXMgfHwgIWVsZW1lbnQgfHwgIXRoaXMuY29uZmlnLnJlbW92ZUl0ZW1zIHx8ICF0aGlzLmNvbmZpZy5yZW1vdmVJdGVtQnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGl0ZW1JZCA9IGVsZW1lbnQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICB2YXIgaXRlbVRvUmVtb3ZlID0gYWN0aXZlSXRlbXMuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHBhcnNlSW50KGl0ZW1JZCwgMTApO1xuICAgIH0pOyAvLyBSZW1vdmUgaXRlbSBhc3NvY2lhdGVkIHdpdGggYnV0dG9uXG5cbiAgICB0aGlzLl9yZW1vdmVJdGVtKGl0ZW1Ub1JlbW92ZSk7XG5cbiAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlKGl0ZW1Ub1JlbW92ZS52YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl9zZWxlY3RQbGFjZWhvbGRlckNob2ljZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2hhbmRsZUl0ZW1BY3Rpb24gPSBmdW5jdGlvbiBfaGFuZGxlSXRlbUFjdGlvbihhY3RpdmVJdGVtcywgZWxlbWVudCwgaGFzU2hpZnRLZXkpIHtcbiAgICB2YXIgX3RoaXMxNiA9IHRoaXM7XG5cbiAgICBpZiAoaGFzU2hpZnRLZXkgPT09IHZvaWQgMCkge1xuICAgICAgaGFzU2hpZnRLZXkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUl0ZW1zIHx8ICFlbGVtZW50IHx8ICF0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyB8fCB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFzc2VkSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpOyAvLyBXZSBvbmx5IHdhbnQgdG8gc2VsZWN0IG9uZSBpdGVtIHdpdGggYSBjbGlja1xuICAgIC8vIHNvIHdlIGRlc2VsZWN0IGFueSBpdGVtcyB0aGF0IGFyZW4ndCB0aGUgdGFyZ2V0XG4gICAgLy8gdW5sZXNzIHNoaWZ0IGlzIGJlaW5nIHByZXNzZWRcblxuICAgIGFjdGl2ZUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBwYXJzZUludChwYXNzZWRJZCwgMTApICYmICFpdGVtLmhpZ2hsaWdodGVkKSB7XG4gICAgICAgIF90aGlzMTYuaGlnaGxpZ2h0SXRlbShpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoIWhhc1NoaWZ0S2V5ICYmIGl0ZW0uaGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgX3RoaXMxNi51bmhpZ2hsaWdodEl0ZW0oaXRlbSk7XG4gICAgICB9XG4gICAgfSk7IC8vIEZvY3VzIGlucHV0IGFzIHdpdGhvdXQgZm9jdXMsIGEgdXNlciBjYW5ub3QgZG8gYW55dGhpbmcgd2l0aCBhXG4gICAgLy8gaGlnaGxpZ2h0ZWQgaXRlbVxuXG4gICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICB9O1xuXG4gIF9wcm90by5faGFuZGxlQ2hvaWNlQWN0aW9uID0gZnVuY3Rpb24gX2hhbmRsZUNob2ljZUFjdGlvbihhY3RpdmVJdGVtcywgZWxlbWVudCkge1xuICAgIGlmICghYWN0aXZlSXRlbXMgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHdlIGFyZSBjbGlja2luZyBvbiBhbiBvcHRpb25cblxuXG4gICAgdmFyIGlkID0gZWxlbWVudC5kYXRhc2V0LmlkO1xuXG4gICAgdmFyIGNob2ljZSA9IHRoaXMuX3N0b3JlLmdldENob2ljZUJ5SWQoaWQpO1xuXG4gICAgaWYgKCFjaG9pY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFzc2VkS2V5Q29kZSA9IGFjdGl2ZUl0ZW1zWzBdICYmIGFjdGl2ZUl0ZW1zWzBdLmtleUNvZGUgPyBhY3RpdmVJdGVtc1swXS5rZXlDb2RlIDogbnVsbDtcbiAgICB2YXIgaGFzQWN0aXZlRHJvcGRvd24gPSB0aGlzLmRyb3Bkb3duLmlzQWN0aXZlOyAvLyBVcGRhdGUgY2hvaWNlIGtleUNvZGVcblxuICAgIGNob2ljZS5rZXlDb2RlID0gcGFzc2VkS2V5Q29kZTtcbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5jaG9pY2UsIHtcbiAgICAgIGNob2ljZTogY2hvaWNlXG4gICAgfSk7XG5cbiAgICBpZiAoIWNob2ljZS5zZWxlY3RlZCAmJiAhY2hvaWNlLmRpc2FibGVkKSB7XG4gICAgICB2YXIgY2FuQWRkSXRlbSA9IHRoaXMuX2NhbkFkZEl0ZW0oYWN0aXZlSXRlbXMsIGNob2ljZS52YWx1ZSk7XG5cbiAgICAgIGlmIChjYW5BZGRJdGVtLnJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuX2FkZEl0ZW0oe1xuICAgICAgICAgIHZhbHVlOiBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGNob2ljZS5sYWJlbCxcbiAgICAgICAgICBjaG9pY2VJZDogY2hvaWNlLmlkLFxuICAgICAgICAgIGdyb3VwSWQ6IGNob2ljZS5ncm91cElkLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGNob2ljZS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaG9pY2UucGxhY2Vob2xkZXIsXG4gICAgICAgICAga2V5Q29kZTogY2hvaWNlLmtleUNvZGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZShjaG9pY2UudmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2xlYXJJbnB1dCgpOyAvLyBXZSB3YW50IHRvIGNsb3NlIHRoZSBkcm9wZG93biBpZiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgc2luZ2xlIHNlbGVjdCBib3hcblxuICAgIGlmIChoYXNBY3RpdmVEcm9wZG93biAmJiB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2hhbmRsZUJhY2tzcGFjZSA9IGZ1bmN0aW9uIF9oYW5kbGVCYWNrc3BhY2UoYWN0aXZlSXRlbXMpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnJlbW92ZUl0ZW1zIHx8ICFhY3RpdmVJdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsYXN0SXRlbSA9IGFjdGl2ZUl0ZW1zW2FjdGl2ZUl0ZW1zLmxlbmd0aCAtIDFdO1xuICAgIHZhciBoYXNIaWdobGlnaHRlZEl0ZW1zID0gYWN0aXZlSXRlbXMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uaGlnaGxpZ2h0ZWQ7XG4gICAgfSk7IC8vIElmIGVkaXRpbmcgdGhlIGxhc3QgaXRlbSBpcyBhbGxvd2VkIGFuZCB0aGVyZSBhcmUgbm90IG90aGVyIHNlbGVjdGVkIGl0ZW1zLFxuICAgIC8vIHdlIGNhbiBlZGl0IHRoZSBpdGVtIHZhbHVlLiBPdGhlcndpc2UgaWYgd2UgY2FuIHJlbW92ZSBpdGVtcywgcmVtb3ZlIGFsbCBzZWxlY3RlZCBpdGVtc1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmVkaXRJdGVtcyAmJiAhaGFzSGlnaGxpZ2h0ZWRJdGVtcyAmJiBsYXN0SXRlbSkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IGxhc3RJdGVtLnZhbHVlO1xuICAgICAgdGhpcy5pbnB1dC5zZXRXaWR0aCgpO1xuXG4gICAgICB0aGlzLl9yZW1vdmVJdGVtKGxhc3RJdGVtKTtcblxuICAgICAgdGhpcy5fdHJpZ2dlckNoYW5nZShsYXN0SXRlbS52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaGFzSGlnaGxpZ2h0ZWRJdGVtcykge1xuICAgICAgICAvLyBIaWdobGlnaHQgbGFzdCBpdGVtIGlmIG5vbmUgYWxyZWFkeSBoaWdobGlnaHRlZFxuICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0obGFzdEl0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHRlZEl0ZW1zKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX3N0YXJ0TG9hZGluZyA9IGZ1bmN0aW9uIF9zdGFydExvYWRpbmcoKSB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goc2V0SXNMb2FkaW5nKHRydWUpKTtcbiAgfTtcblxuICBfcHJvdG8uX3N0b3BMb2FkaW5nID0gZnVuY3Rpb24gX3N0b3BMb2FkaW5nKCkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHNldElzTG9hZGluZyhmYWxzZSkpO1xuICB9O1xuXG4gIF9wcm90by5faGFuZGxlTG9hZGluZ1N0YXRlID0gZnVuY3Rpb24gX2hhbmRsZUxvYWRpbmdTdGF0ZShzZXRMb2FkaW5nKSB7XG4gICAgaWYgKHNldExvYWRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgc2V0TG9hZGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHBsYWNlaG9sZGVySXRlbSA9IHRoaXMuaXRlbUxpc3QuZ2V0Q2hpbGQoXCIuXCIgKyB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLnBsYWNlaG9sZGVyKTtcblxuICAgIGlmIChzZXRMb2FkaW5nKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuYWRkTG9hZGluZ1N0YXRlKCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFwbGFjZWhvbGRlckl0ZW0pIHtcbiAgICAgICAgICBwbGFjZWhvbGRlckl0ZW0gPSB0aGlzLl9nZXRUZW1wbGF0ZSgncGxhY2Vob2xkZXInLCB0aGlzLmNvbmZpZy5sb2FkaW5nVGV4dCk7XG4gICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcHBlbmQocGxhY2Vob2xkZXJJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGFjZWhvbGRlckl0ZW0uaW5uZXJIVE1MID0gdGhpcy5jb25maWcubG9hZGluZ1RleHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmNvbmZpZy5sb2FkaW5nVGV4dDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIucmVtb3ZlTG9hZGluZ1N0YXRlKCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgICAgcGxhY2Vob2xkZXJJdGVtLmlubmVySFRNTCA9IHRoaXMuX3BsYWNlaG9sZGVyVmFsdWUgfHwgJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZSB8fCAnJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9oYW5kbGVTZWFyY2ggPSBmdW5jdGlvbiBfaGFuZGxlU2VhcmNoKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdGhpcy5pbnB1dC5pc0ZvY3Vzc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNob2ljZXMgPSB0aGlzLl9zdG9yZS5jaG9pY2VzO1xuICAgIHZhciBfdGhpcyRjb25maWczID0gdGhpcy5jb25maWcsXG4gICAgICAgIHNlYXJjaEZsb29yID0gX3RoaXMkY29uZmlnMy5zZWFyY2hGbG9vcixcbiAgICAgICAgc2VhcmNoQ2hvaWNlcyA9IF90aGlzJGNvbmZpZzMuc2VhcmNoQ2hvaWNlcztcbiAgICB2YXIgaGFzVW5hY3RpdmVDaG9pY2VzID0gY2hvaWNlcy5zb21lKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgIHJldHVybiAhb3B0aW9uLmFjdGl2ZTtcbiAgICB9KTsgLy8gQ2hlY2sgdGhhdCB3ZSBoYXZlIGEgdmFsdWUgdG8gc2VhcmNoIGFuZCB0aGUgaW5wdXQgd2FzIGFuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJcblxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPj0gc2VhcmNoRmxvb3IpIHtcbiAgICAgIHZhciByZXN1bHRDb3VudCA9IHNlYXJjaENob2ljZXMgPyB0aGlzLl9zZWFyY2hDaG9pY2VzKHZhbHVlKSA6IDA7IC8vIFRyaWdnZXIgc2VhcmNoIGV2ZW50XG5cbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLnNlYXJjaCwge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHJlc3VsdENvdW50OiByZXN1bHRDb3VudFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNVbmFjdGl2ZUNob2ljZXMpIHtcbiAgICAgIC8vIE90aGVyd2lzZSByZXNldCBjaG9pY2VzIHRvIGFjdGl2ZVxuICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcblxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goY2hvaWNlc19hY3RpdmF0ZUNob2ljZXModHJ1ZSkpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2NhbkFkZEl0ZW0gPSBmdW5jdGlvbiBfY2FuQWRkSXRlbShhY3RpdmVJdGVtcywgdmFsdWUpIHtcbiAgICB2YXIgY2FuQWRkSXRlbSA9IHRydWU7XG4gICAgdmFyIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy5hZGRJdGVtVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLmFkZEl0ZW1UZXh0KHZhbHVlKSA6IHRoaXMuY29uZmlnLmFkZEl0ZW1UZXh0O1xuXG4gICAgaWYgKCF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHZhciBpc0R1cGxpY2F0ZVZhbHVlID0gZXhpc3RzSW5BcnJheShhY3RpdmVJdGVtcywgdmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5jb25maWcubWF4SXRlbUNvdW50ID4gMCAmJiB0aGlzLmNvbmZpZy5tYXhJdGVtQ291bnQgPD0gYWN0aXZlSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgbWF4IGVudHJ5IGxpbWl0IGFuZCB3ZSBoYXZlIHJlYWNoZWQgdGhhdCBsaW1pdFxuICAgICAgICAvLyBkb24ndCB1cGRhdGVcbiAgICAgICAgY2FuQWRkSXRlbSA9IGZhbHNlO1xuICAgICAgICBub3RpY2UgPSB0eXBlb2YgdGhpcy5jb25maWcubWF4SXRlbVRleHQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5tYXhJdGVtVGV4dCh0aGlzLmNvbmZpZy5tYXhJdGVtQ291bnQpIDogdGhpcy5jb25maWcubWF4SXRlbVRleHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5jb25maWcuZHVwbGljYXRlSXRlbXNBbGxvd2VkICYmIGlzRHVwbGljYXRlVmFsdWUgJiYgY2FuQWRkSXRlbSkge1xuICAgICAgICBjYW5BZGRJdGVtID0gZmFsc2U7XG4gICAgICAgIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy51bmlxdWVJdGVtVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnVuaXF1ZUl0ZW1UZXh0KHZhbHVlKSA6IHRoaXMuY29uZmlnLnVuaXF1ZUl0ZW1UZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCAmJiB0aGlzLmNvbmZpZy5hZGRJdGVtcyAmJiBjYW5BZGRJdGVtICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5hZGRJdGVtRmlsdGVyID09PSAnZnVuY3Rpb24nICYmICF0aGlzLmNvbmZpZy5hZGRJdGVtRmlsdGVyKHZhbHVlKSkge1xuICAgICAgICBjYW5BZGRJdGVtID0gZmFsc2U7XG4gICAgICAgIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy5jdXN0b21BZGRJdGVtVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLmN1c3RvbUFkZEl0ZW1UZXh0KHZhbHVlKSA6IHRoaXMuY29uZmlnLmN1c3RvbUFkZEl0ZW1UZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZXNwb25zZTogY2FuQWRkSXRlbSxcbiAgICAgIG5vdGljZTogbm90aWNlXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uX3NlYXJjaENob2ljZXMgPSBmdW5jdGlvbiBfc2VhcmNoQ2hvaWNlcyh2YWx1ZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZS50cmltKCkgOiB2YWx1ZTtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdHlwZW9mIHRoaXMuX2N1cnJlbnRWYWx1ZSA9PT0gJ3N0cmluZycgPyB0aGlzLl9jdXJyZW50VmFsdWUudHJpbSgpIDogdGhpcy5fY3VycmVudFZhbHVlO1xuXG4gICAgaWYgKG5ld1ZhbHVlLmxlbmd0aCA8IDEgJiYgbmV3VmFsdWUgPT09IGN1cnJlbnRWYWx1ZSArIFwiIFwiKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IC8vIElmIG5ldyB2YWx1ZSBtYXRjaGVzIHRoZSBkZXNpcmVkIGxlbmd0aCBhbmQgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHZhbHVlIHdpdGggYSBzcGFjZVxuXG5cbiAgICB2YXIgaGF5c3RhY2sgPSB0aGlzLl9zdG9yZS5zZWFyY2hhYmxlQ2hvaWNlcztcbiAgICB2YXIgbmVlZGxlID0gbmV3VmFsdWU7XG4gICAgdmFyIGtleXMgPSBbXS5jb25jYXQodGhpcy5jb25maWcuc2VhcmNoRmllbGRzKTtcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcuZnVzZU9wdGlvbnMsIHtcbiAgICAgIGtleXM6IGtleXNcbiAgICB9KTtcbiAgICB2YXIgZnVzZSA9IG5ldyBmdXNlX2RlZmF1bHQuYShoYXlzdGFjaywgb3B0aW9ucyk7XG4gICAgdmFyIHJlc3VsdHMgPSBmdXNlLnNlYXJjaChuZWVkbGUpO1xuICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uID0gMDtcbiAgICB0aGlzLl9pc1NlYXJjaGluZyA9IHRydWU7XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjaG9pY2VzX2ZpbHRlckNob2ljZXMocmVzdWx0cykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9kb2N1bWVudCA9IGRvY3VtZW50LFxuICAgICAgICBkb2N1bWVudEVsZW1lbnQgPSBfZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvLyBjYXB0dXJlIGV2ZW50cyAtIGNhbiBjYW5jZWwgZXZlbnQgcHJvY2Vzc2luZyBvciBwcm9wYWdhdGlvblxuXG4gICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fb25Ub3VjaEVuZCwgdHJ1ZSk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24sIHRydWUpO1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93biwgdHJ1ZSk7IC8vIHBhc3NpdmUgZXZlbnRzIC0gZG9lc24ndCBjYWxsIGBwcmV2ZW50RGVmYXVsdGAgb3IgYHN0b3BQcm9wYWdhdGlvbmBcblxuICAgIGRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2ssIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICBkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5fb25Nb3VzZU92ZXIsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1ciwge1xuICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cywge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5pbnB1dC5lbGVtZW50LmZvcm0pIHtcbiAgICAgIHRoaXMuaW5wdXQuZWxlbWVudC5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5fb25Gb3JtUmVzZXQsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVycygpO1xuICB9O1xuXG4gIF9wcm90by5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9kb2N1bWVudDIgPSBkb2N1bWVudCxcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50ID0gX2RvY3VtZW50Mi5kb2N1bWVudEVsZW1lbnQ7XG4gICAgZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fb25Ub3VjaEVuZCwgdHJ1ZSk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24sIHRydWUpO1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25DbGljayk7XG4gICAgZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5fb25Nb3VzZU92ZXIpO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cyk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1cik7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcCk7XG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cyk7XG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIpO1xuXG4gICAgaWYgKHRoaXMuaW5wdXQuZWxlbWVudC5mb3JtKSB7XG4gICAgICB0aGlzLmlucHV0LmVsZW1lbnQuZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNldCcsIHRoaXMuX29uRm9ybVJlc2V0KTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8uX29uS2V5RG93biA9IGZ1bmN0aW9uIF9vbktleURvd24oZXZlbnQpIHtcbiAgICB2YXIgX2tleURvd25BY3Rpb25zO1xuXG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAga2V5Q29kZSA9IGV2ZW50LmtleUNvZGUsXG4gICAgICAgIGN0cmxLZXkgPSBldmVudC5jdHJsS2V5LFxuICAgICAgICBtZXRhS2V5ID0gZXZlbnQubWV0YUtleTtcbiAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcbiAgICB2YXIgaGFzRm9jdXNlZElucHV0ID0gdGhpcy5pbnB1dC5pc0ZvY3Vzc2VkO1xuICAgIHZhciBoYXNBY3RpdmVEcm9wZG93biA9IHRoaXMuZHJvcGRvd24uaXNBY3RpdmU7XG4gICAgdmFyIGhhc0l0ZW1zID0gdGhpcy5pdGVtTGlzdC5oYXNDaGlsZHJlbigpO1xuICAgIHZhciBrZXlTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleUNvZGUpO1xuICAgIHZhciBCQUNLX0tFWSA9IEtFWV9DT0RFUy5CQUNLX0tFWSxcbiAgICAgICAgREVMRVRFX0tFWSA9IEtFWV9DT0RFUy5ERUxFVEVfS0VZLFxuICAgICAgICBFTlRFUl9LRVkgPSBLRVlfQ09ERVMuRU5URVJfS0VZLFxuICAgICAgICBBX0tFWSA9IEtFWV9DT0RFUy5BX0tFWSxcbiAgICAgICAgRVNDX0tFWSA9IEtFWV9DT0RFUy5FU0NfS0VZLFxuICAgICAgICBVUF9LRVkgPSBLRVlfQ09ERVMuVVBfS0VZLFxuICAgICAgICBET1dOX0tFWSA9IEtFWV9DT0RFUy5ET1dOX0tFWSxcbiAgICAgICAgUEFHRV9VUF9LRVkgPSBLRVlfQ09ERVMuUEFHRV9VUF9LRVksXG4gICAgICAgIFBBR0VfRE9XTl9LRVkgPSBLRVlfQ09ERVMuUEFHRV9ET1dOX0tFWTtcbiAgICB2YXIgaGFzQ3RybERvd25LZXlQcmVzc2VkID0gY3RybEtleSB8fCBtZXRhS2V5OyAvLyBJZiBhIHVzZXIgaXMgdHlwaW5nIGFuZCB0aGUgZHJvcGRvd24gaXMgbm90IGFjdGl2ZVxuXG4gICAgaWYgKCF0aGlzLl9pc1RleHRFbGVtZW50ICYmIC9bYS16QS1aMC05LV8gXS8udGVzdChrZXlTdHJpbmcpKSB7XG4gICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgIH0gLy8gTWFwIGtleXMgdG8ga2V5IGFjdGlvbnNcblxuXG4gICAgdmFyIGtleURvd25BY3Rpb25zID0gKF9rZXlEb3duQWN0aW9ucyA9IHt9LCBfa2V5RG93bkFjdGlvbnNbQV9LRVldID0gdGhpcy5fb25BS2V5LCBfa2V5RG93bkFjdGlvbnNbRU5URVJfS0VZXSA9IHRoaXMuX29uRW50ZXJLZXksIF9rZXlEb3duQWN0aW9uc1tFU0NfS0VZXSA9IHRoaXMuX29uRXNjYXBlS2V5LCBfa2V5RG93bkFjdGlvbnNbVVBfS0VZXSA9IHRoaXMuX29uRGlyZWN0aW9uS2V5LCBfa2V5RG93bkFjdGlvbnNbUEFHRV9VUF9LRVldID0gdGhpcy5fb25EaXJlY3Rpb25LZXksIF9rZXlEb3duQWN0aW9uc1tET1dOX0tFWV0gPSB0aGlzLl9vbkRpcmVjdGlvbktleSwgX2tleURvd25BY3Rpb25zW1BBR0VfRE9XTl9LRVldID0gdGhpcy5fb25EaXJlY3Rpb25LZXksIF9rZXlEb3duQWN0aW9uc1tERUxFVEVfS0VZXSA9IHRoaXMuX29uRGVsZXRlS2V5LCBfa2V5RG93bkFjdGlvbnNbQkFDS19LRVldID0gdGhpcy5fb25EZWxldGVLZXksIF9rZXlEb3duQWN0aW9ucyk7IC8vIElmIGtleWNvZGUgaGFzIGEgZnVuY3Rpb24sIHJ1biBpdFxuXG4gICAgaWYgKGtleURvd25BY3Rpb25zW2tleUNvZGVdKSB7XG4gICAgICBrZXlEb3duQWN0aW9uc1trZXlDb2RlXSh7XG4gICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGtleUNvZGU6IGtleUNvZGUsXG4gICAgICAgIG1ldGFLZXk6IG1ldGFLZXksXG4gICAgICAgIGFjdGl2ZUl0ZW1zOiBhY3RpdmVJdGVtcyxcbiAgICAgICAgaGFzRm9jdXNlZElucHV0OiBoYXNGb2N1c2VkSW5wdXQsXG4gICAgICAgIGhhc0FjdGl2ZURyb3Bkb3duOiBoYXNBY3RpdmVEcm9wZG93bixcbiAgICAgICAgaGFzSXRlbXM6IGhhc0l0ZW1zLFxuICAgICAgICBoYXNDdHJsRG93bktleVByZXNzZWQ6IGhhc0N0cmxEb3duS2V5UHJlc3NlZFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25LZXlVcCA9IGZ1bmN0aW9uIF9vbktleVVwKF9yZWYyKSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWYyLnRhcmdldCxcbiAgICAgICAga2V5Q29kZSA9IF9yZWYyLmtleUNvZGU7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcblxuICAgIHZhciBjYW5BZGRJdGVtID0gdGhpcy5fY2FuQWRkSXRlbShhY3RpdmVJdGVtcywgdmFsdWUpO1xuXG4gICAgdmFyIGJhY2tLZXkgPSBLRVlfQ09ERVMuQkFDS19LRVksXG4gICAgICAgIGRlbGV0ZUtleSA9IEtFWV9DT0RFUy5ERUxFVEVfS0VZOyAvLyBXZSBhcmUgdHlwaW5nIGludG8gYSB0ZXh0IGlucHV0IGFuZCBoYXZlIGEgdmFsdWUsIHdlIHdhbnQgdG8gc2hvdyBhIGRyb3Bkb3duXG4gICAgLy8gbm90aWNlLiBPdGhlcndpc2UgaGlkZSB0aGUgZHJvcGRvd25cblxuICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICB2YXIgY2FuU2hvd0Ryb3Bkb3duTm90aWNlID0gY2FuQWRkSXRlbS5ub3RpY2UgJiYgdmFsdWU7XG5cbiAgICAgIGlmIChjYW5TaG93RHJvcGRvd25Ob3RpY2UpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3duSXRlbSA9IHRoaXMuX2dldFRlbXBsYXRlKCdub3RpY2UnLCBjYW5BZGRJdGVtLm5vdGljZSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bi5lbGVtZW50LmlubmVySFRNTCA9IGRyb3Bkb3duSXRlbS5vdXRlckhUTUw7XG4gICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24odHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1c2VySGFzUmVtb3ZlZFZhbHVlID0gKGtleUNvZGUgPT09IGJhY2tLZXkgfHwga2V5Q29kZSA9PT0gZGVsZXRlS2V5KSAmJiAhdGFyZ2V0LnZhbHVlO1xuICAgICAgdmFyIGNhblJlYWN0aXZhdGVDaG9pY2VzID0gIXRoaXMuX2lzVGV4dEVsZW1lbnQgJiYgdGhpcy5faXNTZWFyY2hpbmc7XG4gICAgICB2YXIgY2FuU2VhcmNoID0gdGhpcy5fY2FuU2VhcmNoICYmIGNhbkFkZEl0ZW0ucmVzcG9uc2U7XG5cbiAgICAgIGlmICh1c2VySGFzUmVtb3ZlZFZhbHVlICYmIGNhblJlYWN0aXZhdGVDaG9pY2VzKSB7XG4gICAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goY2hvaWNlc19hY3RpdmF0ZUNob2ljZXModHJ1ZSkpO1xuICAgICAgfSBlbHNlIGlmIChjYW5TZWFyY2gpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlU2VhcmNoKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2NhblNlYXJjaCA9IHRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQ7XG4gIH07XG5cbiAgX3Byb3RvLl9vbkFLZXkgPSBmdW5jdGlvbiBfb25BS2V5KF9yZWYzKSB7XG4gICAgdmFyIGhhc0l0ZW1zID0gX3JlZjMuaGFzSXRlbXMsXG4gICAgICAgIGhhc0N0cmxEb3duS2V5UHJlc3NlZCA9IF9yZWYzLmhhc0N0cmxEb3duS2V5UHJlc3NlZDtcblxuICAgIC8vIElmIENUUkwgKyBBIG9yIENNRCArIEEgaGF2ZSBiZWVuIHByZXNzZWQgYW5kIHRoZXJlIGFyZSBpdGVtcyB0byBzZWxlY3RcbiAgICBpZiAoaGFzQ3RybERvd25LZXlQcmVzc2VkICYmIGhhc0l0ZW1zKSB7XG4gICAgICB0aGlzLl9jYW5TZWFyY2ggPSBmYWxzZTtcbiAgICAgIHZhciBzaG91bGRIaWdodGxpZ2h0QWxsID0gdGhpcy5jb25maWcucmVtb3ZlSXRlbXMgJiYgIXRoaXMuaW5wdXQudmFsdWUgJiYgdGhpcy5pbnB1dC5lbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICBpZiAoc2hvdWxkSGlnaHRsaWdodEFsbCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodEFsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRW50ZXJLZXkgPSBmdW5jdGlvbiBfb25FbnRlcktleShfcmVmNCkge1xuICAgIHZhciBldmVudCA9IF9yZWY0LmV2ZW50LFxuICAgICAgICB0YXJnZXQgPSBfcmVmNC50YXJnZXQsXG4gICAgICAgIGFjdGl2ZUl0ZW1zID0gX3JlZjQuYWN0aXZlSXRlbXMsXG4gICAgICAgIGhhc0FjdGl2ZURyb3Bkb3duID0gX3JlZjQuaGFzQWN0aXZlRHJvcGRvd247XG4gICAgdmFyIGVudGVyS2V5ID0gS0VZX0NPREVTLkVOVEVSX0tFWTtcbiAgICB2YXIgdGFyZ2V0V2FzQnV0dG9uID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1idXR0b24nKTtcblxuICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50ICYmIHRhcmdldC52YWx1ZSkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcblxuICAgICAgdmFyIGNhbkFkZEl0ZW0gPSB0aGlzLl9jYW5BZGRJdGVtKGFjdGl2ZUl0ZW1zLCB2YWx1ZSk7XG5cbiAgICAgIGlmIChjYW5BZGRJdGVtLnJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuXG4gICAgICAgIHRoaXMuX2FkZEl0ZW0oe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlKHZhbHVlKTtcblxuICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0V2FzQnV0dG9uKSB7XG4gICAgICB0aGlzLl9oYW5kbGVCdXR0b25BY3Rpb24oYWN0aXZlSXRlbXMsIHRhcmdldCk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGhhc0FjdGl2ZURyb3Bkb3duKSB7XG4gICAgICB2YXIgaGlnaGxpZ2h0ZWRDaG9pY2UgPSB0aGlzLmRyb3Bkb3duLmdldENoaWxkKFwiLlwiICsgdGhpcy5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKTtcblxuICAgICAgaWYgKGhpZ2hsaWdodGVkQ2hvaWNlKSB7XG4gICAgICAgIC8vIGFkZCBlbnRlciBrZXlDb2RlIHZhbHVlXG4gICAgICAgIGlmIChhY3RpdmVJdGVtc1swXSkge1xuICAgICAgICAgIGFjdGl2ZUl0ZW1zWzBdLmtleUNvZGUgPSBlbnRlcktleTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGFuZGxlQ2hvaWNlQWN0aW9uKGFjdGl2ZUl0ZW1zLCBoaWdobGlnaHRlZENob2ljZSk7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRXNjYXBlS2V5ID0gZnVuY3Rpb24gX29uRXNjYXBlS2V5KF9yZWY1KSB7XG4gICAgdmFyIGhhc0FjdGl2ZURyb3Bkb3duID0gX3JlZjUuaGFzQWN0aXZlRHJvcGRvd247XG5cbiAgICBpZiAoaGFzQWN0aXZlRHJvcGRvd24pIHtcbiAgICAgIHRoaXMuaGlkZURyb3Bkb3duKHRydWUpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRGlyZWN0aW9uS2V5ID0gZnVuY3Rpb24gX29uRGlyZWN0aW9uS2V5KF9yZWY2KSB7XG4gICAgdmFyIGV2ZW50ID0gX3JlZjYuZXZlbnQsXG4gICAgICAgIGhhc0FjdGl2ZURyb3Bkb3duID0gX3JlZjYuaGFzQWN0aXZlRHJvcGRvd24sXG4gICAgICAgIGtleUNvZGUgPSBfcmVmNi5rZXlDb2RlLFxuICAgICAgICBtZXRhS2V5ID0gX3JlZjYubWV0YUtleTtcbiAgICB2YXIgZG93bktleSA9IEtFWV9DT0RFUy5ET1dOX0tFWSxcbiAgICAgICAgcGFnZVVwS2V5ID0gS0VZX0NPREVTLlBBR0VfVVBfS0VZLFxuICAgICAgICBwYWdlRG93bktleSA9IEtFWV9DT0RFUy5QQUdFX0RPV05fS0VZOyAvLyBJZiB1cCBvciBkb3duIGtleSBpcyBwcmVzc2VkLCB0cmF2ZXJzZSB0aHJvdWdoIG9wdGlvbnNcblxuICAgIGlmIChoYXNBY3RpdmVEcm9wZG93biB8fCB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICB0aGlzLl9jYW5TZWFyY2ggPSBmYWxzZTtcbiAgICAgIHZhciBkaXJlY3Rpb25JbnQgPSBrZXlDb2RlID09PSBkb3duS2V5IHx8IGtleUNvZGUgPT09IHBhZ2VEb3duS2V5ID8gMSA6IC0xO1xuICAgICAgdmFyIHNraXBLZXkgPSBtZXRhS2V5IHx8IGtleUNvZGUgPT09IHBhZ2VEb3duS2V5IHx8IGtleUNvZGUgPT09IHBhZ2VVcEtleTtcbiAgICAgIHZhciBzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllciA9ICdbZGF0YS1jaG9pY2Utc2VsZWN0YWJsZV0nO1xuICAgICAgdmFyIG5leHRFbDtcblxuICAgICAgaWYgKHNraXBLZXkpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbkludCA+IDApIHtcbiAgICAgICAgICBuZXh0RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllciArIFwiOmxhc3Qtb2YtdHlwZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXJyZW50RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIHRoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRFbCkge1xuICAgICAgICAgIG5leHRFbCA9IGdldEFkamFjZW50RWwoY3VycmVudEVsLCBzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllciwgZGlyZWN0aW9uSW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0RWwgPSB0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RhYmxlQ2hvaWNlSWRlbnRpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRFbCkge1xuICAgICAgICAvLyBXZSBwcmV2ZW50IGRlZmF1bHQgdG8gc3RvcCB0aGUgY3Vyc29yIG1vdmluZ1xuICAgICAgICAvLyB3aGVuIHByZXNzaW5nIHRoZSBhcnJvd1xuICAgICAgICBpZiAoIWlzU2Nyb2xsZWRJbnRvVmlldyhuZXh0RWwsIHRoaXMuY2hvaWNlTGlzdC5lbGVtZW50LCBkaXJlY3Rpb25JbnQpKSB7XG4gICAgICAgICAgdGhpcy5jaG9pY2VMaXN0LnNjcm9sbFRvQ2hpbGRFbGVtZW50KG5leHRFbCwgZGlyZWN0aW9uSW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodENob2ljZShuZXh0RWwpO1xuICAgICAgfSAvLyBQcmV2ZW50IGRlZmF1bHQgdG8gbWFpbnRhaW4gY3Vyc29yIHBvc2l0aW9uIHdoaWxzdFxuICAgICAgLy8gdHJhdmVyc2luZyBkcm9wZG93biBvcHRpb25zXG5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbkRlbGV0ZUtleSA9IGZ1bmN0aW9uIF9vbkRlbGV0ZUtleShfcmVmNykge1xuICAgIHZhciBldmVudCA9IF9yZWY3LmV2ZW50LFxuICAgICAgICB0YXJnZXQgPSBfcmVmNy50YXJnZXQsXG4gICAgICAgIGhhc0ZvY3VzZWRJbnB1dCA9IF9yZWY3Lmhhc0ZvY3VzZWRJbnB1dCxcbiAgICAgICAgYWN0aXZlSXRlbXMgPSBfcmVmNy5hY3RpdmVJdGVtcztcblxuICAgIC8vIElmIGJhY2tzcGFjZSBvciBkZWxldGUga2V5IGlzIHByZXNzZWQgYW5kIHRoZSBpbnB1dCBoYXMgbm8gdmFsdWVcbiAgICBpZiAoaGFzRm9jdXNlZElucHV0ICYmICF0YXJnZXQudmFsdWUgJiYgIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5faGFuZGxlQmFja3NwYWNlKGFjdGl2ZUl0ZW1zKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIF9vblRvdWNoTW92ZSgpIHtcbiAgICBpZiAodGhpcy5fd2FzVGFwKSB7XG4gICAgICB0aGlzLl93YXNUYXAgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vblRvdWNoRW5kID0gZnVuY3Rpb24gX29uVG91Y2hFbmQoZXZlbnQpIHtcbiAgICB2YXIgX3JlZjggPSBldmVudCB8fCBldmVudC50b3VjaGVzWzBdLFxuICAgICAgICB0YXJnZXQgPSBfcmVmOC50YXJnZXQ7XG5cbiAgICB2YXIgdG91Y2hXYXNXaXRoaW5Db250YWluZXIgPSB0aGlzLl93YXNUYXAgJiYgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICBpZiAodG91Y2hXYXNXaXRoaW5Db250YWluZXIpIHtcbiAgICAgIHZhciBjb250YWluZXJXYXNFeGFjdFRhcmdldCA9IHRhcmdldCA9PT0gdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50IHx8IHRhcmdldCA9PT0gdGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50O1xuXG4gICAgICBpZiAoY29udGFpbmVyV2FzRXhhY3RUYXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFByZXZlbnRzIGZvY3VzIGV2ZW50IGZpcmluZ1xuXG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHRoaXMuX3dhc1RhcCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEhhbmRsZXMgbW91c2Vkb3duIGV2ZW50IGluIGNhcHR1cmUgbW9kZSBmb3IgY29udGFpbmV0T3V0ZXIuZWxlbWVudFxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9vbk1vdXNlRG93biA9IGZ1bmN0aW9uIF9vbk1vdXNlRG93bihldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHdlIGhhdmUgb3VyIG1vdXNlIGRvd24gb24gdGhlIHNjcm9sbGJhciBhbmQgYXJlIG9uIElFMTEuLi5cblxuXG4gICAgaWYgKElTX0lFMTEgJiYgdGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgLy8gY2hlY2sgaWYgY2xpY2sgd2FzIG9uIGEgc2Nyb2xsYmFyIGFyZWFcbiAgICAgIHZhciBmaXJzdENob2ljZSA9XG4gICAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgICAgdGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB2YXIgaXNPblNjcm9sbGJhciA9IHRoaXMuX2RpcmVjdGlvbiA9PT0gJ2x0cicgPyBldmVudC5vZmZzZXRYID49IGZpcnN0Q2hvaWNlLm9mZnNldFdpZHRoIDogZXZlbnQub2Zmc2V0WCA8IGZpcnN0Q2hvaWNlLm9mZnNldExlZnQ7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZ09uSWUgPSBpc09uU2Nyb2xsYmFyO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQgPT09IHRoaXMuaW5wdXQuZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJ1dHRvbl0sW2RhdGEtaXRlbV0sW2RhdGEtY2hvaWNlXScpO1xuXG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdmFyIGhhc1NoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcbiAgICAgIHZhciBkYXRhc2V0ID0gaXRlbS5kYXRhc2V0O1xuXG4gICAgICBpZiAoJ2J1dHRvbicgaW4gZGF0YXNldCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVCdXR0b25BY3Rpb24oYWN0aXZlSXRlbXMsIGl0ZW0pO1xuICAgICAgfSBlbHNlIGlmICgnaXRlbScgaW4gZGF0YXNldCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVJdGVtQWN0aW9uKGFjdGl2ZUl0ZW1zLCBpdGVtLCBoYXNTaGlmdEtleSk7XG4gICAgICB9IGVsc2UgaWYgKCdjaG9pY2UnIGluIGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2hvaWNlQWN0aW9uKGFjdGl2ZUl0ZW1zLCBpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIC8qKlxuICAgKiBIYW5kbGVzIG1vdXNlb3ZlciBldmVudCBvdmVyIHRoaXMuZHJvcGRvd25cbiAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fb25Nb3VzZU92ZXIgPSBmdW5jdGlvbiBfb25Nb3VzZU92ZXIoX3JlZjkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gX3JlZjkudGFyZ2V0O1xuXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmICdjaG9pY2UnIGluIHRhcmdldC5kYXRhc2V0KSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHRDaG9pY2UodGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbkNsaWNrID0gZnVuY3Rpb24gX29uQ2xpY2soX3JlZjEwKSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWYxMC50YXJnZXQ7XG4gICAgdmFyIGNsaWNrV2FzV2l0aGluQ29udGFpbmVyID0gdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICBpZiAoY2xpY2tXYXNXaXRoaW5Db250YWluZXIpIHtcbiAgICAgIGlmICghdGhpcy5kcm9wZG93bi5pc0FjdGl2ZSAmJiAhdGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRoaXMuaW5wdXQuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQgJiYgdGFyZ2V0ICE9PSB0aGlzLmlucHV0LmVsZW1lbnQgJiYgIXRoaXMuZHJvcGRvd24uZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBoYXNIaWdobGlnaHRlZEl0ZW1zID0gdGhpcy5fc3RvcmUuaGlnaGxpZ2h0ZWRBY3RpdmVJdGVtcy5sZW5ndGggPiAwO1xuXG4gICAgICBpZiAoaGFzSGlnaGxpZ2h0ZWRJdGVtcykge1xuICAgICAgICB0aGlzLnVuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIucmVtb3ZlRm9jdXNTdGF0ZSgpO1xuICAgICAgdGhpcy5oaWRlRHJvcGRvd24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25Gb2N1cyA9IGZ1bmN0aW9uIF9vbkZvY3VzKF9yZWYxMSkge1xuICAgIHZhciBfdGhpczE3ID0gdGhpcyxcbiAgICAgICAgX2ZvY3VzQWN0aW9ucztcblxuICAgIHZhciB0YXJnZXQgPSBfcmVmMTEudGFyZ2V0O1xuICAgIHZhciBmb2N1c1dhc1dpdGhpbkNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuXG4gICAgaWYgKCFmb2N1c1dhc1dpdGhpbkNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBmb2N1c0FjdGlvbnMgPSAoX2ZvY3VzQWN0aW9ucyA9IHt9LCBfZm9jdXNBY3Rpb25zW1RFWFRfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGFyZ2V0ID09PSBfdGhpczE3LmlucHV0LmVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXMxNy5jb250YWluZXJPdXRlci5hZGRGb2N1c1N0YXRlKCk7XG4gICAgICB9XG4gICAgfSwgX2ZvY3VzQWN0aW9uc1tTRUxFQ1RfT05FX1RZUEVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMxNy5jb250YWluZXJPdXRlci5hZGRGb2N1c1N0YXRlKCk7XG5cbiAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTcuaW5wdXQuZWxlbWVudCkge1xuICAgICAgICBfdGhpczE3LnNob3dEcm9wZG93bih0cnVlKTtcbiAgICAgIH1cbiAgICB9LCBfZm9jdXNBY3Rpb25zW1NFTEVDVF9NVUxUSVBMRV9UWVBFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTcuaW5wdXQuZWxlbWVudCkge1xuICAgICAgICBfdGhpczE3LnNob3dEcm9wZG93bih0cnVlKTsgLy8gSWYgZWxlbWVudCBpcyBhIHNlbGVjdCBib3gsIHRoZSBmb2N1c2VkIGVsZW1lbnQgaXMgdGhlIGNvbnRhaW5lciBhbmQgdGhlIGRyb3Bkb3duXG4gICAgICAgIC8vIGlzbid0IGFscmVhZHkgb3BlbiwgZm9jdXMgYW5kIHNob3cgZHJvcGRvd25cblxuXG4gICAgICAgIF90aGlzMTcuY29udGFpbmVyT3V0ZXIuYWRkRm9jdXNTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIF9mb2N1c0FjdGlvbnMpO1xuICAgIGZvY3VzQWN0aW9uc1t0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlXSgpO1xuICB9O1xuXG4gIF9wcm90by5fb25CbHVyID0gZnVuY3Rpb24gX29uQmx1cihfcmVmMTIpIHtcbiAgICB2YXIgX3RoaXMxOCA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0ID0gX3JlZjEyLnRhcmdldDtcbiAgICB2YXIgYmx1cldhc1dpdGhpbkNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuXG4gICAgaWYgKGJsdXJXYXNXaXRoaW5Db250YWluZXIgJiYgIXRoaXMuX2lzU2Nyb2xsaW5nT25JZSkge1xuICAgICAgdmFyIF9ibHVyQWN0aW9ucztcblxuICAgICAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXM7XG4gICAgICB2YXIgaGFzSGlnaGxpZ2h0ZWRJdGVtcyA9IGFjdGl2ZUl0ZW1zLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaGlnaGxpZ2h0ZWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBibHVyQWN0aW9ucyA9IChfYmx1ckFjdGlvbnMgPSB7fSwgX2JsdXJBY3Rpb25zW1RFWFRfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTguaW5wdXQuZWxlbWVudCkge1xuICAgICAgICAgIF90aGlzMTguY29udGFpbmVyT3V0ZXIucmVtb3ZlRm9jdXNTdGF0ZSgpO1xuXG4gICAgICAgICAgaWYgKGhhc0hpZ2hsaWdodGVkSXRlbXMpIHtcbiAgICAgICAgICAgIF90aGlzMTgudW5oaWdobGlnaHRBbGwoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczE4LmhpZGVEcm9wZG93bih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSwgX2JsdXJBY3Rpb25zW1NFTEVDVF9PTkVfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMTguY29udGFpbmVyT3V0ZXIucmVtb3ZlRm9jdXNTdGF0ZSgpO1xuXG4gICAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTguaW5wdXQuZWxlbWVudCB8fCB0YXJnZXQgPT09IF90aGlzMTguY29udGFpbmVyT3V0ZXIuZWxlbWVudCAmJiAhX3RoaXMxOC5fY2FuU2VhcmNoKSB7XG4gICAgICAgICAgX3RoaXMxOC5oaWRlRHJvcGRvd24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIF9ibHVyQWN0aW9uc1tTRUxFQ1RfTVVMVElQTEVfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTguaW5wdXQuZWxlbWVudCkge1xuICAgICAgICAgIF90aGlzMTguY29udGFpbmVyT3V0ZXIucmVtb3ZlRm9jdXNTdGF0ZSgpO1xuXG4gICAgICAgICAgX3RoaXMxOC5oaWRlRHJvcGRvd24odHJ1ZSk7XG5cbiAgICAgICAgICBpZiAoaGFzSGlnaGxpZ2h0ZWRJdGVtcykge1xuICAgICAgICAgICAgX3RoaXMxOC51bmhpZ2hsaWdodEFsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2JsdXJBY3Rpb25zKTtcbiAgICAgIGJsdXJBY3Rpb25zW3RoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGVdKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9uIElFMTEsIGNsaWNraW5nIHRoZSBzY29sbGJhciBibHVycyBvdXIgaW5wdXQgYW5kIHRodXNcbiAgICAgIC8vIGNsb3NlcyB0aGUgZHJvcGRvd24uIFRvIHN0b3AgdGhpcywgd2UgcmVmb2N1cyBvdXIgaW5wdXRcbiAgICAgIC8vIGlmIHdlIGtub3cgd2UgYXJlIG9uIElFICphbmQqIGFyZSBzY3JvbGxpbmcuXG4gICAgICB0aGlzLl9pc1Njcm9sbGluZ09uSWUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5wdXQuZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRm9ybVJlc2V0ID0gZnVuY3Rpb24gX29uRm9ybVJlc2V0KCkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHJlc2V0VG8odGhpcy5faW5pdGlhbFN0YXRlKSk7XG4gIH07XG5cbiAgX3Byb3RvLl9oaWdobGlnaHRDaG9pY2UgPSBmdW5jdGlvbiBfaGlnaGxpZ2h0Q2hvaWNlKGVsKSB7XG4gICAgdmFyIF90aGlzMTkgPSB0aGlzO1xuXG4gICAgaWYgKGVsID09PSB2b2lkIDApIHtcbiAgICAgIGVsID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2hvaWNlcyA9IEFycmF5LmZyb20odGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNob2ljZS1zZWxlY3RhYmxlXScpKTtcblxuICAgIGlmICghY2hvaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFzc2VkRWwgPSBlbDtcbiAgICB2YXIgaGlnaGxpZ2h0ZWRDaG9pY2VzID0gQXJyYXkuZnJvbSh0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIHRoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSkpOyAvLyBSZW1vdmUgYW55IGhpZ2hsaWdodGVkIGNob2ljZXNcblxuICAgIGhpZ2hsaWdodGVkQ2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgIGNob2ljZS5jbGFzc0xpc3QucmVtb3ZlKF90aGlzMTkuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSk7XG4gICAgICBjaG9pY2Uuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgfSk7XG5cbiAgICBpZiAocGFzc2VkRWwpIHtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uID0gY2hvaWNlcy5pbmRleE9mKHBhc3NlZEVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSGlnaGxpZ2h0IGNob2ljZSBiYXNlZCBvbiBsYXN0IGtub3duIGhpZ2hsaWdodCBsb2NhdGlvblxuICAgICAgaWYgKGNob2ljZXMubGVuZ3RoID4gdGhpcy5faGlnaGxpZ2h0UG9zaXRpb24pIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBvcHRpb24gdG8gaGlnaGxpZ2h0XG4gICAgICAgIHBhc3NlZEVsID0gY2hvaWNlc1t0aGlzLl9oaWdobGlnaHRQb3NpdGlvbl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgaGlnaGxpZ2h0IHRoZSBvcHRpb24gYmVmb3JlXG4gICAgICAgIHBhc3NlZEVsID0gY2hvaWNlc1tjaG9pY2VzLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXBhc3NlZEVsKSB7XG4gICAgICAgIHBhc3NlZEVsID0gY2hvaWNlc1swXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXNzZWRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSk7XG4gICAgcGFzc2VkRWwuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5oaWdobGlnaHRDaG9pY2UsIHtcbiAgICAgIGVsOiBwYXNzZWRFbFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuZHJvcGRvd24uaXNBY3RpdmUpIHtcbiAgICAgIC8vIElFMTEgaWdub3JlcyBhcmlhLWxhYmVsIGFuZCBibG9ja3MgdmlydHVhbCBrZXlib2FyZFxuICAgICAgLy8gaWYgYXJpYS1hY3RpdmVkZXNjZW5kYW50IGlzIHNldCB3aXRob3V0IGEgZHJvcGRvd25cbiAgICAgIHRoaXMuaW5wdXQuc2V0QWN0aXZlRGVzY2VuZGFudChwYXNzZWRFbC5pZCk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLnNldEFjdGl2ZURlc2NlbmRhbnQocGFzc2VkRWwuaWQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2FkZEl0ZW0gPSBmdW5jdGlvbiBfYWRkSXRlbShfcmVmMTMpIHtcbiAgICB2YXIgdmFsdWUgPSBfcmVmMTMudmFsdWUsXG4gICAgICAgIF9yZWYxMyRsYWJlbCA9IF9yZWYxMy5sYWJlbCxcbiAgICAgICAgbGFiZWwgPSBfcmVmMTMkbGFiZWwgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMTMkbGFiZWwsXG4gICAgICAgIF9yZWYxMyRjaG9pY2VJZCA9IF9yZWYxMy5jaG9pY2VJZCxcbiAgICAgICAgY2hvaWNlSWQgPSBfcmVmMTMkY2hvaWNlSWQgPT09IHZvaWQgMCA/IC0xIDogX3JlZjEzJGNob2ljZUlkLFxuICAgICAgICBfcmVmMTMkZ3JvdXBJZCA9IF9yZWYxMy5ncm91cElkLFxuICAgICAgICBncm91cElkID0gX3JlZjEzJGdyb3VwSWQgPT09IHZvaWQgMCA/IC0xIDogX3JlZjEzJGdyb3VwSWQsXG4gICAgICAgIF9yZWYxMyRjdXN0b21Qcm9wZXJ0aSA9IF9yZWYxMy5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gX3JlZjEzJGN1c3RvbVByb3BlcnRpID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjEzJGN1c3RvbVByb3BlcnRpLFxuICAgICAgICBfcmVmMTMkcGxhY2Vob2xkZXIgPSBfcmVmMTMucGxhY2Vob2xkZXIsXG4gICAgICAgIHBsYWNlaG9sZGVyID0gX3JlZjEzJHBsYWNlaG9sZGVyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYxMyRwbGFjZWhvbGRlcixcbiAgICAgICAgX3JlZjEzJGtleUNvZGUgPSBfcmVmMTMua2V5Q29kZSxcbiAgICAgICAga2V5Q29kZSA9IF9yZWYxMyRrZXlDb2RlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjEzJGtleUNvZGU7XG4gICAgdmFyIHBhc3NlZFZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICAgIHZhciBwYXNzZWRLZXlDb2RlID0ga2V5Q29kZTtcbiAgICB2YXIgcGFzc2VkQ3VzdG9tUHJvcGVydGllcyA9IGN1c3RvbVByb3BlcnRpZXM7XG4gICAgdmFyIGl0ZW1zID0gdGhpcy5fc3RvcmUuaXRlbXM7XG4gICAgdmFyIHBhc3NlZExhYmVsID0gbGFiZWwgfHwgcGFzc2VkVmFsdWU7XG4gICAgdmFyIHBhc3NlZE9wdGlvbklkID0gY2hvaWNlSWQgfHwgLTE7XG4gICAgdmFyIGdyb3VwID0gZ3JvdXBJZCA+PSAwID8gdGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKGdyb3VwSWQpIDogbnVsbDtcbiAgICB2YXIgaWQgPSBpdGVtcyA/IGl0ZW1zLmxlbmd0aCArIDEgOiAxOyAvLyBJZiBhIHByZXBlbmRlZCB2YWx1ZSBoYXMgYmVlbiBwYXNzZWQsIHByZXBlbmQgaXRcblxuICAgIGlmICh0aGlzLmNvbmZpZy5wcmVwZW5kVmFsdWUpIHtcbiAgICAgIHBhc3NlZFZhbHVlID0gdGhpcy5jb25maWcucHJlcGVuZFZhbHVlICsgcGFzc2VkVmFsdWUudG9TdHJpbmcoKTtcbiAgICB9IC8vIElmIGFuIGFwcGVuZGVkIHZhbHVlIGhhcyBiZWVuIHBhc3NlZCwgYXBwZW5kIGl0XG5cblxuICAgIGlmICh0aGlzLmNvbmZpZy5hcHBlbmRWYWx1ZSkge1xuICAgICAgcGFzc2VkVmFsdWUgKz0gdGhpcy5jb25maWcuYXBwZW5kVmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChpdGVtc19hZGRJdGVtKHtcbiAgICAgIHZhbHVlOiBwYXNzZWRWYWx1ZSxcbiAgICAgIGxhYmVsOiBwYXNzZWRMYWJlbCxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGNob2ljZUlkOiBwYXNzZWRPcHRpb25JZCxcbiAgICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAga2V5Q29kZTogcGFzc2VkS2V5Q29kZVxuICAgIH0pKTtcblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQWN0aXZlSXRlbXMoaWQpO1xuICAgIH0gLy8gVHJpZ2dlciBjaGFuZ2UgZXZlbnRcblxuXG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuYWRkSXRlbSwge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdmFsdWU6IHBhc3NlZFZhbHVlLFxuICAgICAgbGFiZWw6IHBhc3NlZExhYmVsLFxuICAgICAgY3VzdG9tUHJvcGVydGllczogcGFzc2VkQ3VzdG9tUHJvcGVydGllcyxcbiAgICAgIGdyb3VwVmFsdWU6IGdyb3VwICYmIGdyb3VwLnZhbHVlID8gZ3JvdXAudmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICBrZXlDb2RlOiBwYXNzZWRLZXlDb2RlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLl9yZW1vdmVJdGVtID0gZnVuY3Rpb24gX3JlbW92ZUl0ZW0oaXRlbSkge1xuICAgIGlmICghaXRlbSB8fCAhaXNUeXBlKCdPYmplY3QnLCBpdGVtKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIGlkID0gaXRlbS5pZCxcbiAgICAgICAgdmFsdWUgPSBpdGVtLnZhbHVlLFxuICAgICAgICBsYWJlbCA9IGl0ZW0ubGFiZWwsXG4gICAgICAgIGNob2ljZUlkID0gaXRlbS5jaG9pY2VJZCxcbiAgICAgICAgZ3JvdXBJZCA9IGl0ZW0uZ3JvdXBJZDtcbiAgICB2YXIgZ3JvdXAgPSBncm91cElkID49IDAgPyB0aGlzLl9zdG9yZS5nZXRHcm91cEJ5SWQoZ3JvdXBJZCkgOiBudWxsO1xuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goaXRlbXNfcmVtb3ZlSXRlbShpZCwgY2hvaWNlSWQpKTtcblxuICAgIGlmIChncm91cCAmJiBncm91cC52YWx1ZSkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMucmVtb3ZlSXRlbSwge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICBncm91cFZhbHVlOiBncm91cC52YWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLnJlbW92ZUl0ZW0sIHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRDaG9pY2UgPSBmdW5jdGlvbiBfYWRkQ2hvaWNlKF9yZWYxNCkge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxNC52YWx1ZSxcbiAgICAgICAgX3JlZjE0JGxhYmVsID0gX3JlZjE0LmxhYmVsLFxuICAgICAgICBsYWJlbCA9IF9yZWYxNCRsYWJlbCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYxNCRsYWJlbCxcbiAgICAgICAgX3JlZjE0JGlzU2VsZWN0ZWQgPSBfcmVmMTQuaXNTZWxlY3RlZCxcbiAgICAgICAgaXNTZWxlY3RlZCA9IF9yZWYxNCRpc1NlbGVjdGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYxNCRpc1NlbGVjdGVkLFxuICAgICAgICBfcmVmMTQkaXNEaXNhYmxlZCA9IF9yZWYxNC5pc0Rpc2FibGVkLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3JlZjE0JGlzRGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjE0JGlzRGlzYWJsZWQsXG4gICAgICAgIF9yZWYxNCRncm91cElkID0gX3JlZjE0Lmdyb3VwSWQsXG4gICAgICAgIGdyb3VwSWQgPSBfcmVmMTQkZ3JvdXBJZCA9PT0gdm9pZCAwID8gLTEgOiBfcmVmMTQkZ3JvdXBJZCxcbiAgICAgICAgX3JlZjE0JGN1c3RvbVByb3BlcnRpID0gX3JlZjE0LmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIGN1c3RvbVByb3BlcnRpZXMgPSBfcmVmMTQkY3VzdG9tUHJvcGVydGkgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMTQkY3VzdG9tUHJvcGVydGksXG4gICAgICAgIF9yZWYxNCRwbGFjZWhvbGRlciA9IF9yZWYxNC5wbGFjZWhvbGRlcixcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmMTQkcGxhY2Vob2xkZXIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjE0JHBsYWNlaG9sZGVyLFxuICAgICAgICBfcmVmMTQka2V5Q29kZSA9IF9yZWYxNC5rZXlDb2RlLFxuICAgICAgICBrZXlDb2RlID0gX3JlZjE0JGtleUNvZGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMTQka2V5Q29kZTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBHZW5lcmF0ZSB1bmlxdWUgaWRcblxuXG4gICAgdmFyIGNob2ljZXMgPSB0aGlzLl9zdG9yZS5jaG9pY2VzO1xuICAgIHZhciBjaG9pY2VMYWJlbCA9IGxhYmVsIHx8IHZhbHVlO1xuICAgIHZhciBjaG9pY2VJZCA9IGNob2ljZXMgPyBjaG9pY2VzLmxlbmd0aCArIDEgOiAxO1xuICAgIHZhciBjaG9pY2VFbGVtZW50SWQgPSB0aGlzLl9iYXNlSWQgKyBcIi1cIiArIHRoaXMuX2lkTmFtZXMuaXRlbUNob2ljZSArIFwiLVwiICsgY2hvaWNlSWQ7XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjaG9pY2VzX2FkZENob2ljZSh7XG4gICAgICBpZDogY2hvaWNlSWQsXG4gICAgICBncm91cElkOiBncm91cElkLFxuICAgICAgZWxlbWVudElkOiBjaG9pY2VFbGVtZW50SWQsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBsYWJlbDogY2hvaWNlTGFiZWwsXG4gICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBrZXlDb2RlOiBrZXlDb2RlXG4gICAgfSkpO1xuXG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX2FkZEl0ZW0oe1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGxhYmVsOiBjaG9pY2VMYWJlbCxcbiAgICAgICAgY2hvaWNlSWQ6IGNob2ljZUlkLFxuICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIGtleUNvZGU6IGtleUNvZGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2FkZEdyb3VwID0gZnVuY3Rpb24gX2FkZEdyb3VwKF9yZWYxNSkge1xuICAgIHZhciBfdGhpczIwID0gdGhpcztcblxuICAgIHZhciBncm91cCA9IF9yZWYxNS5ncm91cCxcbiAgICAgICAgaWQgPSBfcmVmMTUuaWQsXG4gICAgICAgIF9yZWYxNSR2YWx1ZUtleSA9IF9yZWYxNS52YWx1ZUtleSxcbiAgICAgICAgdmFsdWVLZXkgPSBfcmVmMTUkdmFsdWVLZXkgPT09IHZvaWQgMCA/ICd2YWx1ZScgOiBfcmVmMTUkdmFsdWVLZXksXG4gICAgICAgIF9yZWYxNSRsYWJlbEtleSA9IF9yZWYxNS5sYWJlbEtleSxcbiAgICAgICAgbGFiZWxLZXkgPSBfcmVmMTUkbGFiZWxLZXkgPT09IHZvaWQgMCA/ICdsYWJlbCcgOiBfcmVmMTUkbGFiZWxLZXk7XG4gICAgdmFyIGdyb3VwQ2hvaWNlcyA9IGlzVHlwZSgnT2JqZWN0JywgZ3JvdXApID8gZ3JvdXAuY2hvaWNlcyA6IEFycmF5LmZyb20oZ3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ09QVElPTicpKTtcbiAgICB2YXIgZ3JvdXBJZCA9IGlkIHx8IE1hdGguZmxvb3IobmV3IERhdGUoKS52YWx1ZU9mKCkgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICB2YXIgaXNEaXNhYmxlZCA9IGdyb3VwLmRpc2FibGVkID8gZ3JvdXAuZGlzYWJsZWQgOiBmYWxzZTtcblxuICAgIGlmIChncm91cENob2ljZXMpIHtcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGdyb3Vwc19hZGRHcm91cCh7XG4gICAgICAgIHZhbHVlOiBncm91cC5sYWJlbCxcbiAgICAgICAgaWQ6IGdyb3VwSWQsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgIH0pKTtcblxuICAgICAgdmFyIGFkZEdyb3VwQ2hvaWNlcyA9IGZ1bmN0aW9uIGFkZEdyb3VwQ2hvaWNlcyhjaG9pY2UpIHtcbiAgICAgICAgdmFyIGlzT3B0RGlzYWJsZWQgPSBjaG9pY2UuZGlzYWJsZWQgfHwgY2hvaWNlLnBhcmVudE5vZGUgJiYgY2hvaWNlLnBhcmVudE5vZGUuZGlzYWJsZWQ7XG5cbiAgICAgICAgX3RoaXMyMC5fYWRkQ2hvaWNlKHtcbiAgICAgICAgICB2YWx1ZTogY2hvaWNlW3ZhbHVlS2V5XSxcbiAgICAgICAgICBsYWJlbDogaXNUeXBlKCdPYmplY3QnLCBjaG9pY2UpID8gY2hvaWNlW2xhYmVsS2V5XSA6IGNob2ljZS5pbm5lckhUTUwsXG4gICAgICAgICAgaXNTZWxlY3RlZDogY2hvaWNlLnNlbGVjdGVkLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzT3B0RGlzYWJsZWQsXG4gICAgICAgICAgZ3JvdXBJZDogZ3JvdXBJZCxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjaG9pY2UuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogY2hvaWNlLnBsYWNlaG9sZGVyXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgZ3JvdXBDaG9pY2VzLmZvckVhY2goYWRkR3JvdXBDaG9pY2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goZ3JvdXBzX2FkZEdyb3VwKHtcbiAgICAgICAgdmFsdWU6IGdyb3VwLmxhYmVsLFxuICAgICAgICBpZDogZ3JvdXAuaWQsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBncm91cC5kaXNhYmxlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2dldFRlbXBsYXRlID0gZnVuY3Rpb24gX2dldFRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gICAgdmFyIF90aGlzJF90ZW1wbGF0ZXMkdGVtcDtcblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjbGFzc05hbWVzID0gdGhpcy5jb25maWcuY2xhc3NOYW1lcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiAoX3RoaXMkX3RlbXBsYXRlcyR0ZW1wID0gdGhpcy5fdGVtcGxhdGVzW3RlbXBsYXRlXSkuY2FsbC5hcHBseShfdGhpcyRfdGVtcGxhdGVzJHRlbXAsIFt0aGlzLCBjbGFzc05hbWVzXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIF9wcm90by5fY3JlYXRlVGVtcGxhdGVzID0gZnVuY3Rpb24gX2NyZWF0ZVRlbXBsYXRlcygpIHtcbiAgICB2YXIgY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcyA9IHRoaXMuY29uZmlnLmNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXM7XG4gICAgdmFyIHVzZXJUZW1wbGF0ZXMgPSB7fTtcblxuICAgIGlmIChjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzICYmIHR5cGVvZiBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB1c2VyVGVtcGxhdGVzID0gY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcy5jYWxsKHRoaXMsIHN0clRvRWwpO1xuICAgIH1cblxuICAgIHRoaXMuX3RlbXBsYXRlcyA9IGNqc19kZWZhdWx0KCkoVEVNUExBVEVTLCB1c2VyVGVtcGxhdGVzKTtcbiAgfTtcblxuICBfcHJvdG8uX2NyZWF0ZUVsZW1lbnRzID0gZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnRzKCkge1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIgPSBuZXcgY29udGFpbmVyX0NvbnRhaW5lcih7XG4gICAgICBlbGVtZW50OiB0aGlzLl9nZXRUZW1wbGF0ZSgnY29udGFpbmVyT3V0ZXInLCB0aGlzLl9kaXJlY3Rpb24sIHRoaXMuX2lzU2VsZWN0RWxlbWVudCwgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50LCB0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkLCB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlKSxcbiAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICB0eXBlOiB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLFxuICAgICAgcG9zaXRpb246IHRoaXMuY29uZmlnLnBvc2l0aW9uXG4gICAgfSk7XG4gICAgdGhpcy5jb250YWluZXJJbm5lciA9IG5ldyBjb250YWluZXJfQ29udGFpbmVyKHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuX2dldFRlbXBsYXRlKCdjb250YWluZXJJbm5lcicpLFxuICAgICAgY2xhc3NOYW1lczogdGhpcy5jb25maWcuY2xhc3NOYW1lcyxcbiAgICAgIHR5cGU6IHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGUsXG4gICAgICBwb3NpdGlvbjogdGhpcy5jb25maWcucG9zaXRpb25cbiAgICB9KTtcbiAgICB0aGlzLmlucHV0ID0gbmV3IGlucHV0X0lucHV0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuX2dldFRlbXBsYXRlKCdpbnB1dCcsIHRoaXMuX3BsYWNlaG9sZGVyVmFsdWUpLFxuICAgICAgY2xhc3NOYW1lczogdGhpcy5jb25maWcuY2xhc3NOYW1lcyxcbiAgICAgIHR5cGU6IHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGUsXG4gICAgICBwcmV2ZW50UGFzdGU6ICF0aGlzLmNvbmZpZy5wYXN0ZVxuICAgIH0pO1xuICAgIHRoaXMuY2hvaWNlTGlzdCA9IG5ldyBsaXN0X0xpc3Qoe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2Nob2ljZUxpc3QnLCB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpXG4gICAgfSk7XG4gICAgdGhpcy5pdGVtTGlzdCA9IG5ldyBsaXN0X0xpc3Qoe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2l0ZW1MaXN0JywgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KVxuICAgIH0pO1xuICAgIHRoaXMuZHJvcGRvd24gPSBuZXcgRHJvcGRvd24oe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2Ryb3Bkb3duJyksXG4gICAgICBjbGFzc05hbWVzOiB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLFxuICAgICAgdHlwZTogdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fY3JlYXRlU3RydWN0dXJlID0gZnVuY3Rpb24gX2NyZWF0ZVN0cnVjdHVyZSgpIHtcbiAgICAvLyBIaWRlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQuY29uY2VhbCgpOyAvLyBXcmFwIGlucHV0IGluIGNvbnRhaW5lciBwcmVzZXJ2aW5nIERPTSBvcmRlcmluZ1xuXG4gICAgdGhpcy5jb250YWluZXJJbm5lci53cmFwKHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50KTsgLy8gV3JhcHBlciBpbm5lciBjb250YWluZXIgd2l0aCBvdXRlciBjb250YWluZXJcblxuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIud3JhcCh0aGlzLmNvbnRhaW5lcklubmVyLmVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuY29uZmlnLnNlYXJjaFBsYWNlaG9sZGVyVmFsdWUgfHwgJyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9wbGFjZWhvbGRlclZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZTtcbiAgICAgIHRoaXMuaW5wdXQuc2V0V2lkdGgoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50KTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93bi5lbGVtZW50KTtcbiAgICB0aGlzLmNvbnRhaW5lcklubmVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pdGVtTGlzdC5lbGVtZW50KTtcblxuICAgIGlmICghdGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5kcm9wZG93bi5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2hvaWNlTGlzdC5lbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaW5wdXQuZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuaW5wdXQuZWxlbWVudCwgdGhpcy5kcm9wZG93bi5lbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uID0gMDtcbiAgICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuX3N0YXJ0TG9hZGluZygpO1xuXG4gICAgICBpZiAodGhpcy5fcHJlc2V0R3JvdXBzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9hZGRQcmVkZWZpbmVkR3JvdXBzKHRoaXMuX3ByZXNldEdyb3Vwcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRQcmVkZWZpbmVkQ2hvaWNlcyh0aGlzLl9wcmVzZXRDaG9pY2VzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RvcExvYWRpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5fYWRkUHJlZGVmaW5lZEl0ZW1zKHRoaXMuX3ByZXNldEl0ZW1zKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRQcmVkZWZpbmVkR3JvdXBzID0gZnVuY3Rpb24gX2FkZFByZWRlZmluZWRHcm91cHMoZ3JvdXBzKSB7XG4gICAgdmFyIF90aGlzMjEgPSB0aGlzO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHBsYWNlaG9sZGVyIG9wdGlvblxuICAgIHZhciBwbGFjZWhvbGRlckNob2ljZSA9IHRoaXMucGFzc2VkRWxlbWVudC5wbGFjZWhvbGRlck9wdGlvbjtcblxuICAgIGlmIChwbGFjZWhvbGRlckNob2ljZSAmJiBwbGFjZWhvbGRlckNob2ljZS5wYXJlbnROb2RlLnRhZ05hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICB0aGlzLl9hZGRDaG9pY2Uoe1xuICAgICAgICB2YWx1ZTogcGxhY2Vob2xkZXJDaG9pY2UudmFsdWUsXG4gICAgICAgIGxhYmVsOiBwbGFjZWhvbGRlckNob2ljZS5pbm5lckhUTUwsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IHBsYWNlaG9sZGVyQ2hvaWNlLnNlbGVjdGVkLFxuICAgICAgICBpc0Rpc2FibGVkOiBwbGFjZWhvbGRlckNob2ljZS5kaXNhYmxlZCxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCkge1xuICAgICAgcmV0dXJuIF90aGlzMjEuX2FkZEdyb3VwKHtcbiAgICAgICAgZ3JvdXA6IGdyb3VwLFxuICAgICAgICBpZDogZ3JvdXAuaWQgfHwgbnVsbFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRQcmVkZWZpbmVkQ2hvaWNlcyA9IGZ1bmN0aW9uIF9hZGRQcmVkZWZpbmVkQ2hvaWNlcyhjaG9pY2VzKSB7XG4gICAgdmFyIF90aGlzMjIgPSB0aGlzO1xuXG4gICAgLy8gSWYgc29ydGluZyBpcyBlbmFibGVkIG9yIHRoZSB1c2VyIGlzIHNlYXJjaGluZywgZmlsdGVyIGNob2ljZXNcbiAgICBpZiAodGhpcy5jb25maWcuc2hvdWxkU29ydCkge1xuICAgICAgY2hvaWNlcy5zb3J0KHRoaXMuY29uZmlnLnNvcnRlcik7XG4gICAgfVxuXG4gICAgdmFyIGhhc1NlbGVjdGVkQ2hvaWNlID0gY2hvaWNlcy5zb21lKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgIHJldHVybiBjaG9pY2Uuc2VsZWN0ZWQ7XG4gICAgfSk7XG4gICAgdmFyIGZpcnN0RW5hYmxlZENob2ljZUluZGV4ID0gY2hvaWNlcy5maW5kSW5kZXgoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgcmV0dXJuIGNob2ljZS5kaXNhYmxlZCA9PT0gdW5kZWZpbmVkIHx8ICFjaG9pY2UuZGlzYWJsZWQ7XG4gICAgfSk7XG4gICAgY2hvaWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2UsIGluZGV4KSB7XG4gICAgICB2YXIgdmFsdWUgPSBjaG9pY2UudmFsdWUsXG4gICAgICAgICAgbGFiZWwgPSBjaG9pY2UubGFiZWwsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllcyA9IGNob2ljZS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gY2hvaWNlLnBsYWNlaG9sZGVyO1xuXG4gICAgICBpZiAoX3RoaXMyMi5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIC8vIElmIHRoZSBjaG9pY2UgaXMgYWN0dWFsbHkgYSBncm91cFxuICAgICAgICBpZiAoY2hvaWNlLmNob2ljZXMpIHtcbiAgICAgICAgICBfdGhpczIyLl9hZGRHcm91cCh7XG4gICAgICAgICAgICBncm91cDogY2hvaWNlLFxuICAgICAgICAgICAgaWQ6IGNob2ljZS5pZCB8fCBudWxsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgdGhlcmUgaXMgYSBzZWxlY3RlZCBjaG9pY2UgYWxyZWFkeSBvciB0aGUgY2hvaWNlIGlzIG5vdCB0aGUgZmlyc3QgaW5cbiAgICAgICAgICAgKiB0aGUgYXJyYXksIGFkZCBlYWNoIGNob2ljZSBub3JtYWxseS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIE90aGVyd2lzZSB3ZSBwcmUtc2VsZWN0IHRoZSBmaXJzdCBlbmFibGVkIGNob2ljZSBpbiB0aGUgYXJyYXkgKFwic2VsZWN0LW9uZVwiIG9ubHkpXG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIHNob3VsZFByZXNlbGVjdCA9IF90aGlzMjIuX2lzU2VsZWN0T25lRWxlbWVudCAmJiAhaGFzU2VsZWN0ZWRDaG9pY2UgJiYgaW5kZXggPT09IGZpcnN0RW5hYmxlZENob2ljZUluZGV4O1xuICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0gc2hvdWxkUHJlc2VsZWN0ID8gdHJ1ZSA6IGNob2ljZS5zZWxlY3RlZDtcbiAgICAgICAgICB2YXIgaXNEaXNhYmxlZCA9IGNob2ljZS5kaXNhYmxlZDtcblxuICAgICAgICAgIF90aGlzMjIuX2FkZENob2ljZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMyMi5fYWRkQ2hvaWNlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGNob2ljZS5zZWxlY3RlZCxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBjaG9pY2UuZGlzYWJsZWQsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7SXRlbVtdfSBpdGVtc1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fYWRkUHJlZGVmaW5lZEl0ZW1zID0gZnVuY3Rpb24gX2FkZFByZWRlZmluZWRJdGVtcyhpdGVtcykge1xuICAgIHZhciBfdGhpczIzID0gdGhpcztcblxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbS52YWx1ZSkge1xuICAgICAgICBfdGhpczIzLl9hZGRJdGVtKHtcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICBjaG9pY2VJZDogaXRlbS5pZCxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBpdGVtLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGl0ZW0ucGxhY2Vob2xkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgX3RoaXMyMy5fYWRkSXRlbSh7XG4gICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLl9zZXRDaG9pY2VPckl0ZW0gPSBmdW5jdGlvbiBfc2V0Q2hvaWNlT3JJdGVtKGl0ZW0pIHtcbiAgICB2YXIgX3RoaXMyNCA9IHRoaXM7XG5cbiAgICB2YXIgaXRlbVR5cGUgPSBnZXRUeXBlKGl0ZW0pLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGhhbmRsZVR5cGUgPSB7XG4gICAgICBvYmplY3Q6IGZ1bmN0aW9uIG9iamVjdCgpIHtcbiAgICAgICAgaWYgKCFpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIElmIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBzZWxlY3QgaW5wdXQsIHdlIG5lZWQgdG8gY3JlYXRlIGFuIG9wdGlvbiBmaXJzdFxuICAgICAgICAvLyB0aGF0IGlzIHRoZW4gc2VsZWN0ZWQuIEZvciB0ZXh0IGlucHV0cyB3ZSBjYW4ganVzdCBhZGQgaXRlbXMgbm9ybWFsbHkuXG5cblxuICAgICAgICBpZiAoIV90aGlzMjQuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpczI0Ll9hZGRDaG9pY2Uoe1xuICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGl0ZW0uY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBpdGVtLnBsYWNlaG9sZGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyNC5fYWRkSXRlbSh7XG4gICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICAgICAgY2hvaWNlSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBpdGVtLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogaXRlbS5wbGFjZWhvbGRlclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3RyaW5nOiBmdW5jdGlvbiBzdHJpbmcoKSB7XG4gICAgICAgIGlmICghX3RoaXMyNC5faXNUZXh0RWxlbWVudCkge1xuICAgICAgICAgIF90aGlzMjQuX2FkZENob2ljZSh7XG4gICAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtLFxuICAgICAgICAgICAgaXNTZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyNC5fYWRkSXRlbSh7XG4gICAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBoYW5kbGVUeXBlW2l0ZW1UeXBlXSgpO1xuICB9O1xuXG4gIF9wcm90by5fZmluZEFuZFNlbGVjdENob2ljZUJ5VmFsdWUgPSBmdW5jdGlvbiBfZmluZEFuZFNlbGVjdENob2ljZUJ5VmFsdWUodmFsKSB7XG4gICAgdmFyIF90aGlzMjUgPSB0aGlzO1xuXG4gICAgdmFyIGNob2ljZXMgPSB0aGlzLl9zdG9yZS5jaG9pY2VzOyAvLyBDaGVjayAndmFsdWUnIHByb3BlcnR5IGV4aXN0cyBhbmQgdGhlIGNob2ljZSBpc24ndCBhbHJlYWR5IHNlbGVjdGVkXG5cbiAgICB2YXIgZm91bmRDaG9pY2UgPSBjaG9pY2VzLmZpbmQoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgcmV0dXJuIF90aGlzMjUuY29uZmlnLnZhbHVlQ29tcGFyZXIoY2hvaWNlLnZhbHVlLCB2YWwpO1xuICAgIH0pO1xuXG4gICAgaWYgKGZvdW5kQ2hvaWNlICYmICFmb3VuZENob2ljZS5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgIHZhbHVlOiBmb3VuZENob2ljZS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGZvdW5kQ2hvaWNlLmxhYmVsLFxuICAgICAgICBjaG9pY2VJZDogZm91bmRDaG9pY2UuaWQsXG4gICAgICAgIGdyb3VwSWQ6IGZvdW5kQ2hvaWNlLmdyb3VwSWQsXG4gICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGZvdW5kQ2hvaWNlLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBmb3VuZENob2ljZS5wbGFjZWhvbGRlcixcbiAgICAgICAga2V5Q29kZTogZm91bmRDaG9pY2Uua2V5Q29kZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fZ2VuZXJhdGVQbGFjZWhvbGRlclZhbHVlID0gZnVuY3Rpb24gX2dlbmVyYXRlUGxhY2Vob2xkZXJWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICB2YXIgcGxhY2Vob2xkZXJPcHRpb24gPSB0aGlzLnBhc3NlZEVsZW1lbnQucGxhY2Vob2xkZXJPcHRpb247XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXJPcHRpb24gPyBwbGFjZWhvbGRlck9wdGlvbi50ZXh0IDogZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJGNvbmZpZzQgPSB0aGlzLmNvbmZpZyxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfdGhpcyRjb25maWc0LnBsYWNlaG9sZGVyLFxuICAgICAgICBwbGFjZWhvbGRlclZhbHVlID0gX3RoaXMkY29uZmlnNC5wbGFjZWhvbGRlclZhbHVlO1xuICAgIHZhciBkYXRhc2V0ID0gdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQuZGF0YXNldDtcblxuICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgaWYgKHBsYWNlaG9sZGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhc2V0LnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHJldHVybiBkYXRhc2V0LnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gQ2hvaWNlcztcbn0oKTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2NyaXB0c19jaG9pY2VzID0gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoY2hvaWNlc19DaG9pY2VzKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pW1wiZGVmYXVsdFwiXTtcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCAnICsgKG5hbWUgPyBuYW1lICsgJyAnIDogJycpICsgJ2ludm9jYXRpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IFtdLnB1c2g7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCwgZmlsdGVyT3V0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIElTX0ZJTFRFUl9PVVQgPSBUWVBFID09IDc7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfT1VUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJPdXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlck91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJPdXQ6IGNyZWF0ZU1ldGhvZCg3KVxufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgY2FjaGUgPSB7fTtcblxudmFyIHRocm93ZXIgPSBmdW5jdGlvbiAoaXQpIHsgdGhyb3cgaXQ7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBvcHRpb25zKSB7XG4gIGlmIChoYXMoY2FjaGUsIE1FVEhPRF9OQU1FKSkgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXTtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHZhciBBQ0NFU1NPUlMgPSBoYXMob3B0aW9ucywgJ0FDQ0VTU09SUycpID8gb3B0aW9ucy5BQ0NFU1NPUlMgOiBmYWxzZTtcbiAgdmFyIGFyZ3VtZW50MCA9IGhhcyhvcHRpb25zLCAwKSA/IG9wdGlvbnNbMF0gOiB0aHJvd2VyO1xuICB2YXIgYXJndW1lbnQxID0gaGFzKG9wdGlvbnMsIDEpID8gb3B0aW9uc1sxXSA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdID0gISFtZXRob2QgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoQUNDRVNTT1JTICYmICFERVNDUklQVE9SUykgcmV0dXJuIHRydWU7XG4gICAgdmFyIE8gPSB7IGxlbmd0aDogLTEgfTtcblxuICAgIGlmIChBQ0NFU1NPUlMpIGRlZmluZVByb3BlcnR5KE8sIDEsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiB0aHJvd2VyIH0pO1xuICAgIGVsc2UgT1sxXSA9IDE7XG5cbiAgICBtZXRob2QuY2FsbChPLCBhcmd1bWVudDAsIGFyZ3VtZW50MSk7XG4gIH0pO1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIGl0ZXJhdG9yV2l0aFJldHVybiA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBkb25lOiAhIWNhbGxlZCsrIH07XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGl0ZXJhdG9yV2l0aFJldHVybltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcbiAgaWYgKCFTS0lQX0NMT1NJTkcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgSVRFUkFUSU9OX1NVUFBPUlQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgb2JqZWN0W0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4ZWMob2JqZWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG59O1xuIiwidmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLXdyYXBwZWQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSkge1xuICB2YXIgU3ltYm9sID0gcGF0aC5TeW1ib2wgfHwgKHBhdGguU3ltYm9sID0ge30pO1xuICBpZiAoIWhhcyhTeW1ib2wsIE5BTUUpKSBkZWZpbmVQcm9wZXJ0eShTeW1ib2wsIE5BTUUsIHtcbiAgICB2YWx1ZTogd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mKE5BTUUpXG4gIH0pO1xufTtcbiIsInZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAvKGlwaG9uZXxpcG9kfGlwYWQpLiphcHBsZXdlYmtpdC9pLnRlc3QodXNlckFnZW50KTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzb2YoZ2xvYmFsLnByb2Nlc3MpID09ICdwcm9jZXNzJztcbiIsInZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAvd2ViMHMoPyEuKmNocm9tZSkvaS50ZXN0KHVzZXJBZ2VudCk7XG4iLCJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0KTtcbiAgICB9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBmYWN0b3JpZXMgPSB7fTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uIChDLCBhcmdzTGVuZ3RoLCBhcmdzKSB7XG4gIGlmICghKGFyZ3NMZW5ndGggaW4gZmFjdG9yaWVzKSkge1xuICAgIGZvciAodmFyIGxpc3QgPSBbXSwgaSA9IDA7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIGxpc3RbaV0gPSAnYVsnICsgaSArICddJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBmYWN0b3JpZXNbYXJnc0xlbmd0aF0gPSBGdW5jdGlvbignQyxhJywgJ3JldHVybiBuZXcgQygnICsgbGlzdC5qb2luKCcsJykgKyAnKScpO1xuICB9IHJldHVybiBmYWN0b3JpZXNbYXJnc0xlbmd0aF0oQywgYXJncyk7XG59O1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIGZuID0gYUZ1bmN0aW9uKHRoaXMpO1xuICB2YXIgcGFydEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gZnVuY3Rpb24gYm91bmQoLyogYXJncy4uLiAqLykge1xuICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZEZ1bmN0aW9uID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpIGJvdW5kRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICByZXR1cm4gYm91bmRGdW5jdGlvbjtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGU7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gY29uc29sZS5lcnJvcihhKSA6IGNvbnNvbGUuZXJyb3IoYSwgYik7XG4gIH1cbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIHVuYm91bmRGdW5jdGlvbiwgb3B0aW9ucykge1xuICB2YXIgdGhhdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aGF0O1xuICB2YXIgQVNfRU5UUklFUyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5BU19FTlRSSUVTKTtcbiAgdmFyIElTX0lURVJBVE9SID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX0lURVJBVE9SKTtcbiAgdmFyIElOVEVSUlVQVEVEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklOVEVSUlVQVEVEKTtcbiAgdmFyIGZuID0gYmluZCh1bmJvdW5kRnVuY3Rpb24sIHRoYXQsIDEgKyBBU19FTlRSSUVTICsgSU5URVJSVVBURUQpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG4gIHZhciBzdG9wID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgY29uZGl0aW9uKTtcbiAgfTtcblxuICB2YXIgY2FsbEZuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKEFTX0VOVFJJRVMpIHtcbiAgICAgIGFuT2JqZWN0KHZhbHVlKTtcbiAgICAgIHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSwgc3RvcCkgOiBmbih2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgIH0gcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWUsIHN0b3ApIDogZm4odmFsdWUpO1xuICB9O1xuXG4gIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcignVGFyZ2V0IGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbEZuKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpO1xuICB9XG5cbiAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGNhbGxGbihzdGVwLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICB2YXIgcmV0dXJuTWV0aG9kID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYW5PYmplY3QocmV0dXJuTWV0aG9kLmNhbGwoaXRlcmF0b3IpKS52YWx1ZTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciBJU19JT1MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWlvcycpO1xudmFyIElTX1dFQk9TX1dFQktJVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtd2Vib3Mtd2Via2l0Jyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZScpO1xuXG52YXIgTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG4vLyBOb2RlLmpzIDExIHNob3dzIEV4cGVyaW1lbnRhbFdhcm5pbmcgb24gZ2V0dGluZyBgcXVldWVNaWNyb3Rhc2tgXG52YXIgcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGdsb2JhbCwgJ3F1ZXVlTWljcm90YXNrJyk7XG52YXIgcXVldWVNaWNyb3Rhc2sgPSBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IgJiYgcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yLnZhbHVlO1xuXG52YXIgZmx1c2gsIGhlYWQsIGxhc3QsIG5vdGlmeSwgdG9nZ2xlLCBub2RlLCBwcm9taXNlLCB0aGVuO1xuXG4vLyBtb2Rlcm4gZW5naW5lcyBoYXZlIHF1ZXVlTWljcm90YXNrIG1ldGhvZFxuaWYgKCFxdWV1ZU1pY3JvdGFzaykge1xuICBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoSVNfTk9ERSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICAvLyBhbHNvIGV4Y2VwdCBXZWJPUyBXZWJraXQgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg5OFxuICBpZiAoIUlTX0lPUyAmJiAhSVNfTk9ERSAmJiAhSVNfV0VCT1NfV0VCS0lUICYmIE11dGF0aW9uT2JzZXJ2ZXIgJiYgZG9jdW1lbnQpIHtcbiAgICB0b2dnbGUgPSB0cnVlO1xuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIHRoZW4gPSBwcm9taXNlLnRoZW47XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhlbi5jYWxsKHByb21pc2UsIGZsdXNoKTtcbiAgICB9O1xuICAvLyBOb2RlLmpzIHdpdGhvdXQgcHJvbWlzZXNcbiAgfSBlbHNlIGlmIChJU19OT0RFKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWV1ZU1pY3JvdGFzayB8fCBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICBpZiAoIWhlYWQpIHtcbiAgICBoZWFkID0gdGFzaztcbiAgICBub3RpZnkoKTtcbiAgfSBsYXN0ID0gdGFzaztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5Qcm9taXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xuXG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcblxudmFyIG5hdGl2ZUFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxubW9kdWxlLmV4cG9ydHMgPSAhbmF0aXZlQXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2hvdWxkIGhhdmUgY29ycmVjdCBvcmRlciBvZiBvcGVyYXRpb25zIChFZGdlIGJ1ZylcbiAgaWYgKERFU0NSSVBUT1JTICYmIG5hdGl2ZUFzc2lnbih7IGI6IDEgfSwgbmF0aXZlQXNzaWduKGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2InLCB7XG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9KSwgeyBiOiAyIH0pKS5iICE9PSAxKSByZXR1cm4gdHJ1ZTtcbiAgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbc3ltYm9sXSA9IDc7XG4gIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgcmV0dXJuIG5hdGl2ZUFzc2lnbih7fSwgQSlbc3ltYm9sXSAhPSA3IHx8IG9iamVjdEtleXMobmF0aXZlQXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gYWxwaGFiZXQ7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgdmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbiAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBvYmplY3RLZXlzKFMpLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6IG5hdGl2ZUFzc2lnbjtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAqL1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IGRvY3VtZW50LmRvbWFpbiAmJiBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gYWN0aXZlWERvY3VtZW50ID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKCk7XG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nXG4gICAgPyBnZXRXaW5kb3dOYW1lcyhpdClcbiAgICA6IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KGl0KSk7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyB7fS50b1N0cmluZyA6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGVycm9yOiBmYWxzZSwgdmFsdWU6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yOiB0cnVlLCB2YWx1ZTogZXJyb3IgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFU10pIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBTcGVjaWVzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBkZWZhdWx0Q29uc3RydWN0b3IgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIElTX0lPUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtaW9zJyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZScpO1xuXG52YXIgbG9jYXRpb24gPSBnbG9iYWwubG9jYXRpb247XG52YXIgc2V0ID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhciA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcblxudmFyIHJ1biA9IGZ1bmN0aW9uIChpZCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xuXG52YXIgcnVubmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcnVuKGlkKTtcbiAgfTtcbn07XG5cbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4oZXZlbnQuZGF0YSk7XG59O1xuXG52YXIgcG9zdCA9IGZ1bmN0aW9uIChpZCkge1xuICAvLyBvbGQgZW5naW5lcyBoYXZlIG5vdCBsb2NhdGlvbi5vcmlnaW5cbiAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QpO1xufTtcblxuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXQgfHwgIWNsZWFyKSB7XG4gIHNldCA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSkuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhciA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChJU19OT0RFKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2socnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIC8vIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjI0XG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwgJiYgIUlTX0lPUykge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gYmluZChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoXG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiZcbiAgICB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgICFnbG9iYWwuaW1wb3J0U2NyaXB0cyAmJlxuICAgIGxvY2F0aW9uICYmIGxvY2F0aW9uLnByb3RvY29sICE9PSAnZmlsZTonICYmXG4gICAgIWZhaWxzKHBvc3QpXG4gICkge1xuICAgIGRlZmVyID0gcG9zdDtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChydW5uZXIoaWQpLCAwKTtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgY2xlYXI6IGNsZWFyXG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbmV4cG9ydHMuZiA9IHdlbGxLbm93blN5bWJvbDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcbi8vIEZGNDktIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc2xpY2UnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdzbGljZScsIHsgQUNDRVNTT1JTOiB0cnVlLCAwOiAwLCAxOiAyIH0pO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIG5hdGl2ZVNsaWNlID0gW10uc2xpY2U7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc2xpY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc2xpY2Vcbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcbiAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xuICAgIC8vIGlubGluZSBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBmb3IgdXNhZ2UgbmF0aXZlIGBBcnJheSNzbGljZWAgd2hlcmUgaXQncyBwb3NzaWJsZVxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xuICAgIGlmIChpc0FycmF5KE8pKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IE8uY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiBDb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNsaWNlLmNhbGwoTywgaywgZmluKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuJCh7IHRhcmdldDogJ0Z1bmN0aW9uJywgcHJvdG86IHRydWUgfSwge1xuICBiaW5kOiBiaW5kXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtYXNzaWduJyk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogT2JqZWN0LmFzc2lnbiAhPT0gYXNzaWduIH0sIHtcbiAgYXNzaWduOiBhc3NpZ25cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydHk6IG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlLmZcbn0pO1xuIiwidmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoIVRPX1NUUklOR19UQUdfU1VQUE9SVCkge1xuICByZWRlZmluZShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCB0b1N0cmluZywgeyB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBOYXRpdmVQcm9taXNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1wcm9taXNlLWNvbnN0cnVjdG9yJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZS1hbGwnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9taWNyb3Rhc2snKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUnKTtcbnZhciBob3N0UmVwb3J0RXJyb3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hvc3QtcmVwb3J0LWVycm9ycycpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BlcmZvcm0nKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZScpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihQUk9NSVNFKTtcbnZhciBQcm9taXNlQ29uc3RydWN0b3IgPSBOYXRpdmVQcm9taXNlO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyICRmZXRjaCA9IGdldEJ1aWx0SW4oJ2ZldGNoJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xudmFyIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5O1xudmFyIERJU1BBVENIX0VWRU5UID0gISEoZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRXZlbnQgJiYgZ2xvYmFsLmRpc3BhdGNoRXZlbnQpO1xudmFyIE5BVElWRV9SRUpFQ1RJT05fRVZFTlQgPSB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbic7XG52YXIgVU5IQU5ETEVEX1JFSkVDVElPTiA9ICd1bmhhbmRsZWRyZWplY3Rpb24nO1xudmFyIFJFSkVDVElPTl9IQU5ETEVEID0gJ3JlamVjdGlvbmhhbmRsZWQnO1xudmFyIFBFTkRJTkcgPSAwO1xudmFyIEZVTEZJTExFRCA9IDE7XG52YXIgUkVKRUNURUQgPSAyO1xudmFyIEhBTkRMRUQgPSAxO1xudmFyIFVOSEFORExFRCA9IDI7XG52YXIgSW50ZXJuYWwsIE93blByb21pc2VDYXBhYmlsaXR5LCBQcm9taXNlV3JhcHBlciwgbmF0aXZlVGhlbjtcblxudmFyIEZPUkNFRCA9IGlzRm9yY2VkKFBST01JU0UsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIEdMT0JBTF9DT1JFX0pTX1BST01JU0UgPSBpbnNwZWN0U291cmNlKFByb21pc2VDb25zdHJ1Y3RvcikgIT09IFN0cmluZyhQcm9taXNlQ29uc3RydWN0b3IpO1xuICBpZiAoIUdMT0JBTF9DT1JFX0pTX1BST01JU0UpIHtcbiAgICAvLyBWOCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgLy8gV2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICBpZiAoVjhfVkVSU0lPTiA9PT0gNjYpIHJldHVybiB0cnVlO1xuICAgIC8vIFVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICBpZiAoIUlTX05PREUgJiYgIU5BVElWRV9SRUpFQ1RJT05fRVZFTlQpIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIFdlIG5lZWQgUHJvbWlzZSNmaW5hbGx5IGluIHRoZSBwdXJlIHZlcnNpb24gZm9yIHByZXZlbnRpbmcgcHJvdG90eXBlIHBvbGx1dGlvblxuICBpZiAoSVNfUFVSRSAmJiAhUHJvbWlzZUNvbnN0cnVjdG9yLnByb3RvdHlwZVsnZmluYWxseSddKSByZXR1cm4gdHJ1ZTtcbiAgLy8gV2UgY2FuJ3QgdXNlIEBAc3BlY2llcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbiAgaWYgKFY4X1ZFUlNJT04gPj0gNTEgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFByb21pc2VDb25zdHJ1Y3RvcikpIHJldHVybiBmYWxzZTtcbiAgLy8gRGV0ZWN0IGNvcnJlY3RuZXNzIG9mIHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlQ29uc3RydWN0b3IucmVzb2x2ZSgxKTtcbiAgdmFyIEZha2VQcm9taXNlID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICBleGVjKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbiAgfTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gcHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9O1xuICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IEZha2VQcm9taXNlO1xuICByZXR1cm4gIShwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlKTtcbn0pO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9IEZPUkNFRCB8fCAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBQcm9taXNlQ29uc3RydWN0b3IuYWxsKGl0ZXJhYmxlKVsnY2F0Y2gnXShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xuXG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHN0YXRlLCBpc1JlamVjdCkge1xuICBpZiAoc3RhdGUubm90aWZpZWQpIHJldHVybjtcbiAgc3RhdGUubm90aWZpZWQgPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBzdGF0ZS5yZWFjdGlvbnM7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIG9rID0gc3RhdGUuc3RhdGUgPT0gRlVMRklMTEVEO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IGNoYWluW2luZGV4KytdO1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVqZWN0aW9uID09PSBVTkhBTkRMRUQpIG9uSGFuZGxlVW5oYW5kbGVkKHN0YXRlKTtcbiAgICAgICAgICAgIHN0YXRlLnJlamVjdGlvbiA9IEhBTkRMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIGNhbiB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUucmVhY3Rpb25zID0gW107XG4gICAgc3RhdGUubm90aWZpZWQgPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXN0YXRlLnJlamVjdGlvbikgb25VbmhhbmRsZWQoc3RhdGUpO1xuICB9KTtcbn07XG5cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIHByb21pc2UsIHJlYXNvbikge1xuICB2YXIgZXZlbnQsIGhhbmRsZXI7XG4gIGlmIChESVNQQVRDSF9FVkVOVCkge1xuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQucHJvbWlzZSA9IHByb21pc2U7XG4gICAgZXZlbnQucmVhc29uID0gcmVhc29uO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9IGVsc2UgZXZlbnQgPSB7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcmVhc29uIH07XG4gIGlmICghTkFUSVZFX1JFSkVDVElPTl9FVkVOVCAmJiAoaGFuZGxlciA9IGdsb2JhbFsnb24nICsgbmFtZV0pKSBoYW5kbGVyKGV2ZW50KTtcbiAgZWxzZSBpZiAobmFtZSA9PT0gVU5IQU5ETEVEX1JFSkVDVElPTikgaG9zdFJlcG9ydEVycm9ycygnVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgcmVhc29uKTtcbn07XG5cbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBzdGF0ZS5mYWNhZGU7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIElTX1VOSEFORExFRCA9IGlzVW5oYW5kbGVkKHN0YXRlKTtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChJU19VTkhBTkRMRUQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoSVNfTk9ERSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChVTkhBTkRMRURfUkVKRUNUSU9OLCBwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBzdGF0ZS5yZWplY3Rpb24gPSBJU19OT0RFIHx8IGlzVW5oYW5kbGVkKHN0YXRlKSA/IFVOSEFORExFRCA6IEhBTkRMRUQ7XG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB0aHJvdyByZXN1bHQudmFsdWU7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUucmVqZWN0aW9uICE9PSBIQU5ETEVEICYmICFzdGF0ZS5wYXJlbnQ7XG59O1xuXG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gc3RhdGUuZmFjYWRlO1xuICAgIGlmIChJU19OT0RFKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChSRUpFQ1RJT05fSEFORExFRCwgcHJvbWlzZSwgc3RhdGUudmFsdWUpO1xuICB9KTtcbn07XG5cbnZhciBiaW5kID0gZnVuY3Rpb24gKGZuLCBzdGF0ZSwgdW53cmFwKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmbihzdGF0ZSwgdmFsdWUsIHVud3JhcCk7XG4gIH07XG59O1xuXG52YXIgaW50ZXJuYWxSZWplY3QgPSBmdW5jdGlvbiAoc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICBzdGF0ZS5zdGF0ZSA9IFJFSkVDVEVEO1xuICBub3RpZnkoc3RhdGUsIHRydWUpO1xufTtcblxudmFyIGludGVybmFsUmVzb2x2ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XG4gIHRyeSB7XG4gICAgaWYgKHN0YXRlLmZhY2FkZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIHZhciB0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSk7XG4gICAgaWYgKHRoZW4pIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBkb25lOiBmYWxzZSB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSxcbiAgICAgICAgICAgIGJpbmQoaW50ZXJuYWxSZXNvbHZlLCB3cmFwcGVyLCBzdGF0ZSksXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVqZWN0LCB3cmFwcGVyLCBzdGF0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGludGVybmFsUmVqZWN0KHdyYXBwZXIsIGVycm9yLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgc3RhdGUuc3RhdGUgPSBGVUxGSUxMRUQ7XG4gICAgICBub3RpZnkoc3RhdGUsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW50ZXJuYWxSZWplY3QoeyBkb25lOiBmYWxzZSB9LCBlcnJvciwgc3RhdGUpO1xuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKEZPUkNFRCkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICBQcm9taXNlQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCBQcm9taXNlQ29uc3RydWN0b3IsIFBST01JU0UpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihiaW5kKGludGVybmFsUmVzb2x2ZSwgc3RhdGUpLCBiaW5kKGludGVybmFsUmVqZWN0LCBzdGF0ZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpbnRlcm5hbFJlamVjdChzdGF0ZSwgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgdHlwZTogUFJPTUlTRSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgbm90aWZpZWQ6IGZhbHNlLFxuICAgICAgcGFyZW50OiBmYWxzZSxcbiAgICAgIHJlYWN0aW9uczogW10sXG4gICAgICByZWplY3Rpb246IGZhbHNlLFxuICAgICAgc3RhdGU6IFBFTkRJTkcsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKFByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHtcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUudGhlbmAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS50aGVuXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUodGhpcyk7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IElTX05PREUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHN0YXRlLnBhcmVudCA9IHRydWU7XG4gICAgICBzdGF0ZS5yZWFjdGlvbnMucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAoc3RhdGUuc3RhdGUgIT0gUEVORElORykgbm90aWZ5KHN0YXRlLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIGBQcm9taXNlLnByb3RvdHlwZS5jYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS5jYXRjaFxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHByb21pc2UpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gYmluZChpbnRlcm5hbFJlc29sdmUsIHN0YXRlKTtcbiAgICB0aGlzLnJlamVjdCA9IGJpbmQoaW50ZXJuYWxSZWplY3QsIHN0YXRlKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gUHJvbWlzZUNvbnN0cnVjdG9yIHx8IEMgPT09IFByb21pc2VXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG5cbiAgaWYgKCFJU19QVVJFICYmIHR5cGVvZiBOYXRpdmVQcm9taXNlID09ICdmdW5jdGlvbicpIHtcbiAgICBuYXRpdmVUaGVuID0gTmF0aXZlUHJvbWlzZS5wcm90b3R5cGUudGhlbjtcblxuICAgIC8vIHdyYXAgbmF0aXZlIFByb21pc2UjdGhlbiBmb3IgbmF0aXZlIGFzeW5jIGZ1bmN0aW9uc1xuICAgIHJlZGVmaW5lKE5hdGl2ZVByb21pc2UucHJvdG90eXBlLCAndGhlbicsIGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZUNvbnN0cnVjdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbmF0aXZlVGhlbi5jYWxsKHRoYXQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjQwXG4gICAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG5cbiAgICAvLyB3cmFwIGZldGNoIHJlc3VsdFxuICAgIGlmICh0eXBlb2YgJGZldGNoID09ICdmdW5jdGlvbicpICQoeyBnbG9iYWw6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIGZldGNoOiBmdW5jdGlvbiBmZXRjaChpbnB1dCAvKiAsIGluaXQgKi8pIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKFByb21pc2VDb25zdHJ1Y3RvciwgJGZldGNoLmFwcGx5KGdsb2JhbCwgYXJndW1lbnRzKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBQcm9taXNlOiBQcm9taXNlQ29uc3RydWN0b3Jcbn0pO1xuXG5zZXRUb1N0cmluZ1RhZyhQcm9taXNlQ29uc3RydWN0b3IsIFBST01JU0UsIGZhbHNlLCB0cnVlKTtcbnNldFNwZWNpZXMoUFJPTUlTRSk7XG5cblByb21pc2VXcmFwcGVyID0gZ2V0QnVpbHRJbihQUk9NSVNFKTtcblxuLy8gc3RhdGljc1xuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBgUHJvbWlzZS5yZWplY3RgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UucmVqZWN0XG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIGNhcGFiaWxpdHkucmVqZWN0LmNhbGwodW5kZWZpbmVkLCByKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIHx8IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlc29sdmVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UucmVzb2x2ZVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoSVNfUFVSRSAmJiB0aGlzID09PSBQcm9taXNlV3JhcHBlciA/IFByb21pc2VDb25zdHJ1Y3RvciA6IHRoaXMsIHgpO1xuICB9XG59KTtcblxuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgLy8gYFByb21pc2UuYWxsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLmFsbFxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHByb21pc2VSZXNvbHZlID0gYUZ1bmN0aW9uKEMucmVzb2x2ZSk7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGNvdW50ZXIrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgICRwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gYFByb21pc2UucmFjZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5yYWNlXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIi8vIGBTeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uYCBnZXR0ZXJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvblxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG5cbnZhciBOYXRpdmVTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xuXG5pZiAoREVTQ1JJUFRPUlMgJiYgdHlwZW9mIE5hdGl2ZVN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICghKCdkZXNjcmlwdGlvbicgaW4gTmF0aXZlU3ltYm9sLnByb3RvdHlwZSkgfHxcbiAgLy8gU2FmYXJpIDEyIGJ1Z1xuICBOYXRpdmVTeW1ib2woKS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkXG4pKSB7XG4gIHZhciBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUgPSB7fTtcbiAgLy8gd3JhcCBTeW1ib2wgY29uc3RydWN0b3IgZm9yIGNvcnJlY3Qgd29yayB3aXRoIHVuZGVmaW5lZCBkZXNjcmlwdGlvblxuICB2YXIgU3ltYm9sV3JhcHBlciA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IFN0cmluZyhhcmd1bWVudHNbMF0pO1xuICAgIHZhciByZXN1bHQgPSB0aGlzIGluc3RhbmNlb2YgU3ltYm9sV3JhcHBlclxuICAgICAgPyBuZXcgTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKVxuICAgICAgLy8gaW4gRWRnZSAxMywgU3RyaW5nKFN5bWJvbCh1bmRlZmluZWQpKSA9PT0gJ1N5bWJvbCh1bmRlZmluZWQpJ1xuICAgICAgOiBkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkID8gTmF0aXZlU3ltYm9sKCkgOiBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pO1xuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZVtyZXN1bHRdID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKFN5bWJvbFdyYXBwZXIsIE5hdGl2ZVN5bWJvbCk7XG4gIHZhciBzeW1ib2xQcm90b3R5cGUgPSBTeW1ib2xXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZVN5bWJvbC5wcm90b3R5cGU7XG4gIHN5bWJvbFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5bWJvbFdyYXBwZXI7XG5cbiAgdmFyIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgbmF0aXZlID0gU3RyaW5nKE5hdGl2ZVN5bWJvbCgndGVzdCcpKSA9PSAnU3ltYm9sKHRlc3QpJztcbiAgdmFyIHJlZ2V4cCA9IC9eU3ltYm9sXFwoKC4qKVxcKVteKV0rJC87XG4gIGRlZmluZVByb3BlcnR5KHN5bWJvbFByb3RvdHlwZSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgdmFyIHN5bWJvbCA9IGlzT2JqZWN0KHRoaXMpID8gdGhpcy52YWx1ZU9mKCkgOiB0aGlzO1xuICAgICAgdmFyIHN0cmluZyA9IHN5bWJvbFRvU3RyaW5nLmNhbGwoc3ltYm9sKTtcbiAgICAgIGlmIChoYXMoRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlLCBzeW1ib2wpKSByZXR1cm4gJyc7XG4gICAgICB2YXIgZGVzYyA9IG5hdGl2ZSA/IHN0cmluZy5zbGljZSg3LCAtMSkgOiBzdHJpbmcucmVwbGFjZShyZWdleHAsICckMScpO1xuICAgICAgcmV0dXJuIGRlc2MgPT09ICcnID8gdW5kZWZpbmVkIDogZGVzYztcbiAgICB9XG4gIH0pO1xuXG4gICQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgU3ltYm9sOiBTeW1ib2xXcmFwcGVyXG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBuYXRpdmVPYmplY3RDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLWV4dGVybmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkJyk7XG52YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG5cbnZhciBISURERU4gPSBzaGFyZWRLZXkoJ2hpZGRlbicpO1xudmFyIFNZTUJPTCA9ICdTeW1ib2wnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNZTUJPTCk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJHN0cmluZ2lmeSA9IGdldEJ1aWx0SW4oJ0pTT04nLCAnc3RyaW5naWZ5Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZjtcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmY7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvdHlwZVN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzdHJpbmctdG8tc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgU3ltYm9sVG9TdHJpbmdSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXRvLXN0cmluZy1yZWdpc3RyeScpO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgVVNFX1NFVFRFUiA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RDcmVhdGUobmF0aXZlRGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgdmFyIE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0UHJvdG90eXBlLCBQKTtcbiAgaWYgKE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IpIGRlbGV0ZSBPYmplY3RQcm90b3R5cGVbUF07XG4gIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICBpZiAoT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvciAmJiBPICE9PSBPYmplY3RQcm90b3R5cGUpIHtcbiAgICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90b3R5cGUsIFAsIE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IpO1xuICB9XG59IDogbmF0aXZlRGVmaW5lUHJvcGVydHk7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZywgZGVzY3JpcHRpb24pIHtcbiAgdmFyIHN5bWJvbCA9IEFsbFN5bWJvbHNbdGFnXSA9IG5hdGl2ZU9iamVjdENyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzZXRJbnRlcm5hbFN0YXRlKHN5bWJvbCwge1xuICAgIHR5cGU6IFNZTUJPTCxcbiAgICB0YWc6IHRhZyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgfSk7XG4gIGlmICghREVTQ1JJUFRPUlMpIHN5bWJvbC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICByZXR1cm4gc3ltYm9sO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChpdCkgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgaWYgKE8gPT09IE9iamVjdFByb3RvdHlwZSkgJGRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFAsIEF0dHJpYnV0ZXMpO1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFBdHRyaWJ1dGVzLmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKE8sIEhJRERFTikpIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIEhJRERFTiwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHt9KSk7XG4gICAgICBPW0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoTywgSElEREVOKSAmJiBPW0hJRERFTl1ba2V5XSkgT1tISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSBuYXRpdmVPYmplY3RDcmVhdGUoQXR0cmlidXRlcywgeyBlbnVtZXJhYmxlOiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2NyaXB0b3IoTywga2V5LCBBdHRyaWJ1dGVzKTtcbiAgfSByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywga2V5LCBBdHRyaWJ1dGVzKTtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhwcm9wZXJ0aWVzKS5jb25jYXQoJGdldE93blByb3BlcnR5U3ltYm9scyhwcm9wZXJ0aWVzKSk7XG4gICRmb3JFYWNoKGtleXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIURFU0NSSVBUT1JTIHx8ICRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHByb3BlcnRpZXMsIGtleSkpICRkZWZpbmVQcm9wZXJ0eShPLCBrZXksIHByb3BlcnRpZXNba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gTztcbn07XG5cbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IG5hdGl2ZU9iamVjdENyZWF0ZShPKSA6ICRkZWZpbmVQcm9wZXJ0aWVzKG5hdGl2ZU9iamVjdENyZWF0ZShPKSwgUHJvcGVydGllcyk7XG59O1xuXG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgUCA9IHRvUHJpbWl0aXZlKFYsIHRydWUpO1xuICB2YXIgZW51bWVyYWJsZSA9IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGhpcywgUCk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIFApICYmICFoYXMoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGVudW1lcmFibGUgfHwgIWhhcyh0aGlzLCBQKSB8fCAhaGFzKEFsbFN5bWJvbHMsIFApIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtQXSA/IGVudW1lcmFibGUgOiB0cnVlO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICB2YXIgaXQgPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBkZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xuICBpZiAoZGVzY3JpcHRvciAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSB7XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZGVzY3JpcHRvcjtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChPKSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgJGZvckVhY2gobmFtZXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoaGlkZGVuS2V5cywga2V5KSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhPKSB7XG4gIHZhciBJU19PQkpFQ1RfUFJPVE9UWVBFID0gTyA9PT0gT2JqZWN0UHJvdG90eXBlO1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKElTX09CSkVDVF9QUk9UT1RZUEUgPyBPYmplY3RQcm90b3R5cGVTeW1ib2xzIDogdG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSAmJiAoIUlTX09CSkVDVF9QUk9UT1RZUEUgfHwgaGFzKE9iamVjdFByb3RvdHlwZSwga2V5KSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIGBTeW1ib2xgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC1jb25zdHJ1Y3RvclxuaWYgKCFOQVRJVkVfU1lNQk9MKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICFhcmd1bWVudHMubGVuZ3RoIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHRhZyA9IHVpZChkZXNjcmlwdGlvbik7XG4gICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvdHlwZSkgc2V0dGVyLmNhbGwoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjcmlwdG9yKHRoaXMsIHRhZywgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgVVNFX1NFVFRFUikgc2V0U3ltYm9sRGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogc2V0dGVyIH0pO1xuICAgIHJldHVybiB3cmFwKHRhZywgZGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykudGFnO1xuICB9KTtcblxuICByZWRlZmluZSgkU3ltYm9sLCAnd2l0aG91dFNldHRlcicsIGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiB3cmFwKHVpZChkZXNjcmlwdGlvbiksIGRlc2NyaXB0aW9uKTtcbiAgfSk7XG5cbiAgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3ZWxsS25vd25TeW1ib2wobmFtZSksIG5hbWUpO1xuICB9O1xuXG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLVN5bWJvbC1kZXNjcmlwdGlvblxuICAgIG5hdGl2ZURlZmluZVByb3BlcnR5KCRTeW1ib2xbUFJPVE9UWVBFXSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykuZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFJU19QVVJFKSB7XG4gICAgICByZWRlZmluZShPYmplY3RQcm90b3R5cGUsICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgeyB1bnNhZmU6IHRydWUgfSk7XG4gICAgfVxuICB9XG59XG5cbiQoeyBnbG9iYWw6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wsIHNoYW06ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgU3ltYm9sOiAkU3ltYm9sXG59KTtcblxuJGZvckVhY2gob2JqZWN0S2V5cyhXZWxsS25vd25TeW1ib2xzU3RvcmUpLCBmdW5jdGlvbiAobmFtZSkge1xuICBkZWZpbmVXZWxsS25vd25TeW1ib2wobmFtZSk7XG59KTtcblxuJCh7IHRhcmdldDogU1lNQk9MLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYFN5bWJvbC5mb3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5mb3JcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGtleSk7XG4gICAgaWYgKGhhcyhTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5LCBzdHJpbmcpKSByZXR1cm4gU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddO1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKHN0cmluZyk7XG4gICAgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddID0gc3ltYm9sO1xuICAgIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltYm9sXSA9IHN0cmluZztcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9LFxuICAvLyBgU3ltYm9sLmtleUZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLmtleWZvclxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCcpO1xuICAgIGlmIChoYXMoU3ltYm9sVG9TdHJpbmdSZWdpc3RyeSwgc3ltKSkgcmV0dXJuIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltXTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IFVTRV9TRVRURVIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgVVNFX1NFVFRFUiA9IGZhbHNlOyB9XG59KTtcblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIC8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlzeW1ib2xzXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIENocm9tZSAzOCBhbmQgMzkgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIGZhaWxzIG9uIHByaW1pdGl2ZXNcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM0NDNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IGZhaWxzKGZ1bmN0aW9uICgpIHsgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmYoMSk7IH0pIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIGBKU09OLnN0cmluZ2lmeWAgbWV0aG9kIGJlaGF2aW9yIHdpdGggc3ltYm9sc1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1qc29uLnN0cmluZ2lmeVxuaWYgKCRzdHJpbmdpZnkpIHtcbiAgdmFyIEZPUkNFRF9KU09OX1NUUklOR0lGWSA9ICFOQVRJVkVfU1lNQk9MIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3ltYm9sID0gJFN5bWJvbCgpO1xuICAgIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gICAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9ICdbbnVsbF0nXG4gICAgICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT0gJ3t9J1xuICAgICAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9ICd7fSc7XG4gIH0pO1xuXG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRURfSlNPTl9TVFJJTkdJRlkgfSwge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0LCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICAgIHZhciBpbmRleCA9IDE7XG4gICAgICB2YXIgJHJlcGxhY2VyO1xuICAgICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpbmRleCkgYXJncy5wdXNoKGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgICAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIH07XG4gICAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgICByZXR1cm4gJHN0cmluZ2lmeS5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3ByaW1pdGl2ZVxuaWYgKCEkU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbn1cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9zdHJpbmd0YWdcbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsIFNZTUJPTCk7XG5cbmhpZGRlbktleXNbSElEREVOXSA9IHRydWU7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=