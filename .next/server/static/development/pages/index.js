module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_airbnb_home_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/airbnb-home.jpg */ "./public/airbnb-home.jpg");
/* harmony import */ var _public_airbnb_home_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_airbnb_home_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderButton */ "./components/HeaderButton.js");
var _jsxFileName = "/Users/ken/Downloads/nextjs_airbnb/components/Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("header", {
    style: {
      backgroundImage: `url(${_public_airbnb_home_jpg__WEBPACK_IMPORTED_MODULE_1___default.a})`
    },
    className: "relative bg-cover bg-no-repeat bg-top-right lg:bg-center p-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("svg", {
    viewBox: "0 0 1000 1000",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      height: 32,
      width: 32,
      display: 'block',
      fill: '#ffffff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "AirBnb"), __jsx("path", {
    d: "m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })))), __jsx("div", {
    className: "max-w-5xl mx-auto py-4 lg:py-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("h2", {
    className: "text-white text-4xl lg:text-5xl font-semibold leading-relaxing mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Book a trip. Host travels. All on Airbnb"), __jsx("div", {
    className: "flex items-center flex-wrap justify-start max-w-2xl lg:mx-0 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_HeaderButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "white",
    description: "Find a place to stay and things to do",
    name: "Explore",
    borderColor: "transparent",
    fontColor: "gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_HeaderButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "transparent",
    description: "Earn money from our extra space",
    name: "Host",
    borderColor: "white",
    fontColor: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))));
});

/***/ }),

/***/ "./components/Booking.js":
/*!*******************************!*\
  !*** ./components/Booking.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/InputBox */ "./components/InputBox.js");
/* harmony import */ var _components_OptionBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/OptionBox */ "./components/OptionBox.js");
var _jsxFileName = "/Users/ken/Downloads/nextjs_airbnb/components/Booking.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    class: "max-w-5xl mx-auto py-12 px-4 lg:px-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h3", {
    class: "text-2xl font-semibold text-gray-800 lg:mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Book unique homes and experiences"), __jsx("form", {
    action: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    class: "flex flex-wrap items-start justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_components_InputBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "where",
    placeholder: "Anywhere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_components_InputBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "when",
    placeholder: "mm/dd/yy - mm/dd/yyyy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(_components_OptionBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "guests",
    options: {
      first: '1 Guest',
      second: '2 Guests',
      third: '3 Guests'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))));
});

/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Downloads/nextjs_airbnb/components/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  img,
  stars,
  description,
  avatar,
  hostName,
  hostCountry
}) => {
  var starArray = [],
      i = 0,
      len = parseInt(stars);

  while (++i <= len) starArray.push(i);

  return __jsx("div", {
    class: "w-full lg:w-1/3 px-1 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    class: "bg-no-repeat bg-cover rounded",
    src: img,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    class: "flex items-start justify-start flex-wrap py-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, starArray.map(function (i) {
    return __jsx("svg", {
      key: i,
      class: "fill-current w-4 h-4 text-cyan mr-1",
      viewBox: "0 0 1000 1000",
      xmlns: "http://www.w3.org/2000/svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("path", {
      d: "M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  })), __jsx("p", {
    class: "text-gray-600 font-thin text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, description), __jsx("div", {
    class: "flex items-center justify-start flex-wrap mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("img", {
    class: "rounded-full w-12 h-12",
    src: avatar,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("div", {
    class: "pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("p", {
    class: "text-sm font-semibold text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, hostName), __jsx("p", {
    class: "text-sm text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, hostCountry))));
});

/***/ }),

/***/ "./components/HeaderButton.js":
/*!************************************!*\
  !*** ./components/HeaderButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Downloads/nextjs_airbnb/components/HeaderButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  color,
  description,
  name,
  borderColor,
  fontColor
}) => {
  return __jsx("div", {
    class: "lg:pr-2 pb-3 w-full lg:w-1/2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("p", {
    className: "py-2 text-white font-thin tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, description), __jsx("a", {
    style: {
      backgroundColor: color,
      border: `${borderColor} 2px solid`,
      color: `${fontColor}`
    },
    className: "block text-center py-3 rounded font-semibold w-full",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, name));
});

/***/ }),

/***/ "./components/InputBox.js":
/*!********************************!*\
  !*** ./components/InputBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Downloads/nextjs_airbnb/components/InputBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  label,
  placeholder
}) => {
  return __jsx("div", {
    class: "lg:mb-0 w-full lg:w-1/3 lg:pr-2 py-2 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("label", {
    class: "uppercase text-xs font-semibold pb-2 text-gray-800 block",
    for: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, label), __jsx("input", {
    type: "text",
    id: label,
    class: "p-3 w-full rounded border border-gray-300",
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./components/OptionBox.js":
/*!*********************************!*\
  !*** ./components/OptionBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ken/Downloads/nextjs_airbnb/components/OptionBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  label,
  options
}) => {
  return __jsx("div", {
    class: "lg:w-1/3 w-full py-2 lg:pr-0 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("label", {
    for: label,
    class: "uppercase tracking-wide font-semibold text-xs text-gray-900 mb-2 block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, label), __jsx("div", {
    class: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("select", {
    id: label,
    class: "p-3 border border-gray-300 rounded w-full appearance-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("option", {
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, options.first), __jsx("option", {
    value: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, options.second), __jsx("option", {
    value: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, options.third)), __jsx("div", {
    class: "flex items-center pointer-events-none absolute inset-y-0 right-0 px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("svg", {
    class: "fill-current h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })))));
});

/***/ }),

