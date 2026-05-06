(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-variants-viewer-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js"
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsClipboardWriteSupported: () => (/* binding */ checkIsClipboardWriteSupported),
/* harmony export */   isChrome: () => (/* binding */ isChrome),
/* harmony export */   isEdge: () => (/* binding */ isEdge),
/* harmony export */   isFirefox: () => (/* binding */ isFirefox),
/* harmony export */   isSafari: () => (/* binding */ isSafari)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var userAgent = window.navigator.userAgent;
var isEdge = function isEdge() {
  return userAgent.includes('Edg');
}; // Edge previously had Edge but they changed to Edg
var isChrome = function isChrome() {
  return userAgent.includes('Chrome') && !isEdge();
};
var isFirefox = function isFirefox() {
  return userAgent.includes('Firefox');
};
var isSafari = function isSafari() {
  return userAgent.includes('Safari') && !isChrome() && !isEdge();
};
var checkIsClipboardWriteSupported = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var _navigator$clipboard;
    var isClipboardWriteSupported;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if ((_navigator$clipboard = navigator.clipboard) !== null && _navigator$clipboard !== void 0 && _navigator$clipboard.writeText) {
            _context.n = 1;
            break;
          }
          return _context.a(2, false);
        case 1:
          _context.n = 2;
          return checkGrantedPermissions('clipboard-write');
        case 2:
          isClipboardWriteSupported = _context.v;
          return _context.a(2, isClipboardWriteSupported);
      }
    }, _callee);
  }));
  return function checkIsClipboardWriteSupported() {
    return _ref.apply(this, arguments);
  };
}();
var checkGrantedPermissions = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(permissionName) {
    var result, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return navigator.permissions.query({
            name: permissionName
          });
        case 1:
          result = _context2.v;
          return _context2.a(2, result.state === 'granted');
        case 2:
          _context2.p = 2;
          _t = _context2.v;
          console.warn("Permission check failed for \"".concat(permissionName, "\":"), _t.message);
          return _context2.a(2, false);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function checkGrantedPermissions(_x) {
    return _ref2.apply(this, arguments);
  };
}();


/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js"
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SYSTEM_ROOT_LOCATION: () => (/* binding */ SYSTEM_ROOT_LOCATION),
/* harmony export */   SYSTEM_ROOT_LOCATION_ID: () => (/* binding */ SYSTEM_ROOT_LOCATION_ID),
/* harmony export */   SYSTEM_ROOT_LOCATION_PATH: () => (/* binding */ SYSTEM_ROOT_LOCATION_PATH),
/* harmony export */   getAdminUiConfig: () => (/* binding */ getAdminUiConfig),
/* harmony export */   getBootstrap: () => (/* binding */ getBootstrap),
/* harmony export */   getFlatpickr: () => (/* binding */ getFlatpickr),
/* harmony export */   getMoment: () => (/* binding */ getMoment),
/* harmony export */   getPopper: () => (/* binding */ getPopper),
/* harmony export */   getRestInfo: () => (/* binding */ getRestInfo),
/* harmony export */   getRootDOMElement: () => (/* binding */ getRootDOMElement),
/* harmony export */   getRouting: () => (/* binding */ getRouting),
/* harmony export */   getTranslator: () => (/* binding */ getTranslator),
/* harmony export */   isExternalInstance: () => (/* binding */ isExternalInstance),
/* harmony export */   setAdminUiConfig: () => (/* binding */ setAdminUiConfig),
/* harmony export */   setBootstrap: () => (/* binding */ setBootstrap),
/* harmony export */   setFlatpickr: () => (/* binding */ setFlatpickr),
/* harmony export */   setMoment: () => (/* binding */ setMoment),
/* harmony export */   setPopper: () => (/* binding */ setPopper),
/* harmony export */   setRestInfo: () => (/* binding */ setRestInfo),
/* harmony export */   setRootDOMElement: () => (/* binding */ setRootDOMElement),
/* harmony export */   setRouting: () => (/* binding */ setRouting),
/* harmony export */   setTranslator: () => (/* binding */ setTranslator)
/* harmony export */ });
var _window$ibexa, _document$querySelect, _document$querySelect2;
var _window = window,
  bootstrap = _window.bootstrap,
  flatpickr = _window.flatpickr,
  moment = _window.moment,
  Popper = _window.Popper,
  Routing = _window.Routing,
  Translator = _window.Translator;
var adminUiConfig = (_window$ibexa = window.ibexa) === null || _window$ibexa === void 0 ? void 0 : _window$ibexa.adminUiConfig;
var rootDOMElement = document.body;
var restInfo = {
  accessToken: null,
  instanceUrl: window.location.origin,
  token: (_document$querySelect = document.querySelector('meta[name="CSRF-Token"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content,
  siteaccess: (_document$querySelect2 = document.querySelector('meta[name="SiteAccess"]')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.content
};
var SYSTEM_ROOT_LOCATION_ID = 1;
var SYSTEM_ROOT_LOCATION_PATH = "/".concat(SYSTEM_ROOT_LOCATION_ID, "/");
var SYSTEM_ROOT_LOCATION = {
  pathString: SYSTEM_ROOT_LOCATION_PATH
};
var setRestInfo = function setRestInfo(_ref) {
  var instanceUrl = _ref.instanceUrl,
    accessToken = _ref.accessToken,
    token = _ref.token,
    siteaccess = _ref.siteaccess;
  restInfo.instanceUrl = instanceUrl !== null && instanceUrl !== void 0 ? instanceUrl : restInfo.instanceUrl;
  restInfo.accessToken = accessToken !== null && accessToken !== void 0 ? accessToken : restInfo.accessToken;
  restInfo.token = token !== null && token !== void 0 ? token : restInfo.token;
  restInfo.siteaccess = siteaccess !== null && siteaccess !== void 0 ? siteaccess : restInfo.siteaccess;
};
var setAdminUiConfig = function setAdminUiConfig(loadedAdminUiConfig) {
  return adminUiConfig = loadedAdminUiConfig;
};
var setBootstrap = function setBootstrap(bootstrapInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!bootstrap || forceSet) {
    bootstrap = bootstrapInstance;
  }
};
var setFlatpickr = function setFlatpickr(flatpickrInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!flatpickr || forceSet) {
    flatpickr = flatpickrInstance;
  }
};
var setMoment = function setMoment(momentInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!moment || forceSet) {
    moment = momentInstance;
  }
};
var setPopper = function setPopper(PopperInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Popper || forceSet) {
    Popper = PopperInstance;
  }
};
var setRouting = function setRouting(RoutingInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Routing || forceSet) {
    Routing = RoutingInstance;
  }
};
var setTranslator = function setTranslator(TranslatorInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Translator || forceSet) {
    Translator = TranslatorInstance;
  }
};
var setRootDOMElement = function setRootDOMElement(rootDOMElementParam) {
  return rootDOMElement = rootDOMElementParam;
};
var getAdminUiConfig = function getAdminUiConfig() {
  return adminUiConfig;
};
var getBootstrap = function getBootstrap() {
  return bootstrap;
};
var getFlatpickr = function getFlatpickr() {
  return flatpickr;
};
var getMoment = function getMoment() {
  return moment;
};
var getPopper = function getPopper() {
  return Popper;
};
var getRouting = function getRouting() {
  return Routing;
};
var getTranslator = function getTranslator() {
  return Translator;
};
var getRestInfo = function getRestInfo() {
  return restInfo;
};
var getRootDOMElement = function getRootDOMElement() {
  return rootDOMElement;
};
var isExternalInstance = function isExternalInstance() {
  var instanceUrl = restInfo.instanceUrl;
  return window.origin !== instanceUrl;
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIconPath: () => (/* binding */ getIconPath)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var getIconPath = function getIconPath(path, iconSet) {
  var adminUiConfig = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)();
  if (!iconSet) {
    iconSet = adminUiConfig.iconPaths.defaultIconSet;
  }
  var iconSetPath = adminUiConfig.iconPaths.iconSets[iconSet];
  return "".concat(iconSetPath, "#").concat(path);
};


/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/pagination.helper.js"
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/pagination.helper.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computePages: () => (/* binding */ computePages)
/* harmony export */ });
/**
 * Computes array with pagination pages.
 *
 * Example 1: [ 1, "...", 5, 6, 7, 8, 9, 10 ] (for: proximity = 2; pagesNumber = 10; activePageIndex = 7)
 * Example 2: [ 1, "...", 3, 4, 5, 6, 7, "...", 10 ] (for: proximity = 2; pagesNumber = 10; activePageIndex = 5)
 * Example 3: [ 1, "...", 8, 9, 10, 11, 12, "...", 20 ] (for: proximity = 2; pagesNumber = 20; activePageIndex = 10)
 *
 * @param {Object} params
 * @param {Number} params.proximity
 * @param {Number} params.activePageIndex
 * @param {Number} params.pagesCount
 * @param {String} params.separator
 *
 * @returns {Array}
 */
var computePages = function computePages(_ref) {
  var _ref$proximity = _ref.proximity,
    proximity = _ref$proximity === void 0 ? 2 : _ref$proximity,
    activePageIndex = _ref.activePageIndex,
    pagesCount = _ref.pagesCount,
    _ref$separator = _ref.separator,
    separator = _ref$separator === void 0 ? '...' : _ref$separator;
  var pages = [];
  var wasSeparator = false;
  for (var i = 1; i <= pagesCount; i++) {
    var isFirstPage = i === 1;
    var isLastPage = i === pagesCount;
    var isInRange = i >= activePageIndex + 1 - proximity && i <= activePageIndex + 1 + proximity;
    if (isFirstPage || isLastPage || isInRange) {
      pages.push(i);
      wasSeparator = false;
    } else if (!wasSeparator) {
      pages.push(separator);
      wasSeparator = true;
    }
  }
  return pages;
};


