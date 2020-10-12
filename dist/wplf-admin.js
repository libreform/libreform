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

    if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(fields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(additionalFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(newFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(deletedFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(historyFields) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(allowSave) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(submissionsEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(editorEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(thankYouEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(previewEl) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(publishButton) && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__["default"])(sidebarFieldTemplate)) {
      var _globalData$post;

      var editorIsReadonly = $(editorEl).attr('readonly') ? true : false;
      var initialState = {
        historyFields: JSON.parse(Object(_lib_get_attribute__WEBPACK_IMPORTED_MODULE_6__["default"])(historyFields, 'value') || '{}'),
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
/* harmony import */ var _lib_confirm_delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/confirm-delete */ "./assets/scripts/lib/confirm-delete.ts");
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
                ok = response.ok, headers = response.headers, data = response.data, kind = response.kind;
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

      if (!submission) {
        _lib_log__WEBPACK_IMPORTED_MODULE_5__["default"].error('No submission found for index', index, submissions);
        return null;
      }

      content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Submission__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    contentLabel: _lib_global_data__WEBPACK_IMPORTED_MODULE_7__["default"].i18n.formSubmission,
    className: "wplf-submissionModal",
    overlayClassName: "wplf-submissionModal__overlay"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wplf-submissionModal__wrapper"
  }, modalSubmission ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Submission__WEBPACK_IMPORTED_MODULE_8__["DetailedSubmission"], {
    submission: modalSubmission
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wplf-submissionModal__buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button wplf-delete",
    type: "button",
    onClick: function onClick() {
      return Object(_lib_confirm_delete__WEBPACK_IMPORTED_MODULE_10__["default"])(modalSubmission);
    }
  }, _lib_global_data__WEBPACK_IMPORTED_MODULE_7__["default"].i18n.delete), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: closeModal,
    className: "button wplf-close"
  }, _lib_global_data__WEBPACK_IMPORTED_MODULE_7__["default"].i18n.close))) : null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XUExGL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9XUExGL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtYWRkb25zLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtYWRtaW4udHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi1mb3JtLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi1zdG9yYWdlLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtdGFicy50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvY2xhc3Nlcy93cGxmLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9saWIvYXBpLWNsaWVudC50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvbGliL2NvbmZpcm0tZGVsZXRlLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9saWIvZW5zdXJlLW51bS50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvbGliL2dldC1hdHRyaWJ1dGUudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi9nbG9iYWwtZGF0YS50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvbGliL2lzLWVsZW1lbnRpc2gudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi9sb2cudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi93YWl0LnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9yZWFjdC9TdWJtaXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvcmVhY3QvU3VibWlzc2lvbkxpc3QudHN4Iiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy90eXBlcy50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvd3BsZi1hZG1pbi50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3N0eWxlcy93cGxmLWFkbWluLnNjc3MiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9hYm9ydC1jb250cm9sbGVyL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL21lbW9pemUtb25lL2Rpc3QvbWVtb2l6ZS1vbmUuZXNtLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC5lcy5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9jb21wb25lbnRzL01vZGFsLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2NvbXBvbmVudHMvTW9kYWxQb3J0YWwuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9hcmlhQXBwSGlkZXIuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9ib2R5VHJhcC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2NsYXNzTGlzdC5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL2ZvY3VzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL3BvcnRhbE9wZW5JbnN0YW5jZXMuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zYWZlSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vV1BMRi8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC9saWIvaGVscGVycy9zY29wZVRhYi5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsL2xpYi9oZWxwZXJzL3RhYmJhYmxlLmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwvbGliL2luZGV4LmpzIiwid2VicGFjazovL1dQTEYvLi9ub2RlX21vZHVsZXMvcmVhY3Qtd2luZG93LWluZmluaXRlLWxvYWRlci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXdpbmRvdy9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyIsIndlYnBhY2s6Ly9XUExGL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJSZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn0iLCJ3ZWJwYWNrOi8vV1BMRi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJSZWFjdERPTVwiLFwicm9vdFwiOlwiUmVhY3RET01cIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJDQUEyQywyQkFBMkI7QUFDdEUsbURBQW1ELGlDQUFpQztBQUNwRix1QkFBdUIsMkRBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0EsYUFBYSwyREFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtGQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU8sRUFBRSwyREFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrR0FBK0c7QUFDL0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJHQUEyRztBQUMzRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsQ0FBQyxtREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0ZBQWM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsZ0dBQXNCLENBQUMsZ0dBQXNCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnR0FBc0IsQ0FBQyxnR0FBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDJEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsNEJBQTRCLDJEQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUEsMkVBQTJFOztBQUUzRTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQywyREFBVTtBQUMzQztBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRCxxQkFBcUIsMkRBQWE7QUFDbEM7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxhQUFvQjs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RCIsImZpbGUiOiJ3cGxmLWFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUmVhY3RcIiwgXCJSZWFjdERPTVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJXUExGXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIldQTEZcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBXUExGIGZyb20gJy4vd3BsZidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BMRl9BZGRvbnMge1xuICBjb25zdHJ1Y3Rvcih3cGxmSW5zdGFuY2U6IFdQTEYpIHt9XG59XG4iLCJpbXBvcnQgV1BMRl9FZGl0b3IgZnJvbSAnLi93cGxmLWVkaXRvcidcbmltcG9ydCBXUExGX1NldHRpbmdzIGZyb20gJy4vd3BsZi1zZXR0aW5ncydcbmltcG9ydCBXUExGX0FkZG9ucyBmcm9tICcuL3dwbGYtYWRkb25zJ1xuaW1wb3J0IFdQTEZfVGFicyBmcm9tICcuL3dwbGYtdGFicydcbmltcG9ydCBXUExGIGZyb20gJy4vd3BsZidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BMRl9BZG1pbiB7XG4gIGVkaXRvcj86IFdQTEZfRWRpdG9yXG4gIGFkZG9ucz86IFdQTEZfQWRkb25zXG4gIHNldHRpbmdzPzogV1BMRl9TZXR0aW5nc1xuICB0YWJzOiBXUExGX1RhYnNbXVxuXG4gIGNvbnN0cnVjdG9yKHdwbGZJbnN0YW5jZTogV1BMRikge1xuICAgIHRoaXMudGFicyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndwbGYtdGFicycpKS5tYXAoXG4gICAgICAoZWwpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBXUExGX1RhYnMoZWwpXG4gICAgICB9XG4gICAgKVxuXG4gICAgLy8gSW5pdCBzdHVmZiBiYXNlZCBvbiB3aGF0IHBhZ2Ugd2UncmUgb25cbiAgICBjb25zdCBjbGFzc0xpc3QgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdFxuXG4gICAgaWYgKFxuICAgICAgY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3N0LXR5cGUtbGlicmVmb3JtJykgJiZcbiAgICAgIChjbGFzc0xpc3QuY29udGFpbnMoJ3Bvc3QtcGhwJykgfHwgY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3N0LW5ldy1waHAnKSlcbiAgICApIHtcbiAgICAgIHRoaXMuZWRpdG9yID0gbmV3IFdQTEZfRWRpdG9yKHdwbGZJbnN0YW5jZSlcbiAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucygnbGlicmVmb3JtX3BhZ2Vfd3BsZlNldHRpbmdzJykpIHtcbiAgICAgIC8vIEluIHNldHRpbmdzIHBhZ2VcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgV1BMRl9TZXR0aW5ncyh3cGxmSW5zdGFuY2UpXG4gICAgfSBlbHNlIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ2xpYnJlZm9ybV9wYWdlX3dwbGZBZGRvbnMnKSkge1xuICAgICAgdGhpcy5hZGRvbnMgPSBuZXcgV1BMRl9BZGRvbnMod3BsZkluc3RhbmNlKVxuICAgIH1cbiAgfVxuXG4gIGdldEVkaXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JcbiAgfVxuXG4gIGdldEFkZG9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGRvbnNcbiAgfVxuXG4gIGdldFNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzXG4gIH1cblxuICBnZXRUYWJzKCkge1xuICAgIHJldHVybiB0aGlzLnRhYnNcbiAgfVxufVxuIiwiaW1wb3J0IGdsb2JhbERhdGEgZnJvbSAnLi4vbGliL2dsb2JhbC1kYXRhJ1xuaW1wb3J0IGNyZWF0ZUFwaUNsaWVudCBmcm9tICcuLi9saWIvYXBpLWNsaWVudCdcbmltcG9ydCBsb2cgZnJvbSAnLi4vbGliL2xvZydcbmltcG9ydCB7IHdhaXRGb3JOZXh0VGljayB9IGZyb20gJy4uL2xpYi93YWl0J1xuaW1wb3J0IGlzRWxlbWVudGlzaCBmcm9tICcuLi9saWIvaXMtZWxlbWVudGlzaCdcblxuaW1wb3J0IHsgQXBpUmVzcG9uc2VLaW5kLCBGaWVsZCwgTGlzdCwgV1BMRl9FZGl0b3JTdGF0ZSB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IGdldEF0dHJpYnV0ZSBmcm9tICcuLi9saWIvZ2V0LWF0dHJpYnV0ZSdcblxuaW1wb3J0IFdQTEYgZnJvbSAnLi93cGxmJ1xuaW1wb3J0IHsgV1BMRl9Gb3JtIH0gZnJvbSAnLi93cGxmLWZvcm0nXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgU3VibWlzc2lvbkxpc3QgZnJvbSAnLi4vcmVhY3QvU3VibWlzc2lvbkxpc3QnXG5cbmNvbnN0IHsgYWJvcnQsIHJlcXVlc3QsIHNpZ25hbCB9ID0gY3JlYXRlQXBpQ2xpZW50KClcbmNvbnN0IHsgaTE4biB9ID0gZ2xvYmFsRGF0YVxuXG5jb25zdCAkID0gd2luZG93LmpRdWVyeVxuY29uc3QgXyA9IHdpbmRvdy5fXG5jb25zdCB3cCA9IHdpbmRvdy53cFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUExGX0VkaXRvciB7XG4gIHdwbGY6IFdQTEZcbiAgc3RhdGU6IFdQTEZfRWRpdG9yU3RhdGVcblxuICBmb3JtSW5zdGFuY2U6IFdQTEZfRm9ybSB8IG51bGwgPSBudWxsXG4gIGlucHV0czogTGlzdDxFbGVtZW50PlxuICBwcmV2aWV3RWw6IEVsZW1lbnQgLy8gVGhpcyBpcyBFbGVtZW50IG9uIHB1cnBvc2UsIHdlIGNhbid0IHVzZSBhIGZvcm0gZWxlbWVudCBkdWUgdG8gbmVzdGVkIGZvcm1zXG4gIHB1Ymxpc2hCdXR0b246IEVsZW1lbnRcbiAgZmllbGRUZW1wbGF0ZTogRWxlbWVudFxuXG4gIC8vIENvZGVtaXJyb3IgaW5zdGFuY2VzOlxuICBjb250ZW50RWRpdG9yOiBhbnlcbiAgc3VjY2Vzc01lc3NhZ2VFZGl0b3I6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHdwbGZJbnN0YW5jZTogV1BMRikge1xuICAgIGNvbnN0IGZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cGxmRmllbGRzJylcbiAgICBjb25zdCBhZGRpdGlvbmFsRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwbGZBZGRpdGlvbmFsRmllbGRzJylcbiAgICBjb25zdCBuZXdGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BsZk5ld0ZpZWxkcycpXG4gICAgY29uc3QgZGVsZXRlZEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cGxmRGVsZXRlZEZpZWxkcycpXG4gICAgY29uc3QgaGlzdG9yeUZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cGxmSGlzdG9yeUZpZWxkcycpXG4gICAgY29uc3QgYWxsb3dTYXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwbGZBbGxvd1NhdmUnKVxuICAgIGNvbnN0IHN1Ym1pc3Npb25zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy53cGxmLWVkaXRvciAud3BsZi1zdWJtaXNzaW9uTGlzdCdcbiAgICApXG4gICAgY29uc3QgZWRpdG9yRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3BsZi1lZGl0b3IgLndwbGYtY21FZGl0b3InKVxuICAgIGNvbnN0IHRoYW5rWW91RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy53cGxmLWFmdGVyU3VibWlzc2lvbiAud3BsZi1jbUVkaXRvcidcbiAgICApXG4gICAgY29uc3QgcHJldmlld0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndwbGYtZWRpdG9yX19wcmV2aWV3JylcbiAgICBjb25zdCBwdWJsaXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B1Ymxpc2gnKVxuICAgIGNvbnN0IHNpZGViYXJGaWVsZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcud3BsZi1mb3JtRmllbGRzID4gLndwbGYtZm9ybUZpZWxkc19fZmllbGQnXG4gICAgKVxuXG4gICAgaWYgKCFnbG9iYWxEYXRhLnNldHRpbmdzLmhhc1VuZmlsdGVyZWRIdG1sKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYWxlcnQoZ2xvYmFsRGF0YS5pMThuLm5vVW5maWx0ZXJlZEh0bWwpXG4gICAgICB9LCA1MDApIC8vIERlbGF5IGEgYml0IHRvIGFsbG93IHN0dWZmIHRvIGluaXQgYmVmb3JlIHNob3dpbmcgYSBibG9ja2luZyBlbGVtZW50XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgaXNFbGVtZW50aXNoKGZpZWxkcykgJiZcbiAgICAgIGlzRWxlbWVudGlzaChhZGRpdGlvbmFsRmllbGRzKSAmJlxuICAgICAgaXNFbGVtZW50aXNoKG5ld0ZpZWxkcykgJiZcbiAgICAgIGlzRWxlbWVudGlzaChkZWxldGVkRmllbGRzKSAmJlxuICAgICAgaXNFbGVtZW50aXNoKGhpc3RvcnlGaWVsZHMpICYmXG4gICAgICBpc0VsZW1lbnRpc2goYWxsb3dTYXZlKSAmJlxuICAgICAgaXNFbGVtZW50aXNoKHN1Ym1pc3Npb25zRWwpICYmXG4gICAgICBpc0VsZW1lbnRpc2goZWRpdG9yRWwpICYmXG4gICAgICBpc0VsZW1lbnRpc2godGhhbmtZb3VFbCkgJiZcbiAgICAgIGlzRWxlbWVudGlzaChwcmV2aWV3RWwpICYmXG4gICAgICBpc0VsZW1lbnRpc2gocHVibGlzaEJ1dHRvbikgJiZcbiAgICAgIGlzRWxlbWVudGlzaChzaWRlYmFyRmllbGRUZW1wbGF0ZSlcbiAgICApIHtcbiAgICAgIGNvbnN0IGVkaXRvcklzUmVhZG9ubHkgPSAkKGVkaXRvckVsKS5hdHRyKCdyZWFkb25seScpID8gdHJ1ZSA6IGZhbHNlXG4gICAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIGhpc3RvcnlGaWVsZHM6IEpTT04ucGFyc2UoZ2V0QXR0cmlidXRlKGhpc3RvcnlGaWVsZHMsICd2YWx1ZScpIHx8ICd7fScpLCAvLyBXaWxsIHN0YXkgc3RhdGljIHRocm91Z2ggdW50aWwgdGhlIHBhZ2UgaXMgcmVmcmVzaGVkIGFnYWluXG5cbiAgICAgICAgZmllbGRzOiBKU09OLnBhcnNlKGdldEF0dHJpYnV0ZShmaWVsZHMsICd2YWx1ZScpIHx8ICdudWxsJyksXG4gICAgICAgIGFkZGl0aW9uYWxGaWVsZHM6IEpTT04ucGFyc2UoXG4gICAgICAgICAgZ2V0QXR0cmlidXRlKGFkZGl0aW9uYWxGaWVsZHMsICd2YWx1ZScpIHx8ICdudWxsJ1xuICAgICAgICApLFxuICAgICAgICBuZXdGaWVsZHM6IFtdLFxuICAgICAgICBkZWxldGVkRmllbGRzOiBbXSxcbiAgICAgICAgYWxsb3dTYXZlOiBmYWxzZSxcbiAgICAgIH1cblxuICAgICAgdGhpcy53cGxmID0gd3BsZkluc3RhbmNlXG4gICAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlXG4gICAgICB0aGlzLmlucHV0cyA9IHtcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBhZGRpdGlvbmFsRmllbGRzLFxuICAgICAgICBuZXdGaWVsZHMsXG4gICAgICAgIGRlbGV0ZWRGaWVsZHMsXG4gICAgICAgIGhpc3RvcnlGaWVsZHMsXG4gICAgICAgIGFsbG93U2F2ZSxcbiAgICAgIH1cblxuICAgICAgdGhpcy5maWVsZFRlbXBsYXRlID0gc2lkZWJhckZpZWxkVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnRcbiAgICAgIHRoaXMuZmllbGRUZW1wbGF0ZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG5cbiAgICAgIHRoaXMucHJldmlld0VsID0gcHJldmlld0VsXG4gICAgICB0aGlzLnB1Ymxpc2hCdXR0b24gPSBwdWJsaXNoQnV0dG9uXG4gICAgICB0aGlzLmNvbnRlbnRFZGl0b3IgPSBlZGl0b3JJc1JlYWRvbmx5XG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHdwLmNvZGVFZGl0b3IuaW5pdGlhbGl6ZSgkKGVkaXRvckVsKSwgZ2xvYmFsRGF0YS5jb2RlTWlycm9yKVxuICAgICAgdGhpcy5zdWNjZXNzTWVzc2FnZUVkaXRvciA9IHdwLmNvZGVFZGl0b3IuaW5pdGlhbGl6ZShcbiAgICAgICAgJCh0aGFua1lvdUVsKSxcbiAgICAgICAgZ2xvYmFsRGF0YS5jb2RlTWlycm9yXG4gICAgICApXG4gICAgICB0aGlzLmhhbmRsZUNvbnRlbnRDaGFuZ2UgPSB0aGlzLmhhbmRsZUNvbnRlbnRDaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgICBpZiAoIWVkaXRvcklzUmVhZG9ubHkpIHtcbiAgICAgICAgLy8gSWYgdGhlIGVkaXRvciBpcyBpbiByZWFkLW9ubHkgbW9kZSwgbm8gbmVlZCB0byByZWZyZXNoIHRoZSBwcmV2aWV3IGFzIGl0IGNhbid0IGNoYW5nZSBhbnl3YXkuXG5cbiAgICAgICAgdGhpcy5jb250ZW50RWRpdG9yLmNvZGVtaXJyb3Iub24oXG4gICAgICAgICAgJ2NoYW5nZXMnLFxuICAgICAgICAgIF8uZGVib3VuY2UodGhpcy5oYW5kbGVDb250ZW50Q2hhbmdlLCAxMDAwKVxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5oYW5kbGVDb250ZW50Q2hhbmdlKHRoaXMuY29udGVudEVkaXRvci5jb2RlbWlycm9yKSAvLyBUcmlnZ2VycyBwcmV2aWV3IGJ1aWxkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZUNvbnRlbnRDaGFuZ2UoZWRpdG9yRWwuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWdsb2JhbERhdGEuc2V0dGluZ3MuaGFzVW5maWx0ZXJlZEh0bWwpIHtcbiAgICAgICAgdGhpcy50cnlUb1ByZXZlbnRFZGl0KClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybUlkID0gZ2xvYmFsRGF0YS5wb3N0Py5JRCB8fCBudWxsXG5cbiAgICAgIGlmIChmb3JtSWQpIHtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBTdWJtaXNzaW9uTGlzdCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZm9ybUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICApLFxuICAgICAgICAgIHN1Ym1pc3Npb25zRWxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdNaXNzaW5nIHNvbWUgb3IgYWxsIG9mIHRoZSByZXF1aXJlZCBlbGVtZW50cyB0byBydW4gV1BMRl9FZGl0b3InXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUoXG4gICAgZm4gPSAoY3VycmVudFN0YXRlOiBXUExGX0VkaXRvclN0YXRlKTogUGFydGlhbDxXUExGX0VkaXRvclN0YXRlPiA9PiAoe30pXG4gICkge1xuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBuZXdTdGF0ZSA9IGZuKGN1cnJlbnRTdGF0ZSlcblxuICAgIGlmICghbmV3U3RhdGUpIHtcbiAgICAgIC8vIG5vIG9wXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4uY3VycmVudFN0YXRlLFxuICAgICAgLi4ubmV3U3RhdGUsXG4gICAgfVxuXG4gICAgdGhpcy5hZnRlclN0YXRlQ2hhbmdlKClcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlXG4gIH1cblxuICB3cml0ZVN0YXRlKCkge1xuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuaW5wdXRzKS5mb3JFYWNoKChba2V5LCBlbF0pID0+IHtcbiAgICAgIGlmIChrZXkgaW4gdGhpcy5zdGF0ZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RhdGVba2V5XVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSA/ICcxJyA6ICcwJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFmdGVyU3RhdGVDaGFuZ2UoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKClcblxuICAgIE9iamVjdC5lbnRyaWVzKHN0YXRlKS5mb3JFYWNoKChbaywgdl0pID0+IHtcbiAgICAgIHN3aXRjaCAoaykge1xuICAgICAgICBjYXNlICdhbGxvd1NhdmUnOiB7XG4gICAgICAgICAgdGhpcy53cml0ZVN0YXRlKClcblxuICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICB0aGlzLnB1Ymxpc2hCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHVibGlzaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYnVuY2ggb2YgdGhpbmdzIGFuZCByZW1vdmUgdGhlIHN1Ym1pdCBidXR0b24sXG4gICAqIGJhY2tlbmQgd2lsbCBoYW5kbGUgaXQgaWYgbmVjZXNzYXJ5IGJ1dCBpdCdzIG5vdCBwcmV0dHkuXG4gICAqIEJhY2tlbmQgc2hvdWxkIGFsc28gcHJpbnQgYSBub3RpY2UgYWJvdmUgdGhlIGZvcm0uXG4gICAqL1xuICB0cnlUb1ByZXZlbnRFZGl0KCkge1xuICAgIC8vIE1pZ2h0IGFzIHdlbGwgdXNlIHRoZSBqUXVlcnkgc2luY2UgaXQncyB3cC1hZG1pbi5cblxuICAgICQoJyN0aXRsZScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSlcbiAgICAkKCcjY29udGVudCcpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSlcbiAgICAkKCcjcHVibGlzaCcpLnJlbW92ZSgpXG4gICAgJCgnI3NhdmUtcG9zdCcpLnJlbW92ZSgpXG4gIH1cblxuICAvLyBgZWRpdG9yYCBpcyBhIENvZGVNaXJyb3IgaW5zdGFuY2Ugb3IgYSBzdHJpbmdcbiAgYXN5bmMgaGFuZGxlQ29udGVudENoYW5nZShlZGl0b3I6IHN0cmluZyB8IGFueSkge1xuICAgIGxldCB7IHdwbGYsIGZvcm1JbnN0YW5jZSB9ID0gdGhpc1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0eXBlb2YgZWRpdG9yID09PSAnc3RyaW5nJyA/IGVkaXRvciA6IGVkaXRvci5nZXRWYWx1ZSgpXG5cbiAgICB0cnkge1xuICAgICAgaWYgKGZvcm1JbnN0YW5jZSkge1xuICAgICAgICB3cGxmLmRldGFjaChmb3JtSW5zdGFuY2UpXG4gICAgICAgIGZvcm1JbnN0YW5jZSA9IG51bGxcbiAgICAgIH1cblxuICAgICAgLy8gRGlzYWJsZSBzdWJtaXQgYnV0dG9uIHdoZW4gdGhlIGZpZWxkcyBjaGFuZ2VcbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgYWxsb3dTYXZlOiBmYWxzZSB9KSlcblxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVQcmV2aWV3KGNvbnRlbnQpXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZUZvcm1GaWVsZHNGcm9tUHJldmlldygpXG4gICAgICBhd2FpdCB0aGlzLnJlbW92ZVByb2JsZW1hdGljQXR0cmlidXRlc0Zyb21QcmV2aWV3KClcblxuICAgICAgdGhpcy53cml0ZVN0YXRlKClcbiAgICAgIGZvcm1JbnN0YW5jZSA9IHdwbGYuYXR0YWNoKHRoaXMucHJldmlld0VsKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZy5lcnJvcignRmFpbGVkIHRvIGdldCBwcmV2aWV3JywgZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyB1cGRhdGVQcmV2aWV3KGNvbnRlbnQ6IHN0cmluZykge1xuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicG9zdF9JRFwiXScpIGFzIEVsZW1lbnRcbiAgICBjb25zdCBmb3JtSWQgPSBwYXJzZUludChnZXRBdHRyaWJ1dGUoaWRFbCwgJ3ZhbHVlJykgfHwgJzAnLCAxMClcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LmFwcGVuZCgnY29udGVudCcsIGNvbnRlbnQpXG4gICAgYm9keS5hcHBlbmQoJ2Zvcm0nLCBmb3JtSWQudG9TdHJpbmcoKSlcblxuICAgIGdsb2JhbERhdGEubGFuZyAmJiBib2R5LmFwcGVuZCgnbGFuZycsIGdsb2JhbERhdGEubGFuZylcblxuICAgIGxldCBvYmplY3Q6IExpc3Q8YW55PiA9IHt9XG4gICAgYm9keS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBvYmplY3Rba2V5XSA9IHZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IHJlcSA9IGF3YWl0IHJlcXVlc3QoXG4gICAgICAnL3JlbmRlcicsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5LFxuICAgICAgfSxcbiAgICAgIEFwaVJlc3BvbnNlS2luZC5SZW5kZXJcbiAgICApXG5cbiAgICBpZiAocmVxLmtpbmQgPT09IEFwaVJlc3BvbnNlS2luZC5SZW5kZXIpIHtcbiAgICAgIGlmICgnZXJyb3InIGluIHJlcS5kYXRhKSB7XG4gICAgICAgIHRoaXMucHJldmlld0VsLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHJlcS5kYXRhKVxuICAgICAgfSBlbHNlIGlmICgnaHRtbCcgaW4gcmVxLmRhdGEpIHtcbiAgICAgICAgY29uc3QgdG1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCB7IGh0bWwgfSA9IHJlcS5kYXRhXG5cbiAgICAgICAgdG1wRWwuaW5uZXJIVE1MID0gaHRtbFxuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JOZXh0VGljaygpXG5cbiAgICAgICAgaWYgKHRtcEVsKSB7XG4gICAgICAgICAgY29uc3QgZm9ybSA9IHRtcEVsLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxuICAgICAgICAgIHRoaXMucHJldmlld0VsLmlubmVySFRNTCA9IGZvcm0gPyBmb3JtLmlubmVySFRNTCA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB3YWl0Rm9yTmV4dFRpY2soKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldER1cGxpY2F0ZU5hbWVzKG5hbWVzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiBfLnVuaXF1ZShcbiAgICAgIG5hbWVzLmZpbHRlcigobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lcy5maWx0ZXIoKG46IHN0cmluZykgPT4gbiA9PT0gbmFtZSkubGVuZ3RoID4gMVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICBjcmVhdGVGaWVsZEVsZW1lbnQoZmllbGQ6IEZpZWxkLCBlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmllbGRUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSkgYXMgRWxlbWVudFxuICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgcmVxdWlyZWQgfSA9IGZpZWxkXG4gICAgY29uc3QgbmFtZUVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzdHJvbmcnKSBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnN0IHR5cGVFbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcud3BsZi1mb3JtRmllbGRzX19maWVsZF9fdHlwZSBlbSdcbiAgICApIGFzIEhUTUxFbGVtZW50XG4gICAgY29uc3QgYWxlcnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cGxmLWZvcm1GaWVsZHNfX2ZpZWxkX19hbGVydCcpXG5cbiAgICBpZiAoaXNFbGVtZW50aXNoKG5hbWVFbCkgJiYgaXNFbGVtZW50aXNoKHR5cGVFbCkgJiYgaXNFbGVtZW50aXNoKGFsZXJ0KSkge1xuICAgICAgbmFtZUVsLmlubmVyVGV4dCA9IG5hbWVcbiAgICAgIHR5cGVFbC5pbm5lclRleHQgPSByZXF1aXJlZCA/IGByZXF1aXJlZCAke3R5cGV9YCA6IHR5cGVcblxuICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICBhbGVydC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgZXJyb3JNZXNzYWdlKVxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgPHN0cm9uZz4ke2kxOG4ucHJvYmxlbXN9PC9zdHJvbmc+JHtlcnJvck1lc3NhZ2V9YC5yZXBsYWNlKFxuICAgICAgICAgIC8oPzpcXHJcXG58XFxyfFxcbikvZyxcbiAgICAgICAgICAnPGJyPidcbiAgICAgICAgKVxuICAgICAgICBtZXNzYWdlcy5pbm5lckhUTUwgPSBtZXNzYWdlXG5cbiAgICAgICAgYWxlcnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIG1lc3NhZ2VzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNFbGVtZW50aXNoKGFsZXJ0LnBhcmVudE5vZGUpICYmIGFsZXJ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWxlcnQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUZvcm1GaWVsZHNGcm9tUHJldmlldygpIHtcbiAgICBjb25zdCB7IGhpc3RvcnlGaWVsZHMsIGFkZGl0aW9uYWxGaWVsZHMgfSA9IHRoaXMuZ2V0U3RhdGUoKVxuICAgIGNvbnN0IGVsID0gdGhpcy5wcmV2aWV3RWxcbiAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cGxmLWZvcm1GaWVsZHMnKVxuXG4gICAgaWYgKCFpc0VsZW1lbnRpc2goZmllbGRDb250YWluZXIpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZpZWxkIGNvbnRhaW5lciBkb2VzIG5vdCBleGlzdCcpXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhbGxvd1NhdmUgPSB0cnVlXG5cbiAgICAvLyBHZXQgYWxsIGlucHV0cyB3aXRoIGEgbmFtZSBhdHRyaWJ1dGUsIHllcywgZXZlbiBidXR0b24uXG4gICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbShcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24nKVxuICAgIClcbiAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSlcbiAgICAgIC5yZWR1Y2U8RmllbGRbXT4oKGFjYywgZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsICYmIGlzRWxlbWVudGlzaChlbCkpIHtcbiAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuXG4gICAgICAgICAgaWYgKCFmaWVsZE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBSZW1vdmUgYnJhY2tldHMgZnJvbSB0aGUgbmFtZSwgYmVjYXVzZSB0aGV5IGNhdXNlIHVzIGdyaWVmLlxuICAgICAgICAgICAqIFRoZSBicmFja2V0cyBhcmUgbm90IHZpc2libGUgaW4gdGhlIGFjdHVhbCBkYXRhLCB3aGljaCBraW5kYSBicmVha3MgYWxsIGNvbXBhcmlzb25zLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBmaWVsZE5hbWUucmVwbGFjZSgnW10nLCAnJylcbiAgICAgICAgICBjb25zdCB0eXBlID0gZWwuZ2V0QXR0cmlidXRlKCd0eXBlJykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJykgIT09IG51bGwgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICBjb25zdCBtdWx0aXBsZSA9IGZpZWxkTmFtZS5lbmRzV2l0aCgnW10nKVxuICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QudmFsdWVzKGVsLmF0dHJpYnV0ZXMpLnJlZHVjZTxMaXN0PHN0cmluZz4+KFxuICAgICAgICAgICAgKGFjYywgYXR0cikgPT4ge1xuICAgICAgICAgICAgICAvLyBUaGVzZSBhdHRyaWJ1dGVzIGFyZSBlaXRoZXIgaGFybWZ1bCBvciBhbHJlYWR5IGhhbmRsZWQuXG4gICAgICAgICAgICAgIGNvbnN0IHNraXBMaXN0ID0gWyduYW1lJywgJ3R5cGUnLCAncmVxdWlyZWQnXVxuXG4gICAgICAgICAgICAgIGlmIChza2lwTGlzdC5pbmNsdWRlcyhhdHRyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYWNjW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKVxuXG4gICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICAgIG11bHRpcGxlLFxuICAgICAgICAgICAgYXR0cmlidXRlcyxcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfSwgW10pXG5cbiAgICBjb25zdCBmaWVsZE5hbWVzID0gZmllbGRzLm1hcCgoZmllbGQpID0+IGZpZWxkLm5hbWUpXG4gICAgY29uc3QgZHVwbGljYXRlTmFtZXMgPSB0aGlzLmdldER1cGxpY2F0ZU5hbWVzKGZpZWxkTmFtZXMpXG5cbiAgICBmaWVsZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgY29uc3QgZmllbGRFcnJvcnMgPSBbXVxuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoIWZpZWxkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IG5hbWUsIHR5cGUgfSA9IGZpZWxkXG4gICAgICBjb25zdCBoaXN0b3J5RmllbGQgPSBPYmplY3QudmFsdWVzKGhpc3RvcnlGaWVsZHMpLmZpbmQoXG4gICAgICAgIChmaWVsZCkgPT4gZmllbGQubmFtZSA9PT0gbmFtZVxuICAgICAgKVxuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnXG5cbiAgICAgIC8vIG5hbWVzIGxpa2UgZmllbGRncm91cFtmaWVsZG5hbWVdIGFyZSBub3Qgc3VwcG9ydGVkXG4gICAgICBpZiAobmFtZS5tYXRjaCgvXFx3KlxcW1xcdypcXF0vKSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBgJHtlcnJvck1lc3NhZ2V9JHtpMThuLmdyb3VwZWROYW1lc05vdFN1cHBvcnRlZFlldH1cXG5gXG4gICAgICB9XG5cbiAgICAgIGlmIChkdXBsaWNhdGVOYW1lcyAmJiBkdXBsaWNhdGVOYW1lcy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAvLyBBbGxvdyBjaGVja2JveGVzIGV0YyB0byB3b3JrIG5vcm1hbGx5LCBlcnJvciBvdGhlcndpc2UuXG5cbiAgICAgICAgaWYgKCFmaWVsZC5tdWx0aXBsZSkge1xuICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGAke2Vycm9yTWVzc2FnZX0ke2kxOG4uZHVwbGljYXRlRmllbGROYW1lfSAke25hbWV9XFxuYFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGRpdGlvbmFsRmllbGRzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGAke2Vycm9yTWVzc2FnZX0ke2kxOG4uaWxsZWdhbE5hbWUucmVwbGFjZShcbiAgICAgICAgICAne25hbWV9JyxcbiAgICAgICAgICBuYW1lXG4gICAgICAgICl9XFxuYFxuICAgICAgfVxuXG4gICAgICBpZiAoaGlzdG9yeUZpZWxkICYmIGhpc3RvcnlGaWVsZC50eXBlICE9PSB0eXBlKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9IGAke2Vycm9yTWVzc2FnZX0ke2kxOG4uZmllbGRBbHJlYWR5RXhpc3RzSW5EYi5yZXBsYWNlKFxuICAgICAgICAgICd7dHlwZX0nLFxuICAgICAgICAgIGhpc3RvcnlGaWVsZC50eXBlXG4gICAgICAgICl9XFxuYFxuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGZpZWxkRXJyb3JzLnB1c2goZXJyb3JNZXNzYWdlKVxuICAgICAgfVxuXG4gICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZpZWxkRWxlbWVudChmaWVsZCwgZXJyb3JNZXNzYWdlKSlcbiAgICB9KVxuXG4gICAgaWYgKCFmaWVsZEVycm9ycy5sZW5ndGgpIHtcbiAgICAgIGFsbG93U2F2ZSA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgYWxsb3dTYXZlID0gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBuZXdGaWVsZHMgPSBmaWVsZHMuZmlsdGVyKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmllbGRJbkluaXRpYWxEYXRhID0gT2JqZWN0LnZhbHVlcyhoaXN0b3J5RmllbGRzKS5maW5kKFxuICAgICAgICAoeCkgPT4geC5uYW1lID09PSBmaWVsZC5uYW1lXG4gICAgICApXG5cbiAgICAgIHJldHVybiBmaWVsZEluSW5pdGlhbERhdGEgPyBmYWxzZSA6IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgZGVsZXRlZEZpZWxkcyA9IE9iamVjdC52YWx1ZXMoaGlzdG9yeUZpZWxkcykuZmlsdGVyKChmaWVsZCkgPT4ge1xuICAgICAgcmV0dXJuICFmaWVsZE5hbWVzLmluY2x1ZGVzKGZpZWxkLm5hbWUpXG4gICAgfSlcblxuICAgIGNvbnN0IG5ld1N0YXRlOiBQYXJ0aWFsPFdQTEZfRWRpdG9yU3RhdGU+ID0ge1xuICAgICAgLy8gQWZ0ZXIgY2xlYXJpbmcgdGhlIGR1cGxpY2F0ZXMsIGFuIG9iamVjdCB3aWxsIHdvcmsgYmV0dGVyLiBGcmVlIGxvb2t1cHMgYW55b25lP1xuXG4gICAgICBmaWVsZHM6IGZpZWxkcy5yZWR1Y2U8TGlzdDxGaWVsZD4+KChhY2MsIGZpZWxkKSA9PiB7XG4gICAgICAgIGFjY1tmaWVsZC5uYW1lXSA9IGZpZWxkXG5cbiAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfSwge30pLFxuICAgICAgbmV3RmllbGRzLFxuICAgICAgZGVsZXRlZEZpZWxkcyxcbiAgICAgIGFsbG93U2F2ZSxcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IG5ld1N0YXRlKVxuXG4gICAgYXdhaXQgd2FpdEZvck5leHRUaWNrKClcbiAgfVxuXG4gIGFzeW5jIHJlbW92ZVByb2JsZW1hdGljQXR0cmlidXRlc0Zyb21QcmV2aWV3KCkge1xuICAgIC8vIE5hbWVzIGFuZCByZXF1aXJlZCBhdHRyaWJ1dGVzIGNhdXNlIHByb2JsZW1zIHdoZW4gc2F2aW5nIHRoZSBmb3JtLCByZW1vdmVcbiAgICBjb25zdCByZXF1aXJlZEVscyA9IEFycmF5LmZyb208RWxlbWVudD4oXG4gICAgICB0aGlzLnByZXZpZXdFbC5xdWVyeVNlbGVjdG9yQWxsKCdbcmVxdWlyZWRdJylcbiAgICApXG4gICAgY29uc3QgbmFtZUVscyA9IEFycmF5LmZyb208RWxlbWVudD4oXG4gICAgICB0aGlzLnByZXZpZXdFbC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZV0nKVxuICAgIClcblxuICAgIHJlcXVpcmVkRWxzLmZvckVhY2goKGVsOiBFbGVtZW50KSA9PiBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJykpXG4gICAgbmFtZUVscy5mb3JFYWNoKChlbDogRWxlbWVudCkgPT4gZWwucmVtb3ZlQXR0cmlidXRlKCduYW1lJykpXG5cbiAgICBhd2FpdCB3YWl0Rm9yTmV4dFRpY2soKVxuICB9XG59XG4iLCJpbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuLi9saWIvZ2xvYmFsLWRhdGEnXG5pbXBvcnQgY3JlYXRlQXBpQ2xpZW50IGZyb20gJy4uL2xpYi9hcGktY2xpZW50J1xuaW1wb3J0IGxvZyBmcm9tICcuLi9saWIvbG9nJ1xuXG5pbXBvcnQgV1BMRl9UYWJzIGZyb20gJy4vd3BsZi10YWJzJ1xuXG5pbXBvcnQge1xuICBTdWJtaXRTdGF0ZSxcbiAgU3VibWl0SGFuZGxlcixcbiAgRm9ybUNhbGxiYWNrLFxuICBMaXN0LFxuICBBcGlSZXNwb25zZUtpbmQsXG59IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IGlzRWxlbWVudGlzaCBmcm9tICcuLi9saWIvaXMtZWxlbWVudGlzaCdcblxuY29uc3QgeyByZXF1ZXN0IH0gPSBjcmVhdGVBcGlDbGllbnQoKVxuXG5jb25zdCByZXNldEZvcm0gPSAod3BsZkZvcm06IFdQTEZfRm9ybSwgcGFyYW1zOiBMaXN0PGFueT4pID0+IHtcbiAgY29uc3QgZm9ybSA9IHdwbGZGb3JtLmZvcm0gYXMgSFRNTEZvcm1FbGVtZW50IC8vIE5lY2Vzc2FyeSBjYXN0XG5cbiAgLy8gU2luY2UgYWxsIHR5cGUgZ3VhcmFudGVlcyBoYXZlIGJlZW4gdGhyb3duIG91dCBvZiB0aGUgd2luZG93LCBpdCdzIG5lY2Vzc2FyeSB0byBjaGVjayB0aGF0IHRoZSBlbGVtZW50IGluZGVlZCBoYXMgdGhpcyBtZXRob2QuXG4gIGlmIChmb3JtLnJlc2V0KSB7XG4gICAgZm9ybS5yZXNldCgpXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdEJlZm9yZVNlbmRDYWxsYmFjayA9ICh3cGxmRm9ybTogV1BMRl9Gb3JtLCBwYXJhbXM6IExpc3Q8YW55PikgPT4ge1xuICBpZiAoaXNFbGVtZW50aXNoKHdwbGZGb3JtLmZvcm0ucGFyZW50Tm9kZSkpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gd3BsZkZvcm0uZm9ybS5wYXJlbnROb2RlXG5cbiAgICAvLyBSZXNldCBlcnJvciBhbmQgc3VjY2VzcyBtZXNzYWdlcywgaWYgdGhlcmUgd2VyZSBhbnlcbiAgICBjb25zdCBtZXNzYWdlcyA9IHBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICcud3BsZi1lcnJvck1lc3NhZ2UsIC53cGxmLXN1Y2Nlc3NNZXNzYWdlJ1xuICAgIClcblxuICAgIG1lc3NhZ2VzLmZvckVhY2goKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChpc0VsZW1lbnRpc2goZWxlbWVudC5wYXJlbnROb2RlKSkge1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTdWNjZXNzQ2FsbGJhY2sgPSAod3BsZkZvcm06IFdQTEZfRm9ybSwgcGFyYW1zOiBMaXN0PGFueT4pID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBwYXJhbXNcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSBkYXRhXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3dwbGYtc3VjY2Vzc01lc3NhZ2UnKVxuICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICdhZnRlcmJlZ2luJyxcbiAgICBtZXNzYWdlLnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+JykgLy8gTWF5YmUgdGhpcyBzaG91bGRuJ3QgYmUgbW9kaWZpZWQuXG4gIClcblxuICB3cGxmRm9ybS5mb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBkaXYpXG4gIHdwbGZGb3JtLmZvcm0uY2xhc3NMaXN0LmFkZCgnc3VibWl0dGVkJylcbn1cblxuY29uc3QgZGVmYXVsdEVycm9yQ2FsbGJhY2sgPSAod3BsZkZvcm06IFdQTEZfRm9ybSwgcGFyYW1zOiBMaXN0PGFueT4pID0+IHtcbiAgY29uc3QgeyBlcnJvciB9ID0gcGFyYW1zXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3dwbGYtZXJyb3JNZXNzYWdlJylcbiAgZGl2Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGVycm9yLm1lc3NhZ2UpXG4gIHdwbGZGb3JtLmZvcm0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGRpdilcbn1cblxuZXhwb3J0IGNsYXNzIFdQTEZfRm9ybSB7XG4gIGZvcm06IEVsZW1lbnRcbiAgc3VibWl0U3RhdGU6IFN1Ym1pdFN0YXRlID0gU3VibWl0U3RhdGUuVW5zdWJtaXR0ZWRcbiAgc3VibWl0SGFuZGxlcjogU3VibWl0SGFuZGxlclxuICBjYWxsYmFja3M6IHtcbiAgICBiZWZvcmVTZW5kOiBMaXN0PEZvcm1DYWxsYmFjaz5cbiAgICBzdWNjZXNzOiBMaXN0PEZvcm1DYWxsYmFjaz5cbiAgICBlcnJvcjogTGlzdDxGb3JtQ2FsbGJhY2s+XG4gIH0gPSB7XG4gICAgYmVmb3JlU2VuZDoge1xuICAgICAgZGVmYXVsdDogZGVmYXVsdEJlZm9yZVNlbmRDYWxsYmFjayxcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IHtcbiAgICAgIGRlZmF1bHQ6IGRlZmF1bHRTdWNjZXNzQ2FsbGJhY2ssXG4gICAgICBjbGVhck9uU3VjY2VzczogcmVzZXRGb3JtLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIGRlZmF1bHQ6IGRlZmF1bHRFcnJvckNhbGxiYWNrLFxuICAgIH0sXG4gIH1cblxuICB0YWJzOiBXUExGX1RhYnNbXSA9IFtdXG4gIGtleSA9ICcnXG5cbiAgLy8gY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEZvcm1FbGVtZW50KSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgIT09IHRydWUpIHtcbiAgICAgIC8vIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50ICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm0gZWxlbWVudCBpbnZhbGlkIG9yIG1pc3NpbmcnKVxuICAgIH1cbiAgICBjb25zdCBmYWxsYmFja0lucHV0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIl9ub2pzXCJdJylcblxuICAgIHRoaXMuZm9ybSA9IGVsZW1lbnRcbiAgICB0aGlzLmtleSA9ICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KVxuICAgIHRoaXMudGFicyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cGxmLXRhYnMnKSkubWFwKFxuICAgICAgKGVsKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgV1BMRl9UYWJzKGVsKVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuc3VibWl0SGFuZGxlciA9IHRoaXMuY3JlYXRlU3VibWl0SGFuZGxlcigpXG5cbiAgICB0aGlzLmF0dGFjaFN1Ym1pdEhhbmRsZXIoKVxuXG4gICAgLy8gUmVtb3ZlIGlucHV0IHRoYXQgdHJpZ2dlcnMgdGhlIGZhbGxiYWNrIHNvIHdlIGdldCBhIEpTT04gcmVzcG9uc2VcbiAgICBpZiAoZmFsbGJhY2tJbnB1dCAmJiBpc0VsZW1lbnRpc2goZmFsbGJhY2tJbnB1dC5wYXJlbnROb2RlKSkge1xuICAgICAgZmFsbGJhY2tJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZhbGxiYWNrSW5wdXQpXG4gICAgfVxuICB9XG5cbiAgYWRkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBGb3JtQ2FsbGJhY2spIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrc1xuICAgIGNvbnN0IHsgYmVmb3JlU2VuZCwgc3VjY2VzcywgZXJyb3IgfSA9IGNhbGxiYWNrc1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdiZWZvcmVTZW5kJzoge1xuICAgICAgICBiZWZvcmVTZW5kW25hbWVdID0gY2FsbGJhY2tcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnc3VjY2Vzcyc6IHtcbiAgICAgICAgc3VjY2Vzc1tuYW1lXSA9IGNhbGxiYWNrXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzoge1xuICAgICAgICBlcnJvcltuYW1lXSA9IGNhbGxiYWNrXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNhbGxiYWNrIHR5cGUgJHt0eXBlfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlbW92ZUNhbGxiYWNrKG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3NcbiAgICBjb25zdCB7IGJlZm9yZVNlbmQsIHN1Y2Nlc3MsIGVycm9yIH0gPSBjYWxsYmFja3NcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYmVmb3JlU2VuZCc6IHtcbiAgICAgICAgZGVsZXRlIGJlZm9yZVNlbmRbbmFtZV1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnc3VjY2Vzcyc6IHtcbiAgICAgICAgZGVsZXRlIHN1Y2Nlc3NbbmFtZV1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnZXJyb3InOiB7XG4gICAgICAgIGRlbGV0ZSBlcnJvcltuYW1lXVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjYWxsYmFjayAke25hbWV9ICR7dHlwZX1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBydW5DYWxsYmFjayh0eXBlOiBzdHJpbmcsIHBhcmFtczogTGlzdDxhbnk+ID0ge30pIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrc1xuICAgIGNvbnN0IHsgYmVmb3JlU2VuZCwgc3VjY2VzcywgZXJyb3IgfSA9IGNhbGxiYWNrc1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdiZWZvcmVTZW5kJzoge1xuICAgICAgICBPYmplY3QudmFsdWVzKGJlZm9yZVNlbmQpLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2sodGhpcywgcGFyYW1zKVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdzdWNjZXNzJzoge1xuICAgICAgICBPYmplY3QudmFsdWVzKHN1Y2Nlc3MpLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2sodGhpcywgcGFyYW1zKVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdlcnJvcic6IHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhlcnJvcikuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICBjYWxsYmFjayh0aGlzLCBwYXJhbXMpXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNhbGxiYWNrICR7bmFtZX0gJHt0eXBlfWApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoU3VibWl0SGFuZGxlcigpIHtcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgc3VibWl0IGhhbmRsZXIgZnJvbSB0aGUgZm9ybSwgYnV0IGtlZXBzIGl0IGluIG1lbW9yeS5cbiAgICovXG4gIHJlbW92ZVN1Ym1pdEhhbmRsZXIoKSB7XG4gICAgdGhpcy5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3VibWl0SGFuZGxlcilcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjcmVhdGVTdWJtaXRIYW5kbGVyKGhhbmRsZXI/OiBTdWJtaXRIYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIGFzeW5jIChlOiBFdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGlmICh0aGlzLnN1Ym1pdFN0YXRlID09PSBTdWJtaXRTdGF0ZS5TdWJtaXR0aW5nKSB7XG4gICAgICAgIGxvZy5ub3RpY2UoJ1ByZXZlbnRpbmcgZG91YmxlIGRvdWJtaXNzaW9uJylcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeCA9IGF3YWl0IHRoaXMuc2VuZCgpXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgb2sgfSA9IHhcblxuICAgICAgICBpZiAoJ2Vycm9yJyBpbiBkYXRhKSB7XG4gICAgICAgICAgbG9nLmVycm9yKCdJbnZhbGlkIHN1Ym1pc3Npb24hJywgeClcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yKVxuICAgICAgICB9IGVsc2UgaWYgKCFvaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCB0byBzdWJtaXQgZm9ybSBmYWlsZWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3VibWl0U3RhdGUgPSBTdWJtaXRTdGF0ZS5TdWNjZXNzXG4gICAgICAgICAgdGhpcy5ydW5DYWxsYmFjaygnc3VjY2VzcycsIHsgZGF0YSB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLnN1Ym1pdFN0YXRlID0gU3VibWl0U3RhdGUuRXJyb3JcbiAgICAgICAgdGhpcy5ydW5DYWxsYmFjaygnZXJyb3InLCB7IGVycm9yIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2VuZCgpIHtcbiAgICBjb25zdCBmb3JtID0gdGhpcy5mb3JtXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtIGFzIEhUTUxGb3JtRWxlbWVudCkgLy8gRm9ybURhdGEgY2FuJ3QgYmUgbWFkZSBmcm9tIEVsZW1lbnRcblxuICAgIGdsb2JhbERhdGEubGFuZyAmJiBkYXRhLmFwcGVuZCgnbGFuZycsIGdsb2JhbERhdGEubGFuZylcbiAgICB0aGlzLnN1Ym1pdFN0YXRlID0gU3VibWl0U3RhdGUuU3VibWl0dGluZ1xuXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdzdWJtaXR0aW5nJylcbiAgICB0aGlzLnJ1bkNhbGxiYWNrKCdiZWZvcmVTZW5kJywgeyBmb3JtRGF0YTogZGF0YSwgZm9ybSB9KVxuXG4gICAgY29uc3QgcmVxID0gcmVxdWVzdChcbiAgICAgICcvc3VibWl0JyxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICB9LFxuICAgICAgQXBpUmVzcG9uc2VLaW5kLlN1Ym1pc3Npb25cbiAgICApXG5cbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1pdHRpbmcnKVxuXG4gICAgcmV0dXJuIHJlcVxuICB9XG59XG4iLCJpbXBvcnQgV1BMRiBmcm9tICcuL3dwbGYnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQTEZfU2V0dGluZ3Mge1xuICBjb25zdHJ1Y3Rvcih3cGxmSW5zdGFuY2U6IFdQTEYpIHt9XG59XG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL2xpYi9sb2cnXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vdHlwZXMnXG5cbmNsYXNzIFdQTEZfU3RvcmFnZSB7XG4gIHByZWZpeDogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IocHJlZml4ID0gJ3dwbGYnKSB7XG4gICAgdGhpcy5wcmVmaXggPSBwcmVmaXhcbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5wcmVmaXggKyBrZXkpXG5cbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGFcblxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZy5ub3RpY2UoXG4gICAgICAgIGBObyB2YWx1ZSBmb3VuZCBmb3IgJHtrZXl9LCBmYWxsaW5nIGJhY2sgdG8gZGVmYXVsdGAsXG4gICAgICAgIGRlZmF1bHRWYWx1ZVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gICAgfVxuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucHJlZml4ICsga2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nLmVycm9yKGUsIGtleSwgdmFsdWUpXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgV1BMRl9TdG9yYWdlKClcbiIsImltcG9ydCBXUExGX1N0b3JhZ2UgZnJvbSAnLi93cGxmLXN0b3JhZ2UnXG5pbXBvcnQgbG9nIGZyb20gJy4uL2xpYi9sb2cnXG5pbXBvcnQgaXNFbGVtZW50aXNoIGZyb20gJy4uL2xpYi9pcy1lbGVtZW50aXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUExGX1RhYnMge1xuICByZW1lbWJlcjogYm9vbGVhbiA9IGZhbHNlXG4gIGFjdGl2ZVRhYjogc3RyaW5nXG4gIHJvb3Q6IEVsZW1lbnRcbiAgbmFtZTogc3RyaW5nID0gJydcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhYiBlbGVtZW50IGludmFsaWQgb3IgbWlzc2luZycpXG4gICAgfVxuXG4gICAgdGhpcy5yb290ID0gZWxlbWVudFxuICAgIHRoaXMubmFtZSA9IHRoaXMucm9vdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpIHx8ICcnXG4gICAgdGhpcy5yZW1lbWJlciA9IHRoaXMucm9vdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVtZW1iZXInKSAhPT0gbnVsbFxuICAgIHRoaXMuYWN0aXZlVGFiID0gdGhpcy5yb290LmdldEF0dHJpYnV0ZSgnZGF0YS1kZWZhdWx0JykgfHwgJydcblxuICAgIGlmICghdGhpcy5yb290KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RvZXMgdGhpcyB3b3JrIGZvciB0cyAoaXQgZG9lcyBub3QpJylcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubmFtZSB8fCAhdGhpcy5hY3RpdmVUYWIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgYXR0cmlidXRlcyBhcmUgbWlzc2luZycpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVtZW1iZXIpIHtcbiAgICAgIC8vIEdldCBzYXZlZCB2YWx1ZSBvciBrZWVwIHVzaW5nIHRoZSBkZWZhdWx0XG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IFdQTEZfU3RvcmFnZS5nZXQodGhpcy5uYW1lLCB0aGlzLmFjdGl2ZVRhYilcbiAgICB9XG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoZTogRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZVxuXG4gICAgaWYgKGlzRWxlbWVudGlzaCh0YXJnZXQpKSB7XG4gICAgICBjb25zdCB0YWJOYW1lID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgICBpZiAodGFiTmFtZSkge1xuICAgICAgICB0aGlzLnN3aXRjaFRhYih0YWJOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nLm5vdGljZSgnVW5hYmxlIHRvIHN3aXRjaCB0YWIgYXMgZGF0YS10YXJnZXQgd2FzIGVtcHR5JylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIGFuZCBlbnN1cmUgdGhlIGN1cnJlbnQgdGFiIGlzIHZpc2libGUuXG4gICAqIENhbGwgYWZ0ZXIgYWRkaW5nIGEgdGFiIGR5bmFtaWNhbGx5LlxuICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldEhhbmRsZXMoKS5mb3JFYWNoKChoYW5kbGUpID0+IHtcbiAgICAgIC8vIEl0J3Mgbm90IHBvc3NpYmxlIHRvIGFkZCB0aGUgc2FtZSBldmVudCBsaXN0ZW5lciB0d2ljZS4gSWYgdGhlIGhhbmRsZSBhbHJlYWR5IGhhcyB0aGUgbGlzdGVuZXIsXG4gICAgICAvLyB0aGlzIGlzIGEgbm8tb3AuXG4gICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgfSlcblxuICAgIC8vIElmIGFjdGl2ZVRhYiBpcyBudWxsLCB0aGluZ3Mgd2lsbCBicmVhay4gRmFsbCBiYWNrIHRvIGZpcnN0IHRhYlxuICAgIC8vIGFjdGl2ZVRhYiBjYW50IGJlIG51bGwgYW55bW9yZVxuXG4gICAgLyogICAgIGlmICh0aGlzLmFjdGl2ZVRhYiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFicyA9IHRoaXMuZ2V0VGFicygpXG5cbiAgICAgIGlmICh0YWJzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBmaXJzdCA9IHRhYnNbMF1cbiAgICAgICAgY29uc3QgLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgICB9XG5cbiAgICAgIGxvZy5ub3RpY2UoJ2FjdGl2ZVRhYiB3YXMgbnVsbCwgc2V0dGluZyBmaXJzdCB0YWIgYXMgYWN0aXZlJywgZmlyc3QpXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9IGZpcnN0XG4gICAgfSAqL1xuXG4gICAgdGhpcy5zd2l0Y2hUYWIodGhpcy5hY3RpdmVUYWIpXG4gIH1cblxuICAvKipcbiAgICogVmFsdWVzIGFyZSBub3QgY2FjaGVkIGFzIHRoZXkgYXJlIHByYWN0aWNhbGx5IGZyZWUgdG8gcmVjb21wdXRlLCBidXRcbiAgICogbWlnaHQgYmVjb21lIGEgbWVtb3J5IGxlYWsgaWYgc3RvcmVkLlxuICAgKi9cbiAgZ2V0VGFicygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKGAud3BsZi10YWJzX190YWJbZGF0YS1uYW1lPVwiJHt0aGlzLm5hbWV9XCJdYClcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogU2VlIGdldFRhYnMoKVxuICAgKi9cbiAgZ2V0SGFuZGxlcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBgLndwbGYtdGFic19fdGFiU3dpdGNoZXJbZGF0YS1uYW1lPVwiJHt0aGlzLm5hbWV9XCJdYFxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHN3aXRjaFRhYihuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy5nZXRUYWJzKClcbiAgICBjb25zdCBhbGxIYW5kbGVzID0gdGhpcy5nZXRIYW5kbGVzKClcblxuICAgIGNvbnN0IG9wZW4gPSB0YWJzLmZpbHRlcigodGFiKSA9PiB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpID09PSBuYW1lKVxuICAgIGNvbnN0IGNsb3NlID0gdGFicy5maWx0ZXIoKHRhYikgPT4gdGFiLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKSAhPT0gbmFtZSlcblxuICAgIG9wZW4uZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBjb25zdCB0YWJOYW1lID0gdGFiLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKVxuICAgICAgY29uc3QgaGFuZGxlcyA9IGFsbEhhbmRsZXMuZmlsdGVyKFxuICAgICAgICAoaGFuZGxlKSA9PiBoYW5kbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpID09PSB0YWJOYW1lXG4gICAgICApXG5cbiAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUpID0+IHtcbiAgICAgICAgaGFuZGxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBjbG9zZS5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGNvbnN0IHRhYk5hbWUgPSB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpXG4gICAgICBjb25zdCBoYW5kbGVzID0gYWxsSGFuZGxlcy5maWx0ZXIoXG4gICAgICAgIChoYW5kbGUpID0+IGhhbmRsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykgPT09IHRhYk5hbWVcbiAgICAgIClcblxuICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICBoYW5kbGVzLmZvckVhY2goKGhhbmRsZSkgPT4ge1xuICAgICAgICBoYW5kbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmICh0aGlzLnJlbWVtYmVyKSB7XG4gICAgICBXUExGX1N0b3JhZ2Uuc2V0KHRoaXMubmFtZSwgbmFtZSlcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFdQTEZfRm9ybSB9IGZyb20gJy4vd3BsZi1mb3JtJ1xuaW1wb3J0IGdsb2JhbERhdGEgZnJvbSAnLi4vbGliL2dsb2JhbC1kYXRhJ1xuXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgZW5zdXJlTnVtIGZyb20gJy4uL2xpYi9lbnN1cmUtbnVtJ1xuaW1wb3J0IFdQTEZfVGFicyBmcm9tICcuL3dwbGYtdGFicydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1BMRiB7XG4gIGZvcm1zOiBMaXN0PFdQTEZfRm9ybT4gPSB7fVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gIH1cblxuICAvLyBFeHBvc2UgV1BMRl9Gb3JtIGFuZCBXUExGX1RhYnMgYXMgcHJvcGVydGllcyBmb3IgdGhpcyBjbGFzcy5cbiAgLy8gSnVzdCB0byBhbGxvdyB1c2VycyB3aG8gZG9uJ3QgaW5zdGFsbCB0aGUgbnBtIHBhY2thZ2UgdG8gdXNlIHRoZXNlIHRvbzpcbiAgV1BMRl9Gb3JtID0gV1BMRl9Gb3JtXG4gIFdQTEZfVGFicyA9IFdQTEZfVGFic1xuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKGdsb2JhbERhdGEuc2V0dGluZ3MuYXV0b2luaXQpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtLndwbGYnKVxuICAgICAgICAuZm9yRWFjaCgoZm9ybTogRWxlbWVudCkgPT4gdGhpcy5hdHRhY2goZm9ybSkpXG4gICAgfVxuICB9XG5cbiAgZmluZEZvcm1zQnlJZChpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZm9ybXMpLnJlZHVjZTxXUExGX0Zvcm1bXT4oKGFjYywga2V5KSA9PiB7XG4gICAgICBjb25zdCB3cGxmRm9ybSA9IHRoaXMuZm9ybXNba2V5XVxuXG4gICAgICBpZiAoIXdwbGZGb3JtKSB7XG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybUVsID0gd3BsZkZvcm0uZm9ybVxuICAgICAgY29uc3QgZm9ybUVsSWQgPSBmb3JtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm0taWQnKVxuXG4gICAgICBpZiAoZm9ybUVsSWQgJiYgZW5zdXJlTnVtKGZvcm1FbElkKSA9PT0gZW5zdXJlTnVtKGlkKSkge1xuICAgICAgICBhY2MucHVzaCh3cGxmRm9ybSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIFtdKVxuICB9XG5cbiAgZmluZEZvcm1zQnlTbHVnKHNsdWc6IHN0cmluZykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmZvcm1zKS5yZWR1Y2U8V1BMRl9Gb3JtW10+KChhY2MsIGtleSkgPT4ge1xuICAgICAgY29uc3Qgd3BsZkZvcm0gPSB0aGlzLmZvcm1zW2tleV1cblxuICAgICAgaWYgKCF3cGxmRm9ybSkge1xuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1FbCA9IHdwbGZGb3JtLmZvcm1cbiAgICAgIGNvbnN0IGZvcm1FbFNsdWcgPSBmb3JtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm0tc2x1ZycpXG5cbiAgICAgIGlmIChmb3JtRWxTbHVnICYmIGZvcm1FbFNsdWcgPT09IHNsdWcpIHtcbiAgICAgICAgYWNjLnB1c2god3BsZkZvcm0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCBbXSlcbiAgfVxuXG4gIGF0dGFjaCh4OiBFbGVtZW50IHwgV1BMRl9Gb3JtKSB7XG4gICAgaWYgKHggaW5zdGFuY2VvZiBXUExGX0Zvcm0pIHtcbiAgICAgIGNvbnN0IHdwbGZGb3JtID0geFxuXG4gICAgICB0aGlzLmZvcm1zW3dwbGZGb3JtLmtleV0gPSB3cGxmRm9ybVxuXG4gICAgICByZXR1cm4gd3BsZkZvcm1cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0geFxuXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBhdHRhY2ggV1BMRiB0byBlbGVtZW50JylcbiAgICB9XG5cbiAgICBjb25zdCB3cGxmRm9ybSA9IG5ldyBXUExGX0Zvcm0oZWxlbWVudClcbiAgICB0aGlzLmZvcm1zW3dwbGZGb3JtLmtleV0gPSB3cGxmRm9ybVxuXG4gICAgd3BsZkZvcm0uZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4JylcbiAgICB3cGxmRm9ybS5mb3JtLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuXG4gICAgcmV0dXJuIHdwbGZGb3JtXG4gIH1cblxuICBkZXRhY2god3BsZkZvcm06IFdQTEZfRm9ybSkge1xuICAgIHRoaXMuZm9ybXNbd3BsZkZvcm0ua2V5XS5yZW1vdmVTdWJtaXRIYW5kbGVyKClcbiAgICBkZWxldGUgdGhpcy5mb3Jtc1t3cGxmRm9ybS5rZXldXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iLCJpbXBvcnQgQWJvcnRDb250cm9sbGVyIGZyb20gJ2Fib3J0LWNvbnRyb2xsZXInXG5pbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuL2dsb2JhbC1kYXRhJ1xuaW1wb3J0IHsgTGlzdCwgQXBpUmVzcG9uc2UsIEFwaVJlc3BvbnNlS2luZCB9IGZyb20gJy4uL3R5cGVzJ1xuXG4vKipcbiAqIEl0J3Mgb2sgdG8gY3JlYXRlIG11bHRpcGxlIEFQSSBjbGllbnRzXG4gKlxuICogVXNhZ2U6IGNvbnN0IHsgYWJvcnQsIHJlcXVlc3QsIGdldFNpZ25hbCB9ID0gY3JlYXRlQXBpQ2xpZW50KClcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXBpQ2xpZW50KCkge1xuICBsZXQgY29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyIHwgbnVsbCA9IG51bGxcbiAgbGV0IHNpZ25hbDogQWJvcnRTaWduYWwgfCBudWxsID0gbnVsbFxuXG4gIHJldHVybiB7XG4gICAgY29udHJvbGxlcixcbiAgICBzaWduYWwsXG5cbiAgICBnZXRTaWduYWwoKSB7XG4gICAgICByZXR1cm4gc2lnbmFsXG4gICAgfSxcblxuICAgIGFib3J0KCkge1xuICAgICAgaWYgKGNvbnRyb2xsZXIgJiYgY29udHJvbGxlci5hYm9ydCkge1xuICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgcmVxdWVzdChcbiAgICAgIHRhcmdldDogc3RyaW5nLFxuICAgICAgb3B0aW9uczogTGlzdDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRm9ybURhdGEgfCBudWxsPiA9IHt9LFxuICAgICAgcmVzcG9uc2VLaW5kOiBBcGlSZXNwb25zZUtpbmRcbiAgICApOiBQcm9taXNlPEFwaVJlc3BvbnNlPiB7XG4gICAgICBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgICBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbFxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChnbG9iYWxEYXRhLmJhY2tlbmRVcmwgKyB0YXJnZXQsIHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIHNpZ25hbCxcbiAgICAgICAgICBjcmVkZW50aWFsczogZ2xvYmFsRGF0YS5mZXRjaENyZWRlbnRpYWxzIHx8ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgaGVhZGVyczogZ2xvYmFsRGF0YS5yZXF1ZXN0SGVhZGVycyB8fCB7fSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCB7IGhlYWRlcnMsIHN0YXR1cywgc3RhdHVzVGV4dCwgdXJsLCBvayB9ID0gcmVzXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAgICAgY29udHJvbGxlciA9IG51bGxcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6IHJlc3BvbnNlS2luZCxcbiAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0LFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICBvayxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnRyb2xsZXIgPSBudWxsXG5cbiAgICAgICAgLy8gSWYgeW91IHdhbnQgdG8gZG8gc29tZXRoaW5nIHdoZW4gdGhlIHJlcXVlc3QgaXMgYWJvcnRlZCwgdXNlXG4gICAgICAgIC8vIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIC4uLilcbiAgICAgICAgaWYgKGUubmFtZSAhPT0gJ0Fib3J0RXJyb3InKSB7XG4gICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVcbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IGNyZWF0ZUFwaUNsaWVudCgpXG4iLCJpbXBvcnQgeyBTdWJtaXNzaW9uIH0gZnJvbSAndHlwZXMnXG5cbmNvbnN0IGNvbmZpcm1EZWxldGUgPSAoc3VibWlzc2lvbjogU3VibWlzc2lvbikgPT4ge1xuICBpZiAoY29uZmlybSgnTnVrZSBzdWJtaXNzaW9uPycpKSB7XG4gICAgYWxlcnQoJ3dvdWxkIG51a2Ugc3VibWlzc2lvbiBidXQgaXQgaXMgbm90IGltcGxlbWVudGVkIHlldCcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlybURlbGV0ZVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5zdXJlTnVtKHg6IHN0cmluZyB8IG51bWJlciwgZmxvYXQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmxvYXQgPyBwYXJzZUZsb2F0KHgpIDogcGFyc2VJbnQoeCwgMTApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtKHg6IHN0cmluZykge1xuICBpZiAoeCAmJiB4Lmxlbmd0aCA+IDAgJiYgeC5tYXRjaCgvXlswLTldKiQvKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cbiIsImltcG9ydCBpc0VsZW1lbnRpc2ggZnJvbSAnLi9pcy1lbGVtZW50aXNoJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUoXG4gIGVsOiBFbGVtZW50LFxuICBhdHRyaWJ1dGU6IHN0cmluZyxcbiAgZGVmYXVsdFZhbDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbikge1xuICBjb25zdCB4ID0gZWwuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSlcblxuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsXG4gIH1cblxuICByZXR1cm4geFxufVxuIiwiaW1wb3J0IHsgV1BMRl9Mb2NhbGl6ZURhdGEgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgKCh3aW5kb3cpOiBXUExGX0xvY2FsaXplRGF0YSA9PlxuICBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIGJhY2tlbmRVcmw6IG51bGwsXG4gICAgICBmZXRjaENyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgcmVxdWVzdEhlYWRlcnM6IHtcbiAgICAgICAgJ1gtV1AtTm9uY2UnOiBudWxsLFxuICAgICAgfSxcbiAgICAgIGFzc2V0c0RpcjogbnVsbCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGF1dG9pbml0OiB0cnVlLFxuICAgICAgICBwYXJzZUxpYnJlZm9ybVNob3J0Y29kZUluUmVzdEFwaTogdHJ1ZSxcbiAgICAgICAgaGFzVW5maWx0ZXJlZEh0bWw6IHRydWUsXG4gICAgICAgIGRlYnVnTGV2ZWw6ICdhbGwnLFxuICAgICAgfSxcbiAgICAgIHBvc3Q6IG51bGwsXG4gICAgICBpMThuOiB7XG4gICAgICAgIHByb2JsZW1zOiAnUHJvYmxlbXM6ICcsXG4gICAgICAgIGR1cGxpY2F0ZUZpZWxkTmFtZTogJ0R1cGxpY2F0ZSBmaWVsZCBuYW1lOiAnLFxuICAgICAgICBpbGxlZ2FsTmFtZTpcbiAgICAgICAgICBcIllvdSBjYW4ndCB1c2Uge25hbWV9IGFzIGEgbmFtZSwgYXMgaXQgY29uZmxpY3RzIHdpdGggYSBjb3JlIGZpZWxkIG5hbWUuXCIsXG4gICAgICAgIGZpZWxkQWxyZWFkeUV4aXN0c0luRGI6XG4gICAgICAgICAgJ0ZpZWxkIGFscmVhZHkgZXhpc3RzIGluIHRoZSBkYXRhYmFzZSB3aXRoIHRoZSB0eXBlIHt0eXBlfSwgdXNlIGEgZGlmZmVyZW50IG5hbWUgb3IgcmVtb3ZlIHRoZSBmaWVsZCBmaXJzdC4nLFxuICAgICAgICBncm91cGVkTmFtZXNOb3RTdXBwb3J0ZWRZZXQ6XG4gICAgICAgICAgJ0ZpZWxkIG5hbWVzIGxpa2UgdGhlc2UgYXJlIG5vdCBzdXBwb3J0ZWQgeWV0LiBUcnkgdXNpbmcgY2FtZWxDYXNpbmcgb3IgdW5kZXJfc2NvcmVzIGZvciBncm91cGVkIG5hbWVzIGluc3RlYWQuJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3aW5kb3cud3BsZkRhdGEgLy8gd3BfbG9jYWxpemVfc2NyaXB0XG4gICkpKHdpbmRvdylcbiIsImZ1bmN0aW9uIGlzRWxlbWVudGlzaChlOiBvYmplY3QgfCBudWxsIHwgdW5kZWZpbmVkKTogZSBpcyBFbGVtZW50IHtcbiAgcmV0dXJuIGUgPyAnZ2V0QXR0cmlidXRlJyBpbiBlICYmICd0YWdOYW1lJyBpbiBlIDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNFbGVtZW50aXNoXG4iLCJpbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuL2dsb2JhbC1kYXRhJ1xuXG5jb25zdCB7IGRlYnVnTGV2ZWwgfSA9IGdsb2JhbERhdGEuc2V0dGluZ3NcblxuY29uc3QgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHsgbG9nKCkge30sIGVycm9yKCkge30gfSAvLyBub29wIGZhbGxiYWNrXG5jb25zdCBub3RpY2UgPSAobWVzc2FnZTogc3RyaW5nLCAuLi5wYXJhbXM6IGFueVtdKSA9PlxuICBkZWJ1Z0xldmVsID09PSAnYWxsJyAmJiBjb25zb2xlLmxvZyhgV1BMRjogJHttZXNzYWdlfWAsIHBhcmFtcylcbmNvbnN0IGVycm9yID0gKG1lc3NhZ2U6IHN0cmluZywgLi4ucGFyYW1zOiBhbnlbXSkgPT5cbiAgZGVidWdMZXZlbCAhPT0gJ25vbmUnICYmIGNvbnNvbGUuZXJyb3IoYFdQTEYgZXJyb3I6ICR7bWVzc2FnZX1gLCBwYXJhbXMpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm90aWNlLFxuICBlcnJvcixcbn1cbiIsIi8qKlxuICogVHJ5aW5nIHRvIHJlYWQgdGhlIERPTSBpbW1lZGlhdGVseSBhZnRlciBzZXR0aW5nIGl0IGRvZXMgbm90IHdvcmsuIFRyeWluZyBvbiBuZXh0IHRpY2tcbiAqIGRvZXMuXG4gKi9cbmV4cG9ydCBjb25zdCB3YWl0Rm9yTmV4dFRpY2sgPSAoKTogUHJvbWlzZTxudW1iZXI+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUpKVxuXG5leHBvcnQgY29uc3Qgd2FpdCA9IChtcyA9IDUwMCk6IFByb21pc2U8bnVtYmVyPiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdWJtaXNzaW9uIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgZW5zdXJlTnVtLCB7IGlzTnVtIH0gZnJvbSAnLi4vbGliL2Vuc3VyZS1udW0nXG5pbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuLi9saWIvZ2xvYmFsLWRhdGEnXG5pbXBvcnQgY29uZmlybURlbGV0ZSBmcm9tICcuLi9saWIvY29uZmlybS1kZWxldGUnXG5cbmZ1bmN0aW9uIFVwbG9hZExpbmsoeyBocmVmLCB0ZXh0IH06IHsgaHJlZjogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfSkge1xuICBpZiAoaXNOdW0oaHJlZikpIHtcbiAgICAvLyBBdHRhY2htZW50cyBhcmUgc3RvcmVkIGFzIG51bWJlcnMuIFRoZWlyIFVSTHMgYXJlIGVudW1lcmFibGUuXG4gICAgY29uc3QgaWQgPSBlbnN1cmVOdW0oaHJlZilcblxuICAgIGhyZWYgPSBnbG9iYWxEYXRhLmFkbWluVXJsICsgYHVwbG9hZC5waHA/aXRlbT0ke2lkfWBcbiAgICB0ZXh0ID0gZ2xvYmFsRGF0YS5pMThuLmF0dGFjaG1lbnQgKyBgICR7aWR9YFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGEgaHJlZj17aHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJtaXNzaW9uUm93KHtcbiAgc3VibWlzc2lvbixcbiAgZXhhbWluZSxcbiAgY2hlY2tlZCxcbiAgaGFuZGxlQ2hhbmdlLFxuICBoYW5kbGVDbGljayxcbn06IHtcbiAgc3VibWlzc2lvbjogU3VibWlzc2lvblxuICBleGFtaW5lOiAoc3ViOiBTdWJtaXNzaW9uKSA9PiB2b2lkXG4gIGNoZWNrZWQ6IGJvb2xlYW5cbiAgaGFuZGxlQ2hhbmdlOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgaGFuZGxlQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IHsgSUQsIHV1aWQsIGVudHJpZXMsIGZvcm1GaWVsZHMsIHRpdGxlLCBjcmVhdGVkQXQgfSA9IHN1Ym1pc3Npb25cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3BsZi1zdWJtaXNzaW9uTGlzdF9fc3VibWlzc2lvblwiPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIndwbGYtc3VibWlzc2lvbkxpc3RfX3N1Ym1pc3Npb25fX3NlbGVjdFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBkYXRhLWtleT17c3VibWlzc2lvbi51dWlkfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZz5UaXRsZTwvc3Ryb25nPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAod2luZG93LmxvY2F0aW9uLnNlYXJjaCA/IGAke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9JmAgOiAnPycpICtcbiAgICAgICAgICAgIGAmc3VibWlzc2lvblV1aWQ9JHt1dWlkfWBcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17KGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZXhhbWluZShzdWJtaXNzaW9uKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPlRpbWU8L3N0cm9uZz5cblxuICAgICAgICA8dGltZSBkYXRlVGltZT17Y3JlYXRlZEF0fT57bmV3IERhdGUoY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfTwvdGltZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1zbWFsbFwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybURlbGV0ZShzdWJtaXNzaW9uKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtnbG9iYWxEYXRhLmkxOG4uZGVsZXRlfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEZXRhaWxlZFN1Ym1pc3Npb24oe1xuICBzdWJtaXNzaW9uLFxufToge1xuICBzdWJtaXNzaW9uOiBTdWJtaXNzaW9uIHwgbnVsbFxufSkge1xuICBpZiAoIXN1Ym1pc3Npb24pIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3Qge1xuICAgIElELFxuICAgIHV1aWQsXG4gICAgY3JlYXRlZEF0LFxuICAgIG1vZGlmaWVkQXQsXG4gICAgZW50cmllcyxcbiAgICBmb3JtRmllbGRzLFxuICAgIHRpdGxlLFxuICAgIHJlZmVycmVyLFxuICAgIGhpc3RvcnlJZCxcbiAgICBtZXRhLFxuICB9ID0gc3VibWlzc2lvblxuXG4gIGNvbnN0IG90aGVyQ29sdW1ucyA9IHtcbiAgICBJRCxcbiAgICBVVUlEOiB1dWlkLFxuICAgIGhpc3RvcnlJZCxcbiAgICBjcmVhdGVkQXQsXG4gICAgbW9kaWZpZWRBdCxcbiAgICAuLi5tZXRhLFxuICAgIC8vIG1ldGEsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndwbGYtZm9ybVN1Ym1pc3Npb25cIiBkYXRhLXV1aWQ9e3V1aWR9PlxuICAgICAgPGgyPnt0aXRsZX08L2gyPlxuXG4gICAgICA8aDM+RW50cmllczwvaDM+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZW50cmllcykubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRmllbGQgPSBmb3JtRmllbGRzW25hbWVdXG5cbiAgICAgICAgICAgIGlmICghZm9ybUZpZWxkKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7IHR5cGUsIHJlcXVpcmVkLCBtdWx0aXBsZSB9ID0gZm9ybUZpZWxkXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1GaWVsZCwgdmFsdWUpXG5cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdmaWxlJzoge1xuICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB2YWx1ZS5zcGxpdCgnLCAnKVxuXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRMaW5rIGtleT17ZmlsZX0gaHJlZj17ZmlsZX0gdGV4dD17ZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICkpXG5cbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gPGRpdj57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB2YWx1ZVxuXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IDxVcGxvYWRMaW5rIGtleT17ZmlsZX0gdGV4dD17ZmlsZX0gaHJlZj17ZmlsZX0gLz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgLy8gPz8/XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IGdsb2JhbERhdGEuaTE4bi5lbXB0eUZpZWxkXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICA8dGg+e25hbWV9PC90aD5cblxuICAgICAgICAgICAgICAgIDx0ZD57dmFsdWV9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICAgIDxoMz5SZWZlcnJlcjwvaDM+XG5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtPYmplY3QuZW50cmllcyhyZWZlcnJlcikubWFwKChbaywgdl0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2t9PlxuICAgICAgICAgICAgICAgIDx0aD57a308L3RoPlxuXG4gICAgICAgICAgICAgICAgPHRkPnt2fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgICA8aDM+TWV0YTwvaDM+XG5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtPYmplY3QuZW50cmllcyhvdGhlckNvbHVtbnMpLm1hcCgoW2ssIHZdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtrfT5cbiAgICAgICAgICAgICAgICA8dGg+e2t9PC90aD5cblxuICAgICAgICAgICAgICAgIDx0ZD57dn08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2FydGljbGU+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjcmVhdGVBcGlDbGllbnQgZnJvbSAnLi4vbGliL2FwaS1jbGllbnQnXG5cbmltcG9ydCB7IFZhcmlhYmxlU2l6ZUxpc3QgYXMgTGlzdCB9IGZyb20gJ3JlYWN0LXdpbmRvdydcbmltcG9ydCBJbmZpbml0ZUxvYWRlciBmcm9tICdyZWFjdC13aW5kb3ctaW5maW5pdGUtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgQXBpRXJyb3IsXG4gIEFwaVJlc3BvbnNlLFxuICBBcGlSZXNwb25zZUtpbmQsXG4gIEdldFN1Ym1pc3Npb25zQXBpUmVzcG9uc2UsXG4gIFN1Ym1pc3Npb24sXG59IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCB7IHJlcXVlc3QgfSA9IGNyZWF0ZUFwaUNsaWVudCgpXG5cbmltcG9ydCBsb2cgZnJvbSAnLi4vbGliL2xvZydcbmltcG9ydCBlbnN1cmVOdW0gZnJvbSAnLi4vbGliL2Vuc3VyZS1udW0nXG5pbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuLi9saWIvZ2xvYmFsLWRhdGEnXG5cbmltcG9ydCBTdWJtaXNzaW9uUm93LCB7IERldGFpbGVkU3VibWlzc2lvbiB9IGZyb20gJy4vU3VibWlzc2lvbidcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCdcbmltcG9ydCBjb25maXJtRGVsZXRlIGZyb20gJy4uL2xpYi9jb25maXJtLWRlbGV0ZSdcblxuTW9kYWwuc2V0QXBwRWxlbWVudCgnLndwbGYtc3VibWlzc2lvbkxpc3QnKVxuXG5pbnRlcmZhY2UgU3VibWlzc2lvbkxpc3RTdGF0ZSB7XG4gIHN1Ym1pc3Npb25zOiBTdWJtaXNzaW9uW11cbiAgbW9yZUF2YWlsYWJsZTogYm9vbGVhblxuICBpc0xvYWRpbmc6IGJvb2xlYW5cbiAgcGFnZTogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pc3Npb25MaXN0KHtcbiAgZm9ybUlkLFxufToge1xuICBmb3JtSWQ6IG51bWJlciB8IHN0cmluZ1xufSkge1xuICBjb25zdCBbc2VsZWN0ZWRJZHMsIHNldFNlbGVjdGVkSWRzXSA9IFJlYWN0LnVzZVN0YXRlPFNldDxzdHJpbmc+PihcbiAgICAoKSA9PiBuZXcgU2V0KClcbiAgKVxuICBjb25zdCBbXG4gICAgeyBzdWJtaXNzaW9ucywgbW9yZUF2YWlsYWJsZSwgaXNMb2FkaW5nLCBwYWdlIH0sXG4gICAgc2V0U3RhdGUsXG4gIF0gPSBSZWFjdC51c2VTdGF0ZTxTdWJtaXNzaW9uTGlzdFN0YXRlPih7XG4gICAgc3VibWlzc2lvbnM6IFtdLFxuICAgIG1vcmVBdmFpbGFibGU6IHRydWUsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBwYWdlOiAwLFxuICB9KVxuICBjb25zdCBbeyBvcGVuLCBzdWJtaXNzaW9uOiBtb2RhbFN1Ym1pc3Npb24gfSwgc2V0TW9kYWxdID0gUmVhY3QudXNlU3RhdGU8e1xuICAgIG9wZW46IGJvb2xlYW5cbiAgICBzdWJtaXNzaW9uOiBTdWJtaXNzaW9uIHwgbnVsbFxuICB9Pih7XG4gICAgb3BlbjogZmFsc2UsXG4gICAgc3VibWlzc2lvbjogbnVsbCxcbiAgfSlcblxuICAvLyBSZWZzIGFyZSBhIGhhbmR5IHdheSBvZiBzdG9yaW5nIGRhdGEgdGhhdCBwZXJzaXN0cyBiZXR3ZWVuIHJlLXJlbmRlcnM6XG4gIGNvbnN0IGxhc3RDbGlja1JlZiA9IFJlYWN0LnVzZVJlZjxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcbiAgY29uc3QgbGFzdFNoaWZ0UmVmID0gUmVhY3QudXNlUmVmPGJvb2xlYW4+KGZhbHNlKVxuXG4gIC8qKlxuICAgKiBJbnZlcnQgc2VsZWN0aW9uIG9uIGNsaWNrLCB3aGlsZSBhbGxvd2luZyBzaGlmdCBjbGljayB0byBzZWxlY3QgbXVsdGlwbGUgc3VibWlzc2lvbnMgYXQgb25jZVxuICAgKi9cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmtleSBhcyBzdHJpbmcgLy8gd2UndmUgbWFkZSBzdXJlIHRoYXQgZWFjaCBlbGVtZW50IGhhcyB0aGlzXG4gICAgY29uc3QgbmV3U2VsZWN0ZWRJZHMgPSBuZXcgU2V0KHNlbGVjdGVkSWRzKVxuICAgIGNvbnN0IG5ld1N0YXRlID0gZS50YXJnZXQuY2hlY2tlZFxuICAgIGNvbnN0IGlkc1RvQ2hhbmdlID0gW11cbiAgICBjb25zdCBsYXN0SWQgPSBsYXN0Q2xpY2tSZWYuY3VycmVudFxuXG4gICAgaWYgKCFsYXN0U2hpZnRSZWYuY3VycmVudCkge1xuICAgICAgaWRzVG9DaGFuZ2UucHVzaChpZClcbiAgICB9IGVsc2UgaWYgKGxhc3RJZCAmJiBsYXN0SWQgIT09IGlkKSB7XG4gICAgICBsZXQgZmxhZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICAgIGZvciAodmFyIGl0ZW0gb2Ygc3VibWlzc2lvbnMpIHtcbiAgICAgICAgbGV0IG5ld0ZsYWc6IGJvb2xlYW4gPSBmbGFnXG5cbiAgICAgICAgaWYgKGl0ZW0udXVpZCA9PT0gaWQgfHwgaXRlbS51dWlkID09PSBsYXN0SWQpIHtcbiAgICAgICAgICBuZXdGbGFnID0gIWZsYWdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgaWRzVG9DaGFuZ2UucHVzaChpdGVtLnV1aWQpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnID0gbmV3RmxhZ1xuICAgICAgfVxuICAgIH1cblxuICAgIGlkc1RvQ2hhbmdlLmZvckVhY2goKGlkOiBhbnkpID0+IHtcbiAgICAgIGlmICghbmV3U3RhdGUpIHtcbiAgICAgICAgbmV3U2VsZWN0ZWRJZHMuZGVsZXRlKGlkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U2VsZWN0ZWRJZHMuYWRkKGlkKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsYXN0Q2xpY2tSZWYuY3VycmVudCA9IGlkXG4gICAgc2V0U2VsZWN0ZWRJZHMobmV3U2VsZWN0ZWRJZHMpXG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBlLnNoaWZ0S2V5IHRvIGEgYm9vbGVhbiBhbmQgc2F2ZSBpdCBpbnRvIHRoZSByZWZcbiAgICovXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTElucHV0RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICBsYXN0U2hpZnRSZWYuY3VycmVudCA9ICEhZS5zaGlmdEtleVxuICB9XG5cbiAgY29uc3QgbG9hZE1vcmUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2V0U3RhdGUoKHMpID0+ICh7XG4gICAgICAuLi5zLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgIH0pKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KFxuICAgICAgYC9zdWJtaXNzaW9ucz9mb3JtPSR7Zm9ybUlkfSZwYWdlPSR7cGFnZX1gLFxuICAgICAge30sXG4gICAgICBBcGlSZXNwb25zZUtpbmQuR2V0U3VibWlzc2lvbnNcbiAgICApXG5cbiAgICBmdW5jdGlvbiBpc0dldFN1Ym1pc3Npb25zQXBpUmVzcG9uc2UoXG4gICAgICB4OiBBcGlSZXNwb25zZVxuICAgICk6IHggaXMgR2V0U3VibWlzc2lvbnNBcGlSZXNwb25zZSB7XG4gICAgICByZXR1cm4geC5raW5kID09PSBBcGlSZXNwb25zZUtpbmQuR2V0U3VibWlzc2lvbnNcbiAgICB9XG5cbiAgICBpZiAoaXNHZXRTdWJtaXNzaW9uc0FwaVJlc3BvbnNlKHJlc3BvbnNlKSkge1xuICAgICAgY29uc3QgeyBvaywgaGVhZGVycywgZGF0YSwga2luZCB9ID0gcmVzcG9uc2VcblxuICAgICAgY29uc3QgdG90YWxQYWdlcyA9IGhlYWRlcnMuZ2V0KCdYLVdQLVRvdGFscGFnZXMnKSB8fCAxXG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IGVuc3VyZU51bShwYWdlICsgMSlcblxuICAgICAgaWYgKCdlcnJvcicgaW4gZGF0YSkge1xuICAgICAgICBsb2cuZXJyb3IoZGF0YS5lcnJvcilcblxuICAgICAgICBzZXRTdGF0ZSgocykgPT4gKHtcbiAgICAgICAgICBzdWJtaXNzaW9uczogW10sXG4gICAgICAgICAgcGFnZTogMCxcbiAgICAgICAgICBtb3JlQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9KSlcbiAgICAgIH0gZWxzZSBpZiAoIW9rKSB7XG4gICAgICAgIGxvZy5lcnJvcignUmVxdWVzdCB0byBnZXQgZm9ybSBzdWJtaXNzaW9ucyBmYWlsZWQnKVxuXG4gICAgICAgIHNldFN0YXRlKChzKSA9PiAoe1xuICAgICAgICAgIHN1Ym1pc3Npb25zOiBbXSxcbiAgICAgICAgICBwYWdlOiAwLFxuICAgICAgICAgIG1vcmVBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH0pKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdGUoKHMpID0+ICh7XG4gICAgICAgICAgc3VibWlzc2lvbnM6IFsuLi5zLnN1Ym1pc3Npb25zLCAuLi5kYXRhXSxcbiAgICAgICAgICBwYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgICBtb3JlQXZhaWxhYmxlOiBjdXJyZW50UGFnZSA8IGVuc3VyZU51bSh0b3RhbFBhZ2VzLCB0cnVlKSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhpcyBydW5zLCB0aGVyZSdzIGEgbWlzdGFrZSBpbiB0aGUgY29kZS4gVGhlcmUgc2hvdWxkbid0IGJlLCBzaW5jZSBpdCdzIFRTLlxuICAgICAgbG9nLmVycm9yKCdTb21ldGhpbmcgaXMgd3Jvbmcgd2l0aCBsb2FkTW9yZScsIHJlc3BvbnNlKVxuXG4gICAgICBzZXRTdGF0ZSgocykgPT4gKHtcbiAgICAgICAgLi4ucyxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFN1Ym1pc3Npb25TaXplID0gKGl0ZW1JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgLy8gY29uc3Qgc3VibWlzc2lvbiA9IHN1Ym1pc3Npb25zW2l0ZW1JbmRleF07XG5cbiAgICByZXR1cm4gNTBcbiAgfVxuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChzdWJtaXNzaW9uOiBTdWJtaXNzaW9uKSA9PiB7XG4gICAgc2V0TW9kYWwoe1xuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWwoKGQpID0+ICh7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIHN1Ym1pc3Npb246IG51bGwsXG4gICAgfSkpXG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgbW9yZSBzdWJtaXNzaW9ucyB0byBiZSBsb2FkZWQgdGhlbiBhZGQgYW4gZXh0cmEgcm93IHRvIGhvbGQgYSBsb2FkaW5nIGluZGljYXRvci5cbiAgY29uc3QgaXRlbUNvdW50ID0gbW9yZUF2YWlsYWJsZSA/IHN1Ym1pc3Npb25zLmxlbmd0aCArIDEgOiBzdWJtaXNzaW9ucy5sZW5ndGhcbiAgY29uc3QgbG9hZE1vcmVJdGVtcyA9IGlzTG9hZGluZyA/IGFzeW5jICgpID0+IHt9IDogbG9hZE1vcmVcblxuICAvLyBFdmVyeSByb3cgaXMgbG9hZGVkIGV4Y2VwdCBmb3Igb3VyIGxvYWRpbmcgaW5kaWNhdG9yIHJvdy5cbiAgY29uc3QgaXNJdGVtTG9hZGVkID0gKGluZGV4OiBudW1iZXIpID0+XG4gICAgIW1vcmVBdmFpbGFibGUgfHwgaW5kZXggPCBzdWJtaXNzaW9ucy5sZW5ndGhcblxuICBjb25zdCBJdGVtID0gKHsgaW5kZXgsIHN0eWxlIH06IHsgaW5kZXg6IG51bWJlcjsgc3R5bGU6IGFueSB9KSA9PiB7XG4gICAgbGV0IGNvbnRlbnRcbiAgICBpZiAoIWlzSXRlbUxvYWRlZChpbmRleCkpIHtcbiAgICAgIGNvbnRlbnQgPSBnbG9iYWxEYXRhLmkxOG4ubG9hZGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJtaXNzaW9uID0gc3VibWlzc2lvbnNbaW5kZXhdXG5cbiAgICAgIGlmICghc3VibWlzc2lvbikge1xuICAgICAgICBsb2cuZXJyb3IoJ05vIHN1Ym1pc3Npb24gZm91bmQgZm9yIGluZGV4JywgaW5kZXgsIHN1Ym1pc3Npb25zKVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgIDxTdWJtaXNzaW9uUm93XG4gICAgICAgICAgc3VibWlzc2lvbj17c3VibWlzc2lvbn1cbiAgICAgICAgICBleGFtaW5lPXtvcGVuTW9kYWx9XG4gICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRJZHMuaGFzKHN1Ym1pc3Npb24udXVpZCl9XG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0+e2NvbnRlbnR9PC9kaXY+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxJbmZpbml0ZUxvYWRlclxuICAgICAgICBpc0l0ZW1Mb2FkZWQ9e2lzSXRlbUxvYWRlZH1cbiAgICAgICAgaXRlbUNvdW50PXtpdGVtQ291bnR9XG4gICAgICAgIGxvYWRNb3JlSXRlbXM9e2xvYWRNb3JlSXRlbXN9XG4gICAgICA+XG4gICAgICAgIHsoeyBvbkl0ZW1zUmVuZGVyZWQsIHJlZiB9KSA9PiAoXG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIkxpc3RcIlxuICAgICAgICAgICAgaGVpZ2h0PXtpdGVtQ291bnQgPiAwID8gNDAwIDogMH1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17aXRlbUNvdW50fVxuICAgICAgICAgICAgaXRlbVNpemU9e2dldFN1Ym1pc3Npb25TaXplfVxuICAgICAgICAgICAgb25JdGVtc1JlbmRlcmVkPXtvbkl0ZW1zUmVuZGVyZWR9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge0l0ZW19XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICApfVxuICAgICAgPC9JbmZpbml0ZUxvYWRlcj5cblxuICAgICAgeyFzdWJtaXNzaW9ucy5sZW5ndGggPyA8cD57Z2xvYmFsRGF0YS5pMThuLm5vU3VibWlzc2lvbnNZZXR9PC9wPiA6IG51bGx9XG5cbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e29wZW59XG4gICAgICAgIC8vIG9uQWZ0ZXJPcGVuPXthZnRlck9wZW5Nb2RhbH1cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgIGNvbnRlbnRMYWJlbD17Z2xvYmFsRGF0YS5pMThuLmZvcm1TdWJtaXNzaW9ufVxuICAgICAgICBjbGFzc05hbWU9XCJ3cGxmLXN1Ym1pc3Npb25Nb2RhbFwiXG4gICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJ3cGxmLXN1Ym1pc3Npb25Nb2RhbF9fb3ZlcmxheVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BsZi1zdWJtaXNzaW9uTW9kYWxfX3dyYXBwZXJcIj5cbiAgICAgICAgICB7bW9kYWxTdWJtaXNzaW9uID8gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8RGV0YWlsZWRTdWJtaXNzaW9uIHN1Ym1pc3Npb249e21vZGFsU3VibWlzc2lvbn0gLz5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwbGYtc3VibWlzc2lvbk1vZGFsX19idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHdwbGYtZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybURlbGV0ZShtb2RhbFN1Ym1pc3Npb24pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtnbG9iYWxEYXRhLmkxOG4uZGVsZXRlfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZU1vZGFsfSBjbGFzc05hbWU9XCJidXR0b24gd3BsZi1jbG9zZVwiPlxuICAgICAgICAgICAgICAgICAge2dsb2JhbERhdGEuaTE4bi5jbG9zZX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgV1BMRl9Gb3JtIH0gZnJvbSAnLi9jbGFzc2VzL3dwbGYtZm9ybSdcblxuZXhwb3J0IGVudW0gU3VibWl0U3RhdGUge1xuICBVbnN1Ym1pdHRlZCxcbiAgU3VibWl0dGluZyxcbiAgU3VjY2VzcyxcbiAgRXJyb3IsXG59XG5leHBvcnQgdHlwZSBTdWJtaXRIYW5kbGVyID0gKGV2ZW50OiBFdmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuZXhwb3J0IHR5cGUgRm9ybUNhbGxiYWNrID0gKHdwbGZGb3JtOiBXUExGX0Zvcm0sIHBhcmFtczogTGlzdDxhbnk+KSA9PiB2b2lkXG5cbmV4cG9ydCBpbnRlcmZhY2UgV1BMRl9UYWJzIHtcbiAgcmVtZW1iZXI6IGJvb2xlYW5cbiAgYWN0aXZlVGFiOiBudWxsIHwgc3RyaW5nXG4gIHJvb3Q6IEhUTUxFbGVtZW50XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpc3Q8VD4ge1xuICBbazogc3RyaW5nXTogVFxufVxuXG5leHBvcnQgZW51bSBBcGlSZXNwb25zZUtpbmQge1xuICBTdWJtaXNzaW9uID0gJ3N1Ym1pc3Npb24nLFxuICBSZW5kZXIgPSAncmVuZGVyJyxcbiAgR2V0U3VibWlzc2lvbnMgPSAnZ2V0c3VibWlzc2lvbnMnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhd0FwaVJlc3BvbnNlIHtcbiAgaGVhZGVyczogSGVhZGVyc1xuICBzdGF0dXM6IG51bWJlclxuICBzdGF0dXNUZXh0OiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgb2s6IGJvb2xlYW5cbiAgZGF0YTogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VibWl0QXBpUmVzcG9uc2UgZXh0ZW5kcyBSYXdBcGlSZXNwb25zZSB7XG4gIGtpbmQ6IEFwaVJlc3BvbnNlS2luZC5TdWJtaXNzaW9uXG4gIGRhdGE6XG4gICAgfCBBcGlFcnJvclxuICAgIHwge1xuICAgICAgICBzdWJtaXNzaW9uOiB7XG4gICAgICAgICAgSUQ6IG51bWJlclxuICAgICAgICB9XG4gICAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U3VibWlzc2lvbnNBcGlSZXNwb25zZSBleHRlbmRzIFJhd0FwaVJlc3BvbnNlIHtcbiAga2luZDogQXBpUmVzcG9uc2VLaW5kLkdldFN1Ym1pc3Npb25zXG4gIGRhdGE6IEFwaUVycm9yIHwgU3VibWlzc2lvbltdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyQXBpUmVzcG9uc2UgZXh0ZW5kcyBSYXdBcGlSZXNwb25zZSB7XG4gIGtpbmQ6IEFwaVJlc3BvbnNlS2luZC5SZW5kZXJcbiAgZGF0YTpcbiAgICB8IEFwaUVycm9yXG4gICAgfCB7XG4gICAgICAgIGh0bWw6IHN0cmluZ1xuICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgSUQ6IG51bWJlclxuICAgICAgICAgIHBvc3RDb250YWluc0ZpbGVJbnB1dHM6IHRydWVcbiAgICAgICAgICB0aXRsZTogc3RyaW5nXG4gICAgICAgIH1cbiAgICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGlFcnJvciB7XG4gIGVycm9yOiBzdHJpbmdcbiAgZGF0YTogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIEFwaVJlc3BvbnNlID1cbiAgfCBTdWJtaXRBcGlSZXNwb25zZVxuICB8IEdldFN1Ym1pc3Npb25zQXBpUmVzcG9uc2VcbiAgfCBSZW5kZXJBcGlSZXNwb25zZVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm0ge1xuICBJRDogbnVtYmVyXG4gIGFkZFRvTWVkaWFMaWJyYXJ5OiBib29sZWFuXG4gIGFkZGl0aW9uYWxGaWVsZHM6IHN0cmluZ1tdXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBmaWVsZHM6IEZpZWxkW11cbiAgaGlzdG9yeUZpZWxkczogTGlzdDxGaWVsZFtdPlxuICBwb3N0Q29udGFpbnNGaWxlSW5wdXRzOiBib29sZWFuXG4gIHRpdGxlOiBzdHJpbmdcbiAgdmVyc2lvbkNyZWF0ZWRBdDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VibWlzc2lvbiB7XG4gIElEOiBudW1iZXJcbiAgdGl0bGU6IHN0cmluZ1xuICB1dWlkOiBzdHJpbmdcbiAgcmVmZXJyZXI6IExpc3Q8YW55PlxuICBoaXN0b3J5SWQ6IG51bWJlclxuICBjcmVhdGVkQXQ6IHN0cmluZ1xuICBtb2RpZmllZEF0OiBzdHJpbmdcbiAgZW50cmllczogTGlzdDxhbnk+XG4gIGZvcm1GaWVsZHM6IExpc3Q8RmllbGQ+XG4gIG1ldGE6IExpc3Q8YW55PlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgbmFtZTogc3RyaW5nXG4gIHR5cGU6IHN0cmluZ1xuICByZXF1aXJlZDogYm9vbGVhblxuICBtdWx0aXBsZTogYm9vbGVhblxuICBhdHRyaWJ1dGVzOiBMaXN0PHN0cmluZz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBXUExGX0VkaXRvclN0YXRlIHtcbiAgaGlzdG9yeUZpZWxkczogTGlzdDxGaWVsZD5cbiAgLy8gZmllbGRzOiBGaWVsZFtdXG4gIGZpZWxkczogTGlzdDxGaWVsZD5cbiAgYWRkaXRpb25hbEZpZWxkczogc3RyaW5nW11cbiAgbmV3RmllbGRzOiBGaWVsZFtdXG4gIGRlbGV0ZWRGaWVsZHM6IEZpZWxkW11cbiAgYWxsb3dTYXZlOiBib29sZWFuXG4gIFtrOiBzdHJpbmddOiBhbnkgLy8gYW5kIGFueXRoaW5nIGVsc2UgeW91ciBoZWFydCBtYXkgZGVzaXJlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV1BMRl9Mb2NhbGl6ZURhdGEge1xuICBiYWNrZW5kVXJsOiBzdHJpbmdcbiAgYXNzZXRzRGlyOiBzdHJpbmdcbiAgLy8gZmV0Y2hDcmVkZW50aWFsczogc3RyaW5nXG4gIGZldGNoQ3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfCAnaW5jbHVkZScgfCAnb21pdCdcbiAgaTE4bjogTGlzdDxzdHJpbmc+XG4gIGFkbWluVXJsPzogc3RyaW5nXG4gIGxhbmc/OiBzdHJpbmdcbiAgcG9zdD86IHsgSUQ6IHN0cmluZzsgW2s6IHN0cmluZ106IGFueSB9IC8vIFdlIG9ubHkgY2FyZSBhYm91dCB0aGUgSURcbiAgcmVxdWVzdEhlYWRlcnM6IHtcbiAgICAnWC1XUC1Ob25jZSc6IHN0cmluZ1xuICAgIFtrOiBzdHJpbmddOiBhbnlcbiAgfVxuICBjb2RlTWlycm9yOiBhbnlcbiAgc2V0dGluZ3M6IHtcbiAgICBhdXRvaW5pdDogYm9vbGVhblxuICAgIGRlYnVnTGV2ZWw6IHN0cmluZ1xuICAgIGhhc1VuZmlsdGVyZWRIdG1sOiBib29sZWFuXG4gICAgcGFyc2VMaWJyZWZvcm1zU2hvcnRjb2RlSW5SZXN0QXBpOiBib29sZWFuXG4gIH1cbn1cblxud2luZG93WydSZWFjdCddID0gUmVhY3RcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvLyBSZWFjdDogUmVhY3QgLy8gQHR5cGVzL3JlYWN0IGhhcyBpdCBoYW5kbGVkIGFscmVhZHlcbiAgICAvLyBXUExGOiBXUExGIC8vIFdlJ3JlIG5vdCBnb2luZyB0byB1c2Ugb3VyIG93biBsaWJyYXJ5IGZyb20gd2luZG93XG5cbiAgICAvLyBUaGlzIGNvbWVzIGZyb20gV29yZFByZXNzXG4gICAgd3BsZkRhdGE6IFdQTEZfTG9jYWxpemVEYXRhXG5cbiAgICAvLyBTb21lIFdQIGdsb2JhbHMgdGhhdCB3ZSBkb24ndCBoYXZlIHR5cGVzIGZvclxuICAgIGpRdWVyeTogYW55IC8vIFdQIHVzZXMgMS4xMi40LCB0aGVyZSdzIG5vIEB0eXBlcy9qcXVlcnlAMS4xMi40XG4gICAgLy8gXzogYW55LCAvLyBAdHlwZXMvdW5kZXJzY29yZUAxLjguM1xuICAgIHdwOiBhbnlcbiAgfVxufVxuIiwiaW1wb3J0IFdQTEZfQWRtaW4gZnJvbSAnLi9jbGFzc2VzL3dwbGYtYWRtaW4nXG5pbXBvcnQgV1BMRiBmcm9tICcuL2NsYXNzZXMvd3BsZidcblxuaW1wb3J0ICcuL3R5cGVzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvd3BsZi1hZG1pbi5zY3NzJ1xuXG4vKipcbiAqIFRoaXMgZmlsZSBpcyBidWlsdCBpbnRvIGFuIFVNRCBidW5kbGUuIFRoZSBkZWZhdWx0IGV4cG9ydCB3aWxsXG4gKiBiZSBleHBvc2VkIHVuZGVyIHdpbmRvdy5XUExGLCBpZiB0aGUgcmVzdWx0aW5nIGZpbGUgaXMgbG9hZGVkIHZpYVxuICogPHNjcmlwdD4gdGFnLlxuICpcbiAqIFRoZSByZXN1bHRpbmcgZmlsZSBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIGluc2lkZSAvd3AtYWRtaW4gb25seSwgYWx0aG91Z2ggaXQgaXMgYXZhaWxhYmxlIGFzIGEgbW9kdWxlLCBkbyBub3QgdHJ5IHRvIGltcG9ydCBpdCBvdXRzaWRlLlxuICpcbiAqIEFzIHRoaXMgbW9kdWxlIGFzc2lnbnMgaXRzZWxmIHRvIHdpbmRvdy5XUExGLCBETyBOT1QgbG9hZCB3cGxmLWZyb250ZW5kLmpzIGF0IHRoZSBzYW1lIHRpbWUgdG8gYXZvaWQgaGF2aW5nIGEgdmVyeSBiYWQgZGF5LlxuICovXG5leHBvcnQgZGVmYXVsdCBuZXcgV1BMRl9BZG1pbihuZXcgV1BMRigpKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCIvKmdsb2JhbHMgc2VsZiwgd2luZG93ICovXG5cInVzZSBzdHJpY3RcIlxuXG4vKmVzbGludC1kaXNhYmxlIEBteXN0aWNhdGVhL3ByZXR0aWVyICovXG5jb25zdCB7IEFib3J0Q29udHJvbGxlciwgQWJvcnRTaWduYWwgfSA9XG4gICAgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDpcbiAgICAvKiBvdGhlcndpc2UgKi8gdW5kZWZpbmVkXG4vKmVzbGludC1lbmFibGUgQG15c3RpY2F0ZWEvcHJldHRpZXIgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBBYm9ydENvbnRyb2xsZXJcbm1vZHVsZS5leHBvcnRzLkFib3J0U2lnbmFsID0gQWJvcnRTaWduYWxcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBBYm9ydENvbnRyb2xsZXJcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iLCJmdW5jdGlvbiBhcmVJbnB1dHNFcXVhbChuZXdJbnB1dHMsIGxhc3RJbnB1dHMpIHtcbiAgICBpZiAobmV3SW5wdXRzLmxlbmd0aCAhPT0gbGFzdElucHV0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0lucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobmV3SW5wdXRzW2ldICE9PSBsYXN0SW5wdXRzW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG1lbW9pemVPbmUocmVzdWx0Rm4sIGlzRXF1YWwpIHtcbiAgICBpZiAoaXNFcXVhbCA9PT0gdm9pZCAwKSB7IGlzRXF1YWwgPSBhcmVJbnB1dHNFcXVhbDsgfVxuICAgIHZhciBsYXN0VGhpcztcbiAgICB2YXIgbGFzdEFyZ3MgPSBbXTtcbiAgICB2YXIgbGFzdFJlc3VsdDtcbiAgICB2YXIgY2FsbGVkT25jZSA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xuICAgICAgICB2YXIgbmV3QXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbmV3QXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsZWRPbmNlICYmIGxhc3RUaGlzID09PSB0aGlzICYmIGlzRXF1YWwobmV3QXJncywgbGFzdEFyZ3MpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBsYXN0UmVzdWx0ID0gcmVzdWx0Rm4uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgICAgIGNhbGxlZE9uY2UgPSB0cnVlO1xuICAgICAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgICAgIGxhc3RBcmdzID0gbmV3QXJncztcbiAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiBtZW1vaXplZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZU9uZTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIC8vIFVzZSB0aGUgc2V0U3RhdGUoKSB1cGRhdGVyIHRvIGVuc3VyZSBzdGF0ZSBpc24ndCBzdGFsZSBpbiBjZXJ0YWluIGVkZ2UgY2FzZXMuXG4gIGZ1bmN0aW9uIHVwZGF0ZXIocHJldlN0YXRlKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUgOiBudWxsO1xuICB9XG4gIC8vIEJpbmRpbmcgXCJ0aGlzXCIgaXMgaW1wb3J0YW50IGZvciBzaGFsbG93IHJlbmRlcmVyIHN1cHBvcnQuXG4gIHRoaXMuc2V0U3RhdGUodXBkYXRlci5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICB0cnkge1xuICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyA9IHRydWU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGVcbiAgICApO1xuICB9IGZpbmFsbHkge1xuICAgIHRoaXMucHJvcHMgPSBwcmV2UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHByZXZTdGF0ZTtcbiAgfVxufVxuXG4vLyBSZWFjdCBtYXkgd2FybiBhYm91dCBjV00vY1dSUC9jV1UgbWV0aG9kcyBiZWluZyBkZXByZWNhdGVkLlxuLy8gQWRkIGEgZmxhZyB0byBzdXBwcmVzcyB0aGVzZSB3YXJuaW5ncyBmb3IgdGhpcyBzcGVjaWFsIGNhc2UuXG5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFVwZGF0ZS5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcblxuZnVuY3Rpb24gcG9seWZpbGwoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4gIGlmICghcHJvdG90eXBlIHx8ICFwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgcG9seWZpbGwgY2xhc3MgY29tcG9uZW50cycpO1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG5cbiAgLy8gSWYgbmV3IGNvbXBvbmVudCBBUElzIGFyZSBkZWZpbmVkLCBcInVuc2FmZVwiIGxpZmVjeWNsZXMgd29uJ3QgYmUgY2FsbGVkLlxuICAvLyBFcnJvciBpZiBhbnkgb2YgdGhlc2UgbGlmZWN5Y2xlcyBhcmUgcHJlc2VudCxcbiAgLy8gQmVjYXVzZSB0aGV5IHdvdWxkIHdvcmsgZGlmZmVyZW50bHkgYmV0d2VlbiBvbGRlciBhbmQgbmV3ZXIgKDE2LjMrKSB2ZXJzaW9ucyBvZiBSZWFjdC5cbiAgdmFyIGZvdW5kV2lsbE1vdW50TmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSBudWxsO1xuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnY29tcG9uZW50V2lsbE1vdW50JztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfVxuICBpZiAoXG4gICAgZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGxcbiAgKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG4gICAgdmFyIG5ld0FwaU5hbWUgPVxuICAgICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCknXG4gICAgICAgIDogJ2dldFNuYXBzaG90QmVmb3JlVXBkYXRlKCknO1xuXG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICAnVW5zYWZlIGxlZ2FjeSBsaWZlY3ljbGVzIHdpbGwgbm90IGJlIGNhbGxlZCBmb3IgY29tcG9uZW50cyB1c2luZyBuZXcgY29tcG9uZW50IEFQSXMuXFxuXFxuJyArXG4gICAgICAgIGNvbXBvbmVudE5hbWUgK1xuICAgICAgICAnIHVzZXMgJyArXG4gICAgICAgIG5ld0FwaU5hbWUgK1xuICAgICAgICAnIGJ1dCBhbHNvIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgbGVnYWN5IGxpZmVjeWNsZXM6JyArXG4gICAgICAgIChmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsTW91bnROYW1lIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGxcbiAgICAgICAgICA/ICdcXG4gICcgKyBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lXG4gICAgICAgICAgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxVcGRhdGVOYW1lIDogJycpICtcbiAgICAgICAgJ1xcblxcblRoZSBhYm92ZSBsaWZlY3ljbGVzIHNob3VsZCBiZSByZW1vdmVkLiBMZWFybiBtb3JlIGFib3V0IHRoaXMgd2FybmluZyBoZXJlOlxcbicgK1xuICAgICAgICAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hc3luYy1jb21wb25lbnQtbGlmZWN5Y2xlLWhvb2tzJ1xuICAgICk7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dNIGFuZCBjV1JQIHRvIGludm9rZSB0aGUgbmV3IHN0YXRpYyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoZXNlIGxpZmVjeWNsZXMgaWYgZ0RTRlAgZXhpc3RzLlxuICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gY29tcG9uZW50V2lsbE1vdW50O1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcztcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZS5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dVIHRvIGludm9rZSB0aGUgbmV3IGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhhdCBsaWZlY3ljbGUgaWYgZ1NCVSBleGlzdHMuXG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW5ub3QgcG9seWZpbGwgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSBmb3IgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBkZWZpbmUgY29tcG9uZW50RGlkVXBkYXRlKCkgb24gdGhlIHByb3RvdHlwZSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBjb21wb25lbnRXaWxsVXBkYXRlO1xuXG4gICAgdmFyIGNvbXBvbmVudERpZFVwZGF0ZSA9IHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU7XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGUsXG4gICAgICBtYXliZVNuYXBzaG90XG4gICAgKSB7XG4gICAgICAvLyAxNi4zKyB3aWxsIG5vdCBleGVjdXRlIG91ciB3aWxsLXVwZGF0ZSBtZXRob2Q7XG4gICAgICAvLyBJdCB3aWxsIHBhc3MgYSBzbmFwc2hvdCB2YWx1ZSB0byBkaWQtdXBkYXRlIHRob3VnaC5cbiAgICAgIC8vIE9sZGVyIHZlcnNpb25zIHdpbGwgcmVxdWlyZSBvdXIgcG9seWZpbGxlZCB3aWxsLXVwZGF0ZSB2YWx1ZS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGJvdGggY2FzZXMsIGJ1dCBjYW4ndCBqdXN0IGNoZWNrIGZvciB0aGUgcHJlc2VuY2Ugb2YgXCJtYXliZVNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGZvciA8PSAxNS54IHZlcnNpb25zIHRoaXMgbWlnaHQgYmUgYSBcInByZXZDb250ZXh0XCIgb2JqZWN0LlxuICAgICAgLy8gV2UgYWxzbyBjYW4ndCBqdXN0IGNoZWNrIFwiX19yZWFjdEludGVybmFsU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZ2V0LXNuYXBzaG90IG1pZ2h0IHJldHVybiBhIGZhbHN5IHZhbHVlLlxuICAgICAgLy8gU28gY2hlY2sgZm9yIHRoZSBleHBsaWNpdCBfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgZmxhZyB0byBkZXRlcm1pbmUgYmVoYXZpb3IuXG4gICAgICB2YXIgc25hcHNob3QgPSB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZ1xuICAgICAgICA/IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RcbiAgICAgICAgOiBtYXliZVNuYXBzaG90O1xuXG4gICAgICBjb21wb25lbnREaWRVcGRhdGUuY2FsbCh0aGlzLCBwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG5leHBvcnQgeyBwb2x5ZmlsbCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmJvZHlPcGVuQ2xhc3NOYW1lID0gZXhwb3J0cy5wb3J0YWxDbGFzc05hbWUgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfTW9kYWxQb3J0YWwgPSByZXF1aXJlKFwiLi9Nb2RhbFBvcnRhbFwiKTtcblxudmFyIF9Nb2RhbFBvcnRhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbFBvcnRhbCk7XG5cbnZhciBfYXJpYUFwcEhpZGVyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvYXJpYUFwcEhpZGVyXCIpO1xuXG52YXIgYXJpYUFwcEhpZGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2FyaWFBcHBIaWRlcik7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50ID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc2FmZUhUTUxFbGVtZW50XCIpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zYWZlSFRNTEVsZW1lbnQpO1xuXG52YXIgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcG9ydGFsQ2xhc3NOYW1lID0gZXhwb3J0cy5wb3J0YWxDbGFzc05hbWUgPSBcIlJlYWN0TW9kYWxQb3J0YWxcIjtcbnZhciBib2R5T3BlbkNsYXNzTmFtZSA9IGV4cG9ydHMuYm9keU9wZW5DbGFzc05hbWUgPSBcIlJlYWN0TW9kYWxfX0JvZHktLW9wZW5cIjtcblxudmFyIGlzUmVhY3QxNiA9IF9yZWFjdERvbTIuZGVmYXVsdC5jcmVhdGVQb3J0YWwgIT09IHVuZGVmaW5lZDtcblxudmFyIGdldENyZWF0ZVBvcnRhbCA9IGZ1bmN0aW9uIGdldENyZWF0ZVBvcnRhbCgpIHtcbiAgcmV0dXJuIGlzUmVhY3QxNiA/IF9yZWFjdERvbTIuZGVmYXVsdC5jcmVhdGVQb3J0YWwgOiBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KHBhcmVudFNlbGVjdG9yKSB7XG4gIHJldHVybiBwYXJlbnRTZWxlY3RvcigpO1xufVxuXG52YXIgTW9kYWwgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTW9kYWwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1vZGFsKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gTW9kYWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNb2RhbCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnJlbW92ZVBvcnRhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1JlYWN0MTYgJiYgX3JlYWN0RG9tMi5kZWZhdWx0LnVubW91bnRDb21wb25lbnRBdE5vZGUoX3RoaXMubm9kZSk7XG4gICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudChfdGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChfdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybignUmVhY3QtTW9kYWw6IFwicGFyZW50U2VsZWN0b3JcIiBwcm9wIGRpZCBub3QgcmV0dXJuZWQgYW55IERPTSAnICsgXCJlbGVtZW50LiBNYWtlIHN1cmUgdGhhdCB0aGUgcGFyZW50IGVsZW1lbnQgaXMgdW5tb3VudGVkIHRvIFwiICsgXCJhdm9pZCBhbnkgbWVtb3J5IGxlYWtzLlwiKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5wb3J0YWxSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5wb3J0YWwgPSByZWY7XG4gICAgfSwgX3RoaXMucmVuZGVyUG9ydGFsID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICB2YXIgY3JlYXRlUG9ydGFsID0gZ2V0Q3JlYXRlUG9ydGFsKCk7XG4gICAgICB2YXIgcG9ydGFsID0gY3JlYXRlUG9ydGFsKF90aGlzLCBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTW9kYWxQb3J0YWwyLmRlZmF1bHQsIF9leHRlbmRzKHsgZGVmYXVsdFN0eWxlczogTW9kYWwuZGVmYXVsdFN0eWxlcyB9LCBwcm9wcykpLCBfdGhpcy5ub2RlKTtcbiAgICAgIF90aGlzLnBvcnRhbFJlZihwb3J0YWwpO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICghX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00pIHJldHVybjtcblxuICAgICAgaWYgKCFpc1JlYWN0MTYpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubm9kZS5jbGFzc05hbWUgPSB0aGlzLnByb3BzLnBvcnRhbENsYXNzTmFtZTtcblxuICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQodGhpcy5wcm9wcy5wYXJlbnRTZWxlY3Rvcik7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcblxuICAgICAgIWlzUmVhY3QxNiAmJiB0aGlzLnJlbmRlclBvcnRhbCh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgcHJldlBhcmVudCA9IGdldFBhcmVudEVsZW1lbnQocHJldlByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICAgIHZhciBuZXh0UGFyZW50ID0gZ2V0UGFyZW50RWxlbWVudCh0aGlzLnByb3BzLnBhcmVudFNlbGVjdG9yKTtcbiAgICAgIHJldHVybiB7IHByZXZQYXJlbnQ6IHByZXZQYXJlbnQsIG5leHRQYXJlbnQ6IG5leHRQYXJlbnQgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIF8sIHNuYXBzaG90KSB7XG4gICAgICBpZiAoIV9zYWZlSFRNTEVsZW1lbnQuY2FuVXNlRE9NKSByZXR1cm47XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc09wZW4gPSBfcHJvcHMuaXNPcGVuLFxuICAgICAgICAgIHBvcnRhbENsYXNzTmFtZSA9IF9wcm9wcy5wb3J0YWxDbGFzc05hbWU7XG5cblxuICAgICAgaWYgKHByZXZQcm9wcy5wb3J0YWxDbGFzc05hbWUgIT09IHBvcnRhbENsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NOYW1lID0gcG9ydGFsQ2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldlBhcmVudCA9IHNuYXBzaG90LnByZXZQYXJlbnQsXG4gICAgICAgICAgbmV4dFBhcmVudCA9IHNuYXBzaG90Lm5leHRQYXJlbnQ7XG5cbiAgICAgIGlmIChuZXh0UGFyZW50ICE9PSBwcmV2UGFyZW50KSB7XG4gICAgICAgIHByZXZQYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgICAgbmV4dFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBTdG9wIHVubmVjZXNzYXJ5IHJlbmRlcnMgaWYgbW9kYWwgaXMgcmVtYWluaW5nIGNsb3NlZFxuICAgICAgaWYgKCFwcmV2UHJvcHMuaXNPcGVuICYmICFpc09wZW4pIHJldHVybjtcblxuICAgICAgIWlzUmVhY3QxNiAmJiB0aGlzLnJlbmRlclBvcnRhbCh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAoIV9zYWZlSFRNTEVsZW1lbnQuY2FuVXNlRE9NIHx8ICF0aGlzLm5vZGUgfHwgIXRoaXMucG9ydGFsKSByZXR1cm47XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMucG9ydGFsLnN0YXRlO1xuICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICB2YXIgY2xvc2VzQXQgPSBzdGF0ZS5pc09wZW4gJiYgdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUyAmJiAoc3RhdGUuY2xvc2VzQXQgfHwgbm93ICsgdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUyk7XG5cbiAgICAgIGlmIChjbG9zZXNBdCkge1xuICAgICAgICBpZiAoIXN0YXRlLmJlZm9yZUNsb3NlKSB7XG4gICAgICAgICAgdGhpcy5wb3J0YWwuY2xvc2VXaXRoVGltZW91dCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnJlbW92ZVBvcnRhbCwgY2xvc2VzQXQgLSBub3cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVQb3J0YWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICghX3NhZmVIVE1MRWxlbWVudC5jYW5Vc2VET00gfHwgIWlzUmVhY3QxNikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm5vZGUgJiYgaXNSZWFjdDE2KSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB9XG5cbiAgICAgIHZhciBjcmVhdGVQb3J0YWwgPSBnZXRDcmVhdGVQb3J0YWwoKTtcbiAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX01vZGFsUG9ydGFsMi5kZWZhdWx0LCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogdGhpcy5wb3J0YWxSZWYsXG4gICAgICAgIGRlZmF1bHRTdHlsZXM6IE1vZGFsLmRlZmF1bHRTdHlsZXNcbiAgICAgIH0sIHRoaXMucHJvcHMpKSwgdGhpcy5ub2RlKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJzZXRBcHBFbGVtZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEFwcEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgYXJpYUFwcEhpZGVyLnNldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cblxuICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cblxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICBpc09wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgY29udGVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgb3ZlcmxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RcbiAgfSksXG4gIHBvcnRhbENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGJvZHlPcGVuQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaHRtbE9wZW5DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgYmFzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhZnRlck9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYmVmb3JlQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSldKSxcbiAgb3ZlcmxheUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBiYXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFmdGVyT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBiZWZvcmVDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KV0pLFxuICBhcHBFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lmluc3RhbmNlT2YoX3NhZmVIVE1MRWxlbWVudDIuZGVmYXVsdCksXG4gIG9uQWZ0ZXJPcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVxdWVzdENsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNsb3NlVGltZW91dE1TOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgYXJpYUhpZGVBcHA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkRm9jdXNBZnRlclJlbmRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBwYXJlbnRTZWxlY3RvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBhcmlhOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgZGF0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHJvbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjb250ZW50TGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzaG91bGRDbG9zZU9uRXNjOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG92ZXJsYXlSZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY29udGVudFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBwb3J0YWxDbGFzc05hbWU6IHBvcnRhbENsYXNzTmFtZSxcbiAgYm9keU9wZW5DbGFzc05hbWU6IGJvZHlPcGVuQ2xhc3NOYW1lLFxuICByb2xlOiBcImRpYWxvZ1wiLFxuICBhcmlhSGlkZUFwcDogdHJ1ZSxcbiAgY2xvc2VUaW1lb3V0TVM6IDAsXG4gIHNob3VsZEZvY3VzQWZ0ZXJSZW5kZXI6IHRydWUsXG4gIHNob3VsZENsb3NlT25Fc2M6IHRydWUsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXG4gIHNob3VsZFJldHVybkZvY3VzQWZ0ZXJDbG9zZTogdHJ1ZSxcbiAgcGFyZW50U2VsZWN0b3I6IGZ1bmN0aW9uIHBhcmVudFNlbGVjdG9yKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG59O1xuTW9kYWwuZGVmYXVsdFN0eWxlcyA9IHtcbiAgb3ZlcmxheToge1xuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpXCJcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjQwcHhcIixcbiAgICBsZWZ0OiBcIjQwcHhcIixcbiAgICByaWdodDogXCI0MHB4XCIsXG4gICAgYm90dG9tOiBcIjQwcHhcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgcGFkZGluZzogXCIyMHB4XCJcbiAgfVxufTtcblxuXG4oMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoTW9kYWwpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNb2RhbDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9mb2N1c01hbmFnZXIgPSByZXF1aXJlKFwiLi4vaGVscGVycy9mb2N1c01hbmFnZXJcIik7XG5cbnZhciBmb2N1c01hbmFnZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZm9jdXNNYW5hZ2VyKTtcblxudmFyIF9zY29wZVRhYiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3Njb3BlVGFiXCIpO1xuXG52YXIgX3Njb3BlVGFiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njb3BlVGFiKTtcblxudmFyIF9hcmlhQXBwSGlkZXIgPSByZXF1aXJlKFwiLi4vaGVscGVycy9hcmlhQXBwSGlkZXJcIik7XG5cbnZhciBhcmlhQXBwSGlkZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfYXJpYUFwcEhpZGVyKTtcblxudmFyIF9jbGFzc0xpc3QgPSByZXF1aXJlKFwiLi4vaGVscGVycy9jbGFzc0xpc3RcIik7XG5cbnZhciBjbGFzc0xpc3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2xhc3NMaXN0KTtcblxudmFyIF9zYWZlSFRNTEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zYWZlSFRNTEVsZW1lbnRcIik7XG5cbnZhciBfc2FmZUhUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NhZmVIVE1MRWxlbWVudCk7XG5cbnZhciBfcG9ydGFsT3Blbkluc3RhbmNlcyA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3BvcnRhbE9wZW5JbnN0YW5jZXNcIik7XG5cbnZhciBfcG9ydGFsT3Blbkluc3RhbmNlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3J0YWxPcGVuSW5zdGFuY2VzKTtcblxucmVxdWlyZShcIi4uL2hlbHBlcnMvYm9keVRyYXBcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gc28gdGhhdCBvdXIgQ1NTIGlzIHN0YXRpY2FsbHkgYW5hbHl6YWJsZVxudmFyIENMQVNTX05BTUVTID0ge1xuICBvdmVybGF5OiBcIlJlYWN0TW9kYWxfX092ZXJsYXlcIixcbiAgY29udGVudDogXCJSZWFjdE1vZGFsX19Db250ZW50XCJcbn07XG5cbnZhciBUQUJfS0VZID0gOTtcbnZhciBFU0NfS0VZID0gMjc7XG5cbnZhciBhcmlhSGlkZGVuSW5zdGFuY2VzID0gMDtcblxudmFyIE1vZGFsUG9ydGFsID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1vZGFsUG9ydGFsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNb2RhbFBvcnRhbChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbFBvcnRhbCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTW9kYWxQb3J0YWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNb2RhbFBvcnRhbCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnNldE92ZXJsYXlSZWYgPSBmdW5jdGlvbiAob3ZlcmxheSkge1xuICAgICAgX3RoaXMub3ZlcmxheSA9IG92ZXJsYXk7XG4gICAgICBfdGhpcy5wcm9wcy5vdmVybGF5UmVmICYmIF90aGlzLnByb3BzLm92ZXJsYXlSZWYob3ZlcmxheSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNldENvbnRlbnRSZWYgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgX3RoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICBfdGhpcy5wcm9wcy5jb250ZW50UmVmICYmIF90aGlzLnByb3BzLmNvbnRlbnRSZWYoY29udGVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmFmdGVyQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBhcHBFbGVtZW50ID0gX3RoaXMkcHJvcHMuYXBwRWxlbWVudCxcbiAgICAgICAgICBhcmlhSGlkZUFwcCA9IF90aGlzJHByb3BzLmFyaWFIaWRlQXBwLFxuICAgICAgICAgIGh0bWxPcGVuQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuaHRtbE9wZW5DbGFzc05hbWUsXG4gICAgICAgICAgYm9keU9wZW5DbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5ib2R5T3BlbkNsYXNzTmFtZTtcblxuICAgICAgLy8gUmVtb3ZlIGNsYXNzZXMuXG5cbiAgICAgIGJvZHlPcGVuQ2xhc3NOYW1lICYmIGNsYXNzTGlzdC5yZW1vdmUoZG9jdW1lbnQuYm9keSwgYm9keU9wZW5DbGFzc05hbWUpO1xuXG4gICAgICBodG1sT3BlbkNsYXNzTmFtZSAmJiBjbGFzc0xpc3QucmVtb3ZlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXSwgaHRtbE9wZW5DbGFzc05hbWUpO1xuXG4gICAgICAvLyBSZXNldCBhcmlhLWhpZGRlbiBhdHRyaWJ1dGUgaWYgYWxsIG1vZGFscyBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgaWYgKGFyaWFIaWRlQXBwICYmIGFyaWFIaWRkZW5JbnN0YW5jZXMgPiAwKSB7XG4gICAgICAgIGFyaWFIaWRkZW5JbnN0YW5jZXMgLT0gMTtcblxuICAgICAgICBpZiAoYXJpYUhpZGRlbkluc3RhbmNlcyA9PT0gMCkge1xuICAgICAgICAgIGFyaWFBcHBIaWRlci5zaG93KGFwcEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5zaG91bGRGb2N1c0FmdGVyUmVuZGVyKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5zaG91bGRSZXR1cm5Gb2N1c0FmdGVyQ2xvc2UpIHtcbiAgICAgICAgICBmb2N1c01hbmFnZXIucmV0dXJuRm9jdXMoKTtcbiAgICAgICAgICBmb2N1c01hbmFnZXIudGVhcmRvd25TY29wZWRGb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvY3VzTWFuYWdlci5wb3BXaXRob3V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25BZnRlckNsb3NlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQWZ0ZXJDbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICBfcG9ydGFsT3Blbkluc3RhbmNlczIuZGVmYXVsdC5kZXJlZ2lzdGVyKF90aGlzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmJlZm9yZU9wZW4oKTtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hZnRlck9wZW4gJiYgX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2UpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNsb3NlVGltZXIpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGJlZm9yZUNsb3NlOiBmYWxzZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5zaG91bGRGb2N1c0FmdGVyUmVuZGVyKSB7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLnNldHVwU2NvcGVkRm9jdXMoX3RoaXMubm9kZSk7XG4gICAgICAgICAgZm9jdXNNYW5hZ2VyLm1hcmtGb3JGb2N1c0xhdGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBhZnRlck9wZW46IHRydWUgfSk7XG5cbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuaXNPcGVuICYmIF90aGlzLnByb3BzLm9uQWZ0ZXJPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkFmdGVyT3Blbih7XG4gICAgICAgICAgICAgIG92ZXJsYXlFbDogX3RoaXMub3ZlcmxheSxcbiAgICAgICAgICAgICAgY29udGVudEVsOiBfdGhpcy5jb250ZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5jbG9zZVRpbWVvdXRNUyA+IDApIHtcbiAgICAgICAgX3RoaXMuY2xvc2VXaXRoVGltZW91dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuY2xvc2VXaXRob3V0VGltZW91dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5mb2N1c0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuY29udGVudCAmJiAhX3RoaXMuY29udGVudEhhc0ZvY3VzKCkgJiYgX3RoaXMuY29udGVudC5mb2N1cygpO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZVdpdGhUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNsb3Nlc0F0ID0gRGF0ZS5ub3coKSArIF90aGlzLnByb3BzLmNsb3NlVGltZW91dE1TO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBiZWZvcmVDbG9zZTogdHJ1ZSwgY2xvc2VzQXQ6IGNsb3Nlc0F0IH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoX3RoaXMuY2xvc2VXaXRob3V0VGltZW91dCwgX3RoaXMuc3RhdGUuY2xvc2VzQXQgLSBEYXRlLm5vdygpKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbG9zZVdpdGhvdXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBiZWZvcmVDbG9zZTogZmFsc2UsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICAgIGNsb3Nlc0F0OiBudWxsXG4gICAgICB9LCBfdGhpcy5hZnRlckNsb3NlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IFRBQl9LRVkpIHtcbiAgICAgICAgKDAsIF9zY29wZVRhYjIuZGVmYXVsdCkoX3RoaXMuY29udGVudCwgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbkVzYyAmJiBldmVudC5rZXlDb2RlID09PSBFU0NfS0VZKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPdmVybGF5T25DbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnNob3VsZENsb3NlID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzLnNob3VsZENsb3NlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnNob3VsZENsb3NlICYmIF90aGlzLnByb3BzLnNob3VsZENsb3NlT25PdmVybGF5Q2xpY2spIHtcbiAgICAgICAgaWYgKF90aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkpIHtcbiAgICAgICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zaG91bGRDbG9zZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPdmVybGF5T25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayAmJiBldmVudC50YXJnZXQgPT0gX3RoaXMub3ZlcmxheSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVDb250ZW50T25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNob3VsZENsb3NlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLnJlcXVlc3RDbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLm93bmVySGFuZGxlc0Nsb3NlKCkgJiYgX3RoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vd25lckhhbmRsZXNDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkQmVDbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIV90aGlzLnN0YXRlLmlzT3BlbiAmJiAhX3RoaXMuc3RhdGUuYmVmb3JlQ2xvc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmNvbnRlbnRIYXNGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5jb250ZW50IHx8IF90aGlzLmNvbnRlbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmJ1aWxkQ2xhc3NOYW1lID0gZnVuY3Rpb24gKHdoaWNoLCBhZGRpdGlvbmFsKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9ICh0eXBlb2YgYWRkaXRpb25hbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGFkZGl0aW9uYWwpKSA9PT0gXCJvYmplY3RcIiA/IGFkZGl0aW9uYWwgOiB7XG4gICAgICAgIGJhc2U6IENMQVNTX05BTUVTW3doaWNoXSxcbiAgICAgICAgYWZ0ZXJPcGVuOiBDTEFTU19OQU1FU1t3aGljaF0gKyBcIi0tYWZ0ZXItb3BlblwiLFxuICAgICAgICBiZWZvcmVDbG9zZTogQ0xBU1NfTkFNRVNbd2hpY2hdICsgXCItLWJlZm9yZS1jbG9zZVwiXG4gICAgICB9O1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMuYmFzZTtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hZnRlck9wZW4pIHtcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWVzLmFmdGVyT3BlbjtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5iZWZvcmVDbG9zZSkge1xuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZXMuYmVmb3JlQ2xvc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIGFkZGl0aW9uYWwgPT09IFwic3RyaW5nXCIgJiYgYWRkaXRpb25hbCA/IGNsYXNzTmFtZSArIFwiIFwiICsgYWRkaXRpb25hbCA6IGNsYXNzTmFtZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYXR0cmlidXRlc0Zyb21PYmplY3QgPSBmdW5jdGlvbiAocHJlZml4LCBpdGVtcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGl0ZW1zKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICBhY2NbcHJlZml4ICsgXCItXCIgKyBuYW1lXSA9IGl0ZW1zW25hbWVdO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFmdGVyT3BlbjogZmFsc2UsXG4gICAgICBiZWZvcmVDbG9zZTogZmFsc2VcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkQ2xvc2UgPSBudWxsO1xuICAgIF90aGlzLm1vdmVGcm9tQ29udGVudFRvT3ZlcmxheSA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsUG9ydGFsLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpZiAocHJldlByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lICE9PSB0aGlzLnByb3BzLmJvZHlPcGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlYWN0LU1vZGFsOiBcImJvZHlPcGVuQ2xhc3NOYW1lXCIgcHJvcCBoYXMgYmVlbiBtb2RpZmllZC4gJyArIFwiVGhpcyBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvciB3aGVuIG11bHRpcGxlIG1vZGFscyBhcmUgb3Blbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZQcm9wcy5odG1sT3BlbkNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5odG1sT3BlbkNsYXNzTmFtZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS53YXJuKCdSZWFjdC1Nb2RhbDogXCJodG1sT3BlbkNsYXNzTmFtZVwiIHByb3AgaGFzIGJlZW4gbW9kaWZpZWQuICcgKyBcIlRoaXMgbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3Igd2hlbiBtdWx0aXBsZSBtb2RhbHMgYXJlIG9wZW4uXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiAhcHJldlByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuaXNPcGVuICYmIHByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBGb2N1cyBvbmx5IG5lZWRzIHRvIGJlIHNldCBvbmNlIHdoZW4gdGhlIG1vZGFsIGlzIGJlaW5nIG9wZW5lZFxuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdWxkRm9jdXNBZnRlclJlbmRlciAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgICB0aGlzLmZvY3VzQ29udGVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgICB0aGlzLmFmdGVyQ2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiZWZvcmVPcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJlZm9yZU9wZW4oKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhcHBFbGVtZW50ID0gX3Byb3BzLmFwcEVsZW1lbnQsXG4gICAgICAgICAgYXJpYUhpZGVBcHAgPSBfcHJvcHMuYXJpYUhpZGVBcHAsXG4gICAgICAgICAgaHRtbE9wZW5DbGFzc05hbWUgPSBfcHJvcHMuaHRtbE9wZW5DbGFzc05hbWUsXG4gICAgICAgICAgYm9keU9wZW5DbGFzc05hbWUgPSBfcHJvcHMuYm9keU9wZW5DbGFzc05hbWU7XG5cbiAgICAgIC8vIEFkZCBjbGFzc2VzLlxuXG4gICAgICBib2R5T3BlbkNsYXNzTmFtZSAmJiBjbGFzc0xpc3QuYWRkKGRvY3VtZW50LmJvZHksIGJvZHlPcGVuQ2xhc3NOYW1lKTtcblxuICAgICAgaHRtbE9wZW5DbGFzc05hbWUgJiYgY2xhc3NMaXN0LmFkZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF0sIGh0bWxPcGVuQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKGFyaWFIaWRlQXBwKSB7XG4gICAgICAgIGFyaWFIaWRkZW5JbnN0YW5jZXMgKz0gMTtcbiAgICAgICAgYXJpYUFwcEhpZGVyLmhpZGUoYXBwRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIF9wb3J0YWxPcGVuSW5zdGFuY2VzMi5kZWZhdWx0LnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIERvbid0IHN0ZWFsIGZvY3VzIGZyb20gaW5uZXIgZWxlbWVudHNcblxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaWQgPSBfcHJvcHMyLmlkLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWUgPSBfcHJvcHMyLm92ZXJsYXlDbGFzc05hbWUsXG4gICAgICAgICAgZGVmYXVsdFN0eWxlcyA9IF9wcm9wczIuZGVmYXVsdFN0eWxlcztcblxuICAgICAgdmFyIGNvbnRlbnRTdHlsZXMgPSBjbGFzc05hbWUgPyB7fSA6IGRlZmF1bHRTdHlsZXMuY29udGVudDtcbiAgICAgIHZhciBvdmVybGF5U3R5bGVzID0gb3ZlcmxheUNsYXNzTmFtZSA/IHt9IDogZGVmYXVsdFN0eWxlcy5vdmVybGF5O1xuXG4gICAgICByZXR1cm4gdGhpcy5zaG91bGRCZUNsb3NlZCgpID8gbnVsbCA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiB0aGlzLnNldE92ZXJsYXlSZWYsXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmJ1aWxkQ2xhc3NOYW1lKFwib3ZlcmxheVwiLCBvdmVybGF5Q2xhc3NOYW1lKSxcbiAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIG92ZXJsYXlTdHlsZXMsIHRoaXMucHJvcHMuc3R5bGUub3ZlcmxheSksXG4gICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVPdmVybGF5T25DbGljayxcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVPdmVybGF5T25Nb3VzZURvd25cbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICByZWY6IHRoaXMuc2V0Q29udGVudFJlZixcbiAgICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY29udGVudFN0eWxlcywgdGhpcy5wcm9wcy5zdHlsZS5jb250ZW50KSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5idWlsZENsYXNzTmFtZShcImNvbnRlbnRcIiwgY2xhc3NOYW1lKSxcbiAgICAgICAgICAgIHRhYkluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZUNvbnRlbnRPbk1vdXNlRG93bixcbiAgICAgICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVDb250ZW50T25Nb3VzZVVwLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDb250ZW50T25DbGljayxcbiAgICAgICAgICAgIHJvbGU6IHRoaXMucHJvcHMucm9sZSxcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmNvbnRlbnRMYWJlbFxuICAgICAgICAgIH0sIHRoaXMuYXR0cmlidXRlc0Zyb21PYmplY3QoXCJhcmlhXCIsIHRoaXMucHJvcHMuYXJpYSB8fCB7fSksIHRoaXMuYXR0cmlidXRlc0Zyb21PYmplY3QoXCJkYXRhXCIsIHRoaXMucHJvcHMuZGF0YSB8fCB7fSksIHtcbiAgICAgICAgICAgIFwiZGF0YS10ZXN0aWRcIjogdGhpcy5wcm9wcy50ZXN0SWRcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsUG9ydGFsO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuTW9kYWxQb3J0YWwuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge1xuICAgIG92ZXJsYXk6IHt9LFxuICAgIGNvbnRlbnQ6IHt9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZXM6IHt9XG59O1xuTW9kYWxQb3J0YWwucHJvcFR5cGVzID0ge1xuICBpc09wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICBkZWZhdWx0U3R5bGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb250ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICBvdmVybGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxuICB9KSxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGNvbnRlbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgIG92ZXJsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG4gIH0pLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RdKSxcbiAgb3ZlcmxheUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLFxuICBib2R5T3BlbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGh0bWxPcGVuQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYXJpYUhpZGVBcHA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgYXBwRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5pbnN0YW5jZU9mKF9zYWZlSFRNTEVsZW1lbnQyLmRlZmF1bHQpLFxuICBvbkFmdGVyT3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkFmdGVyQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25SZXF1ZXN0Q2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgY2xvc2VUaW1lb3V0TVM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzaG91bGRGb2N1c0FmdGVyUmVuZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdWxkUmV0dXJuRm9jdXNBZnRlckNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHJvbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjb250ZW50TGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhcmlhOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgZGF0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIHNob3VsZENsb3NlT25Fc2M6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgb3ZlcmxheVJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjb250ZW50UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGVzdElkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGFsUG9ydGFsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYXNzZXJ0Tm9kZUxpc3QgPSBhc3NlcnROb2RlTGlzdDtcbmV4cG9ydHMuc2V0RWxlbWVudCA9IHNldEVsZW1lbnQ7XG5leHBvcnRzLnZhbGlkYXRlRWxlbWVudCA9IHZhbGlkYXRlRWxlbWVudDtcbmV4cG9ydHMuaGlkZSA9IGhpZGU7XG5leHBvcnRzLnNob3cgPSBzaG93O1xuZXhwb3J0cy5kb2N1bWVudE5vdFJlYWR5T3JTU1JUZXN0aW5nID0gZG9jdW1lbnROb3RSZWFkeU9yU1NSVGVzdGluZztcbmV4cG9ydHMucmVzZXRGb3JUZXN0aW5nID0gcmVzZXRGb3JUZXN0aW5nO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKFwid2FybmluZ1wiKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX3NhZmVIVE1MRWxlbWVudCA9IHJlcXVpcmUoXCIuL3NhZmVIVE1MRWxlbWVudFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdsb2JhbEVsZW1lbnQgPSBudWxsO1xuXG5mdW5jdGlvbiBhc3NlcnROb2RlTGlzdChub2RlTGlzdCwgc2VsZWN0b3IpIHtcbiAgaWYgKCFub2RlTGlzdCB8fCAhbm9kZUxpc3QubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwicmVhY3QtbW9kYWw6IE5vIGVsZW1lbnRzIHdlcmUgZm91bmQgZm9yIHNlbGVjdG9yIFwiICsgc2VsZWN0b3IgKyBcIi5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RWxlbWVudChlbGVtZW50KSB7XG4gIHZhciB1c2VFbGVtZW50ID0gZWxlbWVudDtcbiAgaWYgKHR5cGVvZiB1c2VFbGVtZW50ID09PSBcInN0cmluZ1wiICYmIF9zYWZlSFRNTEVsZW1lbnQuY2FuVXNlRE9NKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh1c2VFbGVtZW50KTtcbiAgICBhc3NlcnROb2RlTGlzdChlbCwgdXNlRWxlbWVudCk7XG4gICAgdXNlRWxlbWVudCA9IFwibGVuZ3RoXCIgaW4gZWwgPyBlbFswXSA6IGVsO1xuICB9XG4gIGdsb2JhbEVsZW1lbnQgPSB1c2VFbGVtZW50IHx8IGdsb2JhbEVsZW1lbnQ7XG4gIHJldHVybiBnbG9iYWxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCkge1xuICBpZiAoIWFwcEVsZW1lbnQgJiYgIWdsb2JhbEVsZW1lbnQpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCBbXCJyZWFjdC1tb2RhbDogQXBwIGVsZW1lbnQgaXMgbm90IGRlZmluZWQuXCIsIFwiUGxlYXNlIHVzZSBgTW9kYWwuc2V0QXBwRWxlbWVudChlbClgIG9yIHNldCBgYXBwRWxlbWVudD17ZWx9YC5cIiwgXCJUaGlzIGlzIG5lZWRlZCBzbyBzY3JlZW4gcmVhZGVycyBkb24ndCBzZWUgbWFpbiBjb250ZW50XCIsIFwid2hlbiBtb2RhbCBpcyBvcGVuZWQuIEl0IGlzIG5vdCByZWNvbW1lbmRlZCwgYnV0IHlvdSBjYW4gb3B0LW91dFwiLCBcImJ5IHNldHRpbmcgYGFyaWFIaWRlQXBwPXtmYWxzZX1gLlwiXS5qb2luKFwiIFwiKSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGlkZShhcHBFbGVtZW50KSB7XG4gIGlmICh2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCkpIHtcbiAgICAoYXBwRWxlbWVudCB8fCBnbG9iYWxFbGVtZW50KS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdyhhcHBFbGVtZW50KSB7XG4gIGlmICh2YWxpZGF0ZUVsZW1lbnQoYXBwRWxlbWVudCkpIHtcbiAgICAoYXBwRWxlbWVudCB8fCBnbG9iYWxFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkb2N1bWVudE5vdFJlYWR5T3JTU1JUZXN0aW5nKCkge1xuICBnbG9iYWxFbGVtZW50ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVzZXRGb3JUZXN0aW5nKCkge1xuICBnbG9iYWxFbGVtZW50ID0gbnVsbDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9wb3J0YWxPcGVuSW5zdGFuY2VzID0gcmVxdWlyZShcIi4vcG9ydGFsT3Blbkluc3RhbmNlc1wiKTtcblxudmFyIF9wb3J0YWxPcGVuSW5zdGFuY2VzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvcnRhbE9wZW5JbnN0YW5jZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBCb2R5IGZvY3VzIHRyYXAgc2VlIElzc3VlICM3NDJcblxudmFyIGJlZm9yZSA9IHZvaWQgMCxcbiAgICBhZnRlciA9IHZvaWQgMCxcbiAgICBpbnN0YW5jZXMgPSBbXTtcblxuZnVuY3Rpb24gZm9jdXNDb250ZW50KCkge1xuICBpZiAoaW5zdGFuY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJSZWFjdC1Nb2RhbDogT3BlbiBpbnN0YW5jZXMgPiAwIGV4cGVjdGVkXCIpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaW5zdGFuY2VzW2luc3RhbmNlcy5sZW5ndGggLSAxXS5mb2N1c0NvbnRlbnQoKTtcbn1cblxuZnVuY3Rpb24gYm9keVRyYXAoZXZlbnRUeXBlLCBvcGVuSW5zdGFuY2VzKSB7XG4gIGlmICghYmVmb3JlIHx8ICFhZnRlcikge1xuICAgIGJlZm9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmVmb3JlLnNldEF0dHJpYnV0ZShcImRhdGEtcmVhY3QtbW9kYWwtYm9keS10cmFwXCIsIFwiXCIpO1xuICAgIGJlZm9yZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBiZWZvcmUuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGJlZm9yZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgYmVmb3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmb2N1c0NvbnRlbnQpO1xuICAgIGFmdGVyID0gYmVmb3JlLmNsb25lTm9kZSgpO1xuICAgIGFmdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmb2N1c0NvbnRlbnQpO1xuICB9XG5cbiAgaW5zdGFuY2VzID0gb3Blbkluc3RhbmNlcztcblxuICBpZiAoaW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAvLyBBZGQgZm9jdXMgdHJhcFxuICAgIGlmIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQgIT09IGJlZm9yZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYmVmb3JlLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQgIT09IGFmdGVyKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFmdGVyKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gUmVtb3ZlIGZvY3VzIHRyYXBcbiAgICBpZiAoYmVmb3JlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIGJlZm9yZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGJlZm9yZSk7XG4gICAgfVxuICAgIGlmIChhZnRlci5wYXJlbnRFbGVtZW50KSB7XG4gICAgICBhZnRlci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGFmdGVyKTtcbiAgICB9XG4gIH1cbn1cblxuX3BvcnRhbE9wZW5JbnN0YW5jZXMyLmRlZmF1bHQuc3Vic2NyaWJlKGJvZHlUcmFwKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZHVtcENsYXNzTGlzdHMgPSBkdW1wQ2xhc3NMaXN0cztcbnZhciBodG1sQ2xhc3NMaXN0ID0ge307XG52YXIgZG9jQm9keUNsYXNzTGlzdCA9IHt9O1xuXG5mdW5jdGlvbiBkdW1wQ2xhc3NMaXN0cygpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciBjbGFzc2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdLmNsYXNzTmFtZTtcbiAgICB2YXIgYnVmZmVyID0gXCJTaG93IHRyYWNrZWQgY2xhc3NlczpcXG5cXG5cIjtcblxuICAgIGJ1ZmZlciArPSBcIjxodG1sIC8+IChcIiArIGNsYXNzZXMgKyBcIik6XFxuXCI7XG4gICAgZm9yICh2YXIgeCBpbiBodG1sQ2xhc3NMaXN0KSB7XG4gICAgICBidWZmZXIgKz0gXCIgIFwiICsgeCArIFwiIFwiICsgaHRtbENsYXNzTGlzdFt4XSArIFwiXFxuXCI7XG4gICAgfVxuXG4gICAgY2xhc3NlcyA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBidWZmZXIgKz0gXCJcXG5cXG5kb2MuYm9keSAoXCIgKyBjbGFzc2VzICsgXCIpOlxcblwiO1xuICAgIGZvciAodmFyIF94IGluIGRvY0JvZHlDbGFzc0xpc3QpIHtcbiAgICAgIGJ1ZmZlciArPSBcIiAgXCIgKyBfeCArIFwiIFwiICsgZG9jQm9keUNsYXNzTGlzdFtfeF0gKyBcIlxcblwiO1xuICAgIH1cblxuICAgIGJ1ZmZlciArPSBcIlxcblwiO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhidWZmZXIpO1xuICB9XG59XG5cbi8qKlxuICogVHJhY2sgdGhlIG51bWJlciBvZiByZWZlcmVuY2Ugb2YgYSBjbGFzcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwb2xsIFRoZSBwb2xsIHRvIHJlY2VpdmUgdGhlIHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzIG5hbWUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBpbmNyZW1lbnRSZWZlcmVuY2UgPSBmdW5jdGlvbiBpbmNyZW1lbnRSZWZlcmVuY2UocG9sbCwgY2xhc3NOYW1lKSB7XG4gIGlmICghcG9sbFtjbGFzc05hbWVdKSB7XG4gICAgcG9sbFtjbGFzc05hbWVdID0gMDtcbiAgfVxuICBwb2xsW2NsYXNzTmFtZV0gKz0gMTtcbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn07XG5cbi8qKlxuICogRHJvcCB0aGUgcmVmZXJlbmNlIG9mIGEgY2xhc3MuXG4gKiBAcGFyYW0ge29iamVjdH0gcG9sbCBUaGUgcG9sbCB0byByZWNlaXZlIHRoZSByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzcyBuYW1lLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgZGVjcmVtZW50UmVmZXJlbmNlID0gZnVuY3Rpb24gZGVjcmVtZW50UmVmZXJlbmNlKHBvbGwsIGNsYXNzTmFtZSkge1xuICBpZiAocG9sbFtjbGFzc05hbWVdKSB7XG4gICAgcG9sbFtjbGFzc05hbWVdIC09IDE7XG4gIH1cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn07XG5cbi8qKlxuICogVHJhY2sgYSBjbGFzcyBhbmQgYWRkIHRvIHRoZSBnaXZlbiBjbGFzcyBsaXN0LlxuICogQHBhcmFtIHtPYmplY3R9IGNsYXNzTGlzdFJlZiBBIGNsYXNzIGxpc3Qgb2YgYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwb2xsICAgICAgICAgVGhlIHBvbGwgdG8gYmUgdXNlZC5cbiAqIEBwYXJhbSB7QXJyYXl9ICBjbGFzc2VzICAgICAgVGhlIGxpc3Qgb2YgY2xhc3NlcyB0byBiZSB0cmFja2VkLlxuICovXG52YXIgdHJhY2tDbGFzcyA9IGZ1bmN0aW9uIHRyYWNrQ2xhc3MoY2xhc3NMaXN0UmVmLCBwb2xsLCBjbGFzc2VzKSB7XG4gIGNsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaW5jcmVtZW50UmVmZXJlbmNlKHBvbGwsIGNsYXNzTmFtZSk7XG4gICAgY2xhc3NMaXN0UmVmLmFkZChjbGFzc05hbWUpO1xuICB9KTtcbn07XG5cbi8qKlxuICogVW50cmFjayBhIGNsYXNzIGFuZCByZW1vdmUgZnJvbSB0aGUgZ2l2ZW4gY2xhc3MgbGlzdCBpZiB0aGUgcmVmZXJlbmNlXG4gKiByZWFjaGVzIDAuXG4gKiBAcGFyYW0ge09iamVjdH0gY2xhc3NMaXN0UmVmIEEgY2xhc3MgbGlzdCBvZiBhbiBlbGVtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IHBvbGwgICAgICAgICBUaGUgcG9sbCB0byBiZSB1c2VkLlxuICogQHBhcmFtIHtBcnJheX0gIGNsYXNzZXMgICAgICBUaGUgbGlzdCBvZiBjbGFzc2VzIHRvIGJlIHVudHJhY2tlZC5cbiAqL1xudmFyIHVudHJhY2tDbGFzcyA9IGZ1bmN0aW9uIHVudHJhY2tDbGFzcyhjbGFzc0xpc3RSZWYsIHBvbGwsIGNsYXNzZXMpIHtcbiAgY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBkZWNyZW1lbnRSZWZlcmVuY2UocG9sbCwgY2xhc3NOYW1lKTtcbiAgICBwb2xsW2NsYXNzTmFtZV0gPT09IDAgJiYgY2xhc3NMaXN0UmVmLnJlbW92ZShjbGFzc05hbWUpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUHVibGljIGluZmVyZmFjZSB0byBhZGQgY2xhc3NlcyB0byB0aGUgZG9jdW1lbnQuYm9keS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBib2R5Q2xhc3MgVGhlIGNsYXNzIHN0cmluZyB0byBiZSBhZGRlZC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgbWF5IGNvbnRhaW4gbW9yZSB0aGVuIG9uZSBjbGFzc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoICcgJyBhcyBzZXBhcmF0b3IuXG4gKi9cbnZhciBhZGQgPSBleHBvcnRzLmFkZCA9IGZ1bmN0aW9uIGFkZChlbGVtZW50LCBjbGFzc1N0cmluZykge1xuICByZXR1cm4gdHJhY2tDbGFzcyhlbGVtZW50LmNsYXNzTGlzdCwgZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09IFwiaHRtbFwiID8gaHRtbENsYXNzTGlzdCA6IGRvY0JvZHlDbGFzc0xpc3QsIGNsYXNzU3RyaW5nLnNwbGl0KFwiIFwiKSk7XG59O1xuXG4vKipcbiAqIFB1YmxpYyBpbmZlcmZhY2UgdG8gcmVtb3ZlIGNsYXNzZXMgZnJvbSB0aGUgZG9jdW1lbnQuYm9keS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBib2R5Q2xhc3MgVGhlIGNsYXNzIHN0cmluZyB0byBiZSBhZGRlZC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgbWF5IGNvbnRhaW4gbW9yZSB0aGVuIG9uZSBjbGFzc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoICcgJyBhcyBzZXBhcmF0b3IuXG4gKi9cbnZhciByZW1vdmUgPSBleHBvcnRzLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50LCBjbGFzc1N0cmluZykge1xuICByZXR1cm4gdW50cmFja0NsYXNzKGVsZW1lbnQuY2xhc3NMaXN0LCBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJodG1sXCIgPyBodG1sQ2xhc3NMaXN0IDogZG9jQm9keUNsYXNzTGlzdCwgY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmhhbmRsZUJsdXIgPSBoYW5kbGVCbHVyO1xuZXhwb3J0cy5oYW5kbGVGb2N1cyA9IGhhbmRsZUZvY3VzO1xuZXhwb3J0cy5tYXJrRm9yRm9jdXNMYXRlciA9IG1hcmtGb3JGb2N1c0xhdGVyO1xuZXhwb3J0cy5yZXR1cm5Gb2N1cyA9IHJldHVybkZvY3VzO1xuZXhwb3J0cy5wb3BXaXRob3V0Rm9jdXMgPSBwb3BXaXRob3V0Rm9jdXM7XG5leHBvcnRzLnNldHVwU2NvcGVkRm9jdXMgPSBzZXR1cFNjb3BlZEZvY3VzO1xuZXhwb3J0cy50ZWFyZG93blNjb3BlZEZvY3VzID0gdGVhcmRvd25TY29wZWRGb2N1cztcblxudmFyIF90YWJiYWJsZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3RhYmJhYmxlXCIpO1xuXG52YXIgX3RhYmJhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RhYmJhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGZvY3VzTGF0ZXJFbGVtZW50cyA9IFtdO1xudmFyIG1vZGFsRWxlbWVudCA9IG51bGw7XG52YXIgbmVlZFRvRm9jdXMgPSBmYWxzZTtcblxuZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcbiAgbmVlZFRvRm9jdXMgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcbiAgaWYgKG5lZWRUb0ZvY3VzKSB7XG4gICAgbmVlZFRvRm9jdXMgPSBmYWxzZTtcbiAgICBpZiAoIW1vZGFsRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBuZWVkIHRvIHNlZSBob3cgalF1ZXJ5IHNoaW1zIGRvY3VtZW50Lm9uKCdmb2N1c2luJykgc28gd2UgZG9uJ3QgbmVlZCB0aGVcbiAgICAvLyBzZXRUaW1lb3V0LCBmaXJlZm94IGRvZXNuJ3Qgc3VwcG9ydCBmb2N1c2luLCBpZiBpdCBkaWQsIHdlIGNvdWxkIGZvY3VzXG4gICAgLy8gdGhlIGVsZW1lbnQgb3V0c2lkZSBvZiBhIHNldFRpbWVvdXQuIFNpZGUtZWZmZWN0IG9mIHRoaXMgaW1wbGVtZW50YXRpb25cbiAgICAvLyBpcyB0aGF0IHRoZSBkb2N1bWVudC5ib2R5IGdldHMgZm9jdXMsIGFuZCB0aGVuIHdlIGZvY3VzIG91ciBlbGVtZW50IHJpZ2h0XG4gICAgLy8gYWZ0ZXIsIHNlZW1zIGZpbmUuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW9kYWxFbGVtZW50LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBlbCA9ICgwLCBfdGFiYmFibGUyLmRlZmF1bHQpKG1vZGFsRWxlbWVudClbMF0gfHwgbW9kYWxFbGVtZW50O1xuICAgICAgZWwuZm9jdXMoKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrRm9yRm9jdXNMYXRlcigpIHtcbiAgZm9jdXNMYXRlckVsZW1lbnRzLnB1c2goZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmZ1bmN0aW9uIHJldHVybkZvY3VzKCkge1xuICB2YXIgdG9Gb2N1cyA9IG51bGw7XG4gIHRyeSB7XG4gICAgaWYgKGZvY3VzTGF0ZXJFbGVtZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIHRvRm9jdXMgPSBmb2N1c0xhdGVyRWxlbWVudHMucG9wKCk7XG4gICAgICB0b0ZvY3VzLmZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybihbXCJZb3UgdHJpZWQgdG8gcmV0dXJuIGZvY3VzIHRvXCIsIHRvRm9jdXMsIFwiYnV0IGl0IGlzIG5vdCBpbiB0aGUgRE9NIGFueW1vcmVcIl0uam9pbihcIiBcIikpO1xuICB9XG59XG4vKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuZnVuY3Rpb24gcG9wV2l0aG91dEZvY3VzKCkge1xuICBmb2N1c0xhdGVyRWxlbWVudHMubGVuZ3RoID4gMCAmJiBmb2N1c0xhdGVyRWxlbWVudHMucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHNldHVwU2NvcGVkRm9jdXMoZWxlbWVudCkge1xuICBtb2RhbEVsZW1lbnQgPSBlbGVtZW50O1xuXG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBoYW5kbGVCbHVyLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGhhbmRsZUZvY3VzLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYXR0YWNoRXZlbnQoXCJvbkJsdXJcIiwgaGFuZGxlQmx1cik7XG4gICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQoXCJvbkZvY3VzXCIsIGhhbmRsZUZvY3VzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZWFyZG93blNjb3BlZEZvY3VzKCkge1xuICBtb2RhbEVsZW1lbnQgPSBudWxsO1xuXG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgaGFuZGxlRm9jdXMpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5kZXRhY2hFdmVudChcIm9uQmx1clwiLCBoYW5kbGVCbHVyKTtcbiAgICBkb2N1bWVudC5kZXRhY2hFdmVudChcIm9uRm9jdXNcIiwgaGFuZGxlRm9jdXMpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIFRyYWNrcyBwb3J0YWxzIHRoYXQgYXJlIG9wZW4gYW5kIGVtaXRzIGV2ZW50cyB0byBzdWJzY3JpYmVyc1xuXG52YXIgUG9ydGFsT3Blbkluc3RhbmNlcyA9IGZ1bmN0aW9uIFBvcnRhbE9wZW5JbnN0YW5jZXMoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcnRhbE9wZW5JbnN0YW5jZXMpO1xuXG4gIHRoaXMucmVnaXN0ZXIgPSBmdW5jdGlvbiAob3Blbkluc3RhbmNlKSB7XG4gICAgaWYgKF90aGlzLm9wZW5JbnN0YW5jZXMuaW5kZXhPZihvcGVuSW5zdGFuY2UpICE9PSAtMSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oXCJSZWFjdC1Nb2RhbDogQ2Fubm90IHJlZ2lzdGVyIG1vZGFsIGluc3RhbmNlIHRoYXQncyBhbHJlYWR5IG9wZW5cIik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF90aGlzLm9wZW5JbnN0YW5jZXMucHVzaChvcGVuSW5zdGFuY2UpO1xuICAgIF90aGlzLmVtaXQoXCJyZWdpc3RlclwiKTtcbiAgfTtcblxuICB0aGlzLmRlcmVnaXN0ZXIgPSBmdW5jdGlvbiAob3Blbkluc3RhbmNlKSB7XG4gICAgdmFyIGluZGV4ID0gX3RoaXMub3Blbkluc3RhbmNlcy5pbmRleE9mKG9wZW5JbnN0YW5jZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oXCJSZWFjdC1Nb2RhbDogVW5hYmxlIHRvIGRlcmVnaXN0ZXIgXCIgKyBvcGVuSW5zdGFuY2UgKyBcIiBhcyBcIiArIFwiaXQgd2FzIG5ldmVyIHJlZ2lzdGVyZWRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF90aGlzLm9wZW5JbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBfdGhpcy5lbWl0KFwiZGVyZWdpc3RlclwiKTtcbiAgfTtcblxuICB0aGlzLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIF90aGlzLnN1YnNjcmliZXJzLnB1c2goY2FsbGJhY2spO1xuICB9O1xuXG4gIHRoaXMuZW1pdCA9IGZ1bmN0aW9uIChldmVudFR5cGUpIHtcbiAgICBfdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaWJlcihldmVudFR5cGUsXG4gICAgICAvLyBzaGFsbG93IGNvcHkgdG8gYXZvaWQgYWNjaWRlbnRhbCBtdXRhdGlvblxuICAgICAgX3RoaXMub3Blbkluc3RhbmNlcy5zbGljZSgpKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLm9wZW5JbnN0YW5jZXMgPSBbXTtcbiAgdGhpcy5zdWJzY3JpYmVycyA9IFtdO1xufTtcblxudmFyIHBvcnRhbE9wZW5JbnN0YW5jZXMgPSBuZXcgUG9ydGFsT3Blbkluc3RhbmNlcygpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBwb3J0YWxPcGVuSW5zdGFuY2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4ZW52ID0gcmVxdWlyZShcImV4ZW52XCIpO1xuXG52YXIgX2V4ZW52MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4ZW52KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEVFID0gX2V4ZW52Mi5kZWZhdWx0O1xuXG52YXIgU2FmZUhUTUxFbGVtZW50ID0gRUUuY2FuVXNlRE9NID8gd2luZG93LkhUTUxFbGVtZW50IDoge307XG5cbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9IEVFLmNhblVzZURPTTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU2FmZUhUTUxFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2NvcGVUYWI7XG5cbnZhciBfdGFiYmFibGUgPSByZXF1aXJlKFwiLi90YWJiYWJsZVwiKTtcblxudmFyIF90YWJiYWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWJiYWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNjb3BlVGFiKG5vZGUsIGV2ZW50KSB7XG4gIHZhciB0YWJiYWJsZSA9ICgwLCBfdGFiYmFibGUyLmRlZmF1bHQpKG5vZGUpO1xuXG4gIGlmICghdGFiYmFibGUubGVuZ3RoKSB7XG4gICAgLy8gRG8gbm90aGluZywgc2luY2UgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIHRoYXQgY2FuIHJlY2VpdmUgZm9jdXMuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdGFyZ2V0ID0gdm9pZCAwO1xuXG4gIHZhciBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICB2YXIgaGVhZCA9IHRhYmJhYmxlWzBdO1xuICB2YXIgdGFpbCA9IHRhYmJhYmxlW3RhYmJhYmxlLmxlbmd0aCAtIDFdO1xuXG4gIC8vIHByb2NlZWQgd2l0aCBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb24gdGFiLlxuICAvLyBGb2N1cyBvbiBsYXN0IGVsZW1lbnQgb24gc2hpZnQgKyB0YWIuXG4gIGlmIChub2RlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKCFzaGlmdEtleSkgcmV0dXJuO1xuICAgIHRhcmdldCA9IHRhaWw7XG4gIH1cblxuICBpZiAodGFpbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAhc2hpZnRLZXkpIHtcbiAgICB0YXJnZXQgPSBoZWFkO1xuICB9XG5cbiAgaWYgKGhlYWQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgc2hpZnRLZXkpIHtcbiAgICB0YXJnZXQgPSB0YWlsO1xuICB9XG5cbiAgaWYgKHRhcmdldCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU2FmYXJpIHJhZGlvIGlzc3VlLlxuICAvL1xuICAvLyBTYWZhcmkgZG9lcyBub3QgbW92ZSB0aGUgZm9jdXMgdG8gdGhlIHJhZGlvIGJ1dHRvbixcbiAgLy8gc28gd2UgbmVlZCB0byBmb3JjZSBpdCB0byByZWFsbHkgd2FsayB0aHJvdWdoIGFsbCBlbGVtZW50cy5cbiAgLy9cbiAgLy8gVGhpcyBpcyB2ZXJ5IGVycm9yIHByb25lLCBzaW5jZSB3ZSBhcmUgdHJ5aW5nIHRvIGd1ZXNzXG4gIC8vIGlmIGl0IGlzIGEgc2FmYXJpIGJyb3dzZXIgZnJvbSB0aGUgZmlyc3Qgb2NjdXJlbmNlIGJldHdlZW5cbiAgLy8gY2hyb21lIG9yIHNhZmFyaS5cbiAgLy9cbiAgLy8gVGhlIGNocm9tZSB1c2VyIGFnZW50IGNvbnRhaW5zIHRoZSBmaXJzdCBvY3VycmVuY2VcbiAgLy8gYXMgdGhlICdjaHJvbWUvdmVyc2lvbicgYW5kIGxhdGVyIHRoZSAnc2FmYXJpL3ZlcnNpb24nLlxuICB2YXIgY2hlY2tTYWZhcmkgPSAvKFxcYkNocm9tZVxcYnxcXGJTYWZhcmlcXGIpXFwvLy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB2YXIgaXNTYWZhcmlEZXNrdG9wID0gY2hlY2tTYWZhcmkgIT0gbnVsbCAmJiBjaGVja1NhZmFyaVsxXSAhPSBcIkNocm9tZVwiICYmIC9cXGJpUG9kXFxifFxcYmlQYWRcXGIvZy5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQpID09IG51bGw7XG5cbiAgLy8gSWYgd2UgYXJlIG5vdCBpbiBzYWZhcmkgZGVza3RvcCwgbGV0IHRoZSBicm93c2VyIGNvbnRyb2xcbiAgLy8gdGhlIGZvY3VzXG4gIGlmICghaXNTYWZhcmlEZXNrdG9wKSByZXR1cm47XG5cbiAgdmFyIHggPSB0YWJiYWJsZS5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gIGlmICh4ID4gLTEpIHtcbiAgICB4ICs9IHNoaWZ0S2V5ID8gLTEgOiAxO1xuICB9XG5cbiAgdGFyZ2V0ID0gdGFiYmFibGVbeF07XG5cbiAgLy8gSWYgdGhlIHRhYmJhYmxlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QsXG4gIC8vIGZvY3VzIGhlYWQvdGFpbCBiYXNlZCBvbiBzaGlmdEtleVxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFyZ2V0ID0gc2hpZnRLZXkgPyB0YWlsIDogaGVhZDtcbiAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHRhcmdldC5mb2N1cygpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZpbmRUYWJiYWJsZURlc2NlbmRhbnRzO1xuLyohXG4gKiBBZGFwdGVkIGZyb20galF1ZXJ5IFVJIGNvcmVcbiAqXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2NhdGVnb3J5L3VpLWNvcmUvXG4gKi9cblxudmFyIHRhYmJhYmxlTm9kZSA9IC9pbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdC87XG5cbmZ1bmN0aW9uIGhpZGVzQ29udGVudHMoZWxlbWVudCkge1xuICB2YXIgemVyb1NpemUgPSBlbGVtZW50Lm9mZnNldFdpZHRoIDw9IDAgJiYgZWxlbWVudC5vZmZzZXRIZWlnaHQgPD0gMDtcblxuICAvLyBJZiB0aGUgbm9kZSBpcyBlbXB0eSwgdGhpcyBpcyBnb29kIGVub3VnaFxuICBpZiAoemVyb1NpemUgJiYgIWVsZW1lbnQuaW5uZXJIVE1MKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBPdGhlcndpc2Ugd2UgbmVlZCB0byBjaGVjayBzb21lIHN0eWxlc1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgcmV0dXJuIHplcm9TaXplID8gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIm92ZXJmbG93XCIpICE9PSBcInZpc2libGVcIiB8fFxuICAvLyBpZiAnb3ZlcmZsb3c6IHZpc2libGUnIHNldCwgY2hlY2sgaWYgdGhlcmUgaXMgYWN0dWFsbHkgYW55IG92ZXJmbG93XG4gIGVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gMCAmJiBlbGVtZW50LnNjcm9sbEhlaWdodCA8PSAwIDogc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIikgPT0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIHZpc2libGUoZWxlbWVudCkge1xuICB2YXIgcGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gIHdoaWxlIChwYXJlbnRFbGVtZW50KSB7XG4gICAgaWYgKHBhcmVudEVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpIGJyZWFrO1xuICAgIGlmIChoaWRlc0NvbnRlbnRzKHBhcmVudEVsZW1lbnQpKSByZXR1cm4gZmFsc2U7XG4gICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZm9jdXNhYmxlKGVsZW1lbnQsIGlzVGFiSW5kZXhOb3ROYU4pIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgcmVzID0gdGFiYmFibGVOb2RlLnRlc3Qobm9kZU5hbWUpICYmICFlbGVtZW50LmRpc2FibGVkIHx8IChub2RlTmFtZSA9PT0gXCJhXCIgPyBlbGVtZW50LmhyZWYgfHwgaXNUYWJJbmRleE5vdE5hTiA6IGlzVGFiSW5kZXhOb3ROYU4pO1xuICByZXR1cm4gcmVzICYmIHZpc2libGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHRhYmJhYmxlKGVsZW1lbnQpIHtcbiAgdmFyIHRhYkluZGV4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgaWYgKHRhYkluZGV4ID09PSBudWxsKSB0YWJJbmRleCA9IHVuZGVmaW5lZDtcbiAgdmFyIGlzVGFiSW5kZXhOYU4gPSBpc05hTih0YWJJbmRleCk7XG4gIHJldHVybiAoaXNUYWJJbmRleE5hTiB8fCB0YWJJbmRleCA+PSAwKSAmJiBmb2N1c2FibGUoZWxlbWVudCwgIWlzVGFiSW5kZXhOYU4pO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFiYmFibGVEZXNjZW5kYW50cyhlbGVtZW50KSB7XG4gIHJldHVybiBbXS5zbGljZS5jYWxsKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIiksIDApLmZpbHRlcih0YWJiYWJsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01vZGFsID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9Nb2RhbFwiKTtcblxudmFyIF9Nb2RhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Nb2RhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Nb2RhbDIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGlzUmFuZ2VWaXNpYmxlKF9yZWYpIHtcbiAgdmFyIGxhc3RSZW5kZXJlZFN0YXJ0SW5kZXggPSBfcmVmLmxhc3RSZW5kZXJlZFN0YXJ0SW5kZXgsXG4gICAgICBsYXN0UmVuZGVyZWRTdG9wSW5kZXggPSBfcmVmLmxhc3RSZW5kZXJlZFN0b3BJbmRleCxcbiAgICAgIHN0YXJ0SW5kZXggPSBfcmVmLnN0YXJ0SW5kZXgsXG4gICAgICBzdG9wSW5kZXggPSBfcmVmLnN0b3BJbmRleDtcblxuICByZXR1cm4gIShzdGFydEluZGV4ID4gbGFzdFJlbmRlcmVkU3RvcEluZGV4IHx8IHN0b3BJbmRleCA8IGxhc3RSZW5kZXJlZFN0YXJ0SW5kZXgpO1xufVxuXG5mdW5jdGlvbiBzY2FuRm9yVW5sb2FkZWRSYW5nZXMoX3JlZikge1xuICB2YXIgaXNJdGVtTG9hZGVkID0gX3JlZi5pc0l0ZW1Mb2FkZWQsXG4gICAgICBpdGVtQ291bnQgPSBfcmVmLml0ZW1Db3VudCxcbiAgICAgIG1pbmltdW1CYXRjaFNpemUgPSBfcmVmLm1pbmltdW1CYXRjaFNpemUsXG4gICAgICBzdGFydEluZGV4ID0gX3JlZi5zdGFydEluZGV4LFxuICAgICAgc3RvcEluZGV4ID0gX3JlZi5zdG9wSW5kZXg7XG5cbiAgdmFyIHVubG9hZGVkUmFuZ2VzID0gW107XG5cbiAgdmFyIHJhbmdlU3RhcnRJbmRleCA9IG51bGw7XG4gIHZhciByYW5nZVN0b3BJbmRleCA9IG51bGw7XG5cbiAgZm9yICh2YXIgX2luZGV4ID0gc3RhcnRJbmRleDsgX2luZGV4IDw9IHN0b3BJbmRleDsgX2luZGV4KyspIHtcbiAgICB2YXIgbG9hZGVkID0gaXNJdGVtTG9hZGVkKF9pbmRleCk7XG5cbiAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgcmFuZ2VTdG9wSW5kZXggPSBfaW5kZXg7XG4gICAgICBpZiAocmFuZ2VTdGFydEluZGV4ID09PSBudWxsKSB7XG4gICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IF9pbmRleDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhbmdlU3RvcEluZGV4ICE9PSBudWxsKSB7XG4gICAgICB1bmxvYWRlZFJhbmdlcy5wdXNoKFtyYW5nZVN0YXJ0SW5kZXgsIHJhbmdlU3RvcEluZGV4XSk7XG5cbiAgICAgIHJhbmdlU3RhcnRJbmRleCA9IHJhbmdlU3RvcEluZGV4ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBJZiA6cmFuZ2VTdG9wSW5kZXggaXMgbm90IG51bGwgaXQgbWVhbnMgd2UgaGF2ZW4ndCByYW4gb3V0IG9mIHVubG9hZGVkIHJvd3MuXG4gIC8vIFNjYW4gZm9yd2FyZCB0byB0cnkgZmlsbGluZyBvdXIgOm1pbmltdW1CYXRjaFNpemUuXG4gIGlmIChyYW5nZVN0b3BJbmRleCAhPT0gbnVsbCkge1xuICAgIHZhciBwb3RlbnRpYWxTdG9wSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heChyYW5nZVN0b3BJbmRleCwgcmFuZ2VTdGFydEluZGV4ICsgbWluaW11bUJhdGNoU2l6ZSAtIDEpLCBpdGVtQ291bnQgLSAxKTtcblxuICAgIGZvciAodmFyIF9pbmRleDIgPSByYW5nZVN0b3BJbmRleCArIDE7IF9pbmRleDIgPD0gcG90ZW50aWFsU3RvcEluZGV4OyBfaW5kZXgyKyspIHtcbiAgICAgIGlmICghaXNJdGVtTG9hZGVkKF9pbmRleDIpKSB7XG4gICAgICAgIHJhbmdlU3RvcEluZGV4ID0gX2luZGV4MjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVubG9hZGVkUmFuZ2VzLnB1c2goW3JhbmdlU3RhcnRJbmRleCwgcmFuZ2VTdG9wSW5kZXhdKTtcbiAgfVxuXG4gIC8vIENoZWNrIHRvIHNlZSBpZiBvdXIgZmlyc3QgcmFuZ2UgZW5kZWQgcHJlbWF0dXJlbHkuXG4gIC8vIEluIHRoaXMgY2FzZSB3ZSBzaG91bGQgc2NhbiBiYWNrd2FyZHMgdG8gdHJ5IGZpbGxpbmcgb3VyIDptaW5pbXVtQmF0Y2hTaXplLlxuICBpZiAodW5sb2FkZWRSYW5nZXMubGVuZ3RoKSB7XG4gICAgdmFyIGZpcnN0UmFuZ2UgPSB1bmxvYWRlZFJhbmdlc1swXTtcblxuICAgIHdoaWxlIChmaXJzdFJhbmdlWzFdIC0gZmlyc3RSYW5nZVswXSArIDEgPCBtaW5pbXVtQmF0Y2hTaXplICYmIGZpcnN0UmFuZ2VbMF0gPiAwKSB7XG4gICAgICB2YXIgX2luZGV4MyA9IGZpcnN0UmFuZ2VbMF0gLSAxO1xuXG4gICAgICBpZiAoIWlzSXRlbUxvYWRlZChfaW5kZXgzKSkge1xuICAgICAgICBmaXJzdFJhbmdlWzBdID0gX2luZGV4MztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmxvYWRlZFJhbmdlcztcbn1cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciBzbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpO1xuXG52YXIgSW5maW5pdGVMb2FkZXIgPSBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgaW5oZXJpdHMoSW5maW5pdGVMb2FkZXIsIF9QdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbmZpbml0ZUxvYWRlcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBJbmZpbml0ZUxvYWRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBJbmZpbml0ZUxvYWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEluZmluaXRlTG9hZGVyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuX2xhc3RSZW5kZXJlZFN0YXJ0SW5kZXggPSAtMSwgX3RoaXMuX2xhc3RSZW5kZXJlZFN0b3BJbmRleCA9IC0xLCBfdGhpcy5fbWVtb2l6ZWRVbmxvYWRlZFJhbmdlcyA9IFtdLCBfdGhpcy5fb25JdGVtc1JlbmRlcmVkID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgdmlzaWJsZVN0YXJ0SW5kZXggPSBfcmVmMi52aXNpYmxlU3RhcnRJbmRleCxcbiAgICAgICAgICB2aXNpYmxlU3RvcEluZGV4ID0gX3JlZjIudmlzaWJsZVN0b3BJbmRleDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFpc0ludGVnZXIodmlzaWJsZVN0YXJ0SW5kZXgpIHx8ICFpc0ludGVnZXIodmlzaWJsZVN0b3BJbmRleCkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgb25JdGVtc1JlbmRlcmVkIHNpZ25hdHVyZTsgcGxlYXNlIHJlZmVyIHRvIEluZmluaXRlTG9hZGVyIGRvY3VtZW50YXRpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLmxvYWRNb3JlUm93cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSW5maW5pdGVMb2FkZXIgXCJsb2FkTW9yZVJvd3NcIiBwcm9wIGhhcyBiZWVuIHJlbmFtZWQgdG8gXCJsb2FkTW9yZUl0ZW1zXCIuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMuX2xhc3RSZW5kZXJlZFN0YXJ0SW5kZXggPSB2aXNpYmxlU3RhcnRJbmRleDtcbiAgICAgIF90aGlzLl9sYXN0UmVuZGVyZWRTdG9wSW5kZXggPSB2aXNpYmxlU3RvcEluZGV4O1xuXG4gICAgICBfdGhpcy5fZW5zdXJlUm93c0xvYWRlZCh2aXNpYmxlU3RhcnRJbmRleCwgdmlzaWJsZVN0b3BJbmRleCk7XG4gICAgfSwgX3RoaXMuX3NldFJlZiA9IGZ1bmN0aW9uIChsaXN0UmVmKSB7XG4gICAgICBfdGhpcy5fbGlzdFJlZiA9IGxpc3RSZWY7XG4gICAgfSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKEluZmluaXRlTG9hZGVyLCBbe1xuICAgIGtleTogJ3Jlc2V0bG9hZE1vcmVJdGVtc0NhY2hlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRsb2FkTW9yZUl0ZW1zQ2FjaGUoKSB7XG4gICAgICB2YXIgYXV0b1JlbG9hZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgIHRoaXMuX21lbW9pemVkVW5sb2FkZWRSYW5nZXMgPSBbXTtcblxuICAgICAgaWYgKGF1dG9SZWxvYWQpIHtcbiAgICAgICAgdGhpcy5fZW5zdXJlUm93c0xvYWRlZCh0aGlzLl9sYXN0UmVuZGVyZWRTdGFydEluZGV4LCB0aGlzLl9sYXN0UmVuZGVyZWRTdG9wSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5fbGlzdFJlZiA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGxpc3QgcmVmOyBwbGVhc2UgcmVmZXIgdG8gSW5maW5pdGVMb2FkZXIgZG9jdW1lbnRhdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cblxuICAgICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgICAgb25JdGVtc1JlbmRlcmVkOiB0aGlzLl9vbkl0ZW1zUmVuZGVyZWQsXG4gICAgICAgIHJlZjogdGhpcy5fc2V0UmVmXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfZW5zdXJlUm93c0xvYWRlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9lbnN1cmVSb3dzTG9hZGVkKHN0YXJ0SW5kZXgsIHN0b3BJbmRleCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNJdGVtTG9hZGVkID0gX3Byb3BzLmlzSXRlbUxvYWRlZCxcbiAgICAgICAgICBpdGVtQ291bnQgPSBfcHJvcHMuaXRlbUNvdW50LFxuICAgICAgICAgIF9wcm9wcyRtaW5pbXVtQmF0Y2hTaSA9IF9wcm9wcy5taW5pbXVtQmF0Y2hTaXplLFxuICAgICAgICAgIG1pbmltdW1CYXRjaFNpemUgPSBfcHJvcHMkbWluaW11bUJhdGNoU2kgPT09IHVuZGVmaW5lZCA/IDEwIDogX3Byb3BzJG1pbmltdW1CYXRjaFNpLFxuICAgICAgICAgIF9wcm9wcyR0aHJlc2hvbGQgPSBfcHJvcHMudGhyZXNob2xkLFxuICAgICAgICAgIHRocmVzaG9sZCA9IF9wcm9wcyR0aHJlc2hvbGQgPT09IHVuZGVmaW5lZCA/IDE1IDogX3Byb3BzJHRocmVzaG9sZDtcblxuXG4gICAgICB2YXIgdW5sb2FkZWRSYW5nZXMgPSBzY2FuRm9yVW5sb2FkZWRSYW5nZXMoe1xuICAgICAgICBpc0l0ZW1Mb2FkZWQ6IGlzSXRlbUxvYWRlZCxcbiAgICAgICAgaXRlbUNvdW50OiBpdGVtQ291bnQsXG4gICAgICAgIG1pbmltdW1CYXRjaFNpemU6IG1pbmltdW1CYXRjaFNpemUsXG4gICAgICAgIHN0YXJ0SW5kZXg6IE1hdGgubWF4KDAsIHN0YXJ0SW5kZXggLSB0aHJlc2hvbGQpLFxuICAgICAgICBzdG9wSW5kZXg6IE1hdGgubWluKGl0ZW1Db3VudCAtIDEsIHN0b3BJbmRleCArIHRocmVzaG9sZClcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBdm9pZCBjYWxsaW5nIGxvYWQtcm93cyB1bmxlc3MgcmFuZ2UgaGFzIGNoYW5nZWQuXG4gICAgICAvLyBUaGlzIHNob3VsZG4ndCBiZSBzdHJpY3RseSBuZWNzZXNhcnksIGJ1dCBpcyBtYXliZSBuaWNlIHRvIGRvLlxuICAgICAgaWYgKHRoaXMuX21lbW9pemVkVW5sb2FkZWRSYW5nZXMubGVuZ3RoICE9PSB1bmxvYWRlZFJhbmdlcy5sZW5ndGggfHwgdGhpcy5fbWVtb2l6ZWRVbmxvYWRlZFJhbmdlcy5zb21lKGZ1bmN0aW9uIChfcmVmMywgaW5kZXgpIHtcbiAgICAgICAgdmFyIF9yZWY0ID0gc2xpY2VkVG9BcnJheShfcmVmMywgMiksXG4gICAgICAgICAgICBzdGFydEluZGV4ID0gX3JlZjRbMF0sXG4gICAgICAgICAgICBzdG9wSW5kZXggPSBfcmVmNFsxXTtcblxuICAgICAgICByZXR1cm4gdW5sb2FkZWRSYW5nZXNbaW5kZXhdWzBdICE9PSBzdGFydEluZGV4IHx8IHVubG9hZGVkUmFuZ2VzW2luZGV4XVsxXSAhPT0gc3RvcEluZGV4O1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5fbWVtb2l6ZWRVbmxvYWRlZFJhbmdlcyA9IHVubG9hZGVkUmFuZ2VzO1xuICAgICAgICB0aGlzLl9sb2FkVW5sb2FkZWRSYW5nZXModW5sb2FkZWRSYW5nZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19sb2FkVW5sb2FkZWRSYW5nZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZFVubG9hZGVkUmFuZ2VzKHVubG9hZGVkUmFuZ2VzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gbG9hZE1vcmVSb3dzIHdhcyByZW5hbWVkIHRvIGxvYWRNb3JlSXRlbXMgaW4gdjEuMC4zOyB3aWxsIGJlIHJlbW92ZWQgaW4gdjIuMFxuICAgICAgdmFyIGxvYWRNb3JlSXRlbXMgPSB0aGlzLnByb3BzLmxvYWRNb3JlSXRlbXMgfHwgdGhpcy5wcm9wcy5sb2FkTW9yZVJvd3M7XG5cbiAgICAgIHVubG9hZGVkUmFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICAgIHZhciBfcmVmNiA9IHNsaWNlZFRvQXJyYXkoX3JlZjUsIDIpLFxuICAgICAgICAgICAgc3RhcnRJbmRleCA9IF9yZWY2WzBdLFxuICAgICAgICAgICAgc3RvcEluZGV4ID0gX3JlZjZbMV07XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBsb2FkTW9yZUl0ZW1zKHN0YXJ0SW5kZXgsIHN0b3BJbmRleCk7XG4gICAgICAgIGlmIChwcm9taXNlICE9IG51bGwpIHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVmcmVzaCB0aGUgdmlzaWJsZSByb3dzIGlmIGFueSBvZiB0aGVtIGhhdmUganVzdCBiZWVuIGxvYWRlZC5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSB0aGV5IHdpbGwgcmVtYWluIGluIHRoZWlyIHVubG9hZGVkIHZpc3VhbCBzdGF0ZS5cbiAgICAgICAgICAgIGlmIChpc1JhbmdlVmlzaWJsZSh7XG4gICAgICAgICAgICAgIGxhc3RSZW5kZXJlZFN0YXJ0SW5kZXg6IF90aGlzMi5fbGFzdFJlbmRlcmVkU3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgbGFzdFJlbmRlcmVkU3RvcEluZGV4OiBfdGhpczIuX2xhc3RSZW5kZXJlZFN0b3BJbmRleCxcbiAgICAgICAgICAgICAgc3RhcnRJbmRleDogc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgc3RvcEluZGV4OiBzdG9wSW5kZXhcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBhbiB1bm1vdW50IHdoaWxlIHByb21pc2VzIGFyZSBzdGlsbCBpbiBmbGlnaHQuXG4gICAgICAgICAgICAgIGlmIChfdGhpczIuX2xpc3RSZWYgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFJlc2l6ZSBjYWNoZWQgcm93IHNpemVzIGZvciBWYXJpYWJsZVNpemVMaXN0LFxuICAgICAgICAgICAgICAvLyBvdGhlcndpc2UganVzdCByZS1yZW5kZXIgdGhlIGxpc3QuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMyLl9saXN0UmVmLnJlc2V0QWZ0ZXJJbmRleCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIF90aGlzMi5fbGlzdFJlZi5yZXNldEFmdGVySW5kZXgoc3RhcnRJbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSEFDSyByZXNldCB0ZW1wb3JhcmlseSBjYWNoZWQgaXRlbSBzdHlsZXMgdG8gZm9yY2UgUHVyZUNvbXBvbmVudCB0byByZS1yZW5kZXIuXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBwcmV0dHkgZ3Jvc3MsIGJ1dCBJJ20gb2theSB3aXRoIGl0IGZvciBub3cuXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QganVkZ2UgbWUuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczIuX2xpc3RSZWYuX2dldEl0ZW1TdHlsZUNhY2hlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczIuX2xpc3RSZWYuX2dldEl0ZW1TdHlsZUNhY2hlKC0xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMyLl9saXN0UmVmLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBJbmZpbml0ZUxvYWRlcjtcbn0oUHVyZUNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEluZmluaXRlTG9hZGVyO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5cbi8vIEFuaW1hdGlvbiBmcmFtZSBiYXNlZCBpbXBsZW1lbnRhdGlvbiBvZiBzZXRUaW1lb3V0LlxuLy8gSW5zcGlyZWQgYnkgSm9lIExhbWJlcnQsIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvZWxhbWJlcnQvMTAwMjExNiNmaWxlLXJlcXVlc3R0aW1lb3V0LWpzXG52YXIgaGFzTmF0aXZlUGVyZm9ybWFuY2VOb3cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbic7XG52YXIgbm93ID0gaGFzTmF0aXZlUGVyZm9ybWFuY2VOb3cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBEYXRlLm5vdygpO1xufTtcbmZ1bmN0aW9uIGNhbmNlbFRpbWVvdXQodGltZW91dElEKSB7XG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRpbWVvdXRJRC5pZCk7XG59XG5mdW5jdGlvbiByZXF1ZXN0VGltZW91dChjYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIHN0YXJ0ID0gbm93KCk7XG5cbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBpZiAobm93KCkgLSBzdGFydCA+PSBkZWxheSkge1xuICAgICAgY2FsbGJhY2suY2FsbChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dElELmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0aW1lb3V0SUQgPSB7XG4gICAgaWQ6IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKVxuICB9O1xuICByZXR1cm4gdGltZW91dElEO1xufVxuXG52YXIgc2l6ZSA9IC0xOyAvLyBUaGlzIHV0aWxpdHkgY29waWVkIGZyb20gXCJkb20taGVscGVyc1wiIHBhY2thZ2UuXG5cbmZ1bmN0aW9uIGdldFNjcm9sbGJhclNpemUocmVjYWxjdWxhdGUpIHtcbiAgaWYgKHJlY2FsY3VsYXRlID09PSB2b2lkIDApIHtcbiAgICByZWNhbGN1bGF0ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHNpemUgPT09IC0xIHx8IHJlY2FsY3VsYXRlKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBzdHlsZSA9IGRpdi5zdHlsZTtcbiAgICBzdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgICBzdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gICAgc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgc2l6ZSA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG4gIH1cblxuICByZXR1cm4gc2l6ZTtcbn1cbnZhciBjYWNoZWRSVExSZXN1bHQgPSBudWxsOyAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4vLyBDaHJvbWUgZG9lcyBub3Qgc2VlbSB0byBhZGhlcmU7IGl0cyBzY3JvbGxMZWZ0IHZhbHVlcyBhcmUgcG9zaXRpdmUgKG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSBsZWZ0KS5cbi8vIFNhZmFyaSdzIGVsYXN0aWMgYm91bmNlIG1ha2VzIGRldGVjdGluZyB0aGlzIGV2ZW4gbW9yZSBjb21wbGljYXRlZCB3cnQgcG90ZW50aWFsIGZhbHNlIHBvc2l0aXZlcy5cbi8vIFRoZSBzYWZlc3Qgd2F5IHRvIGNoZWNrIHRoaXMgaXMgdG8gaW50ZW50aW9uYWxseSBzZXQgYSBuZWdhdGl2ZSBvZmZzZXQsXG4vLyBhbmQgdGhlbiB2ZXJpZnkgdGhhdCB0aGUgc3Vic2VxdWVudCBcInNjcm9sbFwiIGV2ZW50IG1hdGNoZXMgdGhlIG5lZ2F0aXZlIG9mZnNldC5cbi8vIElmIGl0IGRvZXMgbm90IG1hdGNoLCB0aGVuIHdlIGNhbiBhc3N1bWUgYSBub24tc3RhbmRhcmQgUlRMIHNjcm9sbCBpbXBsZW1lbnRhdGlvbi5cblxuZnVuY3Rpb24gZ2V0UlRMT2Zmc2V0VHlwZShyZWNhbGN1bGF0ZSkge1xuICBpZiAocmVjYWxjdWxhdGUgPT09IHZvaWQgMCkge1xuICAgIHJlY2FsY3VsYXRlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoY2FjaGVkUlRMUmVzdWx0ID09PSBudWxsIHx8IHJlY2FsY3VsYXRlKSB7XG4gICAgdmFyIG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIG91dGVyU3R5bGUgPSBvdXRlckRpdi5zdHlsZTtcbiAgICBvdXRlclN0eWxlLndpZHRoID0gJzUwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICAgIG91dGVyU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICBvdXRlclN0eWxlLmRpcmVjdGlvbiA9ICdydGwnO1xuICAgIHZhciBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBpbm5lclN0eWxlID0gaW5uZXJEaXYuc3R5bGU7XG4gICAgaW5uZXJTdHlsZS53aWR0aCA9ICcxMDBweCc7XG4gICAgaW5uZXJTdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyRGl2KTtcblxuICAgIGlmIChvdXRlckRpdi5zY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgY2FjaGVkUlRMUmVzdWx0ID0gJ3Bvc2l0aXZlLWRlc2NlbmRpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRlckRpdi5zY3JvbGxMZWZ0ID0gMTtcblxuICAgICAgaWYgKG91dGVyRGl2LnNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgY2FjaGVkUlRMUmVzdWx0ID0gJ25lZ2F0aXZlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlZFJUTFJlc3VsdCA9ICdwb3NpdGl2ZS1hc2NlbmRpbmcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXJEaXYpO1xuICAgIHJldHVybiBjYWNoZWRSVExSZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkUlRMUmVzdWx0O1xufVxuXG52YXIgSVNfU0NST0xMSU5HX0RFQk9VTkNFX0lOVEVSVkFMID0gMTUwO1xuXG52YXIgZGVmYXVsdEl0ZW1LZXkgPSBmdW5jdGlvbiBkZWZhdWx0SXRlbUtleShfcmVmKSB7XG4gIHZhciBjb2x1bW5JbmRleCA9IF9yZWYuY29sdW1uSW5kZXgsXG4gICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgcm93SW5kZXggPSBfcmVmLnJvd0luZGV4O1xuICByZXR1cm4gcm93SW5kZXggKyBcIjpcIiArIGNvbHVtbkluZGV4O1xufTsgLy8gSW4gREVWIG1vZGUsIHRoaXMgU2V0IGhlbHBzIHVzIG9ubHkgbG9nIGEgd2FybmluZyBvbmNlIHBlciBjb21wb25lbnQgaW5zdGFuY2UuXG4vLyBUaGlzIGF2b2lkcyBzcGFtbWluZyB0aGUgY29uc29sZSBldmVyeSB0aW1lIGEgcmVuZGVyIGhhcHBlbnMuXG5cblxudmFyIGRldldhcm5pbmdzT3ZlcnNjYW5Db3VudCA9IG51bGw7XG52YXIgZGV2V2FybmluZ3NPdmVyc2NhblJvd3NDb2x1bW5zQ291bnQgPSBudWxsO1xudmFyIGRldldhcm5pbmdzVGFnTmFtZSA9IG51bGw7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LldlYWtTZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGV2V2FybmluZ3NPdmVyc2NhbkNvdW50ID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgICBkZXZXYXJuaW5nc092ZXJzY2FuUm93c0NvbHVtbnNDb3VudCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIG5ldyBXZWFrU2V0KCk7XG4gICAgZGV2V2FybmluZ3NUYWdOYW1lID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkQ29tcG9uZW50KF9yZWYyKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBnZXRDb2x1bW5PZmZzZXQgPSBfcmVmMi5nZXRDb2x1bW5PZmZzZXQsXG4gICAgICBnZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0ID0gX3JlZjIuZ2V0Q29sdW1uU3RhcnRJbmRleEZvck9mZnNldCxcbiAgICAgIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXggPSBfcmVmMi5nZXRDb2x1bW5TdG9wSW5kZXhGb3JTdGFydEluZGV4LFxuICAgICAgZ2V0Q29sdW1uV2lkdGggPSBfcmVmMi5nZXRDb2x1bW5XaWR0aCxcbiAgICAgIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0ID0gX3JlZjIuZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQsXG4gICAgICBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoID0gX3JlZjIuZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCxcbiAgICAgIGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudCA9IF9yZWYyLmdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudCxcbiAgICAgIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudCA9IF9yZWYyLmdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudCxcbiAgICAgIGdldFJvd0hlaWdodCA9IF9yZWYyLmdldFJvd0hlaWdodCxcbiAgICAgIGdldFJvd09mZnNldCA9IF9yZWYyLmdldFJvd09mZnNldCxcbiAgICAgIGdldFJvd1N0YXJ0SW5kZXhGb3JPZmZzZXQgPSBfcmVmMi5nZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0LFxuICAgICAgZ2V0Um93U3RvcEluZGV4Rm9yU3RhcnRJbmRleCA9IF9yZWYyLmdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXgsXG4gICAgICBpbml0SW5zdGFuY2VQcm9wcyA9IF9yZWYyLmluaXRJbnN0YW5jZVByb3BzLFxuICAgICAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSA9IF9yZWYyLnNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UsXG4gICAgICB2YWxpZGF0ZVByb3BzID0gX3JlZjIudmFsaWRhdGVQcm9wcztcbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShHcmlkLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgICAvLyBBbHdheXMgdXNlIGV4cGxpY2l0IGNvbnN0cnVjdG9yIGZvciBSZWFjdCBjb21wb25lbnRzLlxuICAgIC8vIEl0IHByb2R1Y2VzIGxlc3MgY29kZSBhZnRlciB0cmFuc3BpbGF0aW9uLiAoIzI2KVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gR3JpZChwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfdGhpcyA9IF9QdXJlQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICBfdGhpcy5faW5zdGFuY2VQcm9wcyA9IGluaXRJbnN0YW5jZVByb3BzKF90aGlzLnByb3BzLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICBfdGhpcy5fb3V0ZXJSZWYgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaW5zdGFuY2U6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLFxuICAgICAgICBpc1Njcm9sbGluZzogZmFsc2UsXG4gICAgICAgIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb246ICdmb3J3YXJkJyxcbiAgICAgICAgc2Nyb2xsTGVmdDogdHlwZW9mIF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxMZWZ0ID09PSAnbnVtYmVyJyA/IF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxMZWZ0IDogMCxcbiAgICAgICAgc2Nyb2xsVG9wOiB0eXBlb2YgX3RoaXMucHJvcHMuaW5pdGlhbFNjcm9sbFRvcCA9PT0gJ251bWJlcicgPyBfdGhpcy5wcm9wcy5pbml0aWFsU2Nyb2xsVG9wIDogMCxcbiAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBmYWxzZSxcbiAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb246ICdmb3J3YXJkJ1xuICAgICAgfTtcbiAgICAgIF90aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2NhbGxPbkl0ZW1zUmVuZGVyZWQgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChvdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXgsIG92ZXJzY2FuQ29sdW1uU3RvcEluZGV4LCBvdmVyc2NhblJvd1N0YXJ0SW5kZXgsIG92ZXJzY2FuUm93U3RvcEluZGV4LCB2aXNpYmxlQ29sdW1uU3RhcnRJbmRleCwgdmlzaWJsZUNvbHVtblN0b3BJbmRleCwgdmlzaWJsZVJvd1N0YXJ0SW5kZXgsIHZpc2libGVSb3dTdG9wSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uSXRlbXNSZW5kZXJlZCh7XG4gICAgICAgICAgb3ZlcnNjYW5Db2x1bW5TdGFydEluZGV4OiBvdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXgsXG4gICAgICAgICAgb3ZlcnNjYW5Db2x1bW5TdG9wSW5kZXg6IG92ZXJzY2FuQ29sdW1uU3RvcEluZGV4LFxuICAgICAgICAgIG92ZXJzY2FuUm93U3RhcnRJbmRleDogb3ZlcnNjYW5Sb3dTdGFydEluZGV4LFxuICAgICAgICAgIG92ZXJzY2FuUm93U3RvcEluZGV4OiBvdmVyc2NhblJvd1N0b3BJbmRleCxcbiAgICAgICAgICB2aXNpYmxlQ29sdW1uU3RhcnRJbmRleDogdmlzaWJsZUNvbHVtblN0YXJ0SW5kZXgsXG4gICAgICAgICAgdmlzaWJsZUNvbHVtblN0b3BJbmRleDogdmlzaWJsZUNvbHVtblN0b3BJbmRleCxcbiAgICAgICAgICB2aXNpYmxlUm93U3RhcnRJbmRleDogdmlzaWJsZVJvd1N0YXJ0SW5kZXgsXG4gICAgICAgICAgdmlzaWJsZVJvd1N0b3BJbmRleDogdmlzaWJsZVJvd1N0b3BJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuX2NhbGxPblNjcm9sbCA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9jYWxsT25TY3JvbGwgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChzY3JvbGxMZWZ0LCBzY3JvbGxUb3AsIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sIHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uLCBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uU2Nyb2xsKHtcbiAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uOiBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgICAgICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gICAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb246IHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlID0gdm9pZCAwO1xuXG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlID0gZnVuY3Rpb24gKHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbHVtbldpZHRoID0gX3RoaXMkcHJvcHMuY29sdW1uV2lkdGgsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgICAgICByb3dIZWlnaHQgPSBfdGhpcyRwcm9wcy5yb3dIZWlnaHQ7XG5cbiAgICAgICAgdmFyIGl0ZW1TdHlsZUNhY2hlID0gX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlKHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgY29sdW1uV2lkdGgsIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgZGlyZWN0aW9uLCBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlICYmIHJvd0hlaWdodCk7XG5cbiAgICAgICAgdmFyIGtleSA9IHJvd0luZGV4ICsgXCI6XCIgKyBjb2x1bW5JbmRleDtcbiAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgIGlmIChpdGVtU3R5bGVDYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgc3R5bGUgPSBpdGVtU3R5bGVDYWNoZVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfc3R5bGU7XG5cbiAgICAgICAgICBpdGVtU3R5bGVDYWNoZVtrZXldID0gc3R5bGUgPSAoX3N0eWxlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgICAgICB9LCBfc3R5bGVbZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCddID0gZ2V0Q29sdW1uT2Zmc2V0KF90aGlzLnByb3BzLCBjb2x1bW5JbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpLCBfc3R5bGUudG9wID0gZ2V0Um93T2Zmc2V0KF90aGlzLnByb3BzLCByb3dJbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpLCBfc3R5bGUuaGVpZ2h0ID0gZ2V0Um93SGVpZ2h0KF90aGlzLnByb3BzLCByb3dJbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpLCBfc3R5bGUud2lkdGggPSBnZXRDb2x1bW5XaWR0aChfdGhpcy5wcm9wcywgY29sdW1uSW5kZXgsIF90aGlzLl9pbnN0YW5jZVByb3BzKSwgX3N0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKF8sIF9fLCBfX18pIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLl9vblNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX2V2ZW50JGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgY2xpZW50V2lkdGggPSBfZXZlbnQkY3VycmVudFRhcmdldC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIHNjcm9sbExlZnQgPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgc2Nyb2xsV2lkdGggPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxXaWR0aDtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgaWYgKHByZXZTdGF0ZS5zY3JvbGxMZWZ0ID09PSBzY3JvbGxMZWZ0ICYmIHByZXZTdGF0ZS5zY3JvbGxUb3AgPT09IHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgLy8gU2Nyb2xsIHBvc2l0aW9uIG1heSBoYXZlIGJlZW4gdXBkYXRlZCBieSBjRE0vY0RVLFxuICAgICAgICAgICAgLy8gSW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBuZWVkIHRvIHRyaWdnZXIgYW5vdGhlciByZW5kZXIsXG4gICAgICAgICAgICAvLyBBbmQgd2UgZG9uJ3Qgd2FudCB0byB1cGRhdGUgc3RhdGUuaXNTY3JvbGxpbmcuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gX3RoaXMucHJvcHMuZGlyZWN0aW9uOyAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4gICAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yIGFsbCBicm93c2VycyB0aG91Z2ggKGUuZy4gQ2hyb21lIHJlcG9ydHMgdmFsdWVzIGFzIHBvc2l0aXZlLCBtZWFzdXJlZCByZWxhdGl2ZSB0byB0aGUgbGVmdCkuXG4gICAgICAgICAgLy8gSXQncyBhbHNvIGVhc2llciBmb3IgdGhpcyBjb21wb25lbnQgaWYgd2UgY29udmVydCBvZmZzZXRzIHRvIHRoZSBzYW1lIGZvcm1hdCBhcyB0aGV5IHdvdWxkIGJlIGluIGZvciBsdHIuXG4gICAgICAgICAgLy8gU28gdGhlIHNpbXBsZXN0IHNvbHV0aW9uIGlzIHRvIGRldGVybWluZSB3aGljaCBicm93c2VyIGJlaGF2aW9yIHdlJ3JlIGRlYWxpbmcgd2l0aCwgYW5kIGNvbnZlcnQgYmFzZWQgb24gaXQuXG5cbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZFNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0UlRMT2Zmc2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkU2Nyb2xsTGVmdCA9IC1zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ3Bvc2l0aXZlLWRlc2NlbmRpbmcnOlxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRTY3JvbGxMZWZ0ID0gc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIHNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBQcmV2ZW50IFNhZmFyaSdzIGVsYXN0aWMgc2Nyb2xsaW5nIGZyb20gY2F1c2luZyB2aXN1YWwgc2hha2luZyB3aGVuIHNjcm9sbGluZyBwYXN0IGJvdW5kcy5cblxuXG4gICAgICAgICAgY2FsY3VsYXRlZFNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjYWxjdWxhdGVkU2Nyb2xsTGVmdCwgc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCkpO1xuICAgICAgICAgIHZhciBjYWxjdWxhdGVkU2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQpKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHRydWUsXG4gICAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uOiBwcmV2U3RhdGUuc2Nyb2xsTGVmdCA8IHNjcm9sbExlZnQgPyAnZm9yd2FyZCcgOiAnYmFja3dhcmQnLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogY2FsY3VsYXRlZFNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxUb3A6IGNhbGN1bGF0ZWRTY3JvbGxUb3AsXG4gICAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbFRvcCA8IHNjcm9sbFRvcCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX291dGVyUmVmU2V0dGVyID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICB2YXIgb3V0ZXJSZWYgPSBfdGhpcy5wcm9wcy5vdXRlclJlZjtcbiAgICAgICAgX3RoaXMuX291dGVyUmVmID0gcmVmO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3V0ZXJSZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvdXRlclJlZihyZWYpO1xuICAgICAgICB9IGVsc2UgaWYgKG91dGVyUmVmICE9IG51bGwgJiYgdHlwZW9mIG91dGVyUmVmID09PSAnb2JqZWN0JyAmJiBvdXRlclJlZi5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudCcpKSB7XG4gICAgICAgICAgb3V0ZXJSZWYuY3VycmVudCA9IHJlZjtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNhbmNlbFRpbWVvdXQoX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgPSByZXF1ZXN0VGltZW91dChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZywgSVNfU0NST0xMSU5HX0RFQk9VTkNFX0lOVEVSVkFMKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IG51bGw7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQ2xlYXIgc3R5bGUgY2FjaGUgYWZ0ZXIgc3RhdGUgdXBkYXRlIGhhcyBiZWVuIGNvbW1pdHRlZC5cbiAgICAgICAgICAvLyBUaGlzIHdheSB3ZSBkb24ndCBicmVhayBwdXJlIHNDVSBmb3IgaXRlbXMgdGhhdCBkb24ndCB1c2UgaXNTY3JvbGxpbmcgcGFyYW0uXG4gICAgICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlKC0xKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgR3JpZC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHZhbGlkYXRlU2hhcmVkUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgdmFsaWRhdGVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBfcHJvdG8gPSBHcmlkLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5zY3JvbGxUbyA9IGZ1bmN0aW9uIHNjcm9sbFRvKF9yZWYzKSB7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IF9yZWYzLnNjcm9sbExlZnQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3JlZjMuc2Nyb2xsVG9wO1xuXG4gICAgICBpZiAoc2Nyb2xsTGVmdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxMZWZ0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbFRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbFRvcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAoc2Nyb2xsTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHByZXZTdGF0ZS5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjcm9sbFRvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gcHJldlN0YXRlLnNjcm9sbFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2U3RhdGUuc2Nyb2xsTGVmdCA9PT0gc2Nyb2xsTGVmdCAmJiBwcmV2U3RhdGUuc2Nyb2xsVG9wID09PSBzY3JvbGxUb3ApIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbExlZnQgPCBzY3JvbGxMZWZ0ID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJyxcbiAgICAgICAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogdHJ1ZSxcbiAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbFRvcCA8IHNjcm9sbFRvcCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCdcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2Nyb2xsVG9JdGVtID0gZnVuY3Rpb24gc2Nyb2xsVG9JdGVtKF9yZWY0KSB7XG4gICAgICB2YXIgX3JlZjQkYWxpZ24gPSBfcmVmNC5hbGlnbixcbiAgICAgICAgICBhbGlnbiA9IF9yZWY0JGFsaWduID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcmVmNCRhbGlnbixcbiAgICAgICAgICBjb2x1bW5JbmRleCA9IF9yZWY0LmNvbHVtbkluZGV4LFxuICAgICAgICAgIHJvd0luZGV4ID0gX3JlZjQucm93SW5kZXg7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzMi5jb2x1bW5Db3VudCxcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczIuaGVpZ2h0LFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHMyLnJvd0NvdW50LFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHMyLndpZHRoO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gX3RoaXMkc3RhdGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcyRzdGF0ZS5zY3JvbGxUb3A7XG4gICAgICB2YXIgc2Nyb2xsYmFyU2l6ZSA9IGdldFNjcm9sbGJhclNpemUoKTtcblxuICAgICAgaWYgKGNvbHVtbkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29sdW1uSW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5JbmRleCwgY29sdW1uQ291bnQgLSAxKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3dJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJvd0luZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93SW5kZXgsIHJvd0NvdW50IC0gMSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZXN0aW1hdGVkVG90YWxIZWlnaHQgPSBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCh0aGlzLnByb3BzLCB0aGlzLl9pbnN0YW5jZVByb3BzKTtcbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbFdpZHRoID0gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCh0aGlzLnByb3BzLCB0aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gVGhlIHNjcm9sbGJhciBzaXplIHNob3VsZCBiZSBjb25zaWRlcmVkIHdoZW4gc2Nyb2xsaW5nIGFuIGl0ZW0gaW50byB2aWV3LFxuICAgICAgLy8gdG8gZW5zdXJlIGl0J3MgZnVsbHkgdmlzaWJsZS5cbiAgICAgIC8vIEJ1dCB3ZSBvbmx5IG5lZWQgdG8gYWNjb3VudCBmb3IgaXRzIHNpemUgd2hlbiBpdCdzIGFjdHVhbGx5IHZpc2libGUuXG5cbiAgICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyU2l6ZSA9IGVzdGltYXRlZFRvdGFsV2lkdGggPiB3aWR0aCA/IHNjcm9sbGJhclNpemUgOiAwO1xuICAgICAgdmFyIHZlcnRpY2FsU2Nyb2xsYmFyU2l6ZSA9IGVzdGltYXRlZFRvdGFsSGVpZ2h0ID4gaGVpZ2h0ID8gc2Nyb2xsYmFyU2l6ZSA6IDA7XG4gICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgc2Nyb2xsTGVmdDogY29sdW1uSW5kZXggIT09IHVuZGVmaW5lZCA/IGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudCh0aGlzLnByb3BzLCBjb2x1bW5JbmRleCwgYWxpZ24sIHNjcm9sbExlZnQsIHRoaXMuX2luc3RhbmNlUHJvcHMsIHZlcnRpY2FsU2Nyb2xsYmFyU2l6ZSkgOiBzY3JvbGxMZWZ0LFxuICAgICAgICBzY3JvbGxUb3A6IHJvd0luZGV4ICE9PSB1bmRlZmluZWQgPyBnZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQodGhpcy5wcm9wcywgcm93SW5kZXgsIGFsaWduLCBzY3JvbGxUb3AsIHRoaXMuX2luc3RhbmNlUHJvcHMsIGhvcml6b250YWxTY3JvbGxiYXJTaXplKSA6IHNjcm9sbFRvcFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaW5pdGlhbFNjcm9sbExlZnQgPSBfdGhpcyRwcm9wczMuaW5pdGlhbFNjcm9sbExlZnQsXG4gICAgICAgICAgaW5pdGlhbFNjcm9sbFRvcCA9IF90aGlzJHByb3BzMy5pbml0aWFsU2Nyb2xsVG9wO1xuXG4gICAgICBpZiAodGhpcy5fb3V0ZXJSZWYgIT0gbnVsbCkge1xuICAgICAgICB2YXIgb3V0ZXJSZWYgPSB0aGlzLl9vdXRlclJlZjtcblxuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxTY3JvbGxMZWZ0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBpbml0aWFsU2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbFNjcm9sbFRvcCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxUb3AgPSBpbml0aWFsU2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbGxQcm9wc0NhbGxiYWNrcygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMucHJvcHMuZGlyZWN0aW9uO1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IF90aGlzJHN0YXRlMi5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcCA9IF90aGlzJHN0YXRlMi5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkID0gX3RoaXMkc3RhdGUyLnNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDtcblxuICAgICAgaWYgKHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCAmJiB0aGlzLl9vdXRlclJlZiAhPSBudWxsKSB7XG4gICAgICAgIC8vIFRSSUNLWSBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNjcm9sbExlZnQgc2hvdWxkIGJlIG5lZ2F0aXZlIGZvciBSVEwgYWxpZ25lZCBlbGVtZW50cy5cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yIGFsbCBicm93c2VycyB0aG91Z2ggKGUuZy4gQ2hyb21lIHJlcG9ydHMgdmFsdWVzIGFzIHBvc2l0aXZlLCBtZWFzdXJlZCByZWxhdGl2ZSB0byB0aGUgbGVmdCkuXG4gICAgICAgIC8vIFNvIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGJyb3dzZXIgYmVoYXZpb3Igd2UncmUgZGVhbGluZyB3aXRoLCBhbmQgbWltaWMgaXQuXG4gICAgICAgIHZhciBvdXRlclJlZiA9IHRoaXMuX291dGVyUmVmO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgc3dpdGNoIChnZXRSVExPZmZzZXRUeXBlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IC1zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncG9zaXRpdmUtYXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB2YXIgY2xpZW50V2lkdGggPSBvdXRlclJlZi5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgIHNjcm9sbFdpZHRoID0gb3V0ZXJSZWYuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxMZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dGVyUmVmLnNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbFRvcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbGxQcm9wc0NhbGxiYWNrcygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICAgIGNhbmNlbFRpbWVvdXQodGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzNC5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczQuY2xhc3NOYW1lLFxuICAgICAgICAgIGNvbHVtbkNvdW50ID0gX3RoaXMkcHJvcHM0LmNvbHVtbkNvdW50LFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzNC5kaXJlY3Rpb24sXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHM0LmhlaWdodCxcbiAgICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzNC5pbm5lclJlZixcbiAgICAgICAgICBpbm5lckVsZW1lbnRUeXBlID0gX3RoaXMkcHJvcHM0LmlubmVyRWxlbWVudFR5cGUsXG4gICAgICAgICAgaW5uZXJUYWdOYW1lID0gX3RoaXMkcHJvcHM0LmlubmVyVGFnTmFtZSxcbiAgICAgICAgICBpdGVtRGF0YSA9IF90aGlzJHByb3BzNC5pdGVtRGF0YSxcbiAgICAgICAgICBfdGhpcyRwcm9wczQkaXRlbUtleSA9IF90aGlzJHByb3BzNC5pdGVtS2V5LFxuICAgICAgICAgIGl0ZW1LZXkgPSBfdGhpcyRwcm9wczQkaXRlbUtleSA9PT0gdm9pZCAwID8gZGVmYXVsdEl0ZW1LZXkgOiBfdGhpcyRwcm9wczQkaXRlbUtleSxcbiAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlID0gX3RoaXMkcHJvcHM0Lm91dGVyRWxlbWVudFR5cGUsXG4gICAgICAgICAgb3V0ZXJUYWdOYW1lID0gX3RoaXMkcHJvcHM0Lm91dGVyVGFnTmFtZSxcbiAgICAgICAgICByb3dDb3VudCA9IF90aGlzJHByb3BzNC5yb3dDb3VudCxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzNC5zdHlsZSxcbiAgICAgICAgICB1c2VJc1Njcm9sbGluZyA9IF90aGlzJHByb3BzNC51c2VJc1Njcm9sbGluZyxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzNC53aWR0aDtcbiAgICAgIHZhciBpc1Njcm9sbGluZyA9IHRoaXMuc3RhdGUuaXNTY3JvbGxpbmc7XG5cbiAgICAgIHZhciBfdGhpcyRfZ2V0SG9yaXpvbnRhbFIgPSB0aGlzLl9nZXRIb3Jpem9udGFsUmFuZ2VUb1JlbmRlcigpLFxuICAgICAgICAgIGNvbHVtblN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0SG9yaXpvbnRhbFJbMF0sXG4gICAgICAgICAgY29sdW1uU3RvcEluZGV4ID0gX3RoaXMkX2dldEhvcml6b250YWxSWzFdO1xuXG4gICAgICB2YXIgX3RoaXMkX2dldFZlcnRpY2FsUmFuID0gdGhpcy5fZ2V0VmVydGljYWxSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgcm93U3RhcnRJbmRleCA9IF90aGlzJF9nZXRWZXJ0aWNhbFJhblswXSxcbiAgICAgICAgICByb3dTdG9wSW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW5bMV07XG5cbiAgICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgICBpZiAoY29sdW1uQ291bnQgPiAwICYmIHJvd0NvdW50KSB7XG4gICAgICAgIGZvciAodmFyIF9yb3dJbmRleCA9IHJvd1N0YXJ0SW5kZXg7IF9yb3dJbmRleCA8PSByb3dTdG9wSW5kZXg7IF9yb3dJbmRleCsrKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2NvbHVtbkluZGV4ID0gY29sdW1uU3RhcnRJbmRleDsgX2NvbHVtbkluZGV4IDw9IGNvbHVtblN0b3BJbmRleDsgX2NvbHVtbkluZGV4KyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goY3JlYXRlRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAgICAgICBjb2x1bW5JbmRleDogX2NvbHVtbkluZGV4LFxuICAgICAgICAgICAgICBkYXRhOiBpdGVtRGF0YSxcbiAgICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHVzZUlzU2Nyb2xsaW5nID8gaXNTY3JvbGxpbmcgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGtleTogaXRlbUtleSh7XG4gICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IF9jb2x1bW5JbmRleCxcbiAgICAgICAgICAgICAgICBkYXRhOiBpdGVtRGF0YSxcbiAgICAgICAgICAgICAgICByb3dJbmRleDogX3Jvd0luZGV4XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICByb3dJbmRleDogX3Jvd0luZGV4LFxuICAgICAgICAgICAgICBzdHlsZTogdGhpcy5fZ2V0SXRlbVN0eWxlKF9yb3dJbmRleCwgX2NvbHVtbkluZGV4KVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBSZWFkIHRoaXMgdmFsdWUgQUZURVIgaXRlbXMgaGF2ZSBiZWVuIGNyZWF0ZWQsXG4gICAgICAvLyBTbyB0aGVpciBhY3R1YWwgc2l6ZXMgKGlmIHZhcmlhYmxlKSBhcmUgdGFrZW4gaW50byBjb25zaWRlcmF0aW9uLlxuXG5cbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbEhlaWdodCA9IGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0KHRoaXMucHJvcHMsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIGVzdGltYXRlZFRvdGFsV2lkdGggPSBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoKHRoaXMucHJvcHMsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQob3V0ZXJFbGVtZW50VHlwZSB8fCBvdXRlclRhZ05hbWUgfHwgJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uU2Nyb2xsOiB0aGlzLl9vblNjcm9sbCxcbiAgICAgICAgcmVmOiB0aGlzLl9vdXRlclJlZlNldHRlcixcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICB9LCBzdHlsZSlcbiAgICAgIH0sIGNyZWF0ZUVsZW1lbnQoaW5uZXJFbGVtZW50VHlwZSB8fCBpbm5lclRhZ05hbWUgfHwgJ2RpdicsIHtcbiAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogZXN0aW1hdGVkVG90YWxIZWlnaHQsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogaXNTY3JvbGxpbmcgPyAnbm9uZScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IGVzdGltYXRlZFRvdGFsV2lkdGhcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NhbGxQcm9wc0NhbGxiYWNrcyA9IGZ1bmN0aW9uIF9jYWxsUHJvcHNDYWxsYmFja3MoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzNS5jb2x1bW5Db3VudCxcbiAgICAgICAgICBvbkl0ZW1zUmVuZGVyZWQgPSBfdGhpcyRwcm9wczUub25JdGVtc1JlbmRlcmVkLFxuICAgICAgICAgIG9uU2Nyb2xsID0gX3RoaXMkcHJvcHM1Lm9uU2Nyb2xsLFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHM1LnJvd0NvdW50O1xuXG4gICAgICBpZiAodHlwZW9mIG9uSXRlbXNSZW5kZXJlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoY29sdW1uQ291bnQgPiAwICYmIHJvd0NvdW50ID4gMCkge1xuICAgICAgICAgIHZhciBfdGhpcyRfZ2V0SG9yaXpvbnRhbFIyID0gdGhpcy5fZ2V0SG9yaXpvbnRhbFJhbmdlVG9SZW5kZXIoKSxcbiAgICAgICAgICAgICAgX292ZXJzY2FuQ29sdW1uU3RhcnRJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUjJbMF0sXG4gICAgICAgICAgICAgIF9vdmVyc2NhbkNvbHVtblN0b3BJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUjJbMV0sXG4gICAgICAgICAgICAgIF92aXNpYmxlQ29sdW1uU3RhcnRJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUjJbMl0sXG4gICAgICAgICAgICAgIF92aXNpYmxlQ29sdW1uU3RvcEluZGV4ID0gX3RoaXMkX2dldEhvcml6b250YWxSMlszXTtcblxuICAgICAgICAgIHZhciBfdGhpcyRfZ2V0VmVydGljYWxSYW4yID0gdGhpcy5fZ2V0VmVydGljYWxSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgICAgIF9vdmVyc2NhblJvd1N0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW4yWzBdLFxuICAgICAgICAgICAgICBfb3ZlcnNjYW5Sb3dTdG9wSW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW4yWzFdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVJvd1N0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW4yWzJdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVJvd1N0b3BJbmRleCA9IF90aGlzJF9nZXRWZXJ0aWNhbFJhbjJbM107XG5cbiAgICAgICAgICB0aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkKF9vdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXgsIF9vdmVyc2NhbkNvbHVtblN0b3BJbmRleCwgX292ZXJzY2FuUm93U3RhcnRJbmRleCwgX292ZXJzY2FuUm93U3RvcEluZGV4LCBfdmlzaWJsZUNvbHVtblN0YXJ0SW5kZXgsIF92aXNpYmxlQ29sdW1uU3RvcEluZGV4LCBfdmlzaWJsZVJvd1N0YXJ0SW5kZXgsIF92aXNpYmxlUm93U3RvcEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9uU2Nyb2xsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgX2hvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZTMuaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICAgIF9zY3JvbGxMZWZ0ID0gX3RoaXMkc3RhdGUzLnNjcm9sbExlZnQsXG4gICAgICAgICAgICBfc2Nyb2xsVG9wID0gX3RoaXMkc3RhdGUzLnNjcm9sbFRvcCxcbiAgICAgICAgICAgIF9zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQgPSBfdGhpcyRzdGF0ZTMuc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkLFxuICAgICAgICAgICAgX3ZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGUzLnZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uO1xuXG4gICAgICAgIHRoaXMuX2NhbGxPblNjcm9sbChfc2Nyb2xsTGVmdCwgX3Njcm9sbFRvcCwgX2hvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sIF92ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiwgX3Njcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCk7XG4gICAgICB9XG4gICAgfTsgLy8gTGF6aWx5IGNyZWF0ZSBhbmQgY2FjaGUgaXRlbSBzdHlsZXMgd2hpbGUgc2Nyb2xsaW5nLFxuICAgIC8vIFNvIHRoYXQgcHVyZSBjb21wb25lbnQgc0NVIHdpbGwgcHJldmVudCByZS1yZW5kZXJzLlxuICAgIC8vIFdlIG1haW50YWluIHRoaXMgY2FjaGUsIGFuZCBwYXNzIGEgc3R5bGUgcHJvcCByYXRoZXIgdGhhbiBpbmRleCxcbiAgICAvLyBTbyB0aGF0IExpc3QgY2FuIGNsZWFyIGNhY2hlZCBzdHlsZXMgYW5kIGZvcmNlIGl0ZW0gcmUtcmVuZGVyIGlmIG5lY2Vzc2FyeS5cblxuXG4gICAgX3Byb3RvLl9nZXRIb3Jpem9udGFsUmFuZ2VUb1JlbmRlciA9IGZ1bmN0aW9uIF9nZXRIb3Jpem9udGFsUmFuZ2VUb1JlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbHVtbkNvdW50ID0gX3RoaXMkcHJvcHM2LmNvbHVtbkNvdW50LFxuICAgICAgICAgIG92ZXJzY2FuQ29sdW1uQ291bnQgPSBfdGhpcyRwcm9wczYub3ZlcnNjYW5Db2x1bW5Db3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvbHVtbnNDb3VudCA9IF90aGlzJHByb3BzNi5vdmVyc2NhbkNvbHVtbnNDb3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvdW50ID0gX3RoaXMkcHJvcHM2Lm92ZXJzY2FuQ291bnQsXG4gICAgICAgICAgcm93Q291bnQgPSBfdGhpcyRwcm9wczYucm93Q291bnQ7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU0ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGU0Lmhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgaXNTY3JvbGxpbmcgPSBfdGhpcyRzdGF0ZTQuaXNTY3JvbGxpbmcsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IF90aGlzJHN0YXRlNC5zY3JvbGxMZWZ0O1xuICAgICAgdmFyIG92ZXJzY2FuQ291bnRSZXNvbHZlZCA9IG92ZXJzY2FuQ29sdW1uQ291bnQgfHwgb3ZlcnNjYW5Db2x1bW5zQ291bnQgfHwgb3ZlcnNjYW5Db3VudCB8fCAxO1xuXG4gICAgICBpZiAoY29sdW1uQ291bnQgPT09IDAgfHwgcm93Q291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0SW5kZXggPSBnZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0KHRoaXMucHJvcHMsIHNjcm9sbExlZnQsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIHN0b3BJbmRleCA9IGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXgodGhpcy5wcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsTGVmdCwgdGhpcy5faW5zdGFuY2VQcm9wcyk7IC8vIE92ZXJzY2FuIGJ5IG9uZSBpdGVtIGluIGVhY2ggZGlyZWN0aW9uIHNvIHRoYXQgdGFiL2ZvY3VzIHdvcmtzLlxuICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYXQgbGVhc3Qgb25lIGV4dHJhIGl0ZW0sIHRhYiBsb29wcyBiYWNrIGFyb3VuZC5cblxuICAgICAgdmFyIG92ZXJzY2FuQmFja3dhcmQgPSAhaXNTY3JvbGxpbmcgfHwgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJyA/IE1hdGgubWF4KDEsIG92ZXJzY2FuQ291bnRSZXNvbHZlZCkgOiAxO1xuICAgICAgdmFyIG92ZXJzY2FuRm9yd2FyZCA9ICFpc1Njcm9sbGluZyB8fCBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID09PSAnZm9yd2FyZCcgPyBNYXRoLm1heCgxLCBvdmVyc2NhbkNvdW50UmVzb2x2ZWQpIDogMTtcbiAgICAgIHJldHVybiBbTWF0aC5tYXgoMCwgc3RhcnRJbmRleCAtIG92ZXJzY2FuQmFja3dhcmQpLCBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5Db3VudCAtIDEsIHN0b3BJbmRleCArIG92ZXJzY2FuRm9yd2FyZCkpLCBzdGFydEluZGV4LCBzdG9wSW5kZXhdO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFZlcnRpY2FsUmFuZ2VUb1JlbmRlciA9IGZ1bmN0aW9uIF9nZXRWZXJ0aWNhbFJhbmdlVG9SZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzNy5jb2x1bW5Db3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvdW50ID0gX3RoaXMkcHJvcHM3Lm92ZXJzY2FuQ291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Sb3dDb3VudCA9IF90aGlzJHByb3BzNy5vdmVyc2NhblJvd0NvdW50LFxuICAgICAgICAgIG92ZXJzY2FuUm93c0NvdW50ID0gX3RoaXMkcHJvcHM3Lm92ZXJzY2FuUm93c0NvdW50LFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHM3LnJvd0NvdW50O1xuICAgICAgdmFyIF90aGlzJHN0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNTY3JvbGxpbmcgPSBfdGhpcyRzdGF0ZTUuaXNTY3JvbGxpbmcsXG4gICAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZTUudmVydGljYWxTY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RoaXMkc3RhdGU1LnNjcm9sbFRvcDtcbiAgICAgIHZhciBvdmVyc2NhbkNvdW50UmVzb2x2ZWQgPSBvdmVyc2NhblJvd0NvdW50IHx8IG92ZXJzY2FuUm93c0NvdW50IHx8IG92ZXJzY2FuQ291bnQgfHwgMTtcblxuICAgICAgaWYgKGNvbHVtbkNvdW50ID09PSAwIHx8IHJvd0NvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydEluZGV4ID0gZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldCh0aGlzLnByb3BzLCBzY3JvbGxUb3AsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIHN0b3BJbmRleCA9IGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXgodGhpcy5wcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsVG9wLCB0aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gT3ZlcnNjYW4gYnkgb25lIGl0ZW0gaW4gZWFjaCBkaXJlY3Rpb24gc28gdGhhdCB0YWIvZm9jdXMgd29ya3MuXG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZXh0cmEgaXRlbSwgdGFiIGxvb3BzIGJhY2sgYXJvdW5kLlxuXG4gICAgICB2YXIgb3ZlcnNjYW5CYWNrd2FyZCA9ICFpc1Njcm9sbGluZyB8fCB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJyA/IE1hdGgubWF4KDEsIG92ZXJzY2FuQ291bnRSZXNvbHZlZCkgOiAxO1xuICAgICAgdmFyIG92ZXJzY2FuRm9yd2FyZCA9ICFpc1Njcm9sbGluZyB8fCB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnID8gTWF0aC5tYXgoMSwgb3ZlcnNjYW5Db3VudFJlc29sdmVkKSA6IDE7XG4gICAgICByZXR1cm4gW01hdGgubWF4KDAsIHN0YXJ0SW5kZXggLSBvdmVyc2NhbkJhY2t3YXJkKSwgTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93Q291bnQgLSAxLCBzdG9wSW5kZXggKyBvdmVyc2NhbkZvcndhcmQpKSwgc3RhcnRJbmRleCwgc3RvcEluZGV4XTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEdyaWQ7XG4gIH0oUHVyZUNvbXBvbmVudCksIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBpdGVtRGF0YTogdW5kZWZpbmVkLFxuICAgIHVzZUlzU2Nyb2xsaW5nOiBmYWxzZVxuICB9LCBfdGVtcDtcbn1cblxudmFyIHZhbGlkYXRlU2hhcmVkUHJvcHMgPSBmdW5jdGlvbiB2YWxpZGF0ZVNoYXJlZFByb3BzKF9yZWY1LCBfcmVmNikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNS5jaGlsZHJlbixcbiAgICAgIGRpcmVjdGlvbiA9IF9yZWY1LmRpcmVjdGlvbixcbiAgICAgIGhlaWdodCA9IF9yZWY1LmhlaWdodCxcbiAgICAgIGlubmVyVGFnTmFtZSA9IF9yZWY1LmlubmVyVGFnTmFtZSxcbiAgICAgIG91dGVyVGFnTmFtZSA9IF9yZWY1Lm91dGVyVGFnTmFtZSxcbiAgICAgIG92ZXJzY2FuQ29sdW1uc0NvdW50ID0gX3JlZjUub3ZlcnNjYW5Db2x1bW5zQ291bnQsXG4gICAgICBvdmVyc2NhbkNvdW50ID0gX3JlZjUub3ZlcnNjYW5Db3VudCxcbiAgICAgIG92ZXJzY2FuUm93c0NvdW50ID0gX3JlZjUub3ZlcnNjYW5Sb3dzQ291bnQsXG4gICAgICB3aWR0aCA9IF9yZWY1LndpZHRoO1xuICB2YXIgaW5zdGFuY2UgPSBfcmVmNi5pbnN0YW5jZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2Ygb3ZlcnNjYW5Db3VudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChkZXZXYXJuaW5nc092ZXJzY2FuQ291bnQgJiYgIWRldldhcm5pbmdzT3ZlcnNjYW5Db3VudC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgIGRldldhcm5pbmdzT3ZlcnNjYW5Db3VudC5hZGQoaW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBvdmVyc2NhbkNvdW50IHByb3AgaGFzIGJlZW4gZGVwcmVjYXRlZC4gJyArICdQbGVhc2UgdXNlIHRoZSBvdmVyc2NhbkNvbHVtbkNvdW50IGFuZCBvdmVyc2NhblJvd0NvdW50IHByb3BzIGluc3RlYWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvdmVyc2NhbkNvbHVtbnNDb3VudCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIG92ZXJzY2FuUm93c0NvdW50ID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGRldldhcm5pbmdzT3ZlcnNjYW5Sb3dzQ29sdW1uc0NvdW50ICYmICFkZXZXYXJuaW5nc092ZXJzY2FuUm93c0NvbHVtbnNDb3VudC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgIGRldldhcm5pbmdzT3ZlcnNjYW5Sb3dzQ29sdW1uc0NvdW50LmFkZChpbnN0YW5jZSk7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIG92ZXJzY2FuQ29sdW1uc0NvdW50IGFuZCBvdmVyc2NhblJvd3NDb3VudCBwcm9wcyBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gJyArICdQbGVhc2UgdXNlIHRoZSBvdmVyc2NhbkNvbHVtbkNvdW50IGFuZCBvdmVyc2NhblJvd0NvdW50IHByb3BzIGluc3RlYWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlubmVyVGFnTmFtZSAhPSBudWxsIHx8IG91dGVyVGFnTmFtZSAhPSBudWxsKSB7XG4gICAgICBpZiAoZGV2V2FybmluZ3NUYWdOYW1lICYmICFkZXZXYXJuaW5nc1RhZ05hbWUuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICBkZXZXYXJuaW5nc1RhZ05hbWUuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgaW5uZXJUYWdOYW1lIGFuZCBvdXRlclRhZ05hbWUgcHJvcHMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuICcgKyAnUGxlYXNlIHVzZSB0aGUgaW5uZXJFbGVtZW50VHlwZSBhbmQgb3V0ZXJFbGVtZW50VHlwZSBwcm9wcyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImNoaWxkcmVuXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgUmVhY3QgY29tcG9uZW50LiAnICsgKFwiXFxcIlwiICsgKGNoaWxkcmVuID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGNoaWxkcmVuKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2x0cic6XG4gICAgICBjYXNlICdydGwnOlxuICAgICAgICAvLyBWYWxpZCB2YWx1ZXNcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiZGlyZWN0aW9uXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGVpdGhlciBcImx0clwiIG9yIFwicnRsXCIuICcgKyAoXCJcXFwiXCIgKyBkaXJlY3Rpb24gKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIndpZHRoXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnR3JpZHMgbXVzdCBzcGVjaWZ5IGEgbnVtYmVyIGZvciB3aWR0aC4gJyArIChcIlxcXCJcIiArICh3aWR0aCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB3aWR0aCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJoZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdHcmlkcyBtdXN0IHNwZWNpZnkgYSBudW1iZXIgZm9yIGhlaWdodC4gJyArIChcIlxcXCJcIiArIChoZWlnaHQgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgaGVpZ2h0KSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFID0gNTA7XG5cbnZhciBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCA9IGZ1bmN0aW9uIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0KF9yZWYsIF9yZWYyKSB7XG4gIHZhciByb3dDb3VudCA9IF9yZWYucm93Q291bnQ7XG4gIHZhciByb3dNZXRhZGF0YU1hcCA9IF9yZWYyLnJvd01ldGFkYXRhTWFwLFxuICAgICAgZXN0aW1hdGVkUm93SGVpZ2h0ID0gX3JlZjIuZXN0aW1hdGVkUm93SGVpZ2h0LFxuICAgICAgbGFzdE1lYXN1cmVkUm93SW5kZXggPSBfcmVmMi5sYXN0TWVhc3VyZWRSb3dJbmRleDtcbiAgdmFyIHRvdGFsU2l6ZU9mTWVhc3VyZWRSb3dzID0gMDsgLy8gRWRnZSBjYXNlIGNoZWNrIGZvciB3aGVuIHRoZSBudW1iZXIgb2YgaXRlbXMgZGVjcmVhc2VzIHdoaWxlIGEgc2Nyb2xsIGlzIGluIHByb2dyZXNzLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYnZhdWdobi9yZWFjdC13aW5kb3cvcHVsbC8xMzhcblxuICBpZiAobGFzdE1lYXN1cmVkUm93SW5kZXggPj0gcm93Q291bnQpIHtcbiAgICBsYXN0TWVhc3VyZWRSb3dJbmRleCA9IHJvd0NvdW50IC0gMTtcbiAgfVxuXG4gIGlmIChsYXN0TWVhc3VyZWRSb3dJbmRleCA+PSAwKSB7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IHJvd01ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZFJvd0luZGV4XTtcbiAgICB0b3RhbFNpemVPZk1lYXN1cmVkUm93cyA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgfVxuXG4gIHZhciBudW1Vbm1lYXN1cmVkSXRlbXMgPSByb3dDb3VudCAtIGxhc3RNZWFzdXJlZFJvd0luZGV4IC0gMTtcbiAgdmFyIHRvdGFsU2l6ZU9mVW5tZWFzdXJlZEl0ZW1zID0gbnVtVW5tZWFzdXJlZEl0ZW1zICogZXN0aW1hdGVkUm93SGVpZ2h0O1xuICByZXR1cm4gdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgKyB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcztcbn07XG5cbnZhciBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoID0gZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aChfcmVmMywgX3JlZjQpIHtcbiAgdmFyIGNvbHVtbkNvdW50ID0gX3JlZjMuY29sdW1uQ291bnQ7XG4gIHZhciBjb2x1bW5NZXRhZGF0YU1hcCA9IF9yZWY0LmNvbHVtbk1ldGFkYXRhTWFwLFxuICAgICAgZXN0aW1hdGVkQ29sdW1uV2lkdGggPSBfcmVmNC5lc3RpbWF0ZWRDb2x1bW5XaWR0aCxcbiAgICAgIGxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID0gX3JlZjQubGFzdE1lYXN1cmVkQ29sdW1uSW5kZXg7XG4gIHZhciB0b3RhbFNpemVPZk1lYXN1cmVkUm93cyA9IDA7IC8vIEVkZ2UgY2FzZSBjaGVjayBmb3Igd2hlbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGRlY3JlYXNlcyB3aGlsZSBhIHNjcm9sbCBpcyBpbiBwcm9ncmVzcy5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2J2YXVnaG4vcmVhY3Qtd2luZG93L3B1bGwvMTM4XG5cbiAgaWYgKGxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID49IGNvbHVtbkNvdW50KSB7XG4gICAgbGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggPSBjb2x1bW5Db3VudCAtIDE7XG4gIH1cblxuICBpZiAobGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggPj0gMCkge1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBjb2x1bW5NZXRhZGF0YU1hcFtsYXN0TWVhc3VyZWRDb2x1bW5JbmRleF07XG4gICAgdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgPSBpdGVtTWV0YWRhdGEub2Zmc2V0ICsgaXRlbU1ldGFkYXRhLnNpemU7XG4gIH1cblxuICB2YXIgbnVtVW5tZWFzdXJlZEl0ZW1zID0gY29sdW1uQ291bnQgLSBsYXN0TWVhc3VyZWRDb2x1bW5JbmRleCAtIDE7XG4gIHZhciB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcyA9IG51bVVubWVhc3VyZWRJdGVtcyAqIGVzdGltYXRlZENvbHVtbldpZHRoO1xuICByZXR1cm4gdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgKyB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcztcbn07XG5cbnZhciBnZXRJdGVtTWV0YWRhdGEgPSBmdW5jdGlvbiBnZXRJdGVtTWV0YWRhdGEoaXRlbVR5cGUsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwLCBpdGVtU2l6ZSwgbGFzdE1lYXN1cmVkSW5kZXg7XG5cbiAgaWYgKGl0ZW1UeXBlID09PSAnY29sdW1uJykge1xuICAgIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMuY29sdW1uTWV0YWRhdGFNYXA7XG4gICAgaXRlbVNpemUgPSBwcm9wcy5jb2x1bW5XaWR0aDtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkQ29sdW1uSW5kZXg7XG4gIH0gZWxzZSB7XG4gICAgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5yb3dNZXRhZGF0YU1hcDtcbiAgICBpdGVtU2l6ZSA9IHByb3BzLnJvd0hlaWdodDtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXg7XG4gIH1cblxuICBpZiAoaW5kZXggPiBsYXN0TWVhc3VyZWRJbmRleCkge1xuICAgIHZhciBvZmZzZXQgPSAwO1xuXG4gICAgaWYgKGxhc3RNZWFzdXJlZEluZGV4ID49IDApIHtcbiAgICAgIHZhciBpdGVtTWV0YWRhdGEgPSBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdO1xuICAgICAgb2Zmc2V0ID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSBsYXN0TWVhc3VyZWRJbmRleCArIDE7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgdmFyIHNpemUgPSBpdGVtU2l6ZShpKTtcbiAgICAgIGl0ZW1NZXRhZGF0YU1hcFtpXSA9IHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgIH07XG4gICAgICBvZmZzZXQgKz0gc2l6ZTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbVR5cGUgPT09ICdjb2x1bW4nKSB7XG4gICAgICBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID0gaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXRlbU1ldGFkYXRhTWFwW2luZGV4XTtcbn07XG5cbnZhciBmaW5kTmVhcmVzdEl0ZW0gPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW0oaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBvZmZzZXQpIHtcbiAgdmFyIGl0ZW1NZXRhZGF0YU1hcCwgbGFzdE1lYXN1cmVkSW5kZXg7XG5cbiAgaWYgKGl0ZW1UeXBlID09PSAnY29sdW1uJykge1xuICAgIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMuY29sdW1uTWV0YWRhdGFNYXA7XG4gICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4O1xuICB9IGVsc2Uge1xuICAgIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMucm93TWV0YWRhdGFNYXA7XG4gICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZFJvd0luZGV4O1xuICB9XG5cbiAgdmFyIGxhc3RNZWFzdXJlZEl0ZW1PZmZzZXQgPSBsYXN0TWVhc3VyZWRJbmRleCA+IDAgPyBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdLm9mZnNldCA6IDA7XG5cbiAgaWYgKGxhc3RNZWFzdXJlZEl0ZW1PZmZzZXQgPj0gb2Zmc2V0KSB7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBtZWFzdXJlZCBpdGVtcyB3aXRoaW4gdGhpcyByYW5nZSBqdXN0IHVzZSBhIGJpbmFyeSBzZWFyY2ggYXMgaXQncyBmYXN0ZXIuXG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbUJpbmFyeVNlYXJjaChpdGVtVHlwZSwgcHJvcHMsIGluc3RhbmNlUHJvcHMsIGxhc3RNZWFzdXJlZEluZGV4LCAwLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHdlIGhhdmVuJ3QgeWV0IG1lYXN1cmVkIHRoaXMgaGlnaCwgZmFsbGJhY2sgdG8gYW4gZXhwb25lbnRpYWwgc2VhcmNoIHdpdGggYW4gaW5uZXIgYmluYXJ5IHNlYXJjaC5cbiAgICAvLyBUaGUgZXhwb25lbnRpYWwgc2VhcmNoIGF2b2lkcyBwcmUtY29tcHV0aW5nIHNpemVzIGZvciB0aGUgZnVsbCBzZXQgb2YgaXRlbXMgYXMgYSBiaW5hcnkgc2VhcmNoIHdvdWxkLlxuICAgIC8vIFRoZSBvdmVyYWxsIGNvbXBsZXhpdHkgZm9yIHRoaXMgYXBwcm9hY2ggaXMgTyhsb2cgbikuXG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoKGl0ZW1UeXBlLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgTWF0aC5tYXgoMCwgbGFzdE1lYXN1cmVkSW5kZXgpLCBvZmZzZXQpO1xuICB9XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoID0gZnVuY3Rpb24gZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoKGl0ZW1UeXBlLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgaGlnaCwgbG93LCBvZmZzZXQpIHtcbiAgd2hpbGUgKGxvdyA8PSBoaWdoKSB7XG4gICAgdmFyIG1pZGRsZSA9IGxvdyArIE1hdGguZmxvb3IoKGhpZ2ggLSBsb3cpIC8gMik7XG4gICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBnZXRJdGVtTWV0YWRhdGEoaXRlbVR5cGUsIHByb3BzLCBtaWRkbGUsIGluc3RhbmNlUHJvcHMpLm9mZnNldDtcblxuICAgIGlmIChjdXJyZW50T2Zmc2V0ID09PSBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBtaWRkbGU7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50T2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgICBsb3cgPSBtaWRkbGUgKyAxO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudE9mZnNldCA+IG9mZnNldCkge1xuICAgICAgaGlnaCA9IG1pZGRsZSAtIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvdyA+IDApIHtcbiAgICByZXR1cm4gbG93IC0gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufTtcblxudmFyIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoID0gZnVuY3Rpb24gZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2goaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBpbmRleCwgb2Zmc2V0KSB7XG4gIHZhciBpdGVtQ291bnQgPSBpdGVtVHlwZSA9PT0gJ2NvbHVtbicgPyBwcm9wcy5jb2x1bW5Db3VudCA6IHByb3BzLnJvd0NvdW50O1xuICB2YXIgaW50ZXJ2YWwgPSAxO1xuXG4gIHdoaWxlIChpbmRleCA8IGl0ZW1Db3VudCAmJiBnZXRJdGVtTWV0YWRhdGEoaXRlbVR5cGUsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgaW5kZXggKz0gaW50ZXJ2YWw7XG4gICAgaW50ZXJ2YWwgKj0gMjtcbiAgfVxuXG4gIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2goaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBNYXRoLm1pbihpbmRleCwgaXRlbUNvdW50IC0gMSksIE1hdGguZmxvb3IoaW5kZXggLyAyKSwgb2Zmc2V0KTtcbn07XG5cbnZhciBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudCA9IGZ1bmN0aW9uIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KGl0ZW1UeXBlLCBwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpIHtcbiAgdmFyIHNpemUgPSBpdGVtVHlwZSA9PT0gJ2NvbHVtbicgPyBwcm9wcy53aWR0aCA6IHByb3BzLmhlaWdodDtcbiAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YShpdGVtVHlwZSwgcHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKTsgLy8gR2V0IGVzdGltYXRlZCB0b3RhbCBzaXplIGFmdGVyIEl0ZW1NZXRhZGF0YSBpcyBjb21wdXRlZCxcbiAgLy8gVG8gZW5zdXJlIGl0IHJlZmxlY3RzIGFjdHVhbCBtZWFzdXJlbWVudHMgaW5zdGVhZCBvZiBqdXN0IGVzdGltYXRlcy5cblxuICB2YXIgZXN0aW1hdGVkVG90YWxTaXplID0gaXRlbVR5cGUgPT09ICdjb2x1bW4nID8gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aChwcm9wcywgaW5zdGFuY2VQcm9wcykgOiBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodChwcm9wcywgaW5zdGFuY2VQcm9wcyk7XG4gIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihlc3RpbWF0ZWRUb3RhbFNpemUgLSBzaXplLCBpdGVtTWV0YWRhdGEub2Zmc2V0KSk7XG4gIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCBpdGVtTWV0YWRhdGEub2Zmc2V0IC0gc2l6ZSArIHNjcm9sbGJhclNpemUgKyBpdGVtTWV0YWRhdGEuc2l6ZSk7XG5cbiAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgLSBzaXplICYmIHNjcm9sbE9mZnNldCA8PSBtYXhPZmZzZXQgKyBzaXplKSB7XG4gICAgICBhbGlnbiA9ICdhdXRvJztcbiAgICB9IGVsc2Uge1xuICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgY2FzZSAnc3RhcnQnOlxuICAgICAgcmV0dXJuIG1heE9mZnNldDtcblxuICAgIGNhc2UgJ2VuZCc6XG4gICAgICByZXR1cm4gbWluT2Zmc2V0O1xuXG4gICAgY2FzZSAnY2VudGVyJzpcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKG1pbk9mZnNldCArIChtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIC8gMik7XG5cbiAgICBjYXNlICdhdXRvJzpcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsT2Zmc2V0O1xuICAgICAgfSBlbHNlIGlmIChtaW5PZmZzZXQgPiBtYXhPZmZzZXQpIHtcbiAgICAgICAgLy8gQmVjYXVzZSB3ZSBvbmx5IHRha2UgaW50byBhY2NvdW50IHRoZSBzY3JvbGxiYXIgc2l6ZSB3aGVuIGNhbGN1bGF0aW5nIG1pbk9mZnNldFxuICAgICAgICAvLyB0aGlzIHZhbHVlIGNhbiBiZSBsYXJnZXIgdGhhbiBtYXhPZmZzZXQgd2hlbiBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICB9IGVsc2UgaWYgKHNjcm9sbE9mZnNldCA8IG1pbk9mZnNldCkge1xuICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcbiAgICAgIH1cblxuICB9XG59O1xuXG52YXIgVmFyaWFibGVTaXplR3JpZCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVHcmlkQ29tcG9uZW50KHtcbiAgZ2V0Q29sdW1uT2Zmc2V0OiBmdW5jdGlvbiBnZXRDb2x1bW5PZmZzZXQocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGdldEl0ZW1NZXRhZGF0YSgnY29sdW1uJywgcHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKS5vZmZzZXQ7XG4gIH0sXG4gIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQocHJvcHMsIHNjcm9sbExlZnQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtKCdjb2x1bW4nLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgc2Nyb2xsTGVmdCk7XG4gIH0sXG4gIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXgocHJvcHMsIHN0YXJ0SW5kZXgsIHNjcm9sbExlZnQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICB2YXIgY29sdW1uQ291bnQgPSBwcm9wcy5jb2x1bW5Db3VudCxcbiAgICAgICAgd2lkdGggPSBwcm9wcy53aWR0aDtcbiAgICB2YXIgaXRlbU1ldGFkYXRhID0gZ2V0SXRlbU1ldGFkYXRhKCdjb2x1bW4nLCBwcm9wcywgc3RhcnRJbmRleCwgaW5zdGFuY2VQcm9wcyk7XG4gICAgdmFyIG1heE9mZnNldCA9IHNjcm9sbExlZnQgKyB3aWR0aDtcbiAgICB2YXIgb2Zmc2V0ID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICAgIHZhciBzdG9wSW5kZXggPSBzdGFydEluZGV4O1xuXG4gICAgd2hpbGUgKHN0b3BJbmRleCA8IGNvbHVtbkNvdW50IC0gMSAmJiBvZmZzZXQgPCBtYXhPZmZzZXQpIHtcbiAgICAgIHN0b3BJbmRleCsrO1xuICAgICAgb2Zmc2V0ICs9IGdldEl0ZW1NZXRhZGF0YSgnY29sdW1uJywgcHJvcHMsIHN0b3BJbmRleCwgaW5zdGFuY2VQcm9wcykuc2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcEluZGV4O1xuICB9LFxuICBnZXRDb2x1bW5XaWR0aDogZnVuY3Rpb24gZ2V0Q29sdW1uV2lkdGgocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlUHJvcHMuY29sdW1uTWV0YWRhdGFNYXBbaW5kZXhdLnNpemU7XG4gIH0sXG4gIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0OiBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCxcbiAgZ2V0RXN0aW1hdGVkVG90YWxXaWR0aDogZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCxcbiAgZ2V0T2Zmc2V0Rm9yQ29sdW1uQW5kQWxpZ25tZW50OiBmdW5jdGlvbiBnZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQocHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KCdjb2x1bW4nLCBwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpO1xuICB9LFxuICBnZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudChwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQoJ3JvdycsIHByb3BzLCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSk7XG4gIH0sXG4gIGdldFJvd09mZnNldDogZnVuY3Rpb24gZ2V0Um93T2Zmc2V0KHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBnZXRJdGVtTWV0YWRhdGEoJ3JvdycsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0O1xuICB9LFxuICBnZXRSb3dIZWlnaHQ6IGZ1bmN0aW9uIGdldFJvd0hlaWdodChwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcy5yb3dNZXRhZGF0YU1hcFtpbmRleF0uc2l6ZTtcbiAgfSxcbiAgZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldDogZnVuY3Rpb24gZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldChwcm9wcywgc2Nyb2xsVG9wLCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbSgncm93JywgcHJvcHMsIGluc3RhbmNlUHJvcHMsIHNjcm9sbFRvcCk7XG4gIH0sXG4gIGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXgocHJvcHMsIHN0YXJ0SW5kZXgsIHNjcm9sbFRvcCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHZhciByb3dDb3VudCA9IHByb3BzLnJvd0NvdW50LFxuICAgICAgICBoZWlnaHQgPSBwcm9wcy5oZWlnaHQ7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YSgncm93JywgcHJvcHMsIHN0YXJ0SW5kZXgsIGluc3RhbmNlUHJvcHMpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBzY3JvbGxUb3AgKyBoZWlnaHQ7XG4gICAgdmFyIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB2YXIgc3RvcEluZGV4ID0gc3RhcnRJbmRleDtcblxuICAgIHdoaWxlIChzdG9wSW5kZXggPCByb3dDb3VudCAtIDEgJiYgb2Zmc2V0IDwgbWF4T2Zmc2V0KSB7XG4gICAgICBzdG9wSW5kZXgrKztcbiAgICAgIG9mZnNldCArPSBnZXRJdGVtTWV0YWRhdGEoJ3JvdycsIHByb3BzLCBzdG9wSW5kZXgsIGluc3RhbmNlUHJvcHMpLnNpemU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3BJbmRleDtcbiAgfSxcbiAgaW5pdEluc3RhbmNlUHJvcHM6IGZ1bmN0aW9uIGluaXRJbnN0YW5jZVByb3BzKHByb3BzLCBpbnN0YW5jZSkge1xuICAgIHZhciBfcmVmNSA9IHByb3BzLFxuICAgICAgICBlc3RpbWF0ZWRDb2x1bW5XaWR0aCA9IF9yZWY1LmVzdGltYXRlZENvbHVtbldpZHRoLFxuICAgICAgICBlc3RpbWF0ZWRSb3dIZWlnaHQgPSBfcmVmNS5lc3RpbWF0ZWRSb3dIZWlnaHQ7XG4gICAgdmFyIGluc3RhbmNlUHJvcHMgPSB7XG4gICAgICBjb2x1bW5NZXRhZGF0YU1hcDoge30sXG4gICAgICBlc3RpbWF0ZWRDb2x1bW5XaWR0aDogZXN0aW1hdGVkQ29sdW1uV2lkdGggfHwgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFLFxuICAgICAgZXN0aW1hdGVkUm93SGVpZ2h0OiBlc3RpbWF0ZWRSb3dIZWlnaHQgfHwgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFLFxuICAgICAgbGFzdE1lYXN1cmVkQ29sdW1uSW5kZXg6IC0xLFxuICAgICAgbGFzdE1lYXN1cmVkUm93SW5kZXg6IC0xLFxuICAgICAgcm93TWV0YWRhdGFNYXA6IHt9XG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJDb2x1bW5JbmRleCA9IGZ1bmN0aW9uIChjb2x1bW5JbmRleCwgc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UucmVzZXRBZnRlckluZGljZXMoe1xuICAgICAgICBjb2x1bW5JbmRleDogY29sdW1uSW5kZXgsXG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlOiBzaG91bGRGb3JjZVVwZGF0ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJSb3dJbmRleCA9IGZ1bmN0aW9uIChyb3dJbmRleCwgc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UucmVzZXRBZnRlckluZGljZXMoe1xuICAgICAgICByb3dJbmRleDogcm93SW5kZXgsXG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlOiBzaG91bGRGb3JjZVVwZGF0ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJJbmRpY2VzID0gZnVuY3Rpb24gKF9yZWY2KSB7XG4gICAgICB2YXIgY29sdW1uSW5kZXggPSBfcmVmNi5jb2x1bW5JbmRleCxcbiAgICAgICAgICByb3dJbmRleCA9IF9yZWY2LnJvd0luZGV4LFxuICAgICAgICAgIF9yZWY2JHNob3VsZEZvcmNlVXBkYSA9IF9yZWY2LnNob3VsZEZvcmNlVXBkYXRlLFxuICAgICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gX3JlZjYkc2hvdWxkRm9yY2VVcGRhID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjYkc2hvdWxkRm9yY2VVcGRhO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbHVtbkluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID0gTWF0aC5taW4oaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRDb2x1bW5JbmRleCwgY29sdW1uSW5kZXggLSAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiByb3dJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRSb3dJbmRleCA9IE1hdGgubWluKGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXgsIHJvd0luZGV4IC0gMSk7XG4gICAgICB9IC8vIFdlIGNvdWxkIHBvdGVudGlhbGx5IG9wdGltaXplIGZ1cnRoZXIgYnkgb25seSBldmljdGluZyBzdHlsZXMgYWZ0ZXIgdGhpcyBpbmRleCxcbiAgICAgIC8vIEJ1dCBzaW5jZSBzdHlsZXMgYXJlIG9ubHkgY2FjaGVkIHdoaWxlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy1cbiAgICAgIC8vIEl0IHNlZW1zIGFuIHVubmVjZXNzYXJ5IG9wdGltaXphdGlvbi5cbiAgICAgIC8vIEl0J3MgdW5saWtlbHkgdGhhdCByZXNldEFmdGVySW5kZXgoKSB3aWxsIGJlIGNhbGxlZCB3aGlsZSBhIHVzZXIgaXMgc2Nyb2xsaW5nLlxuXG5cbiAgICAgIGluc3RhbmNlLl9nZXRJdGVtU3R5bGVDYWNoZSgtMSk7XG5cbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSkge1xuICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcztcbiAgfSxcbiAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZTogZmFsc2UsXG4gIHZhbGlkYXRlUHJvcHM6IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoX3JlZjcpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmNy5jb2x1bW5XaWR0aCxcbiAgICAgICAgcm93SGVpZ2h0ID0gX3JlZjcucm93SGVpZ2h0O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgY29sdW1uV2lkdGggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJjb2x1bW5XaWR0aFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIGZ1bmN0aW9uLiAnICsgKFwiXFxcIlwiICsgKGNvbHVtbldpZHRoID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGNvbHVtbldpZHRoKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiByb3dIZWlnaHQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJyb3dIZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBmdW5jdGlvbi4gJyArIChcIlxcXCJcIiArIChyb3dIZWlnaHQgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2Ygcm93SGVpZ2h0KSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxudmFyIElTX1NDUk9MTElOR19ERUJPVU5DRV9JTlRFUlZBTCQxID0gMTUwO1xuXG52YXIgZGVmYXVsdEl0ZW1LZXkkMSA9IGZ1bmN0aW9uIGRlZmF1bHRJdGVtS2V5KGluZGV4LCBkYXRhKSB7XG4gIHJldHVybiBpbmRleDtcbn07IC8vIEluIERFViBtb2RlLCB0aGlzIFNldCBoZWxwcyB1cyBvbmx5IGxvZyBhIHdhcm5pbmcgb25jZSBwZXIgY29tcG9uZW50IGluc3RhbmNlLlxuLy8gVGhpcyBhdm9pZHMgc3BhbW1pbmcgdGhlIGNvbnNvbGUgZXZlcnkgdGltZSBhIHJlbmRlciBoYXBwZW5zLlxuXG5cbnZhciBkZXZXYXJuaW5nc0RpcmVjdGlvbiA9IG51bGw7XG52YXIgZGV2V2FybmluZ3NUYWdOYW1lJDEgPSBudWxsO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5XZWFrU2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRldldhcm5pbmdzRGlyZWN0aW9uID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgICBkZXZXYXJuaW5nc1RhZ05hbWUkMSA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIG5ldyBXZWFrU2V0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdENvbXBvbmVudChfcmVmKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBnZXRJdGVtT2Zmc2V0ID0gX3JlZi5nZXRJdGVtT2Zmc2V0LFxuICAgICAgZ2V0RXN0aW1hdGVkVG90YWxTaXplID0gX3JlZi5nZXRFc3RpbWF0ZWRUb3RhbFNpemUsXG4gICAgICBnZXRJdGVtU2l6ZSA9IF9yZWYuZ2V0SXRlbVNpemUsXG4gICAgICBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudCA9IF9yZWYuZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQsXG4gICAgICBnZXRTdGFydEluZGV4Rm9yT2Zmc2V0ID0gX3JlZi5nZXRTdGFydEluZGV4Rm9yT2Zmc2V0LFxuICAgICAgZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleCA9IF9yZWYuZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleCxcbiAgICAgIGluaXRJbnN0YW5jZVByb3BzID0gX3JlZi5pbml0SW5zdGFuY2VQcm9wcyxcbiAgICAgIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgPSBfcmVmLnNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UsXG4gICAgICB2YWxpZGF0ZVByb3BzID0gX3JlZi52YWxpZGF0ZVByb3BzO1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKExpc3QsIF9QdXJlQ29tcG9uZW50KTtcblxuICAgIC8vIEFsd2F5cyB1c2UgZXhwbGljaXQgY29uc3RydWN0b3IgZm9yIFJlYWN0IGNvbXBvbmVudHMuXG4gICAgLy8gSXQgcHJvZHVjZXMgbGVzcyBjb2RlIGFmdGVyIHRyYW5zcGlsYXRpb24uICgjMjYpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF90aGlzID0gX1B1cmVDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgIF90aGlzLl9pbnN0YW5jZVByb3BzID0gaW5pdEluc3RhbmNlUHJvcHMoX3RoaXMucHJvcHMsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICAgIF90aGlzLl9vdXRlclJlZiA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkID0gbnVsbDtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBpbnN0YW5jZTogX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksXG4gICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uOiAnZm9yd2FyZCcsXG4gICAgICAgIHNjcm9sbE9mZnNldDogdHlwZW9mIF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxPZmZzZXQgPT09ICdudW1iZXInID8gX3RoaXMucHJvcHMuaW5pdGlhbFNjcm9sbE9mZnNldCA6IDAsXG4gICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogZmFsc2VcbiAgICAgIH07XG4gICAgICBfdGhpcy5fY2FsbE9uSXRlbXNSZW5kZXJlZCA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkID0gbWVtb2l6ZU9uZShmdW5jdGlvbiAob3ZlcnNjYW5TdGFydEluZGV4LCBvdmVyc2NhblN0b3BJbmRleCwgdmlzaWJsZVN0YXJ0SW5kZXgsIHZpc2libGVTdG9wSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uSXRlbXNSZW5kZXJlZCh7XG4gICAgICAgICAgb3ZlcnNjYW5TdGFydEluZGV4OiBvdmVyc2NhblN0YXJ0SW5kZXgsXG4gICAgICAgICAgb3ZlcnNjYW5TdG9wSW5kZXg6IG92ZXJzY2FuU3RvcEluZGV4LFxuICAgICAgICAgIHZpc2libGVTdGFydEluZGV4OiB2aXNpYmxlU3RhcnRJbmRleCxcbiAgICAgICAgICB2aXNpYmxlU3RvcEluZGV4OiB2aXNpYmxlU3RvcEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy5fY2FsbE9uU2Nyb2xsID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2NhbGxPblNjcm9sbCA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKHNjcm9sbERpcmVjdGlvbiwgc2Nyb2xsT2Zmc2V0LCBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uU2Nyb2xsKHtcbiAgICAgICAgICBzY3JvbGxEaXJlY3Rpb246IHNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICBzY3JvbGxPZmZzZXQ6IHNjcm9sbE9mZnNldCxcbiAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZSA9IHZvaWQgMDtcblxuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgICAgIGl0ZW1TaXplID0gX3RoaXMkcHJvcHMuaXRlbVNpemUsXG4gICAgICAgICAgICBsYXlvdXQgPSBfdGhpcyRwcm9wcy5sYXlvdXQ7XG5cbiAgICAgICAgdmFyIGl0ZW1TdHlsZUNhY2hlID0gX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlKHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgaXRlbVNpemUsIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgbGF5b3V0LCBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlICYmIGRpcmVjdGlvbik7XG5cbiAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgIGlmIChpdGVtU3R5bGVDYWNoZS5oYXNPd25Qcm9wZXJ0eShpbmRleCkpIHtcbiAgICAgICAgICBzdHlsZSA9IGl0ZW1TdHlsZUNhY2hlW2luZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX3N0eWxlO1xuXG4gICAgICAgICAgdmFyIF9vZmZzZXQgPSBnZXRJdGVtT2Zmc2V0KF90aGlzLnByb3BzLCBpbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpO1xuXG4gICAgICAgICAgdmFyIHNpemUgPSBnZXRJdGVtU2l6ZShfdGhpcy5wcm9wcywgaW5kZXgsIF90aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG5cbiAgICAgICAgICB2YXIgaXNIb3Jpem9udGFsID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgaXRlbVN0eWxlQ2FjaGVbaW5kZXhdID0gc3R5bGUgPSAoX3N0eWxlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgICAgICB9LCBfc3R5bGVbZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCddID0gaXNIb3Jpem9udGFsID8gX29mZnNldCA6IDAsIF9zdHlsZS50b3AgPSAhaXNIb3Jpem9udGFsID8gX29mZnNldCA6IDAsIF9zdHlsZS5oZWlnaHQgPSAhaXNIb3Jpem9udGFsID8gc2l6ZSA6ICcxMDAlJywgX3N0eWxlLndpZHRoID0gaXNIb3Jpem9udGFsID8gc2l6ZSA6ICcxMDAlJywgX3N0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKF8sIF9fLCBfX18pIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLl9vblNjcm9sbEhvcml6b250YWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9ldmVudCRjdXJyZW50VGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICAgIGNsaWVudFdpZHRoID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBzY3JvbGxMZWZ0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbFdpZHRoID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsV2lkdGg7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAgIGlmIChwcmV2U3RhdGUuc2Nyb2xsT2Zmc2V0ID09PSBzY3JvbGxMZWZ0KSB7XG4gICAgICAgICAgICAvLyBTY3JvbGwgcG9zaXRpb24gbWF5IGhhdmUgYmVlbiB1cGRhdGVkIGJ5IGNETS9jRFUsXG4gICAgICAgICAgICAvLyBJbiB3aGljaCBjYXNlIHdlIGRvbid0IG5lZWQgdG8gdHJpZ2dlciBhbm90aGVyIHJlbmRlcixcbiAgICAgICAgICAgIC8vIEFuZCB3ZSBkb24ndCB3YW50IHRvIHVwZGF0ZSBzdGF0ZS5pc1Njcm9sbGluZy5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBfdGhpcy5wcm9wcy5kaXJlY3Rpb247XG4gICAgICAgICAgdmFyIHNjcm9sbE9mZnNldCA9IHNjcm9sbExlZnQ7XG5cbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgICAgICAgLy8gVFJJQ0tZIEFjY29yZGluZyB0byB0aGUgc3BlYywgc2Nyb2xsTGVmdCBzaG91bGQgYmUgbmVnYXRpdmUgZm9yIFJUTCBhbGlnbmVkIGVsZW1lbnRzLlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yIGFsbCBicm93c2VycyB0aG91Z2ggKGUuZy4gQ2hyb21lIHJlcG9ydHMgdmFsdWVzIGFzIHBvc2l0aXZlLCBtZWFzdXJlZCByZWxhdGl2ZSB0byB0aGUgbGVmdCkuXG4gICAgICAgICAgICAvLyBJdCdzIGFsc28gZWFzaWVyIGZvciB0aGlzIGNvbXBvbmVudCBpZiB3ZSBjb252ZXJ0IG9mZnNldHMgdG8gdGhlIHNhbWUgZm9ybWF0IGFzIHRoZXkgd291bGQgYmUgaW4gZm9yIGx0ci5cbiAgICAgICAgICAgIC8vIFNvIHRoZSBzaW1wbGVzdCBzb2x1dGlvbiBpcyB0byBkZXRlcm1pbmUgd2hpY2ggYnJvd3NlciBiZWhhdmlvciB3ZSdyZSBkZWFsaW5nIHdpdGgsIGFuZCBjb252ZXJ0IGJhc2VkIG9uIGl0LlxuICAgICAgICAgICAgc3dpdGNoIChnZXRSVExPZmZzZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSAnbmVnYXRpdmUnOlxuICAgICAgICAgICAgICAgIHNjcm9sbE9mZnNldCA9IC1zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ3Bvc2l0aXZlLWRlc2NlbmRpbmcnOlxuICAgICAgICAgICAgICAgIHNjcm9sbE9mZnNldCA9IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSBzY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gUHJldmVudCBTYWZhcmkncyBlbGFzdGljIHNjcm9sbGluZyBmcm9tIGNhdXNpbmcgdmlzdWFsIHNoYWtpbmcgd2hlbiBzY3JvbGxpbmcgcGFzdCBib3VuZHMuXG5cblxuICAgICAgICAgIHNjcm9sbE9mZnNldCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNjcm9sbE9mZnNldCwgc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCkpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbE9mZnNldCA8IHNjcm9sbExlZnQgPyAnZm9yd2FyZCcgOiAnYmFja3dhcmQnLFxuICAgICAgICAgICAgc2Nyb2xsT2Zmc2V0OiBzY3JvbGxPZmZzZXQsXG4gICAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX29uU2Nyb2xsVmVydGljYWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9ldmVudCRjdXJyZW50VGFyZ2V0MiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgICBjbGllbnRIZWlnaHQgPSBfZXZlbnQkY3VycmVudFRhcmdldDIuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQyLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0Mi5zY3JvbGxUb3A7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAgIGlmIChwcmV2U3RhdGUuc2Nyb2xsT2Zmc2V0ID09PSBzY3JvbGxUb3ApIHtcbiAgICAgICAgICAgIC8vIFNjcm9sbCBwb3NpdGlvbiBtYXkgaGF2ZSBiZWVuIHVwZGF0ZWQgYnkgY0RNL2NEVSxcbiAgICAgICAgICAgIC8vIEluIHdoaWNoIGNhc2Ugd2UgZG9uJ3QgbmVlZCB0byB0cmlnZ2VyIGFub3RoZXIgcmVuZGVyLFxuICAgICAgICAgICAgLy8gQW5kIHdlIGRvbid0IHdhbnQgdG8gdXBkYXRlIHN0YXRlLmlzU2Nyb2xsaW5nLlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSAvLyBQcmV2ZW50IFNhZmFyaSdzIGVsYXN0aWMgc2Nyb2xsaW5nIGZyb20gY2F1c2luZyB2aXN1YWwgc2hha2luZyB3aGVuIHNjcm9sbGluZyBwYXN0IGJvdW5kcy5cblxuXG4gICAgICAgICAgdmFyIHNjcm9sbE9mZnNldCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0KSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uOiBwcmV2U3RhdGUuc2Nyb2xsT2Zmc2V0IDwgc2Nyb2xsT2Zmc2V0ID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJyxcbiAgICAgICAgICAgIHNjcm9sbE9mZnNldDogc2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIH0sIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9vdXRlclJlZlNldHRlciA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgdmFyIG91dGVyUmVmID0gX3RoaXMucHJvcHMub3V0ZXJSZWY7XG4gICAgICAgIF90aGlzLl9vdXRlclJlZiA9IHJlZjtcblxuICAgICAgICBpZiAodHlwZW9mIG91dGVyUmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb3V0ZXJSZWYocmVmKTtcbiAgICAgICAgfSBlbHNlIGlmIChvdXRlclJlZiAhPSBudWxsICYmIHR5cGVvZiBvdXRlclJlZiA9PT0gJ29iamVjdCcgJiYgb3V0ZXJSZWYuaGFzT3duUHJvcGVydHkoJ2N1cnJlbnQnKSkge1xuICAgICAgICAgIG91dGVyUmVmLmN1cnJlbnQgPSByZWY7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgICAgICBjYW5jZWxUaW1lb3V0KF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkID0gcmVxdWVzdFRpbWVvdXQoX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmcsIElTX1NDUk9MTElOR19ERUJPVU5DRV9JTlRFUlZBTCQxKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IG51bGw7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQ2xlYXIgc3R5bGUgY2FjaGUgYWZ0ZXIgc3RhdGUgdXBkYXRlIGhhcyBiZWVuIGNvbW1pdHRlZC5cbiAgICAgICAgICAvLyBUaGlzIHdheSB3ZSBkb24ndCBicmVhayBwdXJlIHNDVSBmb3IgaXRlbXMgdGhhdCBkb24ndCB1c2UgaXNTY3JvbGxpbmcgcGFyYW0uXG4gICAgICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlKC0xLCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgTGlzdC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHZhbGlkYXRlU2hhcmVkUHJvcHMkMShuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgICB2YWxpZGF0ZVByb3BzKG5leHRQcm9wcyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIF9wcm90byA9IExpc3QucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLnNjcm9sbFRvID0gZnVuY3Rpb24gc2Nyb2xsVG8oc2Nyb2xsT2Zmc2V0KSB7XG4gICAgICBzY3JvbGxPZmZzZXQgPSBNYXRoLm1heCgwLCBzY3JvbGxPZmZzZXQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIGlmIChwcmV2U3RhdGUuc2Nyb2xsT2Zmc2V0ID09PSBzY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uOiBwcmV2U3RhdGUuc2Nyb2xsT2Zmc2V0IDwgc2Nyb2xsT2Zmc2V0ID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJyxcbiAgICAgICAgICBzY3JvbGxPZmZzZXQ6IHNjcm9sbE9mZnNldCxcbiAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2Nyb2xsVG9JdGVtID0gZnVuY3Rpb24gc2Nyb2xsVG9JdGVtKGluZGV4LCBhbGlnbikge1xuICAgICAgaWYgKGFsaWduID09PSB2b2lkIDApIHtcbiAgICAgICAgYWxpZ24gPSAnYXV0byc7XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtQ291bnQgPSB0aGlzLnByb3BzLml0ZW1Db3VudDtcbiAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSB0aGlzLnN0YXRlLnNjcm9sbE9mZnNldDtcbiAgICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGl0ZW1Db3VudCAtIDEpKTtcbiAgICAgIHRoaXMuc2Nyb2xsVG8oZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQodGhpcy5wcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIHRoaXMuX2luc3RhbmNlUHJvcHMpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wczIuZGlyZWN0aW9uLFxuICAgICAgICAgIGluaXRpYWxTY3JvbGxPZmZzZXQgPSBfdGhpcyRwcm9wczIuaW5pdGlhbFNjcm9sbE9mZnNldCxcbiAgICAgICAgICBsYXlvdXQgPSBfdGhpcyRwcm9wczIubGF5b3V0O1xuXG4gICAgICBpZiAodHlwZW9mIGluaXRpYWxTY3JvbGxPZmZzZXQgPT09ICdudW1iZXInICYmIHRoaXMuX291dGVyUmVmICE9IG51bGwpIHtcbiAgICAgICAgdmFyIG91dGVyUmVmID0gdGhpcy5fb3V0ZXJSZWY7IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBpbml0aWFsU2Nyb2xsT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbFRvcCA9IGluaXRpYWxTY3JvbGxPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2FsbFByb3BzQ2FsbGJhY2tzKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wczMuZGlyZWN0aW9uLFxuICAgICAgICAgIGxheW91dCA9IF90aGlzJHByb3BzMy5sYXlvdXQ7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNjcm9sbE9mZnNldCA9IF90aGlzJHN0YXRlLnNjcm9sbE9mZnNldCxcbiAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQgPSBfdGhpcyRzdGF0ZS5zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ7XG5cbiAgICAgIGlmIChzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQgJiYgdGhpcy5fb3V0ZXJSZWYgIT0gbnVsbCkge1xuICAgICAgICB2YXIgb3V0ZXJSZWYgPSB0aGlzLl9vdXRlclJlZjsgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgIC8vIFRSSUNLWSBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNjcm9sbExlZnQgc2hvdWxkIGJlIG5lZ2F0aXZlIGZvciBSVEwgYWxpZ25lZCBlbGVtZW50cy5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgbm90IHRoZSBjYXNlIGZvciBhbGwgYnJvd3NlcnMgdGhvdWdoIChlLmcuIENocm9tZSByZXBvcnRzIHZhbHVlcyBhcyBwb3NpdGl2ZSwgbWVhc3VyZWQgcmVsYXRpdmUgdG8gdGhlIGxlZnQpLlxuICAgICAgICAgICAgLy8gU28gd2UgbmVlZCB0byBkZXRlcm1pbmUgd2hpY2ggYnJvd3NlciBiZWhhdmlvciB3ZSdyZSBkZWFsaW5nIHdpdGgsIGFuZCBtaW1pYyBpdC5cbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0UlRMT2Zmc2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgICAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gLXNjcm9sbE9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdwb3NpdGl2ZS1hc2NlbmRpbmcnOlxuICAgICAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBzY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB2YXIgY2xpZW50V2lkdGggPSBvdXRlclJlZi5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsV2lkdGggPSBvdXRlclJlZi5zY3JvbGxXaWR0aDtcbiAgICAgICAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIHNjcm9sbE9mZnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IHNjcm9sbE9mZnNldDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsVG9wID0gc2Nyb2xsT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbGxQcm9wc0NhbGxiYWNrcygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICAgIGNhbmNlbFRpbWVvdXQodGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzNC5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczQuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzNC5kaXJlY3Rpb24sXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHM0LmhlaWdodCxcbiAgICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzNC5pbm5lclJlZixcbiAgICAgICAgICBpbm5lckVsZW1lbnRUeXBlID0gX3RoaXMkcHJvcHM0LmlubmVyRWxlbWVudFR5cGUsXG4gICAgICAgICAgaW5uZXJUYWdOYW1lID0gX3RoaXMkcHJvcHM0LmlubmVyVGFnTmFtZSxcbiAgICAgICAgICBpdGVtQ291bnQgPSBfdGhpcyRwcm9wczQuaXRlbUNvdW50LFxuICAgICAgICAgIGl0ZW1EYXRhID0gX3RoaXMkcHJvcHM0Lml0ZW1EYXRhLFxuICAgICAgICAgIF90aGlzJHByb3BzNCRpdGVtS2V5ID0gX3RoaXMkcHJvcHM0Lml0ZW1LZXksXG4gICAgICAgICAgaXRlbUtleSA9IF90aGlzJHByb3BzNCRpdGVtS2V5ID09PSB2b2lkIDAgPyBkZWZhdWx0SXRlbUtleSQxIDogX3RoaXMkcHJvcHM0JGl0ZW1LZXksXG4gICAgICAgICAgbGF5b3V0ID0gX3RoaXMkcHJvcHM0LmxheW91dCxcbiAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlID0gX3RoaXMkcHJvcHM0Lm91dGVyRWxlbWVudFR5cGUsXG4gICAgICAgICAgb3V0ZXJUYWdOYW1lID0gX3RoaXMkcHJvcHM0Lm91dGVyVGFnTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzNC5zdHlsZSxcbiAgICAgICAgICB1c2VJc1Njcm9sbGluZyA9IF90aGlzJHByb3BzNC51c2VJc1Njcm9sbGluZyxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzNC53aWR0aDtcbiAgICAgIHZhciBpc1Njcm9sbGluZyA9IHRoaXMuc3RhdGUuaXNTY3JvbGxpbmc7IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG4gICAgICB2YXIgaXNIb3Jpem9udGFsID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB2YXIgb25TY3JvbGwgPSBpc0hvcml6b250YWwgPyB0aGlzLl9vblNjcm9sbEhvcml6b250YWwgOiB0aGlzLl9vblNjcm9sbFZlcnRpY2FsO1xuXG4gICAgICB2YXIgX3RoaXMkX2dldFJhbmdlVG9SZW5kID0gdGhpcy5fZ2V0UmFuZ2VUb1JlbmRlcigpLFxuICAgICAgICAgIHN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmRbMF0sXG4gICAgICAgICAgc3RvcEluZGV4ID0gX3RoaXMkX2dldFJhbmdlVG9SZW5kWzFdO1xuXG4gICAgICB2YXIgaXRlbXMgPSBbXTtcblxuICAgICAgaWYgKGl0ZW1Db3VudCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgX2luZGV4ID0gc3RhcnRJbmRleDsgX2luZGV4IDw9IHN0b3BJbmRleDsgX2luZGV4KyspIHtcbiAgICAgICAgICBpdGVtcy5wdXNoKGNyZWF0ZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgICAgIGRhdGE6IGl0ZW1EYXRhLFxuICAgICAgICAgICAga2V5OiBpdGVtS2V5KF9pbmRleCwgaXRlbURhdGEpLFxuICAgICAgICAgICAgaW5kZXg6IF9pbmRleCxcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nOiB1c2VJc1Njcm9sbGluZyA/IGlzU2Nyb2xsaW5nIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3R5bGU6IHRoaXMuX2dldEl0ZW1TdHlsZShfaW5kZXgpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFJlYWQgdGhpcyB2YWx1ZSBBRlRFUiBpdGVtcyBoYXZlIGJlZW4gY3JlYXRlZCxcbiAgICAgIC8vIFNvIHRoZWlyIGFjdHVhbCBzaXplcyAoaWYgdmFyaWFibGUpIGFyZSB0YWtlbiBpbnRvIGNvbnNpZGVyYXRpb24uXG5cblxuICAgICAgdmFyIGVzdGltYXRlZFRvdGFsU2l6ZSA9IGdldEVzdGltYXRlZFRvdGFsU2l6ZSh0aGlzLnByb3BzLCB0aGlzLl9pbnN0YW5jZVByb3BzKTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KG91dGVyRWxlbWVudFR5cGUgfHwgb3V0ZXJUYWdOYW1lIHx8ICdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBvblNjcm9sbDogb25TY3JvbGwsXG4gICAgICAgIHJlZjogdGhpcy5fb3V0ZXJSZWZTZXR0ZXIsXG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgfSwgc3R5bGUpXG4gICAgICB9LCBjcmVhdGVFbGVtZW50KGlubmVyRWxlbWVudFR5cGUgfHwgaW5uZXJUYWdOYW1lIHx8ICdkaXYnLCB7XG4gICAgICAgIGNoaWxkcmVuOiBpdGVtcyxcbiAgICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBoZWlnaHQ6IGlzSG9yaXpvbnRhbCA/ICcxMDAlJyA6IGVzdGltYXRlZFRvdGFsU2l6ZSxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBpc1Njcm9sbGluZyA/ICdub25lJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB3aWR0aDogaXNIb3Jpem9udGFsID8gZXN0aW1hdGVkVG90YWxTaXplIDogJzEwMCUnXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jYWxsUHJvcHNDYWxsYmFja3MgPSBmdW5jdGlvbiBfY2FsbFByb3BzQ2FsbGJhY2tzKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uSXRlbXNSZW5kZXJlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5wcm9wcy5pdGVtQ291bnQ7XG5cbiAgICAgICAgaWYgKGl0ZW1Db3VudCA+IDApIHtcbiAgICAgICAgICB2YXIgX3RoaXMkX2dldFJhbmdlVG9SZW5kMiA9IHRoaXMuX2dldFJhbmdlVG9SZW5kZXIoKSxcbiAgICAgICAgICAgICAgX292ZXJzY2FuU3RhcnRJbmRleCA9IF90aGlzJF9nZXRSYW5nZVRvUmVuZDJbMF0sXG4gICAgICAgICAgICAgIF9vdmVyc2NhblN0b3BJbmRleCA9IF90aGlzJF9nZXRSYW5nZVRvUmVuZDJbMV0sXG4gICAgICAgICAgICAgIF92aXNpYmxlU3RhcnRJbmRleCA9IF90aGlzJF9nZXRSYW5nZVRvUmVuZDJbMl0sXG4gICAgICAgICAgICAgIF92aXNpYmxlU3RvcEluZGV4ID0gX3RoaXMkX2dldFJhbmdlVG9SZW5kMlszXTtcblxuICAgICAgICAgIHRoaXMuX2NhbGxPbkl0ZW1zUmVuZGVyZWQoX292ZXJzY2FuU3RhcnRJbmRleCwgX292ZXJzY2FuU3RvcEluZGV4LCBfdmlzaWJsZVN0YXJ0SW5kZXgsIF92aXNpYmxlU3RvcEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBfc2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGUyLnNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICAgIF9zY3JvbGxPZmZzZXQgPSBfdGhpcyRzdGF0ZTIuc2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgICAgX3Njcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCA9IF90aGlzJHN0YXRlMi5zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ7XG5cbiAgICAgICAgdGhpcy5fY2FsbE9uU2Nyb2xsKF9zY3JvbGxEaXJlY3Rpb24sIF9zY3JvbGxPZmZzZXQsIF9zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQpO1xuICAgICAgfVxuICAgIH07IC8vIExhemlseSBjcmVhdGUgYW5kIGNhY2hlIGl0ZW0gc3R5bGVzIHdoaWxlIHNjcm9sbGluZyxcbiAgICAvLyBTbyB0aGF0IHB1cmUgY29tcG9uZW50IHNDVSB3aWxsIHByZXZlbnQgcmUtcmVuZGVycy5cbiAgICAvLyBXZSBtYWludGFpbiB0aGlzIGNhY2hlLCBhbmQgcGFzcyBhIHN0eWxlIHByb3AgcmF0aGVyIHRoYW4gaW5kZXgsXG4gICAgLy8gU28gdGhhdCBMaXN0IGNhbiBjbGVhciBjYWNoZWQgc3R5bGVzIGFuZCBmb3JjZSBpdGVtIHJlLXJlbmRlciBpZiBuZWNlc3NhcnkuXG5cblxuICAgIF9wcm90by5fZ2V0UmFuZ2VUb1JlbmRlciA9IGZ1bmN0aW9uIF9nZXRSYW5nZVRvUmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXRlbUNvdW50ID0gX3RoaXMkcHJvcHM1Lml0ZW1Db3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvdW50ID0gX3RoaXMkcHJvcHM1Lm92ZXJzY2FuQ291bnQ7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBpc1Njcm9sbGluZyA9IF90aGlzJHN0YXRlMy5pc1Njcm9sbGluZyxcbiAgICAgICAgICBzY3JvbGxEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZTMuc2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgIHNjcm9sbE9mZnNldCA9IF90aGlzJHN0YXRlMy5zY3JvbGxPZmZzZXQ7XG5cbiAgICAgIGlmIChpdGVtQ291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0SW5kZXggPSBnZXRTdGFydEluZGV4Rm9yT2Zmc2V0KHRoaXMucHJvcHMsIHNjcm9sbE9mZnNldCwgdGhpcy5faW5zdGFuY2VQcm9wcyk7XG4gICAgICB2YXIgc3RvcEluZGV4ID0gZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleCh0aGlzLnByb3BzLCBzdGFydEluZGV4LCBzY3JvbGxPZmZzZXQsIHRoaXMuX2luc3RhbmNlUHJvcHMpOyAvLyBPdmVyc2NhbiBieSBvbmUgaXRlbSBpbiBlYWNoIGRpcmVjdGlvbiBzbyB0aGF0IHRhYi9mb2N1cyB3b3Jrcy5cbiAgICAgIC8vIElmIHRoZXJlIGlzbid0IGF0IGxlYXN0IG9uZSBleHRyYSBpdGVtLCB0YWIgbG9vcHMgYmFjayBhcm91bmQuXG5cbiAgICAgIHZhciBvdmVyc2NhbkJhY2t3YXJkID0gIWlzU2Nyb2xsaW5nIHx8IHNjcm9sbERpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJyA/IE1hdGgubWF4KDEsIG92ZXJzY2FuQ291bnQpIDogMTtcbiAgICAgIHZhciBvdmVyc2NhbkZvcndhcmQgPSAhaXNTY3JvbGxpbmcgfHwgc2Nyb2xsRGlyZWN0aW9uID09PSAnZm9yd2FyZCcgPyBNYXRoLm1heCgxLCBvdmVyc2NhbkNvdW50KSA6IDE7XG4gICAgICByZXR1cm4gW01hdGgubWF4KDAsIHN0YXJ0SW5kZXggLSBvdmVyc2NhbkJhY2t3YXJkKSwgTWF0aC5tYXgoMCwgTWF0aC5taW4oaXRlbUNvdW50IC0gMSwgc3RvcEluZGV4ICsgb3ZlcnNjYW5Gb3J3YXJkKSksIHN0YXJ0SW5kZXgsIHN0b3BJbmRleF07XG4gICAgfTtcblxuICAgIHJldHVybiBMaXN0O1xuICB9KFB1cmVDb21wb25lbnQpLCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICAgIGRpcmVjdGlvbjogJ2x0cicsXG4gICAgaXRlbURhdGE6IHVuZGVmaW5lZCxcbiAgICBsYXlvdXQ6ICd2ZXJ0aWNhbCcsXG4gICAgb3ZlcnNjYW5Db3VudDogMixcbiAgICB1c2VJc1Njcm9sbGluZzogZmFsc2VcbiAgfSwgX3RlbXA7XG59IC8vIE5PVEU6IEkgY29uc2lkZXJlZCBmdXJ0aGVyIHdyYXBwaW5nIGluZGl2aWR1YWwgaXRlbXMgd2l0aCBhIHB1cmUgTGlzdEl0ZW0gY29tcG9uZW50LlxuLy8gVGhpcyB3b3VsZCBhdm9pZCBldmVyIGNhbGxpbmcgdGhlIHJlbmRlciBmdW5jdGlvbiBmb3IgdGhlIHNhbWUgaW5kZXggbW9yZSB0aGFuIG9uY2UsXG4vLyBCdXQgaXQgd291bGQgYWxzbyBhZGQgdGhlIG92ZXJoZWFkIG9mIGEgbG90IG9mIGNvbXBvbmVudHMvZmliZXJzLlxuLy8gSSBhc3N1bWUgcGVvcGxlIGFscmVhZHkgZG8gdGhpcyAocmVuZGVyIGZ1bmN0aW9uIHJldHVybmluZyBhIGNsYXNzIGNvbXBvbmVudCksXG4vLyBTbyBteSBkb2luZyBpdCB3b3VsZCBqdXN0IHVubmVjZXNzYXJpbHkgZG91YmxlIHRoZSB3cmFwcGVycy5cblxudmFyIHZhbGlkYXRlU2hhcmVkUHJvcHMkMSA9IGZ1bmN0aW9uIHZhbGlkYXRlU2hhcmVkUHJvcHMoX3JlZjIsIF9yZWYzKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuLFxuICAgICAgZGlyZWN0aW9uID0gX3JlZjIuZGlyZWN0aW9uLFxuICAgICAgaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0LFxuICAgICAgbGF5b3V0ID0gX3JlZjIubGF5b3V0LFxuICAgICAgaW5uZXJUYWdOYW1lID0gX3JlZjIuaW5uZXJUYWdOYW1lLFxuICAgICAgb3V0ZXJUYWdOYW1lID0gX3JlZjIub3V0ZXJUYWdOYW1lLFxuICAgICAgd2lkdGggPSBfcmVmMi53aWR0aDtcbiAgdmFyIGluc3RhbmNlID0gX3JlZjMuaW5zdGFuY2U7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoaW5uZXJUYWdOYW1lICE9IG51bGwgfHwgb3V0ZXJUYWdOYW1lICE9IG51bGwpIHtcbiAgICAgIGlmIChkZXZXYXJuaW5nc1RhZ05hbWUkMSAmJiAhZGV2V2FybmluZ3NUYWdOYW1lJDEuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICBkZXZXYXJuaW5nc1RhZ05hbWUkMS5hZGQoaW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBpbm5lclRhZ05hbWUgYW5kIG91dGVyVGFnTmFtZSBwcm9wcyBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gJyArICdQbGVhc2UgdXNlIHRoZSBpbm5lckVsZW1lbnRUeXBlIGFuZCBvdXRlckVsZW1lbnRUeXBlIHByb3BzIGluc3RlYWQuJyk7XG4gICAgICB9XG4gICAgfSAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICBpZiAoZGV2V2FybmluZ3NEaXJlY3Rpb24gJiYgIWRldldhcm5pbmdzRGlyZWN0aW9uLmhhcyhpbnN0YW5jZSkpIHtcbiAgICAgICAgICBkZXZXYXJuaW5nc0RpcmVjdGlvbi5hZGQoaW5zdGFuY2UpO1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGRpcmVjdGlvbiBwcm9wIHNob3VsZCBiZSBlaXRoZXIgXCJsdHJcIiAoZGVmYXVsdCkgb3IgXCJydGxcIi4gJyArICdQbGVhc2UgdXNlIHRoZSBsYXlvdXQgcHJvcCB0byBzcGVjaWZ5IFwidmVydGljYWxcIiAoZGVmYXVsdCkgb3IgXCJob3Jpem9udGFsXCIgb3JpZW50YXRpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbHRyJzpcbiAgICAgIGNhc2UgJ3J0bCc6XG4gICAgICAgIC8vIFZhbGlkIHZhbHVlc1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJkaXJlY3Rpb25cIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgZWl0aGVyIFwibHRyXCIgb3IgXCJydGxcIi4gJyArIChcIlxcXCJcIiArIGRpcmVjdGlvbiArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgY2FzZSAndmVydGljYWwnOlxuICAgICAgICAvLyBWYWxpZCB2YWx1ZXNcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGVpdGhlciBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIuICcgKyAoXCJcXFwiXCIgKyBsYXlvdXQgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImNoaWxkcmVuXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgUmVhY3QgY29tcG9uZW50LiAnICsgKFwiXFxcIlwiICsgKGNoaWxkcmVuID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGNoaWxkcmVuKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzSG9yaXpvbnRhbCAmJiB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIndpZHRoXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnSG9yaXpvbnRhbCBsaXN0cyBtdXN0IHNwZWNpZnkgYSBudW1iZXIgZm9yIHdpZHRoLiAnICsgKFwiXFxcIlwiICsgKHdpZHRoID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHdpZHRoKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfSBlbHNlIGlmICghaXNIb3Jpem9udGFsICYmIHR5cGVvZiBoZWlnaHQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImhlaWdodFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZlcnRpY2FsIGxpc3RzIG11c3Qgc3BlY2lmeSBhIG51bWJlciBmb3IgaGVpZ2h0LiAnICsgKFwiXFxcIlwiICsgKGhlaWdodCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBoZWlnaHQpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBERUZBVUxUX0VTVElNQVRFRF9JVEVNX1NJWkUkMSA9IDUwO1xuXG52YXIgZ2V0SXRlbU1ldGFkYXRhJDEgPSBmdW5jdGlvbiBnZXRJdGVtTWV0YWRhdGEocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gIHZhciBfcmVmID0gcHJvcHMsXG4gICAgICBpdGVtU2l6ZSA9IF9yZWYuaXRlbVNpemU7XG4gIHZhciBpdGVtTWV0YWRhdGFNYXAgPSBpbnN0YW5jZVByb3BzLml0ZW1NZXRhZGF0YU1hcCxcbiAgICAgIGxhc3RNZWFzdXJlZEluZGV4ID0gaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRJbmRleDtcblxuICBpZiAoaW5kZXggPiBsYXN0TWVhc3VyZWRJbmRleCkge1xuICAgIHZhciBvZmZzZXQgPSAwO1xuXG4gICAgaWYgKGxhc3RNZWFzdXJlZEluZGV4ID49IDApIHtcbiAgICAgIHZhciBpdGVtTWV0YWRhdGEgPSBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdO1xuICAgICAgb2Zmc2V0ID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSBsYXN0TWVhc3VyZWRJbmRleCArIDE7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgdmFyIHNpemUgPSBpdGVtU2l6ZShpKTtcbiAgICAgIGl0ZW1NZXRhZGF0YU1hcFtpXSA9IHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgIH07XG4gICAgICBvZmZzZXQgKz0gc2l6ZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZEluZGV4ID0gaW5kZXg7XG4gIH1cblxuICByZXR1cm4gaXRlbU1ldGFkYXRhTWFwW2luZGV4XTtcbn07XG5cbnZhciBmaW5kTmVhcmVzdEl0ZW0kMSA9IGZ1bmN0aW9uIGZpbmROZWFyZXN0SXRlbShwcm9wcywgaW5zdGFuY2VQcm9wcywgb2Zmc2V0KSB7XG4gIHZhciBpdGVtTWV0YWRhdGFNYXAgPSBpbnN0YW5jZVByb3BzLml0ZW1NZXRhZGF0YU1hcCxcbiAgICAgIGxhc3RNZWFzdXJlZEluZGV4ID0gaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRJbmRleDtcbiAgdmFyIGxhc3RNZWFzdXJlZEl0ZW1PZmZzZXQgPSBsYXN0TWVhc3VyZWRJbmRleCA+IDAgPyBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdLm9mZnNldCA6IDA7XG5cbiAgaWYgKGxhc3RNZWFzdXJlZEl0ZW1PZmZzZXQgPj0gb2Zmc2V0KSB7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBtZWFzdXJlZCBpdGVtcyB3aXRoaW4gdGhpcyByYW5nZSBqdXN0IHVzZSBhIGJpbmFyeSBzZWFyY2ggYXMgaXQncyBmYXN0ZXIuXG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbUJpbmFyeVNlYXJjaCQxKHByb3BzLCBpbnN0YW5jZVByb3BzLCBsYXN0TWVhc3VyZWRJbmRleCwgMCwgb2Zmc2V0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB3ZSBoYXZlbid0IHlldCBtZWFzdXJlZCB0aGlzIGhpZ2gsIGZhbGxiYWNrIHRvIGFuIGV4cG9uZW50aWFsIHNlYXJjaCB3aXRoIGFuIGlubmVyIGJpbmFyeSBzZWFyY2guXG4gICAgLy8gVGhlIGV4cG9uZW50aWFsIHNlYXJjaCBhdm9pZHMgcHJlLWNvbXB1dGluZyBzaXplcyBmb3IgdGhlIGZ1bGwgc2V0IG9mIGl0ZW1zIGFzIGEgYmluYXJ5IHNlYXJjaCB3b3VsZC5cbiAgICAvLyBUaGUgb3ZlcmFsbCBjb21wbGV4aXR5IGZvciB0aGlzIGFwcHJvYWNoIGlzIE8obG9nIG4pLlxuICAgIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1FeHBvbmVudGlhbFNlYXJjaCQxKHByb3BzLCBpbnN0YW5jZVByb3BzLCBNYXRoLm1heCgwLCBsYXN0TWVhc3VyZWRJbmRleCksIG9mZnNldCk7XG4gIH1cbn07XG5cbnZhciBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2gkMSA9IGZ1bmN0aW9uIGZpbmROZWFyZXN0SXRlbUJpbmFyeVNlYXJjaChwcm9wcywgaW5zdGFuY2VQcm9wcywgaGlnaCwgbG93LCBvZmZzZXQpIHtcbiAgd2hpbGUgKGxvdyA8PSBoaWdoKSB7XG4gICAgdmFyIG1pZGRsZSA9IGxvdyArIE1hdGguZmxvb3IoKGhpZ2ggLSBsb3cpIC8gMik7XG4gICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBnZXRJdGVtTWV0YWRhdGEkMShwcm9wcywgbWlkZGxlLCBpbnN0YW5jZVByb3BzKS5vZmZzZXQ7XG5cbiAgICBpZiAoY3VycmVudE9mZnNldCA9PT0gb2Zmc2V0KSB7XG4gICAgICByZXR1cm4gbWlkZGxlO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudE9mZnNldCA8IG9mZnNldCkge1xuICAgICAgbG93ID0gbWlkZGxlICsgMTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRPZmZzZXQgPiBvZmZzZXQpIHtcbiAgICAgIGhpZ2ggPSBtaWRkbGUgLSAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsb3cgPiAwKSB7XG4gICAgcmV0dXJuIGxvdyAtIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbnZhciBmaW5kTmVhcmVzdEl0ZW1FeHBvbmVudGlhbFNlYXJjaCQxID0gZnVuY3Rpb24gZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2gocHJvcHMsIGluc3RhbmNlUHJvcHMsIGluZGV4LCBvZmZzZXQpIHtcbiAgdmFyIGl0ZW1Db3VudCA9IHByb3BzLml0ZW1Db3VudDtcbiAgdmFyIGludGVydmFsID0gMTtcblxuICB3aGlsZSAoaW5kZXggPCBpdGVtQ291bnQgJiYgZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKS5vZmZzZXQgPCBvZmZzZXQpIHtcbiAgICBpbmRleCArPSBpbnRlcnZhbDtcbiAgICBpbnRlcnZhbCAqPSAyO1xuICB9XG5cbiAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbUJpbmFyeVNlYXJjaCQxKHByb3BzLCBpbnN0YW5jZVByb3BzLCBNYXRoLm1pbihpbmRleCwgaXRlbUNvdW50IC0gMSksIE1hdGguZmxvb3IoaW5kZXggLyAyKSwgb2Zmc2V0KTtcbn07XG5cbnZhciBnZXRFc3RpbWF0ZWRUb3RhbFNpemUgPSBmdW5jdGlvbiBnZXRFc3RpbWF0ZWRUb3RhbFNpemUoX3JlZjIsIF9yZWYzKSB7XG4gIHZhciBpdGVtQ291bnQgPSBfcmVmMi5pdGVtQ291bnQ7XG4gIHZhciBpdGVtTWV0YWRhdGFNYXAgPSBfcmVmMy5pdGVtTWV0YWRhdGFNYXAsXG4gICAgICBlc3RpbWF0ZWRJdGVtU2l6ZSA9IF9yZWYzLmVzdGltYXRlZEl0ZW1TaXplLFxuICAgICAgbGFzdE1lYXN1cmVkSW5kZXggPSBfcmVmMy5sYXN0TWVhc3VyZWRJbmRleDtcbiAgdmFyIHRvdGFsU2l6ZU9mTWVhc3VyZWRJdGVtcyA9IDA7IC8vIEVkZ2UgY2FzZSBjaGVjayBmb3Igd2hlbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGRlY3JlYXNlcyB3aGlsZSBhIHNjcm9sbCBpcyBpbiBwcm9ncmVzcy5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2J2YXVnaG4vcmVhY3Qtd2luZG93L3B1bGwvMTM4XG5cbiAgaWYgKGxhc3RNZWFzdXJlZEluZGV4ID49IGl0ZW1Db3VudCkge1xuICAgIGxhc3RNZWFzdXJlZEluZGV4ID0gaXRlbUNvdW50IC0gMTtcbiAgfVxuXG4gIGlmIChsYXN0TWVhc3VyZWRJbmRleCA+PSAwKSB7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGl0ZW1NZXRhZGF0YU1hcFtsYXN0TWVhc3VyZWRJbmRleF07XG4gICAgdG90YWxTaXplT2ZNZWFzdXJlZEl0ZW1zID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICB9XG5cbiAgdmFyIG51bVVubWVhc3VyZWRJdGVtcyA9IGl0ZW1Db3VudCAtIGxhc3RNZWFzdXJlZEluZGV4IC0gMTtcbiAgdmFyIHRvdGFsU2l6ZU9mVW5tZWFzdXJlZEl0ZW1zID0gbnVtVW5tZWFzdXJlZEl0ZW1zICogZXN0aW1hdGVkSXRlbVNpemU7XG4gIHJldHVybiB0b3RhbFNpemVPZk1lYXN1cmVkSXRlbXMgKyB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcztcbn07XG5cbnZhciBWYXJpYWJsZVNpemVMaXN0ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUxpc3RDb21wb25lbnQoe1xuICBnZXRJdGVtT2Zmc2V0OiBmdW5jdGlvbiBnZXRJdGVtT2Zmc2V0KHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBnZXRJdGVtTWV0YWRhdGEkMShwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpLm9mZnNldDtcbiAgfSxcbiAgZ2V0SXRlbVNpemU6IGZ1bmN0aW9uIGdldEl0ZW1TaXplKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBpbnN0YW5jZVByb3BzLml0ZW1NZXRhZGF0YU1hcFtpbmRleF0uc2l6ZTtcbiAgfSxcbiAgZ2V0RXN0aW1hdGVkVG90YWxTaXplOiBnZXRFc3RpbWF0ZWRUb3RhbFNpemUsXG4gIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50OiBmdW5jdGlvbiBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudChwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICBoZWlnaHQgPSBwcm9wcy5oZWlnaHQsXG4gICAgICAgIGxheW91dCA9IHByb3BzLmxheW91dCxcbiAgICAgICAgd2lkdGggPSBwcm9wcy53aWR0aDsgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG5cbiAgICB2YXIgaXNIb3Jpem9udGFsID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG4gICAgdmFyIHNpemUgPSBpc0hvcml6b250YWwgPyB3aWR0aCA6IGhlaWdodDtcbiAgICB2YXIgaXRlbU1ldGFkYXRhID0gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKTsgLy8gR2V0IGVzdGltYXRlZCB0b3RhbCBzaXplIGFmdGVyIEl0ZW1NZXRhZGF0YSBpcyBjb21wdXRlZCxcbiAgICAvLyBUbyBlbnN1cmUgaXQgcmVmbGVjdHMgYWN0dWFsIG1lYXN1cmVtZW50cyBpbnN0ZWFkIG9mIGp1c3QgZXN0aW1hdGVzLlxuXG4gICAgdmFyIGVzdGltYXRlZFRvdGFsU2l6ZSA9IGdldEVzdGltYXRlZFRvdGFsU2l6ZShwcm9wcywgaW5zdGFuY2VQcm9wcyk7XG4gICAgdmFyIG1heE9mZnNldCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGVzdGltYXRlZFRvdGFsU2l6ZSAtIHNpemUsIGl0ZW1NZXRhZGF0YS5vZmZzZXQpKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gTWF0aC5tYXgoMCwgaXRlbU1ldGFkYXRhLm9mZnNldCAtIHNpemUgKyBpdGVtTWV0YWRhdGEuc2l6ZSk7XG5cbiAgICBpZiAoYWxpZ24gPT09ICdzbWFydCcpIHtcbiAgICAgIGlmIChzY3JvbGxPZmZzZXQgPj0gbWluT2Zmc2V0IC0gc2l6ZSAmJiBzY3JvbGxPZmZzZXQgPD0gbWF4T2Zmc2V0ICsgc2l6ZSkge1xuICAgICAgICBhbGlnbiA9ICdhdXRvJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWduID0gJ2NlbnRlcic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuXG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuXG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChtaW5PZmZzZXQgKyAobWF4T2Zmc2V0IC0gbWluT2Zmc2V0KSAvIDIpO1xuXG4gICAgICBjYXNlICdhdXRvJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChzY3JvbGxPZmZzZXQgPj0gbWluT2Zmc2V0ICYmIHNjcm9sbE9mZnNldCA8PSBtYXhPZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gc2Nyb2xsT2Zmc2V0O1xuICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbE9mZnNldCA8IG1pbk9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9LFxuICBnZXRTdGFydEluZGV4Rm9yT2Zmc2V0OiBmdW5jdGlvbiBnZXRTdGFydEluZGV4Rm9yT2Zmc2V0KHByb3BzLCBvZmZzZXQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtJDEocHJvcHMsIGluc3RhbmNlUHJvcHMsIG9mZnNldCk7XG4gIH0sXG4gIGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXgocHJvcHMsIHN0YXJ0SW5kZXgsIHNjcm9sbE9mZnNldCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHZhciBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgIGhlaWdodCA9IHByb3BzLmhlaWdodCxcbiAgICAgICAgaXRlbUNvdW50ID0gcHJvcHMuaXRlbUNvdW50LFxuICAgICAgICBsYXlvdXQgPSBwcm9wcy5sYXlvdXQsXG4gICAgICAgIHdpZHRoID0gcHJvcHMud2lkdGg7IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBzaXplID0gaXNIb3Jpem9udGFsID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YSQxKHByb3BzLCBzdGFydEluZGV4LCBpbnN0YW5jZVByb3BzKTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gc2Nyb2xsT2Zmc2V0ICsgc2l6ZTtcbiAgICB2YXIgb2Zmc2V0ID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICAgIHZhciBzdG9wSW5kZXggPSBzdGFydEluZGV4O1xuXG4gICAgd2hpbGUgKHN0b3BJbmRleCA8IGl0ZW1Db3VudCAtIDEgJiYgb2Zmc2V0IDwgbWF4T2Zmc2V0KSB7XG4gICAgICBzdG9wSW5kZXgrKztcbiAgICAgIG9mZnNldCArPSBnZXRJdGVtTWV0YWRhdGEkMShwcm9wcywgc3RvcEluZGV4LCBpbnN0YW5jZVByb3BzKS5zaXplO1xuICAgIH1cblxuICAgIHJldHVybiBzdG9wSW5kZXg7XG4gIH0sXG4gIGluaXRJbnN0YW5jZVByb3BzOiBmdW5jdGlvbiBpbml0SW5zdGFuY2VQcm9wcyhwcm9wcywgaW5zdGFuY2UpIHtcbiAgICB2YXIgX3JlZjQgPSBwcm9wcyxcbiAgICAgICAgZXN0aW1hdGVkSXRlbVNpemUgPSBfcmVmNC5lc3RpbWF0ZWRJdGVtU2l6ZTtcbiAgICB2YXIgaW5zdGFuY2VQcm9wcyA9IHtcbiAgICAgIGl0ZW1NZXRhZGF0YU1hcDoge30sXG4gICAgICBlc3RpbWF0ZWRJdGVtU2l6ZTogZXN0aW1hdGVkSXRlbVNpemUgfHwgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFJDEsXG4gICAgICBsYXN0TWVhc3VyZWRJbmRleDogLTFcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UucmVzZXRBZnRlckluZGV4ID0gZnVuY3Rpb24gKGluZGV4LCBzaG91bGRGb3JjZVVwZGF0ZSkge1xuICAgICAgaWYgKHNob3VsZEZvcmNlVXBkYXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgc2hvdWxkRm9yY2VVcGRhdGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZEluZGV4ID0gTWF0aC5taW4oaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRJbmRleCwgaW5kZXggLSAxKTsgLy8gV2UgY291bGQgcG90ZW50aWFsbHkgb3B0aW1pemUgZnVydGhlciBieSBvbmx5IGV2aWN0aW5nIHN0eWxlcyBhZnRlciB0aGlzIGluZGV4LFxuICAgICAgLy8gQnV0IHNpbmNlIHN0eWxlcyBhcmUgb25seSBjYWNoZWQgd2hpbGUgc2Nyb2xsaW5nIGlzIGluIHByb2dyZXNzLVxuICAgICAgLy8gSXQgc2VlbXMgYW4gdW5uZWNlc3Nhcnkgb3B0aW1pemF0aW9uLlxuICAgICAgLy8gSXQncyB1bmxpa2VseSB0aGF0IHJlc2V0QWZ0ZXJJbmRleCgpIHdpbGwgYmUgY2FsbGVkIHdoaWxlIGEgdXNlciBpcyBzY3JvbGxpbmcuXG5cbiAgICAgIGluc3RhbmNlLl9nZXRJdGVtU3R5bGVDYWNoZSgtMSk7XG5cbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSkge1xuICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcztcbiAgfSxcbiAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZTogZmFsc2UsXG4gIHZhbGlkYXRlUHJvcHM6IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoX3JlZjUpIHtcbiAgICB2YXIgaXRlbVNpemUgPSBfcmVmNS5pdGVtU2l6ZTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW1TaXplICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiaXRlbVNpemVcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBmdW5jdGlvbi4gJyArIChcIlxcXCJcIiArIChpdGVtU2l6ZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBpdGVtU2l6ZSkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBGaXhlZFNpemVHcmlkID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUdyaWRDb21wb25lbnQoe1xuICBnZXRDb2x1bW5PZmZzZXQ6IGZ1bmN0aW9uIGdldENvbHVtbk9mZnNldChfcmVmLCBpbmRleCkge1xuICAgIHZhciBjb2x1bW5XaWR0aCA9IF9yZWYuY29sdW1uV2lkdGg7XG4gICAgcmV0dXJuIGluZGV4ICogY29sdW1uV2lkdGg7XG4gIH0sXG4gIGdldENvbHVtbldpZHRoOiBmdW5jdGlvbiBnZXRDb2x1bW5XaWR0aChfcmVmMiwgaW5kZXgpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmMi5jb2x1bW5XaWR0aDtcbiAgICByZXR1cm4gY29sdW1uV2lkdGg7XG4gIH0sXG4gIGdldFJvd09mZnNldDogZnVuY3Rpb24gZ2V0Um93T2Zmc2V0KF9yZWYzLCBpbmRleCkge1xuICAgIHZhciByb3dIZWlnaHQgPSBfcmVmMy5yb3dIZWlnaHQ7XG4gICAgcmV0dXJuIGluZGV4ICogcm93SGVpZ2h0O1xuICB9LFxuICBnZXRSb3dIZWlnaHQ6IGZ1bmN0aW9uIGdldFJvd0hlaWdodChfcmVmNCwgaW5kZXgpIHtcbiAgICB2YXIgcm93SGVpZ2h0ID0gX3JlZjQucm93SGVpZ2h0O1xuICAgIHJldHVybiByb3dIZWlnaHQ7XG4gIH0sXG4gIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0OiBmdW5jdGlvbiBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodChfcmVmNSkge1xuICAgIHZhciByb3dDb3VudCA9IF9yZWY1LnJvd0NvdW50LFxuICAgICAgICByb3dIZWlnaHQgPSBfcmVmNS5yb3dIZWlnaHQ7XG4gICAgcmV0dXJuIHJvd0hlaWdodCAqIHJvd0NvdW50O1xuICB9LFxuICBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoOiBmdW5jdGlvbiBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoKF9yZWY2KSB7XG4gICAgdmFyIGNvbHVtbkNvdW50ID0gX3JlZjYuY29sdW1uQ291bnQsXG4gICAgICAgIGNvbHVtbldpZHRoID0gX3JlZjYuY29sdW1uV2lkdGg7XG4gICAgcmV0dXJuIGNvbHVtbldpZHRoICogY29sdW1uQ291bnQ7XG4gIH0sXG4gIGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudDogZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9yQ29sdW1uQW5kQWxpZ25tZW50KF9yZWY3LCBjb2x1bW5JbmRleCwgYWxpZ24sIHNjcm9sbExlZnQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpIHtcbiAgICB2YXIgY29sdW1uQ291bnQgPSBfcmVmNy5jb2x1bW5Db3VudCxcbiAgICAgICAgY29sdW1uV2lkdGggPSBfcmVmNy5jb2x1bW5XaWR0aCxcbiAgICAgICAgd2lkdGggPSBfcmVmNy53aWR0aDtcbiAgICB2YXIgbGFzdENvbHVtbk9mZnNldCA9IE1hdGgubWF4KDAsIGNvbHVtbkNvdW50ICogY29sdW1uV2lkdGggLSB3aWR0aCk7XG4gICAgdmFyIG1heE9mZnNldCA9IE1hdGgubWluKGxhc3RDb2x1bW5PZmZzZXQsIGNvbHVtbkluZGV4ICogY29sdW1uV2lkdGgpO1xuICAgIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCBjb2x1bW5JbmRleCAqIGNvbHVtbldpZHRoIC0gd2lkdGggKyBzY3JvbGxiYXJTaXplICsgY29sdW1uV2lkdGgpO1xuXG4gICAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgICBpZiAoc2Nyb2xsTGVmdCA+PSBtaW5PZmZzZXQgLSB3aWR0aCAmJiBzY3JvbGxMZWZ0IDw9IG1heE9mZnNldCArIHdpZHRoKSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIC8vIFwiQ2VudGVyZWRcIiBvZmZzZXQgaXMgdXN1YWxseSB0aGUgYXZlcmFnZSBvZiB0aGUgbWluIGFuZCBtYXguXG4gICAgICAgIC8vIEJ1dCBuZWFyIHRoZSBlZGdlcyBvZiB0aGUgbGlzdCwgdGhpcyBkb2Vzbid0IGhvbGQgdHJ1ZS5cbiAgICAgICAgdmFyIG1pZGRsZU9mZnNldCA9IE1hdGgucm91bmQobWluT2Zmc2V0ICsgKG1heE9mZnNldCAtIG1pbk9mZnNldCkgLyAyKTtcblxuICAgICAgICBpZiAobWlkZGxlT2Zmc2V0IDwgTWF0aC5jZWlsKHdpZHRoIC8gMikpIHtcbiAgICAgICAgICByZXR1cm4gMDsgLy8gbmVhciB0aGUgYmVnaW5uaW5nXG4gICAgICAgIH0gZWxzZSBpZiAobWlkZGxlT2Zmc2V0ID4gbGFzdENvbHVtbk9mZnNldCArIE1hdGguZmxvb3Iod2lkdGggLyAyKSkge1xuICAgICAgICAgIHJldHVybiBsYXN0Q29sdW1uT2Zmc2V0OyAvLyBuZWFyIHRoZSBlbmRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWlkZGxlT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHNjcm9sbExlZnQgPj0gbWluT2Zmc2V0ICYmIHNjcm9sbExlZnQgPD0gbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHNjcm9sbExlZnQ7XG4gICAgICAgIH0gZWxzZSBpZiAobWluT2Zmc2V0ID4gbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgLy8gQmVjYXVzZSB3ZSBvbmx5IHRha2UgaW50byBhY2NvdW50IHRoZSBzY3JvbGxiYXIgc2l6ZSB3aGVuIGNhbGN1bGF0aW5nIG1pbk9mZnNldFxuICAgICAgICAgIC8vIHRoaXMgdmFsdWUgY2FuIGJlIGxhcmdlciB0aGFuIG1heE9mZnNldCB3aGVuIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbExlZnQgPCBtaW5PZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfSxcbiAgZ2V0T2Zmc2V0Rm9yUm93QW5kQWxpZ25tZW50OiBmdW5jdGlvbiBnZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQoX3JlZjgsIHJvd0luZGV4LCBhbGlnbiwgc2Nyb2xsVG9wLCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWY4LnJvd0hlaWdodCxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjguaGVpZ2h0LFxuICAgICAgICByb3dDb3VudCA9IF9yZWY4LnJvd0NvdW50O1xuICAgIHZhciBsYXN0Um93T2Zmc2V0ID0gTWF0aC5tYXgoMCwgcm93Q291bnQgKiByb3dIZWlnaHQgLSBoZWlnaHQpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1pbihsYXN0Um93T2Zmc2V0LCByb3dJbmRleCAqIHJvd0hlaWdodCk7XG4gICAgdmFyIG1pbk9mZnNldCA9IE1hdGgubWF4KDAsIHJvd0luZGV4ICogcm93SGVpZ2h0IC0gaGVpZ2h0ICsgc2Nyb2xsYmFyU2l6ZSArIHJvd0hlaWdodCk7XG5cbiAgICBpZiAoYWxpZ24gPT09ICdzbWFydCcpIHtcbiAgICAgIGlmIChzY3JvbGxUb3AgPj0gbWluT2Zmc2V0IC0gaGVpZ2h0ICYmIHNjcm9sbFRvcCA8PSBtYXhPZmZzZXQgKyBoZWlnaHQpIHtcbiAgICAgICAgYWxpZ24gPSAnYXV0byc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbiA9ICdjZW50ZXInO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcblxuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcblxuICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgLy8gXCJDZW50ZXJlZFwiIG9mZnNldCBpcyB1c3VhbGx5IHRoZSBhdmVyYWdlIG9mIHRoZSBtaW4gYW5kIG1heC5cbiAgICAgICAgLy8gQnV0IG5lYXIgdGhlIGVkZ2VzIG9mIHRoZSBsaXN0LCB0aGlzIGRvZXNuJ3QgaG9sZCB0cnVlLlxuICAgICAgICB2YXIgbWlkZGxlT2Zmc2V0ID0gTWF0aC5yb3VuZChtaW5PZmZzZXQgKyAobWF4T2Zmc2V0IC0gbWluT2Zmc2V0KSAvIDIpO1xuXG4gICAgICAgIGlmIChtaWRkbGVPZmZzZXQgPCBNYXRoLmNlaWwoaGVpZ2h0IC8gMikpIHtcbiAgICAgICAgICByZXR1cm4gMDsgLy8gbmVhciB0aGUgYmVnaW5uaW5nXG4gICAgICAgIH0gZWxzZSBpZiAobWlkZGxlT2Zmc2V0ID4gbGFzdFJvd09mZnNldCArIE1hdGguZmxvb3IoaGVpZ2h0IC8gMikpIHtcbiAgICAgICAgICByZXR1cm4gbGFzdFJvd09mZnNldDsgLy8gbmVhciB0aGUgZW5kXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1pZGRsZU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdhdXRvJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChzY3JvbGxUb3AgPj0gbWluT2Zmc2V0ICYmIHNjcm9sbFRvcCA8PSBtYXhPZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gc2Nyb2xsVG9wO1xuICAgICAgICB9IGVsc2UgaWYgKG1pbk9mZnNldCA+IG1heE9mZnNldCkge1xuICAgICAgICAgIC8vIEJlY2F1c2Ugd2Ugb25seSB0YWtlIGludG8gYWNjb3VudCB0aGUgc2Nyb2xsYmFyIHNpemUgd2hlbiBjYWxjdWxhdGluZyBtaW5PZmZzZXRcbiAgICAgICAgICAvLyB0aGlzIHZhbHVlIGNhbiBiZSBsYXJnZXIgdGhhbiBtYXhPZmZzZXQgd2hlbiBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxUb3AgPCBtaW5PZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfSxcbiAgZ2V0Q29sdW1uU3RhcnRJbmRleEZvck9mZnNldDogZnVuY3Rpb24gZ2V0Q29sdW1uU3RhcnRJbmRleEZvck9mZnNldChfcmVmOSwgc2Nyb2xsTGVmdCkge1xuICAgIHZhciBjb2x1bW5XaWR0aCA9IF9yZWY5LmNvbHVtbldpZHRoLFxuICAgICAgICBjb2x1bW5Db3VudCA9IF9yZWY5LmNvbHVtbkNvdW50O1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5Db3VudCAtIDEsIE1hdGguZmxvb3Ioc2Nyb2xsTGVmdCAvIGNvbHVtbldpZHRoKSkpO1xuICB9LFxuICBnZXRDb2x1bW5TdG9wSW5kZXhGb3JTdGFydEluZGV4OiBmdW5jdGlvbiBnZXRDb2x1bW5TdG9wSW5kZXhGb3JTdGFydEluZGV4KF9yZWYxMCwgc3RhcnRJbmRleCwgc2Nyb2xsTGVmdCkge1xuICAgIHZhciBjb2x1bW5XaWR0aCA9IF9yZWYxMC5jb2x1bW5XaWR0aCxcbiAgICAgICAgY29sdW1uQ291bnQgPSBfcmVmMTAuY29sdW1uQ291bnQsXG4gICAgICAgIHdpZHRoID0gX3JlZjEwLndpZHRoO1xuICAgIHZhciBsZWZ0ID0gc3RhcnRJbmRleCAqIGNvbHVtbldpZHRoO1xuICAgIHZhciBudW1WaXNpYmxlQ29sdW1ucyA9IE1hdGguY2VpbCgod2lkdGggKyBzY3JvbGxMZWZ0IC0gbGVmdCkgLyBjb2x1bW5XaWR0aCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKGNvbHVtbkNvdW50IC0gMSwgc3RhcnRJbmRleCArIG51bVZpc2libGVDb2x1bW5zIC0gMSAvLyAtMSBpcyBiZWNhdXNlIHN0b3AgaW5kZXggaXMgaW5jbHVzaXZlXG4gICAgKSk7XG4gIH0sXG4gIGdldFJvd1N0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldFJvd1N0YXJ0SW5kZXhGb3JPZmZzZXQoX3JlZjExLCBzY3JvbGxUb3ApIHtcbiAgICB2YXIgcm93SGVpZ2h0ID0gX3JlZjExLnJvd0hlaWdodCxcbiAgICAgICAgcm93Q291bnQgPSBfcmVmMTEucm93Q291bnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHJvd0NvdW50IC0gMSwgTWF0aC5mbG9vcihzY3JvbGxUb3AgLyByb3dIZWlnaHQpKSk7XG4gIH0sXG4gIGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXgoX3JlZjEyLCBzdGFydEluZGV4LCBzY3JvbGxUb3ApIHtcbiAgICB2YXIgcm93SGVpZ2h0ID0gX3JlZjEyLnJvd0hlaWdodCxcbiAgICAgICAgcm93Q291bnQgPSBfcmVmMTIucm93Q291bnQsXG4gICAgICAgIGhlaWdodCA9IF9yZWYxMi5oZWlnaHQ7XG4gICAgdmFyIHRvcCA9IHN0YXJ0SW5kZXggKiByb3dIZWlnaHQ7XG4gICAgdmFyIG51bVZpc2libGVSb3dzID0gTWF0aC5jZWlsKChoZWlnaHQgKyBzY3JvbGxUb3AgLSB0b3ApIC8gcm93SGVpZ2h0KTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93Q291bnQgLSAxLCBzdGFydEluZGV4ICsgbnVtVmlzaWJsZVJvd3MgLSAxIC8vIC0xIGlzIGJlY2F1c2Ugc3RvcCBpbmRleCBpcyBpbmNsdXNpdmVcbiAgICApKTtcbiAgfSxcbiAgaW5pdEluc3RhbmNlUHJvcHM6IGZ1bmN0aW9uIGluaXRJbnN0YW5jZVByb3BzKHByb3BzKSB7Ly8gTm9vcFxuICB9LFxuICBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlOiB0cnVlLFxuICB2YWxpZGF0ZVByb3BzOiBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKF9yZWYxMykge1xuICAgIHZhciBjb2x1bW5XaWR0aCA9IF9yZWYxMy5jb2x1bW5XaWR0aCxcbiAgICAgICAgcm93SGVpZ2h0ID0gX3JlZjEzLnJvd0hlaWdodDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGNvbHVtbldpZHRoICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImNvbHVtbldpZHRoXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgbnVtYmVyLiAnICsgKFwiXFxcIlwiICsgKGNvbHVtbldpZHRoID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGNvbHVtbldpZHRoKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygcm93SGVpZ2h0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcInJvd0hlaWdodFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIG51bWJlci4gJyArIChcIlxcXCJcIiArIChyb3dIZWlnaHQgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2Ygcm93SGVpZ2h0KSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxudmFyIEZpeGVkU2l6ZUxpc3QgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlTGlzdENvbXBvbmVudCh7XG4gIGdldEl0ZW1PZmZzZXQ6IGZ1bmN0aW9uIGdldEl0ZW1PZmZzZXQoX3JlZiwgaW5kZXgpIHtcbiAgICB2YXIgaXRlbVNpemUgPSBfcmVmLml0ZW1TaXplO1xuICAgIHJldHVybiBpbmRleCAqIGl0ZW1TaXplO1xuICB9LFxuICBnZXRJdGVtU2l6ZTogZnVuY3Rpb24gZ2V0SXRlbVNpemUoX3JlZjIsIGluZGV4KSB7XG4gICAgdmFyIGl0ZW1TaXplID0gX3JlZjIuaXRlbVNpemU7XG4gICAgcmV0dXJuIGl0ZW1TaXplO1xuICB9LFxuICBnZXRFc3RpbWF0ZWRUb3RhbFNpemU6IGZ1bmN0aW9uIGdldEVzdGltYXRlZFRvdGFsU2l6ZShfcmVmMykge1xuICAgIHZhciBpdGVtQ291bnQgPSBfcmVmMy5pdGVtQ291bnQsXG4gICAgICAgIGl0ZW1TaXplID0gX3JlZjMuaXRlbVNpemU7XG4gICAgcmV0dXJuIGl0ZW1TaXplICogaXRlbUNvdW50O1xuICB9LFxuICBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudDogZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQoX3JlZjQsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0KSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IF9yZWY0LmRpcmVjdGlvbixcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjQuaGVpZ2h0LFxuICAgICAgICBpdGVtQ291bnQgPSBfcmVmNC5pdGVtQ291bnQsXG4gICAgICAgIGl0ZW1TaXplID0gX3JlZjQuaXRlbVNpemUsXG4gICAgICAgIGxheW91dCA9IF9yZWY0LmxheW91dCxcbiAgICAgICAgd2lkdGggPSBfcmVmNC53aWR0aDtcbiAgICAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcbiAgICB2YXIgaXNIb3Jpem9udGFsID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG4gICAgdmFyIHNpemUgPSBpc0hvcml6b250YWwgPyB3aWR0aCA6IGhlaWdodDtcbiAgICB2YXIgbGFzdEl0ZW1PZmZzZXQgPSBNYXRoLm1heCgwLCBpdGVtQ291bnQgKiBpdGVtU2l6ZSAtIHNpemUpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1pbihsYXN0SXRlbU9mZnNldCwgaW5kZXggKiBpdGVtU2l6ZSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IE1hdGgubWF4KDAsIGluZGV4ICogaXRlbVNpemUgLSBzaXplICsgaXRlbVNpemUpO1xuXG4gICAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgICBpZiAoc2Nyb2xsT2Zmc2V0ID49IG1pbk9mZnNldCAtIHNpemUgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCArIHNpemUpIHtcbiAgICAgICAgYWxpZ24gPSAnYXV0byc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbiA9ICdjZW50ZXInO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcblxuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcblxuICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAge1xuICAgICAgICAgIC8vIFwiQ2VudGVyZWRcIiBvZmZzZXQgaXMgdXN1YWxseSB0aGUgYXZlcmFnZSBvZiB0aGUgbWluIGFuZCBtYXguXG4gICAgICAgICAgLy8gQnV0IG5lYXIgdGhlIGVkZ2VzIG9mIHRoZSBsaXN0LCB0aGlzIGRvZXNuJ3QgaG9sZCB0cnVlLlxuICAgICAgICAgIHZhciBtaWRkbGVPZmZzZXQgPSBNYXRoLnJvdW5kKG1pbk9mZnNldCArIChtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIC8gMik7XG5cbiAgICAgICAgICBpZiAobWlkZGxlT2Zmc2V0IDwgTWF0aC5jZWlsKHNpemUgLyAyKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7IC8vIG5lYXIgdGhlIGJlZ2lubmluZ1xuICAgICAgICAgIH0gZWxzZSBpZiAobWlkZGxlT2Zmc2V0ID4gbGFzdEl0ZW1PZmZzZXQgKyBNYXRoLmZsb29yKHNpemUgLyAyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RJdGVtT2Zmc2V0OyAvLyBuZWFyIHRoZSBlbmRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1pZGRsZU9mZnNldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnYXV0byc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoc2Nyb2xsT2Zmc2V0ID49IG1pbk9mZnNldCAmJiBzY3JvbGxPZmZzZXQgPD0gbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHNjcm9sbE9mZnNldDtcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxPZmZzZXQgPCBtaW5PZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfSxcbiAgZ2V0U3RhcnRJbmRleEZvck9mZnNldDogZnVuY3Rpb24gZ2V0U3RhcnRJbmRleEZvck9mZnNldChfcmVmNSwgb2Zmc2V0KSB7XG4gICAgdmFyIGl0ZW1Db3VudCA9IF9yZWY1Lml0ZW1Db3VudCxcbiAgICAgICAgaXRlbVNpemUgPSBfcmVmNS5pdGVtU2l6ZTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oaXRlbUNvdW50IC0gMSwgTWF0aC5mbG9vcihvZmZzZXQgLyBpdGVtU2l6ZSkpKTtcbiAgfSxcbiAgZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleDogZnVuY3Rpb24gZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleChfcmVmNiwgc3RhcnRJbmRleCwgc2Nyb2xsT2Zmc2V0KSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IF9yZWY2LmRpcmVjdGlvbixcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjYuaGVpZ2h0LFxuICAgICAgICBpdGVtQ291bnQgPSBfcmVmNi5pdGVtQ291bnQsXG4gICAgICAgIGl0ZW1TaXplID0gX3JlZjYuaXRlbVNpemUsXG4gICAgICAgIGxheW91dCA9IF9yZWY2LmxheW91dCxcbiAgICAgICAgd2lkdGggPSBfcmVmNi53aWR0aDtcbiAgICAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcbiAgICB2YXIgaXNIb3Jpem9udGFsID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCc7XG4gICAgdmFyIG9mZnNldCA9IHN0YXJ0SW5kZXggKiBpdGVtU2l6ZTtcbiAgICB2YXIgc2l6ZSA9IGlzSG9yaXpvbnRhbCA/IHdpZHRoIDogaGVpZ2h0O1xuICAgIHZhciBudW1WaXNpYmxlSXRlbXMgPSBNYXRoLmNlaWwoKHNpemUgKyBzY3JvbGxPZmZzZXQgLSBvZmZzZXQpIC8gaXRlbVNpemUpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihpdGVtQ291bnQgLSAxLCBzdGFydEluZGV4ICsgbnVtVmlzaWJsZUl0ZW1zIC0gMSAvLyAtMSBpcyBiZWNhdXNlIHN0b3AgaW5kZXggaXMgaW5jbHVzaXZlXG4gICAgKSk7XG4gIH0sXG4gIGluaXRJbnN0YW5jZVByb3BzOiBmdW5jdGlvbiBpbml0SW5zdGFuY2VQcm9wcyhwcm9wcykgey8vIE5vb3BcbiAgfSxcbiAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZTogdHJ1ZSxcbiAgdmFsaWRhdGVQcm9wczogZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhfcmVmNykge1xuICAgIHZhciBpdGVtU2l6ZSA9IF9yZWY3Lml0ZW1TaXplO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbVNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiaXRlbVNpemVcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBudW1iZXIuICcgKyAoXCJcXFwiXCIgKyAoaXRlbVNpemUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgaXRlbVNpemUpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBQdWxsZWQgZnJvbSByZWFjdC1jb21wYXRcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0LWNvbXBhdC9ibG9iLzdjNWRlMDBlN2M4NWUyZmZkMDExYmYzYWYwMjg5OWI2M2Y2OTlkM2Evc3JjL2luZGV4LmpzI0wzNDlcbmZ1bmN0aW9uIHNoYWxsb3dEaWZmZXJzKHByZXYsIG5leHQpIHtcbiAgZm9yICh2YXIgYXR0cmlidXRlIGluIHByZXYpIHtcbiAgICBpZiAoIShhdHRyaWJ1dGUgaW4gbmV4dCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIF9hdHRyaWJ1dGUgaW4gbmV4dCkge1xuICAgIGlmIChwcmV2W19hdHRyaWJ1dGVdICE9PSBuZXh0W19hdHRyaWJ1dGVdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIEl0IGtub3dzIHRvIGNvbXBhcmUgaW5kaXZpZHVhbCBzdHlsZSBwcm9wcyBhbmQgaWdub3JlIHRoZSB3cmFwcGVyIG9iamVjdC5cbi8vIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RtZW1vXG5cbmZ1bmN0aW9uIGFyZUVxdWFsKHByZXZQcm9wcywgbmV4dFByb3BzKSB7XG4gIHZhciBwcmV2U3R5bGUgPSBwcmV2UHJvcHMuc3R5bGUsXG4gICAgICBwcmV2UmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByZXZQcm9wcywgW1wic3R5bGVcIl0pO1xuXG4gIHZhciBuZXh0U3R5bGUgPSBuZXh0UHJvcHMuc3R5bGUsXG4gICAgICBuZXh0UmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKG5leHRQcm9wcywgW1wic3R5bGVcIl0pO1xuXG4gIHJldHVybiAhc2hhbGxvd0RpZmZlcnMocHJldlN0eWxlLCBuZXh0U3R5bGUpICYmICFzaGFsbG93RGlmZmVycyhwcmV2UmVzdCwgbmV4dFJlc3QpO1xufVxuXG4vLyBJdCBrbm93cyB0byBjb21wYXJlIGluZGl2aWR1YWwgc3R5bGUgcHJvcHMgYW5kIGlnbm9yZSB0aGUgd3JhcHBlciBvYmplY3QuXG4vLyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWNvbXBvbmVudC5odG1sI3Nob3VsZGNvbXBvbmVudHVwZGF0ZVxuXG5mdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgcmV0dXJuICFhcmVFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8IHNoYWxsb3dEaWZmZXJzKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XG59XG5cbmV4cG9ydCB7IFZhcmlhYmxlU2l6ZUdyaWQsIFZhcmlhYmxlU2l6ZUxpc3QsIEZpeGVkU2l6ZUdyaWQsIEZpeGVkU2l6ZUxpc3QsIGFyZUVxdWFsLCBzaG91bGRDb21wb25lbnRVcGRhdGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBfX0RFVl9fID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAoX19ERVZfXykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMSA/IGxlbiAtIDEgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAxOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDFdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkobnVsbCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXzsiXSwic291cmNlUm9vdCI6IiJ9