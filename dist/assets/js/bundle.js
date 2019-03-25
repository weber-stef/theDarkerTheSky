/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../img/logo.png";

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/styles.scss */ "./src/assets/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @img/logo.png */ "./src/assets/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var WeatherForecast =
/*#__PURE__*/
function () {
  function WeatherForecast(lat, long) {
    _classCallCheck(this, WeatherForecast);

    this.lat = lat;
    this.long = long; // this.addMyEventListeners();

    this.render();
  }

  _createClass(WeatherForecast, [{
    key: "fToC",
    value: function fToC(fahrenheit) {
      var fTemp = fahrenheit;
      var fToCel = (fTemp - 32) * 5 / 9;
      return Math.floor(fToCel);
    } // addMyEventListeners() {
    //   // define querySel
    //   // console.log("Adding Events");
    //   const searchButton = document.querySelector("#searchButton");
    //   const searchField = document.querySelector("#searchField");
    //   // console.log(searchButton);
    //   // console.log(earchField);
    //   searchButton.addEventListener("click", e => {
    //     console.log("click");
    //     this.user = searchField.value;
    //     this.render();
    //   });
    // }
    // doneAt(time) {
    //   let momentDate = moment(time);
    //   let message = "";
    //   // "2018-10-17T09:02:48Z"
    //   return momentDate.format('DD.MM.YYYY');
    // }

  }, {
    key: "gob",
    value: function gob(temperatureHere) {
      var feelGoodMode = "";
      var shockOrNoShock = "";
      var hotOrCold = "";

      if (temperatureHere < 8) {
        feelGoodMode = "kinda shitty..";
        shockOrNoShock = "shocking";
        hotOrCold = "freezing like crazy!!";
      } else if (temperatureHere > 8 && temperatureHere < 25) {
        feelGoodMode = "kinda ok";
        shockOrNoShock = "";
        hotOrCold = "feeling quite comfortable";
      } else if (temperatureHere > 25 && temperatureHere < 60) {
        feelGoodMode = "kinda too hot";
        shockOrNoShock = "";
        hotOrCold = "sweating like a crazy person";
      }

      return [feelGoodMode, shockOrNoShock, hotOrCold];
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      // weather api
      var corsAnywhereProxy = "https://cors-anywhere.herokuapp.com/";
      var firstPartOfUrl = "https://api.darksky.net/forecast/";
      var myDarkSkyApiKey = "8e7c3b8124cb62d06ecaf994b8e8ea9f/"; // const myCoordinates = `52.520008,13.404954` // berlin

      var url2Fetch = "".concat(corsAnywhereProxy).concat(firstPartOfUrl).concat(myDarkSkyApiKey).concat(this.lat, ",").concat(this.long); // console.log(url2Fetch);

      var currentTemperature = "";
      var weAreIn = "";
      var temperatureHere = 0;
      var weatherReport = document.querySelector(".weatherReport");
      var polaroidImage = document.querySelector(".polaroidImage");
      var myBrand = document.querySelector(".navbar-brand");
      myBrand.innerHTML = "Breaking News : Weather ahead!";
      fetch(url2Fetch).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        temperatureHere = _this.fToC(data.currently.temperature);
        console.log("".concat(temperatureHere, " is the current temperature"));
        console.log(_this.gob(temperatureHere)); // console.log(temperatureHere);

        weAreIn = data.timezone.split('/')[1]; // console.log(weAreIn);

        polaroidImage.style.backgroundImage = "url(\"https://source.unsplash.com/random?".concat(weAreIn, "\")");
        weatherReport.innerHTML = "Hi there people, here in ".concat(weAreIn, " the weather is  ").concat(_this.gob(temperatureHere)[0], ", it's ").concat(_this.gob(temperatureHere)[1], " ").concat(temperatureHere, "\xB0 Celsius and I am ").concat(_this.gob(temperatureHere)[2], "..");
      });
    }
  }]);

  return WeatherForecast;
}();

new WeatherForecast("-49.25", "69.167");

/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map