/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js"
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getJsonFromResponse: () => (/* binding */ getJsonFromResponse),
/* harmony export */   getRequestHeaders: () => (/* binding */ getRequestHeaders),
/* harmony export */   getRequestMode: () => (/* binding */ getRequestMode),
/* harmony export */   getStatusFromResponse: () => (/* binding */ getStatusFromResponse),
/* harmony export */   getTextFromResponse: () => (/* binding */ getTextFromResponse)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var defaultGetErrorMessage = function defaultGetErrorMessage() {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return error.errorMessage;
};
var getErrorMessageObject = function getErrorMessageObject(response) {
  var responseErrorMessage = response.json().then(function (jsonResponse) {
    var _jsonResponse$ErrorMe;
    return (_jsonResponse$ErrorMe = jsonResponse.ErrorMessage) !== null && _jsonResponse$ErrorMe !== void 0 ? _jsonResponse$ErrorMe : jsonResponse;
  });
  return responseErrorMessage;
};
var handleRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(response) {
    var getErrorMessage,
      Translator,
      responseErrorMessageObject,
      errorMessage,
      defaultErrorMsg,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          getErrorMessage = _args.length > 1 && _args[1] !== undefined ? _args[1] : defaultGetErrorMessage;
          if (response.ok) {
            _context.n = 2;
            break;
          }
          Translator = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
          _context.n = 1;
          return getErrorMessageObject(response);
        case 1:
          responseErrorMessageObject = _context.v;
          errorMessage = getErrorMessage(responseErrorMessageObject) || response.statusText;
          defaultErrorMsg = Translator.trans(/*@Desc("Something went wrong. Try to refresh the page or contact your administrator.")*/'error.request.default_msg');
          throw Error(errorMessage || defaultErrorMsg);
        case 2:
          return _context.a(2, response);
      }
    }, _callee);
  }));
  return function handleRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getJsonFromResponse = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(response, getErrorMessage) {
    var parsedRequest;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return handleRequest(response, getErrorMessage);
        case 1:
          parsedRequest = _context2.v;
          return _context2.a(2, parsedRequest.json());
      }
    }, _callee2);
  }));
  return function getJsonFromResponse(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var getTextFromResponse = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(response) {
    var parsedRequest;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return handleRequest(response);
        case 1:
          parsedRequest = _context3.v;
          return _context3.a(2, parsedRequest.text());
      }
    }, _callee3);
  }));
  return function getTextFromResponse(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var getStatusFromResponse = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(response) {
    var parsedRequest;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return handleRequest(response);
        case 1:
          parsedRequest = _context4.v;
          return _context4.a(2, parsedRequest.status);
      }
    }, _callee4);
  }));
  return function getStatusFromResponse(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
var getRequestMode = function getRequestMode(_ref5) {
  var instanceUrl = _ref5.instanceUrl;
  return window.location.origin === instanceUrl ? 'same-origin' : 'cors';
};
var getRequestHeaders = function getRequestHeaders(_ref6) {
  var token = _ref6.token,
    siteaccess = _ref6.siteaccess,
    accessToken = _ref6.accessToken,
    extraHeaders = _ref6.extraHeaders;
  if (accessToken) {
    return _objectSpread(_objectSpread({
      Authorization: "Bearer ".concat(accessToken)
    }, siteaccess && {
      'X-Siteaccess': siteaccess
    }), extraHeaders);
  }
  return _objectSpread(_objectSpread(_objectSpread({}, token && {
    'X-CSRF-Token': token
  }), siteaccess && {
    'X-Siteaccess': siteaccess
  }), extraHeaders);
};


/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js"
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOOLTIPS_DEFAULTS_PARAMS: () => (/* binding */ TOOLTIPS_DEFAULTS_PARAMS),
/* harmony export */   hideAll: () => (/* binding */ hideAll),
/* harmony export */   observe: () => (/* binding */ observe),
/* harmony export */   parse: () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _browser_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js");
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var _window = window,
  doc = _window.document;
var TOOLTIPS_SELECTOR = '[title], [data-tooltip-title]';
var TOOLTIPS_DEFAULTS_PARAMS = {
  delay: {
    show: 150,
    hide: 75
  },
  placement: 'bottom',
  trigger: 'hover',
  useHtml: false,
  template: function template() {
    var extraClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return "<div class=\"tooltip ibexa-tooltip ".concat(extraClass, "\">\n        <div class=\"tooltip-arrow ibexa-tooltip__arrow\"></div>\n        <div class=\"tooltip-inner ibexa-tooltip__inner\"></div>\n    </div>");
  }
};
var observerConfig = {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['title', 'data-tooltip-title', 'data-tooltip-extra-class', 'data-tooltip-manual-reparsing']
};
var resizeEllipsisObserver = new ResizeObserver(function (entries) {
  entries.forEach(function (entry) {
    parse(entry.target);
  });
});
var observer = new MutationObserver(function (mutationsList) {
  var bootstrap = (0,_context_helper__WEBPACK_IMPORTED_MODULE_1__.getBootstrap)();
  mutationsList.forEach(function (mutation) {
    var type = mutation.type,
      target = mutation.target,
      addedNodes = mutation.addedNodes,
      removedNodes = mutation.removedNodes;
    if (type === 'attributes') {
      var tooltipManualReparsing = target.dataset.tooltipManualReparsing;
      if (!tooltipManualReparsing) {
        parse(target.parentElement);
      }
    }
    addedNodes.forEach(function (addedNode) {
      if (addedNode instanceof Element && !(addedNode !== null && addedNode !== void 0 && addedNode.classList.contains('ibexa-tooltip'))) {
        parse(addedNode);
      }
    });
    removedNodes.forEach(function (removedNode) {
      if (removedNode.classList && !removedNode.classList.contains('ibexa-tooltip')) {
        var triggeredNodes = removedNode.querySelectorAll("[data-bs-original-title]");
        triggeredNodes.forEach(function (triggerBtn) {
          var _tooltipInstance$tip;
          var tooltipInstance = bootstrap.Tooltip.getOrCreateInstance(triggerBtn);
          tooltipInstance === null || tooltipInstance === void 0 || (_tooltipInstance$tip = tooltipInstance.tip) === null || _tooltipInstance$tip === void 0 || _tooltipInstance$tip.remove();
        });
      }
    });
  });
});
var modifyPopperConfig = function modifyPopperConfig(iframe, defaultBsPopperConfig) {
  if (!iframe) {
    return defaultBsPopperConfig;
  }
  var iframeDOMRect = iframe.getBoundingClientRect();
  var offsetX = iframeDOMRect.x;
  var offsetY = iframeDOMRect.y;
  var offsetModifier = {
    name: 'offset',
    options: {
      offset: function offset(_ref) {
        var placement = _ref.placement;
        var _placement$split = placement.split('-'),
          _placement$split2 = _slicedToArray(_placement$split, 1),
          basePlacement = _placement$split2[0];
        switch (basePlacement) {
          case 'top':
            return [offsetX, -offsetY];
          case 'bottom':
            return [offsetX, offsetY];
          case 'right':
            return [offsetY, offsetX];
          case 'left':
            return [offsetY, -offsetX];
          default:
            return [];
        }
      }
    }
  };
  var offsetModifierIndex = defaultBsPopperConfig.modifiers.findIndex(function (modifier) {
    return modifier.name == 'offset';
  });
  if (offsetModifierIndex != -1) {
    defaultBsPopperConfig.modifiers[offsetModifierIndex] = offsetModifier;
  } else {
    defaultBsPopperConfig.modifiers.push(offsetModifier);
  }
  return defaultBsPopperConfig;
};
var getTextHeight = function getTextHeight(text, styles) {
  var tag = doc.createElement('div');
  tag.innerText = text;
  for (var key in styles) {
    tag.style[key] = styles[key];
  }
  doc.body.appendChild(tag);
  var _tag$getBoundingClien = tag.getBoundingClientRect(),
    texHeight = _tag$getBoundingClien.height;
  doc.body.removeChild(tag);
  return texHeight;
};
var isTitleEllipsized = function isTitleEllipsized(node) {
  var title = node.dataset.originalTitle;
  var _node$getBoundingClie = node.getBoundingClientRect(),
    nodeWidth = _node$getBoundingClie.width,
    nodeHeight = _node$getBoundingClie.height;
  var computedNodeStyles = getComputedStyle(node);
  var styles = {
    width: "".concat(nodeWidth, "px"),
    padding: computedNodeStyles.getPropertyValue('padding'),
    'font-size': computedNodeStyles.getPropertyValue('font-size'),
    'font-family': computedNodeStyles.getPropertyValue('font-family'),
    'font-weight': computedNodeStyles.getPropertyValue('font-weight'),
    'font-style': computedNodeStyles.getPropertyValue('font-style'),
    'font-variant': computedNodeStyles.getPropertyValue('font-variant'),
    'line-height': computedNodeStyles.getPropertyValue('line-height'),
    'word-break': 'break-all'
  };
  var textHeight = getTextHeight(title, styles);
  return textHeight > nodeHeight;
};
var getContainer = function getContainer(tooltipNode) {
  var tooltipContainerSelector = tooltipNode.dataset.tooltipContainerSelector;
  var container = tooltipNode.closest(tooltipContainerSelector);
  return container !== null && container !== void 0 ? container : doc.body;
};
var initializeTooltip = function initializeTooltip(tooltipNode, hasEllipsisStyle) {
  var _tooltipNode$dataset$, _tooltipNode$dataset$2, _tooltipNode$dataset$3;
  var bootstrap = (0,_context_helper__WEBPACK_IMPORTED_MODULE_1__.getBootstrap)();
  var defaultDelay = TOOLTIPS_DEFAULTS_PARAMS.delay,
    defaultPlacement = TOOLTIPS_DEFAULTS_PARAMS.placement,
    defaultTrigger = TOOLTIPS_DEFAULTS_PARAMS.trigger,
    defaultTemplate = TOOLTIPS_DEFAULTS_PARAMS.template;
  var _tooltipNode$dataset = tooltipNode.dataset,
    delayShow = _tooltipNode$dataset.delayShow,
    delayHide = _tooltipNode$dataset.delayHide;
  var delay = {
    show: delayShow ? parseInt(delayShow, 10) : defaultDelay.show,
    hide: delayHide ? parseInt(delayHide, 10) : defaultDelay.hide
  };
  var title = tooltipNode.title;
  var extraClass = (_tooltipNode$dataset$ = tooltipNode.dataset.tooltipExtraClass) !== null && _tooltipNode$dataset$ !== void 0 ? _tooltipNode$dataset$ : '';
  var placement = (_tooltipNode$dataset$2 = tooltipNode.dataset.tooltipPlacement) !== null && _tooltipNode$dataset$2 !== void 0 ? _tooltipNode$dataset$2 : defaultPlacement;
  var trigger = (_tooltipNode$dataset$3 = tooltipNode.dataset.tooltipTrigger) !== null && _tooltipNode$dataset$3 !== void 0 ? _tooltipNode$dataset$3 : defaultTrigger;
  var useHtml = tooltipNode.dataset.tooltipUseHtml !== undefined;
  var container = getContainer(tooltipNode);
  var iframe = document.querySelector(tooltipNode.dataset.tooltipIframeSelector);
  new bootstrap.Tooltip(tooltipNode, {
    delay: delay,
    placement: placement,
    trigger: trigger,
    container: container,
    popperConfig: modifyPopperConfig.bind(null, iframe),
    html: useHtml,
    template: defaultTemplate(extraClass)
  });
  if ((0,_browser_helper__WEBPACK_IMPORTED_MODULE_0__.isSafari)()) {
    if (tooltipNode.children) {
      var childWithTitle = _toConsumableArray(tooltipNode.children).find(function (child) {
        return title === child.textContent;
      });
      var childHasEllipsisStyle = childWithTitle && getComputedStyle(childWithTitle).textOverflow === 'ellipsis';
      if (childWithTitle && childHasEllipsisStyle) {
        childWithTitle.classList.add('ibexa-safari-tooltip');
      }
    } else {
      if (hasEllipsisStyle) {
        tooltipNode.classList.add('ibexa-safari-tooltip');
      }
    }
  }
};
var parse = function parse() {
  var baseElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
  if (!baseElement) {
    return;
  }
  var bootstrap = (0,_context_helper__WEBPACK_IMPORTED_MODULE_1__.getBootstrap)();
  var tooltipNodes = _toConsumableArray(baseElement.querySelectorAll(TOOLTIPS_SELECTOR));
  if (baseElement instanceof Element) {
    tooltipNodes.push(baseElement);
  }
  var _iterator = _createForOfIteratorHelper(tooltipNodes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tooltipNode = _step.value;
      var hasEllipsisStyle = getComputedStyle(tooltipNode).textOverflow === 'ellipsis';
      var hasNewTitle = tooltipNode.hasAttribute('title');
      var tooltipInitialized = !!tooltipNode.dataset.originalTitle;
      var shouldHaveTooltip = !hasEllipsisStyle;
      if (!tooltipInitialized && hasNewTitle) {
        resizeEllipsisObserver.observe(tooltipNode);
        tooltipNode.dataset.originalTitle = tooltipNode.title;
        if (!shouldHaveTooltip) {
          shouldHaveTooltip = isTitleEllipsized(tooltipNode);
        }
        if (shouldHaveTooltip) {
          initializeTooltip(tooltipNode, hasEllipsisStyle);
        } else {
          tooltipNode.removeAttribute('title');
        }
      } else if (tooltipInitialized && (hasNewTitle || hasEllipsisStyle)) {
        if (hasNewTitle) {
          tooltipNode.dataset.originalTitle = tooltipNode.title;
        }
        var tooltipInstance = bootstrap.Tooltip.getInstance(tooltipNode);
        var hasTooltip = !!tooltipInstance;
        if (!shouldHaveTooltip) {
          shouldHaveTooltip = isTitleEllipsized(tooltipNode);
        }
        if (hasTooltip && (hasNewTitle && shouldHaveTooltip || !shouldHaveTooltip)) {
          tooltipInstance.dispose();
        }
        if (shouldHaveTooltip && (hasNewTitle || !hasTooltip)) {
          tooltipNode.title = tooltipNode.dataset.originalTitle;
          initializeTooltip(tooltipNode, hasEllipsisStyle);
        } else {
          tooltipNode.removeAttribute('title');
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var hideAll = function hideAll() {
  var baseElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
  if (!baseElement) {
    return;
  }
  var bootstrap = (0,_context_helper__WEBPACK_IMPORTED_MODULE_1__.getBootstrap)();
  var tooltipsNode = baseElement.querySelectorAll(TOOLTIPS_SELECTOR);
  var _iterator2 = _createForOfIteratorHelper(tooltipsNode),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var tooltipNode = _step2.value;
      bootstrap.Tooltip.getOrCreateInstance(tooltipNode).hide();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var observe = function observe() {
  var baseElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
  observer.observe(baseElement, observerConfig);
};


/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js"
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCssClassNames: () => (/* binding */ createCssClassNames)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var createCssClassNames = function createCssClassNames(classes) {
  if (Object.prototype.toString.call(classes) !== '[object Object]') {
    return '';
  }
  return Object.entries(classes).reduce(function (total, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      condition = _ref2[1];
    if (condition) {
      return "".concat(total, " ").concat(name);
    }
    return total;
  }, '').trim();
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js"
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBasicRequestInit: () => (/* binding */ getBasicRequestInit),
/* harmony export */   handleRequestError: () => (/* binding */ handleRequestError),
/* harmony export */   handleRequestResponse: () => (/* binding */ handleRequestResponse),
/* harmony export */   handleRequestResponseStatus: () => (/* binding */ handleRequestResponseStatus)
/* harmony export */ });
/**
 * Returns basic RequestInit object for Request
 *
 * @function getBasicRequestInit
 * @param {Object} restInfo REST config hash containing: token and siteaccess properties
 * @returns {RequestInit}
 */
var getBasicRequestInit = function getBasicRequestInit(_ref) {
  var token = _ref.token,
    siteaccess = _ref.siteaccess;
  return {
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  };
};

/**
 * Handles request error
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Response}
 */
var handleRequestError = function handleRequestError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/**
 * Handles request response
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Error|Promise}
 */
var handleRequestResponse = function handleRequestResponse(response) {
  return handleRequestError(response).json();
};

/**
 * Handles request response; returns status if response is OK
 *
 * @function handleRequestResponseStatus
 * @param {Response} response
 * @returns {number}
 */
var handleRequestResponseStatus = function handleRequestResponseStatus(response) {
  return handleRequestError(response).status;
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _urlIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlIcon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/urlIcon.js");
/* harmony import */ var _includedIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./includedIcon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/includedIcon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var Icon = function Icon(props) {
  var cssClass = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'ibexa-icon': true
  }, props.extraClasses, true));
  var isIconIncluded = props.useIncludedIcon || (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.isExternalInstance)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isIconIncluded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_includedIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cssClass: cssClass,
    name: props.name,
    defaultIconName: props.defaultIconName
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_urlIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cssClass: cssClass,
    name: props.name,
    customPath: props.customPath
  }));
};
Icon.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  customPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  useIncludedIcon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  defaultIconName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Icon.defaultProps = {
  customPath: null,
  name: null,
  extraClasses: null,
  useIncludedIcon: false,
  defaultIconName: 'about-info'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/includedIcon.js"
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/includedIcon.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/about.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_info_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/about-info.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_approved_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/approved.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_article_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/article.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_back_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/back.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/blog.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_post_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_down_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_up_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_circle_close_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_create_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/create.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_checkmark_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_content_tree_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_date_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/date.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_discard_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/discard.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_drag_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/drag.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_download_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/download.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_duplicate_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_edit_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/edit.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_expand_left_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_fields_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/fields.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_file_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/file.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_filters_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/filters.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_folder_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/folder.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_form_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/form.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_gallery_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/gallery.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_image_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/image.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_landing_page_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_notice_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/notice.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_options_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/options.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_place_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/place.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_product_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/product.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_qa_form_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_search_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/search.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/spinner.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_system_information_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/system-information.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_trash_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/trash.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_video_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/video.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/view.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_grid_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_list_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/view-list.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/user.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_group_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/user_group.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/upload.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_image_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_warning_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/warning.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg");
















































var iconsMap = {
  about: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_svg__WEBPACK_IMPORTED_MODULE_2__,
  'about-info': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_info_svg__WEBPACK_IMPORTED_MODULE_3__,
  approved: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_approved_svg__WEBPACK_IMPORTED_MODULE_4__,
  article: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_article_svg__WEBPACK_IMPORTED_MODULE_5__,
  back: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_back_svg__WEBPACK_IMPORTED_MODULE_6__,
  blog: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_svg__WEBPACK_IMPORTED_MODULE_7__,
  blog_post: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_post_svg__WEBPACK_IMPORTED_MODULE_8__,
  'caret-down': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_down_svg__WEBPACK_IMPORTED_MODULE_9__,
  'caret-up': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_up_svg__WEBPACK_IMPORTED_MODULE_10__,
  'circle-close': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_circle_close_svg__WEBPACK_IMPORTED_MODULE_11__,
  create: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_create_svg__WEBPACK_IMPORTED_MODULE_12__,
  checkmark: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_checkmark_svg__WEBPACK_IMPORTED_MODULE_13__,
  'content-tree': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_content_tree_svg__WEBPACK_IMPORTED_MODULE_14__,
  date: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_date_svg__WEBPACK_IMPORTED_MODULE_15__,
  discard: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_discard_svg__WEBPACK_IMPORTED_MODULE_16__,
  drag: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_drag_svg__WEBPACK_IMPORTED_MODULE_17__,
  download: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_download_svg__WEBPACK_IMPORTED_MODULE_18__,
  duplicate: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_duplicate_svg__WEBPACK_IMPORTED_MODULE_19__,
  'expand-left': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_expand_left_svg__WEBPACK_IMPORTED_MODULE_21__,
  edit: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_edit_svg__WEBPACK_IMPORTED_MODULE_20__,
  file: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_file_svg__WEBPACK_IMPORTED_MODULE_23__,
  filters: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_filters_svg__WEBPACK_IMPORTED_MODULE_24__,
  fields: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_fields_svg__WEBPACK_IMPORTED_MODULE_22__,
  folder: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_folder_svg__WEBPACK_IMPORTED_MODULE_25__,
  form: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_form_svg__WEBPACK_IMPORTED_MODULE_26__,
  gallery: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_gallery_svg__WEBPACK_IMPORTED_MODULE_27__,
  image: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_image_svg__WEBPACK_IMPORTED_MODULE_28__,
  landing_page: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_landing_page_svg__WEBPACK_IMPORTED_MODULE_29__,
  notice: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_notice_svg__WEBPACK_IMPORTED_MODULE_30__,
  options: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_options_svg__WEBPACK_IMPORTED_MODULE_31__,
  place: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_place_svg__WEBPACK_IMPORTED_MODULE_32__,
  product: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_product_svg__WEBPACK_IMPORTED_MODULE_33__,
  'qa-form': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_qa_form_svg__WEBPACK_IMPORTED_MODULE_34__,
  search: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_search_svg__WEBPACK_IMPORTED_MODULE_35__,
  spinner: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_36__,
  'system-information': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_system_information_svg__WEBPACK_IMPORTED_MODULE_37__,
  trash: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_trash_svg__WEBPACK_IMPORTED_MODULE_38__,
  video: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_video_svg__WEBPACK_IMPORTED_MODULE_39__,
  view: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_svg__WEBPACK_IMPORTED_MODULE_40__,
  'view-grid': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_grid_svg__WEBPACK_IMPORTED_MODULE_41__,
  'view-list': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_list_svg__WEBPACK_IMPORTED_MODULE_42__,
  user: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_svg__WEBPACK_IMPORTED_MODULE_43__,
  user_group: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_group_svg__WEBPACK_IMPORTED_MODULE_44__,
  upload: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_svg__WEBPACK_IMPORTED_MODULE_45__,
  'upload-image': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_image_svg__WEBPACK_IMPORTED_MODULE_46__,
  warning: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_warning_svg__WEBPACK_IMPORTED_MODULE_47__
};
var IncludedIcon = function IncludedIcon(props) {
  var _iconsMap$name;
  var name = props.name,
    cssClass = props.cssClass,
    defaultIconName = props.defaultIconName;
  var IconComponent = (_iconsMap$name = iconsMap[name]) !== null && _iconsMap$name !== void 0 ? _iconsMap$name : iconsMap[defaultIconName];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, {
    className: cssClass
  });
};
IncludedIcon.propTypes = {
  cssClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  defaultIconName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
IncludedIcon.defaultProps = {
  cssClass: '',
  name: 'about-info',
  defaultIconName: 'about-info'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IncludedIcon);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/urlIcon.js"
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/urlIcon.js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js");



var UrlIcon = function UrlIcon(props) {
  var _props$customPath;
  var linkHref = (_props$customPath = props.customPath) !== null && _props$customPath !== void 0 ? _props$customPath : (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_2__.getIconPath)(props.name);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: props.cssClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: linkHref
  }));
};
UrlIcon.propTypes = {
  cssClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  customPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
UrlIcon.defaultProps = {
  customPath: null,
  name: null,
  cssClass: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlIcon);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js"
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var PaginationButton = function PaginationButton(_ref) {
  var label = _ref.label,
    disabled = _ref.disabled,
    additionalClasses = _ref.additionalClasses,
    buttonAdditionalClasses = _ref.buttonAdditionalClasses,
    onPageChange = _ref.onPageChange,
    pageIndex = _ref.pageIndex;
  var handleClick = function handleClick() {
    if (!disabled && Number.isInteger(pageIndex)) {
      onPageChange(pageIndex);
    }
  };
  var className = "c-pagination-button page-item ".concat(additionalClasses);
  className = disabled ? "".concat(className, " disabled") : className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "page-link ".concat(buttonAdditionalClasses),
    onClick: handleClick,
    type: "button"
  }, label));
};
PaginationButton.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  pageIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  additionalClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  buttonAdditionalClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
PaginationButton.defaultProps = {
  pageIndex: null,
  label: '',
  disabled: false,
  additionalClasses: '',
  buttonAdditionalClasses: '',
  onPageChange: function onPageChange() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationButton);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.info.js"
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.info.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var PaginationInfo = function PaginationInfo(_ref) {
  var totalCount = _ref.totalCount,
    viewingCount = _ref.viewingCount,
    extraClasses = _ref.extraClasses;
  if (totalCount === 0) {
    return null;
  }
  var Translator = (0,_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-pagination__info': true
  }, extraClasses, true));
  var message = Translator.trans(/*@Desc("Viewing %viewingCount% out of %totalCount% items")*/'pagination.info.viewing_message', {
    viewingCount: viewingCount,
    totalCount: totalCount
  }, 'ibexa_universal_discovery_widget');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: message
    }
  });
};
PaginationInfo.propTypes = {
  totalCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  viewingCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
PaginationInfo.defaultProps = {
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationInfo);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/pagination.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/pagination.helper.js");
/* harmony import */ var _pagination_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.button */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js");




var DOTS = '...';
var Pagination = function Pagination(_ref) {
  var totalCount = _ref.totalCount,
    itemsPerPage = _ref.itemsPerPage,
    proximity = _ref.proximity,
    activePageIndex = _ref.activePageIndex,
    onPageChange = _ref.onPageChange,
    paginationDisabled = _ref.disabled;
  var pagesCount = Math.ceil(totalCount / itemsPerPage);
  if (pagesCount <= 1) {
    return null;
  }
  var previousPage = activePageIndex - 1;
  var nextPage = activePageIndex + 1;
  var isFirstPage = activePageIndex === 0;
  var isLastPage = activePageIndex + 1 === pagesCount;
  var pages = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_2__.computePages)({
    proximity: proximity,
    activePageIndex: activePageIndex,
    pagesCount: pagesCount,
    separator: DOTS
  });
  var paginationButtons = pages.map(function (page, index) {
    if (page === DOTS) {
      var key = "dots-".concat(index);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: key,
        label: DOTS,
        disabled: true
      });
    }
    var isCurrentPage = page === activePageIndex + 1;
    var additionalClasses = isCurrentPage ? 'active' : '';
    var label = "".concat(page);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: page,
      pageIndex: page - 1,
      label: label,
      additionalClasses: additionalClasses,
      onPageChange: onPageChange,
      disabled: isCurrentPage || paginationDisabled
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-pagination pagination ibexa-pagination__navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageIndex: previousPage,
    additionalClasses: "prev",
    disabled: isFirstPage || paginationDisabled,
    onPageChange: onPageChange
  }), paginationButtons, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageIndex: nextPage,
    additionalClasses: "next",
    disabled: isLastPage || paginationDisabled,
    onPageChange: onPageChange
  }));
};
Pagination.propTypes = {
  proximity: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  activePageIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  totalCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
var _excluded = ["className", "onClick", "disabled", "preventClose", "label"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var MODAL_Z_INDEX = 10260;
var MODAL_BACKDROP_Z_INDEX = 10250;
var CLASS_NON_SCROLLABLE = 'ibexa-non-scrollable';
var CLASS_MODAL_OPEN = 'modal-open';
var MODAL_CONFIG = {
  backdrop: 'static',
  keyboard: true
};
var MODAL_SIZE_CLASS = {
  small: 'modal-sm',
  medium: '',
  large: 'modal-lg'
};
var Popup = function Popup(_ref) {
  var isVisible = _ref.isVisible,
    onClose = _ref.onClose,
    children = _ref.children,
    title = _ref.title,
    subtitle = _ref.subtitle,
    hasFocus = _ref.hasFocus,
    noKeyboard = _ref.noKeyboard,
    actionBtnsConfig = _ref.actionBtnsConfig,
    size = _ref.size,
    noHeader = _ref.noHeader,
    noFooter = _ref.noFooter,
    noCloseBtn = _ref.noCloseBtn,
    extraClasses = _ref.extraClasses,
    showTooltip = _ref.showTooltip,
    subheader = _ref.subheader,
    controlZIndex = _ref.controlZIndex;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getRootDOMElement)();
  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var latestBootstrapModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getTranslator)();
  var bootstrap = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getBootstrap)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    rootDOMElement.classList.toggle(CLASS_MODAL_OPEN, isVisible);
    rootDOMElement.classList.toggle(CLASS_NON_SCROLLABLE, isVisible);
    if (isVisible) {
      showPopup();
      modalRef.current.addEventListener('hidden.bs.modal', onClose);
    } else {
      if (latestBootstrapModal.current) {
        latestBootstrapModal.current.hide();
      }
    }
    var modalNode = modalRef.current;
    var modalBackdrop = document.querySelector('.modal-backdrop');
    if (!modalBackdrop || !modalNode || !controlZIndex) {
      return;
    }
    var backdropInitialZIndex = window.getComputedStyle(modalBackdrop)['z-index'];
    var modalInitialZIndex = window.getComputedStyle(modalNode)['z-index'];
    modalBackdrop.style.zIndex = MODAL_BACKDROP_Z_INDEX;
    modalNode.style.zIndex = MODAL_Z_INDEX;
    return function () {
      if (backdropInitialZIndex) {
        modalBackdrop.style.zIndex = backdropInitialZIndex;
      } else {
        modalBackdrop.style.removeProperty('z-index');
      }
      if (modalInitialZIndex) {
        modalNode.style.zIndex = modalInitialZIndex;
      } else {
        modalNode.style.removeProperty('z-index');
      }
    };
  }, [isVisible, controlZIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (latestBootstrapModal.current) {
        latestBootstrapModal.current.hide();
      }
    };
  }, []);
  if (!isVisible) {
    return null;
  }
  var modalClasses = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'c-popup modal fade': true,
    'c-popup--no-header': noHeader,
    'c-popup--has-subheader': !noHeader && subheader
  }, extraClasses, extraClasses));
  var closeBtnLabel = Translator.trans(/*@Desc("Close")*/'popup.close.label', {}, 'ibexa_universal_discovery_widget');
  var hidePopup = function hidePopup() {
    latestBootstrapModal.current.hide();
    rootDOMElement.classList.remove(CLASS_MODAL_OPEN, CLASS_NON_SCROLLABLE);
  };
  var showPopup = function showPopup() {
    var initializedBackdropRootElement = latestBootstrapModal.current._backdrop._config.rootElement;
    if (initializedBackdropRootElement !== rootDOMElement) {
      latestBootstrapModal.current._backdrop._config.rootElement = rootDOMElement;
    }
    latestBootstrapModal.current.show();
  };
  var handleOnClick = function handleOnClick(event, onClick, preventClose) {
    if (!preventClose) {
      hidePopup();
    }
    onClick(event, hidePopup);
  };
  var renderCloseBtn = function renderCloseBtn() {
    if (noCloseBtn) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "close c-popup__btn--close",
      "data-bs-dismiss": "modal",
      "aria-label": closeBtnLabel,
      onClick: hidePopup,
      title: closeBtnLabel,
      "data-tooltip-container-selector": '.c-popup'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "discard",
      extraClasses: "ibexa-icon--small"
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: function ref(_ref3) {
      modalRef.current = _ref3;
      if (_ref3) {
        latestBootstrapModal.current = bootstrap.Modal.getOrCreateInstance(modalRef.current, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
          keyboard: !noKeyboard,
          focus: hasFocus
        }));
      }
    },
    className: modalClasses,
    tabIndex: hasFocus ? -1 : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-dialog c-popup__dialog ".concat(MODAL_SIZE_CLASS[size]),
    role: "dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-content c-popup__content"
  }, noHeader ? renderCloseBtn() : title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-header c-popup__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", _extends({
    className: "modal-title c-popup__headline"
  }, showTooltip ? {
    title: title,
    'data-tooltip-container-selector': '.c-popup'
  } : {}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-popup__title"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-popup__subtitle"
  }, subtitle)), renderCloseBtn()), subheader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-popup__subheader"
  }, subheader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-body c-popup__body"
  }, children), !noFooter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-footer c-popup__footer"
  }, actionBtnsConfig.map(function (_ref2) {
    var className = _ref2.className,
      onClick = _ref2.onClick,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$preventClose = _ref2.preventClose,
      preventClose = _ref2$preventClose === void 0 ? false : _ref2$preventClose,
      label = _ref2.label,
      extraProps = _objectWithoutProperties(_ref2, _excluded);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
      key: label,
      type: "button",
      className: "btn ibexa-btn ".concat(className),
      onClick: onClick ? function (event) {
        return handleOnClick(event, onClick, preventClose);
      } : hidePopup,
      disabled: disabled
    }, extraProps), label);
  })))));
};
Popup.propTypes = {
  actionBtnsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    preventClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  })).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hasFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  noHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noFooter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noCloseBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noKeyboard: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  showTooltip: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  subheader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  controlZIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Popup.defaultProps = {
  hasFocus: true,
  noKeyboard: false,
  onClose: null,
  size: 'large',
  noHeader: false,
  noFooter: false,
  noCloseBtn: false,
  extraClasses: '',
  title: null,
  subtitle: null,
  showTooltip: true,
  subheader: null,
  controlZIndex: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js"
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOTIFICATION_ERROR_LABEL: () => (/* binding */ NOTIFICATION_ERROR_LABEL),
/* harmony export */   NOTIFICATION_INFO_LABEL: () => (/* binding */ NOTIFICATION_INFO_LABEL),
/* harmony export */   NOTIFICATION_SUCCESS_LABEL: () => (/* binding */ NOTIFICATION_SUCCESS_LABEL),
/* harmony export */   NOTIFICATION_WARNING_LABEL: () => (/* binding */ NOTIFICATION_WARNING_LABEL),
/* harmony export */   showErrorNotification: () => (/* binding */ showErrorNotification),
/* harmony export */   showInfoNotification: () => (/* binding */ showInfoNotification),
/* harmony export */   showNotification: () => (/* binding */ showNotification),
/* harmony export */   showSuccessNotification: () => (/* binding */ showSuccessNotification),
/* harmony export */   showWarningNotification: () => (/* binding */ showWarningNotification)
/* harmony export */ });
var NOTIFICATION_INFO_LABEL = 'info';
var NOTIFICATION_SUCCESS_LABEL = 'success';
var NOTIFICATION_WARNING_LABEL = 'warning';
var NOTIFICATION_ERROR_LABEL = 'error';

