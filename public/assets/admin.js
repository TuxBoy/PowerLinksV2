(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/css/admin.scss":
/*!*******************************!*\
  !*** ./assets/css/admin.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/admin.js":
/*!****************************!*\
  !*** ./assets/js/admin.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/admin.scss */ "./assets/css/admin.scss");
/* harmony import */ var _css_admin_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_admin_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_TimeAgo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/TimeAgo */ "./assets/js/elements/TimeAgo.js");


customElements.define('time-ago', _elements_TimeAgo__WEBPACK_IMPORTED_MODULE_1__["TimeAgo"]);

/***/ }),

/***/ "./assets/js/elements/TimeAgo.js":
/*!***************************************!*\
  !*** ./assets/js/elements/TimeAgo.js ***!
  \***************************************/
/*! exports provided: TimeAgo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgo", function() { return TimeAgo; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }










function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var terms = [{
  time: 45,
  divide: 60,
  text: "moins d'une minute"
}, {
  time: 90,
  divide: 60,
  text: 'environ une minute'
}, {
  time: 45 * 60,
  divide: 60,
  text: '%d minutes'
}, {
  time: 90 * 60,
  divide: 60 * 60,
  text: 'environ une heure'
}, {
  time: 24 * 60 * 60,
  divide: 60 * 60,
  text: '%d heures'
}, {
  time: 42 * 60 * 60,
  divide: 24 * 60 * 60,
  text: 'environ un jour'
}, {
  time: 30 * 24 * 60 * 60,
  divide: 24 * 60 * 60,
  text: '%d jours'
}, {
  time: 45 * 24 * 60 * 60,
  divide: 24 * 60 * 60 * 30,
  text: 'environ un mois'
}, {
  time: 365 * 24 * 60 * 60,
  divide: 24 * 60 * 60 * 30,
  text: '%d mois'
}, {
  time: 365 * 1.5 * 24 * 60 * 60,
  divide: 24 * 60 * 60 * 365,
  text: 'environ un an'
}, {
  time: Infinity,
  divide: 24 * 60 * 60 * 365,
  text: '%d ans'
}];
/**
 * Custom element permettant d'afficher une date de manière relative
 *
 * @property {number} timer
 */

var TimeAgo = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TimeAgo, _HTMLElement);

  var _super = _createSuper(TimeAgo);

  function TimeAgo() {
    _classCallCheck(this, TimeAgo);

    return _super.apply(this, arguments);
  }

  _createClass(TimeAgo, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var attribute = this.getAttribute('time') || '';
      var timestamp = parseInt(attribute, 10) * 1000;
      var date = new Date(timestamp);
      this.updateText(date);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.clearTimeout(this.timer);
    }
  }, {
    key: "updateText",
    value: function updateText(date) {
      var _this = this;

      var seconds = (new Date().getTime() - date.getTime()) / 1000;
      var term = null;
      var prefix = this.getAttribute('prefix');

      var _iterator = _createForOfIteratorHelper(terms),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          term = _step.value;

          if (Math.abs(seconds) < term.time) {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (seconds >= 0) {
        this.innerHTML = "".concat(prefix || 'Il y a', " ").concat(term.text.replace('%d', Math.round(seconds / term.divide)));
      } else {
        this.innerHTML = "".concat(prefix || 'Dans', " ").concat(term.text.replace('%d', Math.round(Math.abs(seconds) / term.divide)));
      }

      var nextTick = Math.abs(seconds) % term.divide;

      if (nextTick === 0) {
        nextTick = term.divide;
      }

      if (nextTick > 2147482) {
        return;
      }

      this.timer = window.setTimeout(function () {
        window.requestAnimationFrame(function () {
          _this.updateText(date);
        });
      }, 1000 * nextTick);
    }
  }]);

  return TimeAgo;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

