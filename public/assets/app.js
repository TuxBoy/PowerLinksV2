(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/Link.ts":
/*!***************************!*\
  !*** ./assets/js/Link.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Link = /*#__PURE__*/function () {
  function Link(element, options) {
    _classCallCheck(this, Link);

    // @ts-ignore
    this.addLinkModal = new bootstrap.Modal(element, {
      keyboard: false
    });
    this.shortcutHandler = this.shortcutHandler.bind(this);
    this.options = Object.assign({
      withShortcut: true,
      keyCode: 't'
    }, options || {});
    window.addEventListener('keydown', this.shortcutHandler);
  }

  _createClass(Link, [{
    key: "shortcutHandler",
    value: function shortcutHandler(event) {
      if (event.key === 'k' && event.ctrlKey === true) {
        event.preventDefault();
        this.addLinkModal.show();
        var link_form_url = document.querySelector('.urlField');

        if (link_form_url) {
          link_form_url.setAttribute('autofocus', 'autofocus');
        }
      } else if (event.key === 'Escape') {
        this.addLinkModal.hide();
      }
    }
  }]);

  return Link;
}();



/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./assets/js/Link.ts");
/* harmony import */ var _elements_MetaLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/MetaLink */ "./assets/js/elements/MetaLink.ts");
/* harmony import */ var _elements_Toolbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/Toolbox */ "./assets/js/elements/Toolbox.ts");
/* harmony import */ var _elements_TimeAgo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/TimeAgo.js */ "./assets/js/elements/TimeAgo.js");
/* harmony import */ var _elements_Notification_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/Notification.js */ "./assets/js/elements/Notification.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _elements_FavoriteButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/FavoriteButton */ "./assets/js/elements/FavoriteButton.js");











if (document.querySelector('#addLink') !== null) {
  var link = new _Link__WEBPACK_IMPORTED_MODULE_3__["default"](document.querySelector('#addLink'));
}

var choicesElement = document.querySelector('.js-choice');

if (choicesElement !== null) {
  new choices_js__WEBPACK_IMPORTED_MODULE_8___default.a(choicesElement, {
    duplicateItemsAllowed: false,
    placeholder: true,
    placeholderValue: 'Tags',
    addItemText: function addItemText(value) {
      return "Touche entrer pour ajouter <b>\"".concat(value, "\"</b>");
    }
  });
}

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});
var myDropdown = document.getElementById('notificationDropdown');

if (myDropdown !== null) {
  var notification = new _elements_Notification_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
  myDropdown.addEventListener('show.bs.dropdown', notification.onClickOpenNotification);
}

customElements.define('meta-link', _elements_MetaLink__WEBPACK_IMPORTED_MODULE_4__["default"]);
customElements.define('toolbox-item', _elements_Toolbox__WEBPACK_IMPORTED_MODULE_5__["default"]);
customElements.define('time-ago', _elements_TimeAgo_js__WEBPACK_IMPORTED_MODULE_6__["TimeAgo"]);
customElements.define('favorite-button', _elements_FavoriteButton__WEBPACK_IMPORTED_MODULE_9__["default"]);

/***/ }),

/***/ "./assets/js/elements/FavoriteButton.js":
/*!**********************************************!*\
  !*** ./assets/js/elements/FavoriteButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FavoriteButton; });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api */ "./assets/js/utils/api.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


/**
 * @property {Promise} clickHandler
 * @property {string} apiRouteAdd
 * @property {string} apiRouteDelete
 * @property {Element} favorite_link
 */