/**
 * Dispatches notification event
 *
 * @method showNotification
 * @param {{message: string, label: string}} detail
 */
var showNotification = function showNotification(detail) {
  var event = new CustomEvent('ibexa-notify', {
    detail: detail
  });
  document.body.dispatchEvent(event);
};

/**
 * Dispatches info notification event
 *
 * @method showInfoNotification
 * @param {String} message
 */
var showInfoNotification = function showInfoNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_INFO_LABEL
  });
};

/**
 * Dispatches success notification event
 *
 * @method showSuccessNotification
 * @param {String} message
 */
var showSuccessNotification = function showSuccessNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_SUCCESS_LABEL
  });
};

/**
 * Dispatches warning notification event
 *
 * @method showWarningNotification
 * @param {String} message
 */
var showWarningNotification = function showWarningNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_WARNING_LABEL
  });
};

/**
 * Dispatches error notification event
 *
 * @method showErrorNotification
 * @param {(string|Error)} error
 */
var showErrorNotification = function showErrorNotification(error) {
  var isErrorObj = error instanceof Error;
  var message = isErrorObj ? error.message : error;
  showNotification({
    message: message,
    label: NOTIFICATION_ERROR_LABEL
  });
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js"
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_VARIANTS: () => (/* binding */ COLOR_VARIANTS),
/* harmony export */   SIZES: () => (/* binding */ SIZES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
var COLOR_VARIANTS = {
  PRIMARY: 'primary',
  LIGHT: 'light'
};
var Spinner = function Spinner(_ref) {
  var size = _ref.size,
    colorVariant = _ref.colorVariant;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty(_defineProperty({
    'c-spinner': true
  }, "c-spinner--".concat(size), true), "c-spinner--".concat(colorVariant), true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  });
};
Spinner.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.values(SIZES)),
  colorVariant: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.values(COLOR_VARIANTS))
};
Spinner.defaultProps = {
  size: SIZES.MEDIUM,
  colorVariant: COLOR_VARIANTS.PRIMARY
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.cell.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.cell.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var TableBodyCell = function TableBodyCell(_ref) {
  var extraClasses = _ref.extraClasses,
    children = _ref.children,
    hasCheckbox = _ref.hasCheckbox,
    hasActionBtns = _ref.hasActionBtns,
    hasIcon = _ref.hasIcon,
    isCloseLeft = _ref.isCloseLeft,
    isCenterContent = _ref.isCenterContent;
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-table__cell': true,
    'ibexa-table__cell--has-checkbox': hasCheckbox,
    'ibexa-table__cell--has-action-btns': hasActionBtns,
    'ibexa-table__cell--has-icon': hasIcon,
    'ibexa-table__cell--close-left': isCloseLeft,
    'ibexa-table__cell--content-center': isCenterContent
  }, extraClasses, true));
  var wrapChildrenIfNeeded = function wrapChildrenIfNeeded(childrenToWrap) {
    if (hasActionBtns) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ibexa-table__cell-btns-wrapper"
      }, childrenToWrap);
    }
    return childrenToWrap;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: className
  }, wrapChildrenIfNeeded(children));
};
TableBodyCell.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  hasCheckbox: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  hasActionBtns: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  hasIcon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isCloseLeft: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isCenterContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
TableBodyCell.defaultProps = {
  extraClasses: '',
  children: null,
  hasCheckbox: false,
  hasActionBtns: false,
  hasIcon: false,
  isCloseLeft: false,
  isCenterContent: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableBodyCell);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.js"
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var TableBody = function TableBody(_ref) {
  var extraClasses = _ref.extraClasses,
    children = _ref.children;
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-table__body': true
  }, extraClasses, true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    className: className
  }, children);
};
TableBody.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element)
};
TableBody.defaultProps = {
  extraClasses: '',
  children: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableBody);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.row.js"
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.row.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var TableBodyRow = function TableBodyRow(_ref) {
  var extraClasses = _ref.extraClasses,
    children = _ref.children,
    isSelectable = _ref.isSelectable,
    isNotSelectable = _ref.isNotSelectable,
    onClick = _ref.onClick;
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-table__row': true,
    'ibexa-table__row--selectable': isSelectable,
    'ibexa-table__row--not-selectable': isNotSelectable
  }, extraClasses, true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    className: className,
    onClick: onClick
  }, children);
};
TableBodyRow.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  isSelectable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isNotSelectable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
TableBodyRow.defaultProps = {
  extraClasses: '',
  children: null,
  isSelectable: false,
  isNotSelectable: false,
  onClick: function onClick() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableBodyRow);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.cell.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.cell.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var TableHeadCell = function TableHeadCell(_ref) {
  var extraClasses = _ref.extraClasses,
    wrapperExtraClasses = _ref.wrapperExtraClasses,
    children = _ref.children,
    sortColumnName = _ref.sortColumnName,
    hasCheckbox = _ref.hasCheckbox,
    hasIcon = _ref.hasIcon,
    isCloseLeft = _ref.isCloseLeft,
    isCenterContent = _ref.isCenterContent;
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-table__header-cell': true,
    'ibexa-table__header-cell--checkbox': hasCheckbox,
    'ibexa-table__header-cell--has-icon': hasIcon,
    'ibexa-table__header-cell--close-left': isCloseLeft,
    'ibexa-table__header-cell--content-center': isCenterContent
  }, extraClasses, true));
  var cellTextWrapperClassName = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty(_defineProperty({
    'ibexa-table__header-cell-text-wrapper': true
  }, "ibexa-table__sort-column--".concat(sortColumnName), sortColumnName), wrapperExtraClasses, true));
  var renderWrapper = function renderWrapper(content) {
    if (hasCheckbox) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ibexa-table__header-cell-checkbox-wrapper"
      }, content);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: cellTextWrapperClassName
    }, content);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: className
  }, renderWrapper(children));
};
TableHeadCell.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  wrapperExtraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  sortColumnName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hasCheckbox: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  hasIcon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isCloseLeft: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isCenterContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
TableHeadCell.defaultProps = {
  extraClasses: '',
  wrapperExtraClasses: '',
  children: null,
  sortColumnName: null,
  hasCheckbox: false,
  hasIcon: false,
  isCloseLeft: false,
  isCenterContent: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableHeadCell);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.js"
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var TableHead = function TableHead(_ref) {
  var extraClasses = _ref.extraClasses,
    children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
    className: extraClasses
  }, children);
};
TableHead.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element)
};
TableHead.defaultProps = {
  extraClasses: '',
  children: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableHead);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.row.js"
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.row.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var TableHeadRow = function TableHeadRow(_ref) {
  var extraClasses = _ref.extraClasses,
    children = _ref.children;
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-table__head-row': true
  }, extraClasses, true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    className: className
  }, children);
};
TableHeadRow.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element)
};
TableHeadRow.defaultProps = {
  extraClasses: '',
  children: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableHeadRow);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.js"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var Table = function Table(_ref) {
  var extraClasses = _ref.extraClasses,
    children = _ref.children,
    isLastColumnSticky = _ref.isLastColumnSticky;
  var scrollableWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasLastColumnShadow = _useState2[0],
    setHasLastColumnShadow = _useState2[1];
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-table table': true,
    'ibexa-table--last-column-sticky': isLastColumnSticky,
    'ibexa-table--last-column-shadow': isLastColumnSticky && hasLastColumnShadow
  }, extraClasses, true));
  var updateLastColumnShadowState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var offsetRoundingCompensator = 0.5;
    var shouldShowRightColumnShadow = scrollableWrapperRef.current.scrollLeft < scrollableWrapperRef.current.scrollWidth - scrollableWrapperRef.current.offsetWidth - 2 * offsetRoundingCompensator;
    setHasLastColumnShadow(shouldShowRightColumnShadow);
  }, [scrollableWrapperRef, setHasLastColumnShadow]);
  var scrollableWrapperResizeObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new ResizeObserver(function () {
      updateLastColumnShadowState();
    });
  }, [updateLastColumnShadowState]);
  var handleScrollableWrapperRef = function handleScrollableWrapperRef(ref) {
    if (!ref || scrollableWrapperRef.current !== null && scrollableWrapperRef.current !== ref) {
      scrollableWrapperResizeObserver.unobserve(scrollableWrapperRef.current);
    }
    scrollableWrapperRef.current = ref;
    if (ref) {
      scrollableWrapperResizeObserver.observe(ref);
      if (isLastColumnSticky) {
        updateLastColumnShadowState();
        ref.addEventListener('scroll', updateLastColumnShadowState, false);
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isLastColumnSticky) {
      var _scrollableWrapperRef;
      updateLastColumnShadowState();
      (_scrollableWrapperRef = scrollableWrapperRef.current) === null || _scrollableWrapperRef === void 0 || _scrollableWrapperRef.addEventListener('scroll', updateLastColumnShadowState, false);
      return function () {
        var _scrollableWrapperRef2;
        (_scrollableWrapperRef2 = scrollableWrapperRef.current) === null || _scrollableWrapperRef2 === void 0 || _scrollableWrapperRef2.removeEventListener('scroll', updateLastColumnShadowState, false);
      };
    }
  }, [isLastColumnSticky, updateLastColumnShadowState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-scrollable-wrapper",
    ref: handleScrollableWrapperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: className
  }, children));
};
Table.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  isLastColumnSticky: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Table.defaultProps = {
  extraClasses: '',
  children: null,
  isLastColumnSticky: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/variants.viewer.js"
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/variants.viewer.js ***!
  \****************************************************************************************/
() {

(function (global, doc, React, ReactDOM, ibexa) {
  var variantsViewerContainers = doc.querySelectorAll('.ibexa-pc-variants-viewer');
  variantsViewerContainers.forEach(function (variantsViewerContainer) {
    var _variantsViewerContai = variantsViewerContainer.dataset,
      baseProductCode = _variantsViewerContai.baseProductCode,
      productVariantsString = _variantsViewerContai.productVariants,
      itemsPerPage = _variantsViewerContai.itemsPerPage;
    var productVariants = JSON.parse(productVariantsString);
    var moduleRootContainer = variantsViewerContainer.querySelector('.ibexa-pc-variants-viewer__module-root');
    var showBtn = variantsViewerContainer.querySelector('.ibexa-pc-variants-viewer__show-variants-btn');
    var variantsViewerModuleRoot = null;
    var openVariantsViewer = function openVariantsViewer() {
      variantsViewerModuleRoot = ReactDOM.createRoot(moduleRootContainer);
      variantsViewerModuleRoot.render(React.createElement(ibexa.modules.VariantsViewer, {
        productVariants: productVariants,
        baseProductCode: baseProductCode,
        onClose: onClose,
        itemsPerPage: itemsPerPage
      }));
    };
    var onClose = function onClose() {
      variantsViewerModuleRoot.unmount();
    };
    if (showBtn) {
      showBtn.addEventListener('click', openVariantsViewer, false);
    }
  });
})(window, window.document, window.React, window.ReactDOM, window.ibexa);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/common/hooks/useHeightPreservation.js"
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/common/hooks/useHeightPreservation.js ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHeightPreservation: () => (/* binding */ useHeightPreservation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useHeightPreservation = function useHeightPreservation(_ref) {
  var minHeight = _ref.minHeight,
    shouldApply = _ref.shouldApply;
  var previousHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var shouldApplyStored = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(shouldApply);
  var resizeObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new ResizeObserver(function (entries) {
      if (!shouldApplyStored.current) {
        previousHeight.current = entries[0].target.offsetHeight;
      }
    });
  }, [previousHeight, shouldApplyStored]);
  var onElementRefChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (newRef) {
    if (elementRef.current) {
      resizeObserver.unobserve(elementRef.current);
    }
    elementRef.current = newRef;
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
      if (!shouldApplyStored.current) {
        var _elementRef$current$o, _elementRef$current;
        previousHeight.current = (_elementRef$current$o = (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.offsetHeight) !== null && _elementRef$current$o !== void 0 ? _elementRef$current$o : null;
      }
    }
  }, [elementRef, resizeObserver, previousHeight, shouldApplyStored]);
  shouldApplyStored.current = shouldApply;
  var style = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var styleData = {};
    if (shouldApply) {
      var _previousHeight$curre;
      styleData.height = Math.max((_previousHeight$curre = previousHeight.current) !== null && _previousHeight$curre !== void 0 ? _previousHeight$curre : 0, minHeight);
    }
    return styleData;
  }, [shouldApply, minHeight, previousHeight]);
  return {
    style: style,
    onElementRefChange: onElementRefChange
  };
};

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/common/services/product.service.js"
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/common/services/product.service.js ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUERY_LIMIT: () => (/* binding */ QUERY_LIMIT),
/* harmony export */   findProductVariantsBySearchQuery: () => (/* binding */ findProductVariantsBySearchQuery),
/* harmony export */   findProductsBySearchQuery: () => (/* binding */ findProductsBySearchQuery)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var DEFAULT_INSTANCE_URL = window.location.origin;
var ENDPOINT_PRODUCTS_VIEW = '/product-selector/products/{offset}/{limit}';
var ENDPOINT_PRODUCT_VARIANTS_VIEW = '/product-selector/product/{code}/variants/{offset}/{limit}';
var QUERY_LIMIT = 50;
var showErrorNotificationAbortWrapper = function showErrorNotificationAbortWrapper(error) {
  if ((error === null || error === void 0 ? void 0 : error.name) === 'AbortError') {
    return;
  }
  return (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.showErrorNotification)(error);
};
var generateUrlQueryForArray = function generateUrlQueryForArray(paramsData) {
  var searchParams = new URLSearchParams();
  var _iterator = _createForOfIteratorHelper(paramsData),
    _step;
  try {
    var _loop = function _loop() {
        var _step$value = _step.value,
          paramName = _step$value.name,
          paramData = _step$value.data;
        if (paramData instanceof Array) {
          if (!(paramData !== null && paramData !== void 0 && paramData.length)) {
            return 0; // continue
          }
          paramData.forEach(function (data) {
            return searchParams.append("".concat(paramName, "[]"), data);
          });
        } else {
          if (!paramData) {
            return 0; // continue
          }
          searchParams.append(paramName, paramData);
        }
      },
      _ret;
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _ret = _loop();
      if (_ret === 0) continue;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return searchParams.toString();
};
var findProductsBySearchQuery = function findProductsBySearchQuery(_ref, callback) {
  var token = _ref.token,
    siteaccess = _ref.siteaccess,
    accessToken = _ref.accessToken,
    _ref$productNameSearc = _ref.productNameSearchText,
    productNameSearchText = _ref$productNameSearc === void 0 ? null : _ref$productNameSearc,
    _ref$productsTypes = _ref.productsTypes,
    productsTypes = _ref$productsTypes === void 0 ? null : _ref$productsTypes,
    _ref$productsCodes = _ref.productsCodes,
    productsCodes = _ref$productsCodes === void 0 ? null : _ref$productsCodes,
    _ref$productsCategori = _ref.productsCategories,
    productsCategories = _ref$productsCategori === void 0 ? null : _ref$productsCategori,
    _ref$limit = _ref.limit,
    limit = _ref$limit === void 0 ? QUERY_LIMIT : _ref$limit,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 0 : _ref$offset,
    _ref$instanceUrl = _ref.instanceUrl,
    instanceUrl = _ref$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref$instanceUrl,
    _ref$taxonomyEntryId = _ref.taxonomyEntryId,
    taxonomyEntryId = _ref$taxonomyEntryId === void 0 ? null : _ref$taxonomyEntryId;
  var endpoint = ENDPOINT_PRODUCTS_VIEW.replace('{offset}', offset).replace('{limit}', limit);
  var abortController = new AbortController();
  var productsQuery = generateUrlQueryForArray([{
    name: 'name',
    data: productNameSearchText
  }, {
    name: 'product_type',
    data: productsTypes
  }, {
    name: 'code',
    data: productsCodes
  }, {
    name: 'product_category',
    data: productsCategories
  }, {
    name: 'taxonomy_entry_id',
    data: taxonomyEntryId
  }]);
  var query = productsQuery ? "?".concat(productsQuery) : '';
  var request = new Request("".concat(instanceUrl).concat(endpoint).concat(query), {
    method: 'GET',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin',
    signal: abortController.signal
  });
  fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (response) {
    var count = response.count,
      items = response.items;
    callback({
      items: items,
      count: count
    });
  })["catch"](showErrorNotificationAbortWrapper);
  return {
    abortController: abortController
  };
};
var findProductVariantsBySearchQuery = function findProductVariantsBySearchQuery(_ref2, callback) {
  var token = _ref2.token,
    siteaccess = _ref2.siteaccess,
    accessToken = _ref2.accessToken,
    _ref2$limit = _ref2.limit,
    limit = _ref2$limit === void 0 ? QUERY_LIMIT : _ref2$limit,
    _ref2$offset = _ref2.offset,
    offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
    baseProductCode = _ref2.baseProductCode,
    _ref2$variantsCodes = _ref2.variantsCodes,
    variantsCodes = _ref2$variantsCodes === void 0 ? null : _ref2$variantsCodes,
    _ref2$instanceUrl = _ref2.instanceUrl,
    instanceUrl = _ref2$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref2$instanceUrl,
    _ref2$attributesFilte = _ref2.attributesFilters,
    attributesFilters = _ref2$attributesFilte === void 0 ? {} : _ref2$attributesFilte;
  var endpoint = ENDPOINT_PRODUCT_VARIANTS_VIEW.replace('{code}', baseProductCode).replace('{offset}', offset).replace('{limit}', limit);
  var urlQuery = generateUrlQueryForArray([{
    name: 'code',
    data: variantsCodes
  }, {
    name: 'attributesFilters',
    data: JSON.stringify(attributesFilters)
  }]);
  var abortController = new AbortController();
  var query = urlQuery ? "?".concat(urlQuery) : '';
  var request = new Request("".concat(instanceUrl).concat(endpoint).concat(query), {
    method: 'GET',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin',
    signal: abortController.signal
  });
  fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (response) {
    callback(response);
  })["catch"](showErrorNotificationAbortWrapper);
  return {
    abortController: abortController
  };
};

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/product-discovery-widget/components/product-table/product.availability.status.js"
/*!*****************************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/product-discovery-widget/components/product-table/product.availability.status.js ***!
  \*****************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");




var ProductAvailabilityStatus = function ProductAvailabilityStatus(_ref) {
  var isAvailable = _ref.isAvailable;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
  var availableLabel = Translator.trans(/*@Desc("Available")*/'product_availability_status.available', {}, 'ibexa_universal_discovery_widget');
  var notAvailableLabel = Translator.trans(/*@Desc("Not available")*/'product_availability_status.not_available', {}, 'ibexa_universal_discovery_widget');
  var label = isAvailable ? availableLabel : notAvailableLabel;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'ibexa-badge ibexa-badge--status': true,
    'ibexa-badge--success': isAvailable
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: className
  }, label);
};
ProductAvailabilityStatus.propTypes = {
  isAvailable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductAvailabilityStatus);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/product.variants.table.item.js"
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/product.variants.table.item.js ***!
  \******************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body_cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.cell */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.cell.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.row */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.row.js");
