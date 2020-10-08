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

// const $ = window.jQuery
// const _ = window._
// const wp = window.wp
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
/* harmony import */ var _lib_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api-client */ "./assets/scripts/lib/api-client.ts");
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/log */ "./assets/scripts/lib/log.ts");
/* harmony import */ var _lib_wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/wait */ "./assets/scripts/lib/wait.ts");
/* harmony import */ var _lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/is-elementish */ "./assets/scripts/lib/is-elementish.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./assets/scripts/types.ts");
/* harmony import */ var _lib_get_attribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/get-attribute */ "./assets/scripts/lib/get-attribute.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_SubmissionList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../react/SubmissionList */ "./assets/scripts/react/SubmissionList.tsx");
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












var _createApiClient = Object(_lib_api_client__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    abort = _createApiClient.abort,
    request = _createApiClient.request,
    signal = _createApiClient.signal;

var i18n = _lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].i18n;
var $ = window.jQuery;
var _ = window._;
var wp = window.wp; // const xyz = (implicitAny) => implicitAny.toString()

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

    if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(fields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(additionalFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(newFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(deletedFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(historyFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(allowSave) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(submissionsEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(editorEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(thankYouEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(previewEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(publishButton) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(sidebarFieldTemplate)) {
      var _globalData$post;

      var editorIsReadonly = $(editorEl).attr('readonly') ? true : false;
      var initialState = {
        historyFields: JSON.parse( // (historyFields && historyFields.getAttribute('value')) || null
        Object(_lib_get_attribute__WEBPACK_IMPORTED_MODULE_6__["default"])(historyFields, 'value') || '{}'),
        fields: JSON.parse(Object(_lib_get_attribute__WEBPACK_IMPORTED_MODULE_6__["default"])(fields, 'value') || 'null'),
        additionalFields: JSON.parse(Object(_lib_get_attribute__WEBPACK_IMPORTED_MODULE_6__["default"])(additionalFields, 'value') || 'null'),
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
        react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_react_SubmissionList__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
          // if (this.state[key] !== null) {
          var value = _this.state[key];

          if (typeof value === 'boolean') {
            el.setAttribute('value', value ? '1' : '0');
          } else {
            // el.value = JSON.stringify(value)
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
      // Might as well use the jQuery since it's wp-admin
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
                _lib_log__WEBPACK_IMPORTED_MODULE_2__["default"].error('Failed to get preview', _context.t0);

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
        var idEl, formId, body, object, req, tmpEl, html, form;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                idEl = document.querySelector('input[name="post_ID"]');
                formId = parseInt(Object(_lib_get_attribute__WEBPACK_IMPORTED_MODULE_6__["default"])(idEl, 'value') || '0', 10);
                body = new FormData();
                body.append('content', content);
                body.append('form', formId.toString());
                _lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].lang && body.append('lang', _lib_global_data__WEBPACK_IMPORTED_MODULE_0__["default"].lang);
                object = {};
                body.forEach(function (value, key) {
                  object[key] = value;
                });
                _context2.next = 10;
                return request('/render', {
                  method: 'POST',
                  body
                }, _types__WEBPACK_IMPORTED_MODULE_5__["ApiResponseKind"].Render);

              case 10:
                req = _context2.sent;

                if (!(req.kind === _types__WEBPACK_IMPORTED_MODULE_5__["ApiResponseKind"].Render)) {
                  _context2.next = 25;
                  break;
                }

                if (!('error' in req.data)) {
                  _context2.next = 16;
                  break;
                }

                this.previewEl.innerHTML = JSON.stringify(req.data);
                _context2.next = 25;
                break;

              case 16:
                if (!('html' in req.data)) {
                  _context2.next = 25;
                  break;
                }

                tmpEl = document.createElement('div');
                html = req.data.html;
                tmpEl.innerHTML = html;
                _context2.next = 22;
                return Object(_lib_wait__WEBPACK_IMPORTED_MODULE_3__["waitForNextTick"])();

              case 22:
                if (tmpEl) {
                  form = tmpEl.querySelector('form');
                  this.previewEl.innerHTML = form ? form.innerHTML : '';
                }

                _context2.next = 25;
                return Object(_lib_wait__WEBPACK_IMPORTED_MODULE_3__["waitForNextTick"])();

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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

      if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(nameEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(typeEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(alert)) {
        nameEl.innerText = name;
        typeEl.innerText = required ? "required ".concat(type) : type;

        if (errorMessage) {
          alert.setAttribute('title', errorMessage);
          var messages = document.createElement('p');
          var message = "<strong>".concat(i18n.problems, "</strong>").concat(errorMessage).replace(/(?:\r\n|\r|\n)/g, '<br>');
          messages.innerHTML = message;
          alert.insertAdjacentElement('afterend', messages);
        } else {
          Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(alert.parentNode) && alert.parentNode.removeChild(alert);
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

                if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldContainer)) {
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
                  if (el && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(el)) {
                    var fieldName = el.getAttribute('name');

                    if (!fieldName) {
                      // return null
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
                    acc.push({
                      name,
                      type,
                      required,
                      multiple
                    });
                    return acc;
                  }

                  return acc;
                }, []); // .filter((n) => n !== null)

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
                  var errorMessage = ''; // names like fieldgroup[fieldname] are not supported yet

                  if (name.match(/\w*\[\w*\]/)) {
                    errorMessage = "".concat(errorMessage).concat(i18n.groupedNamesNotSupportedYet, "\n");
                  }

                  if (duplicateNames && duplicateNames.includes(name)) {
                    // console.log('duplicates', duplicateNames, field)
                    // Allow checkboxes etc to work normally
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
                  // fields: fields as Field[],
                  // After clearing the duplicates, an object will suit us better
                  fields: fields.reduce(function (acc, field) {
                    acc[field.name] = field;
                    return acc;
                  }, {}),
                  newFields: newFields,
                  deletedFields,
                  allowSave
                };
                this.setState(function () {
                  return newState;
                });
                _context3.next = 20;
                return Object(_lib_wait__WEBPACK_IMPORTED_MODULE_3__["waitForNextTick"])();

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
                return Object(_lib_wait__WEBPACK_IMPORTED_MODULE_3__["waitForNextTick"])();

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
/* harmony import */ var _lib_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api-client */ "./assets/scripts/lib/api-client.ts");
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/log */ "./assets/scripts/lib/log.ts");
/* harmony import */ var _wplf_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wplf-tabs */ "./assets/scripts/classes/wplf-tabs.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./assets/scripts/types.ts");
/* harmony import */ var _lib_is_elementish__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/is-elementish */ "./assets/scripts/lib/is-elementish.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var _createApiClient = Object(_lib_api_client__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    request = _createApiClient.request;

var resetForm = function resetForm(wplfForm, params) {
  var form = wplfForm.form; // Since all type guarantees have been thrown out of the window,
  // it's necessary to check that the element indeed has this method.

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
  div.insertAdjacentHTML('afterbegin', // message
  message.replace(/\n/g, '<br />') // Maybe this shouldn't be modified.
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

    if (element instanceof Element !== true) {
      // if (element instanceof HTMLFormElement !== true) {
      throw new Error('Form element invalid or missing');
    }

    var fallbackInput = element.querySelector('[name="_nojs"]');
    this.form = element;
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
                req = request('/submit', {
                  method: 'POST',
                  body: data
                }, _types__WEBPACK_IMPORTED_MODULE_4__["ApiResponseKind"].Submission);
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

    // if (element instanceof Element !== true) {
    // throw new Error('Tab element invalid or missing')
    // }
    this.remember = false;
    this.name = '';

    this.handleClick = function (e) {
      var target = e.target;

      if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_2__["default"])(target)) {
        console.log(target);
        var tabName = target.getAttribute('data-target');

        if (tabName) {
          _this.switchTab(tabName);
        } else {
          _lib_log__WEBPACK_IMPORTED_MODULE_1__["default"].notice('Unable to switch tab as data-target was empty');
        }
      }

      e.preventDefault();
    };

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
/* harmony import */ var _lib_ensure_num__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/ensure-num */ "./assets/scripts/lib/ensure-num.ts");
/* harmony import */ var _wplf_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wplf-tabs */ "./assets/scripts/classes/wplf-tabs.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var WPLF = /*#__PURE__*/function () {
  function WPLF() {
    _classCallCheck(this, WPLF);

    this.forms = {}; // Expose WPLF_Form and WPLF_Tabs as properties for this class.
    // Just to allow users who don't install the npm package to use these too:

    this.WPLF_Form = _wplf_form__WEBPACK_IMPORTED_MODULE_0__["WPLF_Form"];
    this.WPLF_Tabs = _wplf_tabs__WEBPACK_IMPORTED_MODULE_3__["default"];
    this.initialize();
  }

  _createClass(WPLF, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      if (_lib_global_data__WEBPACK_IMPORTED_MODULE_1__["default"].settings.autoinit) {
        document.querySelectorAll('form.wplf').forEach(function (form) {
          return _this.attach(form);
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

        var formEl = wplfForm.form;
        var formElId = formEl.getAttribute('data-form-id');

        if (formElId && Object(_lib_ensure_num__WEBPACK_IMPORTED_MODULE_2__["default"])(formElId) === Object(_lib_ensure_num__WEBPACK_IMPORTED_MODULE_2__["default"])(id)) {
          acc.push(wplfForm);
        }

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

        var formEl = wplfForm.form;
        var formElSlug = formEl.getAttribute('data-form-slug');

        if (formElSlug && formElSlug === slug) {
          acc.push(wplfForm);
        }

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

/***/ "./assets/scripts/lib/api-client.ts":
/*!******************************************!*\
  !*** ./assets/scripts/lib/api-client.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var abort_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! abort-controller */ "./node_modules/abort-controller/browser.js");
/* harmony import */ var abort_controller__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(abort_controller__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-data */ "./assets/scripts/lib/global-data.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * It's ok to create multiple API clients
 *
 * Usage: const { abort, request, getSignal } = createApiClient()
 */

function createApiClient() {
  var controller = null;
  var signal = null;
  return {
    // controller: null,
    // signal: null,
    controller,
    signal,

    getSignal() {
      return signal;
    },

    abort() {
      if (controller && controller.abort) {
        controller.abort();
      }
    },

    request(target) {
      var _arguments = arguments;
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var options, responseKind, res, headers, status, statusText, url, ok, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {};
                responseKind = _arguments.length > 2 ? _arguments[2] : undefined;
                controller = new abort_controller__WEBPACK_IMPORTED_MODULE_0___default.a();
                signal = controller.signal;
                _context.prev = 4;
                _context.next = 7;
                return fetch(_global_data__WEBPACK_IMPORTED_MODULE_1__["default"].backendUrl + target, _objectSpread({
                  method: 'GET',
                  signal,
                  credentials: _global_data__WEBPACK_IMPORTED_MODULE_1__["default"].fetchCredentials || 'same-origin',
                  headers: _global_data__WEBPACK_IMPORTED_MODULE_1__["default"].requestHeaders || {}
                }, options));

              case 7:
                res = _context.sent;
                headers = res.headers, status = res.status, statusText = res.statusText, url = res.url, ok = res.ok;
                _context.next = 11;
                return res.json();

              case 11:
                data = _context.sent;
                controller = null;
                return _context.abrupt("return", {
                  kind: responseKind,
                  headers,
                  status,
                  statusText,
                  url,
                  ok,
                  data
                });

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](4);
                controller = null; // If you want to do something when the request is aborted, use
                // signal.addEventListener('abort', ...)

                if (!(_context.t0.name !== 'AbortError')) {
                  _context.next = 21;
                  break;
                }

                throw _context.t0;

              case 21:
                return _context.abrupt("return", _context.t0);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 16]]);
      }))();
    }

  };
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return createApiClient();
});

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
  if (x.length > 0 && x.match(/^[0-9]*$/)) {
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
} // function isElementish(e: object | null | undefined): e is Element {
//   return (e ? e['tagName'] && 'getAttribute' in e : false);
// }


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
/*! exports provided: default, SubmissionModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Submission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionModal", function() { return SubmissionModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_ensure_num__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/ensure-num */ "./assets/scripts/lib/ensure-num.ts");
/* harmony import */ var _lib_global_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/global-data */ "./assets/scripts/lib/global-data.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





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

function Submission(_ref2) {
  var submission = _ref2.submission,
      examine = _ref2.examine;
  var ID = submission.ID,
      uuid = submission.uuid,
      entries = submission.entries,
      formFields = submission.formFields;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: (window.location.search ? "".concat(window.location.search, "&") : '?') + "&submissionUuid=".concat(uuid),
    onClick: function onClick(e) {
      e.preventDefault();
      examine(submission);
    }
  }, "Submission ", ID);
}
function SubmissionModal(_ref3) {
  var submission = _ref3.submission;

  if (!submission) {
    return null;
  }

  var ID = submission.ID,
      uuid = submission.uuid,
      entries = submission.entries,
      formFields = submission.formFields;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "wplf-formSubmission",
    "data-uuid": uuid
  }, Object.entries(entries).map(function (_ref4) {
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

          break;
        }
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: name
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, name), value);
  }));
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
/* harmony import */ var _lib_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api-client */ "./assets/scripts/lib/api-client.ts");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-window-infinite-loader */ "./node_modules/react-window-infinite-loader/dist/index.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./assets/scripts/types.ts");
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/log */ "./assets/scripts/lib/log.ts");
/* harmony import */ var _lib_ensure_num__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/ensure-num */ "./assets/scripts/lib/ensure-num.ts");
/* harmony import */ var _lib_global_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/global-data */ "./assets/scripts/lib/global-data.ts");
/* harmony import */ var _Submission__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Submission */ "./assets/scripts/react/Submission.tsx");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_9__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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







var _createApiClient = Object(_lib_api_client__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    request = _createApiClient.request;






react_modal__WEBPACK_IMPORTED_MODULE_9___default.a.setAppElement('.wplf-submissionList');
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
          var newFlag = flag; // const stringId = item.ID.toString()

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
      var response, isGetSubmissionsApiResponse, ok, headers, data, kind, totalPages, currentPage;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isGetSubmissionsApiResponse = function _isGetSubmissionsApiR(x) {
                return x.kind === _types__WEBPACK_IMPORTED_MODULE_4__["ApiResponseKind"].GetSubmissions;
              };

              if (!isLoading) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              setState(function (s) {
                return _objectSpread(_objectSpread({}, s), {}, {
                  isLoading: true
                });
              });
              _context.next = 6;
              return request("/submissions?form=".concat(formId, "&page=").concat(page), {}, _types__WEBPACK_IMPORTED_MODULE_4__["ApiResponseKind"].GetSubmissions);

            case 6:
              response = _context.sent;

              if (isGetSubmissionsApiResponse(response)) {
                ok = response.ok, headers = response.headers, data = response.data, kind = response.kind; //
                // if (!ok) {
                // log.error('Request to get submissions failed')
                // return
                // }

                totalPages = headers.get('X-WP-Totalpages') || 1;
                currentPage = Object(_lib_ensure_num__WEBPACK_IMPORTED_MODULE_6__["default"])(page + 1);

                if ('error' in data) {
                  _lib_log__WEBPACK_IMPORTED_MODULE_5__["default"].error(data.error);
                  setState(function (s) {
                    return {
                      submissions: [],
                      page: 0,
                      moreAvailable: false,
                      isLoading: false
                    };
                  });
                } else if (!ok) {
                  _lib_log__WEBPACK_IMPORTED_MODULE_5__["default"].error('Request to get form submissions failed');
                  setState(function (s) {
                    return {
                      submissions: [],
                      page: 0,
                      moreAvailable: false,
                      isLoading: false
                    };
                  });
                } else {
                  setState(function (s) {
                    return {
                      submissions: [].concat(_toConsumableArray(s.submissions), _toConsumableArray(data)),
                      page: currentPage,
                      moreAvailable: currentPage < Object(_lib_ensure_num__WEBPACK_IMPORTED_MODULE_6__["default"])(totalPages, true),
                      isLoading: false
                    };
                  });
                }
              } else {
                // If this runs, there's a mistake in the code. There shouldn't be, since it's TS.
                _lib_log__WEBPACK_IMPORTED_MODULE_5__["default"].error('Something is wrong with loadMore', response);
                setState(function (s) {
                  return _objectSpread(_objectSpread({}, s), {}, {
                    isLoading: false
                  });
                });
              }

            case 8:
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
      content = _lib_global_data__WEBPACK_IMPORTED_MODULE_7__["default"].i18n.loading;
    } else {
      var submission = submissions[index];
      var entries = submission.entries,
          meta = submission.meta,
          referrer = submission.referrer,
          uuid = submission.uuid,
          ID = submission.ID;
      console.log(submission);
      content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wplf-submissionList__submission"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "wplf-submissionList__submission__select"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        "data-key": submissions[index].uuid,
        type: "checkbox",
        checked: selectedIds.has(submissions[index].uuid),
        onChange: handleChange,
        onClick: handleClick
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wplf-submissionList__submission__data"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Submission__WEBPACK_IMPORTED_MODULE_8__["default"], {
        submission: submission,
        examine: openModal
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: style
    }, content);
  };

  var customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isItemLoaded: isItemLoaded,
    itemCount: itemCount,
    loadMoreItems: loadMoreItems
  }, function (_ref5) {
    var onItemsRendered = _ref5.onItemsRendered,
        ref = _ref5.ref;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_window__WEBPACK_IMPORTED_MODULE_2__["VariableSizeList"], {
      className: "List",
      height: itemCount > 0 ? 400 : 0,
      itemCount: itemCount,
      itemSize: getSubmissionSize,
      onItemsRendered: onItemsRendered,
      ref: ref,
      width: '100%'
    }, Item);
  }), !submissions.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_global_data__WEBPACK_IMPORTED_MODULE_7__["default"].i18n.noSubmissionsYet) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_9___default.a, {
    isOpen: open,
    // onAfterOpen={afterOpenModal}
    onRequestClose: closeModal,
    style: customStyles,
    contentLabel: "Example Modal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: closeModal
  }, "close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Submission__WEBPACK_IMPORTED_MODULE_8__["SubmissionModal"], {
    submission: modalSubmission
  })));
}

/***/ }),

/***/ "./assets/scripts/types.ts":
/*!*********************************!*\
  !*** ./assets/scripts/types.ts ***!
  \*********************************/
/*! exports provided: SubmitState, ApiResponseKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitState", function() { return SubmitState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiResponseKind", function() { return ApiResponseKind; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SubmitState;

(function (SubmitState) {
  SubmitState[SubmitState["Unsubmitted"] = 0] = "Unsubmitted";
  SubmitState[SubmitState["Submitting"] = 1] = "Submitting";
  SubmitState[SubmitState["Success"] = 2] = "Success";
  SubmitState[SubmitState["Error"] = 3] = "Error";
})(SubmitState || (SubmitState = {}));

var ApiResponseKind;

(function (ApiResponseKind) {
  ApiResponseKind["Submission"] = "submission";
  ApiResponseKind["Render"] = "render";
  ApiResponseKind["GetSubmissions"] = "getsubmissions";
})(ApiResponseKind || (ApiResponseKind = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XUExGL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9XUExGL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtYWRkb25zLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtYWRtaW4udHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi1mb3JtLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi1zdG9yYWdlLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtdGFicy50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvY2xhc3Nlcy93cGxmLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9saWIvYXBpLWNsaWVudC50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvbGliL2Vuc3VyZS1udW0udHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi9nZXQtYXR0cmlidXRlLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9saWIvZ2xvYmFsLWRhdGEudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi9pcy1lbGVtZW50aXNoLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9saWIvbG9nLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9saWIvd2FpdC50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvcmVhY3QvU3VibWlzc2lvbi50c3giLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL3JlYWN0L1N1Ym1pc3Npb25MaXN0LnRzeCIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL3dwbGYtYWRtaW4udHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zdHlsZXMvd3BsZi1hZG1pbi5zY3NzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvYWJvcnQtY29udHJvbGxlci9icm93c2VyLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvY29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsUG9ydGFsLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvYXJpYUFwcEhpZGVyLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvYm9keVRyYXAuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9jbGFzc0xpc3QuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9mb2N1c01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9wb3J0YWxPcGVuSW5zdGFuY2VzLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50LmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2hlbHBlcnMvc2NvcGVUYWIuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy90YWJiYWJsZS5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXdpbmRvdy1pbmZpbml0ZS1sb2FkZXIvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC13aW5kb3cvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vV1BMRi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwiUmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9Iiwid2VicGFjazovL1dQTEYvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwiUmVhY3RET01cIixcInJvb3RcIjpcIlJlYWN0RE9NXCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekMsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQVU7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVGQUEyQjtBQUN0RCxDQUFDLE1BQU0sRUFJTjs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNwTGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsMEZBQStCO0FBQzFEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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Q1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHdDQUF3QztBQUM5RDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQUk7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFFLDJEQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtHQUErRztBQUMvRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkdBQTJHO0FBQzNHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxDQUFDLG1EQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyR0FBMkc7QUFDM0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLENBQUMsbURBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtC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Q0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEIiwiZmlsZSI6IndwbGYtYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJSZWFjdFwiLCBcIlJlYWN0RE9NXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIldQTEZcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiV1BMRlwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X2RvbV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gY29uc3QgJCA9IHdpbmRvdy5qUXVlcnlcbi8vIGNvbnN0IF8gPSB3aW5kb3cuX1xuLy8gY29uc3Qgd3AgPSB3aW5kb3cud3BcblxuaW1wb3J0IFdQTEYgZnJvbSAnLi93cGxmJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUExGX0FkZG9ucyB7XG4gIGNvbnN0cnVjdG9yKHdwbGZJbnN0YW5jZTogV1BMRikge31cbn1cbiIsImltcG9ydCBXUExGX0VkaXRvciBmcm9tICcuL3dwbGYtZWRpdG9yJ1xuaW1wb3J0IFdQTEZfU2V0dGluZ3MgZnJvbSAnLi93cGxmLXNldHRpbmdzJ1xuaW1wb3J0IFdQTEZfQWRkb25zIGZyb20gJy4vd3BsZi1hZGRvbnMnXG5pbXBvcnQgV1BMRl9UYWJzIGZyb20gJy4vd3BsZi10YWJzJ1xuaW1wb3J0IFdQTEYgZnJvbSAnLi93cGxmJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUExGX0FkbWluIHtcbiAgZWRpdG9yPzogV1BMRl9FZGl0b3JcbiAgYWRkb25zPzogV1BMRl9BZGRvbnNcbiAgc2V0dGluZ3M/OiBXUExGX1NldHRpbmdzXG4gIHRhYnM6IFdQTEZfVGFic1tdXG5cbiAgY29uc3RydWN0b3Iod3BsZkluc3RhbmNlOiBXUExGKSB7XG4gICAgdGhpcy50YWJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3BsZi10YWJzJykpLm1hcChcbiAgICAgIChlbCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFdQTEZfVGFicyhlbClcbiAgICAgIH1cbiAgICApXG5cbiAgICAvLyBJbml0IHN0dWZmIGJhc2VkIG9uIHdoYXQgcGFnZSB3ZSdyZSBvblxuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0XG5cbiAgICBpZiAoXG4gICAgICBjbGFzc0xpc3QuY29udGFpbnMoJ3Bvc3QtdHlwZS1saWJyZWZvcm0nKSAmJlxuICAgICAgKGNsYXNzTGlzdC5jb250YWlucygncG9zdC1waHAnKSB8fCBjbGFzc0xpc3QuY29udGFpbnMoJ3Bvc3QtbmV3LXBocCcpKVxuICAgICkge1xuICAgICAgdGhpcy5lZGl0b3IgPSBuZXcgV1BMRl9FZGl0b3Iod3BsZkluc3RhbmNlKVxuICAgIH0gZWxzZSBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdsaWJyZWZvcm1fcGFnZV93cGxmU2V0dGluZ3MnKSkge1xuICAgICAgLy8gSW4gc2V0dGluZ3MgcGFnZVxuICAgICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBXUExGX1NldHRpbmdzKHdwbGZJbnN0YW5jZSlcbiAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucygnbGlicmVmb3JtX3BhZ2Vfd3BsZkFkZG9ucycpKSB7XG4gICAgICB0aGlzLmFkZG9ucyA9IG5ldyBXUExGX0FkZG9ucyh3cGxmSW5zdGFuY2UpXG4gICAgfVxuICB9XG5cbiAgZ2V0RWRpdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvclxuICB9XG5cbiAgZ2V0QWRkb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFkZG9uc1xuICB9XG5cbiAgZ2V0U2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3NcbiAgfVxuXG4gIGdldFRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFic1xuICB9XG59XG4iLCJpbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuLi9saWIvZ2xvYmFsLWRhdGEnXG5pbXBvcnQgY3JlYXRlQXBpQ2xpZW50IGZyb20gJy4uL2xpYi9hcGktY2xpZW50J1xuaW1wb3J0IGxvZyBmcm9tICcuLi9saWIvbG9nJ1xuaW1wb3J0IHsgd2FpdEZvck5leHRUaWNrIH0gZnJvbSAnLi4vbGliL3dhaXQnXG5pbXBvcnQgaXNFbGVtZW50aXNoIGZyb20gJy4uL2xpYi9pcy1lbGVtZW50aXNoJ1xuXG5pbXBvcnQgeyBBcGlSZXNwb25zZUtpbmQsIEZpZWxkLCBMaXN0LCBXUExGX0VkaXRvclN0YXRlIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgZ2V0QXR0cmlidXRlIGZyb20gJy4uL2xpYi9nZXQtYXR0cmlidXRlJ1xuXG5pbXBvcnQgV1BMRiBmcm9tICcuL3dwbGYnXG5pbXBvcnQgeyBXUExGX0Zvcm0gfSBmcm9tICcuL3dwbGYtZm9ybSdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBTdWJtaXNzaW9uTGlzdCBmcm9tICcuLi9yZWFjdC9TdWJtaXNzaW9uTGlzdCdcblxuY29uc3QgeyBhYm9ydCwgcmVxdWVzdCwgc2lnbmFsIH0gPSBjcmVhdGVBcGlDbGllbnQoKVxuY29uc3QgeyBpMThuIH0gPSBnbG9iYWxEYXRhXG5cbmNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5XG5jb25zdCBfID0gd2luZG93Ll9cbmNvbnN0IHdwID0gd2luZG93LndwXG5cbi8vIGNvbnN0IHh5eiA9IChpbXBsaWNpdEFueSkgPT4gaW1wbGljaXRBbnkudG9TdHJpbmcoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUExGX0VkaXRvciB7XG4gIHdwbGY6IFdQTEZcbiAgc3RhdGU6IFdQTEZfRWRpdG9yU3RhdGVcblxuICBmb3JtSW5zdGFuY2U6IFdQTEZfRm9ybSB8IG51bGwgPSBudWxsXG4gIGlucHV0czogTGlzdDxFbGVtZW50PlxuICBwcmV2aWV3RWw6IEVsZW1lbnQgLy8gVGhpcyBTSE9VTEQgYmUgYSBIVE1MRm9ybUVsZW1lbnQgKGFzIHNob3VsZCB0aGUgZWxlbWVudCBpdHNlbGYpLCBidXQgdGhhdCB3b3VsZCBjYXVzZSBuZXN0ZWQgZm9ybXMgaW5zaWRlIHdwLWFkbWluLCBhbmQgdGhhdCB3b3VsZCBiZSBiYWQuXG4gIHB1Ymxpc2hCdXR0b246IEVsZW1lbnRcbiAgZmllbGRUZW1wbGF0ZTogRWxlbWVudFxuXG4gIC8vIENvZGVtaXJyb3IgaW5zdGFuY2VzOlxuICBjb250ZW50RWRpdG9yOiBhbnlcbiAgc3VjY2Vzc01lc3NhZ2VFZGl0b3I6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHdwbGZJbnN0YW5jZTogV1BMRikge1xuICAgIGNvbnN0IGZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cGxmRmllbGRzJylcbiAgICBjb25zdCBhZGRpdGlvbmFsRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwbGZBZGRpdGlvbmFsRmllbGRzJylcbiAgICBjb25zdCBuZXdGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BsZk5ld0ZpZWxkcycpXG4gICAgY29uc3QgZGVsZXRlZEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cGxmRGVsZXRlZEZpZWxkcycpXG4gICAgY29uc3QgaGlzdG9yeUZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cGxmSGlzdG9yeUZpZWxkcycpXG4gICAgY29uc3QgYWxsb3dTYXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwbGZBbGxvd1NhdmUnKVxuICAgIGNvbnN0IHN1Ym1pc3Npb25zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy53cGxmLWVkaXRvciAud3BsZi1zdWJtaXNzaW9uTGlzdCdcbiAgICApXG4gICAgY29uc3QgZWRpdG9yRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3BsZi1lZGl0b3IgLndwbGYtY21FZGl0b3InKVxuICAgIGNvbnN0IHRoYW5rWW91RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy53cGxmLWFmdGVyU3VibWlzc2lvbiAud3BsZi1jbUVkaXRvcidcbiAgICApXG4gICAgY29uc3QgcHJldmlld0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndwbGYtZWRpdG9yX19wcmV2aWV3JylcbiAgICBjb25zdCBwdWJsaXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B1Ymxpc2gnKVxuICAgIGNvbnN0IHNpZGViYXJGaWVsZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcud3BsZi1mb3JtRmllbGRzID4gLndwbGYtZm9ybUZpZWxkc19fZmllbGQnXG4gICAgKVxuXG4gICAgaWYgKFxuICAgICAgaXNFbGVtZW50aXNoKGZpZWxkcykgJiZcbiAgICAgIGlzRWxlbWVudGlzaChhZGRpdGlvbmFsRmllbGRzKSAmJlxuICAgICAgaXNFbGVtZW50aXNoKG5ld0ZpZWxkcykgJiZcbiAgICAgIGlzRWxlbWVudGlzaChkZWxldGVkRmllbGRzKSAmJlxuICAgICAgaXNFbGVtZW50aXNoKGhpc3RvcnlGaWVsZHMpICYmXG4gICAgICBpc0VsZW1lbnRpc2goYWxsb3dTYXZlKSAmJlxuICAgICAgaXNFbGVtZW50aXNoKHN1Ym1pc3Npb25zRWwpICYmXG4gICAgICBpc0VsZW1lbnRpc2goZWRpdG9yRWwpICYmXG4gICAgICBpc0VsZW1lbnRpc2godGhhbmtZb3VFbCkgJiZcbiAgICAgIGlzRWxlbWVudGlzaChwcmV2aWV3RWwpICYmXG4gICAgICBpc0VsZW1lbnRpc2gocHVibGlzaEJ1dHRvbikgJiZcbiAgICAgIGlzRWxlbWVudGlzaChzaWRlYmFyRmllbGRUZW1wbGF0ZSlcbiAgICApIHtcbiAgICAgIGNvbnN0IGVkaXRvcklzUmVhZG9ubHkgPSAkKGVkaXRvckVsKS5hdHRyKCdyZWFkb25seScpID8gdHJ1ZSA6IGZhbHNlXG4gICAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIGhpc3RvcnlGaWVsZHM6IEpTT04ucGFyc2UoXG4gICAgICAgICAgLy8gKGhpc3RvcnlGaWVsZHMgJiYgaGlzdG9yeUZpZWxkcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpIHx8IG51bGxcbiAgICAgICAgICBnZXRBdHRyaWJ1dGUoaGlzdG9yeUZpZWxkcywgJ3ZhbHVlJykgfHwgJ3t9J1xuICAgICAgICApLCAvLyBcImRvZXMgbm90IGNoYW5nZVwiXG5cbiAgICAgICAgZmllbGRzOiBKU09OLnBhcnNlKGdldEF0dHJpYnV0ZShmaWVsZHMsICd2YWx1ZScpIHx8ICdudWxsJyksXG4gICAgICAgIGFkZGl0aW9uYWxGaWVsZHM6IEpTT04ucGFyc2UoXG4gICAgICAgICAgZ2V0QXR0cmlidXRlKGFkZGl0aW9uYWxGaWVsZHMsICd2YWx1ZScpIHx8ICdudWxsJ1xuICAgICAgICApLFxuICAgICAgICBuZXdGaWVsZHM6IFtdLFxuICAgICAgICBkZWxldGVkRmllbGRzOiBbXSxcbiAgICAgICAgYWxsb3dTYXZlOiBmYWxzZSxcbiAgICAgIH1cblxuICAgICAgdGhpcy53cGxmID0gd3BsZkluc3RhbmNlXG4gICAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlXG4gICAgICB0aGlzLmlucHV0cyA9IHtcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBhZGRpdGlvbmFsRmllbGRzLFxuICAgICAgICBuZXdGaWVsZHMsXG4gICAgICAgIGRlbGV0ZWRGaWVsZHMsXG4gICAgICAgIGhpc3RvcnlGaWVsZHMsXG4gICAgICAgIGFsbG93U2F2ZSxcbiAgICAgIH1cblxuICAgICAgdGhpcy5maWVsZFRlbXBsYXRlID0gc2lkZWJhckZpZWxkVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnRcbiAgICAgIHRoaXMuZmllbGRUZW1wbGF0ZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG5cbiAgICAgIHRoaXMucHJldmlld0VsID0gcHJldmlld0VsXG4gICAgICB0aGlzLnB1Ymxpc2hCdXR0b24gPSBwdWJsaXNoQnV0dG9uXG4gICAgICB0aGlzLmNvbnRlbnRFZGl0b3IgPSBlZGl0b3JJc1JlYWRvbmx5XG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHdwLmNvZGVFZGl0b3IuaW5pdGlhbGl6ZSgkKGVkaXRvckVsKSwgZ2xvYmFsRGF0YS5jb2RlTWlycm9yKVxuICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZUVkaXRvciA9IHdwLmNvZGVFZGl0b3IuaW5pdGlhbGl6ZShcbiAgICAgICAgJCh0aGFua1lvdUVsKSxcbiAgICAgICAgZ2xvYmFsRGF0YS5jb2RlTWlycm9yXG4gICAgICApXG4gICAgICB0aGlzLmhhbmRsZUNvbnRlbnRDaGFuZ2UgPSB0aGlzLmhhbmRsZUNvbnRlbnRDaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgICBpZiAoIWVkaXRvcklzUmVhZG9ubHkpIHtcbiAgICAgICAgLy8gSWYgdGhlIGVkaXRvciBpcyBpbiByZWFkLW9ubHkgbW9kZSwgbm8gbmVlZCB0byByZWZyZXNoIHRoZSBwcmV2aWV3IGFzIGl0IGNhbid0IGNoYW5nZSBhbnl3YXkuXG5cbiAgICAgICAgdGhpcy5jb250ZW50RWRpdG9yLmNvZGVtaXJyb3Iub24oXG4gICAgICAgICAgJ2NoYW5nZXMnLFxuICAgICAgICAgIF8uZGVib3VuY2UodGhpcy5oYW5kbGVDb250ZW50Q2hhbmdlLCAxMDAwKVxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5oYW5kbGVDb250ZW50Q2hhbmdlKHRoaXMuY29udGVudEVkaXRvci5jb2RlbWlycm9yKSAvLyBUcmlnZ2VycyBwcmV2aWV3IGJ1aWxkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZUNvbnRlbnRDaGFuZ2UoZWRpdG9yRWwuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWdsb2JhbERhdGEuc2V0dGluZ3MuaGFzVW5maWx0ZXJlZEh0bWwpIHtcbiAgICAgICAgdGhpcy50cnlUb1ByZXZlbnRFZGl0KClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybUlkID0gZ2xvYmFsRGF0YS5wb3N0Py5JRCB8fCBudWxsXG5cbiAgICAgIGlmIChmb3JtSWQpIHtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBTdWJtaXNzaW9uTGlzdCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZm9ybUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICApLFxuICAgICAgICAgIHN1Ym1pc3Npb25zRWxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdNaXNzaW5nIHNvbWUgb3IgYWxsIG9mIHRoZSByZXF1aXJlZCBlbGVtZW50cyB0byBydW4gV1BMRl9FZGl0b3InXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUoXG4gICAgZm4gPSAoY3VycmVudFN0YXRlOiBXUExGX0VkaXRvclN0YXRlKTogUGFydGlhbDxXUExGX0VkaXRvclN0YXRlPiA9PiAoe30pXG4gICkge1xuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBuZXdTdGF0ZSA9IGZuKGN1cnJlbnRTdGF0ZSlcblxuICAgIGlmICghbmV3U3RhdGUpIHtcbiAgICAgIC8vIG5vIG9wXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4uY3VycmVudFN0YXRlLFxuICAgICAgLi4ubmV3U3RhdGUsXG4gICAgfVxuXG4gICAgdGhpcy5hZnRlclN0YXRlQ2hhbmdlKClcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlXG4gIH1cblxuICB3cml0ZVN0YXRlKCkge1xuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuaW5wdXRzKS5mb3JFYWNoKChba2V5LCBlbF0pID0+IHtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5zdGF0ZSkge1xuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZVtrZXldXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlID8gJzEnIDogJzAnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVsLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZnRlclN0YXRlQ2hhbmdlKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpXG5cbiAgICBPYmplY3QuZW50cmllcyhzdGF0ZSkuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgICBzd2l0Y2ggKGspIHtcbiAgICAgICAgY2FzZSAnYWxsb3dTYXZlJzoge1xuICAgICAgICAgIHRoaXMud3JpdGVTdGF0ZSgpXG5cbiAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgdGhpcy5wdWJsaXNoQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1Ymxpc2hCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyBkZWZhdWx0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGJ1bmNoIG9mIHRoaW5ncyBhbmQgcmVtb3ZlIHRoZSBzdWJtaXQgYnV0dG9uLFxuICAgKiBiYWNrZW5kIHdpbGwgaGFuZGxlIGl0IGlmIG5lY2Vzc2FyeSBidXQgaXQncyBub3QgcHJldHR5LlxuICAgKiBCYWNrZW5kIHNob3VsZCBhbHNvIHByaW50IGEgbm90aWNlIGFib3ZlIHRoZSBmb3JtLlxuICAgKi9cbiAgdHJ5VG9QcmV2ZW50RWRpdCgpIHtcbiAgICAvLyBNaWdodCBhcyB3ZWxsIHVzZSB0aGUgalF1ZXJ5IHNpbmNlIGl0J3Mgd3AtYWRtaW5cbiAgICAkKCcjdGl0bGUnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpXG4gICAgJCgnI2NvbnRlbnQnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpXG4gICAgJCgnI3B1Ymxpc2gnKS5yZW1vdmUoKVxuICAgICQoJyNzYXZlLXBvc3QnKS5yZW1vdmUoKVxuICB9XG5cbiAgLy8gYGVkaXRvcmAgaXMgYSBDb2RlTWlycm9yIGluc3RhbmNlIG9yIGEgc3RyaW5nXG4gIGFzeW5jIGhhbmRsZUNvbnRlbnRDaGFuZ2UoZWRpdG9yOiBzdHJpbmcgfCBhbnkpIHtcbiAgICBsZXQgeyB3cGxmLCBmb3JtSW5zdGFuY2UgfSA9IHRoaXNcbiAgICBjb25zdCBjb250ZW50ID0gdHlwZW9mIGVkaXRvciA9PT0gJ3N0cmluZycgPyBlZGl0b3IgOiBlZGl0b3IuZ2V0VmFsdWUoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChmb3JtSW5zdGFuY2UpIHtcbiAgICAgICAgd3BsZi5kZXRhY2goZm9ybUluc3RhbmNlKVxuICAgICAgICBmb3JtSW5zdGFuY2UgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIC8vIERpc2FibGUgc3VibWl0IGJ1dHRvbiB3aGVuIHRoZSBmaWVsZHMgY2hhbmdlXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGFsbG93U2F2ZTogZmFsc2UgfSkpXG5cbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlUHJldmlldyhjb250ZW50KVxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVGb3JtRmllbGRzRnJvbVByZXZpZXcoKVxuICAgICAgYXdhaXQgdGhpcy5yZW1vdmVQcm9ibGVtYXRpY0F0dHJpYnV0ZXNGcm9tUHJldmlldygpXG5cbiAgICAgIHRoaXMud3JpdGVTdGF0ZSgpXG4gICAgICBmb3JtSW5zdGFuY2UgPSB3cGxmLmF0dGFjaCh0aGlzLnByZXZpZXdFbClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2cuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgcHJldmlldycsIGUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdXBkYXRlUHJldmlldyhjb250ZW50OiBzdHJpbmcpIHtcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInBvc3RfSURcIl0nKSBhcyBFbGVtZW50XG4gICAgY29uc3QgZm9ybUlkID0gcGFyc2VJbnQoZ2V0QXR0cmlidXRlKGlkRWwsICd2YWx1ZScpIHx8ICcwJywgMTApXG4gICAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS5hcHBlbmQoJ2NvbnRlbnQnLCBjb250ZW50KVxuICAgIGJvZHkuYXBwZW5kKCdmb3JtJywgZm9ybUlkLnRvU3RyaW5nKCkpXG5cbiAgICBnbG9iYWxEYXRhLmxhbmcgJiYgYm9keS5hcHBlbmQoJ2xhbmcnLCBnbG9iYWxEYXRhLmxhbmcpXG5cbiAgICBsZXQgb2JqZWN0OiBMaXN0PGFueT4gPSB7fVxuICAgIGJvZHkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZVxuICAgIH0pXG5cbiAgICBjb25zdCByZXEgPSBhd2FpdCByZXF1ZXN0KFxuICAgICAgJy9yZW5kZXInLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keSxcbiAgICAgIH0sXG4gICAgICBBcGlSZXNwb25zZUtpbmQuUmVuZGVyXG4gICAgKVxuXG4gICAgaWYgKHJlcS5raW5kID09PSBBcGlSZXNwb25zZUtpbmQuUmVuZGVyKSB7XG4gICAgICBpZiAoJ2Vycm9yJyBpbiByZXEuZGF0YSkge1xuICAgICAgICB0aGlzLnByZXZpZXdFbC5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShyZXEuZGF0YSlcbiAgICAgIH0gZWxzZSBpZiAoJ2h0bWwnIGluIHJlcS5kYXRhKSB7XG4gICAgICAgIGNvbnN0IHRtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgeyBodG1sIH0gPSByZXEuZGF0YVxuXG4gICAgICAgIHRtcEVsLmlubmVySFRNTCA9IGh0bWxcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yTmV4dFRpY2soKVxuXG4gICAgICAgIGlmICh0bXBFbCkge1xuICAgICAgICAgIGNvbnN0IGZvcm0gPSB0bXBFbC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcbiAgICAgICAgICB0aGlzLnByZXZpZXdFbC5pbm5lckhUTUwgPSBmb3JtID8gZm9ybS5pbm5lckhUTUwgOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvck5leHRUaWNrKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXREdXBsaWNhdGVOYW1lcyhuYW1lczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gXy51bmlxdWUoXG4gICAgICBuYW1lcy5maWx0ZXIoKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZXMuZmlsdGVyKChuOiBzdHJpbmcpID0+IG4gPT09IG5hbWUpLmxlbmd0aCA+IDFcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgY3JlYXRlRmllbGRFbGVtZW50KGZpZWxkOiBGaWVsZCwgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZpZWxkVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnRcbiAgICBjb25zdCB7IG5hbWUsIHR5cGUsIHJlcXVpcmVkIH0gPSBmaWVsZFxuICAgIGNvbnN0IG5hbWVFbCA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Ryb25nJykgYXMgSFRNTEVsZW1lbnRcbiAgICBjb25zdCB0eXBlRWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLndwbGYtZm9ybUZpZWxkc19fZmllbGRfX3R5cGUgZW0nXG4gICAgKSBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnN0IGFsZXJ0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud3BsZi1mb3JtRmllbGRzX19maWVsZF9fYWxlcnQnKVxuXG4gICAgaWYgKGlzRWxlbWVudGlzaChuYW1lRWwpICYmIGlzRWxlbWVudGlzaCh0eXBlRWwpICYmIGlzRWxlbWVudGlzaChhbGVydCkpIHtcbiAgICAgIG5hbWVFbC5pbm5lclRleHQgPSBuYW1lXG4gICAgICB0eXBlRWwuaW5uZXJUZXh0ID0gcmVxdWlyZWQgPyBgcmVxdWlyZWQgJHt0eXBlfWAgOiB0eXBlXG5cbiAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgYWxlcnQuc2V0QXR0cmlidXRlKCd0aXRsZScsIGVycm9yTWVzc2FnZSlcblxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYDxzdHJvbmc+JHtpMThuLnByb2JsZW1zfTwvc3Ryb25nPiR7ZXJyb3JNZXNzYWdlfWAucmVwbGFjZShcbiAgICAgICAgICAvKD86XFxyXFxufFxccnxcXG4pL2csXG4gICAgICAgICAgJzxicj4nXG4gICAgICAgIClcbiAgICAgICAgbWVzc2FnZXMuaW5uZXJIVE1MID0gbWVzc2FnZVxuXG4gICAgICAgIGFsZXJ0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBtZXNzYWdlcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzRWxlbWVudGlzaChhbGVydC5wYXJlbnROb2RlKSAmJiBhbGVydC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFsZXJ0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBhc3luYyB1cGRhdGVGb3JtRmllbGRzRnJvbVByZXZpZXcoKSB7XG4gICAgY29uc3QgeyBoaXN0b3J5RmllbGRzLCBhZGRpdGlvbmFsRmllbGRzIH0gPSB0aGlzLmdldFN0YXRlKClcbiAgICBjb25zdCBlbCA9IHRoaXMucHJldmlld0VsXG4gICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3BsZi1mb3JtRmllbGRzJylcblxuICAgIGlmICghaXNFbGVtZW50aXNoKGZpZWxkQ29udGFpbmVyKSkge1xuICAgICAgY29uc29sZS53YXJuKCdGaWVsZCBjb250YWluZXIgZG9lcyBub3QgZXhpc3QnKVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWxsb3dTYXZlID0gdHJ1ZVxuXG4gICAgLy8gR2V0IGFsbCBpbnB1dHMgd2l0aCBhIG5hbWUgYXR0cmlidXRlLCB5ZXMsIGV2ZW4gYnV0dG9uLlxuICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20oXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uJylcbiAgICApXG4gICAgICAuZmlsdGVyKChlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKCduYW1lJykpXG4gICAgICAucmVkdWNlPEZpZWxkW10+KChhY2MsIGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbCAmJiBpc0VsZW1lbnRpc2goZWwpKSB7XG4gICAgICAgICAgY29uc3QgZmllbGROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCduYW1lJylcblxuICAgICAgICAgIGlmICghZmllbGROYW1lKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gbnVsbFxuICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFJlbW92ZSBicmFja2V0cyBmcm9tIHRoZSBuYW1lLCBiZWNhdXNlIHRoZXkgY2F1c2UgdXMgZ3JpZWYuXG4gICAgICAgICAgICogVGhlIGJyYWNrZXRzIGFyZSBub3QgdmlzaWJsZSBpbiB0aGUgYWN0dWFsIGRhdGEsIHdoaWNoIGtpbmRhIGJyZWFrcyBhbGwgY29tcGFyaXNvbnMuXG4gICAgICAgICAgICovXG4gICAgICAgICAgY29uc3QgbmFtZSA9IGZpZWxkTmFtZS5yZXBsYWNlKCdbXScsICcnKVxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IGVsLmdldEF0dHJpYnV0ZSgncmVxdWlyZWQnKSAhPT0gbnVsbCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgIGNvbnN0IG11bHRpcGxlID0gZmllbGROYW1lLmVuZHNXaXRoKCdbXScpXG5cbiAgICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHJlcXVpcmVkLFxuICAgICAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH0sIFtdKVxuICAgIC8vIC5maWx0ZXIoKG4pID0+IG4gIT09IG51bGwpXG5cbiAgICBjb25zdCBmaWVsZE5hbWVzID0gZmllbGRzLm1hcCgoZmllbGQpID0+IGZpZWxkLm5hbWUpXG4gICAgY29uc3QgZHVwbGljYXRlTmFtZXMgPSB0aGlzLmdldER1cGxpY2F0ZU5hbWVzKGZpZWxkTmFtZXMpXG5cbiAgICBmaWVsZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgZmllbGRFcnJvcnMgPSBbXVxuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoIWZpZWxkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IG5hbWUsIHR5cGUgfSA9IGZpZWxkXG4gICAgICBjb25zdCBoaXN0b3J5RmllbGQgPSBPYmplY3QudmFsdWVzKGhpc3RvcnlGaWVsZHMpLmZpbmQoXG4gICAgICAgIChmaWVsZCkgPT4gZmllbGQubmFtZSA9PT0gbmFtZVxuICAgICAgKVxuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnXG5cbiAgICAgIC8vIG5hbWVzIGxpa2UgZmllbGRncm91cFtmaWVsZG5hbWVdIGFyZSBub3Qgc3VwcG9ydGVkIHlldFxuICAgICAgaWYgKG5hbWUubWF0Y2goL1xcdypcXFtcXHcqXFxdLykpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gYCR7ZXJyb3JNZXNzYWdlfSR7aTE4bi5ncm91cGVkTmFtZXNOb3RTdXBwb3J0ZWRZZXR9XFxuYFxuICAgICAgfVxuXG4gICAgICBpZiAoZHVwbGljYXRlTmFtZXMgJiYgZHVwbGljYXRlTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2R1cGxpY2F0ZXMnLCBkdXBsaWNhdGVOYW1lcywgZmllbGQpXG5cbiAgICAgICAgLy8gQWxsb3cgY2hlY2tib3hlcyBldGMgdG8gd29yayBub3JtYWxseVxuICAgICAgICBpZiAoIWZpZWxkLm11bHRpcGxlKSB7XG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0gYCR7ZXJyb3JNZXNzYWdlfSR7aTE4bi5kdXBsaWNhdGVGaWVsZE5hbWV9ICR7bmFtZX1cXG5gXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFkZGl0aW9uYWxGaWVsZHMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gYCR7ZXJyb3JNZXNzYWdlfSR7aTE4bi5pbGxlZ2FsTmFtZS5yZXBsYWNlKFxuICAgICAgICAgICd7bmFtZX0nLFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgKX1cXG5gXG4gICAgICB9XG5cbiAgICAgIGlmIChoaXN0b3J5RmllbGQgJiYgaGlzdG9yeUZpZWxkLnR5cGUgIT09IHR5cGUpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gYCR7ZXJyb3JNZXNzYWdlfSR7aTE4bi5maWVsZEFscmVhZHlFeGlzdHNJbkRiLnJlcGxhY2UoXG4gICAgICAgICAgJ3t0eXBlfScsXG4gICAgICAgICAgaGlzdG9yeUZpZWxkLnR5cGVcbiAgICAgICAgKX1cXG5gXG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgZmllbGRFcnJvcnMucHVzaChlcnJvck1lc3NhZ2UpXG4gICAgICB9XG5cbiAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRmllbGRFbGVtZW50KGZpZWxkLCBlcnJvck1lc3NhZ2UpKVxuICAgIH0pXG5cbiAgICBpZiAoIWZpZWxkRXJyb3JzLmxlbmd0aCkge1xuICAgICAgYWxsb3dTYXZlID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGxvd1NhdmUgPSBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0ZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoIWZpZWxkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWVsZEluSW5pdGlhbERhdGEgPSBPYmplY3QudmFsdWVzKGhpc3RvcnlGaWVsZHMpLmZpbmQoXG4gICAgICAgICh4KSA9PiB4Lm5hbWUgPT09IGZpZWxkLm5hbWVcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGZpZWxkSW5Jbml0aWFsRGF0YSA/IGZhbHNlIDogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBkZWxldGVkRmllbGRzID0gT2JqZWN0LnZhbHVlcyhoaXN0b3J5RmllbGRzKS5maWx0ZXIoKGZpZWxkKSA9PiB7XG4gICAgICByZXR1cm4gIWZpZWxkTmFtZXMuaW5jbHVkZXMoZmllbGQubmFtZSlcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3U3RhdGU6IFBhcnRpYWw8V1BMRl9FZGl0b3JTdGF0ZT4gPSB7XG4gICAgICAvLyBmaWVsZHM6IGZpZWxkcyBhcyBGaWVsZFtdLFxuICAgICAgLy8gQWZ0ZXIgY2xlYXJpbmcgdGhlIGR1cGxpY2F0ZXMsIGFuIG9iamVjdCB3aWxsIHN1aXQgdXMgYmV0dGVyXG4gICAgICBmaWVsZHM6IGZpZWxkcy5yZWR1Y2U8TGlzdDxGaWVsZD4+KChhY2MsIGZpZWxkKSA9PiB7XG4gICAgICAgIGFjY1tmaWVsZC5uYW1lXSA9IGZpZWxkXG5cbiAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfSwge30pLFxuICAgICAgbmV3RmllbGRzOiBuZXdGaWVsZHMgYXMgRmllbGRbXSxcbiAgICAgIGRlbGV0ZWRGaWVsZHMsXG4gICAgICBhbGxvd1NhdmUsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiBuZXdTdGF0ZSlcblxuICAgIGF3YWl0IHdhaXRGb3JOZXh0VGljaygpXG4gIH1cblxuICBhc3luYyByZW1vdmVQcm9ibGVtYXRpY0F0dHJpYnV0ZXNGcm9tUHJldmlldygpIHtcbiAgICAvLyBOYW1lcyBhbmQgcmVxdWlyZWQgYXR0cmlidXRlcyBjYXVzZSBwcm9ibGVtcyB3aGVuIHNhdmluZyB0aGUgZm9ybSwgcmVtb3ZlXG4gICAgY29uc3QgcmVxdWlyZWRFbHMgPSBBcnJheS5mcm9tPEVsZW1lbnQ+KFxuICAgICAgdGhpcy5wcmV2aWV3RWwucXVlcnlTZWxlY3RvckFsbCgnW3JlcXVpcmVkXScpXG4gICAgKVxuICAgIGNvbnN0IG5hbWVFbHMgPSBBcnJheS5mcm9tPEVsZW1lbnQ+KFxuICAgICAgdGhpcy5wcmV2aWV3RWwucXVlcnlTZWxlY3RvckFsbCgnW25hbWVdJylcbiAgICApXG5cbiAgICByZXF1aXJlZEVscy5mb3JFYWNoKChlbDogRWxlbWVudCkgPT4gZWwucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpKVxuICAgIG5hbWVFbHMuZm9yRWFjaCgoZWw6IEVsZW1lbnQpID0+IGVsLnJlbW92ZUF0dHJpYnV0ZSgnbmFtZScpKVxuXG4gICAgYXdhaXQgd2FpdEZvck5leHRUaWNrKClcbiAgfVxufVxuIiwiaW1wb3J0IGdsb2JhbERhdGEgZnJvbSAnLi4vbGliL2dsb2JhbC1kYXRhJ1xuaW1wb3J0IGNyZWF0ZUFwaUNsaWVudCBmcm9tICcuLi9saWIvYXBpLWNsaWVudCdcbmltcG9ydCBsb2cgZnJvbSAnLi4vbGliL2xvZydcblxuaW1wb3J0IFdQTEZfVGFicyBmcm9tICcuL3dwbGYtdGFicydcblxuaW1wb3J0IHtcbiAgU3VibWl0U3RhdGUsXG4gIFN1Ym1pdEhhbmRsZXIsXG4gIEZvcm1DYWxsYmFjayxcbiAgLy8gRm9ybVN1Y2Nlc3NDYWxsYmFjayxcbiAgLy8gRm9ybUVycm9yQ2FsbGJhY2ssXG4gIExpc3QsXG4gIEFwaVJlc3BvbnNlS2luZCxcbn0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgaXNFbGVtZW50aXNoIGZyb20gJy4uL2xpYi9pcy1lbGVtZW50aXNoJ1xuXG5jb25zdCB7IHJlcXVlc3QgfSA9IGNyZWF0ZUFwaUNsaWVudCgpXG5cbmNvbnN0IHJlc2V0Rm9ybSA9ICh3cGxmRm9ybTogV1BMRl9Gb3JtLCBwYXJhbXM6IExpc3Q8YW55PikgPT4ge1xuICBjb25zdCBmb3JtID0gd3BsZkZvcm0uZm9ybSBhcyBIVE1MRm9ybUVsZW1lbnRcblxuICAvLyBTaW5jZSBhbGwgdHlwZSBndWFyYW50ZWVzIGhhdmUgYmVlbiB0aHJvd24gb3V0IG9mIHRoZSB3aW5kb3csXG4gIC8vIGl0J3MgbmVjZXNzYXJ5IHRvIGNoZWNrIHRoYXQgdGhlIGVsZW1lbnQgaW5kZWVkIGhhcyB0aGlzIG1ldGhvZC5cbiAgaWYgKGZvcm0ucmVzZXQpIHtcbiAgICBmb3JtLnJlc2V0KClcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0QmVmb3JlU2VuZENhbGxiYWNrID0gKHdwbGZGb3JtOiBXUExGX0Zvcm0sIHBhcmFtczogTGlzdDxhbnk+KSA9PiB7XG4gIGlmIChpc0VsZW1lbnRpc2god3BsZkZvcm0uZm9ybS5wYXJlbnROb2RlKSkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB3cGxmRm9ybS5mb3JtLnBhcmVudE5vZGVcblxuICAgIC8vIFJlc2V0IGVycm9yIGFuZCBzdWNjZXNzIG1lc3NhZ2VzLCBpZiB0aGVyZSB3ZXJlIGFueVxuICAgIGNvbnN0IG1lc3NhZ2VzID0gcGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy53cGxmLWVycm9yTWVzc2FnZSwgLndwbGYtc3VjY2Vzc01lc3NhZ2UnXG4gICAgKVxuXG4gICAgbWVzc2FnZXMuZm9yRWFjaCgoZWxlbWVudDogRWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGlzRWxlbWVudGlzaChlbGVtZW50LnBhcmVudE5vZGUpKSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFN1Y2Nlc3NDYWxsYmFjayA9ICh3cGxmRm9ybTogV1BMRl9Gb3JtLCBwYXJhbXM6IExpc3Q8YW55PikgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHBhcmFtc1xuICBjb25zdCB7IG1lc3NhZ2UgfSA9IGRhdGFcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBkaXYuY2xhc3NMaXN0LmFkZCgnd3BsZi1zdWNjZXNzTWVzc2FnZScpXG4gIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgJ2FmdGVyYmVnaW4nLFxuICAgIC8vIG1lc3NhZ2VcbiAgICBtZXNzYWdlLnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+JykgLy8gTWF5YmUgdGhpcyBzaG91bGRuJ3QgYmUgbW9kaWZpZWQuXG4gIClcblxuICB3cGxmRm9ybS5mb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBkaXYpXG4gIHdwbGZGb3JtLmZvcm0uY2xhc3NMaXN0LmFkZCgnc3VibWl0dGVkJylcbn1cblxuY29uc3QgZGVmYXVsdEVycm9yQ2FsbGJhY2sgPSAod3BsZkZvcm06IFdQTEZfRm9ybSwgcGFyYW1zOiBMaXN0PGFueT4pID0+IHtcbiAgY29uc3QgeyBlcnJvciB9ID0gcGFyYW1zXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3dwbGYtZXJyb3JNZXNzYWdlJylcbiAgZGl2Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGVycm9yLm1lc3NhZ2UpXG4gIHdwbGZGb3JtLmZvcm0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGRpdilcbn1cblxuZXhwb3J0IGNsYXNzIFdQTEZfRm9ybSB7XG4gIGZvcm06IEVsZW1lbnRcbiAgc3VibWl0U3RhdGU6IFN1Ym1pdFN0YXRlID0gU3VibWl0U3RhdGUuVW5zdWJtaXR0ZWRcbiAgc3VibWl0SGFuZGxlcjogU3VibWl0SGFuZGxlclxuICBjYWxsYmFja3M6IHtcbiAgICBiZWZvcmVTZW5kOiBMaXN0PEZvcm1DYWxsYmFjaz5cbiAgICBzdWNjZXNzOiBMaXN0PEZvcm1DYWxsYmFjaz5cbiAgICBlcnJvcjogTGlzdDxGb3JtQ2FsbGJhY2s+XG4gIH0gPSB7XG4gICAgYmVmb3JlU2VuZDoge1xuICAgICAgZGVmYXVsdDogZGVmYXVsdEJlZm9yZVNlbmRDYWxsYmFjayxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIGRlZmF1bHQ6IGRlZmF1bHRTdWNjZXNzQ2FsbGJhY2ssXG4gICAgICBjbGVhck9uU3VjY2VzczogcmVzZXRGb3JtLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIGRlZmF1bHQ6IGRlZmF1bHRFcnJvckNhbGxiYWNrLFxuICAgIH0sXG4gIH1cblxuICB0YWJzOiBXUExGX1RhYnNbXSA9IFtdXG4gIGtleSA9ICcnXG5cbiAgLy8gY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEZvcm1FbGVtZW50KSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgIT09IHRydWUpIHtcbiAgICAgIC8vIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50ICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm0gZWxlbWVudCBpbnZhbGlkIG9yIG1pc3NpbmcnKVxuICAgIH1cbiAgICBjb25zdCBmYWxsYmFja0lucHV0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIl9ub2pzXCJdJylcblxuICAgIHRoaXMuZm9ybSA9IGVsZW1lbnRcbiAgICB0aGlzLmtleSA9ICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KVxuICAgIHRoaXMudGFicyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cGxmLXRhYnMnKSkubWFwKFxuICAgICAgKGVsKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgV1BMRl9UYWJzKGVsKVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuc3VibWl0SGFuZGxlciA9IHRoaXMuY3JlYXRlU3VibWl0SGFuZGxlcigpXG5cbiAgICB0aGlzLmF0dGFjaFN1Ym1pdEhhbmRsZXIoKVxuXG4gICAgLy8gUmVtb3ZlIGlucHV0IHRoYXQgdHJpZ2dlcnMgdGhlIGZhbGxiYWNrIHNvIHdlIGdldCBhIEpTT04gcmVzcG9uc2VcbiAgICBpZiAoZmFsbGJhY2tJbnB1dCAmJiBpc0VsZW1lbnRpc2goZmFsbGJhY2tJbnB1dC5wYXJlbnROb2RlKSkge1xuICAgICAgZmFsbGJhY2tJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZhbGxiYWNrSW5wdXQpXG4gICAgfVxuICB9XG5cbiAgYWRkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBGb3JtQ2FsbGJhY2spIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrc1xuICAgIGNvbnN0IHsgYmVmb3JlU2VuZCwgc3VjY2VzcywgZXJyb3IgfSA9IGNhbGxiYWNrc1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdiZWZvcmVTZW5kJzoge1xuICAgICAgICBiZWZvcmVTZW5kW25hbWVdID0gY2FsbGJhY2tcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnc3VjY2Vzcyc6IHtcbiAgICAgICAgc3VjY2Vzc1tuYW1lXSA9IGNhbGxiYWNrXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzoge1xuICAgICAgICBlcnJvcltuYW1lXSA9IGNhbGxiYWNrXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNhbGxiYWNrIHR5cGUgJHt0eXBlfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlbW92ZUNhbGxiYWNrKG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3NcbiAgICBjb25zdCB7IGJlZm9yZVNlbmQsIHN1Y2Nlc3MsIGVycm9yIH0gPSBjYWxsYmFja3NcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYmVmb3JlU2VuZCc6IHtcbiAgICAgICAgZGVsZXRlIGJlZm9yZVNlbmRbbmFtZV1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnc3VjY2Vzcyc6IHtcbiAgICAgICAgZGVsZXRlIHN1Y2Nlc3NbbmFtZV1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnZXJyb3InOiB7XG4gICAgICAgIGRlbGV0ZSBlcnJvcltuYW1lXVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjYWxsYmFjayAke25hbWV9ICR7dHlwZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBydW5DYWxsYmFjayh0eXBlOiBzdHJpbmcsIHBhcmFtczogTGlzdDxhbnk+ID0ge30pIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrc1xuICAgIGNvbnN0IHsgYmVmb3JlU2VuZCwgc3VjY2VzcywgZXJyb3IgfSA9IGNhbGxiYWNrc1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdiZWZvcmVTZW5kJzoge1xuICAgICAgICBPYmplY3QudmFsdWVzKGJlZm9yZVNlbmQpLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2sodGhpcywgcGFyYW1zKVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdzdWNjZXNzJzoge1xuICAgICAgICBPYmplY3QudmFsdWVzKHN1Y2Nlc3MpLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2sodGhpcywgcGFyYW1zKVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdlcnJvcic6IHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhlcnJvcikuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICBjYWxsYmFjayh0aGlzLCBwYXJhbXMpXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNhbGxiYWNrICR7bmFtZX0gJHt0eXBlfWApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoU3VibWl0SGFuZGxlcigpIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgc3VibWl0IGhhbmRsZXIgZnJvbSB0aGUgZm9ybSwgYnV0IGtlZXBzIGl0IGluIG1lbW9yeS5cbiAgICovXG4gIHJlbW92ZVN1Ym1pdEhhbmRsZXIoKSB7XG4gICAgdGhpcy5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3VibWl0SGFuZGxlcilcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjcmVhdGVTdWJtaXRIYW5kbGVyKGhhbmRsZXI/OiBTdWJtaXRIYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIGFzeW5jIChlOiBFdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGlmICh0aGlzLnN1Ym1pdFN0YXRlID09PSBTdWJtaXRTdGF0ZS5TdWJtaXR0aW5nKSB7XG4gICAgICAgIGxvZy5ub3RpY2UoJ1ByZXZlbnRpbmcgZG91YmxlIGRvdWJtaXNzaW9uJylcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeCA9IGF3YWl0IHRoaXMuc2VuZCgpXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgb2sgfSA9IHhcblxuICAgICAgICBpZiAoJ2Vycm9yJyBpbiBkYXRhKSB7XG4gICAgICAgICAgbG9nLmVycm9yKCdJbnZhbGlkIHN1Ym1pc3Npb24hJywgeClcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yKVxuICAgICAgICB9IGVsc2UgaWYgKCFvaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCB0byBzdWJtaXQgZm9ybSBmYWlsZWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3VibWl0U3RhdGUgPSBTdWJtaXRTdGF0ZS5TdWNjZXNzXG4gICAgICAgICAgdGhpcy5ydW5DYWxsYmFjaygnc3VjY2VzcycsIHsgZGF0YSB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLnN1Ym1pdFN0YXRlID0gU3VibWl0U3RhdGUuRXJyb3JcbiAgICAgICAgdGhpcy5ydW5DYWxsYmFjaygnZXJyb3InLCB7IGVycm9yIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2VuZCgpIHtcbiAgICBjb25zdCBmb3JtID0gdGhpcy5mb3JtXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtIGFzIEhUTUxGb3JtRWxlbWVudCkgLy8gRm9ybURhdGEgY2FuJ3QgYmUgbWFkZSBmcm9tIEVsZW1lbnRcblxuICAgIGdsb2JhbERhdGEubGFuZyAmJiBkYXRhLmFwcGVuZCgnbGFuZycsIGdsb2JhbERhdGEubGFuZylcbiAgICB0aGlzLnN1Ym1pdFN0YXRlID0gU3VibWl0U3RhdGUuU3VibWl0dGluZ1xuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdzdWJtaXR0aW5nJylcbiAgICB0aGlzLnJ1bkNhbGxiYWNrKCdiZWZvcmVTZW5kJywgeyBmb3JtRGF0YTogZGF0YSwgZm9ybSB9KVxuXG4gICAgY29uc3QgcmVxID0gcmVxdWVzdChcbiAgICAgICcvc3VibWl0JyxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICB9LFxuICAgICAgQXBpUmVzcG9uc2VLaW5kLlN1Ym1pc3Npb25cbiAgICApXG5cbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1pdHRpbmcnKVxuXG4gICAgcmV0dXJuIHJlcVxuICB9XG59XG4iLCJpbXBvcnQgV1BMRiBmcm9tICcuL3dwbGYnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQTEZfU2V0dGluZ3Mge1xuICBjb25zdHJ1Y3Rvcih3cGxmSW5zdGFuY2U6IFdQTEYpIHt9XG59XG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL2xpYi9sb2cnXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vdHlwZXMnXG5cbmNsYXNzIFdQTEZfU3RvcmFnZSB7XG4gIHByZWZpeDogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IocHJlZml4ID0gJ3dwbGYnKSB7XG4gICAgdGhpcy5wcmVmaXggPSBwcmVmaXhcbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5wcmVmaXggKyBrZXkpXG5cbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGFcblxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZy5ub3RpY2UoXG4gICAgICAgIGBObyB2YWx1ZSBmb3VuZCBmb3IgJHtrZXl9LCBmYWxsaW5nIGJhY2sgdG8gZGVmYXVsdGAsXG4gICAgICAgIGRlZmF1bHRWYWx1ZVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gICAgfVxuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucHJlZml4ICsga2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKGUsIGtleSwgdmFsdWUpXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgV1BMRl9TdG9yYWdlKClcbiIsImltcG9ydCBXUExGX1N0b3JhZ2UgZnJvbSAnLi93cGxmLXN0b3JhZ2UnXG5pbXBvcnQgbG9nIGZyb20gJy4uL2xpYi9sb2cnXG5pbXBvcnQgaXNFbGVtZW50aXNoIGZyb20gJy4uL2xpYi9pcy1lbGVtZW50aXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUExGX1RhYnMge1xuICByZW1lbWJlcjogYm9vbGVhbiA9IGZhbHNlXG4gIGFjdGl2ZVRhYjogc3RyaW5nXG4gIHJvb3Q6IEVsZW1lbnRcbiAgbmFtZTogc3RyaW5nID0gJydcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgLy8gaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ICE9PSB0cnVlKSB7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKCdUYWIgZWxlbWVudCBpbnZhbGlkIG9yIG1pc3NpbmcnKVxuICAgIC8vIH1cblxuICAgIHRoaXMucm9vdCA9IGVsZW1lbnRcbiAgICB0aGlzLm5hbWUgPSB0aGlzLnJvb3QuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSB8fCAnJ1xuICAgIHRoaXMucmVtZW1iZXIgPSB0aGlzLnJvb3QuZ2V0QXR0cmlidXRlKCdkYXRhLXJlbWVtYmVyJykgIT09IG51bGxcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IHRoaXMucm9vdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVmYXVsdCcpIHx8ICcnXG5cbiAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2VzIHRoaXMgd29yayBmb3IgdHMgKGl0IGRvZXMgbm90KScpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm5hbWUgfHwgIXRoaXMuYWN0aXZlVGFiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIGF0dHJpYnV0ZXMgYXJlIG1pc3NpbmcnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnJlbWVtYmVyKSB7XG4gICAgICAvLyBHZXQgc2F2ZWQgdmFsdWUgb3Iga2VlcCB1c2luZyB0aGUgZGVmYXVsdFxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSBXUExGX1N0b3JhZ2UuZ2V0KHRoaXMubmFtZSwgdGhpcy5hY3RpdmVUYWIpXG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGVcblxuICAgIGlmIChpc0VsZW1lbnRpc2godGFyZ2V0KSkge1xuICAgICAgY29uc29sZS5sb2codGFyZ2V0KVxuXG4gICAgICBjb25zdCB0YWJOYW1lID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgICBpZiAodGFiTmFtZSkge1xuICAgICAgICB0aGlzLnN3aXRjaFRhYih0YWJOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nLm5vdGljZSgnVW5hYmxlIHRvIHN3aXRjaCB0YWIgYXMgZGF0YS10YXJnZXQgd2FzIGVtcHR5JylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIGFuZCBlbnN1cmUgdGhlIGN1cnJlbnQgdGFiIGlzIHZpc2libGUuXG4gICAqIENhbGwgYWZ0ZXIgYWRkaW5nIGEgdGFiIGR5bmFtaWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldEhhbmRsZXMoKS5mb3JFYWNoKChoYW5kbGUpID0+IHtcbiAgICAgIC8vIEl0J3Mgbm90IHBvc3NpYmxlIHRvIGFkZCB0aGUgc2FtZSBldmVudCBsaXN0ZW5lciB0d2ljZS4gSWYgdGhlIGhhbmRsZSBhbHJlYWR5IGhhcyB0aGUgbGlzdGVuZXIsXG4gICAgICAvLyB0aGlzIGlzIGEgbm8tb3AuXG4gICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgfSlcblxuICAgIC8vIElmIGFjdGl2ZVRhYiBpcyBudWxsLCB0aGluZ3Mgd2lsbCBicmVhay4gRmFsbCBiYWNrIHRvIGZpcnN0IHRhYlxuICAgIC8vIGFjdGl2ZVRhYiBjYW50IGJlIG51bGwgYW55bW9yZVxuXG4gICAgLyogICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFicyA9IHRoaXMuZ2V0VGFicygpXG5cbiAgICAgIGlmICh0YWJzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBmaXJzdCA9IHRhYnNbMF1cbiAgICAgICAgY29uc3QgLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgICB9XG5cbiAgICAgIGxvZy5ub3RpY2UoJ2FjdGl2ZVRhYiB3YXMgbnVsbCwgc2V0dGluZyBmaXJzdCB0YWIgYXMgYWN0aXZlJywgZmlyc3QpXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IGZpcnN0XG4gICAgfSAqL1xuXG4gICAgdGhpcy5zd2l0Y2hUYWIodGhpcy5hY3RpdmVUYWIpXG4gIH1cblxuICAvKipcbiAgICogVmFsdWVzIGFyZSBub3QgY2FjaGVkIGFzIHRoZXkgYXJlIHByYWN0aWNhbGx5IGZyZWUgdG8gcmVjb21wdXRlLCBidXRcbiAgICogbWlnaHQgYmVjb21lIGEgbWVtb3J5IGxlYWsgaWYgc3RvcmVkLlxuICAgKi9cbiAgZ2V0VGFicygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKGAud3BsZi10YWJzX190YWJbZGF0YS1uYW1lPVwiJHt0aGlzLm5hbWV9XCJdYClcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogU2VlIGdldFRhYnMoKVxuICAgKi9cbiAgZ2V0SGFuZGxlcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBgLndwbGYtdGFic19fdGFiU3dpdGNoZXJbZGF0YS1uYW1lPVwiJHt0aGlzLm5hbWV9XCJdYFxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHN3aXRjaFRhYihuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy5nZXRUYWJzKClcbiAgICBjb25zdCBhbGxIYW5kbGVzID0gdGhpcy5nZXRIYW5kbGVzKClcblxuICAgIGNvbnN0IG9wZW4gPSB0YWJzLmZpbHRlcigodGFiKSA9PiB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpID09PSBuYW1lKVxuICAgIGNvbnN0IGNsb3NlID0gdGFicy5maWx0ZXIoKHRhYikgPT4gdGFiLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKSAhPT0gbmFtZSlcblxuICAgIG9wZW4uZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBjb25zdCB0YWJOYW1lID0gdGFiLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKVxuICAgICAgY29uc3QgaGFuZGxlcyA9IGFsbEhhbmRsZXMuZmlsdGVyKFxuICAgICAgICAoaGFuZGxlKSA9PiBoYW5kbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpID09PSB0YWJOYW1lXG4gICAgICApXG5cbiAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUpID0+IHtcbiAgICAgICAgaGFuZGxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBjbG9zZS5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGNvbnN0IHRhYk5hbWUgPSB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpXG4gICAgICBjb25zdCBoYW5kbGVzID0gYWxsSGFuZGxlcy5maWx0ZXIoXG4gICAgICAgIChoYW5kbGUpID0+IGhhbmRsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykgPT09IHRhYk5hbWVcbiAgICAgIClcblxuICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICBoYW5kbGVzLmZvckVhY2goKGhhbmRsZSkgPT4ge1xuICAgICAgICBoYW5kbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmICh0aGlzLnJlbWVtYmVyKSB7XG4gICAgICBXUExGX1N0b3JhZ2Uuc2V0KHRoaXMubmFtZSwgbmFtZSlcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFdQTEZfRm9ybSB9IGZyb20gJy4vd3BsZi1mb3JtJ1xuaW1wb3J0IGdsb2JhbERhdGEgZnJvbSAnLi4vbGliL2dsb2JhbC1kYXRhJ1xuXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgZW5zdXJlTnVtIGZyb20gJy4uL2xpYi9lbnN1cmUtbnVtJ1xuaW1wb3J0IFdQTEZfVGFicyBmcm9tICcuL3dwbGYtdGFicydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BMRiB7XG4gIGZvcm1zOiBMaXN0PFdQTEZfRm9ybT4gPSB7fVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvLyBFeHBvc2UgV1BMRl9Gb3JtIGFuZCBXUExGX1RhYnMgYXMgcHJvcGVydGllcyBmb3IgdGhpcyBjbGFzcy5cbiAgLy8gSnVzdCB0byBhbGxvdyB1c2VycyB3aG8gZG9uJ3QgaW5zdGFsbCB0aGUgbnBtIHBhY2thZ2UgdG8gdXNlIHRoZXNlIHRvbzpcbiAgV1BMRl9Gb3JtID0gV1BMRl9Gb3JtXG4gIFdQTEZfVGFicyA9IFdQTEZfVGFic1xuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKGdsb2JhbERhdGEuc2V0dGluZ3MuYXV0b2luaXQpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLndwbGYnKVxuICAgICAgICAuZm9yRWFjaCgoZm9ybTogRWxlbWVudCkgPT4gdGhpcy5hdHRhY2goZm9ybSkpXG4gICAgfVxuICB9XG5cbiAgZmluZEZvcm1zQnlJZChpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZm9ybXMpLnJlZHVjZTxXUExGX0Zvcm1bXT4oKGFjYywga2V5KSA9PiB7XG4gICAgICBjb25zdCB3cGxmRm9ybSA9IHRoaXMuZm9ybXNba2V5XVxuXG4gICAgICBpZiAoIXdwbGZGb3JtKSB7XG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybUVsID0gd3BsZkZvcm0uZm9ybVxuICAgICAgY29uc3QgZm9ybUVsSWQgPSBmb3JtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm0taWQnKVxuXG4gICAgICBpZiAoZm9ybUVsSWQgJiYgZW5zdXJlTnVtKGZvcm1FbElkKSA9PT0gZW5zdXJlTnVtKGlkKSkge1xuICAgICAgICBhY2MucHVzaCh3cGxmRm9ybSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIFtdKVxuICB9XG5cbiAgZmluZEZvcm1zQnlTbHVnKHNsdWc6IHN0cmluZykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmZvcm1zKS5yZWR1Y2U8V1BMRl9Gb3JtW10+KChhY2MsIGtleSkgPT4ge1xuICAgICAgY29uc3Qgd3BsZkZvcm0gPSB0aGlzLmZvcm1zW2tleV1cblxuICAgICAgaWYgKCF3cGxmRm9ybSkge1xuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1FbCA9IHdwbGZGb3JtLmZvcm1cbiAgICAgIGNvbnN0IGZvcm1FbFNsdWcgPSBmb3JtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm0tc2x1ZycpXG5cbiAgICAgIGlmIChmb3JtRWxTbHVnICYmIGZvcm1FbFNsdWcgPT09IHNsdWcpIHtcbiAgICAgICAgYWNjLnB1c2god3BsZkZvcm0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCBbXSlcbiAgfVxuXG4gIGF0dGFjaCh4OiBFbGVtZW50IHwgV1BMRl9Gb3JtKSB7XG4gICAgaWYgKHggaW5zdGFuY2VvZiBXUExGX0Zvcm0pIHtcbiAgICAgIGNvbnN0IHdwbGZGb3JtID0geFxuXG4gICAgICB0aGlzLmZvcm1zW3dwbGZGb3JtLmtleV0gPSB3cGxmRm9ybVxuXG4gICAgICByZXR1cm4gd3BsZkZvcm1cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0geFxuXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhdHRhY2ggV1BMRiB0byBlbGVtZW50JylcbiAgICB9XG5cbiAgICBjb25zdCB3cGxmRm9ybSA9IG5ldyBXUExGX0Zvcm0oZWxlbWVudClcbiAgICB0aGlzLmZvcm1zW3dwbGZGb3JtLmtleV0gPSB3cGxmRm9ybVxuXG4gICAgd3BsZkZvcm0uZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4JylcbiAgICB3cGxmRm9ybS5mb3JtLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuXG4gICAgcmV0dXJuIHdwbGZGb3JtXG4gIH1cblxuICBkZXRhY2god3BsZkZvcm06IFdQTEZfRm9ybSkge1xuICAgIHRoaXMuZm9ybXNbd3BsZkZvcm0ua2V5XS5yZW1vdmVTdWJtaXRIYW5kbGVyKClcbiAgICBkZWxldGUgdGhpcy5mb3Jtc1t3cGxmRm9ybS5rZXldXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iLCJpbXBvcnQgQWJvcnRDb250cm9sbGVyIGZyb20gJ2Fib3J0LWNvbnRyb2xsZXInXG5pbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuL2dsb2JhbC1kYXRhJ1xuaW1wb3J0IHsgTGlzdCwgQXBpUmVzcG9uc2UsIEFwaVJlc3BvbnNlS2luZCB9IGZyb20gJy4uL3R5cGVzJ1xuXG4vKipcbiAqIEl0J3Mgb2sgdG8gY3JlYXRlIG11bHRpcGxlIEFQSSBjbGllbnRzXG4gKlxuICogVXNhZ2U6IGNvbnN0IHsgYWJvcnQsIHJlcXVlc3QsIGdldFNpZ25hbCB9ID0gY3JlYXRlQXBpQ2xpZW50KClcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXBpQ2xpZW50KCkge1xuICBsZXQgY29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyIHwgbnVsbCA9IG51bGxcbiAgbGV0IHNpZ25hbDogQWJvcnRTaWduYWwgfCBudWxsID0gbnVsbFxuXG4gIHJldHVybiB7XG4gICAgLy8gY29udHJvbGxlcjogbnVsbCxcbiAgICAvLyBzaWduYWw6IG51bGwsXG5cbiAgICBjb250cm9sbGVyLFxuICAgIHNpZ25hbCxcblxuICAgIGdldFNpZ25hbCgpIHtcbiAgICAgIHJldHVybiBzaWduYWxcbiAgICB9LFxuXG4gICAgYWJvcnQoKSB7XG4gICAgICBpZiAoY29udHJvbGxlciAmJiBjb250cm9sbGVyLmFib3J0KSB7XG4gICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyByZXF1ZXN0KFxuICAgICAgdGFyZ2V0OiBzdHJpbmcsXG4gICAgICBvcHRpb25zOiBMaXN0PHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBGb3JtRGF0YSB8IG51bGw+ID0ge30sXG4gICAgICByZXNwb25zZUtpbmQ6IEFwaVJlc3BvbnNlS2luZFxuICAgICk6IFByb21pc2U8QXBpUmVzcG9uc2U+IHtcbiAgICAgIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbERhdGEuYmFja2VuZFVybCArIHRhcmdldCwge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgc2lnbmFsLFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiBnbG9iYWxEYXRhLmZldGNoQ3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICBoZWFkZXJzOiBnbG9iYWxEYXRhLnJlcXVlc3RIZWFkZXJzIHx8IHt9LFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHsgaGVhZGVycywgc3RhdHVzLCBzdGF0dXNUZXh0LCB1cmwsIG9rIH0gPSByZXNcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgICAgICBjb250cm9sbGVyID0gbnVsbFxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogcmVzcG9uc2VLaW5kLFxuICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQsXG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIG9rLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29udHJvbGxlciA9IG51bGxcblxuICAgICAgICAvLyBJZiB5b3Ugd2FudCB0byBkbyBzb21ldGhpbmcgd2hlbiB0aGUgcmVxdWVzdCBpcyBhYm9ydGVkLCB1c2VcbiAgICAgICAgLy8gc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgLi4uKVxuICAgICAgICBpZiAoZS5uYW1lICE9PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgICB0aHJvdyBlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZVxuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gY3JlYXRlQXBpQ2xpZW50KClcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuc3VyZU51bSh4OiBzdHJpbmcgfCBudW1iZXIsIGZsb2F0OiBib29sZWFuID0gZmFsc2UpIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZsb2F0ID8gcGFyc2VGbG9hdCh4KSA6IHBhcnNlSW50KHgsIDEwKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bSh4OiBzdHJpbmcpIHtcbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB4Lm1hdGNoKC9eWzAtOV0qJC8pKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuIiwiaW1wb3J0IGlzRWxlbWVudGlzaCBmcm9tICcuL2lzLWVsZW1lbnRpc2gnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShcbiAgZWw6IEVsZW1lbnQsXG4gIGF0dHJpYnV0ZTogc3RyaW5nLFxuICBkZWZhdWx0VmFsOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuKSB7XG4gIGNvbnN0IHggPSBlbC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKVxuXG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWxcbiAgfVxuXG4gIHJldHVybiB4XG59XG4iLCJpbXBvcnQgeyBXUExGX0xvY2FsaXplRGF0YSB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKHdpbmRvdyk6IFdQTEZfTG9jYWxpemVEYXRhID0+XG4gIE9iamVjdC5hc3NpZ24oXG4gICAge1xuICAgICAgYmFja2VuZFVybDogbnVsbCxcbiAgICAgIGZldGNoQ3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICByZXF1ZXN0SGVhZGVyczoge1xuICAgICAgICAnWC1XUC1Ob25jZSc6IG51bGwsXG4gICAgICB9LFxuICAgICAgYXNzZXRzRGlyOiBudWxsLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXV0b2luaXQ6IHRydWUsXG4gICAgICAgIHBhcnNlTGlicmVmb3JtU2hvcnRjb2RlSW5SZXN0QXBpOiB0cnVlLFxuICAgICAgICBoYXNVbmZpbHRlcmVkSHRtbDogdHJ1ZSxcbiAgICAgICAgZGVidWdMZXZlbDogJ2FsbCcsXG4gICAgICB9LFxuICAgICAgcG9zdDogbnVsbCxcbiAgICAgIGkxOG46IHtcbiAgICAgICAgcHJvYmxlbXM6ICdQcm9ibGVtczogJyxcbiAgICAgICAgZHVwbGljYXRlRmllbGROYW1lOiAnRHVwbGljYXRlIGZpZWxkIG5hbWU6ICcsXG4gICAgICAgIGlsbGVnYWxOYW1lOlxuICAgICAgICAgIFwiWW91IGNhbid0IHVzZSB7bmFtZX0gYXMgYSBuYW1lLCBhcyBpdCBjb25mbGljdHMgd2l0aCBhIGNvcmUgZmllbGQgbmFtZS5cIixcbiAgICAgICAgZmllbGRBbHJlYWR5RXhpc3RzSW5EYjpcbiAgICAgICAgICAnRmllbGQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGRhdGFiYXNlIHdpdGggdGhlIHR5cGUge3R5cGV9LCB1c2UgYSBkaWZmZXJlbnQgbmFtZSBvciByZW1vdmUgdGhlIGZpZWxkIGZpcnN0LicsXG4gICAgICAgIGdyb3VwZWROYW1lc05vdFN1cHBvcnRlZFlldDpcbiAgICAgICAgICAnRmllbGQgbmFtZXMgbGlrZSB0aGVzZSBhcmUgbm90IHN1cHBvcnRlZCB5ZXQuIFRyeSB1c2luZyBjYW1lbENhc2luZyBvciB1bmRlcl9zY29yZXMgZm9yIGdyb3VwZWQgbmFtZXMgaW5zdGVhZC4nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdpbmRvdy53cGxmRGF0YSAvLyB3cF9sb2NhbGl6ZV9zY3JpcHRcbiAgKSkod2luZG93KVxuIiwiZnVuY3Rpb24gaXNFbGVtZW50aXNoKGU6IG9iamVjdCB8IG51bGwgfCB1bmRlZmluZWQpOiBlIGlzIEVsZW1lbnQge1xuICByZXR1cm4gZSA/ICdnZXRBdHRyaWJ1dGUnIGluIGUgJiYgJ3RhZ05hbWUnIGluIGUgOiBmYWxzZVxufVxuXG4vLyBmdW5jdGlvbiBpc0VsZW1lbnRpc2goZTogb2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCk6IGUgaXMgRWxlbWVudCB7XG4vLyAgIHJldHVybiAoZSA/IGVbJ3RhZ05hbWUnXSAmJiAnZ2V0QXR0cmlidXRlJyBpbiBlIDogZmFsc2UpO1xuLy8gfVxuZXhwb3J0IGRlZmF1bHQgaXNFbGVtZW50aXNoXG4iLCJpbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuL2dsb2JhbC1kYXRhJ1xuXG5jb25zdCB7IGRlYnVnTGV2ZWwgfSA9IGdsb2JhbERhdGEuc2V0dGluZ3NcblxuY29uc3QgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHsgbG9nKCkge30sIGVycm9yKCkge30gfSAvLyBub29wIGZhbGxiYWNrXG5jb25zdCBub3RpY2UgPSAobWVzc2FnZTogc3RyaW5nLCAuLi5wYXJhbXM6IGFueVtdKSA9PlxuICBkZWJ1Z0xldmVsID09PSAnYWxsJyAmJiBjb25zb2xlLmxvZyhgV1BMRjogJHttZXNzYWdlfWAsIHBhcmFtcylcbmNvbnN0IGVycm9yID0gKG1lc3NhZ2U6IHN0cmluZywgLi4ucGFyYW1zOiBhbnlbXSkgPT5cbiAgZGVidWdMZXZlbCAhPT0gJ25vbmUnICYmIGNvbnNvbGUuZXJyb3IoYFdQTEYgZXJyb3I6ICR7bWVzc2FnZX1gLCBwYXJhbXMpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm90aWNlLFxuICBlcnJvcixcbn1cbiIsIi8qKlxuICogVHJ5aW5nIHRvIHJlYWQgdGhlIERPTSBpbW1lZGlhdGVseSBhZnRlciBzZXR0aW5nIGl0IGRvZXMgbm90IHdvcmsuIFRyeWluZyBvbiBuZXh0IHRpY2tcbiAqIGRvZXMuXG4gKi9cbmV4cG9ydCBjb25zdCB3YWl0Rm9yTmV4dFRpY2sgPSAoKTogUHJvbWlzZTxudW1iZXI+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUpKVxuXG5leHBvcnQgY29uc3Qgd2FpdCA9IChtcyA9IDUwMCk6IFByb21pc2U8bnVtYmVyPiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdWJtaXNzaW9uIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgZW5zdXJlTnVtLCB7IGlzTnVtIH0gZnJvbSAnLi4vbGliL2Vuc3VyZS1udW0nXG5pbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuLi9saWIvZ2xvYmFsLWRhdGEnXG5cbmZ1bmN0aW9uIFVwbG9hZExpbmsoeyBocmVmLCB0ZXh0IH06IHsgaHJlZjogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSkge1xuICBpZiAoaXNOdW0oaHJlZikpIHtcbiAgICAvLyBBdHRhY2htZW50cyBhcmUgc3RvcmVkIGFzIG51bWJlcnMuIFRoZWlyIFVSTHMgYXJlIGVudW1lcmFibGUuXG4gICAgY29uc3QgaWQgPSBlbnN1cmVOdW0oaHJlZilcblxuICAgIGhyZWYgPSBnbG9iYWxEYXRhLmFkbWluVXJsICsgYHVwbG9hZC5waHA/aXRlbT0ke2lkfWBcbiAgICB0ZXh0ID0gZ2xvYmFsRGF0YS5pMThuLmF0dGFjaG1lbnQgKyBgICR7aWR9YFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGEgaHJlZj17aHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJtaXNzaW9uKHtcbiAgc3VibWlzc2lvbixcbiAgZXhhbWluZSxcbn06IHtcbiAgc3VibWlzc2lvbjogU3VibWlzc2lvblxuICBleGFtaW5lOiAoc3ViOiBTdWJtaXNzaW9uKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IHsgSUQsIHV1aWQsIGVudHJpZXMsIGZvcm1GaWVsZHMgfSA9IHN1Ym1pc3Npb25cblxuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBocmVmPXtcbiAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggPyBgJHt3aW5kb3cubG9jYXRpb24uc2VhcmNofSZgIDogJz8nKSArXG4gICAgICAgIGAmc3VibWlzc2lvblV1aWQ9JHt1dWlkfWBcbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9eyhlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBleGFtaW5lKHN1Ym1pc3Npb24pXG4gICAgICB9fVxuICAgID5cbiAgICAgIFN1Ym1pc3Npb24ge0lEfVxuICAgIDwvYT5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU3VibWlzc2lvbk1vZGFsKHtcbiAgc3VibWlzc2lvbixcbn06IHtcbiAgc3VibWlzc2lvbjogU3VibWlzc2lvbiB8IG51bGxcbn0pIHtcbiAgaWYgKCFzdWJtaXNzaW9uKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHsgSUQsIHV1aWQsIGVudHJpZXMsIGZvcm1GaWVsZHMgfSA9IHN1Ym1pc3Npb25cblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndwbGYtZm9ybVN1Ym1pc3Npb25cIiBkYXRhLXV1aWQ9e3V1aWR9PlxuICAgICAge09iamVjdC5lbnRyaWVzKGVudHJpZXMpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtRmllbGQgPSBmb3JtRmllbGRzW25hbWVdXG5cbiAgICAgICAgaWYgKCFmb3JtRmllbGQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgdHlwZSwgcmVxdWlyZWQsIG11bHRpcGxlIH0gPSBmb3JtRmllbGRcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdmaWxlJzoge1xuICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gdmFsdWUuc3BsaXQoJywgJylcblxuICAgICAgICAgICAgICB2YWx1ZSA9IGZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgPFVwbG9hZExpbmsga2V5PXtmaWxlfSBocmVmPXtmaWxlfSB0ZXh0PXtmaWxlfSAvPlxuICAgICAgICAgICAgICApKVxuXG4gICAgICAgICAgICAgIHZhbHVlID0gPGRpdj57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBmaWxlID0gdmFsdWVcblxuICAgICAgICAgICAgICB2YWx1ZSA9IDxVcGxvYWRMaW5rIGtleT17ZmlsZX0gdGV4dD17ZmlsZX0gaHJlZj17ZmlsZX0gLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgLy8gPz8/XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17bmFtZX0+XG4gICAgICAgICAgICA8c3Ryb25nPntuYW1lfTwvc3Ryb25nPlxuXG4gICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNyZWF0ZUFwaUNsaWVudCBmcm9tICcuLi9saWIvYXBpLWNsaWVudCdcblxuaW1wb3J0IHsgVmFyaWFibGVTaXplTGlzdCBhcyBMaXN0IH0gZnJvbSAncmVhY3Qtd2luZG93J1xuaW1wb3J0IHsgU3VibWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uL2Rpc3QvdHlwZXMnXG5pbXBvcnQgSW5maW5pdGVMb2FkZXIgZnJvbSAncmVhY3Qtd2luZG93LWluZmluaXRlLWxvYWRlcidcbmltcG9ydCB7XG4gIEFwaUVycm9yLFxuICBBcGlSZXNwb25zZSxcbiAgQXBpUmVzcG9uc2VLaW5kLFxuICBHZXRTdWJtaXNzaW9uc0FwaVJlc3BvbnNlLFxufSBmcm9tICcuLi90eXBlcydcblxuY29uc3QgeyByZXF1ZXN0IH0gPSBjcmVhdGVBcGlDbGllbnQoKVxuXG5pbXBvcnQgbG9nIGZyb20gJy4uL2xpYi9sb2cnXG5pbXBvcnQgZW5zdXJlTnVtIGZyb20gJy4uL2xpYi9lbnN1cmUtbnVtJ1xuaW1wb3J0IGdsb2JhbERhdGEgZnJvbSAnLi4vbGliL2dsb2JhbC1kYXRhJ1xuXG5pbXBvcnQgUmVuZGVyZWRTdWJtaXNzaW9uLCB7IFN1Ym1pc3Npb25Nb2RhbCB9IGZyb20gJy4vU3VibWlzc2lvbidcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCdcblxuTW9kYWwuc2V0QXBwRWxlbWVudCgnLndwbGYtc3VibWlzc2lvbkxpc3QnKVxuXG5pbnRlcmZhY2UgU3VibWlzc2lvbkxpc3RTdGF0ZSB7XG4gIHN1Ym1pc3Npb25zOiBTdWJtaXNzaW9uW11cbiAgbW9yZUF2YWlsYWJsZTogYm9vbGVhblxuICBpc0xvYWRpbmc6IGJvb2xlYW5cbiAgcGFnZTogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pc3Npb25MaXN0KHtcbiAgZm9ybUlkLFxufToge1xuICBmb3JtSWQ6IG51bWJlciB8IHN0cmluZ1xufSkge1xuICBjb25zdCBbc2VsZWN0ZWRJZHMsIHNldFNlbGVjdGVkSWRzXSA9IFJlYWN0LnVzZVN0YXRlPFNldDxzdHJpbmc+PihcbiAgICAoKSA9PiBuZXcgU2V0KClcbiAgKVxuICBjb25zdCBbXG4gICAgeyBzdWJtaXNzaW9ucywgbW9yZUF2YWlsYWJsZSwgaXNMb2FkaW5nLCBwYWdlIH0sXG4gICAgc2V0U3RhdGUsXG4gIF0gPSBSZWFjdC51c2VTdGF0ZTxTdWJtaXNzaW9uTGlzdFN0YXRlPih7XG4gICAgc3VibWlzc2lvbnM6IFtdLFxuICAgIG1vcmVBdmFpbGFibGU6IHRydWUsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBwYWdlOiAwLFxuICB9KVxuICBjb25zdCBbeyBvcGVuLCBzdWJtaXNzaW9uOiBtb2RhbFN1Ym1pc3Npb24gfSwgc2V0TW9kYWxdID0gUmVhY3QudXNlU3RhdGU8e1xuICAgIG9wZW46IGJvb2xlYW5cbiAgICBzdWJtaXNzaW9uOiBTdWJtaXNzaW9uIHwgbnVsbFxuICB9Pih7XG4gICAgb3BlbjogZmFsc2UsXG4gICAgc3VibWlzc2lvbjogbnVsbCxcbiAgfSlcblxuICAvLyBSZWZzIGFyZSBhIGhhbmR5IHdheSBvZiBzdG9yaW5nIGRhdGEgdGhhdCBwZXJzaXN0cyBiZXR3ZWVuIHJlLXJlbmRlcnM6XG4gIGNvbnN0IGxhc3RDbGlja1JlZiA9IFJlYWN0LnVzZVJlZjxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcbiAgY29uc3QgbGFzdFNoaWZ0UmVmID0gUmVhY3QudXNlUmVmPGJvb2xlYW4+KGZhbHNlKVxuXG4gIC8qKlxuICAgKiBJbnZlcnQgc2VsZWN0aW9uIG9uIGNsaWNrLCB3aGlsZSBhbGxvd2luZyBzaGlmdCBjbGljayB0byBzZWxlY3QgbXVsdGlwbGUgc3VibWlzc2lvbnMgYXQgb25jZVxuICAgKi9cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmtleSBhcyBzdHJpbmcgLy8gd2UndmUgbWFkZSBzdXJlIHRoYXQgZWFjaCBlbGVtZW50IGhhcyB0aGlzXG4gICAgY29uc3QgbmV3U2VsZWN0ZWRJZHMgPSBuZXcgU2V0KHNlbGVjdGVkSWRzKVxuICAgIGNvbnN0IG5ld1N0YXRlID0gZS50YXJnZXQuY2hlY2tlZFxuICAgIGNvbnN0IGlkc1RvQ2hhbmdlID0gW11cbiAgICBjb25zdCBsYXN0SWQgPSBsYXN0Q2xpY2tSZWYuY3VycmVudFxuXG4gICAgaWYgKCFsYXN0U2hpZnRSZWYuY3VycmVudCkge1xuICAgICAgaWRzVG9DaGFuZ2UucHVzaChpZClcbiAgICB9IGVsc2UgaWYgKGxhc3RJZCAmJiBsYXN0SWQgIT09IGlkKSB7XG4gICAgICBsZXQgZmxhZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICAgIGZvciAodmFyIGl0ZW0gb2Ygc3VibWlzc2lvbnMpIHtcbiAgICAgICAgbGV0IG5ld0ZsYWc6IGJvb2xlYW4gPSBmbGFnXG4gICAgICAgIC8vIGNvbnN0IHN0cmluZ0lkID0gaXRlbS5JRC50b1N0cmluZygpXG5cbiAgICAgICAgaWYgKGl0ZW0udXVpZCA9PT0gaWQgfHwgaXRlbS51dWlkID09PSBsYXN0SWQpIHtcbiAgICAgICAgICBuZXdGbGFnID0gIWZsYWdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgaWRzVG9DaGFuZ2UucHVzaChpdGVtLnV1aWQpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnID0gbmV3RmxhZ1xuICAgICAgfVxuICAgIH1cblxuICAgIGlkc1RvQ2hhbmdlLmZvckVhY2goKGlkOiBhbnkpID0+IHtcbiAgICAgIGlmICghbmV3U3RhdGUpIHtcbiAgICAgICAgbmV3U2VsZWN0ZWRJZHMuZGVsZXRlKGlkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U2VsZWN0ZWRJZHMuYWRkKGlkKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsYXN0Q2xpY2tSZWYuY3VycmVudCA9IGlkXG4gICAgc2V0U2VsZWN0ZWRJZHMobmV3U2VsZWN0ZWRJZHMpXG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBlLnNoaWZ0S2V5IHRvIGEgYm9vbGVhbiBhbmQgc2F2ZSBpdCBpbnRvIHRoZSByZWZcbiAgICovXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTElucHV0RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICBsYXN0U2hpZnRSZWYuY3VycmVudCA9ICEhZS5zaGlmdEtleVxuICB9XG5cbiAgY29uc3QgbG9hZE1vcmUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2V0U3RhdGUoKHMpID0+ICh7XG4gICAgICAuLi5zLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgIH0pKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KFxuICAgICAgYC9zdWJtaXNzaW9ucz9mb3JtPSR7Zm9ybUlkfSZwYWdlPSR7cGFnZX1gLFxuICAgICAge30sXG4gICAgICBBcGlSZXNwb25zZUtpbmQuR2V0U3VibWlzc2lvbnNcbiAgICApXG5cbiAgICBmdW5jdGlvbiBpc0dldFN1Ym1pc3Npb25zQXBpUmVzcG9uc2UoXG4gICAgICB4OiBBcGlSZXNwb25zZVxuICAgICk6IHggaXMgR2V0U3VibWlzc2lvbnNBcGlSZXNwb25zZSB7XG4gICAgICByZXR1cm4geC5raW5kID09PSBBcGlSZXNwb25zZUtpbmQuR2V0U3VibWlzc2lvbnNcbiAgICB9XG5cbiAgICBpZiAoaXNHZXRTdWJtaXNzaW9uc0FwaVJlc3BvbnNlKHJlc3BvbnNlKSkge1xuICAgICAgY29uc3QgeyBvaywgaGVhZGVycywgZGF0YSwga2luZCB9ID0gcmVzcG9uc2VcbiAgICAgIC8vXG4gICAgICAvLyBpZiAoIW9rKSB7XG4gICAgICAvLyBsb2cuZXJyb3IoJ1JlcXVlc3QgdG8gZ2V0IHN1Ym1pc3Npb25zIGZhaWxlZCcpXG4gICAgICAvLyByZXR1cm5cbiAgICAgIC8vIH1cblxuICAgICAgY29uc3QgdG90YWxQYWdlcyA9IGhlYWRlcnMuZ2V0KCdYLVdQLVRvdGFscGFnZXMnKSB8fCAxXG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IGVuc3VyZU51bShwYWdlICsgMSlcblxuICAgICAgaWYgKCdlcnJvcicgaW4gZGF0YSkge1xuICAgICAgICBsb2cuZXJyb3IoZGF0YS5lcnJvcilcblxuICAgICAgICBzZXRTdGF0ZSgocykgPT4gKHtcbiAgICAgICAgICBzdWJtaXNzaW9uczogW10sXG4gICAgICAgICAgcGFnZTogMCxcbiAgICAgICAgICBtb3JlQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9KSlcbiAgICAgIH0gZWxzZSBpZiAoIW9rKSB7XG4gICAgICAgIGxvZy5lcnJvcignUmVxdWVzdCB0byBnZXQgZm9ybSBzdWJtaXNzaW9ucyBmYWlsZWQnKVxuXG4gICAgICAgIHNldFN0YXRlKChzKSA9PiAoe1xuICAgICAgICAgIHN1Ym1pc3Npb25zOiBbXSxcbiAgICAgICAgICBwYWdlOiAwLFxuICAgICAgICAgIG1vcmVBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH0pKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdGUoKHMpID0+ICh7XG4gICAgICAgICAgc3VibWlzc2lvbnM6IFsuLi5zLnN1Ym1pc3Npb25zLCAuLi5kYXRhXSxcbiAgICAgICAgICBwYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgICBtb3JlQXZhaWxhYmxlOiBjdXJyZW50UGFnZSA8IGVuc3VyZU51bSh0b3RhbFBhZ2VzLCB0cnVlKSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhpcyBydW5zLCB0aGVyZSdzIGEgbWlzdGFrZSBpbiB0aGUgY29kZS4gVGhlcmUgc2hvdWxkbid0IGJlLCBzaW5jZSBpdCdzIFRTLlxuICAgICAgbG9nLmVycm9yKCdTb21ldGhpbmcgaXMgd3Jvbmcgd2l0aCBsb2FkTW9yZScsIHJlc3BvbnNlKVxuXG4gICAgICBzZXRTdGF0ZSgocykgPT4gKHtcbiAgICAgICAgLi4ucyxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFN1Ym1pc3Npb25TaXplID0gKGl0ZW1JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgLy8gY29uc3Qgc3VibWlzc2lvbiA9IHN1Ym1pc3Npb25zW2l0ZW1JbmRleF07XG4gICAgcmV0dXJuIDUwXG4gIH1cblxuICBjb25zdCBvcGVuTW9kYWwgPSAoc3VibWlzc2lvbjogU3VibWlzc2lvbikgPT4ge1xuICAgIHNldE1vZGFsKHtcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBzdWJtaXNzaW9uLFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsKChkKSA9PiAoe1xuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBzdWJtaXNzaW9uOiBudWxsLFxuICAgIH0pKVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgc3VibWlzc2lvbnMgdG8gYmUgbG9hZGVkIHRoZW4gYWRkIGFuIGV4dHJhIHJvdyB0byBob2xkIGEgbG9hZGluZyBpbmRpY2F0b3IuXG4gIGNvbnN0IGl0ZW1Db3VudCA9IG1vcmVBdmFpbGFibGUgPyBzdWJtaXNzaW9ucy5sZW5ndGggKyAxIDogc3VibWlzc2lvbnMubGVuZ3RoXG4gIGNvbnN0IGxvYWRNb3JlSXRlbXMgPSBpc0xvYWRpbmcgPyBhc3luYyAoKSA9PiB7fSA6IGxvYWRNb3JlXG5cbiAgLy8gRXZlcnkgcm93IGlzIGxvYWRlZCBleGNlcHQgZm9yIG91ciBsb2FkaW5nIGluZGljYXRvciByb3cuXG4gIGNvbnN0IGlzSXRlbUxvYWRlZCA9IChpbmRleDogbnVtYmVyKSA9PlxuICAgICFtb3JlQXZhaWxhYmxlIHx8IGluZGV4IDwgc3VibWlzc2lvbnMubGVuZ3RoXG5cbiAgY29uc3QgSXRlbSA9ICh7IGluZGV4LCBzdHlsZSB9OiB7IGluZGV4OiBudW1iZXI7IHN0eWxlOiBhbnkgfSkgPT4ge1xuICAgIGxldCBjb250ZW50XG4gICAgaWYgKCFpc0l0ZW1Mb2FkZWQoaW5kZXgpKSB7XG4gICAgICBjb250ZW50ID0gZ2xvYmFsRGF0YS5pMThuLmxvYWRpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VibWlzc2lvbiA9IHN1Ym1pc3Npb25zW2luZGV4XVxuICAgICAgY29uc3QgeyBlbnRyaWVzLCBtZXRhLCByZWZlcnJlciwgdXVpZCwgSUQgfSA9IHN1Ym1pc3Npb25cblxuICAgICAgY29uc29sZS5sb2coc3VibWlzc2lvbilcblxuICAgICAgY29udGVudCA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cGxmLXN1Ym1pc3Npb25MaXN0X19zdWJtaXNzaW9uXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIndwbGYtc3VibWlzc2lvbkxpc3RfX3N1Ym1pc3Npb25fX3NlbGVjdFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGRhdGEta2V5PXtzdWJtaXNzaW9uc1tpbmRleF0udXVpZH1cbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRJZHMuaGFzKHN1Ym1pc3Npb25zW2luZGV4XS51dWlkKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwbGYtc3VibWlzc2lvbkxpc3RfX3N1Ym1pc3Npb25fX2RhdGFcIj5cbiAgICAgICAgICAgIDxSZW5kZXJlZFN1Ym1pc3Npb24gc3VibWlzc2lvbj17c3VibWlzc2lvbn0gZXhhbWluZT17b3Blbk1vZGFsfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9Pntjb250ZW50fTwvZGl2PlxuICB9XG5cbiAgY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnLTUwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIH0sXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxJbmZpbml0ZUxvYWRlclxuICAgICAgICBpc0l0ZW1Mb2FkZWQ9e2lzSXRlbUxvYWRlZH1cbiAgICAgICAgaXRlbUNvdW50PXtpdGVtQ291bnR9XG4gICAgICAgIGxvYWRNb3JlSXRlbXM9e2xvYWRNb3JlSXRlbXN9XG4gICAgICA+XG4gICAgICAgIHsoeyBvbkl0ZW1zUmVuZGVyZWQsIHJlZiB9KSA9PiAoXG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIkxpc3RcIlxuICAgICAgICAgICAgaGVpZ2h0PXtpdGVtQ291bnQgPiAwID8gNDAwIDogMH1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17aXRlbUNvdW50fVxuICAgICAgICAgICAgaXRlbVNpemU9e2dldFN1Ym1pc3Npb25TaXplfVxuICAgICAgICAgICAgb25JdGVtc1JlbmRlcmVkPXtvbkl0ZW1zUmVuZGVyZWR9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge0l0ZW19XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICApfVxuICAgICAgPC9JbmZpbml0ZUxvYWRlcj5cblxuICAgICAgeyFzdWJtaXNzaW9ucy5sZW5ndGggPyA8cD57Z2xvYmFsRGF0YS5pMThuLm5vU3VibWlzc2lvbnNZZXR9PC9wPiA6IG51bGx9XG5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e29wZW59XG4gICAgICAgIC8vIG9uQWZ0ZXJPcGVuPXthZnRlck9wZW5Nb2RhbH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XG4gICAgICAgIGNvbnRlbnRMYWJlbD1cIkV4YW1wbGUgTW9kYWxcIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PmNsb3NlPC9idXR0b24+XG5cbiAgICAgICAgPFN1Ym1pc3Npb25Nb2RhbCBzdWJtaXNzaW9uPXttb2RhbFN1Ym1pc3Npb259IC8+XG4gICAgICA8L01vZGFsPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFdQTEZfRm9ybSB9IGZyb20gJy4vY2xhc3Nlcy93cGxmLWZvcm0nXG5cbmV4cG9ydCBlbnVtIFN1Ym1pdFN0YXRlIHtcbiAgVW5zdWJtaXR0ZWQsXG4gIFN1Ym1pdHRpbmcsXG4gIFN1Y2Nlc3MsXG4gIEVycm9yLFxufVxuZXhwb3J0IHR5cGUgU3VibWl0SGFuZGxlciA9IChldmVudDogRXZlbnQpID0+IFByb21pc2U8dm9pZD5cbmV4cG9ydCB0eXBlIEZvcm1DYWxsYmFjayA9ICh3cGxmRm9ybTogV1BMRl9Gb3JtLCBwYXJhbXM6IExpc3Q8YW55PikgPT4gdm9pZFxuXG5leHBvcnQgaW50ZXJmYWNlIFdQTEZfVGFicyB7XG4gIHJlbWVtYmVyOiBib29sZWFuXG4gIGFjdGl2ZVRhYjogbnVsbCB8IHN0cmluZ1xuICByb290OiBIVE1MRWxlbWVudFxuICBuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0PFQ+IHtcbiAgW2s6IHN0cmluZ106IFRcbn1cblxuZXhwb3J0IGVudW0gQXBpUmVzcG9uc2VLaW5kIHtcbiAgU3VibWlzc2lvbiA9ICdzdWJtaXNzaW9uJyxcbiAgUmVuZGVyID0gJ3JlbmRlcicsXG4gIEdldFN1Ym1pc3Npb25zID0gJ2dldHN1Ym1pc3Npb25zJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSYXdBcGlSZXNwb25zZSB7XG4gIGhlYWRlcnM6IEhlYWRlcnNcbiAgc3RhdHVzOiBudW1iZXJcbiAgc3RhdHVzVGV4dDogc3RyaW5nXG4gIHVybDogc3RyaW5nXG4gIG9rOiBib29sZWFuXG4gIGRhdGE6IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1Ym1pdEFwaVJlc3BvbnNlIGV4dGVuZHMgUmF3QXBpUmVzcG9uc2Uge1xuICBraW5kOiBBcGlSZXNwb25zZUtpbmQuU3VibWlzc2lvblxuICBkYXRhOlxuICAgIHwgQXBpRXJyb3JcbiAgICB8IHtcbiAgICAgICAgc3VibWlzc2lvbjoge1xuICAgICAgICAgIElEOiBudW1iZXJcbiAgICAgICAgfVxuICAgICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFN1Ym1pc3Npb25zQXBpUmVzcG9uc2UgZXh0ZW5kcyBSYXdBcGlSZXNwb25zZSB7XG4gIGtpbmQ6IEFwaVJlc3BvbnNlS2luZC5HZXRTdWJtaXNzaW9uc1xuICBkYXRhOiBBcGlFcnJvciB8IFN1Ym1pc3Npb25bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlckFwaVJlc3BvbnNlIGV4dGVuZHMgUmF3QXBpUmVzcG9uc2Uge1xuICBraW5kOiBBcGlSZXNwb25zZUtpbmQuUmVuZGVyXG4gIGRhdGE6XG4gICAgfCBBcGlFcnJvclxuICAgIHwge1xuICAgICAgICBodG1sOiBzdHJpbmdcbiAgICAgICAgZm9ybToge1xuICAgICAgICAgIElEOiBudW1iZXJcbiAgICAgICAgICBwb3N0Q29udGFpbnNGaWxlSW5wdXRzOiB0cnVlXG4gICAgICAgICAgdGl0bGU6IHN0cmluZ1xuICAgICAgICB9XG4gICAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpRXJyb3Ige1xuICBlcnJvcjogc3RyaW5nXG4gIGRhdGE6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBBcGlSZXNwb25zZSA9XG4gIHwgU3VibWl0QXBpUmVzcG9uc2VcbiAgfCBHZXRTdWJtaXNzaW9uc0FwaVJlc3BvbnNlXG4gIHwgUmVuZGVyQXBpUmVzcG9uc2VcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtIHtcbiAgSUQ6IG51bWJlclxuICBhZGRUb01lZGlhTGlicmFyeTogYm9vbGVhblxuICBhZGRpdGlvbmFsRmllbGRzOiBzdHJpbmdbXVxuICBjb250ZW50OiBzdHJpbmdcbiAgZmllbGRzOiBGaWVsZFtdXG4gIGhpc3RvcnlGaWVsZHM6IExpc3Q8RmllbGRbXT5cbiAgcG9zdENvbnRhaW5zRmlsZUlucHV0czogYm9vbGVhblxuICB0aXRsZTogc3RyaW5nXG4gIHZlcnNpb25DcmVhdGVkQXQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1Ym1pc3Npb24ge1xuICBJRDogbnVtYmVyXG4gIHV1aWQ6IHN0cmluZ1xuICByZWZlcnJlcjogTGlzdDxhbnk+XG4gIGhpc3RvcnlJZDogbnVtYmVyXG4gIGNyZWF0ZWRBdDogc3RyaW5nXG4gIG1vZGlmaWVkQXQ6IHN0cmluZ1xuICBlbnRyaWVzOiBMaXN0PGFueT5cbiAgZm9ybUZpZWxkczogTGlzdDxGaWVsZD5cbiAgbWV0YTogTGlzdDxhbnk+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGQge1xuICBuYW1lOiBzdHJpbmdcbiAgdHlwZTogc3RyaW5nXG4gIHJlcXVpcmVkOiBib29sZWFuXG4gIG11bHRpcGxlOiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV1BMRl9FZGl0b3JTdGF0ZSB7XG4gIGhpc3RvcnlGaWVsZHM6IExpc3Q8RmllbGQ+XG4gIC8vIGZpZWxkczogRmllbGRbXVxuICBmaWVsZHM6IExpc3Q8RmllbGQ+XG4gIGFkZGl0aW9uYWxGaWVsZHM6IHN0cmluZ1tdXG4gIG5ld0ZpZWxkczogRmllbGRbXVxuICBkZWxldGVkRmllbGRzOiBGaWVsZFtdXG4gIGFsbG93U2F2ZTogYm9vbGVhblxuICBbazogc3RyaW5nXTogYW55IC8vIGFuZCBhbnl0aGluZyBlbHNlIHlvdXIgaGVhcnQgbWF5IGRlc2lyZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdQTEZfTG9jYWxpemVEYXRhIHtcbiAgYmFja2VuZFVybDogc3RyaW5nXG4gIGFzc2V0c0Rpcjogc3RyaW5nXG4gIC8vIGZldGNoQ3JlZGVudGlhbHM6IHN0cmluZ1xuICBmZXRjaENyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIHwgJ2luY2x1ZGUnIHwgJ29taXQnXG4gIGkxOG46IExpc3Q8c3RyaW5nPlxuICBhZG1pblVybD86IHN0cmluZ1xuICBsYW5nPzogc3RyaW5nXG4gIHBvc3Q/OiB7IElEOiBzdHJpbmc7IFtrOiBzdHJpbmddOiBhbnkgfSAvLyBXZSBvbmx5IGNhcmUgYWJvdXQgdGhlIElEXG4gIHJlcXVlc3RIZWFkZXJzOiB7XG4gICAgJ1gtV1AtTm9uY2UnOiBzdHJpbmdcbiAgICBbazogc3RyaW5nXTogYW55XG4gIH1cbiAgY29kZU1pcnJvcjogYW55XG4gIHNldHRpbmdzOiB7XG4gICAgYXV0b2luaXQ6IGJvb2xlYW5cbiAgICBkZWJ1Z0xldmVsOiBzdHJpbmdcbiAgICBoYXNVbmZpbHRlcmVkSHRtbDogYm9vbGVhblxuICAgIHBhcnNlTGlicmVmb3Jtc1Nob3J0Y29kZUluUmVzdEFwaTogYm9vbGVhblxuICB9XG59XG5cbndpbmRvd1snUmVhY3QnXSA9IFJlYWN0XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLy8gUmVhY3Q6IFJlYWN0IC8vIEB0eXBlcy9yZWFjdCBoYXMgaXQgaGFuZGxlZCBhbHJlYWR5XG4gICAgLy8gV1BMRjogV1BMRiAvLyBXZSdyZSBub3QgZ29pbmcgdG8gdXNlIG91ciBvd24gbGlicmFyeSBmcm9tIHdpbmRvd1xuXG4gICAgLy8gVGhpcyBjb21lcyBmcm9tIFdvcmRQcmVzc1xuICAgIHdwbGZEYXRhOiBXUExGX0xvY2FsaXplRGF0YVxuXG4gICAgLy8gU29tZSBXUCBnbG9iYWxzIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0eXBlcyBmb3JcbiAgICBqUXVlcnk6IGFueSAvLyBXUCB1c2VzIDEuMTIuNCwgdGhlcmUncyBubyBAdHlwZXMvanF1ZXJ5QDEuMTIuNFxuICAgIC8vIF86IGFueSwgLy8gQHR5cGVzL3VuZGVyc2NvcmVAMS44LjNcbiAgICB3cDogYW55XG4gIH1cbn1cbiIsImltcG9ydCBXUExGX0FkbWluIGZyb20gJy4vY2xhc3Nlcy93cGxmLWFkbWluJ1xuaW1wb3J0IFdQTEYgZnJvbSAnLi9jbGFzc2VzL3dwbGYnXG5cbmltcG9ydCAnLi90eXBlcydcbmltcG9ydCAnLi4vc3R5bGVzL3dwbGYtYWRtaW4uc2NzcydcblxuLyoqXG4gKiBUaGlzIGZpbGUgaXMgYnVpbHQgaW50byBhbiBVTUQgYnVuZGxlLiBUaGUgZGVmYXVsdCBleHBvcnQgd2lsbFxuICogYmUgZXhwb3NlZCB1bmRlciB3aW5kb3cuV1BMRiwgaWYgdGhlIHJlc3VsdGluZyBmaWxlIGlzIGxvYWRlZCB2aWFcbiAqIDxzY3JpcHQ+IHRhZy5cbiAqXG4gKiBUaGUgcmVzdWx0aW5nIGZpbGUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCBpbnNpZGUgL3dwLWFkbWluIG9ubHksIGFsdGhvdWdoIGl0IGlzIGF2YWlsYWJsZSBhcyBhIG1vZHVsZSwgZG8gbm90IHRyeSB0byBpbXBvcnQgaXQgb3V0c2lkZS5cbiAqXG4gKiBBcyB0aGlzIG1vZHVsZSBhc3NpZ25zIGl0c2VsZiB0byB3aW5kb3cuV1BMRiwgRE8gTk9UIGxvYWQgd3BsZi1mcm9udGVuZC5qcyBhdCB0aGUgc2FtZSB0aW1lIHRvIGF2b2lkIGhhdmluZyBhIHZlcnkgYmFkIGRheS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbmV3IFdQTEZfQWRtaW4obmV3IFdQTEYoKSlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiLypnbG9iYWxzIHNlbGYsIHdpbmRvdyAqL1xuXCJ1c2Ugc3RyaWN0XCJcblxuLyplc2xpbnQtZGlzYWJsZSBAbXlzdGljYXRlYS9wcmV0dGllciAqL1xuY29uc3QgeyBBYm9ydENvbnRyb2xsZXIsIEFib3J0U2lnbmFsIH0gPVxuICAgIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6XG4gICAgLyogb3RoZXJ3aXNlICovIHVuZGVmaW5lZFxuLyplc2xpbnQtZW5hYmxlIEBteXN0aWNhdGVhL3ByZXR0aWVyICovXG5cbm1vZHVsZS5leHBvcnRzID0gQWJvcnRDb250cm9sbGVyXG5tb2R1bGUuZXhwb3J0cy5BYm9ydFNpZ25hbCA9IEFib3J0U2lnbmFsXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gQWJvcnRDb250cm9sbGVyXG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIEJhc2VkIG9uIGNvZGUgdGhhdCBpcyBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjYW5Vc2VET00gPSAhIShcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudCAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG5cdCk7XG5cblx0dmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG5cdFx0Y2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cblx0XHRjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuXHRcdGNhblVzZUV2ZW50TGlzdGVuZXJzOlxuXHRcdFx0Y2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cblx0XHRjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlblxuXG5cdH07XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fVxuXG59KCkpO1xuIiwiZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gICAgaWYgKG5ld0lucHV0cy5sZW5ndGggIT09IGxhc3RJbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5ld0lucHV0c1tpXSAhPT0gbGFzdElucHV0c1tpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtZW1vaXplT25lKHJlc3VsdEZuLCBpc0VxdWFsKSB7XG4gICAgaWYgKGlzRXF1YWwgPT09IHZvaWQgMCkgeyBpc0VxdWFsID0gYXJlSW5wdXRzRXF1YWw7IH1cbiAgICB2YXIgbGFzdFRoaXM7XG4gICAgdmFyIGxhc3RBcmdzID0gW107XG4gICAgdmFyIGxhc3RSZXN1bHQ7XG4gICAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICAgICAgdmFyIG5ld0FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG5ld0FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGVkT25jZSAmJiBsYXN0VGhpcyA9PT0gdGhpcyAmJiBpc0VxdWFsKG5ld0FyZ3MsIGxhc3RBcmdzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFJlc3VsdCA9IHJlc3VsdEZuLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICBjYWxsZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgICAgICBsYXN0QXJncyA9IG5ld0FyZ3M7XG4gICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVPbmU7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICAvLyBVc2UgdGhlIHNldFN0YXRlKCkgdXBkYXRlciB0byBlbnN1cmUgc3RhdGUgaXNuJ3Qgc3RhbGUgaW4gY2VydGFpbiBlZGdlIGNhc2VzLlxuICBmdW5jdGlvbiB1cGRhdGVyKHByZXZTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlIDogbnVsbDtcbiAgfVxuICAvLyBCaW5kaW5nIFwidGhpc1wiIGlzIGltcG9ydGFudCBmb3Igc2hhbGxvdyByZW5kZXJlciBzdXBwb3J0LlxuICB0aGlzLnNldFN0YXRlKHVwZGF0ZXIuYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ib2R5T3BlbkNsYXNzTmFtZSA9IGV4cG9ydHMucG9ydGFsQ2xhc3NOYW1lID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX01vZGFsUG9ydGFsID0gcmVxdWlyZShcIi4vTW9kYWxQb3J0YWxcIik7XG5cbnZhciBfTW9kYWxQb3J0YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWxQb3J0YWwpO1xuXG52YXIgX2FyaWFBcHBIaWRlciA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2FyaWFBcHBIaWRlclwiKTtcblxudmFyIGFyaWFBcHBIaWRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hcmlhQXBwSGlkZXIpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3NhZmVIVE1MRWxlbWVudFwiKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2FmZUhUTUxFbGVtZW50KTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHBvcnRhbENsYXNzTmFtZSA9IGV4cG9ydHMucG9ydGFsQ2xhc3NOYW1lID0gXCJSZWFjdE1vZGFsUG9ydGFsXCI7XG52YXIgYm9keU9wZW5DbGFzc05hbWUgPSBleHBvcnRzLmJvZHlPcGVuQ2xhc3NOYW1lID0gXCJSZWFjdE1vZGFsX19Cb2R5LS1vcGVuXCI7XG5cbnZhciBpc1JlYWN0MTYgPSBfcmVhY3REb20yLmRlZmF1bHQuY3JlYXRlUG9ydGFsICE9PSB1bmRlZmluZWQ7XG5cbnZhciBnZXRDcmVhdGVQb3J0YWwgPSBmdW5jdGlvbiBnZXRDcmVhdGVQb3J0YWwoKSB7XG4gIHJldHVybiBpc1JlYWN0MTYgPyBfcmVhY3REb20yLmRlZmF1bHQuY3JlYXRlUG9ydGFsIDogX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyO1xufTtcblxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChwYXJlbnRTZWxlY3Rvcikge1xuICByZXR1cm4gcGFyZW50U2VsZWN0b3IoKTtcbn1cblxudmFyIE1vZGFsID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1vZGFsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb2RhbCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWwpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IE1vZGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWwpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5yZW1vdmVQb3J0YWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNSZWFjdDE2ICYmIF9yZWFjdERvbTIuZGVmYXVsdC51bm1vdW50Q29tcG9uZW50QXROb2RlKF90aGlzLm5vZGUpO1xuICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQoX3RoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX3RoaXMubm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oJ1JlYWN0LU1vZGFsOiBcInBhcmVudFNlbGVjdG9yXCIgcHJvcCBkaWQgbm90IHJldHVybmVkIGFueSBET00gJyArIFwiZWxlbWVudC4gTWFrZSBzdXJlIHRoYXQgdGhlIHBhcmVudCBlbGVtZW50IGlzIHVubW91bnRlZCB0byBcIiArIFwiYXZvaWQgYW55IG1lbW9yeSBsZWFrcy5cIik7XG4gICAgICB9XG4gICAgfSwgX3RoaXMucG9ydGFsUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMucG9ydGFsID0gcmVmO1xuICAgIH0sIF90aGlzLnJlbmRlclBvcnRhbCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgdmFyIGNyZWF0ZVBvcnRhbCA9IGdldENyZWF0ZVBvcnRhbCgpO1xuICAgICAgdmFyIHBvcnRhbCA9IGNyZWF0ZVBvcnRhbChfdGhpcywgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX01vZGFsUG9ydGFsMi5kZWZhdWx0LCBfZXh0ZW5kcyh7IGRlZmF1bHRTdHlsZXM6IE1vZGFsLmRlZmF1bHRTdHlsZXMgfSwgcHJvcHMpKSwgX3RoaXMubm9kZSk7XG4gICAgICBfdGhpcy5wb3J0YWxSZWYocG9ydGFsKTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAoIV9zYWZlSFRNTEVsZW1lbnQuY2FuVXNlRE9NKSByZXR1cm47XG5cbiAgICAgIGlmICghaXNSZWFjdDE2KSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB9XG4gICAgICB0aGlzLm5vZGUuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5wb3J0YWxDbGFzc05hbWU7XG5cbiAgICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHRoaXMucHJvcHMucGFyZW50U2VsZWN0b3IpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cbiAgICAgICFpc1JlYWN0MTYgJiYgdGhpcy5yZW5kZXJQb3J0YWwodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNuYXBzaG90QmVmb3JlVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIHByZXZQYXJlbnQgPSBnZXRQYXJlbnRFbGVtZW50KHByZXZQcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICB2YXIgbmV4dFBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQodGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICByZXR1cm4geyBwcmV2UGFyZW50OiBwcmV2UGFyZW50LCBuZXh0UGFyZW50OiBuZXh0UGFyZW50IH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBfLCBzbmFwc2hvdCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSkgcmV0dXJuO1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNPcGVuID0gX3Byb3BzLmlzT3BlbixcbiAgICAgICAgICBwb3J0YWxDbGFzc05hbWUgPSBfcHJvcHMucG9ydGFsQ2xhc3NOYW1lO1xuXG5cbiAgICAgIGlmIChwcmV2UHJvcHMucG9ydGFsQ2xhc3NOYW1lICE9PSBwb3J0YWxDbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTmFtZSA9IHBvcnRhbENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZQYXJlbnQgPSBzbmFwc2hvdC5wcmV2UGFyZW50LFxuICAgICAgICAgIG5leHRQYXJlbnQgPSBzbmFwc2hvdC5uZXh0UGFyZW50O1xuXG4gICAgICBpZiAobmV4dFBhcmVudCAhPT0gcHJldlBhcmVudCkge1xuICAgICAgICBwcmV2UGFyZW50LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgIG5leHRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gU3RvcCB1bm5lY2Vzc2FyeSByZW5kZXJzIGlmIG1vZGFsIGlzIHJlbWFpbmluZyBjbG9zZWRcbiAgICAgIGlmICghcHJldlByb3BzLmlzT3BlbiAmJiAhaXNPcGVuKSByZXR1cm47XG5cbiAgICAgICFpc1JlYWN0MTYgJiYgdGhpcy5yZW5kZXJQb3J0YWwodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKCFfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSB8fCAhdGhpcy5ub2RlIHx8ICF0aGlzLnBvcnRhbCkgcmV0dXJuO1xuXG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLnBvcnRhbC5zdGF0ZTtcbiAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgdmFyIGNsb3Nlc0F0ID0gc3RhdGUuaXNPcGVuICYmIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMgJiYgKHN0YXRlLmNsb3Nlc0F0IHx8IG5vdyArIHRoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMpO1xuXG4gICAgICBpZiAoY2xvc2VzQXQpIHtcbiAgICAgICAgaWYgKCFzdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgICAgIHRoaXMucG9ydGFsLmNsb3NlV2l0aFRpbWVvdXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5yZW1vdmVQb3J0YWwsIGNsb3Nlc0F0IC0gbm93KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUG9ydGFsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAoIV9zYWZlSFRNTEVsZW1lbnQuY2FuVXNlRE9NIHx8ICFpc1JlYWN0MTYpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5ub2RlICYmIGlzUmVhY3QxNikge1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3JlYXRlUG9ydGFsID0gZ2V0Q3JlYXRlUG9ydGFsKCk7XG4gICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Nb2RhbFBvcnRhbDIuZGVmYXVsdCwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IHRoaXMucG9ydGFsUmVmLFxuICAgICAgICBkZWZhdWx0U3R5bGVzOiBNb2RhbC5kZWZhdWx0U3R5bGVzXG4gICAgICB9LCB0aGlzLnByb3BzKSksIHRoaXMubm9kZSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwic2V0QXBwRWxlbWVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRBcHBFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGFyaWFBcHBIaWRlci5zZXRFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5cbiAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RhbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgaXNPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgIG92ZXJsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH0pLFxuICBwb3J0YWxDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBib2R5T3BlbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGh0bWxPcGVuQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGJhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJlZm9yZUNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pXSksXG4gIG92ZXJsYXlDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgYmFzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhZnRlck9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYmVmb3JlQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSldKSxcbiAgYXBwRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5pbnN0YW5jZU9mKF9zYWZlSFRNTEVsZW1lbnQyLmRlZmF1bHQpLFxuICBvbkFmdGVyT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblJlcXVlc3RDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjbG9zZVRpbWVvdXRNUzogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGFyaWFIaWRlQXBwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZEZvY3VzQWZ0ZXJSZW5kZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcGFyZW50U2VsZWN0b3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgYXJpYTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGRhdGE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICByb2xlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY29udGVudExhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc2hvdWxkQ2xvc2VPbkVzYzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBvdmVybGF5UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNvbnRlbnRSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgcG9ydGFsQ2xhc3NOYW1lOiBwb3J0YWxDbGFzc05hbWUsXG4gIGJvZHlPcGVuQ2xhc3NOYW1lOiBib2R5T3BlbkNsYXNzTmFtZSxcbiAgcm9sZTogXCJkaWFsb2dcIixcbiAgYXJpYUhpZGVBcHA6IHRydWUsXG4gIGNsb3NlVGltZW91dE1TOiAwLFxuICBzaG91bGRGb2N1c0FmdGVyUmVuZGVyOiB0cnVlLFxuICBzaG91bGRDbG9zZU9uRXNjOiB0cnVlLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICBzaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IHRydWUsXG4gIHBhcmVudFNlbGVjdG9yOiBmdW5jdGlvbiBwYXJlbnRTZWxlY3RvcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgfVxufTtcbk1vZGFsLmRlZmF1bHRTdHlsZXMgPSB7XG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KVwiXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCI0MHB4XCIsXG4gICAgbGVmdDogXCI0MHB4XCIsXG4gICAgcmlnaHQ6IFwiNDBweFwiLFxuICAgIGJvdHRvbTogXCI0MHB4XCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjY2NjXCIsXG4gICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIHBhZGRpbmc6IFwiMjBweFwiXG4gIH1cbn07XG5cblxuKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKE1vZGFsKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTW9kYWw7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfZm9jdXNNYW5hZ2VyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvZm9jdXNNYW5hZ2VyXCIpO1xuXG52YXIgZm9jdXNNYW5hZ2VyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2ZvY3VzTWFuYWdlcik7XG5cbnZhciBfc2NvcGVUYWIgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zY29wZVRhYlwiKTtcblxudmFyIF9zY29wZVRhYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY29wZVRhYik7XG5cbnZhciBfYXJpYUFwcEhpZGVyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvYXJpYUFwcEhpZGVyXCIpO1xuXG52YXIgYXJpYUFwcEhpZGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FyaWFBcHBIaWRlcik7XG5cbnZhciBfY2xhc3NMaXN0ID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvY2xhc3NMaXN0XCIpO1xuXG52YXIgY2xhc3NMaXN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NsYXNzTGlzdCk7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50ID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50XCIpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zYWZlSFRNTEVsZW1lbnQpO1xuXG52YXIgX3BvcnRhbE9wZW5JbnN0YW5jZXMgPSByZXF1aXJlKFwiLi4vaGVscGVycy9wb3J0YWxPcGVuSW5zdGFuY2VzXCIpO1xuXG52YXIgX3BvcnRhbE9wZW5JbnN0YW5jZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9ydGFsT3Blbkluc3RhbmNlcyk7XG5cbnJlcXVpcmUoXCIuLi9oZWxwZXJzL2JvZHlUcmFwXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIHNvIHRoYXQgb3VyIENTUyBpcyBzdGF0aWNhbGx5IGFuYWx5emFibGVcbnZhciBDTEFTU19OQU1FUyA9IHtcbiAgb3ZlcmxheTogXCJSZWFjdE1vZGFsX19PdmVybGF5XCIsXG4gIGNvbnRlbnQ6IFwiUmVhY3RNb2RhbF9fQ29udGVudFwiXG59O1xuXG52YXIgVEFCX0tFWSA9IDk7XG52YXIgRVNDX0tFWSA9IDI3O1xuXG52YXIgYXJpYUhpZGRlbkluc3RhbmNlcyA9IDA7XG5cbnZhciBNb2RhbFBvcnRhbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbFBvcnRhbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWxQb3J0YWwocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWxQb3J0YWwpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1vZGFsUG9ydGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWxQb3J0YWwpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zZXRPdmVybGF5UmVmID0gZnVuY3Rpb24gKG92ZXJsYXkpIHtcbiAgICAgIF90aGlzLm92ZXJsYXkgPSBvdmVybGF5O1xuICAgICAgX3RoaXMucHJvcHMub3ZlcmxheVJlZiAmJiBfdGhpcy5wcm9wcy5vdmVybGF5UmVmKG92ZXJsYXkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRDb250ZW50UmVmID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgIF90aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgX3RoaXMucHJvcHMuY29udGVudFJlZiAmJiBfdGhpcy5wcm9wcy5jb250ZW50UmVmKGNvbnRlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5hZnRlckNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYXBwRWxlbWVudCA9IF90aGlzJHByb3BzLmFwcEVsZW1lbnQsXG4gICAgICAgICAgYXJpYUhpZGVBcHAgPSBfdGhpcyRwcm9wcy5hcmlhSGlkZUFwcCxcbiAgICAgICAgICBodG1sT3BlbkNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmh0bWxPcGVuQ2xhc3NOYW1lLFxuICAgICAgICAgIGJvZHlPcGVuQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuYm9keU9wZW5DbGFzc05hbWU7XG5cbiAgICAgIC8vIFJlbW92ZSBjbGFzc2VzLlxuXG4gICAgICBib2R5T3BlbkNsYXNzTmFtZSAmJiBjbGFzc0xpc3QucmVtb3ZlKGRvY3VtZW50LmJvZHksIGJvZHlPcGVuQ2xhc3NOYW1lKTtcblxuICAgICAgaHRtbE9wZW5DbGFzc05hbWUgJiYgY2xhc3NMaXN0LnJlbW92ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0sIGh0bWxPcGVuQ2xhc3NOYW1lKTtcblxuICAgICAgLy8gUmVzZXQgYXJpYS1oaWRkZW4gYXR0cmlidXRlIGlmIGFsbCBtb2RhbHMgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgIGlmIChhcmlhSGlkZUFwcCAmJiBhcmlhSGlkZGVuSW5zdGFuY2VzID4gMCkge1xuICAgICAgICBhcmlhSGlkZGVuSW5zdGFuY2VzIC09IDE7XG5cbiAgICAgICAgaWYgKGFyaWFIaWRkZW5JbnN0YW5jZXMgPT09IDApIHtcbiAgICAgICAgICBhcmlhQXBwSGlkZXIuc2hvdyhhcHBFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2hvdWxkRm9jdXNBZnRlclJlbmRlcikge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMuc2hvdWxkUmV0dXJuRm9jdXNBZnRlckNsb3NlKSB7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLnJldHVybkZvY3VzKCk7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLnRlYXJkb3duU2NvcGVkRm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb2N1c01hbmFnZXIucG9wV2l0aG91dEZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQWZ0ZXJDbG9zZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkFmdGVyQ2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgX3BvcnRhbE9wZW5JbnN0YW5jZXMyLmRlZmF1bHQuZGVyZWdpc3RlcihfdGhpcyk7XG4gICAgfTtcblxuICAgIF90aGlzLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5iZWZvcmVPcGVuKCk7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuYWZ0ZXJPcGVuICYmIF90aGlzLnN0YXRlLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5jbG9zZVRpbWVyKTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBiZWZvcmVDbG9zZTogZmFsc2UgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMuc2hvdWxkRm9jdXNBZnRlclJlbmRlcikge1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5zZXR1cFNjb3BlZEZvY3VzKF90aGlzLm5vZGUpO1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5tYXJrRm9yRm9jdXNMYXRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgYWZ0ZXJPcGVuOiB0cnVlIH0pO1xuXG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLmlzT3BlbiAmJiBfdGhpcy5wcm9wcy5vbkFmdGVyT3Blbikge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25BZnRlck9wZW4oe1xuICAgICAgICAgICAgICBvdmVybGF5RWw6IF90aGlzLm92ZXJsYXksXG4gICAgICAgICAgICAgIGNvbnRlbnRFbDogX3RoaXMuY29udGVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuY2xvc2VUaW1lb3V0TVMgPiAwKSB7XG4gICAgICAgIF90aGlzLmNsb3NlV2l0aFRpbWVvdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZm9jdXNDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmNvbnRlbnQgJiYgIV90aGlzLmNvbnRlbnRIYXNGb2N1cygpICYmIF90aGlzLmNvbnRlbnQuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2xvc2VXaXRoVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjbG9zZXNBdCA9IERhdGUubm93KCkgKyBfdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUztcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgYmVmb3JlQ2xvc2U6IHRydWUsIGNsb3Nlc0F0OiBjbG9zZXNBdCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNsb3NlVGltZXIgPSBzZXRUaW1lb3V0KF90aGlzLmNsb3NlV2l0aG91dFRpbWVvdXQsIF90aGlzLnN0YXRlLmNsb3Nlc0F0IC0gRGF0ZS5ub3coKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2xvc2VXaXRob3V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZhbHNlLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICBhZnRlck9wZW46IGZhbHNlLFxuICAgICAgICBjbG9zZXNBdDogbnVsbFxuICAgICAgfSwgX3RoaXMuYWZ0ZXJDbG9zZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBUQUJfS0VZKSB7XG4gICAgICAgICgwLCBfc2NvcGVUYWIyLmRlZmF1bHQpKF90aGlzLmNvbnRlbnQsIGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnNob3VsZENsb3NlT25Fc2MgJiYgZXZlbnQua2V5Q29kZSA9PT0gRVNDX0tFWSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgX3RoaXMucmVxdWVzdENsb3NlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlT3ZlcmxheU9uQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5zaG91bGRDbG9zZSA9PT0gbnVsbCkge1xuICAgICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5zaG91bGRDbG9zZSAmJiBfdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrKSB7XG4gICAgICAgIGlmIChfdGhpcy5vd25lckhhbmRsZXNDbG9zZSgpKSB7XG4gICAgICAgICAgX3RoaXMucmVxdWVzdENsb3NlKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5mb2N1c0NvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBudWxsO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVDb250ZW50T25Nb3VzZVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlT3ZlcmxheU9uTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLnNob3VsZENsb3NlT25PdmVybGF5Q2xpY2sgJiYgZXZlbnQudGFyZ2V0ID09IF90aGlzLm92ZXJsYXkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQ29udGVudE9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVDb250ZW50T25Nb3VzZURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5vd25lckhhbmRsZXNDbG9zZSgpICYmIF90aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub3duZXJIYW5kbGVzQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2U7XG4gICAgfTtcblxuICAgIF90aGlzLnNob3VsZEJlQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICFfdGhpcy5zdGF0ZS5pc09wZW4gJiYgIV90aGlzLnN0YXRlLmJlZm9yZUNsb3NlO1xuICAgIH07XG5cbiAgICBfdGhpcy5jb250ZW50SGFzRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMuY29udGVudCB8fCBfdGhpcy5jb250ZW50LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5idWlsZENsYXNzTmFtZSA9IGZ1bmN0aW9uICh3aGljaCwgYWRkaXRpb25hbCkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSAodHlwZW9mIGFkZGl0aW9uYWwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihhZGRpdGlvbmFsKSkgPT09IFwib2JqZWN0XCIgPyBhZGRpdGlvbmFsIDoge1xuICAgICAgICBiYXNlOiBDTEFTU19OQU1FU1t3aGljaF0sXG4gICAgICAgIGFmdGVyT3BlbjogQ0xBU1NfTkFNRVNbd2hpY2hdICsgXCItLWFmdGVyLW9wZW5cIixcbiAgICAgICAgYmVmb3JlQ2xvc2U6IENMQVNTX05BTUVTW3doaWNoXSArIFwiLS1iZWZvcmUtY2xvc2VcIlxuICAgICAgfTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzLmJhc2U7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuYWZ0ZXJPcGVuKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArIFwiIFwiICsgY2xhc3NOYW1lcy5hZnRlck9wZW47XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWVzLmJlZm9yZUNsb3NlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiBhZGRpdGlvbmFsID09PSBcInN0cmluZ1wiICYmIGFkZGl0aW9uYWwgPyBjbGFzc05hbWUgKyBcIiBcIiArIGFkZGl0aW9uYWwgOiBjbGFzc05hbWU7XG4gICAgfTtcblxuICAgIF90aGlzLmF0dHJpYnV0ZXNGcm9tT2JqZWN0ID0gZnVuY3Rpb24gKHByZWZpeCwgaXRlbXMpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhpdGVtcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgYWNjW3ByZWZpeCArIFwiLVwiICsgbmFtZV0gPSBpdGVtc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhZnRlck9wZW46IGZhbHNlLFxuICAgICAgYmVmb3JlQ2xvc2U6IGZhbHNlXG4gICAgfTtcblxuICAgIF90aGlzLnNob3VsZENsb3NlID0gbnVsbDtcbiAgICBfdGhpcy5tb3ZlRnJvbUNvbnRlbnRUb092ZXJsYXkgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNb2RhbFBvcnRhbCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5ib2R5T3BlbkNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5ib2R5T3BlbkNsYXNzTmFtZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogXCJib2R5T3BlbkNsYXNzTmFtZVwiIHByb3AgaGFzIGJlZW4gbW9kaWZpZWQuICcgKyBcIlRoaXMgbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3Igd2hlbiBtdWx0aXBsZSBtb2RhbHMgYXJlIG9wZW4uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2UHJvcHMuaHRtbE9wZW5DbGFzc05hbWUgIT09IHRoaXMucHJvcHMuaHRtbE9wZW5DbGFzc05hbWUpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUud2FybignUmVhY3QtTW9kYWw6IFwiaHRtbE9wZW5DbGFzc05hbWVcIiBwcm9wIGhhcyBiZWVuIG1vZGlmaWVkLiAnICsgXCJUaGlzIG1heSBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yIHdoZW4gbXVsdGlwbGUgbW9kYWxzIGFyZSBvcGVuLlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIXByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmlzT3BlbiAmJiBwcmV2UHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRm9jdXMgb25seSBuZWVkcyB0byBiZSBzZXQgb25jZSB3aGVuIHRoZSBtb2RhbCBpcyBiZWluZyBvcGVuZWRcbiAgICAgIGlmICh0aGlzLnByb3BzLnNob3VsZEZvY3VzQWZ0ZXJSZW5kZXIgJiYgdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXByZXZTdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5mb2N1c0NvbnRlbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5hZnRlckNsb3NlKCk7XG4gICAgICB9XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZVRpbWVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmVmb3JlT3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiZWZvcmVPcGVuKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYXBwRWxlbWVudCA9IF9wcm9wcy5hcHBFbGVtZW50LFxuICAgICAgICAgIGFyaWFIaWRlQXBwID0gX3Byb3BzLmFyaWFIaWRlQXBwLFxuICAgICAgICAgIGh0bWxPcGVuQ2xhc3NOYW1lID0gX3Byb3BzLmh0bWxPcGVuQ2xhc3NOYW1lLFxuICAgICAgICAgIGJvZHlPcGVuQ2xhc3NOYW1lID0gX3Byb3BzLmJvZHlPcGVuQ2xhc3NOYW1lO1xuXG4gICAgICAvLyBBZGQgY2xhc3Nlcy5cblxuICAgICAgYm9keU9wZW5DbGFzc05hbWUgJiYgY2xhc3NMaXN0LmFkZChkb2N1bWVudC5ib2R5LCBib2R5T3BlbkNsYXNzTmFtZSk7XG5cbiAgICAgIGh0bWxPcGVuQ2xhc3NOYW1lICYmIGNsYXNzTGlzdC5hZGQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLCBodG1sT3BlbkNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChhcmlhSGlkZUFwcCkge1xuICAgICAgICBhcmlhSGlkZGVuSW5zdGFuY2VzICs9IDE7XG4gICAgICAgIGFyaWFBcHBIaWRlci5oaWRlKGFwcEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBfcG9ydGFsT3Blbkluc3RhbmNlczIuZGVmYXVsdC5yZWdpc3Rlcih0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBEb24ndCBzdGVhbCBmb2N1cyBmcm9tIGlubmVyIGVsZW1lbnRzXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlkID0gX3Byb3BzMi5pZCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lID0gX3Byb3BzMi5vdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgICAgIGRlZmF1bHRTdHlsZXMgPSBfcHJvcHMyLmRlZmF1bHRTdHlsZXM7XG5cbiAgICAgIHZhciBjb250ZW50U3R5bGVzID0gY2xhc3NOYW1lID8ge30gOiBkZWZhdWx0U3R5bGVzLmNvbnRlbnQ7XG4gICAgICB2YXIgb3ZlcmxheVN0eWxlcyA9IG92ZXJsYXlDbGFzc05hbWUgPyB7fSA6IGRlZmF1bHRTdHlsZXMub3ZlcmxheTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkQmVDbG9zZWQoKSA/IG51bGwgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogdGhpcy5zZXRPdmVybGF5UmVmLFxuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZShcIm92ZXJsYXlcIiwgb3ZlcmxheUNsYXNzTmFtZSksXG4gICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBvdmVybGF5U3R5bGVzLCB0aGlzLnByb3BzLnN0eWxlLm92ZXJsYXkpLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlT3ZlcmxheU9uQ2xpY2ssXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlT3ZlcmxheU9uTW91c2VEb3duXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgcmVmOiB0aGlzLnNldENvbnRlbnRSZWYsXG4gICAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNvbnRlbnRTdHlsZXMsIHRoaXMucHJvcHMuc3R5bGUuY29udGVudCksXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuYnVpbGRDbGFzc05hbWUoXCJjb250ZW50XCIsIGNsYXNzTmFtZSksXG4gICAgICAgICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVDb250ZW50T25Nb3VzZURvd24sXG4gICAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlQ29udGVudE9uTW91c2VVcCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ29udGVudE9uQ2xpY2ssXG4gICAgICAgICAgICByb2xlOiB0aGlzLnByb3BzLnJvbGUsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5jb250ZW50TGFiZWxcbiAgICAgICAgICB9LCB0aGlzLmF0dHJpYnV0ZXNGcm9tT2JqZWN0KFwiYXJpYVwiLCB0aGlzLnByb3BzLmFyaWEgfHwge30pLCB0aGlzLmF0dHJpYnV0ZXNGcm9tT2JqZWN0KFwiZGF0YVwiLCB0aGlzLnByb3BzLmRhdGEgfHwge30pLCB7XG4gICAgICAgICAgICBcImRhdGEtdGVzdGlkXCI6IHRoaXMucHJvcHMudGVzdElkXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RhbFBvcnRhbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbk1vZGFsUG9ydGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHtcbiAgICBvdmVybGF5OiB7fSxcbiAgICBjb250ZW50OiB7fVxuICB9LFxuICBkZWZhdWx0U3R5bGVzOiB7fVxufTtcbk1vZGFsUG9ydGFsLnByb3BUeXBlcyA9IHtcbiAgaXNPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgZGVmYXVsdFN0eWxlczogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgY29udGVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgb3ZlcmxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfSksXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb250ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XSksXG4gIG92ZXJsYXlDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RdKSxcbiAgYm9keU9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBodG1sT3BlbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFyaWFIaWRlQXBwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGFwcEVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuaW5zdGFuY2VPZihfc2FmZUhUTUxFbGVtZW50Mi5kZWZhdWx0KSxcbiAgb25BZnRlck9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25BZnRlckNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVxdWVzdENsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNsb3NlVGltZW91dE1TOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2hvdWxkRm9jdXNBZnRlclJlbmRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICByb2xlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY29udGVudExhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYXJpYTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGRhdGE6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBzaG91bGRDbG9zZU9uRXNjOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG92ZXJsYXlSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY29udGVudFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRlc3RJZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBNb2RhbFBvcnRhbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFzc2VydE5vZGVMaXN0ID0gYXNzZXJ0Tm9kZUxpc3Q7XG5leHBvcnRzLnNldEVsZW1lbnQgPSBzZXRFbGVtZW50O1xuZXhwb3J0cy52YWxpZGF0ZUVsZW1lbnQgPSB2YWxpZGF0ZUVsZW1lbnQ7XG5leHBvcnRzLmhpZGUgPSBoaWRlO1xuZXhwb3J0cy5zaG93ID0gc2hvdztcbmV4cG9ydHMuZG9jdW1lbnROb3RSZWFkeU9yU1NSVGVzdGluZyA9IGRvY3VtZW50Tm90UmVhZHlPclNTUlRlc3Rpbmc7XG5leHBvcnRzLnJlc2V0Rm9yVGVzdGluZyA9IHJlc2V0Rm9yVGVzdGluZztcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQgPSByZXF1aXJlKFwiLi9zYWZlSFRNTEVsZW1lbnRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnbG9iYWxFbGVtZW50ID0gbnVsbDtcblxuZnVuY3Rpb24gYXNzZXJ0Tm9kZUxpc3Qobm9kZUxpc3QsIHNlbGVjdG9yKSB7XG4gIGlmICghbm9kZUxpc3QgfHwgIW5vZGVMaXN0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInJlYWN0LW1vZGFsOiBObyBlbGVtZW50cyB3ZXJlIGZvdW5kIGZvciBzZWxlY3RvciBcIiArIHNlbGVjdG9yICsgXCIuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnQoZWxlbWVudCkge1xuICB2YXIgdXNlRWxlbWVudCA9IGVsZW1lbnQ7XG4gIGlmICh0eXBlb2YgdXNlRWxlbWVudCA9PT0gXCJzdHJpbmdcIiAmJiBfc2FmZUhUTUxFbGVtZW50LmNhblVzZURPTSkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodXNlRWxlbWVudCk7XG4gICAgYXNzZXJ0Tm9kZUxpc3QoZWwsIHVzZUVsZW1lbnQpO1xuICAgIHVzZUVsZW1lbnQgPSBcImxlbmd0aFwiIGluIGVsID8gZWxbMF0gOiBlbDtcbiAgfVxuICBnbG9iYWxFbGVtZW50ID0gdXNlRWxlbWVudCB8fCBnbG9iYWxFbGVtZW50O1xuICByZXR1cm4gZ2xvYmFsRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpIHtcbiAgaWYgKCFhcHBFbGVtZW50ICYmICFnbG9iYWxFbGVtZW50KSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgW1wicmVhY3QtbW9kYWw6IEFwcCBlbGVtZW50IGlzIG5vdCBkZWZpbmVkLlwiLCBcIlBsZWFzZSB1c2UgYE1vZGFsLnNldEFwcEVsZW1lbnQoZWwpYCBvciBzZXQgYGFwcEVsZW1lbnQ9e2VsfWAuXCIsIFwiVGhpcyBpcyBuZWVkZWQgc28gc2NyZWVuIHJlYWRlcnMgZG9uJ3Qgc2VlIG1haW4gY29udGVudFwiLCBcIndoZW4gbW9kYWwgaXMgb3BlbmVkLiBJdCBpcyBub3QgcmVjb21tZW5kZWQsIGJ1dCB5b3UgY2FuIG9wdC1vdXRcIiwgXCJieSBzZXR0aW5nIGBhcmlhSGlkZUFwcD17ZmFsc2V9YC5cIl0uam9pbihcIiBcIikpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGhpZGUoYXBwRWxlbWVudCkge1xuICBpZiAodmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpKSB7XG4gICAgKGFwcEVsZW1lbnQgfHwgZ2xvYmFsRWxlbWVudCkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3coYXBwRWxlbWVudCkge1xuICBpZiAodmFsaWRhdGVFbGVtZW50KGFwcEVsZW1lbnQpKSB7XG4gICAgKGFwcEVsZW1lbnQgfHwgZ2xvYmFsRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9jdW1lbnROb3RSZWFkeU9yU1NSVGVzdGluZygpIHtcbiAgZ2xvYmFsRWxlbWVudCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9yVGVzdGluZygpIHtcbiAgZ2xvYmFsRWxlbWVudCA9IG51bGw7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcG9ydGFsT3Blbkluc3RhbmNlcyA9IHJlcXVpcmUoXCIuL3BvcnRhbE9wZW5JbnN0YW5jZXNcIik7XG5cbnZhciBfcG9ydGFsT3Blbkluc3RhbmNlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3J0YWxPcGVuSW5zdGFuY2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gQm9keSBmb2N1cyB0cmFwIHNlZSBJc3N1ZSAjNzQyXG5cbnZhciBiZWZvcmUgPSB2b2lkIDAsXG4gICAgYWZ0ZXIgPSB2b2lkIDAsXG4gICAgaW5zdGFuY2VzID0gW107XG5cbmZ1bmN0aW9uIGZvY3VzQ29udGVudCgpIHtcbiAgaWYgKGluc3RhbmNlcy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiUmVhY3QtTW9kYWw6IE9wZW4gaW5zdGFuY2VzID4gMCBleHBlY3RlZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGluc3RhbmNlc1tpbnN0YW5jZXMubGVuZ3RoIC0gMV0uZm9jdXNDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIGJvZHlUcmFwKGV2ZW50VHlwZSwgb3Blbkluc3RhbmNlcykge1xuICBpZiAoIWJlZm9yZSB8fCAhYWZ0ZXIpIHtcbiAgICBiZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJlZm9yZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlYWN0LW1vZGFsLWJvZHktdHJhcFwiLCBcIlwiKTtcbiAgICBiZWZvcmUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYmVmb3JlLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICBiZWZvcmUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICAgIGJlZm9yZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZm9jdXNDb250ZW50KTtcbiAgICBhZnRlciA9IGJlZm9yZS5jbG9uZU5vZGUoKTtcbiAgICBhZnRlci5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZm9jdXNDb250ZW50KTtcbiAgfVxuXG4gIGluc3RhbmNlcyA9IG9wZW5JbnN0YW5jZXM7XG5cbiAgaWYgKGluc3RhbmNlcy5sZW5ndGggPiAwKSB7XG4gICAgLy8gQWRkIGZvY3VzIHRyYXBcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkICE9PSBiZWZvcmUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJlZm9yZSwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmJvZHkubGFzdENoaWxkICE9PSBhZnRlcikge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZnRlcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFJlbW92ZSBmb2N1cyB0cmFwXG4gICAgaWYgKGJlZm9yZS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICBiZWZvcmUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChiZWZvcmUpO1xuICAgIH1cbiAgICBpZiAoYWZ0ZXIucGFyZW50RWxlbWVudCkge1xuICAgICAgYWZ0ZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChhZnRlcik7XG4gICAgfVxuICB9XG59XG5cbl9wb3J0YWxPcGVuSW5zdGFuY2VzMi5kZWZhdWx0LnN1YnNjcmliZShib2R5VHJhcCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmR1bXBDbGFzc0xpc3RzID0gZHVtcENsYXNzTGlzdHM7XG52YXIgaHRtbENsYXNzTGlzdCA9IHt9O1xudmFyIGRvY0JvZHlDbGFzc0xpc3QgPSB7fTtcblxuZnVuY3Rpb24gZHVtcENsYXNzTGlzdHMoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgY2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXS5jbGFzc05hbWU7XG4gICAgdmFyIGJ1ZmZlciA9IFwiU2hvdyB0cmFja2VkIGNsYXNzZXM6XFxuXFxuXCI7XG5cbiAgICBidWZmZXIgKz0gXCI8aHRtbCAvPiAoXCIgKyBjbGFzc2VzICsgXCIpOlxcblwiO1xuICAgIGZvciAodmFyIHggaW4gaHRtbENsYXNzTGlzdCkge1xuICAgICAgYnVmZmVyICs9IFwiICBcIiArIHggKyBcIiBcIiArIGh0bWxDbGFzc0xpc3RbeF0gKyBcIlxcblwiO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgYnVmZmVyICs9IFwiXFxuXFxuZG9jLmJvZHkgKFwiICsgY2xhc3NlcyArIFwiKTpcXG5cIjtcbiAgICBmb3IgKHZhciBfeCBpbiBkb2NCb2R5Q2xhc3NMaXN0KSB7XG4gICAgICBidWZmZXIgKz0gXCIgIFwiICsgX3ggKyBcIiBcIiArIGRvY0JvZHlDbGFzc0xpc3RbX3hdICsgXCJcXG5cIjtcbiAgICB9XG5cbiAgICBidWZmZXIgKz0gXCJcXG5cIjtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coYnVmZmVyKTtcbiAgfVxufVxuXG4vKipcbiAqIFRyYWNrIHRoZSBudW1iZXIgb2YgcmVmZXJlbmNlIG9mIGEgY2xhc3MuXG4gKiBAcGFyYW0ge29iamVjdH0gcG9sbCBUaGUgcG9sbCB0byByZWNlaXZlIHRoZSByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzcyBuYW1lLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgaW5jcmVtZW50UmVmZXJlbmNlID0gZnVuY3Rpb24gaW5jcmVtZW50UmVmZXJlbmNlKHBvbGwsIGNsYXNzTmFtZSkge1xuICBpZiAoIXBvbGxbY2xhc3NOYW1lXSkge1xuICAgIHBvbGxbY2xhc3NOYW1lXSA9IDA7XG4gIH1cbiAgcG9sbFtjbGFzc05hbWVdICs9IDE7XG4gIHJldHVybiBjbGFzc05hbWU7XG59O1xuXG4vKipcbiAqIERyb3AgdGhlIHJlZmVyZW5jZSBvZiBhIGNsYXNzLlxuICogQHBhcmFtIHtvYmplY3R9IHBvbGwgVGhlIHBvbGwgdG8gcmVjZWl2ZSB0aGUgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3MgbmFtZS5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIGRlY3JlbWVudFJlZmVyZW5jZSA9IGZ1bmN0aW9uIGRlY3JlbWVudFJlZmVyZW5jZShwb2xsLCBjbGFzc05hbWUpIHtcbiAgaWYgKHBvbGxbY2xhc3NOYW1lXSkge1xuICAgIHBvbGxbY2xhc3NOYW1lXSAtPSAxO1xuICB9XG4gIHJldHVybiBjbGFzc05hbWU7XG59O1xuXG4vKipcbiAqIFRyYWNrIGEgY2xhc3MgYW5kIGFkZCB0byB0aGUgZ2l2ZW4gY2xhc3MgbGlzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjbGFzc0xpc3RSZWYgQSBjbGFzcyBsaXN0IG9mIGFuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gcG9sbCAgICAgICAgIFRoZSBwb2xsIHRvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge0FycmF5fSAgY2xhc3NlcyAgICAgIFRoZSBsaXN0IG9mIGNsYXNzZXMgdG8gYmUgdHJhY2tlZC5cbiAqL1xudmFyIHRyYWNrQ2xhc3MgPSBmdW5jdGlvbiB0cmFja0NsYXNzKGNsYXNzTGlzdFJlZiwgcG9sbCwgY2xhc3Nlcykge1xuICBjbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGluY3JlbWVudFJlZmVyZW5jZShwb2xsLCBjbGFzc05hbWUpO1xuICAgIGNsYXNzTGlzdFJlZi5hZGQoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFVudHJhY2sgYSBjbGFzcyBhbmQgcmVtb3ZlIGZyb20gdGhlIGdpdmVuIGNsYXNzIGxpc3QgaWYgdGhlIHJlZmVyZW5jZVxuICogcmVhY2hlcyAwLlxuICogQHBhcmFtIHtPYmplY3R9IGNsYXNzTGlzdFJlZiBBIGNsYXNzIGxpc3Qgb2YgYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwb2xsICAgICAgICAgVGhlIHBvbGwgdG8gYmUgdXNlZC5cbiAqIEBwYXJhbSB7QXJyYXl9ICBjbGFzc2VzICAgICAgVGhlIGxpc3Qgb2YgY2xhc3NlcyB0byBiZSB1bnRyYWNrZWQuXG4gKi9cbnZhciB1bnRyYWNrQ2xhc3MgPSBmdW5jdGlvbiB1bnRyYWNrQ2xhc3MoY2xhc3NMaXN0UmVmLCBwb2xsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgZGVjcmVtZW50UmVmZXJlbmNlKHBvbGwsIGNsYXNzTmFtZSk7XG4gICAgcG9sbFtjbGFzc05hbWVdID09PSAwICYmIGNsYXNzTGlzdFJlZi5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFB1YmxpYyBpbmZlcmZhY2UgdG8gYWRkIGNsYXNzZXMgdG8gdGhlIGRvY3VtZW50LmJvZHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gYm9keUNsYXNzIFRoZSBjbGFzcyBzdHJpbmcgdG8gYmUgYWRkZWQuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IG1heSBjb250YWluIG1vcmUgdGhlbiBvbmUgY2xhc3NcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCAnICcgYXMgc2VwYXJhdG9yLlxuICovXG52YXIgYWRkID0gZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiBhZGQoZWxlbWVudCwgY2xhc3NTdHJpbmcpIHtcbiAgcmV0dXJuIHRyYWNrQ2xhc3MoZWxlbWVudC5jbGFzc0xpc3QsIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSBcImh0bWxcIiA/IGh0bWxDbGFzc0xpc3QgOiBkb2NCb2R5Q2xhc3NMaXN0LCBjbGFzc1N0cmluZy5zcGxpdChcIiBcIikpO1xufTtcblxuLyoqXG4gKiBQdWJsaWMgaW5mZXJmYWNlIHRvIHJlbW92ZSBjbGFzc2VzIGZyb20gdGhlIGRvY3VtZW50LmJvZHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gYm9keUNsYXNzIFRoZSBjbGFzcyBzdHJpbmcgdG8gYmUgYWRkZWQuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IG1heSBjb250YWluIG1vcmUgdGhlbiBvbmUgY2xhc3NcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCAnICcgYXMgc2VwYXJhdG9yLlxuICovXG52YXIgcmVtb3ZlID0gZXhwb3J0cy5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCwgY2xhc3NTdHJpbmcpIHtcbiAgcmV0dXJuIHVudHJhY2tDbGFzcyhlbGVtZW50LmNsYXNzTGlzdCwgZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09IFwiaHRtbFwiID8gaHRtbENsYXNzTGlzdCA6IGRvY0JvZHlDbGFzc0xpc3QsIGNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5oYW5kbGVCbHVyID0gaGFuZGxlQmx1cjtcbmV4cG9ydHMuaGFuZGxlRm9jdXMgPSBoYW5kbGVGb2N1cztcbmV4cG9ydHMubWFya0ZvckZvY3VzTGF0ZXIgPSBtYXJrRm9yRm9jdXNMYXRlcjtcbmV4cG9ydHMucmV0dXJuRm9jdXMgPSByZXR1cm5Gb2N1cztcbmV4cG9ydHMucG9wV2l0aG91dEZvY3VzID0gcG9wV2l0aG91dEZvY3VzO1xuZXhwb3J0cy5zZXR1cFNjb3BlZEZvY3VzID0gc2V0dXBTY29wZWRGb2N1cztcbmV4cG9ydHMudGVhcmRvd25TY29wZWRGb2N1cyA9IHRlYXJkb3duU2NvcGVkRm9jdXM7XG5cbnZhciBfdGFiYmFibGUgPSByZXF1aXJlKFwiLi4vaGVscGVycy90YWJiYWJsZVwiKTtcblxudmFyIF90YWJiYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWJiYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBmb2N1c0xhdGVyRWxlbWVudHMgPSBbXTtcbnZhciBtb2RhbEVsZW1lbnQgPSBudWxsO1xudmFyIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XG4gIG5lZWRUb0ZvY3VzID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XG4gIGlmIChuZWVkVG9Gb2N1cykge1xuICAgIG5lZWRUb0ZvY3VzID0gZmFsc2U7XG4gICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbmVlZCB0byBzZWUgaG93IGpRdWVyeSBzaGltcyBkb2N1bWVudC5vbignZm9jdXNpbicpIHNvIHdlIGRvbid0IG5lZWQgdGhlXG4gICAgLy8gc2V0VGltZW91dCwgZmlyZWZveCBkb2Vzbid0IHN1cHBvcnQgZm9jdXNpbiwgaWYgaXQgZGlkLCB3ZSBjb3VsZCBmb2N1c1xuICAgIC8vIHRoZSBlbGVtZW50IG91dHNpZGUgb2YgYSBzZXRUaW1lb3V0LiBTaWRlLWVmZmVjdCBvZiB0aGlzIGltcGxlbWVudGF0aW9uXG4gICAgLy8gaXMgdGhhdCB0aGUgZG9jdW1lbnQuYm9keSBnZXRzIGZvY3VzLCBhbmQgdGhlbiB3ZSBmb2N1cyBvdXIgZWxlbWVudCByaWdodFxuICAgIC8vIGFmdGVyLCBzZWVtcyBmaW5lLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1vZGFsRWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZWwgPSAoMCwgX3RhYmJhYmxlMi5kZWZhdWx0KShtb2RhbEVsZW1lbnQpWzBdIHx8IG1vZGFsRWxlbWVudDtcbiAgICAgIGVsLmZvY3VzKCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya0ZvckZvY3VzTGF0ZXIoKSB7XG4gIGZvY3VzTGF0ZXJFbGVtZW50cy5wdXNoKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5mdW5jdGlvbiByZXR1cm5Gb2N1cygpIHtcbiAgdmFyIHRvRm9jdXMgPSBudWxsO1xuICB0cnkge1xuICAgIGlmIChmb2N1c0xhdGVyRWxlbWVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0b0ZvY3VzID0gZm9jdXNMYXRlckVsZW1lbnRzLnBvcCgpO1xuICAgICAgdG9Gb2N1cy5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLndhcm4oW1wiWW91IHRyaWVkIHRvIHJldHVybiBmb2N1cyB0b1wiLCB0b0ZvY3VzLCBcImJ1dCBpdCBpcyBub3QgaW4gdGhlIERPTSBhbnltb3JlXCJdLmpvaW4oXCIgXCIpKTtcbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cbmZ1bmN0aW9uIHBvcFdpdGhvdXRGb2N1cygpIHtcbiAgZm9jdXNMYXRlckVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgZm9jdXNMYXRlckVsZW1lbnRzLnBvcCgpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFNjb3BlZEZvY3VzKGVsZW1lbnQpIHtcbiAgbW9kYWxFbGVtZW50ID0gZWxlbWVudDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgaGFuZGxlQmx1ciwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmF0dGFjaEV2ZW50KFwib25CbHVyXCIsIGhhbmRsZUJsdXIpO1xuICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25Gb2N1c1wiLCBoYW5kbGVGb2N1cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVhcmRvd25TY29wZWRGb2N1cygpIHtcbiAgbW9kYWxFbGVtZW50ID0gbnVsbDtcblxuICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGhhbmRsZUZvY3VzKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuZGV0YWNoRXZlbnQoXCJvbkJsdXJcIiwgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoXCJvbkZvY3VzXCIsIGhhbmRsZUZvY3VzKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBUcmFja3MgcG9ydGFscyB0aGF0IGFyZSBvcGVuIGFuZCBlbWl0cyBldmVudHMgdG8gc3Vic2NyaWJlcnNcblxudmFyIFBvcnRhbE9wZW5JbnN0YW5jZXMgPSBmdW5jdGlvbiBQb3J0YWxPcGVuSW5zdGFuY2VzKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3J0YWxPcGVuSW5zdGFuY2VzKTtcblxuICB0aGlzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKG9wZW5JbnN0YW5jZSkge1xuICAgIGlmIChfdGhpcy5vcGVuSW5zdGFuY2VzLmluZGV4T2Yob3Blbkluc3RhbmNlKSAhPT0gLTEpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKFwiUmVhY3QtTW9kYWw6IENhbm5vdCByZWdpc3RlciBtb2RhbCBpbnN0YW5jZSB0aGF0J3MgYWxyZWFkeSBvcGVuXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfdGhpcy5vcGVuSW5zdGFuY2VzLnB1c2gob3Blbkluc3RhbmNlKTtcbiAgICBfdGhpcy5lbWl0KFwicmVnaXN0ZXJcIik7XG4gIH07XG5cbiAgdGhpcy5kZXJlZ2lzdGVyID0gZnVuY3Rpb24gKG9wZW5JbnN0YW5jZSkge1xuICAgIHZhciBpbmRleCA9IF90aGlzLm9wZW5JbnN0YW5jZXMuaW5kZXhPZihvcGVuSW5zdGFuY2UpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKFwiUmVhY3QtTW9kYWw6IFVuYWJsZSB0byBkZXJlZ2lzdGVyIFwiICsgb3Blbkluc3RhbmNlICsgXCIgYXMgXCIgKyBcIml0IHdhcyBuZXZlciByZWdpc3RlcmVkXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfdGhpcy5vcGVuSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgX3RoaXMuZW1pdChcImRlcmVnaXN0ZXJcIik7XG4gIH07XG5cbiAgdGhpcy5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBfdGhpcy5zdWJzY3JpYmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgfTtcblxuICB0aGlzLmVtaXQgPSBmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XG4gICAgX3RoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgcmV0dXJuIHN1YnNjcmliZXIoZXZlbnRUeXBlLFxuICAgICAgLy8gc2hhbGxvdyBjb3B5IHRvIGF2b2lkIGFjY2lkZW50YWwgbXV0YXRpb25cbiAgICAgIF90aGlzLm9wZW5JbnN0YW5jZXMuc2xpY2UoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5vcGVuSW5zdGFuY2VzID0gW107XG4gIHRoaXMuc3Vic2NyaWJlcnMgPSBbXTtcbn07XG5cbnZhciBwb3J0YWxPcGVuSW5zdGFuY2VzID0gbmV3IFBvcnRhbE9wZW5JbnN0YW5jZXMoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcG9ydGFsT3Blbkluc3RhbmNlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhblVzZURPTSA9IHVuZGVmaW5lZDtcblxudmFyIF9leGVudiA9IHJlcXVpcmUoXCJleGVudlwiKTtcblxudmFyIF9leGVudjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGVudik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBFRSA9IF9leGVudjIuZGVmYXVsdDtcblxudmFyIFNhZmVIVE1MRWxlbWVudCA9IEVFLmNhblVzZURPTSA/IHdpbmRvdy5IVE1MRWxlbWVudCA6IHt9O1xuXG52YXIgY2FuVXNlRE9NID0gZXhwb3J0cy5jYW5Vc2VET00gPSBFRS5jYW5Vc2VET007XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNhZmVIVE1MRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNjb3BlVGFiO1xuXG52YXIgX3RhYmJhYmxlID0gcmVxdWlyZShcIi4vdGFiYmFibGVcIik7XG5cbnZhciBfdGFiYmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGFiYmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzY29wZVRhYihub2RlLCBldmVudCkge1xuICB2YXIgdGFiYmFibGUgPSAoMCwgX3RhYmJhYmxlMi5kZWZhdWx0KShub2RlKTtcblxuICBpZiAoIXRhYmJhYmxlLmxlbmd0aCkge1xuICAgIC8vIERvIG5vdGhpbmcsIHNpbmNlIHRoZXJlIGFyZSBubyBlbGVtZW50cyB0aGF0IGNhbiByZWNlaXZlIGZvY3VzLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRhcmdldCA9IHZvaWQgMDtcblxuICB2YXIgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgdmFyIGhlYWQgPSB0YWJiYWJsZVswXTtcbiAgdmFyIHRhaWwgPSB0YWJiYWJsZVt0YWJiYWJsZS5sZW5ndGggLSAxXTtcblxuICAvLyBwcm9jZWVkIHdpdGggZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9uIHRhYi5cbiAgLy8gRm9jdXMgb24gbGFzdCBlbGVtZW50IG9uIHNoaWZ0ICsgdGFiLlxuICBpZiAobm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgIGlmICghc2hpZnRLZXkpIHJldHVybjtcbiAgICB0YXJnZXQgPSB0YWlsO1xuICB9XG5cbiAgaWYgKHRhaWwgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgIXNoaWZ0S2V5KSB7XG4gICAgdGFyZ2V0ID0gaGVhZDtcbiAgfVxuXG4gIGlmIChoZWFkID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHNoaWZ0S2V5KSB7XG4gICAgdGFyZ2V0ID0gdGFpbDtcbiAgfVxuXG4gIGlmICh0YXJnZXQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhcmdldC5mb2N1cygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFNhZmFyaSByYWRpbyBpc3N1ZS5cbiAgLy9cbiAgLy8gU2FmYXJpIGRvZXMgbm90IG1vdmUgdGhlIGZvY3VzIHRvIHRoZSByYWRpbyBidXR0b24sXG4gIC8vIHNvIHdlIG5lZWQgdG8gZm9yY2UgaXQgdG8gcmVhbGx5IHdhbGsgdGhyb3VnaCBhbGwgZWxlbWVudHMuXG4gIC8vXG4gIC8vIFRoaXMgaXMgdmVyeSBlcnJvciBwcm9uZSwgc2luY2Ugd2UgYXJlIHRyeWluZyB0byBndWVzc1xuICAvLyBpZiBpdCBpcyBhIHNhZmFyaSBicm93c2VyIGZyb20gdGhlIGZpcnN0IG9jY3VyZW5jZSBiZXR3ZWVuXG4gIC8vIGNocm9tZSBvciBzYWZhcmkuXG4gIC8vXG4gIC8vIFRoZSBjaHJvbWUgdXNlciBhZ2VudCBjb250YWlucyB0aGUgZmlyc3Qgb2N1cnJlbmNlXG4gIC8vIGFzIHRoZSAnY2hyb21lL3ZlcnNpb24nIGFuZCBsYXRlciB0aGUgJ3NhZmFyaS92ZXJzaW9uJy5cbiAgdmFyIGNoZWNrU2FmYXJpID0gLyhcXGJDaHJvbWVcXGJ8XFxiU2FmYXJpXFxiKVxcLy8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgdmFyIGlzU2FmYXJpRGVza3RvcCA9IGNoZWNrU2FmYXJpICE9IG51bGwgJiYgY2hlY2tTYWZhcmlbMV0gIT0gXCJDaHJvbWVcIiAmJiAvXFxiaVBvZFxcYnxcXGJpUGFkXFxiL2cuZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSA9PSBudWxsO1xuXG4gIC8vIElmIHdlIGFyZSBub3QgaW4gc2FmYXJpIGRlc2t0b3AsIGxldCB0aGUgYnJvd3NlciBjb250cm9sXG4gIC8vIHRoZSBmb2N1c1xuICBpZiAoIWlzU2FmYXJpRGVza3RvcCkgcmV0dXJuO1xuXG4gIHZhciB4ID0gdGFiYmFibGUuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICBpZiAoeCA+IC0xKSB7XG4gICAgeCArPSBzaGlmdEtleSA/IC0xIDogMTtcbiAgfVxuXG4gIHRhcmdldCA9IHRhYmJhYmxlW3hdO1xuXG4gIC8vIElmIHRoZSB0YWJiYWJsZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0LFxuICAvLyBmb2N1cyBoZWFkL3RhaWwgYmFzZWQgb24gc2hpZnRLZXlcbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhcmdldCA9IHNoaWZ0S2V5ID8gdGFpbCA6IGhlYWQ7XG4gICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICB0YXJnZXQuZm9jdXMoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaW5kVGFiYmFibGVEZXNjZW5kYW50cztcbi8qIVxuICogQWRhcHRlZCBmcm9tIGpRdWVyeSBVSSBjb3JlXG4gKlxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9jYXRlZ29yeS91aS1jb3JlL1xuICovXG5cbnZhciB0YWJiYWJsZU5vZGUgPSAvaW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QvO1xuXG5mdW5jdGlvbiBoaWRlc0NvbnRlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIHplcm9TaXplID0gZWxlbWVudC5vZmZzZXRXaWR0aCA8PSAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDw9IDA7XG5cbiAgLy8gSWYgdGhlIG5vZGUgaXMgZW1wdHksIHRoaXMgaXMgZ29vZCBlbm91Z2hcbiAgaWYgKHplcm9TaXplICYmICFlbGVtZW50LmlubmVySFRNTCkgcmV0dXJuIHRydWU7XG5cbiAgLy8gT3RoZXJ3aXNlIHdlIG5lZWQgdG8gY2hlY2sgc29tZSBzdHlsZXNcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHJldHVybiB6ZXJvU2l6ZSA/IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJvdmVyZmxvd1wiKSAhPT0gXCJ2aXNpYmxlXCIgfHxcbiAgLy8gaWYgJ292ZXJmbG93OiB2aXNpYmxlJyBzZXQsIGNoZWNrIGlmIHRoZXJlIGlzIGFjdHVhbGx5IGFueSBvdmVyZmxvd1xuICBlbGVtZW50LnNjcm9sbFdpZHRoIDw9IDAgJiYgZWxlbWVudC5zY3JvbGxIZWlnaHQgPD0gMCA6IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiB2aXNpYmxlKGVsZW1lbnQpIHtcbiAgdmFyIHBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSBicmVhaztcbiAgICBpZiAoaGlkZXNDb250ZW50cyhwYXJlbnRFbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZvY3VzYWJsZShlbGVtZW50LCBpc1RhYkluZGV4Tm90TmFOKSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgdmFyIHJlcyA9IHRhYmJhYmxlTm9kZS50ZXN0KG5vZGVOYW1lKSAmJiAhZWxlbWVudC5kaXNhYmxlZCB8fCAobm9kZU5hbWUgPT09IFwiYVwiID8gZWxlbWVudC5ocmVmIHx8IGlzVGFiSW5kZXhOb3ROYU4gOiBpc1RhYkluZGV4Tm90TmFOKTtcbiAgcmV0dXJuIHJlcyAmJiB2aXNpYmxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiB0YWJiYWJsZShlbGVtZW50KSB7XG4gIHZhciB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIGlmICh0YWJJbmRleCA9PT0gbnVsbCkgdGFiSW5kZXggPSB1bmRlZmluZWQ7XG4gIHZhciBpc1RhYkluZGV4TmFOID0gaXNOYU4odGFiSW5kZXgpO1xuICByZXR1cm4gKGlzVGFiSW5kZXhOYU4gfHwgdGFiSW5kZXggPj0gMCkgJiYgZm9jdXNhYmxlKGVsZW1lbnQsICFpc1RhYkluZGV4TmFOKTtcbn1cblxuZnVuY3Rpb24gZmluZFRhYmJhYmxlRGVzY2VuZGFudHMoZWxlbWVudCkge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLCAwKS5maWx0ZXIodGFiYmFibGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9Nb2RhbCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvTW9kYWxcIik7XG5cbnZhciBfTW9kYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW9kYWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfTW9kYWwyLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsImltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSkgJiYgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc1JhbmdlVmlzaWJsZShfcmVmKSB7XG4gIHZhciBsYXN0UmVuZGVyZWRTdGFydEluZGV4ID0gX3JlZi5sYXN0UmVuZGVyZWRTdGFydEluZGV4LFxuICAgICAgbGFzdFJlbmRlcmVkU3RvcEluZGV4ID0gX3JlZi5sYXN0UmVuZGVyZWRTdG9wSW5kZXgsXG4gICAgICBzdGFydEluZGV4ID0gX3JlZi5zdGFydEluZGV4LFxuICAgICAgc3RvcEluZGV4ID0gX3JlZi5zdG9wSW5kZXg7XG5cbiAgcmV0dXJuICEoc3RhcnRJbmRleCA+IGxhc3RSZW5kZXJlZFN0b3BJbmRleCB8fCBzdG9wSW5kZXggPCBsYXN0UmVuZGVyZWRTdGFydEluZGV4KTtcbn1cblxuZnVuY3Rpb24gc2NhbkZvclVubG9hZGVkUmFuZ2VzKF9yZWYpIHtcbiAgdmFyIGlzSXRlbUxvYWRlZCA9IF9yZWYuaXNJdGVtTG9hZGVkLFxuICAgICAgaXRlbUNvdW50ID0gX3JlZi5pdGVtQ291bnQsXG4gICAgICBtaW5pbXVtQmF0Y2hTaXplID0gX3JlZi5taW5pbXVtQmF0Y2hTaXplLFxuICAgICAgc3RhcnRJbmRleCA9IF9yZWYuc3RhcnRJbmRleCxcbiAgICAgIHN0b3BJbmRleCA9IF9yZWYuc3RvcEluZGV4O1xuXG4gIHZhciB1bmxvYWRlZFJhbmdlcyA9IFtdO1xuXG4gIHZhciByYW5nZVN0YXJ0SW5kZXggPSBudWxsO1xuICB2YXIgcmFuZ2VTdG9wSW5kZXggPSBudWxsO1xuXG4gIGZvciAodmFyIF9pbmRleCA9IHN0YXJ0SW5kZXg7IF9pbmRleCA8PSBzdG9wSW5kZXg7IF9pbmRleCsrKSB7XG4gICAgdmFyIGxvYWRlZCA9IGlzSXRlbUxvYWRlZChfaW5kZXgpO1xuXG4gICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgIHJhbmdlU3RvcEluZGV4ID0gX2luZGV4O1xuICAgICAgaWYgKHJhbmdlU3RhcnRJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSBfaW5kZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyYW5nZVN0b3BJbmRleCAhPT0gbnVsbCkge1xuICAgICAgdW5sb2FkZWRSYW5nZXMucHVzaChbcmFuZ2VTdGFydEluZGV4LCByYW5nZVN0b3BJbmRleF0pO1xuXG4gICAgICByYW5nZVN0YXJ0SW5kZXggPSByYW5nZVN0b3BJbmRleCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgOnJhbmdlU3RvcEluZGV4IGlzIG5vdCBudWxsIGl0IG1lYW5zIHdlIGhhdmVuJ3QgcmFuIG91dCBvZiB1bmxvYWRlZCByb3dzLlxuICAvLyBTY2FuIGZvcndhcmQgdG8gdHJ5IGZpbGxpbmcgb3VyIDptaW5pbXVtQmF0Y2hTaXplLlxuICBpZiAocmFuZ2VTdG9wSW5kZXggIT09IG51bGwpIHtcbiAgICB2YXIgcG90ZW50aWFsU3RvcEluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgocmFuZ2VTdG9wSW5kZXgsIHJhbmdlU3RhcnRJbmRleCArIG1pbmltdW1CYXRjaFNpemUgLSAxKSwgaXRlbUNvdW50IC0gMSk7XG5cbiAgICBmb3IgKHZhciBfaW5kZXgyID0gcmFuZ2VTdG9wSW5kZXggKyAxOyBfaW5kZXgyIDw9IHBvdGVudGlhbFN0b3BJbmRleDsgX2luZGV4MisrKSB7XG4gICAgICBpZiAoIWlzSXRlbUxvYWRlZChfaW5kZXgyKSkge1xuICAgICAgICByYW5nZVN0b3BJbmRleCA9IF9pbmRleDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1bmxvYWRlZFJhbmdlcy5wdXNoKFtyYW5nZVN0YXJ0SW5kZXgsIHJhbmdlU3RvcEluZGV4XSk7XG4gIH1cblxuICAvLyBDaGVjayB0byBzZWUgaWYgb3VyIGZpcnN0IHJhbmdlIGVuZGVkIHByZW1hdHVyZWx5LlxuICAvLyBJbiB0aGlzIGNhc2Ugd2Ugc2hvdWxkIHNjYW4gYmFja3dhcmRzIHRvIHRyeSBmaWxsaW5nIG91ciA6bWluaW11bUJhdGNoU2l6ZS5cbiAgaWYgKHVubG9hZGVkUmFuZ2VzLmxlbmd0aCkge1xuICAgIHZhciBmaXJzdFJhbmdlID0gdW5sb2FkZWRSYW5nZXNbMF07XG5cbiAgICB3aGlsZSAoZmlyc3RSYW5nZVsxXSAtIGZpcnN0UmFuZ2VbMF0gKyAxIDwgbWluaW11bUJhdGNoU2l6ZSAmJiBmaXJzdFJhbmdlWzBdID4gMCkge1xuICAgICAgdmFyIF9pbmRleDMgPSBmaXJzdFJhbmdlWzBdIC0gMTtcblxuICAgICAgaWYgKCFpc0l0ZW1Mb2FkZWQoX2luZGV4MykpIHtcbiAgICAgICAgZmlyc3RSYW5nZVswXSA9IF9pbmRleDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5sb2FkZWRSYW5nZXM7XG59XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxudmFyIEluZmluaXRlTG9hZGVyID0gZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKEluZmluaXRlTG9hZGVyLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5maW5pdGVMb2FkZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5maW5pdGVMb2FkZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gSW5maW5pdGVMb2FkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJbmZpbml0ZUxvYWRlcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLl9sYXN0UmVuZGVyZWRTdGFydEluZGV4ID0gLTEsIF90aGlzLl9sYXN0UmVuZGVyZWRTdG9wSW5kZXggPSAtMSwgX3RoaXMuX21lbW9pemVkVW5sb2FkZWRSYW5nZXMgPSBbXSwgX3RoaXMuX29uSXRlbXNSZW5kZXJlZCA9IGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIHZpc2libGVTdGFydEluZGV4ID0gX3JlZjIudmlzaWJsZVN0YXJ0SW5kZXgsXG4gICAgICAgICAgdmlzaWJsZVN0b3BJbmRleCA9IF9yZWYyLnZpc2libGVTdG9wSW5kZXg7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghaXNJbnRlZ2VyKHZpc2libGVTdGFydEluZGV4KSB8fCAhaXNJbnRlZ2VyKHZpc2libGVTdG9wSW5kZXgpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIG9uSXRlbXNSZW5kZXJlZCBzaWduYXR1cmU7IHBsZWFzZSByZWZlciB0byBJbmZpbml0ZUxvYWRlciBkb2N1bWVudGF0aW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5sb2FkTW9yZVJvd3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0luZmluaXRlTG9hZGVyIFwibG9hZE1vcmVSb3dzXCIgcHJvcCBoYXMgYmVlbiByZW5hbWVkIHRvIFwibG9hZE1vcmVJdGVtc1wiLicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLl9sYXN0UmVuZGVyZWRTdGFydEluZGV4ID0gdmlzaWJsZVN0YXJ0SW5kZXg7XG4gICAgICBfdGhpcy5fbGFzdFJlbmRlcmVkU3RvcEluZGV4ID0gdmlzaWJsZVN0b3BJbmRleDtcblxuICAgICAgX3RoaXMuX2Vuc3VyZVJvd3NMb2FkZWQodmlzaWJsZVN0YXJ0SW5kZXgsIHZpc2libGVTdG9wSW5kZXgpO1xuICAgIH0sIF90aGlzLl9zZXRSZWYgPSBmdW5jdGlvbiAobGlzdFJlZikge1xuICAgICAgX3RoaXMuX2xpc3RSZWYgPSBsaXN0UmVmO1xuICAgIH0sIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhJbmZpbml0ZUxvYWRlciwgW3tcbiAgICBrZXk6ICdyZXNldGxvYWRNb3JlSXRlbXNDYWNoZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0bG9hZE1vcmVJdGVtc0NhY2hlKCkge1xuICAgICAgdmFyIGF1dG9SZWxvYWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgICB0aGlzLl9tZW1vaXplZFVubG9hZGVkUmFuZ2VzID0gW107XG5cbiAgICAgIGlmIChhdXRvUmVsb2FkKSB7XG4gICAgICAgIHRoaXMuX2Vuc3VyZVJvd3NMb2FkZWQodGhpcy5fbGFzdFJlbmRlcmVkU3RhcnRJbmRleCwgdGhpcy5fbGFzdFJlbmRlcmVkU3RvcEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RSZWYgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBsaXN0IHJlZjsgcGxlYXNlIHJlZmVyIHRvIEluZmluaXRlTG9hZGVyIGRvY3VtZW50YXRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG5cbiAgICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICAgIG9uSXRlbXNSZW5kZXJlZDogdGhpcy5fb25JdGVtc1JlbmRlcmVkLFxuICAgICAgICByZWY6IHRoaXMuX3NldFJlZlxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2Vuc3VyZVJvd3NMb2FkZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZW5zdXJlUm93c0xvYWRlZChzdGFydEluZGV4LCBzdG9wSW5kZXgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzSXRlbUxvYWRlZCA9IF9wcm9wcy5pc0l0ZW1Mb2FkZWQsXG4gICAgICAgICAgaXRlbUNvdW50ID0gX3Byb3BzLml0ZW1Db3VudCxcbiAgICAgICAgICBfcHJvcHMkbWluaW11bUJhdGNoU2kgPSBfcHJvcHMubWluaW11bUJhdGNoU2l6ZSxcbiAgICAgICAgICBtaW5pbXVtQmF0Y2hTaXplID0gX3Byb3BzJG1pbmltdW1CYXRjaFNpID09PSB1bmRlZmluZWQgPyAxMCA6IF9wcm9wcyRtaW5pbXVtQmF0Y2hTaSxcbiAgICAgICAgICBfcHJvcHMkdGhyZXNob2xkID0gX3Byb3BzLnRocmVzaG9sZCxcbiAgICAgICAgICB0aHJlc2hvbGQgPSBfcHJvcHMkdGhyZXNob2xkID09PSB1bmRlZmluZWQgPyAxNSA6IF9wcm9wcyR0aHJlc2hvbGQ7XG5cblxuICAgICAgdmFyIHVubG9hZGVkUmFuZ2VzID0gc2NhbkZvclVubG9hZGVkUmFuZ2VzKHtcbiAgICAgICAgaXNJdGVtTG9hZGVkOiBpc0l0ZW1Mb2FkZWQsXG4gICAgICAgIGl0ZW1Db3VudDogaXRlbUNvdW50LFxuICAgICAgICBtaW5pbXVtQmF0Y2hTaXplOiBtaW5pbXVtQmF0Y2hTaXplLFxuICAgICAgICBzdGFydEluZGV4OiBNYXRoLm1heCgwLCBzdGFydEluZGV4IC0gdGhyZXNob2xkKSxcbiAgICAgICAgc3RvcEluZGV4OiBNYXRoLm1pbihpdGVtQ291bnQgLSAxLCBzdG9wSW5kZXggKyB0aHJlc2hvbGQpXG4gICAgICB9KTtcblxuICAgICAgLy8gQXZvaWQgY2FsbGluZyBsb2FkLXJvd3MgdW5sZXNzIHJhbmdlIGhhcyBjaGFuZ2VkLlxuICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgYmUgc3RyaWN0bHkgbmVjc2VzYXJ5LCBidXQgaXMgbWF5YmUgbmljZSB0byBkby5cbiAgICAgIGlmICh0aGlzLl9tZW1vaXplZFVubG9hZGVkUmFuZ2VzLmxlbmd0aCAhPT0gdW5sb2FkZWRSYW5nZXMubGVuZ3RoIHx8IHRoaXMuX21lbW9pemVkVW5sb2FkZWRSYW5nZXMuc29tZShmdW5jdGlvbiAoX3JlZjMsIGluZGV4KSB7XG4gICAgICAgIHZhciBfcmVmNCA9IHNsaWNlZFRvQXJyYXkoX3JlZjMsIDIpLFxuICAgICAgICAgICAgc3RhcnRJbmRleCA9IF9yZWY0WzBdLFxuICAgICAgICAgICAgc3RvcEluZGV4ID0gX3JlZjRbMV07XG5cbiAgICAgICAgcmV0dXJuIHVubG9hZGVkUmFuZ2VzW2luZGV4XVswXSAhPT0gc3RhcnRJbmRleCB8fCB1bmxvYWRlZFJhbmdlc1tpbmRleF1bMV0gIT09IHN0b3BJbmRleDtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMuX21lbW9pemVkVW5sb2FkZWRSYW5nZXMgPSB1bmxvYWRlZFJhbmdlcztcbiAgICAgICAgdGhpcy5fbG9hZFVubG9hZGVkUmFuZ2VzKHVubG9hZGVkUmFuZ2VzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfbG9hZFVubG9hZGVkUmFuZ2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2xvYWRVbmxvYWRlZFJhbmdlcyh1bmxvYWRlZFJhbmdlcykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIGxvYWRNb3JlUm93cyB3YXMgcmVuYW1lZCB0byBsb2FkTW9yZUl0ZW1zIGluIHYxLjAuMzsgd2lsbCBiZSByZW1vdmVkIGluIHYyLjBcbiAgICAgIHZhciBsb2FkTW9yZUl0ZW1zID0gdGhpcy5wcm9wcy5sb2FkTW9yZUl0ZW1zIHx8IHRoaXMucHJvcHMubG9hZE1vcmVSb3dzO1xuXG4gICAgICB1bmxvYWRlZFJhbmdlcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNSkge1xuICAgICAgICB2YXIgX3JlZjYgPSBzbGljZWRUb0FycmF5KF9yZWY1LCAyKSxcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBfcmVmNlswXSxcbiAgICAgICAgICAgIHN0b3BJbmRleCA9IF9yZWY2WzFdO1xuXG4gICAgICAgIHZhciBwcm9taXNlID0gbG9hZE1vcmVJdGVtcyhzdGFydEluZGV4LCBzdG9wSW5kZXgpO1xuICAgICAgICBpZiAocHJvbWlzZSAhPSBudWxsKSB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdGhlIHZpc2libGUgcm93cyBpZiBhbnkgb2YgdGhlbSBoYXZlIGp1c3QgYmVlbiBsb2FkZWQuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgdGhleSB3aWxsIHJlbWFpbiBpbiB0aGVpciB1bmxvYWRlZCB2aXN1YWwgc3RhdGUuXG4gICAgICAgICAgICBpZiAoaXNSYW5nZVZpc2libGUoe1xuICAgICAgICAgICAgICBsYXN0UmVuZGVyZWRTdGFydEluZGV4OiBfdGhpczIuX2xhc3RSZW5kZXJlZFN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIGxhc3RSZW5kZXJlZFN0b3BJbmRleDogX3RoaXMyLl9sYXN0UmVuZGVyZWRTdG9wSW5kZXgsXG4gICAgICAgICAgICAgIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXG4gICAgICAgICAgICAgIHN0b3BJbmRleDogc3RvcEluZGV4XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAvLyBIYW5kbGUgYW4gdW5tb3VudCB3aGlsZSBwcm9taXNlcyBhcmUgc3RpbGwgaW4gZmxpZ2h0LlxuICAgICAgICAgICAgICBpZiAoX3RoaXMyLl9saXN0UmVmID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBSZXNpemUgY2FjaGVkIHJvdyBzaXplcyBmb3IgVmFyaWFibGVTaXplTGlzdCxcbiAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGp1c3QgcmUtcmVuZGVyIHRoZSBsaXN0LlxuICAgICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzMi5fbGlzdFJlZi5yZXNldEFmdGVySW5kZXggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuX2xpc3RSZWYucmVzZXRBZnRlckluZGV4KHN0YXJ0SW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhBQ0sgcmVzZXQgdGVtcG9yYXJpbHkgY2FjaGVkIGl0ZW0gc3R5bGVzIHRvIGZvcmNlIFB1cmVDb21wb25lbnQgdG8gcmUtcmVuZGVyLlxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgcHJldHR5IGdyb3NzLCBidXQgSSdtIG9rYXkgd2l0aCBpdCBmb3Igbm93LlxuICAgICAgICAgICAgICAgIC8vIERvbid0IGp1ZGdlIG1lLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMyLl9saXN0UmVmLl9nZXRJdGVtU3R5bGVDYWNoZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgX3RoaXMyLl9saXN0UmVmLl9nZXRJdGVtU3R5bGVDYWNoZSgtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzMi5fbGlzdFJlZi5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSW5maW5pdGVMb2FkZXI7XG59KFB1cmVDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBJbmZpbml0ZUxvYWRlcjtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZCc7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuXG4vLyBBbmltYXRpb24gZnJhbWUgYmFzZWQgaW1wbGVtZW50YXRpb24gb2Ygc2V0VGltZW91dC5cbi8vIEluc3BpcmVkIGJ5IEpvZSBMYW1iZXJ0LCBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qb2VsYW1iZXJ0LzEwMDIxMTYjZmlsZS1yZXF1ZXN0dGltZW91dC1qc1xudmFyIGhhc05hdGl2ZVBlcmZvcm1hbmNlTm93ID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nO1xudmFyIG5vdyA9IGhhc05hdGl2ZVBlcmZvcm1hbmNlTm93ID8gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG59IDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRGF0ZS5ub3coKTtcbn07XG5mdW5jdGlvbiBjYW5jZWxUaW1lb3V0KHRpbWVvdXRJRCkge1xuICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lb3V0SUQuaWQpO1xufVxuZnVuY3Rpb24gcmVxdWVzdFRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5KSB7XG4gIHZhciBzdGFydCA9IG5vdygpO1xuXG4gIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgaWYgKG5vdygpIC0gc3RhcnQgPj0gZGVsYXkpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVvdXRJRC5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGltZW91dElEID0ge1xuICAgIGlkOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljaylcbiAgfTtcbiAgcmV0dXJuIHRpbWVvdXRJRDtcbn1cblxudmFyIHNpemUgPSAtMTsgLy8gVGhpcyB1dGlsaXR5IGNvcGllZCBmcm9tIFwiZG9tLWhlbHBlcnNcIiBwYWNrYWdlLlxuXG5mdW5jdGlvbiBnZXRTY3JvbGxiYXJTaXplKHJlY2FsY3VsYXRlKSB7XG4gIGlmIChyZWNhbGN1bGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmVjYWxjdWxhdGUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChzaXplID09PSAtMSB8fCByZWNhbGN1bGF0ZSkge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgc3R5bGUgPSBkaXYuc3R5bGU7XG4gICAgc3R5bGUud2lkdGggPSAnNTBweCc7XG4gICAgc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICAgIHN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHNpemUgPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGg7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuICB9XG5cbiAgcmV0dXJuIHNpemU7XG59XG52YXIgY2FjaGVkUlRMUmVzdWx0ID0gbnVsbDsgLy8gVFJJQ0tZIEFjY29yZGluZyB0byB0aGUgc3BlYywgc2Nyb2xsTGVmdCBzaG91bGQgYmUgbmVnYXRpdmUgZm9yIFJUTCBhbGlnbmVkIGVsZW1lbnRzLlxuLy8gQ2hyb21lIGRvZXMgbm90IHNlZW0gdG8gYWRoZXJlOyBpdHMgc2Nyb2xsTGVmdCB2YWx1ZXMgYXJlIHBvc2l0aXZlIChtZWFzdXJlZCByZWxhdGl2ZSB0byB0aGUgbGVmdCkuXG4vLyBTYWZhcmkncyBlbGFzdGljIGJvdW5jZSBtYWtlcyBkZXRlY3RpbmcgdGhpcyBldmVuIG1vcmUgY29tcGxpY2F0ZWQgd3J0IHBvdGVudGlhbCBmYWxzZSBwb3NpdGl2ZXMuXG4vLyBUaGUgc2FmZXN0IHdheSB0byBjaGVjayB0aGlzIGlzIHRvIGludGVudGlvbmFsbHkgc2V0IGEgbmVnYXRpdmUgb2Zmc2V0LFxuLy8gYW5kIHRoZW4gdmVyaWZ5IHRoYXQgdGhlIHN1YnNlcXVlbnQgXCJzY3JvbGxcIiBldmVudCBtYXRjaGVzIHRoZSBuZWdhdGl2ZSBvZmZzZXQuXG4vLyBJZiBpdCBkb2VzIG5vdCBtYXRjaCwgdGhlbiB3ZSBjYW4gYXNzdW1lIGEgbm9uLXN0YW5kYXJkIFJUTCBzY3JvbGwgaW1wbGVtZW50YXRpb24uXG5cbmZ1bmN0aW9uIGdldFJUTE9mZnNldFR5cGUocmVjYWxjdWxhdGUpIHtcbiAgaWYgKHJlY2FsY3VsYXRlID09PSB2b2lkIDApIHtcbiAgICByZWNhbGN1bGF0ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGNhY2hlZFJUTFJlc3VsdCA9PT0gbnVsbCB8fCByZWNhbGN1bGF0ZSkge1xuICAgIHZhciBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBvdXRlclN0eWxlID0gb3V0ZXJEaXYuc3R5bGU7XG4gICAgb3V0ZXJTdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgICBvdXRlclN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgICBvdXRlclN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgb3V0ZXJTdHlsZS5kaXJlY3Rpb24gPSAncnRsJztcbiAgICB2YXIgaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgaW5uZXJTdHlsZSA9IGlubmVyRGl2LnN0eWxlO1xuICAgIGlubmVyU3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICAgIGlubmVyU3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChpbm5lckRpdik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlckRpdik7XG5cbiAgICBpZiAob3V0ZXJEaXYuc2Nyb2xsTGVmdCA+IDApIHtcbiAgICAgIGNhY2hlZFJUTFJlc3VsdCA9ICdwb3NpdGl2ZS1kZXNjZW5kaW5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0ZXJEaXYuc2Nyb2xsTGVmdCA9IDE7XG5cbiAgICAgIGlmIChvdXRlckRpdi5zY3JvbGxMZWZ0ID09PSAwKSB7XG4gICAgICAgIGNhY2hlZFJUTFJlc3VsdCA9ICduZWdhdGl2ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZWRSVExSZXN1bHQgPSAncG9zaXRpdmUtYXNjZW5kaW5nJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyRGl2KTtcbiAgICByZXR1cm4gY2FjaGVkUlRMUmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZFJUTFJlc3VsdDtcbn1cblxudmFyIElTX1NDUk9MTElOR19ERUJPVU5DRV9JTlRFUlZBTCA9IDE1MDtcblxudmFyIGRlZmF1bHRJdGVtS2V5ID0gZnVuY3Rpb24gZGVmYXVsdEl0ZW1LZXkoX3JlZikge1xuICB2YXIgY29sdW1uSW5kZXggPSBfcmVmLmNvbHVtbkluZGV4LFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgIHJvd0luZGV4ID0gX3JlZi5yb3dJbmRleDtcbiAgcmV0dXJuIHJvd0luZGV4ICsgXCI6XCIgKyBjb2x1bW5JbmRleDtcbn07IC8vIEluIERFViBtb2RlLCB0aGlzIFNldCBoZWxwcyB1cyBvbmx5IGxvZyBhIHdhcm5pbmcgb25jZSBwZXIgY29tcG9uZW50IGluc3RhbmNlLlxuLy8gVGhpcyBhdm9pZHMgc3BhbW1pbmcgdGhlIGNvbnNvbGUgZXZlcnkgdGltZSBhIHJlbmRlciBoYXBwZW5zLlxuXG5cbnZhciBkZXZXYXJuaW5nc092ZXJzY2FuQ291bnQgPSBudWxsO1xudmFyIGRldldhcm5pbmdzT3ZlcnNjYW5Sb3dzQ29sdW1uc0NvdW50ID0gbnVsbDtcbnZhciBkZXZXYXJuaW5nc1RhZ05hbWUgPSBudWxsO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5XZWFrU2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRldldhcm5pbmdzT3ZlcnNjYW5Db3VudCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIG5ldyBXZWFrU2V0KCk7XG4gICAgZGV2V2FybmluZ3NPdmVyc2NhblJvd3NDb2x1bW5zQ291bnQgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBuZXcgV2Vha1NldCgpO1xuICAgIGRldldhcm5pbmdzVGFnTmFtZSA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIG5ldyBXZWFrU2V0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JpZENvbXBvbmVudChfcmVmMikge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgZ2V0Q29sdW1uT2Zmc2V0ID0gX3JlZjIuZ2V0Q29sdW1uT2Zmc2V0LFxuICAgICAgZ2V0Q29sdW1uU3RhcnRJbmRleEZvck9mZnNldCA9IF9yZWYyLmdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQsXG4gICAgICBnZXRDb2x1bW5TdG9wSW5kZXhGb3JTdGFydEluZGV4ID0gX3JlZjIuZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleCxcbiAgICAgIGdldENvbHVtbldpZHRoID0gX3JlZjIuZ2V0Q29sdW1uV2lkdGgsXG4gICAgICBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCA9IF9yZWYyLmdldEVzdGltYXRlZFRvdGFsSGVpZ2h0LFxuICAgICAgZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCA9IF9yZWYyLmdldEVzdGltYXRlZFRvdGFsV2lkdGgsXG4gICAgICBnZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQgPSBfcmVmMi5nZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQsXG4gICAgICBnZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQgPSBfcmVmMi5nZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQsXG4gICAgICBnZXRSb3dIZWlnaHQgPSBfcmVmMi5nZXRSb3dIZWlnaHQsXG4gICAgICBnZXRSb3dPZmZzZXQgPSBfcmVmMi5nZXRSb3dPZmZzZXQsXG4gICAgICBnZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0ID0gX3JlZjIuZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldCxcbiAgICAgIGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXggPSBfcmVmMi5nZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4LFxuICAgICAgaW5pdEluc3RhbmNlUHJvcHMgPSBfcmVmMi5pbml0SW5zdGFuY2VQcm9wcyxcbiAgICAgIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgPSBfcmVmMi5zaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlLFxuICAgICAgdmFsaWRhdGVQcm9wcyA9IF9yZWYyLnZhbGlkYXRlUHJvcHM7XG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzTG9vc2UoR3JpZCwgX1B1cmVDb21wb25lbnQpO1xuXG4gICAgLy8gQWx3YXlzIHVzZSBleHBsaWNpdCBjb25zdHJ1Y3RvciBmb3IgUmVhY3QgY29tcG9uZW50cy5cbiAgICAvLyBJdCBwcm9kdWNlcyBsZXNzIGNvZGUgYWZ0ZXIgdHJhbnNwaWxhdGlvbi4gKCMyNilcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX3RoaXMgPSBfUHVyZUNvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgX3RoaXMuX2luc3RhbmNlUHJvcHMgPSBpbml0SW5zdGFuY2VQcm9wcyhfdGhpcy5wcm9wcywgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgX3RoaXMuX291dGVyUmVmID0gdm9pZCAwO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGluc3RhbmNlOiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSxcbiAgICAgICAgaXNTY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uOiAnZm9yd2FyZCcsXG4gICAgICAgIHNjcm9sbExlZnQ6IHR5cGVvZiBfdGhpcy5wcm9wcy5pbml0aWFsU2Nyb2xsTGVmdCA9PT0gJ251bWJlcicgPyBfdGhpcy5wcm9wcy5pbml0aWFsU2Nyb2xsTGVmdCA6IDAsXG4gICAgICAgIHNjcm9sbFRvcDogdHlwZW9mIF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxUb3AgPT09ICdudW1iZXInID8gX3RoaXMucHJvcHMuaW5pdGlhbFNjcm9sbFRvcCA6IDAsXG4gICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogZmFsc2UsXG4gICAgICAgIHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uOiAnZm9yd2FyZCdcbiAgICAgIH07XG4gICAgICBfdGhpcy5fY2FsbE9uSXRlbXNSZW5kZXJlZCA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkID0gbWVtb2l6ZU9uZShmdW5jdGlvbiAob3ZlcnNjYW5Db2x1bW5TdGFydEluZGV4LCBvdmVyc2NhbkNvbHVtblN0b3BJbmRleCwgb3ZlcnNjYW5Sb3dTdGFydEluZGV4LCBvdmVyc2NhblJvd1N0b3BJbmRleCwgdmlzaWJsZUNvbHVtblN0YXJ0SW5kZXgsIHZpc2libGVDb2x1bW5TdG9wSW5kZXgsIHZpc2libGVSb3dTdGFydEluZGV4LCB2aXNpYmxlUm93U3RvcEluZGV4KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vbkl0ZW1zUmVuZGVyZWQoe1xuICAgICAgICAgIG92ZXJzY2FuQ29sdW1uU3RhcnRJbmRleDogb3ZlcnNjYW5Db2x1bW5TdGFydEluZGV4LFxuICAgICAgICAgIG92ZXJzY2FuQ29sdW1uU3RvcEluZGV4OiBvdmVyc2NhbkNvbHVtblN0b3BJbmRleCxcbiAgICAgICAgICBvdmVyc2NhblJvd1N0YXJ0SW5kZXg6IG92ZXJzY2FuUm93U3RhcnRJbmRleCxcbiAgICAgICAgICBvdmVyc2NhblJvd1N0b3BJbmRleDogb3ZlcnNjYW5Sb3dTdG9wSW5kZXgsXG4gICAgICAgICAgdmlzaWJsZUNvbHVtblN0YXJ0SW5kZXg6IHZpc2libGVDb2x1bW5TdGFydEluZGV4LFxuICAgICAgICAgIHZpc2libGVDb2x1bW5TdG9wSW5kZXg6IHZpc2libGVDb2x1bW5TdG9wSW5kZXgsXG4gICAgICAgICAgdmlzaWJsZVJvd1N0YXJ0SW5kZXg6IHZpc2libGVSb3dTdGFydEluZGV4LFxuICAgICAgICAgIHZpc2libGVSb3dTdG9wSW5kZXg6IHZpc2libGVSb3dTdG9wSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIF90aGlzLl9jYWxsT25TY3JvbGwgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5fY2FsbE9uU2Nyb2xsID0gbWVtb2l6ZU9uZShmdW5jdGlvbiAoc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wLCBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uLCB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiwgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblNjcm9sbCh7XG4gICAgICAgICAgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbjogaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wLFxuICAgICAgICAgIHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uOiB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZSA9IHZvaWQgMDtcblxuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZSA9IGZ1bmN0aW9uIChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBjb2x1bW5XaWR0aCA9IF90aGlzJHByb3BzLmNvbHVtbldpZHRoLFxuICAgICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICAgICAgcm93SGVpZ2h0ID0gX3RoaXMkcHJvcHMucm93SGVpZ2h0O1xuXG4gICAgICAgIHZhciBpdGVtU3R5bGVDYWNoZSA9IF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZShzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlICYmIGNvbHVtbldpZHRoLCBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlICYmIGRpcmVjdGlvbiwgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSAmJiByb3dIZWlnaHQpO1xuXG4gICAgICAgIHZhciBrZXkgPSByb3dJbmRleCArIFwiOlwiICsgY29sdW1uSW5kZXg7XG4gICAgICAgIHZhciBzdHlsZTtcblxuICAgICAgICBpZiAoaXRlbVN0eWxlQ2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHN0eWxlID0gaXRlbVN0eWxlQ2FjaGVba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX3N0eWxlO1xuXG4gICAgICAgICAgaXRlbVN0eWxlQ2FjaGVba2V5XSA9IHN0eWxlID0gKF9zdHlsZSA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgICAgfSwgX3N0eWxlW2RpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnXSA9IGdldENvbHVtbk9mZnNldChfdGhpcy5wcm9wcywgY29sdW1uSW5kZXgsIF90aGlzLl9pbnN0YW5jZVByb3BzKSwgX3N0eWxlLnRvcCA9IGdldFJvd09mZnNldChfdGhpcy5wcm9wcywgcm93SW5kZXgsIF90aGlzLl9pbnN0YW5jZVByb3BzKSwgX3N0eWxlLmhlaWdodCA9IGdldFJvd0hlaWdodChfdGhpcy5wcm9wcywgcm93SW5kZXgsIF90aGlzLl9pbnN0YW5jZVByb3BzKSwgX3N0eWxlLndpZHRoID0gZ2V0Q29sdW1uV2lkdGgoX3RoaXMucHJvcHMsIGNvbHVtbkluZGV4LCBfdGhpcy5faW5zdGFuY2VQcm9wcyksIF9zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChfLCBfXywgX19fKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5fb25TY3JvbGwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9ldmVudCRjdXJyZW50VGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudFdpZHRoID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBzY3JvbGxMZWZ0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIHNjcm9sbFdpZHRoID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsV2lkdGg7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAgIGlmIChwcmV2U3RhdGUuc2Nyb2xsTGVmdCA9PT0gc2Nyb2xsTGVmdCAmJiBwcmV2U3RhdGUuc2Nyb2xsVG9wID09PSBzY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIC8vIFNjcm9sbCBwb3NpdGlvbiBtYXkgaGF2ZSBiZWVuIHVwZGF0ZWQgYnkgY0RNL2NEVSxcbiAgICAgICAgICAgIC8vIEluIHdoaWNoIGNhc2Ugd2UgZG9uJ3QgbmVlZCB0byB0cmlnZ2VyIGFub3RoZXIgcmVuZGVyLFxuICAgICAgICAgICAgLy8gQW5kIHdlIGRvbid0IHdhbnQgdG8gdXBkYXRlIHN0YXRlLmlzU2Nyb2xsaW5nLlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IF90aGlzLnByb3BzLmRpcmVjdGlvbjsgLy8gVFJJQ0tZIEFjY29yZGluZyB0byB0aGUgc3BlYywgc2Nyb2xsTGVmdCBzaG91bGQgYmUgbmVnYXRpdmUgZm9yIFJUTCBhbGlnbmVkIGVsZW1lbnRzLlxuICAgICAgICAgIC8vIFRoaXMgaXMgbm90IHRoZSBjYXNlIGZvciBhbGwgYnJvd3NlcnMgdGhvdWdoIChlLmcuIENocm9tZSByZXBvcnRzIHZhbHVlcyBhcyBwb3NpdGl2ZSwgbWVhc3VyZWQgcmVsYXRpdmUgdG8gdGhlIGxlZnQpLlxuICAgICAgICAgIC8vIEl0J3MgYWxzbyBlYXNpZXIgZm9yIHRoaXMgY29tcG9uZW50IGlmIHdlIGNvbnZlcnQgb2Zmc2V0cyB0byB0aGUgc2FtZSBmb3JtYXQgYXMgdGhleSB3b3VsZCBiZSBpbiBmb3IgbHRyLlxuICAgICAgICAgIC8vIFNvIHRoZSBzaW1wbGVzdCBzb2x1dGlvbiBpcyB0byBkZXRlcm1pbmUgd2hpY2ggYnJvd3NlciBiZWhhdmlvciB3ZSdyZSBkZWFsaW5nIHdpdGgsIGFuZCBjb252ZXJ0IGJhc2VkIG9uIGl0LlxuXG4gICAgICAgICAgdmFyIGNhbGN1bGF0ZWRTY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcblxuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGdldFJUTE9mZnNldFR5cGUoKSkge1xuICAgICAgICAgICAgICBjYXNlICduZWdhdGl2ZSc6XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlZFNjcm9sbExlZnQgPSAtc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdwb3NpdGl2ZS1kZXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkU2Nyb2xsTGVmdCA9IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSBzY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gUHJldmVudCBTYWZhcmkncyBlbGFzdGljIHNjcm9sbGluZyBmcm9tIGNhdXNpbmcgdmlzdWFsIHNoYWtpbmcgd2hlbiBzY3JvbGxpbmcgcGFzdCBib3VuZHMuXG5cblxuICAgICAgICAgIGNhbGN1bGF0ZWRTY3JvbGxMZWZ0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oY2FsY3VsYXRlZFNjcm9sbExlZnQsIHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGgpKTtcbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZFNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0KSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB0cnVlLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbExlZnQgPCBzY3JvbGxMZWZ0ID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJyxcbiAgICAgICAgICAgIHNjcm9sbExlZnQ6IGNhbGN1bGF0ZWRTY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsVG9wOiBjYWxjdWxhdGVkU2Nyb2xsVG9wLFxuICAgICAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb246IHByZXZTdGF0ZS5zY3JvbGxUb3AgPCBzY3JvbGxUb3AgPyAnZm9yd2FyZCcgOiAnYmFja3dhcmQnLFxuICAgICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIH0sIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9vdXRlclJlZlNldHRlciA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgdmFyIG91dGVyUmVmID0gX3RoaXMucHJvcHMub3V0ZXJSZWY7XG4gICAgICAgIF90aGlzLl9vdXRlclJlZiA9IHJlZjtcblxuICAgICAgICBpZiAodHlwZW9mIG91dGVyUmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb3V0ZXJSZWYocmVmKTtcbiAgICAgICAgfSBlbHNlIGlmIChvdXRlclJlZiAhPSBudWxsICYmIHR5cGVvZiBvdXRlclJlZiA9PT0gJ29iamVjdCcgJiYgb3V0ZXJSZWYuaGFzT3duUHJvcGVydHkoJ2N1cnJlbnQnKSkge1xuICAgICAgICAgIG91dGVyUmVmLmN1cnJlbnQgPSByZWY7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgICAgICBjYW5jZWxUaW1lb3V0KF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkID0gcmVxdWVzdFRpbWVvdXQoX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmcsIElTX1NDUk9MTElOR19ERUJPVU5DRV9JTlRFUlZBTCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc1Njcm9sbGluZzogZmFsc2VcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIENsZWFyIHN0eWxlIGNhY2hlIGFmdGVyIHN0YXRlIHVwZGF0ZSBoYXMgYmVlbiBjb21taXR0ZWQuXG4gICAgICAgICAgLy8gVGhpcyB3YXkgd2UgZG9uJ3QgYnJlYWsgcHVyZSBzQ1UgZm9yIGl0ZW1zIHRoYXQgZG9uJ3QgdXNlIGlzU2Nyb2xsaW5nIHBhcmFtLlxuICAgICAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSgtMSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIEdyaWQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB2YWxpZGF0ZVNoYXJlZFByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICAgIHZhbGlkYXRlUHJvcHMobmV4dFByb3BzKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgX3Byb3RvID0gR3JpZC5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uc2Nyb2xsVG8gPSBmdW5jdGlvbiBzY3JvbGxUbyhfcmVmMykge1xuICAgICAgdmFyIHNjcm9sbExlZnQgPSBfcmVmMy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcCA9IF9yZWYzLnNjcm9sbFRvcDtcblxuICAgICAgaWYgKHNjcm9sbExlZnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzY3JvbGxMZWZ0ID0gTWF0aC5tYXgoMCwgc2Nyb2xsTGVmdCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBzY3JvbGxUb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKHNjcm9sbExlZnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNjcm9sbExlZnQgPSBwcmV2U3RhdGUuc2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY3JvbGxUb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHByZXZTdGF0ZS5zY3JvbGxUb3A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbExlZnQgPT09IHNjcm9sbExlZnQgJiYgcHJldlN0YXRlLnNjcm9sbFRvcCA9PT0gc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb246IHByZXZTdGF0ZS5zY3JvbGxMZWZ0IDwgc2Nyb2xsTGVmdCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IHRydWUsXG4gICAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb246IHByZXZTdGF0ZS5zY3JvbGxUb3AgPCBzY3JvbGxUb3AgPyAnZm9yd2FyZCcgOiAnYmFja3dhcmQnXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNjcm9sbFRvSXRlbSA9IGZ1bmN0aW9uIHNjcm9sbFRvSXRlbShfcmVmNCkge1xuICAgICAgdmFyIF9yZWY0JGFsaWduID0gX3JlZjQuYWxpZ24sXG4gICAgICAgICAgYWxpZ24gPSBfcmVmNCRhbGlnbiA9PT0gdm9pZCAwID8gJ2F1dG8nIDogX3JlZjQkYWxpZ24sXG4gICAgICAgICAgY29sdW1uSW5kZXggPSBfcmVmNC5jb2x1bW5JbmRleCxcbiAgICAgICAgICByb3dJbmRleCA9IF9yZWY0LnJvd0luZGV4O1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29sdW1uQ291bnQgPSBfdGhpcyRwcm9wczIuY29sdW1uQ291bnQsXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHMyLmhlaWdodCxcbiAgICAgICAgICByb3dDb3VudCA9IF90aGlzJHByb3BzMi5yb3dDb3VudCxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzMi53aWR0aDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IF90aGlzJHN0YXRlLnNjcm9sbExlZnQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RoaXMkc3RhdGUuc2Nyb2xsVG9wO1xuICAgICAgdmFyIHNjcm9sbGJhclNpemUgPSBnZXRTY3JvbGxiYXJTaXplKCk7XG5cbiAgICAgIGlmIChjb2x1bW5JbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbHVtbkluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oY29sdW1uSW5kZXgsIGNvbHVtbkNvdW50IC0gMSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocm93SW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByb3dJbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHJvd0luZGV4LCByb3dDb3VudCAtIDEpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVzdGltYXRlZFRvdGFsSGVpZ2h0ID0gZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQodGhpcy5wcm9wcywgdGhpcy5faW5zdGFuY2VQcm9wcyk7XG4gICAgICB2YXIgZXN0aW1hdGVkVG90YWxXaWR0aCA9IGdldEVzdGltYXRlZFRvdGFsV2lkdGgodGhpcy5wcm9wcywgdGhpcy5faW5zdGFuY2VQcm9wcyk7IC8vIFRoZSBzY3JvbGxiYXIgc2l6ZSBzaG91bGQgYmUgY29uc2lkZXJlZCB3aGVuIHNjcm9sbGluZyBhbiBpdGVtIGludG8gdmlldyxcbiAgICAgIC8vIHRvIGVuc3VyZSBpdCdzIGZ1bGx5IHZpc2libGUuXG4gICAgICAvLyBCdXQgd2Ugb25seSBuZWVkIHRvIGFjY291bnQgZm9yIGl0cyBzaXplIHdoZW4gaXQncyBhY3R1YWxseSB2aXNpYmxlLlxuXG4gICAgICB2YXIgaG9yaXpvbnRhbFNjcm9sbGJhclNpemUgPSBlc3RpbWF0ZWRUb3RhbFdpZHRoID4gd2lkdGggPyBzY3JvbGxiYXJTaXplIDogMDtcbiAgICAgIHZhciB2ZXJ0aWNhbFNjcm9sbGJhclNpemUgPSBlc3RpbWF0ZWRUb3RhbEhlaWdodCA+IGhlaWdodCA/IHNjcm9sbGJhclNpemUgOiAwO1xuICAgICAgdGhpcy5zY3JvbGxUbyh7XG4gICAgICAgIHNjcm9sbExlZnQ6IGNvbHVtbkluZGV4ICE9PSB1bmRlZmluZWQgPyBnZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQodGhpcy5wcm9wcywgY29sdW1uSW5kZXgsIGFsaWduLCBzY3JvbGxMZWZ0LCB0aGlzLl9pbnN0YW5jZVByb3BzLCB2ZXJ0aWNhbFNjcm9sbGJhclNpemUpIDogc2Nyb2xsTGVmdCxcbiAgICAgICAgc2Nyb2xsVG9wOiByb3dJbmRleCAhPT0gdW5kZWZpbmVkID8gZ2V0T2Zmc2V0Rm9yUm93QW5kQWxpZ25tZW50KHRoaXMucHJvcHMsIHJvd0luZGV4LCBhbGlnbiwgc2Nyb2xsVG9wLCB0aGlzLl9pbnN0YW5jZVByb3BzLCBob3Jpem9udGFsU2Nyb2xsYmFyU2l6ZSkgOiBzY3JvbGxUb3BcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGluaXRpYWxTY3JvbGxMZWZ0ID0gX3RoaXMkcHJvcHMzLmluaXRpYWxTY3JvbGxMZWZ0LFxuICAgICAgICAgIGluaXRpYWxTY3JvbGxUb3AgPSBfdGhpcyRwcm9wczMuaW5pdGlhbFNjcm9sbFRvcDtcblxuICAgICAgaWYgKHRoaXMuX291dGVyUmVmICE9IG51bGwpIHtcbiAgICAgICAgdmFyIG91dGVyUmVmID0gdGhpcy5fb3V0ZXJSZWY7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbml0aWFsU2Nyb2xsTGVmdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gaW5pdGlhbFNjcm9sbExlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxTY3JvbGxUb3AgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsVG9wID0gaW5pdGlhbFNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jYWxsUHJvcHNDYWxsYmFja3MoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSB0aGlzLnByb3BzLmRpcmVjdGlvbjtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBfdGhpcyRzdGF0ZTIuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcyRzdGF0ZTIuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCA9IF90aGlzJHN0YXRlMi5zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ7XG5cbiAgICAgIGlmIChzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQgJiYgdGhpcy5fb3V0ZXJSZWYgIT0gbnVsbCkge1xuICAgICAgICAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4gICAgICAgIC8vIFRoaXMgaXMgbm90IHRoZSBjYXNlIGZvciBhbGwgYnJvd3NlcnMgdGhvdWdoIChlLmcuIENocm9tZSByZXBvcnRzIHZhbHVlcyBhcyBwb3NpdGl2ZSwgbWVhc3VyZWQgcmVsYXRpdmUgdG8gdGhlIGxlZnQpLlxuICAgICAgICAvLyBTbyB3ZSBuZWVkIHRvIGRldGVybWluZSB3aGljaCBicm93c2VyIGJlaGF2aW9yIHdlJ3JlIGRlYWxpbmcgd2l0aCwgYW5kIG1pbWljIGl0LlxuICAgICAgICB2YXIgb3V0ZXJSZWYgPSB0aGlzLl9vdXRlclJlZjtcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgICAgIHN3aXRjaCAoZ2V0UlRMT2Zmc2V0VHlwZSgpKSB7XG4gICAgICAgICAgICBjYXNlICduZWdhdGl2ZSc6XG4gICAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSAtc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3Bvc2l0aXZlLWFzY2VuZGluZyc6XG4gICAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gb3V0ZXJSZWYuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICBzY3JvbGxXaWR0aCA9IG91dGVyUmVmLnNjcm9sbFdpZHRoO1xuICAgICAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIHNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gTWF0aC5tYXgoMCwgc2Nyb2xsTGVmdCk7XG4gICAgICAgIH1cblxuICAgICAgICBvdXRlclJlZi5zY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBzY3JvbGxUb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jYWxsUHJvcHNDYWxsYmFja3MoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICBjYW5jZWxUaW1lb3V0KHRoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczQuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM0LmNsYXNzTmFtZSxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzNC5jb2x1bW5Db3VudCxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wczQuZGlyZWN0aW9uLFxuICAgICAgICAgIGhlaWdodCA9IF90aGlzJHByb3BzNC5oZWlnaHQsXG4gICAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wczQuaW5uZXJSZWYsXG4gICAgICAgICAgaW5uZXJFbGVtZW50VHlwZSA9IF90aGlzJHByb3BzNC5pbm5lckVsZW1lbnRUeXBlLFxuICAgICAgICAgIGlubmVyVGFnTmFtZSA9IF90aGlzJHByb3BzNC5pbm5lclRhZ05hbWUsXG4gICAgICAgICAgaXRlbURhdGEgPSBfdGhpcyRwcm9wczQuaXRlbURhdGEsXG4gICAgICAgICAgX3RoaXMkcHJvcHM0JGl0ZW1LZXkgPSBfdGhpcyRwcm9wczQuaXRlbUtleSxcbiAgICAgICAgICBpdGVtS2V5ID0gX3RoaXMkcHJvcHM0JGl0ZW1LZXkgPT09IHZvaWQgMCA/IGRlZmF1bHRJdGVtS2V5IDogX3RoaXMkcHJvcHM0JGl0ZW1LZXksXG4gICAgICAgICAgb3V0ZXJFbGVtZW50VHlwZSA9IF90aGlzJHByb3BzNC5vdXRlckVsZW1lbnRUeXBlLFxuICAgICAgICAgIG91dGVyVGFnTmFtZSA9IF90aGlzJHByb3BzNC5vdXRlclRhZ05hbWUsXG4gICAgICAgICAgcm93Q291bnQgPSBfdGhpcyRwcm9wczQucm93Q291bnQsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczQuc3R5bGUsXG4gICAgICAgICAgdXNlSXNTY3JvbGxpbmcgPSBfdGhpcyRwcm9wczQudXNlSXNTY3JvbGxpbmcsXG4gICAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wczQud2lkdGg7XG4gICAgICB2YXIgaXNTY3JvbGxpbmcgPSB0aGlzLnN0YXRlLmlzU2Nyb2xsaW5nO1xuXG4gICAgICB2YXIgX3RoaXMkX2dldEhvcml6b250YWxSID0gdGhpcy5fZ2V0SG9yaXpvbnRhbFJhbmdlVG9SZW5kZXIoKSxcbiAgICAgICAgICBjb2x1bW5TdGFydEluZGV4ID0gX3RoaXMkX2dldEhvcml6b250YWxSWzBdLFxuICAgICAgICAgIGNvbHVtblN0b3BJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUlsxXTtcblxuICAgICAgdmFyIF90aGlzJF9nZXRWZXJ0aWNhbFJhbiA9IHRoaXMuX2dldFZlcnRpY2FsUmFuZ2VUb1JlbmRlcigpLFxuICAgICAgICAgIHJvd1N0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW5bMF0sXG4gICAgICAgICAgcm93U3RvcEluZGV4ID0gX3RoaXMkX2dldFZlcnRpY2FsUmFuWzFdO1xuXG4gICAgICB2YXIgaXRlbXMgPSBbXTtcblxuICAgICAgaWYgKGNvbHVtbkNvdW50ID4gMCAmJiByb3dDb3VudCkge1xuICAgICAgICBmb3IgKHZhciBfcm93SW5kZXggPSByb3dTdGFydEluZGV4OyBfcm93SW5kZXggPD0gcm93U3RvcEluZGV4OyBfcm93SW5kZXgrKykge1xuICAgICAgICAgIGZvciAodmFyIF9jb2x1bW5JbmRleCA9IGNvbHVtblN0YXJ0SW5kZXg7IF9jb2x1bW5JbmRleCA8PSBjb2x1bW5TdG9wSW5kZXg7IF9jb2x1bW5JbmRleCsrKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGNyZWF0ZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IF9jb2x1bW5JbmRleCxcbiAgICAgICAgICAgICAgZGF0YTogaXRlbURhdGEsXG4gICAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB1c2VJc1Njcm9sbGluZyA/IGlzU2Nyb2xsaW5nIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBrZXk6IGl0ZW1LZXkoe1xuICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBfY29sdW1uSW5kZXgsXG4gICAgICAgICAgICAgICAgZGF0YTogaXRlbURhdGEsXG4gICAgICAgICAgICAgICAgcm93SW5kZXg6IF9yb3dJbmRleFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgcm93SW5kZXg6IF9yb3dJbmRleCxcbiAgICAgICAgICAgICAgc3R5bGU6IHRoaXMuX2dldEl0ZW1TdHlsZShfcm93SW5kZXgsIF9jb2x1bW5JbmRleClcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUmVhZCB0aGlzIHZhbHVlIEFGVEVSIGl0ZW1zIGhhdmUgYmVlbiBjcmVhdGVkLFxuICAgICAgLy8gU28gdGhlaXIgYWN0dWFsIHNpemVzIChpZiB2YXJpYWJsZSkgYXJlIHRha2VuIGludG8gY29uc2lkZXJhdGlvbi5cblxuXG4gICAgICB2YXIgZXN0aW1hdGVkVG90YWxIZWlnaHQgPSBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCh0aGlzLnByb3BzLCB0aGlzLl9pbnN0YW5jZVByb3BzKTtcbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbFdpZHRoID0gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCh0aGlzLnByb3BzLCB0aGlzLl9pbnN0YW5jZVByb3BzKTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KG91dGVyRWxlbWVudFR5cGUgfHwgb3V0ZXJUYWdOYW1lIHx8ICdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBvblNjcm9sbDogdGhpcy5fb25TY3JvbGwsXG4gICAgICAgIHJlZjogdGhpcy5fb3V0ZXJSZWZTZXR0ZXIsXG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgfSwgc3R5bGUpXG4gICAgICB9LCBjcmVhdGVFbGVtZW50KGlubmVyRWxlbWVudFR5cGUgfHwgaW5uZXJUYWdOYW1lIHx8ICdkaXYnLCB7XG4gICAgICAgIGNoaWxkcmVuOiBpdGVtcyxcbiAgICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBoZWlnaHQ6IGVzdGltYXRlZFRvdGFsSGVpZ2h0LFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6IGlzU2Nyb2xsaW5nID8gJ25vbmUnIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHdpZHRoOiBlc3RpbWF0ZWRUb3RhbFdpZHRoXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jYWxsUHJvcHNDYWxsYmFja3MgPSBmdW5jdGlvbiBfY2FsbFByb3BzQ2FsbGJhY2tzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29sdW1uQ291bnQgPSBfdGhpcyRwcm9wczUuY29sdW1uQ291bnQsXG4gICAgICAgICAgb25JdGVtc1JlbmRlcmVkID0gX3RoaXMkcHJvcHM1Lm9uSXRlbXNSZW5kZXJlZCxcbiAgICAgICAgICBvblNjcm9sbCA9IF90aGlzJHByb3BzNS5vblNjcm9sbCxcbiAgICAgICAgICByb3dDb3VudCA9IF90aGlzJHByb3BzNS5yb3dDb3VudDtcblxuICAgICAgaWYgKHR5cGVvZiBvbkl0ZW1zUmVuZGVyZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKGNvbHVtbkNvdW50ID4gMCAmJiByb3dDb3VudCA+IDApIHtcbiAgICAgICAgICB2YXIgX3RoaXMkX2dldEhvcml6b250YWxSMiA9IHRoaXMuX2dldEhvcml6b250YWxSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgICAgIF9vdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0SG9yaXpvbnRhbFIyWzBdLFxuICAgICAgICAgICAgICBfb3ZlcnNjYW5Db2x1bW5TdG9wSW5kZXggPSBfdGhpcyRfZ2V0SG9yaXpvbnRhbFIyWzFdLFxuICAgICAgICAgICAgICBfdmlzaWJsZUNvbHVtblN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0SG9yaXpvbnRhbFIyWzJdLFxuICAgICAgICAgICAgICBfdmlzaWJsZUNvbHVtblN0b3BJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUjJbM107XG5cbiAgICAgICAgICB2YXIgX3RoaXMkX2dldFZlcnRpY2FsUmFuMiA9IHRoaXMuX2dldFZlcnRpY2FsUmFuZ2VUb1JlbmRlcigpLFxuICAgICAgICAgICAgICBfb3ZlcnNjYW5Sb3dTdGFydEluZGV4ID0gX3RoaXMkX2dldFZlcnRpY2FsUmFuMlswXSxcbiAgICAgICAgICAgICAgX292ZXJzY2FuUm93U3RvcEluZGV4ID0gX3RoaXMkX2dldFZlcnRpY2FsUmFuMlsxXSxcbiAgICAgICAgICAgICAgX3Zpc2libGVSb3dTdGFydEluZGV4ID0gX3RoaXMkX2dldFZlcnRpY2FsUmFuMlsyXSxcbiAgICAgICAgICAgICAgX3Zpc2libGVSb3dTdG9wSW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW4yWzNdO1xuXG4gICAgICAgICAgdGhpcy5fY2FsbE9uSXRlbXNSZW5kZXJlZChfb3ZlcnNjYW5Db2x1bW5TdGFydEluZGV4LCBfb3ZlcnNjYW5Db2x1bW5TdG9wSW5kZXgsIF9vdmVyc2NhblJvd1N0YXJ0SW5kZXgsIF9vdmVyc2NhblJvd1N0b3BJbmRleCwgX3Zpc2libGVDb2x1bW5TdGFydEluZGV4LCBfdmlzaWJsZUNvbHVtblN0b3BJbmRleCwgX3Zpc2libGVSb3dTdGFydEluZGV4LCBfdmlzaWJsZVJvd1N0b3BJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvblNjcm9sbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIF9ob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGUzLmhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgICBfc2Nyb2xsTGVmdCA9IF90aGlzJHN0YXRlMy5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgX3Njcm9sbFRvcCA9IF90aGlzJHN0YXRlMy5zY3JvbGxUb3AsXG4gICAgICAgICAgICBfc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkID0gX3RoaXMkc3RhdGUzLnNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCxcbiAgICAgICAgICAgIF92ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiA9IF90aGlzJHN0YXRlMy52ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbjtcblxuICAgICAgICB0aGlzLl9jYWxsT25TY3JvbGwoX3Njcm9sbExlZnQsIF9zY3JvbGxUb3AsIF9ob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uLCBfdmVydGljYWxTY3JvbGxEaXJlY3Rpb24sIF9zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQpO1xuICAgICAgfVxuICAgIH07IC8vIExhemlseSBjcmVhdGUgYW5kIGNhY2hlIGl0ZW0gc3R5bGVzIHdoaWxlIHNjcm9sbGluZyxcbiAgICAvLyBTbyB0aGF0IHB1cmUgY29tcG9uZW50IHNDVSB3aWxsIHByZXZlbnQgcmUtcmVuZGVycy5cbiAgICAvLyBXZSBtYWludGFpbiB0aGlzIGNhY2hlLCBhbmQgcGFzcyBhIHN0eWxlIHByb3AgcmF0aGVyIHRoYW4gaW5kZXgsXG4gICAgLy8gU28gdGhhdCBMaXN0IGNhbiBjbGVhciBjYWNoZWQgc3R5bGVzIGFuZCBmb3JjZSBpdGVtIHJlLXJlbmRlciBpZiBuZWNlc3NhcnkuXG5cblxuICAgIF9wcm90by5fZ2V0SG9yaXpvbnRhbFJhbmdlVG9SZW5kZXIgPSBmdW5jdGlvbiBfZ2V0SG9yaXpvbnRhbFJhbmdlVG9SZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzNi5jb2x1bW5Db3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvbHVtbkNvdW50ID0gX3RoaXMkcHJvcHM2Lm92ZXJzY2FuQ29sdW1uQ291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Db2x1bW5zQ291bnQgPSBfdGhpcyRwcm9wczYub3ZlcnNjYW5Db2x1bW5zQ291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Db3VudCA9IF90aGlzJHByb3BzNi5vdmVyc2NhbkNvdW50LFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHM2LnJvd0NvdW50O1xuICAgICAgdmFyIF90aGlzJHN0YXRlNCA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiA9IF90aGlzJHN0YXRlNC5ob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgIGlzU2Nyb2xsaW5nID0gX3RoaXMkc3RhdGU0LmlzU2Nyb2xsaW5nLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBfdGhpcyRzdGF0ZTQuc2Nyb2xsTGVmdDtcbiAgICAgIHZhciBvdmVyc2NhbkNvdW50UmVzb2x2ZWQgPSBvdmVyc2NhbkNvbHVtbkNvdW50IHx8IG92ZXJzY2FuQ29sdW1uc0NvdW50IHx8IG92ZXJzY2FuQ291bnQgfHwgMTtcblxuICAgICAgaWYgKGNvbHVtbkNvdW50ID09PSAwIHx8IHJvd0NvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydEluZGV4ID0gZ2V0Q29sdW1uU3RhcnRJbmRleEZvck9mZnNldCh0aGlzLnByb3BzLCBzY3JvbGxMZWZ0LCB0aGlzLl9pbnN0YW5jZVByb3BzKTtcbiAgICAgIHZhciBzdG9wSW5kZXggPSBnZXRDb2x1bW5TdG9wSW5kZXhGb3JTdGFydEluZGV4KHRoaXMucHJvcHMsIHN0YXJ0SW5kZXgsIHNjcm9sbExlZnQsIHRoaXMuX2luc3RhbmNlUHJvcHMpOyAvLyBPdmVyc2NhbiBieSBvbmUgaXRlbSBpbiBlYWNoIGRpcmVjdGlvbiBzbyB0aGF0IHRhYi9mb2N1cyB3b3Jrcy5cbiAgICAgIC8vIElmIHRoZXJlIGlzbid0IGF0IGxlYXN0IG9uZSBleHRyYSBpdGVtLCB0YWIgbG9vcHMgYmFjayBhcm91bmQuXG5cbiAgICAgIHZhciBvdmVyc2NhbkJhY2t3YXJkID0gIWlzU2Nyb2xsaW5nIHx8IGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gPT09ICdiYWNrd2FyZCcgPyBNYXRoLm1heCgxLCBvdmVyc2NhbkNvdW50UmVzb2x2ZWQpIDogMTtcbiAgICAgIHZhciBvdmVyc2NhbkZvcndhcmQgPSAhaXNTY3JvbGxpbmcgfHwgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnID8gTWF0aC5tYXgoMSwgb3ZlcnNjYW5Db3VudFJlc29sdmVkKSA6IDE7XG4gICAgICByZXR1cm4gW01hdGgubWF4KDAsIHN0YXJ0SW5kZXggLSBvdmVyc2NhbkJhY2t3YXJkKSwgTWF0aC5tYXgoMCwgTWF0aC5taW4oY29sdW1uQ291bnQgLSAxLCBzdG9wSW5kZXggKyBvdmVyc2NhbkZvcndhcmQpKSwgc3RhcnRJbmRleCwgc3RvcEluZGV4XTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRWZXJ0aWNhbFJhbmdlVG9SZW5kZXIgPSBmdW5jdGlvbiBfZ2V0VmVydGljYWxSYW5nZVRvUmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29sdW1uQ291bnQgPSBfdGhpcyRwcm9wczcuY29sdW1uQ291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Db3VudCA9IF90aGlzJHByb3BzNy5vdmVyc2NhbkNvdW50LFxuICAgICAgICAgIG92ZXJzY2FuUm93Q291bnQgPSBfdGhpcyRwcm9wczcub3ZlcnNjYW5Sb3dDb3VudCxcbiAgICAgICAgICBvdmVyc2NhblJvd3NDb3VudCA9IF90aGlzJHByb3BzNy5vdmVyc2NhblJvd3NDb3VudCxcbiAgICAgICAgICByb3dDb3VudCA9IF90aGlzJHByb3BzNy5yb3dDb3VudDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGlzU2Nyb2xsaW5nID0gX3RoaXMkc3RhdGU1LmlzU2Nyb2xsaW5nLFxuICAgICAgICAgIHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGU1LnZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IF90aGlzJHN0YXRlNS5zY3JvbGxUb3A7XG4gICAgICB2YXIgb3ZlcnNjYW5Db3VudFJlc29sdmVkID0gb3ZlcnNjYW5Sb3dDb3VudCB8fCBvdmVyc2NhblJvd3NDb3VudCB8fCBvdmVyc2NhbkNvdW50IHx8IDE7XG5cbiAgICAgIGlmIChjb2x1bW5Db3VudCA9PT0gMCB8fCByb3dDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRJbmRleCA9IGdldFJvd1N0YXJ0SW5kZXhGb3JPZmZzZXQodGhpcy5wcm9wcywgc2Nyb2xsVG9wLCB0aGlzLl9pbnN0YW5jZVByb3BzKTtcbiAgICAgIHZhciBzdG9wSW5kZXggPSBnZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4KHRoaXMucHJvcHMsIHN0YXJ0SW5kZXgsIHNjcm9sbFRvcCwgdGhpcy5faW5zdGFuY2VQcm9wcyk7IC8vIE92ZXJzY2FuIGJ5IG9uZSBpdGVtIGluIGVhY2ggZGlyZWN0aW9uIHNvIHRoYXQgdGFiL2ZvY3VzIHdvcmtzLlxuICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYXQgbGVhc3Qgb25lIGV4dHJhIGl0ZW0sIHRhYiBsb29wcyBiYWNrIGFyb3VuZC5cblxuICAgICAgdmFyIG92ZXJzY2FuQmFja3dhcmQgPSAhaXNTY3JvbGxpbmcgfHwgdmVydGljYWxTY3JvbGxEaXJlY3Rpb24gPT09ICdiYWNrd2FyZCcgPyBNYXRoLm1heCgxLCBvdmVyc2NhbkNvdW50UmVzb2x2ZWQpIDogMTtcbiAgICAgIHZhciBvdmVyc2NhbkZvcndhcmQgPSAhaXNTY3JvbGxpbmcgfHwgdmVydGljYWxTY3JvbGxEaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IE1hdGgubWF4KDEsIG92ZXJzY2FuQ291bnRSZXNvbHZlZCkgOiAxO1xuICAgICAgcmV0dXJuIFtNYXRoLm1heCgwLCBzdGFydEluZGV4IC0gb3ZlcnNjYW5CYWNrd2FyZCksIE1hdGgubWF4KDAsIE1hdGgubWluKHJvd0NvdW50IC0gMSwgc3RvcEluZGV4ICsgb3ZlcnNjYW5Gb3J3YXJkKSksIHN0YXJ0SW5kZXgsIHN0b3BJbmRleF07XG4gICAgfTtcblxuICAgIHJldHVybiBHcmlkO1xuICB9KFB1cmVDb21wb25lbnQpLCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICAgIGRpcmVjdGlvbjogJ2x0cicsXG4gICAgaXRlbURhdGE6IHVuZGVmaW5lZCxcbiAgICB1c2VJc1Njcm9sbGluZzogZmFsc2VcbiAgfSwgX3RlbXA7XG59XG5cbnZhciB2YWxpZGF0ZVNoYXJlZFByb3BzID0gZnVuY3Rpb24gdmFsaWRhdGVTaGFyZWRQcm9wcyhfcmVmNSwgX3JlZjYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjUuY2hpbGRyZW4sXG4gICAgICBkaXJlY3Rpb24gPSBfcmVmNS5kaXJlY3Rpb24sXG4gICAgICBoZWlnaHQgPSBfcmVmNS5oZWlnaHQsXG4gICAgICBpbm5lclRhZ05hbWUgPSBfcmVmNS5pbm5lclRhZ05hbWUsXG4gICAgICBvdXRlclRhZ05hbWUgPSBfcmVmNS5vdXRlclRhZ05hbWUsXG4gICAgICBvdmVyc2NhbkNvbHVtbnNDb3VudCA9IF9yZWY1Lm92ZXJzY2FuQ29sdW1uc0NvdW50LFxuICAgICAgb3ZlcnNjYW5Db3VudCA9IF9yZWY1Lm92ZXJzY2FuQ291bnQsXG4gICAgICBvdmVyc2NhblJvd3NDb3VudCA9IF9yZWY1Lm92ZXJzY2FuUm93c0NvdW50LFxuICAgICAgd2lkdGggPSBfcmVmNS53aWR0aDtcbiAgdmFyIGluc3RhbmNlID0gX3JlZjYuaW5zdGFuY2U7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIG92ZXJzY2FuQ291bnQgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoZGV2V2FybmluZ3NPdmVyc2NhbkNvdW50ICYmICFkZXZXYXJuaW5nc092ZXJzY2FuQ291bnQuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICBkZXZXYXJuaW5nc092ZXJzY2FuQ291bnQuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgb3ZlcnNjYW5Db3VudCBwcm9wIGhhcyBiZWVuIGRlcHJlY2F0ZWQuICcgKyAnUGxlYXNlIHVzZSB0aGUgb3ZlcnNjYW5Db2x1bW5Db3VudCBhbmQgb3ZlcnNjYW5Sb3dDb3VudCBwcm9wcyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3ZlcnNjYW5Db2x1bW5zQ291bnQgPT09ICdudW1iZXInIHx8IHR5cGVvZiBvdmVyc2NhblJvd3NDb3VudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChkZXZXYXJuaW5nc092ZXJzY2FuUm93c0NvbHVtbnNDb3VudCAmJiAhZGV2V2FybmluZ3NPdmVyc2NhblJvd3NDb2x1bW5zQ291bnQuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICBkZXZXYXJuaW5nc092ZXJzY2FuUm93c0NvbHVtbnNDb3VudC5hZGQoaW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBvdmVyc2NhbkNvbHVtbnNDb3VudCBhbmQgb3ZlcnNjYW5Sb3dzQ291bnQgcHJvcHMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuICcgKyAnUGxlYXNlIHVzZSB0aGUgb3ZlcnNjYW5Db2x1bW5Db3VudCBhbmQgb3ZlcnNjYW5Sb3dDb3VudCBwcm9wcyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbm5lclRhZ05hbWUgIT0gbnVsbCB8fCBvdXRlclRhZ05hbWUgIT0gbnVsbCkge1xuICAgICAgaWYgKGRldldhcm5pbmdzVGFnTmFtZSAmJiAhZGV2V2FybmluZ3NUYWdOYW1lLmhhcyhpbnN0YW5jZSkpIHtcbiAgICAgICAgZGV2V2FybmluZ3NUYWdOYW1lLmFkZChpbnN0YW5jZSk7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIGlubmVyVGFnTmFtZSBhbmQgb3V0ZXJUYWdOYW1lIHByb3BzIGhhdmUgYmVlbiBkZXByZWNhdGVkLiAnICsgJ1BsZWFzZSB1c2UgdGhlIGlubmVyRWxlbWVudFR5cGUgYW5kIG91dGVyRWxlbWVudFR5cGUgcHJvcHMgaW5zdGVhZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJjaGlsZHJlblwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIFJlYWN0IGNvbXBvbmVudC4gJyArIChcIlxcXCJcIiArIChjaGlsZHJlbiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBjaGlsZHJlbikgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdsdHInOlxuICAgICAgY2FzZSAncnRsJzpcbiAgICAgICAgLy8gVmFsaWQgdmFsdWVzXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImRpcmVjdGlvblwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBlaXRoZXIgXCJsdHJcIiBvciBcInJ0bFwiLiAnICsgKFwiXFxcIlwiICsgZGlyZWN0aW9uICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJ3aWR0aFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ0dyaWRzIG11c3Qgc3BlY2lmeSBhIG51bWJlciBmb3Igd2lkdGguICcgKyAoXCJcXFwiXCIgKyAod2lkdGggPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2Ygd2lkdGgpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGhlaWdodCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiaGVpZ2h0XCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnR3JpZHMgbXVzdCBzcGVjaWZ5IGEgbnVtYmVyIGZvciBoZWlnaHQuICcgKyAoXCJcXFwiXCIgKyAoaGVpZ2h0ID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGhlaWdodCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIERFRkFVTFRfRVNUSU1BVEVEX0lURU1fU0laRSA9IDUwO1xuXG52YXIgZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQgPSBmdW5jdGlvbiBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodChfcmVmLCBfcmVmMikge1xuICB2YXIgcm93Q291bnQgPSBfcmVmLnJvd0NvdW50O1xuICB2YXIgcm93TWV0YWRhdGFNYXAgPSBfcmVmMi5yb3dNZXRhZGF0YU1hcCxcbiAgICAgIGVzdGltYXRlZFJvd0hlaWdodCA9IF9yZWYyLmVzdGltYXRlZFJvd0hlaWdodCxcbiAgICAgIGxhc3RNZWFzdXJlZFJvd0luZGV4ID0gX3JlZjIubGFzdE1lYXN1cmVkUm93SW5kZXg7XG4gIHZhciB0b3RhbFNpemVPZk1lYXN1cmVkUm93cyA9IDA7IC8vIEVkZ2UgY2FzZSBjaGVjayBmb3Igd2hlbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGRlY3JlYXNlcyB3aGlsZSBhIHNjcm9sbCBpcyBpbiBwcm9ncmVzcy5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2J2YXVnaG4vcmVhY3Qtd2luZG93L3B1bGwvMTM4XG5cbiAgaWYgKGxhc3RNZWFzdXJlZFJvd0luZGV4ID49IHJvd0NvdW50KSB7XG4gICAgbGFzdE1lYXN1cmVkUm93SW5kZXggPSByb3dDb3VudCAtIDE7XG4gIH1cblxuICBpZiAobGFzdE1lYXN1cmVkUm93SW5kZXggPj0gMCkge1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSByb3dNZXRhZGF0YU1hcFtsYXN0TWVhc3VyZWRSb3dJbmRleF07XG4gICAgdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgPSBpdGVtTWV0YWRhdGEub2Zmc2V0ICsgaXRlbU1ldGFkYXRhLnNpemU7XG4gIH1cblxuICB2YXIgbnVtVW5tZWFzdXJlZEl0ZW1zID0gcm93Q291bnQgLSBsYXN0TWVhc3VyZWRSb3dJbmRleCAtIDE7XG4gIHZhciB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcyA9IG51bVVubWVhc3VyZWRJdGVtcyAqIGVzdGltYXRlZFJvd0hlaWdodDtcbiAgcmV0dXJuIHRvdGFsU2l6ZU9mTWVhc3VyZWRSb3dzICsgdG90YWxTaXplT2ZVbm1lYXN1cmVkSXRlbXM7XG59O1xuXG52YXIgZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCA9IGZ1bmN0aW9uIGdldEVzdGltYXRlZFRvdGFsV2lkdGgoX3JlZjMsIF9yZWY0KSB7XG4gIHZhciBjb2x1bW5Db3VudCA9IF9yZWYzLmNvbHVtbkNvdW50O1xuICB2YXIgY29sdW1uTWV0YWRhdGFNYXAgPSBfcmVmNC5jb2x1bW5NZXRhZGF0YU1hcCxcbiAgICAgIGVzdGltYXRlZENvbHVtbldpZHRoID0gX3JlZjQuZXN0aW1hdGVkQ29sdW1uV2lkdGgsXG4gICAgICBsYXN0TWVhc3VyZWRDb2x1bW5JbmRleCA9IF9yZWY0Lmxhc3RNZWFzdXJlZENvbHVtbkluZGV4O1xuICB2YXIgdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgPSAwOyAvLyBFZGdlIGNhc2UgY2hlY2sgZm9yIHdoZW4gdGhlIG51bWJlciBvZiBpdGVtcyBkZWNyZWFzZXMgd2hpbGUgYSBzY3JvbGwgaXMgaW4gcHJvZ3Jlc3MuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9idmF1Z2huL3JlYWN0LXdpbmRvdy9wdWxsLzEzOFxuXG4gIGlmIChsYXN0TWVhc3VyZWRDb2x1bW5JbmRleCA+PSBjb2x1bW5Db3VudCkge1xuICAgIGxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID0gY29sdW1uQ291bnQgLSAxO1xuICB9XG5cbiAgaWYgKGxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID49IDApIHtcbiAgICB2YXIgaXRlbU1ldGFkYXRhID0gY29sdW1uTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkQ29sdW1uSW5kZXhdO1xuICAgIHRvdGFsU2l6ZU9mTWVhc3VyZWRSb3dzID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICB9XG5cbiAgdmFyIG51bVVubWVhc3VyZWRJdGVtcyA9IGNvbHVtbkNvdW50IC0gbGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggLSAxO1xuICB2YXIgdG90YWxTaXplT2ZVbm1lYXN1cmVkSXRlbXMgPSBudW1Vbm1lYXN1cmVkSXRlbXMgKiBlc3RpbWF0ZWRDb2x1bW5XaWR0aDtcbiAgcmV0dXJuIHRvdGFsU2l6ZU9mTWVhc3VyZWRSb3dzICsgdG90YWxTaXplT2ZVbm1lYXN1cmVkSXRlbXM7XG59O1xuXG52YXIgZ2V0SXRlbU1ldGFkYXRhID0gZnVuY3Rpb24gZ2V0SXRlbU1ldGFkYXRhKGl0ZW1UeXBlLCBwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgdmFyIGl0ZW1NZXRhZGF0YU1hcCwgaXRlbVNpemUsIGxhc3RNZWFzdXJlZEluZGV4O1xuXG4gIGlmIChpdGVtVHlwZSA9PT0gJ2NvbHVtbicpIHtcbiAgICBpdGVtTWV0YWRhdGFNYXAgPSBpbnN0YW5jZVByb3BzLmNvbHVtbk1ldGFkYXRhTWFwO1xuICAgIGl0ZW1TaXplID0gcHJvcHMuY29sdW1uV2lkdGg7XG4gICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4O1xuICB9IGVsc2Uge1xuICAgIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMucm93TWV0YWRhdGFNYXA7XG4gICAgaXRlbVNpemUgPSBwcm9wcy5yb3dIZWlnaHQ7XG4gICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZFJvd0luZGV4O1xuICB9XG5cbiAgaWYgKGluZGV4ID4gbGFzdE1lYXN1cmVkSW5kZXgpIHtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcblxuICAgIGlmIChsYXN0TWVhc3VyZWRJbmRleCA+PSAwKSB7XG4gICAgICB2YXIgaXRlbU1ldGFkYXRhID0gaXRlbU1ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZEluZGV4XTtcbiAgICAgIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gbGFzdE1lYXN1cmVkSW5kZXggKyAxOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgIHZhciBzaXplID0gaXRlbVNpemUoaSk7XG4gICAgICBpdGVtTWV0YWRhdGFNYXBbaV0gPSB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9O1xuICAgICAgb2Zmc2V0ICs9IHNpemU7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1UeXBlID09PSAnY29sdW1uJykge1xuICAgICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRDb2x1bW5JbmRleCA9IGluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZFJvd0luZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGl0ZW1NZXRhZGF0YU1hcFtpbmRleF07XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtID0gZnVuY3Rpb24gZmluZE5lYXJlc3RJdGVtKGl0ZW1UeXBlLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgb2Zmc2V0KSB7XG4gIHZhciBpdGVtTWV0YWRhdGFNYXAsIGxhc3RNZWFzdXJlZEluZGV4O1xuXG4gIGlmIChpdGVtVHlwZSA9PT0gJ2NvbHVtbicpIHtcbiAgICBpdGVtTWV0YWRhdGFNYXAgPSBpbnN0YW5jZVByb3BzLmNvbHVtbk1ldGFkYXRhTWFwO1xuICAgIGxhc3RNZWFzdXJlZEluZGV4ID0gaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRDb2x1bW5JbmRleDtcbiAgfSBlbHNlIHtcbiAgICBpdGVtTWV0YWRhdGFNYXAgPSBpbnN0YW5jZVByb3BzLnJvd01ldGFkYXRhTWFwO1xuICAgIGxhc3RNZWFzdXJlZEluZGV4ID0gaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRSb3dJbmRleDtcbiAgfVxuXG4gIHZhciBsYXN0TWVhc3VyZWRJdGVtT2Zmc2V0ID0gbGFzdE1lYXN1cmVkSW5kZXggPiAwID8gaXRlbU1ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZEluZGV4XS5vZmZzZXQgOiAwO1xuXG4gIGlmIChsYXN0TWVhc3VyZWRJdGVtT2Zmc2V0ID49IG9mZnNldCkge1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgbWVhc3VyZWQgaXRlbXMgd2l0aGluIHRoaXMgcmFuZ2UganVzdCB1c2UgYSBiaW5hcnkgc2VhcmNoIGFzIGl0J3MgZmFzdGVyLlxuICAgIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2goaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBsYXN0TWVhc3VyZWRJbmRleCwgMCwgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB3ZSBoYXZlbid0IHlldCBtZWFzdXJlZCB0aGlzIGhpZ2gsIGZhbGxiYWNrIHRvIGFuIGV4cG9uZW50aWFsIHNlYXJjaCB3aXRoIGFuIGlubmVyIGJpbmFyeSBzZWFyY2guXG4gICAgLy8gVGhlIGV4cG9uZW50aWFsIHNlYXJjaCBhdm9pZHMgcHJlLWNvbXB1dGluZyBzaXplcyBmb3IgdGhlIGZ1bGwgc2V0IG9mIGl0ZW1zIGFzIGEgYmluYXJ5IHNlYXJjaCB3b3VsZC5cbiAgICAvLyBUaGUgb3ZlcmFsbCBjb21wbGV4aXR5IGZvciB0aGlzIGFwcHJvYWNoIGlzIE8obG9nIG4pLlxuICAgIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1FeHBvbmVudGlhbFNlYXJjaChpdGVtVHlwZSwgcHJvcHMsIGluc3RhbmNlUHJvcHMsIE1hdGgubWF4KDAsIGxhc3RNZWFzdXJlZEluZGV4KSwgb2Zmc2V0KTtcbiAgfVxufTtcblxudmFyIGZpbmROZWFyZXN0SXRlbUJpbmFyeVNlYXJjaCA9IGZ1bmN0aW9uIGZpbmROZWFyZXN0SXRlbUJpbmFyeVNlYXJjaChpdGVtVHlwZSwgcHJvcHMsIGluc3RhbmNlUHJvcHMsIGhpZ2gsIGxvdywgb2Zmc2V0KSB7XG4gIHdoaWxlIChsb3cgPD0gaGlnaCkge1xuICAgIHZhciBtaWRkbGUgPSBsb3cgKyBNYXRoLmZsb29yKChoaWdoIC0gbG93KSAvIDIpO1xuICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gZ2V0SXRlbU1ldGFkYXRhKGl0ZW1UeXBlLCBwcm9wcywgbWlkZGxlLCBpbnN0YW5jZVByb3BzKS5vZmZzZXQ7XG5cbiAgICBpZiAoY3VycmVudE9mZnNldCA9PT0gb2Zmc2V0KSB7XG4gICAgICByZXR1cm4gbWlkZGxlO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudE9mZnNldCA8IG9mZnNldCkge1xuICAgICAgbG93ID0gbWlkZGxlICsgMTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRPZmZzZXQgPiBvZmZzZXQpIHtcbiAgICAgIGhpZ2ggPSBtaWRkbGUgLSAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsb3cgPiAwKSB7XG4gICAgcmV0dXJuIGxvdyAtIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbnZhciBmaW5kTmVhcmVzdEl0ZW1FeHBvbmVudGlhbFNlYXJjaCA9IGZ1bmN0aW9uIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoKGl0ZW1UeXBlLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgaW5kZXgsIG9mZnNldCkge1xuICB2YXIgaXRlbUNvdW50ID0gaXRlbVR5cGUgPT09ICdjb2x1bW4nID8gcHJvcHMuY29sdW1uQ291bnQgOiBwcm9wcy5yb3dDb3VudDtcbiAgdmFyIGludGVydmFsID0gMTtcblxuICB3aGlsZSAoaW5kZXggPCBpdGVtQ291bnQgJiYgZ2V0SXRlbU1ldGFkYXRhKGl0ZW1UeXBlLCBwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpLm9mZnNldCA8IG9mZnNldCkge1xuICAgIGluZGV4ICs9IGludGVydmFsO1xuICAgIGludGVydmFsICo9IDI7XG4gIH1cblxuICByZXR1cm4gZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoKGl0ZW1UeXBlLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgTWF0aC5taW4oaW5kZXgsIGl0ZW1Db3VudCAtIDEpLCBNYXRoLmZsb29yKGluZGV4IC8gMiksIG9mZnNldCk7XG59O1xuXG52YXIgZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQgPSBmdW5jdGlvbiBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudChpdGVtVHlwZSwgcHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKSB7XG4gIHZhciBzaXplID0gaXRlbVR5cGUgPT09ICdjb2x1bW4nID8gcHJvcHMud2lkdGggOiBwcm9wcy5oZWlnaHQ7XG4gIHZhciBpdGVtTWV0YWRhdGEgPSBnZXRJdGVtTWV0YWRhdGEoaXRlbVR5cGUsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcyk7IC8vIEdldCBlc3RpbWF0ZWQgdG90YWwgc2l6ZSBhZnRlciBJdGVtTWV0YWRhdGEgaXMgY29tcHV0ZWQsXG4gIC8vIFRvIGVuc3VyZSBpdCByZWZsZWN0cyBhY3R1YWwgbWVhc3VyZW1lbnRzIGluc3RlYWQgb2YganVzdCBlc3RpbWF0ZXMuXG5cbiAgdmFyIGVzdGltYXRlZFRvdGFsU2l6ZSA9IGl0ZW1UeXBlID09PSAnY29sdW1uJyA/IGdldEVzdGltYXRlZFRvdGFsV2lkdGgocHJvcHMsIGluc3RhbmNlUHJvcHMpIDogZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQocHJvcHMsIGluc3RhbmNlUHJvcHMpO1xuICB2YXIgbWF4T2Zmc2V0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZXN0aW1hdGVkVG90YWxTaXplIC0gc2l6ZSwgaXRlbU1ldGFkYXRhLm9mZnNldCkpO1xuICB2YXIgbWluT2Zmc2V0ID0gTWF0aC5tYXgoMCwgaXRlbU1ldGFkYXRhLm9mZnNldCAtIHNpemUgKyBzY3JvbGxiYXJTaXplICsgaXRlbU1ldGFkYXRhLnNpemUpO1xuXG4gIGlmIChhbGlnbiA9PT0gJ3NtYXJ0Jykge1xuICAgIGlmIChzY3JvbGxPZmZzZXQgPj0gbWluT2Zmc2V0IC0gc2l6ZSAmJiBzY3JvbGxPZmZzZXQgPD0gbWF4T2Zmc2V0ICsgc2l6ZSkge1xuICAgICAgYWxpZ24gPSAnYXV0byc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsaWduID0gJ2NlbnRlcic7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChhbGlnbikge1xuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG5cbiAgICBjYXNlICdlbmQnOlxuICAgICAgcmV0dXJuIG1pbk9mZnNldDtcblxuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChtaW5PZmZzZXQgKyAobWF4T2Zmc2V0IC0gbWluT2Zmc2V0KSAvIDIpO1xuXG4gICAgY2FzZSAnYXV0byc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChzY3JvbGxPZmZzZXQgPj0gbWluT2Zmc2V0ICYmIHNjcm9sbE9mZnNldCA8PSBtYXhPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbE9mZnNldDtcbiAgICAgIH0gZWxzZSBpZiAobWluT2Zmc2V0ID4gbWF4T2Zmc2V0KSB7XG4gICAgICAgIC8vIEJlY2F1c2Ugd2Ugb25seSB0YWtlIGludG8gYWNjb3VudCB0aGUgc2Nyb2xsYmFyIHNpemUgd2hlbiBjYWxjdWxhdGluZyBtaW5PZmZzZXRcbiAgICAgICAgLy8gdGhpcyB2YWx1ZSBjYW4gYmUgbGFyZ2VyIHRoYW4gbWF4T2Zmc2V0IHdoZW4gYXQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgfSBlbHNlIGlmIChzY3JvbGxPZmZzZXQgPCBtaW5PZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG4gICAgICB9XG5cbiAgfVxufTtcblxudmFyIFZhcmlhYmxlU2l6ZUdyaWQgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlR3JpZENvbXBvbmVudCh7XG4gIGdldENvbHVtbk9mZnNldDogZnVuY3Rpb24gZ2V0Q29sdW1uT2Zmc2V0KHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBnZXRJdGVtTWV0YWRhdGEoJ2NvbHVtbicsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0O1xuICB9LFxuICBnZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0OiBmdW5jdGlvbiBnZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0KHByb3BzLCBzY3JvbGxMZWZ0LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbSgnY29sdW1uJywgcHJvcHMsIGluc3RhbmNlUHJvcHMsIHNjcm9sbExlZnQpO1xuICB9LFxuICBnZXRDb2x1bW5TdG9wSW5kZXhGb3JTdGFydEluZGV4OiBmdW5jdGlvbiBnZXRDb2x1bW5TdG9wSW5kZXhGb3JTdGFydEluZGV4KHByb3BzLCBzdGFydEluZGV4LCBzY3JvbGxMZWZ0LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgdmFyIGNvbHVtbkNvdW50ID0gcHJvcHMuY29sdW1uQ291bnQsXG4gICAgICAgIHdpZHRoID0gcHJvcHMud2lkdGg7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YSgnY29sdW1uJywgcHJvcHMsIHN0YXJ0SW5kZXgsIGluc3RhbmNlUHJvcHMpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBzY3JvbGxMZWZ0ICsgd2lkdGg7XG4gICAgdmFyIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB2YXIgc3RvcEluZGV4ID0gc3RhcnRJbmRleDtcblxuICAgIHdoaWxlIChzdG9wSW5kZXggPCBjb2x1bW5Db3VudCAtIDEgJiYgb2Zmc2V0IDwgbWF4T2Zmc2V0KSB7XG4gICAgICBzdG9wSW5kZXgrKztcbiAgICAgIG9mZnNldCArPSBnZXRJdGVtTWV0YWRhdGEoJ2NvbHVtbicsIHByb3BzLCBzdG9wSW5kZXgsIGluc3RhbmNlUHJvcHMpLnNpemU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3BJbmRleDtcbiAgfSxcbiAgZ2V0Q29sdW1uV2lkdGg6IGZ1bmN0aW9uIGdldENvbHVtbldpZHRoKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBpbnN0YW5jZVByb3BzLmNvbHVtbk1ldGFkYXRhTWFwW2luZGV4XS5zaXplO1xuICB9LFxuICBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodDogZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQsXG4gIGdldEVzdGltYXRlZFRvdGFsV2lkdGg6IGdldEVzdGltYXRlZFRvdGFsV2lkdGgsXG4gIGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudDogZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9yQ29sdW1uQW5kQWxpZ25tZW50KHByb3BzLCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSkge1xuICAgIHJldHVybiBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudCgnY29sdW1uJywgcHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKTtcbiAgfSxcbiAgZ2V0T2Zmc2V0Rm9yUm93QW5kQWxpZ25tZW50OiBmdW5jdGlvbiBnZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQocHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KCdyb3cnLCBwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpO1xuICB9LFxuICBnZXRSb3dPZmZzZXQ6IGZ1bmN0aW9uIGdldFJvd09mZnNldChwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gZ2V0SXRlbU1ldGFkYXRhKCdyb3cnLCBwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpLm9mZnNldDtcbiAgfSxcbiAgZ2V0Um93SGVpZ2h0OiBmdW5jdGlvbiBnZXRSb3dIZWlnaHQocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlUHJvcHMucm93TWV0YWRhdGFNYXBbaW5kZXhdLnNpemU7XG4gIH0sXG4gIGdldFJvd1N0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldFJvd1N0YXJ0SW5kZXhGb3JPZmZzZXQocHJvcHMsIHNjcm9sbFRvcCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBmaW5kTmVhcmVzdEl0ZW0oJ3JvdycsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBzY3JvbGxUb3ApO1xuICB9LFxuICBnZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4OiBmdW5jdGlvbiBnZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4KHByb3BzLCBzdGFydEluZGV4LCBzY3JvbGxUb3AsIGluc3RhbmNlUHJvcHMpIHtcbiAgICB2YXIgcm93Q291bnQgPSBwcm9wcy5yb3dDb3VudCxcbiAgICAgICAgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBnZXRJdGVtTWV0YWRhdGEoJ3JvdycsIHByb3BzLCBzdGFydEluZGV4LCBpbnN0YW5jZVByb3BzKTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gc2Nyb2xsVG9wICsgaGVpZ2h0O1xuICAgIHZhciBvZmZzZXQgPSBpdGVtTWV0YWRhdGEub2Zmc2V0ICsgaXRlbU1ldGFkYXRhLnNpemU7XG4gICAgdmFyIHN0b3BJbmRleCA9IHN0YXJ0SW5kZXg7XG5cbiAgICB3aGlsZSAoc3RvcEluZGV4IDwgcm93Q291bnQgLSAxICYmIG9mZnNldCA8IG1heE9mZnNldCkge1xuICAgICAgc3RvcEluZGV4Kys7XG4gICAgICBvZmZzZXQgKz0gZ2V0SXRlbU1ldGFkYXRhKCdyb3cnLCBwcm9wcywgc3RvcEluZGV4LCBpbnN0YW5jZVByb3BzKS5zaXplO1xuICAgIH1cblxuICAgIHJldHVybiBzdG9wSW5kZXg7XG4gIH0sXG4gIGluaXRJbnN0YW5jZVByb3BzOiBmdW5jdGlvbiBpbml0SW5zdGFuY2VQcm9wcyhwcm9wcywgaW5zdGFuY2UpIHtcbiAgICB2YXIgX3JlZjUgPSBwcm9wcyxcbiAgICAgICAgZXN0aW1hdGVkQ29sdW1uV2lkdGggPSBfcmVmNS5lc3RpbWF0ZWRDb2x1bW5XaWR0aCxcbiAgICAgICAgZXN0aW1hdGVkUm93SGVpZ2h0ID0gX3JlZjUuZXN0aW1hdGVkUm93SGVpZ2h0O1xuICAgIHZhciBpbnN0YW5jZVByb3BzID0ge1xuICAgICAgY29sdW1uTWV0YWRhdGFNYXA6IHt9LFxuICAgICAgZXN0aW1hdGVkQ29sdW1uV2lkdGg6IGVzdGltYXRlZENvbHVtbldpZHRoIHx8IERFRkFVTFRfRVNUSU1BVEVEX0lURU1fU0laRSxcbiAgICAgIGVzdGltYXRlZFJvd0hlaWdodDogZXN0aW1hdGVkUm93SGVpZ2h0IHx8IERFRkFVTFRfRVNUSU1BVEVEX0lURU1fU0laRSxcbiAgICAgIGxhc3RNZWFzdXJlZENvbHVtbkluZGV4OiAtMSxcbiAgICAgIGxhc3RNZWFzdXJlZFJvd0luZGV4OiAtMSxcbiAgICAgIHJvd01ldGFkYXRhTWFwOiB7fVxuICAgIH07XG5cbiAgICBpbnN0YW5jZS5yZXNldEFmdGVyQ29sdW1uSW5kZXggPSBmdW5jdGlvbiAoY29sdW1uSW5kZXgsIHNob3VsZEZvcmNlVXBkYXRlKSB7XG4gICAgICBpZiAoc2hvdWxkRm9yY2VVcGRhdGUgPT09IHZvaWQgMCkge1xuICAgICAgICBzaG91bGRGb3JjZVVwZGF0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJJbmRpY2VzKHtcbiAgICAgICAgY29sdW1uSW5kZXg6IGNvbHVtbkluZGV4LFxuICAgICAgICBzaG91bGRGb3JjZVVwZGF0ZTogc2hvdWxkRm9yY2VVcGRhdGVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbnN0YW5jZS5yZXNldEFmdGVyUm93SW5kZXggPSBmdW5jdGlvbiAocm93SW5kZXgsIHNob3VsZEZvcmNlVXBkYXRlKSB7XG4gICAgICBpZiAoc2hvdWxkRm9yY2VVcGRhdGUgPT09IHZvaWQgMCkge1xuICAgICAgICBzaG91bGRGb3JjZVVwZGF0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJJbmRpY2VzKHtcbiAgICAgICAgcm93SW5kZXg6IHJvd0luZGV4LFxuICAgICAgICBzaG91bGRGb3JjZVVwZGF0ZTogc2hvdWxkRm9yY2VVcGRhdGVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbnN0YW5jZS5yZXNldEFmdGVySW5kaWNlcyA9IGZ1bmN0aW9uIChfcmVmNikge1xuICAgICAgdmFyIGNvbHVtbkluZGV4ID0gX3JlZjYuY29sdW1uSW5kZXgsXG4gICAgICAgICAgcm93SW5kZXggPSBfcmVmNi5yb3dJbmRleCxcbiAgICAgICAgICBfcmVmNiRzaG91bGRGb3JjZVVwZGEgPSBfcmVmNi5zaG91bGRGb3JjZVVwZGF0ZSxcbiAgICAgICAgICBzaG91bGRGb3JjZVVwZGF0ZSA9IF9yZWY2JHNob3VsZEZvcmNlVXBkYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY2JHNob3VsZEZvcmNlVXBkYTtcblxuICAgICAgaWYgKHR5cGVvZiBjb2x1bW5JbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRDb2x1bW5JbmRleCA9IE1hdGgubWluKGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkQ29sdW1uSW5kZXgsIGNvbHVtbkluZGV4IC0gMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygcm93SW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXggPSBNYXRoLm1pbihpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZFJvd0luZGV4LCByb3dJbmRleCAtIDEpO1xuICAgICAgfSAvLyBXZSBjb3VsZCBwb3RlbnRpYWxseSBvcHRpbWl6ZSBmdXJ0aGVyIGJ5IG9ubHkgZXZpY3Rpbmcgc3R5bGVzIGFmdGVyIHRoaXMgaW5kZXgsXG4gICAgICAvLyBCdXQgc2luY2Ugc3R5bGVzIGFyZSBvbmx5IGNhY2hlZCB3aGlsZSBzY3JvbGxpbmcgaXMgaW4gcHJvZ3Jlc3MtXG4gICAgICAvLyBJdCBzZWVtcyBhbiB1bm5lY2Vzc2FyeSBvcHRpbWl6YXRpb24uXG4gICAgICAvLyBJdCdzIHVubGlrZWx5IHRoYXQgcmVzZXRBZnRlckluZGV4KCkgd2lsbCBiZSBjYWxsZWQgd2hpbGUgYSB1c2VyIGlzIHNjcm9sbGluZy5cblxuXG4gICAgICBpbnN0YW5jZS5fZ2V0SXRlbVN0eWxlQ2FjaGUoLTEpO1xuXG4gICAgICBpZiAoc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlUHJvcHM7XG4gIH0sXG4gIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2U6IGZhbHNlLFxuICB2YWxpZGF0ZVByb3BzOiBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKF9yZWY3KSB7XG4gICAgdmFyIGNvbHVtbldpZHRoID0gX3JlZjcuY29sdW1uV2lkdGgsXG4gICAgICAgIHJvd0hlaWdodCA9IF9yZWY3LnJvd0hlaWdodDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGNvbHVtbldpZHRoICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiY29sdW1uV2lkdGhcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBmdW5jdGlvbi4gJyArIChcIlxcXCJcIiArIChjb2x1bW5XaWR0aCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBjb2x1bW5XaWR0aCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygcm93SGVpZ2h0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwicm93SGVpZ2h0XCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgZnVuY3Rpb24uICcgKyAoXCJcXFwiXCIgKyAocm93SGVpZ2h0ID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJvd0hlaWdodCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBJU19TQ1JPTExJTkdfREVCT1VOQ0VfSU5URVJWQUwkMSA9IDE1MDtcblxudmFyIGRlZmF1bHRJdGVtS2V5JDEgPSBmdW5jdGlvbiBkZWZhdWx0SXRlbUtleShpbmRleCwgZGF0YSkge1xuICByZXR1cm4gaW5kZXg7XG59OyAvLyBJbiBERVYgbW9kZSwgdGhpcyBTZXQgaGVscHMgdXMgb25seSBsb2cgYSB3YXJuaW5nIG9uY2UgcGVyIGNvbXBvbmVudCBpbnN0YW5jZS5cbi8vIFRoaXMgYXZvaWRzIHNwYW1taW5nIHRoZSBjb25zb2xlIGV2ZXJ5IHRpbWUgYSByZW5kZXIgaGFwcGVucy5cblxuXG52YXIgZGV2V2FybmluZ3NEaXJlY3Rpb24gPSBudWxsO1xudmFyIGRldldhcm5pbmdzVGFnTmFtZSQxID0gbnVsbDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuV2Vha1NldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZXZXYXJuaW5nc0RpcmVjdGlvbiA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIG5ldyBXZWFrU2V0KCk7XG4gICAgZGV2V2FybmluZ3NUYWdOYW1lJDEgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBuZXcgV2Vha1NldCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RDb21wb25lbnQoX3JlZikge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgZ2V0SXRlbU9mZnNldCA9IF9yZWYuZ2V0SXRlbU9mZnNldCxcbiAgICAgIGdldEVzdGltYXRlZFRvdGFsU2l6ZSA9IF9yZWYuZ2V0RXN0aW1hdGVkVG90YWxTaXplLFxuICAgICAgZ2V0SXRlbVNpemUgPSBfcmVmLmdldEl0ZW1TaXplLFxuICAgICAgZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQgPSBfcmVmLmdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50LFxuICAgICAgZ2V0U3RhcnRJbmRleEZvck9mZnNldCA9IF9yZWYuZ2V0U3RhcnRJbmRleEZvck9mZnNldCxcbiAgICAgIGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXggPSBfcmVmLmdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXgsXG4gICAgICBpbml0SW5zdGFuY2VQcm9wcyA9IF9yZWYuaW5pdEluc3RhbmNlUHJvcHMsXG4gICAgICBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlID0gX3JlZi5zaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlLFxuICAgICAgdmFsaWRhdGVQcm9wcyA9IF9yZWYudmFsaWRhdGVQcm9wcztcbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShMaXN0LCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgICAvLyBBbHdheXMgdXNlIGV4cGxpY2l0IGNvbnN0cnVjdG9yIGZvciBSZWFjdCBjb21wb25lbnRzLlxuICAgIC8vIEl0IHByb2R1Y2VzIGxlc3MgY29kZSBhZnRlciB0cmFuc3BpbGF0aW9uLiAoIzI2KVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfdGhpcyA9IF9QdXJlQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICBfdGhpcy5faW5zdGFuY2VQcm9wcyA9IGluaXRJbnN0YW5jZVByb3BzKF90aGlzLnByb3BzLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgICBfdGhpcy5fb3V0ZXJSZWYgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaW5zdGFuY2U6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLFxuICAgICAgICBpc1Njcm9sbGluZzogZmFsc2UsXG4gICAgICAgIHNjcm9sbERpcmVjdGlvbjogJ2ZvcndhcmQnLFxuICAgICAgICBzY3JvbGxPZmZzZXQ6IHR5cGVvZiBfdGhpcy5wcm9wcy5pbml0aWFsU2Nyb2xsT2Zmc2V0ID09PSAnbnVtYmVyJyA/IF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxPZmZzZXQgOiAwLFxuICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgX3RoaXMuX2NhbGxPbkl0ZW1zUmVuZGVyZWQgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5fY2FsbE9uSXRlbXNSZW5kZXJlZCA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKG92ZXJzY2FuU3RhcnRJbmRleCwgb3ZlcnNjYW5TdG9wSW5kZXgsIHZpc2libGVTdGFydEluZGV4LCB2aXNpYmxlU3RvcEluZGV4KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vbkl0ZW1zUmVuZGVyZWQoe1xuICAgICAgICAgIG92ZXJzY2FuU3RhcnRJbmRleDogb3ZlcnNjYW5TdGFydEluZGV4LFxuICAgICAgICAgIG92ZXJzY2FuU3RvcEluZGV4OiBvdmVyc2NhblN0b3BJbmRleCxcbiAgICAgICAgICB2aXNpYmxlU3RhcnRJbmRleDogdmlzaWJsZVN0YXJ0SW5kZXgsXG4gICAgICAgICAgdmlzaWJsZVN0b3BJbmRleDogdmlzaWJsZVN0b3BJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuX2NhbGxPblNjcm9sbCA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9jYWxsT25TY3JvbGwgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChzY3JvbGxEaXJlY3Rpb24sIHNjcm9sbE9mZnNldCwgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblNjcm9sbCh7XG4gICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uOiBzY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgc2Nyb2xsT2Zmc2V0OiBzY3JvbGxPZmZzZXQsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGUgPSB2b2lkIDA7XG5cbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgICAgICBpdGVtU2l6ZSA9IF90aGlzJHByb3BzLml0ZW1TaXplLFxuICAgICAgICAgICAgbGF5b3V0ID0gX3RoaXMkcHJvcHMubGF5b3V0O1xuXG4gICAgICAgIHZhciBpdGVtU3R5bGVDYWNoZSA9IF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZShzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlICYmIGl0ZW1TaXplLCBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlICYmIGxheW91dCwgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSAmJiBkaXJlY3Rpb24pO1xuXG4gICAgICAgIHZhciBzdHlsZTtcblxuICAgICAgICBpZiAoaXRlbVN0eWxlQ2FjaGUuaGFzT3duUHJvcGVydHkoaW5kZXgpKSB7XG4gICAgICAgICAgc3R5bGUgPSBpdGVtU3R5bGVDYWNoZVtpbmRleF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF9zdHlsZTtcblxuICAgICAgICAgIHZhciBfb2Zmc2V0ID0gZ2V0SXRlbU9mZnNldChfdGhpcy5wcm9wcywgaW5kZXgsIF90aGlzLl9pbnN0YW5jZVByb3BzKTtcblxuICAgICAgICAgIHZhciBzaXplID0gZ2V0SXRlbVNpemUoX3RoaXMucHJvcHMsIGluZGV4LCBfdGhpcy5faW5zdGFuY2VQcm9wcyk7IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG4gICAgICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgICAgIGl0ZW1TdHlsZUNhY2hlW2luZGV4XSA9IHN0eWxlID0gKF9zdHlsZSA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgICAgfSwgX3N0eWxlW2RpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnXSA9IGlzSG9yaXpvbnRhbCA/IF9vZmZzZXQgOiAwLCBfc3R5bGUudG9wID0gIWlzSG9yaXpvbnRhbCA/IF9vZmZzZXQgOiAwLCBfc3R5bGUuaGVpZ2h0ID0gIWlzSG9yaXpvbnRhbCA/IHNpemUgOiAnMTAwJScsIF9zdHlsZS53aWR0aCA9IGlzSG9yaXpvbnRhbCA/IHNpemUgOiAnMTAwJScsIF9zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChfLCBfXywgX19fKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5fb25TY3JvbGxIb3Jpem9udGFsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfZXZlbnQkY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgICBjbGllbnRXaWR0aCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxXaWR0aCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbFdpZHRoO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbE9mZnNldCA9PT0gc2Nyb2xsTGVmdCkge1xuICAgICAgICAgICAgLy8gU2Nyb2xsIHBvc2l0aW9uIG1heSBoYXZlIGJlZW4gdXBkYXRlZCBieSBjRE0vY0RVLFxuICAgICAgICAgICAgLy8gSW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBuZWVkIHRvIHRyaWdnZXIgYW5vdGhlciByZW5kZXIsXG4gICAgICAgICAgICAvLyBBbmQgd2UgZG9uJ3Qgd2FudCB0byB1cGRhdGUgc3RhdGUuaXNTY3JvbGxpbmcuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gX3RoaXMucHJvcHMuZGlyZWN0aW9uO1xuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSBzY3JvbGxMZWZ0O1xuXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgIC8vIFRSSUNLWSBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNjcm9sbExlZnQgc2hvdWxkIGJlIG5lZ2F0aXZlIGZvciBSVEwgYWxpZ25lZCBlbGVtZW50cy5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgbm90IHRoZSBjYXNlIGZvciBhbGwgYnJvd3NlcnMgdGhvdWdoIChlLmcuIENocm9tZSByZXBvcnRzIHZhbHVlcyBhcyBwb3NpdGl2ZSwgbWVhc3VyZWQgcmVsYXRpdmUgdG8gdGhlIGxlZnQpLlxuICAgICAgICAgICAgLy8gSXQncyBhbHNvIGVhc2llciBmb3IgdGhpcyBjb21wb25lbnQgaWYgd2UgY29udmVydCBvZmZzZXRzIHRvIHRoZSBzYW1lIGZvcm1hdCBhcyB0aGV5IHdvdWxkIGJlIGluIGZvciBsdHIuXG4gICAgICAgICAgICAvLyBTbyB0aGUgc2ltcGxlc3Qgc29sdXRpb24gaXMgdG8gZGV0ZXJtaW5lIHdoaWNoIGJyb3dzZXIgYmVoYXZpb3Igd2UncmUgZGVhbGluZyB3aXRoLCBhbmQgY29udmVydCBiYXNlZCBvbiBpdC5cbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0UlRMT2Zmc2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQgPSAtc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdwb3NpdGl2ZS1kZXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIFByZXZlbnQgU2FmYXJpJ3MgZWxhc3RpYyBzY3JvbGxpbmcgZnJvbSBjYXVzaW5nIHZpc3VhbCBzaGFraW5nIHdoZW4gc2Nyb2xsaW5nIHBhc3QgYm91bmRzLlxuXG5cbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzY3JvbGxPZmZzZXQsIHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGgpKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxEaXJlY3Rpb246IHByZXZTdGF0ZS5zY3JvbGxPZmZzZXQgPCBzY3JvbGxMZWZ0ID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJyxcbiAgICAgICAgICAgIHNjcm9sbE9mZnNldDogc2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIH0sIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9vblNjcm9sbFZlcnRpY2FsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfZXZlbnQkY3VycmVudFRhcmdldDIgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQyLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0Mi5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBzY3JvbGxUb3AgPSBfZXZlbnQkY3VycmVudFRhcmdldDIuc2Nyb2xsVG9wO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbE9mZnNldCA9PT0gc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAvLyBTY3JvbGwgcG9zaXRpb24gbWF5IGhhdmUgYmVlbiB1cGRhdGVkIGJ5IGNETS9jRFUsXG4gICAgICAgICAgICAvLyBJbiB3aGljaCBjYXNlIHdlIGRvbid0IG5lZWQgdG8gdHJpZ2dlciBhbm90aGVyIHJlbmRlcixcbiAgICAgICAgICAgIC8vIEFuZCB3ZSBkb24ndCB3YW50IHRvIHVwZGF0ZSBzdGF0ZS5pc1Njcm9sbGluZy5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0gLy8gUHJldmVudCBTYWZhcmkncyBlbGFzdGljIHNjcm9sbGluZyBmcm9tIGNhdXNpbmcgdmlzdWFsIHNoYWtpbmcgd2hlbiBzY3JvbGxpbmcgcGFzdCBib3VuZHMuXG5cblxuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCkpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbE9mZnNldCA8IHNjcm9sbE9mZnNldCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgICBzY3JvbGxPZmZzZXQ6IHNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICB9LCBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fb3V0ZXJSZWZTZXR0ZXIgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHZhciBvdXRlclJlZiA9IF90aGlzLnByb3BzLm91dGVyUmVmO1xuICAgICAgICBfdGhpcy5fb3V0ZXJSZWYgPSByZWY7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvdXRlclJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG91dGVyUmVmKHJlZik7XG4gICAgICAgIH0gZWxzZSBpZiAob3V0ZXJSZWYgIT0gbnVsbCAmJiB0eXBlb2Ygb3V0ZXJSZWYgPT09ICdvYmplY3QnICYmIG91dGVyUmVmLmhhc093blByb3BlcnR5KCdjdXJyZW50JykpIHtcbiAgICAgICAgICBvdXRlclJlZi5jdXJyZW50ID0gcmVmO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICAgICAgY2FuY2VsVGltZW91dChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IHJlcXVlc3RUaW1lb3V0KF90aGlzLl9yZXNldElzU2Nyb2xsaW5nLCBJU19TQ1JPTExJTkdfREVCT1VOQ0VfSU5URVJWQUwkMSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc1Njcm9sbGluZzogZmFsc2VcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIENsZWFyIHN0eWxlIGNhY2hlIGFmdGVyIHN0YXRlIHVwZGF0ZSBoYXMgYmVlbiBjb21taXR0ZWQuXG4gICAgICAgICAgLy8gVGhpcyB3YXkgd2UgZG9uJ3QgYnJlYWsgcHVyZSBzQ1UgZm9yIGl0ZW1zIHRoYXQgZG9uJ3QgdXNlIGlzU2Nyb2xsaW5nIHBhcmFtLlxuICAgICAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSgtMSwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIExpc3QuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB2YWxpZGF0ZVNoYXJlZFByb3BzJDEobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgdmFsaWRhdGVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBfcHJvdG8gPSBMaXN0LnByb3RvdHlwZTtcblxuICAgIF9wcm90by5zY3JvbGxUbyA9IGZ1bmN0aW9uIHNjcm9sbFRvKHNjcm9sbE9mZnNldCkge1xuICAgICAgc2Nyb2xsT2Zmc2V0ID0gTWF0aC5tYXgoMCwgc2Nyb2xsT2Zmc2V0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbE9mZnNldCA9PT0gc2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbE9mZnNldCA8IHNjcm9sbE9mZnNldCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgc2Nyb2xsT2Zmc2V0OiBzY3JvbGxPZmZzZXQsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNjcm9sbFRvSXRlbSA9IGZ1bmN0aW9uIHNjcm9sbFRvSXRlbShpbmRleCwgYWxpZ24pIHtcbiAgICAgIGlmIChhbGlnbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5wcm9wcy5pdGVtQ291bnQ7XG4gICAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gdGhpcy5zdGF0ZS5zY3JvbGxPZmZzZXQ7XG4gICAgICBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBpdGVtQ291bnQgLSAxKSk7XG4gICAgICB0aGlzLnNjcm9sbFRvKGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KHRoaXMucHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCB0aGlzLl9pbnN0YW5jZVByb3BzKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMyLmRpcmVjdGlvbixcbiAgICAgICAgICBpbml0aWFsU2Nyb2xsT2Zmc2V0ID0gX3RoaXMkcHJvcHMyLmluaXRpYWxTY3JvbGxPZmZzZXQsXG4gICAgICAgICAgbGF5b3V0ID0gX3RoaXMkcHJvcHMyLmxheW91dDtcblxuICAgICAgaWYgKHR5cGVvZiBpbml0aWFsU2Nyb2xsT2Zmc2V0ID09PSAnbnVtYmVyJyAmJiB0aGlzLl9vdXRlclJlZiAhPSBudWxsKSB7XG4gICAgICAgIHZhciBvdXRlclJlZiA9IHRoaXMuX291dGVyUmVmOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gaW5pdGlhbFNjcm9sbE9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxUb3AgPSBpbml0aWFsU2Nyb2xsT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbGxQcm9wc0NhbGxiYWNrcygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMzLmRpcmVjdGlvbixcbiAgICAgICAgICBsYXlvdXQgPSBfdGhpcyRwcm9wczMubGF5b3V0O1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBfdGhpcyRzdGF0ZS5zY3JvbGxPZmZzZXQsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkID0gX3RoaXMkc3RhdGUuc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkO1xuXG4gICAgICBpZiAoc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkICYmIHRoaXMuX291dGVyUmVmICE9IG51bGwpIHtcbiAgICAgICAgdmFyIG91dGVyUmVmID0gdGhpcy5fb3V0ZXJSZWY7IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgICAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCB0aGUgY2FzZSBmb3IgYWxsIGJyb3dzZXJzIHRob3VnaCAoZS5nLiBDaHJvbWUgcmVwb3J0cyB2YWx1ZXMgYXMgcG9zaXRpdmUsIG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSBsZWZ0KS5cbiAgICAgICAgICAgIC8vIFNvIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGJyb3dzZXIgYmVoYXZpb3Igd2UncmUgZGVhbGluZyB3aXRoLCBhbmQgbWltaWMgaXQuXG4gICAgICAgICAgICBzd2l0Y2ggKGdldFJUTE9mZnNldFR5cGUoKSkge1xuICAgICAgICAgICAgICBjYXNlICduZWdhdGl2ZSc6XG4gICAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IC1zY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAncG9zaXRpdmUtYXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gc2Nyb2xsT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gb3V0ZXJSZWYuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFdpZHRoID0gb3V0ZXJSZWYuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSBzY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBzY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbFRvcCA9IHNjcm9sbE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jYWxsUHJvcHNDYWxsYmFja3MoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICBjYW5jZWxUaW1lb3V0KHRoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczQuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM0LmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wczQuZGlyZWN0aW9uLFxuICAgICAgICAgIGhlaWdodCA9IF90aGlzJHByb3BzNC5oZWlnaHQsXG4gICAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wczQuaW5uZXJSZWYsXG4gICAgICAgICAgaW5uZXJFbGVtZW50VHlwZSA9IF90aGlzJHByb3BzNC5pbm5lckVsZW1lbnRUeXBlLFxuICAgICAgICAgIGlubmVyVGFnTmFtZSA9IF90aGlzJHByb3BzNC5pbm5lclRhZ05hbWUsXG4gICAgICAgICAgaXRlbUNvdW50ID0gX3RoaXMkcHJvcHM0Lml0ZW1Db3VudCxcbiAgICAgICAgICBpdGVtRGF0YSA9IF90aGlzJHByb3BzNC5pdGVtRGF0YSxcbiAgICAgICAgICBfdGhpcyRwcm9wczQkaXRlbUtleSA9IF90aGlzJHByb3BzNC5pdGVtS2V5LFxuICAgICAgICAgIGl0ZW1LZXkgPSBfdGhpcyRwcm9wczQkaXRlbUtleSA9PT0gdm9pZCAwID8gZGVmYXVsdEl0ZW1LZXkkMSA6IF90aGlzJHByb3BzNCRpdGVtS2V5LFxuICAgICAgICAgIGxheW91dCA9IF90aGlzJHByb3BzNC5sYXlvdXQsXG4gICAgICAgICAgb3V0ZXJFbGVtZW50VHlwZSA9IF90aGlzJHByb3BzNC5vdXRlckVsZW1lbnRUeXBlLFxuICAgICAgICAgIG91dGVyVGFnTmFtZSA9IF90aGlzJHByb3BzNC5vdXRlclRhZ05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczQuc3R5bGUsXG4gICAgICAgICAgdXNlSXNTY3JvbGxpbmcgPSBfdGhpcyRwcm9wczQudXNlSXNTY3JvbGxpbmcsXG4gICAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wczQud2lkdGg7XG4gICAgICB2YXIgaXNTY3JvbGxpbmcgPSB0aGlzLnN0YXRlLmlzU2Nyb2xsaW5nOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIG9uU2Nyb2xsID0gaXNIb3Jpem9udGFsID8gdGhpcy5fb25TY3JvbGxIb3Jpem9udGFsIDogdGhpcy5fb25TY3JvbGxWZXJ0aWNhbDtcblxuICAgICAgdmFyIF90aGlzJF9nZXRSYW5nZVRvUmVuZCA9IHRoaXMuX2dldFJhbmdlVG9SZW5kZXIoKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gX3RoaXMkX2dldFJhbmdlVG9SZW5kWzBdLFxuICAgICAgICAgIHN0b3BJbmRleCA9IF90aGlzJF9nZXRSYW5nZVRvUmVuZFsxXTtcblxuICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgIGlmIChpdGVtQ291bnQgPiAwKSB7XG4gICAgICAgIGZvciAodmFyIF9pbmRleCA9IHN0YXJ0SW5kZXg7IF9pbmRleCA8PSBzdG9wSW5kZXg7IF9pbmRleCsrKSB7XG4gICAgICAgICAgaXRlbXMucHVzaChjcmVhdGVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgICBkYXRhOiBpdGVtRGF0YSxcbiAgICAgICAgICAgIGtleTogaXRlbUtleShfaW5kZXgsIGl0ZW1EYXRhKSxcbiAgICAgICAgICAgIGluZGV4OiBfaW5kZXgsXG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdXNlSXNTY3JvbGxpbmcgPyBpc1Njcm9sbGluZyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLl9nZXRJdGVtU3R5bGUoX2luZGV4KVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZWFkIHRoaXMgdmFsdWUgQUZURVIgaXRlbXMgaGF2ZSBiZWVuIGNyZWF0ZWQsXG4gICAgICAvLyBTbyB0aGVpciBhY3R1YWwgc2l6ZXMgKGlmIHZhcmlhYmxlKSBhcmUgdGFrZW4gaW50byBjb25zaWRlcmF0aW9uLlxuXG5cbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbFNpemUgPSBnZXRFc3RpbWF0ZWRUb3RhbFNpemUodGhpcy5wcm9wcywgdGhpcy5faW5zdGFuY2VQcm9wcyk7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChvdXRlckVsZW1lbnRUeXBlIHx8IG91dGVyVGFnTmFtZSB8fCAnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgb25TY3JvbGw6IG9uU2Nyb2xsLFxuICAgICAgICByZWY6IHRoaXMuX291dGVyUmVmU2V0dGVyLFxuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgIH0sIHN0eWxlKVxuICAgICAgfSwgY3JlYXRlRWxlbWVudChpbm5lckVsZW1lbnRUeXBlIHx8IGlubmVyVGFnTmFtZSB8fCAnZGl2Jywge1xuICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBpc0hvcml6b250YWwgPyAnMTAwJScgOiBlc3RpbWF0ZWRUb3RhbFNpemUsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogaXNTY3JvbGxpbmcgPyAnbm9uZScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IGlzSG9yaXpvbnRhbCA/IGVzdGltYXRlZFRvdGFsU2l6ZSA6ICcxMDAlJ1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2FsbFByb3BzQ2FsbGJhY2tzID0gZnVuY3Rpb24gX2NhbGxQcm9wc0NhbGxiYWNrcygpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkl0ZW1zUmVuZGVyZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGl0ZW1Db3VudCA9IHRoaXMucHJvcHMuaXRlbUNvdW50O1xuXG4gICAgICAgIGlmIChpdGVtQ291bnQgPiAwKSB7XG4gICAgICAgICAgdmFyIF90aGlzJF9nZXRSYW5nZVRvUmVuZDIgPSB0aGlzLl9nZXRSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgICAgIF9vdmVyc2NhblN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyWzBdLFxuICAgICAgICAgICAgICBfb3ZlcnNjYW5TdG9wSW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyWzFdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyWzJdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVN0b3BJbmRleCA9IF90aGlzJF9nZXRSYW5nZVRvUmVuZDJbM107XG5cbiAgICAgICAgICB0aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkKF9vdmVyc2NhblN0YXJ0SW5kZXgsIF9vdmVyc2NhblN0b3BJbmRleCwgX3Zpc2libGVTdGFydEluZGV4LCBfdmlzaWJsZVN0b3BJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uU2Nyb2xsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgX3Njcm9sbERpcmVjdGlvbiA9IF90aGlzJHN0YXRlMi5zY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgICBfc2Nyb2xsT2Zmc2V0ID0gX3RoaXMkc3RhdGUyLnNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgIF9zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQgPSBfdGhpcyRzdGF0ZTIuc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkO1xuXG4gICAgICAgIHRoaXMuX2NhbGxPblNjcm9sbChfc2Nyb2xsRGlyZWN0aW9uLCBfc2Nyb2xsT2Zmc2V0LCBfc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkKTtcbiAgICAgIH1cbiAgICB9OyAvLyBMYXppbHkgY3JlYXRlIGFuZCBjYWNoZSBpdGVtIHN0eWxlcyB3aGlsZSBzY3JvbGxpbmcsXG4gICAgLy8gU28gdGhhdCBwdXJlIGNvbXBvbmVudCBzQ1Ugd2lsbCBwcmV2ZW50IHJlLXJlbmRlcnMuXG4gICAgLy8gV2UgbWFpbnRhaW4gdGhpcyBjYWNoZSwgYW5kIHBhc3MgYSBzdHlsZSBwcm9wIHJhdGhlciB0aGFuIGluZGV4LFxuICAgIC8vIFNvIHRoYXQgTGlzdCBjYW4gY2xlYXIgY2FjaGVkIHN0eWxlcyBhbmQgZm9yY2UgaXRlbSByZS1yZW5kZXIgaWYgbmVjZXNzYXJ5LlxuXG5cbiAgICBfcHJvdG8uX2dldFJhbmdlVG9SZW5kZXIgPSBmdW5jdGlvbiBfZ2V0UmFuZ2VUb1JlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGl0ZW1Db3VudCA9IF90aGlzJHByb3BzNS5pdGVtQ291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Db3VudCA9IF90aGlzJHByb3BzNS5vdmVyc2NhbkNvdW50O1xuICAgICAgdmFyIF90aGlzJHN0YXRlMyA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNTY3JvbGxpbmcgPSBfdGhpcyRzdGF0ZTMuaXNTY3JvbGxpbmcsXG4gICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGUzLnNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBfdGhpcyRzdGF0ZTMuc2Nyb2xsT2Zmc2V0O1xuXG4gICAgICBpZiAoaXRlbUNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydEluZGV4ID0gZ2V0U3RhcnRJbmRleEZvck9mZnNldCh0aGlzLnByb3BzLCBzY3JvbGxPZmZzZXQsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIHN0b3BJbmRleCA9IGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXgodGhpcy5wcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsT2Zmc2V0LCB0aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gT3ZlcnNjYW4gYnkgb25lIGl0ZW0gaW4gZWFjaCBkaXJlY3Rpb24gc28gdGhhdCB0YWIvZm9jdXMgd29ya3MuXG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZXh0cmEgaXRlbSwgdGFiIGxvb3BzIGJhY2sgYXJvdW5kLlxuXG4gICAgICB2YXIgb3ZlcnNjYW5CYWNrd2FyZCA9ICFpc1Njcm9sbGluZyB8fCBzY3JvbGxEaXJlY3Rpb24gPT09ICdiYWNrd2FyZCcgPyBNYXRoLm1heCgxLCBvdmVyc2NhbkNvdW50KSA6IDE7XG4gICAgICB2YXIgb3ZlcnNjYW5Gb3J3YXJkID0gIWlzU2Nyb2xsaW5nIHx8IHNjcm9sbERpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnID8gTWF0aC5tYXgoMSwgb3ZlcnNjYW5Db3VudCkgOiAxO1xuICAgICAgcmV0dXJuIFtNYXRoLm1heCgwLCBzdGFydEluZGV4IC0gb3ZlcnNjYW5CYWNrd2FyZCksIE1hdGgubWF4KDAsIE1hdGgubWluKGl0ZW1Db3VudCAtIDEsIHN0b3BJbmRleCArIG92ZXJzY2FuRm9yd2FyZCkpLCBzdGFydEluZGV4LCBzdG9wSW5kZXhdO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGlzdDtcbiAgfShQdXJlQ29tcG9uZW50KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIGl0ZW1EYXRhOiB1bmRlZmluZWQsXG4gICAgbGF5b3V0OiAndmVydGljYWwnLFxuICAgIG92ZXJzY2FuQ291bnQ6IDIsXG4gICAgdXNlSXNTY3JvbGxpbmc6IGZhbHNlXG4gIH0sIF90ZW1wO1xufSAvLyBOT1RFOiBJIGNvbnNpZGVyZWQgZnVydGhlciB3cmFwcGluZyBpbmRpdmlkdWFsIGl0ZW1zIHdpdGggYSBwdXJlIExpc3RJdGVtIGNvbXBvbmVudC5cbi8vIFRoaXMgd291bGQgYXZvaWQgZXZlciBjYWxsaW5nIHRoZSByZW5kZXIgZnVuY3Rpb24gZm9yIHRoZSBzYW1lIGluZGV4IG1vcmUgdGhhbiBvbmNlLFxuLy8gQnV0IGl0IHdvdWxkIGFsc28gYWRkIHRoZSBvdmVyaGVhZCBvZiBhIGxvdCBvZiBjb21wb25lbnRzL2ZpYmVycy5cbi8vIEkgYXNzdW1lIHBlb3BsZSBhbHJlYWR5IGRvIHRoaXMgKHJlbmRlciBmdW5jdGlvbiByZXR1cm5pbmcgYSBjbGFzcyBjb21wb25lbnQpLFxuLy8gU28gbXkgZG9pbmcgaXQgd291bGQganVzdCB1bm5lY2Vzc2FyaWx5IGRvdWJsZSB0aGUgd3JhcHBlcnMuXG5cbnZhciB2YWxpZGF0ZVNoYXJlZFByb3BzJDEgPSBmdW5jdGlvbiB2YWxpZGF0ZVNoYXJlZFByb3BzKF9yZWYyLCBfcmVmMykge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgIGRpcmVjdGlvbiA9IF9yZWYyLmRpcmVjdGlvbixcbiAgICAgIGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgIGxheW91dCA9IF9yZWYyLmxheW91dCxcbiAgICAgIGlubmVyVGFnTmFtZSA9IF9yZWYyLmlubmVyVGFnTmFtZSxcbiAgICAgIG91dGVyVGFnTmFtZSA9IF9yZWYyLm91dGVyVGFnTmFtZSxcbiAgICAgIHdpZHRoID0gX3JlZjIud2lkdGg7XG4gIHZhciBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGlubmVyVGFnTmFtZSAhPSBudWxsIHx8IG91dGVyVGFnTmFtZSAhPSBudWxsKSB7XG4gICAgICBpZiAoZGV2V2FybmluZ3NUYWdOYW1lJDEgJiYgIWRldldhcm5pbmdzVGFnTmFtZSQxLmhhcyhpbnN0YW5jZSkpIHtcbiAgICAgICAgZGV2V2FybmluZ3NUYWdOYW1lJDEuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgaW5uZXJUYWdOYW1lIGFuZCBvdXRlclRhZ05hbWUgcHJvcHMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuICcgKyAnUGxlYXNlIHVzZSB0aGUgaW5uZXJFbGVtZW50VHlwZSBhbmQgb3V0ZXJFbGVtZW50VHlwZSBwcm9wcyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgIH0gLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG5cblxuICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgaWYgKGRldldhcm5pbmdzRGlyZWN0aW9uICYmICFkZXZXYXJuaW5nc0RpcmVjdGlvbi5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgZGV2V2FybmluZ3NEaXJlY3Rpb24uYWRkKGluc3RhbmNlKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkaXJlY3Rpb24gcHJvcCBzaG91bGQgYmUgZWl0aGVyIFwibHRyXCIgKGRlZmF1bHQpIG9yIFwicnRsXCIuICcgKyAnUGxlYXNlIHVzZSB0aGUgbGF5b3V0IHByb3AgdG8gc3BlY2lmeSBcInZlcnRpY2FsXCIgKGRlZmF1bHQpIG9yIFwiaG9yaXpvbnRhbFwiIG9yaWVudGF0aW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2x0cic6XG4gICAgICBjYXNlICdydGwnOlxuICAgICAgICAvLyBWYWxpZCB2YWx1ZXNcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiZGlyZWN0aW9uXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGVpdGhlciBcImx0clwiIG9yIFwicnRsXCIuICcgKyAoXCJcXFwiXCIgKyBkaXJlY3Rpb24gKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIHN3aXRjaCAobGF5b3V0KSB7XG4gICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgLy8gVmFsaWQgdmFsdWVzXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImxheW91dFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBlaXRoZXIgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLiAnICsgKFwiXFxcIlwiICsgbGF5b3V0ICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJjaGlsZHJlblwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIFJlYWN0IGNvbXBvbmVudC4gJyArIChcIlxcXCJcIiArIChjaGlsZHJlbiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBjaGlsZHJlbikgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIGlmIChpc0hvcml6b250YWwgJiYgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJ3aWR0aFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ0hvcml6b250YWwgbGlzdHMgbXVzdCBzcGVjaWZ5IGEgbnVtYmVyIGZvciB3aWR0aC4gJyArIChcIlxcXCJcIiArICh3aWR0aCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB3aWR0aCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH0gZWxzZSBpZiAoIWlzSG9yaXpvbnRhbCAmJiB0eXBlb2YgaGVpZ2h0ICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJoZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWZXJ0aWNhbCBsaXN0cyBtdXN0IHNwZWNpZnkgYSBudW1iZXIgZm9yIGhlaWdodC4gJyArIChcIlxcXCJcIiArIChoZWlnaHQgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgaGVpZ2h0KSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFJDEgPSA1MDtcblxudmFyIGdldEl0ZW1NZXRhZGF0YSQxID0gZnVuY3Rpb24gZ2V0SXRlbU1ldGFkYXRhKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICB2YXIgX3JlZiA9IHByb3BzLFxuICAgICAgaXRlbVNpemUgPSBfcmVmLml0ZW1TaXplO1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5pdGVtTWV0YWRhdGFNYXAsXG4gICAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXg7XG5cbiAgaWYgKGluZGV4ID4gbGFzdE1lYXN1cmVkSW5kZXgpIHtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcblxuICAgIGlmIChsYXN0TWVhc3VyZWRJbmRleCA+PSAwKSB7XG4gICAgICB2YXIgaXRlbU1ldGFkYXRhID0gaXRlbU1ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZEluZGV4XTtcbiAgICAgIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gbGFzdE1lYXN1cmVkSW5kZXggKyAxOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgIHZhciBzaXplID0gaXRlbVNpemUoaSk7XG4gICAgICBpdGVtTWV0YWRhdGFNYXBbaV0gPSB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9O1xuICAgICAgb2Zmc2V0ICs9IHNpemU7XG4gICAgfVxuXG4gICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcmV0dXJuIGl0ZW1NZXRhZGF0YU1hcFtpbmRleF07XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtJDEgPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW0ocHJvcHMsIGluc3RhbmNlUHJvcHMsIG9mZnNldCkge1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5pdGVtTWV0YWRhdGFNYXAsXG4gICAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXg7XG4gIHZhciBsYXN0TWVhc3VyZWRJdGVtT2Zmc2V0ID0gbGFzdE1lYXN1cmVkSW5kZXggPiAwID8gaXRlbU1ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZEluZGV4XS5vZmZzZXQgOiAwO1xuXG4gIGlmIChsYXN0TWVhc3VyZWRJdGVtT2Zmc2V0ID49IG9mZnNldCkge1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgbWVhc3VyZWQgaXRlbXMgd2l0aGluIHRoaXMgcmFuZ2UganVzdCB1c2UgYSBiaW5hcnkgc2VhcmNoIGFzIGl0J3MgZmFzdGVyLlxuICAgIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2gkMShwcm9wcywgaW5zdGFuY2VQcm9wcywgbGFzdE1lYXN1cmVkSW5kZXgsIDAsIG9mZnNldCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgd2UgaGF2ZW4ndCB5ZXQgbWVhc3VyZWQgdGhpcyBoaWdoLCBmYWxsYmFjayB0byBhbiBleHBvbmVudGlhbCBzZWFyY2ggd2l0aCBhbiBpbm5lciBiaW5hcnkgc2VhcmNoLlxuICAgIC8vIFRoZSBleHBvbmVudGlhbCBzZWFyY2ggYXZvaWRzIHByZS1jb21wdXRpbmcgc2l6ZXMgZm9yIHRoZSBmdWxsIHNldCBvZiBpdGVtcyBhcyBhIGJpbmFyeSBzZWFyY2ggd291bGQuXG4gICAgLy8gVGhlIG92ZXJhbGwgY29tcGxleGl0eSBmb3IgdGhpcyBhcHByb2FjaCBpcyBPKGxvZyBuKS5cbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2gkMShwcm9wcywgaW5zdGFuY2VQcm9wcywgTWF0aC5tYXgoMCwgbGFzdE1lYXN1cmVkSW5kZXgpLCBvZmZzZXQpO1xuICB9XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoJDEgPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2gocHJvcHMsIGluc3RhbmNlUHJvcHMsIGhpZ2gsIGxvdywgb2Zmc2V0KSB7XG4gIHdoaWxlIChsb3cgPD0gaGlnaCkge1xuICAgIHZhciBtaWRkbGUgPSBsb3cgKyBNYXRoLmZsb29yKChoaWdoIC0gbG93KSAvIDIpO1xuICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIG1pZGRsZSwgaW5zdGFuY2VQcm9wcykub2Zmc2V0O1xuXG4gICAgaWYgKGN1cnJlbnRPZmZzZXQgPT09IG9mZnNldCkge1xuICAgICAgcmV0dXJuIG1pZGRsZTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRPZmZzZXQgPCBvZmZzZXQpIHtcbiAgICAgIGxvdyA9IG1pZGRsZSArIDE7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50T2Zmc2V0ID4gb2Zmc2V0KSB7XG4gICAgICBoaWdoID0gbWlkZGxlIC0gMTtcbiAgICB9XG4gIH1cblxuICBpZiAobG93ID4gMCkge1xuICAgIHJldHVybiBsb3cgLSAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2gkMSA9IGZ1bmN0aW9uIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoKHByb3BzLCBpbnN0YW5jZVByb3BzLCBpbmRleCwgb2Zmc2V0KSB7XG4gIHZhciBpdGVtQ291bnQgPSBwcm9wcy5pdGVtQ291bnQ7XG4gIHZhciBpbnRlcnZhbCA9IDE7XG5cbiAgd2hpbGUgKGluZGV4IDwgaXRlbUNvdW50ICYmIGdldEl0ZW1NZXRhZGF0YSQxKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgaW5kZXggKz0gaW50ZXJ2YWw7XG4gICAgaW50ZXJ2YWwgKj0gMjtcbiAgfVxuXG4gIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2gkMShwcm9wcywgaW5zdGFuY2VQcm9wcywgTWF0aC5taW4oaW5kZXgsIGl0ZW1Db3VudCAtIDEpLCBNYXRoLmZsb29yKGluZGV4IC8gMiksIG9mZnNldCk7XG59O1xuXG52YXIgZ2V0RXN0aW1hdGVkVG90YWxTaXplID0gZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxTaXplKF9yZWYyLCBfcmVmMykge1xuICB2YXIgaXRlbUNvdW50ID0gX3JlZjIuaXRlbUNvdW50O1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwID0gX3JlZjMuaXRlbU1ldGFkYXRhTWFwLFxuICAgICAgZXN0aW1hdGVkSXRlbVNpemUgPSBfcmVmMy5lc3RpbWF0ZWRJdGVtU2l6ZSxcbiAgICAgIGxhc3RNZWFzdXJlZEluZGV4ID0gX3JlZjMubGFzdE1lYXN1cmVkSW5kZXg7XG4gIHZhciB0b3RhbFNpemVPZk1lYXN1cmVkSXRlbXMgPSAwOyAvLyBFZGdlIGNhc2UgY2hlY2sgZm9yIHdoZW4gdGhlIG51bWJlciBvZiBpdGVtcyBkZWNyZWFzZXMgd2hpbGUgYSBzY3JvbGwgaXMgaW4gcHJvZ3Jlc3MuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9idmF1Z2huL3JlYWN0LXdpbmRvdy9wdWxsLzEzOFxuXG4gIGlmIChsYXN0TWVhc3VyZWRJbmRleCA+PSBpdGVtQ291bnQpIHtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGl0ZW1Db3VudCAtIDE7XG4gIH1cblxuICBpZiAobGFzdE1lYXN1cmVkSW5kZXggPj0gMCkge1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdO1xuICAgIHRvdGFsU2l6ZU9mTWVhc3VyZWRJdGVtcyA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgfVxuXG4gIHZhciBudW1Vbm1lYXN1cmVkSXRlbXMgPSBpdGVtQ291bnQgLSBsYXN0TWVhc3VyZWRJbmRleCAtIDE7XG4gIHZhciB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcyA9IG51bVVubWVhc3VyZWRJdGVtcyAqIGVzdGltYXRlZEl0ZW1TaXplO1xuICByZXR1cm4gdG90YWxTaXplT2ZNZWFzdXJlZEl0ZW1zICsgdG90YWxTaXplT2ZVbm1lYXN1cmVkSXRlbXM7XG59O1xuXG52YXIgVmFyaWFibGVTaXplTGlzdCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVMaXN0Q29tcG9uZW50KHtcbiAgZ2V0SXRlbU9mZnNldDogZnVuY3Rpb24gZ2V0SXRlbU9mZnNldChwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKS5vZmZzZXQ7XG4gIH0sXG4gIGdldEl0ZW1TaXplOiBmdW5jdGlvbiBnZXRJdGVtU2l6ZShwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcy5pdGVtTWV0YWRhdGFNYXBbaW5kZXhdLnNpemU7XG4gIH0sXG4gIGdldEVzdGltYXRlZFRvdGFsU2l6ZTogZ2V0RXN0aW1hdGVkVG90YWxTaXplLFxuICBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudDogZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQocHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0LFxuICAgICAgICBsYXlvdXQgPSBwcm9wcy5sYXlvdXQsXG4gICAgICAgIHdpZHRoID0gcHJvcHMud2lkdGg7IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBzaXplID0gaXNIb3Jpem9udGFsID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YSQxKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcyk7IC8vIEdldCBlc3RpbWF0ZWQgdG90YWwgc2l6ZSBhZnRlciBJdGVtTWV0YWRhdGEgaXMgY29tcHV0ZWQsXG4gICAgLy8gVG8gZW5zdXJlIGl0IHJlZmxlY3RzIGFjdHVhbCBtZWFzdXJlbWVudHMgaW5zdGVhZCBvZiBqdXN0IGVzdGltYXRlcy5cblxuICAgIHZhciBlc3RpbWF0ZWRUb3RhbFNpemUgPSBnZXRFc3RpbWF0ZWRUb3RhbFNpemUocHJvcHMsIGluc3RhbmNlUHJvcHMpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihlc3RpbWF0ZWRUb3RhbFNpemUgLSBzaXplLCBpdGVtTWV0YWRhdGEub2Zmc2V0KSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IE1hdGgubWF4KDAsIGl0ZW1NZXRhZGF0YS5vZmZzZXQgLSBzaXplICsgaXRlbU1ldGFkYXRhLnNpemUpO1xuXG4gICAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgICBpZiAoc2Nyb2xsT2Zmc2V0ID49IG1pbk9mZnNldCAtIHNpemUgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCArIHNpemUpIHtcbiAgICAgICAgYWxpZ24gPSAnYXV0byc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbiA9ICdjZW50ZXInO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcblxuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcblxuICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobWluT2Zmc2V0ICsgKG1heE9mZnNldCAtIG1pbk9mZnNldCkgLyAyKTtcblxuICAgICAgY2FzZSAnYXV0byc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoc2Nyb2xsT2Zmc2V0ID49IG1pbk9mZnNldCAmJiBzY3JvbGxPZmZzZXQgPD0gbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHNjcm9sbE9mZnNldDtcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxPZmZzZXQgPCBtaW5PZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfSxcbiAgZ2V0U3RhcnRJbmRleEZvck9mZnNldDogZnVuY3Rpb24gZ2V0U3RhcnRJbmRleEZvck9mZnNldChwcm9wcywgb2Zmc2V0LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbSQxKHByb3BzLCBpbnN0YW5jZVByb3BzLCBvZmZzZXQpO1xuICB9LFxuICBnZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4OiBmdW5jdGlvbiBnZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4KHByb3BzLCBzdGFydEluZGV4LCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICBoZWlnaHQgPSBwcm9wcy5oZWlnaHQsXG4gICAgICAgIGl0ZW1Db3VudCA9IHByb3BzLml0ZW1Db3VudCxcbiAgICAgICAgbGF5b3V0ID0gcHJvcHMubGF5b3V0LFxuICAgICAgICB3aWR0aCA9IHByb3BzLndpZHRoOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICB2YXIgc2l6ZSA9IGlzSG9yaXpvbnRhbCA/IHdpZHRoIDogaGVpZ2h0O1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBnZXRJdGVtTWV0YWRhdGEkMShwcm9wcywgc3RhcnRJbmRleCwgaW5zdGFuY2VQcm9wcyk7XG4gICAgdmFyIG1heE9mZnNldCA9IHNjcm9sbE9mZnNldCArIHNpemU7XG4gICAgdmFyIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB2YXIgc3RvcEluZGV4ID0gc3RhcnRJbmRleDtcblxuICAgIHdoaWxlIChzdG9wSW5kZXggPCBpdGVtQ291bnQgLSAxICYmIG9mZnNldCA8IG1heE9mZnNldCkge1xuICAgICAgc3RvcEluZGV4Kys7XG4gICAgICBvZmZzZXQgKz0gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIHN0b3BJbmRleCwgaW5zdGFuY2VQcm9wcykuc2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcEluZGV4O1xuICB9LFxuICBpbml0SW5zdGFuY2VQcm9wczogZnVuY3Rpb24gaW5pdEluc3RhbmNlUHJvcHMocHJvcHMsIGluc3RhbmNlKSB7XG4gICAgdmFyIF9yZWY0ID0gcHJvcHMsXG4gICAgICAgIGVzdGltYXRlZEl0ZW1TaXplID0gX3JlZjQuZXN0aW1hdGVkSXRlbVNpemU7XG4gICAgdmFyIGluc3RhbmNlUHJvcHMgPSB7XG4gICAgICBpdGVtTWV0YWRhdGFNYXA6IHt9LFxuICAgICAgZXN0aW1hdGVkSXRlbVNpemU6IGVzdGltYXRlZEl0ZW1TaXplIHx8IERFRkFVTFRfRVNUSU1BVEVEX0lURU1fU0laRSQxLFxuICAgICAgbGFzdE1lYXN1cmVkSW5kZXg6IC0xXG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJJbmRleCA9IGZ1bmN0aW9uIChpbmRleCwgc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRJbmRleCA9IE1hdGgubWluKGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXgsIGluZGV4IC0gMSk7IC8vIFdlIGNvdWxkIHBvdGVudGlhbGx5IG9wdGltaXplIGZ1cnRoZXIgYnkgb25seSBldmljdGluZyBzdHlsZXMgYWZ0ZXIgdGhpcyBpbmRleCxcbiAgICAgIC8vIEJ1dCBzaW5jZSBzdHlsZXMgYXJlIG9ubHkgY2FjaGVkIHdoaWxlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy1cbiAgICAgIC8vIEl0IHNlZW1zIGFuIHVubmVjZXNzYXJ5IG9wdGltaXphdGlvbi5cbiAgICAgIC8vIEl0J3MgdW5saWtlbHkgdGhhdCByZXNldEFmdGVySW5kZXgoKSB3aWxsIGJlIGNhbGxlZCB3aGlsZSBhIHVzZXIgaXMgc2Nyb2xsaW5nLlxuXG4gICAgICBpbnN0YW5jZS5fZ2V0SXRlbVN0eWxlQ2FjaGUoLTEpO1xuXG4gICAgICBpZiAoc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlUHJvcHM7XG4gIH0sXG4gIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2U6IGZhbHNlLFxuICB2YWxpZGF0ZVByb3BzOiBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKF9yZWY1KSB7XG4gICAgdmFyIGl0ZW1TaXplID0gX3JlZjUuaXRlbVNpemU7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtU2l6ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIml0ZW1TaXplXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgZnVuY3Rpb24uICcgKyAoXCJcXFwiXCIgKyAoaXRlbVNpemUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgaXRlbVNpemUpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgRml4ZWRTaXplR3JpZCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVHcmlkQ29tcG9uZW50KHtcbiAgZ2V0Q29sdW1uT2Zmc2V0OiBmdW5jdGlvbiBnZXRDb2x1bW5PZmZzZXQoX3JlZiwgaW5kZXgpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmLmNvbHVtbldpZHRoO1xuICAgIHJldHVybiBpbmRleCAqIGNvbHVtbldpZHRoO1xuICB9LFxuICBnZXRDb2x1bW5XaWR0aDogZnVuY3Rpb24gZ2V0Q29sdW1uV2lkdGgoX3JlZjIsIGluZGV4KSB7XG4gICAgdmFyIGNvbHVtbldpZHRoID0gX3JlZjIuY29sdW1uV2lkdGg7XG4gICAgcmV0dXJuIGNvbHVtbldpZHRoO1xuICB9LFxuICBnZXRSb3dPZmZzZXQ6IGZ1bmN0aW9uIGdldFJvd09mZnNldChfcmVmMywgaW5kZXgpIHtcbiAgICB2YXIgcm93SGVpZ2h0ID0gX3JlZjMucm93SGVpZ2h0O1xuICAgIHJldHVybiBpbmRleCAqIHJvd0hlaWdodDtcbiAgfSxcbiAgZ2V0Um93SGVpZ2h0OiBmdW5jdGlvbiBnZXRSb3dIZWlnaHQoX3JlZjQsIGluZGV4KSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWY0LnJvd0hlaWdodDtcbiAgICByZXR1cm4gcm93SGVpZ2h0O1xuICB9LFxuICBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodDogZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQoX3JlZjUpIHtcbiAgICB2YXIgcm93Q291bnQgPSBfcmVmNS5yb3dDb3VudCxcbiAgICAgICAgcm93SGVpZ2h0ID0gX3JlZjUucm93SGVpZ2h0O1xuICAgIHJldHVybiByb3dIZWlnaHQgKiByb3dDb3VudDtcbiAgfSxcbiAgZ2V0RXN0aW1hdGVkVG90YWxXaWR0aDogZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aChfcmVmNikge1xuICAgIHZhciBjb2x1bW5Db3VudCA9IF9yZWY2LmNvbHVtbkNvdW50LFxuICAgICAgICBjb2x1bW5XaWR0aCA9IF9yZWY2LmNvbHVtbldpZHRoO1xuICAgIHJldHVybiBjb2x1bW5XaWR0aCAqIGNvbHVtbkNvdW50O1xuICB9LFxuICBnZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudChfcmVmNywgY29sdW1uSW5kZXgsIGFsaWduLCBzY3JvbGxMZWZ0LCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKSB7XG4gICAgdmFyIGNvbHVtbkNvdW50ID0gX3JlZjcuY29sdW1uQ291bnQsXG4gICAgICAgIGNvbHVtbldpZHRoID0gX3JlZjcuY29sdW1uV2lkdGgsXG4gICAgICAgIHdpZHRoID0gX3JlZjcud2lkdGg7XG4gICAgdmFyIGxhc3RDb2x1bW5PZmZzZXQgPSBNYXRoLm1heCgwLCBjb2x1bW5Db3VudCAqIGNvbHVtbldpZHRoIC0gd2lkdGgpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1pbihsYXN0Q29sdW1uT2Zmc2V0LCBjb2x1bW5JbmRleCAqIGNvbHVtbldpZHRoKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gTWF0aC5tYXgoMCwgY29sdW1uSW5kZXggKiBjb2x1bW5XaWR0aCAtIHdpZHRoICsgc2Nyb2xsYmFyU2l6ZSArIGNvbHVtbldpZHRoKTtcblxuICAgIGlmIChhbGlnbiA9PT0gJ3NtYXJ0Jykge1xuICAgICAgaWYgKHNjcm9sbExlZnQgPj0gbWluT2Zmc2V0IC0gd2lkdGggJiYgc2Nyb2xsTGVmdCA8PSBtYXhPZmZzZXQgKyB3aWR0aCkge1xuICAgICAgICBhbGlnbiA9ICdhdXRvJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWduID0gJ2NlbnRlcic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuXG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuXG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAvLyBcIkNlbnRlcmVkXCIgb2Zmc2V0IGlzIHVzdWFsbHkgdGhlIGF2ZXJhZ2Ugb2YgdGhlIG1pbiBhbmQgbWF4LlxuICAgICAgICAvLyBCdXQgbmVhciB0aGUgZWRnZXMgb2YgdGhlIGxpc3QsIHRoaXMgZG9lc24ndCBob2xkIHRydWUuXG4gICAgICAgIHZhciBtaWRkbGVPZmZzZXQgPSBNYXRoLnJvdW5kKG1pbk9mZnNldCArIChtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIC8gMik7XG5cbiAgICAgICAgaWYgKG1pZGRsZU9mZnNldCA8IE1hdGguY2VpbCh3aWR0aCAvIDIpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7IC8vIG5lYXIgdGhlIGJlZ2lubmluZ1xuICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZU9mZnNldCA+IGxhc3RDb2x1bW5PZmZzZXQgKyBNYXRoLmZsb29yKHdpZHRoIC8gMikpIHtcbiAgICAgICAgICByZXR1cm4gbGFzdENvbHVtbk9mZnNldDsgLy8gbmVhciB0aGUgZW5kXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1pZGRsZU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdhdXRvJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChzY3JvbGxMZWZ0ID49IG1pbk9mZnNldCAmJiBzY3JvbGxMZWZ0IDw9IG1heE9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBzY3JvbGxMZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKG1pbk9mZnNldCA+IG1heE9mZnNldCkge1xuICAgICAgICAgIC8vIEJlY2F1c2Ugd2Ugb25seSB0YWtlIGludG8gYWNjb3VudCB0aGUgc2Nyb2xsYmFyIHNpemUgd2hlbiBjYWxjdWxhdGluZyBtaW5PZmZzZXRcbiAgICAgICAgICAvLyB0aGlzIHZhbHVlIGNhbiBiZSBsYXJnZXIgdGhhbiBtYXhPZmZzZXQgd2hlbiBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxMZWZ0IDwgbWluT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudDogZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9yUm93QW5kQWxpZ25tZW50KF9yZWY4LCByb3dJbmRleCwgYWxpZ24sIHNjcm9sbFRvcCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSkge1xuICAgIHZhciByb3dIZWlnaHQgPSBfcmVmOC5yb3dIZWlnaHQsXG4gICAgICAgIGhlaWdodCA9IF9yZWY4LmhlaWdodCxcbiAgICAgICAgcm93Q291bnQgPSBfcmVmOC5yb3dDb3VudDtcbiAgICB2YXIgbGFzdFJvd09mZnNldCA9IE1hdGgubWF4KDAsIHJvd0NvdW50ICogcm93SGVpZ2h0IC0gaGVpZ2h0KTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gTWF0aC5taW4obGFzdFJvd09mZnNldCwgcm93SW5kZXggKiByb3dIZWlnaHQpO1xuICAgIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCByb3dJbmRleCAqIHJvd0hlaWdodCAtIGhlaWdodCArIHNjcm9sbGJhclNpemUgKyByb3dIZWlnaHQpO1xuXG4gICAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgICBpZiAoc2Nyb2xsVG9wID49IG1pbk9mZnNldCAtIGhlaWdodCAmJiBzY3JvbGxUb3AgPD0gbWF4T2Zmc2V0ICsgaGVpZ2h0KSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIC8vIFwiQ2VudGVyZWRcIiBvZmZzZXQgaXMgdXN1YWxseSB0aGUgYXZlcmFnZSBvZiB0aGUgbWluIGFuZCBtYXguXG4gICAgICAgIC8vIEJ1dCBuZWFyIHRoZSBlZGdlcyBvZiB0aGUgbGlzdCwgdGhpcyBkb2Vzbid0IGhvbGQgdHJ1ZS5cbiAgICAgICAgdmFyIG1pZGRsZU9mZnNldCA9IE1hdGgucm91bmQobWluT2Zmc2V0ICsgKG1heE9mZnNldCAtIG1pbk9mZnNldCkgLyAyKTtcblxuICAgICAgICBpZiAobWlkZGxlT2Zmc2V0IDwgTWF0aC5jZWlsKGhlaWdodCAvIDIpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7IC8vIG5lYXIgdGhlIGJlZ2lubmluZ1xuICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZU9mZnNldCA+IGxhc3RSb3dPZmZzZXQgKyBNYXRoLmZsb29yKGhlaWdodCAvIDIpKSB7XG4gICAgICAgICAgcmV0dXJuIGxhc3RSb3dPZmZzZXQ7IC8vIG5lYXIgdGhlIGVuZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtaWRkbGVPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnYXV0byc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoc2Nyb2xsVG9wID49IG1pbk9mZnNldCAmJiBzY3JvbGxUb3AgPD0gbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHNjcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIGlmIChtaW5PZmZzZXQgPiBtYXhPZmZzZXQpIHtcbiAgICAgICAgICAvLyBCZWNhdXNlIHdlIG9ubHkgdGFrZSBpbnRvIGFjY291bnQgdGhlIHNjcm9sbGJhciBzaXplIHdoZW4gY2FsY3VsYXRpbmcgbWluT2Zmc2V0XG4gICAgICAgICAgLy8gdGhpcyB2YWx1ZSBjYW4gYmUgbGFyZ2VyIHRoYW4gbWF4T2Zmc2V0IHdoZW4gYXQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsVG9wIDwgbWluT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQoX3JlZjksIHNjcm9sbExlZnQpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmOS5jb2x1bW5XaWR0aCxcbiAgICAgICAgY29sdW1uQ291bnQgPSBfcmVmOS5jb2x1bW5Db3VudDtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oY29sdW1uQ291bnQgLSAxLCBNYXRoLmZsb29yKHNjcm9sbExlZnQgLyBjb2x1bW5XaWR0aCkpKTtcbiAgfSxcbiAgZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleDogZnVuY3Rpb24gZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleChfcmVmMTAsIHN0YXJ0SW5kZXgsIHNjcm9sbExlZnQpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmMTAuY29sdW1uV2lkdGgsXG4gICAgICAgIGNvbHVtbkNvdW50ID0gX3JlZjEwLmNvbHVtbkNvdW50LFxuICAgICAgICB3aWR0aCA9IF9yZWYxMC53aWR0aDtcbiAgICB2YXIgbGVmdCA9IHN0YXJ0SW5kZXggKiBjb2x1bW5XaWR0aDtcbiAgICB2YXIgbnVtVmlzaWJsZUNvbHVtbnMgPSBNYXRoLmNlaWwoKHdpZHRoICsgc2Nyb2xsTGVmdCAtIGxlZnQpIC8gY29sdW1uV2lkdGgpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5Db3VudCAtIDEsIHN0YXJ0SW5kZXggKyBudW1WaXNpYmxlQ29sdW1ucyAtIDEgLy8gLTEgaXMgYmVjYXVzZSBzdG9wIGluZGV4IGlzIGluY2x1c2l2ZVxuICAgICkpO1xuICB9LFxuICBnZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0OiBmdW5jdGlvbiBnZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0KF9yZWYxMSwgc2Nyb2xsVG9wKSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWYxMS5yb3dIZWlnaHQsXG4gICAgICAgIHJvd0NvdW50ID0gX3JlZjExLnJvd0NvdW50O1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihyb3dDb3VudCAtIDEsIE1hdGguZmxvb3Ioc2Nyb2xsVG9wIC8gcm93SGVpZ2h0KSkpO1xuICB9LFxuICBnZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4OiBmdW5jdGlvbiBnZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4KF9yZWYxMiwgc3RhcnRJbmRleCwgc2Nyb2xsVG9wKSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWYxMi5yb3dIZWlnaHQsXG4gICAgICAgIHJvd0NvdW50ID0gX3JlZjEyLnJvd0NvdW50LFxuICAgICAgICBoZWlnaHQgPSBfcmVmMTIuaGVpZ2h0O1xuICAgIHZhciB0b3AgPSBzdGFydEluZGV4ICogcm93SGVpZ2h0O1xuICAgIHZhciBudW1WaXNpYmxlUm93cyA9IE1hdGguY2VpbCgoaGVpZ2h0ICsgc2Nyb2xsVG9wIC0gdG9wKSAvIHJvd0hlaWdodCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHJvd0NvdW50IC0gMSwgc3RhcnRJbmRleCArIG51bVZpc2libGVSb3dzIC0gMSAvLyAtMSBpcyBiZWNhdXNlIHN0b3AgaW5kZXggaXMgaW5jbHVzaXZlXG4gICAgKSk7XG4gIH0sXG4gIGluaXRJbnN0YW5jZVByb3BzOiBmdW5jdGlvbiBpbml0SW5zdGFuY2VQcm9wcyhwcm9wcykgey8vIE5vb3BcbiAgfSxcbiAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZTogdHJ1ZSxcbiAgdmFsaWRhdGVQcm9wczogZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhfcmVmMTMpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmMTMuY29sdW1uV2lkdGgsXG4gICAgICAgIHJvd0hlaWdodCA9IF9yZWYxMy5yb3dIZWlnaHQ7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBjb2x1bW5XaWR0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJjb2x1bW5XaWR0aFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIG51bWJlci4gJyArIChcIlxcXCJcIiArIChjb2x1bW5XaWR0aCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBjb2x1bW5XaWR0aCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHJvd0hlaWdodCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJyb3dIZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBudW1iZXIuICcgKyAoXCJcXFwiXCIgKyAocm93SGVpZ2h0ID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJvd0hlaWdodCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBGaXhlZFNpemVMaXN0ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUxpc3RDb21wb25lbnQoe1xuICBnZXRJdGVtT2Zmc2V0OiBmdW5jdGlvbiBnZXRJdGVtT2Zmc2V0KF9yZWYsIGluZGV4KSB7XG4gICAgdmFyIGl0ZW1TaXplID0gX3JlZi5pdGVtU2l6ZTtcbiAgICByZXR1cm4gaW5kZXggKiBpdGVtU2l6ZTtcbiAgfSxcbiAgZ2V0SXRlbVNpemU6IGZ1bmN0aW9uIGdldEl0ZW1TaXplKF9yZWYyLCBpbmRleCkge1xuICAgIHZhciBpdGVtU2l6ZSA9IF9yZWYyLml0ZW1TaXplO1xuICAgIHJldHVybiBpdGVtU2l6ZTtcbiAgfSxcbiAgZ2V0RXN0aW1hdGVkVG90YWxTaXplOiBmdW5jdGlvbiBnZXRFc3RpbWF0ZWRUb3RhbFNpemUoX3JlZjMpIHtcbiAgICB2YXIgaXRlbUNvdW50ID0gX3JlZjMuaXRlbUNvdW50LFxuICAgICAgICBpdGVtU2l6ZSA9IF9yZWYzLml0ZW1TaXplO1xuICAgIHJldHVybiBpdGVtU2l6ZSAqIGl0ZW1Db3VudDtcbiAgfSxcbiAgZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KF9yZWY0LCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBfcmVmNC5kaXJlY3Rpb24sXG4gICAgICAgIGhlaWdodCA9IF9yZWY0LmhlaWdodCxcbiAgICAgICAgaXRlbUNvdW50ID0gX3JlZjQuaXRlbUNvdW50LFxuICAgICAgICBpdGVtU2l6ZSA9IF9yZWY0Lml0ZW1TaXplLFxuICAgICAgICBsYXlvdXQgPSBfcmVmNC5sYXlvdXQsXG4gICAgICAgIHdpZHRoID0gX3JlZjQud2lkdGg7XG4gICAgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBzaXplID0gaXNIb3Jpem9udGFsID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgdmFyIGxhc3RJdGVtT2Zmc2V0ID0gTWF0aC5tYXgoMCwgaXRlbUNvdW50ICogaXRlbVNpemUgLSBzaXplKTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gTWF0aC5taW4obGFzdEl0ZW1PZmZzZXQsIGluZGV4ICogaXRlbVNpemUpO1xuICAgIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCBpbmRleCAqIGl0ZW1TaXplIC0gc2l6ZSArIGl0ZW1TaXplKTtcblxuICAgIGlmIChhbGlnbiA9PT0gJ3NtYXJ0Jykge1xuICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgLSBzaXplICYmIHNjcm9sbE9mZnNldCA8PSBtYXhPZmZzZXQgKyBzaXplKSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBcIkNlbnRlcmVkXCIgb2Zmc2V0IGlzIHVzdWFsbHkgdGhlIGF2ZXJhZ2Ugb2YgdGhlIG1pbiBhbmQgbWF4LlxuICAgICAgICAgIC8vIEJ1dCBuZWFyIHRoZSBlZGdlcyBvZiB0aGUgbGlzdCwgdGhpcyBkb2Vzbid0IGhvbGQgdHJ1ZS5cbiAgICAgICAgICB2YXIgbWlkZGxlT2Zmc2V0ID0gTWF0aC5yb3VuZChtaW5PZmZzZXQgKyAobWF4T2Zmc2V0IC0gbWluT2Zmc2V0KSAvIDIpO1xuXG4gICAgICAgICAgaWYgKG1pZGRsZU9mZnNldCA8IE1hdGguY2VpbChzaXplIC8gMikpIHtcbiAgICAgICAgICAgIHJldHVybiAwOyAvLyBuZWFyIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZU9mZnNldCA+IGxhc3RJdGVtT2Zmc2V0ICsgTWF0aC5mbG9vcihzaXplIC8gMikpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SXRlbU9mZnNldDsgLy8gbmVhciB0aGUgZW5kXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtaWRkbGVPZmZzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBzY3JvbGxPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsT2Zmc2V0IDwgbWluT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIGdldFN0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldFN0YXJ0SW5kZXhGb3JPZmZzZXQoX3JlZjUsIG9mZnNldCkge1xuICAgIHZhciBpdGVtQ291bnQgPSBfcmVmNS5pdGVtQ291bnQsXG4gICAgICAgIGl0ZW1TaXplID0gX3JlZjUuaXRlbVNpemU7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKGl0ZW1Db3VudCAtIDEsIE1hdGguZmxvb3Iob2Zmc2V0IC8gaXRlbVNpemUpKSk7XG4gIH0sXG4gIGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXgoX3JlZjYsIHN0YXJ0SW5kZXgsIHNjcm9sbE9mZnNldCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBfcmVmNi5kaXJlY3Rpb24sXG4gICAgICAgIGhlaWdodCA9IF9yZWY2LmhlaWdodCxcbiAgICAgICAgaXRlbUNvdW50ID0gX3JlZjYuaXRlbUNvdW50LFxuICAgICAgICBpdGVtU2l6ZSA9IF9yZWY2Lml0ZW1TaXplLFxuICAgICAgICBsYXlvdXQgPSBfcmVmNi5sYXlvdXQsXG4gICAgICAgIHdpZHRoID0gX3JlZjYud2lkdGg7XG4gICAgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBvZmZzZXQgPSBzdGFydEluZGV4ICogaXRlbVNpemU7XG4gICAgdmFyIHNpemUgPSBpc0hvcml6b250YWwgPyB3aWR0aCA6IGhlaWdodDtcbiAgICB2YXIgbnVtVmlzaWJsZUl0ZW1zID0gTWF0aC5jZWlsKChzaXplICsgc2Nyb2xsT2Zmc2V0IC0gb2Zmc2V0KSAvIGl0ZW1TaXplKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oaXRlbUNvdW50IC0gMSwgc3RhcnRJbmRleCArIG51bVZpc2libGVJdGVtcyAtIDEgLy8gLTEgaXMgYmVjYXVzZSBzdG9wIGluZGV4IGlzIGluY2x1c2l2ZVxuICAgICkpO1xuICB9LFxuICBpbml0SW5zdGFuY2VQcm9wczogZnVuY3Rpb24gaW5pdEluc3RhbmNlUHJvcHMocHJvcHMpIHsvLyBOb29wXG4gIH0sXG4gIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2U6IHRydWUsXG4gIHZhbGlkYXRlUHJvcHM6IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoX3JlZjcpIHtcbiAgICB2YXIgaXRlbVNpemUgPSBfcmVmNy5pdGVtU2l6ZTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW1TaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIml0ZW1TaXplXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgbnVtYmVyLiAnICsgKFwiXFxcIlwiICsgKGl0ZW1TaXplID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGl0ZW1TaXplKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuLy8gUHVsbGVkIGZyb20gcmVhY3QtY29tcGF0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC1jb21wYXQvYmxvYi83YzVkZTAwZTdjODVlMmZmZDAxMWJmM2FmMDI4OTliNjNmNjk5ZDNhL3NyYy9pbmRleC5qcyNMMzQ5XG5mdW5jdGlvbiBzaGFsbG93RGlmZmVycyhwcmV2LCBuZXh0KSB7XG4gIGZvciAodmFyIGF0dHJpYnV0ZSBpbiBwcmV2KSB7XG4gICAgaWYgKCEoYXR0cmlidXRlIGluIG5leHQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfYXR0cmlidXRlIGluIG5leHQpIHtcbiAgICBpZiAocHJldltfYXR0cmlidXRlXSAhPT0gbmV4dFtfYXR0cmlidXRlXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBJdCBrbm93cyB0byBjb21wYXJlIGluZGl2aWR1YWwgc3R5bGUgcHJvcHMgYW5kIGlnbm9yZSB0aGUgd3JhcHBlciBvYmplY3QuXG4vLyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0bWVtb1xuXG5mdW5jdGlvbiBhcmVFcXVhbChwcmV2UHJvcHMsIG5leHRQcm9wcykge1xuICB2YXIgcHJldlN0eWxlID0gcHJldlByb3BzLnN0eWxlLFxuICAgICAgcHJldlJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcmV2UHJvcHMsIFtcInN0eWxlXCJdKTtcblxuICB2YXIgbmV4dFN0eWxlID0gbmV4dFByb3BzLnN0eWxlLFxuICAgICAgbmV4dFJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShuZXh0UHJvcHMsIFtcInN0eWxlXCJdKTtcblxuICByZXR1cm4gIXNoYWxsb3dEaWZmZXJzKHByZXZTdHlsZSwgbmV4dFN0eWxlKSAmJiAhc2hhbGxvd0RpZmZlcnMocHJldlJlc3QsIG5leHRSZXN0KTtcbn1cblxuLy8gSXQga25vd3MgdG8gY29tcGFyZSBpbmRpdmlkdWFsIHN0eWxlIHByb3BzIGFuZCBpZ25vcmUgdGhlIHdyYXBwZXIgb2JqZWN0LlxuLy8gU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1jb21wb25lbnQuaHRtbCNzaG91bGRjb21wb25lbnR1cGRhdGVcblxuZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHJldHVybiAhYXJlRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCBzaGFsbG93RGlmZmVycyh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xufVxuXG5leHBvcnQgeyBWYXJpYWJsZVNpemVHcmlkLCBWYXJpYWJsZVNpemVMaXN0LCBGaXhlZFNpemVHcmlkLCBGaXhlZFNpemVMaXN0LCBhcmVFcXVhbCwgc2hvdWxkQ29tcG9uZW50VXBkYXRlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDEgPyBsZW4gLSAxIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMTsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAxXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cblxuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KG51bGwsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfZG9tX187Il0sInNvdXJjZVJvb3QiOiIifQ==