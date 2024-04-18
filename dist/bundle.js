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

eval("var pathname = window.location.pathname\nvar educacionEmocional = __webpack_require__(/*! ./sections/educacion-emocional.js */ \"./src/sections/educacion-emocional.js\")\n\nfunction main() {\n  if (pathname === '/educacion-emocional') {\n    educacionEmocional()\n  }\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  main()\n})\n\nmain()\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/index.js?");

/***/ }),

/***/ "./src/sections/educacion-emocional.js":
/*!*********************************************!*\
  !*** ./src/sections/educacion-emocional.js ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = function () {\n  var cssSelector = '.content .sqs-layout .col .sqs-block.html-block.sqs-block-html:first-of-type .sqs-html-content h2'\n  var element = document.querySelector(cssSelector)\n\n  if (element) {\n    element.style.fontSize = '1.6em'\n    element.style.color = 'red'\n  }\n}\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/sections/educacion-emocional.js?");

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