/* harmony import */ var _variants_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variants.popup */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/variants.popup.js");
/* harmony import */ var _product_discovery_widget_components_product_table_product_availability_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../product-discovery-widget/components/product-table/product.availability.status */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/product-discovery-widget/components/product-table/product.availability.status.js");







var ProductVariantsTableItem = function ProductVariantsTableItem(_ref) {
  var productVariant = _ref.productVariant;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_variants_popup__WEBPACK_IMPORTED_MODULE_5__.VariantsPopupContext),
    renderActionColumn = _useContext.renderActionColumn;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body_row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_2__.parse
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body_cell__WEBPACK_IMPORTED_MODULE_3__["default"], null, productVariant.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body_cell__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-badge ibexa-badge--info"
  }, productVariant.code)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body_cell__WEBPACK_IMPORTED_MODULE_3__["default"], null, productVariant.stock), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body_cell__WEBPACK_IMPORTED_MODULE_3__["default"], null, productVariant.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body_cell__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_product_discovery_widget_components_product_table_product_availability_status__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isAvailable: productVariant.is_available
  })), productVariant.attributes.map(function (attribute) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body_cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: attribute.identifier
    }, attribute.value);
  }), renderActionColumn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body_cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
    hasActionBtns: true
  }, renderActionColumn(productVariant)));
};
ProductVariantsTableItem.propTypes = {
  productVariant: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductVariantsTableItem);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/product.variants.table.js"
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/product.variants.table.js ***!
  \*************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/table/table */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.body.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head_cell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.cell */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.cell.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.row */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/table/table.head.row.js");