/***/ "./components/Reviews.js":
/*!*******************************!*\
  !*** ./components/Reviews.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var _public_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/1.jpg */ "./public/1.jpg");
/* harmony import */ var _public_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/2.jpg */ "./public/2.jpg");
/* harmony import */ var _public_2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/3.jpg */ "./public/3.jpg");
/* harmony import */ var _public_3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_3_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_jeff_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/jeff.jpg */ "./public/jeff.jpg");
/* harmony import */ var _public_jeff_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_jeff_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_lesley_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/lesley.jpg */ "./public/lesley.jpg");
/* harmony import */ var _public_lesley_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_lesley_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_denise_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/denise.jpg */ "./public/denise.jpg");
/* harmony import */ var _public_denise_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_denise_jpg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/ken/Downloads/nextjs_airbnb/components/Reviews.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    class: "max-w-5xl mx-auto px-4 lg:px-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h3", {
    class: "font-semibold text-2xl leading-none text-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "What guests are saying about homes in the United States"), __jsx("div", {
    class: "flex items-center flex-wrap justify-start lg:py-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("svg", {
    class: " w-4 h-4 flex-shrink-0 mt-4",
    viewBox: "0 0 24 24",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      height: 24,
      width: 24,
      fill: '#FFB400'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("path", {
    d: "m21.95 9.48a.84.84 0 0 0 -.87-.48h-4.62a.5.5 0 0 0 0 1l4.14.01-4.81 4.17a.5.5 0 0 0 -.14.57l2.65 6.38-6.07-3.72a.5.5 0 0 0 -.52 0l-6.08 3.72 2.65-6.37a.5.5 0 0 0 -.13-.57l-4.75-4.18h5.75a.5.5 0 0 0 .46-.3l2.37-5.37 1.58 3.57a.5.5 0 0 0 .91-.41l-1.72-3.88a.8.8 0 0 0 -1.56-.01l-2.38 5.39h-5.9a.83.83 0 0 0 -.87.48.85.85 0 0 0 .32.96l4.85 4.25-2.78 6.67a.81.81 0 0 0 .16.98.66.66 0 0 0 .43.15 1.1 1.1 0 0 0 .56-.18l6.37-3.91 6.38 3.92a.81.81 0 0 0 .99.03c.15-.12.37-.41.15-1l-2.77-6.66 4.92-4.26a.84.84 0 0 0 .31-.95zm-.78.53h-.01",
    fill: "#484848",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("path", {
    d: "m11 21.5a.5.5 0 1 1 -.5-.5.5.5 0 0 1 .5.5zm-3.5-15.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm15 10h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-15-13h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm10.22 7.54a.84.84 0 0 0 -.17-.02q-.28-.01-3.19 0a .6.6 0 0 1 -.55-.35l-1.5-3.23a.42.42 0 0 0 -.75 0l-1.81 4.14a2.92 2.92 0 0 0 4.12 3.72l.46-.26 3.49-2.99.16-.18a.5.5 0 0 0 -.26-.82z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx("p", {
    class: " text-gray-700 sm:mt-5 sm:pl-4 lg:mt-5 lg:pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "United States homes were ", __jsx("strong", {
    class: "emphasized",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "rated 4.8 out of 5 starts"), " with", __jsx("strong", {
    class: "emphasized",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, " 42,5000,000+ reviews"))), __jsx("div", {
    class: "flex items-start flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    stars: "5",
    description: "What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our hosts, but we felt welcomed and...",
    avatar: _public_jeff_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    hostName: "Jeff",
    hostCountry: "United States",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    stars: "4",
    description: "What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our hosts, but we felt welcomed and...",
    avatar: _public_lesley_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    hostName: "Lesley",
    hostCountry: "United Kingdom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    img: _public_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    stars: "5",
    description: "What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our hosts, but we felt welcomed and...",
    avatar: _public_denise_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    hostName: "Denise",
    hostCountry: "United States",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _components_Booking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Booking */ "./components/Booking.js");
/* harmony import */ var _components_Reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Reviews */ "./components/Reviews.js");
var _jsxFileName = "/Users/ken/Downloads/nextjs_airbnb/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(_components_Booking__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_components_Reviews__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./public/1.jpg":
/*!**********************!*\
  !*** ./public/1.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-43a265f29bfa729901245a88b6b81a0d.jpg";

/***/ }),

/***/ "./public/2.jpg":
/*!**********************!*\
  !*** ./public/2.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-00d3b8ff8d3d3eb0c0cc40dbba61af11.jpg";

/***/ }),

/***/ "./public/3.jpg":
/*!**********************!*\
  !*** ./public/3.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-4c306b453afb1874e88924b0f109ac67.jpg";

/***/ }),

/***/ "./public/airbnb-home.jpg":
/*!********************************!*\
  !*** ./public/airbnb-home.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/airbnb-home-bb270612b5fb0dddf3eaa293a588c61f.jpg";

/***/ }),

/***/ "./public/denise.jpg":
/*!***************************!*\
  !*** ./public/denise.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/denise-18d6fd65cd42379188e569f84ddf5e6b.jpg";

/***/ }),

/***/ "./public/jeff.jpg":
/*!*************************!*\
  !*** ./public/jeff.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/jeff-768c9733398f2a227bd8b4b97c7faee7.jpg";

/***/ }),

/***/ "./public/lesley.jpg":
/*!***************************!*\
  !*** ./public/lesley.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/lesley-1b77564a0c7afd0720e3f6a1e9123d45.jpg";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ken/Downloads/nextjs_airbnb/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map