var FavoriteButton = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FavoriteButton, _HTMLElement);

  var _super = _createSuper(FavoriteButton);

  function FavoriteButton() {
    var _this;

    _classCallCheck(this, FavoriteButton);

    _this = _super.call(this);
    _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_this));
    _this.apiRouteAdd = _this.getAttribute('route-add');
    _this.apiRouteDelete = _this.getAttribute('route-delete');
    return _this;
  }

  _createClass(FavoriteButton, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.favorite_link = this.querySelector('.favorite__link');
      var titleMessage = this.isActive() ? 'Supprimer le lien de mes favoris' : 'Ajouter le lien dans mes favoris';
      this.favorite_link.setAttribute('title', titleMessage);

      if (this.favorite_link !== null) {
        this.favorite_link.addEventListener('click', this.clickHandler);
      }
    }
  }, {
    key: "clickHandler",
    value: function () {
      var _clickHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var route, _yield$post, success, message;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                route = this.isActive() ? this.apiRouteDelete : this.apiRouteAdd;
                _context.next = 4;
                return Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__["post"])(route);

              case 4:
                _yield$post = _context.sent;
                success = _yield$post.success;
                message = _yield$post.message;

                if (success === true) {
                  console.log(message);
                  this.favorite_link.classList.toggle('active');
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clickHandler(_x) {
        return _clickHandler.apply(this, arguments);
      }

      return clickHandler;
    }()
    /**
     * Si le lien contient la classe "active" alors le lien est ajouté comme favoris
     *
     * @returns {boolean}
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return this.favorite_link.classList.contains('active') === true;
    }
  }]);

  return FavoriteButton;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));



/***/ }),

/***/ "./assets/js/elements/MetaLink.ts":
/*!****************************************!*\
  !*** ./assets/js/elements/MetaLink.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MetaLink; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/api */ "./assets/js/utils/api.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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



var MetaLink = /*#__PURE__*/function (_HTMLElement) {
  _inherits(MetaLink, _HTMLElement);

  var _super = _createSuper(MetaLink);

  function MetaLink() {
    var _this;

    _classCallCheck(this, MetaLink);

    _this = _super.call(this);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MetaLink, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var urlField = this.querySelector('.urlField');

      if (urlField !== null) {
        urlField.addEventListener('change', this.handleChange);
      }
    }
  }, {
    key: "handleChange",
    value: function () {
      var _handleChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var url, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = event.target.value;
                _context.next = 3;
                return Object(_utils_api__WEBPACK_IMPORTED_MODULE_6__["post"])('/api/link/metadata', {
                  url: url
                });

              case 3:
                result = _context.sent;
                this.setFormElement('description', result.description);
                this.setFormElement('image', result.image);
                this.setFormElement('title', result.title);
                this.setFormElement('link_tags', result.tags);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleChange(_x) {
        return _handleChange.apply(this, arguments);
      }

      return handleChange;
    }()
  }, {
    key: "setFormElement",
    value: function setFormElement(selector, value) {
      var element = this.querySelector(".".concat(selector));

      if (element === null) {
        return;
      } // @ts-ignore


      element.value = value;
    }
  }]);

  return MetaLink;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));



/***/ }),

/***/ "./assets/js/elements/Notification.js":
/*!********************************************!*\
  !*** ./assets/js/elements/Notification.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notification; });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ "./assets/js/utils/api.ts");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Notification = /*#__PURE__*/function () {
  function Notification() {
    _classCallCheck(this, Notification);
  }

  _createClass(Notification, [{
    key: "onClickOpenNotification",
    value: function () {
      var _onClickOpenNotification = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var updatePath, _yield$post, success, notificationCountElement;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                updatePath = this.dataset.update;
                _context.next = 3;
                return Object(_utils_api__WEBPACK_IMPORTED_MODULE_2__["post"])(updatePath);

              case 3:
                _yield$post = _context.sent;
                success = _yield$post.success;

                if (!success) {
                  _context.next = 10;
                  break;
                }

                notificationCountElement = document.querySelector('.notification__count');

                if (notificationCountElement) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                notificationCountElement.remove();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onClickOpenNotification(_x) {
        return _onClickOpenNotification.apply(this, arguments);
      }

      return onClickOpenNotification;
    }()
  }]);

  return Notification;
}();



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

/***/ }),