/* harmony import */ var _product_variants_table_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product.variants.table.item */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/product.variants.table.item.js");
/* harmony import */ var _variants_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./variants.popup */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/variants.popup.js");










var ProductVariantsTable = function ProductVariantsTable(_ref) {
  var items = _ref.items,
    discriminators = _ref.discriminators;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_variants_popup__WEBPACK_IMPORTED_MODULE_9__.VariantsPopupContext),
    renderActionColumn = _useContext.renderActionColumn;
  var nameLabel = Translator.trans(/*@Desc("Name")*/'product_variants_table.header.name', {}, 'ibexa_products_selector');
  var codeLabel = Translator.trans(/*@Desc("Code")*/'product_variants_table.header.code', {}, 'ibexa_products_selector');
  var stockLabel = Translator.trans(/*@Desc("Stock")*/'product_variants_table.header.stock', {}, 'ibexa_products_selector');
  var basePriceLabel = Translator.trans(/*@Desc("Base price")*/'product_variants_table.header.base_price', {}, 'ibexa_products_selector');
  var availabilityLabel = Translator.trans(/*@Desc("Availability")*/'product_variants_table.header.availability', {}, 'ibexa_products_selector');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isLastColumnSticky: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head_row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head_cell__WEBPACK_IMPORTED_MODULE_6__["default"], null, nameLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head_cell__WEBPACK_IMPORTED_MODULE_6__["default"], null, codeLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head_cell__WEBPACK_IMPORTED_MODULE_6__["default"], null, stockLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head_cell__WEBPACK_IMPORTED_MODULE_6__["default"], null, basePriceLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head_cell__WEBPACK_IMPORTED_MODULE_6__["default"], null, availabilityLabel), discriminators.map(function (discriminator) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head_cell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: discriminator.identifier
    }, discriminator.name);
  }), renderActionColumn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_head_cell__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_table_table_body__WEBPACK_IMPORTED_MODULE_4__["default"], null, items.map(function (productVariant) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_product_variants_table_item__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: productVariant.code,
      productVariant: productVariant
    });
  })));
};
ProductVariantsTable.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  discriminators: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductVariantsTable);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/product.variants.view.js"
/*!************************************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/product.variants.view.js ***!
  \************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_pagination_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_pagination_pagination_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.info */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.info.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _product_variants_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.variants.table */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/product.variants.table.js");
