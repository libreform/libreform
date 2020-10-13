(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["WPLF"] = factory(require("react"));
	else
		root["WPLF"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

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
            controller = null;

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

/***/ "./assets/scripts/wplf-frontend.ts":
/*!*****************************************!*\
  !*** ./assets/scripts/wplf-frontend.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_wplf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/wplf */ "./assets/scripts/classes/wplf.ts");
/* harmony import */ var _styles_wplf_frontend_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/wplf-frontend.scss */ "./assets/styles/wplf-frontend.scss");
/* harmony import */ var _styles_wplf_frontend_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_wplf_frontend_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./assets/scripts/types.ts");



/**
 * This file is built into an UMD bundle. The default export will
 * be exposed under window.WPLF, if the resulting file is loaded via
 * <script> tag.
 *
 * If using ES modules (like this file), it can be imported as follows;
 *
 * import WPLF from '@libreform/libreform'
 */

/* harmony default export */ __webpack_exports__["default"] = (new _classes_wplf__WEBPACK_IMPORTED_MODULE_0__["default"]());

/***/ }),

/***/ "./assets/styles/wplf-frontend.scss":
/*!******************************************!*\
  !*** ./assets/styles/wplf-frontend.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ 1:
/*!*******************************************************************!*\
  !*** multi regenerator-runtime ./assets/scripts/wplf-frontend.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! /app/web/wp-content/plugins/wp-libre-form/assets/scripts/wplf-frontend.ts */"./assets/scripts/wplf-frontend.ts");


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XUExGL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9XUExGL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYtZm9ybS50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvY2xhc3Nlcy93cGxmLXN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2NsYXNzZXMvd3BsZi10YWJzLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy9jbGFzc2VzL3dwbGYudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi9jcmVhdGUtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvbGliL2Vuc3VyZS1udW0udHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi9nbG9iYWwtZGF0YS50cyIsIndlYnBhY2s6Ly9XUExGLy4vYXNzZXRzL3NjcmlwdHMvbGliL2lzLWVsZW1lbnRpc2gudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL2xpYi9sb2cudHMiLCJ3ZWJwYWNrOi8vV1BMRi8uL2Fzc2V0cy9zY3JpcHRzL3R5cGVzLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc2NyaXB0cy93cGxmLWZyb250ZW5kLnRzIiwid2VicGFjazovL1dQTEYvLi9hc3NldHMvc3R5bGVzL3dwbGYtZnJvbnRlbmQuc2NzcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL2Fib3J0LWNvbnRyb2xsZXIvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9XUExGLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9XUExGL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJSZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFPQTtBQUNBOztBQUVBLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxDQUFDLFFBQUQsRUFBc0IsTUFBdEIsRUFBMkM7QUFDM0QsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQXRCLENBRDJELENBQ2I7QUFFOUM7O0FBQ0EsTUFBSSxJQUFJLENBQUMsS0FBVCxFQUFnQjtBQUNkLFFBQUksQ0FBQyxLQUFMO0FBQ0Q7QUFDRixDQVBEOztBQVNBLElBQU0seUJBQXlCLEdB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzN1QkEsbUQiLCJmaWxlIjoid3BsZi1mcm9udGVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIldQTEZcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiV1BMRlwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImltcG9ydCBnbG9iYWxEYXRhIGZyb20gJy4uL2xpYi9nbG9iYWwtZGF0YSdcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi9saWIvY3JlYXRlLXJlcXVlc3QnXG5pbXBvcnQgbG9nIGZyb20gJy4uL2xpYi9sb2cnXG5cbmltcG9ydCBXUExGX1RhYnMgZnJvbSAnLi93cGxmLXRhYnMnXG5cbmltcG9ydCB7XG4gIFN1Ym1pdFN0YXRlLFxuICBTdWJtaXRIYW5kbGVyLFxuICBGb3JtQ2FsbGJhY2ssXG4gIExpc3QsXG4gIFN1Ym1pc3Npb25SZXNwb25zZSxcbn0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgaXNFbGVtZW50aXNoIGZyb20gJy4uL2xpYi9pcy1lbGVtZW50aXNoJ1xuaW1wb3J0IGVuc3VyZU51bSBmcm9tICcuLi9saWIvZW5zdXJlLW51bSdcblxuY29uc3QgcmVzZXRGb3JtID0gKHdwbGZGb3JtOiBXUExGX0Zvcm0sIHBhcmFtczogTGlzdDxhbnk+KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSB3cGxmRm9ybS5mb3JtIGFzIEhUTUxGb3JtRWxlbWVudCAvLyBOZWNlc3NhcnkgY2FzdFxuXG4gIC8vIFNpbmNlIGFsbCB0eXBlIGd1YXJhbnRlZXMgaGF2ZSBiZWVuIHRocm93biBvdXQgb2YgdGhlIHdpbmRvdywgaXQncyBuZWNlc3NhcnkgdG8gY2hlY2sgdGhhdCB0aGUgZWxlbWVudCBpbmRlZWQgaGFzIHRoaXMgbWV0aG9kLlxuICBpZiAoZm9ybS5yZXNldCkge1xuICAgIGZvcm0ucmVzZXQoKVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRCZWZvcmVTZW5kQ2FsbGJhY2sgPSAod3BsZkZvcm06IFdQTEZfRm9ybSwgcGFyYW1zOiBMaXN0PGFueT4pID0+IHtcbiAgaWYgKGlzRWxlbWVudGlzaCh3cGxmRm9ybS5mb3JtLnBhcmVudE5vZGUpKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHdwbGZGb3JtLmZvcm0ucGFyZW50Tm9kZVxuXG4gICAgLy8gUmVzZXQgZXJyb3IgYW5kIHN1Y2Nlc3MgbWVzc2FnZXMsIGlmIHRoZXJlIHdlcmUgYW55XG4gICAgY29uc3QgbWVzc2FnZXMgPSBwYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLndwbGYtZXJyb3JNZXNzYWdlLCAud3BsZi1zdWNjZXNzTWVzc2FnZSdcbiAgICApXG5cbiAgICBtZXNzYWdlcy5mb3JFYWNoKChlbGVtZW50OiBFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoaXNFbGVtZW50aXNoKGVsZW1lbnQucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U3VjY2Vzc0NhbGxiYWNrID0gKHdwbGZGb3JtOiBXUExGX0Zvcm0sIHBhcmFtczogTGlzdDxhbnk+KSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcGFyYW1zXG4gIGNvbnN0IHsgbWVzc2FnZSB9ID0gZGF0YVxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd3cGxmLXN1Y2Nlc3NNZXNzYWdlJylcbiAgZGl2Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAnYWZ0ZXJiZWdpbicsXG4gICAgbWVzc2FnZS5yZXBsYWNlKC9cXG4vZywgJzxiciAvPicpIC8vIE1heWJlIHRoaXMgc2hvdWxkbid0IGJlIG1vZGlmaWVkLlxuICApXG5cbiAgd3BsZkZvcm0uZm9ybS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZGl2KVxuICB3cGxmRm9ybS5mb3JtLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdHRlZCcpXG59XG5cbmNvbnN0IGRlZmF1bHRFcnJvckNhbGxiYWNrID0gKHdwbGZGb3JtOiBXUExGX0Zvcm0sIHBhcmFtczogTGlzdDxhbnk+KSA9PiB7XG4gIGNvbnN0IHsgZXJyb3IgfSA9IHBhcmFtc1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCd3cGxmLWVycm9yTWVzc2FnZScpXG4gIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBlcnJvci5tZXNzYWdlKVxuICB3cGxmRm9ybS5mb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBkaXYpXG59XG5cbmV4cG9ydCBjbGFzcyBXUExGX0Zvcm0ge1xuICBmb3JtOiBIVE1MRWxlbWVudFxuICBpZDogbnVtYmVyXG4gIHNsdWc6IHN0cmluZ1xuXG4gIHN1Ym1pdFN0YXRlOiBTdWJtaXRTdGF0ZSA9IFN1Ym1pdFN0YXRlLlVuc3VibWl0dGVkXG4gIHN1Ym1pdEhhbmRsZXI6IFN1Ym1pdEhhbmRsZXJcbiAgY2FsbGJhY2tzOiB7XG4gICAgYmVmb3JlU2VuZDogTGlzdDxGb3JtQ2FsbGJhY2s+XG4gICAgc3VjY2VzczogTGlzdDxGb3JtQ2FsbGJhY2s+XG4gICAgZXJyb3I6IExpc3Q8Rm9ybUNhbGxiYWNrPlxuICB9ID0ge1xuICAgIGJlZm9yZVNlbmQ6IHtcbiAgICAgIGRlZmF1bHQ6IGRlZmF1bHRCZWZvcmVTZW5kQ2FsbGJhY2ssXG4gICAgfSxcbiAgICBzdWNjZXNzOiB7XG4gICAgICBkZWZhdWx0OiBkZWZhdWx0U3VjY2Vzc0NhbGxiYWNrLFxuICAgICAgY2xlYXJPblN1Y2Nlc3M6IHJlc2V0Rm9ybSxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBkZWZhdWx0OiBkZWZhdWx0RXJyb3JDYWxsYmFjayxcbiAgICB9LFxuICB9XG5cbiAgdGFiczogV1BMRl9UYWJzW10gPSBbXVxuICBrZXkgPSAnJ1xuXG4gIC8vIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxGb3JtRWxlbWVudCkge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgIT09IHRydWUpIHtcbiAgICAgIC8vIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50ICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Zvcm0gZWxlbWVudCBpbnZhbGlkIG9yIG1pc3NpbmcnKVxuICAgIH1cbiAgICBjb25zdCBmYWxsYmFja0lucHV0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIl9ub2pzXCJdJylcblxuICAgIHRoaXMuZm9ybSA9IGVsZW1lbnRcbiAgICB0aGlzLmlkID0gZW5zdXJlTnVtKGVsZW1lbnQuZGF0YXNldC5mb3JtSWQgfHwgMClcbiAgICB0aGlzLnNsdWcgPSBlbGVtZW50LmRhdGFzZXQuZm9ybVNsdWcgfHwgJydcblxuICAgIHRoaXMua2V5ID0gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpXG4gICAgdGhpcy50YWJzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLndwbGYtdGFicycpKS5tYXAoXG4gICAgICAoZWwpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBXUExGX1RhYnMoZWwpXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5zdWJtaXRIYW5kbGVyID0gdGhpcy5jcmVhdGVTdWJtaXRIYW5kbGVyKClcblxuICAgIHRoaXMuYXR0YWNoU3VibWl0SGFuZGxlcigpXG5cbiAgICAvLyBSZW1vdmUgaW5wdXQgdGhhdCB0cmlnZ2VycyB0aGUgZmFsbGJhY2sgc28gd2UgZ2V0IGEgSlNPTiByZXNwb25zZVxuICAgIGlmIChmYWxsYmFja0lucHV0ICYmIGlzRWxlbWVudGlzaChmYWxsYmFja0lucHV0LnBhcmVudE5vZGUpKSB7XG4gICAgICBmYWxsYmFja0lucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmFsbGJhY2tJbnB1dClcbiAgICB9XG4gIH1cblxuICBhZGRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZvcm1DYWxsYmFjaykge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzXG4gICAgY29uc3QgeyBiZWZvcmVTZW5kLCBzdWNjZXNzLCBlcnJvciB9ID0gY2FsbGJhY2tzXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2JlZm9yZVNlbmQnOiB7XG4gICAgICAgIGJlZm9yZVNlbmRbbmFtZV0gPSBjYWxsYmFja1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdzdWNjZXNzJzoge1xuICAgICAgICBzdWNjZXNzW25hbWVdID0gY2FsbGJhY2tcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnZXJyb3InOiB7XG4gICAgICAgIGVycm9yW25hbWVdID0gY2FsbGJhY2tcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gY2FsbGJhY2sgdHlwZSAke3R5cGV9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVtb3ZlQ2FsbGJhY2sobmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrc1xuICAgIGNvbnN0IHsgYmVmb3JlU2VuZCwgc3VjY2VzcywgZXJyb3IgfSA9IGNhbGxiYWNrc1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdiZWZvcmVTZW5kJzoge1xuICAgICAgICBkZWxldGUgYmVmb3JlU2VuZFtuYW1lXVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdzdWNjZXNzJzoge1xuICAgICAgICBkZWxldGUgc3VjY2Vzc1tuYW1lXVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdlcnJvcic6IHtcbiAgICAgICAgZGVsZXRlIGVycm9yW25hbWVdXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGNhbGxiYWNrICR7bmFtZX0gJHt0eXBlfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJ1bkNhbGxiYWNrKHR5cGU6IHN0cmluZywgcGFyYW1zOiBMaXN0PGFueT4gPSB7fSkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzXG4gICAgY29uc3QgeyBiZWZvcmVTZW5kLCBzdWNjZXNzLCBlcnJvciB9ID0gY2FsbGJhY2tzXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2JlZm9yZVNlbmQnOiB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoYmVmb3JlU2VuZCkuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICBjYWxsYmFjayh0aGlzLCBwYXJhbXMpXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOiB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoc3VjY2VzcykuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICBjYWxsYmFjayh0aGlzLCBwYXJhbXMpXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzoge1xuICAgICAgICBPYmplY3QudmFsdWVzKGVycm9yKS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKHRoaXMsIHBhcmFtcylcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gY2FsbGJhY2sgJHtuYW1lfSAke3R5cGV9YClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhdHRhY2hTdWJtaXRIYW5kbGVyKCkge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN1Ym1pdEhhbmRsZXIsIHsgcGFzc2l2ZTogZmFsc2UgfSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBzdWJtaXQgaGFuZGxlciBmcm9tIHRoZSBmb3JtLCBidXQga2VlcHMgaXQgaW4gbWVtb3J5LlxuICAgKi9cbiAgcmVtb3ZlU3VibWl0SGFuZGxlcigpIHtcbiAgICB0aGlzLmZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGNyZWF0ZVN1Ym1pdEhhbmRsZXIoaGFuZGxlcj86IFN1Ym1pdEhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICB9XG5cbiAgICByZXR1cm4gYXN5bmMgKGU6IEV2ZW50KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgaWYgKHRoaXMuc3VibWl0U3RhdGUgPT09IFN1Ym1pdFN0YXRlLlN1Ym1pdHRpbmcpIHtcbiAgICAgICAgbG9nLm5vdGljZSgnUHJldmVudGluZyBkb3VibGUgZG91Ym1pc3Npb24nKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB4ID0gYXdhaXQgdGhpcy5zZW5kKClcbiAgICAgICAgY29uc3QgeyBkYXRhLCBvayB9ID0geFxuXG4gICAgICAgIGlmICgnZXJyb3InIGluIGRhdGEpIHtcbiAgICAgICAgICBsb2cuZXJyb3IoJ0ludmFsaWQgc3VibWlzc2lvbiEnLCB4KVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3IpXG4gICAgICAgIH0gZWxzZSBpZiAoIW9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IHRvIHN1Ym1pdCBmb3JtIGZhaWxlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdWJtaXRTdGF0ZSA9IFN1Ym1pdFN0YXRlLlN1Y2Nlc3NcbiAgICAgICAgICB0aGlzLnJ1bkNhbGxiYWNrKCdzdWNjZXNzJywgeyBkYXRhIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuc3VibWl0U3RhdGUgPSBTdWJtaXRTdGF0ZS5FcnJvclxuICAgICAgICB0aGlzLnJ1bkNhbGxiYWNrKCdlcnJvcicsIHsgZXJyb3IgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBzZW5kKCkge1xuICAgIGNvbnN0IGZvcm0gPSB0aGlzLmZvcm1cbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0gYXMgSFRNTEZvcm1FbGVtZW50KSAvLyBGb3JtRGF0YSBjYW4ndCBiZSBtYWRlIGZyb20gRWxlbWVudFxuXG4gICAgZ2xvYmFsRGF0YS5sYW5nICYmIGRhdGEuYXBwZW5kKCdsYW5nJywgZ2xvYmFsRGF0YS5sYW5nKVxuICAgIHRoaXMuc3VibWl0U3RhdGUgPSBTdWJtaXRTdGF0ZS5TdWJtaXR0aW5nXG5cbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdHRpbmcnKVxuICAgIHRoaXMucnVuQ2FsbGJhY2soJ2JlZm9yZVNlbmQnLCB7IGZvcm1EYXRhOiBkYXRhLCBmb3JtIH0pXG5cbiAgICBjb25zdCByZXEgPSByZXF1ZXN0PFN1Ym1pc3Npb25SZXNwb25zZT4oJy9zdWJtaXQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgfSlcblxuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc3VibWl0dGluZycpXG5cbiAgICByZXR1cm4gcmVxXG4gIH1cbn1cbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vbGliL2xvZydcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuLi90eXBlcydcblxuY2xhc3MgV1BMRl9TdG9yYWdlIHtcbiAgcHJlZml4OiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihwcmVmaXggPSAnd3BsZicpIHtcbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeFxuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkge1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByZWZpeCArIGtleSlcblxuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogZGF0YVxuXG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nLm5vdGljZShcbiAgICAgICAgYE5vIHZhbHVlIGZvdW5kIGZvciAke2tleX0sIGZhbGxpbmcgYmFjayB0byBkZWZhdWx0YCxcbiAgICAgICAgZGVmYXVsdFZhbHVlXG4gICAgICApXG5cbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgICB9XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcmVmaXggKyBrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2cuZXJyb3IoZSwga2V5LCB2YWx1ZSlcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBXUExGX1N0b3JhZ2UoKVxuIiwiaW1wb3J0IFdQTEZfU3RvcmFnZSBmcm9tICcuL3dwbGYtc3RvcmFnZSdcbmltcG9ydCBsb2cgZnJvbSAnLi4vbGliL2xvZydcbmltcG9ydCBpc0VsZW1lbnRpc2ggZnJvbSAnLi4vbGliL2lzLWVsZW1lbnRpc2gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdQTEZfVGFicyB7XG4gIHJlbWVtYmVyOiBib29sZWFuID0gZmFsc2VcbiAgYWN0aXZlVGFiOiBzdHJpbmdcbiAgcm9vdDogRWxlbWVudFxuICBuYW1lOiBzdHJpbmcgPSAnJ1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgIT09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGFiIGVsZW1lbnQgaW52YWxpZCBvciBtaXNzaW5nJylcbiAgICB9XG5cbiAgICB0aGlzLnJvb3QgPSBlbGVtZW50XG4gICAgdGhpcy5uYW1lID0gdGhpcy5yb290LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykgfHwgJydcbiAgICB0aGlzLnJlbWVtYmVyID0gdGhpcy5yb290LmdldEF0dHJpYnV0ZSgnZGF0YS1yZW1lbWJlcicpICE9PSBudWxsXG4gICAgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLnJvb3QuZ2V0QXR0cmlidXRlKCdkYXRhLWRlZmF1bHQnKSB8fCAnJ1xuXG4gICAgaWYgKCF0aGlzLnJvb3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZG9lcyB0aGlzIHdvcmsgZm9yIHRzIChpdCBkb2VzIG5vdCknKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5uYW1lIHx8ICF0aGlzLmFjdGl2ZVRhYikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBhdHRyaWJ1dGVzIGFyZSBtaXNzaW5nJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZW1lbWJlcikge1xuICAgICAgLy8gR2V0IHNhdmVkIHZhbHVlIG9yIGtlZXAgdXNpbmcgdGhlIGRlZmF1bHRcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gV1BMRl9TdG9yYWdlLmdldCh0aGlzLm5hbWUsIHRoaXMuYWN0aXZlVGFiKVxuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaCgpXG4gIH1cblxuICBoYW5kbGVDbGljayA9IChlOiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlXG5cbiAgICBpZiAoaXNFbGVtZW50aXNoKHRhcmdldCkpIHtcbiAgICAgIGNvbnN0IHRhYk5hbWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG5cbiAgICAgIGlmICh0YWJOYW1lKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoVGFiKHRhYk5hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2cubm90aWNlKCdVbmFibGUgdG8gc3dpdGNoIHRhYiBhcyBkYXRhLXRhcmdldCB3YXMgZW1wdHknKVxuICAgICAgfVxuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgYW5kIGVuc3VyZSB0aGUgY3VycmVudCB0YWIgaXMgdmlzaWJsZS5cbiAgICogQ2FsbCBhZnRlciBhZGRpbmcgYSB0YWIgZHluYW1pY2FsbHkuXG4gICAqL1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0SGFuZGxlcygpLmZvckVhY2goKGhhbmRsZSkgPT4ge1xuICAgICAgLy8gSXQncyBub3QgcG9zc2libGUgdG8gYWRkIHRoZSBzYW1lIGV2ZW50IGxpc3RlbmVyIHR3aWNlLiBJZiB0aGUgaGFuZGxlIGFscmVhZHkgaGFzIHRoZSBsaXN0ZW5lcixcbiAgICAgIC8vIHRoaXMgaXMgYSBuby1vcC5cbiAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2ssIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgICB9KVxuXG4gICAgLy8gSWYgYWN0aXZlVGFiIGlzIG51bGwsIHRoaW5ncyB3aWxsIGJyZWFrLiBGYWxsIGJhY2sgdG8gZmlyc3QgdGFiXG4gICAgLy8gYWN0aXZlVGFiIGNhbnQgYmUgbnVsbCBhbnltb3JlXG5cbiAgICAvKiAgICAgaWYgKHRoaXMuYWN0aXZlVGFiID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0YWJzID0gdGhpcy5nZXRUYWJzKClcblxuICAgICAgaWYgKHRhYnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gdGFic1swXVxuICAgICAgICBjb25zdCAuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG5cbiAgICAgIH1cblxuICAgICAgbG9nLm5vdGljZSgnYWN0aXZlVGFiIHdhcyBudWxsLCBzZXR0aW5nIGZpcnN0IHRhYiBhcyBhY3RpdmUnLCBmaXJzdClcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gZmlyc3RcbiAgICB9ICovXG5cbiAgICB0aGlzLnN3aXRjaFRhYih0aGlzLmFjdGl2ZVRhYilcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWx1ZXMgYXJlIG5vdCBjYWNoZWQgYXMgdGhleSBhcmUgcHJhY3RpY2FsbHkgZnJlZSB0byByZWNvbXB1dGUsIGJ1dFxuICAgKiBtaWdodCBiZWNvbWUgYSBtZW1vcnkgbGVhayBpZiBzdG9yZWQuXG4gICAqL1xuICBnZXRUYWJzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoYC53cGxmLXRhYnNfX3RhYltkYXRhLW5hbWU9XCIke3RoaXMubmFtZX1cIl1gKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWUgZ2V0VGFicygpXG4gICAqL1xuICBnZXRIYW5kbGVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIGAud3BsZi10YWJzX190YWJTd2l0Y2hlcltkYXRhLW5hbWU9XCIke3RoaXMubmFtZX1cIl1gXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgc3dpdGNoVGFiKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLmdldFRhYnMoKVxuICAgIGNvbnN0IGFsbEhhbmRsZXMgPSB0aGlzLmdldEhhbmRsZXMoKVxuXG4gICAgY29uc3Qgb3BlbiA9IHRhYnMuZmlsdGVyKCh0YWIpID0+IHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJykgPT09IG5hbWUpXG4gICAgY29uc3QgY2xvc2UgPSB0YWJzLmZpbHRlcigodGFiKSA9PiB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpICE9PSBuYW1lKVxuXG4gICAgb3Blbi5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGNvbnN0IHRhYk5hbWUgPSB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpXG4gICAgICBjb25zdCBoYW5kbGVzID0gYWxsSGFuZGxlcy5maWx0ZXIoXG4gICAgICAgIChoYW5kbGUpID0+IGhhbmRsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykgPT09IHRhYk5hbWVcbiAgICAgIClcblxuICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICBoYW5kbGVzLmZvckVhY2goKGhhbmRsZSkgPT4ge1xuICAgICAgICBoYW5kbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNsb3NlLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgY29uc3QgdGFiTmFtZSA9IHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJylcbiAgICAgIGNvbnN0IGhhbmRsZXMgPSBhbGxIYW5kbGVzLmZpbHRlcihcbiAgICAgICAgKGhhbmRsZSkgPT4gaGFuZGxlLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSA9PT0gdGFiTmFtZVxuICAgICAgKVxuXG4gICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIGhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlKSA9PiB7XG4gICAgICAgIGhhbmRsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMucmVtZW1iZXIpIHtcbiAgICAgIFdQTEZfU3RvcmFnZS5zZXQodGhpcy5uYW1lLCBuYW1lKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgV1BMRl9Gb3JtIH0gZnJvbSAnLi93cGxmLWZvcm0nXG5pbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuLi9saWIvZ2xvYmFsLWRhdGEnXG5cbmltcG9ydCB7IExpc3QgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBlbnN1cmVOdW0gZnJvbSAnLi4vbGliL2Vuc3VyZS1udW0nXG5pbXBvcnQgV1BMRl9UYWJzIGZyb20gJy4vd3BsZi10YWJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXUExGIHtcbiAgZm9ybXM6IExpc3Q8V1BMRl9Gb3JtPiA9IHt9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKClcbiAgfVxuXG4gIC8vIEV4cG9zZSBXUExGX0Zvcm0gYW5kIFdQTEZfVGFicyBhcyBwcm9wZXJ0aWVzIGZvciB0aGlzIGNsYXNzLlxuICAvLyBKdXN0IHRvIGFsbG93IHVzZXJzIHdobyBkb24ndCBpbnN0YWxsIHRoZSBucG0gcGFja2FnZSB0byB1c2UgdGhlc2UgdG9vOlxuICBXUExGX0Zvcm0gPSBXUExGX0Zvcm1cbiAgV1BMRl9UYWJzID0gV1BMRl9UYWJzXG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoZ2xvYmFsRGF0YS5zZXR0aW5ncy5hdXRvaW5pdCkge1xuICAgICAgY29uc3QgZm9ybXMgPSBBcnJheS5mcm9tKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignZm9ybS53cGxmJylcbiAgICAgICkubWFwKChmb3JtKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0YWNoKGZvcm0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZpbmRGb3Jtc0J5SWQoaWQ6IG51bWJlcikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmZvcm1zKS5yZWR1Y2U8V1BMRl9Gb3JtW10+KChhY2MsIGtleSkgPT4ge1xuICAgICAgY29uc3Qgd3BsZkZvcm0gPSB0aGlzLmZvcm1zW2tleV1cblxuICAgICAgaWYgKCF3cGxmRm9ybSkge1xuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG5cbiAgICAgIGlmIChpZCA9PT0gd3BsZkZvcm0uaWQpIHtcbiAgICAgICAgYWNjLnB1c2god3BsZkZvcm0pXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IGZvcm1FbCA9IHdwbGZGb3JtLmZvcm1cbiAgICAgIC8vIGNvbnN0IGZvcm1FbElkID0gZm9ybUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1mb3JtLWlkJylcblxuICAgICAgLy8gaWYgKGZvcm1FbElkICYmIGVuc3VyZU51bShmb3JtRWxJZCkgPT09IGVuc3VyZU51bShpZCkpIHtcbiAgICAgIC8vICAgYWNjLnB1c2god3BsZkZvcm0pXG4gICAgICAvLyB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCBbXSlcbiAgfVxuXG4gIGZpbmRGb3Jtc0J5U2x1ZyhzbHVnOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5mb3JtcykucmVkdWNlPFdQTEZfRm9ybVtdPigoYWNjLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHdwbGZGb3JtID0gdGhpcy5mb3Jtc1trZXldXG5cbiAgICAgIGlmICghd3BsZkZvcm0pIHtcbiAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfVxuXG4gICAgICBpZiAoIXdwbGZGb3JtKSB7XG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH1cblxuICAgICAgaWYgKHNsdWcgPT09IHdwbGZGb3JtLnNsdWcpIHtcbiAgICAgICAgYWNjLnB1c2god3BsZkZvcm0pXG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IGZvcm1FbCA9IHdwbGZGb3JtLmZvcm1cbiAgICAgIC8vIGNvbnN0IGZvcm1FbFNsdWcgPSBmb3JtRWwuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm0tc2x1ZycpXG5cbiAgICAgIC8vIGlmIChmb3JtRWxTbHVnICYmIGZvcm1FbFNsdWcgPT09IHNsdWcpIHtcbiAgICAgIC8vICAgYWNjLnB1c2god3BsZkZvcm0pXG4gICAgICAvLyB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCBbXSlcbiAgfVxuXG4gIGF0dGFjaCh4OiBIVE1MRWxlbWVudCB8IFdQTEZfRm9ybSkge1xuICAgIGlmICh4IGluc3RhbmNlb2YgV1BMRl9Gb3JtKSB7XG4gICAgICBjb25zdCB3cGxmRm9ybSA9IHhcblxuICAgICAgdGhpcy5mb3Jtc1t3cGxmRm9ybS5rZXldID0gd3BsZkZvcm1cblxuICAgICAgcmV0dXJuIHdwbGZGb3JtXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHhcblxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gYXR0YWNoIFdQTEYgdG8gZWxlbWVudCcpXG4gICAgfVxuXG4gICAgY29uc3Qgd3BsZkZvcm0gPSBuZXcgV1BMRl9Gb3JtKGVsZW1lbnQpXG4gICAgdGhpcy5mb3Jtc1t3cGxmRm9ybS5rZXldID0gd3BsZkZvcm1cblxuICAgIHdwbGZGb3JtLmZvcm0ucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpXG4gICAgd3BsZkZvcm0uZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcblxuICAgIHJldHVybiB3cGxmRm9ybVxuICB9XG5cbiAgZGV0YWNoKHdwbGZGb3JtOiBXUExGX0Zvcm0pIHtcbiAgICB0aGlzLmZvcm1zW3dwbGZGb3JtLmtleV0ucmVtb3ZlU3VibWl0SGFuZGxlcigpXG4gICAgZGVsZXRlIHRoaXMuZm9ybXNbd3BsZkZvcm0ua2V5XVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuIiwiaW1wb3J0IEFib3J0Q29udHJvbGxlciBmcm9tICdhYm9ydC1jb250cm9sbGVyJ1xuaW1wb3J0IGdsb2JhbERhdGEgZnJvbSAnLi9nbG9iYWwtZGF0YSdcbmltcG9ydCB7IExpc3QsIFJhd0FwaVJlc3BvbnNlLCBBcGlSZXNwb25zZSwgR2VuZXJpY0FwaVJlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZXMnXG5cbnR5cGUgQWJvcnRhYmxlUHJvbWlzZTxUPiA9IFByb21pc2U8VD4gJiB7IGFib3J0OiAoKSA9PiB2b2lkIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3Q8VD4oXG4gIHRhcmdldDogc3RyaW5nLFxuICBvcHRpb25zOiBQYXJ0aWFsPFJlcXVlc3RJbml0PiA9IHt9XG4pOiBBYm9ydGFibGVQcm9taXNlPFJhd0FwaVJlc3BvbnNlPFQ+PiB7XG4gIGxldCBjb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXIgfCBudWxsXG5cbiAgY29uc3QgYWJvcnQgPSAoKSA9PiB7XG4gICAgaWYgKGNvbnRyb2xsZXIgJiYgY29udHJvbGxlci5hYm9ydCkge1xuICAgICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJvbWlzZSA9IChhc3luYyAoKTogUHJvbWlzZTxSYXdBcGlSZXNwb25zZTxUPj4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGdsb2JhbERhdGEuYmFja2VuZFVybCArIHRhcmdldCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICBjcmVkZW50aWFsczogZ2xvYmFsRGF0YS5mZXRjaENyZWRlbnRpYWxzIHx8ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IGdsb2JhbERhdGEucmVxdWVzdEhlYWRlcnMgfHwge30sXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9KVxuICAgICAgY29uc3QgeyBoZWFkZXJzLCBzdGF0dXMsIHN0YXR1c1RleHQsIHVybCwgb2sgfSA9IHJlc1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIGNvbnRyb2xsZXIgPSBudWxsXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dCxcbiAgICAgICAgdXJsLFxuICAgICAgICBvayxcbiAgICAgICAgZGF0YSxcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb250cm9sbGVyID0gbnVsbFxuXG4gICAgICBpZiAoZS5uYW1lICE9PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgdGhyb3cgZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVcbiAgICB9XG4gIH0pKClcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7IGFib3J0IH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbnN1cmVOdW0oeDogc3RyaW5nIHwgbnVtYmVyLCBmbG9hdDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmbG9hdCA/IHBhcnNlRmxvYXQoeCkgOiBwYXJzZUludCh4LCAxMClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW0oeDogc3RyaW5nKSB7XG4gIGlmICh4ICYmIHgubGVuZ3RoID4gMCAmJiB4Lm1hdGNoKC9eWzAtOV0qJC8pKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuIiwiaW1wb3J0IHsgV1BMRl9Mb2NhbGl6ZURhdGEgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgKCh3aW5kb3cpOiBXUExGX0xvY2FsaXplRGF0YSA9PlxuICBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIGJhY2tlbmRVcmw6IG51bGwsXG4gICAgICBmZXRjaENyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgcmVxdWVzdEhlYWRlcnM6IHtcbiAgICAgICAgJ1gtV1AtTm9uY2UnOiBudWxsLFxuICAgICAgfSxcbiAgICAgIGFzc2V0c0RpcjogbnVsbCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGF1dG9pbml0OiB0cnVlLFxuICAgICAgICBwYXJzZUxpYnJlZm9ybVNob3J0Y29kZUluUmVzdEFwaTogdHJ1ZSxcbiAgICAgICAgaGFzVW5maWx0ZXJlZEh0bWw6IHRydWUsXG4gICAgICAgIGRlYnVnTGV2ZWw6ICdhbGwnLFxuICAgICAgfSxcbiAgICAgIHBvc3Q6IG51bGwsXG4gICAgICBpMThuOiB7XG4gICAgICAgIHByb2JsZW1zOiAnUHJvYmxlbXM6ICcsXG4gICAgICAgIGR1cGxpY2F0ZUZpZWxkTmFtZTogJ0R1cGxpY2F0ZSBmaWVsZCBuYW1lOiAnLFxuICAgICAgICBpbGxlZ2FsTmFtZTpcbiAgICAgICAgICBcIllvdSBjYW4ndCB1c2Uge25hbWV9IGFzIGEgbmFtZSwgYXMgaXQgY29uZmxpY3RzIHdpdGggYSBjb3JlIGZpZWxkIG5hbWUuXCIsXG4gICAgICAgIGZpZWxkQWxyZWFkeUV4aXN0c0luRGI6XG4gICAgICAgICAgJ0ZpZWxkIGFscmVhZHkgZXhpc3RzIGluIHRoZSBkYXRhYmFzZSB3aXRoIHRoZSB0eXBlIHt0eXBlfSwgdXNlIGEgZGlmZmVyZW50IG5hbWUgb3IgcmVtb3ZlIHRoZSBmaWVsZCBmaXJzdC4nLFxuICAgICAgICBncm91cGVkTmFtZXNOb3RTdXBwb3J0ZWRZZXQ6XG4gICAgICAgICAgJ0ZpZWxkIG5hbWVzIGxpa2UgdGhlc2UgYXJlIG5vdCBzdXBwb3J0ZWQgeWV0LiBUcnkgdXNpbmcgY2FtZWxDYXNpbmcgb3IgdW5kZXJfc2NvcmVzIGZvciBncm91cGVkIG5hbWVzIGluc3RlYWQuJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3aW5kb3cud3BsZkRhdGEgLy8gd3BfbG9jYWxpemVfc2NyaXB0XG4gICkpKHdpbmRvdylcbiIsImZ1bmN0aW9uIGlzRWxlbWVudGlzaChlOiBvYmplY3QgfCBudWxsIHwgdW5kZWZpbmVkKTogZSBpcyBFbGVtZW50IHtcbiAgcmV0dXJuIGUgPyAnZ2V0QXR0cmlidXRlJyBpbiBlICYmICd0YWdOYW1lJyBpbiBlIDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNFbGVtZW50aXNoXG4iLCJpbXBvcnQgZ2xvYmFsRGF0YSBmcm9tICcuL2dsb2JhbC1kYXRhJ1xuXG5jb25zdCB7IGRlYnVnTGV2ZWwgfSA9IGdsb2JhbERhdGEuc2V0dGluZ3NcblxuY29uc3QgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHsgbG9nKCkge30sIGVycm9yKCkge30gfSAvLyBub29wIGZhbGxiYWNrXG5jb25zdCBub3RpY2UgPSAobWVzc2FnZTogc3RyaW5nLCAuLi5wYXJhbXM6IGFueVtdKSA9PlxuICBkZWJ1Z0xldmVsID09PSAnYWxsJyAmJiBjb25zb2xlLmxvZyhgV1BMRjogJHttZXNzYWdlfWAsIHBhcmFtcylcbmNvbnN0IGVycm9yID0gKG1lc3NhZ2U6IHN0cmluZywgLi4ucGFyYW1zOiBhbnlbXSkgPT5cbiAgZGVidWdMZXZlbCAhPT0gJ25vbmUnICYmIGNvbnNvbGUuZXJyb3IoYFdQTEYgZXJyb3I6ICR7bWVzc2FnZX1gLCBwYXJhbXMpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm90aWNlLFxuICBlcnJvcixcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFdQTEZfRm9ybSB9IGZyb20gJy4vY2xhc3Nlcy93cGxmLWZvcm0nXG5cbmV4cG9ydCBlbnVtIFN1Ym1pdFN0YXRlIHtcbiAgVW5zdWJtaXR0ZWQsXG4gIFN1Ym1pdHRpbmcsXG4gIFN1Y2Nlc3MsXG4gIEVycm9yLFxufVxuZXhwb3J0IHR5cGUgU3VibWl0SGFuZGxlciA9IChldmVudDogRXZlbnQpID0+IFByb21pc2U8dm9pZD5cbmV4cG9ydCB0eXBlIEZvcm1DYWxsYmFjayA9ICh3cGxmRm9ybTogV1BMRl9Gb3JtLCBwYXJhbXM6IExpc3Q8YW55PikgPT4gdm9pZFxuXG5leHBvcnQgaW50ZXJmYWNlIFdQTEZfVGFicyB7XG4gIHJlbWVtYmVyOiBib29sZWFuXG4gIGFjdGl2ZVRhYjogbnVsbCB8IHN0cmluZ1xuICByb290OiBIVE1MRWxlbWVudFxuICBuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0PFQ+IHtcbiAgW2s6IHN0cmluZ106IFRcbn1cblxuZXhwb3J0IGVudW0gUmVzcG9uc2VUeXBlIHtcbiAgR2V0Rm9ybSA9ICdnZXRGb3JtJyxcbiAgR2V0U3VibWlzc2lvbnMgPSAnZ2V0U3VibWlzc2lvbnMnLFxuICBSZW5kZXJGb3JtID0gJ3JlbmRlckZvcm0nLFxuICBTdWJtaXRGb3JtID0gJ3N1Ym1pdEZvcm0nLFxuICBBcGlFcnJvciA9ICdhcGlFcnJvcicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3QXBpUmVzcG9uc2U8RGF0YVR5cGU+IHtcbiAgaGVhZGVyczogSGVhZGVyc1xuICBzdGF0dXM6IG51bWJlclxuICBzdGF0dXNUZXh0OiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgb2s6IGJvb2xlYW5cbiAgZGF0YTogRGF0YVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBpUmVzcG9uc2U8VEtpbmQgZXh0ZW5kcyBSZXNwb25zZVR5cGUsIFREYXRhPiA9IFJhd0FwaVJlc3BvbnNlPFxuICBURGF0YVxuPiAmIHsga2luZDogVEtpbmQgfVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaUVycm9yIHtcbiAgZXJyb3I6IHN0cmluZ1xuICBkYXRhOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgR2V0Rm9ybVJlc3BvbnNlID0gQXBpRXJyb3IgfCBGb3JtXG5leHBvcnQgdHlwZSBHZXRGb3JtQXBpUmVzcG9uc2UgPSBBcGlSZXNwb25zZTxcbiAgUmVzcG9uc2VUeXBlLkdldEZvcm0sXG4gIEdldEZvcm1SZXNwb25zZVxuPlxuXG5leHBvcnQgdHlwZSBHZXRTdWJtaXNzaW9uc1Jlc3BvbnNlID0gQXBpRXJyb3IgfCB7IGRhdGE6IFN1Ym1pc3Npb25bXSB9XG5leHBvcnQgdHlwZSBHZXRTdWJtaXNzaW9uc0FwaVJlc3BvbnNlID0gQXBpUmVzcG9uc2U8XG4gIFJlc3BvbnNlVHlwZS5HZXRTdWJtaXNzaW9ucyxcbiAgR2V0U3VibWlzc2lvbnNSZXNwb25zZVxuPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJSZXNwb25zZSA9XG4gIHwgQXBpRXJyb3JcbiAgfCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGh0bWw6IHN0cmluZ1xuICAgICAgICBmb3JtOiBGb3JtXG4gICAgICB9XG4gICAgfVxuXG5leHBvcnQgdHlwZSBSZW5kZXJGb3JtQXBpUmVzcG9uc2UgPSBBcGlSZXNwb25zZTxcbiAgUmVzcG9uc2VUeXBlLlJlbmRlckZvcm0sXG4gIFJlbmRlclJlc3BvbnNlXG4+XG4vLyBleHBvcnQgdHlwZSBSZW5kZXJGb3JtQXBpUmVzcG9uc2UgPSBBcGlSZXNwb25zZTxcbi8vICAgUmVzcG9uc2VUeXBlLlJlbmRlckZvcm0sXG4vLyAgIEFwaUVycm9yIHwgeyBodG1sOiBzdHJpbmc7IGZvcm06IEZvcm0gfVxuLy8gPlxuXG5leHBvcnQgdHlwZSBTdWJtaXNzaW9uUmVzcG9uc2UgPVxuICB8IEFwaUVycm9yXG4gIHwge1xuICAgICAgc3VibWlzc2lvbjogU3VibWlzc2lvblxuICAgICAgbWVzc2FnZTogc3RyaW5nXG4gICAgfVxuXG5leHBvcnQgdHlwZSBTdWJtaXRGb3JtQXBpUmVzcG9uc2UgPSBBcGlSZXNwb25zZTxcbiAgUmVzcG9uc2VUeXBlLlN1Ym1pdEZvcm0sXG4gIFN1Ym1pc3Npb25SZXNwb25zZVxuPlxuXG5leHBvcnQgdHlwZSBBcGlFcnJvckFwaVJlc3BvbnNlID0gQXBpUmVzcG9uc2U8UmVzcG9uc2VUeXBlLkFwaUVycm9yLCBBcGlFcnJvcj5cblxuZXhwb3J0IHR5cGUgR2VuZXJpY0FwaVJlc3BvbnNlID1cbiAgfCBHZXRGb3JtQXBpUmVzcG9uc2VcbiAgfCBHZXRTdWJtaXNzaW9uc0FwaVJlc3BvbnNlXG4gIHwgUmVuZGVyRm9ybUFwaVJlc3BvbnNlXG4gIHwgU3VibWl0Rm9ybUFwaVJlc3BvbnNlXG4gIHwgQXBpRXJyb3JBcGlSZXNwb25zZVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm0ge1xuICBJRDogbnVtYmVyXG4gIGFkZFRvTWVkaWFMaWJyYXJ5OiBib29sZWFuXG4gIGFkZGl0aW9uYWxGaWVsZHM6IHN0cmluZ1tdXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBmaWVsZHM6IEZpZWxkW11cbiAgaGlzdG9yeUZpZWxkczogTGlzdDxGaWVsZFtdPlxuICBwb3N0Q29udGFpbnNGaWxlSW5wdXRzOiBib29sZWFuXG4gIHRpdGxlOiBzdHJpbmdcbiAgdmVyc2lvbkNyZWF0ZWRBdDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VibWlzc2lvbiB7XG4gIElEOiBudW1iZXJcbiAgdGl0bGU6IHN0cmluZ1xuICB1dWlkOiBzdHJpbmdcbiAgcmVmZXJyZXI6IExpc3Q8YW55PlxuICBoaXN0b3J5SWQ6IG51bWJlclxuICBjcmVhdGVkQXQ6IHN0cmluZ1xuICBtb2RpZmllZEF0OiBzdHJpbmdcbiAgZW50cmllczogTGlzdDxhbnk+XG4gIGZvcm1GaWVsZHM6IExpc3Q8RmllbGQ+XG4gIG1ldGE6IExpc3Q8YW55PlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgbmFtZTogc3RyaW5nXG4gIHR5cGU6IHN0cmluZ1xuICByZXF1aXJlZDogYm9vbGVhblxuICBtdWx0aXBsZTogYm9vbGVhblxuICBhdHRyaWJ1dGVzOiBMaXN0PHN0cmluZz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBXUExGX0VkaXRvclN0YXRlIHtcbiAgaGlzdG9yeUZpZWxkczogTGlzdDxGaWVsZD5cbiAgLy8gZmllbGRzOiBGaWVsZFtdXG4gIGZpZWxkczogTGlzdDxGaWVsZD5cbiAgYWRkaXRpb25hbEZpZWxkczogc3RyaW5nW11cbiAgbmV3RmllbGRzOiBGaWVsZFtdXG4gIGRlbGV0ZWRGaWVsZHM6IEZpZWxkW11cbiAgYWxsb3dTYXZlOiBib29sZWFuXG4gIFtrOiBzdHJpbmddOiBhbnkgLy8gYW5kIGFueXRoaW5nIGVsc2UgeW91ciBoZWFydCBtYXkgZGVzaXJlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV1BMRl9Mb2NhbGl6ZURhdGEge1xuICBiYWNrZW5kVXJsOiBzdHJpbmdcbiAgYXNzZXRzRGlyOiBzdHJpbmdcbiAgLy8gZmV0Y2hDcmVkZW50aWFsczogc3RyaW5nXG4gIGZldGNoQ3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfCAnaW5jbHVkZScgfCAnb21pdCdcbiAgaTE4bjogTGlzdDxzdHJpbmc+XG4gIGFkbWluVXJsPzogc3RyaW5nXG4gIGxhbmc/OiBzdHJpbmdcbiAgcG9zdD86IHsgSUQ6IHN0cmluZzsgW2s6IHN0cmluZ106IGFueSB9IC8vIFdlIG9ubHkgY2FyZSBhYm91dCB0aGUgSURcbiAgcmVxdWVzdEhlYWRlcnM6IHtcbiAgICAnWC1XUC1Ob25jZSc6IHN0cmluZ1xuICAgIFtrOiBzdHJpbmddOiBhbnlcbiAgfVxuICBjb2RlTWlycm9yOiBhbnlcbiAgc2V0dGluZ3M6IHtcbiAgICBhdXRvaW5pdDogYm9vbGVhblxuICAgIGRlYnVnTGV2ZWw6IHN0cmluZ1xuICAgIGhhc1VuZmlsdGVyZWRIdG1sOiBib29sZWFuXG4gICAgcGFyc2VMaWJyZWZvcm1zU2hvcnRjb2RlSW5SZXN0QXBpOiBib29sZWFuXG4gIH1cbn1cblxud2luZG93WydSZWFjdCddID0gUmVhY3RcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvLyBSZWFjdDogUmVhY3QgLy8gQHR5cGVzL3JlYWN0IGhhcyBpdCBoYW5kbGVkIGFscmVhZHlcbiAgICAvLyBXUExGOiBXUExGIC8vIFdlJ3JlIG5vdCBnb2luZyB0byB1c2Ugb3VyIG93biBsaWJyYXJ5IGZyb20gd2luZG93XG5cbiAgICAvLyBUaGlzIGNvbWVzIGZyb20gV29yZFByZXNzXG4gICAgd3BsZkRhdGE6IFdQTEZfTG9jYWxpemVEYXRhXG5cbiAgICAvLyBTb21lIFdQIGdsb2JhbHMgdGhhdCB3ZSBkb24ndCBoYXZlIHR5cGVzIGZvclxuICAgIGpRdWVyeTogYW55IC8vIFdQIHVzZXMgMS4xMi40LCB0aGVyZSdzIG5vIEB0eXBlcy9qcXVlcnlAMS4xMi40XG4gICAgLy8gXzogYW55LCAvLyBAdHlwZXMvdW5kZXJzY29yZUAxLjguM1xuICAgIHdwOiBhbnlcbiAgfVxufVxuIiwiaW1wb3J0IFdQTEYgZnJvbSAnLi9jbGFzc2VzL3dwbGYnXG5pbXBvcnQgJy4uL3N0eWxlcy93cGxmLWZyb250ZW5kLnNjc3MnXG5cbmltcG9ydCAnLi90eXBlcydcblxuLyoqXG4gKiBUaGlzIGZpbGUgaXMgYnVpbHQgaW50byBhbiBVTUQgYnVuZGxlLiBUaGUgZGVmYXVsdCBleHBvcnQgd2lsbFxuICogYmUgZXhwb3NlZCB1bmRlciB3aW5kb3cuV1BMRiwgaWYgdGhlIHJlc3VsdGluZyBmaWxlIGlzIGxvYWRlZCB2aWFcbiAqIDxzY3JpcHQ+IHRhZy5cbiAqXG4gKiBJZiB1c2luZyBFUyBtb2R1bGVzIChsaWtlIHRoaXMgZmlsZSksIGl0IGNhbiBiZSBpbXBvcnRlZCBhcyBmb2xsb3dzO1xuICpcbiAqIGltcG9ydCBXUExGIGZyb20gJ0BsaWJyZWZvcm0vbGlicmVmb3JtJ1xuICovXG5leHBvcnQgZGVmYXVsdCBuZXcgV1BMRigpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKmdsb2JhbHMgc2VsZiwgd2luZG93ICovXG5cInVzZSBzdHJpY3RcIlxuXG4vKmVzbGludC1kaXNhYmxlIEBteXN0aWNhdGVhL3ByZXR0aWVyICovXG5jb25zdCB7IEFib3J0Q29udHJvbGxlciwgQWJvcnRTaWduYWwgfSA9XG4gICAgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDpcbiAgICAvKiBvdGhlcndpc2UgKi8gdW5kZWZpbmVkXG4vKmVzbGludC1lbmFibGUgQG15c3RpY2F0ZWEvcHJldHRpZXIgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBBYm9ydENvbnRyb2xsZXJcbm1vZHVsZS5leHBvcnRzLkFib3J0U2lnbmFsID0gQWJvcnRTaWduYWxcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBBYm9ydENvbnRyb2xsZXJcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187Il0sInNvdXJjZVJvb3QiOiIifQ==