/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var pathname = window.location.pathname\nvar educacionEmocional = __webpack_require__(/*! ./sections/educacion-emocional.js */ \"./src/sections/educacion-emocional.js\")\nvar coaching = __webpack_require__(/*! ./sections/coaching.js */ \"./src/sections/coaching.js\")\nvar empresasSaludables = __webpack_require__(/*! ./sections/empresas-saludables.js */ \"./src/sections/empresas-saludables.js\")\nvar arreglarVideoTelefonos = __webpack_require__(/*! ./sections/arreglar-video-telefonos.js */ \"./src/sections/arreglar-video-telefonos.js\")\n\nfunction main() {\n  if (pathname === '/educacion-emocional') {\n    educacionEmocional()\n  }\n  if (pathname === '/coaching') {\n    coaching()\n  }\n  if (pathname === '/empresas-saludables') {\n    empresasSaludables()\n  }\n\n  arreglarVideoTelefonos()\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  main()\n})\n\nmain()\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/index.js?");

/***/ }),

/***/ "./src/sections/arreglar-video-telefonos.js":
/*!**************************************************!*\
  !*** ./src/sections/arreglar-video-telefonos.js ***!
  \**************************************************/
/***/ ((module) => {

eval("var alreadyExecuted = false\n\nmodule.exports = function () {\n  if (alreadyExecuted) {\n    return\n  }\n\n  var urlVideo =\n    'https://www.youtube.com/embed/kd99twk-iWM?autohide=1&autoplay=1&mute=1&controls=0&enablejsapi=1&iv_load_policy=3&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&wmode=opaque&origin=https%3A%2F%2Fwww.e-desarrolla.com&widgetid=1'\n  var cssSelector = '.sqs-video-background iframe'\n  var element = document.querySelector(cssSelector)\n\n  if (element) {\n    element.src = urlVideo\n  }\n\n  alreadyExecuted = true\n}\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/sections/arreglar-video-telefonos.js?");

/***/ }),

/***/ "./src/sections/coaching.js":
/*!**********************************!*\
  !*** ./src/sections/coaching.js ***!
  \**********************************/
/***/ ((module) => {

eval("var alreadyExecuted = false\n\nmodule.exports = function () {\n  if (alreadyExecuted) {\n    return\n  }\n\n  var videoCssSelector = '.section-border'\n  var videoElement = document.querySelector(videoCssSelector)\n\n  var contentWrapperCssSelector = '.content-wrapper'\n  var contentWrapperElement = document.querySelector(contentWrapperCssSelector)\n\n  var pageSectionCssSelector = '.page-section'\n  var pageSectionElement = document.querySelector(pageSectionCssSelector)\n\n  if (videoElement) {\n    videoElement.remove()\n  }\n\n  if (contentWrapperElement) {\n    contentWrapperElement.remove()\n  }\n\n  if (pageSectionElement) {\n    pageSectionElement.style.minHeight = 'auto'\n  }\n\n  alreadyExecuted = true\n}\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/sections/coaching.js?");

/***/ }),

/***/ "./src/sections/educacion-emocional.js":
/*!*********************************************!*\
  !*** ./src/sections/educacion-emocional.js ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = function () {\n  var cssSelector = '.content .sqs-layout .col .sqs-block.html-block.sqs-block-html:first-of-type .sqs-html-content h2'\n  var element = document.querySelector(cssSelector)\n\n  if (element) {\n    element.style.fontSize = '1.5em'\n  }\n}\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/sections/educacion-emocional.js?");

/***/ }),

/***/ "./src/sections/empresas-saludables.js":
/*!*********************************************!*\
  !*** ./src/sections/empresas-saludables.js ***!
  \*********************************************/
/***/ ((module) => {

eval("var alreadyExecuted = false\n\nmodule.exports = function () {\n  if (alreadyExecuted) {\n    return\n  }\n\n  var videoCssSelector = '.section-border'\n  var videoElement = document.querySelector(videoCssSelector)\n\n  var contentWrapperCssSelector = '.content-wrapper'\n  var contentWrapperElement = document.querySelector(contentWrapperCssSelector)\n\n  var pageSectionCssSelector = '.page-section'\n  var pageSectionElement = document.querySelector(pageSectionCssSelector)\n\n  if (videoElement) {\n    videoElement.remove()\n  }\n\n  if (contentWrapperElement) {\n    contentWrapperElement.remove()\n  }\n\n  if (pageSectionElement) {\n    pageSectionElement.style.minHeight = 'auto'\n  }\n\n  alreadyExecuted = true\n}\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/sections/empresas-saludables.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;