/* harmony import */ var _common_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/product.service */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/common/services/product.service.js");
/* harmony import */ var _variants_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variants.popup */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/variants.popup.js");
/* harmony import */ var _common_hooks_useHeightPreservation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/hooks/useHeightPreservation */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/common/hooks/useHeightPreservation.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var ProductVariantsView = function ProductVariantsView() {
  var restInfo = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getRestInfo)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_variants_popup__WEBPACK_IMPORTED_MODULE_7__.VariantsPopupContext),
    variantsCodes = _useContext.variantsCodes,
    baseProductData = _useContext.baseProductData,
    itemsPerPage = _useContext.itemsPerPage;
  var items = variantsCodes !== null && variantsCodes !== void 0 ? variantsCodes : [];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    activePageIndex = _useState2[0],
    setActivePageIndex = _useState2[1];
  var offset = activePageIndex * itemsPerPage;
  var currentPageItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return items.slice(offset, offset + itemsPerPage);
  }, [items, offset, itemsPerPage]);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentPageDataLoaded = _useState4[0],
    setCurrentPageDataLoaded = _useState4[1];
  var isLoading = currentPageDataLoaded === null;
  var _useHeightPreservatio = (0,_common_hooks_useHeightPreservation__WEBPACK_IMPORTED_MODULE_8__.useHeightPreservation)({
      minHeight: 150,
      shouldApply: isLoading
    }),
    style = _useHeightPreservatio.style,
    onElementRefChange = _useHeightPreservatio.onElementRefChange;
  var handlePageChange = function handlePageChange(newPageIndex) {
    setActivePageIndex(newPageIndex);
    setCurrentPageDataLoaded(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var maxPageIndex = Math.ceil(items.length / itemsPerPage) - 1;
    setActivePageIndex(Math.max(Math.min(maxPageIndex, activePageIndex), 0));
  }, [items, itemsPerPage, activePageIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCurrentPageDataLoaded(null);
    if (!baseProductData || !variantsCodes) {
      return;
    }
    (0,_common_services_product_service__WEBPACK_IMPORTED_MODULE_6__.findProductVariantsBySearchQuery)(_objectSpread(_objectSpread({}, restInfo), {}, {
      baseProductCode: baseProductData.code,
      variantsCodes: currentPageItems,
      limit: currentPageItems.length
    }), function (response) {
      setCurrentPageDataLoaded(response);
    });
  }, [currentPageItems, baseProductData, variantsCodes]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: onElementRefChange,
    style: style,
    className: "c-pc-selector-product-variants-view"
  }, !isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_product_variants_table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: currentPageDataLoaded.items,
    discriminators: currentPageDataLoaded.discriminators
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_pagination_pagination_info__WEBPACK_IMPORTED_MODULE_3__["default"], {
    totalCount: items.length,
    viewingCount: currentPageDataLoaded.items.length
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_pagination_pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    proximity: 1,
    itemsPerPage: itemsPerPage,
    activePageIndex: activePageIndex,
    totalCount: items.length,
    onPageChange: handlePageChange,
    disabled: false
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pc-selector-product-variants-view__spinner-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductVariantsView);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/variants.popup.js"
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/variants.popup.js ***!
  \*****************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariantsPopupContext: () => (/* binding */ VariantsPopupContext),