/***/ })

},[["./assets/js/admin.js","runtime","vendors~admin~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FkbWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9UaW1lQWdvLmpzIl0sIm5hbWVzIjpbImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiVGltZUFnbyIsInRlcm1zIiwidGltZSIsImRpdmlkZSIsInRleHQiLCJJbmZpbml0eSIsImF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInRpbWVzdGFtcCIsInBhcnNlSW50IiwiZGF0ZSIsIkRhdGUiLCJ1cGRhdGVUZXh0Iiwid2luZG93IiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZWNvbmRzIiwiZ2V0VGltZSIsInRlcm0iLCJwcmVmaXgiLCJNYXRoIiwiYWJzIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsInJvdW5kIiwibmV4dFRpY2siLCJzZXRUaW1lb3V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiSFRNTEVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQUEsY0FBYyxDQUFDQyxNQUFmLENBQXNCLFVBQXRCLEVBQWtDQyx5REFBbEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLElBQU1DLEtBQUssR0FBRyxDQUNWO0FBQ0lDLE1BQUksRUFBRSxFQURWO0FBRUlDLFFBQU0sRUFBRSxFQUZaO0FBR0lDLE1BQUksRUFBRTtBQUhWLENBRFUsRUFNVjtBQUNJRixNQUFJLEVBQUUsRUFEVjtBQUVJQyxRQUFNLEVBQUUsRUFGWjtBQUdJQyxNQUFJLEVBQUU7QUFIVixDQU5VLEVBV1Y7QUFDSUYsTUFBSSxFQUFFLEtBQUssRUFEZjtBQUVJQyxRQUFNLEVBQUUsRUFGWjtBQUdJQyxNQUFJ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QXdCSCxJQUFJLENBQUNJLEtBQUwsQ0FBV1IsT0FBTyxHQUFHRSxJQUFJLENBQUNmLE1BQTFCLENBQXhCLENBQTFDO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS21CLFNBQUwsYUFBb0JILE1BQU0sSUFBSSxNQUE5QixjQUF3Q0QsSUFBSSxDQUFDZCxJQUFMLENBQVVtQixPQUFWLENBQWtCLElBQWxCLEVBQXdCSCxJQUFJLENBQUNJLEtBQUwsQ0FBV0osSUFBSSxDQUFDQyxHQUFMLENBQVNMLE9BQVQsSUFBb0JFLElBQUksQ0FBQ2YsTUFBcEMsQ0FBeEIsQ0FBeEM7QUFDSDs7QUFDRCxVQUFJc0IsUUFBUSxHQUFHTCxJQUFJLENBQUNDLEdBQUwsQ0FBU0wsT0FBVCxJQUFvQkUsSUFBSSxDQUFDZixNQUF4Qzs7QUFDQSxVQUFJc0IsUUFBUSxLQUFLLENBQWpCLEVBQW9CO0FBQ2hCQSxnQkFBUSxHQUFHUCxJQUFJLENBQUNmLE1BQWhCO0FBQ0g7O0FBQ0QsVUFBSXNCLFFBQVEsR0FBRyxPQUFmLEVBQXdCO0FBQ3BCO0FBQ0g7O0FBQ0QsV0FBS1YsS0FBTCxHQUFhRixNQUFNLENBQUNhLFVBQVAsQ0FBa0IsWUFBTTtBQUNqQ2IsY0FBTSxDQUFDYyxxQkFBUCxDQUE2QixZQUFNO0FBQy9CLGVBQUksQ0FBQ2YsVUFBTCxDQUFnQkYsSUFBaEI7QUFDSCxTQUZEO0FBR0gsT0FKWSxFQUlWLE9BQU9lLFFBSkcsQ0FBYjtBQUtIO0FBdkNMOztBQUFBO0FBQUEsaUNBQTZCRyxXQUE3QixHIiwiZmlsZSI6ImFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvYWRtaW4uc2NzcydcclxuXHJcbmltcG9ydCB7VGltZUFnb30gZnJvbSBcIi4vZWxlbWVudHMvVGltZUFnb1wiO1xyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0aW1lLWFnbycsIFRpbWVBZ28pXHJcbiIsImNvbnN0IHRlcm1zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpbWU6IDQ1LFxyXG4gICAgICAgIGRpdmlkZTogNjAsXHJcbiAgICAgICAgdGV4dDogXCJtb2lucyBkJ3VuZSBtaW51dGVcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aW1lOiA5MCxcclxuICAgICAgICBkaXZpZGU6IDYwLFxyXG4gICAgICAgIHRleHQ6ICdlbnZpcm9uIHVuZSBtaW51dGUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpbWU6IDQ1ICogNjAsXHJcbiAgICAgICAgZGl2aWRlOiA2MCxcclxuICAgICAgICB0ZXh0OiAnJWQgbWludXRlcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGltZTogOTAgKiA2MCxcclxuICAgICAgICBkaXZpZGU6IDYwICogNjAsXHJcbiAgICAgICAgdGV4dDogJ2Vudmlyb24gdW5lIGhldXJlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aW1lOiAyNCAqIDYwICogNjAsXHJcbiAgICAgICAgZGl2aWRlOiA2MCAqIDYwLFxyXG4gICAgICAgIHRleHQ6ICclZCBoZXVyZXMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpbWU6IDQyICogNjAgKiA2MCxcclxuICAgICAgICBkaXZpZGU6IDI0ICogNjAgKiA2MCxcclxuICAgICAgICB0ZXh0OiAnZW52aXJvbiB1biBqb3VyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aW1lOiAzMCAqIDI0ICogNjAgKiA2MCxcclxuICAgICAgICBkaXZpZGU6IDI0ICogNjAgKiA2MCxcclxuICAgICAgICB0ZXh0OiAnJWQgam91cnMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpbWU6IDQ1ICogMjQgKiA2MCAqIDYwLFxyXG4gICAgICAgIGRpdmlkZTogMjQgKiA2MCAqIDYwICogMzAsXHJcbiAgICAgICAgdGV4dDogJ2Vudmlyb24gdW4gbW9pcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGltZTogMzY1ICogMjQgKiA2MCAqIDYwLFxyXG4gICAgICAgIGRpdmlkZTogMjQgKiA2MCAqIDYwICogMzAsXHJcbiAgICAgICAgdGV4dDogJyVkIG1vaXMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpbWU6IDM2NSAqIDEuNSAqIDI0ICogNjAgKiA2MCxcclxuICAgICAgICBkaXZpZGU6IDI0ICogNjAgKiA2MCAqIDM2NSxcclxuICAgICAgICB0ZXh0OiAnZW52aXJvbiB1biBhbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGltZTogSW5maW5pdHksXHJcbiAgICAgICAgZGl2aWRlOiAyNCAqIDYwICogNjAgKiAzNjUsXHJcbiAgICAgICAgdGV4dDogJyVkIGFucydcclxuICAgIH1cclxuXVxyXG5cclxuLyoqXHJcbiAqIEN1c3RvbSBlbGVtZW50IHBlcm1ldHRhbnQgZCdhZmZpY2hlciB1bmUgZGF0ZSBkZSBtYW5pw6hyZSByZWxhdGl2ZVxyXG4gKlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGltZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUaW1lQWdvIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgndGltZScpIHx8ICcnXHJcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gcGFyc2VJbnQoYXR0cmlidXRlLCAxMCkgKiAxMDAwXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcClcclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHQoZGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjayAoKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRleHQgKGRhdGUpIHtcclxuICAgICAgICBjb25zdCBzZWNvbmRzID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gMTAwMFxyXG4gICAgICAgIGxldCB0ZXJtID0gbnVsbFxyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVmaXgnKVxyXG4gICAgICAgIGZvciAodGVybSBvZiB0ZXJtcykge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoc2Vjb25kcykgPCB0ZXJtLnRpbWUpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IGAke3ByZWZpeCB8fCAnSWwgeSBhJ30gJHt0ZXJtLnRleHQucmVwbGFjZSgnJWQnLCBNYXRoLnJvdW5kKHNlY29uZHMgLyB0ZXJtLmRpdmlkZSkpfWBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IGAke3ByZWZpeCB8fCAnRGFucyd9ICR7dGVybS50ZXh0LnJlcGxhY2UoJyVkJywgTWF0aC5yb3VuZChNYXRoLmFicyhzZWNvbmRzKSAvIHRlcm0uZGl2aWRlKSl9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV4dFRpY2sgPSBNYXRoLmFicyhzZWNvbmRzKSAlIHRlcm0uZGl2aWRlXHJcbiAgICAgICAgaWYgKG5leHRUaWNrID09PSAwKSB7XHJcbiAgICAgICAgICAgIG5leHRUaWNrID0gdGVybS5kaXZpZGVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5leHRUaWNrID4gMjE0NzQ4Mikge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHQoZGF0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMDAwICogbmV4dFRpY2spXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==