/***/ "./assets/js/elements/Toolbox.ts":
/*!***************************************!*\
  !*** ./assets/js/elements/Toolbox.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbox; });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var Toolbox = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Toolbox, _HTMLElement);

  var _super = _createSuper(Toolbox);

  function Toolbox() {
    var _this;

    _classCallCheck(this, Toolbox);

    _this = _super.call(this);
    _this.deleteHandler = _this.deleteHandler.bind(_assertThisInitialized(_this));
    _this.linkId = parseInt(_this.getAttribute('id') || "", 10);
    _this.edit_target = _this.getAttribute('edit_target') || "#";
    return _this;
  }

  _createClass(Toolbox, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML += this.render();
      var close_button = this.querySelector('.close');

      if (close_button) {
        close_button.addEventListener('click', this.deleteHandler);
      }
    }
  }, {
    key: "deleteHandler",
    value: function () {
      var _deleteHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _a, response, data, alert;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (confirm('Etes vous sur de vouloir supprimer ce lien ?')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                event.preventDefault();
                _context.prev = 3;
                _context.next = 6;
                return fetch('/api/link/delete/' + this.linkId, {
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                  },
                  method: 'DELETE'
                });

              case 6:
                response = _context.sent;
                _context.next = 9;
                return response.json();

              case 9:
                data = _context.sent;
                // loader.hide()
                (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
                _context.next = 18;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);
                //loader.hide()
                alert = document.createElement('alert-floating');
                alert.innerHTML = _context.t0.detail;
                document.body.appendChild(alert);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 13]]);
      }));

      function deleteHandler(_x) {
        return _deleteHandler.apply(this, arguments);
      }

      return deleteHandler;
    }()
  }, {
    key: "render",
    value: function render() {
      return "\n           <div class=\"toolbox\">\n             <form class=\"delete__item\">\n              <button type=\"button\" class=\"close btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n            </form>\n            <a class=\"edit__item\" href=\"".concat(this.edit_target, "\">\n                <span aria-hidden=\"true\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n                      <path d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"/>\n                      <path fill-rule=\"evenodd\" d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\"/>\n                    </svg>\n                </span>\n            </a>\n           </div>\n        ");
    }
  }]);

  return Toolbox;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));



/***/ }),

/***/ "./assets/js/utils/api.ts":
/*!********************************!*\
  !*** ./assets/js/utils/api.ts ***!
  \********************************/