/* harmony export */   VariantsViewContext: () => (/* binding */ VariantsViewContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_modules_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui-modules/common/popup/popup.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js");
/* harmony import */ var _product_variants_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.variants.view */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/product.variants.view.js");






var VariantsViewContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var VariantsPopupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var VariantsPopup = function VariantsPopup(_ref) {
  var _baseProductData$name;
  var variantsCodes = _ref.variantsCodes,
    baseProductData = _ref.baseProductData,
    itemsPerPage = _ref.itemsPerPage,
    onClose = _ref.onClose,
    renderActionColumn = _ref.renderActionColumn;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getRootDOMElement)();
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
  var subtitle = (_baseProductData$name = baseProductData === null || baseProductData === void 0 ? void 0 : baseProductData.name) !== null && _baseProductData$name !== void 0 ? _baseProductData$name : '';
  var title = Translator.trans(/*@Desc("Variants")*/'variants_popup.title', {}, 'ibexa_products_selector');
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VariantsPopupContext.Provider, {
    value: {
      variantsCodes: variantsCodes,
      baseProductData: baseProductData,
      itemsPerPage: itemsPerPage,
      renderActionColumn: renderActionColumn
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_modules_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    subtitle: subtitle,
    isVisible: true,
    onClose: onClose,
    actionBtnsConfig: [],
    noFooter: true,
    extraClasses: "c-pc-selector-product-variants-popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_product_variants_view__WEBPACK_IMPORTED_MODULE_5__["default"], null))), rootDOMElement);
};
VariantsPopup.propTypes = {
  variantsCodes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
  baseProductData: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  renderActionColumn: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
VariantsPopup.defaultProps = {
  itemsPerPage: 10,
  renderActionColumn: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VariantsPopup);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/variants.viewer.module.js"
/*!**************************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/variants.viewer.module.js ***!
  \**************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _common_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/product.service */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/common/services/product.service.js");
/* harmony import */ var _components_variants_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/variants.popup */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/components/variants.popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var VariantsViewerModule = function VariantsViewerModule(_ref) {
  var _baseProductData$vari;
  var productVariants = _ref.productVariants,
    baseProductCode = _ref.baseProductCode,
    onClose = _ref.onClose,
    itemsPerPage = _ref.itemsPerPage;
  var restInfo = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRestInfo)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    baseProductData = _useState2[0],
    setBaseProductData = _useState2[1];
  var allVariantsCodes = (_baseProductData$vari = baseProductData === null || baseProductData === void 0 ? void 0 : baseProductData.variants_codes) !== null && _baseProductData$vari !== void 0 ? _baseProductData$vari : null;
  var variantsCodes = productVariants === true ? allVariantsCodes : productVariants;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (baseProductData) {
      return;
    }
    (0,_common_services_product_service__WEBPACK_IMPORTED_MODULE_3__.findProductsBySearchQuery)(_objectSpread(_objectSpread({}, restInfo), {}, {
      productsCodes: [baseProductCode],
      limit: 1
    }), function (response) {
      var productData = response.items[0];
      setBaseProductData(productData);
    });
  }, [baseProductData, productVariants]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setBaseProductData(null);
  }, [baseProductCode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_variants_popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variantsCodes: variantsCodes,
    baseProductData: baseProductData,
    itemsPerPage: itemsPerPage,
    onClose: onClose
  });
};
VariantsViewerModule.propTypes = {
  productVariants: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)]).isRequired,
  baseProductCode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
