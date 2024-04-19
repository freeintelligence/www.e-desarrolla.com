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

eval("var pathname = window.location.pathname\nvar educacionEmocional = __webpack_require__(/*! ./sections/educacion-emocional.js */ \"./src/sections/educacion-emocional.js\")\nvar coaching = __webpack_require__(/*! ./sections/coaching.js */ \"./src/sections/coaching.js\")\nvar empresasSaludables = __webpack_require__(/*! ./sections/empresas-saludables.js */ \"./src/sections/empresas-saludables.js\")\nvar desarrolloOrganizacional = __webpack_require__(/*! ./sections/desarrollo-organizacional.js */ \"./src/sections/desarrollo-organizacional.js\")\nvar arreglarVideoTelefonos = __webpack_require__(/*! ./sections/arreglar-video-telefonos.js */ \"./src/sections/arreglar-video-telefonos.js\")\n\nfunction main() {\n  if (pathname === '/educacion-emocional') {\n    educacionEmocional()\n  }\n\n  if (pathname === '/coaching') {\n    coaching()\n  }\n\n  if (pathname === '/empresas-saludables') {\n    empresasSaludables()\n  }\n\n  if (pathname === '/desarrollo-organizacional') {\n    desarrolloOrganizacional()\n  }\n\n  arreglarVideoTelefonos()\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  main()\n})\n\nmain()\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/index.js?");

/***/ }),

/***/ "./src/sections/arreglar-video-telefonos.js":
/*!**************************************************!*\
  !*** ./src/sections/arreglar-video-telefonos.js ***!
  \**************************************************/
/***/ ((module) => {

eval("var alreadyExecuted = false\n\nmodule.exports = function () {\n  if (alreadyExecuted) {\n    return\n  }\n\n  var isFirefoxMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && /Firefox/i.test(navigator.userAgent)\n\n  if (!isFirefoxMobile) {\n    return\n  }\n\n  var cssSelector = '.sqs-video-background'\n  var element = document.querySelector(cssSelector)\n\n  var iFrame = `<iframe id=\"player\" style=\"position: absolute; inset: 0px 0px 0px -234.222px; width: 1324.44px; height: 745px;\" frameborder=\"0\" allowfullscreen=\"\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" title=\"e desarrolla\" width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/kd99twk-iWM?autohide=1&amp;autoplay=1&mute=1&amp;controls=0&amp;enablejsapi=1&amp;iv_load_policy=3&amp;loop=1&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;wmode=opaque&amp;origin=https%3A%2F%2Fwww.e-desarrolla.com&amp;widgetid=1\" class=\"background-video ready\"></iframe>`\n\n  if (element) {\n    element.innerHTML = iFrame\n  }\n\n  alreadyExecuted = true\n}\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/sections/arreglar-video-telefonos.js?");

/***/ }),

/***/ "./src/sections/coaching.js":
/*!**********************************!*\
  !*** ./src/sections/coaching.js ***!
  \**********************************/
/***/ ((module) => {

eval("var alreadyExecuted = false\n\nmodule.exports = function () {\n  if (alreadyExecuted) {\n    return\n  }\n\n  var videoCssSelector = '.section-border'\n  var videoElement = document.querySelector(videoCssSelector)\n\n  var contentWrapperCssSelector = '.content-wrapper'\n  var contentWrapperElement = document.querySelector(contentWrapperCssSelector)\n\n  var pageSectionCssSelector = '.page-section'\n  var pageSectionElement = document.querySelector(pageSectionCssSelector)\n\n  if (videoElement) {\n    videoElement.remove()\n  }\n\n  if (contentWrapperElement) {\n    contentWrapperElement.remove()\n  }\n\n  if (pageSectionElement) {\n    pageSectionElement.style.minHeight = 'auto'\n  }\n\n  var style = document.createElement('style')\n  style.innerHTML = `\n    @media (max-width: 520px) {\n      .page-section.layout-engine-section {\n        min-height: auto !important;\n      }\n    }\n`\n\n  document.head.appendChild(style)\n\n  alreadyExecuted = true\n}\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/sections/coaching.js?");

/***/ }),

/***/ "./src/sections/desarrollo-organizacional.js":
/*!***************************************************!*\
  !*** ./src/sections/desarrollo-organizacional.js ***!
  \***************************************************/
/***/ ((module) => {

eval("var alreadyExecuted = false\n\nmodule.exports = function () {\n  if (alreadyExecuted) {\n    return\n  }\n\n  var titleCssSelector = 'p.titular'\n  var titleElement = document.querySelector(titleCssSelector)\n\n  if (titleElement) {\n    titleElement.computedStyleMap.fontSize = '24px'\n  }\n\n  alreadyExecuted = true\n}\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/sections/desarrollo-organizacional.js?");

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

eval("var alreadyExecuted = false\n\nmodule.exports = function () {\n  if (alreadyExecuted) {\n    return\n  }\n\n  var videoCssSelector = '.section-border'\n  var videoElement = document.querySelector(videoCssSelector)\n\n  var contentWrapperCssSelector = '.content-wrapper'\n  var contentWrapperElement = document.querySelector(contentWrapperCssSelector)\n\n  var pageSectionCssSelector = '.page-section'\n  var pageSectionElement = document.querySelector(pageSectionCssSelector)\n\n  if (videoElement) {\n    videoElement.remove()\n  }\n\n  if (contentWrapperElement) {\n    contentWrapperElement.remove()\n  }\n\n  if (pageSectionElement) {\n    pageSectionElement.style.minHeight = 'auto'\n  }\n\n  var style = document.createElement('style')\n  style.innerHTML = `\n    @media (max-width: 520px) {\n      .page-section.layout-engine-section {\n        min-height: auto !important;\n      }\n    }\n`\n\n  document.head.appendChild(style)\n\n  alreadyExecuted = true\n}\n\n\n//# sourceURL=webpack://www.e-desarrolla.com/./src/sections/empresas-saludables.js?");

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