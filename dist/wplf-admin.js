(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["WPLF"] = factory(require("react"), require("react-dom"));
	else
		root["WPLF"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/classes/wplf-addons.ts":
/*!***********************************************!*\
  !*** ./assets/scripts/classes/wplf-addons.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPLF_Addons; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WPLF_Addons = function WPLF_Addons(wplfInstance) {
  _classCallCheck(this, WPLF_Addons);
};



/***/ }),

/***/ "./assets/scripts/classes/wplf-admin.ts":
/*!**********************************************!*\
  !*** ./assets/scripts/classes/wplf-admin.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPLF_Admin; });
/* harmony import */ var _wplf_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wplf-editor */ "./assets/scripts/classes/wplf-editor.ts");
/* harmony import */ var _wplf_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wplf-settings */ "./assets/scripts/classes/wplf-settings.ts");
/* harmony import */ var _wplf_addons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wplf-addons */ "./assets/scripts/classes/wplf-addons.ts");
/* harmony import */ var _wplf_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wplf-tabs */ "./assets/scripts/classes/wplf-tabs.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var WPLF_Admin = /*#__PURE__*/function () {
  function WPLF_Admin(wplfInstance) {
    _classCallCheck(this, WPLF_Admin);

    this.tabs = Array.from(document.querySelectorAll('.wplf-tabs')).map(function (el) {
      return new _wplf_tabs__WEBPACK_IMPORTED_MODULE_3__["default"](el);
    }); // Init stuff based on what page we're on

    var classList = document.body.classList;

    if (classList.contains('post-type-libreform') && (classList.contains('post-php') || classList.contains('post-new-php'))) {
      this.editor = new _wplf_editor__WEBPACK_IMPORTED_MODULE_0__["default"](wplfInstance);
    } else if (classList.contains('libreform_page_wplfSettings')) {
      // In settings page
      this.settings = new _wplf_settings__WEBPACK_IMPORTED_MODULE_1__["default"](wplfInstance);
    } else if (classList.contains('libreform_page_wplfAddons')) {
      this.addons = new _wplf_addons__WEBPACK_IMPORTED_MODULE_2__["default"](wplfInstance);
    }
  }

  _createClass(WPLF_Admin, [{
    key: "getEditor",
    value: function getEditor() {
      return this.editor;
    }
  }, {
    key: "getAddons",
    value: function getAddons() {
      return this.addons;
    }
  }, {
    key: "getSettings",
    value: function getSettings() {
      return this.settings;
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      return this.tabs;
    }
  }]);

  return WPLF_Admin;
}();



/***/ }),

/***/ "./assets/scripts/classes/wplf-api.ts":
/*!********************************************!*\
  !*** ./assets/scripts/classes/wplf-api.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_create_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/create-request */ "./assets/scripts/lib/create-request.ts");
/* harmony import */ var _lib_global_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/global-data */ "./assets/scripts/lib/global-data.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./assets/scripts/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Client = /*#__PURE__*/function () {
  function Client() {
    _classCallCheck(this, Client);
  }

  _createClass(Client, [{
    key: "requestRender",
    // checkResponse(response: RawApiResponse) {
    //   const { ok, status } = response
    //   if (!ok) {
    //     return false
    //   }
    //   return true
    // }
    // parseResponse<ToType extends keyof ApiResponseKind>(response: RawApiResponse) : ToType {
    //   return {
    //     ...response,
    //     kind: ApiResponseKind[ToType],
    //   }
    // }
    value: function () {
      var _requestRender = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, content) {
        var body, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = new FormData();
                body.append('content', content);
                body.append('form', id.toString());

                if (_lib_global_data__WEBPACK_IMPORTED_MODULE_1__["default"].lang) {
                  body.append('lang', _lib_global_data__WEBPACK_IMPORTED_MODULE_1__["default"].lang);
                }

                _context.next = 6;
                return Object(_lib_create_request__WEBPACK_IMPORTED_MODULE_0__["request"])('/renderForm', {
                  method: 'POST',
                  body
                });

              case 6:
                response = _context.sent;

                if (response.ok) {
                  _context.next = 9;
                  break;
                }

                throw new Error('Unable to render form');

              case 9:
                return _context.abrupt("return", _objectSpread(_objectSpread({}, response), {}, {
                  kind: _types__WEBPACK_IMPORTED_MODULE_2__["ResponseType"].RenderForm
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function requestRender(_x, _x2) {
        return _requestRender.apply(this, arguments);
      }

      return requestRender;
    }()
  }]);

  return Client;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Client());

/***/ }),

/***/ "./assets/scripts/classes/wplf-editor.ts":
/*!***********************************************!*\
  !*** ./assets/scripts/classes/wplf-editor.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPLF_Editor; });
/* harmony import */ var _lib_global_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/global-data */ "./assets/scripts/lib/global-data.ts");
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/log */ "./assets/scripts/lib/log.ts");
/* harmony import */ var _lib_wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/wait */ "./assets/scripts/lib/wait.ts");
/* harmony import */ var _lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/is-elementish */ "./assets/scripts/lib/is-elementish.ts");
/* harmony import */ var _lib_get_attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/get-attribute */ "./assets/scripts/lib/get-attribute.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_SubmissionList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../react/SubmissionList */ "./assets/scripts/react/SubmissionList.tsx");
/* harmony import */ var _wplf_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wplf-api */ "./assets/scripts/classes/wplf-api.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var i18n = _lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].i18n;
var $ = window.jQuery;
var _ = window._;
var wp = window.wp;

var WPLF_Editor = /*#__PURE__*/function () {
  function WPLF_Editor(wplfInstance) {
    _classCallCheck(this, WPLF_Editor);

    this.formInstance = null;
    var fields = document.querySelector('#wplfFields');
    var additionalFields = document.querySelector('#wplfAdditionalFields');
    var newFields = document.querySelector('#wplfNewFields');
    var deletedFields = document.querySelector('#wplfDeletedFields');
    var historyFields = document.querySelector('#wplfHistoryFields');
    var allowSave = document.querySelector('#wplfAllowSave');
    var submissionsEl = document.querySelector('.wplf-editor .wplf-submissionList');
    var editorEl = document.querySelector('.wplf-editor .wplf-cmEditor');
    var thankYouEl = document.querySelector('.wplf-afterSubmission .wplf-cmEditor');
    var previewEl = document.querySelector('.wplf-editor__preview');
    var publishButton = document.querySelector('#publish');
    var sidebarFieldTemplate = document.querySelector('.wplf-formFields > .wplf-formFields__field');

    if (!_lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].settings.hasUnfilteredHtml) {
      setTimeout(function () {
        alert(_lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].i18n.noUnfilteredHtml);
      }, 500); // Delay a bit to allow stuff to init before showing a blocking element
    }

    if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(fields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(additionalFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(newFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(deletedFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(historyFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(allowSave) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(submissionsEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(editorEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(thankYouEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(previewEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(publishButton) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(sidebarFieldTemplate)) {
      var _globalData$post;

      var editorIsReadonly = $(editorEl).attr('readonly') ? true : false;
      var initialState = {
        historyFields: JSON.parse(Object(_lib_get_attribute__WEBPACK_IMPORTED_MODULE_4__["default"])(historyFields, 'value') || '{}'),
        fields: JSON.parse(Object(_lib_get_attribute__WEBPACK_IMPORTED_MODULE_4__["default"])(fields, 'value') || 'null'),
        additionalFields: JSON.parse(Object(_lib_get_attribute__WEBPACK_IMPORTED_MODULE_4__["default"])(additionalFields, 'value') || 'null'),
        newFields: [],
        deletedFields: [],
        allowSave: false
      };
      this.wplf = wplfInstance;
      this.state = initialState;
      this.inputs = {
        fields,
        additionalFields,
        newFields,
        deletedFields,
        historyFields,
        allowSave
      };
      this.fieldTemplate = sidebarFieldTemplate.cloneNode(true);
      this.fieldTemplate.removeAttribute('hidden');
      this.previewEl = previewEl;
      this.publishButton = publishButton;
      this.contentEditor = editorIsReadonly ? null : wp.codeEditor.initialize($(editorEl), _lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].codeMirror);
      this.successMessageEditor = wp.codeEditor.initialize($(thankYouEl), _lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].codeMirror);
      this.handleContentChange = this.handleContentChange.bind(this);

      if (!editorIsReadonly) {
        // If the editor is in read-only mode, no need to refresh the preview as it can't change anyway.
        this.contentEditor.codemirror.on('changes', _.debounce(this.handleContentChange, 1000));
        this.handleContentChange(this.contentEditor.codemirror); // Triggers preview build
      } else {
        this.handleContentChange(editorEl.getAttribute('value'));
      }

      if (!_lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].settings.hasUnfilteredHtml) {
        this.tryToPreventEdit();
      }

      var formId = ((_globalData$post = _lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].post) === null || _globalData$post === void 0 ? void 0 : _globalData$post.ID) || null;

      if (formId) {
        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_react_SubmissionList__WEBPACK_IMPORTED_MODULE_7__["default"], {
          formId
        }, null), submissionsEl);
      }
    } else {
      throw new Error('Missing some or all of the required elements to run WPLF_Editor');
    }
  }

  _createClass(WPLF_Editor, [{
    key: "setState",
    value: function setState() {
      var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (currentState) {
        return {};
      };
      var currentState = this.state;
      var newState = fn(currentState);

      if (!newState) {
        // no op
        return;
      }

      this.state = _objectSpread(_objectSpread({}, currentState), newState);
      this.afterStateChange();
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "writeState",
    value: function writeState() {
      var _this = this;

      Object.entries(this.inputs).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            el = _ref2[1];

        if (key in _this.state) {
          var value = _this.state[key];

          if (typeof value === 'boolean') {
            el.setAttribute('value', value ? '1' : '0');
          } else {
            el.setAttribute('value', JSON.stringify(value));
          }
        }
      });
    }
  }, {
    key: "afterStateChange",
    value: function afterStateChange() {
      var _this2 = this;

      var state = this.getState();
      Object.entries(state).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            k = _ref4[0],
            v = _ref4[1];

        switch (k) {
          case 'allowSave':
            {
              _this2.writeState();

              if (v) {
                _this2.publishButton.removeAttribute('disabled');
              } else {
                _this2.publishButton.setAttribute('disabled', 'true');
              }
            }
          // no default
        }
      });
    }
    /**
     * Disable bunch of things and remove the submit button,
     * backend will handle it if necessary but it's not pretty.
     * Backend should also print a notice above the form.
     */

  }, {
    key: "tryToPreventEdit",
    value: function tryToPreventEdit() {
      // Might as well use the jQuery since it's wp-admin.
      $('#title').prop('disabled', true);
      $('#content').prop('disabled', true);
      $('#publish').remove();
      $('#save-post').remove();
    } // `editor` is a CodeMirror instance or a string

  }, {
    key: "handleContentChange",
    value: function () {
      var _handleContentChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(editor) {
        var wplf, formInstance, content;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wplf = this.wplf, formInstance = this.formInstance;
                content = typeof editor === 'string' ? editor : editor.getValue();
                _context.prev = 2;

                if (formInstance) {
                  wplf.detach(formInstance);
                  formInstance = null;
                } // Disable submit button when the fields change


                this.setState(function () {
                  return {
                    allowSave: false
                  };
                });
                _context.next = 7;
                return this.updatePreview(content);

              case 7:
                _context.next = 9;
                return this.updateFormFieldsFromPreview();

              case 9:
                _context.next = 11;
                return this.removeProblematicAttributesFromPreview();

              case 11:
                this.writeState();
                formInstance = wplf.attach(this.previewEl);
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);
                _lib_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('Failed to get preview', _context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 15]]);
      }));

      function handleContentChange(_x) {
        return _handleContentChange.apply(this, arguments);
      }

      return handleContentChange;
    }()
  }, {
    key: "updatePreview",
    value: function () {
      var _updatePreview = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(content) {
        var _globalData$post2;

        var formId, response, data, html, tmpEl, form;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formId = ((_globalData$post2 = _lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].post) === null || _globalData$post2 === void 0 ? void 0 : _globalData$post2.ID) || null;
                console.log('terve');

                if (formId) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                _context2.prev = 4;
                _context2.next = 7;
                return _wplf_api__WEBPACK_IMPORTED_MODULE_8__["default"].requestRender(formId, content);

              case 7:
                response = _context2.sent;
                data = response.data; // console.log(data.kind, data.data)
                // @ts-ignore

                console.log('response', response); // if (data.kind === ResponseType.ApiError) {
                //   log.error('Unable to update preview', data)
                //   throw new Error(data.error)
                // } else {
                // }

                if (!('error' in data)) {
                  _context2.next = 15;
                  break;
                }

                _lib_log__WEBPACK_IMPORTED_MODULE_1__["default"].error('Unable to update preview', data);
                throw new Error(data.error);

              case 15:
                html = data.html;
                tmpEl = document.createElement('div');
                tmpEl.innerHTML = html;
                _context2.next = 20;
                return Object(_lib_wait__WEBPACK_IMPORTED_MODULE_2__["waitForNextTick"])();

              case 20:
                form = tmpEl.querySelector('form');
                this.previewEl.innerHTML = form ? form.innerHTML : '';
                _context2.next = 24;
                return Object(_lib_wait__WEBPACK_IMPORTED_MODULE_2__["waitForNextTick"])();

              case 24:
                _context2.next = 29;
                break;

              case 26:
                _context2.prev = 26;
                _context2.t0 = _context2["catch"](4);
                this.previewEl.innerHTML = _context2.t0.message;

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 26]]);
      }));

      function updatePreview(_x2) {
        return _updatePreview.apply(this, arguments);
      }

      return updatePreview;
    }()
  }, {
    key: "getDuplicateNames",
    value: function getDuplicateNames(names) {
      return _.unique(names.filter(function (name) {
        return names.filter(function (n) {
          return n === name;
        }).length > 1;
      }));
    }
  }, {
    key: "createFieldElement",
    value: function createFieldElement(field) {
      var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var element = this.fieldTemplate.cloneNode(true);
      var name = field.name,
          type = field.type,
          required = field.required;
      var nameEl = element.querySelector('strong');
      var typeEl = element.querySelector('.wplf-formFields__field__type em');
      var alert = element.querySelector('.wplf-formFields__field__alert');

      if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(nameEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(typeEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(alert)) {
        nameEl.innerText = name;
        typeEl.innerText = required ? "required ".concat(type) : type;

        if (errorMessage) {
          alert.setAttribute('title', errorMessage);
          var messages = document.createElement('p');
          var message = "<strong>".concat(i18n.problems, "</strong>").concat(errorMessage).replace(/(?:\r\n|\r|\n)/g, '<br>');
          messages.innerHTML = message;
          alert.insertAdjacentElement('afterend', messages);
        } else {
          Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(alert.parentNode) && alert.parentNode.removeChild(alert);
        }
      }

      return element;
    }
  }, {
    key: "updateFormFieldsFromPreview",
    value: function () {
      var _updateFormFieldsFromPreview = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this3 = this;

        var _this$getState, historyFields, additionalFields, el, fieldContainer, allowSave, fields, fieldNames, duplicateNames, fieldErrors, newFields, deletedFields, newState;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$getState = this.getState(), historyFields = _this$getState.historyFields, additionalFields = _this$getState.additionalFields;
                el = this.previewEl;
                fieldContainer = document.querySelector('.wplf-formFields');

                if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(fieldContainer)) {
                  _context3.next = 6;
                  break;
                }

                console.warn('Field container does not exist');
                return _context3.abrupt("return");

              case 6:
                allowSave = true; // Get all inputs with a name attribute, yes, even button.

                fields = Array.from(el.querySelectorAll('input, textarea, select, button')).filter(function (el) {
                  return el.getAttribute('name');
                }).reduce(function (acc, el) {
                  if (el && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_3__["default"])(el)) {
                    var fieldName = el.getAttribute('name');

                    if (!fieldName) {
                      return acc;
                    }
                    /**
                     * Remove brackets from the name, because they cause us grief.
                     * The brackets are not visible in the actual data, which kinda breaks all comparisons.
                     */


                    var name = fieldName.replace('[]', '');
                    var type = el.getAttribute('type') || el.tagName.toLowerCase();
                    var required = el.getAttribute('required') !== null ? true : false;
                    var multiple = fieldName.endsWith('[]');
                    var attributes = Object.values(el.attributes).reduce(function (acc, attr) {
                      // These attributes are either harmful or already handled.
                      var skipList = ['name', 'type', 'required'];

                      if (skipList.includes(attr.name)) {
                        return acc;
                      }

                      acc[attr.name] = attr.value;
                      return acc;
                    }, {});
                    acc.push({
                      name,
                      type,
                      required,
                      multiple,
                      attributes
                    });
                    return acc;
                  }

                  return acc;
                }, []);
                fieldNames = fields.map(function (field) {
                  return field.name;
                });
                duplicateNames = this.getDuplicateNames(fieldNames);
                fieldContainer.innerHTML = '';
                fieldErrors = [];
                fields.forEach(function (field) {
                  if (!field) {
                    return;
                  }

                  var name = field.name,
                      type = field.type;
                  var historyField = Object.values(historyFields).find(function (field) {
                    return field.name === name;
                  });
                  var errorMessage = ''; // names like fieldgroup[fieldname] are not supported

                  if (name.match(/\w*\[\w*\]/)) {
                    errorMessage = "".concat(errorMessage).concat(i18n.groupedNamesNotSupportedYet, "\n");
                  }

                  if (duplicateNames && duplicateNames.includes(name)) {
                    // Allow checkboxes etc to work normally, error otherwise.
                    if (!field.multiple) {
                      errorMessage = "".concat(errorMessage).concat(i18n.duplicateFieldName, " ").concat(name, "\n");
                    }
                  }

                  if (additionalFields.includes(name)) {
                    errorMessage = "".concat(errorMessage).concat(i18n.illegalName.replace('{name}', name), "\n");
                  }

                  if (historyField && historyField.type !== type) {
                    errorMessage = "".concat(errorMessage).concat(i18n.fieldAlreadyExistsInDb.replace('{type}', historyField.type), "\n");
                  }

                  if (errorMessage) {
                    fieldErrors.push(errorMessage);
                  }

                  fieldContainer.appendChild(_this3.createFieldElement(field, errorMessage));
                });

                if (!fieldErrors.length) {
                  allowSave = true;
                } else {
                  allowSave = false;
                }

                newFields = fields.filter(function (field) {
                  if (!field) {
                    return false;
                  }

                  var fieldInInitialData = Object.values(historyFields).find(function (x) {
                    return x.name === field.name;
                  });
                  return fieldInInitialData ? false : true;
                });
                deletedFields = Object.values(historyFields).filter(function (field) {
                  return !fieldNames.includes(field.name);
                });
                newState = {
                  // After clearing the duplicates, an object will work better. Free lookups anyone?
                  fields: fields.reduce(function (acc, field) {
                    acc[field.name] = field;
                    return acc;
                  }, {}),
                  newFields,
                  deletedFields,
                  allowSave
                };
                this.setState(function () {
                  return newState;
                });
                _context3.next = 20;
                return Object(_lib_wait__WEBPACK_IMPORTED_MODULE_2__["waitForNextTick"])();

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateFormFieldsFromPreview() {
        return _updateFormFieldsFromPreview.apply(this, arguments);
      }

      return updateFormFieldsFromPreview;
    }()
  }, {
    key: "removeProblematicAttributesFromPreview",
    value: function () {
      var _removeProblematicAttributesFromPreview = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var requiredEls, nameEls;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // Names and required attributes cause problems when saving the form, remove
                requiredEls = Array.from(this.previewEl.querySelectorAll('[required]'));
                nameEls = Array.from(this.previewEl.querySelectorAll('[name]'));
                requiredEls.forEach(function (el) {
                  return el.removeAttribute('required');
                });
                nameEls.forEach(function (el) {
                  return el.removeAttribute('name');
                });
                _context4.next = 6;
                return Object(_lib_wait__WEBPACK_IMPORTED_MODULE_2__["waitForNextTick"])();

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function removeProblematicAttributesFromPreview() {
        return _removeProblematicAttributesFromPreview.apply(this, arguments);
      }

      return removeProblematicAttributesFromPreview;
    }()
  }]);

  return WPLF_Editor;
}();



/***/ }),

/***/ "./assets/scripts/classes/wplf-form.ts":
/*!*********************************************!*\
  !*** ./assets/scripts/classes/wplf-form.ts ***!
  \*********************************************/
/*! exports provided: WPLF_Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WPLF_Form", function() { return WPLF_Form; });
/* harmony import */ var _lib_global_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/global-data */ "./assets/scripts/lib/global-data.ts");
/* harmony import */ var _lib_create_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/create-request */ "./assets/scripts/lib/create-request.ts");
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/log */ "./assets/scripts/lib/log.ts");
/* harmony import */ var _wplf_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wplf-tabs */ "./assets/scripts/classes/wplf-tabs.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./assets/scripts/types.ts");
/* harmony import */ var _lib_is_elementish__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/is-elementish */ "./assets/scripts/lib/is-elementish.ts");
/* harmony import */ var _lib_ensure_num__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/ensure-num */ "./assets/scripts/lib/ensure-num.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var resetForm = function resetForm(wplfForm, params) {
  var form = wplfForm.form; // Necessary cast
  // Since all type guarantees have been thrown out of the window, it's necessary to check that the element indeed has this method.

  if (form.reset) {
    form.reset();
  }
};

var defaultBeforeSendCallback = function defaultBeforeSendCallback(wplfForm, params) {
  if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_5__["default"])(wplfForm.form.parentNode)) {
    var parentNode = wplfForm.form.parentNode; // Reset error and success messages, if there were any

    var messages = parentNode.querySelectorAll('.wplf-errorMessage, .wplf-successMessage');
    messages.forEach(function (element) {
      if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_5__["default"])(element.parentNode)) {
        element.parentNode.removeChild(element);
      }
    });
  }
};

var defaultSuccessCallback = function defaultSuccessCallback(wplfForm, params) {
  var data = params.data;
  var message = data.message;
  var div = document.createElement('div');
  div.classList.add('wplf-successMessage');
  div.insertAdjacentHTML('afterbegin', message.replace(/\n/g, '<br />') // Maybe this shouldn't be modified.
  );
  wplfForm.form.insertAdjacentElement('beforebegin', div);
  wplfForm.form.classList.add('submitted');
};

var defaultErrorCallback = function defaultErrorCallback(wplfForm, params) {
  var error = params.error;
  var div = document.createElement('div');
  div.classList.add('wplf-errorMessage');
  div.insertAdjacentHTML('afterbegin', error.message);
  wplfForm.form.insertAdjacentElement('beforebegin', div);
};

var WPLF_Form = /*#__PURE__*/function () {
  // constructor(element: HTMLFormElement) {
  function WPLF_Form(element) {
    _classCallCheck(this, WPLF_Form);

    this.submitState = _types__WEBPACK_IMPORTED_MODULE_4__["SubmitState"].Unsubmitted;
    this.callbacks = {
      beforeSend: {
        default: defaultBeforeSendCallback
      },
      success: {
        default: defaultSuccessCallback,
        clearOnSuccess: resetForm
      },
      error: {
        default: defaultErrorCallback
      }
    };
    this.tabs = [];
    this.key = '';

    if (element instanceof HTMLElement !== true) {
      // if (element instanceof HTMLFormElement !== true) {
      throw new Error('Form element invalid or missing');
    }

    var fallbackInput = element.querySelector('[name="_nojs"]');
    this.form = element;
    this.id = Object(_lib_ensure_num__WEBPACK_IMPORTED_MODULE_6__["default"])(element.dataset.formId || 0);
    this.slug = element.dataset.formSlug || '';
    this.key = '_' + Math.random().toString(36).substr(2, 9);
    this.tabs = Array.from(this.form.querySelectorAll('.wplf-tabs')).map(function (el) {
      return new _wplf_tabs__WEBPACK_IMPORTED_MODULE_3__["default"](el);
    });
    this.submitHandler = this.createSubmitHandler();
    this.attachSubmitHandler(); // Remove input that triggers the fallback so we get a JSON response

    if (fallbackInput && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_5__["default"])(fallbackInput.parentNode)) {
      fallbackInput.parentNode.removeChild(fallbackInput);
    }
  }

  _createClass(WPLF_Form, [{
    key: "addCallback",
    value: function addCallback(name, type, callback) {
      var callbacks = this.callbacks;
      var beforeSend = callbacks.beforeSend,
          success = callbacks.success,
          error = callbacks.error;

      switch (type) {
        case 'beforeSend':
          {
            beforeSend[name] = callback;
            break;
          }

        case 'success':
          {
            success[name] = callback;
            break;
          }

        case 'error':
          {
            error[name] = callback;
            break;
          }

        default:
          {
            throw new Error("Unknown callback type ".concat(type));
          }
      }

      return this;
    }
  }, {
    key: "removeCallback",
    value: function removeCallback(name, type) {
      var callbacks = this.callbacks;
      var beforeSend = callbacks.beforeSend,
          success = callbacks.success,
          error = callbacks.error;

      switch (type) {
        case 'beforeSend':
          {
            delete beforeSend[name];
            break;
          }

        case 'success':
          {
            delete success[name];
            break;
          }

        case 'error':
          {
            delete error[name];
            break;
          }

        default:
          {
            throw new Error("Unknown callback ".concat(name, " ").concat(type));
          }
      }

      return this;
    }
  }, {
    key: "runCallback",
    value: function runCallback(type) {
      var _this = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callbacks = this.callbacks;
      var beforeSend = callbacks.beforeSend,
          success = callbacks.success,
          error = callbacks.error;

      switch (type) {
        case 'beforeSend':
          {
            Object.values(beforeSend).forEach(function (callback) {
              callback(_this, params);
            });
            break;
          }

        case 'success':
          {
            Object.values(success).forEach(function (callback) {
              callback(_this, params);
            });
            break;
          }

        case 'error':
          {
            Object.values(error).forEach(function (callback) {
              callback(_this, params);
            });
            break;
          }

        default:
          {
            throw new Error("Unknown callback ".concat(name, " ").concat(type));
          }
      }
    }
  }, {
    key: "attachSubmitHandler",
    value: function attachSubmitHandler() {
      this.form.addEventListener('submit', this.submitHandler, {
        passive: false
      });
      return this;
    }
    /**
     * Removes submit handler from the form, but keeps it in memory.
     */

  }, {
    key: "removeSubmitHandler",
    value: function removeSubmitHandler() {
      this.form.removeEventListener('submit', this.submitHandler);
      return this;
    }
  }, {
    key: "createSubmitHandler",
    value: function createSubmitHandler(handler) {
      var _this2 = this;

      if (handler) {
        return handler;
      }

      return /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var x, data, ok;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();

                  if (!(_this2.submitState === _types__WEBPACK_IMPORTED_MODULE_4__["SubmitState"].Submitting)) {
                    _context.next = 4;
                    break;
                  }

                  _lib_log__WEBPACK_IMPORTED_MODULE_2__["default"].notice('Preventing double doubmission');
                  return _context.abrupt("return");

                case 4:
                  _context.prev = 4;
                  _context.next = 7;
                  return _this2.send();

                case 7:
                  x = _context.sent;
                  data = x.data, ok = x.ok;

                  if (!('error' in data)) {
                    _context.next = 14;
                    break;
                  }

                  _lib_log__WEBPACK_IMPORTED_MODULE_2__["default"].error('Invalid submission!', x);
                  throw new Error(data.error);

                case 14:
                  if (ok) {
                    _context.next = 18;
                    break;
                  }

                  throw new Error('Request to submit form failed');

                case 18:
                  _this2.submitState = _types__WEBPACK_IMPORTED_MODULE_4__["SubmitState"].Success;

                  _this2.runCallback('success', {
                    data
                  });

                case 20:
                  _context.next = 26;
                  break;

                case 22:
                  _context.prev = 22;
                  _context.t0 = _context["catch"](4);
                  _this2.submitState = _types__WEBPACK_IMPORTED_MODULE_4__["SubmitState"].Error;

                  _this2.runCallback('error', {
                    error: _context.t0
                  });

                case 26:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[4, 22]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
  }, {
    key: "send",
    value: function () {
      var _send = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var form, data, req;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                form = this.form;
                data = new FormData(form); // FormData can't be made from Element

                _lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].lang && data.append('lang', _lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].lang);
                this.submitState = _types__WEBPACK_IMPORTED_MODULE_4__["SubmitState"].Submitting;
                form.classList.add('submitting');
                this.runCallback('beforeSend', {
                  formData: data,
                  form
                });
                req = Object(_lib_create_request__WEBPACK_IMPORTED_MODULE_1__["request"])('/submit', {
                  method: 'POST',
                  body: data
                });
                form.classList.remove('submitting');
                return _context2.abrupt("return", req);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function send() {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }]);

  return WPLF_Form;
}();

/***/ }),

/***/ "./assets/scripts/classes/wplf-settings.ts":
/*!*************************************************!*\
  !*** ./assets/scripts/classes/wplf-settings.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPLF_Settings; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WPLF_Settings = function WPLF_Settings(wplfInstance) {
  _classCallCheck(this, WPLF_Settings);
};



/***/ }),

/***/ "./assets/scripts/classes/wplf-storage.ts":
/*!************************************************!*\
  !*** ./assets/scripts/classes/wplf-storage.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/log */ "./assets/scripts/lib/log.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var WPLF_Storage = /*#__PURE__*/function () {
  function WPLF_Storage() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'wplf';

    _classCallCheck(this, WPLF_Storage);

    this.prefix = prefix;
  }

  _createClass(WPLF_Storage, [{
    key: "get",
    value: function get(key, defaultValue) {
      var data = localStorage.getItem(this.prefix + key);

      if (data !== null) {
        var value = data ? JSON.parse(data) : data;
        return value;
      } else {
        _lib_log__WEBPACK_IMPORTED_MODULE_0__["default"].notice("No value found for ".concat(key, ", falling back to default"), defaultValue);
        return defaultValue;
      }
    }
  }, {
    key: "set",
    value: function set(key, value) {
      try {
        localStorage.setItem(this.prefix + key, JSON.stringify(value));
        return true;
      } catch (e) {
        _lib_log__WEBPACK_IMPORTED_MODULE_0__["default"].error(e, key, value);
        return false;
      }
    }
  }]);

  return WPLF_Storage;
}();

/* harmony default export */ __webpack_exports__["default"] = (new WPLF_Storage());

/***/ }),

/***/ "./assets/scripts/classes/wplf-tabs.ts":
/*!*********************************************!*\
  !*** ./assets/scripts/classes/wplf-tabs.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPLF_Tabs; });
/* harmony import */ var _wplf_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wplf-storage */ "./assets/scripts/classes/wplf-storage.ts");
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/log */ "./assets/scripts/lib/log.ts");
/* harmony import */ var _lib_is_elementish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/is-elementish */ "./assets/scripts/lib/is-elementish.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var WPLF_Tabs = /*#__PURE__*/function () {
  function WPLF_Tabs(element) {
    var _this = this;

    _classCallCheck(this, WPLF_Tabs);

    this.remember = false;
    this.name = '';

    this.handleClick = function (e) {
      var target = e.target;

      if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_2__["default"])(target)) {
        var tabName = target.getAttribute('data-target');

        if (tabName) {
          _this.switchTab(tabName);
        } else {
          _lib_log__WEBPACK_IMPORTED_MODULE_1__["default"].notice('Unable to switch tab as data-target was empty');
        }
      }

      e.preventDefault();
    };

    if (element instanceof Element !== true) {
      throw new Error('Tab element invalid or missing');
    }

    this.root = element;
    this.name = this.root.getAttribute('data-name') || '';
    this.remember = this.root.getAttribute('data-remember') !== null;
    this.activeTab = this.root.getAttribute('data-default') || '';

    if (!this.root) {
      throw new Error('does this work for ts (it does not)');
    }

    if (!this.name || !this.activeTab) {
      throw new Error('Required attributes are missing');
    }

    if (this.remember) {
      // Get saved value or keep using the default
      this.activeTab = _wplf_storage__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.name, this.activeTab);
    }

    this.refresh();
  }
  /**
   * Attach event listeners and ensure the current tab is visible.
   * Call after adding a tab dynamically.
   */


  _createClass(WPLF_Tabs, [{
    key: "refresh",
    value: function refresh() {
      var _this2 = this;

      this.getHandles().forEach(function (handle) {
        // It's not possible to add the same event listener twice. If the handle already has the listener,
        // this is a no-op.
        handle.addEventListener('click', _this2.handleClick, {
          passive: false
        });
      }); // If activeTab is null, things will break. Fall back to first tab
      // activeTab cant be null anymore

      /*     if (this.activeTab === null) {
        const tabs = this.getTabs()
             if (tabs.length) {
          const first = tabs[0]
          const .getAttribute('data-target')
             }
             log.notice('activeTab was null, setting first tab as active', first)
        this.activeTab = first
      } */

      this.switchTab(this.activeTab);
    }
    /**
     * Values are not cached as they are practically free to recompute, but
     * might become a memory leak if stored.
     */

  }, {
    key: "getTabs",
    value: function getTabs() {
      return Array.from(this.root.querySelectorAll(".wplf-tabs__tab[data-name=\"".concat(this.name, "\"]")));
    }
    /**
     * See getTabs()
     */

  }, {
    key: "getHandles",
    value: function getHandles() {
      return Array.from(this.root.querySelectorAll(".wplf-tabs__tabSwitcher[data-name=\"".concat(this.name, "\"]")));
    }
  }, {
    key: "switchTab",
    value: function switchTab(name) {
      var tabs = this.getTabs();
      var allHandles = this.getHandles();
      var open = tabs.filter(function (tab) {
        return tab.getAttribute('data-tab') === name;
      });
      var close = tabs.filter(function (tab) {
        return tab.getAttribute('data-tab') !== name;
      });
      open.forEach(function (tab) {
        var tabName = tab.getAttribute('data-tab');
        var handles = allHandles.filter(function (handle) {
          return handle.getAttribute('data-target') === tabName;
        });
        tab.classList.add('active');
        handles.forEach(function (handle) {
          handle.classList.add('active');
        });
      });
      close.forEach(function (tab) {
        var tabName = tab.getAttribute('data-tab');
        var handles = allHandles.filter(function (handle) {
          return handle.getAttribute('data-target') === tabName;
        });
        tab.classList.remove('active');
        handles.forEach(function (handle) {
          handle.classList.remove('active');
        });
      });

      if (this.remember) {
        _wplf_storage__WEBPACK_IMPORTED_MODULE_0__["default"].set(this.name, name);
      }
    }
  }]);

  return WPLF_Tabs;
}();



/***/ }),

/***/ "./assets/scripts/classes/wplf.ts":
/*!****************************************!*\
  !*** ./assets/scripts/classes/wplf.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WPLF; });
/* harmony import */ var _wplf_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wplf-form */ "./assets/scripts/classes/wplf-form.ts");
/* harmony import */ var _lib_global_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/global-data */ "./assets/scripts/lib/global-data.ts");
/* harmony import */ var _wplf_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wplf-tabs */ "./assets/scripts/classes/wplf-tabs.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var WPLF = /*#__PURE__*/function () {
  function WPLF() {
    _classCallCheck(this, WPLF);

    this.forms = {}; // Expose WPLF_Form and WPLF_Tabs as properties for this class.
    // Just to allow users who don't install the npm package to use these too:

    this.WPLF_Form = _wplf_form__WEBPACK_IMPORTED_MODULE_0__["WPLF_Form"];
    this.WPLF_Tabs = _wplf_tabs__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.initialize();
  }

  _createClass(WPLF, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      if (_lib_global_data__WEBPACK_IMPORTED_MODULE_1__["default"].settings.autoinit) {
        var forms = Array.from(document.querySelectorAll('form.wplf')).map(function (form) {
          _this.attach(form);
        });
      }
    }
  }, {
    key: "findFormsById",
    value: function findFormsById(id) {
      var _this2 = this;

      return Object.keys(this.forms).reduce(function (acc, key) {
        var wplfForm = _this2.forms[key];

        if (!wplfForm) {
          return acc;
        }

        if (id === wplfForm.id) {
          acc.push(wplfForm);
        } // const formEl = wplfForm.form
        // const formElId = formEl.getAttribute('data-form-id')
        // if (formElId && ensureNum(formElId) === ensureNum(id)) {
        //   acc.push(wplfForm)
        // }


        return acc;
      }, []);
    }
  }, {
    key: "findFormsBySlug",
    value: function findFormsBySlug(slug) {
      var _this3 = this;

      return Object.keys(this.forms).reduce(function (acc, key) {
        var wplfForm = _this3.forms[key];

        if (!wplfForm) {
          return acc;
        }

        if (!wplfForm) {
          return acc;
        }

        if (slug === wplfForm.slug) {
          acc.push(wplfForm);
        } // const formEl = wplfForm.form
        // const formElSlug = formEl.getAttribute('data-form-slug')
        // if (formElSlug && formElSlug === slug) {
        //   acc.push(wplfForm)
        // }


        return acc;
      }, []);
    }
  }, {
    key: "attach",
    value: function attach(x) {
      if (x instanceof _wplf_form__WEBPACK_IMPORTED_MODULE_0__["WPLF_Form"]) {
        var _wplfForm = x;
        this.forms[_wplfForm.key] = _wplfForm;
        return _wplfForm;
      }

      var element = x;

      if (element instanceof Element !== true) {
        throw new Error('Unable to attach WPLF to element');
      }

      var wplfForm = new _wplf_form__WEBPACK_IMPORTED_MODULE_0__["WPLF_Form"](element);
      this.forms[wplfForm.key] = wplfForm;
      wplfForm.form.removeAttribute('tabindex');
      wplfForm.form.removeAttribute('style');
      return wplfForm;
    }
  }, {
    key: "detach",
    value: function detach(wplfForm) {
      this.forms[wplfForm.key].removeSubmitHandler();
      delete this.forms[wplfForm.key];
      return true;
    }
  }]);

  return WPLF;
}();



/***/ }),

/***/ "./assets/scripts/lib/confirm-delete.ts":
/*!**********************************************!*\
  !*** ./assets/scripts/lib/confirm-delete.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var confirmDelete = function confirmDelete(submission) {
  if (confirm('Nuke submission?')) {
    alert('would nuke submission but it is not implemented yet');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (confirmDelete);

/***/ }),

/***/ "./assets/scripts/lib/create-request.ts":
/*!**********************************************!*\
  !*** ./assets/scripts/lib/create-request.ts ***!
  \**********************************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var abort_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! abort-controller */ "./node_modules/abort-controller/browser.js");
/* harmony import */ var abort_controller__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(abort_controller__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-data */ "./assets/scripts/lib/global-data.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function request(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var controller;

  var abort = function abort() {
    if (controller && controller.abort) {
      controller.abort();
    }
  };

  var promise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res, headers, status, statusText, url, ok, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            controller = new abort_controller__WEBPACK_IMPORTED_MODULE_0___default.a();
            _context.next = 4;
            return fetch(_global_data__WEBPACK_IMPORTED_MODULE_1__["default"].backendUrl + target, _objectSpread({
              method: 'GET',
              signal: controller.signal,
              credentials: _global_data__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCredentials || 'same-origin',
              headers: _global_data__WEBPACK_IMPORTED_MODULE_1__["default"].requestHeaders || {}
            }, options));

          case 4:
            res = _context.sent;
            headers = res.headers, status = res.status, statusText = res.statusText, url = res.url, ok = res.ok;
            _context.next = 8;
            return res.json();

          case 8:
            data = _context.sent;
            controller = null;
            return _context.abrupt("return", {
              headers,
              status,
              statusText,
              url,
              ok,
              data
            });

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            controller = null; // If you want to do something when the request is aborted, use
            // signal.addEventListener('abort', ...)

            if (!(_context.t0.name !== 'AbortError')) {
              _context.next = 18;
              break;
            }

            throw _context.t0;

          case 18:
            return _context.abrupt("return", _context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }))();

  return Object.assign(promise, {
    abort
  });
}

/***/ }),

/***/ "./assets/scripts/lib/ensure-num.ts":
/*!******************************************!*\
  !*** ./assets/scripts/lib/ensure-num.ts ***!
  \******************************************/
/*! exports provided: default, isNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ensureNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNum", function() { return isNum; });
function ensureNum(x) {
  var float = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof x === 'number') {
    return x;
  } else {
    return float ? parseFloat(x) : parseInt(x, 10);
  }
}
function isNum(x) {
  if (x && x.length > 0 && x.match(/^[0-9]*$/)) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./assets/scripts/lib/get-attribute.ts":
/*!*********************************************!*\
  !*** ./assets/scripts/lib/get-attribute.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAttribute; });
function getAttribute(el, attribute) {
  var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var x = el.getAttribute(attribute);

  if (x === null) {
    return defaultVal;
  }

  return x;
}

/***/ }),

/***/ "./assets/scripts/lib/global-data.ts":
/*!*******************************************!*\
  !*** ./assets/scripts/lib/global-data.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((function (window) {
  return Object.assign({
    backendUrl: null,
    fetchCredentials: 'same-origin',
    requestHeaders: {
      'X-WP-Nonce': null
    },
    assetsDir: null,
    settings: {
      autoinit: true,
      parseLibreformShortcodeInRestApi: true,
      hasUnfilteredHtml: true,
      debugLevel: 'all'
    },
    post: null,
    i18n: {
      problems: 'Problems: ',
      duplicateFieldName: 'Duplicate field name: ',
      illegalName: "You can't use {name} as a name, as it conflicts with a core field name.",
      fieldAlreadyExistsInDb: 'Field already exists in the database with the type {type}, use a different name or remove the field first.',
      groupedNamesNotSupportedYet: 'Field names like these are not supported yet. Try using camelCasing or under_scores for grouped names instead.'
    }
  }, window.wplfData // wp_localize_script
  );
})(window));

/***/ }),

/***/ "./assets/scripts/lib/is-elementish.ts":
/*!*********************************************!*\
  !*** ./assets/scripts/lib/is-elementish.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isElementish(e) {
  return e ? 'getAttribute' in e && 'tagName' in e : false;
}

/* harmony default export */ __webpack_exports__["default"] = (isElementish);

/***/ }),

/***/ "./assets/scripts/lib/log.ts":
/*!***********************************!*\
  !*** ./assets/scripts/lib/log.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-data */ "./assets/scripts/lib/global-data.ts");

var debugLevel = _global_data__WEBPACK_IMPORTED_MODULE_0__["default"].settings.debugLevel;
var console = window.console || {
  log() {},

  error() {}

}; // noop fallback

var notice = function notice(message) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return debugLevel === 'all' && console.log("WPLF: ".concat(message), params);
};

var error = function error(message) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    params[_key2 - 1] = arguments[_key2];
  }

  return debugLevel !== 'none' && console.error("WPLF error: ".concat(message), params);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  notice,
  error
});

/***/ }),

/***/ "./assets/scripts/lib/wait.ts":
/*!************************************!*\
  !*** ./assets/scripts/lib/wait.ts ***!
  \************************************/
/*! exports provided: waitForNextTick, wait */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForNextTick", function() { return waitForNextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
/**
 * Trying to read the DOM immediately after setting it does not work. Trying on next tick
 * does.
 */
var waitForNextTick = function waitForNextTick() {
  return new Promise(function (resolve) {
    return setTimeout(resolve);
  });
};
var wait = function wait() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

/***/ }),

/***/ "./assets/scripts/react/Submission.tsx":
/*!*********************************************!*\
  !*** ./assets/scripts/react/Submission.tsx ***!
  \*********************************************/
/*! exports provided: default, DetailedSubmission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubmissionRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedSubmission", function() { return DetailedSubmission; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_ensure_num__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/ensure-num */ "./assets/scripts/lib/ensure-num.ts");
/* harmony import */ var _lib_global_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/global-data */ "./assets/scripts/lib/global-data.ts");
/* harmony import */ var _lib_confirm_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/confirm-delete */ "./assets/scripts/lib/confirm-delete.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function UploadLink(_ref) {
  var href = _ref.href,
      text = _ref.text;

  if (Object(_lib_ensure_num__WEBPACK_IMPORTED_MODULE_1__["isNum"])(href)) {
    // Attachments are stored as numbers. Their URLs are enumerable.
    var id = Object(_lib_ensure_num__WEBPACK_IMPORTED_MODULE_1__["default"])(href);
    href = _lib_global_data__WEBPACK_IMPORTED_MODULE_2__["default"].adminUrl + "upload.php?item=".concat(id);
    text = _lib_global_data__WEBPACK_IMPORTED_MODULE_2__["default"].i18n.attachment + " ".concat(id);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, text));
}

function SubmissionRow(_ref2) {
  var submission = _ref2.submission,
      examine = _ref2.examine,
      checked = _ref2.checked,
      handleChange = _ref2.handleChange,
      handleClick = _ref2.handleClick;
  var ID = submission.ID,
      uuid = submission.uuid,
      entries = submission.entries,
      formFields = submission.formFields,
      title = submission.title,
      createdAt = submission.createdAt;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wplf-submissionList__submission"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "wplf-submissionList__submission__select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    "data-key": submission.uuid,
    type: "checkbox",
    checked: checked,
    onChange: handleChange,
    onClick: handleClick
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: (window.location.search ? "".concat(window.location.search, "&") : '?') + "&submissionUuid=".concat(uuid),
    onClick: function onClick(e) {
      e.preventDefault();
      examine(submission);
    }
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time", {
    dateTime: createdAt
  }, new Date(createdAt).toLocaleString())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button button-small",
    type: "button",
    onClick: function onClick() {
      return Object(_lib_confirm_delete__WEBPACK_IMPORTED_MODULE_3__["default"])(submission);
    }
  }, _lib_global_data__WEBPACK_IMPORTED_MODULE_2__["default"].i18n.delete)));
}
function DetailedSubmission(_ref3) {
  var submission = _ref3.submission;

  if (!submission) {
    return null;
  }

  var ID = submission.ID,
      uuid = submission.uuid,
      createdAt = submission.createdAt,
      modifiedAt = submission.modifiedAt,
      entries = submission.entries,
      formFields = submission.formFields,
      title = submission.title,
      referrer = submission.referrer,
      historyId = submission.historyId,
      meta = submission.meta;

  var otherColumns = _objectSpread({
    ID,
    UUID: uuid,
    historyId,
    createdAt,
    modifiedAt
  }, meta);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "wplf-formSubmission",
    "data-uuid": uuid
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Entries"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.entries(entries).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        name = _ref5[0],
        value = _ref5[1];

    var formField = formFields[name];

    if (!formField) {
      return;
    }

    var type = formField.type,
        required = formField.required,
        multiple = formField.multiple;
    console.log(formField, value);

    switch (type) {
      case 'file':
        {
          if (multiple) {
            var files = value.split(', ');
            value = files.map(function (file) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UploadLink, {
                key: file,
                href: file,
                text: file
              });
            });
            value = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, value);
          } else {
            var file = value;
            value = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UploadLink, {
              key: file,
              text: file,
              href: file
            });
          }

          break;
        }

      default:
        {
          if (multiple) {// ???
          }

          if (!value || !value.length) {
            value = _lib_global_data__WEBPACK_IMPORTED_MODULE_2__["default"].i18n.emptyField;
          }

          break;
        }
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: name
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, value));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Referrer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.entries(referrer).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        k = _ref7[0],
        v = _ref7[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: k
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, k), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, v));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Meta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.entries(otherColumns).map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
        k = _ref9[0],
        v = _ref9[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: k
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, k), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, v));
  }))));
}

/***/ }),

/***/ "./assets/scripts/react/SubmissionList.tsx":
/*!*************************************************!*\
  !*** ./assets/scripts/react/SubmissionList.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubmissionList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-window-infinite-loader */ "./node_modules/react-window-infinite-loader/dist/index.esm.js");
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/log */ "./assets/scripts/lib/log.ts");
/* harmony import */ var _lib_global_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/global-data */ "./assets/scripts/lib/global-data.ts");
/* harmony import */ var _Submission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Submission */ "./assets/scripts/react/Submission.tsx");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_confirm_delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/confirm-delete */ "./assets/scripts/lib/confirm-delete.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









react_modal__WEBPACK_IMPORTED_MODULE_6___default.a.setAppElement('.wplf-submissionList');
function SubmissionList(_ref) {
  var formId = _ref.formId;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(function () {
    return new Set();
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedIds = _React$useState2[0],
      setSelectedIds = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    submissions: [],
    moreAvailable: true,
    isLoading: false,
    page: 0
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      _React$useState4$ = _React$useState4[0],
      submissions = _React$useState4$.submissions,
      moreAvailable = _React$useState4$.moreAvailable,
      isLoading = _React$useState4$.isLoading,
      page = _React$useState4$.page,
      setState = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    open: false,
    submission: null
  }),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      _React$useState6$ = _React$useState6[0],
      open = _React$useState6$.open,
      modalSubmission = _React$useState6$.submission,
      setModal = _React$useState6[1]; // Refs are a handy way of storing data that persists between re-renders:


  var lastClickRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(undefined);
  var lastShiftRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(false);
  /**
   * Invert selection on click, while allowing shift click to select multiple submissions at once
   */

  var handleChange = function handleChange(e) {
    var id = e.target.dataset.key; // we've made sure that each element has this

    var newSelectedIds = new Set(selectedIds);
    var newState = e.target.checked;
    var idsToChange = [];
    var lastId = lastClickRef.current;

    if (!lastShiftRef.current) {
      idsToChange.push(id);
    } else if (lastId && lastId !== id) {
      var flag = false;

      var _iterator = _createForOfIteratorHelper(submissions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var newFlag = flag;

          if (item.uuid === id || item.uuid === lastId) {
            newFlag = !flag;
          }

          if (flag) {
            idsToChange.push(item.uuid);
          }

          flag = newFlag;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    idsToChange.forEach(function (id) {
      if (!newState) {
        newSelectedIds.delete(id);
      } else {
        newSelectedIds.add(id);
      }
    });
    lastClickRef.current = id;
    setSelectedIds(newSelectedIds);
  };
  /**
   * Convert e.shiftKey to a boolean and save it into the ref
   */


  var handleClick = function handleClick(e) {
    lastShiftRef.current = !!e.shiftKey;
  };

  var loadMore = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!isLoading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setState(function (s) {
                return _objectSpread(_objectSpread({}, s), {}, {
                  isLoading: true
                });
              });
              response = null; // const response = await request(
              //   `/submissions?form=${formId}&page=${page}`,
              //   {},
              //   ApiResponseKind.GetSubmissions
              // )
              // function isGetSubmissionsApiResponse(
              //   x: ApiResponse
              // ): x is GetSubmissionsApiResponse {
              //   return x.kind === ApiResponseKind.GetSubmissions
              // }

              if (false) {} else {
                // If this runs, there's a mistake in the code. There shouldn't be, since it's TS.
                _lib_log__WEBPACK_IMPORTED_MODULE_3__["default"].error('Something is wrong with loadMore', response);
                setState(function (s) {
                  return _objectSpread(_objectSpread({}, s), {}, {
                    isLoading: false
                  });
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadMore() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getSubmissionSize = function getSubmissionSize(itemIndex) {
    // const submission = submissions[itemIndex];
    return 50;
  };

  var openModal = function openModal(submission) {
    setModal({
      open: true,
      submission
    });
  };

  var closeModal = function closeModal() {
    setModal(function (d) {
      return {
        open: false,
        submission: null
      };
    });
  }; // If there are more submissions to be loaded then add an extra row to hold a loading indicator.


  var itemCount = moreAvailable ? submissions.length + 1 : submissions.length;
  var loadMoreItems = isLoading ? /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })) : loadMore; // Every row is loaded except for our loading indicator row.

  var isItemLoaded = function isItemLoaded(index) {
    return !moreAvailable || index < submissions.length;
  };

  var Item = function Item(_ref4) {
    var index = _ref4.index,
        style = _ref4.style;
    var content;

    if (!isItemLoaded(index)) {
      content = _lib_global_data__WEBPACK_IMPORTED_MODULE_4__["default"].i18n.loading;
    } else {
      var submission = submissions[index];

      if (!submission) {
        _lib_log__WEBPACK_IMPORTED_MODULE_3__["default"].error('No submission found for index', index, submissions);
        return null;
      }

      content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Submission__WEBPACK_IMPORTED_MODULE_5__["default"], {
        submission: submission,
        examine: openModal,
        checked: selectedIds.has(submission.uuid),
        handleChange: handleChange,
        handleClick: handleClick
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: style
    }, content);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isItemLoaded: isItemLoaded,
    itemCount: itemCount,
    loadMoreItems: loadMoreItems
  }, function (_ref5) {
    var onItemsRendered = _ref5.onItemsRendered,
        ref = _ref5.ref;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_window__WEBPACK_IMPORTED_MODULE_1__["VariableSizeList"], {
      className: "List",
      height: itemCount > 0 ? 400 : 0,
      itemCount: itemCount,
      itemSize: getSubmissionSize,
      onItemsRendered: onItemsRendered,
      ref: ref,
      width: '100%'
    }, Item);
  }), !submissions.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_global_data__WEBPACK_IMPORTED_MODULE_4__["default"].i18n.noSubmissionsYet) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_6___default.a, {
    isOpen: open,
    // onAfterOpen={afterOpenModal}
    onRequestClose: closeModal,
    contentLabel: _lib_global_data__WEBPACK_IMPORTED_MODULE_4__["default"].i18n.formSubmission,
    className: "wplf-submissionModal",
    overlayClassName: "wplf-submissionModal__overlay"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wplf-submissionModal__wrapper"
  }, modalSubmission ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Submission__WEBPACK_IMPORTED_MODULE_5__["DetailedSubmission"], {
    submission: modalSubmission
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wplf-submissionModal__buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button wplf-delete",
    type: "button",
    onClick: function onClick() {
      return Object(_lib_confirm_delete__WEBPACK_IMPORTED_MODULE_7__["default"])(modalSubmission);
    }
  }, _lib_global_data__WEBPACK_IMPORTED_MODULE_4__["default"].i18n.delete), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: closeModal,
    className: "button wplf-close"
  }, _lib_global_data__WEBPACK_IMPORTED_MODULE_4__["default"].i18n.close))) : null)));
}

/***/ }),

/***/ "./assets/scripts/types.ts":
/*!*********************************!*\
  !*** ./assets/scripts/types.ts ***!
  \*********************************/
/*! exports provided: SubmitState, ResponseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitState", function() { return SubmitState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SubmitState;

(function (SubmitState) {
  SubmitState[SubmitState["Unsubmitted"] = 0] = "Unsubmitted";
  SubmitState[SubmitState["Submitting"] = 1] = "Submitting";
  SubmitState[SubmitState["Success"] = 2] = "Success";
  SubmitState[SubmitState["Error"] = 3] = "Error";
})(SubmitState || (SubmitState = {}));

var ResponseType;

(function (ResponseType) {
  ResponseType["GetForm"] = "getForm";
  ResponseType["GetSubmissions"] = "getSubmissions";
  ResponseType["RenderForm"] = "renderForm";
  ResponseType["SubmitForm"] = "submitForm";
  ResponseType["ApiError"] = "apiError";
})(ResponseType || (ResponseType = {}));

window['React'] = react__WEBPACK_IMPORTED_MODULE_0___default.a;

/***/ }),

/***/ "./assets/scripts/wplf-admin.ts":
/*!**************************************!*\
  !*** ./assets/scripts/wplf-admin.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_wplf_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/wplf-admin */ "./assets/scripts/classes/wplf-admin.ts");
/* harmony import */ var _classes_wplf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/wplf */ "./assets/scripts/classes/wplf.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./assets/scripts/types.ts");
/* harmony import */ var _styles_wplf_admin_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/wplf-admin.scss */ "./assets/styles/wplf-admin.scss");
/* harmony import */ var _styles_wplf_admin_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_wplf_admin_scss__WEBPACK_IMPORTED_MODULE_3__);




/**
 * This file is built into an UMD bundle. The default export will
 * be exposed under window.WPLF, if the resulting file is loaded via
 * <script> tag.
 *
 * The resulting file is designed to be used inside /wp-admin only, although it is available as a module, do not try to import it outside.
 *
 * As this module assigns itself to window.WPLF, DO NOT load wplf-frontend.js at the same time to avoid having a very bad day.
 */

/* harmony default export */ __webpack_exports__["default"] = (new _classes_wplf_admin__WEBPACK_IMPORTED_MODULE_0__["default"](new _classes_wplf__WEBPACK_IMPORTED_MODULE_1__["default"]()));

/***/ }),

/***/ "./assets/styles/wplf-admin.scss":
/*!***************************************!*\
  !*** ./assets/styles/wplf-admin.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/abort-controller/browser.js":
/*!**************************************************!*\
  !*** ./node_modules/abort-controller/browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*globals self, window */


/*eslint-disable @mysticatea/prettier */
const { AbortController, AbortSignal } =
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    /* otherwise */ undefined
/*eslint-enable @mysticatea/prettier */

module.exports = AbortController
module.exports.AbortSignal = AbortSignal
module.exports.default = AbortController


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-modal/lib/components/Modal.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/components/Modal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "./node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

exports.default = Modal;

/***/ }),

/***/ "./node_modules/react-modal/lib/components/ModalPortal.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal/lib/components/ModalPortal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "./node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "./node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "./node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _portalOpenInstances = __webpack_require__(/*! ../helpers/portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

__webpack_require__(/*! ../helpers/bodyTrap */ "./node_modules/react-modal/lib/helpers/bodyTrap.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen({
              overlayEl: _this.overlay,
              contentEl: _this.content
            });
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        "div",
        {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        },
        _react2.default.createElement(
          "div",
          _extends({
            id: id,
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
            "data-testid": this.props.testId
          }),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/bodyTrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/bodyTrap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _portalOpenInstances = __webpack_require__(/*! ./portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

function focusContent() {
  if (instances.length === 0) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn("React-Modal: Open instances > 0 expected");
    }
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before || !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/classList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/classList.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n";
    }

    classes = document.body.className;

    // eslint-disable-next-line max-len
    buffer += "\n\ndoc.body (" + classes + "):\n";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
    }

    buffer += "\n";

    // eslint-disable-next-line no-console
    console.log(buffer);
  }
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/focusManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/focusManager.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/portalOpenInstances.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Cannot register modal instance that's already open");
      }
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
      }
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

exports.default = portalOpenInstances;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/scopeTab.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/tabbable.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/tabbable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
  // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(/*! ./components/Modal */ "./node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-window-infinite-loader/dist/index.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-window-infinite-loader/dist/index.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function isRangeVisible(_ref) {
  var lastRenderedStartIndex = _ref.lastRenderedStartIndex,
      lastRenderedStopIndex = _ref.lastRenderedStopIndex,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}

function scanForUnloadedRanges(_ref) {
  var isItemLoaded = _ref.isItemLoaded,
      itemCount = _ref.itemCount,
      minimumBatchSize = _ref.minimumBatchSize,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  var unloadedRanges = [];

  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var _index = startIndex; _index <= stopIndex; _index++) {
    var loaded = isItemLoaded(_index);

    if (!loaded) {
      rangeStopIndex = _index;
      if (rangeStartIndex === null) {
        rangeStartIndex = _index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push([rangeStartIndex, rangeStopIndex]);

      rangeStartIndex = rangeStopIndex = null;
    }
  }

  // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.
  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), itemCount - 1);

    for (var _index2 = rangeStopIndex + 1; _index2 <= potentialStopIndex; _index2++) {
      if (!isItemLoaded(_index2)) {
        rangeStopIndex = _index2;
      } else {
        break;
      }
    }

    unloadedRanges.push([rangeStartIndex, rangeStopIndex]);
  }

  // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.
  if (unloadedRanges.length) {
    var firstRange = unloadedRanges[0];

    while (firstRange[1] - firstRange[0] + 1 < minimumBatchSize && firstRange[0] > 0) {
      var _index3 = firstRange[0] - 1;

      if (!isItemLoaded(_index3)) {
        firstRange[0] = _index3;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var InfiniteLoader = function (_PureComponent) {
  inherits(InfiniteLoader, _PureComponent);

  function InfiniteLoader() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, InfiniteLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = InfiniteLoader.__proto__ || Object.getPrototypeOf(InfiniteLoader)).call.apply(_ref, [this].concat(args))), _this), _this._lastRenderedStartIndex = -1, _this._lastRenderedStopIndex = -1, _this._memoizedUnloadedRanges = [], _this._onItemsRendered = function (_ref2) {
      var visibleStartIndex = _ref2.visibleStartIndex,
          visibleStopIndex = _ref2.visibleStopIndex;

      if (true) {
        if (!isInteger(visibleStartIndex) || !isInteger(visibleStopIndex)) {
          console.warn('Invalid onItemsRendered signature; please refer to InfiniteLoader documentation.');
        }

        if (typeof _this.props.loadMoreRows === 'function') {
          console.warn('InfiniteLoader "loadMoreRows" prop has been renamed to "loadMoreItems".');
        }
      }

      _this._lastRenderedStartIndex = visibleStartIndex;
      _this._lastRenderedStopIndex = visibleStopIndex;

      _this._ensureRowsLoaded(visibleStartIndex, visibleStopIndex);
    }, _this._setRef = function (listRef) {
      _this._listRef = listRef;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(InfiniteLoader, [{
    key: 'resetloadMoreItemsCache',
    value: function resetloadMoreItemsCache() {
      var autoReload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._memoizedUnloadedRanges = [];

      if (autoReload) {
        this._ensureRowsLoaded(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (true) {
        if (this._listRef == null) {
          console.warn('Invalid list ref; please refer to InfiniteLoader documentation.');
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children({
        onItemsRendered: this._onItemsRendered,
        ref: this._setRef
      });
    }
  }, {
    key: '_ensureRowsLoaded',
    value: function _ensureRowsLoaded(startIndex, stopIndex) {
      var _props = this.props,
          isItemLoaded = _props.isItemLoaded,
          itemCount = _props.itemCount,
          _props$minimumBatchSi = _props.minimumBatchSize,
          minimumBatchSize = _props$minimumBatchSi === undefined ? 10 : _props$minimumBatchSi,
          _props$threshold = _props.threshold,
          threshold = _props$threshold === undefined ? 15 : _props$threshold;


      var unloadedRanges = scanForUnloadedRanges({
        isItemLoaded: isItemLoaded,
        itemCount: itemCount,
        minimumBatchSize: minimumBatchSize,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(itemCount - 1, stopIndex + threshold)
      });

      // Avoid calling load-rows unless range has changed.
      // This shouldn't be strictly necsesary, but is maybe nice to do.
      if (this._memoizedUnloadedRanges.length !== unloadedRanges.length || this._memoizedUnloadedRanges.some(function (_ref3, index) {
        var _ref4 = slicedToArray(_ref3, 2),
            startIndex = _ref4[0],
            stopIndex = _ref4[1];

        return unloadedRanges[index][0] !== startIndex || unloadedRanges[index][1] !== stopIndex;
      })) {
        this._memoizedUnloadedRanges = unloadedRanges;
        this._loadUnloadedRanges(unloadedRanges);
      }
    }
  }, {
    key: '_loadUnloadedRanges',
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      // loadMoreRows was renamed to loadMoreItems in v1.0.3; will be removed in v2.0
      var loadMoreItems = this.props.loadMoreItems || this.props.loadMoreRows;

      unloadedRanges.forEach(function (_ref5) {
        var _ref6 = slicedToArray(_ref5, 2),
            startIndex = _ref6[0],
            stopIndex = _ref6[1];

        var promise = loadMoreItems(startIndex, stopIndex);
        if (promise != null) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: startIndex,
              stopIndex: stopIndex
            })) {
              // Handle an unmount while promises are still in flight.
              if (_this2._listRef == null) {
                return;
              }

              // Resize cached row sizes for VariableSizeList,
              // otherwise just re-render the list.
              if (typeof _this2._listRef.resetAfterIndex === 'function') {
                _this2._listRef.resetAfterIndex(startIndex, true);
              } else {
                // HACK reset temporarily cached item styles to force PureComponent to re-render.
                // This is pretty gross, but I'm okay with it for now.
                // Don't judge me.
                if (typeof _this2._listRef._getItemStyleCache === 'function') {
                  _this2._listRef._getItemStyleCache(-1);
                }
                _this2._listRef.forceUpdate();
              }
            }
          });
        }
      });
    }
  }]);
  return InfiniteLoader;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (InfiniteLoader);


/***/ }),

/***/ "./node_modules/react-window/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-window/dist/index.esm.js ***!
  \*****************************************************/
/*! exports provided: VariableSizeGrid, VariableSizeList, FixedSizeGrid, FixedSizeList, areEqual, shouldComponentUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableSizeGrid", function() { return VariableSizeGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableSizeList", function() { return VariableSizeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeGrid", function() { return FixedSizeGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeList", function() { return FixedSizeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areEqual", function() { return areEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldComponentUpdate", function() { return shouldComponentUpdate; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");







// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var size = -1; // This utility copied from "dom-helpers" package.

function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (size === -1 || recalculate) {
    var div = document.createElement('div');
    var style = div.style;
    style.width = '50px';
    style.height = '50px';
    style.overflow = 'scroll';
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }

  return size;
}
var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

var IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

var defaultItemKey = function defaultItemKey(_ref) {
  var columnIndex = _ref.columnIndex,
      data = _ref.data,
      rowIndex = _ref.rowIndex;
  return rowIndex + ":" + columnIndex;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;

if (true) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsOverscanCount =
    /*#__PURE__*/
    new WeakSet();
    devWarningsOverscanRowsColumnsCount =
    /*#__PURE__*/
    new WeakSet();
    devWarningsTagName =
    /*#__PURE__*/
    new WeakSet();
  }
}

function createGridComponent(_ref2) {
  var _class, _temp;

  var getColumnOffset = _ref2.getColumnOffset,
      getColumnStartIndexForOffset = _ref2.getColumnStartIndexForOffset,
      getColumnStopIndexForStartIndex = _ref2.getColumnStopIndexForStartIndex,
      getColumnWidth = _ref2.getColumnWidth,
      getEstimatedTotalHeight = _ref2.getEstimatedTotalHeight,
      getEstimatedTotalWidth = _ref2.getEstimatedTotalWidth,
      getOffsetForColumnAndAlignment = _ref2.getOffsetForColumnAndAlignment,
      getOffsetForRowAndAlignment = _ref2.getOffsetForRowAndAlignment,
      getRowHeight = _ref2.getRowHeight,
      getRowOffset = _ref2.getRowOffset,
      getRowStartIndexForOffset = _ref2.getRowStartIndexForOffset,
      getRowStopIndexForStartIndex = _ref2.getRowStopIndexForStartIndex,
      initInstanceProps = _ref2.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref2.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref2.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Grid, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function Grid(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)));
      _this._resetIsScrollingTimeoutId = null;
      _this._outerRef = void 0;
      _this.state = {
        instance: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        isScrolling: false,
        horizontalScrollDirection: 'forward',
        scrollLeft: typeof _this.props.initialScrollLeft === 'number' ? _this.props.initialScrollLeft : 0,
        scrollTop: typeof _this.props.initialScrollTop === 'number' ? _this.props.initialScrollTop : 0,
        scrollUpdateWasRequested: false,
        verticalScrollDirection: 'forward'
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (overscanColumnStartIndex, overscanColumnStopIndex, overscanRowStartIndex, overscanRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex) {
        return _this.props.onItemsRendered({
          overscanColumnStartIndex: overscanColumnStartIndex,
          overscanColumnStopIndex: overscanColumnStopIndex,
          overscanRowStartIndex: overscanRowStartIndex,
          overscanRowStopIndex: overscanRowStopIndex,
          visibleColumnStartIndex: visibleColumnStartIndex,
          visibleColumnStopIndex: visibleColumnStopIndex,
          visibleRowStartIndex: visibleRowStartIndex,
          visibleRowStopIndex: visibleRowStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (scrollLeft, scrollTop, horizontalScrollDirection, verticalScrollDirection, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          horizontalScrollDirection: horizontalScrollDirection,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          verticalScrollDirection: verticalScrollDirection,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (rowIndex, columnIndex) {
        var _this$props = _this.props,
            columnWidth = _this$props.columnWidth,
            direction = _this$props.direction,
            rowHeight = _this$props.rowHeight;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && columnWidth, shouldResetStyleCacheOnItemSizeChange && direction, shouldResetStyleCacheOnItemSizeChange && rowHeight);

        var key = rowIndex + ":" + columnIndex;
        var style;

        if (itemStyleCache.hasOwnProperty(key)) {
          style = itemStyleCache[key];
        } else {
          var _style;

          itemStyleCache[key] = style = (_style = {
            position: 'absolute'
          }, _style[direction === 'rtl' ? 'right' : 'left'] = getColumnOffset(_this.props, columnIndex, _this._instanceProps), _style.top = getRowOffset(_this.props, rowIndex, _this._instanceProps), _style.height = getRowHeight(_this.props, rowIndex, _this._instanceProps), _style.width = getColumnWidth(_this.props, columnIndex, _this._instanceProps), _style);
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_, __, ___) {
        return {};
      });

      _this._onScroll = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientHeight = _event$currentTarget.clientHeight,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollTop = _event$currentTarget.scrollTop,
            scrollHeight = _event$currentTarget.scrollHeight,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
          // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
          // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
          // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.

          var calculatedScrollLeft = scrollLeft;

          if (direction === 'rtl') {
            switch (getRTLOffsetType()) {
              case 'negative':
                calculatedScrollLeft = -scrollLeft;
                break;

              case 'positive-descending':
                calculatedScrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          calculatedScrollLeft = Math.max(0, Math.min(calculatedScrollLeft, scrollWidth - clientWidth));
          var calculatedScrollTop = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
            scrollLeft: calculatedScrollLeft,
            scrollTop: calculatedScrollTop,
            verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward',
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1);
        });
      };

      return _this;
    }

    Grid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = Grid.prototype;

    _proto.scrollTo = function scrollTo(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      if (scrollLeft !== undefined) {
        scrollLeft = Math.max(0, scrollLeft);
      }

      if (scrollTop !== undefined) {
        scrollTop = Math.max(0, scrollTop);
      }

      this.setState(function (prevState) {
        if (scrollLeft === undefined) {
          scrollLeft = prevState.scrollLeft;
        }

        if (scrollTop === undefined) {
          scrollTop = prevState.scrollTop;
        }

        if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
          return null;
        }

        return {
          horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollUpdateWasRequested: true,
          verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward'
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(_ref4) {
      var _ref4$align = _ref4.align,
          align = _ref4$align === void 0 ? 'auto' : _ref4$align,
          columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex;
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          height = _this$props2.height,
          rowCount = _this$props2.rowCount,
          width = _this$props2.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;
      var scrollbarSize = getScrollbarSize();

      if (columnIndex !== undefined) {
        columnIndex = Math.max(0, Math.min(columnIndex, columnCount - 1));
      }

      if (rowIndex !== undefined) {
        rowIndex = Math.max(0, Math.min(rowIndex, rowCount - 1));
      }

      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps); // The scrollbar size should be considered when scrolling an item into view,
      // to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.

      var horizontalScrollbarSize = estimatedTotalWidth > width ? scrollbarSize : 0;
      var verticalScrollbarSize = estimatedTotalHeight > height ? scrollbarSize : 0;
      this.scrollTo({
        scrollLeft: columnIndex !== undefined ? getOffsetForColumnAndAlignment(this.props, columnIndex, align, scrollLeft, this._instanceProps, verticalScrollbarSize) : scrollLeft,
        scrollTop: rowIndex !== undefined ? getOffsetForRowAndAlignment(this.props, rowIndex, align, scrollTop, this._instanceProps, horizontalScrollbarSize) : scrollTop
      });
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          initialScrollLeft = _this$props3.initialScrollLeft,
          initialScrollTop = _this$props3.initialScrollTop;

      if (this._outerRef != null) {
        var outerRef = this._outerRef;

        if (typeof initialScrollLeft === 'number') {
          outerRef.scrollLeft = initialScrollLeft;
        }

        if (typeof initialScrollTop === 'number') {
          outerRef.scrollTop = initialScrollTop;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var direction = this.props.direction;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollTop = _this$state2.scrollTop,
          scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
        // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
        // So we need to determine which browser behavior we're dealing with, and mimic it.
        var outerRef = this._outerRef;

        if (direction === 'rtl') {
          switch (getRTLOffsetType()) {
            case 'negative':
              outerRef.scrollLeft = -scrollLeft;
              break;

            case 'positive-ascending':
              outerRef.scrollLeft = scrollLeft;
              break;

            default:
              var clientWidth = outerRef.clientWidth,
                  scrollWidth = outerRef.scrollWidth;
              outerRef.scrollLeft = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        } else {
          outerRef.scrollLeft = Math.max(0, scrollLeft);
        }

        outerRef.scrollTop = Math.max(0, scrollTop);
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          columnCount = _this$props4.columnCount,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey : _this$props4$itemKey,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          rowCount = _this$props4.rowCount,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling;

      var _this$_getHorizontalR = this._getHorizontalRangeToRender(),
          columnStartIndex = _this$_getHorizontalR[0],
          columnStopIndex = _this$_getHorizontalR[1];

      var _this$_getVerticalRan = this._getVerticalRangeToRender(),
          rowStartIndex = _this$_getVerticalRan[0],
          rowStopIndex = _this$_getVerticalRan[1];

      var items = [];

      if (columnCount > 0 && rowCount) {
        for (var _rowIndex = rowStartIndex; _rowIndex <= rowStopIndex; _rowIndex++) {
          for (var _columnIndex = columnStartIndex; _columnIndex <= columnStopIndex; _columnIndex++) {
            items.push(Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(children, {
              columnIndex: _columnIndex,
              data: itemData,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              key: itemKey({
                columnIndex: _columnIndex,
                data: itemData,
                rowIndex: _rowIndex
              }),
              rowIndex: _rowIndex,
              style: this._getItemStyle(_rowIndex, _columnIndex)
            }));
          }
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps);
      return Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: this._onScroll,
        ref: this._outerRefSetter,
        style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: estimatedTotalHeight,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: estimatedTotalWidth
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      var _this$props5 = this.props,
          columnCount = _this$props5.columnCount,
          onItemsRendered = _this$props5.onItemsRendered,
          onScroll = _this$props5.onScroll,
          rowCount = _this$props5.rowCount;

      if (typeof onItemsRendered === 'function') {
        if (columnCount > 0 && rowCount > 0) {
          var _this$_getHorizontalR2 = this._getHorizontalRangeToRender(),
              _overscanColumnStartIndex = _this$_getHorizontalR2[0],
              _overscanColumnStopIndex = _this$_getHorizontalR2[1],
              _visibleColumnStartIndex = _this$_getHorizontalR2[2],
              _visibleColumnStopIndex = _this$_getHorizontalR2[3];

          var _this$_getVerticalRan2 = this._getVerticalRangeToRender(),
              _overscanRowStartIndex = _this$_getVerticalRan2[0],
              _overscanRowStopIndex = _this$_getVerticalRan2[1],
              _visibleRowStartIndex = _this$_getVerticalRan2[2],
              _visibleRowStopIndex = _this$_getVerticalRan2[3];

          this._callOnItemsRendered(_overscanColumnStartIndex, _overscanColumnStopIndex, _overscanRowStartIndex, _overscanRowStopIndex, _visibleColumnStartIndex, _visibleColumnStopIndex, _visibleRowStartIndex, _visibleRowStopIndex);
        }
      }

      if (typeof onScroll === 'function') {
        var _this$state3 = this.state,
            _horizontalScrollDirection = _this$state3.horizontalScrollDirection,
            _scrollLeft = _this$state3.scrollLeft,
            _scrollTop = _this$state3.scrollTop,
            _scrollUpdateWasRequested = _this$state3.scrollUpdateWasRequested,
            _verticalScrollDirection = _this$state3.verticalScrollDirection;

        this._callOnScroll(_scrollLeft, _scrollTop, _horizontalScrollDirection, _verticalScrollDirection, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getHorizontalRangeToRender = function _getHorizontalRangeToRender() {
      var _this$props6 = this.props,
          columnCount = _this$props6.columnCount,
          overscanColumnCount = _this$props6.overscanColumnCount,
          overscanColumnsCount = _this$props6.overscanColumnsCount,
          overscanCount = _this$props6.overscanCount,
          rowCount = _this$props6.rowCount;
      var _this$state4 = this.state,
          horizontalScrollDirection = _this$state4.horizontalScrollDirection,
          isScrolling = _this$state4.isScrolling,
          scrollLeft = _this$state4.scrollLeft;
      var overscanCountResolved = overscanColumnCount || overscanColumnsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getColumnStartIndexForOffset(this.props, scrollLeft, this._instanceProps);
      var stopIndex = getColumnStopIndexForStartIndex(this.props, startIndex, scrollLeft, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || horizontalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || horizontalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(columnCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    _proto._getVerticalRangeToRender = function _getVerticalRangeToRender() {
      var _this$props7 = this.props,
          columnCount = _this$props7.columnCount,
          overscanCount = _this$props7.overscanCount,
          overscanRowCount = _this$props7.overscanRowCount,
          overscanRowsCount = _this$props7.overscanRowsCount,
          rowCount = _this$props7.rowCount;
      var _this$state5 = this.state,
          isScrolling = _this$state5.isScrolling,
          verticalScrollDirection = _this$state5.verticalScrollDirection,
          scrollTop = _this$state5.scrollTop;
      var overscanCountResolved = overscanRowCount || overscanRowsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getRowStartIndexForOffset(this.props, scrollTop, this._instanceProps);
      var stopIndex = getRowStopIndexForStartIndex(this.props, startIndex, scrollTop, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || verticalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || verticalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(rowCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return Grid;
  }(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    useIsScrolling: false
  }, _temp;
}

var validateSharedProps = function validateSharedProps(_ref5, _ref6) {
  var children = _ref5.children,
      direction = _ref5.direction,
      height = _ref5.height,
      innerTagName = _ref5.innerTagName,
      outerTagName = _ref5.outerTagName,
      overscanColumnsCount = _ref5.overscanColumnsCount,
      overscanCount = _ref5.overscanCount,
      overscanRowsCount = _ref5.overscanRowsCount,
      width = _ref5.width;
  var instance = _ref6.instance;

  if (true) {
    if (typeof overscanCount === 'number') {
      if (devWarningsOverscanCount && !devWarningsOverscanCount.has(instance)) {
        devWarningsOverscanCount.add(instance);
        console.warn('The overscanCount prop has been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (typeof overscanColumnsCount === 'number' || typeof overscanRowsCount === 'number') {
      if (devWarningsOverscanRowsColumnsCount && !devWarningsOverscanRowsColumnsCount.has(instance)) {
        devWarningsOverscanRowsColumnsCount.add(instance);
        console.warn('The overscanColumnsCount and overscanRowsCount props have been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName && !devWarningsTagName.has(instance)) {
        devWarningsTagName.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    switch (direction) {
      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    if (typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Grids must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    }

    if (typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Grids must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE = 50;

var getEstimatedTotalHeight = function getEstimatedTotalHeight(_ref, _ref2) {
  var rowCount = _ref.rowCount;
  var rowMetadataMap = _ref2.rowMetadataMap,
      estimatedRowHeight = _ref2.estimatedRowHeight,
      lastMeasuredRowIndex = _ref2.lastMeasuredRowIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredRowIndex >= rowCount) {
    lastMeasuredRowIndex = rowCount - 1;
  }

  if (lastMeasuredRowIndex >= 0) {
    var itemMetadata = rowMetadataMap[lastMeasuredRowIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = rowCount - lastMeasuredRowIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedRowHeight;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getEstimatedTotalWidth = function getEstimatedTotalWidth(_ref3, _ref4) {
  var columnCount = _ref3.columnCount;
  var columnMetadataMap = _ref4.columnMetadataMap,
      estimatedColumnWidth = _ref4.estimatedColumnWidth,
      lastMeasuredColumnIndex = _ref4.lastMeasuredColumnIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredColumnIndex >= columnCount) {
    lastMeasuredColumnIndex = columnCount - 1;
  }

  if (lastMeasuredColumnIndex >= 0) {
    var itemMetadata = columnMetadataMap[lastMeasuredColumnIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = columnCount - lastMeasuredColumnIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedColumnWidth;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getItemMetadata = function getItemMetadata(itemType, props, index, instanceProps) {
  var itemMetadataMap, itemSize, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    itemSize = props.columnWidth;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    itemSize = props.rowHeight;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    if (itemType === 'column') {
      instanceProps.lastMeasuredColumnIndex = index;
    } else {
      instanceProps.lastMeasuredRowIndex = index;
    }
  }

  return itemMetadataMap[index];
};

var findNearestItem = function findNearestItem(itemType, props, instanceProps, offset) {
  var itemMetadataMap, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(itemType, props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(itemType, props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch = function findNearestItemBinarySearch(itemType, props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata(itemType, props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch = function findNearestItemExponentialSearch(itemType, props, instanceProps, index, offset) {
  var itemCount = itemType === 'column' ? props.columnCount : props.rowCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata(itemType, props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(itemType, props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getOffsetForIndexAndAlignment = function getOffsetForIndexAndAlignment(itemType, props, index, align, scrollOffset, instanceProps, scrollbarSize) {
  var size = itemType === 'column' ? props.width : props.height;
  var itemMetadata = getItemMetadata(itemType, props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
  // To ensure it reflects actual measurements instead of just estimates.

  var estimatedTotalSize = itemType === 'column' ? getEstimatedTotalWidth(props, instanceProps) : getEstimatedTotalHeight(props, instanceProps);
  var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
  var minOffset = Math.max(0, itemMetadata.offset - size + scrollbarSize + itemMetadata.size);

  if (align === 'smart') {
    if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
      align = 'auto';
    } else {
      align = 'center';
    }
  }

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return Math.round(minOffset + (maxOffset - minOffset) / 2);

    case 'auto':
    default:
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (minOffset > maxOffset) {
        // Because we only take into account the scrollbar size when calculating minOffset
        // this value can be larger than maxOffset when at the end of the list
        return minOffset;
      } else if (scrollOffset < minOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }

  }
};

var VariableSizeGrid =
/*#__PURE__*/
createGridComponent({
  getColumnOffset: function getColumnOffset(props, index, instanceProps) {
    return getItemMetadata('column', props, index, instanceProps).offset;
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(props, scrollLeft, instanceProps) {
    return findNearestItem('column', props, instanceProps, scrollLeft);
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, instanceProps) {
    var columnCount = props.columnCount,
        width = props.width;
    var itemMetadata = getItemMetadata('column', props, startIndex, instanceProps);
    var maxOffset = scrollLeft + width;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < columnCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('column', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  getColumnWidth: function getColumnWidth(props, index, instanceProps) {
    return instanceProps.columnMetadataMap[index].size;
  },
  getEstimatedTotalHeight: getEstimatedTotalHeight,
  getEstimatedTotalWidth: getEstimatedTotalWidth,
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('column', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('row', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getRowOffset: function getRowOffset(props, index, instanceProps) {
    return getItemMetadata('row', props, index, instanceProps).offset;
  },
  getRowHeight: function getRowHeight(props, index, instanceProps) {
    return instanceProps.rowMetadataMap[index].size;
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(props, scrollTop, instanceProps) {
    return findNearestItem('row', props, instanceProps, scrollTop);
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(props, startIndex, scrollTop, instanceProps) {
    var rowCount = props.rowCount,
        height = props.height;
    var itemMetadata = getItemMetadata('row', props, startIndex, instanceProps);
    var maxOffset = scrollTop + height;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < rowCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('row', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref5 = props,
        estimatedColumnWidth = _ref5.estimatedColumnWidth,
        estimatedRowHeight = _ref5.estimatedRowHeight;
    var instanceProps = {
      columnMetadataMap: {},
      estimatedColumnWidth: estimatedColumnWidth || DEFAULT_ESTIMATED_ITEM_SIZE,
      estimatedRowHeight: estimatedRowHeight || DEFAULT_ESTIMATED_ITEM_SIZE,
      lastMeasuredColumnIndex: -1,
      lastMeasuredRowIndex: -1,
      rowMetadataMap: {}
    };

    instance.resetAfterColumnIndex = function (columnIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        columnIndex: columnIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterRowIndex = function (rowIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        rowIndex: rowIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterIndices = function (_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex,
          _ref6$shouldForceUpda = _ref6.shouldForceUpdate,
          shouldForceUpdate = _ref6$shouldForceUpda === void 0 ? true : _ref6$shouldForceUpda;

      if (typeof columnIndex === 'number') {
        instanceProps.lastMeasuredColumnIndex = Math.min(instanceProps.lastMeasuredColumnIndex, columnIndex - 1);
      }

      if (typeof rowIndex === 'number') {
        instanceProps.lastMeasuredRowIndex = Math.min(instanceProps.lastMeasuredRowIndex, rowIndex - 1);
      } // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.


      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref7) {
    var columnWidth = _ref7.columnWidth,
        rowHeight = _ref7.rowHeight;

    if (true) {
      if (typeof columnWidth !== 'function') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      } else if (typeof rowHeight !== 'function') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

if (true) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsDirection =
    /*#__PURE__*/
    new WeakSet();
    devWarningsTagName$1 =
    /*#__PURE__*/
    new WeakSet();
  }
}

function createListComponent(_ref) {
  var _class, _temp;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _style;

          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          itemStyleCache[index] = style = (_style = {
            position: 'absolute'
          }, _style[direction === 'rtl' ? 'right' : 'left'] = isHorizontal ? _offset : 0, _style.top = !isHorizontal ? _offset : 0, _style.height = !isHorizontal ? size : '100%', _style.width = isHorizontal ? size : '100%', _style);
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          initialScrollOffset = _this$props2.initialScrollOffset,
          layout = _this$props2.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          layout = _this$props3.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemCount = _this$props4.itemCount,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
          layout = _this$props4.layout,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props,
          itemCount = _this$props5.itemCount,
          overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      direction = _ref2.direction,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (true) {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    } // TODO Deprecate direction "horizontal"


    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';

    switch (direction) {
      case 'horizontal':
      case 'vertical':
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". ' + 'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }

        break;

      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;

      default:
        throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + ("\"" + layout + "\" was specified."));
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE$1 = 50;

var getItemMetadata$1 = function getItemMetadata(props, index, instanceProps) {
  var _ref = props,
      itemSize = _ref.itemSize;
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

var findNearestItem$1 = function findNearestItem(props, instanceProps, offset) {
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch$1(props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch$1(props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch$1 = function findNearestItemBinarySearch(props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata$1(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch$1 = function findNearestItemExponentialSearch(props, instanceProps, index, offset) {
  var itemCount = props.itemCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata$1(props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch$1(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getEstimatedTotalSize = function getEstimatedTotalSize(_ref2, _ref3) {
  var itemCount = _ref2.itemCount;
  var itemMetadataMap = _ref3.itemMetadataMap,
      estimatedItemSize = _ref3.estimatedItemSize,
      lastMeasuredIndex = _ref3.lastMeasuredIndex;
  var totalSizeOfMeasuredItems = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    var itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

var VariableSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(props, index, instanceProps) {
    return getItemMetadata$1(props, index, instanceProps).offset;
  },
  getItemSize: function getItemSize(props, index, instanceProps) {
    return instanceProps.itemMetadataMap[index].size;
  },
  getEstimatedTotalSize: getEstimatedTotalSize,
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(props, index, align, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
    // To ensure it reflects actual measurements instead of just estimates.

    var estimatedTotalSize = getEstimatedTotalSize(props, instanceProps);
    var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
    var minOffset = Math.max(0, itemMetadata.offset - size + itemMetadata.size);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        return Math.round(minOffset + (maxOffset - minOffset) / 2);

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(props, offset, instanceProps) {
    return findNearestItem$1(props, instanceProps, offset);
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        itemCount = props.itemCount,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, startIndex, instanceProps);
    var maxOffset = scrollOffset + size;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < itemCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata$1(props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref4 = props,
        estimatedItemSize = _ref4.estimatedItemSize;
    var instanceProps = {
      itemMetadataMap: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE$1,
      lastMeasuredIndex: -1
    };

    instance.resetAfterIndex = function (index, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index - 1); // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.

      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref5) {
    var itemSize = _ref5.itemSize;

    if (true) {
      if (typeof itemSize !== 'function') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

var FixedSizeGrid =
/*#__PURE__*/
createGridComponent({
  getColumnOffset: function getColumnOffset(_ref, index) {
    var columnWidth = _ref.columnWidth;
    return index * columnWidth;
  },
  getColumnWidth: function getColumnWidth(_ref2, index) {
    var columnWidth = _ref2.columnWidth;
    return columnWidth;
  },
  getRowOffset: function getRowOffset(_ref3, index) {
    var rowHeight = _ref3.rowHeight;
    return index * rowHeight;
  },
  getRowHeight: function getRowHeight(_ref4, index) {
    var rowHeight = _ref4.rowHeight;
    return rowHeight;
  },
  getEstimatedTotalHeight: function getEstimatedTotalHeight(_ref5) {
    var rowCount = _ref5.rowCount,
        rowHeight = _ref5.rowHeight;
    return rowHeight * rowCount;
  },
  getEstimatedTotalWidth: function getEstimatedTotalWidth(_ref6) {
    var columnCount = _ref6.columnCount,
        columnWidth = _ref6.columnWidth;
    return columnWidth * columnCount;
  },
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(_ref7, columnIndex, align, scrollLeft, instanceProps, scrollbarSize) {
    var columnCount = _ref7.columnCount,
        columnWidth = _ref7.columnWidth,
        width = _ref7.width;
    var lastColumnOffset = Math.max(0, columnCount * columnWidth - width);
    var maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
    var minOffset = Math.max(0, columnIndex * columnWidth - width + scrollbarSize + columnWidth);

    if (align === 'smart') {
      if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(width / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
          return lastColumnOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
          return scrollLeft;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollLeft < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(_ref8, rowIndex, align, scrollTop, instanceProps, scrollbarSize) {
    var rowHeight = _ref8.rowHeight,
        height = _ref8.height,
        rowCount = _ref8.rowCount;
    var lastRowOffset = Math.max(0, rowCount * rowHeight - height);
    var maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
    var minOffset = Math.max(0, rowIndex * rowHeight - height + scrollbarSize + rowHeight);

    if (align === 'smart') {
      if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(height / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
          return lastRowOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollTop >= minOffset && scrollTop <= maxOffset) {
          return scrollTop;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollTop < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(_ref9, scrollLeft) {
    var columnWidth = _ref9.columnWidth,
        columnCount = _ref9.columnCount;
    return Math.max(0, Math.min(columnCount - 1, Math.floor(scrollLeft / columnWidth)));
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(_ref10, startIndex, scrollLeft) {
    var columnWidth = _ref10.columnWidth,
        columnCount = _ref10.columnCount,
        width = _ref10.width;
    var left = startIndex * columnWidth;
    var numVisibleColumns = Math.ceil((width + scrollLeft - left) / columnWidth);
    return Math.max(0, Math.min(columnCount - 1, startIndex + numVisibleColumns - 1 // -1 is because stop index is inclusive
    ));
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(_ref11, scrollTop) {
    var rowHeight = _ref11.rowHeight,
        rowCount = _ref11.rowCount;
    return Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTop / rowHeight)));
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(_ref12, startIndex, scrollTop) {
    var rowHeight = _ref12.rowHeight,
        rowCount = _ref12.rowCount,
        height = _ref12.height;
    var top = startIndex * rowHeight;
    var numVisibleRows = Math.ceil((height + scrollTop - top) / rowHeight);
    return Math.max(0, Math.min(rowCount - 1, startIndex + numVisibleRows - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref13) {
    var columnWidth = _ref13.columnWidth,
        rowHeight = _ref13.rowHeight;

    if (true) {
      if (typeof columnWidth !== 'number') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      }

      if (typeof rowHeight !== 'number') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var FixedSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (true) {
      if (typeof itemSize !== 'number') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo

function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(prevProps, ["style"]);

  var nextStyle = nextProps.style,
      nextRest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(nextProps, ["style"]);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}


//# sourceMappingURL=index.esm.js.map


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


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi regenerator-runtime ./assets/scripts/wplf-admin.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! /app/web/wp-content/plugins/wp-libre-form/assets/scripts/wplf-admin.ts */"./assets/scripts/wplf-admin.ts");


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************************************************************************************!*\
  !*** external {"commonjs":"react-dom","commonjs2":"react-dom","amd":"ReactDOM","root":"ReactDOM"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XUExGL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9XUExGL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtYWRkb25zLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtYWRtaW4udHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi1hcGkudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi1mb3JtLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi1zdG9yYWdlLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtdGFicy50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvY2xhc3Nlcy93cGxmLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9saWIvY29uZmlybS1kZWxldGUudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi9jcmVhdGUtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvbGliL2Vuc3VyZS1udW0udHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi9nZXQtYXR0cmlidXRlLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9saWIvZ2xvYmFsLWRhdGEudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi9pcy1lbGVtZW50aXNoLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9saWIvbG9nLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9saWIvd2FpdC50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvcmVhY3QvU3VibWlzc2lvbi50c3giLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL3JlYWN0L1N1Ym1pc3Npb25MaXN0LnRzeCIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL3dwbGYtYWRtaW4udHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zdHlsZXMvd3BsZi1hZG1pbi5zY3NzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvYWJvcnQtY29udHJvbGxlci9icm93c2VyLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvY29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsUG9ydGFsLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvYXJpYUFwcEhpZGVyLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvYm9keVRyYXAuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9jbGFzc0xpc3QuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9mb2N1c01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9wb3J0YWxPcGVuSW5zdGFuY2VzLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50LmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2NvcGVUYWIuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy90YWJiYWJsZS5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXdpbmRvdy1pbmZpbml0ZS1sb2FkZXIvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC13aW5kb3cvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vV1BMRi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwiUmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9Iiwid2VicGFjazovL1dQTEYvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwiUmVhY3RET01cIixcInJvb3RcIjpcIlJlYWN0RE9NXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQ0FBMkMsMkJBQTJCO0FBQ3RFLG1EQUFtRCxpQ0FBaUM7QUFDcEYsdUJBQXVCLDJEQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBLGFBQWEsMkRBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrRkFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPLEVBQUUsMkRBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0dBQStHO0FBQy9HOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyR0FBMkc7QUFDM0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLENBQUMsbURBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdGQUFjOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNERBQTRELGdHQUFzQixDQUFDLGdHQUFzQjtBQUN6RztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0dBQXNCLENBQUMsZ0dBQXNCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywyREFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLDRCQUE0QiwyREFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLDJFQUEyRTs7QUFFM0U7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsMkRBQVU7QUFDM0M7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQscUJBQXFCLDJEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0EsYUFBYSwyREFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtGQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU8sRUFBRSwyREFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJHQUEyRztBQUMzRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsQ0FBQyxtREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZGQUE2RjtBQUM3RjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLFFBQVEsSUFB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VztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM3VCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsYUFBb0I7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQiLCJmaWxlIjoid3BsZi1hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlJlYWN0XCIsIFwiUmVhY3RET01cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV1BMRlwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJXUExGXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfZG9tX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgV1BMRiBmcm9tICcuL3dwbGYnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQTEZfQWRkb25zIHtcbiAgY29uc3RydWN0b3Iod3BsZkluc3RhbmNlOiBXUExGKSB7fVxufVxuIiwiaW1wb3J0IFdQTEZfRWRpdG9yIGZyb20gJy4vd3BsZi1lZGl0b3InXG5pbXBvcnQgV1BMRl9TZXR0aW5ncyBmcm9tICcuL3dwbGYtc2V0dGluZ3MnXG5pbXBvcnQgV1BMRl9BZGRvbnMgZnJvbSAnLi93cGxmLWFkZG9ucydcbmltcG9ydCBXUExGX1RhYnMgZnJvbSAnLi93cGxmLXRhYnMnXG5pbXBvcnQgV1BMRiBmcm9tICcuL3dwbGYnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQTEZfQWRtaW4ge1xuICBlZGl0b3I/OiBXUExGX0VkaXRvclxuICBhZGRvbnM/OiBXUExGX0FkZG9uc1xuICBzZXR0aW5ncz86IFdQTEZfU2V0dGluZ3NcbiAgdGFiczogV1BMRl9UYWJzW11cblxuICBjb25zdHJ1Y3Rvcih3cGxmSW5zdGFuY2U6IFdQTEYpIHtcbiAgICB0aGlzLnRhYnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cGxmLXRhYnMnKSkubWFwKFxuICAgICAgKGVsKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgV1BMRl9UYWJzKGVsKVxuICAgICAgfVxuICAgIClcblxuICAgIC8vIEluaXQgc3R1ZmYgYmFzZWQgb24gd2hhdCBwYWdlIHdlJ3JlIG9uXG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3RcblxuICAgIGlmIChcbiAgICAgIGNsYXNzTGlzdC5jb250YWlucygncG9zdC10eXBlLWxpYnJlZm9ybScpICYmXG4gICAgICAoY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3N0LXBocCcpIHx8IGNsYXNzTGlzdC5jb250YWlucygncG9zdC1uZXctcGhwJykpXG4gICAgKSB7XG4gICAgICB0aGlzLmVkaXRvciA9IG5ldyBXUExGX0VkaXRvcih3cGxmSW5zdGFuY2UpXG4gICAgfSBlbHNlIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ2xpYnJlZm9ybV9wYWdlX3dwbGZTZXR0aW5ncycpKSB7XG4gICAgICAvLyBJbiBzZXR0aW5ncyBwYWdlXG4gICAgICB0aGlzLnNldHRpbmdzID0gbmV3IFdQTEZfU2V0dGluZ3Mod3BsZkluc3RhbmNlKVxuICAgIH0gZWxzZSBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdsaWJyZWZvcm1fcGFnZV93cGxmQWRkb25zJykpIHtcbiAgICAgIHRoaXMuYWRkb25zID0gbmV3IFdQTEZfQWRkb25zKHdwbGZJbnN0YW5jZSlcbiAgICB9XG4gIH1cblxuICBnZXRFZGl0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yXG4gIH1cblxuICBnZXRBZGRvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkb25zXG4gIH1cblxuICBnZXRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nc1xuICB9XG5cbiAgZ2V0VGFicygpIHtcbiAgICByZXR1cm4gdGhpcy50YWJzXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi9saWIvY3JlYXRlLXJlcXVlc3QnXG5pbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuLi9saWIvZ2xvYmFsLWRhdGEnXG5pbXBvcnQge1xuICBBcGlSZXNwb25zZSxcbiAgUmVuZGVyRm9ybUFwaVJlc3BvbnNlLFxuICBSZW5kZXJSZXNwb25zZSxcbiAgUmVzcG9uc2VUeXBlLFxufSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IFdQTEZfRm9ybSB9IGZyb20gJy4vd3BsZi1mb3JtJ1xuXG5jbGFzcyBDbGllbnQge1xuICAvLyBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlOiBSYXdBcGlSZXNwb25zZSkge1xuICAvLyAgIGNvbnN0IHsgb2ssIHN0YXR1cyB9ID0gcmVzcG9uc2VcblxuICAvLyAgIGlmICghb2spIHtcbiAgLy8gICAgIHJldHVybiBmYWxzZVxuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiB0cnVlXG4gIC8vIH1cblxuICAvLyBwYXJzZVJlc3BvbnNlPFRvVHlwZSBleHRlbmRzIGtleW9mIEFwaVJlc3BvbnNlS2luZD4ocmVzcG9uc2U6IFJhd0FwaVJlc3BvbnNlKSA6IFRvVHlwZSB7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIC4uLnJlc3BvbnNlLFxuICAvLyAgICAga2luZDogQXBpUmVzcG9uc2VLaW5kW1RvVHlwZV0sXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgYXN5bmMgcmVxdWVzdFJlbmRlcihcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyLFxuICAgIGNvbnRlbnQ6IHN0cmluZ1xuICApOiBQcm9taXNlPFJlbmRlckZvcm1BcGlSZXNwb25zZT4ge1xuICAgIGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkuYXBwZW5kKCdjb250ZW50JywgY29udGVudClcbiAgICBib2R5LmFwcGVuZCgnZm9ybScsIGlkLnRvU3RyaW5nKCkpXG4gICAgaWYgKGdsb2JhbERhdGEubGFuZykge1xuICAgICAgYm9keS5hcHBlbmQoJ2xhbmcnLCBnbG9iYWxEYXRhLmxhbmcpXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0PFJlbmRlclJlc3BvbnNlPignL3JlbmRlckZvcm0nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHksXG4gICAgfSlcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHJlbmRlciBmb3JtJylcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucmVzcG9uc2UsXG4gICAgICBraW5kOiBSZXNwb25zZVR5cGUuUmVuZGVyRm9ybSxcbiAgICB9XG4gIH1cblxuICAvLyBhc3luYyByZXF1ZXN0U3VibWlzc2lvbnMoXG4gIC8vIGZvcm1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENsaWVudCgpXG4iLCJpbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuLi9saWIvZ2xvYmFsLWRhdGEnXG5pbXBvcnQgbG9nIGZyb20gJy4uL2xpYi9sb2cnXG5pbXBvcnQgeyB3YWl0Rm9yTmV4dFRpY2sgfSBmcm9tICcuLi9saWIvd2FpdCdcbmltcG9ydCBpc0VsZW1lbnRpc2ggZnJvbSAnLi4vbGliL2lzLWVsZW1lbnRpc2gnXG5cbmltcG9ydCB7IEZpZWxkLCBMaXN0LCBSZXNwb25zZVR5cGUsIFdQTEZfRWRpdG9yU3RhdGUgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBnZXRBdHRyaWJ1dGUgZnJvbSAnLi4vbGliL2dldC1hdHRyaWJ1dGUnXG5cbmltcG9ydCBXUExGIGZyb20gJy4vd3BsZidcbmltcG9ydCB7IFdQTEZfRm9ybSB9IGZyb20gJy4vd3BsZi1mb3JtJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFN1Ym1pc3Npb25MaXN0IGZyb20gJy4uL3JlYWN0L1N1Ym1pc3Npb25MaXN0J1xuXG5pbXBvcnQgYXBpIGZyb20gJy4vd3BsZi1hcGknXG5cbmNvbnN0IHsgaTE4biB9ID0gZ2xvYmFsRGF0YVxuXG5jb25zdCAkID0gd2luZG93LmpRdWVyeVxuY29uc3QgXyA9IHdpbmRvdy5fXG5jb25zdCB3cCA9IHdpbmRvdy53cFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUExGX0VkaXRvciB7XG4gIHdwbGY6IFdQTEZcbiAgc3RhdGU6IFdQTEZfRWRpdG9yU3RhdGVcblxuICBmb3JtSW5zdGFuY2U6IFdQTEZfRm9ybSB8IG51bGwgPSBudWxsXG4gIGlucHV0czogTGlzdDxFbGVtZW50PlxuICBwcmV2aWV3RWw6IEhUTUxFbGVtZW50IC8vIFRoaXMgaXMgSFRNTEVsZW1lbnQgb24gcHVycG9zZSwgd2UgY2FuJ3QgdXNlIGEgZm9ybSBlbGVtZW50IGR1ZSB0byBuZXN0ZWQgZm9ybXNcbiAgcHVibGlzaEJ1dHRvbjogRWxlbWVudFxuICBmaWVsZFRlbXBsYXRlOiBFbGVtZW50XG5cbiAgLy8gQ29kZW1pcnJvciBpbnN0YW5jZXM6XG4gIGNvbnRlbnRFZGl0b3I6IGFueVxuICBzdWNjZXNzTWVzc2FnZUVkaXRvcjogYW55XG5cbiAgY29uc3RydWN0b3Iod3BsZkluc3RhbmNlOiBXUExGKSB7XG4gICAgY29uc3QgZmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwbGZGaWVsZHMnKVxuICAgIGNvbnN0IGFkZGl0aW9uYWxGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BsZkFkZGl0aW9uYWxGaWVsZHMnKVxuICAgIGNvbnN0IG5ld0ZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cGxmTmV3RmllbGRzJylcbiAgICBjb25zdCBkZWxldGVkRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwbGZEZWxldGVkRmllbGRzJylcbiAgICBjb25zdCBoaXN0b3J5RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwbGZIaXN0b3J5RmllbGRzJylcbiAgICBjb25zdCBhbGxvd1NhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BsZkFsbG93U2F2ZScpXG4gICAgY29uc3Qgc3VibWlzc2lvbnNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLndwbGYtZWRpdG9yIC53cGxmLXN1Ym1pc3Npb25MaXN0J1xuICAgIClcbiAgICBjb25zdCBlZGl0b3JFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cGxmLWVkaXRvciAud3BsZi1jbUVkaXRvcicpXG4gICAgY29uc3QgdGhhbmtZb3VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLndwbGYtYWZ0ZXJTdWJtaXNzaW9uIC53cGxmLWNtRWRpdG9yJ1xuICAgIClcbiAgICBjb25zdCBwcmV2aWV3RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3BsZi1lZGl0b3JfX3ByZXZpZXcnKVxuICAgIGNvbnN0IHB1Ymxpc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHVibGlzaCcpXG4gICAgY29uc3Qgc2lkZWJhckZpZWxkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy53cGxmLWZvcm1GaWVsZHMgPiAud3BsZi1mb3JtRmllbGRzX19maWVsZCdcbiAgICApXG5cbiAgICBpZiAoIWdsb2JhbERhdGEuc2V0dGluZ3MuaGFzVW5maWx0ZXJlZEh0bWwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhbGVydChnbG9iYWxEYXRhLmkxOG4ubm9VbmZpbHRlcmVkSHRtbClcbiAgICAgIH0sIDUwMCkgLy8gRGVsYXkgYSBiaXQgdG8gYWxsb3cgc3R1ZmYgdG8gaW5pdCBiZWZvcmUgc2hvd2luZyBhIGJsb2NraW5nIGVsZW1lbnRcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBpc0VsZW1lbnRpc2goZmllbGRzKSAmJlxuICAgICAgaXNFbGVtZW50aXNoKGFkZGl0aW9uYWxGaWVsZHMpICYmXG4gICAgICBpc0VsZW1lbnRpc2gobmV3RmllbGRzKSAmJlxuICAgICAgaXNFbGVtZW50aXNoKGRlbGV0ZWRGaWVsZHMpICYmXG4gICAgICBpc0VsZW1lbnRpc2goaGlzdG9yeUZpZWxkcykgJiZcbiAgICAgIGlzRWxlbWVudGlzaChhbGxvd1NhdmUpICYmXG4gICAgICBpc0VsZW1lbnRpc2goc3VibWlzc2lvbnNFbCkgJiZcbiAgICAgIGlzRWxlbWVudGlzaChlZGl0b3JFbCkgJiZcbiAgICAgIGlzRWxlbWVudGlzaCh0aGFua1lvdUVsKSAmJlxuICAgICAgaXNFbGVtZW50aXNoKHByZXZpZXdFbCkgJiZcbiAgICAgIGlzRWxlbWVudGlzaChwdWJsaXNoQnV0dG9uKSAmJlxuICAgICAgaXNFbGVtZW50aXNoKHNpZGViYXJGaWVsZFRlbXBsYXRlKVxuICAgICkge1xuICAgICAgY29uc3QgZWRpdG9ySXNSZWFkb25seSA9ICQoZWRpdG9yRWwpLmF0dHIoJ3JlYWRvbmx5JykgPyB0cnVlIDogZmFsc2VcbiAgICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgaGlzdG9yeUZpZWxkczogSlNPTi5wYXJzZShnZXRBdHRyaWJ1dGUoaGlzdG9yeUZpZWxkcywgJ3ZhbHVlJykgfHwgJ3t9JyksIC8vIFdpbGwgc3RheSBzdGF0aWMgdGhyb3VnaCB1bnRpbCB0aGUgcGFnZSBpcyByZWZyZXNoZWQgYWdhaW5cblxuICAgICAgICBmaWVsZHM6IEpTT04ucGFyc2UoZ2V0QXR0cmlidXRlKGZpZWxkcywgJ3ZhbHVlJykgfHwgJ251bGwnKSxcbiAgICAgICAgYWRkaXRpb25hbEZpZWxkczogSlNPTi5wYXJzZShcbiAgICAgICAgICBnZXRBdHRyaWJ1dGUoYWRkaXRpb25hbEZpZWxkcywgJ3ZhbHVlJykgfHwgJ251bGwnXG4gICAgICAgICksXG4gICAgICAgIG5ld0ZpZWxkczogW10sXG4gICAgICAgIGRlbGV0ZWRGaWVsZHM6IFtdLFxuICAgICAgICBhbGxvd1NhdmU6IGZhbHNlLFxuICAgICAgfVxuXG4gICAgICB0aGlzLndwbGYgPSB3cGxmSW5zdGFuY2VcbiAgICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGVcbiAgICAgIHRoaXMuaW5wdXRzID0ge1xuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGFkZGl0aW9uYWxGaWVsZHMsXG4gICAgICAgIG5ld0ZpZWxkcyxcbiAgICAgICAgZGVsZXRlZEZpZWxkcyxcbiAgICAgICAgaGlzdG9yeUZpZWxkcyxcbiAgICAgICAgYWxsb3dTYXZlLFxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpZWxkVGVtcGxhdGUgPSBzaWRlYmFyRmllbGRUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSkgYXMgRWxlbWVudFxuICAgICAgdGhpcy5maWVsZFRlbXBsYXRlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcblxuICAgICAgdGhpcy5wcmV2aWV3RWwgPSBwcmV2aWV3RWwgYXMgSFRNTEVsZW1lbnRcbiAgICAgIHRoaXMucHVibGlzaEJ1dHRvbiA9IHB1Ymxpc2hCdXR0b25cbiAgICAgIHRoaXMuY29udGVudEVkaXRvciA9IGVkaXRvcklzUmVhZG9ubHlcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogd3AuY29kZUVkaXRvci5pbml0aWFsaXplKCQoZWRpdG9yRWwpLCBnbG9iYWxEYXRhLmNvZGVNaXJyb3IpXG4gICAgICB0aGlzLnN1Y2Nlc3NNZXNzYWdlRWRpdG9yID0gd3AuY29kZUVkaXRvci5pbml0aWFsaXplKFxuICAgICAgICAkKHRoYW5rWW91RWwpLFxuICAgICAgICBnbG9iYWxEYXRhLmNvZGVNaXJyb3JcbiAgICAgIClcbiAgICAgIHRoaXMuaGFuZGxlQ29udGVudENoYW5nZSA9IHRoaXMuaGFuZGxlQ29udGVudENoYW5nZS5iaW5kKHRoaXMpXG5cbiAgICAgIGlmICghZWRpdG9ySXNSZWFkb25seSkge1xuICAgICAgICAvLyBJZiB0aGUgZWRpdG9yIGlzIGluIHJlYWQtb25seSBtb2RlLCBubyBuZWVkIHRvIHJlZnJlc2ggdGhlIHByZXZpZXcgYXMgaXQgY2FuJ3QgY2hhbmdlIGFueXdheS5cblxuICAgICAgICB0aGlzLmNvbnRlbnRFZGl0b3IuY29kZW1pcnJvci5vbihcbiAgICAgICAgICAnY2hhbmdlcycsXG4gICAgICAgICAgXy5kZWJvdW5jZSh0aGlzLmhhbmRsZUNvbnRlbnRDaGFuZ2UsIDEwMDApXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmhhbmRsZUNvbnRlbnRDaGFuZ2UodGhpcy5jb250ZW50RWRpdG9yLmNvZGVtaXJyb3IpIC8vIFRyaWdnZXJzIHByZXZpZXcgYnVpbGRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ29udGVudENoYW5nZShlZGl0b3JFbC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICB9XG5cbiAgICAgIGlmICghZ2xvYmFsRGF0YS5zZXR0aW5ncy5oYXNVbmZpbHRlcmVkSHRtbCkge1xuICAgICAgICB0aGlzLnRyeVRvUHJldmVudEVkaXQoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtSWQgPSBnbG9iYWxEYXRhLnBvc3Q/LklEIHx8IG51bGxcblxuICAgICAgaWYgKGZvcm1JZCkge1xuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFN1Ym1pc3Npb25MaXN0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmb3JtSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICksXG4gICAgICAgICAgc3VibWlzc2lvbnNFbFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ01pc3Npbmcgc29tZSBvciBhbGwgb2YgdGhlIHJlcXVpcmVkIGVsZW1lbnRzIHRvIHJ1biBXUExGX0VkaXRvcidcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZShcbiAgICBmbiA9IChjdXJyZW50U3RhdGU6IFdQTEZfRWRpdG9yU3RhdGUpOiBQYXJ0aWFsPFdQTEZfRWRpdG9yU3RhdGU+ID0+ICh7fSlcbiAgKSB7XG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IG5ld1N0YXRlID0gZm4oY3VycmVudFN0YXRlKVxuXG4gICAgaWYgKCFuZXdTdGF0ZSkge1xuICAgICAgLy8gbm8gb3BcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi5jdXJyZW50U3RhdGUsXG4gICAgICAuLi5uZXdTdGF0ZSxcbiAgICB9XG5cbiAgICB0aGlzLmFmdGVyU3RhdGVDaGFuZ2UoKVxuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVcbiAgfVxuXG4gIHdyaXRlU3RhdGUoKSB7XG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5pbnB1dHMpLmZvckVhY2goKFtrZXksIGVsXSkgPT4ge1xuICAgICAgaWYgKGtleSBpbiB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZVtrZXldXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlID8gJzEnIDogJzAnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWZ0ZXJTdGF0ZUNoYW5nZSgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKVxuXG4gICAgT2JqZWN0LmVudHJpZXMoc3RhdGUpLmZvckVhY2goKFtrLCB2XSkgPT4ge1xuICAgICAgc3dpdGNoIChrKSB7XG4gICAgICAgIGNhc2UgJ2FsbG93U2F2ZSc6IHtcbiAgICAgICAgICB0aGlzLndyaXRlU3RhdGUoKVxuXG4gICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgIHRoaXMucHVibGlzaEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wdWJsaXNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBidW5jaCBvZiB0aGluZ3MgYW5kIHJlbW92ZSB0aGUgc3VibWl0IGJ1dHRvbixcbiAgICogYmFja2VuZCB3aWxsIGhhbmRsZSBpdCBpZiBuZWNlc3NhcnkgYnV0IGl0J3Mgbm90IHByZXR0eS5cbiAgICogQmFja2VuZCBzaG91bGQgYWxzbyBwcmludCBhIG5vdGljZSBhYm92ZSB0aGUgZm9ybS5cbiAgICovXG4gIHRyeVRvUHJldmVudEVkaXQoKSB7XG4gICAgLy8gTWlnaHQgYXMgd2VsbCB1c2UgdGhlIGpRdWVyeSBzaW5jZSBpdCdzIHdwLWFkbWluLlxuXG4gICAgJCgnI3RpdGxlJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxuICAgICQoJyNjb250ZW50JykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxuICAgICQoJyNwdWJsaXNoJykucmVtb3ZlKClcbiAgICAkKCcjc2F2ZS1wb3N0JykucmVtb3ZlKClcbiAgfVxuXG4gIC8vIGBlZGl0b3JgIGlzIGEgQ29kZU1pcnJvciBpbnN0YW5jZSBvciBhIHN0cmluZ1xuICBhc3luYyBoYW5kbGVDb250ZW50Q2hhbmdlKGVkaXRvcjogc3RyaW5nIHwgYW55KSB7XG4gICAgbGV0IHsgd3BsZiwgZm9ybUluc3RhbmNlIH0gPSB0aGlzXG4gICAgY29uc3QgY29udGVudCA9IHR5cGVvZiBlZGl0b3IgPT09ICdzdHJpbmcnID8gZWRpdG9yIDogZWRpdG9yLmdldFZhbHVlKClcblxuICAgIHRyeSB7XG4gICAgICBpZiAoZm9ybUluc3RhbmNlKSB7XG4gICAgICAgIHdwbGYuZGV0YWNoKGZvcm1JbnN0YW5jZSlcbiAgICAgICAgZm9ybUluc3RhbmNlID0gbnVsbFxuICAgICAgfVxuXG4gICAgICAvLyBEaXNhYmxlIHN1Ym1pdCBidXR0b24gd2hlbiB0aGUgZmllbGRzIGNoYW5nZVxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBhbGxvd1NhdmU6IGZhbHNlIH0pKVxuXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVByZXZpZXcoY29udGVudClcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlRm9ybUZpZWxkc0Zyb21QcmV2aWV3KClcbiAgICAgIGF3YWl0IHRoaXMucmVtb3ZlUHJvYmxlbWF0aWNBdHRyaWJ1dGVzRnJvbVByZXZpZXcoKVxuXG4gICAgICB0aGlzLndyaXRlU3RhdGUoKVxuICAgICAgZm9ybUluc3RhbmNlID0gd3BsZi5hdHRhY2godGhpcy5wcmV2aWV3RWwpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKCdGYWlsZWQgdG8gZ2V0IHByZXZpZXcnLCBlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVByZXZpZXcoY29udGVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgZm9ybUlkID0gZ2xvYmFsRGF0YS5wb3N0Py5JRCB8fCBudWxsXG5cbiAgICBjb25zb2xlLmxvZygndGVydmUnKVxuXG4gICAgaWYgKCFmb3JtSWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5yZXF1ZXN0UmVuZGVyKGZvcm1JZCwgY29udGVudClcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2VcblxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5raW5kLCBkYXRhLmRhdGEpXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSlcblxuICAgICAgLy8gaWYgKGRhdGEua2luZCA9PT0gUmVzcG9uc2VUeXBlLkFwaUVycm9yKSB7XG4gICAgICAvLyAgIGxvZy5lcnJvcignVW5hYmxlIHRvIHVwZGF0ZSBwcmV2aWV3JywgZGF0YSlcblxuICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvcilcbiAgICAgIC8vIH0gZWxzZSB7XG5cbiAgICAgIC8vIH1cblxuICAgICAgaWYgKCdlcnJvcicgaW4gZGF0YSkge1xuICAgICAgICBsb2cuZXJyb3IoJ1VuYWJsZSB0byB1cGRhdGUgcHJldmlldycsIGRhdGEpXG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IGh0bWwgfSA9IGRhdGFcbiAgICAgICAgY29uc3QgdG1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIHRtcEVsLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgYXdhaXQgd2FpdEZvck5leHRUaWNrKClcblxuICAgICAgICBjb25zdCBmb3JtID0gdG1wRWwucXVlcnlTZWxlY3RvcignZm9ybScpXG4gICAgICAgIHRoaXMucHJldmlld0VsLmlubmVySFRNTCA9IGZvcm0gPyBmb3JtLmlubmVySFRNTCA6ICcnXG4gICAgICAgIGF3YWl0IHdhaXRGb3JOZXh0VGljaygpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5wcmV2aWV3RWwuaW5uZXJIVE1MID0gZS5tZXNzYWdlXG4gICAgfVxuXG4gICAgLy8gaWYgKHJlcS5raW5kID09PSBBcGlSZXNwb25zZUtpbmQuUmVuZGVyKSB7XG4gICAgLy8gICBpZiAoJ2Vycm9yJyBpbiByZXEuZGF0YSkge1xuICAgIC8vICAgICB0aGlzLnByZXZpZXdFbC5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShyZXEuZGF0YSlcbiAgICAvLyAgIH0gZWxzZSBpZiAoJ2h0bWwnIGluIHJlcS5kYXRhKSB7XG4gICAgLy8gICAgIGNvbnN0IHRtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyAgICAgY29uc3QgeyBodG1sIH0gPSByZXEuZGF0YVxuXG4gICAgLy8gICAgIHRtcEVsLmlubmVySFRNTCA9IGh0bWxcblxuICAgIC8vICAgICBhd2FpdCB3YWl0Rm9yTmV4dFRpY2soKVxuXG4gICAgLy8gICAgIGlmICh0bXBFbCkge1xuICAgIC8vICAgICAgIGNvbnN0IGZvcm0gPSB0bXBFbC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcbiAgICAvLyAgICAgICB0aGlzLnByZXZpZXdFbC5pbm5lckhUTUwgPSBmb3JtID8gZm9ybS5pbm5lckhUTUwgOiAnJ1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgYXdhaXQgd2FpdEZvck5leHRUaWNrKClcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBnZXREdXBsaWNhdGVOYW1lcyhuYW1lczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gXy51bmlxdWUoXG4gICAgICBuYW1lcy5maWx0ZXIoKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZXMuZmlsdGVyKChuOiBzdHJpbmcpID0+IG4gPT09IG5hbWUpLmxlbmd0aCA+IDFcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgY3JlYXRlRmllbGRFbGVtZW50KGZpZWxkOiBGaWVsZCwgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZpZWxkVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnRcbiAgICBjb25zdCB7IG5hbWUsIHR5cGUsIHJlcXVpcmVkIH0gPSBmaWVsZFxuICAgIGNvbnN0IG5hbWVFbCA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Ryb25nJykgYXMgSFRNTEVsZW1lbnRcbiAgICBjb25zdCB0eXBlRWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLndwbGYtZm9ybUZpZWxkc19fZmllbGRfX3R5cGUgZW0nXG4gICAgKSBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnN0IGFsZXJ0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud3BsZi1mb3JtRmllbGRzX19maWVsZF9fYWxlcnQnKVxuXG4gICAgaWYgKGlzRWxlbWVudGlzaChuYW1lRWwpICYmIGlzRWxlbWVudGlzaCh0eXBlRWwpICYmIGlzRWxlbWVudGlzaChhbGVydCkpIHtcbiAgICAgIG5hbWVFbC5pbm5lclRleHQgPSBuYW1lXG4gICAgICB0eXBlRWwuaW5uZXJUZXh0ID0gcmVxdWlyZWQgPyBgcmVxdWlyZWQgJHt0eXBlfWAgOiB0eXBlXG5cbiAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKCd0aXRsZScsIGVycm9yTWVzc2FnZSlcblxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYDxzdHJvbmc+JHtpMThuLnByb2JsZW1zfTwvc3Ryb25nPiR7ZXJyb3JNZXNzYWdlfWAucmVwbGFjZShcbiAgICAgICAgICAvKD86XFxyXFxufFxccnxcXG4pL2csXG4gICAgICAgICAgJzxicj4nXG4gICAgICAgIClcbiAgICAgICAgbWVzc2FnZXMuaW5uZXJIVE1MID0gbWVzc2FnZVxuXG4gICAgICAgIGFsZXJ0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBtZXNzYWdlcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzRWxlbWVudGlzaChhbGVydC5wYXJlbnROb2RlKSAmJiBhbGVydC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFsZXJ0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBhc3luYyB1cGRhdGVGb3JtRmllbGRzRnJvbVByZXZpZXcoKSB7XG4gICAgY29uc3QgeyBoaXN0b3J5RmllbGRzLCBhZGRpdGlvbmFsRmllbGRzIH0gPSB0aGlzLmdldFN0YXRlKClcbiAgICBjb25zdCBlbCA9IHRoaXMucHJldmlld0VsXG4gICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3BsZi1mb3JtRmllbGRzJylcblxuICAgIGlmICghaXNFbGVtZW50aXNoKGZpZWxkQ29udGFpbmVyKSkge1xuICAgICAgY29uc29sZS53YXJuKCdGaWVsZCBjb250YWluZXIgZG9lcyBub3QgZXhpc3QnKVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWxsb3dTYXZlID0gdHJ1ZVxuXG4gICAgLy8gR2V0IGFsbCBpbnB1dHMgd2l0aCBhIG5hbWUgYXR0cmlidXRlLCB5ZXMsIGV2ZW4gYnV0dG9uLlxuICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20oXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uJylcbiAgICApXG4gICAgICAuZmlsdGVyKChlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKCduYW1lJykpXG4gICAgICAucmVkdWNlPEZpZWxkW10+KChhY2MsIGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbCAmJiBpc0VsZW1lbnRpc2goZWwpKSB7XG4gICAgICAgICAgY29uc3QgZmllbGROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCduYW1lJylcblxuICAgICAgICAgIGlmICghZmllbGROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUmVtb3ZlIGJyYWNrZXRzIGZyb20gdGhlIG5hbWUsIGJlY2F1c2UgdGhleSBjYXVzZSB1cyBncmllZi5cbiAgICAgICAgICAgKiBUaGUgYnJhY2tldHMgYXJlIG5vdCB2aXNpYmxlIGluIHRoZSBhY3R1YWwgZGF0YSwgd2hpY2gga2luZGEgYnJlYWtzIGFsbCBjb21wYXJpc29ucy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdCBuYW1lID0gZmllbGROYW1lLnJlcGxhY2UoJ1tdJywgJycpXG4gICAgICAgICAgY29uc3QgdHlwZSA9IGVsLmdldEF0dHJpYnV0ZSgndHlwZScpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gZWwuZ2V0QXR0cmlidXRlKCdyZXF1aXJlZCcpICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgY29uc3QgbXVsdGlwbGUgPSBmaWVsZE5hbWUuZW5kc1dpdGgoJ1tdJylcbiAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LnZhbHVlcyhlbC5hdHRyaWJ1dGVzKS5yZWR1Y2U8TGlzdDxzdHJpbmc+PihcbiAgICAgICAgICAgIChhY2MsIGF0dHIpID0+IHtcbiAgICAgICAgICAgICAgLy8gVGhlc2UgYXR0cmlidXRlcyBhcmUgZWl0aGVyIGhhcm1mdWwgb3IgYWxyZWFkeSBoYW5kbGVkLlxuICAgICAgICAgICAgICBjb25zdCBza2lwTGlzdCA9IFsnbmFtZScsICd0eXBlJywgJ3JlcXVpcmVkJ11cblxuICAgICAgICAgICAgICBpZiAoc2tpcExpc3QuaW5jbHVkZXMoYXR0ci5uYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZVxuXG4gICAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7fVxuICAgICAgICAgIClcblxuICAgICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcmVxdWlyZWQsXG4gICAgICAgICAgICBtdWx0aXBsZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH0sIFtdKVxuXG4gICAgY29uc3QgZmllbGROYW1lcyA9IGZpZWxkcy5tYXAoKGZpZWxkKSA9PiBmaWVsZC5uYW1lKVxuICAgIGNvbnN0IGR1cGxpY2F0ZU5hbWVzID0gdGhpcy5nZXREdXBsaWNhdGVOYW1lcyhmaWVsZE5hbWVzKVxuXG4gICAgZmllbGRDb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gW11cblxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBuYW1lLCB0eXBlIH0gPSBmaWVsZFxuICAgICAgY29uc3QgaGlzdG9yeUZpZWxkID0gT2JqZWN0LnZhbHVlcyhoaXN0b3J5RmllbGRzKS5maW5kKFxuICAgICAgICAoZmllbGQpID0+IGZpZWxkLm5hbWUgPT09IG5hbWVcbiAgICAgIClcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJ1xuXG4gICAgICAvLyBuYW1lcyBsaWtlIGZpZWxkZ3JvdXBbZmllbGRuYW1lXSBhcmUgbm90IHN1cHBvcnRlZFxuICAgICAgaWYgKG5hbWUubWF0Y2goL1xcdypcXFtcXHcqXFxdLykpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gYCR7ZXJyb3JNZXNzYWdlfSR7aTE4bi5ncm91cGVkTmFtZXNOb3RTdXBwb3J0ZWRZZXR9XFxuYFxuICAgICAgfVxuXG4gICAgICBpZiAoZHVwbGljYXRlTmFtZXMgJiYgZHVwbGljYXRlTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgLy8gQWxsb3cgY2hlY2tib3hlcyBldGMgdG8gd29yayBub3JtYWxseSwgZXJyb3Igb3RoZXJ3aXNlLlxuXG4gICAgICAgIGlmICghZmllbGQubXVsdGlwbGUpIHtcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBgJHtlcnJvck1lc3NhZ2V9JHtpMThuLmR1cGxpY2F0ZUZpZWxkTmFtZX0gJHtuYW1lfVxcbmBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWRkaXRpb25hbEZpZWxkcy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBgJHtlcnJvck1lc3NhZ2V9JHtpMThuLmlsbGVnYWxOYW1lLnJlcGxhY2UoXG4gICAgICAgICAgJ3tuYW1lfScsXG4gICAgICAgICAgbmFtZVxuICAgICAgICApfVxcbmBcbiAgICAgIH1cblxuICAgICAgaWYgKGhpc3RvcnlGaWVsZCAmJiBoaXN0b3J5RmllbGQudHlwZSAhPT0gdHlwZSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBgJHtlcnJvck1lc3NhZ2V9JHtpMThuLmZpZWxkQWxyZWFkeUV4aXN0c0luRGIucmVwbGFjZShcbiAgICAgICAgICAne3R5cGV9JyxcbiAgICAgICAgICBoaXN0b3J5RmllbGQudHlwZVxuICAgICAgICApfVxcbmBcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICBmaWVsZEVycm9ycy5wdXNoKGVycm9yTWVzc2FnZSlcbiAgICAgIH1cblxuICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVGaWVsZEVsZW1lbnQoZmllbGQsIGVycm9yTWVzc2FnZSkpXG4gICAgfSlcblxuICAgIGlmICghZmllbGRFcnJvcnMubGVuZ3RoKSB7XG4gICAgICBhbGxvd1NhdmUgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGFsbG93U2F2ZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RmllbGRzID0gZmllbGRzLmZpbHRlcigoZmllbGQpID0+IHtcbiAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpZWxkSW5Jbml0aWFsRGF0YSA9IE9iamVjdC52YWx1ZXMoaGlzdG9yeUZpZWxkcykuZmluZChcbiAgICAgICAgKHgpID0+IHgubmFtZSA9PT0gZmllbGQubmFtZVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gZmllbGRJbkluaXRpYWxEYXRhID8gZmFsc2UgOiB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGRlbGV0ZWRGaWVsZHMgPSBPYmplY3QudmFsdWVzKGhpc3RvcnlGaWVsZHMpLmZpbHRlcigoZmllbGQpID0+IHtcbiAgICAgIHJldHVybiAhZmllbGROYW1lcy5pbmNsdWRlcyhmaWVsZC5uYW1lKVxuICAgIH0pXG5cbiAgICBjb25zdCBuZXdTdGF0ZTogUGFydGlhbDxXUExGX0VkaXRvclN0YXRlPiA9IHtcbiAgICAgIC8vIEFmdGVyIGNsZWFyaW5nIHRoZSBkdXBsaWNhdGVzLCBhbiBvYmplY3Qgd2lsbCB3b3JrIGJldHRlci4gRnJlZSBsb29rdXBzIGFueW9uZT9cblxuICAgICAgZmllbGRzOiBmaWVsZHMucmVkdWNlPExpc3Q8RmllbGQ+PigoYWNjLCBmaWVsZCkgPT4ge1xuICAgICAgICBhY2NbZmllbGQubmFtZV0gPSBmaWVsZFxuXG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH0sIHt9KSxcbiAgICAgIG5ld0ZpZWxkcyxcbiAgICAgIGRlbGV0ZWRGaWVsZHMsXG4gICAgICBhbGxvd1NhdmUsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiBuZXdTdGF0ZSlcblxuICAgIGF3YWl0IHdhaXRGb3JOZXh0VGljaygpXG4gIH1cblxuICBhc3luYyByZW1vdmVQcm9ibGVtYXRpY0F0dHJpYnV0ZXNGcm9tUHJldmlldygpIHtcbiAgICAvLyBOYW1lcyBhbmQgcmVxdWlyZWQgYXR0cmlidXRlcyBjYXVzZSBwcm9ibGVtcyB3aGVuIHNhdmluZyB0aGUgZm9ybSwgcmVtb3ZlXG4gICAgY29uc3QgcmVxdWlyZWRFbHMgPSBBcnJheS5mcm9tPEVsZW1lbnQ+KFxuICAgICAgdGhpcy5wcmV2aWV3RWwucXVlcnlTZWxlY3RvckFsbCgnW3JlcXVpcmVkXScpXG4gICAgKVxuICAgIGNvbnN0IG5hbWVFbHMgPSBBcnJheS5mcm9tPEVsZW1lbnQ+KFxuICAgICAgdGhpcy5wcmV2aWV3RWwucXVlcnlTZWxlY3RvckFsbCgnW25hbWVdJylcbiAgICApXG5cbiAgICByZXF1aXJlZEVscy5mb3JFYWNoKChlbDogRWxlbWVudCkgPT4gZWwucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpKVxuICAgIG5hbWVFbHMuZm9yRWFjaCgoZWw6IEVsZW1lbnQpID0+IGVsLnJlbW92ZUF0dHJpYnV0ZSgnbmFtZScpKVxuXG4gICAgYXdhaXQgd2FpdEZvck5leHRUaWNrKClcbiAgfVxufVxuIiwiaW1wb3J0IGdsb2JhbERhdGEgZnJvbSAnLi4vbGliL2dsb2JhbC1kYXRhJ1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL2xpYi9jcmVhdGUtcmVxdWVzdCdcbmltcG9ydCBsb2cgZnJvbSAnLi4vbGliL2xvZydcblxuaW1wb3J0IFdQTEZfVGFicyBmcm9tICcuL3dwbGYtdGFicydcblxuaW1wb3J0IHtcbiAgU3VibWl0U3RhdGUsXG4gIFN1Ym1pdEhhbmRsZXIsXG4gIEZvcm1DYWxsYmFjayxcbiAgTGlzdCxcbiAgU3VibWlzc2lvblJlc3BvbnNlLFxufSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBpc0VsZW1lbnRpc2ggZnJvbSAnLi4vbGliL2lzLWVsZW1lbnRpc2gnXG5pbXBvcnQgZW5zdXJlTnVtIGZyb20gJy4uL2xpYi9lbnN1cmUtbnVtJ1xuXG5jb25zdCByZXNldEZvcm0gPSAod3BsZkZvcm06IFdQTEZfRm9ybSwgcGFyYW1zOiBMaXN0PGFueT4pID0+IHtcbiAgY29uc3QgZm9ybSA9IHdwbGZGb3JtLmZvcm0gYXMgSFRNTEZvcm1FbGVtZW50IC8vIE5lY2Vzc2FyeSBjYXN0XG5cbiAgLy8gU2luY2UgYWxsIHR5cGUgZ3VhcmFudGVlcyBoYXZlIGJlZW4gdGhyb3duIG91dCBvZiB0aGUgd2luZG93LCBpdCdzIG5lY2Vzc2FyeSB0byBjaGVjayB0aGF0IHRoZSBlbGVtZW50IGluZGVlZCBoYXMgdGhpcyBtZXRob2QuXG4gIGlmIChmb3JtLnJlc2V0KSB7XG4gICAgZm9ybS5yZXNldCgpXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdEJlZm9yZVNlbmRDYWxsYmFjayA9ICh3cGxmRm9ybTogV1BMRl9Gb3JtLCBwYXJhbXM6IExpc3Q8YW55PikgPT4ge1xuICBpZiAoaXNFbGVtZW50aXNoKHdwbGZGb3JtLmZvcm0ucGFyZW50Tm9kZSkpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gd3BsZkZvcm0uZm9ybS5wYXJlbnROb2RlXG5cbiAgICAvLyBSZXNldCBlcnJvciBhbmQgc3VjY2VzcyBtZXNzYWdlcywgaWYgdGhlcmUgd2VyZSBhbnlcbiAgICBjb25zdCBtZXNzYWdlcyA9IHBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICcud3BsZi1lcnJvck1lc3NhZ2UsIC53cGxmLXN1Y2Nlc3NNZXNzYWdlJ1xuICAgIClcblxuICAgIG1lc3NhZ2VzLmZvckVhY2goKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChpc0VsZW1lbnRpc2goZWxlbWVudC5wYXJlbnROb2RlKSkge1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTdWNjZXNzQ2FsbGJhY2sgPSAod3BsZkZvcm06IFdQTEZfRm9ybSwgcGFyYW1zOiBMaXN0PGFueT4pID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBwYXJhbXNcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSBkYXRhXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3dwbGYtc3VjY2Vzc01lc3NhZ2UnKVxuICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICdhZnRlcmJlZ2luJyxcbiAgICBtZXNzYWdlLnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+JykgLy8gTWF5YmUgdGhpcyBzaG91bGRuJ3QgYmUgbW9kaWZpZWQuXG4gIClcblxuICB3cGxmRm9ybS5mb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBkaXYpXG4gIHdwbGZGb3JtLmZvcm0uY2xhc3NMaXN0LmFkZCgnc3VibWl0dGVkJylcbn1cblxuY29uc3QgZGVmYXVsdEVycm9yQ2FsbGJhY2sgPSAod3BsZkZvcm06IFdQTEZfRm9ybSwgcGFyYW1zOiBMaXN0PGFueT4pID0+IHtcbiAgY29uc3QgeyBlcnJvciB9ID0gcGFyYW1zXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3dwbGYtZXJyb3JNZXNzYWdlJylcbiAgZGl2Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGVycm9yLm1lc3NhZ2UpXG4gIHdwbGZGb3JtLmZvcm0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGRpdilcbn1cblxuZXhwb3J0IGNsYXNzIFdQTEZfRm9ybSB7XG4gIGZvcm06IEhUTUxFbGVtZW50XG4gIGlkOiBudW1iZXJcbiAgc2x1Zzogc3RyaW5nXG5cbiAgc3VibWl0U3RhdGU6IFN1Ym1pdFN0YXRlID0gU3VibWl0U3RhdGUuVW5zdWJtaXR0ZWRcbiAgc3VibWl0SGFuZGxlcjogU3VibWl0SGFuZGxlclxuICBjYWxsYmFja3M6IHtcbiAgICBiZWZvcmVTZW5kOiBMaXN0PEZvcm1DYWxsYmFjaz5cbiAgICBzdWNjZXNzOiBMaXN0PEZvcm1DYWxsYmFjaz5cbiAgICBlcnJvcjogTGlzdDxGb3JtQ2FsbGJhY2s+XG4gIH0gPSB7XG4gICAgYmVmb3JlU2VuZDoge1xuICAgICAgZGVmYXVsdDogZGVmYXVsdEJlZm9yZVNlbmRDYWxsYmFjayxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIGRlZmF1bHQ6IGRlZmF1bHRTdWNjZXNzQ2FsbGJhY2ssXG4gICAgICBjbGVhck9uU3VjY2VzczogcmVzZXRGb3JtLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIGRlZmF1bHQ6IGRlZmF1bHRFcnJvckNhbGxiYWNrLFxuICAgIH0sXG4gIH1cblxuICB0YWJzOiBXUExGX1RhYnNbXSA9IFtdXG4gIGtleSA9ICcnXG5cbiAgLy8gY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEZvcm1FbGVtZW50KSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAhPT0gdHJ1ZSkge1xuICAgICAgLy8gaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgIT09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRm9ybSBlbGVtZW50IGludmFsaWQgb3IgbWlzc2luZycpXG4gICAgfVxuICAgIGNvbnN0IGZhbGxiYWNrSW5wdXQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiX25vanNcIl0nKVxuXG4gICAgdGhpcy5mb3JtID0gZWxlbWVudFxuICAgIHRoaXMuaWQgPSBlbnN1cmVOdW0oZWxlbWVudC5kYXRhc2V0LmZvcm1JZCB8fCAwKVxuICAgIHRoaXMuc2x1ZyA9IGVsZW1lbnQuZGF0YXNldC5mb3JtU2x1ZyB8fCAnJ1xuXG4gICAgdGhpcy5rZXkgPSAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSlcbiAgICB0aGlzLnRhYnMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcud3BsZi10YWJzJykpLm1hcChcbiAgICAgIChlbCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFdQTEZfVGFicyhlbClcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLnN1Ym1pdEhhbmRsZXIgPSB0aGlzLmNyZWF0ZVN1Ym1pdEhhbmRsZXIoKVxuXG4gICAgdGhpcy5hdHRhY2hTdWJtaXRIYW5kbGVyKClcblxuICAgIC8vIFJlbW92ZSBpbnB1dCB0aGF0IHRyaWdnZXJzIHRoZSBmYWxsYmFjayBzbyB3ZSBnZXQgYSBKU09OIHJlc3BvbnNlXG4gICAgaWYgKGZhbGxiYWNrSW5wdXQgJiYgaXNFbGVtZW50aXNoKGZhbGxiYWNrSW5wdXQucGFyZW50Tm9kZSkpIHtcbiAgICAgIGZhbGxiYWNrSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmYWxsYmFja0lucHV0KVxuICAgIH1cbiAgfVxuXG4gIGFkZENhbGxiYWNrKG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nLCBjYWxsYmFjazogRm9ybUNhbGxiYWNrKSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3NcbiAgICBjb25zdCB7IGJlZm9yZVNlbmQsIHN1Y2Nlc3MsIGVycm9yIH0gPSBjYWxsYmFja3NcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYmVmb3JlU2VuZCc6IHtcbiAgICAgICAgYmVmb3JlU2VuZFtuYW1lXSA9IGNhbGxiYWNrXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOiB7XG4gICAgICAgIHN1Y2Nlc3NbbmFtZV0gPSBjYWxsYmFja1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdlcnJvcic6IHtcbiAgICAgICAgZXJyb3JbbmFtZV0gPSBjYWxsYmFja1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjYWxsYmFjayB0eXBlICR7dHlwZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZW1vdmVDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzXG4gICAgY29uc3QgeyBiZWZvcmVTZW5kLCBzdWNjZXNzLCBlcnJvciB9ID0gY2FsbGJhY2tzXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2JlZm9yZVNlbmQnOiB7XG4gICAgICAgIGRlbGV0ZSBiZWZvcmVTZW5kW25hbWVdXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOiB7XG4gICAgICAgIGRlbGV0ZSBzdWNjZXNzW25hbWVdXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzoge1xuICAgICAgICBkZWxldGUgZXJyb3JbbmFtZV1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gY2FsbGJhY2sgJHtuYW1lfSAke3R5cGV9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcnVuQ2FsbGJhY2sodHlwZTogc3RyaW5nLCBwYXJhbXM6IExpc3Q8YW55PiA9IHt9KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3NcbiAgICBjb25zdCB7IGJlZm9yZVNlbmQsIHN1Y2Nlc3MsIGVycm9yIH0gPSBjYWxsYmFja3NcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYmVmb3JlU2VuZCc6IHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhiZWZvcmVTZW5kKS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKHRoaXMsIHBhcmFtcylcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnc3VjY2Vzcyc6IHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhzdWNjZXNzKS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKHRoaXMsIHBhcmFtcylcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnZXJyb3InOiB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZXJyb3IpLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2sodGhpcywgcGFyYW1zKVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjYWxsYmFjayAke25hbWV9ICR7dHlwZX1gKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGF0dGFjaFN1Ym1pdEhhbmRsZXIoKSB7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3VibWl0SGFuZGxlciwgeyBwYXNzaXZlOiBmYWxzZSB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHN1Ym1pdCBoYW5kbGVyIGZyb20gdGhlIGZvcm0sIGJ1dCBrZWVwcyBpdCBpbiBtZW1vcnkuXG4gICAqL1xuICByZW1vdmVTdWJtaXRIYW5kbGVyKCkge1xuICAgIHRoaXMuZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN1Ym1pdEhhbmRsZXIpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY3JlYXRlU3VibWl0SGFuZGxlcihoYW5kbGVyPzogU3VibWl0SGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gaGFuZGxlclxuICAgIH1cblxuICAgIHJldHVybiBhc3luYyAoZTogRXZlbnQpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBpZiAodGhpcy5zdWJtaXRTdGF0ZSA9PT0gU3VibWl0U3RhdGUuU3VibWl0dGluZykge1xuICAgICAgICBsb2cubm90aWNlKCdQcmV2ZW50aW5nIGRvdWJsZSBkb3VibWlzc2lvbicpXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHggPSBhd2FpdCB0aGlzLnNlbmQoKVxuICAgICAgICBjb25zdCB7IGRhdGEsIG9rIH0gPSB4XG5cbiAgICAgICAgaWYgKCdlcnJvcicgaW4gZGF0YSkge1xuICAgICAgICAgIGxvZy5lcnJvcignSW52YWxpZCBzdWJtaXNzaW9uIScsIHgpXG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvcilcbiAgICAgICAgfSBlbHNlIGlmICghb2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgdG8gc3VibWl0IGZvcm0gZmFpbGVkJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN1Ym1pdFN0YXRlID0gU3VibWl0U3RhdGUuU3VjY2Vzc1xuICAgICAgICAgIHRoaXMucnVuQ2FsbGJhY2soJ3N1Y2Nlc3MnLCB7IGRhdGEgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zdWJtaXRTdGF0ZSA9IFN1Ym1pdFN0YXRlLkVycm9yXG4gICAgICAgIHRoaXMucnVuQ2FsbGJhY2soJ2Vycm9yJywgeyBlcnJvciB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNlbmQoKSB7XG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZm9ybVxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSBhcyBIVE1MRm9ybUVsZW1lbnQpIC8vIEZvcm1EYXRhIGNhbid0IGJlIG1hZGUgZnJvbSBFbGVtZW50XG5cbiAgICBnbG9iYWxEYXRhLmxhbmcgJiYgZGF0YS5hcHBlbmQoJ2xhbmcnLCBnbG9iYWxEYXRhLmxhbmcpXG4gICAgdGhpcy5zdWJtaXRTdGF0ZSA9IFN1Ym1pdFN0YXRlLlN1Ym1pdHRpbmdcblxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnc3VibWl0dGluZycpXG4gICAgdGhpcy5ydW5DYWxsYmFjaygnYmVmb3JlU2VuZCcsIHsgZm9ybURhdGE6IGRhdGEsIGZvcm0gfSlcblxuICAgIGNvbnN0IHJlcSA9IHJlcXVlc3Q8U3VibWlzc2lvblJlc3BvbnNlPignL3N1Ym1pdCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZGF0YSxcbiAgICB9KVxuXG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzdWJtaXR0aW5nJylcblxuICAgIHJldHVybiByZXFcbiAgfVxufVxuIiwiaW1wb3J0IFdQTEYgZnJvbSAnLi93cGxmJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUExGX1NldHRpbmdzIHtcbiAgY29uc3RydWN0b3Iod3BsZkluc3RhbmNlOiBXUExGKSB7fVxufVxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi9saWIvbG9nJ1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5jbGFzcyBXUExGX1N0b3JhZ2Uge1xuICBwcmVmaXg6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHByZWZpeCA9ICd3cGxmJykge1xuICAgIHRoaXMucHJlZml4ID0gcHJlZml4XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KSB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucHJlZml4ICsga2V5KVxuXG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBkYXRhXG5cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2cubm90aWNlKFxuICAgICAgICBgTm8gdmFsdWUgZm91bmQgZm9yICR7a2V5fSwgZmFsbGluZyBiYWNrIHRvIGRlZmF1bHRgLFxuICAgICAgICBkZWZhdWx0VmFsdWVcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICAgIH1cbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnByZWZpeCArIGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZy5lcnJvcihlLCBrZXksIHZhbHVlKVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFdQTEZfU3RvcmFnZSgpXG4iLCJpbXBvcnQgV1BMRl9TdG9yYWdlIGZyb20gJy4vd3BsZi1zdG9yYWdlJ1xuaW1wb3J0IGxvZyBmcm9tICcuLi9saWIvbG9nJ1xuaW1wb3J0IGlzRWxlbWVudGlzaCBmcm9tICcuLi9saWIvaXMtZWxlbWVudGlzaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BMRl9UYWJzIHtcbiAgcmVtZW1iZXI6IGJvb2xlYW4gPSBmYWxzZVxuICBhY3RpdmVUYWI6IHN0cmluZ1xuICByb290OiBFbGVtZW50XG4gIG5hbWU6IHN0cmluZyA9ICcnXG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYWIgZWxlbWVudCBpbnZhbGlkIG9yIG1pc3NpbmcnKVxuICAgIH1cblxuICAgIHRoaXMucm9vdCA9IGVsZW1lbnRcbiAgICB0aGlzLm5hbWUgPSB0aGlzLnJvb3QuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSB8fCAnJ1xuICAgIHRoaXMucmVtZW1iZXIgPSB0aGlzLnJvb3QuZ2V0QXR0cmlidXRlKCdkYXRhLXJlbWVtYmVyJykgIT09IG51bGxcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IHRoaXMucm9vdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVmYXVsdCcpIHx8ICcnXG5cbiAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2VzIHRoaXMgd29yayBmb3IgdHMgKGl0IGRvZXMgbm90KScpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm5hbWUgfHwgIXRoaXMuYWN0aXZlVGFiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIGF0dHJpYnV0ZXMgYXJlIG1pc3NpbmcnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnJlbWVtYmVyKSB7XG4gICAgICAvLyBHZXQgc2F2ZWQgdmFsdWUgb3Iga2VlcCB1c2luZyB0aGUgZGVmYXVsdFxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSBXUExGX1N0b3JhZ2UuZ2V0KHRoaXMubmFtZSwgdGhpcy5hY3RpdmVUYWIpXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGVcblxuICAgIGlmIChpc0VsZW1lbnRpc2godGFyZ2V0KSkge1xuICAgICAgY29uc3QgdGFiTmFtZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcblxuICAgICAgaWYgKHRhYk5hbWUpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hUYWIodGFiTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZy5ub3RpY2UoJ1VuYWJsZSB0byBzd2l0Y2ggdGFiIGFzIGRhdGEtdGFyZ2V0IHdhcyBlbXB0eScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIGV2ZW50IGxpc3RlbmVycyBhbmQgZW5zdXJlIHRoZSBjdXJyZW50IHRhYiBpcyB2aXNpYmxlLlxuICAgKiBDYWxsIGFmdGVyIGFkZGluZyBhIHRhYiBkeW5hbWljYWxseS5cbiAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRIYW5kbGVzKCkuZm9yRWFjaCgoaGFuZGxlKSA9PiB7XG4gICAgICAvLyBJdCdzIG5vdCBwb3NzaWJsZSB0byBhZGQgdGhlIHNhbWUgZXZlbnQgbGlzdGVuZXIgdHdpY2UuIElmIHRoZSBoYW5kbGUgYWxyZWFkeSBoYXMgdGhlIGxpc3RlbmVyLFxuICAgICAgLy8gdGhpcyBpcyBhIG5vLW9wLlxuICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljaywgeyBwYXNzaXZlOiBmYWxzZSB9KVxuICAgIH0pXG5cbiAgICAvLyBJZiBhY3RpdmVUYWIgaXMgbnVsbCwgdGhpbmdzIHdpbGwgYnJlYWsuIEZhbGwgYmFjayB0byBmaXJzdCB0YWJcbiAgICAvLyBhY3RpdmVUYWIgY2FudCBiZSBudWxsIGFueW1vcmVcblxuICAgIC8qICAgICBpZiAodGhpcy5hY3RpdmVUYWIgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLmdldFRhYnMoKVxuXG4gICAgICBpZiAodGFicy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSB0YWJzWzBdXG4gICAgICAgIGNvbnN0IC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcblxuICAgICAgfVxuXG4gICAgICBsb2cubm90aWNlKCdhY3RpdmVUYWIgd2FzIG51bGwsIHNldHRpbmcgZmlyc3QgdGFiIGFzIGFjdGl2ZScsIGZpcnN0KVxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSBmaXJzdFxuICAgIH0gKi9cblxuICAgIHRoaXMuc3dpdGNoVGFiKHRoaXMuYWN0aXZlVGFiKVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbHVlcyBhcmUgbm90IGNhY2hlZCBhcyB0aGV5IGFyZSBwcmFjdGljYWxseSBmcmVlIHRvIHJlY29tcHV0ZSwgYnV0XG4gICAqIG1pZ2h0IGJlY29tZSBhIG1lbW9yeSBsZWFrIGlmIHN0b3JlZC5cbiAgICovXG4gIGdldFRhYnMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbChgLndwbGYtdGFic19fdGFiW2RhdGEtbmFtZT1cIiR7dGhpcy5uYW1lfVwiXWApXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFNlZSBnZXRUYWJzKClcbiAgICovXG4gIGdldEhhbmRsZXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgYC53cGxmLXRhYnNfX3RhYlN3aXRjaGVyW2RhdGEtbmFtZT1cIiR7dGhpcy5uYW1lfVwiXWBcbiAgICAgIClcbiAgICApXG4gIH1cblxuICBzd2l0Y2hUYWIobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMuZ2V0VGFicygpXG4gICAgY29uc3QgYWxsSGFuZGxlcyA9IHRoaXMuZ2V0SGFuZGxlcygpXG5cbiAgICBjb25zdCBvcGVuID0gdGFicy5maWx0ZXIoKHRhYikgPT4gdGFiLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKSA9PT0gbmFtZSlcbiAgICBjb25zdCBjbG9zZSA9IHRhYnMuZmlsdGVyKCh0YWIpID0+IHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJykgIT09IG5hbWUpXG5cbiAgICBvcGVuLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgY29uc3QgdGFiTmFtZSA9IHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJylcbiAgICAgIGNvbnN0IGhhbmRsZXMgPSBhbGxIYW5kbGVzLmZpbHRlcihcbiAgICAgICAgKGhhbmRsZSkgPT4gaGFuZGxlLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSA9PT0gdGFiTmFtZVxuICAgICAgKVxuXG4gICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgIGhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlKSA9PiB7XG4gICAgICAgIGhhbmRsZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY2xvc2UuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBjb25zdCB0YWJOYW1lID0gdGFiLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKVxuICAgICAgY29uc3QgaGFuZGxlcyA9IGFsbEhhbmRsZXMuZmlsdGVyKFxuICAgICAgICAoaGFuZGxlKSA9PiBoYW5kbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpID09PSB0YWJOYW1lXG4gICAgICApXG5cbiAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUpID0+IHtcbiAgICAgICAgaGFuZGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5yZW1lbWJlcikge1xuICAgICAgV1BMRl9TdG9yYWdlLnNldCh0aGlzLm5hbWUsIG5hbWUpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBXUExGX0Zvcm0gfSBmcm9tICcuL3dwbGYtZm9ybSdcbmltcG9ydCBnbG9iYWxEYXRhIGZyb20gJy4uL2xpYi9nbG9iYWwtZGF0YSdcblxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IGVuc3VyZU51bSBmcm9tICcuLi9saWIvZW5zdXJlLW51bSdcbmltcG9ydCBXUExGX1RhYnMgZnJvbSAnLi93cGxmLXRhYnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQTEYge1xuICBmb3JtczogTGlzdDxXUExGX0Zvcm0+ID0ge31cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKVxuICB9XG5cbiAgLy8gRXhwb3NlIFdQTEZfRm9ybSBhbmQgV1BMRl9UYWJzIGFzIHByb3BlcnRpZXMgZm9yIHRoaXMgY2xhc3MuXG4gIC8vIEp1c3QgdG8gYWxsb3cgdXNlcnMgd2hvIGRvbid0IGluc3RhbGwgdGhlIG5wbSBwYWNrYWdlIHRvIHVzZSB0aGVzZSB0b286XG4gIFdQTEZfRm9ybSA9IFdQTEZfRm9ybVxuICBXUExGX1RhYnMgPSBXUExGX1RhYnNcblxuICBpbml0aWFsaXplKCkge1xuICAgIGlmIChnbG9iYWxEYXRhLnNldHRpbmdzLmF1dG9pbml0KSB7XG4gICAgICBjb25zdCBmb3JtcyA9IEFycmF5LmZyb20oXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdmb3JtLndwbGYnKVxuICAgICAgKS5tYXAoKGZvcm0pID0+IHtcbiAgICAgICAgdGhpcy5hdHRhY2goZm9ybSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZmluZEZvcm1zQnlJZChpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZm9ybXMpLnJlZHVjZTxXUExGX0Zvcm1bXT4oKGFjYywga2V5KSA9PiB7XG4gICAgICBjb25zdCB3cGxmRm9ybSA9IHRoaXMuZm9ybXNba2V5XVxuXG4gICAgICBpZiAoIXdwbGZGb3JtKSB7XG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cblxuICAgICAgaWYgKGlkID09PSB3cGxmRm9ybS5pZCkge1xuICAgICAgICBhY2MucHVzaCh3cGxmRm9ybSlcbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgZm9ybUVsID0gd3BsZkZvcm0uZm9ybVxuICAgICAgLy8gY29uc3QgZm9ybUVsSWQgPSBmb3JtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm0taWQnKVxuXG4gICAgICAvLyBpZiAoZm9ybUVsSWQgJiYgZW5zdXJlTnVtKGZvcm1FbElkKSA9PT0gZW5zdXJlTnVtKGlkKSkge1xuICAgICAgLy8gICBhY2MucHVzaCh3cGxmRm9ybSlcbiAgICAgIC8vIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIFtdKVxuICB9XG5cbiAgZmluZEZvcm1zQnlTbHVnKHNsdWc6IHN0cmluZykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmZvcm1zKS5yZWR1Y2U8V1BMRl9Gb3JtW10+KChhY2MsIGtleSkgPT4ge1xuICAgICAgY29uc3Qgd3BsZkZvcm0gPSB0aGlzLmZvcm1zW2tleV1cblxuICAgICAgaWYgKCF3cGxmRm9ybSkge1xuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG5cbiAgICAgIGlmICghd3BsZkZvcm0pIHtcbiAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfVxuXG4gICAgICBpZiAoc2x1ZyA9PT0gd3BsZkZvcm0uc2x1Zykge1xuICAgICAgICBhY2MucHVzaCh3cGxmRm9ybSlcbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgZm9ybUVsID0gd3BsZkZvcm0uZm9ybVxuICAgICAgLy8gY29uc3QgZm9ybUVsU2x1ZyA9IGZvcm1FbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybS1zbHVnJylcblxuICAgICAgLy8gaWYgKGZvcm1FbFNsdWcgJiYgZm9ybUVsU2x1ZyA9PT0gc2x1Zykge1xuICAgICAgLy8gICBhY2MucHVzaCh3cGxmRm9ybSlcbiAgICAgIC8vIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIFtdKVxuICB9XG5cbiAgYXR0YWNoKHg6IEhUTUxFbGVtZW50IHwgV1BMRl9Gb3JtKSB7XG4gICAgaWYgKHggaW5zdGFuY2VvZiBXUExGX0Zvcm0pIHtcbiAgICAgIGNvbnN0IHdwbGZGb3JtID0geFxuXG4gICAgICB0aGlzLmZvcm1zW3dwbGZGb3JtLmtleV0gPSB3cGxmRm9ybVxuXG4gICAgICByZXR1cm4gd3BsZkZvcm1cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0geFxuXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhdHRhY2ggV1BMRiB0byBlbGVtZW50JylcbiAgICB9XG5cbiAgICBjb25zdCB3cGxmRm9ybSA9IG5ldyBXUExGX0Zvcm0oZWxlbWVudClcbiAgICB0aGlzLmZvcm1zW3dwbGZGb3JtLmtleV0gPSB3cGxmRm9ybVxuXG4gICAgd3BsZkZvcm0uZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4JylcbiAgICB3cGxmRm9ybS5mb3JtLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuXG4gICAgcmV0dXJuIHdwbGZGb3JtXG4gIH1cblxuICBkZXRhY2god3BsZkZvcm06IFdQTEZfRm9ybSkge1xuICAgIHRoaXMuZm9ybXNbd3BsZkZvcm0ua2V5XS5yZW1vdmVTdWJtaXRIYW5kbGVyKClcbiAgICBkZWxldGUgdGhpcy5mb3Jtc1t3cGxmRm9ybS5rZXldXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJtaXNzaW9uIH0gZnJvbSAndHlwZXMnXG5cbmNvbnN0IGNvbmZpcm1EZWxldGUgPSAoc3VibWlzc2lvbjogU3VibWlzc2lvbikgPT4ge1xuICBpZiAoY29uZmlybSgnTnVrZSBzdWJtaXNzaW9uPycpKSB7XG4gICAgYWxlcnQoJ3dvdWxkIG51a2Ugc3VibWlzc2lvbiBidXQgaXQgaXMgbm90IGltcGxlbWVudGVkIHlldCcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlybURlbGV0ZVxuIiwiaW1wb3J0IEFib3J0Q29udHJvbGxlciBmcm9tICdhYm9ydC1jb250cm9sbGVyJ1xuaW1wb3J0IGdsb2JhbERhdGEgZnJvbSAnLi9nbG9iYWwtZGF0YSdcbmltcG9ydCB7IExpc3QsIFJhd0FwaVJlc3BvbnNlLCBBcGlSZXNwb25zZSwgR2VuZXJpY0FwaVJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMnXG5cbnR5cGUgQWJvcnRhYmxlUHJvbWlzZTxUPiA9IFByb21pc2U8VD4gJiB7IGFib3J0OiAoKSA9PiB2b2lkIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3Q8VD4oXG4gIHRhcmdldDogc3RyaW5nLFxuICBvcHRpb25zOiBQYXJ0aWFsPFJlcXVlc3RJbml0PiA9IHt9XG4pOiBBYm9ydGFibGVQcm9taXNlPFJhd0FwaVJlc3BvbnNlPFQ+PiB7XG4gIGxldCBjb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXIgfCBudWxsXG5cbiAgY29uc3QgYWJvcnQgPSAoKSA9PiB7XG4gICAgaWYgKGNvbnRyb2xsZXIgJiYgY29udHJvbGxlci5hYm9ydCkge1xuICAgICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJvbWlzZSA9IChhc3luYyAoKTogUHJvbWlzZTxSYXdBcGlSZXNwb25zZTxUPj4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbERhdGEuYmFja2VuZFVybCArIHRhcmdldCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICBjcmVkZW50aWFsczogZ2xvYmFsRGF0YS5mZXRjaENyZWRlbnRpYWxzIHx8ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IGdsb2JhbERhdGEucmVxdWVzdEhlYWRlcnMgfHwge30sXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9KVxuICAgICAgY29uc3QgeyBoZWFkZXJzLCBzdGF0dXMsIHN0YXR1c1RleHQsIHVybCwgb2sgfSA9IHJlc1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIGNvbnRyb2xsZXIgPSBudWxsXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dCxcbiAgICAgICAgdXJsLFxuICAgICAgICBvayxcbiAgICAgICAgZGF0YSxcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb250cm9sbGVyID0gbnVsbFxuICAgICAgLy8gSWYgeW91IHdhbnQgdG8gZG8gc29tZXRoaW5nIHdoZW4gdGhlIHJlcXVlc3QgaXMgYWJvcnRlZCwgdXNlXG4gICAgICAvLyBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAuLi4pXG4gICAgICBpZiAoZS5uYW1lICE9PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgdGhyb3cgZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVcbiAgICB9XG4gIH0pKClcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7IGFib3J0IH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbnN1cmVOdW0oeDogc3RyaW5nIHwgbnVtYmVyLCBmbG9hdDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmbG9hdCA/IHBhcnNlRmxvYXQoeCkgOiBwYXJzZUludCh4LCAxMClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW0oeDogc3RyaW5nKSB7XG4gIGlmICh4ICYmIHgubGVuZ3RoID4gMCAmJiB4Lm1hdGNoKC9eWzAtOV0qJC8pKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuIiwiaW1wb3J0IGlzRWxlbWVudGlzaCBmcm9tICcuL2lzLWVsZW1lbnRpc2gnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShcbiAgZWw6IEVsZW1lbnQsXG4gIGF0dHJpYnV0ZTogc3RyaW5nLFxuICBkZWZhdWx0VmFsOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuKSB7XG4gIGNvbnN0IHggPSBlbC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKVxuXG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWxcbiAgfVxuXG4gIHJldHVybiB4XG59XG4iLCJpbXBvcnQgeyBXUExGX0xvY2FsaXplRGF0YSB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKHdpbmRvdyk6IFdQTEZfTG9jYWxpemVEYXRhID0+XG4gIE9iamVjdC5hc3NpZ24oXG4gICAge1xuICAgICAgYmFja2VuZFVybDogbnVsbCxcbiAgICAgIGZldGNoQ3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICByZXF1ZXN0SGVhZGVyczoge1xuICAgICAgICAnWC1XUC1Ob25jZSc6IG51bGwsXG4gICAgICB9LFxuICAgICAgYXNzZXRzRGlyOiBudWxsLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXV0b2luaXQ6IHRydWUsXG4gICAgICAgIHBhcnNlTGlicmVmb3JtU2hvcnRjb2RlSW5SZXN0QXBpOiB0cnVlLFxuICAgICAgICBoYXNVbmZpbHRlcmVkSHRtbDogdHJ1ZSxcbiAgICAgICAgZGVidWdMZXZlbDogJ2FsbCcsXG4gICAgICB9LFxuICAgICAgcG9zdDogbnVsbCxcbiAgICAgIGkxOG46IHtcbiAgICAgICAgcHJvYmxlbXM6ICdQcm9ibGVtczogJyxcbiAgICAgICAgZHVwbGljYXRlRmllbGROYW1lOiAnRHVwbGljYXRlIGZpZWxkIG5hbWU6ICcsXG4gICAgICAgIGlsbGVnYWxOYW1lOlxuICAgICAgICAgIFwiWW91IGNhbid0IHVzZSB7bmFtZX0gYXMgYSBuYW1lLCBhcyBpdCBjb25mbGljdHMgd2l0aCBhIGNvcmUgZmllbGQgbmFtZS5cIixcbiAgICAgICAgZmllbGRBbHJlYWR5RXhpc3RzSW5EYjpcbiAgICAgICAgICAnRmllbGQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGRhdGFiYXNlIHdpdGggdGhlIHR5cGUge3R5cGV9LCB1c2UgYSBkaWZmZXJlbnQgbmFtZSBvciByZW1vdmUgdGhlIGZpZWxkIGZpcnN0LicsXG4gICAgICAgIGdyb3VwZWROYW1lc05vdFN1cHBvcnRlZFlldDpcbiAgICAgICAgICAnRmllbGQgbmFtZXMgbGlrZSB0aGVzZSBhcmUgbm90IHN1cHBvcnRlZCB5ZXQuIFRyeSB1c2luZyBjYW1lbENhc2luZyBvciB1bmRlcl9zY29yZXMgZm9yIGdyb3VwZWQgbmFtZXMgaW5zdGVhZC4nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdpbmRvdy53cGxmRGF0YSAvLyB3cF9sb2NhbGl6ZV9zY3JpcHRcbiAgKSkod2luZG93KVxuIiwiZnVuY3Rpb24gaXNFbGVtZW50aXNoKGU6IG9iamVjdCB8IG51bGwgfCB1bmRlZmluZWQpOiBlIGlzIEVsZW1lbnQge1xuICByZXR1cm4gZSA/ICdnZXRBdHRyaWJ1dGUnIGluIGUgJiYgJ3RhZ05hbWUnIGluIGUgOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc0VsZW1lbnRpc2hcbiIsImltcG9ydCBnbG9iYWxEYXRhIGZyb20gJy4vZ2xvYmFsLWRhdGEnXG5cbmNvbnN0IHsgZGVidWdMZXZlbCB9ID0gZ2xvYmFsRGF0YS5zZXR0aW5nc1xuXG5jb25zdCBjb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwgeyBsb2coKSB7fSwgZXJyb3IoKSB7fSB9IC8vIG5vb3AgZmFsbGJhY2tcbmNvbnN0IG5vdGljZSA9IChtZXNzYWdlOiBzdHJpbmcsIC4uLnBhcmFtczogYW55W10pID0+XG4gIGRlYnVnTGV2ZWwgPT09ICdhbGwnICYmIGNvbnNvbGUubG9nKGBXUExGOiAke21lc3NhZ2V9YCwgcGFyYW1zKVxuY29uc3QgZXJyb3IgPSAobWVzc2FnZTogc3RyaW5nLCAuLi5wYXJhbXM6IGFueVtdKSA9PlxuICBkZWJ1Z0xldmVsICE9PSAnbm9uZScgJiYgY29uc29sZS5lcnJvcihgV1BMRiBlcnJvcjogJHttZXNzYWdlfWAsIHBhcmFtcylcblxuZXhwb3J0IGRlZmF1bHQge1xuICBub3RpY2UsXG4gIGVycm9yLFxufVxuIiwiLyoqXG4gKiBUcnlpbmcgdG8gcmVhZCB0aGUgRE9NIGltbWVkaWF0ZWx5IGFmdGVyIHNldHRpbmcgaXQgZG9lcyBub3Qgd29yay4gVHJ5aW5nIG9uIG5leHQgdGlja1xuICogZG9lcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHdhaXRGb3JOZXh0VGljayA9ICgpOiBQcm9taXNlPG51bWJlcj4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSkpXG5cbmV4cG9ydCBjb25zdCB3YWl0ID0gKG1zID0gNTAwKTogUHJvbWlzZTxudW1iZXI+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN1Ym1pc3Npb24gfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBlbnN1cmVOdW0sIHsgaXNOdW0gfSBmcm9tICcuLi9saWIvZW5zdXJlLW51bSdcbmltcG9ydCBnbG9iYWxEYXRhIGZyb20gJy4uL2xpYi9nbG9iYWwtZGF0YSdcbmltcG9ydCBjb25maXJtRGVsZXRlIGZyb20gJy4uL2xpYi9jb25maXJtLWRlbGV0ZSdcblxuZnVuY3Rpb24gVXBsb2FkTGluayh7IGhyZWYsIHRleHQgfTogeyBocmVmOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KSB7XG4gIGlmIChpc051bShocmVmKSkge1xuICAgIC8vIEF0dGFjaG1lbnRzIGFyZSBzdG9yZWQgYXMgbnVtYmVycy4gVGhlaXIgVVJMcyBhcmUgZW51bWVyYWJsZS5cbiAgICBjb25zdCBpZCA9IGVuc3VyZU51bShocmVmKVxuXG4gICAgaHJlZiA9IGdsb2JhbERhdGEuYWRtaW5VcmwgKyBgdXBsb2FkLnBocD9pdGVtPSR7aWR9YFxuICAgIHRleHQgPSBnbG9iYWxEYXRhLmkxOG4uYXR0YWNobWVudCArIGAgJHtpZH1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YSBocmVmPXtocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pc3Npb25Sb3coe1xuICBzdWJtaXNzaW9uLFxuICBleGFtaW5lLFxuICBjaGVja2VkLFxuICBoYW5kbGVDaGFuZ2UsXG4gIGhhbmRsZUNsaWNrLFxufToge1xuICBzdWJtaXNzaW9uOiBTdWJtaXNzaW9uXG4gIGV4YW1pbmU6IChzdWI6IFN1Ym1pc3Npb24pID0+IHZvaWRcbiAgY2hlY2tlZDogYm9vbGVhblxuICBoYW5kbGVDaGFuZ2U6IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxuICBoYW5kbGVDbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTElucHV0RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWRcbn0pIHtcbiAgY29uc3QgeyBJRCwgdXVpZCwgZW50cmllcywgZm9ybUZpZWxkcywgdGl0bGUsIGNyZWF0ZWRBdCB9ID0gc3VibWlzc2lvblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cGxmLXN1Ym1pc3Npb25MaXN0X19zdWJtaXNzaW9uXCI+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwid3BsZi1zdWJtaXNzaW9uTGlzdF9fc3VibWlzc2lvbl9fc2VsZWN0XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGRhdGEta2V5PXtzdWJtaXNzaW9uLnV1aWR9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPlRpdGxlPC9zdHJvbmc+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICh3aW5kb3cubG9jYXRpb24uc2VhcmNoID8gYCR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH0mYCA6ICc/JykgK1xuICAgICAgICAgICAgYCZzdWJtaXNzaW9uVXVpZD0ke3V1aWR9YFxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsaWNrPXsoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBleGFtaW5lKHN1Ym1pc3Npb24pXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHJvbmc+VGltZTwvc3Ryb25nPlxuXG4gICAgICAgIDx0aW1lIGRhdGVUaW1lPXtjcmVhdGVkQXR9PntuZXcgRGF0ZShjcmVhdGVkQXQpLnRvTG9jYWxlU3RyaW5nKCl9PC90aW1lPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXNtYWxsXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25maXJtRGVsZXRlKHN1Ym1pc3Npb24pfVxuICAgICAgICA+XG4gICAgICAgICAge2dsb2JhbERhdGEuaTE4bi5kZWxldGV9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERldGFpbGVkU3VibWlzc2lvbih7XG4gIHN1Ym1pc3Npb24sXG59OiB7XG4gIHN1Ym1pc3Npb246IFN1Ym1pc3Npb24gfCBudWxsXG59KSB7XG4gIGlmICghc3VibWlzc2lvbikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCB7XG4gICAgSUQsXG4gICAgdXVpZCxcbiAgICBjcmVhdGVkQXQsXG4gICAgbW9kaWZpZWRBdCxcbiAgICBlbnRyaWVzLFxuICAgIGZvcm1GaWVsZHMsXG4gICAgdGl0bGUsXG4gICAgcmVmZXJyZXIsXG4gICAgaGlzdG9yeUlkLFxuICAgIG1ldGEsXG4gIH0gPSBzdWJtaXNzaW9uXG5cbiAgY29uc3Qgb3RoZXJDb2x1bW5zID0ge1xuICAgIElELFxuICAgIFVVSUQ6IHV1aWQsXG4gICAgaGlzdG9yeUlkLFxuICAgIGNyZWF0ZWRBdCxcbiAgICBtb2RpZmllZEF0LFxuICAgIC4uLm1ldGEsXG4gICAgLy8gbWV0YSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwid3BsZi1mb3JtU3VibWlzc2lvblwiIGRhdGEtdXVpZD17dXVpZH0+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG5cbiAgICAgIDxoMz5FbnRyaWVzPC9oMz5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtPYmplY3QuZW50cmllcyhlbnRyaWVzKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1GaWVsZCA9IGZvcm1GaWVsZHNbbmFtZV1cblxuICAgICAgICAgICAgaWYgKCFmb3JtRmllbGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgcmVxdWlyZWQsIG11bHRpcGxlIH0gPSBmb3JtRmllbGRcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybUZpZWxkLCB2YWx1ZSlcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2ZpbGUnOiB7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBmaWxlcyA9IHZhbHVlLnNwbGl0KCcsICcpXG5cbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gZmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZExpbmsga2V5PXtmaWxlfSBocmVmPXtmaWxlfSB0ZXh0PXtmaWxlfSAvPlxuICAgICAgICAgICAgICAgICAgKSlcblxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSA8ZGl2Pnt2YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IHZhbHVlXG5cbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gPFVwbG9hZExpbmsga2V5PXtmaWxlfSB0ZXh0PXtmaWxlfSBocmVmPXtmaWxlfSAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAvLyA/Pz9cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gZ2xvYmFsRGF0YS5pMThuLmVtcHR5RmllbGRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICAgIDx0aD57bmFtZX08L3RoPlxuXG4gICAgICAgICAgICAgICAgPHRkPnt2YWx1ZX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgICAgPGgzPlJlZmVycmVyPC9oMz5cblxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKHJlZmVycmVyKS5tYXAoKFtrLCB2XSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17a30+XG4gICAgICAgICAgICAgICAgPHRoPntrfTwvdGg+XG5cbiAgICAgICAgICAgICAgICA8dGQ+e3Z9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICAgIDxoMz5NZXRhPC9oMz5cblxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKG90aGVyQ29sdW1ucykubWFwKChbaywgdl0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2t9PlxuICAgICAgICAgICAgICAgIDx0aD57a308L3RoPlxuXG4gICAgICAgICAgICAgICAgPHRkPnt2fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL2xpYi9jcmVhdGUtcmVxdWVzdCdcblxuaW1wb3J0IHsgVmFyaWFibGVTaXplTGlzdCBhcyBMaXN0IH0gZnJvbSAncmVhY3Qtd2luZG93J1xuaW1wb3J0IEluZmluaXRlTG9hZGVyIGZyb20gJ3JlYWN0LXdpbmRvdy1pbmZpbml0ZS1sb2FkZXInXG5pbXBvcnQge1xuICBBcGlFcnJvcixcbiAgLy8gQXBpUmVzcG9uc2UsXG4gIFN1Ym1pc3Npb24sXG59IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgbG9nIGZyb20gJy4uL2xpYi9sb2cnXG5pbXBvcnQgZW5zdXJlTnVtIGZyb20gJy4uL2xpYi9lbnN1cmUtbnVtJ1xuaW1wb3J0IGdsb2JhbERhdGEgZnJvbSAnLi4vbGliL2dsb2JhbC1kYXRhJ1xuXG5pbXBvcnQgU3VibWlzc2lvblJvdywgeyBEZXRhaWxlZFN1Ym1pc3Npb24gfSBmcm9tICcuL1N1Ym1pc3Npb24nXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXG5pbXBvcnQgY29uZmlybURlbGV0ZSBmcm9tICcuLi9saWIvY29uZmlybS1kZWxldGUnXG5cbk1vZGFsLnNldEFwcEVsZW1lbnQoJy53cGxmLXN1Ym1pc3Npb25MaXN0JylcblxuaW50ZXJmYWNlIFN1Ym1pc3Npb25MaXN0U3RhdGUge1xuICBzdWJtaXNzaW9uczogU3VibWlzc2lvbltdXG4gIG1vcmVBdmFpbGFibGU6IGJvb2xlYW5cbiAgaXNMb2FkaW5nOiBib29sZWFuXG4gIHBhZ2U6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJtaXNzaW9uTGlzdCh7XG4gIGZvcm1JZCxcbn06IHtcbiAgZm9ybUlkOiBudW1iZXIgfCBzdHJpbmdcbn0pIHtcbiAgY29uc3QgW3NlbGVjdGVkSWRzLCBzZXRTZWxlY3RlZElkc10gPSBSZWFjdC51c2VTdGF0ZTxTZXQ8c3RyaW5nPj4oXG4gICAgKCkgPT4gbmV3IFNldCgpXG4gIClcbiAgY29uc3QgW1xuICAgIHsgc3VibWlzc2lvbnMsIG1vcmVBdmFpbGFibGUsIGlzTG9hZGluZywgcGFnZSB9LFxuICAgIHNldFN0YXRlLFxuICBdID0gUmVhY3QudXNlU3RhdGU8U3VibWlzc2lvbkxpc3RTdGF0ZT4oe1xuICAgIHN1Ym1pc3Npb25zOiBbXSxcbiAgICBtb3JlQXZhaWxhYmxlOiB0cnVlLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgcGFnZTogMCxcbiAgfSlcbiAgY29uc3QgW3sgb3Blbiwgc3VibWlzc2lvbjogbW9kYWxTdWJtaXNzaW9uIH0sIHNldE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlPHtcbiAgICBvcGVuOiBib29sZWFuXG4gICAgc3VibWlzc2lvbjogU3VibWlzc2lvbiB8IG51bGxcbiAgfT4oe1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHN1Ym1pc3Npb246IG51bGwsXG4gIH0pXG5cbiAgLy8gUmVmcyBhcmUgYSBoYW5keSB3YXkgb2Ygc3RvcmluZyBkYXRhIHRoYXQgcGVyc2lzdHMgYmV0d2VlbiByZS1yZW5kZXJzOlxuICBjb25zdCBsYXN0Q2xpY2tSZWYgPSBSZWFjdC51c2VSZWY8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG4gIGNvbnN0IGxhc3RTaGlmdFJlZiA9IFJlYWN0LnVzZVJlZjxib29sZWFuPihmYWxzZSlcblxuICAvKipcbiAgICogSW52ZXJ0IHNlbGVjdGlvbiBvbiBjbGljaywgd2hpbGUgYWxsb3dpbmcgc2hpZnQgY2xpY2sgdG8gc2VsZWN0IG11bHRpcGxlIHN1Ym1pc3Npb25zIGF0IG9uY2VcbiAgICovXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5rZXkgYXMgc3RyaW5nIC8vIHdlJ3ZlIG1hZGUgc3VyZSB0aGF0IGVhY2ggZWxlbWVudCBoYXMgdGhpc1xuICAgIGNvbnN0IG5ld1NlbGVjdGVkSWRzID0gbmV3IFNldChzZWxlY3RlZElkcylcbiAgICBjb25zdCBuZXdTdGF0ZSA9IGUudGFyZ2V0LmNoZWNrZWRcbiAgICBjb25zdCBpZHNUb0NoYW5nZSA9IFtdXG4gICAgY29uc3QgbGFzdElkID0gbGFzdENsaWNrUmVmLmN1cnJlbnRcblxuICAgIGlmICghbGFzdFNoaWZ0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlkc1RvQ2hhbmdlLnB1c2goaWQpXG4gICAgfSBlbHNlIGlmIChsYXN0SWQgJiYgbGFzdElkICE9PSBpZCkge1xuICAgICAgbGV0IGZsYWc6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgICBmb3IgKHZhciBpdGVtIG9mIHN1Ym1pc3Npb25zKSB7XG4gICAgICAgIGxldCBuZXdGbGFnOiBib29sZWFuID0gZmxhZ1xuXG4gICAgICAgIGlmIChpdGVtLnV1aWQgPT09IGlkIHx8IGl0ZW0udXVpZCA9PT0gbGFzdElkKSB7XG4gICAgICAgICAgbmV3RmxhZyA9ICFmbGFnXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgIGlkc1RvQ2hhbmdlLnB1c2goaXRlbS51dWlkKVxuICAgICAgICB9XG5cbiAgICAgICAgZmxhZyA9IG5ld0ZsYWdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZHNUb0NoYW5nZS5mb3JFYWNoKChpZDogYW55KSA9PiB7XG4gICAgICBpZiAoIW5ld1N0YXRlKSB7XG4gICAgICAgIG5ld1NlbGVjdGVkSWRzLmRlbGV0ZShpZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1NlbGVjdGVkSWRzLmFkZChpZClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbGFzdENsaWNrUmVmLmN1cnJlbnQgPSBpZFxuICAgIHNldFNlbGVjdGVkSWRzKG5ld1NlbGVjdGVkSWRzKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgZS5zaGlmdEtleSB0byBhIGJvb2xlYW4gYW5kIHNhdmUgaXQgaW50byB0aGUgcmVmXG4gICAqL1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XG4gICAgbGFzdFNoaWZ0UmVmLmN1cnJlbnQgPSAhIWUuc2hpZnRLZXlcbiAgfVxuXG4gIGNvbnN0IGxvYWRNb3JlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHNldFN0YXRlKChzKSA9PiAoe1xuICAgICAgLi4ucyxcbiAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICB9KSlcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gbnVsbFxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdChcbiAgICAvLyAgIGAvc3VibWlzc2lvbnM/Zm9ybT0ke2Zvcm1JZH0mcGFnZT0ke3BhZ2V9YCxcbiAgICAvLyAgIHt9LFxuICAgIC8vICAgQXBpUmVzcG9uc2VLaW5kLkdldFN1Ym1pc3Npb25zXG4gICAgLy8gKVxuXG4gICAgLy8gZnVuY3Rpb24gaXNHZXRTdWJtaXNzaW9uc0FwaVJlc3BvbnNlKFxuICAgIC8vICAgeDogQXBpUmVzcG9uc2VcbiAgICAvLyApOiB4IGlzIEdldFN1Ym1pc3Npb25zQXBpUmVzcG9uc2Uge1xuICAgIC8vICAgcmV0dXJuIHgua2luZCA9PT0gQXBpUmVzcG9uc2VLaW5kLkdldFN1Ym1pc3Npb25zXG4gICAgLy8gfVxuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLyBpZiAoaXNHZXRTdWJtaXNzaW9uc0FwaVJlc3BvbnNlKHJlc3BvbnNlKSkge1xuICAgICAgLy8gY29uc3QgeyBvaywgaGVhZGVycywgZGF0YSwga2luZCB9ID0gcmVzcG9uc2VcbiAgICAgIC8vIGNvbnN0IHRvdGFsUGFnZXMgPSBoZWFkZXJzLmdldCgnWC1XUC1Ub3RhbHBhZ2VzJykgfHwgMVxuICAgICAgLy8gY29uc3QgY3VycmVudFBhZ2UgPSBlbnN1cmVOdW0ocGFnZSArIDEpXG4gICAgICAvLyBpZiAoJ2Vycm9yJyBpbiBkYXRhKSB7XG4gICAgICAvLyAgIGxvZy5lcnJvcihkYXRhLmVycm9yKVxuICAgICAgLy8gICBzZXRTdGF0ZSgocykgPT4gKHtcbiAgICAgIC8vICAgICBzdWJtaXNzaW9uczogW10sXG4gICAgICAvLyAgICAgcGFnZTogMCxcbiAgICAgIC8vICAgICBtb3JlQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgIC8vICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgLy8gICB9KSlcbiAgICAgIC8vIH0gZWxzZSBpZiAoIW9rKSB7XG4gICAgICAvLyAgIGxvZy5lcnJvcignUmVxdWVzdCB0byBnZXQgZm9ybSBzdWJtaXNzaW9ucyBmYWlsZWQnKVxuICAgICAgLy8gICBzZXRTdGF0ZSgocykgPT4gKHtcbiAgICAgIC8vICAgICBzdWJtaXNzaW9uczogW10sXG4gICAgICAvLyAgICAgcGFnZTogMCxcbiAgICAgIC8vICAgICBtb3JlQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgIC8vICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgLy8gICB9KSlcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIHNldFN0YXRlKChzKSA9PiAoe1xuICAgICAgLy8gICAgIHN1Ym1pc3Npb25zOiBbLi4ucy5zdWJtaXNzaW9ucywgLi4uZGF0YV0sXG4gICAgICAvLyAgICAgcGFnZTogY3VycmVudFBhZ2UsXG4gICAgICAvLyAgICAgbW9yZUF2YWlsYWJsZTogY3VycmVudFBhZ2UgPCBlbnN1cmVOdW0odG90YWxQYWdlcywgdHJ1ZSksXG4gICAgICAvLyAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIC8vICAgfSkpXG4gICAgICAvLyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoaXMgcnVucywgdGhlcmUncyBhIG1pc3Rha2UgaW4gdGhlIGNvZGUuIFRoZXJlIHNob3VsZG4ndCBiZSwgc2luY2UgaXQncyBUUy5cbiAgICAgIGxvZy5lcnJvcignU29tZXRoaW5nIGlzIHdyb25nIHdpdGggbG9hZE1vcmUnLCByZXNwb25zZSlcblxuICAgICAgc2V0U3RhdGUoKHMpID0+ICh7XG4gICAgICAgIC4uLnMsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRTdWJtaXNzaW9uU2l6ZSA9IChpdGVtSW5kZXg6IG51bWJlcikgPT4ge1xuICAgIC8vIGNvbnN0IHN1Ym1pc3Npb24gPSBzdWJtaXNzaW9uc1tpdGVtSW5kZXhdO1xuXG4gICAgcmV0dXJuIDUwXG4gIH1cblxuICBjb25zdCBvcGVuTW9kYWwgPSAoc3VibWlzc2lvbjogU3VibWlzc2lvbikgPT4ge1xuICAgIHNldE1vZGFsKHtcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBzdWJtaXNzaW9uLFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsKChkKSA9PiAoe1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBzdWJtaXNzaW9uOiBudWxsLFxuICAgIH0pKVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgc3VibWlzc2lvbnMgdG8gYmUgbG9hZGVkIHRoZW4gYWRkIGFuIGV4dHJhIHJvdyB0byBob2xkIGEgbG9hZGluZyBpbmRpY2F0b3IuXG4gIGNvbnN0IGl0ZW1Db3VudCA9IG1vcmVBdmFpbGFibGUgPyBzdWJtaXNzaW9ucy5sZW5ndGggKyAxIDogc3VibWlzc2lvbnMubGVuZ3RoXG4gIGNvbnN0IGxvYWRNb3JlSXRlbXMgPSBpc0xvYWRpbmcgPyBhc3luYyAoKSA9PiB7fSA6IGxvYWRNb3JlXG5cbiAgLy8gRXZlcnkgcm93IGlzIGxvYWRlZCBleGNlcHQgZm9yIG91ciBsb2FkaW5nIGluZGljYXRvciByb3cuXG4gIGNvbnN0IGlzSXRlbUxvYWRlZCA9IChpbmRleDogbnVtYmVyKSA9PlxuICAgICFtb3JlQXZhaWxhYmxlIHx8IGluZGV4IDwgc3VibWlzc2lvbnMubGVuZ3RoXG5cbiAgY29uc3QgSXRlbSA9ICh7IGluZGV4LCBzdHlsZSB9OiB7IGluZGV4OiBudW1iZXI7IHN0eWxlOiBhbnkgfSkgPT4ge1xuICAgIGxldCBjb250ZW50XG4gICAgaWYgKCFpc0l0ZW1Mb2FkZWQoaW5kZXgpKSB7XG4gICAgICBjb250ZW50ID0gZ2xvYmFsRGF0YS5pMThuLmxvYWRpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VibWlzc2lvbiA9IHN1Ym1pc3Npb25zW2luZGV4XVxuXG4gICAgICBpZiAoIXN1Ym1pc3Npb24pIHtcbiAgICAgICAgbG9nLmVycm9yKCdObyBzdWJtaXNzaW9uIGZvdW5kIGZvciBpbmRleCcsIGluZGV4LCBzdWJtaXNzaW9ucylcblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb250ZW50ID0gKFxuICAgICAgICA8U3VibWlzc2lvblJvd1xuICAgICAgICAgIHN1Ym1pc3Npb249e3N1Ym1pc3Npb259XG4gICAgICAgICAgZXhhbWluZT17b3Blbk1vZGFsfVxuICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkSWRzLmhhcyhzdWJtaXNzaW9uLnV1aWQpfVxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9Pntjb250ZW50fTwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SW5maW5pdGVMb2FkZXJcbiAgICAgICAgaXNJdGVtTG9hZGVkPXtpc0l0ZW1Mb2FkZWR9XG4gICAgICAgIGl0ZW1Db3VudD17aXRlbUNvdW50fVxuICAgICAgICBsb2FkTW9yZUl0ZW1zPXtsb2FkTW9yZUl0ZW1zfVxuICAgICAgPlxuICAgICAgICB7KHsgb25JdGVtc1JlbmRlcmVkLCByZWYgfSkgPT4gKFxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJMaXN0XCJcbiAgICAgICAgICAgIGhlaWdodD17aXRlbUNvdW50ID4gMCA/IDQwMCA6IDB9XG4gICAgICAgICAgICBpdGVtQ291bnQ9e2l0ZW1Db3VudH1cbiAgICAgICAgICAgIGl0ZW1TaXplPXtnZXRTdWJtaXNzaW9uU2l6ZX1cbiAgICAgICAgICAgIG9uSXRlbXNSZW5kZXJlZD17b25JdGVtc1JlbmRlcmVkfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICB3aWR0aD17JzEwMCUnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtJdGVtfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgKX1cbiAgICAgIDwvSW5maW5pdGVMb2FkZXI+XG5cbiAgICAgIHshc3VibWlzc2lvbnMubGVuZ3RoID8gPHA+e2dsb2JhbERhdGEuaTE4bi5ub1N1Ym1pc3Npb25zWWV0fTwvcD4gOiBudWxsfVxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXtvcGVufVxuICAgICAgICAvLyBvbkFmdGVyT3Blbj17YWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgICBjb250ZW50TGFiZWw9e2dsb2JhbERhdGEuaTE4bi5mb3JtU3VibWlzc2lvbn1cbiAgICAgICAgY2xhc3NOYW1lPVwid3BsZi1zdWJtaXNzaW9uTW9kYWxcIlxuICAgICAgICBvdmVybGF5Q2xhc3NOYW1lPVwid3BsZi1zdWJtaXNzaW9uTW9kYWxfX292ZXJsYXlcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwbGYtc3VibWlzc2lvbk1vZGFsX193cmFwcGVyXCI+XG4gICAgICAgICAge21vZGFsU3VibWlzc2lvbiA/IChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgPERldGFpbGVkU3VibWlzc2lvbiBzdWJtaXNzaW9uPXttb2RhbFN1Ym1pc3Npb259IC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cGxmLXN1Ym1pc3Npb25Nb2RhbF9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiB3cGxmLWRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbmZpcm1EZWxldGUobW9kYWxTdWJtaXNzaW9uKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Z2xvYmFsRGF0YS5pMThuLmRlbGV0ZX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VNb2RhbH0gY2xhc3NOYW1lPVwiYnV0dG9uIHdwbGYtY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgIHtnbG9iYWxEYXRhLmkxOG4uY2xvc2V9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFdQTEZfRm9ybSB9IGZyb20gJy4vY2xhc3Nlcy93cGxmLWZvcm0nXG5cbmV4cG9ydCBlbnVtIFN1Ym1pdFN0YXRlIHtcbiAgVW5zdWJtaXR0ZWQsXG4gIFN1Ym1pdHRpbmcsXG4gIFN1Y2Nlc3MsXG4gIEVycm9yLFxufVxuZXhwb3J0IHR5cGUgU3VibWl0SGFuZGxlciA9IChldmVudDogRXZlbnQpID0+IFByb21pc2U8dm9pZD5cbmV4cG9ydCB0eXBlIEZvcm1DYWxsYmFjayA9ICh3cGxmRm9ybTogV1BMRl9Gb3JtLCBwYXJhbXM6IExpc3Q8YW55PikgPT4gdm9pZFxuXG5leHBvcnQgaW50ZXJmYWNlIFdQTEZfVGFicyB7XG4gIHJlbWVtYmVyOiBib29sZWFuXG4gIGFjdGl2ZVRhYjogbnVsbCB8IHN0cmluZ1xuICByb290OiBIVE1MRWxlbWVudFxuICBuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0PFQ+IHtcbiAgW2s6IHN0cmluZ106IFRcbn1cblxuZXhwb3J0IGVudW0gUmVzcG9uc2VUeXBlIHtcbiAgR2V0Rm9ybSA9ICdnZXRGb3JtJyxcbiAgR2V0U3VibWlzc2lvbnMgPSAnZ2V0U3VibWlzc2lvbnMnLFxuICBSZW5kZXJGb3JtID0gJ3JlbmRlckZvcm0nLFxuICBTdWJtaXRGb3JtID0gJ3N1Ym1pdEZvcm0nLFxuICBBcGlFcnJvciA9ICdhcGlFcnJvcicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3QXBpUmVzcG9uc2U8RGF0YVR5cGU+IHtcbiAgaGVhZGVyczogSGVhZGVyc1xuICBzdGF0dXM6IG51bWJlclxuICBzdGF0dXNUZXh0OiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgb2s6IGJvb2xlYW5cbiAgZGF0YTogRGF0YVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBpUmVzcG9uc2U8VEtpbmQgZXh0ZW5kcyBSZXNwb25zZVR5cGUsIFREYXRhPiA9IFJhd0FwaVJlc3BvbnNlPFxuICBURGF0YVxuPiAmIHsga2luZDogVEtpbmQgfVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaUVycm9yIHtcbiAgZXJyb3I6IHN0cmluZ1xuICBkYXRhOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgR2V0Rm9ybVJlc3BvbnNlID0gQXBpRXJyb3IgfCBGb3JtXG5leHBvcnQgdHlwZSBHZXRGb3JtQXBpUmVzcG9uc2UgPSBBcGlSZXNwb25zZTxcbiAgUmVzcG9uc2VUeXBlLkdldEZvcm0sXG4gIEdldEZvcm1SZXNwb25zZVxuPlxuXG5leHBvcnQgdHlwZSBHZXRTdWJtaXNzaW9uc1Jlc3BvbnNlID0gQXBpRXJyb3IgfCBTdWJtaXNzaW9uW11cbmV4cG9ydCB0eXBlIEdldFN1Ym1pc3Npb25zQXBpUmVzcG9uc2UgPSBBcGlSZXNwb25zZTxcbiAgUmVzcG9uc2VUeXBlLkdldFN1Ym1pc3Npb25zLFxuICBHZXRTdWJtaXNzaW9uc1Jlc3BvbnNlXG4+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclJlc3BvbnNlID0gQXBpRXJyb3IgfCB7IGh0bWw6IHN0cmluZzsgZm9ybTogRm9ybSB9XG5cbmV4cG9ydCB0eXBlIFJlbmRlckZvcm1BcGlSZXNwb25zZSA9IEFwaVJlc3BvbnNlPFxuICBSZXNwb25zZVR5cGUuUmVuZGVyRm9ybSxcbiAgUmVuZGVyUmVzcG9uc2Vcbj5cbi8vIGV4cG9ydCB0eXBlIFJlbmRlckZvcm1BcGlSZXNwb25zZSA9IEFwaVJlc3BvbnNlPFxuLy8gICBSZXNwb25zZVR5cGUuUmVuZGVyRm9ybSxcbi8vICAgQXBpRXJyb3IgfCB7IGh0bWw6IHN0cmluZzsgZm9ybTogRm9ybSB9XG4vLyA+XG5cbmV4cG9ydCB0eXBlIFN1Ym1pc3Npb25SZXNwb25zZSA9XG4gIHwgQXBpRXJyb3JcbiAgfCB7XG4gICAgICBzdWJtaXNzaW9uOiBTdWJtaXNzaW9uXG4gICAgICBtZXNzYWdlOiBzdHJpbmdcbiAgICB9XG5cbmV4cG9ydCB0eXBlIFN1Ym1pdEZvcm1BcGlSZXNwb25zZSA9IEFwaVJlc3BvbnNlPFxuICBSZXNwb25zZVR5cGUuU3VibWl0Rm9ybSxcbiAgU3VibWlzc2lvblJlc3BvbnNlXG4+XG5cbmV4cG9ydCB0eXBlIEFwaUVycm9yQXBpUmVzcG9uc2UgPSBBcGlSZXNwb25zZTxSZXNwb25zZVR5cGUuQXBpRXJyb3IsIEFwaUVycm9yPlxuXG5leHBvcnQgdHlwZSBHZW5lcmljQXBpUmVzcG9uc2UgPVxuICB8IEdldEZvcm1BcGlSZXNwb25zZVxuICB8IEdldFN1Ym1pc3Npb25zQXBpUmVzcG9uc2VcbiAgfCBSZW5kZXJGb3JtQXBpUmVzcG9uc2VcbiAgfCBTdWJtaXRGb3JtQXBpUmVzcG9uc2VcbiAgfCBBcGlFcnJvckFwaVJlc3BvbnNlXG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybSB7XG4gIElEOiBudW1iZXJcbiAgYWRkVG9NZWRpYUxpYnJhcnk6IGJvb2xlYW5cbiAgYWRkaXRpb25hbEZpZWxkczogc3RyaW5nW11cbiAgY29udGVudDogc3RyaW5nXG4gIGZpZWxkczogRmllbGRbXVxuICBoaXN0b3J5RmllbGRzOiBMaXN0PEZpZWxkW10+XG4gIHBvc3RDb250YWluc0ZpbGVJbnB1dHM6IGJvb2xlYW5cbiAgdGl0bGU6IHN0cmluZ1xuICB2ZXJzaW9uQ3JlYXRlZEF0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdWJtaXNzaW9uIHtcbiAgSUQ6IG51bWJlclxuICB0aXRsZTogc3RyaW5nXG4gIHV1aWQ6IHN0cmluZ1xuICByZWZlcnJlcjogTGlzdDxhbnk+XG4gIGhpc3RvcnlJZDogbnVtYmVyXG4gIGNyZWF0ZWRBdDogc3RyaW5nXG4gIG1vZGlmaWVkQXQ6IHN0cmluZ1xuICBlbnRyaWVzOiBMaXN0PGFueT5cbiAgZm9ybUZpZWxkczogTGlzdDxGaWVsZD5cbiAgbWV0YTogTGlzdDxhbnk+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGQge1xuICBuYW1lOiBzdHJpbmdcbiAgdHlwZTogc3RyaW5nXG4gIHJlcXVpcmVkOiBib29sZWFuXG4gIG11bHRpcGxlOiBib29sZWFuXG4gIGF0dHJpYnV0ZXM6IExpc3Q8c3RyaW5nPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdQTEZfRWRpdG9yU3RhdGUge1xuICBoaXN0b3J5RmllbGRzOiBMaXN0PEZpZWxkPlxuICAvLyBmaWVsZHM6IEZpZWxkW11cbiAgZmllbGRzOiBMaXN0PEZpZWxkPlxuICBhZGRpdGlvbmFsRmllbGRzOiBzdHJpbmdbXVxuICBuZXdGaWVsZHM6IEZpZWxkW11cbiAgZGVsZXRlZEZpZWxkczogRmllbGRbXVxuICBhbGxvd1NhdmU6IGJvb2xlYW5cbiAgW2s6IHN0cmluZ106IGFueSAvLyBhbmQgYW55dGhpbmcgZWxzZSB5b3VyIGhlYXJ0IG1heSBkZXNpcmVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXUExGX0xvY2FsaXplRGF0YSB7XG4gIGJhY2tlbmRVcmw6IHN0cmluZ1xuICBhc3NldHNEaXI6IHN0cmluZ1xuICAvLyBmZXRjaENyZWRlbnRpYWxzOiBzdHJpbmdcbiAgZmV0Y2hDcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyB8ICdpbmNsdWRlJyB8ICdvbWl0J1xuICBpMThuOiBMaXN0PHN0cmluZz5cbiAgYWRtaW5Vcmw/OiBzdHJpbmdcbiAgbGFuZz86IHN0cmluZ1xuICBwb3N0PzogeyBJRDogc3RyaW5nOyBbazogc3RyaW5nXTogYW55IH0gLy8gV2Ugb25seSBjYXJlIGFib3V0IHRoZSBJRFxuICByZXF1ZXN0SGVhZGVyczoge1xuICAgICdYLVdQLU5vbmNlJzogc3RyaW5nXG4gICAgW2s6IHN0cmluZ106IGFueVxuICB9XG4gIGNvZGVNaXJyb3I6IGFueVxuICBzZXR0aW5nczoge1xuICAgIGF1dG9pbml0OiBib29sZWFuXG4gICAgZGVidWdMZXZlbDogc3RyaW5nXG4gICAgaGFzVW5maWx0ZXJlZEh0bWw6IGJvb2xlYW5cbiAgICBwYXJzZUxpYnJlZm9ybXNTaG9ydGNvZGVJblJlc3RBcGk6IGJvb2xlYW5cbiAgfVxufVxuXG53aW5kb3dbJ1JlYWN0J10gPSBSZWFjdFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8vIFJlYWN0OiBSZWFjdCAvLyBAdHlwZXMvcmVhY3QgaGFzIGl0IGhhbmRsZWQgYWxyZWFkeVxuICAgIC8vIFdQTEY6IFdQTEYgLy8gV2UncmUgbm90IGdvaW5nIHRvIHVzZSBvdXIgb3duIGxpYnJhcnkgZnJvbSB3aW5kb3dcblxuICAgIC8vIFRoaXMgY29tZXMgZnJvbSBXb3JkUHJlc3NcbiAgICB3cGxmRGF0YTogV1BMRl9Mb2NhbGl6ZURhdGFcblxuICAgIC8vIFNvbWUgV1AgZ2xvYmFscyB0aGF0IHdlIGRvbid0IGhhdmUgdHlwZXMgZm9yXG4gICAgalF1ZXJ5OiBhbnkgLy8gV1AgdXNlcyAxLjEyLjQsIHRoZXJlJ3Mgbm8gQHR5cGVzL2pxdWVyeUAxLjEyLjRcbiAgICAvLyBfOiBhbnksIC8vIEB0eXBlcy91bmRlcnNjb3JlQDEuOC4zXG4gICAgd3A6IGFueVxuICB9XG59XG4iLCJpbXBvcnQgV1BMRl9BZG1pbiBmcm9tICcuL2NsYXNzZXMvd3BsZi1hZG1pbidcbmltcG9ydCBXUExGIGZyb20gJy4vY2xhc3Nlcy93cGxmJ1xuXG5pbXBvcnQgJy4vdHlwZXMnXG5pbXBvcnQgJy4uL3N0eWxlcy93cGxmLWFkbWluLnNjc3MnXG5cbi8qKlxuICogVGhpcyBmaWxlIGlzIGJ1aWx0IGludG8gYW4gVU1EIGJ1bmRsZS4gVGhlIGRlZmF1bHQgZXhwb3J0IHdpbGxcbiAqIGJlIGV4cG9zZWQgdW5kZXIgd2luZG93LldQTEYsIGlmIHRoZSByZXN1bHRpbmcgZmlsZSBpcyBsb2FkZWQgdmlhXG4gKiA8c2NyaXB0PiB0YWcuXG4gKlxuICogVGhlIHJlc3VsdGluZyBmaWxlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgaW5zaWRlIC93cC1hZG1pbiBvbmx5LCBhbHRob3VnaCBpdCBpcyBhdmFpbGFibGUgYXMgYSBtb2R1bGUsIGRvIG5vdCB0cnkgdG8gaW1wb3J0IGl0IG91dHNpZGUuXG4gKlxuICogQXMgdGhpcyBtb2R1bGUgYXNzaWducyBpdHNlbGYgdG8gd2luZG93LldQTEYsIERPIE5PVCBsb2FkIHdwbGYtZnJvbnRlbmQuanMgYXQgdGhlIHNhbWUgdGltZSB0byBhdm9pZCBoYXZpbmcgYSB2ZXJ5IGJhZCBkYXkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG5ldyBXUExGX0FkbWluKG5ldyBXUExGKCkpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsIi8qZ2xvYmFscyBzZWxmLCB3aW5kb3cgKi9cblwidXNlIHN0cmljdFwiXG5cbi8qZXNsaW50LWRpc2FibGUgQG15c3RpY2F0ZWEvcHJldHRpZXIgKi9cbmNvbnN0IHsgQWJvcnRDb250cm9sbGVyLCBBYm9ydFNpZ25hbCB9ID1cbiAgICB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOlxuICAgIC8qIG90aGVyd2lzZSAqLyB1bmRlZmluZWRcbi8qZXNsaW50LWVuYWJsZSBAbXlzdGljYXRlYS9wcmV0dGllciAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFib3J0Q29udHJvbGxlclxubW9kdWxlLmV4cG9ydHMuQWJvcnRTaWduYWwgPSBBYm9ydFNpZ25hbFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IEFib3J0Q29udHJvbGxlclxuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQgJiZcblx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHQpO1xuXG5cdHZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuXHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0Y2FuVXNlV29ya2VyczogdHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcsXG5cblx0XHRjYW5Vc2VFdmVudExpc3RlbmVyczpcblx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0Y2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW5cblxuXHR9O1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkV4ZWN1dGlvbkVudmlyb25tZW50ID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdH1cblxufSgpKTtcbiIsImZ1bmN0aW9uIGFyZUlucHV0c0VxdWFsKG5ld0lucHV0cywgbGFzdElucHV0cykge1xuICAgIGlmIChuZXdJbnB1dHMubGVuZ3RoICE9PSBsYXN0SW5wdXRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChuZXdJbnB1dHNbaV0gIT09IGxhc3RJbnB1dHNbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbWVtb2l6ZU9uZShyZXN1bHRGbiwgaXNFcXVhbCkge1xuICAgIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHsgaXNFcXVhbCA9IGFyZUlucHV0c0VxdWFsOyB9XG4gICAgdmFyIGxhc3RUaGlzO1xuICAgIHZhciBsYXN0QXJncyA9IFtdO1xuICAgIHZhciBsYXN0UmVzdWx0O1xuICAgIHZhciBjYWxsZWRPbmNlID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgICAgIHZhciBuZXdBcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBuZXdBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxlZE9uY2UgJiYgbGFzdFRoaXMgPT09IHRoaXMgJiYgaXNFcXVhbChuZXdBcmdzLCBsYXN0QXJncykpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGxhc3RSZXN1bHQgPSByZXN1bHRGbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgY2FsbGVkT25jZSA9IHRydWU7XG4gICAgICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICAgICAgbGFzdEFyZ3MgPSBuZXdBcmdzO1xuICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplT25lO1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgLy8gVXNlIHRoZSBzZXRTdGF0ZSgpIHVwZGF0ZXIgdG8gZW5zdXJlIHN0YXRlIGlzbid0IHN0YWxlIGluIGNlcnRhaW4gZWRnZSBjYXNlcy5cbiAgZnVuY3Rpb24gdXBkYXRlcihwcmV2U3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQgPyBzdGF0ZSA6IG51bGw7XG4gIH1cbiAgLy8gQmluZGluZyBcInRoaXNcIiBpcyBpbXBvcnRhbnQgZm9yIHNoYWxsb3cgcmVuZGVyZXIgc3VwcG9ydC5cbiAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVyLmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHRyeSB7XG4gICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90ID0gdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZVxuICAgICk7XG4gIH0gZmluYWxseSB7XG4gICAgdGhpcy5wcm9wcyA9IHByZXZQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gcHJldlN0YXRlO1xuICB9XG59XG5cbi8vIFJlYWN0IG1heSB3YXJuIGFib3V0IGNXTS9jV1JQL2NXVSBtZXRob2RzIGJlaW5nIGRlcHJlY2F0ZWQuXG4vLyBBZGQgYSBmbGFnIHRvIHN1cHByZXNzIHRoZXNlIHdhcm5pbmdzIGZvciB0aGlzIHNwZWNpYWwgY2FzZS5cbmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsVXBkYXRlLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBwb2x5ZmlsbChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBwb2x5ZmlsbCBjbGFzcyBjb21wb25lbnRzJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICAvLyBJZiBuZXcgY29tcG9uZW50IEFQSXMgYXJlIGRlZmluZWQsIFwidW5zYWZlXCIgbGlmZWN5Y2xlcyB3b24ndCBiZSBjYWxsZWQuXG4gIC8vIEVycm9yIGlmIGFueSBvZiB0aGVzZSBsaWZlY3ljbGVzIGFyZSBwcmVzZW50LFxuICAvLyBCZWNhdXNlIHRoZXkgd291bGQgd29yayBkaWZmZXJlbnRseSBiZXR3ZWVuIG9sZGVyIGFuZCBuZXdlciAoMTYuMyspIHZlcnNpb25zIG9mIFJlYWN0LlxuICB2YXIgZm91bmRXaWxsTW91bnROYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsVXBkYXRlTmFtZSA9IG51bGw7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdjb21wb25lbnRXaWxsTW91bnQnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9XG4gIGlmIChcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbFxuICApIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZTtcbiAgICB2YXIgbmV3QXBpTmFtZSA9XG4gICAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKSdcbiAgICAgICAgOiAnZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSc7XG5cbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICdVbnNhZmUgbGVnYWN5IGxpZmVjeWNsZXMgd2lsbCBub3QgYmUgY2FsbGVkIGZvciBjb21wb25lbnRzIHVzaW5nIG5ldyBjb21wb25lbnQgQVBJcy5cXG5cXG4nICtcbiAgICAgICAgY29tcG9uZW50TmFtZSArXG4gICAgICAgICcgdXNlcyAnICtcbiAgICAgICAgbmV3QXBpTmFtZSArXG4gICAgICAgICcgYnV0IGFsc28gY29udGFpbnMgdGhlIGZvbGxvd2luZyBsZWdhY3kgbGlmZWN5Y2xlczonICtcbiAgICAgICAgKGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxNb3VudE5hbWUgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gJ1xcbiAgJyArIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWVcbiAgICAgICAgICA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbFVwZGF0ZU5hbWUgOiAnJykgK1xuICAgICAgICAnXFxuXFxuVGhlIGFib3ZlIGxpZmVjeWNsZXMgc2hvdWxkIGJlIHJlbW92ZWQuIExlYXJuIG1vcmUgYWJvdXQgdGhpcyB3YXJuaW5nIGhlcmU6XFxuJyArXG4gICAgICAgICdodHRwczovL2ZiLm1lL3JlYWN0LWFzeW5jLWNvbXBvbmVudC1saWZlY3ljbGUtaG9va3MnXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV00gYW5kIGNXUlAgdG8gaW52b2tlIHRoZSBuZXcgc3RhdGljIGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhlc2UgbGlmZWN5Y2xlcyBpZiBnRFNGUCBleGlzdHMuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBjb21wb25lbnRXaWxsTW91bnQ7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IGdldFNuYXBzaG90QmVmb3JlVXBkYXRlLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV1UgdG8gaW52b2tlIHRoZSBuZXcgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGF0IGxpZmVjeWNsZSBpZiBnU0JVIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBwb2x5ZmlsbCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpIGZvciBjb21wb25lbnRzIHRoYXQgZG8gbm90IGRlZmluZSBjb21wb25lbnREaWRVcGRhdGUoKSBvbiB0aGUgcHJvdG90eXBlJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGNvbXBvbmVudFdpbGxVcGRhdGU7XG5cbiAgICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbChcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZSxcbiAgICAgIG1heWJlU25hcHNob3RcbiAgICApIHtcbiAgICAgIC8vIDE2LjMrIHdpbGwgbm90IGV4ZWN1dGUgb3VyIHdpbGwtdXBkYXRlIG1ldGhvZDtcbiAgICAgIC8vIEl0IHdpbGwgcGFzcyBhIHNuYXBzaG90IHZhbHVlIHRvIGRpZC11cGRhdGUgdGhvdWdoLlxuICAgICAgLy8gT2xkZXIgdmVyc2lvbnMgd2lsbCByZXF1aXJlIG91ciBwb2x5ZmlsbGVkIHdpbGwtdXBkYXRlIHZhbHVlLlxuICAgICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYm90aCBjYXNlcywgYnV0IGNhbid0IGp1c3QgY2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiBcIm1heWJlU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZm9yIDw9IDE1LnggdmVyc2lvbnMgdGhpcyBtaWdodCBiZSBhIFwicHJldkNvbnRleHRcIiBvYmplY3QuXG4gICAgICAvLyBXZSBhbHNvIGNhbid0IGp1c3QgY2hlY2sgXCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBnZXQtc25hcHNob3QgbWlnaHQgcmV0dXJuIGEgZmFsc3kgdmFsdWUuXG4gICAgICAvLyBTbyBjaGVjayBmb3IgdGhlIGV4cGxpY2l0IF9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyBmbGFnIHRvIGRldGVybWluZSBiZWhhdmlvci5cbiAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnXG4gICAgICAgID8gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFxuICAgICAgICA6IG1heWJlU25hcHNob3Q7XG5cbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZS5jYWxsKHRoaXMsIHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB7IHBvbHlmaWxsIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYm9keU9wZW5DbGFzc05hbWUgPSBleHBvcnRzLnBvcnRhbENsYXNzTmFtZSA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9Nb2RhbFBvcnRhbCA9IHJlcXVpcmUoXCIuL01vZGFsUG9ydGFsXCIpO1xuXG52YXIgX01vZGFsUG9ydGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsUG9ydGFsKTtcblxudmFyIF9hcmlhQXBwSGlkZXIgPSByZXF1aXJlKFwiLi4vaGVscGVycy9hcmlhQXBwSGlkZXJcIik7XG5cbnZhciBhcmlhQXBwSGlkZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfYXJpYUFwcEhpZGVyKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zYWZlSFRNTEVsZW1lbnRcIik7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NhZmVIVE1MRWxlbWVudCk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwb3J0YWxDbGFzc05hbWUgPSBleHBvcnRzLnBvcnRhbENsYXNzTmFtZSA9IFwiUmVhY3RNb2RhbFBvcnRhbFwiO1xudmFyIGJvZHlPcGVuQ2xhc3NOYW1lID0gZXhwb3J0cy5ib2R5T3BlbkNsYXNzTmFtZSA9IFwiUmVhY3RNb2RhbF9fQm9keS0tb3BlblwiO1xuXG52YXIgaXNSZWFjdDE2ID0gX3JlYWN0RG9tMi5kZWZhdWx0LmNyZWF0ZVBvcnRhbCAhPT0gdW5kZWZpbmVkO1xuXG52YXIgZ2V0Q3JlYXRlUG9ydGFsID0gZnVuY3Rpb24gZ2V0Q3JlYXRlUG9ydGFsKCkge1xuICByZXR1cm4gaXNSZWFjdDE2ID8gX3JlYWN0RG9tMi5kZWZhdWx0LmNyZWF0ZVBvcnRhbCA6IF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQocGFyZW50U2VsZWN0b3IpIHtcbiAgcmV0dXJuIHBhcmVudFNlbGVjdG9yKCk7XG59XG5cbnZhciBNb2RhbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWwoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBNb2RhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMucmVtb3ZlUG9ydGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgIWlzUmVhY3QxNiAmJiBfcmVhY3REb20yLmRlZmF1bHQudW5tb3VudENvbXBvbmVudEF0Tm9kZShfdGhpcy5ub2RlKTtcbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KF90aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKF90aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogXCJwYXJlbnRTZWxlY3RvclwiIHByb3AgZGlkIG5vdCByZXR1cm5lZCBhbnkgRE9NICcgKyBcImVsZW1lbnQuIE1ha2Ugc3VyZSB0aGF0IHRoZSBwYXJlbnQgZWxlbWVudCBpcyB1bm1vdW50ZWQgdG8gXCIgKyBcImF2b2lkIGFueSBtZW1vcnkgbGVha3MuXCIpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLnBvcnRhbFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLnBvcnRhbCA9IHJlZjtcbiAgICB9LCBfdGhpcy5yZW5kZXJQb3J0YWwgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHZhciBjcmVhdGVQb3J0YWwgPSBnZXRDcmVhdGVQb3J0YWwoKTtcbiAgICAgIHZhciBwb3J0YWwgPSBjcmVhdGVQb3J0YWwoX3RoaXMsIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Nb2RhbFBvcnRhbDIuZGVmYXVsdCwgX2V4dGVuZHMoeyBkZWZhdWx0U3R5bGVzOiBNb2RhbC5kZWZhdWx0U3R5bGVzIH0sIHByb3BzKSksIF90aGlzLm5vZGUpO1xuICAgICAgX3RoaXMucG9ydGFsUmVmKHBvcnRhbCk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSkgcmV0dXJuO1xuXG4gICAgICBpZiAoIWlzUmVhY3QxNikge1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMucG9ydGFsQ2xhc3NOYW1lO1xuXG4gICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudCh0aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuXG4gICAgICAhaXNSZWFjdDE2ICYmIHRoaXMucmVuZGVyUG9ydGFsKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBwcmV2UGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudChwcmV2UHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgdmFyIG5leHRQYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHRoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIHsgcHJldlBhcmVudDogcHJldlBhcmVudCwgbmV4dFBhcmVudDogbmV4dFBhcmVudCB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgXywgc25hcHNob3QpIHtcbiAgICAgIGlmICghX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00pIHJldHVybjtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzT3BlbiA9IF9wcm9wcy5pc09wZW4sXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lID0gX3Byb3BzLnBvcnRhbENsYXNzTmFtZTtcblxuXG4gICAgICBpZiAocHJldlByb3BzLnBvcnRhbENsYXNzTmFtZSAhPT0gcG9ydGFsQ2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc05hbWUgPSBwb3J0YWxDbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2UGFyZW50ID0gc25hcHNob3QucHJldlBhcmVudCxcbiAgICAgICAgICBuZXh0UGFyZW50ID0gc25hcHNob3QubmV4dFBhcmVudDtcblxuICAgICAgaWYgKG5leHRQYXJlbnQgIT09IHByZXZQYXJlbnQpIHtcbiAgICAgICAgcHJldlBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICAgICAgICBuZXh0UGFyZW50LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFN0b3AgdW5uZWNlc3NhcnkgcmVuZGVycyBpZiBtb2RhbCBpcyByZW1haW5pbmcgY2xvc2VkXG4gICAgICBpZiAoIXByZXZQcm9wcy5pc09wZW4gJiYgIWlzT3BlbikgcmV0dXJuO1xuXG4gICAgICAhaXNSZWFjdDE2ICYmIHRoaXMucmVuZGVyUG9ydGFsKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICghX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00gfHwgIXRoaXMubm9kZSB8fCAhdGhpcy5wb3J0YWwpIHJldHVybjtcblxuICAgICAgdmFyIHN0YXRlID0gdGhpcy5wb3J0YWwuc3RhdGU7XG4gICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIHZhciBjbG9zZXNBdCA9IHN0YXRlLmlzT3BlbiAmJiB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TICYmIChzdGF0ZS5jbG9zZXNBdCB8fCBub3cgKyB0aGlzLnByb3BzLmNsb3NlVGltZW91dE1TKTtcblxuICAgICAgaWYgKGNsb3Nlc0F0KSB7XG4gICAgICAgIGlmICghc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgICB0aGlzLnBvcnRhbC5jbG9zZVdpdGhUaW1lb3V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMucmVtb3ZlUG9ydGFsLCBjbG9zZXNBdCAtIG5vdyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZVBvcnRhbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSB8fCAhaXNSZWFjdDE2KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMubm9kZSAmJiBpc1JlYWN0MTYpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNyZWF0ZVBvcnRhbCA9IGdldENyZWF0ZVBvcnRhbCgpO1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTW9kYWxQb3J0YWwyLmRlZmF1bHQsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLnBvcnRhbFJlZixcbiAgICAgICAgZGVmYXVsdFN0eWxlczogTW9kYWwuZGVmYXVsdFN0eWxlc1xuICAgICAgfSwgdGhpcy5wcm9wcykpLCB0aGlzLm5vZGUpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcInNldEFwcEVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QXBwRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBhcmlhQXBwSGlkZXIuc2V0RWxlbWVudChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuXG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGlzT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb250ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KSxcbiAgcG9ydGFsQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYm9keU9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBodG1sT3BlbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBiYXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFmdGVyT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBiZWZvcmVDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KV0pLFxuICBvdmVybGF5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGJhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJlZm9yZUNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pXSksXG4gIGFwcEVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuaW5zdGFuY2VPZihfc2FmZUhUTUxFbGVtZW50Mi5kZWZhdWx0KSxcbiAgb25BZnRlck9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25SZXF1ZXN0Q2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY2xvc2VUaW1lb3V0TVM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBhcmlhSGlkZUFwcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRGb2N1c0FmdGVyUmVuZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkUmV0dXJuRm9jdXNBZnRlckNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHBhcmVudFNlbGVjdG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGFyaWE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBkYXRhOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgcm9sZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbnRlbnRMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHNob3VsZENsb3NlT25Fc2M6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgb3ZlcmxheVJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjb250ZW50UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIHBvcnRhbENsYXNzTmFtZTogcG9ydGFsQ2xhc3NOYW1lLFxuICBib2R5T3BlbkNsYXNzTmFtZTogYm9keU9wZW5DbGFzc05hbWUsXG4gIHJvbGU6IFwiZGlhbG9nXCIsXG4gIGFyaWFIaWRlQXBwOiB0cnVlLFxuICBjbG9zZVRpbWVvdXRNUzogMCxcbiAgc2hvdWxkRm9jdXNBZnRlclJlbmRlcjogdHJ1ZSxcbiAgc2hvdWxkQ2xvc2VPbkVzYzogdHJ1ZSxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogdHJ1ZSxcbiAgc2hvdWxkUmV0dXJuRm9jdXNBZnRlckNsb3NlOiB0cnVlLFxuICBwYXJlbnRTZWxlY3RvcjogZnVuY3Rpb24gcGFyZW50U2VsZWN0b3IoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH1cbn07XG5Nb2RhbC5kZWZhdWx0U3R5bGVzID0ge1xuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSlcIlxuICB9LFxuICBjb250ZW50OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiNDBweFwiLFxuICAgIGxlZnQ6IFwiNDBweFwiLFxuICAgIHJpZ2h0OiBcIjQwcHhcIixcbiAgICBib3R0b206IFwiNDBweFwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICBwYWRkaW5nOiBcIjIwcHhcIlxuICB9XG59O1xuXG5cbigwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShNb2RhbCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGFsOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2ZvY3VzTWFuYWdlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2ZvY3VzTWFuYWdlclwiKTtcblxudmFyIGZvY3VzTWFuYWdlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9mb2N1c01hbmFnZXIpO1xuXG52YXIgX3Njb3BlVGFiID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc2NvcGVUYWJcIik7XG5cbnZhciBfc2NvcGVUYWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NvcGVUYWIpO1xuXG52YXIgX2FyaWFBcHBIaWRlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2FyaWFBcHBIaWRlclwiKTtcblxudmFyIGFyaWFBcHBIaWRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hcmlhQXBwSGlkZXIpO1xuXG52YXIgX2NsYXNzTGlzdCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2NsYXNzTGlzdFwiKTtcblxudmFyIGNsYXNzTGlzdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jbGFzc0xpc3QpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3NhZmVIVE1MRWxlbWVudFwiKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2FmZUhUTUxFbGVtZW50KTtcblxudmFyIF9wb3J0YWxPcGVuSW5zdGFuY2VzID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcG9ydGFsT3Blbkluc3RhbmNlc1wiKTtcblxudmFyIF9wb3J0YWxPcGVuSW5zdGFuY2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvcnRhbE9wZW5JbnN0YW5jZXMpO1xuXG5yZXF1aXJlKFwiLi4vaGVscGVycy9ib2R5VHJhcFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vLyBzbyB0aGF0IG91ciBDU1MgaXMgc3RhdGljYWxseSBhbmFseXphYmxlXG52YXIgQ0xBU1NfTkFNRVMgPSB7XG4gIG92ZXJsYXk6IFwiUmVhY3RNb2RhbF9fT3ZlcmxheVwiLFxuICBjb250ZW50OiBcIlJlYWN0TW9kYWxfX0NvbnRlbnRcIlxufTtcblxudmFyIFRBQl9LRVkgPSA5O1xudmFyIEVTQ19LRVkgPSAyNztcblxudmFyIGFyaWFIaWRkZW5JbnN0YW5jZXMgPSAwO1xuXG52YXIgTW9kYWxQb3J0YWwgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTW9kYWxQb3J0YWwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1vZGFsUG9ydGFsKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsUG9ydGFsKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNb2RhbFBvcnRhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsUG9ydGFsKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc2V0T3ZlcmxheVJlZiA9IGZ1bmN0aW9uIChvdmVybGF5KSB7XG4gICAgICBfdGhpcy5vdmVybGF5ID0gb3ZlcmxheTtcbiAgICAgIF90aGlzLnByb3BzLm92ZXJsYXlSZWYgJiYgX3RoaXMucHJvcHMub3ZlcmxheVJlZihvdmVybGF5KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0Q29udGVudFJlZiA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBfdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICAgIF90aGlzLnByb3BzLmNvbnRlbnRSZWYgJiYgX3RoaXMucHJvcHMuY29udGVudFJlZihjb250ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYWZ0ZXJDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFwcEVsZW1lbnQgPSBfdGhpcyRwcm9wcy5hcHBFbGVtZW50LFxuICAgICAgICAgIGFyaWFIaWRlQXBwID0gX3RoaXMkcHJvcHMuYXJpYUhpZGVBcHAsXG4gICAgICAgICAgaHRtbE9wZW5DbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5odG1sT3BlbkNsYXNzTmFtZSxcbiAgICAgICAgICBib2R5T3BlbkNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lO1xuXG4gICAgICAvLyBSZW1vdmUgY2xhc3Nlcy5cblxuICAgICAgYm9keU9wZW5DbGFzc05hbWUgJiYgY2xhc3NMaXN0LnJlbW92ZShkb2N1bWVudC5ib2R5LCBib2R5T3BlbkNsYXNzTmFtZSk7XG5cbiAgICAgIGh0bWxPcGVuQ2xhc3NOYW1lICYmIGNsYXNzTGlzdC5yZW1vdmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLCBodG1sT3BlbkNsYXNzTmFtZSk7XG5cbiAgICAgIC8vIFJlc2V0IGFyaWEtaGlkZGVuIGF0dHJpYnV0ZSBpZiBhbGwgbW9kYWxzIGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICBpZiAoYXJpYUhpZGVBcHAgJiYgYXJpYUhpZGRlbkluc3RhbmNlcyA+IDApIHtcbiAgICAgICAgYXJpYUhpZGRlbkluc3RhbmNlcyAtPSAxO1xuXG4gICAgICAgIGlmIChhcmlhSGlkZGVuSW5zdGFuY2VzID09PSAwKSB7XG4gICAgICAgICAgYXJpYUFwcEhpZGVyLnNob3coYXBwRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnNob3VsZEZvY3VzQWZ0ZXJSZW5kZXIpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLnNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZSkge1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5yZXR1cm5Gb2N1cygpO1xuICAgICAgICAgIGZvY3VzTWFuYWdlci50ZWFyZG93blNjb3BlZEZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLnBvcFdpdGhvdXRGb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkFmdGVyQ2xvc2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25BZnRlckNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIF9wb3J0YWxPcGVuSW5zdGFuY2VzMi5kZWZhdWx0LmRlcmVnaXN0ZXIoX3RoaXMpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuYmVmb3JlT3BlbigpO1xuICAgICAgaWYgKF90aGlzLnN0YXRlLmFmdGVyT3BlbiAmJiBfdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuY2xvc2VUaW1lcik7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgYmVmb3JlQ2xvc2U6IGZhbHNlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLnNob3VsZEZvY3VzQWZ0ZXJSZW5kZXIpIHtcbiAgICAgICAgICBmb2N1c01hbmFnZXIuc2V0dXBTY29wZWRGb2N1cyhfdGhpcy5ub2RlKTtcbiAgICAgICAgICBmb2N1c01hbmFnZXIubWFya0ZvckZvY3VzTGF0ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGFmdGVyT3BlbjogdHJ1ZSB9KTtcblxuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5pc09wZW4gJiYgX3RoaXMucHJvcHMub25BZnRlck9wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQWZ0ZXJPcGVuKHtcbiAgICAgICAgICAgICAgb3ZlcmxheUVsOiBfdGhpcy5vdmVybGF5LFxuICAgICAgICAgICAgICBjb250ZW50RWw6IF90aGlzLmNvbnRlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmNsb3NlVGltZW91dE1TID4gMCkge1xuICAgICAgICBfdGhpcy5jbG9zZVdpdGhUaW1lb3V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmZvY3VzQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5jb250ZW50ICYmICFfdGhpcy5jb250ZW50SGFzRm9jdXMoKSAmJiBfdGhpcy5jb250ZW50LmZvY3VzKCk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsb3NlV2l0aFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2xvc2VzQXQgPSBEYXRlLm5vdygpICsgX3RoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVM7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGJlZm9yZUNsb3NlOiB0cnVlLCBjbG9zZXNBdDogY2xvc2VzQXQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gc2V0VGltZW91dChfdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0LCBfdGhpcy5zdGF0ZS5jbG9zZXNBdCAtIERhdGUubm93KCkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJlZm9yZUNsb3NlOiBmYWxzZSxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgYWZ0ZXJPcGVuOiBmYWxzZSxcbiAgICAgICAgY2xvc2VzQXQ6IG51bGxcbiAgICAgIH0sIF90aGlzLmFmdGVyQ2xvc2UpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gVEFCX0tFWSkge1xuICAgICAgICAoMCwgX3Njb3BlVGFiMi5kZWZhdWx0KShfdGhpcy5jb250ZW50LCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uRXNjICYmIGV2ZW50LmtleUNvZGUgPT09IEVTQ19LRVkpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIF90aGlzLnJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU92ZXJsYXlPbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMuc2hvdWxkQ2xvc2UgPT09IG51bGwpIHtcbiAgICAgICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuc2hvdWxkQ2xvc2UgJiYgX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaykge1xuICAgICAgICBpZiAoX3RoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSkge1xuICAgICAgICAgIF90aGlzLnJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuZm9jdXNDb250ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQ29udGVudE9uTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU92ZXJsYXlPbk1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrICYmIGV2ZW50LnRhcmdldCA9PSBfdGhpcy5vdmVybGF5KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQ29udGVudE9uTW91c2VEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVxdWVzdENsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gX3RoaXMub3duZXJIYW5kbGVzQ2xvc2UoKSAmJiBfdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZShldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLm93bmVySGFuZGxlc0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlO1xuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGRCZUNsb3NlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhX3RoaXMuc3RhdGUuaXNPcGVuICYmICFfdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY29udGVudEhhc0ZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLmNvbnRlbnQgfHwgX3RoaXMuY29udGVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYnVpbGRDbGFzc05hbWUgPSBmdW5jdGlvbiAod2hpY2gsIGFkZGl0aW9uYWwpIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gKHR5cGVvZiBhZGRpdGlvbmFsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoYWRkaXRpb25hbCkpID09PSBcIm9iamVjdFwiID8gYWRkaXRpb25hbCA6IHtcbiAgICAgICAgYmFzZTogQ0xBU1NfTkFNRVNbd2hpY2hdLFxuICAgICAgICBhZnRlck9wZW46IENMQVNTX05BTUVTW3doaWNoXSArIFwiLS1hZnRlci1vcGVuXCIsXG4gICAgICAgIGJlZm9yZUNsb3NlOiBDTEFTU19OQU1FU1t3aGljaF0gKyBcIi0tYmVmb3JlLWNsb3NlXCJcbiAgICAgIH07XG4gICAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcy5iYXNlO1xuICAgICAgaWYgKF90aGlzLnN0YXRlLmFmdGVyT3Blbikge1xuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZXMuYWZ0ZXJPcGVuO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnN0YXRlLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArIFwiIFwiICsgY2xhc3NOYW1lcy5iZWZvcmVDbG9zZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgYWRkaXRpb25hbCA9PT0gXCJzdHJpbmdcIiAmJiBhZGRpdGlvbmFsID8gY2xhc3NOYW1lICsgXCIgXCIgKyBhZGRpdGlvbmFsIDogY2xhc3NOYW1lO1xuICAgIH07XG5cbiAgICBfdGhpcy5hdHRyaWJ1dGVzRnJvbU9iamVjdCA9IGZ1bmN0aW9uIChwcmVmaXgsIGl0ZW1zKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoaXRlbXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgIGFjY1twcmVmaXggKyBcIi1cIiArIG5hbWVdID0gaXRlbXNbbmFtZV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgYWZ0ZXJPcGVuOiBmYWxzZSxcbiAgICAgIGJlZm9yZUNsb3NlOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGRDbG9zZSA9IG51bGw7XG4gICAgX3RoaXMubW92ZUZyb21Db250ZW50VG9PdmVybGF5ID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kYWxQb3J0YWwsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMuYm9keU9wZW5DbGFzc05hbWUgIT09IHRoaXMucHJvcHMuYm9keU9wZW5DbGFzc05hbWUpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybignUmVhY3QtTW9kYWw6IFwiYm9keU9wZW5DbGFzc05hbWVcIiBwcm9wIGhhcyBiZWVuIG1vZGlmaWVkLiAnICsgXCJUaGlzIG1heSBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yIHdoZW4gbXVsdGlwbGUgbW9kYWxzIGFyZSBvcGVuLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldlByb3BzLmh0bWxPcGVuQ2xhc3NOYW1lICE9PSB0aGlzLnByb3BzLmh0bWxPcGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlYWN0LU1vZGFsOiBcImh0bWxPcGVuQ2xhc3NOYW1lXCIgcHJvcCBoYXMgYmVlbiBtb2RpZmllZC4gJyArIFwiVGhpcyBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvciB3aGVuIG11bHRpcGxlIG1vZGFscyBhcmUgb3Blbi5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmICFwcmV2UHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5pc09wZW4gJiYgcHJldlByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZvY3VzIG9ubHkgbmVlZHMgdG8gYmUgc2V0IG9uY2Ugd2hlbiB0aGUgbW9kYWwgaXMgYmVpbmcgb3BlbmVkXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG91bGRGb2N1c0FmdGVyUmVuZGVyICYmIHRoaXMuc3RhdGUuaXNPcGVuICYmICFwcmV2U3RhdGUuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuZm9jdXNDb250ZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJDbG9zZSgpO1xuICAgICAgfVxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VUaW1lcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJlZm9yZU9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmVmb3JlT3BlbigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFwcEVsZW1lbnQgPSBfcHJvcHMuYXBwRWxlbWVudCxcbiAgICAgICAgICBhcmlhSGlkZUFwcCA9IF9wcm9wcy5hcmlhSGlkZUFwcCxcbiAgICAgICAgICBodG1sT3BlbkNsYXNzTmFtZSA9IF9wcm9wcy5odG1sT3BlbkNsYXNzTmFtZSxcbiAgICAgICAgICBib2R5T3BlbkNsYXNzTmFtZSA9IF9wcm9wcy5ib2R5T3BlbkNsYXNzTmFtZTtcblxuICAgICAgLy8gQWRkIGNsYXNzZXMuXG5cbiAgICAgIGJvZHlPcGVuQ2xhc3NOYW1lICYmIGNsYXNzTGlzdC5hZGQoZG9jdW1lbnQuYm9keSwgYm9keU9wZW5DbGFzc05hbWUpO1xuXG4gICAgICBodG1sT3BlbkNsYXNzTmFtZSAmJiBjbGFzc0xpc3QuYWRkKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXSwgaHRtbE9wZW5DbGFzc05hbWUpO1xuXG4gICAgICBpZiAoYXJpYUhpZGVBcHApIHtcbiAgICAgICAgYXJpYUhpZGRlbkluc3RhbmNlcyArPSAxO1xuICAgICAgICBhcmlhQXBwSGlkZXIuaGlkZShhcHBFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgX3BvcnRhbE9wZW5JbnN0YW5jZXMyLmRlZmF1bHQucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gRG9uJ3Qgc3RlYWwgZm9jdXMgZnJvbSBpbm5lciBlbGVtZW50c1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpZCA9IF9wcm9wczIuaWQsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZSA9IF9wcm9wczIub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgICAgICBkZWZhdWx0U3R5bGVzID0gX3Byb3BzMi5kZWZhdWx0U3R5bGVzO1xuXG4gICAgICB2YXIgY29udGVudFN0eWxlcyA9IGNsYXNzTmFtZSA/IHt9IDogZGVmYXVsdFN0eWxlcy5jb250ZW50O1xuICAgICAgdmFyIG92ZXJsYXlTdHlsZXMgPSBvdmVybGF5Q2xhc3NOYW1lID8ge30gOiBkZWZhdWx0U3R5bGVzLm92ZXJsYXk7XG5cbiAgICAgIHJldHVybiB0aGlzLnNob3VsZEJlQ2xvc2VkKCkgPyBudWxsIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IHRoaXMuc2V0T3ZlcmxheVJlZixcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuYnVpbGRDbGFzc05hbWUoXCJvdmVybGF5XCIsIG92ZXJsYXlDbGFzc05hbWUpLFxuICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgb3ZlcmxheVN0eWxlcywgdGhpcy5wcm9wcy5zdHlsZS5vdmVybGF5KSxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZU92ZXJsYXlPbkNsaWNrLFxuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU92ZXJsYXlPbk1vdXNlRG93blxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHJlZjogdGhpcy5zZXRDb250ZW50UmVmLFxuICAgICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjb250ZW50U3R5bGVzLCB0aGlzLnByb3BzLnN0eWxlLmNvbnRlbnQpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmJ1aWxkQ2xhc3NOYW1lKFwiY29udGVudFwiLCBjbGFzc05hbWUpLFxuICAgICAgICAgICAgdGFiSW5kZXg6IFwiLTFcIixcbiAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQ29udGVudE9uTW91c2VEb3duLFxuICAgICAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlVXAsXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNvbnRlbnRPbkNsaWNrLFxuICAgICAgICAgICAgcm9sZTogdGhpcy5wcm9wcy5yb2xlLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuY29udGVudExhYmVsXG4gICAgICAgICAgfSwgdGhpcy5hdHRyaWJ1dGVzRnJvbU9iamVjdChcImFyaWFcIiwgdGhpcy5wcm9wcy5hcmlhIHx8IHt9KSwgdGhpcy5hdHRyaWJ1dGVzRnJvbU9iamVjdChcImRhdGFcIiwgdGhpcy5wcm9wcy5kYXRhIHx8IHt9KSwge1xuICAgICAgICAgICAgXCJkYXRhLXRlc3RpZFwiOiB0aGlzLnByb3BzLnRlc3RJZFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWxQb3J0YWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Nb2RhbFBvcnRhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7XG4gICAgb3ZlcmxheToge30sXG4gICAgY29udGVudDoge31cbiAgfSxcbiAgZGVmYXVsdFN0eWxlczoge31cbn07XG5Nb2RhbFBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIGlzT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIGRlZmF1bHRTdHlsZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgIG92ZXJsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH0pLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgY29udGVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgb3ZlcmxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfSksXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLFxuICBvdmVybGF5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSksXG4gIGJvZHlPcGVuQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaHRtbE9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhcmlhSGlkZUFwcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBhcHBFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lmluc3RhbmNlT2YoX3NhZmVIVE1MRWxlbWVudDIuZGVmYXVsdCksXG4gIG9uQWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQWZ0ZXJDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblJlcXVlc3RDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjbG9zZVRpbWVvdXRNUzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHNob3VsZEZvY3VzQWZ0ZXJSZW5kZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcm9sZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbnRlbnRMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFyaWE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBkYXRhOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgc2hvdWxkQ2xvc2VPbkVzYzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBvdmVybGF5UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNvbnRlbnRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0ZXN0SWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTW9kYWxQb3J0YWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hc3NlcnROb2RlTGlzdCA9IGFzc2VydE5vZGVMaXN0O1xuZXhwb3J0cy5zZXRFbGVtZW50ID0gc2V0RWxlbWVudDtcbmV4cG9ydHMudmFsaWRhdGVFbGVtZW50ID0gdmFsaWRhdGVFbGVtZW50O1xuZXhwb3J0cy5oaWRlID0gaGlkZTtcbmV4cG9ydHMuc2hvdyA9IHNob3c7XG5leHBvcnRzLmRvY3VtZW50Tm90UmVhZHlPclNTUlRlc3RpbmcgPSBkb2N1bWVudE5vdFJlYWR5T3JTU1JUZXN0aW5nO1xuZXhwb3J0cy5yZXNldEZvclRlc3RpbmcgPSByZXNldEZvclRlc3Rpbmc7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoXCJ3YXJuaW5nXCIpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50ID0gcmVxdWlyZShcIi4vc2FmZUhUTUxFbGVtZW50XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2xvYmFsRWxlbWVudCA9IG51bGw7XG5cbmZ1bmN0aW9uIGFzc2VydE5vZGVMaXN0KG5vZGVMaXN0LCBzZWxlY3Rvcikge1xuICBpZiAoIW5vZGVMaXN0IHx8ICFub2RlTGlzdC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZWFjdC1tb2RhbDogTm8gZWxlbWVudHMgd2VyZSBmb3VuZCBmb3Igc2VsZWN0b3IgXCIgKyBzZWxlY3RvciArIFwiLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIHVzZUVsZW1lbnQgPSBlbGVtZW50O1xuICBpZiAodHlwZW9mIHVzZUVsZW1lbnQgPT09IFwic3RyaW5nXCIgJiYgX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00pIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHVzZUVsZW1lbnQpO1xuICAgIGFzc2VydE5vZGVMaXN0KGVsLCB1c2VFbGVtZW50KTtcbiAgICB1c2VFbGVtZW50ID0gXCJsZW5ndGhcIiBpbiBlbCA/IGVsWzBdIDogZWw7XG4gIH1cbiAgZ2xvYmFsRWxlbWVudCA9IHVzZUVsZW1lbnQgfHwgZ2xvYmFsRWxlbWVudDtcbiAgcmV0dXJuIGdsb2JhbEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KSB7XG4gIGlmICghYXBwRWxlbWVudCAmJiAhZ2xvYmFsRWxlbWVudCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsIFtcInJlYWN0LW1vZGFsOiBBcHAgZWxlbWVudCBpcyBub3QgZGVmaW5lZC5cIiwgXCJQbGVhc2UgdXNlIGBNb2RhbC5zZXRBcHBFbGVtZW50KGVsKWAgb3Igc2V0IGBhcHBFbGVtZW50PXtlbH1gLlwiLCBcIlRoaXMgaXMgbmVlZGVkIHNvIHNjcmVlbiByZWFkZXJzIGRvbid0IHNlZSBtYWluIGNvbnRlbnRcIiwgXCJ3aGVuIG1vZGFsIGlzIG9wZW5lZC4gSXQgaXMgbm90IHJlY29tbWVuZGVkLCBidXQgeW91IGNhbiBvcHQtb3V0XCIsIFwiYnkgc2V0dGluZyBgYXJpYUhpZGVBcHA9e2ZhbHNlfWAuXCJdLmpvaW4oXCIgXCIpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBoaWRlKGFwcEVsZW1lbnQpIHtcbiAgaWYgKHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KSkge1xuICAgIChhcHBFbGVtZW50IHx8IGdsb2JhbEVsZW1lbnQpLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93KGFwcEVsZW1lbnQpIHtcbiAgaWYgKHZhbGlkYXRlRWxlbWVudChhcHBFbGVtZW50KSkge1xuICAgIChhcHBFbGVtZW50IHx8IGdsb2JhbEVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRvY3VtZW50Tm90UmVhZHlPclNTUlRlc3RpbmcoKSB7XG4gIGdsb2JhbEVsZW1lbnQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiByZXNldEZvclRlc3RpbmcoKSB7XG4gIGdsb2JhbEVsZW1lbnQgPSBudWxsO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3BvcnRhbE9wZW5JbnN0YW5jZXMgPSByZXF1aXJlKFwiLi9wb3J0YWxPcGVuSW5zdGFuY2VzXCIpO1xuXG52YXIgX3BvcnRhbE9wZW5JbnN0YW5jZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9ydGFsT3Blbkluc3RhbmNlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEJvZHkgZm9jdXMgdHJhcCBzZWUgSXNzdWUgIzc0MlxuXG52YXIgYmVmb3JlID0gdm9pZCAwLFxuICAgIGFmdGVyID0gdm9pZCAwLFxuICAgIGluc3RhbmNlcyA9IFtdO1xuXG5mdW5jdGlvbiBmb2N1c0NvbnRlbnQoKSB7XG4gIGlmIChpbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlJlYWN0LU1vZGFsOiBPcGVuIGluc3RhbmNlcyA+IDAgZXhwZWN0ZWRcIik7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpbnN0YW5jZXNbaW5zdGFuY2VzLmxlbmd0aCAtIDFdLmZvY3VzQ29udGVudCgpO1xufVxuXG5mdW5jdGlvbiBib2R5VHJhcChldmVudFR5cGUsIG9wZW5JbnN0YW5jZXMpIHtcbiAgaWYgKCFiZWZvcmUgfHwgIWFmdGVyKSB7XG4gICAgYmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiZWZvcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1yZWFjdC1tb2RhbC1ib2R5LXRyYXBcIiwgXCJcIik7XG4gICAgYmVmb3JlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGJlZm9yZS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgYmVmb3JlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICBiZWZvcmUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZvY3VzQ29udGVudCk7XG4gICAgYWZ0ZXIgPSBiZWZvcmUuY2xvbmVOb2RlKCk7XG4gICAgYWZ0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZvY3VzQ29udGVudCk7XG4gIH1cblxuICBpbnN0YW5jZXMgPSBvcGVuSW5zdGFuY2VzO1xuXG4gIGlmIChpbnN0YW5jZXMubGVuZ3RoID4gMCkge1xuICAgIC8vIEFkZCBmb2N1cyB0cmFwXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCAhPT0gYmVmb3JlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiZWZvcmUsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCAhPT0gYWZ0ZXIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWZ0ZXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBSZW1vdmUgZm9jdXMgdHJhcFxuICAgIGlmIChiZWZvcmUucGFyZW50RWxlbWVudCkge1xuICAgICAgYmVmb3JlLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYmVmb3JlKTtcbiAgICB9XG4gICAgaWYgKGFmdGVyLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIGFmdGVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYWZ0ZXIpO1xuICAgIH1cbiAgfVxufVxuXG5fcG9ydGFsT3Blbkluc3RhbmNlczIuZGVmYXVsdC5zdWJzY3JpYmUoYm9keVRyYXApOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kdW1wQ2xhc3NMaXN0cyA9IGR1bXBDbGFzc0xpc3RzO1xudmFyIGh0bWxDbGFzc0xpc3QgPSB7fTtcbnZhciBkb2NCb2R5Q2xhc3NMaXN0ID0ge307XG5cbmZ1bmN0aW9uIGR1bXBDbGFzc0xpc3RzKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0uY2xhc3NOYW1lO1xuICAgIHZhciBidWZmZXIgPSBcIlNob3cgdHJhY2tlZCBjbGFzc2VzOlxcblxcblwiO1xuXG4gICAgYnVmZmVyICs9IFwiPGh0bWwgLz4gKFwiICsgY2xhc3NlcyArIFwiKTpcXG5cIjtcbiAgICBmb3IgKHZhciB4IGluIGh0bWxDbGFzc0xpc3QpIHtcbiAgICAgIGJ1ZmZlciArPSBcIiAgXCIgKyB4ICsgXCIgXCIgKyBodG1sQ2xhc3NMaXN0W3hdICsgXCJcXG5cIjtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWU7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgIGJ1ZmZlciArPSBcIlxcblxcbmRvYy5ib2R5IChcIiArIGNsYXNzZXMgKyBcIik6XFxuXCI7XG4gICAgZm9yICh2YXIgX3ggaW4gZG9jQm9keUNsYXNzTGlzdCkge1xuICAgICAgYnVmZmVyICs9IFwiICBcIiArIF94ICsgXCIgXCIgKyBkb2NCb2R5Q2xhc3NMaXN0W194XSArIFwiXFxuXCI7XG4gICAgfVxuXG4gICAgYnVmZmVyICs9IFwiXFxuXCI7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKGJ1ZmZlcik7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFjayB0aGUgbnVtYmVyIG9mIHJlZmVyZW5jZSBvZiBhIGNsYXNzLlxuICogQHBhcmFtIHtvYmplY3R9IHBvbGwgVGhlIHBvbGwgdG8gcmVjZWl2ZSB0aGUgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3MgbmFtZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGluY3JlbWVudFJlZmVyZW5jZSA9IGZ1bmN0aW9uIGluY3JlbWVudFJlZmVyZW5jZShwb2xsLCBjbGFzc05hbWUpIHtcbiAgaWYgKCFwb2xsW2NsYXNzTmFtZV0pIHtcbiAgICBwb2xsW2NsYXNzTmFtZV0gPSAwO1xuICB9XG4gIHBvbGxbY2xhc3NOYW1lXSArPSAxO1xuICByZXR1cm4gY2xhc3NOYW1lO1xufTtcblxuLyoqXG4gKiBEcm9wIHRoZSByZWZlcmVuY2Ugb2YgYSBjbGFzcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwb2xsIFRoZSBwb2xsIHRvIHJlY2VpdmUgdGhlIHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzIG5hbWUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBkZWNyZW1lbnRSZWZlcmVuY2UgPSBmdW5jdGlvbiBkZWNyZW1lbnRSZWZlcmVuY2UocG9sbCwgY2xhc3NOYW1lKSB7XG4gIGlmIChwb2xsW2NsYXNzTmFtZV0pIHtcbiAgICBwb2xsW2NsYXNzTmFtZV0gLT0gMTtcbiAgfVxuICByZXR1cm4gY2xhc3NOYW1lO1xufTtcblxuLyoqXG4gKiBUcmFjayBhIGNsYXNzIGFuZCBhZGQgdG8gdGhlIGdpdmVuIGNsYXNzIGxpc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gY2xhc3NMaXN0UmVmIEEgY2xhc3MgbGlzdCBvZiBhbiBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IHBvbGwgICAgICAgICBUaGUgcG9sbCB0byBiZSB1c2VkLlxuICogQHBhcmFtIHtBcnJheX0gIGNsYXNzZXMgICAgICBUaGUgbGlzdCBvZiBjbGFzc2VzIHRvIGJlIHRyYWNrZWQuXG4gKi9cbnZhciB0cmFja0NsYXNzID0gZnVuY3Rpb24gdHJhY2tDbGFzcyhjbGFzc0xpc3RSZWYsIHBvbGwsIGNsYXNzZXMpIHtcbiAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpbmNyZW1lbnRSZWZlcmVuY2UocG9sbCwgY2xhc3NOYW1lKTtcbiAgICBjbGFzc0xpc3RSZWYuYWRkKGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBVbnRyYWNrIGEgY2xhc3MgYW5kIHJlbW92ZSBmcm9tIHRoZSBnaXZlbiBjbGFzcyBsaXN0IGlmIHRoZSByZWZlcmVuY2VcbiAqIHJlYWNoZXMgMC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjbGFzc0xpc3RSZWYgQSBjbGFzcyBsaXN0IG9mIGFuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gcG9sbCAgICAgICAgIFRoZSBwb2xsIHRvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge0FycmF5fSAgY2xhc3NlcyAgICAgIFRoZSBsaXN0IG9mIGNsYXNzZXMgdG8gYmUgdW50cmFja2VkLlxuICovXG52YXIgdW50cmFja0NsYXNzID0gZnVuY3Rpb24gdW50cmFja0NsYXNzKGNsYXNzTGlzdFJlZiwgcG9sbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGRlY3JlbWVudFJlZmVyZW5jZShwb2xsLCBjbGFzc05hbWUpO1xuICAgIHBvbGxbY2xhc3NOYW1lXSA9PT0gMCAmJiBjbGFzc0xpc3RSZWYucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQdWJsaWMgaW5mZXJmYWNlIHRvIGFkZCBjbGFzc2VzIHRvIHRoZSBkb2N1bWVudC5ib2R5LlxuICogQHBhcmFtIHtzdHJpbmd9IGJvZHlDbGFzcyBUaGUgY2xhc3Mgc3RyaW5nIHRvIGJlIGFkZGVkLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBtYXkgY29udGFpbiBtb3JlIHRoZW4gb25lIGNsYXNzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggJyAnIGFzIHNlcGFyYXRvci5cbiAqL1xudmFyIGFkZCA9IGV4cG9ydHMuYWRkID0gZnVuY3Rpb24gYWRkKGVsZW1lbnQsIGNsYXNzU3RyaW5nKSB7XG4gIHJldHVybiB0cmFja0NsYXNzKGVsZW1lbnQuY2xhc3NMaXN0LCBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJodG1sXCIgPyBodG1sQ2xhc3NMaXN0IDogZG9jQm9keUNsYXNzTGlzdCwgY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpKTtcbn07XG5cbi8qKlxuICogUHVibGljIGluZmVyZmFjZSB0byByZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBkb2N1bWVudC5ib2R5LlxuICogQHBhcmFtIHtzdHJpbmd9IGJvZHlDbGFzcyBUaGUgY2xhc3Mgc3RyaW5nIHRvIGJlIGFkZGVkLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBtYXkgY29udGFpbiBtb3JlIHRoZW4gb25lIGNsYXNzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggJyAnIGFzIHNlcGFyYXRvci5cbiAqL1xudmFyIHJlbW92ZSA9IGV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQsIGNsYXNzU3RyaW5nKSB7XG4gIHJldHVybiB1bnRyYWNrQ2xhc3MoZWxlbWVudC5jbGFzc0xpc3QsIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSBcImh0bWxcIiA/IGh0bWxDbGFzc0xpc3QgOiBkb2NCb2R5Q2xhc3NMaXN0LCBjbGFzc1N0cmluZy5zcGxpdChcIiBcIikpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaGFuZGxlQmx1ciA9IGhhbmRsZUJsdXI7XG5leHBvcnRzLmhhbmRsZUZvY3VzID0gaGFuZGxlRm9jdXM7XG5leHBvcnRzLm1hcmtGb3JGb2N1c0xhdGVyID0gbWFya0ZvckZvY3VzTGF0ZXI7XG5leHBvcnRzLnJldHVybkZvY3VzID0gcmV0dXJuRm9jdXM7XG5leHBvcnRzLnBvcFdpdGhvdXRGb2N1cyA9IHBvcFdpdGhvdXRGb2N1cztcbmV4cG9ydHMuc2V0dXBTY29wZWRGb2N1cyA9IHNldHVwU2NvcGVkRm9jdXM7XG5leHBvcnRzLnRlYXJkb3duU2NvcGVkRm9jdXMgPSB0ZWFyZG93blNjb3BlZEZvY3VzO1xuXG52YXIgX3RhYmJhYmxlID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdGFiYmFibGVcIik7XG5cbnZhciBfdGFiYmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGFiYmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZm9jdXNMYXRlckVsZW1lbnRzID0gW107XG52YXIgbW9kYWxFbGVtZW50ID0gbnVsbDtcbnZhciBuZWVkVG9Gb2N1cyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xuICBuZWVkVG9Gb2N1cyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvY3VzKCkge1xuICBpZiAobmVlZFRvRm9jdXMpIHtcbiAgICBuZWVkVG9Gb2N1cyA9IGZhbHNlO1xuICAgIGlmICghbW9kYWxFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5lZWQgdG8gc2VlIGhvdyBqUXVlcnkgc2hpbXMgZG9jdW1lbnQub24oJ2ZvY3VzaW4nKSBzbyB3ZSBkb24ndCBuZWVkIHRoZVxuICAgIC8vIHNldFRpbWVvdXQsIGZpcmVmb3ggZG9lc24ndCBzdXBwb3J0IGZvY3VzaW4sIGlmIGl0IGRpZCwgd2UgY291bGQgZm9jdXNcbiAgICAvLyB0aGUgZWxlbWVudCBvdXRzaWRlIG9mIGEgc2V0VGltZW91dC4gU2lkZS1lZmZlY3Qgb2YgdGhpcyBpbXBsZW1lbnRhdGlvblxuICAgIC8vIGlzIHRoYXQgdGhlIGRvY3VtZW50LmJvZHkgZ2V0cyBmb2N1cywgYW5kIHRoZW4gd2UgZm9jdXMgb3VyIGVsZW1lbnQgcmlnaHRcbiAgICAvLyBhZnRlciwgc2VlbXMgZmluZS5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb2RhbEVsZW1lbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGVsID0gKDAsIF90YWJiYWJsZTIuZGVmYXVsdCkobW9kYWxFbGVtZW50KVswXSB8fCBtb2RhbEVsZW1lbnQ7XG4gICAgICBlbC5mb2N1cygpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtGb3JGb2N1c0xhdGVyKCkge1xuICBmb2N1c0xhdGVyRWxlbWVudHMucHVzaChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuZnVuY3Rpb24gcmV0dXJuRm9jdXMoKSB7XG4gIHZhciB0b0ZvY3VzID0gbnVsbDtcbiAgdHJ5IHtcbiAgICBpZiAoZm9jdXNMYXRlckVsZW1lbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdG9Gb2N1cyA9IGZvY3VzTGF0ZXJFbGVtZW50cy5wb3AoKTtcbiAgICAgIHRvRm9jdXMuZm9jdXMoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKFtcIllvdSB0cmllZCB0byByZXR1cm4gZm9jdXMgdG9cIiwgdG9Gb2N1cywgXCJidXQgaXQgaXMgbm90IGluIHRoZSBET00gYW55bW9yZVwiXS5qb2luKFwiIFwiKSk7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5mdW5jdGlvbiBwb3BXaXRob3V0Rm9jdXMoKSB7XG4gIGZvY3VzTGF0ZXJFbGVtZW50cy5sZW5ndGggPiAwICYmIGZvY3VzTGF0ZXJFbGVtZW50cy5wb3AoKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBTY29wZWRGb2N1cyhlbGVtZW50KSB7XG4gIG1vZGFsRWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGhhbmRsZUJsdXIsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgaGFuZGxlRm9jdXMsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hdHRhY2hFdmVudChcIm9uQmx1clwiLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5hdHRhY2hFdmVudChcIm9uRm9jdXNcIiwgaGFuZGxlRm9jdXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRlYXJkb3duU2NvcGVkRm9jdXMoKSB7XG4gIG1vZGFsRWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBoYW5kbGVGb2N1cyk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmRldGFjaEV2ZW50KFwib25CbHVyXCIsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmRldGFjaEV2ZW50KFwib25Gb2N1c1wiLCBoYW5kbGVGb2N1cyk7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gVHJhY2tzIHBvcnRhbHMgdGhhdCBhcmUgb3BlbiBhbmQgZW1pdHMgZXZlbnRzIHRvIHN1YnNjcmliZXJzXG5cbnZhciBQb3J0YWxPcGVuSW5zdGFuY2VzID0gZnVuY3Rpb24gUG9ydGFsT3Blbkluc3RhbmNlcygpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9ydGFsT3Blbkluc3RhbmNlcyk7XG5cbiAgdGhpcy5yZWdpc3RlciA9IGZ1bmN0aW9uIChvcGVuSW5zdGFuY2UpIHtcbiAgICBpZiAoX3RoaXMub3Blbkluc3RhbmNlcy5pbmRleE9mKG9wZW5JbnN0YW5jZSkgIT09IC0xKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihcIlJlYWN0LU1vZGFsOiBDYW5ub3QgcmVnaXN0ZXIgbW9kYWwgaW5zdGFuY2UgdGhhdCdzIGFscmVhZHkgb3BlblwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3RoaXMub3Blbkluc3RhbmNlcy5wdXNoKG9wZW5JbnN0YW5jZSk7XG4gICAgX3RoaXMuZW1pdChcInJlZ2lzdGVyXCIpO1xuICB9O1xuXG4gIHRoaXMuZGVyZWdpc3RlciA9IGZ1bmN0aW9uIChvcGVuSW5zdGFuY2UpIHtcbiAgICB2YXIgaW5kZXggPSBfdGhpcy5vcGVuSW5zdGFuY2VzLmluZGV4T2Yob3Blbkluc3RhbmNlKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihcIlJlYWN0LU1vZGFsOiBVbmFibGUgdG8gZGVyZWdpc3RlciBcIiArIG9wZW5JbnN0YW5jZSArIFwiIGFzIFwiICsgXCJpdCB3YXMgbmV2ZXIgcmVnaXN0ZXJlZFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3RoaXMub3Blbkluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIF90aGlzLmVtaXQoXCJkZXJlZ2lzdGVyXCIpO1xuICB9O1xuXG4gIHRoaXMuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgX3RoaXMuc3Vic2NyaWJlcnMucHVzaChjYWxsYmFjayk7XG4gIH07XG5cbiAgdGhpcy5lbWl0ID0gZnVuY3Rpb24gKGV2ZW50VHlwZSkge1xuICAgIF90aGlzLnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgIHJldHVybiBzdWJzY3JpYmVyKGV2ZW50VHlwZSxcbiAgICAgIC8vIHNoYWxsb3cgY29weSB0byBhdm9pZCBhY2NpZGVudGFsIG11dGF0aW9uXG4gICAgICBfdGhpcy5vcGVuSW5zdGFuY2VzLnNsaWNlKCkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub3Blbkluc3RhbmNlcyA9IFtdO1xuICB0aGlzLnN1YnNjcmliZXJzID0gW107XG59O1xuXG52YXIgcG9ydGFsT3Blbkluc3RhbmNlcyA9IG5ldyBQb3J0YWxPcGVuSW5zdGFuY2VzKCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHBvcnRhbE9wZW5JbnN0YW5jZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYW5Vc2VET00gPSB1bmRlZmluZWQ7XG5cbnZhciBfZXhlbnYgPSByZXF1aXJlKFwiZXhlbnZcIik7XG5cbnZhciBfZXhlbnYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhlbnYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRUUgPSBfZXhlbnYyLmRlZmF1bHQ7XG5cbnZhciBTYWZlSFRNTEVsZW1lbnQgPSBFRS5jYW5Vc2VET00gPyB3aW5kb3cuSFRNTEVsZW1lbnQgOiB7fTtcblxudmFyIGNhblVzZURPTSA9IGV4cG9ydHMuY2FuVXNlRE9NID0gRUUuY2FuVXNlRE9NO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTYWZlSFRNTEVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzY29wZVRhYjtcblxudmFyIF90YWJiYWJsZSA9IHJlcXVpcmUoXCIuL3RhYmJhYmxlXCIpO1xuXG52YXIgX3RhYmJhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RhYmJhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc2NvcGVUYWIobm9kZSwgZXZlbnQpIHtcbiAgdmFyIHRhYmJhYmxlID0gKDAsIF90YWJiYWJsZTIuZGVmYXVsdCkobm9kZSk7XG5cbiAgaWYgKCF0YWJiYWJsZS5sZW5ndGgpIHtcbiAgICAvLyBEbyBub3RoaW5nLCBzaW5jZSB0aGVyZSBhcmUgbm8gZWxlbWVudHMgdGhhdCBjYW4gcmVjZWl2ZSBmb2N1cy5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0YXJnZXQgPSB2b2lkIDA7XG5cbiAgdmFyIHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gIHZhciBoZWFkID0gdGFiYmFibGVbMF07XG4gIHZhciB0YWlsID0gdGFiYmFibGVbdGFiYmFibGUubGVuZ3RoIC0gMV07XG5cbiAgLy8gcHJvY2VlZCB3aXRoIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvbiB0YWIuXG4gIC8vIEZvY3VzIG9uIGxhc3QgZWxlbWVudCBvbiBzaGlmdCArIHRhYi5cbiAgaWYgKG5vZGUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAoIXNoaWZ0S2V5KSByZXR1cm47XG4gICAgdGFyZ2V0ID0gdGFpbDtcbiAgfVxuXG4gIGlmICh0YWlsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICFzaGlmdEtleSkge1xuICAgIHRhcmdldCA9IGhlYWQ7XG4gIH1cblxuICBpZiAoaGVhZCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBzaGlmdEtleSkge1xuICAgIHRhcmdldCA9IHRhaWw7XG4gIH1cblxuICBpZiAodGFyZ2V0KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBTYWZhcmkgcmFkaW8gaXNzdWUuXG4gIC8vXG4gIC8vIFNhZmFyaSBkb2VzIG5vdCBtb3ZlIHRoZSBmb2N1cyB0byB0aGUgcmFkaW8gYnV0dG9uLFxuICAvLyBzbyB3ZSBuZWVkIHRvIGZvcmNlIGl0IHRvIHJlYWxseSB3YWxrIHRocm91Z2ggYWxsIGVsZW1lbnRzLlxuICAvL1xuICAvLyBUaGlzIGlzIHZlcnkgZXJyb3IgcHJvbmUsIHNpbmNlIHdlIGFyZSB0cnlpbmcgdG8gZ3Vlc3NcbiAgLy8gaWYgaXQgaXMgYSBzYWZhcmkgYnJvd3NlciBmcm9tIHRoZSBmaXJzdCBvY2N1cmVuY2UgYmV0d2VlblxuICAvLyBjaHJvbWUgb3Igc2FmYXJpLlxuICAvL1xuICAvLyBUaGUgY2hyb21lIHVzZXIgYWdlbnQgY29udGFpbnMgdGhlIGZpcnN0IG9jdXJyZW5jZVxuICAvLyBhcyB0aGUgJ2Nocm9tZS92ZXJzaW9uJyBhbmQgbGF0ZXIgdGhlICdzYWZhcmkvdmVyc2lvbicuXG4gIHZhciBjaGVja1NhZmFyaSA9IC8oXFxiQ2hyb21lXFxifFxcYlNhZmFyaVxcYilcXC8vLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIHZhciBpc1NhZmFyaURlc2t0b3AgPSBjaGVja1NhZmFyaSAhPSBudWxsICYmIGNoZWNrU2FmYXJpWzFdICE9IFwiQ2hyb21lXCIgJiYgL1xcYmlQb2RcXGJ8XFxiaVBhZFxcYi9nLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgPT0gbnVsbDtcblxuICAvLyBJZiB3ZSBhcmUgbm90IGluIHNhZmFyaSBkZXNrdG9wLCBsZXQgdGhlIGJyb3dzZXIgY29udHJvbFxuICAvLyB0aGUgZm9jdXNcbiAgaWYgKCFpc1NhZmFyaURlc2t0b3ApIHJldHVybjtcblxuICB2YXIgeCA9IHRhYmJhYmxlLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgaWYgKHggPiAtMSkge1xuICAgIHggKz0gc2hpZnRLZXkgPyAtMSA6IDE7XG4gIH1cblxuICB0YXJnZXQgPSB0YWJiYWJsZVt4XTtcblxuICAvLyBJZiB0aGUgdGFiYmFibGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdCxcbiAgLy8gZm9jdXMgaGVhZC90YWlsIGJhc2VkIG9uIHNoaWZ0S2V5XG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXJnZXQgPSBzaGlmdEtleSA/IHRhaWwgOiBoZWFkO1xuICAgIHRhcmdldC5mb2N1cygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgdGFyZ2V0LmZvY3VzKCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmluZFRhYmJhYmxlRGVzY2VuZGFudHM7XG4vKiFcbiAqIEFkYXB0ZWQgZnJvbSBqUXVlcnkgVUkgY29yZVxuICpcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vY2F0ZWdvcnkvdWktY29yZS9cbiAqL1xuXG52YXIgdGFiYmFibGVOb2RlID0gL2lucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0LztcblxuZnVuY3Rpb24gaGlkZXNDb250ZW50cyhlbGVtZW50KSB7XG4gIHZhciB6ZXJvU2l6ZSA9IGVsZW1lbnQub2Zmc2V0V2lkdGggPD0gMCAmJiBlbGVtZW50Lm9mZnNldEhlaWdodCA8PSAwO1xuXG4gIC8vIElmIHRoZSBub2RlIGlzIGVtcHR5LCB0aGlzIGlzIGdvb2QgZW5vdWdoXG4gIGlmICh6ZXJvU2l6ZSAmJiAhZWxlbWVudC5pbm5lckhUTUwpIHJldHVybiB0cnVlO1xuXG4gIC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIGNoZWNrIHNvbWUgc3R5bGVzXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICByZXR1cm4gemVyb1NpemUgPyBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwib3ZlcmZsb3dcIikgIT09IFwidmlzaWJsZVwiIHx8XG4gIC8vIGlmICdvdmVyZmxvdzogdmlzaWJsZScgc2V0LCBjaGVjayBpZiB0aGVyZSBpcyBhY3R1YWxseSBhbnkgb3ZlcmZsb3dcbiAgZWxlbWVudC5zY3JvbGxXaWR0aCA8PSAwICYmIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IDw9IDAgOiBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gdmlzaWJsZShlbGVtZW50KSB7XG4gIHZhciBwYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgd2hpbGUgKHBhcmVudEVsZW1lbnQpIHtcbiAgICBpZiAocGFyZW50RWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkgYnJlYWs7XG4gICAgaWYgKGhpZGVzQ29udGVudHMocGFyZW50RWxlbWVudCkpIHJldHVybiBmYWxzZTtcbiAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBmb2N1c2FibGUoZWxlbWVudCwgaXNUYWJJbmRleE5vdE5hTikge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHZhciByZXMgPSB0YWJiYWJsZU5vZGUudGVzdChub2RlTmFtZSkgJiYgIWVsZW1lbnQuZGlzYWJsZWQgfHwgKG5vZGVOYW1lID09PSBcImFcIiA/IGVsZW1lbnQuaHJlZiB8fCBpc1RhYkluZGV4Tm90TmFOIDogaXNUYWJJbmRleE5vdE5hTik7XG4gIHJldHVybiByZXMgJiYgdmlzaWJsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gdGFiYmFibGUoZWxlbWVudCkge1xuICB2YXIgdGFiSW5kZXggPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICBpZiAodGFiSW5kZXggPT09IG51bGwpIHRhYkluZGV4ID0gdW5kZWZpbmVkO1xuICB2YXIgaXNUYWJJbmRleE5hTiA9IGlzTmFOKHRhYkluZGV4KTtcbiAgcmV0dXJuIChpc1RhYkluZGV4TmFOIHx8IHRhYkluZGV4ID49IDApICYmIGZvY3VzYWJsZShlbGVtZW50LCAhaXNUYWJJbmRleE5hTik7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYWJiYWJsZURlc2NlbmRhbnRzKGVsZW1lbnQpIHtcbiAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSwgMCkuZmlsdGVyKHRhYmJhYmxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTW9kYWwgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL01vZGFsXCIpO1xuXG52YXIgX01vZGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vZGFsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX01vZGFsMi5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJpbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNSYW5nZVZpc2libGUoX3JlZikge1xuICB2YXIgbGFzdFJlbmRlcmVkU3RhcnRJbmRleCA9IF9yZWYubGFzdFJlbmRlcmVkU3RhcnRJbmRleCxcbiAgICAgIGxhc3RSZW5kZXJlZFN0b3BJbmRleCA9IF9yZWYubGFzdFJlbmRlcmVkU3RvcEluZGV4LFxuICAgICAgc3RhcnRJbmRleCA9IF9yZWYuc3RhcnRJbmRleCxcbiAgICAgIHN0b3BJbmRleCA9IF9yZWYuc3RvcEluZGV4O1xuXG4gIHJldHVybiAhKHN0YXJ0SW5kZXggPiBsYXN0UmVuZGVyZWRTdG9wSW5kZXggfHwgc3RvcEluZGV4IDwgbGFzdFJlbmRlcmVkU3RhcnRJbmRleCk7XG59XG5cbmZ1bmN0aW9uIHNjYW5Gb3JVbmxvYWRlZFJhbmdlcyhfcmVmKSB7XG4gIHZhciBpc0l0ZW1Mb2FkZWQgPSBfcmVmLmlzSXRlbUxvYWRlZCxcbiAgICAgIGl0ZW1Db3VudCA9IF9yZWYuaXRlbUNvdW50LFxuICAgICAgbWluaW11bUJhdGNoU2l6ZSA9IF9yZWYubWluaW11bUJhdGNoU2l6ZSxcbiAgICAgIHN0YXJ0SW5kZXggPSBfcmVmLnN0YXJ0SW5kZXgsXG4gICAgICBzdG9wSW5kZXggPSBfcmVmLnN0b3BJbmRleDtcblxuICB2YXIgdW5sb2FkZWRSYW5nZXMgPSBbXTtcblxuICB2YXIgcmFuZ2VTdGFydEluZGV4ID0gbnVsbDtcbiAgdmFyIHJhbmdlU3RvcEluZGV4ID0gbnVsbDtcblxuICBmb3IgKHZhciBfaW5kZXggPSBzdGFydEluZGV4OyBfaW5kZXggPD0gc3RvcEluZGV4OyBfaW5kZXgrKykge1xuICAgIHZhciBsb2FkZWQgPSBpc0l0ZW1Mb2FkZWQoX2luZGV4KTtcblxuICAgIGlmICghbG9hZGVkKSB7XG4gICAgICByYW5nZVN0b3BJbmRleCA9IF9pbmRleDtcbiAgICAgIGlmIChyYW5nZVN0YXJ0SW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gX2luZGV4O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmFuZ2VTdG9wSW5kZXggIT09IG51bGwpIHtcbiAgICAgIHVubG9hZGVkUmFuZ2VzLnB1c2goW3JhbmdlU3RhcnRJbmRleCwgcmFuZ2VTdG9wSW5kZXhdKTtcblxuICAgICAgcmFuZ2VTdGFydEluZGV4ID0gcmFuZ2VTdG9wSW5kZXggPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIDpyYW5nZVN0b3BJbmRleCBpcyBub3QgbnVsbCBpdCBtZWFucyB3ZSBoYXZlbid0IHJhbiBvdXQgb2YgdW5sb2FkZWQgcm93cy5cbiAgLy8gU2NhbiBmb3J3YXJkIHRvIHRyeSBmaWxsaW5nIG91ciA6bWluaW11bUJhdGNoU2l6ZS5cbiAgaWYgKHJhbmdlU3RvcEluZGV4ICE9PSBudWxsKSB7XG4gICAgdmFyIHBvdGVudGlhbFN0b3BJbmRleCA9IE1hdGgubWluKE1hdGgubWF4KHJhbmdlU3RvcEluZGV4LCByYW5nZVN0YXJ0SW5kZXggKyBtaW5pbXVtQmF0Y2hTaXplIC0gMSksIGl0ZW1Db3VudCAtIDEpO1xuXG4gICAgZm9yICh2YXIgX2luZGV4MiA9IHJhbmdlU3RvcEluZGV4ICsgMTsgX2luZGV4MiA8PSBwb3RlbnRpYWxTdG9wSW5kZXg7IF9pbmRleDIrKykge1xuICAgICAgaWYgKCFpc0l0ZW1Mb2FkZWQoX2luZGV4MikpIHtcbiAgICAgICAgcmFuZ2VTdG9wSW5kZXggPSBfaW5kZXgyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdW5sb2FkZWRSYW5nZXMucHVzaChbcmFuZ2VTdGFydEluZGV4LCByYW5nZVN0b3BJbmRleF0pO1xuICB9XG5cbiAgLy8gQ2hlY2sgdG8gc2VlIGlmIG91ciBmaXJzdCByYW5nZSBlbmRlZCBwcmVtYXR1cmVseS5cbiAgLy8gSW4gdGhpcyBjYXNlIHdlIHNob3VsZCBzY2FuIGJhY2t3YXJkcyB0byB0cnkgZmlsbGluZyBvdXIgOm1pbmltdW1CYXRjaFNpemUuXG4gIGlmICh1bmxvYWRlZFJhbmdlcy5sZW5ndGgpIHtcbiAgICB2YXIgZmlyc3RSYW5nZSA9IHVubG9hZGVkUmFuZ2VzWzBdO1xuXG4gICAgd2hpbGUgKGZpcnN0UmFuZ2VbMV0gLSBmaXJzdFJhbmdlWzBdICsgMSA8IG1pbmltdW1CYXRjaFNpemUgJiYgZmlyc3RSYW5nZVswXSA+IDApIHtcbiAgICAgIHZhciBfaW5kZXgzID0gZmlyc3RSYW5nZVswXSAtIDE7XG5cbiAgICAgIGlmICghaXNJdGVtTG9hZGVkKF9pbmRleDMpKSB7XG4gICAgICAgIGZpcnN0UmFuZ2VbMF0gPSBfaW5kZXgzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVubG9hZGVkUmFuZ2VzO1xufVxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIHNsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG5cbnZhciBJbmZpbml0ZUxvYWRlciA9IGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICBpbmhlcml0cyhJbmZpbml0ZUxvYWRlciwgX1B1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEluZmluaXRlTG9hZGVyKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEluZmluaXRlTG9hZGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IEluZmluaXRlTG9hZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW5maW5pdGVMb2FkZXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5fbGFzdFJlbmRlcmVkU3RhcnRJbmRleCA9IC0xLCBfdGhpcy5fbGFzdFJlbmRlcmVkU3RvcEluZGV4ID0gLTEsIF90aGlzLl9tZW1vaXplZFVubG9hZGVkUmFuZ2VzID0gW10sIF90aGlzLl9vbkl0ZW1zUmVuZGVyZWQgPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciB2aXNpYmxlU3RhcnRJbmRleCA9IF9yZWYyLnZpc2libGVTdGFydEluZGV4LFxuICAgICAgICAgIHZpc2libGVTdG9wSW5kZXggPSBfcmVmMi52aXNpYmxlU3RvcEluZGV4O1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIWlzSW50ZWdlcih2aXNpYmxlU3RhcnRJbmRleCkgfHwgIWlzSW50ZWdlcih2aXNpYmxlU3RvcEluZGV4KSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBvbkl0ZW1zUmVuZGVyZWQgc2lnbmF0dXJlOyBwbGVhc2UgcmVmZXIgdG8gSW5maW5pdGVMb2FkZXIgZG9jdW1lbnRhdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgX3RoaXMucHJvcHMubG9hZE1vcmVSb3dzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbmZpbml0ZUxvYWRlciBcImxvYWRNb3JlUm93c1wiIHByb3AgaGFzIGJlZW4gcmVuYW1lZCB0byBcImxvYWRNb3JlSXRlbXNcIi4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5fbGFzdFJlbmRlcmVkU3RhcnRJbmRleCA9IHZpc2libGVTdGFydEluZGV4O1xuICAgICAgX3RoaXMuX2xhc3RSZW5kZXJlZFN0b3BJbmRleCA9IHZpc2libGVTdG9wSW5kZXg7XG5cbiAgICAgIF90aGlzLl9lbnN1cmVSb3dzTG9hZGVkKHZpc2libGVTdGFydEluZGV4LCB2aXNpYmxlU3RvcEluZGV4KTtcbiAgICB9LCBfdGhpcy5fc2V0UmVmID0gZnVuY3Rpb24gKGxpc3RSZWYpIHtcbiAgICAgIF90aGlzLl9saXN0UmVmID0gbGlzdFJlZjtcbiAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoSW5maW5pdGVMb2FkZXIsIFt7XG4gICAga2V5OiAncmVzZXRsb2FkTW9yZUl0ZW1zQ2FjaGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldGxvYWRNb3JlSXRlbXNDYWNoZSgpIHtcbiAgICAgIHZhciBhdXRvUmVsb2FkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgICAgdGhpcy5fbWVtb2l6ZWRVbmxvYWRlZFJhbmdlcyA9IFtdO1xuXG4gICAgICBpZiAoYXV0b1JlbG9hZCkge1xuICAgICAgICB0aGlzLl9lbnN1cmVSb3dzTG9hZGVkKHRoaXMuX2xhc3RSZW5kZXJlZFN0YXJ0SW5kZXgsIHRoaXMuX2xhc3RSZW5kZXJlZFN0b3BJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLl9saXN0UmVmID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbGlzdCByZWY7IHBsZWFzZSByZWZlciB0byBJbmZpbml0ZUxvYWRlciBkb2N1bWVudGF0aW9uLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuXG4gICAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgICBvbkl0ZW1zUmVuZGVyZWQ6IHRoaXMuX29uSXRlbXNSZW5kZXJlZCxcbiAgICAgICAgcmVmOiB0aGlzLl9zZXRSZWZcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19lbnN1cmVSb3dzTG9hZGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Vuc3VyZVJvd3NMb2FkZWQoc3RhcnRJbmRleCwgc3RvcEluZGV4KSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0l0ZW1Mb2FkZWQgPSBfcHJvcHMuaXNJdGVtTG9hZGVkLFxuICAgICAgICAgIGl0ZW1Db3VudCA9IF9wcm9wcy5pdGVtQ291bnQsXG4gICAgICAgICAgX3Byb3BzJG1pbmltdW1CYXRjaFNpID0gX3Byb3BzLm1pbmltdW1CYXRjaFNpemUsXG4gICAgICAgICAgbWluaW11bUJhdGNoU2l6ZSA9IF9wcm9wcyRtaW5pbXVtQmF0Y2hTaSA9PT0gdW5kZWZpbmVkID8gMTAgOiBfcHJvcHMkbWluaW11bUJhdGNoU2ksXG4gICAgICAgICAgX3Byb3BzJHRocmVzaG9sZCA9IF9wcm9wcy50aHJlc2hvbGQsXG4gICAgICAgICAgdGhyZXNob2xkID0gX3Byb3BzJHRocmVzaG9sZCA9PT0gdW5kZWZpbmVkID8gMTUgOiBfcHJvcHMkdGhyZXNob2xkO1xuXG5cbiAgICAgIHZhciB1bmxvYWRlZFJhbmdlcyA9IHNjYW5Gb3JVbmxvYWRlZFJhbmdlcyh7XG4gICAgICAgIGlzSXRlbUxvYWRlZDogaXNJdGVtTG9hZGVkLFxuICAgICAgICBpdGVtQ291bnQ6IGl0ZW1Db3VudCxcbiAgICAgICAgbWluaW11bUJhdGNoU2l6ZTogbWluaW11bUJhdGNoU2l6ZSxcbiAgICAgICAgc3RhcnRJbmRleDogTWF0aC5tYXgoMCwgc3RhcnRJbmRleCAtIHRocmVzaG9sZCksXG4gICAgICAgIHN0b3BJbmRleDogTWF0aC5taW4oaXRlbUNvdW50IC0gMSwgc3RvcEluZGV4ICsgdGhyZXNob2xkKVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEF2b2lkIGNhbGxpbmcgbG9hZC1yb3dzIHVubGVzcyByYW5nZSBoYXMgY2hhbmdlZC5cbiAgICAgIC8vIFRoaXMgc2hvdWxkbid0IGJlIHN0cmljdGx5IG5lY3Nlc2FyeSwgYnV0IGlzIG1heWJlIG5pY2UgdG8gZG8uXG4gICAgICBpZiAodGhpcy5fbWVtb2l6ZWRVbmxvYWRlZFJhbmdlcy5sZW5ndGggIT09IHVubG9hZGVkUmFuZ2VzLmxlbmd0aCB8fCB0aGlzLl9tZW1vaXplZFVubG9hZGVkUmFuZ2VzLnNvbWUoZnVuY3Rpb24gKF9yZWYzLCBpbmRleCkge1xuICAgICAgICB2YXIgX3JlZjQgPSBzbGljZWRUb0FycmF5KF9yZWYzLCAyKSxcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBfcmVmNFswXSxcbiAgICAgICAgICAgIHN0b3BJbmRleCA9IF9yZWY0WzFdO1xuXG4gICAgICAgIHJldHVybiB1bmxvYWRlZFJhbmdlc1tpbmRleF1bMF0gIT09IHN0YXJ0SW5kZXggfHwgdW5sb2FkZWRSYW5nZXNbaW5kZXhdWzFdICE9PSBzdG9wSW5kZXg7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLl9tZW1vaXplZFVubG9hZGVkUmFuZ2VzID0gdW5sb2FkZWRSYW5nZXM7XG4gICAgICAgIHRoaXMuX2xvYWRVbmxvYWRlZFJhbmdlcyh1bmxvYWRlZFJhbmdlcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2xvYWRVbmxvYWRlZFJhbmdlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9sb2FkVW5sb2FkZWRSYW5nZXModW5sb2FkZWRSYW5nZXMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvLyBsb2FkTW9yZVJvd3Mgd2FzIHJlbmFtZWQgdG8gbG9hZE1vcmVJdGVtcyBpbiB2MS4wLjM7IHdpbGwgYmUgcmVtb3ZlZCBpbiB2Mi4wXG4gICAgICB2YXIgbG9hZE1vcmVJdGVtcyA9IHRoaXMucHJvcHMubG9hZE1vcmVJdGVtcyB8fCB0aGlzLnByb3BzLmxvYWRNb3JlUm93cztcblxuICAgICAgdW5sb2FkZWRSYW5nZXMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgICAgdmFyIF9yZWY2ID0gc2xpY2VkVG9BcnJheShfcmVmNSwgMiksXG4gICAgICAgICAgICBzdGFydEluZGV4ID0gX3JlZjZbMF0sXG4gICAgICAgICAgICBzdG9wSW5kZXggPSBfcmVmNlsxXTtcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IGxvYWRNb3JlSXRlbXMoc3RhcnRJbmRleCwgc3RvcEluZGV4KTtcbiAgICAgICAgaWYgKHByb21pc2UgIT0gbnVsbCkge1xuICAgICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZWZyZXNoIHRoZSB2aXNpYmxlIHJvd3MgaWYgYW55IG9mIHRoZW0gaGF2ZSBqdXN0IGJlZW4gbG9hZGVkLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHRoZXkgd2lsbCByZW1haW4gaW4gdGhlaXIgdW5sb2FkZWQgdmlzdWFsIHN0YXRlLlxuICAgICAgICAgICAgaWYgKGlzUmFuZ2VWaXNpYmxlKHtcbiAgICAgICAgICAgICAgbGFzdFJlbmRlcmVkU3RhcnRJbmRleDogX3RoaXMyLl9sYXN0UmVuZGVyZWRTdGFydEluZGV4LFxuICAgICAgICAgICAgICBsYXN0UmVuZGVyZWRTdG9wSW5kZXg6IF90aGlzMi5fbGFzdFJlbmRlcmVkU3RvcEluZGV4LFxuICAgICAgICAgICAgICBzdGFydEluZGV4OiBzdGFydEluZGV4LFxuICAgICAgICAgICAgICBzdG9wSW5kZXg6IHN0b3BJbmRleFxuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIGFuIHVubW91bnQgd2hpbGUgcHJvbWlzZXMgYXJlIHN0aWxsIGluIGZsaWdodC5cbiAgICAgICAgICAgICAgaWYgKF90aGlzMi5fbGlzdFJlZiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gUmVzaXplIGNhY2hlZCByb3cgc2l6ZXMgZm9yIFZhcmlhYmxlU2l6ZUxpc3QsXG4gICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBqdXN0IHJlLXJlbmRlciB0aGUgbGlzdC5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczIuX2xpc3RSZWYucmVzZXRBZnRlckluZGV4ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLl9saXN0UmVmLnJlc2V0QWZ0ZXJJbmRleChzdGFydEluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBIQUNLIHJlc2V0IHRlbXBvcmFyaWx5IGNhY2hlZCBpdGVtIHN0eWxlcyB0byBmb3JjZSBQdXJlQ29tcG9uZW50IHRvIHJlLXJlbmRlci5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHByZXR0eSBncm9zcywgYnV0IEknbSBva2F5IHdpdGggaXQgZm9yIG5vdy5cbiAgICAgICAgICAgICAgICAvLyBEb24ndCBqdWRnZSBtZS5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzMi5fbGlzdFJlZi5fZ2V0SXRlbVN0eWxlQ2FjaGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzMi5fbGlzdFJlZi5fZ2V0SXRlbVN0eWxlQ2FjaGUoLTEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpczIuX2xpc3RSZWYuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEluZmluaXRlTG9hZGVyO1xufShQdXJlQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5maW5pdGVMb2FkZXI7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcblxuLy8gQW5pbWF0aW9uIGZyYW1lIGJhc2VkIGltcGxlbWVudGF0aW9uIG9mIHNldFRpbWVvdXQuXG4vLyBJbnNwaXJlZCBieSBKb2UgTGFtYmVydCwgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vam9lbGFtYmVydC8xMDAyMTE2I2ZpbGUtcmVxdWVzdHRpbWVvdXQtanNcbnZhciBoYXNOYXRpdmVQZXJmb3JtYW5jZU5vdyA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJztcbnZhciBub3cgPSBoYXNOYXRpdmVQZXJmb3JtYW5jZU5vdyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIERhdGUubm93KCk7XG59O1xuZnVuY3Rpb24gY2FuY2VsVGltZW91dCh0aW1lb3V0SUQpIHtcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGltZW91dElELmlkKTtcbn1cbmZ1bmN0aW9uIHJlcXVlc3RUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSkge1xuICB2YXIgc3RhcnQgPSBub3coKTtcblxuICBmdW5jdGlvbiB0aWNrKCkge1xuICAgIGlmIChub3coKSAtIHN0YXJ0ID49IGRlbGF5KSB7XG4gICAgICBjYWxsYmFjay5jYWxsKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0SUQuaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRpbWVvdXRJRCA9IHtcbiAgICBpZDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spXG4gIH07XG4gIHJldHVybiB0aW1lb3V0SUQ7XG59XG5cbnZhciBzaXplID0gLTE7IC8vIFRoaXMgdXRpbGl0eSBjb3BpZWQgZnJvbSBcImRvbS1oZWxwZXJzXCIgcGFja2FnZS5cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyU2l6ZShyZWNhbGN1bGF0ZSkge1xuICBpZiAocmVjYWxjdWxhdGUgPT09IHZvaWQgMCkge1xuICAgIHJlY2FsY3VsYXRlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoc2l6ZSA9PT0gLTEgfHwgcmVjYWxjdWxhdGUpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIHN0eWxlID0gZGl2LnN0eWxlO1xuICAgIHN0eWxlLndpZHRoID0gJzUwcHgnO1xuICAgIHN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgICBzdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBzaXplID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIHJldHVybiBzaXplO1xufVxudmFyIGNhY2hlZFJUTFJlc3VsdCA9IG51bGw7IC8vIFRSSUNLWSBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNjcm9sbExlZnQgc2hvdWxkIGJlIG5lZ2F0aXZlIGZvciBSVEwgYWxpZ25lZCBlbGVtZW50cy5cbi8vIENocm9tZSBkb2VzIG5vdCBzZWVtIHRvIGFkaGVyZTsgaXRzIHNjcm9sbExlZnQgdmFsdWVzIGFyZSBwb3NpdGl2ZSAobWVhc3VyZWQgcmVsYXRpdmUgdG8gdGhlIGxlZnQpLlxuLy8gU2FmYXJpJ3MgZWxhc3RpYyBib3VuY2UgbWFrZXMgZGV0ZWN0aW5nIHRoaXMgZXZlbiBtb3JlIGNvbXBsaWNhdGVkIHdydCBwb3RlbnRpYWwgZmFsc2UgcG9zaXRpdmVzLlxuLy8gVGhlIHNhZmVzdCB3YXkgdG8gY2hlY2sgdGhpcyBpcyB0byBpbnRlbnRpb25hbGx5IHNldCBhIG5lZ2F0aXZlIG9mZnNldCxcbi8vIGFuZCB0aGVuIHZlcmlmeSB0aGF0IHRoZSBzdWJzZXF1ZW50IFwic2Nyb2xsXCIgZXZlbnQgbWF0Y2hlcyB0aGUgbmVnYXRpdmUgb2Zmc2V0LlxuLy8gSWYgaXQgZG9lcyBub3QgbWF0Y2gsIHRoZW4gd2UgY2FuIGFzc3VtZSBhIG5vbi1zdGFuZGFyZCBSVEwgc2Nyb2xsIGltcGxlbWVudGF0aW9uLlxuXG5mdW5jdGlvbiBnZXRSVExPZmZzZXRUeXBlKHJlY2FsY3VsYXRlKSB7XG4gIGlmIChyZWNhbGN1bGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmVjYWxjdWxhdGUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChjYWNoZWRSVExSZXN1bHQgPT09IG51bGwgfHwgcmVjYWxjdWxhdGUpIHtcbiAgICB2YXIgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgb3V0ZXJTdHlsZSA9IG91dGVyRGl2LnN0eWxlO1xuICAgIG91dGVyU3R5bGUud2lkdGggPSAnNTBweCc7XG4gICAgb3V0ZXJTdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gICAgb3V0ZXJTdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgIG91dGVyU3R5bGUuZGlyZWN0aW9uID0gJ3J0bCc7XG4gICAgdmFyIGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIGlubmVyU3R5bGUgPSBpbm5lckRpdi5zdHlsZTtcbiAgICBpbm5lclN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgICBpbm5lclN0eWxlLmhlaWdodCA9ICcxMDBweCc7XG4gICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xuXG4gICAgaWYgKG91dGVyRGl2LnNjcm9sbExlZnQgPiAwKSB7XG4gICAgICBjYWNoZWRSVExSZXN1bHQgPSAncG9zaXRpdmUtZGVzY2VuZGluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dGVyRGl2LnNjcm9sbExlZnQgPSAxO1xuXG4gICAgICBpZiAob3V0ZXJEaXYuc2Nyb2xsTGVmdCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRSVExSZXN1bHQgPSAnbmVnYXRpdmUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVkUlRMUmVzdWx0ID0gJ3Bvc2l0aXZlLWFzY2VuZGluZyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlckRpdik7XG4gICAgcmV0dXJuIGNhY2hlZFJUTFJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWRSVExSZXN1bHQ7XG59XG5cbnZhciBJU19TQ1JPTExJTkdfREVCT1VOQ0VfSU5URVJWQUwgPSAxNTA7XG5cbnZhciBkZWZhdWx0SXRlbUtleSA9IGZ1bmN0aW9uIGRlZmF1bHRJdGVtS2V5KF9yZWYpIHtcbiAgdmFyIGNvbHVtbkluZGV4ID0gX3JlZi5jb2x1bW5JbmRleCxcbiAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXG4gICAgICByb3dJbmRleCA9IF9yZWYucm93SW5kZXg7XG4gIHJldHVybiByb3dJbmRleCArIFwiOlwiICsgY29sdW1uSW5kZXg7XG59OyAvLyBJbiBERVYgbW9kZSwgdGhpcyBTZXQgaGVscHMgdXMgb25seSBsb2cgYSB3YXJuaW5nIG9uY2UgcGVyIGNvbXBvbmVudCBpbnN0YW5jZS5cbi8vIFRoaXMgYXZvaWRzIHNwYW1taW5nIHRoZSBjb25zb2xlIGV2ZXJ5IHRpbWUgYSByZW5kZXIgaGFwcGVucy5cblxuXG52YXIgZGV2V2FybmluZ3NPdmVyc2NhbkNvdW50ID0gbnVsbDtcbnZhciBkZXZXYXJuaW5nc092ZXJzY2FuUm93c0NvbHVtbnNDb3VudCA9IG51bGw7XG52YXIgZGV2V2FybmluZ3NUYWdOYW1lID0gbnVsbDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuV2Vha1NldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZXZXYXJuaW5nc092ZXJzY2FuQ291bnQgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBuZXcgV2Vha1NldCgpO1xuICAgIGRldldhcm5pbmdzT3ZlcnNjYW5Sb3dzQ29sdW1uc0NvdW50ID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgICBkZXZXYXJuaW5nc1RhZ05hbWUgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBuZXcgV2Vha1NldCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWRDb21wb25lbnQoX3JlZjIpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgdmFyIGdldENvbHVtbk9mZnNldCA9IF9yZWYyLmdldENvbHVtbk9mZnNldCxcbiAgICAgIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQgPSBfcmVmMi5nZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0LFxuICAgICAgZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleCA9IF9yZWYyLmdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXgsXG4gICAgICBnZXRDb2x1bW5XaWR0aCA9IF9yZWYyLmdldENvbHVtbldpZHRoLFxuICAgICAgZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQgPSBfcmVmMi5nZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCxcbiAgICAgIGdldEVzdGltYXRlZFRvdGFsV2lkdGggPSBfcmVmMi5nZXRFc3RpbWF0ZWRUb3RhbFdpZHRoLFxuICAgICAgZ2V0T2Zmc2V0Rm9yQ29sdW1uQW5kQWxpZ25tZW50ID0gX3JlZjIuZ2V0T2Zmc2V0Rm9yQ29sdW1uQW5kQWxpZ25tZW50LFxuICAgICAgZ2V0T2Zmc2V0Rm9yUm93QW5kQWxpZ25tZW50ID0gX3JlZjIuZ2V0T2Zmc2V0Rm9yUm93QW5kQWxpZ25tZW50LFxuICAgICAgZ2V0Um93SGVpZ2h0ID0gX3JlZjIuZ2V0Um93SGVpZ2h0LFxuICAgICAgZ2V0Um93T2Zmc2V0ID0gX3JlZjIuZ2V0Um93T2Zmc2V0LFxuICAgICAgZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldCA9IF9yZWYyLmdldFJvd1N0YXJ0SW5kZXhGb3JPZmZzZXQsXG4gICAgICBnZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4ID0gX3JlZjIuZ2V0Um93U3RvcEluZGV4Rm9yU3RhcnRJbmRleCxcbiAgICAgIGluaXRJbnN0YW5jZVByb3BzID0gX3JlZjIuaW5pdEluc3RhbmNlUHJvcHMsXG4gICAgICBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlID0gX3JlZjIuc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSxcbiAgICAgIHZhbGlkYXRlUHJvcHMgPSBfcmVmMi52YWxpZGF0ZVByb3BzO1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKEdyaWQsIF9QdXJlQ29tcG9uZW50KTtcblxuICAgIC8vIEFsd2F5cyB1c2UgZXhwbGljaXQgY29uc3RydWN0b3IgZm9yIFJlYWN0IGNvbXBvbmVudHMuXG4gICAgLy8gSXQgcHJvZHVjZXMgbGVzcyBjb2RlIGFmdGVyIHRyYW5zcGlsYXRpb24uICgjMjYpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBHcmlkKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF90aGlzID0gX1B1cmVDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgIF90aGlzLl9pbnN0YW5jZVByb3BzID0gaW5pdEluc3RhbmNlUHJvcHMoX3RoaXMucHJvcHMsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkID0gbnVsbDtcbiAgICAgIF90aGlzLl9vdXRlclJlZiA9IHZvaWQgMDtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBpbnN0YW5jZTogX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksXG4gICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbjogJ2ZvcndhcmQnLFxuICAgICAgICBzY3JvbGxMZWZ0OiB0eXBlb2YgX3RoaXMucHJvcHMuaW5pdGlhbFNjcm9sbExlZnQgPT09ICdudW1iZXInID8gX3RoaXMucHJvcHMuaW5pdGlhbFNjcm9sbExlZnQgOiAwLFxuICAgICAgICBzY3JvbGxUb3A6IHR5cGVvZiBfdGhpcy5wcm9wcy5pbml0aWFsU2Nyb2xsVG9wID09PSAnbnVtYmVyJyA/IF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxUb3AgOiAwLFxuICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IGZhbHNlLFxuICAgICAgICB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbjogJ2ZvcndhcmQnXG4gICAgICB9O1xuICAgICAgX3RoaXMuX2NhbGxPbkl0ZW1zUmVuZGVyZWQgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5fY2FsbE9uSXRlbXNSZW5kZXJlZCA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKG92ZXJzY2FuQ29sdW1uU3RhcnRJbmRleCwgb3ZlcnNjYW5Db2x1bW5TdG9wSW5kZXgsIG92ZXJzY2FuUm93U3RhcnRJbmRleCwgb3ZlcnNjYW5Sb3dTdG9wSW5kZXgsIHZpc2libGVDb2x1bW5TdGFydEluZGV4LCB2aXNpYmxlQ29sdW1uU3RvcEluZGV4LCB2aXNpYmxlUm93U3RhcnRJbmRleCwgdmlzaWJsZVJvd1N0b3BJbmRleCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub25JdGVtc1JlbmRlcmVkKHtcbiAgICAgICAgICBvdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXg6IG92ZXJzY2FuQ29sdW1uU3RhcnRJbmRleCxcbiAgICAgICAgICBvdmVyc2NhbkNvbHVtblN0b3BJbmRleDogb3ZlcnNjYW5Db2x1bW5TdG9wSW5kZXgsXG4gICAgICAgICAgb3ZlcnNjYW5Sb3dTdGFydEluZGV4OiBvdmVyc2NhblJvd1N0YXJ0SW5kZXgsXG4gICAgICAgICAgb3ZlcnNjYW5Sb3dTdG9wSW5kZXg6IG92ZXJzY2FuUm93U3RvcEluZGV4LFxuICAgICAgICAgIHZpc2libGVDb2x1bW5TdGFydEluZGV4OiB2aXNpYmxlQ29sdW1uU3RhcnRJbmRleCxcbiAgICAgICAgICB2aXNpYmxlQ29sdW1uU3RvcEluZGV4OiB2aXNpYmxlQ29sdW1uU3RvcEluZGV4LFxuICAgICAgICAgIHZpc2libGVSb3dTdGFydEluZGV4OiB2aXNpYmxlUm93U3RhcnRJbmRleCxcbiAgICAgICAgICB2aXNpYmxlUm93U3RvcEluZGV4OiB2aXNpYmxlUm93U3RvcEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy5fY2FsbE9uU2Nyb2xsID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2NhbGxPblNjcm9sbCA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKHNjcm9sbExlZnQsIHNjcm9sbFRvcCwgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiwgdmVydGljYWxTY3JvbGxEaXJlY3Rpb24sIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub25TY3JvbGwoe1xuICAgICAgICAgIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb246IGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcCxcbiAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbjogdmVydGljYWxTY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGUgPSB2b2lkIDA7XG5cbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGUgPSBmdW5jdGlvbiAocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgY29sdW1uV2lkdGggPSBfdGhpcyRwcm9wcy5jb2x1bW5XaWR0aCxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgICAgIHJvd0hlaWdodCA9IF90aGlzJHByb3BzLnJvd0hlaWdodDtcblxuICAgICAgICB2YXIgaXRlbVN0eWxlQ2FjaGUgPSBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUoc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSAmJiBjb2x1bW5XaWR0aCwgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSAmJiBkaXJlY3Rpb24sIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgcm93SGVpZ2h0KTtcblxuICAgICAgICB2YXIga2V5ID0gcm93SW5kZXggKyBcIjpcIiArIGNvbHVtbkluZGV4O1xuICAgICAgICB2YXIgc3R5bGU7XG5cbiAgICAgICAgaWYgKGl0ZW1TdHlsZUNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBzdHlsZSA9IGl0ZW1TdHlsZUNhY2hlW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF9zdHlsZTtcblxuICAgICAgICAgIGl0ZW1TdHlsZUNhY2hlW2tleV0gPSBzdHlsZSA9IChfc3R5bGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICAgIH0sIF9zdHlsZVtkaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSBnZXRDb2x1bW5PZmZzZXQoX3RoaXMucHJvcHMsIGNvbHVtbkluZGV4LCBfdGhpcy5faW5zdGFuY2VQcm9wcyksIF9zdHlsZS50b3AgPSBnZXRSb3dPZmZzZXQoX3RoaXMucHJvcHMsIHJvd0luZGV4LCBfdGhpcy5faW5zdGFuY2VQcm9wcyksIF9zdHlsZS5oZWlnaHQgPSBnZXRSb3dIZWlnaHQoX3RoaXMucHJvcHMsIHJvd0luZGV4LCBfdGhpcy5faW5zdGFuY2VQcm9wcyksIF9zdHlsZS53aWR0aCA9IGdldENvbHVtbldpZHRoKF90aGlzLnByb3BzLCBjb2x1bW5JbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpLCBfc3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlID0gbWVtb2l6ZU9uZShmdW5jdGlvbiAoXywgX18sIF9fXykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuX29uU2Nyb2xsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfZXZlbnQkY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgICBjbGllbnRIZWlnaHQgPSBfZXZlbnQkY3VycmVudFRhcmdldC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICBjbGllbnRXaWR0aCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxUb3AgPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxUb3AsXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBzY3JvbGxXaWR0aCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbFdpZHRoO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbExlZnQgPT09IHNjcm9sbExlZnQgJiYgcHJldlN0YXRlLnNjcm9sbFRvcCA9PT0gc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAvLyBTY3JvbGwgcG9zaXRpb24gbWF5IGhhdmUgYmVlbiB1cGRhdGVkIGJ5IGNETS9jRFUsXG4gICAgICAgICAgICAvLyBJbiB3aGljaCBjYXNlIHdlIGRvbid0IG5lZWQgdG8gdHJpZ2dlciBhbm90aGVyIHJlbmRlcixcbiAgICAgICAgICAgIC8vIEFuZCB3ZSBkb24ndCB3YW50IHRvIHVwZGF0ZSBzdGF0ZS5pc1Njcm9sbGluZy5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBfdGhpcy5wcm9wcy5kaXJlY3Rpb247IC8vIFRSSUNLWSBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNjcm9sbExlZnQgc2hvdWxkIGJlIG5lZ2F0aXZlIGZvciBSVEwgYWxpZ25lZCBlbGVtZW50cy5cbiAgICAgICAgICAvLyBUaGlzIGlzIG5vdCB0aGUgY2FzZSBmb3IgYWxsIGJyb3dzZXJzIHRob3VnaCAoZS5nLiBDaHJvbWUgcmVwb3J0cyB2YWx1ZXMgYXMgcG9zaXRpdmUsIG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSBsZWZ0KS5cbiAgICAgICAgICAvLyBJdCdzIGFsc28gZWFzaWVyIGZvciB0aGlzIGNvbXBvbmVudCBpZiB3ZSBjb252ZXJ0IG9mZnNldHMgdG8gdGhlIHNhbWUgZm9ybWF0IGFzIHRoZXkgd291bGQgYmUgaW4gZm9yIGx0ci5cbiAgICAgICAgICAvLyBTbyB0aGUgc2ltcGxlc3Qgc29sdXRpb24gaXMgdG8gZGV0ZXJtaW5lIHdoaWNoIGJyb3dzZXIgYmVoYXZpb3Igd2UncmUgZGVhbGluZyB3aXRoLCBhbmQgY29udmVydCBiYXNlZCBvbiBpdC5cblxuICAgICAgICAgIHZhciBjYWxjdWxhdGVkU2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG5cbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgICAgICAgc3dpdGNoIChnZXRSVExPZmZzZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSAnbmVnYXRpdmUnOlxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRTY3JvbGxMZWZ0ID0gLXNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAncG9zaXRpdmUtZGVzY2VuZGluZyc6XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlZFNjcm9sbExlZnQgPSBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIFByZXZlbnQgU2FmYXJpJ3MgZWxhc3RpYyBzY3JvbGxpbmcgZnJvbSBjYXVzaW5nIHZpc3VhbCBzaGFraW5nIHdoZW4gc2Nyb2xsaW5nIHBhc3QgYm91bmRzLlxuXG5cbiAgICAgICAgICBjYWxjdWxhdGVkU2Nyb2xsTGVmdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGNhbGN1bGF0ZWRTY3JvbGxMZWZ0LCBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKSk7XG4gICAgICAgICAgdmFyIGNhbGN1bGF0ZWRTY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCkpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb246IHByZXZTdGF0ZS5zY3JvbGxMZWZ0IDwgc2Nyb2xsTGVmdCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgICBzY3JvbGxMZWZ0OiBjYWxjdWxhdGVkU2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbFRvcDogY2FsY3VsYXRlZFNjcm9sbFRvcCxcbiAgICAgICAgICAgIHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uOiBwcmV2U3RhdGUuc2Nyb2xsVG9wIDwgc2Nyb2xsVG9wID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJyxcbiAgICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICB9LCBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fb3V0ZXJSZWZTZXR0ZXIgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHZhciBvdXRlclJlZiA9IF90aGlzLnByb3BzLm91dGVyUmVmO1xuICAgICAgICBfdGhpcy5fb3V0ZXJSZWYgPSByZWY7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvdXRlclJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG91dGVyUmVmKHJlZik7XG4gICAgICAgIH0gZWxzZSBpZiAob3V0ZXJSZWYgIT0gbnVsbCAmJiB0eXBlb2Ygb3V0ZXJSZWYgPT09ICdvYmplY3QnICYmIG91dGVyUmVmLmhhc093blByb3BlcnR5KCdjdXJyZW50JykpIHtcbiAgICAgICAgICBvdXRlclJlZi5jdXJyZW50ID0gcmVmO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICAgICAgY2FuY2VsVGltZW91dChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IHJlcXVlc3RUaW1lb3V0KF90aGlzLl9yZXNldElzU2Nyb2xsaW5nLCBJU19TQ1JPTExJTkdfREVCT1VOQ0VfSU5URVJWQUwpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkID0gbnVsbDtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNTY3JvbGxpbmc6IGZhbHNlXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBDbGVhciBzdHlsZSBjYWNoZSBhZnRlciBzdGF0ZSB1cGRhdGUgaGFzIGJlZW4gY29tbWl0dGVkLlxuICAgICAgICAgIC8vIFRoaXMgd2F5IHdlIGRvbid0IGJyZWFrIHB1cmUgc0NVIGZvciBpdGVtcyB0aGF0IGRvbid0IHVzZSBpc1Njcm9sbGluZyBwYXJhbS5cbiAgICAgICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUoLTEpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBHcmlkLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgdmFsaWRhdGVTaGFyZWRQcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgICB2YWxpZGF0ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIF9wcm90byA9IEdyaWQucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLnNjcm9sbFRvID0gZnVuY3Rpb24gc2Nyb2xsVG8oX3JlZjMpIHtcbiAgICAgIHZhciBzY3JvbGxMZWZ0ID0gX3JlZjMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfcmVmMy5zY3JvbGxUb3A7XG5cbiAgICAgIGlmIChzY3JvbGxMZWZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2Nyb2xsTGVmdCA9IE1hdGgubWF4KDAsIHNjcm9sbExlZnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsVG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsVG9wKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIGlmIChzY3JvbGxMZWZ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcHJldlN0YXRlLnNjcm9sbExlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2Nyb2xsVG9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSBwcmV2U3RhdGUuc2Nyb2xsVG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS5zY3JvbGxMZWZ0ID09PSBzY3JvbGxMZWZ0ICYmIHByZXZTdGF0ZS5zY3JvbGxUb3AgPT09IHNjcm9sbFRvcCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uOiBwcmV2U3RhdGUuc2Nyb2xsTGVmdCA8IHNjcm9sbExlZnQgPyAnZm9yd2FyZCcgOiAnYmFja3dhcmQnLFxuICAgICAgICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgICAgICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiB0cnVlLFxuICAgICAgICAgIHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uOiBwcmV2U3RhdGUuc2Nyb2xsVG9wIDwgc2Nyb2xsVG9wID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJ1xuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCk7XG4gICAgfTtcblxuICAgIF9wcm90by5zY3JvbGxUb0l0ZW0gPSBmdW5jdGlvbiBzY3JvbGxUb0l0ZW0oX3JlZjQpIHtcbiAgICAgIHZhciBfcmVmNCRhbGlnbiA9IF9yZWY0LmFsaWduLFxuICAgICAgICAgIGFsaWduID0gX3JlZjQkYWxpZ24gPT09IHZvaWQgMCA/ICdhdXRvJyA6IF9yZWY0JGFsaWduLFxuICAgICAgICAgIGNvbHVtbkluZGV4ID0gX3JlZjQuY29sdW1uSW5kZXgsXG4gICAgICAgICAgcm93SW5kZXggPSBfcmVmNC5yb3dJbmRleDtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbHVtbkNvdW50ID0gX3RoaXMkcHJvcHMyLmNvbHVtbkNvdW50LFxuICAgICAgICAgIGhlaWdodCA9IF90aGlzJHByb3BzMi5oZWlnaHQsXG4gICAgICAgICAgcm93Q291bnQgPSBfdGhpcyRwcm9wczIucm93Q291bnQsXG4gICAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wczIud2lkdGg7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBfdGhpcyRzdGF0ZS5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcCA9IF90aGlzJHN0YXRlLnNjcm9sbFRvcDtcbiAgICAgIHZhciBzY3JvbGxiYXJTaXplID0gZ2V0U2Nyb2xsYmFyU2l6ZSgpO1xuXG4gICAgICBpZiAoY29sdW1uSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb2x1bW5JbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGNvbHVtbkluZGV4LCBjb2x1bW5Db3VudCAtIDEpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvd0luZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcm93SW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihyb3dJbmRleCwgcm93Q291bnQgLSAxKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbEhlaWdodCA9IGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0KHRoaXMucHJvcHMsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIGVzdGltYXRlZFRvdGFsV2lkdGggPSBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoKHRoaXMucHJvcHMsIHRoaXMuX2luc3RhbmNlUHJvcHMpOyAvLyBUaGUgc2Nyb2xsYmFyIHNpemUgc2hvdWxkIGJlIGNvbnNpZGVyZWQgd2hlbiBzY3JvbGxpbmcgYW4gaXRlbSBpbnRvIHZpZXcsXG4gICAgICAvLyB0byBlbnN1cmUgaXQncyBmdWxseSB2aXNpYmxlLlxuICAgICAgLy8gQnV0IHdlIG9ubHkgbmVlZCB0byBhY2NvdW50IGZvciBpdHMgc2l6ZSB3aGVuIGl0J3MgYWN0dWFsbHkgdmlzaWJsZS5cblxuICAgICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXJTaXplID0gZXN0aW1hdGVkVG90YWxXaWR0aCA+IHdpZHRoID8gc2Nyb2xsYmFyU2l6ZSA6IDA7XG4gICAgICB2YXIgdmVydGljYWxTY3JvbGxiYXJTaXplID0gZXN0aW1hdGVkVG90YWxIZWlnaHQgPiBoZWlnaHQgPyBzY3JvbGxiYXJTaXplIDogMDtcbiAgICAgIHRoaXMuc2Nyb2xsVG8oe1xuICAgICAgICBzY3JvbGxMZWZ0OiBjb2x1bW5JbmRleCAhPT0gdW5kZWZpbmVkID8gZ2V0T2Zmc2V0Rm9yQ29sdW1uQW5kQWxpZ25tZW50KHRoaXMucHJvcHMsIGNvbHVtbkluZGV4LCBhbGlnbiwgc2Nyb2xsTGVmdCwgdGhpcy5faW5zdGFuY2VQcm9wcywgdmVydGljYWxTY3JvbGxiYXJTaXplKSA6IHNjcm9sbExlZnQsXG4gICAgICAgIHNjcm9sbFRvcDogcm93SW5kZXggIT09IHVuZGVmaW5lZCA/IGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudCh0aGlzLnByb3BzLCByb3dJbmRleCwgYWxpZ24sIHNjcm9sbFRvcCwgdGhpcy5faW5zdGFuY2VQcm9wcywgaG9yaXpvbnRhbFNjcm9sbGJhclNpemUpIDogc2Nyb2xsVG9wXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpbml0aWFsU2Nyb2xsTGVmdCA9IF90aGlzJHByb3BzMy5pbml0aWFsU2Nyb2xsTGVmdCxcbiAgICAgICAgICBpbml0aWFsU2Nyb2xsVG9wID0gX3RoaXMkcHJvcHMzLmluaXRpYWxTY3JvbGxUb3A7XG5cbiAgICAgIGlmICh0aGlzLl9vdXRlclJlZiAhPSBudWxsKSB7XG4gICAgICAgIHZhciBvdXRlclJlZiA9IHRoaXMuX291dGVyUmVmO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbFNjcm9sbExlZnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IGluaXRpYWxTY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbml0aWFsU2Nyb2xsVG9wID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbFRvcCA9IGluaXRpYWxTY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2FsbFByb3BzQ2FsbGJhY2tzKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gdGhpcy5wcm9wcy5kaXJlY3Rpb247XG4gICAgICB2YXIgX3RoaXMkc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gX3RoaXMkc3RhdGUyLnNjcm9sbExlZnQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RoaXMkc3RhdGUyLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQgPSBfdGhpcyRzdGF0ZTIuc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkO1xuXG4gICAgICBpZiAoc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkICYmIHRoaXMuX291dGVyUmVmICE9IG51bGwpIHtcbiAgICAgICAgLy8gVFJJQ0tZIEFjY29yZGluZyB0byB0aGUgc3BlYywgc2Nyb2xsTGVmdCBzaG91bGQgYmUgbmVnYXRpdmUgZm9yIFJUTCBhbGlnbmVkIGVsZW1lbnRzLlxuICAgICAgICAvLyBUaGlzIGlzIG5vdCB0aGUgY2FzZSBmb3IgYWxsIGJyb3dzZXJzIHRob3VnaCAoZS5nLiBDaHJvbWUgcmVwb3J0cyB2YWx1ZXMgYXMgcG9zaXRpdmUsIG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSBsZWZ0KS5cbiAgICAgICAgLy8gU28gd2UgbmVlZCB0byBkZXRlcm1pbmUgd2hpY2ggYnJvd3NlciBiZWhhdmlvciB3ZSdyZSBkZWFsaW5nIHdpdGgsIGFuZCBtaW1pYyBpdC5cbiAgICAgICAgdmFyIG91dGVyUmVmID0gdGhpcy5fb3V0ZXJSZWY7XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICBzd2l0Y2ggKGdldFJUTE9mZnNldFR5cGUoKSkge1xuICAgICAgICAgICAgY2FzZSAnbmVnYXRpdmUnOlxuICAgICAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gLXNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdwb3NpdGl2ZS1hc2NlbmRpbmcnOlxuICAgICAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHZhciBjbGllbnRXaWR0aCA9IG91dGVyUmVmLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgc2Nyb2xsV2lkdGggPSBvdXRlclJlZi5zY3JvbGxXaWR0aDtcbiAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSBzY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IE1hdGgubWF4KDAsIHNjcm9sbExlZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsVG9wKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2FsbFByb3BzQ2FsbGJhY2tzKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgICAgY2FuY2VsVGltZW91dCh0aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHM0LmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC5jbGFzc05hbWUsXG4gICAgICAgICAgY29sdW1uQ291bnQgPSBfdGhpcyRwcm9wczQuY29sdW1uQ291bnQsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHM0LmRpcmVjdGlvbixcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczQuaGVpZ2h0LFxuICAgICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHM0LmlubmVyUmVmLFxuICAgICAgICAgIGlubmVyRWxlbWVudFR5cGUgPSBfdGhpcyRwcm9wczQuaW5uZXJFbGVtZW50VHlwZSxcbiAgICAgICAgICBpbm5lclRhZ05hbWUgPSBfdGhpcyRwcm9wczQuaW5uZXJUYWdOYW1lLFxuICAgICAgICAgIGl0ZW1EYXRhID0gX3RoaXMkcHJvcHM0Lml0ZW1EYXRhLFxuICAgICAgICAgIF90aGlzJHByb3BzNCRpdGVtS2V5ID0gX3RoaXMkcHJvcHM0Lml0ZW1LZXksXG4gICAgICAgICAgaXRlbUtleSA9IF90aGlzJHByb3BzNCRpdGVtS2V5ID09PSB2b2lkIDAgPyBkZWZhdWx0SXRlbUtleSA6IF90aGlzJHByb3BzNCRpdGVtS2V5LFxuICAgICAgICAgIG91dGVyRWxlbWVudFR5cGUgPSBfdGhpcyRwcm9wczQub3V0ZXJFbGVtZW50VHlwZSxcbiAgICAgICAgICBvdXRlclRhZ05hbWUgPSBfdGhpcyRwcm9wczQub3V0ZXJUYWdOYW1lLFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHM0LnJvd0NvdW50LFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHM0LnN0eWxlLFxuICAgICAgICAgIHVzZUlzU2Nyb2xsaW5nID0gX3RoaXMkcHJvcHM0LnVzZUlzU2Nyb2xsaW5nLFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHM0LndpZHRoO1xuICAgICAgdmFyIGlzU2Nyb2xsaW5nID0gdGhpcy5zdGF0ZS5pc1Njcm9sbGluZztcblxuICAgICAgdmFyIF90aGlzJF9nZXRIb3Jpem9udGFsUiA9IHRoaXMuX2dldEhvcml6b250YWxSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgY29sdW1uU3RhcnRJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUlswXSxcbiAgICAgICAgICBjb2x1bW5TdG9wSW5kZXggPSBfdGhpcyRfZ2V0SG9yaXpvbnRhbFJbMV07XG5cbiAgICAgIHZhciBfdGhpcyRfZ2V0VmVydGljYWxSYW4gPSB0aGlzLl9nZXRWZXJ0aWNhbFJhbmdlVG9SZW5kZXIoKSxcbiAgICAgICAgICByb3dTdGFydEluZGV4ID0gX3RoaXMkX2dldFZlcnRpY2FsUmFuWzBdLFxuICAgICAgICAgIHJvd1N0b3BJbmRleCA9IF90aGlzJF9nZXRWZXJ0aWNhbFJhblsxXTtcblxuICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgIGlmIChjb2x1bW5Db3VudCA+IDAgJiYgcm93Q291bnQpIHtcbiAgICAgICAgZm9yICh2YXIgX3Jvd0luZGV4ID0gcm93U3RhcnRJbmRleDsgX3Jvd0luZGV4IDw9IHJvd1N0b3BJbmRleDsgX3Jvd0luZGV4KyspIHtcbiAgICAgICAgICBmb3IgKHZhciBfY29sdW1uSW5kZXggPSBjb2x1bW5TdGFydEluZGV4OyBfY29sdW1uSW5kZXggPD0gY29sdW1uU3RvcEluZGV4OyBfY29sdW1uSW5kZXgrKykge1xuICAgICAgICAgICAgaXRlbXMucHVzaChjcmVhdGVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBfY29sdW1uSW5kZXgsXG4gICAgICAgICAgICAgIGRhdGE6IGl0ZW1EYXRhLFxuICAgICAgICAgICAgICBpc1Njcm9sbGluZzogdXNlSXNTY3JvbGxpbmcgPyBpc1Njcm9sbGluZyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAga2V5OiBpdGVtS2V5KHtcbiAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogX2NvbHVtbkluZGV4LFxuICAgICAgICAgICAgICAgIGRhdGE6IGl0ZW1EYXRhLFxuICAgICAgICAgICAgICAgIHJvd0luZGV4OiBfcm93SW5kZXhcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHJvd0luZGV4OiBfcm93SW5kZXgsXG4gICAgICAgICAgICAgIHN0eWxlOiB0aGlzLl9nZXRJdGVtU3R5bGUoX3Jvd0luZGV4LCBfY29sdW1uSW5kZXgpXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIFJlYWQgdGhpcyB2YWx1ZSBBRlRFUiBpdGVtcyBoYXZlIGJlZW4gY3JlYXRlZCxcbiAgICAgIC8vIFNvIHRoZWlyIGFjdHVhbCBzaXplcyAoaWYgdmFyaWFibGUpIGFyZSB0YWtlbiBpbnRvIGNvbnNpZGVyYXRpb24uXG5cblxuICAgICAgdmFyIGVzdGltYXRlZFRvdGFsSGVpZ2h0ID0gZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQodGhpcy5wcm9wcywgdGhpcy5faW5zdGFuY2VQcm9wcyk7XG4gICAgICB2YXIgZXN0aW1hdGVkVG90YWxXaWR0aCA9IGdldEVzdGltYXRlZFRvdGFsV2lkdGgodGhpcy5wcm9wcywgdGhpcy5faW5zdGFuY2VQcm9wcyk7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChvdXRlckVsZW1lbnRUeXBlIHx8IG91dGVyVGFnTmFtZSB8fCAnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgb25TY3JvbGw6IHRoaXMuX29uU2Nyb2xsLFxuICAgICAgICByZWY6IHRoaXMuX291dGVyUmVmU2V0dGVyLFxuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgIH0sIHN0eWxlKVxuICAgICAgfSwgY3JlYXRlRWxlbWVudChpbm5lckVsZW1lbnRUeXBlIHx8IGlubmVyVGFnTmFtZSB8fCAnZGl2Jywge1xuICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBlc3RpbWF0ZWRUb3RhbEhlaWdodCxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBpc1Njcm9sbGluZyA/ICdub25lJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB3aWR0aDogZXN0aW1hdGVkVG90YWxXaWR0aFxuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2FsbFByb3BzQ2FsbGJhY2tzID0gZnVuY3Rpb24gX2NhbGxQcm9wc0NhbGxiYWNrcygpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbHVtbkNvdW50ID0gX3RoaXMkcHJvcHM1LmNvbHVtbkNvdW50LFxuICAgICAgICAgIG9uSXRlbXNSZW5kZXJlZCA9IF90aGlzJHByb3BzNS5vbkl0ZW1zUmVuZGVyZWQsXG4gICAgICAgICAgb25TY3JvbGwgPSBfdGhpcyRwcm9wczUub25TY3JvbGwsXG4gICAgICAgICAgcm93Q291bnQgPSBfdGhpcyRwcm9wczUucm93Q291bnQ7XG5cbiAgICAgIGlmICh0eXBlb2Ygb25JdGVtc1JlbmRlcmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChjb2x1bW5Db3VudCA+IDAgJiYgcm93Q291bnQgPiAwKSB7XG4gICAgICAgICAgdmFyIF90aGlzJF9nZXRIb3Jpem9udGFsUjIgPSB0aGlzLl9nZXRIb3Jpem9udGFsUmFuZ2VUb1JlbmRlcigpLFxuICAgICAgICAgICAgICBfb3ZlcnNjYW5Db2x1bW5TdGFydEluZGV4ID0gX3RoaXMkX2dldEhvcml6b250YWxSMlswXSxcbiAgICAgICAgICAgICAgX292ZXJzY2FuQ29sdW1uU3RvcEluZGV4ID0gX3RoaXMkX2dldEhvcml6b250YWxSMlsxXSxcbiAgICAgICAgICAgICAgX3Zpc2libGVDb2x1bW5TdGFydEluZGV4ID0gX3RoaXMkX2dldEhvcml6b250YWxSMlsyXSxcbiAgICAgICAgICAgICAgX3Zpc2libGVDb2x1bW5TdG9wSW5kZXggPSBfdGhpcyRfZ2V0SG9yaXpvbnRhbFIyWzNdO1xuXG4gICAgICAgICAgdmFyIF90aGlzJF9nZXRWZXJ0aWNhbFJhbjIgPSB0aGlzLl9nZXRWZXJ0aWNhbFJhbmdlVG9SZW5kZXIoKSxcbiAgICAgICAgICAgICAgX292ZXJzY2FuUm93U3RhcnRJbmRleCA9IF90aGlzJF9nZXRWZXJ0aWNhbFJhbjJbMF0sXG4gICAgICAgICAgICAgIF9vdmVyc2NhblJvd1N0b3BJbmRleCA9IF90aGlzJF9nZXRWZXJ0aWNhbFJhbjJbMV0sXG4gICAgICAgICAgICAgIF92aXNpYmxlUm93U3RhcnRJbmRleCA9IF90aGlzJF9nZXRWZXJ0aWNhbFJhbjJbMl0sXG4gICAgICAgICAgICAgIF92aXNpYmxlUm93U3RvcEluZGV4ID0gX3RoaXMkX2dldFZlcnRpY2FsUmFuMlszXTtcblxuICAgICAgICAgIHRoaXMuX2NhbGxPbkl0ZW1zUmVuZGVyZWQoX292ZXJzY2FuQ29sdW1uU3RhcnRJbmRleCwgX292ZXJzY2FuQ29sdW1uU3RvcEluZGV4LCBfb3ZlcnNjYW5Sb3dTdGFydEluZGV4LCBfb3ZlcnNjYW5Sb3dTdG9wSW5kZXgsIF92aXNpYmxlQ29sdW1uU3RhcnRJbmRleCwgX3Zpc2libGVDb2x1bW5TdG9wSW5kZXgsIF92aXNpYmxlUm93U3RhcnRJbmRleCwgX3Zpc2libGVSb3dTdG9wSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIF90aGlzJHN0YXRlMyA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBfaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiA9IF90aGlzJHN0YXRlMy5ob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgICAgX3Njcm9sbExlZnQgPSBfdGhpcyRzdGF0ZTMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIF9zY3JvbGxUb3AgPSBfdGhpcyRzdGF0ZTMuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgX3Njcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCA9IF90aGlzJHN0YXRlMy5zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQsXG4gICAgICAgICAgICBfdmVydGljYWxTY3JvbGxEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZTMudmVydGljYWxTY3JvbGxEaXJlY3Rpb247XG5cbiAgICAgICAgdGhpcy5fY2FsbE9uU2Nyb2xsKF9zY3JvbGxMZWZ0LCBfc2Nyb2xsVG9wLCBfaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiwgX3ZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uLCBfc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkKTtcbiAgICAgIH1cbiAgICB9OyAvLyBMYXppbHkgY3JlYXRlIGFuZCBjYWNoZSBpdGVtIHN0eWxlcyB3aGlsZSBzY3JvbGxpbmcsXG4gICAgLy8gU28gdGhhdCBwdXJlIGNvbXBvbmVudCBzQ1Ugd2lsbCBwcmV2ZW50IHJlLXJlbmRlcnMuXG4gICAgLy8gV2UgbWFpbnRhaW4gdGhpcyBjYWNoZSwgYW5kIHBhc3MgYSBzdHlsZSBwcm9wIHJhdGhlciB0aGFuIGluZGV4LFxuICAgIC8vIFNvIHRoYXQgTGlzdCBjYW4gY2xlYXIgY2FjaGVkIHN0eWxlcyBhbmQgZm9yY2UgaXRlbSByZS1yZW5kZXIgaWYgbmVjZXNzYXJ5LlxuXG5cbiAgICBfcHJvdG8uX2dldEhvcml6b250YWxSYW5nZVRvUmVuZGVyID0gZnVuY3Rpb24gX2dldEhvcml6b250YWxSYW5nZVRvUmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29sdW1uQ291bnQgPSBfdGhpcyRwcm9wczYuY29sdW1uQ291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Db2x1bW5Db3VudCA9IF90aGlzJHByb3BzNi5vdmVyc2NhbkNvbHVtbkNvdW50LFxuICAgICAgICAgIG92ZXJzY2FuQ29sdW1uc0NvdW50ID0gX3RoaXMkcHJvcHM2Lm92ZXJzY2FuQ29sdW1uc0NvdW50LFxuICAgICAgICAgIG92ZXJzY2FuQ291bnQgPSBfdGhpcyRwcm9wczYub3ZlcnNjYW5Db3VudCxcbiAgICAgICAgICByb3dDb3VudCA9IF90aGlzJHByb3BzNi5yb3dDb3VudDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTQgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZTQuaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICBpc1Njcm9sbGluZyA9IF90aGlzJHN0YXRlNC5pc1Njcm9sbGluZyxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gX3RoaXMkc3RhdGU0LnNjcm9sbExlZnQ7XG4gICAgICB2YXIgb3ZlcnNjYW5Db3VudFJlc29sdmVkID0gb3ZlcnNjYW5Db2x1bW5Db3VudCB8fCBvdmVyc2NhbkNvbHVtbnNDb3VudCB8fCBvdmVyc2NhbkNvdW50IHx8IDE7XG5cbiAgICAgIGlmIChjb2x1bW5Db3VudCA9PT0gMCB8fCByb3dDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRJbmRleCA9IGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQodGhpcy5wcm9wcywgc2Nyb2xsTGVmdCwgdGhpcy5faW5zdGFuY2VQcm9wcyk7XG4gICAgICB2YXIgc3RvcEluZGV4ID0gZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleCh0aGlzLnByb3BzLCBzdGFydEluZGV4LCBzY3JvbGxMZWZ0LCB0aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gT3ZlcnNjYW4gYnkgb25lIGl0ZW0gaW4gZWFjaCBkaXJlY3Rpb24gc28gdGhhdCB0YWIvZm9jdXMgd29ya3MuXG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZXh0cmEgaXRlbSwgdGFiIGxvb3BzIGJhY2sgYXJvdW5kLlxuXG4gICAgICB2YXIgb3ZlcnNjYW5CYWNrd2FyZCA9ICFpc1Njcm9sbGluZyB8fCBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID09PSAnYmFja3dhcmQnID8gTWF0aC5tYXgoMSwgb3ZlcnNjYW5Db3VudFJlc29sdmVkKSA6IDE7XG4gICAgICB2YXIgb3ZlcnNjYW5Gb3J3YXJkID0gIWlzU2Nyb2xsaW5nIHx8IGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IE1hdGgubWF4KDEsIG92ZXJzY2FuQ291bnRSZXNvbHZlZCkgOiAxO1xuICAgICAgcmV0dXJuIFtNYXRoLm1heCgwLCBzdGFydEluZGV4IC0gb3ZlcnNjYW5CYWNrd2FyZCksIE1hdGgubWF4KDAsIE1hdGgubWluKGNvbHVtbkNvdW50IC0gMSwgc3RvcEluZGV4ICsgb3ZlcnNjYW5Gb3J3YXJkKSksIHN0YXJ0SW5kZXgsIHN0b3BJbmRleF07XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0VmVydGljYWxSYW5nZVRvUmVuZGVyID0gZnVuY3Rpb24gX2dldFZlcnRpY2FsUmFuZ2VUb1JlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbHVtbkNvdW50ID0gX3RoaXMkcHJvcHM3LmNvbHVtbkNvdW50LFxuICAgICAgICAgIG92ZXJzY2FuQ291bnQgPSBfdGhpcyRwcm9wczcub3ZlcnNjYW5Db3VudCxcbiAgICAgICAgICBvdmVyc2NhblJvd0NvdW50ID0gX3RoaXMkcHJvcHM3Lm92ZXJzY2FuUm93Q291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Sb3dzQ291bnQgPSBfdGhpcyRwcm9wczcub3ZlcnNjYW5Sb3dzQ291bnQsXG4gICAgICAgICAgcm93Q291bnQgPSBfdGhpcyRwcm9wczcucm93Q291bnQ7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU1ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBpc1Njcm9sbGluZyA9IF90aGlzJHN0YXRlNS5pc1Njcm9sbGluZyxcbiAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiA9IF90aGlzJHN0YXRlNS52ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcyRzdGF0ZTUuc2Nyb2xsVG9wO1xuICAgICAgdmFyIG92ZXJzY2FuQ291bnRSZXNvbHZlZCA9IG92ZXJzY2FuUm93Q291bnQgfHwgb3ZlcnNjYW5Sb3dzQ291bnQgfHwgb3ZlcnNjYW5Db3VudCB8fCAxO1xuXG4gICAgICBpZiAoY29sdW1uQ291bnQgPT09IDAgfHwgcm93Q291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0SW5kZXggPSBnZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0KHRoaXMucHJvcHMsIHNjcm9sbFRvcCwgdGhpcy5faW5zdGFuY2VQcm9wcyk7XG4gICAgICB2YXIgc3RvcEluZGV4ID0gZ2V0Um93U3RvcEluZGV4Rm9yU3RhcnRJbmRleCh0aGlzLnByb3BzLCBzdGFydEluZGV4LCBzY3JvbGxUb3AsIHRoaXMuX2luc3RhbmNlUHJvcHMpOyAvLyBPdmVyc2NhbiBieSBvbmUgaXRlbSBpbiBlYWNoIGRpcmVjdGlvbiBzbyB0aGF0IHRhYi9mb2N1cyB3b3Jrcy5cbiAgICAgIC8vIElmIHRoZXJlIGlzbid0IGF0IGxlYXN0IG9uZSBleHRyYSBpdGVtLCB0YWIgbG9vcHMgYmFjayBhcm91bmQuXG5cbiAgICAgIHZhciBvdmVyc2NhbkJhY2t3YXJkID0gIWlzU2Nyb2xsaW5nIHx8IHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uID09PSAnYmFja3dhcmQnID8gTWF0aC5tYXgoMSwgb3ZlcnNjYW5Db3VudFJlc29sdmVkKSA6IDE7XG4gICAgICB2YXIgb3ZlcnNjYW5Gb3J3YXJkID0gIWlzU2Nyb2xsaW5nIHx8IHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uID09PSAnZm9yd2FyZCcgPyBNYXRoLm1heCgxLCBvdmVyc2NhbkNvdW50UmVzb2x2ZWQpIDogMTtcbiAgICAgIHJldHVybiBbTWF0aC5tYXgoMCwgc3RhcnRJbmRleCAtIG92ZXJzY2FuQmFja3dhcmQpLCBNYXRoLm1heCgwLCBNYXRoLm1pbihyb3dDb3VudCAtIDEsIHN0b3BJbmRleCArIG92ZXJzY2FuRm9yd2FyZCkpLCBzdGFydEluZGV4LCBzdG9wSW5kZXhdO1xuICAgIH07XG5cbiAgICByZXR1cm4gR3JpZDtcbiAgfShQdXJlQ29tcG9uZW50KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIGl0ZW1EYXRhOiB1bmRlZmluZWQsXG4gICAgdXNlSXNTY3JvbGxpbmc6IGZhbHNlXG4gIH0sIF90ZW1wO1xufVxuXG52YXIgdmFsaWRhdGVTaGFyZWRQcm9wcyA9IGZ1bmN0aW9uIHZhbGlkYXRlU2hhcmVkUHJvcHMoX3JlZjUsIF9yZWY2KSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWY1LmNoaWxkcmVuLFxuICAgICAgZGlyZWN0aW9uID0gX3JlZjUuZGlyZWN0aW9uLFxuICAgICAgaGVpZ2h0ID0gX3JlZjUuaGVpZ2h0LFxuICAgICAgaW5uZXJUYWdOYW1lID0gX3JlZjUuaW5uZXJUYWdOYW1lLFxuICAgICAgb3V0ZXJUYWdOYW1lID0gX3JlZjUub3V0ZXJUYWdOYW1lLFxuICAgICAgb3ZlcnNjYW5Db2x1bW5zQ291bnQgPSBfcmVmNS5vdmVyc2NhbkNvbHVtbnNDb3VudCxcbiAgICAgIG92ZXJzY2FuQ291bnQgPSBfcmVmNS5vdmVyc2NhbkNvdW50LFxuICAgICAgb3ZlcnNjYW5Sb3dzQ291bnQgPSBfcmVmNS5vdmVyc2NhblJvd3NDb3VudCxcbiAgICAgIHdpZHRoID0gX3JlZjUud2lkdGg7XG4gIHZhciBpbnN0YW5jZSA9IF9yZWY2Lmluc3RhbmNlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBvdmVyc2NhbkNvdW50ID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGRldldhcm5pbmdzT3ZlcnNjYW5Db3VudCAmJiAhZGV2V2FybmluZ3NPdmVyc2NhbkNvdW50LmhhcyhpbnN0YW5jZSkpIHtcbiAgICAgICAgZGV2V2FybmluZ3NPdmVyc2NhbkNvdW50LmFkZChpbnN0YW5jZSk7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIG92ZXJzY2FuQ291bnQgcHJvcCBoYXMgYmVlbiBkZXByZWNhdGVkLiAnICsgJ1BsZWFzZSB1c2UgdGhlIG92ZXJzY2FuQ29sdW1uQ291bnQgYW5kIG92ZXJzY2FuUm93Q291bnQgcHJvcHMgaW5zdGVhZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG92ZXJzY2FuQ29sdW1uc0NvdW50ID09PSAnbnVtYmVyJyB8fCB0eXBlb2Ygb3ZlcnNjYW5Sb3dzQ291bnQgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoZGV2V2FybmluZ3NPdmVyc2NhblJvd3NDb2x1bW5zQ291bnQgJiYgIWRldldhcm5pbmdzT3ZlcnNjYW5Sb3dzQ29sdW1uc0NvdW50LmhhcyhpbnN0YW5jZSkpIHtcbiAgICAgICAgZGV2V2FybmluZ3NPdmVyc2NhblJvd3NDb2x1bW5zQ291bnQuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgb3ZlcnNjYW5Db2x1bW5zQ291bnQgYW5kIG92ZXJzY2FuUm93c0NvdW50IHByb3BzIGhhdmUgYmVlbiBkZXByZWNhdGVkLiAnICsgJ1BsZWFzZSB1c2UgdGhlIG92ZXJzY2FuQ29sdW1uQ291bnQgYW5kIG92ZXJzY2FuUm93Q291bnQgcHJvcHMgaW5zdGVhZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5uZXJUYWdOYW1lICE9IG51bGwgfHwgb3V0ZXJUYWdOYW1lICE9IG51bGwpIHtcbiAgICAgIGlmIChkZXZXYXJuaW5nc1RhZ05hbWUgJiYgIWRldldhcm5pbmdzVGFnTmFtZS5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgIGRldldhcm5pbmdzVGFnTmFtZS5hZGQoaW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBpbm5lclRhZ05hbWUgYW5kIG91dGVyVGFnTmFtZSBwcm9wcyBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gJyArICdQbGVhc2UgdXNlIHRoZSBpbm5lckVsZW1lbnRUeXBlIGFuZCBvdXRlckVsZW1lbnRUeXBlIHByb3BzIGluc3RlYWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiY2hpbGRyZW5cIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBSZWFjdCBjb21wb25lbnQuICcgKyAoXCJcXFwiXCIgKyAoY2hpbGRyZW4gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgY2hpbGRyZW4pICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAnbHRyJzpcbiAgICAgIGNhc2UgJ3J0bCc6XG4gICAgICAgIC8vIFZhbGlkIHZhbHVlc1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJkaXJlY3Rpb25cIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgZWl0aGVyIFwibHRyXCIgb3IgXCJydGxcIi4gJyArIChcIlxcXCJcIiArIGRpcmVjdGlvbiArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwid2lkdGhcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdHcmlkcyBtdXN0IHNwZWNpZnkgYSBudW1iZXIgZm9yIHdpZHRoLiAnICsgKFwiXFxcIlwiICsgKHdpZHRoID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHdpZHRoKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImhlaWdodFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ0dyaWRzIG11c3Qgc3BlY2lmeSBhIG51bWJlciBmb3IgaGVpZ2h0LiAnICsgKFwiXFxcIlwiICsgKGhlaWdodCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBoZWlnaHQpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBERUZBVUxUX0VTVElNQVRFRF9JVEVNX1NJWkUgPSA1MDtcblxudmFyIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0ID0gZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQoX3JlZiwgX3JlZjIpIHtcbiAgdmFyIHJvd0NvdW50ID0gX3JlZi5yb3dDb3VudDtcbiAgdmFyIHJvd01ldGFkYXRhTWFwID0gX3JlZjIucm93TWV0YWRhdGFNYXAsXG4gICAgICBlc3RpbWF0ZWRSb3dIZWlnaHQgPSBfcmVmMi5lc3RpbWF0ZWRSb3dIZWlnaHQsXG4gICAgICBsYXN0TWVhc3VyZWRSb3dJbmRleCA9IF9yZWYyLmxhc3RNZWFzdXJlZFJvd0luZGV4O1xuICB2YXIgdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgPSAwOyAvLyBFZGdlIGNhc2UgY2hlY2sgZm9yIHdoZW4gdGhlIG51bWJlciBvZiBpdGVtcyBkZWNyZWFzZXMgd2hpbGUgYSBzY3JvbGwgaXMgaW4gcHJvZ3Jlc3MuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9idmF1Z2huL3JlYWN0LXdpbmRvdy9wdWxsLzEzOFxuXG4gIGlmIChsYXN0TWVhc3VyZWRSb3dJbmRleCA+PSByb3dDb3VudCkge1xuICAgIGxhc3RNZWFzdXJlZFJvd0luZGV4ID0gcm93Q291bnQgLSAxO1xuICB9XG5cbiAgaWYgKGxhc3RNZWFzdXJlZFJvd0luZGV4ID49IDApIHtcbiAgICB2YXIgaXRlbU1ldGFkYXRhID0gcm93TWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkUm93SW5kZXhdO1xuICAgIHRvdGFsU2l6ZU9mTWVhc3VyZWRSb3dzID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICB9XG5cbiAgdmFyIG51bVVubWVhc3VyZWRJdGVtcyA9IHJvd0NvdW50IC0gbGFzdE1lYXN1cmVkUm93SW5kZXggLSAxO1xuICB2YXIgdG90YWxTaXplT2ZVbm1lYXN1cmVkSXRlbXMgPSBudW1Vbm1lYXN1cmVkSXRlbXMgKiBlc3RpbWF0ZWRSb3dIZWlnaHQ7XG4gIHJldHVybiB0b3RhbFNpemVPZk1lYXN1cmVkUm93cyArIHRvdGFsU2l6ZU9mVW5tZWFzdXJlZEl0ZW1zO1xufTtcblxudmFyIGdldEVzdGltYXRlZFRvdGFsV2lkdGggPSBmdW5jdGlvbiBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoKF9yZWYzLCBfcmVmNCkge1xuICB2YXIgY29sdW1uQ291bnQgPSBfcmVmMy5jb2x1bW5Db3VudDtcbiAgdmFyIGNvbHVtbk1ldGFkYXRhTWFwID0gX3JlZjQuY29sdW1uTWV0YWRhdGFNYXAsXG4gICAgICBlc3RpbWF0ZWRDb2x1bW5XaWR0aCA9IF9yZWY0LmVzdGltYXRlZENvbHVtbldpZHRoLFxuICAgICAgbGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggPSBfcmVmNC5sYXN0TWVhc3VyZWRDb2x1bW5JbmRleDtcbiAgdmFyIHRvdGFsU2l6ZU9mTWVhc3VyZWRSb3dzID0gMDsgLy8gRWRnZSBjYXNlIGNoZWNrIGZvciB3aGVuIHRoZSBudW1iZXIgb2YgaXRlbXMgZGVjcmVhc2VzIHdoaWxlIGEgc2Nyb2xsIGlzIGluIHByb2dyZXNzLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYnZhdWdobi9yZWFjdC13aW5kb3cvcHVsbC8xMzhcblxuICBpZiAobGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggPj0gY29sdW1uQ291bnQpIHtcbiAgICBsYXN0TWVhc3VyZWRDb2x1bW5JbmRleCA9IGNvbHVtbkNvdW50IC0gMTtcbiAgfVxuXG4gIGlmIChsYXN0TWVhc3VyZWRDb2x1bW5JbmRleCA+PSAwKSB7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGNvbHVtbk1ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZENvbHVtbkluZGV4XTtcbiAgICB0b3RhbFNpemVPZk1lYXN1cmVkUm93cyA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgfVxuXG4gIHZhciBudW1Vbm1lYXN1cmVkSXRlbXMgPSBjb2x1bW5Db3VudCAtIGxhc3RNZWFzdXJlZENvbHVtbkluZGV4IC0gMTtcbiAgdmFyIHRvdGFsU2l6ZU9mVW5tZWFzdXJlZEl0ZW1zID0gbnVtVW5tZWFzdXJlZEl0ZW1zICogZXN0aW1hdGVkQ29sdW1uV2lkdGg7XG4gIHJldHVybiB0b3RhbFNpemVPZk1lYXN1cmVkUm93cyArIHRvdGFsU2l6ZU9mVW5tZWFzdXJlZEl0ZW1zO1xufTtcblxudmFyIGdldEl0ZW1NZXRhZGF0YSA9IGZ1bmN0aW9uIGdldEl0ZW1NZXRhZGF0YShpdGVtVHlwZSwgcHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gIHZhciBpdGVtTWV0YWRhdGFNYXAsIGl0ZW1TaXplLCBsYXN0TWVhc3VyZWRJbmRleDtcblxuICBpZiAoaXRlbVR5cGUgPT09ICdjb2x1bW4nKSB7XG4gICAgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5jb2x1bW5NZXRhZGF0YU1hcDtcbiAgICBpdGVtU2l6ZSA9IHByb3BzLmNvbHVtbldpZHRoO1xuICAgIGxhc3RNZWFzdXJlZEluZGV4ID0gaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRDb2x1bW5JbmRleDtcbiAgfSBlbHNlIHtcbiAgICBpdGVtTWV0YWRhdGFNYXAgPSBpbnN0YW5jZVByb3BzLnJvd01ldGFkYXRhTWFwO1xuICAgIGl0ZW1TaXplID0gcHJvcHMucm93SGVpZ2h0O1xuICAgIGxhc3RNZWFzdXJlZEluZGV4ID0gaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRSb3dJbmRleDtcbiAgfVxuXG4gIGlmIChpbmRleCA+IGxhc3RNZWFzdXJlZEluZGV4KSB7XG4gICAgdmFyIG9mZnNldCA9IDA7XG5cbiAgICBpZiAobGFzdE1lYXN1cmVkSW5kZXggPj0gMCkge1xuICAgICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGl0ZW1NZXRhZGF0YU1hcFtsYXN0TWVhc3VyZWRJbmRleF07XG4gICAgICBvZmZzZXQgPSBpdGVtTWV0YWRhdGEub2Zmc2V0ICsgaXRlbU1ldGFkYXRhLnNpemU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IGxhc3RNZWFzdXJlZEluZGV4ICsgMTsgaSA8PSBpbmRleDsgaSsrKSB7XG4gICAgICB2YXIgc2l6ZSA9IGl0ZW1TaXplKGkpO1xuICAgICAgaXRlbU1ldGFkYXRhTWFwW2ldID0ge1xuICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgfTtcbiAgICAgIG9mZnNldCArPSBzaXplO1xuICAgIH1cblxuICAgIGlmIChpdGVtVHlwZSA9PT0gJ2NvbHVtbicpIHtcbiAgICAgIGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggPSBpbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRSb3dJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpdGVtTWV0YWRhdGFNYXBbaW5kZXhdO1xufTtcblxudmFyIGZpbmROZWFyZXN0SXRlbSA9IGZ1bmN0aW9uIGZpbmROZWFyZXN0SXRlbShpdGVtVHlwZSwgcHJvcHMsIGluc3RhbmNlUHJvcHMsIG9mZnNldCkge1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwLCBsYXN0TWVhc3VyZWRJbmRleDtcblxuICBpZiAoaXRlbVR5cGUgPT09ICdjb2x1bW4nKSB7XG4gICAgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5jb2x1bW5NZXRhZGF0YU1hcDtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkQ29sdW1uSW5kZXg7XG4gIH0gZWxzZSB7XG4gICAgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5yb3dNZXRhZGF0YU1hcDtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXg7XG4gIH1cblxuICB2YXIgbGFzdE1lYXN1cmVkSXRlbU9mZnNldCA9IGxhc3RNZWFzdXJlZEluZGV4ID4gMCA/IGl0ZW1NZXRhZGF0YU1hcFtsYXN0TWVhc3VyZWRJbmRleF0ub2Zmc2V0IDogMDtcblxuICBpZiAobGFzdE1lYXN1cmVkSXRlbU9mZnNldCA+PSBvZmZzZXQpIHtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IG1lYXN1cmVkIGl0ZW1zIHdpdGhpbiB0aGlzIHJhbmdlIGp1c3QgdXNlIGEgYmluYXJ5IHNlYXJjaCBhcyBpdCdzIGZhc3Rlci5cbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoKGl0ZW1UeXBlLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgbGFzdE1lYXN1cmVkSW5kZXgsIDAsIG9mZnNldCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgd2UgaGF2ZW4ndCB5ZXQgbWVhc3VyZWQgdGhpcyBoaWdoLCBmYWxsYmFjayB0byBhbiBleHBvbmVudGlhbCBzZWFyY2ggd2l0aCBhbiBpbm5lciBiaW5hcnkgc2VhcmNoLlxuICAgIC8vIFRoZSBleHBvbmVudGlhbCBzZWFyY2ggYXZvaWRzIHByZS1jb21wdXRpbmcgc2l6ZXMgZm9yIHRoZSBmdWxsIHNldCBvZiBpdGVtcyBhcyBhIGJpbmFyeSBzZWFyY2ggd291bGQuXG4gICAgLy8gVGhlIG92ZXJhbGwgY29tcGxleGl0eSBmb3IgdGhpcyBhcHByb2FjaCBpcyBPKGxvZyBuKS5cbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2goaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBNYXRoLm1heCgwLCBsYXN0TWVhc3VyZWRJbmRleCksIG9mZnNldCk7XG4gIH1cbn07XG5cbnZhciBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2ggPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2goaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBoaWdoLCBsb3csIG9mZnNldCkge1xuICB3aGlsZSAobG93IDw9IGhpZ2gpIHtcbiAgICB2YXIgbWlkZGxlID0gbG93ICsgTWF0aC5mbG9vcigoaGlnaCAtIGxvdykgLyAyKTtcbiAgICB2YXIgY3VycmVudE9mZnNldCA9IGdldEl0ZW1NZXRhZGF0YShpdGVtVHlwZSwgcHJvcHMsIG1pZGRsZSwgaW5zdGFuY2VQcm9wcykub2Zmc2V0O1xuXG4gICAgaWYgKGN1cnJlbnRPZmZzZXQgPT09IG9mZnNldCkge1xuICAgICAgcmV0dXJuIG1pZGRsZTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRPZmZzZXQgPCBvZmZzZXQpIHtcbiAgICAgIGxvdyA9IG1pZGRsZSArIDE7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50T2Zmc2V0ID4gb2Zmc2V0KSB7XG4gICAgICBoaWdoID0gbWlkZGxlIC0gMTtcbiAgICB9XG4gIH1cblxuICBpZiAobG93ID4gMCkge1xuICAgIHJldHVybiBsb3cgLSAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2ggPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW1FeHBvbmVudGlhbFNlYXJjaChpdGVtVHlwZSwgcHJvcHMsIGluc3RhbmNlUHJvcHMsIGluZGV4LCBvZmZzZXQpIHtcbiAgdmFyIGl0ZW1Db3VudCA9IGl0ZW1UeXBlID09PSAnY29sdW1uJyA/IHByb3BzLmNvbHVtbkNvdW50IDogcHJvcHMucm93Q291bnQ7XG4gIHZhciBpbnRlcnZhbCA9IDE7XG5cbiAgd2hpbGUgKGluZGV4IDwgaXRlbUNvdW50ICYmIGdldEl0ZW1NZXRhZGF0YShpdGVtVHlwZSwgcHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKS5vZmZzZXQgPCBvZmZzZXQpIHtcbiAgICBpbmRleCArPSBpbnRlcnZhbDtcbiAgICBpbnRlcnZhbCAqPSAyO1xuICB9XG5cbiAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbUJpbmFyeVNlYXJjaChpdGVtVHlwZSwgcHJvcHMsIGluc3RhbmNlUHJvcHMsIE1hdGgubWluKGluZGV4LCBpdGVtQ291bnQgLSAxKSwgTWF0aC5mbG9vcihpbmRleCAvIDIpLCBvZmZzZXQpO1xufTtcblxudmFyIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50ID0gZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQoaXRlbVR5cGUsIHByb3BzLCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSkge1xuICB2YXIgc2l6ZSA9IGl0ZW1UeXBlID09PSAnY29sdW1uJyA/IHByb3BzLndpZHRoIDogcHJvcHMuaGVpZ2h0O1xuICB2YXIgaXRlbU1ldGFkYXRhID0gZ2V0SXRlbU1ldGFkYXRhKGl0ZW1UeXBlLCBwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpOyAvLyBHZXQgZXN0aW1hdGVkIHRvdGFsIHNpemUgYWZ0ZXIgSXRlbU1ldGFkYXRhIGlzIGNvbXB1dGVkLFxuICAvLyBUbyBlbnN1cmUgaXQgcmVmbGVjdHMgYWN0dWFsIG1lYXN1cmVtZW50cyBpbnN0ZWFkIG9mIGp1c3QgZXN0aW1hdGVzLlxuXG4gIHZhciBlc3RpbWF0ZWRUb3RhbFNpemUgPSBpdGVtVHlwZSA9PT0gJ2NvbHVtbicgPyBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoKHByb3BzLCBpbnN0YW5jZVByb3BzKSA6IGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0KHByb3BzLCBpbnN0YW5jZVByb3BzKTtcbiAgdmFyIG1heE9mZnNldCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGVzdGltYXRlZFRvdGFsU2l6ZSAtIHNpemUsIGl0ZW1NZXRhZGF0YS5vZmZzZXQpKTtcbiAgdmFyIG1pbk9mZnNldCA9IE1hdGgubWF4KDAsIGl0ZW1NZXRhZGF0YS5vZmZzZXQgLSBzaXplICsgc2Nyb2xsYmFyU2l6ZSArIGl0ZW1NZXRhZGF0YS5zaXplKTtcblxuICBpZiAoYWxpZ24gPT09ICdzbWFydCcpIHtcbiAgICBpZiAoc2Nyb2xsT2Zmc2V0ID49IG1pbk9mZnNldCAtIHNpemUgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCArIHNpemUpIHtcbiAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGlnbiA9ICdjZW50ZXInO1xuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAoYWxpZ24pIHtcbiAgICBjYXNlICdzdGFydCc6XG4gICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuXG4gICAgY2FzZSAnZW5kJzpcbiAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG5cbiAgICBjYXNlICdjZW50ZXInOlxuICAgICAgcmV0dXJuIE1hdGgucm91bmQobWluT2Zmc2V0ICsgKG1heE9mZnNldCAtIG1pbk9mZnNldCkgLyAyKTtcblxuICAgIGNhc2UgJ2F1dG8nOlxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoc2Nyb2xsT2Zmc2V0ID49IG1pbk9mZnNldCAmJiBzY3JvbGxPZmZzZXQgPD0gbWF4T2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxPZmZzZXQ7XG4gICAgICB9IGVsc2UgaWYgKG1pbk9mZnNldCA+IG1heE9mZnNldCkge1xuICAgICAgICAvLyBCZWNhdXNlIHdlIG9ubHkgdGFrZSBpbnRvIGFjY291bnQgdGhlIHNjcm9sbGJhciBzaXplIHdoZW4gY2FsY3VsYXRpbmcgbWluT2Zmc2V0XG4gICAgICAgIC8vIHRoaXMgdmFsdWUgY2FuIGJlIGxhcmdlciB0aGFuIG1heE9mZnNldCB3aGVuIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsT2Zmc2V0IDwgbWluT2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgfVxuXG4gIH1cbn07XG5cbnZhciBWYXJpYWJsZVNpemVHcmlkID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUdyaWRDb21wb25lbnQoe1xuICBnZXRDb2x1bW5PZmZzZXQ6IGZ1bmN0aW9uIGdldENvbHVtbk9mZnNldChwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gZ2V0SXRlbU1ldGFkYXRhKCdjb2x1bW4nLCBwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpLm9mZnNldDtcbiAgfSxcbiAgZ2V0Q29sdW1uU3RhcnRJbmRleEZvck9mZnNldDogZnVuY3Rpb24gZ2V0Q29sdW1uU3RhcnRJbmRleEZvck9mZnNldChwcm9wcywgc2Nyb2xsTGVmdCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBmaW5kTmVhcmVzdEl0ZW0oJ2NvbHVtbicsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBzY3JvbGxMZWZ0KTtcbiAgfSxcbiAgZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleDogZnVuY3Rpb24gZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleChwcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsTGVmdCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHZhciBjb2x1bW5Db3VudCA9IHByb3BzLmNvbHVtbkNvdW50LFxuICAgICAgICB3aWR0aCA9IHByb3BzLndpZHRoO1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBnZXRJdGVtTWV0YWRhdGEoJ2NvbHVtbicsIHByb3BzLCBzdGFydEluZGV4LCBpbnN0YW5jZVByb3BzKTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gc2Nyb2xsTGVmdCArIHdpZHRoO1xuICAgIHZhciBvZmZzZXQgPSBpdGVtTWV0YWRhdGEub2Zmc2V0ICsgaXRlbU1ldGFkYXRhLnNpemU7XG4gICAgdmFyIHN0b3BJbmRleCA9IHN0YXJ0SW5kZXg7XG5cbiAgICB3aGlsZSAoc3RvcEluZGV4IDwgY29sdW1uQ291bnQgLSAxICYmIG9mZnNldCA8IG1heE9mZnNldCkge1xuICAgICAgc3RvcEluZGV4Kys7XG4gICAgICBvZmZzZXQgKz0gZ2V0SXRlbU1ldGFkYXRhKCdjb2x1bW4nLCBwcm9wcywgc3RvcEluZGV4LCBpbnN0YW5jZVByb3BzKS5zaXplO1xuICAgIH1cblxuICAgIHJldHVybiBzdG9wSW5kZXg7XG4gIH0sXG4gIGdldENvbHVtbldpZHRoOiBmdW5jdGlvbiBnZXRDb2x1bW5XaWR0aChwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcy5jb2x1bW5NZXRhZGF0YU1hcFtpbmRleF0uc2l6ZTtcbiAgfSxcbiAgZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQ6IGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0LFxuICBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoOiBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoLFxuICBnZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudChwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQoJ2NvbHVtbicsIHByb3BzLCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSk7XG4gIH0sXG4gIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudDogZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9yUm93QW5kQWxpZ25tZW50KHByb3BzLCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSkge1xuICAgIHJldHVybiBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudCgncm93JywgcHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKTtcbiAgfSxcbiAgZ2V0Um93T2Zmc2V0OiBmdW5jdGlvbiBnZXRSb3dPZmZzZXQocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGdldEl0ZW1NZXRhZGF0YSgncm93JywgcHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKS5vZmZzZXQ7XG4gIH0sXG4gIGdldFJvd0hlaWdodDogZnVuY3Rpb24gZ2V0Um93SGVpZ2h0KHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBpbnN0YW5jZVByb3BzLnJvd01ldGFkYXRhTWFwW2luZGV4XS5zaXplO1xuICB9LFxuICBnZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0OiBmdW5jdGlvbiBnZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0KHByb3BzLCBzY3JvbGxUb3AsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtKCdyb3cnLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgc2Nyb2xsVG9wKTtcbiAgfSxcbiAgZ2V0Um93U3RvcEluZGV4Rm9yU3RhcnRJbmRleDogZnVuY3Rpb24gZ2V0Um93U3RvcEluZGV4Rm9yU3RhcnRJbmRleChwcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsVG9wLCBpbnN0YW5jZVByb3BzKSB7XG4gICAgdmFyIHJvd0NvdW50ID0gcHJvcHMucm93Q291bnQsXG4gICAgICAgIGhlaWdodCA9IHByb3BzLmhlaWdodDtcbiAgICB2YXIgaXRlbU1ldGFkYXRhID0gZ2V0SXRlbU1ldGFkYXRhKCdyb3cnLCBwcm9wcywgc3RhcnRJbmRleCwgaW5zdGFuY2VQcm9wcyk7XG4gICAgdmFyIG1heE9mZnNldCA9IHNjcm9sbFRvcCArIGhlaWdodDtcbiAgICB2YXIgb2Zmc2V0ID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICAgIHZhciBzdG9wSW5kZXggPSBzdGFydEluZGV4O1xuXG4gICAgd2hpbGUgKHN0b3BJbmRleCA8IHJvd0NvdW50IC0gMSAmJiBvZmZzZXQgPCBtYXhPZmZzZXQpIHtcbiAgICAgIHN0b3BJbmRleCsrO1xuICAgICAgb2Zmc2V0ICs9IGdldEl0ZW1NZXRhZGF0YSgncm93JywgcHJvcHMsIHN0b3BJbmRleCwgaW5zdGFuY2VQcm9wcykuc2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcEluZGV4O1xuICB9LFxuICBpbml0SW5zdGFuY2VQcm9wczogZnVuY3Rpb24gaW5pdEluc3RhbmNlUHJvcHMocHJvcHMsIGluc3RhbmNlKSB7XG4gICAgdmFyIF9yZWY1ID0gcHJvcHMsXG4gICAgICAgIGVzdGltYXRlZENvbHVtbldpZHRoID0gX3JlZjUuZXN0aW1hdGVkQ29sdW1uV2lkdGgsXG4gICAgICAgIGVzdGltYXRlZFJvd0hlaWdodCA9IF9yZWY1LmVzdGltYXRlZFJvd0hlaWdodDtcbiAgICB2YXIgaW5zdGFuY2VQcm9wcyA9IHtcbiAgICAgIGNvbHVtbk1ldGFkYXRhTWFwOiB7fSxcbiAgICAgIGVzdGltYXRlZENvbHVtbldpZHRoOiBlc3RpbWF0ZWRDb2x1bW5XaWR0aCB8fCBERUZBVUxUX0VTVElNQVRFRF9JVEVNX1NJWkUsXG4gICAgICBlc3RpbWF0ZWRSb3dIZWlnaHQ6IGVzdGltYXRlZFJvd0hlaWdodCB8fCBERUZBVUxUX0VTVElNQVRFRF9JVEVNX1NJWkUsXG4gICAgICBsYXN0TWVhc3VyZWRDb2x1bW5JbmRleDogLTEsXG4gICAgICBsYXN0TWVhc3VyZWRSb3dJbmRleDogLTEsXG4gICAgICByb3dNZXRhZGF0YU1hcDoge31cbiAgICB9O1xuXG4gICAgaW5zdGFuY2UucmVzZXRBZnRlckNvbHVtbkluZGV4ID0gZnVuY3Rpb24gKGNvbHVtbkluZGV4LCBzaG91bGRGb3JjZVVwZGF0ZSkge1xuICAgICAgaWYgKHNob3VsZEZvcmNlVXBkYXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgc2hvdWxkRm9yY2VVcGRhdGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS5yZXNldEFmdGVySW5kaWNlcyh7XG4gICAgICAgIGNvbHVtbkluZGV4OiBjb2x1bW5JbmRleCxcbiAgICAgICAgc2hvdWxkRm9yY2VVcGRhdGU6IHNob3VsZEZvcmNlVXBkYXRlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UucmVzZXRBZnRlclJvd0luZGV4ID0gZnVuY3Rpb24gKHJvd0luZGV4LCBzaG91bGRGb3JjZVVwZGF0ZSkge1xuICAgICAgaWYgKHNob3VsZEZvcmNlVXBkYXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgc2hvdWxkRm9yY2VVcGRhdGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZS5yZXNldEFmdGVySW5kaWNlcyh7XG4gICAgICAgIHJvd0luZGV4OiByb3dJbmRleCxcbiAgICAgICAgc2hvdWxkRm9yY2VVcGRhdGU6IHNob3VsZEZvcmNlVXBkYXRlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UucmVzZXRBZnRlckluZGljZXMgPSBmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICAgIHZhciBjb2x1bW5JbmRleCA9IF9yZWY2LmNvbHVtbkluZGV4LFxuICAgICAgICAgIHJvd0luZGV4ID0gX3JlZjYucm93SW5kZXgsXG4gICAgICAgICAgX3JlZjYkc2hvdWxkRm9yY2VVcGRhID0gX3JlZjYuc2hvdWxkRm9yY2VVcGRhdGUsXG4gICAgICAgICAgc2hvdWxkRm9yY2VVcGRhdGUgPSBfcmVmNiRzaG91bGRGb3JjZVVwZGEgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmNiRzaG91bGRGb3JjZVVwZGE7XG5cbiAgICAgIGlmICh0eXBlb2YgY29sdW1uSW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggPSBNYXRoLm1pbihpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4LCBjb2x1bW5JbmRleCAtIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHJvd0luZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZFJvd0luZGV4ID0gTWF0aC5taW4oaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRSb3dJbmRleCwgcm93SW5kZXggLSAxKTtcbiAgICAgIH0gLy8gV2UgY291bGQgcG90ZW50aWFsbHkgb3B0aW1pemUgZnVydGhlciBieSBvbmx5IGV2aWN0aW5nIHN0eWxlcyBhZnRlciB0aGlzIGluZGV4LFxuICAgICAgLy8gQnV0IHNpbmNlIHN0eWxlcyBhcmUgb25seSBjYWNoZWQgd2hpbGUgc2Nyb2xsaW5nIGlzIGluIHByb2dyZXNzLVxuICAgICAgLy8gSXQgc2VlbXMgYW4gdW5uZWNlc3Nhcnkgb3B0aW1pemF0aW9uLlxuICAgICAgLy8gSXQncyB1bmxpa2VseSB0aGF0IHJlc2V0QWZ0ZXJJbmRleCgpIHdpbGwgYmUgY2FsbGVkIHdoaWxlIGEgdXNlciBpcyBzY3JvbGxpbmcuXG5cblxuICAgICAgaW5zdGFuY2UuX2dldEl0ZW1TdHlsZUNhY2hlKC0xKTtcblxuICAgICAgaWYgKHNob3VsZEZvcmNlVXBkYXRlKSB7XG4gICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZVByb3BzO1xuICB9LFxuICBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlOiBmYWxzZSxcbiAgdmFsaWRhdGVQcm9wczogZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhfcmVmNykge1xuICAgIHZhciBjb2x1bW5XaWR0aCA9IF9yZWY3LmNvbHVtbldpZHRoLFxuICAgICAgICByb3dIZWlnaHQgPSBfcmVmNy5yb3dIZWlnaHQ7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBjb2x1bW5XaWR0aCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImNvbHVtbldpZHRoXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgZnVuY3Rpb24uICcgKyAoXCJcXFwiXCIgKyAoY29sdW1uV2lkdGggPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgY29sdW1uV2lkdGgpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJvd0hlaWdodCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcInJvd0hlaWdodFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIGZ1bmN0aW9uLiAnICsgKFwiXFxcIlwiICsgKHJvd0hlaWdodCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByb3dIZWlnaHQpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgSVNfU0NST0xMSU5HX0RFQk9VTkNFX0lOVEVSVkFMJDEgPSAxNTA7XG5cbnZhciBkZWZhdWx0SXRlbUtleSQxID0gZnVuY3Rpb24gZGVmYXVsdEl0ZW1LZXkoaW5kZXgsIGRhdGEpIHtcbiAgcmV0dXJuIGluZGV4O1xufTsgLy8gSW4gREVWIG1vZGUsIHRoaXMgU2V0IGhlbHBzIHVzIG9ubHkgbG9nIGEgd2FybmluZyBvbmNlIHBlciBjb21wb25lbnQgaW5zdGFuY2UuXG4vLyBUaGlzIGF2b2lkcyBzcGFtbWluZyB0aGUgY29uc29sZSBldmVyeSB0aW1lIGEgcmVuZGVyIGhhcHBlbnMuXG5cblxudmFyIGRldldhcm5pbmdzRGlyZWN0aW9uID0gbnVsbDtcbnZhciBkZXZXYXJuaW5nc1RhZ05hbWUkMSA9IG51bGw7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LldlYWtTZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGV2V2FybmluZ3NEaXJlY3Rpb24gPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBuZXcgV2Vha1NldCgpO1xuICAgIGRldldhcm5pbmdzVGFnTmFtZSQxID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0Q29tcG9uZW50KF9yZWYpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgdmFyIGdldEl0ZW1PZmZzZXQgPSBfcmVmLmdldEl0ZW1PZmZzZXQsXG4gICAgICBnZXRFc3RpbWF0ZWRUb3RhbFNpemUgPSBfcmVmLmdldEVzdGltYXRlZFRvdGFsU2l6ZSxcbiAgICAgIGdldEl0ZW1TaXplID0gX3JlZi5nZXRJdGVtU2l6ZSxcbiAgICAgIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50ID0gX3JlZi5nZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudCxcbiAgICAgIGdldFN0YXJ0SW5kZXhGb3JPZmZzZXQgPSBfcmVmLmdldFN0YXJ0SW5kZXhGb3JPZmZzZXQsXG4gICAgICBnZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4ID0gX3JlZi5nZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4LFxuICAgICAgaW5pdEluc3RhbmNlUHJvcHMgPSBfcmVmLmluaXRJbnN0YW5jZVByb3BzLFxuICAgICAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSA9IF9yZWYuc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSxcbiAgICAgIHZhbGlkYXRlUHJvcHMgPSBfcmVmLnZhbGlkYXRlUHJvcHM7XG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzTG9vc2UoTGlzdCwgX1B1cmVDb21wb25lbnQpO1xuXG4gICAgLy8gQWx3YXlzIHVzZSBleHBsaWNpdCBjb25zdHJ1Y3RvciBmb3IgUmVhY3QgY29tcG9uZW50cy5cbiAgICAvLyBJdCBwcm9kdWNlcyBsZXNzIGNvZGUgYWZ0ZXIgdHJhbnNwaWxhdGlvbi4gKCMyNilcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX3RoaXMgPSBfUHVyZUNvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgX3RoaXMuX2luc3RhbmNlUHJvcHMgPSBpbml0SW5zdGFuY2VQcm9wcyhfdGhpcy5wcm9wcywgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgICAgX3RoaXMuX291dGVyUmVmID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGluc3RhbmNlOiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSxcbiAgICAgICAgaXNTY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICBzY3JvbGxEaXJlY3Rpb246ICdmb3J3YXJkJyxcbiAgICAgICAgc2Nyb2xsT2Zmc2V0OiB0eXBlb2YgX3RoaXMucHJvcHMuaW5pdGlhbFNjcm9sbE9mZnNldCA9PT0gJ251bWJlcicgPyBfdGhpcy5wcm9wcy5pbml0aWFsU2Nyb2xsT2Zmc2V0IDogMCxcbiAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIF90aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2NhbGxPbkl0ZW1zUmVuZGVyZWQgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChvdmVyc2NhblN0YXJ0SW5kZXgsIG92ZXJzY2FuU3RvcEluZGV4LCB2aXNpYmxlU3RhcnRJbmRleCwgdmlzaWJsZVN0b3BJbmRleCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub25JdGVtc1JlbmRlcmVkKHtcbiAgICAgICAgICBvdmVyc2NhblN0YXJ0SW5kZXg6IG92ZXJzY2FuU3RhcnRJbmRleCxcbiAgICAgICAgICBvdmVyc2NhblN0b3BJbmRleDogb3ZlcnNjYW5TdG9wSW5kZXgsXG4gICAgICAgICAgdmlzaWJsZVN0YXJ0SW5kZXg6IHZpc2libGVTdGFydEluZGV4LFxuICAgICAgICAgIHZpc2libGVTdG9wSW5kZXg6IHZpc2libGVTdG9wSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIF90aGlzLl9jYWxsT25TY3JvbGwgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5fY2FsbE9uU2Nyb2xsID0gbWVtb2l6ZU9uZShmdW5jdGlvbiAoc2Nyb2xsRGlyZWN0aW9uLCBzY3JvbGxPZmZzZXQsIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub25TY3JvbGwoe1xuICAgICAgICAgIHNjcm9sbERpcmVjdGlvbjogc2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgIHNjcm9sbE9mZnNldDogc2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlID0gdm9pZCAwO1xuXG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICAgICAgaXRlbVNpemUgPSBfdGhpcyRwcm9wcy5pdGVtU2l6ZSxcbiAgICAgICAgICAgIGxheW91dCA9IF90aGlzJHByb3BzLmxheW91dDtcblxuICAgICAgICB2YXIgaXRlbVN0eWxlQ2FjaGUgPSBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUoc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSAmJiBpdGVtU2l6ZSwgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSAmJiBsYXlvdXQsIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgZGlyZWN0aW9uKTtcblxuICAgICAgICB2YXIgc3R5bGU7XG5cbiAgICAgICAgaWYgKGl0ZW1TdHlsZUNhY2hlLmhhc093blByb3BlcnR5KGluZGV4KSkge1xuICAgICAgICAgIHN0eWxlID0gaXRlbVN0eWxlQ2FjaGVbaW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfc3R5bGU7XG5cbiAgICAgICAgICB2YXIgX29mZnNldCA9IGdldEl0ZW1PZmZzZXQoX3RoaXMucHJvcHMsIGluZGV4LCBfdGhpcy5faW5zdGFuY2VQcm9wcyk7XG5cbiAgICAgICAgICB2YXIgc2l6ZSA9IGdldEl0ZW1TaXplKF90aGlzLnByb3BzLCBpbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgICAgICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICAgICAgICBpdGVtU3R5bGVDYWNoZVtpbmRleF0gPSBzdHlsZSA9IChfc3R5bGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICAgIH0sIF9zdHlsZVtkaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSBpc0hvcml6b250YWwgPyBfb2Zmc2V0IDogMCwgX3N0eWxlLnRvcCA9ICFpc0hvcml6b250YWwgPyBfb2Zmc2V0IDogMCwgX3N0eWxlLmhlaWdodCA9ICFpc0hvcml6b250YWwgPyBzaXplIDogJzEwMCUnLCBfc3R5bGUud2lkdGggPSBpc0hvcml6b250YWwgPyBzaXplIDogJzEwMCUnLCBfc3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlID0gbWVtb2l6ZU9uZShmdW5jdGlvbiAoXywgX18sIF9fXykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuX29uU2Nyb2xsSG9yaXpvbnRhbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX2V2ZW50JGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgY2xpZW50V2lkdGggPSBfZXZlbnQkY3VycmVudFRhcmdldC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIHNjcm9sbExlZnQgPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsV2lkdGggPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxXaWR0aDtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgaWYgKHByZXZTdGF0ZS5zY3JvbGxPZmZzZXQgPT09IHNjcm9sbExlZnQpIHtcbiAgICAgICAgICAgIC8vIFNjcm9sbCBwb3NpdGlvbiBtYXkgaGF2ZSBiZWVuIHVwZGF0ZWQgYnkgY0RNL2NEVSxcbiAgICAgICAgICAgIC8vIEluIHdoaWNoIGNhc2Ugd2UgZG9uJ3QgbmVlZCB0byB0cmlnZ2VyIGFub3RoZXIgcmVuZGVyLFxuICAgICAgICAgICAgLy8gQW5kIHdlIGRvbid0IHdhbnQgdG8gdXBkYXRlIHN0YXRlLmlzU2Nyb2xsaW5nLlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IF90aGlzLnByb3BzLmRpcmVjdGlvbjtcbiAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gc2Nyb2xsTGVmdDtcblxuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgICAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCB0aGUgY2FzZSBmb3IgYWxsIGJyb3dzZXJzIHRob3VnaCAoZS5nLiBDaHJvbWUgcmVwb3J0cyB2YWx1ZXMgYXMgcG9zaXRpdmUsIG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSBsZWZ0KS5cbiAgICAgICAgICAgIC8vIEl0J3MgYWxzbyBlYXNpZXIgZm9yIHRoaXMgY29tcG9uZW50IGlmIHdlIGNvbnZlcnQgb2Zmc2V0cyB0byB0aGUgc2FtZSBmb3JtYXQgYXMgdGhleSB3b3VsZCBiZSBpbiBmb3IgbHRyLlxuICAgICAgICAgICAgLy8gU28gdGhlIHNpbXBsZXN0IHNvbHV0aW9uIGlzIHRvIGRldGVybWluZSB3aGljaCBicm93c2VyIGJlaGF2aW9yIHdlJ3JlIGRlYWxpbmcgd2l0aCwgYW5kIGNvbnZlcnQgYmFzZWQgb24gaXQuXG4gICAgICAgICAgICBzd2l0Y2ggKGdldFJUTE9mZnNldFR5cGUoKSkge1xuICAgICAgICAgICAgICBjYXNlICduZWdhdGl2ZSc6XG4gICAgICAgICAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gLXNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAncG9zaXRpdmUtZGVzY2VuZGluZyc6XG4gICAgICAgICAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIHNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBQcmV2ZW50IFNhZmFyaSdzIGVsYXN0aWMgc2Nyb2xsaW5nIGZyb20gY2F1c2luZyB2aXN1YWwgc2hha2luZyB3aGVuIHNjcm9sbGluZyBwYXN0IGJvdW5kcy5cblxuXG4gICAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2Nyb2xsT2Zmc2V0LCBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uOiBwcmV2U3RhdGUuc2Nyb2xsT2Zmc2V0IDwgc2Nyb2xsTGVmdCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgICBzY3JvbGxPZmZzZXQ6IHNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICB9LCBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fb25TY3JvbGxWZXJ0aWNhbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX2V2ZW50JGN1cnJlbnRUYXJnZXQyID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0Mi5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBfZXZlbnQkY3VycmVudFRhcmdldDIuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQyLnNjcm9sbFRvcDtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgaWYgKHByZXZTdGF0ZS5zY3JvbGxPZmZzZXQgPT09IHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgLy8gU2Nyb2xsIHBvc2l0aW9uIG1heSBoYXZlIGJlZW4gdXBkYXRlZCBieSBjRE0vY0RVLFxuICAgICAgICAgICAgLy8gSW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBuZWVkIHRvIHRyaWdnZXIgYW5vdGhlciByZW5kZXIsXG4gICAgICAgICAgICAvLyBBbmQgd2UgZG9uJ3Qgd2FudCB0byB1cGRhdGUgc3RhdGUuaXNTY3JvbGxpbmcuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9IC8vIFByZXZlbnQgU2FmYXJpJ3MgZWxhc3RpYyBzY3JvbGxpbmcgZnJvbSBjYXVzaW5nIHZpc3VhbCBzaGFraW5nIHdoZW4gc2Nyb2xsaW5nIHBhc3QgYm91bmRzLlxuXG5cbiAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQpKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxEaXJlY3Rpb246IHByZXZTdGF0ZS5zY3JvbGxPZmZzZXQgPCBzY3JvbGxPZmZzZXQgPyAnZm9yd2FyZCcgOiAnYmFja3dhcmQnLFxuICAgICAgICAgICAgc2Nyb2xsT2Zmc2V0OiBzY3JvbGxPZmZzZXQsXG4gICAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX291dGVyUmVmU2V0dGVyID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICB2YXIgb3V0ZXJSZWYgPSBfdGhpcy5wcm9wcy5vdXRlclJlZjtcbiAgICAgICAgX3RoaXMuX291dGVyUmVmID0gcmVmO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3V0ZXJSZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvdXRlclJlZihyZWYpO1xuICAgICAgICB9IGVsc2UgaWYgKG91dGVyUmVmICE9IG51bGwgJiYgdHlwZW9mIG91dGVyUmVmID09PSAnb2JqZWN0JyAmJiBvdXRlclJlZi5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudCcpKSB7XG4gICAgICAgICAgb3V0ZXJSZWYuY3VycmVudCA9IHJlZjtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNhbmNlbFRpbWVvdXQoX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgPSByZXF1ZXN0VGltZW91dChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZywgSVNfU0NST0xMSU5HX0RFQk9VTkNFX0lOVEVSVkFMJDEpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkID0gbnVsbDtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNTY3JvbGxpbmc6IGZhbHNlXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBDbGVhciBzdHlsZSBjYWNoZSBhZnRlciBzdGF0ZSB1cGRhdGUgaGFzIGJlZW4gY29tbWl0dGVkLlxuICAgICAgICAgIC8vIFRoaXMgd2F5IHdlIGRvbid0IGJyZWFrIHB1cmUgc0NVIGZvciBpdGVtcyB0aGF0IGRvbid0IHVzZSBpc1Njcm9sbGluZyBwYXJhbS5cbiAgICAgICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUoLTEsIG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBMaXN0LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgdmFsaWRhdGVTaGFyZWRQcm9wcyQxKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICAgIHZhbGlkYXRlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgX3Byb3RvID0gTGlzdC5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uc2Nyb2xsVG8gPSBmdW5jdGlvbiBzY3JvbGxUbyhzY3JvbGxPZmZzZXQpIHtcbiAgICAgIHNjcm9sbE9mZnNldCA9IE1hdGgubWF4KDAsIHNjcm9sbE9mZnNldCk7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5zY3JvbGxPZmZzZXQgPT09IHNjcm9sbE9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzY3JvbGxEaXJlY3Rpb246IHByZXZTdGF0ZS5zY3JvbGxPZmZzZXQgPCBzY3JvbGxPZmZzZXQgPyAnZm9yd2FyZCcgOiAnYmFja3dhcmQnLFxuICAgICAgICAgIHNjcm9sbE9mZnNldDogc2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCk7XG4gICAgfTtcblxuICAgIF9wcm90by5zY3JvbGxUb0l0ZW0gPSBmdW5jdGlvbiBzY3JvbGxUb0l0ZW0oaW5kZXgsIGFsaWduKSB7XG4gICAgICBpZiAoYWxpZ24gPT09IHZvaWQgMCkge1xuICAgICAgICBhbGlnbiA9ICdhdXRvJztcbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZW1Db3VudCA9IHRoaXMucHJvcHMuaXRlbUNvdW50O1xuICAgICAgdmFyIHNjcm9sbE9mZnNldCA9IHRoaXMuc3RhdGUuc2Nyb2xsT2Zmc2V0O1xuICAgICAgaW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgaXRlbUNvdW50IC0gMSkpO1xuICAgICAgdGhpcy5zY3JvbGxUbyhnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudCh0aGlzLnByb3BzLCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCwgdGhpcy5faW5zdGFuY2VQcm9wcykpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzMi5kaXJlY3Rpb24sXG4gICAgICAgICAgaW5pdGlhbFNjcm9sbE9mZnNldCA9IF90aGlzJHByb3BzMi5pbml0aWFsU2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgIGxheW91dCA9IF90aGlzJHByb3BzMi5sYXlvdXQ7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5pdGlhbFNjcm9sbE9mZnNldCA9PT0gJ251bWJlcicgJiYgdGhpcy5fb3V0ZXJSZWYgIT0gbnVsbCkge1xuICAgICAgICB2YXIgb3V0ZXJSZWYgPSB0aGlzLl9vdXRlclJlZjsgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IGluaXRpYWxTY3JvbGxPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsVG9wID0gaW5pdGlhbFNjcm9sbE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jYWxsUHJvcHNDYWxsYmFja3MoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzMy5kaXJlY3Rpb24sXG4gICAgICAgICAgbGF5b3V0ID0gX3RoaXMkcHJvcHMzLmxheW91dDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gX3RoaXMkc3RhdGUuc2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCA9IF90aGlzJHN0YXRlLnNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDtcblxuICAgICAgaWYgKHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCAmJiB0aGlzLl9vdXRlclJlZiAhPSBudWxsKSB7XG4gICAgICAgIHZhciBvdXRlclJlZiA9IHRoaXMuX291dGVyUmVmOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgICAgICAgLy8gVFJJQ0tZIEFjY29yZGluZyB0byB0aGUgc3BlYywgc2Nyb2xsTGVmdCBzaG91bGQgYmUgbmVnYXRpdmUgZm9yIFJUTCBhbGlnbmVkIGVsZW1lbnRzLlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yIGFsbCBicm93c2VycyB0aG91Z2ggKGUuZy4gQ2hyb21lIHJlcG9ydHMgdmFsdWVzIGFzIHBvc2l0aXZlLCBtZWFzdXJlZCByZWxhdGl2ZSB0byB0aGUgbGVmdCkuXG4gICAgICAgICAgICAvLyBTbyB3ZSBuZWVkIHRvIGRldGVybWluZSB3aGljaCBicm93c2VyIGJlaGF2aW9yIHdlJ3JlIGRlYWxpbmcgd2l0aCwgYW5kIG1pbWljIGl0LlxuICAgICAgICAgICAgc3dpdGNoIChnZXRSVExPZmZzZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSAnbmVnYXRpdmUnOlxuICAgICAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSAtc2Nyb2xsT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ3Bvc2l0aXZlLWFzY2VuZGluZyc6XG4gICAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IHNjcm9sbE9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHZhciBjbGllbnRXaWR0aCA9IG91dGVyUmVmLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxXaWR0aCA9IG91dGVyUmVmLnNjcm9sbFdpZHRoO1xuICAgICAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gc2Nyb2xsT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gc2Nyb2xsT2Zmc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxUb3AgPSBzY3JvbGxPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2FsbFByb3BzQ2FsbGJhY2tzKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgICAgY2FuY2VsVGltZW91dCh0aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHM0LmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC5jbGFzc05hbWUsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHM0LmRpcmVjdGlvbixcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczQuaGVpZ2h0LFxuICAgICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHM0LmlubmVyUmVmLFxuICAgICAgICAgIGlubmVyRWxlbWVudFR5cGUgPSBfdGhpcyRwcm9wczQuaW5uZXJFbGVtZW50VHlwZSxcbiAgICAgICAgICBpbm5lclRhZ05hbWUgPSBfdGhpcyRwcm9wczQuaW5uZXJUYWdOYW1lLFxuICAgICAgICAgIGl0ZW1Db3VudCA9IF90aGlzJHByb3BzNC5pdGVtQ291bnQsXG4gICAgICAgICAgaXRlbURhdGEgPSBfdGhpcyRwcm9wczQuaXRlbURhdGEsXG4gICAgICAgICAgX3RoaXMkcHJvcHM0JGl0ZW1LZXkgPSBfdGhpcyRwcm9wczQuaXRlbUtleSxcbiAgICAgICAgICBpdGVtS2V5ID0gX3RoaXMkcHJvcHM0JGl0ZW1LZXkgPT09IHZvaWQgMCA/IGRlZmF1bHRJdGVtS2V5JDEgOiBfdGhpcyRwcm9wczQkaXRlbUtleSxcbiAgICAgICAgICBsYXlvdXQgPSBfdGhpcyRwcm9wczQubGF5b3V0LFxuICAgICAgICAgIG91dGVyRWxlbWVudFR5cGUgPSBfdGhpcyRwcm9wczQub3V0ZXJFbGVtZW50VHlwZSxcbiAgICAgICAgICBvdXRlclRhZ05hbWUgPSBfdGhpcyRwcm9wczQub3V0ZXJUYWdOYW1lLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHM0LnN0eWxlLFxuICAgICAgICAgIHVzZUlzU2Nyb2xsaW5nID0gX3RoaXMkcHJvcHM0LnVzZUlzU2Nyb2xsaW5nLFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHM0LndpZHRoO1xuICAgICAgdmFyIGlzU2Nyb2xsaW5nID0gdGhpcy5zdGF0ZS5pc1Njcm9sbGluZzsgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG5cbiAgICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICAgIHZhciBvblNjcm9sbCA9IGlzSG9yaXpvbnRhbCA/IHRoaXMuX29uU2Nyb2xsSG9yaXpvbnRhbCA6IHRoaXMuX29uU2Nyb2xsVmVydGljYWw7XG5cbiAgICAgIHZhciBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQgPSB0aGlzLl9nZXRSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgc3RhcnRJbmRleCA9IF90aGlzJF9nZXRSYW5nZVRvUmVuZFswXSxcbiAgICAgICAgICBzdG9wSW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmRbMV07XG5cbiAgICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgICBpZiAoaXRlbUNvdW50ID4gMCkge1xuICAgICAgICBmb3IgKHZhciBfaW5kZXggPSBzdGFydEluZGV4OyBfaW5kZXggPD0gc3RvcEluZGV4OyBfaW5kZXgrKykge1xuICAgICAgICAgIGl0ZW1zLnB1c2goY3JlYXRlRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAgICAgZGF0YTogaXRlbURhdGEsXG4gICAgICAgICAgICBrZXk6IGl0ZW1LZXkoX2luZGV4LCBpdGVtRGF0YSksXG4gICAgICAgICAgICBpbmRleDogX2luZGV4LFxuICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHVzZUlzU2Nyb2xsaW5nID8gaXNTY3JvbGxpbmcgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdHlsZTogdGhpcy5fZ2V0SXRlbVN0eWxlKF9pbmRleClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUmVhZCB0aGlzIHZhbHVlIEFGVEVSIGl0ZW1zIGhhdmUgYmVlbiBjcmVhdGVkLFxuICAgICAgLy8gU28gdGhlaXIgYWN0dWFsIHNpemVzIChpZiB2YXJpYWJsZSkgYXJlIHRha2VuIGludG8gY29uc2lkZXJhdGlvbi5cblxuXG4gICAgICB2YXIgZXN0aW1hdGVkVG90YWxTaXplID0gZ2V0RXN0aW1hdGVkVG90YWxTaXplKHRoaXMucHJvcHMsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQob3V0ZXJFbGVtZW50VHlwZSB8fCBvdXRlclRhZ05hbWUgfHwgJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uU2Nyb2xsOiBvblNjcm9sbCxcbiAgICAgICAgcmVmOiB0aGlzLl9vdXRlclJlZlNldHRlcixcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICB9LCBzdHlsZSlcbiAgICAgIH0sIGNyZWF0ZUVsZW1lbnQoaW5uZXJFbGVtZW50VHlwZSB8fCBpbm5lclRhZ05hbWUgfHwgJ2RpdicsIHtcbiAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogaXNIb3Jpem9udGFsID8gJzEwMCUnIDogZXN0aW1hdGVkVG90YWxTaXplLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6IGlzU2Nyb2xsaW5nID8gJ25vbmUnIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHdpZHRoOiBpc0hvcml6b250YWwgPyBlc3RpbWF0ZWRUb3RhbFNpemUgOiAnMTAwJSdcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NhbGxQcm9wc0NhbGxiYWNrcyA9IGZ1bmN0aW9uIF9jYWxsUHJvcHNDYWxsYmFja3MoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25JdGVtc1JlbmRlcmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBpdGVtQ291bnQgPSB0aGlzLnByb3BzLml0ZW1Db3VudDtcblxuICAgICAgICBpZiAoaXRlbUNvdW50ID4gMCkge1xuICAgICAgICAgIHZhciBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyID0gdGhpcy5fZ2V0UmFuZ2VUb1JlbmRlcigpLFxuICAgICAgICAgICAgICBfb3ZlcnNjYW5TdGFydEluZGV4ID0gX3RoaXMkX2dldFJhbmdlVG9SZW5kMlswXSxcbiAgICAgICAgICAgICAgX292ZXJzY2FuU3RvcEluZGV4ID0gX3RoaXMkX2dldFJhbmdlVG9SZW5kMlsxXSxcbiAgICAgICAgICAgICAgX3Zpc2libGVTdGFydEluZGV4ID0gX3RoaXMkX2dldFJhbmdlVG9SZW5kMlsyXSxcbiAgICAgICAgICAgICAgX3Zpc2libGVTdG9wSW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyWzNdO1xuXG4gICAgICAgICAgdGhpcy5fY2FsbE9uSXRlbXNSZW5kZXJlZChfb3ZlcnNjYW5TdGFydEluZGV4LCBfb3ZlcnNjYW5TdG9wSW5kZXgsIF92aXNpYmxlU3RhcnRJbmRleCwgX3Zpc2libGVTdG9wSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblNjcm9sbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIF9zY3JvbGxEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZTIuc2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgICAgX3Njcm9sbE9mZnNldCA9IF90aGlzJHN0YXRlMi5zY3JvbGxPZmZzZXQsXG4gICAgICAgICAgICBfc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkID0gX3RoaXMkc3RhdGUyLnNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDtcblxuICAgICAgICB0aGlzLl9jYWxsT25TY3JvbGwoX3Njcm9sbERpcmVjdGlvbiwgX3Njcm9sbE9mZnNldCwgX3Njcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCk7XG4gICAgICB9XG4gICAgfTsgLy8gTGF6aWx5IGNyZWF0ZSBhbmQgY2FjaGUgaXRlbSBzdHlsZXMgd2hpbGUgc2Nyb2xsaW5nLFxuICAgIC8vIFNvIHRoYXQgcHVyZSBjb21wb25lbnQgc0NVIHdpbGwgcHJldmVudCByZS1yZW5kZXJzLlxuICAgIC8vIFdlIG1haW50YWluIHRoaXMgY2FjaGUsIGFuZCBwYXNzIGEgc3R5bGUgcHJvcCByYXRoZXIgdGhhbiBpbmRleCxcbiAgICAvLyBTbyB0aGF0IExpc3QgY2FuIGNsZWFyIGNhY2hlZCBzdHlsZXMgYW5kIGZvcmNlIGl0ZW0gcmUtcmVuZGVyIGlmIG5lY2Vzc2FyeS5cblxuXG4gICAgX3Byb3RvLl9nZXRSYW5nZVRvUmVuZGVyID0gZnVuY3Rpb24gX2dldFJhbmdlVG9SZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpdGVtQ291bnQgPSBfdGhpcyRwcm9wczUuaXRlbUNvdW50LFxuICAgICAgICAgIG92ZXJzY2FuQ291bnQgPSBfdGhpcyRwcm9wczUub3ZlcnNjYW5Db3VudDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGlzU2Nyb2xsaW5nID0gX3RoaXMkc3RhdGUzLmlzU2Nyb2xsaW5nLFxuICAgICAgICAgIHNjcm9sbERpcmVjdGlvbiA9IF90aGlzJHN0YXRlMy5zY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gX3RoaXMkc3RhdGUzLnNjcm9sbE9mZnNldDtcblxuICAgICAgaWYgKGl0ZW1Db3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRJbmRleCA9IGdldFN0YXJ0SW5kZXhGb3JPZmZzZXQodGhpcy5wcm9wcywgc2Nyb2xsT2Zmc2V0LCB0aGlzLl9pbnN0YW5jZVByb3BzKTtcbiAgICAgIHZhciBzdG9wSW5kZXggPSBnZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4KHRoaXMucHJvcHMsIHN0YXJ0SW5kZXgsIHNjcm9sbE9mZnNldCwgdGhpcy5faW5zdGFuY2VQcm9wcyk7IC8vIE92ZXJzY2FuIGJ5IG9uZSBpdGVtIGluIGVhY2ggZGlyZWN0aW9uIHNvIHRoYXQgdGFiL2ZvY3VzIHdvcmtzLlxuICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYXQgbGVhc3Qgb25lIGV4dHJhIGl0ZW0sIHRhYiBsb29wcyBiYWNrIGFyb3VuZC5cblxuICAgICAgdmFyIG92ZXJzY2FuQmFja3dhcmQgPSAhaXNTY3JvbGxpbmcgfHwgc2Nyb2xsRGlyZWN0aW9uID09PSAnYmFja3dhcmQnID8gTWF0aC5tYXgoMSwgb3ZlcnNjYW5Db3VudCkgOiAxO1xuICAgICAgdmFyIG92ZXJzY2FuRm9yd2FyZCA9ICFpc1Njcm9sbGluZyB8fCBzY3JvbGxEaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IE1hdGgubWF4KDEsIG92ZXJzY2FuQ291bnQpIDogMTtcbiAgICAgIHJldHVybiBbTWF0aC5tYXgoMCwgc3RhcnRJbmRleCAtIG92ZXJzY2FuQmFja3dhcmQpLCBNYXRoLm1heCgwLCBNYXRoLm1pbihpdGVtQ291bnQgLSAxLCBzdG9wSW5kZXggKyBvdmVyc2NhbkZvcndhcmQpKSwgc3RhcnRJbmRleCwgc3RvcEluZGV4XTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIExpc3Q7XG4gIH0oUHVyZUNvbXBvbmVudCksIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBpdGVtRGF0YTogdW5kZWZpbmVkLFxuICAgIGxheW91dDogJ3ZlcnRpY2FsJyxcbiAgICBvdmVyc2NhbkNvdW50OiAyLFxuICAgIHVzZUlzU2Nyb2xsaW5nOiBmYWxzZVxuICB9LCBfdGVtcDtcbn0gLy8gTk9URTogSSBjb25zaWRlcmVkIGZ1cnRoZXIgd3JhcHBpbmcgaW5kaXZpZHVhbCBpdGVtcyB3aXRoIGEgcHVyZSBMaXN0SXRlbSBjb21wb25lbnQuXG4vLyBUaGlzIHdvdWxkIGF2b2lkIGV2ZXIgY2FsbGluZyB0aGUgcmVuZGVyIGZ1bmN0aW9uIGZvciB0aGUgc2FtZSBpbmRleCBtb3JlIHRoYW4gb25jZSxcbi8vIEJ1dCBpdCB3b3VsZCBhbHNvIGFkZCB0aGUgb3ZlcmhlYWQgb2YgYSBsb3Qgb2YgY29tcG9uZW50cy9maWJlcnMuXG4vLyBJIGFzc3VtZSBwZW9wbGUgYWxyZWFkeSBkbyB0aGlzIChyZW5kZXIgZnVuY3Rpb24gcmV0dXJuaW5nIGEgY2xhc3MgY29tcG9uZW50KSxcbi8vIFNvIG15IGRvaW5nIGl0IHdvdWxkIGp1c3QgdW5uZWNlc3NhcmlseSBkb3VibGUgdGhlIHdyYXBwZXJzLlxuXG52YXIgdmFsaWRhdGVTaGFyZWRQcm9wcyQxID0gZnVuY3Rpb24gdmFsaWRhdGVTaGFyZWRQcm9wcyhfcmVmMiwgX3JlZjMpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICBkaXJlY3Rpb24gPSBfcmVmMi5kaXJlY3Rpb24sXG4gICAgICBoZWlnaHQgPSBfcmVmMi5oZWlnaHQsXG4gICAgICBsYXlvdXQgPSBfcmVmMi5sYXlvdXQsXG4gICAgICBpbm5lclRhZ05hbWUgPSBfcmVmMi5pbm5lclRhZ05hbWUsXG4gICAgICBvdXRlclRhZ05hbWUgPSBfcmVmMi5vdXRlclRhZ05hbWUsXG4gICAgICB3aWR0aCA9IF9yZWYyLndpZHRoO1xuICB2YXIgaW5zdGFuY2UgPSBfcmVmMy5pbnN0YW5jZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChpbm5lclRhZ05hbWUgIT0gbnVsbCB8fCBvdXRlclRhZ05hbWUgIT0gbnVsbCkge1xuICAgICAgaWYgKGRldldhcm5pbmdzVGFnTmFtZSQxICYmICFkZXZXYXJuaW5nc1RhZ05hbWUkMS5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgIGRldldhcm5pbmdzVGFnTmFtZSQxLmFkZChpbnN0YW5jZSk7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIGlubmVyVGFnTmFtZSBhbmQgb3V0ZXJUYWdOYW1lIHByb3BzIGhhdmUgYmVlbiBkZXByZWNhdGVkLiAnICsgJ1BsZWFzZSB1c2UgdGhlIGlubmVyRWxlbWVudFR5cGUgYW5kIG91dGVyRWxlbWVudFR5cGUgcHJvcHMgaW5zdGVhZC4nKTtcbiAgICAgIH1cbiAgICB9IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG5cbiAgICB2YXIgaXNIb3Jpem9udGFsID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgIGlmIChkZXZXYXJuaW5nc0RpcmVjdGlvbiAmJiAhZGV2V2FybmluZ3NEaXJlY3Rpb24uaGFzKGluc3RhbmNlKSkge1xuICAgICAgICAgIGRldldhcm5pbmdzRGlyZWN0aW9uLmFkZChpbnN0YW5jZSk7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZGlyZWN0aW9uIHByb3Agc2hvdWxkIGJlIGVpdGhlciBcImx0clwiIChkZWZhdWx0KSBvciBcInJ0bFwiLiAnICsgJ1BsZWFzZSB1c2UgdGhlIGxheW91dCBwcm9wIHRvIHNwZWNpZnkgXCJ2ZXJ0aWNhbFwiIChkZWZhdWx0KSBvciBcImhvcml6b250YWxcIiBvcmllbnRhdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsdHInOlxuICAgICAgY2FzZSAncnRsJzpcbiAgICAgICAgLy8gVmFsaWQgdmFsdWVzXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImRpcmVjdGlvblwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBlaXRoZXIgXCJsdHJcIiBvciBcInJ0bFwiLiAnICsgKFwiXFxcIlwiICsgZGlyZWN0aW9uICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGxheW91dCkge1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgIC8vIFZhbGlkIHZhbHVlc1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgZWl0aGVyIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIi4gJyArIChcIlxcXCJcIiArIGxheW91dCArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiY2hpbGRyZW5cIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBSZWFjdCBjb21wb25lbnQuICcgKyAoXCJcXFwiXCIgKyAoY2hpbGRyZW4gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgY2hpbGRyZW4pICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNIb3Jpem9udGFsICYmIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwid2lkdGhcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdIb3Jpem9udGFsIGxpc3RzIG11c3Qgc3BlY2lmeSBhIG51bWJlciBmb3Igd2lkdGguICcgKyAoXCJcXFwiXCIgKyAod2lkdGggPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2Ygd2lkdGgpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9IGVsc2UgaWYgKCFpc0hvcml6b250YWwgJiYgdHlwZW9mIGhlaWdodCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiaGVpZ2h0XCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmVydGljYWwgbGlzdHMgbXVzdCBzcGVjaWZ5IGEgbnVtYmVyIGZvciBoZWlnaHQuICcgKyAoXCJcXFwiXCIgKyAoaGVpZ2h0ID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGhlaWdodCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIERFRkFVTFRfRVNUSU1BVEVEX0lURU1fU0laRSQxID0gNTA7XG5cbnZhciBnZXRJdGVtTWV0YWRhdGEkMSA9IGZ1bmN0aW9uIGdldEl0ZW1NZXRhZGF0YShwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgdmFyIF9yZWYgPSBwcm9wcyxcbiAgICAgIGl0ZW1TaXplID0gX3JlZi5pdGVtU2l6ZTtcbiAgdmFyIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMuaXRlbU1ldGFkYXRhTWFwLFxuICAgICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZEluZGV4O1xuXG4gIGlmIChpbmRleCA+IGxhc3RNZWFzdXJlZEluZGV4KSB7XG4gICAgdmFyIG9mZnNldCA9IDA7XG5cbiAgICBpZiAobGFzdE1lYXN1cmVkSW5kZXggPj0gMCkge1xuICAgICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGl0ZW1NZXRhZGF0YU1hcFtsYXN0TWVhc3VyZWRJbmRleF07XG4gICAgICBvZmZzZXQgPSBpdGVtTWV0YWRhdGEub2Zmc2V0ICsgaXRlbU1ldGFkYXRhLnNpemU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IGxhc3RNZWFzdXJlZEluZGV4ICsgMTsgaSA8PSBpbmRleDsgaSsrKSB7XG4gICAgICB2YXIgc2l6ZSA9IGl0ZW1TaXplKGkpO1xuICAgICAgaXRlbU1ldGFkYXRhTWFwW2ldID0ge1xuICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgfTtcbiAgICAgIG9mZnNldCArPSBzaXplO1xuICAgIH1cblxuICAgIGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHJldHVybiBpdGVtTWV0YWRhdGFNYXBbaW5kZXhdO1xufTtcblxudmFyIGZpbmROZWFyZXN0SXRlbSQxID0gZnVuY3Rpb24gZmluZE5lYXJlc3RJdGVtKHByb3BzLCBpbnN0YW5jZVByb3BzLCBvZmZzZXQpIHtcbiAgdmFyIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMuaXRlbU1ldGFkYXRhTWFwLFxuICAgICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZEluZGV4O1xuICB2YXIgbGFzdE1lYXN1cmVkSXRlbU9mZnNldCA9IGxhc3RNZWFzdXJlZEluZGV4ID4gMCA/IGl0ZW1NZXRhZGF0YU1hcFtsYXN0TWVhc3VyZWRJbmRleF0ub2Zmc2V0IDogMDtcblxuICBpZiAobGFzdE1lYXN1cmVkSXRlbU9mZnNldCA+PSBvZmZzZXQpIHtcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IG1lYXN1cmVkIGl0ZW1zIHdpdGhpbiB0aGlzIHJhbmdlIGp1c3QgdXNlIGEgYmluYXJ5IHNlYXJjaCBhcyBpdCdzIGZhc3Rlci5cbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoJDEocHJvcHMsIGluc3RhbmNlUHJvcHMsIGxhc3RNZWFzdXJlZEluZGV4LCAwLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHdlIGhhdmVuJ3QgeWV0IG1lYXN1cmVkIHRoaXMgaGlnaCwgZmFsbGJhY2sgdG8gYW4gZXhwb25lbnRpYWwgc2VhcmNoIHdpdGggYW4gaW5uZXIgYmluYXJ5IHNlYXJjaC5cbiAgICAvLyBUaGUgZXhwb25lbnRpYWwgc2VhcmNoIGF2b2lkcyBwcmUtY29tcHV0aW5nIHNpemVzIGZvciB0aGUgZnVsbCBzZXQgb2YgaXRlbXMgYXMgYSBiaW5hcnkgc2VhcmNoIHdvdWxkLlxuICAgIC8vIFRoZSBvdmVyYWxsIGNvbXBsZXhpdHkgZm9yIHRoaXMgYXBwcm9hY2ggaXMgTyhsb2cgbikuXG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoJDEocHJvcHMsIGluc3RhbmNlUHJvcHMsIE1hdGgubWF4KDAsIGxhc3RNZWFzdXJlZEluZGV4KSwgb2Zmc2V0KTtcbiAgfVxufTtcblxudmFyIGZpbmROZWFyZXN0SXRlbUJpbmFyeVNlYXJjaCQxID0gZnVuY3Rpb24gZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoKHByb3BzLCBpbnN0YW5jZVByb3BzLCBoaWdoLCBsb3csIG9mZnNldCkge1xuICB3aGlsZSAobG93IDw9IGhpZ2gpIHtcbiAgICB2YXIgbWlkZGxlID0gbG93ICsgTWF0aC5mbG9vcigoaGlnaCAtIGxvdykgLyAyKTtcbiAgICB2YXIgY3VycmVudE9mZnNldCA9IGdldEl0ZW1NZXRhZGF0YSQxKHByb3BzLCBtaWRkbGUsIGluc3RhbmNlUHJvcHMpLm9mZnNldDtcblxuICAgIGlmIChjdXJyZW50T2Zmc2V0ID09PSBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBtaWRkbGU7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50T2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgICBsb3cgPSBtaWRkbGUgKyAxO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudE9mZnNldCA+IG9mZnNldCkge1xuICAgICAgaGlnaCA9IG1pZGRsZSAtIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvdyA+IDApIHtcbiAgICByZXR1cm4gbG93IC0gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufTtcblxudmFyIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoJDEgPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW1FeHBvbmVudGlhbFNlYXJjaChwcm9wcywgaW5zdGFuY2VQcm9wcywgaW5kZXgsIG9mZnNldCkge1xuICB2YXIgaXRlbUNvdW50ID0gcHJvcHMuaXRlbUNvdW50O1xuICB2YXIgaW50ZXJ2YWwgPSAxO1xuXG4gIHdoaWxlIChpbmRleCA8IGl0ZW1Db3VudCAmJiBnZXRJdGVtTWV0YWRhdGEkMShwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpLm9mZnNldCA8IG9mZnNldCkge1xuICAgIGluZGV4ICs9IGludGVydmFsO1xuICAgIGludGVydmFsICo9IDI7XG4gIH1cblxuICByZXR1cm4gZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoJDEocHJvcHMsIGluc3RhbmNlUHJvcHMsIE1hdGgubWluKGluZGV4LCBpdGVtQ291bnQgLSAxKSwgTWF0aC5mbG9vcihpbmRleCAvIDIpLCBvZmZzZXQpO1xufTtcblxudmFyIGdldEVzdGltYXRlZFRvdGFsU2l6ZSA9IGZ1bmN0aW9uIGdldEVzdGltYXRlZFRvdGFsU2l6ZShfcmVmMiwgX3JlZjMpIHtcbiAgdmFyIGl0ZW1Db3VudCA9IF9yZWYyLml0ZW1Db3VudDtcbiAgdmFyIGl0ZW1NZXRhZGF0YU1hcCA9IF9yZWYzLml0ZW1NZXRhZGF0YU1hcCxcbiAgICAgIGVzdGltYXRlZEl0ZW1TaXplID0gX3JlZjMuZXN0aW1hdGVkSXRlbVNpemUsXG4gICAgICBsYXN0TWVhc3VyZWRJbmRleCA9IF9yZWYzLmxhc3RNZWFzdXJlZEluZGV4O1xuICB2YXIgdG90YWxTaXplT2ZNZWFzdXJlZEl0ZW1zID0gMDsgLy8gRWRnZSBjYXNlIGNoZWNrIGZvciB3aGVuIHRoZSBudW1iZXIgb2YgaXRlbXMgZGVjcmVhc2VzIHdoaWxlIGEgc2Nyb2xsIGlzIGluIHByb2dyZXNzLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYnZhdWdobi9yZWFjdC13aW5kb3cvcHVsbC8xMzhcblxuICBpZiAobGFzdE1lYXN1cmVkSW5kZXggPj0gaXRlbUNvdW50KSB7XG4gICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpdGVtQ291bnQgLSAxO1xuICB9XG5cbiAgaWYgKGxhc3RNZWFzdXJlZEluZGV4ID49IDApIHtcbiAgICB2YXIgaXRlbU1ldGFkYXRhID0gaXRlbU1ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZEluZGV4XTtcbiAgICB0b3RhbFNpemVPZk1lYXN1cmVkSXRlbXMgPSBpdGVtTWV0YWRhdGEub2Zmc2V0ICsgaXRlbU1ldGFkYXRhLnNpemU7XG4gIH1cblxuICB2YXIgbnVtVW5tZWFzdXJlZEl0ZW1zID0gaXRlbUNvdW50IC0gbGFzdE1lYXN1cmVkSW5kZXggLSAxO1xuICB2YXIgdG90YWxTaXplT2ZVbm1lYXN1cmVkSXRlbXMgPSBudW1Vbm1lYXN1cmVkSXRlbXMgKiBlc3RpbWF0ZWRJdGVtU2l6ZTtcbiAgcmV0dXJuIHRvdGFsU2l6ZU9mTWVhc3VyZWRJdGVtcyArIHRvdGFsU2l6ZU9mVW5tZWFzdXJlZEl0ZW1zO1xufTtcblxudmFyIFZhcmlhYmxlU2l6ZUxpc3QgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlTGlzdENvbXBvbmVudCh7XG4gIGdldEl0ZW1PZmZzZXQ6IGZ1bmN0aW9uIGdldEl0ZW1PZmZzZXQocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGdldEl0ZW1NZXRhZGF0YSQxKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0O1xuICB9LFxuICBnZXRJdGVtU2l6ZTogZnVuY3Rpb24gZ2V0SXRlbVNpemUocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlUHJvcHMuaXRlbU1ldGFkYXRhTWFwW2luZGV4XS5zaXplO1xuICB9LFxuICBnZXRFc3RpbWF0ZWRUb3RhbFNpemU6IGdldEVzdGltYXRlZFRvdGFsU2l6ZSxcbiAgZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KHByb3BzLCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHZhciBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgIGhlaWdodCA9IHByb3BzLmhlaWdodCxcbiAgICAgICAgbGF5b3V0ID0gcHJvcHMubGF5b3V0LFxuICAgICAgICB3aWR0aCA9IHByb3BzLndpZHRoOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICB2YXIgc2l6ZSA9IGlzSG9yaXpvbnRhbCA/IHdpZHRoIDogaGVpZ2h0O1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBnZXRJdGVtTWV0YWRhdGEkMShwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpOyAvLyBHZXQgZXN0aW1hdGVkIHRvdGFsIHNpemUgYWZ0ZXIgSXRlbU1ldGFkYXRhIGlzIGNvbXB1dGVkLFxuICAgIC8vIFRvIGVuc3VyZSBpdCByZWZsZWN0cyBhY3R1YWwgbWVhc3VyZW1lbnRzIGluc3RlYWQgb2YganVzdCBlc3RpbWF0ZXMuXG5cbiAgICB2YXIgZXN0aW1hdGVkVG90YWxTaXplID0gZ2V0RXN0aW1hdGVkVG90YWxTaXplKHByb3BzLCBpbnN0YW5jZVByb3BzKTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZXN0aW1hdGVkVG90YWxTaXplIC0gc2l6ZSwgaXRlbU1ldGFkYXRhLm9mZnNldCkpO1xuICAgIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCBpdGVtTWV0YWRhdGEub2Zmc2V0IC0gc2l6ZSArIGl0ZW1NZXRhZGF0YS5zaXplKTtcblxuICAgIGlmIChhbGlnbiA9PT0gJ3NtYXJ0Jykge1xuICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgLSBzaXplICYmIHNjcm9sbE9mZnNldCA8PSBtYXhPZmZzZXQgKyBzaXplKSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG1pbk9mZnNldCArIChtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIC8gMik7XG5cbiAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBzY3JvbGxPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsT2Zmc2V0IDwgbWluT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIGdldFN0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldFN0YXJ0SW5kZXhGb3JPZmZzZXQocHJvcHMsIG9mZnNldCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBmaW5kTmVhcmVzdEl0ZW0kMShwcm9wcywgaW5zdGFuY2VQcm9wcywgb2Zmc2V0KTtcbiAgfSxcbiAgZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleDogZnVuY3Rpb24gZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleChwcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0LFxuICAgICAgICBpdGVtQ291bnQgPSBwcm9wcy5pdGVtQ291bnQsXG4gICAgICAgIGxheW91dCA9IHByb3BzLmxheW91dCxcbiAgICAgICAgd2lkdGggPSBwcm9wcy53aWR0aDsgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG5cbiAgICB2YXIgaXNIb3Jpem9udGFsID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG4gICAgdmFyIHNpemUgPSBpc0hvcml6b250YWwgPyB3aWR0aCA6IGhlaWdodDtcbiAgICB2YXIgaXRlbU1ldGFkYXRhID0gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIHN0YXJ0SW5kZXgsIGluc3RhbmNlUHJvcHMpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBzY3JvbGxPZmZzZXQgKyBzaXplO1xuICAgIHZhciBvZmZzZXQgPSBpdGVtTWV0YWRhdGEub2Zmc2V0ICsgaXRlbU1ldGFkYXRhLnNpemU7XG4gICAgdmFyIHN0b3BJbmRleCA9IHN0YXJ0SW5kZXg7XG5cbiAgICB3aGlsZSAoc3RvcEluZGV4IDwgaXRlbUNvdW50IC0gMSAmJiBvZmZzZXQgPCBtYXhPZmZzZXQpIHtcbiAgICAgIHN0b3BJbmRleCsrO1xuICAgICAgb2Zmc2V0ICs9IGdldEl0ZW1NZXRhZGF0YSQxKHByb3BzLCBzdG9wSW5kZXgsIGluc3RhbmNlUHJvcHMpLnNpemU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3BJbmRleDtcbiAgfSxcbiAgaW5pdEluc3RhbmNlUHJvcHM6IGZ1bmN0aW9uIGluaXRJbnN0YW5jZVByb3BzKHByb3BzLCBpbnN0YW5jZSkge1xuICAgIHZhciBfcmVmNCA9IHByb3BzLFxuICAgICAgICBlc3RpbWF0ZWRJdGVtU2l6ZSA9IF9yZWY0LmVzdGltYXRlZEl0ZW1TaXplO1xuICAgIHZhciBpbnN0YW5jZVByb3BzID0ge1xuICAgICAgaXRlbU1ldGFkYXRhTWFwOiB7fSxcbiAgICAgIGVzdGltYXRlZEl0ZW1TaXplOiBlc3RpbWF0ZWRJdGVtU2l6ZSB8fCBERUZBVUxUX0VTVElNQVRFRF9JVEVNX1NJWkUkMSxcbiAgICAgIGxhc3RNZWFzdXJlZEluZGV4OiAtMVxuICAgIH07XG5cbiAgICBpbnN0YW5jZS5yZXNldEFmdGVySW5kZXggPSBmdW5jdGlvbiAoaW5kZXgsIHNob3VsZEZvcmNlVXBkYXRlKSB7XG4gICAgICBpZiAoc2hvdWxkRm9yY2VVcGRhdGUgPT09IHZvaWQgMCkge1xuICAgICAgICBzaG91bGRGb3JjZVVwZGF0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXggPSBNYXRoLm1pbihpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZEluZGV4LCBpbmRleCAtIDEpOyAvLyBXZSBjb3VsZCBwb3RlbnRpYWxseSBvcHRpbWl6ZSBmdXJ0aGVyIGJ5IG9ubHkgZXZpY3Rpbmcgc3R5bGVzIGFmdGVyIHRoaXMgaW5kZXgsXG4gICAgICAvLyBCdXQgc2luY2Ugc3R5bGVzIGFyZSBvbmx5IGNhY2hlZCB3aGlsZSBzY3JvbGxpbmcgaXMgaW4gcHJvZ3Jlc3MtXG4gICAgICAvLyBJdCBzZWVtcyBhbiB1bm5lY2Vzc2FyeSBvcHRpbWl6YXRpb24uXG4gICAgICAvLyBJdCdzIHVubGlrZWx5IHRoYXQgcmVzZXRBZnRlckluZGV4KCkgd2lsbCBiZSBjYWxsZWQgd2hpbGUgYSB1c2VyIGlzIHNjcm9sbGluZy5cblxuICAgICAgaW5zdGFuY2UuX2dldEl0ZW1TdHlsZUNhY2hlKC0xKTtcblxuICAgICAgaWYgKHNob3VsZEZvcmNlVXBkYXRlKSB7XG4gICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZVByb3BzO1xuICB9LFxuICBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlOiBmYWxzZSxcbiAgdmFsaWRhdGVQcm9wczogZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhfcmVmNSkge1xuICAgIHZhciBpdGVtU2l6ZSA9IF9yZWY1Lml0ZW1TaXplO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbVNpemUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJpdGVtU2l6ZVwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIGZ1bmN0aW9uLiAnICsgKFwiXFxcIlwiICsgKGl0ZW1TaXplID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGl0ZW1TaXplKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxudmFyIEZpeGVkU2l6ZUdyaWQgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlR3JpZENvbXBvbmVudCh7XG4gIGdldENvbHVtbk9mZnNldDogZnVuY3Rpb24gZ2V0Q29sdW1uT2Zmc2V0KF9yZWYsIGluZGV4KSB7XG4gICAgdmFyIGNvbHVtbldpZHRoID0gX3JlZi5jb2x1bW5XaWR0aDtcbiAgICByZXR1cm4gaW5kZXggKiBjb2x1bW5XaWR0aDtcbiAgfSxcbiAgZ2V0Q29sdW1uV2lkdGg6IGZ1bmN0aW9uIGdldENvbHVtbldpZHRoKF9yZWYyLCBpbmRleCkge1xuICAgIHZhciBjb2x1bW5XaWR0aCA9IF9yZWYyLmNvbHVtbldpZHRoO1xuICAgIHJldHVybiBjb2x1bW5XaWR0aDtcbiAgfSxcbiAgZ2V0Um93T2Zmc2V0OiBmdW5jdGlvbiBnZXRSb3dPZmZzZXQoX3JlZjMsIGluZGV4KSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWYzLnJvd0hlaWdodDtcbiAgICByZXR1cm4gaW5kZXggKiByb3dIZWlnaHQ7XG4gIH0sXG4gIGdldFJvd0hlaWdodDogZnVuY3Rpb24gZ2V0Um93SGVpZ2h0KF9yZWY0LCBpbmRleCkge1xuICAgIHZhciByb3dIZWlnaHQgPSBfcmVmNC5yb3dIZWlnaHQ7XG4gICAgcmV0dXJuIHJvd0hlaWdodDtcbiAgfSxcbiAgZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQ6IGZ1bmN0aW9uIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0KF9yZWY1KSB7XG4gICAgdmFyIHJvd0NvdW50ID0gX3JlZjUucm93Q291bnQsXG4gICAgICAgIHJvd0hlaWdodCA9IF9yZWY1LnJvd0hlaWdodDtcbiAgICByZXR1cm4gcm93SGVpZ2h0ICogcm93Q291bnQ7XG4gIH0sXG4gIGdldEVzdGltYXRlZFRvdGFsV2lkdGg6IGZ1bmN0aW9uIGdldEVzdGltYXRlZFRvdGFsV2lkdGgoX3JlZjYpIHtcbiAgICB2YXIgY29sdW1uQ291bnQgPSBfcmVmNi5jb2x1bW5Db3VudCxcbiAgICAgICAgY29sdW1uV2lkdGggPSBfcmVmNi5jb2x1bW5XaWR0aDtcbiAgICByZXR1cm4gY29sdW1uV2lkdGggKiBjb2x1bW5Db3VudDtcbiAgfSxcbiAgZ2V0T2Zmc2V0Rm9yQ29sdW1uQW5kQWxpZ25tZW50OiBmdW5jdGlvbiBnZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQoX3JlZjcsIGNvbHVtbkluZGV4LCBhbGlnbiwgc2Nyb2xsTGVmdCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSkge1xuICAgIHZhciBjb2x1bW5Db3VudCA9IF9yZWY3LmNvbHVtbkNvdW50LFxuICAgICAgICBjb2x1bW5XaWR0aCA9IF9yZWY3LmNvbHVtbldpZHRoLFxuICAgICAgICB3aWR0aCA9IF9yZWY3LndpZHRoO1xuICAgIHZhciBsYXN0Q29sdW1uT2Zmc2V0ID0gTWF0aC5tYXgoMCwgY29sdW1uQ291bnQgKiBjb2x1bW5XaWR0aCAtIHdpZHRoKTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gTWF0aC5taW4obGFzdENvbHVtbk9mZnNldCwgY29sdW1uSW5kZXggKiBjb2x1bW5XaWR0aCk7XG4gICAgdmFyIG1pbk9mZnNldCA9IE1hdGgubWF4KDAsIGNvbHVtbkluZGV4ICogY29sdW1uV2lkdGggLSB3aWR0aCArIHNjcm9sbGJhclNpemUgKyBjb2x1bW5XaWR0aCk7XG5cbiAgICBpZiAoYWxpZ24gPT09ICdzbWFydCcpIHtcbiAgICAgIGlmIChzY3JvbGxMZWZ0ID49IG1pbk9mZnNldCAtIHdpZHRoICYmIHNjcm9sbExlZnQgPD0gbWF4T2Zmc2V0ICsgd2lkdGgpIHtcbiAgICAgICAgYWxpZ24gPSAnYXV0byc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbiA9ICdjZW50ZXInO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcblxuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcblxuICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgLy8gXCJDZW50ZXJlZFwiIG9mZnNldCBpcyB1c3VhbGx5IHRoZSBhdmVyYWdlIG9mIHRoZSBtaW4gYW5kIG1heC5cbiAgICAgICAgLy8gQnV0IG5lYXIgdGhlIGVkZ2VzIG9mIHRoZSBsaXN0LCB0aGlzIGRvZXNuJ3QgaG9sZCB0cnVlLlxuICAgICAgICB2YXIgbWlkZGxlT2Zmc2V0ID0gTWF0aC5yb3VuZChtaW5PZmZzZXQgKyAobWF4T2Zmc2V0IC0gbWluT2Zmc2V0KSAvIDIpO1xuXG4gICAgICAgIGlmIChtaWRkbGVPZmZzZXQgPCBNYXRoLmNlaWwod2lkdGggLyAyKSkge1xuICAgICAgICAgIHJldHVybiAwOyAvLyBuZWFyIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgfSBlbHNlIGlmIChtaWRkbGVPZmZzZXQgPiBsYXN0Q29sdW1uT2Zmc2V0ICsgTWF0aC5mbG9vcih3aWR0aCAvIDIpKSB7XG4gICAgICAgICAgcmV0dXJuIGxhc3RDb2x1bW5PZmZzZXQ7IC8vIG5lYXIgdGhlIGVuZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtaWRkbGVPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnYXV0byc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoc2Nyb2xsTGVmdCA+PSBtaW5PZmZzZXQgJiYgc2Nyb2xsTGVmdCA8PSBtYXhPZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIGlmIChtaW5PZmZzZXQgPiBtYXhPZmZzZXQpIHtcbiAgICAgICAgICAvLyBCZWNhdXNlIHdlIG9ubHkgdGFrZSBpbnRvIGFjY291bnQgdGhlIHNjcm9sbGJhciBzaXplIHdoZW4gY2FsY3VsYXRpbmcgbWluT2Zmc2V0XG4gICAgICAgICAgLy8gdGhpcyB2YWx1ZSBjYW4gYmUgbGFyZ2VyIHRoYW4gbWF4T2Zmc2V0IHdoZW4gYXQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsTGVmdCA8IG1pbk9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9LFxuICBnZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudChfcmVmOCwgcm93SW5kZXgsIGFsaWduLCBzY3JvbGxUb3AsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpIHtcbiAgICB2YXIgcm93SGVpZ2h0ID0gX3JlZjgucm93SGVpZ2h0LFxuICAgICAgICBoZWlnaHQgPSBfcmVmOC5oZWlnaHQsXG4gICAgICAgIHJvd0NvdW50ID0gX3JlZjgucm93Q291bnQ7XG4gICAgdmFyIGxhc3RSb3dPZmZzZXQgPSBNYXRoLm1heCgwLCByb3dDb3VudCAqIHJvd0hlaWdodCAtIGhlaWdodCk7XG4gICAgdmFyIG1heE9mZnNldCA9IE1hdGgubWluKGxhc3RSb3dPZmZzZXQsIHJvd0luZGV4ICogcm93SGVpZ2h0KTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gTWF0aC5tYXgoMCwgcm93SW5kZXggKiByb3dIZWlnaHQgLSBoZWlnaHQgKyBzY3JvbGxiYXJTaXplICsgcm93SGVpZ2h0KTtcblxuICAgIGlmIChhbGlnbiA9PT0gJ3NtYXJ0Jykge1xuICAgICAgaWYgKHNjcm9sbFRvcCA+PSBtaW5PZmZzZXQgLSBoZWlnaHQgJiYgc2Nyb2xsVG9wIDw9IG1heE9mZnNldCArIGhlaWdodCkge1xuICAgICAgICBhbGlnbiA9ICdhdXRvJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWduID0gJ2NlbnRlcic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuXG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuXG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAvLyBcIkNlbnRlcmVkXCIgb2Zmc2V0IGlzIHVzdWFsbHkgdGhlIGF2ZXJhZ2Ugb2YgdGhlIG1pbiBhbmQgbWF4LlxuICAgICAgICAvLyBCdXQgbmVhciB0aGUgZWRnZXMgb2YgdGhlIGxpc3QsIHRoaXMgZG9lc24ndCBob2xkIHRydWUuXG4gICAgICAgIHZhciBtaWRkbGVPZmZzZXQgPSBNYXRoLnJvdW5kKG1pbk9mZnNldCArIChtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIC8gMik7XG5cbiAgICAgICAgaWYgKG1pZGRsZU9mZnNldCA8IE1hdGguY2VpbChoZWlnaHQgLyAyKSkge1xuICAgICAgICAgIHJldHVybiAwOyAvLyBuZWFyIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgfSBlbHNlIGlmIChtaWRkbGVPZmZzZXQgPiBsYXN0Um93T2Zmc2V0ICsgTWF0aC5mbG9vcihoZWlnaHQgLyAyKSkge1xuICAgICAgICAgIHJldHVybiBsYXN0Um93T2Zmc2V0OyAvLyBuZWFyIHRoZSBlbmRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWlkZGxlT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBtaW5PZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IG1heE9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBzY3JvbGxUb3A7XG4gICAgICAgIH0gZWxzZSBpZiAobWluT2Zmc2V0ID4gbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgLy8gQmVjYXVzZSB3ZSBvbmx5IHRha2UgaW50byBhY2NvdW50IHRoZSBzY3JvbGxiYXIgc2l6ZSB3aGVuIGNhbGN1bGF0aW5nIG1pbk9mZnNldFxuICAgICAgICAgIC8vIHRoaXMgdmFsdWUgY2FuIGJlIGxhcmdlciB0aGFuIG1heE9mZnNldCB3aGVuIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFRvcCA8IG1pbk9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9LFxuICBnZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0OiBmdW5jdGlvbiBnZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0KF9yZWY5LCBzY3JvbGxMZWZ0KSB7XG4gICAgdmFyIGNvbHVtbldpZHRoID0gX3JlZjkuY29sdW1uV2lkdGgsXG4gICAgICAgIGNvbHVtbkNvdW50ID0gX3JlZjkuY29sdW1uQ291bnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKGNvbHVtbkNvdW50IC0gMSwgTWF0aC5mbG9vcihzY3JvbGxMZWZ0IC8gY29sdW1uV2lkdGgpKSk7XG4gIH0sXG4gIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXgoX3JlZjEwLCBzdGFydEluZGV4LCBzY3JvbGxMZWZ0KSB7XG4gICAgdmFyIGNvbHVtbldpZHRoID0gX3JlZjEwLmNvbHVtbldpZHRoLFxuICAgICAgICBjb2x1bW5Db3VudCA9IF9yZWYxMC5jb2x1bW5Db3VudCxcbiAgICAgICAgd2lkdGggPSBfcmVmMTAud2lkdGg7XG4gICAgdmFyIGxlZnQgPSBzdGFydEluZGV4ICogY29sdW1uV2lkdGg7XG4gICAgdmFyIG51bVZpc2libGVDb2x1bW5zID0gTWF0aC5jZWlsKCh3aWR0aCArIHNjcm9sbExlZnQgLSBsZWZ0KSAvIGNvbHVtbldpZHRoKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oY29sdW1uQ291bnQgLSAxLCBzdGFydEluZGV4ICsgbnVtVmlzaWJsZUNvbHVtbnMgLSAxIC8vIC0xIGlzIGJlY2F1c2Ugc3RvcCBpbmRleCBpcyBpbmNsdXNpdmVcbiAgICApKTtcbiAgfSxcbiAgZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldDogZnVuY3Rpb24gZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldChfcmVmMTEsIHNjcm9sbFRvcCkge1xuICAgIHZhciByb3dIZWlnaHQgPSBfcmVmMTEucm93SGVpZ2h0LFxuICAgICAgICByb3dDb3VudCA9IF9yZWYxMS5yb3dDb3VudDtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93Q291bnQgLSAxLCBNYXRoLmZsb29yKHNjcm9sbFRvcCAvIHJvd0hlaWdodCkpKTtcbiAgfSxcbiAgZ2V0Um93U3RvcEluZGV4Rm9yU3RhcnRJbmRleDogZnVuY3Rpb24gZ2V0Um93U3RvcEluZGV4Rm9yU3RhcnRJbmRleChfcmVmMTIsIHN0YXJ0SW5kZXgsIHNjcm9sbFRvcCkge1xuICAgIHZhciByb3dIZWlnaHQgPSBfcmVmMTIucm93SGVpZ2h0LFxuICAgICAgICByb3dDb3VudCA9IF9yZWYxMi5yb3dDb3VudCxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjEyLmhlaWdodDtcbiAgICB2YXIgdG9wID0gc3RhcnRJbmRleCAqIHJvd0hlaWdodDtcbiAgICB2YXIgbnVtVmlzaWJsZVJvd3MgPSBNYXRoLmNlaWwoKGhlaWdodCArIHNjcm9sbFRvcCAtIHRvcCkgLyByb3dIZWlnaHQpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihyb3dDb3VudCAtIDEsIHN0YXJ0SW5kZXggKyBudW1WaXNpYmxlUm93cyAtIDEgLy8gLTEgaXMgYmVjYXVzZSBzdG9wIGluZGV4IGlzIGluY2x1c2l2ZVxuICAgICkpO1xuICB9LFxuICBpbml0SW5zdGFuY2VQcm9wczogZnVuY3Rpb24gaW5pdEluc3RhbmNlUHJvcHMocHJvcHMpIHsvLyBOb29wXG4gIH0sXG4gIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2U6IHRydWUsXG4gIHZhbGlkYXRlUHJvcHM6IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoX3JlZjEzKSB7XG4gICAgdmFyIGNvbHVtbldpZHRoID0gX3JlZjEzLmNvbHVtbldpZHRoLFxuICAgICAgICByb3dIZWlnaHQgPSBfcmVmMTMucm93SGVpZ2h0O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgY29sdW1uV2lkdGggIT09ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiY29sdW1uV2lkdGhcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBudW1iZXIuICcgKyAoXCJcXFwiXCIgKyAoY29sdW1uV2lkdGggPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgY29sdW1uV2lkdGgpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiByb3dIZWlnaHQgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwicm93SGVpZ2h0XCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgbnVtYmVyLiAnICsgKFwiXFxcIlwiICsgKHJvd0hlaWdodCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByb3dIZWlnaHQpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgRml4ZWRTaXplTGlzdCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVMaXN0Q29tcG9uZW50KHtcbiAgZ2V0SXRlbU9mZnNldDogZnVuY3Rpb24gZ2V0SXRlbU9mZnNldChfcmVmLCBpbmRleCkge1xuICAgIHZhciBpdGVtU2l6ZSA9IF9yZWYuaXRlbVNpemU7XG4gICAgcmV0dXJuIGluZGV4ICogaXRlbVNpemU7XG4gIH0sXG4gIGdldEl0ZW1TaXplOiBmdW5jdGlvbiBnZXRJdGVtU2l6ZShfcmVmMiwgaW5kZXgpIHtcbiAgICB2YXIgaXRlbVNpemUgPSBfcmVmMi5pdGVtU2l6ZTtcbiAgICByZXR1cm4gaXRlbVNpemU7XG4gIH0sXG4gIGdldEVzdGltYXRlZFRvdGFsU2l6ZTogZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxTaXplKF9yZWYzKSB7XG4gICAgdmFyIGl0ZW1Db3VudCA9IF9yZWYzLml0ZW1Db3VudCxcbiAgICAgICAgaXRlbVNpemUgPSBfcmVmMy5pdGVtU2l6ZTtcbiAgICByZXR1cm4gaXRlbVNpemUgKiBpdGVtQ291bnQ7XG4gIH0sXG4gIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50OiBmdW5jdGlvbiBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudChfcmVmNCwgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gX3JlZjQuZGlyZWN0aW9uLFxuICAgICAgICBoZWlnaHQgPSBfcmVmNC5oZWlnaHQsXG4gICAgICAgIGl0ZW1Db3VudCA9IF9yZWY0Lml0ZW1Db3VudCxcbiAgICAgICAgaXRlbVNpemUgPSBfcmVmNC5pdGVtU2l6ZSxcbiAgICAgICAgbGF5b3V0ID0gX3JlZjQubGF5b3V0LFxuICAgICAgICB3aWR0aCA9IF9yZWY0LndpZHRoO1xuICAgIC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICB2YXIgc2l6ZSA9IGlzSG9yaXpvbnRhbCA/IHdpZHRoIDogaGVpZ2h0O1xuICAgIHZhciBsYXN0SXRlbU9mZnNldCA9IE1hdGgubWF4KDAsIGl0ZW1Db3VudCAqIGl0ZW1TaXplIC0gc2l6ZSk7XG4gICAgdmFyIG1heE9mZnNldCA9IE1hdGgubWluKGxhc3RJdGVtT2Zmc2V0LCBpbmRleCAqIGl0ZW1TaXplKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gTWF0aC5tYXgoMCwgaW5kZXggKiBpdGVtU2l6ZSAtIHNpemUgKyBpdGVtU2l6ZSk7XG5cbiAgICBpZiAoYWxpZ24gPT09ICdzbWFydCcpIHtcbiAgICAgIGlmIChzY3JvbGxPZmZzZXQgPj0gbWluT2Zmc2V0IC0gc2l6ZSAmJiBzY3JvbGxPZmZzZXQgPD0gbWF4T2Zmc2V0ICsgc2l6ZSkge1xuICAgICAgICBhbGlnbiA9ICdhdXRvJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWduID0gJ2NlbnRlcic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuXG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuXG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICB7XG4gICAgICAgICAgLy8gXCJDZW50ZXJlZFwiIG9mZnNldCBpcyB1c3VhbGx5IHRoZSBhdmVyYWdlIG9mIHRoZSBtaW4gYW5kIG1heC5cbiAgICAgICAgICAvLyBCdXQgbmVhciB0aGUgZWRnZXMgb2YgdGhlIGxpc3QsIHRoaXMgZG9lc24ndCBob2xkIHRydWUuXG4gICAgICAgICAgdmFyIG1pZGRsZU9mZnNldCA9IE1hdGgucm91bmQobWluT2Zmc2V0ICsgKG1heE9mZnNldCAtIG1pbk9mZnNldCkgLyAyKTtcblxuICAgICAgICAgIGlmIChtaWRkbGVPZmZzZXQgPCBNYXRoLmNlaWwoc2l6ZSAvIDIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDsgLy8gbmVhciB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgfSBlbHNlIGlmIChtaWRkbGVPZmZzZXQgPiBsYXN0SXRlbU9mZnNldCArIE1hdGguZmxvb3Ioc2l6ZSAvIDIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFzdEl0ZW1PZmZzZXQ7IC8vIG5lYXIgdGhlIGVuZFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWlkZGxlT2Zmc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdhdXRvJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChzY3JvbGxPZmZzZXQgPj0gbWluT2Zmc2V0ICYmIHNjcm9sbE9mZnNldCA8PSBtYXhPZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gc2Nyb2xsT2Zmc2V0O1xuICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbE9mZnNldCA8IG1pbk9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9LFxuICBnZXRTdGFydEluZGV4Rm9yT2Zmc2V0OiBmdW5jdGlvbiBnZXRTdGFydEluZGV4Rm9yT2Zmc2V0KF9yZWY1LCBvZmZzZXQpIHtcbiAgICB2YXIgaXRlbUNvdW50ID0gX3JlZjUuaXRlbUNvdW50LFxuICAgICAgICBpdGVtU2l6ZSA9IF9yZWY1Lml0ZW1TaXplO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihpdGVtQ291bnQgLSAxLCBNYXRoLmZsb29yKG9mZnNldCAvIGl0ZW1TaXplKSkpO1xuICB9LFxuICBnZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4OiBmdW5jdGlvbiBnZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4KF9yZWY2LCBzdGFydEluZGV4LCBzY3JvbGxPZmZzZXQpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gX3JlZjYuZGlyZWN0aW9uLFxuICAgICAgICBoZWlnaHQgPSBfcmVmNi5oZWlnaHQsXG4gICAgICAgIGl0ZW1Db3VudCA9IF9yZWY2Lml0ZW1Db3VudCxcbiAgICAgICAgaXRlbVNpemUgPSBfcmVmNi5pdGVtU2l6ZSxcbiAgICAgICAgbGF5b3V0ID0gX3JlZjYubGF5b3V0LFxuICAgICAgICB3aWR0aCA9IF9yZWY2LndpZHRoO1xuICAgIC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICB2YXIgb2Zmc2V0ID0gc3RhcnRJbmRleCAqIGl0ZW1TaXplO1xuICAgIHZhciBzaXplID0gaXNIb3Jpem9udGFsID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgdmFyIG51bVZpc2libGVJdGVtcyA9IE1hdGguY2VpbCgoc2l6ZSArIHNjcm9sbE9mZnNldCAtIG9mZnNldCkgLyBpdGVtU2l6ZSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKGl0ZW1Db3VudCAtIDEsIHN0YXJ0SW5kZXggKyBudW1WaXNpYmxlSXRlbXMgLSAxIC8vIC0xIGlzIGJlY2F1c2Ugc3RvcCBpbmRleCBpcyBpbmNsdXNpdmVcbiAgICApKTtcbiAgfSxcbiAgaW5pdEluc3RhbmNlUHJvcHM6IGZ1bmN0aW9uIGluaXRJbnN0YW5jZVByb3BzKHByb3BzKSB7Ly8gTm9vcFxuICB9LFxuICBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlOiB0cnVlLFxuICB2YWxpZGF0ZVByb3BzOiBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKF9yZWY3KSB7XG4gICAgdmFyIGl0ZW1TaXplID0gX3JlZjcuaXRlbVNpemU7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtU2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJpdGVtU2l6ZVwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIG51bWJlci4gJyArIChcIlxcXCJcIiArIChpdGVtU2l6ZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBpdGVtU2l6ZSkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbi8vIFB1bGxlZCBmcm9tIHJlYWN0LWNvbXBhdFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QtY29tcGF0L2Jsb2IvN2M1ZGUwMGU3Yzg1ZTJmZmQwMTFiZjNhZjAyODk5YjYzZjY5OWQzYS9zcmMvaW5kZXguanMjTDM0OVxuZnVuY3Rpb24gc2hhbGxvd0RpZmZlcnMocHJldiwgbmV4dCkge1xuICBmb3IgKHZhciBhdHRyaWJ1dGUgaW4gcHJldikge1xuICAgIGlmICghKGF0dHJpYnV0ZSBpbiBuZXh0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgX2F0dHJpYnV0ZSBpbiBuZXh0KSB7XG4gICAgaWYgKHByZXZbX2F0dHJpYnV0ZV0gIT09IG5leHRbX2F0dHJpYnV0ZV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gSXQga25vd3MgdG8gY29tcGFyZSBpbmRpdmlkdWFsIHN0eWxlIHByb3BzIGFuZCBpZ25vcmUgdGhlIHdyYXBwZXIgb2JqZWN0LlxuLy8gU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdG1lbW9cblxuZnVuY3Rpb24gYXJlRXF1YWwocHJldlByb3BzLCBuZXh0UHJvcHMpIHtcbiAgdmFyIHByZXZTdHlsZSA9IHByZXZQcm9wcy5zdHlsZSxcbiAgICAgIHByZXZSZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJldlByb3BzLCBbXCJzdHlsZVwiXSk7XG5cbiAgdmFyIG5leHRTdHlsZSA9IG5leHRQcm9wcy5zdHlsZSxcbiAgICAgIG5leHRSZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UobmV4dFByb3BzLCBbXCJzdHlsZVwiXSk7XG5cbiAgcmV0dXJuICFzaGFsbG93RGlmZmVycyhwcmV2U3R5bGUsIG5leHRTdHlsZSkgJiYgIXNoYWxsb3dEaWZmZXJzKHByZXZSZXN0LCBuZXh0UmVzdCk7XG59XG5cbi8vIEl0IGtub3dzIHRvIGNvbXBhcmUgaW5kaXZpZHVhbCBzdHlsZSBwcm9wcyBhbmQgaWdub3JlIHRoZSB3cmFwcGVyIG9iamVjdC5cbi8vIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtY29tcG9uZW50Lmh0bWwjc2hvdWxkY29tcG9uZW50dXBkYXRlXG5cbmZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICByZXR1cm4gIWFyZUVxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgc2hhbGxvd0RpZmZlcnModGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbn1cblxuZXhwb3J0IHsgVmFyaWFibGVTaXplR3JpZCwgVmFyaWFibGVTaXplTGlzdCwgRml4ZWRTaXplR3JpZCwgRml4ZWRTaXplTGlzdCwgYXJlRXF1YWwsIHNob3VsZENvbXBvbmVudFVwZGF0ZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X2RvbV9fOyJdLCJzb3VyY2VSb290IjoiIn0=