VariantsViewerModule.defaultProps = {
  itemsPerPage: 10
};
window.ibexa.addConfig('modules.VariantsViewer', VariantsViewerModule);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VariantsViewerModule);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg"
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg ***!
  \************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/about-info.31a3b8ee.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg"
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/about.d648fc1f.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg"
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/approved.8dcddbcc.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/article.87d9802e.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/back.daf9f5e9.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/blog.1bbae791.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/blog_post.4509899b.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg"
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg ***!
  \************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/caret-down.f72f2589.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg"
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/caret-up.c2ba7f03.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/checkmark.6bbaed08.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg"
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg ***!
  \**************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/circle-close.cf4e3719.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg"
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg ***!
  \**************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/content-tree.513377cf.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/create.948e3424.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/date.51e2752f.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/discard.7ab1b667.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg"
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/download.40d98643.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/drag.9b430792.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/duplicate.4961d378.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/edit.4fa25121.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg"
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg ***!
  \*************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/expand-left.251d3a23.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/fields.22fbf40a.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/file.f6e0bf0b.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/filters.59e95d7d.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/folder.977267fb.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/form.015bc963.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/gallery.7e496553.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg"
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/image.c05d71e7.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg"
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg ***!
  \**************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/landing_page.2e7e2424.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/notice.9e08cc1f.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/options.15578e01.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg"
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/place.d190c3f6.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/product.aa6dd0a1.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/qa-form.9e25b46c.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/search.548ac5f3.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/spinner.ab67bf41.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg"
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg ***!
  \********************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/system-information.d0dbc17c.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg"
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/trash.d1555488.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg"
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg ***!
  \**************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/upload-image.09f70b0c.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/upload.2c5ac915.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/user.19743a46.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg"
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg ***!
  \************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/user_group.82314755.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg"
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/video.c5fb6c8f.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/view-grid.1b49c5a6.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/view-list.2752b827.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/view.6c174a86.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/warning.449e4631.svg";

/***/ },

/***/ "prop-types"
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
(module) {

"use strict";
module.exports = PropTypes;

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

"use strict";
module.exports = React;

/***/ },

/***/ "react-dom"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

"use strict";
module.exports = ReactDOM;

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/variants-viewer/variants.viewer.module.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/variants.viewer.js"));
/******/ }
]);