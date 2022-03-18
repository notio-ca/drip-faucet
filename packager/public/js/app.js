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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools__WEBPACK_IMPORTED_MODULE_0__);\n//import { camelCase } from 'lodash';\n\n\nconsole.log(\"hello world\");\n\n//# sourceURL=webpack://packager/./src/index.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ (() => {

eval("// ----------------------------------------------------------------------------------------\n// -- TOOLS -------------------------------------------------------------------------------\n// ----------------------------------------------------------------------------------------\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    if ($is_RedirectHTML && document.location.pathname.indexOf(\".html\") != -1 && document.location.host.indexOf(\"localhost\") == -1) { \n        window.location.replace(document.location.href.replace(\".html\", \"\")); \n    }\n    loadAds();\n});\n\nasync function API_Get(url, callback) {\n    //try {\n        req = await fetch(url);\n        res = await req.json();\n    //} catch { callback({}); }\n\n    callback(res);\n}\n\nasync function API_GetText(url, callback) {\n    var request = $.ajax({\n        url: url,\n        method: \"GET\",\n        dataType: \"html\"\n    });\n    \n    request.done(function( data ) {\n        callback(data);\n    });\n   \n    request.fail(function( jqXHR, textStatus ) {\n        callback(\"\");\n    });\n}\n\n$Cookie = {\n    get: function (c_name) {\n        var i,x,y,ARRcookies=document.cookie.split(\";\");\n        for (i=0;i<ARRcookies.length;i++) {\n            x=ARRcookies[i].substr(0,ARRcookies[i].indexOf(\"=\"));\n            y=ARRcookies[i].substr(ARRcookies[i].indexOf(\"=\")+1);\n            x=x.replace(/^\\s+|\\s+$/g,\"\");\n            if (x==c_name) { return unescape(y); }\n        }\n    },\n    set: function (c_name, value, exdays)  {\n        if (!exdays) { exdays = 365; }\n        var exdate=new Date();\n        exdate.setDate(exdate.getDate() + exdays);\n        var c_value=escape(value) + ((exdays==null) ? \"\" : \"; expires=\"+exdate.toUTCString());\n        document.cookie=c_name + \"=\" + c_value + \"; path=/\";\n    },\n    delete: function (name) {  \n        FW.Cookie.Set(name, \"\");\n    }\n};\n\nString.prototype.replaceAll = function (search, replacement) {\n    var target = this;\n    return target.replace(new RegExp(search, 'g'), replacement);\n}\n\n$Session = {\n    key: \"User_Session\",\n    is_loaded: false,\n    data: {},\n    init: function (session_key) {\n        if (session_key != undefined) { $Session.key = session_key; }\n        $Session.load();\n    },\n    load: function () {\n        saved_data = $Cookie.get($Session.key);\n        if (saved_data == undefined) { saved_data = JSON.stringify({}); }\n        saved_data = JSON.parse(saved_data);\n        $Session.data = saved_data;\n        $Session.is_loaded = true;\n        //console.log($Session.data);\n    },\n    save: function () {\n        $Cookie.set($Session.key, JSON.stringify($Session.data));\n    },\n    set: function (key, value) {\n        $Session.data[key] = value;\n        $Session.save();\n    },\n    get: function (key) {\n        if (!$Session.is_loaded) { $Session.load(); }\n        return $Session.data[key];\n    }\n\n}\n\nfunction IS_DEV() {\n    if (document.location.host.indexOf(\"localhost\") != -1) { return true; }\n    return false;\n}\n\nfunction loadAds() {\n    page = \"\";\n    for (slug of document.location.pathname.split(\"/\")) {\n        if (slug != \"\") { page = slug.replace(\".html\", \"\"); }\n    }\n    if (\"faucet|\".indexOf(page) == -1) { return false; }\n    if ($Cookie.get(\"pop-ads\") == \"1\") { return false; }\n    $Cookie.set(\"pop-ads\", \"1\", 2);\n\n    H = `\n    <div id=\"pop-ads\" style=\"position:absolute; top:0; left:0; right:0; background-color:#333333EF; color:#FFF; font-size:20px; z-index:10000;\">\n        <div style=\"padding:5% 0;\">\n            <div style=\"max-width:80%; margin:0 auto;\">\n                <h2 style=\"font-size:36px; color:#1998ff; line-height:1.0;\">Thanks for using my tools!</h2>\n                <p style=\"margin:10px 0 20px 0; line-height:1.3;\">If you use them on a daily basis, please consider a small donation, it would be much appreciated and a good way to support my work! &nbsp;<i class=\"fas fa-grin\" style=\"color:#FFF;\"></i></p>\n                <div id=\"but-copy-pop-ads\" style=\"display:block; cursor:pointer; background-color:#2271b1; color:#FFF; border-radius:10px; padding:10px 20px; overflow:hidden;line-height:1.25;\">Click here copy &nbsp;<i class=\"far fa-copy\"></i><div>0x287C7d1638E5771947BcdCBd8b174fAc4cF37E08</div></div>\n                <p style=\"margin:20px 0; line-height:1.3;\">Please <i class=\"fab fa-telegram-plane\"></i> me <a href=\"https://t.me/LukeCharters\" style=\"color:#1998ff; text-decoration:none;\">@LukeCharters</a> so that I may thank you.</p>\n                <div style=\"text-align:right;\"> <div id=\"but-close-pop-ads\" style=\"display:inline-block; cursor:pointer; background-color:#747474; color:#FFF; border-radius:10px; padding:10px 20px; overflow:hidden;\">CLOSE</div> </div>\n            </div>\n        </div>\n    </div>\n    `;\n    $(\"body\").prepend(H);\n    $(\"#but-copy-pop-ads\").click(function () {\n        wallet = \"0x287C7d1638E5771947BcdCBd8b174fAc4cF37E08\";\n        navigator.clipboard.writeText(wallet);\n        ClickTrack(\"Copy\", \"Wallet\");\n        alert(\"Thanks for your support!\")\n    });\n    $(\"#but-close-pop-ads\").click(function () { \n        $(\"#pop-ads\").fadeOut(); \n        ClickTrack(\"Close\", \"Pop-Ads\");\n    });\n    window.scrollTo(0, 0);\n}\n\nfunction loadMessage() {\n    msg_current = 4; // UPDATE\n    msg_idx = $Cookie.get(\"msg-idx\");\n    if (msg_idx == undefined) { msg_idx = 0; } else { msg_idx = parseInt(msg_idx); }\n    if (msg_idx == msg_current) { return false; }\n    msg_idx = msg_current;\n    //if (!IS_DEV()) { $Cookie.set(\"msg-idx\", msg_idx); }\n    $Cookie.set(\"msg-idx\", msg_idx);\n    msg = `\n        <h2 style=\"font-size:36px; color:#1998ff; line-height:1.0;\">What's new?</h2>\n        <p style=\"margin:20px 0; line-height:1.3;\">\n            Now with your own garden player specific data analysis charts. A game changer to follow your performance!\n        </p>\n        <p style=\"margin:20px 0; line-height:1.3; text-align:center;\">\n            <img src=\"img/garden-ui.jpg\">\n        </p>\n\n    `;\n    \n    H = `\n    <div id=\"pop-msg\" style=\"position:absolute; top:0; left:0; right:0; background-color:#333333F7; color:#FFF; font-size:20px; z-index:10000;\">\n        <div style=\"padding:5% 0;\">\n            <div style=\"max-width:80%; margin:0 auto;\">\n                `+msg+`\n                <div style=\"text-align:right; margin-top:20px;\"> <div id=\"but-close-pop-msg\" style=\"display:inline-block; cursor:pointer; background-color:#747474; color:#FFF; border-radius:10px; padding:10px 20px; overflow:hidden;\">CLOSE</div> </div>\n            </div>\n        </div>\n    </div>\n    `;\n    $(\"body\").prepend(H);\n    $(\"#but-close-pop-msg\").click(function () { \n        $(\"#pop-msg\").fadeOut(); \n        ClickTrack(\"Close\", \"Message\");\n    });\n    window.scrollTo(0, 0);\n}\n\nvar _gaq = _gaq || [];\n_gaq.push(['_setAccount', \"UA-24554015-2\"]);\n_gaq.push(['_trackPageview']);\n(function () {\nvar ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\nga.src = 'https://ssl.google-analytics.com/ga.js';\nvar s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n})();\nfunction ClickTrack(inAction, inLabel) { _gaq.push(['_trackEvent', 'Click', inAction, inLabel]); };\n\n//# sourceURL=webpack://packager/./src/tools.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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