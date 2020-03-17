/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!./css/index.css":
/*!************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!./css/index.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"\\r\\n/* Style for \\\"Rectangle\\\" */\\r\\nhtml {\\r\\n  --colors-light-white: #00ffeb;\\r\\n  --color-dark-cranberry: #bb4079;\\r\\n  --color-dark-mint: #03a17b;\\r\\n  --colors-light-white: rgba(153, 164, 182, 0.21);\\r\\n  --color-dark-orange: #e04a17;\\r\\n  --color-normal-lime: #c1eb1d;\\r\\n  --color-dark-blueberry: #0077db;\\r\\n  --color-pure-white: #ffffff;\\r\\n  --colors-light-gray: #f6f9fc;\\r\\n  --color-darkest-raspberry: #8e003f;\\r\\n  --color-pitch-black: #000000;\\r\\n  --color-midnight-blue: #202d3d;\\r\\n  --color-darkest-apple: #027722;\\r\\n  --color-dark-apple: #04aa42;\\r\\n  --color-lightest-orange: #fbe9e7;\\r\\n  --color-light-orange: #fa8a64;\\r\\n  --colors: */;\\r\\n  --color-gray-heather: #bbc1c7;\\r\\n  --color-dark-plum: #5d2d79;\\r\\n  --color-dark-lime: #a6c100;\\r\\n  --color-lightest-lime: #f8fee7;\\r\\n  --color-lightest-raspberry: #ffe4e9;\\r\\n  --color-darkest-yellow: #f37f19;\\r\\n  --color-darkest-blueberry: #0048aa;\\r\\n  --color-lightest-mint: #dff9f5;\\r\\n  --color-light-blackberry: #6384e0;\\r\\n  --color-normal-plum: #883888;\\r\\n  --color-translucent-1: rgba(127, 127, 127, 0.5);\\r\\n  --color-deep-blue: #001424;\\r\\n  --color-gray-chateau: #9198a0;\\r\\n  --color-dark-yellow: #fac031;\\r\\n  --color-lightest-plum: #f0e7f0;\\r\\n  --color-dark-blackberry: #003db7;\\r\\n  --light-white: #99a4b6;\\r\\n  --color-red-1: #f51d16;\\r\\n  --color-normal-apple: #26cd58;\\r\\n  --color-light-lime: #d3f36b;\\r\\n  --color-light-yellow: #fdf177;\\r\\n  --color-light-apple: #74df8b;\\r\\n  --color-gray-raven: #6e7782;\\r\\n  --color-lightest-blackberry: #e7eafa;\\r\\n  --color-white-smoke: #f2f3f7;\\r\\n  --color-gray-1: #4b4b4b;\\r\\n  --color-darkest-mint: #00724d;\\r\\n  --color-lightest-apple: #e8faeb;\\r\\n  --color-darkest-cranberry: #7f3363;\\r\\n  --colors-yellow: #ffe200;\\r\\n  --color-light-raspberry: #f55f7e;\\r\\n  --color-blue-1: #2c3d5b;\\r\\n  --color-lightest-cranberry: #f9e7f0;\\r\\n  --color-darkest-plum: #471c61;\\r\\n  --color-lightest-yellow: #fffde8;\\r\\n  --color-light-blueberry: #45b6fc;\\r\\n  --color-darkest-orange: #ba360a;\\r\\n  --color-normal-cranberry: #e54887;\\r\\n  --color-darkest-lime: #808201;\\r\\n  --color-light-cranberry: #e677ad;\\r\\n  --color-normal-orange: #f95721;\\r\\n  --color-mts-red: #e30611;\\r\\n  --color-normal-yellow: #fbe739;\\r\\n  --color-dark-raspberry: #c51345;\\r\\n  --color-normal-blackberry: #014fce;\\r\\n  --color-normal-raspberry: #ea1f49;\\r\\n  --colors-mtr-red--selected: #e30613;\\r\\n  --color-red-2: #c90000;\\r\\n  --color-light-mint: #00d9bc;\\r\\n  --colors-light--gray: rgba(225, 235, 244, 0.31);\\r\\n  --colors-light-gray: #e1ebf4;\\r\\n  --color-normal-mint: #00c19b;\\r\\n  --color-lightest-blueberry: #e1f3fe;\\r\\n  --color-darkest-blackberry: #002094;\\r\\n  --color-link-water: #e2e5eb;\\r\\n  --colors-light-blue: #4f5e70;\\r\\n  --color-normal-blueberry: #0097fd;\\r\\n  --color-light-plum: #a86ea7;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgba(242, 243, 247, 0.5);\\r\\n}\\r\\n\\r\\n.graph {\\r\\n  width: 90%;\\r\\n  height: 386px;\\r\\n  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.05);\\r\\n  border: 1px solid var(--color-link-water);\\r\\n  background-color: var(--color-pure-white);\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  padding: 15px;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"index.css\"],\"names\":[],\"mappings\":\";AACA,0BAA0B;AAC1B;EACE,6BAA6B;EAC7B,+BAA+B;EAC/B,0BAA0B;EAC1B,+CAA+C;EAC/C,4BAA4B;EAC5B,4BAA4B;EAC5B,+BAA+B;EAC/B,2BAA2B;EAC3B,4BAA4B;EAC5B,kCAAkC;EAClC,4BAA4B;EAC5B,8BAA8B;EAC9B,8BAA8B;EAC9B,2BAA2B;EAC3B,gCAAgC;EAChC,6BAA6B;EAC7B,YAAY;EACZ,6BAA6B;EAC7B,0BAA0B;EAC1B,0BAA0B;EAC1B,8BAA8B;EAC9B,mCAAmC;EACnC,+BAA+B;EAC/B,kCAAkC;EAClC,8BAA8B;EAC9B,iCAAiC;EACjC,4BAA4B;EAC5B,+CAA+C;EAC/C,0BAA0B;EAC1B,6BAA6B;EAC7B,4BAA4B;EAC5B,8BAA8B;EAC9B,gCAAgC;EAChC,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;EAC7B,2BAA2B;EAC3B,6BAA6B;EAC7B,4BAA4B;EAC5B,2BAA2B;EAC3B,oCAAoC;EACpC,4BAA4B;EAC5B,uBAAuB;EACvB,6BAA6B;EAC7B,+BAA+B;EAC/B,kCAAkC;EAClC,wBAAwB;EACxB,gCAAgC;EAChC,uBAAuB;EACvB,mCAAmC;EACnC,6BAA6B;EAC7B,gCAAgC;EAChC,gCAAgC;EAChC,+BAA+B;EAC/B,iCAAiC;EACjC,6BAA6B;EAC7B,gCAAgC;EAChC,8BAA8B;EAC9B,wBAAwB;EACxB,8BAA8B;EAC9B,+BAA+B;EAC/B,kCAAkC;EAClC,iCAAiC;EACjC,mCAAmC;EACnC,sBAAsB;EACtB,2BAA2B;EAC3B,+CAA+C;EAC/C,4BAA4B;EAC5B,4BAA4B;EAC5B,mCAAmC;EACnC,mCAAmC;EACnC,2BAA2B;EAC3B,4BAA4B;EAC5B,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,aAAa;EACb,2CAA2C;EAC3C,yCAAyC;EACzC,yCAAyC;EACzC,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;AACf\",\"file\":\"index.css\",\"sourcesContent\":[\"\\r\\n/* Style for \\\"Rectangle\\\" */\\r\\nhtml {\\r\\n  --colors-light-white: #00ffeb;\\r\\n  --color-dark-cranberry: #bb4079;\\r\\n  --color-dark-mint: #03a17b;\\r\\n  --colors-light-white: rgba(153, 164, 182, 0.21);\\r\\n  --color-dark-orange: #e04a17;\\r\\n  --color-normal-lime: #c1eb1d;\\r\\n  --color-dark-blueberry: #0077db;\\r\\n  --color-pure-white: #ffffff;\\r\\n  --colors-light-gray: #f6f9fc;\\r\\n  --color-darkest-raspberry: #8e003f;\\r\\n  --color-pitch-black: #000000;\\r\\n  --color-midnight-blue: #202d3d;\\r\\n  --color-darkest-apple: #027722;\\r\\n  --color-dark-apple: #04aa42;\\r\\n  --color-lightest-orange: #fbe9e7;\\r\\n  --color-light-orange: #fa8a64;\\r\\n  --colors: */;\\r\\n  --color-gray-heather: #bbc1c7;\\r\\n  --color-dark-plum: #5d2d79;\\r\\n  --color-dark-lime: #a6c100;\\r\\n  --color-lightest-lime: #f8fee7;\\r\\n  --color-lightest-raspberry: #ffe4e9;\\r\\n  --color-darkest-yellow: #f37f19;\\r\\n  --color-darkest-blueberry: #0048aa;\\r\\n  --color-lightest-mint: #dff9f5;\\r\\n  --color-light-blackberry: #6384e0;\\r\\n  --color-normal-plum: #883888;\\r\\n  --color-translucent-1: rgba(127, 127, 127, 0.5);\\r\\n  --color-deep-blue: #001424;\\r\\n  --color-gray-chateau: #9198a0;\\r\\n  --color-dark-yellow: #fac031;\\r\\n  --color-lightest-plum: #f0e7f0;\\r\\n  --color-dark-blackberry: #003db7;\\r\\n  --light-white: #99a4b6;\\r\\n  --color-red-1: #f51d16;\\r\\n  --color-normal-apple: #26cd58;\\r\\n  --color-light-lime: #d3f36b;\\r\\n  --color-light-yellow: #fdf177;\\r\\n  --color-light-apple: #74df8b;\\r\\n  --color-gray-raven: #6e7782;\\r\\n  --color-lightest-blackberry: #e7eafa;\\r\\n  --color-white-smoke: #f2f3f7;\\r\\n  --color-gray-1: #4b4b4b;\\r\\n  --color-darkest-mint: #00724d;\\r\\n  --color-lightest-apple: #e8faeb;\\r\\n  --color-darkest-cranberry: #7f3363;\\r\\n  --colors-yellow: #ffe200;\\r\\n  --color-light-raspberry: #f55f7e;\\r\\n  --color-blue-1: #2c3d5b;\\r\\n  --color-lightest-cranberry: #f9e7f0;\\r\\n  --color-darkest-plum: #471c61;\\r\\n  --color-lightest-yellow: #fffde8;\\r\\n  --color-light-blueberry: #45b6fc;\\r\\n  --color-darkest-orange: #ba360a;\\r\\n  --color-normal-cranberry: #e54887;\\r\\n  --color-darkest-lime: #808201;\\r\\n  --color-light-cranberry: #e677ad;\\r\\n  --color-normal-orange: #f95721;\\r\\n  --color-mts-red: #e30611;\\r\\n  --color-normal-yellow: #fbe739;\\r\\n  --color-dark-raspberry: #c51345;\\r\\n  --color-normal-blackberry: #014fce;\\r\\n  --color-normal-raspberry: #ea1f49;\\r\\n  --colors-mtr-red--selected: #e30613;\\r\\n  --color-red-2: #c90000;\\r\\n  --color-light-mint: #00d9bc;\\r\\n  --colors-light--gray: rgba(225, 235, 244, 0.31);\\r\\n  --colors-light-gray: #e1ebf4;\\r\\n  --color-normal-mint: #00c19b;\\r\\n  --color-lightest-blueberry: #e1f3fe;\\r\\n  --color-darkest-blackberry: #002094;\\r\\n  --color-link-water: #e2e5eb;\\r\\n  --colors-light-blue: #4f5e70;\\r\\n  --color-normal-blueberry: #0097fd;\\r\\n  --color-light-plum: #a86ea7;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgba(242, 243, 247, 0.5);\\r\\n}\\r\\n\\r\\n.graph {\\r\\n  width: 90%;\\r\\n  height: 386px;\\r\\n  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.05);\\r\\n  border: 1px solid var(--color-link-water);\\r\\n  background-color: var(--color-pure-white);\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  padding: 15px;\\r\\n}\\r\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/index.css?../node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "../node_modules/webpack/hot sync ^\\.\\/log$":
/*!***************************************************************!*\
  !*** ../node_modules/webpack/hot sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./log\": \"../node_modules/webpack/hot/log.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"../node_modules/webpack/hot sync ^\\\\.\\\\/log$\";\n\n//# sourceURL=webpack:///../node_modules/webpack/hot_sync_nonrecursive_^\\.\\/log$?");

/***/ }),

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ \"../node_modules/css-loader/dist/cjs.js?!./css/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./css/index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_test_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/test.jsx */ \"./js/test.jsx\");\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_js_test_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), document.querySelector('.graph')); // If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/test.jsx":
/*!*********************!*\
  !*** ./js/test.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Example; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"../node_modules/recharts/es6/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar container = document.querySelector(\".graph\");\nvar containerSizes = {\n  WIDTH: container.offsetWidth,\n  HEIGHT: container.offsetHeight\n};\nvar data = [{\n  date: '00:00',\n  value: 1000,\n  session: 21801280,\n  capacity: 40650.0\n}, {\n  date: '02:30',\n  value: 2000,\n  session: 218012,\n  capacity: 40250.0\n}, {\n  date: '05:00',\n  value: 1200,\n  session: 2180,\n  capacity: 20650.0\n}, {\n  date: '07:30',\n  value: 600,\n  session: 21801280,\n  capacity: 30650.0\n}, {\n  date: '09:00',\n  value: 1800,\n  session: 218012345,\n  capacity: 47650.0\n}, {\n  date: '12:30',\n  value: 1700,\n  session: 21805480,\n  capacity: 106500.0\n}, {\n  date: '15:00',\n  value: 2200,\n  session: 21854280,\n  capacity: 40650.0\n}];\n\nvar Example = /*#__PURE__*/function (_PureComponent) {\n  _inherits(Example, _PureComponent);\n\n  function Example() {\n    _classCallCheck(this, Example);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Example).apply(this, arguments));\n  }\n\n  _createClass(Example, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"LineChart\"], {\n        width: containerSizes.WIDTH - 40,\n        height: containerSizes.HEIGHT - 30,\n        data: data\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"CartesianGrid\"], {\n        vertical: false\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"XAxis\"], {\n        style: {\n          fontFamily: 'Roboto, sans-serif'\n        },\n        stroke: \"transparent\",\n        dataKey: \"date\",\n        tick: {\n          fill: '#969ca4'\n        },\n        dx: 15\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"YAxis\"], {\n        style: {\n          fontFamily: 'Roboto, sans-serif'\n        },\n        stroke: \"transparent\",\n        r: true,\n        tick: {\n          fill: '#969ca4'\n        },\n        dy: -15\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n        strokeWidth: 3,\n        type: \"monotone\",\n        dataKey: \"value\",\n        stroke: \"#0077db\",\n        activeDot: {\n          r: 8\n        }\n      }));\n    }\n  }]);\n\n  return Example;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\n\n\n//# sourceURL=webpack:///./js/test.jsx?");

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ../node_modules/webpack-dev-server/client?http://localhost:7700 ./index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\projects\\budjetManager\\node_modules\\webpack-dev-server\\client\\index.js?http://localhost:7700 */\"../node_modules/webpack-dev-server/client/index.js?http://localhost:7700\");\nmodule.exports = __webpack_require__(/*! C:\\projects\\budjetManager\\src\\index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_../node_modules/webpack-dev-server/client?");

/***/ })

/******/ });