/*! exports provided: post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var APIError = function APIError(errors) {
  _classCallCheck(this, APIError);

  this.errors = errors;
};

function post(_x, _x2) {
  return _post.apply(this, arguments);
}

function _post() {
  _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, data) {
    var response, status, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });

          case 2:
            response = _context.sent;
            status = response.status;
            _context.next = 6;
            return response.json();

          case 6:
            result = _context.sent;

            if (!(status >= 200 && status < 300)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", result);

          case 11:
            throw new APIError(result);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _post.apply(this, arguments);
}

/***/ })

},[["./assets/js/app.js","runtime","vendors~admin~app","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9MaW5rLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VsZW1lbnRzL0Zhdm9yaXRlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9NZXRhTGluay50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZWxlbWVudHMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9UaW1lQWdvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbGVtZW50cy9Ub29sYm94LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy9hcGkudHMiXSwibmFtZXMiOlsiTGluayIsImVsZW1lbnQiLCJvcHRpb25zIiwiYWRkTGlua01vZGFsIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJrZXlib2FyZCIsInNob3J0Y3V0SGFuZGxlciIsImJpbmQiLCJPYmplY3QiLCJhc3NpZ24iLCJ3aXRoU2hvcnRjdXQiLCJrZXlDb2RlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0Iiwic2hvdyIsImxpbmtfZm9ybV91cmwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJoaWRlIiwibGluayIsImNob2ljZXNFbGVtZW50IiwiQ2hvaWNlcyIsImR1cGxpY2F0ZUl0ZW1zQWxsb3dlZCIsInBsYWNlaG9sZGVyIiwicGxhY2Vob2xkZXJWYWx1ZSIsImFkZEl0ZW1UZXh0IiwidmFsdWUiLCJkcm9wZG93bkVsZW1lbnRMaXN0Iiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImRyb3Bkb3duTGlzdCIsIm1hcCIsImRyb3Bkb3duVG9nZ2xlRWwiLCJEcm9wZG93biIsIm15RHJvcGRvd24iLCJnZXRFbGVtZW50QnlJZCIsIm5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbiIsIm9uQ2xpY2tPcGVuTm90aWZpY2F0aW9uIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJNZXRhTGluayIsIlRvb2xib3giLCJUaW1lQWdvIiwiRmF2b3JpdGVCdXR0b24iLCJjbGlja0hhbmRsZXIiLCJhcGlSb3V0ZUFkZCIsImdldEF0dHJpYnV0ZSIsImFwaVJvdXRlRGVsZXRlIiwiZmF2b3JpdGVfbGluayIsInRpdGxlTWVzc2FnZSIsImlzQWN0aXZlIiwicm91dGUiLCJwb3N0Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJIVE1MRWxlbWVudCIsImhhbmRsZUNoYW5nZSIsInVybEZpZWxkIiwidXJsIiwidGFyZ2V0IiwicmVzdWx0Iiwic2V0Rm9ybUVsZW1lbnQiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGl0bGUiLCJ0YWdzIiwic2VsZWN0b3IiLCJ1cGRhdGVQYXRoIiwiZGF0YXNldCIsInVwZGF0ZSIsIm5vdGlmaWNhdGlvbkNvdW50RWxlbWVudCIsInJlbW92ZSIsInRlcm1zIiwidGltZSIsImRpdmlkZSIsInRleHQiLCJJbmZpbml0eSIsImF0dHJpYnV0ZSIsInRpbWVzdGFtcCIsInBhcnNlSW50IiwiZGF0ZSIsIkRhdGUiLCJ1cGRhdGVUZXh0IiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZWNvbmRzIiwiZ2V0VGltZSIsInRlcm0iLCJwcmVmaXgiLCJNYXRoIiwiYWJzIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsInJvdW5kIiwibmV4dFRpY2siLCJzZXRUaW1lb3V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVsZXRlSGFuZGxlciIsImxpbmtJZCIsImVkaXRfdGFyZ2V0IiwicmVuZGVyIiwiY2xvc2VfYnV0dG9uIiwiY29uZmlybSIsImZldGNoIiwiaGVhZGVycyIsIkFjY2VwdCIsIm1ldGhvZCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJfYSIsInBhcmVudEVsZW1lbnQiLCJhbGVydCIsImNyZWF0ZUVsZW1lbnQiLCJkZXRhaWwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJBUElFcnJvciIsImVycm9ycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBcUJBLEk7QUFDakIsZ0JBQVlDLE9BQVosRUFBcUJDLE9BQXJCLEVBQThCO0FBQUE7O0FBQzFCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixJQUFJQyxTQUFTLENBQUNDLEtBQWQsQ0FBb0JKLE9BQXBCLEVBQTZCO0FBQzdDSyxjQUFRLEVBQUU7QUFEbUMsS0FBN0IsQ0FBcEI7QUFHQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0EsU0FBS04sT0FBTCxHQUFlTyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFQyxrQkFBWSxFQUFFLElBQWhCO0FBQXNCQyxhQUFPLEVBQUU7QUFBL0IsS0FBZCxFQUFvRFYsT0FBTyxJQUFJLEVBQS9ELENBQWY7QUFDQVcsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLUCxlQUF4QztBQUNIOzs7O1dBQ0QseUJBQWdCUSxLQUFoQixFQUF1QjtBQUNuQixVQUFJQSxLQUFLLENBQUNDLEdBQU4sS0FBYyxHQUFkLElBQXFCRCxLQUFLLENBQUNFLE9BQU4sS0FBa0IsSUFBM0MsRUFBaUQ7QUFDN0NGLGFBQUssQ0FBQ0csY0FBTjtBQUNBLGFBQUtmLFlBQUwsQ0FBa0JnQixJQUFsQjtBQUNBLFlBQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQXRCOztBQUNBLFlBQUlGLGFBQUosRUFBbUI7QUFDZkEsdUJBQWEsQ0FBQ0csWUFBZCxDQUEyQixXQUEzQixF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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVvQk4sS0FBSyxDQUFDN0MsR0FBRCxFQUFNO0FBQzlCZ0Qsb0JBQU0sRUFBRSxNQURzQjtBQUU5QkYscUJBQU8sRUFBRTtBQUNMLDBCQUFVLGtCQURMO0FBRUwsZ0NBQWdCO0FBRlgsZUFGcUI7QUFNOUJXLGtCQUFJLEVBQUVJLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxJQUFmO0FBTndCLGFBQU4sQ0FGekI7O0FBQUE7QUFFR0Ysb0JBRkg7QUFVR2Msa0JBVkgsR0FVWWQsUUFBUSxDQUFDYyxNQVZyQjtBQUFBO0FBQUEsbUJBV2tCZCxRQUFRLENBQUNDLElBQVQsRUFYbEI7O0FBQUE7QUFXR2hELGtCQVhIOztBQUFBLGtCQVlDNkQsTUFBTSxJQUFJLEdBQVYsSUFBaUJBLE1BQU0sR0FBRyxHQVozQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FhUTdELE1BYlI7O0FBQUE7QUFBQSxrQkFnQk8sSUFBSXlELFFBQUosQ0FBYXpELE1BQWIsQ0FoQlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5hZGRMaW5rTW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zaG9ydGN1dEhhbmRsZXIgPSB0aGlzLnNob3J0Y3V0SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgd2l0aFNob3J0Y3V0OiB0cnVlLCBrZXlDb2RlOiAndCcgfSwgb3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zaG9ydGN1dEhhbmRsZXIpO1xuICAgIH1cbiAgICBzaG9ydGN1dEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ2snICYmIGV2ZW50LmN0cmxLZXkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmFkZExpbmtNb2RhbC5zaG93KCk7XG4gICAgICAgICAgICBjb25zdCBsaW5rX2Zvcm1fdXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVybEZpZWxkJyk7XG4gICAgICAgICAgICBpZiAobGlua19mb3JtX3VybCkge1xuICAgICAgICAgICAgICAgIGxpbmtfZm9ybV91cmwuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgdGhpcy5hZGRMaW5rTW9kYWwuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XHJcbmltcG9ydCBNZXRhTGluayBmcm9tIFwiLi9lbGVtZW50cy9NZXRhTGlua1wiO1xyXG5pbXBvcnQgVG9vbGJveCBmcm9tIFwiLi9lbGVtZW50cy9Ub29sYm94XCI7XHJcbmltcG9ydCB7IFRpbWVBZ28gfSBmcm9tIFwiLi9lbGVtZW50cy9UaW1lQWdvLmpzXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSBcIi4vZWxlbWVudHMvTm90aWZpY2F0aW9uLmpzXCI7XHJcbmltcG9ydCBDaG9pY2VzIGZyb20gXCJjaG9pY2VzLmpzXCI7XHJcbmltcG9ydCBGYXZvcml0ZUJ1dHRvbiBmcm9tIFwiLi9lbGVtZW50cy9GYXZvcml0ZUJ1dHRvblwiO1xyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRMaW5rJykgIT09IG51bGwpIHtcclxuICAgIGNvbnN0IGxpbmsgPSBuZXcgTGluayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkTGluaycpKVxyXG59XHJcblxyXG5jb25zdCBjaG9pY2VzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jaG9pY2UnKVxyXG5pZiAoY2hvaWNlc0VsZW1lbnQgIT09IG51bGwpIHtcclxuICAgIG5ldyBDaG9pY2VzKGNob2ljZXNFbGVtZW50LCB7XHJcbiAgICAgICAgZHVwbGljYXRlSXRlbXNBbGxvd2VkOiBmYWxzZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogdHJ1ZSxcclxuICAgICAgICBwbGFjZWhvbGRlclZhbHVlOiAnVGFncycsXHJcbiAgICAgICAgYWRkSXRlbVRleHQ6ICh2YWx1ZSkgPT4gYFRvdWNoZSBlbnRyZXIgcG91ciBham91dGVyIDxiPlwiJHt2YWx1ZX1cIjwvYj5gXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBkcm9wZG93bkVsZW1lbnRMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tdG9nZ2xlJykpXHJcbmNvbnN0IGRyb3Bkb3duTGlzdCA9IGRyb3Bkb3duRWxlbWVudExpc3QubWFwKGZ1bmN0aW9uIChkcm9wZG93blRvZ2dsZUVsKSB7XHJcbiAgICByZXR1cm4gbmV3IGJvb3RzdHJhcC5Ecm9wZG93bihkcm9wZG93blRvZ2dsZUVsKVxyXG59KVxyXG5cclxuY29uc3QgbXlEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25Ecm9wZG93bicpXHJcbmlmIChteURyb3Bkb3duICE9PSBudWxsKSB7XHJcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKClcclxuICAgIG15RHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignc2hvdy5icy5kcm9wZG93bicsIG5vdGlmaWNhdGlvbi5vbkNsaWNrT3Blbk5vdGlmaWNhdGlvbilcclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtZXRhLWxpbmsnLCBNZXRhTGluaylcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0b29sYm94LWl0ZW0nLCBUb29sYm94KVxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3RpbWUtYWdvJywgVGltZUFnbylcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdmYXZvcml0ZS1idXR0b24nLCBGYXZvcml0ZUJ1dHRvbilcclxuIiwiaW1wb3J0IHtwb3N0fSBmcm9tIFwiLi4vdXRpbHMvYXBpXCI7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtQcm9taXNlfSBjbGlja0hhbmRsZXJcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGFwaVJvdXRlQWRkXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhcGlSb3V0ZURlbGV0ZVxyXG4gKiBAcHJvcGVydHkge0VsZW1lbnR9IGZhdm9yaXRlX2xpbmtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhdm9yaXRlQnV0dG9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuYXBpUm91dGVBZGQgPSB0aGlzLmdldEF0dHJpYnV0ZSgncm91dGUtYWRkJylcclxuICAgICAgICB0aGlzLmFwaVJvdXRlRGVsZXRlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3JvdXRlLWRlbGV0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZV9saW5rID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGVfX2xpbmsnKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlTWVzc2FnZSA9IHRoaXMuaXNBY3RpdmUoKSA/ICdTdXBwcmltZXIgbGUgbGllbiBkZSBtZXMgZmF2b3JpcycgOiAnQWpvdXRlciBsZSBsaWVuIGRhbnMgbWVzIGZhdm9yaXMnXHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZV9saW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aXRsZU1lc3NhZ2UpXHJcbiAgICAgICAgaWYgKHRoaXMuZmF2b3JpdGVfbGluayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlX2xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2xpY2tIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gdGhpcy5pc0FjdGl2ZSgpID8gdGhpcy5hcGlSb3V0ZURlbGV0ZSA6IHRoaXMuYXBpUm91dGVBZGRcclxuICAgICAgICBjb25zdCB7IHN1Y2Nlc3MsIG1lc3NhZ2UgfSA9IGF3YWl0IHBvc3Qocm91dGUpXHJcblxyXG4gICAgICAgIGlmIChzdWNjZXNzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVfbGluay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpIGxlIGxpZW4gY29udGllbnQgbGEgY2xhc3NlIFwiYWN0aXZlXCIgYWxvcnMgbGUgbGllbiBlc3QgYWpvdXTDqSBjb21tZSBmYXZvcmlzXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzQWN0aXZlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhdm9yaXRlX2xpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSA9PT0gdHJ1ZVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBwb3N0IH0gZnJvbSBcIi4uL3V0aWxzL2FwaVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YUxpbmsgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGNvbnN0IHVybEZpZWxkID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcudXJsRmllbGQnKTtcbiAgICAgICAgaWYgKHVybEZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICB1cmxGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9zdCgnL2FwaS9saW5rL21ldGFkYXRhJywgeyB1cmwgfSk7XG4gICAgICAgIHRoaXMuc2V0Rm9ybUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJywgcmVzdWx0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5zZXRGb3JtRWxlbWVudCgnaW1hZ2UnLCByZXN1bHQuaW1hZ2UpO1xuICAgICAgICB0aGlzLnNldEZvcm1FbGVtZW50KCd0aXRsZScsIHJlc3VsdC50aXRsZSk7XG4gICAgICAgIHRoaXMuc2V0Rm9ybUVsZW1lbnQoJ2xpbmtfdGFncycsIHJlc3VsdC50YWdzKTtcbiAgICB9XG4gICAgc2V0Rm9ybUVsZW1lbnQoc2VsZWN0b3IsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9yfWApO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHBvc3QgfSBmcm9tIFwiLi4vdXRpbHMvYXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb24ge1xyXG5cclxuICAgIGFzeW5jIG9uQ2xpY2tPcGVuTm90aWZpY2F0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVBhdGggPSB0aGlzLmRhdGFzZXQudXBkYXRlXHJcblxyXG4gICAgICAgIGNvbnN0IHsgc3VjY2VzcyB9ID0gYXdhaXQgcG9zdCh1cGRhdGVQYXRoKVxyXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbkNvdW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb25fX2NvdW50JylcclxuICAgICAgICAgICAgaWYgKCFub3RpZmljYXRpb25Db3VudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiY29uc3QgdGVybXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGltZTogNDUsXHJcbiAgICAgICAgZGl2aWRlOiA2MCxcclxuICAgICAgICB0ZXh0OiBcIm1vaW5zIGQndW5lIG1pbnV0ZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpbWU6IDkwLFxyXG4gICAgICAgIGRpdmlkZTogNjAsXHJcbiAgICAgICAgdGV4dDogJ2Vudmlyb24gdW5lIG1pbnV0ZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGltZTogNDUgKiA2MCxcclxuICAgICAgICBkaXZpZGU6IDYwLFxyXG4gICAgICAgIHRleHQ6ICclZCBtaW51dGVzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aW1lOiA5MCAqIDYwLFxyXG4gICAgICAgIGRpdmlkZTogNjAgKiA2MCxcclxuICAgICAgICB0ZXh0OiAnZW52aXJvbiB1bmUgaGV1cmUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpbWU6IDI0ICogNjAgKiA2MCxcclxuICAgICAgICBkaXZpZGU6IDYwICogNjAsXHJcbiAgICAgICAgdGV4dDogJyVkIGhldXJlcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGltZTogNDIgKiA2MCAqIDYwLFxyXG4gICAgICAgIGRpdmlkZTogMjQgKiA2MCAqIDYwLFxyXG4gICAgICAgIHRleHQ6ICdlbnZpcm9uIHVuIGpvdXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpbWU6IDMwICogMjQgKiA2MCAqIDYwLFxyXG4gICAgICAgIGRpdmlkZTogMjQgKiA2MCAqIDYwLFxyXG4gICAgICAgIHRleHQ6ICclZCBqb3VycydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGltZTogNDUgKiAyNCAqIDYwICogNjAsXHJcbiAgICAgICAgZGl2aWRlOiAyNCAqIDYwICogNjAgKiAzMCxcclxuICAgICAgICB0ZXh0OiAnZW52aXJvbiB1biBtb2lzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aW1lOiAzNjUgKiAyNCAqIDYwICogNjAsXHJcbiAgICAgICAgZGl2aWRlOiAyNCAqIDYwICogNjAgKiAzMCxcclxuICAgICAgICB0ZXh0OiAnJWQgbW9pcydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGltZTogMzY1ICogMS41ICogMjQgKiA2MCAqIDYwLFxyXG4gICAgICAgIGRpdmlkZTogMjQgKiA2MCAqIDYwICogMzY1LFxyXG4gICAgICAgIHRleHQ6ICdlbnZpcm9uIHVuIGFuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aW1lOiBJbmZpbml0eSxcclxuICAgICAgICBkaXZpZGU6IDI0ICogNjAgKiA2MCAqIDM2NSxcclxuICAgICAgICB0ZXh0OiAnJWQgYW5zJ1xyXG4gICAgfVxyXG5dXHJcblxyXG4vKipcclxuICogQ3VzdG9tIGVsZW1lbnQgcGVybWV0dGFudCBkJ2FmZmljaGVyIHVuZSBkYXRlIGRlIG1hbmnDqHJlIHJlbGF0aXZlXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aW1lclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRpbWVBZ28gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0aW1lJykgfHwgJydcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBwYXJzZUludChhdHRyaWJ1dGUsIDEwKSAqIDEwMDBcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKVxyXG4gICAgICAgIHRoaXMudXBkYXRlVGV4dChkYXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrICgpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGV4dCAoZGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSkgLyAxMDAwXHJcbiAgICAgICAgbGV0IHRlcm0gPSBudWxsXHJcbiAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWZpeCcpXHJcbiAgICAgICAgZm9yICh0ZXJtIG9mIHRlcm1zKSB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzZWNvbmRzKSA8IHRlcm0udGltZSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Vjb25kcyA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gYCR7cHJlZml4IHx8ICdJbCB5IGEnfSAke3Rlcm0udGV4dC5yZXBsYWNlKCclZCcsIE1hdGgucm91bmQoc2Vjb25kcyAvIHRlcm0uZGl2aWRlKSl9YFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gYCR7cHJlZml4IHx8ICdEYW5zJ30gJHt0ZXJtLnRleHQucmVwbGFjZSgnJWQnLCBNYXRoLnJvdW5kKE1hdGguYWJzKHNlY29uZHMpIC8gdGVybS5kaXZpZGUpKX1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuZXh0VGljayA9IE1hdGguYWJzKHNlY29uZHMpICUgdGVybS5kaXZpZGVcclxuICAgICAgICBpZiAobmV4dFRpY2sgPT09IDApIHtcclxuICAgICAgICAgICAgbmV4dFRpY2sgPSB0ZXJtLmRpdmlkZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV4dFRpY2sgPiAyMTQ3NDgyKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGV4dChkYXRlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDEwMDAgKiBuZXh0VGljaylcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sYm94IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRlbGV0ZUhhbmRsZXIgPSB0aGlzLmRlbGV0ZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5saW5rSWQgPSBwYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSB8fCBcIlwiLCAxMCk7XG4gICAgICAgIHRoaXMuZWRpdF90YXJnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZWRpdF90YXJnZXQnKSB8fCBcIiNcIjtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MICs9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGNvbnN0IGNsb3NlX2J1dHRvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gICAgICAgIGlmIChjbG9zZV9idXR0b24pIHtcbiAgICAgICAgICAgIGNsb3NlX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZGVsZXRlSGFuZGxlcihldmVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghY29uZmlybSgnRXRlcyB2b3VzIHN1ciBkZSB2b3Vsb2lyIHN1cHByaW1lciBjZSBsaWVuID8nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2xpbmsvZGVsZXRlLycgKyB0aGlzLmxpbmtJZCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIC8vIGxvYWRlci5oaWRlKClcbiAgICAgICAgICAgIChfYSA9IHRoaXMucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvL2xvYWRlci5oaWRlKClcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWxlcnQtZmxvYXRpbmcnKTtcbiAgICAgICAgICAgIGFsZXJ0LmlubmVySFRNTCA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sYm94XCI+XHJcbiAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImRlbGV0ZV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImVkaXRfX2l0ZW1cIiBocmVmPVwiJHt0aGlzLmVkaXRfdGFyZ2V0fVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktcGVuY2lsLXNxdWFyZVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNTAyIDEuOTRhLjUuNSAwIDAgMSAwIC43MDZMMTQuNDU5IDMuNjlsLTItMkwxMy41MDIuNjQ2YS41LjUgMCAwIDEgLjcwNyAwbDEuMjkzIDEuMjkzem0tMS43NSAyLjQ1NmwtMi0yTDQuOTM5IDkuMjFhLjUuNSAwIDAgMC0uMTIxLjE5NmwtLjgwNSAyLjQxNGEuMjUuMjUgMCAwIDAgLjMxNi4zMTZsMi40MTQtLjgwNWEuNS41IDAgMCAwIC4xOTYtLjEybDYuODEzLTYuODE0elwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEgMTMuNUExLjUgMS41IDAgMCAwIDIuNSAxNWgxMWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTZhLjUuNSAwIDAgMC0xIDB2NmEuNS41IDAgMCAxLS41LjVoLTExYS41LjUgMCAwIDEtLjUtLjV2LTExYS41LjUgMCAwIDEgLjUtLjVIOWEuNS41IDAgMCAwIDAtMUgyLjVBMS41IDEuNSAwIDAgMCAxIDIuNXYxMXpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xuICAgIH1cbn1cbiIsImNsYXNzIEFQSUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pO1xuICAgIGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgQVBJRXJyb3IocmVzdWx0KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9