"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-mfu-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js"
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js"
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentTypeDataMapByHref: () => (/* binding */ createContentTypeDataMapByHref),
/* harmony export */   getContentTypeData: () => (/* binding */ getContentTypeData),
/* harmony export */   getContentTypeDataByHref: () => (/* binding */ getContentTypeDataByHref),
/* harmony export */   getContentTypeDataMapByHref: () => (/* binding */ getContentTypeDataMapByHref),
/* harmony export */   getContentTypeIconUrl: () => (/* binding */ getContentTypeIconUrl),
/* harmony export */   getContentTypeIconUrlByHref: () => (/* binding */ getContentTypeIconUrlByHref),
/* harmony export */   getContentTypeIdentifierByHref: () => (/* binding */ getContentTypeIdentifierByHref),
/* harmony export */   getContentTypeName: () => (/* binding */ getContentTypeName),
/* harmony export */   getContentTypeNameByHref: () => (/* binding */ getContentTypeNameByHref)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var contentTypesDataMap = null;
var contentTypesDataMapByHref = null;

/**
 * Creates map with content types identifiers as keys for faster lookup
 *
 * @function createContentTypeDataMap
 * @returns {Object} contentTypesDataMap
 */
var createContentTypeDataMap = function createContentTypeDataMap() {
  return Object.values((0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().contentTypes).reduce(function (contentTypeDataMap, contentTypeGroup) {
    var _iterator = _createForOfIteratorHelper(contentTypeGroup),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var contentTypeData = _step.value;
        contentTypeDataMap[contentTypeData.identifier] = contentTypeData;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return contentTypeDataMap;
  }, {});
};
var createContentTypeDataMapByHref = function createContentTypeDataMapByHref() {
  return Object.values((0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().contentTypes).reduce(function (contentTypeDataMapByHref, contentTypeGroup) {
    var _iterator2 = _createForOfIteratorHelper(contentTypeGroup),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var contentTypeData = _step2.value;
        contentTypeDataMapByHref[contentTypeData.href] = contentTypeData;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return contentTypeDataMapByHref;
  }, {});
};
var getContentTypeDataMapByHref = function getContentTypeDataMapByHref() {
  if (!contentTypesDataMapByHref) {
    contentTypesDataMapByHref = createContentTypeDataMapByHref();
  }
  return contentTypesDataMapByHref;
};

/**
 * Returns an URL to a content type icon
 *
 * @function getContentTypeIcon
 * @param {String} contentTypeIdentifier
 * @returns {String|null} url to icon
 */
var getContentTypeIconUrl = function getContentTypeIconUrl(contentTypeIdentifier) {
  if (!contentTypesDataMap) {
    contentTypesDataMap = createContentTypeDataMap();
  }
  if (!contentTypeIdentifier || !contentTypesDataMap[contentTypeIdentifier]) {
    return null;
  }
  var iconUrl = contentTypesDataMap[contentTypeIdentifier].thumbnail;
  return iconUrl;
};

/**
 * Returns contentType name from contentType identifier
 *
 * @function getContentTypeName
 * @param {String} contentTypeIdentifier
 * @returns {String|null} contentType name
 */
var getContentTypeName = function getContentTypeName(contentTypeIdentifier) {
  if (!contentTypesDataMap) {
    contentTypesDataMap = createContentTypeDataMap();
  }
  if (!contentTypeIdentifier || !contentTypesDataMap[contentTypeIdentifier]) {
    return null;
  }
  return contentTypesDataMap[contentTypeIdentifier].name;
};
var getContentTypeData = function getContentTypeData(contentTypeIdentifier) {
  var _contentTypesDataMap$;
  if (!contentTypesDataMap) {
    contentTypesDataMap = createContentTypeDataMap();
  }
  return (_contentTypesDataMap$ = contentTypesDataMap[contentTypeIdentifier]) !== null && _contentTypesDataMap$ !== void 0 ? _contentTypesDataMap$ : null;
};
var getContentTypeIconUrlByHref = function getContentTypeIconUrlByHref(contentTypeHref) {
  if (!contentTypesDataMapByHref) {
    contentTypesDataMapByHref = createContentTypeDataMapByHref();
  }
  if (!contentTypeHref || !contentTypesDataMapByHref[contentTypeHref]) {
    return null;
  }
  var iconUrl = contentTypesDataMapByHref[contentTypeHref].thumbnail;
  return iconUrl;
};
var getContentTypeNameByHref = function getContentTypeNameByHref(contentTypeHref) {
  var _getContentTypeDataBy, _getContentTypeDataBy2;
  return (_getContentTypeDataBy = (_getContentTypeDataBy2 = getContentTypeDataByHref(contentTypeHref)) === null || _getContentTypeDataBy2 === void 0 ? void 0 : _getContentTypeDataBy2.name) !== null && _getContentTypeDataBy !== void 0 ? _getContentTypeDataBy : null;
};
var getContentTypeIdentifierByHref = function getContentTypeIdentifierByHref(contentTypeHref) {
  var _getContentTypeDataBy3, _getContentTypeDataBy4;
  return (_getContentTypeDataBy3 = (_getContentTypeDataBy4 = getContentTypeDataByHref(contentTypeHref)) === null || _getContentTypeDataBy4 === void 0 ? void 0 : _getContentTypeDataBy4.identifier) !== null && _getContentTypeDataBy3 !== void 0 ? _getContentTypeDataBy3 : null;
};
var getContentTypeDataByHref = function getContentTypeDataByHref(contentTypeHref) {
  if (!contentTypesDataMapByHref) {
    contentTypesDataMapByHref = createContentTypeDataMapByHref();
  }
  if (!contentTypeHref || !contentTypesDataMapByHref[contentTypeHref]) {
    return null;
  }
  return contentTypesDataMapByHref[contentTypeHref];
};


/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js"
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js"
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js"
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Clones any object. Faster alternative to `JSON.parse(JSON.stringify)`
 *
 * @function deepClone
 * @param {Any} data
 * @returns {Any} cloned data
 */
var _deepClone = function deepClone(data) {
  var clonedData;
  if (_typeof(data) !== 'object') {
    return data;
  }
  if (!data) {
    return data;
  }
  if (Object.prototype.toString.apply(data) === '[object Array]') {
    clonedData = [];
    for (var i = 0; i < data.length; i++) {
      clonedData[i] = _deepClone(data[i]);
    }
    return clonedData;
  }
  clonedData = {};
  for (var _i in data) {
    if (Object.prototype.hasOwnProperty.call(data, _i)) {
      clonedData[_i] = _deepClone(data[_i]);
    }
  }
  return clonedData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_deepClone);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js"
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/text.helper.js"
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/text.helper.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fileSizeToString: () => (/* binding */ fileSizeToString)
/* harmony export */ });
var fileSizeToString = function fileSizeToString(filesize) {
  var units = ['bytes', 'KB', 'MB', 'GB'];
  var kilobyte = 1024;
  var size = parseInt(filesize, 10) || 0;
  var unitIndex = 0;
  while (size >= kilobyte) {
    size = size / kilobyte;
    unitIndex++;
  }
  var decimalUnits = unitIndex < 1 ? 0 : 1;
  return "".concat(size.toFixed(size >= 10 || decimalUnits), " ").concat(units[unitIndex]);
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js"
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/tooltip-popup/tooltip.popup.component.js"
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/tooltip-popup/tooltip.popup.component.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var TooltipPopupComponent = function TooltipPopupComponent(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    children = _ref.children,
    onConfirm = _ref.onConfirm,
    confirmBtnAttrs = _ref.confirmBtnAttrs,
    confirmLabel = _ref.confirmLabel,
    onClose = _ref.onClose,
    closeBtnAttrs = _ref.closeBtnAttrs,
    closeLabel = _ref.closeLabel,
    visible = _ref.visible,
    extraClasses = _ref.extraClasses;
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-tooltip-popup': true
  }, extraClasses, true));
  var attrs = {
    className: className,
    hidden: !visible
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", attrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tooltip-popup__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "c-tooltip-popup__title"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tooltip-popup__subtitle"
  }, subtitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tooltip-popup__content",
    ref: contentRef
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tooltip-popup__footer"
  }, confirmLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    className: "btn ibexa-btn ibexa-btn--primary",
    type: "button",
    onClick: onConfirm
  }, confirmBtnAttrs), confirmLabel), closeLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    className: "btn ibexa-btn ibexa-btn--ghost",
    type: "button",
    onClick: onClose
  }, closeBtnAttrs), closeLabel)));
};
TooltipPopupComponent.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  visible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  confirmLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  closeLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  confirmBtnAttrs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  closeBtnAttrs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
TooltipPopupComponent.defaultProps = {
  subtitle: '',
  onClose: function onClose() {},
  onConfirm: function onConfirm() {},
  confirmLabel: '',
  closeLabel: '',
  confirmBtnAttrs: {},
  closeBtnAttrs: {},
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipPopupComponent);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/drop-area/drop.area.component.js"
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/drop-area/drop.area.component.js ***!
  \***************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropAreaComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _helpers_text_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/text.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var DropAreaComponent = /*#__PURE__*/function (_Component) {
  function DropAreaComponent(props) {
    var _this;
    _classCallCheck(this, DropAreaComponent);
    _this = _callSuper(this, DropAreaComponent, [props]);
    _this._refFileInput = null;
    _this._refForm = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.hasMultiMsgForFileSizes = _this.props.maxFileSizes.length > 1;
    _this.state = {
      filesSizeExpanded: false
    };
    _this.openFileSelector = _this.openFileSelector.bind(_this);
    _this.handleUpload = _this.handleUpload.bind(_this);
    _this.renderMaxFileMsgsToggler = _this.renderMaxFileMsgsToggler.bind(_this);
    _this.renderMaxFileSizeItems = _this.renderMaxFileSizeItems.bind(_this);
    return _this;
  }

  /**
   * Opens a browser native file selector
   *
   * @method openFileSelector
   * @param {Event} event
   * @memberof DropAreaComponent
   */
  _inherits(DropAreaComponent, _Component);
  return _createClass(DropAreaComponent, [{
    key: "openFileSelector",
    value: function openFileSelector(event) {
      event.preventDefault();
      this._refFileInput.click();
    }

    /**
     * Handles file upload
     *
     * @method handleUpload
     * @param {Event} event
     * @memberof DropAreaComponent
     */
  }, {
    key: "handleUpload",
    value: function handleUpload(event) {
      this.props.preventDefaultAction(event);
      this.props.addItemsToUpload(this.props.processUploadedFiles(event));
      event.currentTarget.value = null;
    }
  }, {
    key: "renderMaxFileMsgsToggler",
    value: function renderMaxFileMsgsToggler() {
      var _this2 = this;
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
      if (!this.hasMultiMsgForFileSizes) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "c-drop-area__max-file-size-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "about-info",
        extraClasses: "c-drop-area__max-file-size-icon ibexa-icon--small"
      }), Translator.trans(/*@Desc("Max. file size")*/'max_file_size.message.general', {}, 'ibexa_multi_file_upload'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "c-drop-area__max-file-size-toggle-btn",
        onClick: function onClick() {
          return _this2.setState(function (prevState) {
            return {
              filesSizeExpanded: !prevState.filesSizeExpanded
            };
          });
        }
      }));
    }
  }, {
    key: "renderMaxFileSizeItems",
    value: function renderMaxFileSizeItems() {
      var _this3 = this;
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, this.props.maxFileSizes.map(function (contentType) {
        var itemKey = contentType.name.replace(/\s/g, '-');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          key: itemKey,
          className: "c-drop-area__max-file-size-item"
        }, !_this3.hasMultiMsgForFileSizes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          name: "about-info",
          extraClasses: "c-drop-area__max-file-size-icon ibexa-icon--small"
        }), Translator.trans(/*@Desc("%contentTypeName% max file size: %maxFileSize%")*/'max_file_size.message', {
          contentTypeName: contentType.name,
          maxFileSize: (0,_helpers_text_helper__WEBPACK_IMPORTED_MODULE_3__.fileSizeToString)(contentType.maxFileSize)
        }, 'ibexa_multi_file_upload'));
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('drop', this.props.preventDefaultAction, false);
      window.addEventListener('dragover', this.props.preventDefaultAction, false);
      this._refForm.current.addEventListener('drop', this.handleUpload, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('drop', this.props.preventDefaultAction, false);
      window.removeEventListener('dragover', this.props.preventDefaultAction, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
      var dropActionMessage = Translator.trans(/*@Desc("Drag and drop file")*/'drop_action.message', {}, 'ibexa_multi_file_upload');
      var separatorMessage = Translator.trans(/*@Desc("or")*/'drop_action.separator', {}, 'ibexa_multi_file_upload');
      var uploadBtnLabel = Translator.trans(/*@Desc("Upload file")*/'upload_btn.label', {}, 'ibexa_multi_file_upload');
      var maxFilesSizeListClassNames = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
        'c-drop-area__max-files-size': true,
        'c-drop-area__max-files-size--expanded': this.state.filesSizeExpanded
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        className: "c-drop-area",
        onDrop: this.handleUpload,
        ref: this._refForm
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-drop-area__message c-drop-area__message--main"
      }, dropActionMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-drop-area__message c-drop-area__message--separator"
      }, separatorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--secondary c-drop-area__btn-select",
        onClick: this.openFileSelector,
        tabIndex: "-1"
      }, uploadBtnLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-drop-area__message c-drop-area__message--filesize"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: maxFilesSizeListClassNames
      }, this.renderMaxFileMsgsToggler(), this.renderMaxFileSizeItems())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "c-drop-area__input--hidden",
        ref: function ref(_ref) {
          return _this4._refFileInput = _ref;
        },
        id: "mfu-files",
        type: "file",
        name: "files[]",
        hidden: true,
        multiple: true,
        onChange: this.handleUpload
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

DropAreaComponent.propTypes = {
  maxFileSizes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
  processUploadedFiles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  preventDefaultAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  addItemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/progress-bar/progress.bar.component.js"
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/progress-bar/progress.bar.component.js ***!
  \*********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");



var ProgressBarComponent = function ProgressBarComponent(props) {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var message = Translator.trans(/*@Desc("Uploading...")*/'upload.progress_bar.uploading', {}, 'ibexa_multi_file_upload');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-progress-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-progress-bar__value",
    style: {
      '--progress': "".concat(props.progress, "%")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-progress-bar__label"
  }, props.progress, "% ", message));
};
ProgressBarComponent.propTypes = {
  progress: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBarComponent);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.item.component.js"
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.item.component.js ***!
  \*******************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadItemComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _helpers_text_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/text.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../progress-bar/progress.bar.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/progress-bar/progress.bar.component.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var UploadItemComponent = /*#__PURE__*/function (_Component) {
  function UploadItemComponent(props) {
    var _props$item$struct, _props$item$errorMsgs;
    var _this;
    _classCallCheck(this, UploadItemComponent);
    _this = _callSuper(this, UploadItemComponent, [props]);
    _this.isExternalInstance = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.isExternalInstance)();
    _this.handleFileValidationError = _this.handleFileValidationError.bind(_this);
    _this.handleEditBtnClick = _this.handleEditBtnClick.bind(_this);
    _this.handleUploadAbort = _this.handleUploadAbort.bind(_this);
    _this.handleUploadError = _this.handleUploadError.bind(_this);
    _this.handleUploadLoad = _this.handleUploadLoad.bind(_this);
    _this.handleUploadProgress = _this.handleUploadProgress.bind(_this);
    _this.handleUploadEnd = _this.handleUploadEnd.bind(_this);
    _this.handleLoadStart = _this.handleLoadStart.bind(_this);
    _this.handleFileDeleted = _this.handleFileDeleted.bind(_this);
    _this.abortUploading = _this.abortUploading.bind(_this);
    _this.initPublishFile = _this.initPublishFile.bind(_this);
    _this.deleteFile = _this.deleteFile.bind(_this);
    _this.handleContentError = _this.handleContentError.bind(_this);
    _this.handleFileDeletedError = _this.handleFileDeletedError.bind(_this);
    _this.contentInfoInput = null;
    _this.contentVersionInfoInput = null;
    _this.contentVersionNoInput = null;
    _this.contentEditBtn = null;
    _this.state = {
      uploading: false,
      uploaded: props.isUploaded,
      aborted: false,
      failed: props.isFailed,
      deleted: false,
      progress: 0,
      xhr: null,
      struct: (_props$item$struct = props.item.struct) !== null && _props$item$struct !== void 0 ? _props$item$struct : null,
      totalSize: (0,_helpers_text_helper__WEBPACK_IMPORTED_MODULE_6__.fileSizeToString)(props.item.file.size),
      uploadedSize: '0',
      errorMsgs: (_props$item$errorMsgs = props.item.errorMsgs) !== null && _props$item$errorMsgs !== void 0 ? _props$item$errorMsgs : [],
      hasMultipleErrorsExpanded: false
    };
    return _this;
  }
  _inherits(UploadItemComponent, _Component);
  return _createClass(UploadItemComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        item = _this$props.item,
        adminUiConfig = _this$props.adminUiConfig,
        parentInfo = _this$props.parentInfo,
        createFileStruct = _this$props.createFileStruct,
        isUploaded = _this$props.isUploaded,
        isFailed = _this$props.isFailed,
        checkCanUpload = _this$props.checkCanUpload,
        contentCreatePermissionsConfig = _this$props.contentCreatePermissionsConfig,
        currentLanguage = _this$props.currentLanguage;
      this.contentInfoInput = window.document.querySelector('#form_subitems_content_edit_content_info');
      this.contentVersionInfoInput = window.document.querySelector('#form_subitems_content_edit_version_info_content_info');
      this.contentVersionNoInput = window.document.querySelector('#form_subitems_content_edit_version_info_version_no');
      this.contentEditBtn = window.document.querySelector('#form_subitems_content_edit_create');
      if (isUploaded || isFailed) {
        return;
      }
      var config = _objectSpread(_objectSpread({}, adminUiConfig.multiFileUpload), {}, {
        contentCreatePermissionsConfig: contentCreatePermissionsConfig
      });
      if (!checkCanUpload(item.file, parentInfo, config, this.handleFileValidationError)) {
        this.setState(function () {
          return {
            uploading: false,
            uploaded: false,
            aborted: false,
            failed: true
          };
        });
        return;
      }
      var createFileStructParams = {
        parentInfo: parentInfo,
        config: adminUiConfig,
        languageCode: currentLanguage
      };
      createFileStruct(item.file, createFileStructParams, this.handleContentError).then(this.initPublishFile);
    }
  }, {
    key: "initPublishFile",
    value: function initPublishFile(struct) {
      this.props.publishFile(struct, {
        upload: {
          onabort: this.handleUploadAbort,
          onerror: this.handleUploadError,
          onload: this.handleUploadLoad,
          onprogress: this.handleUploadProgress
        },
        onloadstart: this.handleLoadStart,
        onerror: this.handleUploadError
      }, this.handleUploadEnd, this.handleContentError);
    }
  }, {
    key: "handleFileDeletedError",
    value: function handleFileDeletedError(errorMsg) {
      this.setState(function (prevState) {
        return {
          failed: true,
          deleted: false,
          errorMsgs: [].concat(_toConsumableArray(prevState.errorMsgs), [errorMsg])
        };
      });
    }
  }, {
    key: "handleContentError",
    value: function handleContentError(errorMsg) {
      var _this2 = this;
      this.setState(function (prevState) {
        return {
          failed: true,
          errorMsgs: [].concat(_toConsumableArray(prevState.errorMsgs), [errorMsg])
        };
      }, function () {
        return _this2.props.onCreateError(_objectSpread(_objectSpread({}, _this2.props.item), {}, {
          errorMsgs: _this2.state.errorMsgs
        }));
      });
    }
  }, {
    key: "handleFileValidationError",
    value: function handleFileValidationError(errorMsgs) {
      var _this3 = this;
      this.setState(function () {
        return {
          uploading: false,
          uploaded: false,
          aborted: false,
          failed: true,
          errorMsgs: errorMsgs
        };
      }, function () {
        return _this3.props.onCreateError(_objectSpread(_objectSpread({}, _this3.props.item), {}, {
          errorMsgs: _this3.state.errorMsgs
        }));
      });
    }
  }, {
    key: "handleLoadStart",
    value: function handleLoadStart(event) {
      this.setState(function () {
        return {
          uploading: true,
          uploaded: false,
          aborted: false,
          failed: false,
          xhr: event.target
        };
      });
    }
  }, {
    key: "handleUploadAbort",
    value: function handleUploadAbort() {
      this.setState(function () {
        return {
          uploading: false,
          uploaded: false,
          aborted: true,
          failed: false
        };
      });
    }
  }, {
    key: "handleUploadError",
    value: function handleUploadError() {
      this.setState(function (state) {
        return {
          uploading: false,
          uploaded: false,
          aborted: state.aborted,
          failed: true
        };
      });
    }
  }, {
    key: "handleUploadLoad",
    value: function handleUploadLoad() {
      this.setState(function () {
        return {
          uploading: false,
          uploaded: true,
          aborted: false,
          failed: false
        };
      });
    }
  }, {
    key: "handleUploadProgress",
    value: function handleUploadProgress(event) {
      var _this4 = this;
      var fraction = event.loaded / event.total;
      var progress = parseInt(fraction * 100, 10);
      this.setState(function () {
        return {
          uploadedSize: (0,_helpers_text_helper__WEBPACK_IMPORTED_MODULE_6__.fileSizeToString)(fraction * parseInt(_this4.props.item.file.size, 10)),
          uploading: true,
          uploaded: false,
          aborted: false,
          failed: false,
          progress: progress
        };
      });
    }
  }, {
    key: "handleUploadEnd",
    value: function handleUploadEnd() {
      var _this5 = this;
      this.setState(function (state) {
        var struct = JSON.parse(state.xhr.response);
        return {
          struct: struct,
          uploading: false,
          uploaded: true,
          aborted: false,
          failed: false
        };
      }, function () {
        var item = _this5.props.item;
        _this5.props.onAfterUpload(_objectSpread(_objectSpread({}, item), {}, {
          struct: _this5.state.struct
        }));
      });
    }
  }, {
    key: "abortUploading",
    value: function abortUploading() {
      this.state.xhr.abort();
      this.props.onAfterAbort(this.props.item);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile() {
      var failed = this.state.failed;
      var item = this.props.item;
      if (failed) {
        this.props.removeItemsToUpload([item]);
        this.handleFileDeleted(item);
      } else {
        this.props.deleteFile(this.state.struct, this.handleFileDeleted, this.handleFileDeletedError);
      }
    }
  }, {
    key: "handleFileDeleted",
    value: function handleFileDeleted() {
      this.props.onAfterDelete(this.props.item);
      this.setState({
        deleted: true
      });
    }
  }, {
    key: "getContentTypeIdentifier",
    value: function getContentTypeIdentifier() {
      var _item$struct;
      var _this$props2 = this.props,
        contentTypesMap = _this$props2.contentTypesMap,
        item = _this$props2.item;
      if (!((_item$struct = item.struct) !== null && _item$struct !== void 0 && _item$struct.Content)) {
        return null;
      }
      var contentTypeHref = item.struct.Content.ContentType._href;
      var contentType = contentTypesMap ? contentTypesMap[contentTypeHref] : null;
      var contentTypeIdentifier = contentType ? contentType.identifier : null;
      return contentTypeIdentifier;
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var failed = this.state.failed;
      var contentTypeIdentifier = this.getContentTypeIdentifier();
      if (!contentTypeIdentifier || failed) {
        return null;
      }
      var contentTypeIconUrl = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_2__.getContentTypeIconUrl)(contentTypeIdentifier);
      var _contentTypeIconUrl$s = contentTypeIconUrl.split('#'),
        _contentTypeIconUrl$s2 = _slicedToArray(_contentTypeIconUrl$s, 2),
        iconName = _contentTypeIconUrl$s2[1];
      if (this.isExternalInstance) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          name: iconName,
          extraClasses: "ibexa-icon--small",
          defaultIconName: "file"
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        customPath: contentTypeIconUrl,
        extraClasses: "ibexa-icon--small"
      });
    }
  }, {
    key: "renderProgressBar",
    value: function renderProgressBar() {
      var _this$state = this.state,
        uploaded = _this$state.uploaded,
        aborted = _this$state.aborted,
        progress = _this$state.progress,
        totalSize = _this$state.totalSize,
        uploadedSize = _this$state.uploadedSize,
        failed = _this$state.failed;
      if (uploaded || aborted || failed) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
        progress: progress,
        uploaded: uploadedSize,
        total: totalSize
      });
    }
  }, {
    key: "renderErrorInfo",
    value: function renderErrorInfo() {
      var _this6 = this;
      var _this$state2 = this.state,
        failed = _this$state2.failed,
        errorMsgs = _this$state2.errorMsgs;
      if (!failed) {
        return null;
      }
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var hasMultipleErrors = errorMsgs.length > 1;
      var label = hasMultipleErrors ? Translator.trans(/*@Desc("Failed to upload ")*/'multierror.label', {}, 'ibexa_multi_file_upload') : errorMsgs[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__message c-upload-list-item__message--error"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "warning",
        extraClasses: "ibexa-icon--tiny-small"
      }), label, hasMultipleErrors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "c-upload-list-item__multiple-errors-toggle-btn",
        onClick: function onClick() {
          return _this6.setState(function (prevState) {
            return {
              hasMultipleErrorsExpanded: !prevState.hasMultipleErrorsExpanded
            };
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "caret-down",
        extraClasses: "ibexa-icon--tiny-small"
      })));
    }
  }, {
    key: "renderSuccessMessage",
    value: function renderSuccessMessage() {
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var uploaded = this.state.uploaded;
      if (!uploaded) {
        return;
      }
      var message = Translator.trans(/*@Desc("100% Uploaded")*/'upload.success.message', {}, 'ibexa_multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__message c-upload-list-item__message--success"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "checkmark",
        extraClasses: "ibexa-icon--tiny-small"
      }), message);
    }
  }, {
    key: "renderAbortBtn",
    value: function renderAbortBtn() {
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var uploading = this.state.uploading;
      if (!uploading) {
        return null;
      }
      var label = Translator.trans(/*@Desc("Abort")*/'abort.label', {}, 'ibexa_multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text ibexa-btn--small c-upload-list-item__action c-upload-list-item__action--abort",
        onClick: this.abortUploading,
        title: label,
        tabIndex: "-1",
        type: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "trash",
        extraClasses: "ibexa-icon--small"
      }));
    }
  }, {
    key: "handleEditBtnClick",
    value: function handleEditBtnClick(event) {
      event.preventDefault();
      var struct = this.state.struct;
      var content = struct.Content;
      var contentId = content._id;
      var languageCode = content.CurrentVersion.Version.VersionInfo.VersionTranslationInfo.Language['0'].languageCode;
      var versionNo = content.CurrentVersion.Version.VersionInfo.versionNo;
      this.contentInfoInput.value = contentId;
      this.contentVersionInfoInput.value = contentId;
      this.contentVersionNoInput.value = versionNo;
      window.document.querySelector("#form_subitems_content_edit_language_".concat(languageCode)).checked = true;
      this.contentEditBtn.click();
    }
  }, {
    key: "renderEditBtn",
    value: function renderEditBtn() {
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var _this$state3 = this.state,
        uploaded = _this$state3.uploaded,
        failed = _this$state3.failed,
        struct = _this$state3.struct;
      var canEdit = uploaded && !failed;
      if (!canEdit || this.isExternalInstance || !this.props.enableUploadedItemEdit) {
        return null;
      }
      var label = Translator.trans(/*@Desc("Edit")*/'edit.label', {}, 'ibexa_multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text ibexa-btn--small c-upload-list-item__action c-upload-list-item__action--edit",
        title: label,
        onClick: this.handleEditBtnClick,
        tabIndex: "-1",
        type: "button",
        disabled: !struct
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "edit",
        extraClasses: "ibexa-icon--small"
      }));
    }
  }, {
    key: "renderDeleteBtn",
    value: function renderDeleteBtn() {
      var _this$state4 = this.state,
        uploaded = _this$state4.uploaded,
        aborted = _this$state4.aborted,
        failed = _this$state4.failed,
        struct = _this$state4.struct;
      var canDelete = uploaded && !aborted || failed;
      if (!canDelete) {
        return null;
      }
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var label = Translator.trans(/*@Desc("Delete")*/'delete.label', {}, 'ibexa_multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text ibexa-btn--small c-upload-list-item__action c-upload-list-item__action--delete",
        onClick: this.deleteFile,
        title: label,
        tabIndex: "-1",
        type: "button",
        disabled: !(struct || failed)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "trash",
        extraClasses: "ibexa-icon--small"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
        failed = _this$state5.failed,
        deleted = _this$state5.deleted,
        totalSize = _this$state5.totalSize,
        errorMsgs = _this$state5.errorMsgs,
        hasMultipleErrorsExpanded = _this$state5.hasMultipleErrorsExpanded;
      var hasMultipleErrors = errorMsgs.length > 1;
      var wrapperClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
        'c-upload-list-item': true,
        'c-upload-list-item--errored': failed,
        'c-upload-list-item--expanded-multiple-errors': hasMultipleErrorsExpanded
      });
      if (deleted) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: wrapperClassName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__icon-wrapper"
      }, this.renderIcon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__meta"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__name"
      }, this.props.item.file.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__size"
      }, totalSize)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__info"
      }, this.renderErrorInfo(), this.renderSuccessMessage(), this.renderProgressBar()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__actions"
      }, this.renderAbortBtn(), this.renderEditBtn(), this.renderDeleteBtn()), hasMultipleErrors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "c-upload-list-item__multiple-errors-list"
      }, errorMsgs.map(function (errorMsg) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          key: errorMsg.replace(/\s/g, '-'),
          className: "c-upload-list-item__multiple-errors-item"
        }, errorMsg);
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

UploadItemComponent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      fallbackContentType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      maxFileSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
    }).isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    locationPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    language: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  }).isRequired,
  contentTypesMap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  onAfterUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onAfterAbort: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onAfterDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  createFileStruct: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  publishFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  deleteFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  checkCanUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  contentCreatePermissionsConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  currentLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isUploaded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isFailed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  removeItemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onCreateError: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  errorMsgs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  enableUploadedItemEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
UploadItemComponent.defaultProps = {
  onAfterUpload: function onAfterUpload() {},
  onAfterAbort: function onAfterAbort() {},
  onAfterDelete: function onAfterDelete() {},
  createFileStruct: function createFileStruct() {},
  publishFile: function publishFile() {},
  deleteFile: function deleteFile() {},
  checkCanUpload: function checkCanUpload() {},
  isUploaded: false,
  isFailed: false,
  currentLanguage: '',
  contentCreatePermissionsConfig: {},
  removeItemsToUpload: function removeItemsToUpload() {},
  onCreateError: function onCreateError() {},
  errorMsgs: [],
  enableUploadedItemEdit: true
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.list.component.js"
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.list.component.js ***!
  \*******************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadListComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _upload_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.item.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.item.component.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var UploadListComponent = /*#__PURE__*/function (_Component) {
  function UploadListComponent(props) {
    var _this;
    _classCallCheck(this, UploadListComponent);
    _this = _callSuper(this, UploadListComponent, [props]);
    _this.state = {
      items: [],
      erroredItems: []
    };
    return _this;
  }
  _inherits(UploadListComponent, _Component);
  return _createClass(UploadListComponent, [{
    key: "handleAfterUpload",
    value: function handleAfterUpload(item) {
      var _this2 = this;
      this.setState(function (state) {
        return {
          items: [].concat(_toConsumableArray(state.items), [item])
        };
      }, function () {
        _this2.props.removeItemsToUpload([item]);
        _this2.props.onAfterUpload(_this2.state.items);
      });
    }
  }, {
    key: "handleAfterAbort",
    value: function handleAfterAbort(item) {
      this.props.removeItemsToUpload([item]);
      this.setState(function (state) {
        var items = state.items.filter(function (data) {
          return data.id !== item.id;
        });
        return {
          uploaded: items.length,
          items: items
        };
      });
    }
  }, {
    key: "handleAfterDelete",
    value: function handleAfterDelete(item) {
      var _this3 = this;
      this.setState(function (state) {
        var items = state.items.filter(function (data) {
          return data.id !== item.id;
        });
        var erroredItems = state.erroredItems.filter(function (data) {
          return data.id !== item.id;
        });
        return {
          uploaded: items.length,
          items: items,
          erroredItems: erroredItems
        };
      }, function () {
        return _this3.props.onAfterDelete(item);
      });
    }
  }, {
    key: "handleCreateError",
    value: function handleCreateError(item) {
      this.props.removeItemsToUpload([item]);
      this.setState(function (state) {
        var isAlredyAddedToErroredItems = !!state.erroredItems.find(function (erroredItem) {
          return erroredItem.id === item.id;
        });
        if (!isAlredyAddedToErroredItems) {
          return {
            erroredItems: [].concat(_toConsumableArray(state.erroredItems), [item])
          };
        }
      });
    }
  }, {
    key: "renderItemToUpload",
    value: function renderItemToUpload(item) {
      return this.renderItem(item, {
        isUploaded: false,
        createFileStruct: this.props.createFileStruct,
        publishFile: this.props.publishFile,
        onAfterAbort: this.handleAfterAbort.bind(this),
        onAfterUpload: this.handleAfterUpload.bind(this),
        onCreateError: this.handleCreateError.bind(this),
        checkCanUpload: this.props.checkCanUpload,
        removeItemsToUpload: this.props.removeItemsToUpload
      });
    }
  }, {
    key: "renderUploadedItem",
    value: function renderUploadedItem(item) {
      return this.renderItem(item, {
        isUploaded: true,
        deleteFile: this.props.deleteFile,
        onAfterDelete: this.handleAfterDelete.bind(this)
      });
    }
  }, {
    key: "renderErroredItem",
    value: function renderErroredItem(item) {
      return this.renderItem(item, {
        isFailed: true,
        deleteFile: this.props.deleteFile,
        onAfterDelete: this.handleAfterDelete.bind(this)
      });
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, customAttrs) {
      var _this$props = this.props,
        adminUiConfig = _this$props.adminUiConfig,
        parentInfo = _this$props.parentInfo,
        contentCreatePermissionsConfig = _this$props.contentCreatePermissionsConfig,
        contentTypesMap = _this$props.contentTypesMap,
        currentLanguage = _this$props.currentLanguage;
      var attrs = _objectSpread({
        item: item,
        key: item.id,
        adminUiConfig: adminUiConfig,
        parentInfo: parentInfo,
        contentCreatePermissionsConfig: contentCreatePermissionsConfig,
        contentTypesMap: contentTypesMap,
        currentLanguage: currentLanguage,
        enableUploadedItemEdit: this.props.enableUploadedItemEdit
      }, customAttrs);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_upload_item_component__WEBPACK_IMPORTED_MODULE_2__["default"], attrs);
    }
  }, {
    key: "render",
    value: function render() {
      var itemsToUpload = this.props.itemsToUpload;
      var _this$state = this.state,
        items = _this$state.items,
        erroredItems = _this$state.erroredItems;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list__items"
      }, itemsToUpload.map(this.renderItemToUpload.bind(this)), erroredItems.map(this.renderErroredItem.bind(this)), items.map(this.renderUploadedItem.bind(this))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

UploadListComponent.propTypes = {
  itemsToUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  onAfterUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  createFileStruct: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  publishFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  deleteFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  checkCanUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      fallbackContentType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      maxFileSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
    }).isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    locationPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    language: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  }).isRequired,
  contentCreatePermissionsConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  contentTypesMap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  currentLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  removeItemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onAfterDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  enableUploadedItemEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
UploadListComponent.defaultProps = {
  itemsToUpload: [],
  currentLanguage: '',
  onAfterDelete: function onAfterDelete() {},
  enableUploadedItemEdit: true
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-popup/upload.popup.component.js"
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-popup/upload.popup.component.js ***!
  \*********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js");
/* harmony import */ var _common_tooltip_popup_tooltip_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/tooltip-popup/tooltip.popup.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/tooltip-popup/tooltip.popup.component.js");
/* harmony import */ var _drop_area_drop_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../drop-area/drop.area.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/drop-area/drop.area.component.js");
/* harmony import */ var _upload_list_upload_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../upload-list/upload.list.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.list.component.js");
/* harmony import */ var _universal_discovery_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../universal-discovery/universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../..//common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }










var CLASS_SCROLL_DISABLED = 'ibexa-scroll-disabled';
var UploadPopupModule = /*#__PURE__*/function (_Component) {
  function UploadPopupModule(props) {
    var _this;
    _classCallCheck(this, UploadPopupModule);
    _this = _callSuper(this, UploadPopupModule, [props]);
    _this.refTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this.rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
    return _this;
  }
  _inherits(UploadPopupModule, _Component);
  return _createClass(UploadPopupModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.rootDOMElement.classList.add(CLASS_SCROLL_DISABLED);
      (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_3__.parse)(this.refTooltip.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.document.body.classList.remove(CLASS_SCROLL_DISABLED);
    }
  }, {
    key: "getContentTypesMaxFileSize",
    value: function getContentTypesMaxFileSize() {
      var _this$props$adminUiCo = this.props.adminUiConfig.multiFileUpload,
        locationMappings = _this$props$adminUiCo.locationMappings,
        defaultMappings = _this$props$adminUiCo.defaultMappings,
        defaultMaxFileSize = _this$props$adminUiCo.maxFileSize;
      var mappings = locationMappings.length ? locationMappings : defaultMappings;
      var contentTypeIdentifiers = Object.keys(this.props.contentCreatePermissionsConfig);
      return contentTypeIdentifiers.reduce(function (maxFileSizes, contentTypeIdentifier) {
        var contentTypeName = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_4__.getContentTypeName)(contentTypeIdentifier);
        var contentTypeMapping = mappings.find(function (item) {
          return item.contentTypeIdentifier === contentTypeIdentifier;
        });
        maxFileSizes.push({
          name: contentTypeName,
          maxFileSize: (contentTypeMapping === null || contentTypeMapping === void 0 ? void 0 : contentTypeMapping.maxFileSize) || defaultMaxFileSize
        });
        return maxFileSizes;
      }, []);
    }
  }, {
    key: "render",
    value: function render() {
      var isUDW = this.context;
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
      var hasAnyUploadedItems = !!this.props.uploadedItems.length;
      var hasAnyItemsToUpload = !!this.props.itemsToUpload.length;
      var label = Translator.trans(/*@Desc("Upload")*/'upload_popup.label', {}, 'ibexa_multi_file_upload');
      var confirmBtnLabel = !hasAnyUploadedItems && !hasAnyItemsToUpload ? Translator.trans(/*@Desc("Close")*/'upload_popup.close_label', {}, 'ibexa_multi_file_upload') : Translator.trans(/*@Desc("Confirm and close")*/'upload_popup.confirm_label', {}, 'ibexa_multi_file_upload');
      var closeBtnLabel = Translator.trans(/*@Desc("Cancel pending upload")*/'upload_popup.cancel_label', {}, 'ibexa_multi_file_upload');
      var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_9__.createCssClassNames)({
        'c-upload-popup': true,
        'c-upload-popup--elevated': !!isUDW
      });
      var _this$props = this.props,
        addItemsToUpload = _this$props.addItemsToUpload,
        subtitle = _this$props.subtitle,
        visible = _this$props.visible,
        onConfirm = _this$props.onConfirm,
        onClose = _this$props.onClose,
        onAfterUpload = _this$props.onAfterUpload,
        createFileStruct = _this$props.createFileStruct,
        publishFile = _this$props.publishFile,
        deleteFile = _this$props.deleteFile,
        checkCanUpload = _this$props.checkCanUpload,
        adminUiConfig = _this$props.adminUiConfig,
        parentInfo = _this$props.parentInfo,
        contentCreatePermissionsConfig = _this$props.contentCreatePermissionsConfig,
        contentTypesMap = _this$props.contentTypesMap,
        currentLanguage = _this$props.currentLanguage,
        onAfterDelete = _this$props.onAfterDelete,
        itemsToUpload = _this$props.itemsToUpload,
        removeItemsToUpload = _this$props.removeItemsToUpload,
        preventDefaultAction = _this$props.preventDefaultAction,
        processUploadedFiles = _this$props.processUploadedFiles,
        enableUploadedItemEdit = _this$props.enableUploadedItemEdit;
      var tooltipAttrs = {
        subtitle: subtitle,
        visible: visible,
        onConfirm: onConfirm,
        onClose: onClose,
        title: Translator.trans(/*@Desc("Multi-file upload")*/'upload_popup.title', {}, 'ibexa_multi_file_upload'),
        confirmLabel: confirmBtnLabel,
        closeLabel: closeBtnLabel,
        confirmBtnAttrs: {
          disabled: itemsToUpload.length
        },
        closeBtnAttrs: {
          disabled: !itemsToUpload.length
        }
      };
      var listAttrs = {
        onAfterUpload: onAfterUpload,
        createFileStruct: createFileStruct,
        publishFile: publishFile,
        deleteFile: deleteFile,
        checkCanUpload: checkCanUpload,
        adminUiConfig: adminUiConfig,
        parentInfo: parentInfo,
        contentCreatePermissionsConfig: contentCreatePermissionsConfig,
        contentTypesMap: contentTypesMap,
        currentLanguage: currentLanguage,
        onAfterDelete: onAfterDelete,
        itemsToUpload: itemsToUpload,
        removeItemsToUpload: removeItemsToUpload,
        enableUploadedItemEdit: enableUploadedItemEdit
      };
      if (hasAnyUploadedItems || hasAnyItemsToUpload) {
        tooltipAttrs.extraClasses = 'c-tooltip-popup--with-uploaded-items';
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: className,
        ref: this.refTooltip
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_tooltip_popup_tooltip_popup_component__WEBPACK_IMPORTED_MODULE_5__["default"], tooltipAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-popup__label"
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_drop_area_drop_area_component__WEBPACK_IMPORTED_MODULE_6__["default"], {
        addItemsToUpload: addItemsToUpload,
        maxFileSizes: this.getContentTypesMaxFileSize(),
        preventDefaultAction: preventDefaultAction,
        processUploadedFiles: processUploadedFiles
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_upload_list_upload_list_component__WEBPACK_IMPORTED_MODULE_7__["default"], listAttrs)));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
UploadPopupModule.propTypes = {
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  visible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  itemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  uploadedItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  onAfterUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  createFileStruct: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  publishFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  deleteFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  checkCanUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      fallbackContentType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      maxFileSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
    }).isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    locationPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    language: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  }).isRequired,
  preventDefaultAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  processUploadedFiles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  contentTypesMap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  currentLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  addItemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  removeItemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  contentCreatePermissionsConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onAfterDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  enableUploadedItemEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
UploadPopupModule.defaultProps = {
  subtitle: '',
  visible: true,
  itemsToUpload: [],
  uploadedItems: [],
  currentLanguage: '',
  contentCreatePermissionsConfig: {},
  onConfirm: function onConfirm() {},
  onClose: function onClose() {},
  onAfterDelete: function onAfterDelete() {},
  enableUploadedItemEdit: true
};
UploadPopupModule.contextType = _universal_discovery_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.UDWContext;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadPopupModule);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/config.loader.js"
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/config.loader.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _multi_file_upload_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multi.file.upload.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js");

(function (ibexa) {
  ibexa.addConfig('modules.MultiFileUpload', _multi_file_upload_module__WEBPACK_IMPORTED_MODULE_0__["default"]);
})(window.ibexa);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js"
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fileSizeToString: () => (/* binding */ fileSizeToString)
/* harmony export */ });
/* harmony import */ var _common_helpers_text_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helpers/text.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/text.helper.js");


// @deprecated, will be removed in 5.0
var fileSizeToString = _common_helpers_text_helper__WEBPACK_IMPORTED_MODULE_0__.fileSizeToString;

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js"
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUBITEMS_TRIGGER_ID: () => (/* binding */ SUBITEMS_TRIGGER_ID),
/* harmony export */   UDW_TRIGGER_ID: () => (/* binding */ UDW_TRIGGER_ID),
/* harmony export */   "default": () => (/* binding */ MultiFileUploadModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _components_upload_popup_upload_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/upload-popup/upload.popup.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-popup/upload.popup.component.js");
/* harmony import */ var _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/multi.file.upload.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/services/multi.file.upload.service.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var UDW_TRIGGER_ID = 'UDW';
var SUBITEMS_TRIGGER_ID = 'SUBITEMS';
var MultiFileUploadModule = /*#__PURE__*/function (_Component) {
  function MultiFileUploadModule(props) {
    var _this;
    _classCallCheck(this, MultiFileUploadModule);
    _this = _callSuper(this, MultiFileUploadModule, [props]);
    var popupVisible = true;
    _this.configRootNode = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getRootDOMElement)();
    _this._itemsUploaded = [];
    if (!props.itemsToUpload || !props.itemsToUpload.length) {
      popupVisible = false;
    }
    _this.handleDropOnWindow = _this.handleDropOnWindow.bind(_this);
    _this.handleAfterUpload = _this.handleAfterUpload.bind(_this);
    _this.handleAfterDelete = _this.handleAfterDelete.bind(_this);
    _this.showUploadPopup = _this.showUploadPopup.bind(_this);
    _this.hidePopup = _this.hidePopup.bind(_this);
    _this.confirmPopup = _this.confirmPopup.bind(_this);
    _this.processUploadedFiles = _this.processUploadedFiles.bind(_this);
    _this.setUdwStateOpened = _this.setUdwStateOpened.bind(_this);
    _this.setUdwStateClosed = _this.setUdwStateClosed.bind(_this);
    _this.addItemsToUpload = _this.addItemsToUpload.bind(_this);
    _this.removeItemsToUpload = _this.removeItemsToUpload.bind(_this);
    _this.state = {
      udwOpened: false,
      popupVisible: popupVisible,
      itemsToUpload: props.itemsToUpload,
      allowDropOnWindow: true,
      uploadDisabled: Object.values(props.contentCreatePermissionsConfig).every(function (isEnabled) {
        return !isEnabled;
      })
    };
    return _this;
  }
  _inherits(MultiFileUploadModule, _Component);
  return _createClass(MultiFileUploadModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.manageDropEvent();
      this.configRootNode.addEventListener('ibexa-udw-opened', this.setUdwStateOpened, false);
      this.configRootNode.addEventListener('ibexa-udw-closed', this.setUdwStateClosed, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.manageDropEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.configRootNode.removeEventListener('ibexa-udw-opened', this.setUdwStateOpened, false);
      this.configRootNode.removeEventListener('ibexa-udw-closed', this.setUdwStateClosed, false);
    }
  }, {
    key: "setUdwStateOpened",
    value: function setUdwStateOpened() {
      this.setState({
        udwOpened: true
      });
    }
  }, {
    key: "setUdwStateClosed",
    value: function setUdwStateClosed() {
      this.setState({
        udwOpened: false
      });
    }
  }, {
    key: "manageDropEvent",
    value: function manageDropEvent() {
      var _this$state = this.state,
        uploadDisabled = _this$state.uploadDisabled,
        popupVisible = _this$state.popupVisible,
        itemsToUpload = _this$state.itemsToUpload;
      if (!uploadDisabled && !popupVisible && !itemsToUpload.length) {
        this.configRootNode.addEventListener('drop', this.handleDropOnWindow, false);
        this.configRootNode.addEventListener('dragover', this.preventDefaultAction, false);
      }
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          popupVisible: false,
          allowDropOnWindow: true
        });
      });
      this.props.onPopupClose(this._itemsUploaded);
      this._itemsUploaded = [];
    }
  }, {
    key: "confirmPopup",
    value: function confirmPopup() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          popupVisible: false,
          allowDropOnWindow: true
        });
      });
      this.props.onPopupConfirm(this._itemsUploaded);
      if (this.props.triggerId === SUBITEMS_TRIGGER_ID && !!this._itemsUploaded.length) {
        window.location.reload();
      }
      this._itemsUploaded = [];
    }
  }, {
    key: "showUploadPopup",
    value: function showUploadPopup() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          popupVisible: true,
          itemsToUpload: [],
          allowDropOnWindow: false
        });
      });
    }
  }, {
    key: "handleAfterUpload",
    value: function handleAfterUpload(itemsUploaded) {
      this._itemsUploaded = itemsUploaded;
    }
  }, {
    key: "handleAfterDelete",
    value: function handleAfterDelete(deletedItem) {
      this._itemsUploaded = this._itemsUploaded.filter(function (data) {
        return data.id !== deletedItem.id;
      });
    }
  }, {
    key: "handleDropOnWindow",
    value: function handleDropOnWindow(event) {
      this.preventDefaultAction(event);
      event.stopImmediatePropagation();
      var itemsToUpload = this.processUploadedFiles(event);

      // Covers the case when dragging and dropping page elements inside the browser,
      // like links, images, etc.
      if (!this.state.allowDropOnWindow || !itemsToUpload.length || this.state.udwOpened) {
        return;
      }
      this.configRootNode.removeEventListener('drop', this.handleDropOnWindow, false);
      this.configRootNode.removeEventListener('dragover', this.preventDefaultAction, false);
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          itemsToUpload: itemsToUpload,
          popupVisible: true,
          allowDropOnWindow: false
        });
      });
    }
  }, {
    key: "extractDroppedFilesList",
    value: function extractDroppedFilesList(event) {
      var list;
      if (event.nativeEvent) {
        list = event.nativeEvent.dataTransfer || event.nativeEvent.target;
      } else {
        list = event.dataTransfer;
      }
      return list;
    }
  }, {
    key: "processUploadedFiles",
    value: function processUploadedFiles(event) {
      var list = this.extractDroppedFilesList(event);
      return Array.from(list.files).map(function (file) {
        return {
          id: Math.floor(Math.random() * Date.now()),
          file: file
        };
      });
    }
  }, {
    key: "preventDefaultAction",
    value: function preventDefaultAction(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "renderBtn",
    value: function renderBtn() {
      if (!this.props.withUploadButton) {
        return null;
      }
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var uploadDisabled = this.state.uploadDisabled;
      var label = Translator.trans(/*@Desc("Upload")*/'multi_file_upload_open_btn.label', {}, 'ibexa_multi_file_upload');
      var isTriggeredBySubitems = this.props.triggerId === SUBITEMS_TRIGGER_ID;
      var buttonClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_7__.createCssClassNames)({
        'ibexa-btn btn': true,
        'ibexa-btn--secondary ibexa-btn--small': !isTriggeredBySubitems,
        'ibexa-btn--ghost': isTriggeredBySubitems
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: buttonClassName,
        onClick: this.showUploadPopup,
        disabled: uploadDisabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "upload",
        extraClasses: "ibexa-icon--small"
      }), " ", label);
    }
  }, {
    key: "addItemsToUpload",
    value: function addItemsToUpload(items) {
      this.setState(function (prevState) {
        var newItems = items.filter(function (item) {
          return !prevState.itemsToUpload.find(function (stateItem) {
            return stateItem.id === item.id;
          });
        });
        if (newItems.length) {
          return {
            itemsToUpload: [].concat(_toConsumableArray(prevState.itemsToUpload), _toConsumableArray(newItems))
          };
        }
      });
    }
  }, {
    key: "removeItemsToUpload",
    value: function removeItemsToUpload(items) {
      var itemsIds = items.map(function (item) {
        return item.id;
      });
      this.setState(function (prevState) {
        var itemsToUpload = prevState.itemsToUpload.filter(function (stateItem) {
          return !itemsIds.includes(stateItem.id);
        });
        if (itemsToUpload.length !== prevState.itemsToUpload.length) {
          return {
            itemsToUpload: itemsToUpload
          };
        }
      });
    }
  }, {
    key: "renderPopup",
    value: function renderPopup() {
      if (!this.state.popupVisible) {
        return null;
      }
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var subtitle = Translator.trans(/*@Desc("Under %name%")*/'multi_file_upload_popup.subtitle', {
        name: this.props.parentInfo.name
      }, 'ibexa_multi_file_upload');
      var attrs = _objectSpread(_objectSpread({}, this.props), {}, {
        subtitle: this.props.parentInfo.name ? subtitle : '',
        visible: true,
        onClose: this.hidePopup,
        onConfirm: this.confirmPopup,
        itemsToUpload: this.state.itemsToUpload,
        uploadedItems: this._itemsUploaded,
        onAfterUpload: this.handleAfterUpload,
        onAfterDelete: this.handleAfterDelete,
        preventDefaultAction: this.preventDefaultAction,
        processUploadedFiles: this.processUploadedFiles,
        addItemsToUpload: this.addItemsToUpload,
        removeItemsToUpload: this.removeItemsToUpload,
        contentCreatePermissionsConfig: this.props.contentCreatePermissionsConfig,
        enableUploadedItemEdit: this.props.triggerId === SUBITEMS_TRIGGER_ID
      });
      return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_upload_popup_upload_popup_component__WEBPACK_IMPORTED_MODULE_4__["default"], attrs), this.configRootNode);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-mfu"
      }, this.renderBtn(), this.renderPopup());
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

MultiFileUploadModule.propTypes = {
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)).isRequired,
      fallbackContentType: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)).isRequired,
      maxFileSize: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
    }).isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    locationPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    language: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired
  }).isRequired,
  checkCanUpload: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  createFileStruct: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  deleteFile: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onPopupClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onPopupConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  publishFile: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  itemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  withUploadButton: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  contentCreatePermissionsConfig: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  contentTypesMap: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  currentLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  triggerId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
MultiFileUploadModule.defaultProps = {
  checkCanUpload: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_5__.checkCanUpload,
  createFileStruct: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_5__.createFileStruct,
  deleteFile: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_5__.deleteFile,
  onPopupClose: function onPopupClose() {},
  onPopupConfirm: function onPopupConfirm() {},
  publishFile: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_5__.publishFile,
  itemsToUpload: [],
  withUploadButton: true,
  currentLanguage: '',
  contentCreatePermissionsConfig: {},
  triggerId: SUBITEMS_TRIGGER_ID
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/services/multi.file.upload.service.js"
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/services/multi.file.upload.service.js ***!
  \*********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkCanUpload: () => (/* binding */ checkCanUpload),
/* harmony export */   createFileStruct: () => (/* binding */ createFileStruct),
/* harmony export */   deleteFile: () => (/* binding */ deleteFile),
/* harmony export */   publishFile: () => (/* binding */ publishFile)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Resources/public/js/scripts/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js");


var handleOnReadyStateChange = function handleOnReadyStateChange(xhr, onSuccess, onError) {
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr.status === 0 && xhr.statusText === '') {
    // request aborted
    return;
  }
  if (xhr.status >= 400 || !xhr.status) {
    onError(xhr);
    return;
  }
  onSuccess(JSON.parse(xhr.response));
};
var handleRequestResponse = function handleRequestResponse(response) {
  if (!response.ok) {
    throw Error(response.text());
  }
  return response;
};
var readFile = function readFile(file, resolve, reject) {
  var _this = this;
  this.addEventListener('load', function () {
    return resolve({
      fileReader: _this,
      file: file
    });
  }, false);
  this.addEventListener('error', function () {
    return reject();
  }, false);
  this.readAsDataURL(file);
};
var findFileTypeMapping = function findFileTypeMapping(mappings, file) {
  return mappings.find(function (item) {
    return item.mimeTypes.find(function (type) {
      return type === file.type;
    });
  });
};
var checkIsFileWithinMimeTypes = function checkIsFileWithinMimeTypes(mimeTypes, file) {
  return !!mimeTypes.find(function (type) {
    return type === file.type;
  });
};
var isMimeTypeAllowed = function isMimeTypeAllowed(mappings, file) {
  return !!findFileTypeMapping(mappings, file);
};
var checkFileTypeAllowed = function checkFileTypeAllowed(file, locationMapping, config) {
  return !locationMapping ? config.defaultMappings.some(function (mapping) {
    return checkIsFileWithinMimeTypes(mapping.mimeTypes, file);
  }) : isMimeTypeAllowed(locationMapping.mappings, file);
};
var detectContentTypeMapping = function detectContentTypeMapping(file, parentInfo, config) {
  var locationMapping = config.locationMappings.find(function (item) {
    return item.contentTypeIdentifier === parentInfo.contentTypeIdentifier;
  });
  var mappings = locationMapping ? locationMapping.mappings : config.defaultMappings;
  return findFileTypeMapping(mappings, file) || config.fallbackContentType;
};
var getContentTypeByIdentifier = function getContentTypeByIdentifier(identifier) {
  var _getRestInfo = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRestInfo)(),
    instanceUrl = _getRestInfo.instanceUrl,
    token = _getRestInfo.token,
    siteaccess = _getRestInfo.siteaccess,
    accessToken = _getRestInfo.accessToken;
  var request = new Request("".concat(instanceUrl, "/api/ibexa/v2/content/types?identifier=").concat(identifier), {
    method: 'GET',
    headers: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTypeInfoList+json'
      }
    }),
    credentials: 'same-origin',
    mode: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestMode)({
      instanceUrl: instanceUrl
    })
  });
  return fetch(request).then(handleRequestResponse);
};
var getFieldDefinitionByIdentifier = function getFieldDefinitionByIdentifier(contentTypeId, fieldIdentifier) {
  var _getRestInfo2 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRestInfo)(),
    instanceUrl = _getRestInfo2.instanceUrl,
    token = _getRestInfo2.token,
    siteaccess = _getRestInfo2.siteaccess,
    accessToken = _getRestInfo2.accessToken;
  var request = new Request("".concat(instanceUrl, "/api/ibexa/v2/content/types/").concat(contentTypeId, "/fieldDefinition/").concat(fieldIdentifier), {
    method: 'GET',
    headers: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.FieldDefinition+json'
      }
    }),
    credentials: 'same-origin',
    mode: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestMode)({
      instanceUrl: instanceUrl
    })
  });
  return fetch(request).then(handleRequestResponse);
};
var prepareStruct = function prepareStruct(_ref, data, contentErrorCallback) {
  var parentInfo = _ref.parentInfo,
    config = _ref.config,
    languageCode = _ref.languageCode;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
  var parentLocation = "/api/ibexa/v2/content/locations".concat(parentInfo.locationPath);
  parentLocation = parentLocation.endsWith('/') ? parentLocation.slice(0, -1) : parentLocation;
  var mapping = detectContentTypeMapping(data.file, parentInfo, config.multiFileUpload);
  return getContentTypeByIdentifier(mapping.contentTypeIdentifier).then(function (response) {
    return response.json();
  })["catch"](function () {
    contentErrorCallback(Translator.trans(/*@Desc("Cannot get content type by identifier")*/'cannot_get_content_type_identifier.message', {}, 'ibexa_multi_file_upload'));
  }).then(function (response) {
    var splitedFileNameNoExtension = data.file.name.split('.').slice(0, -1);
    var nameFieldValue = splitedFileNameNoExtension.join(' ');
    var fileValue = {
      fileName: data.file.name,
      data: data.fileReader.result.replace(/^.*;base64,/, '')
    };
    var contentType = response.ContentTypeInfoList.ContentType[0];
    var contentFieldIdentifier = mapping.contentFieldIdentifier;
    return getFieldDefinitionByIdentifier(contentType.id, contentFieldIdentifier).then(function (parsedResponse) {
      return parsedResponse.json();
    })["catch"](function () {
      contentErrorCallback(Translator.trans(/*@Desc("Cannot get content type by identifier")*/'cannot_get_content_type_identifier.message', {}, 'ibexa_multi_file_upload'));
    }).then(function (parsedResponse) {
      var fieldDefinition = parsedResponse.FieldDefinition;
      if (fieldDefinition.fieldType === 'ezimage') {
        fileValue.alternativeText = data.file.name;
      }
      var fields = [{
        fieldDefinitionIdentifier: mapping.nameFieldIdentifier,
        fieldValue: nameFieldValue
      }, {
        fieldDefinitionIdentifier: contentFieldIdentifier,
        fieldValue: fileValue
      }];
      var struct = {
        ContentCreate: {
          ContentType: {
            _href: contentType._href
          },
          mainLanguageCode: languageCode !== null && languageCode !== void 0 ? languageCode : parentInfo.language,
          LocationCreate: {
            ParentLocation: {
              _href: parentLocation
            },
            sortField: 'PATH',
            sortOrder: 'ASC'
          },
          Section: null,
          alwaysAvailable: true,
          remoteId: null,
          modificationDate: new Date().toISOString(),
          fields: {
            field: fields
          }
        }
      };
      return struct;
    })["catch"](function () {
      contentErrorCallback(Translator.trans(/*@Desc("Cannot create content structure")*/'cannot_create_content_structure.message', {}, 'ibexa_multi_file_upload'));
    });
  })["catch"](function () {
    contentErrorCallback(Translator.trans(/*@Desc("Cannot create content structure")*/'cannot_create_content_structure.message', {}, 'ibexa_multi_file_upload'));
  });
};
var createDraft = function createDraft(struct, requestEventHandlers) {
  var _getRestInfo3 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRestInfo)(),
    instanceUrl = _getRestInfo3.instanceUrl,
    token = _getRestInfo3.token,
    siteaccess = _getRestInfo3.siteaccess,
    accessToken = _getRestInfo3.accessToken;
  var xhr = new XMLHttpRequest();
  var body = JSON.stringify(struct);
  var headers = (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
    token: token,
    siteaccess: siteaccess,
    accessToken: accessToken,
    extraHeaders: {
      Accept: 'application/vnd.ibexa.api.Content+json',
      'Content-Type': 'application/vnd.ibexa.api.ContentCreate+json'
    }
  });
  return new Promise(function (resolve, reject) {
    xhr.open('POST', "".concat(instanceUrl, "/api/ibexa/v2/content/objects"), true);
    xhr.onreadystatechange = handleOnReadyStateChange.bind(null, xhr, resolve, reject);
    if (requestEventHandlers && Object.keys(requestEventHandlers).length) {
      var uploadEvents = requestEventHandlers.upload;
      if (uploadEvents && Object.keys(uploadEvents).length) {
        xhr.upload.onabort = uploadEvents.onabort;
        xhr.upload.onerror = reject;
        xhr.upload.onload = uploadEvents.onload;
        xhr.upload.onprogress = uploadEvents.onprogress;
        xhr.upload.ontimeout = uploadEvents.ontimeout;
      }
      xhr.onerror = reject;
      xhr.onloadstart = requestEventHandlers.onloadstart;
    }
    for (var headerType in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, headerType)) {
        xhr.setRequestHeader(headerType, headers[headerType]);
      }
    }
    xhr.send(body);
  });
};
var publishDraft = function publishDraft(data) {
  if (!(data !== null && data !== void 0 && data.Content)) {
    return Promise.reject('Cannot publish content based on an uploaded file');
  }
  var _getRestInfo4 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRestInfo)(),
    instanceUrl = _getRestInfo4.instanceUrl,
    token = _getRestInfo4.token,
    siteaccess = _getRestInfo4.siteaccess,
    accessToken = _getRestInfo4.accessToken;
  var request = new Request("".concat(instanceUrl).concat(data.Content.CurrentVersion.Version._href), {
    method: 'POST',
    headers: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        'X-HTTP-Method-Override': 'PUBLISH'
      }
    }),
    mode: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponse);
};
var canCreateContent = function canCreateContent(file, parentInfo, config) {
  if (!Object.prototype.hasOwnProperty.call(config, 'contentCreatePermissionsConfig') || !config.contentCreatePermissionsConfig) {
    return true;
  }
  var contentTypeConfig = detectContentTypeMapping(file, parentInfo, config);
  return config.contentCreatePermissionsConfig[contentTypeConfig.contentTypeIdentifier];
};
var getMaxFileSize = function getMaxFileSize(file, parentInfo, config) {
  var _detectContentTypeMap = detectContentTypeMapping(file, parentInfo, config),
    contentMaxFileSize = _detectContentTypeMap.maxFileSize;
  return contentMaxFileSize || config.maxFileSize;
};
var checkCanUpload = function checkCanUpload(file, parentInfo, config, errorCallback) {
  var errorMsgs = [];
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
  var locationMapping = config.locationMappings.find(function (item) {
    return item.contentTypeIdentifier === parentInfo.contentTypeIdentifier;
  });
  var maxFileSize = getMaxFileSize(file, parentInfo, config);
  if (!canCreateContent(file, parentInfo, config)) {
    errorMsgs.push(Translator.trans(/*@Desc("You don’t have permission to create this content item.")*/'disallowed_content_type.message', {}, 'ibexa_multi_file_upload'));
  }
  if (!checkFileTypeAllowed(file, locationMapping, config)) {
    errorMsgs.push(Translator.trans(/*@Desc("File type is not allowed")*/'disallowed_type.message', {}, 'ibexa_multi_file_upload'));
  }
  if (file.size > maxFileSize) {
    errorMsgs.push(Translator.trans(/*@Desc("File size is not allowed")*/'disallowed_size.message', {}, 'ibexa_multi_file_upload'));
  }
  if (errorMsgs.length) {
    errorCallback(errorMsgs);
    return false;
  }
  return true;
};
var createFileStruct = function createFileStruct(file, params, contentErrorCallback) {
  return new Promise(readFile.bind(new FileReader(), file)).then(function (fileData) {
    return prepareStruct(params, fileData, contentErrorCallback);
  });
};
var publishFile = function publishFile(data, requestEventHandlers, successCallback, contentErrorCallback) {
  createDraft(data, requestEventHandlers).then(publishDraft).then(successCallback)["catch"](function () {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
    contentErrorCallback(Translator.trans(/*@Desc("An error occurred while publishing a file")*/'general.error.message', {}, 'ibexa_multi_file_upload'));
  });
};
var deleteFile = function deleteFile(struct, callback, contentErrorCallback) {
  var _getRestInfo5 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRestInfo)(),
    instanceUrl = _getRestInfo5.instanceUrl,
    token = _getRestInfo5.token,
    siteaccess = _getRestInfo5.siteaccess,
    accessToken = _getRestInfo5.accessToken;
  var request = new Request("".concat(instanceUrl).concat(struct.Content._href), {
    method: 'DELETE',
    headers: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken
    }),
    mode: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(handleRequestResponse).then(callback)["catch"](function () {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
    contentErrorCallback(Translator.trans(/*@Desc("An error occurred while deleting a file")*/'delete.error.message', {}, 'ibexa_multi_file_upload'));
  });
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js"
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js ***!
  \********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLoadedLocationsReducer: () => (/* binding */ useLoadedLocationsReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var initialState = [{
  parentLocationId: 1,
  subitems: []
}];
var cutLocationsAfter = function cutLocationsAfter(state, action) {
  var itemIndex = state.findIndex(function (data) {
    return data.parentLocationId === action.locationId;
  });
  if (itemIndex === -1) {
    return state;
  }
  return state.slice(0, itemIndex + 1);
};
var updateLocationsMap = function updateLocationsMap(state, action) {
  var parentLocationIndex = state.findIndex(function (location) {
    return location.parentLocationId === action.data.parentLocationId;
  });
  var updatedState = _toConsumableArray(state);
  if (parentLocationIndex !== -1) {
    updatedState[parentLocationIndex] = action.data;
    return updatedState;
  }
  var childrenIndex = state.findIndex(function (data) {
    return data.subitems.find(function (item) {
      return item.location.id === action.data.parentLocationId;
    });
  });
  if (childrenIndex !== -1) {
    updatedState = updatedState.slice(0, childrenIndex + 1);
  }
  updatedState.push(action.data);
  return updatedState;
};
var setLocations = function setLocations(state, action) {
  return action.data;
};
var clearLoactions = function clearLoactions() {
  return [];
};
var loadedLocationsReducer = function loadedLocationsReducer(state, action) {
  switch (action.type) {
    case 'CUT_LOCATIONS':
      return cutLocationsAfter(state, action);
    case 'UPDATE_LOCATIONS':
      return updateLocationsMap(state, action);
    case 'SET_LOCATIONS':
      return setLocations(state, action);
    case 'CLEAR_LOCATIONS':
      return clearLoactions();
    default:
      throw new Error();
  }
};
var useLoadedLocationsReducer = function useLoadedLocationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(loadedLocationsReducer, state),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    loadedLocationsMap = _useReducer2[0],
    dispatchLoadedLocationsAction = _useReducer2[1];
  return [loadedLocationsMap, dispatchLoadedLocationsAction];
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedItemsReducer.js"
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedItemsReducer.js ***!
  \******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_SELECTED_ITEMS: () => (/* binding */ ADD_SELECTED_ITEMS),
/* harmony export */   CHANGE_MULTIPLE_SETTING: () => (/* binding */ CHANGE_MULTIPLE_SETTING),
/* harmony export */   CLEAR_SELECTED_ITEMS: () => (/* binding */ CLEAR_SELECTED_ITEMS),
/* harmony export */   REMOVE_SELECTED_ITEMS: () => (/* binding */ REMOVE_SELECTED_ITEMS),
/* harmony export */   TOGGLE_SELECTED_ITEMS: () => (/* binding */ TOGGLE_SELECTED_ITEMS),
/* harmony export */   UPDATE_SELECTED_ITEMS: () => (/* binding */ UPDATE_SELECTED_ITEMS),
/* harmony export */   useSelectedItemsReducer: () => (/* binding */ useSelectedItemsReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var ADD_SELECTED_ITEMS = 'ADD_SELECTED_ITEMS';
var UPDATE_SELECTED_ITEMS = 'UPDATE_SELECTED_ITEMS';
var REMOVE_SELECTED_ITEMS = 'REMOVE_SELECTED_ITEMS';
var TOGGLE_SELECTED_ITEMS = 'TOGGLE_SELECTED_ITEMS';
var CLEAR_SELECTED_ITEMS = 'CLEAR_SELECTED_ITEMS';
var CHANGE_MULTIPLE_SETTING = 'CHANGE_MULTIPLE_SETTING';
var checkIsItemSelected = function checkIsItemSelected(selectedItems, item) {
  return selectedItems.some(function (selectedItem) {
    return selectedItem.type === item.type && selectedItem.id === item.id;
  });
};
var filterOutSelectedItems = function filterOutSelectedItems(selectedItems, items) {
  return items.filter(function (item) {
    return !checkIsItemSelected(selectedItems, item);
  });
};
var checkIsValidSelection = function checkIsValidSelection(items, isMultiple, multipleItemsLimit) {
  return !isMultiple && items.length > 1 || isMultiple && multipleItemsLimit !== 0 && items.length > multipleItemsLimit;
};
var selectedItemsReducer = function selectedItemsReducer(state, action) {
  var items = state.items,
    isMultiple = state.isMultiple,
    multipleItemsLimit = state.multipleItemsLimit;
  switch (action.type) {
    case ADD_SELECTED_ITEMS:
      {
        var oldItemsWithoutNewItems = filterOutSelectedItems(action.items, items);
        var newItems = [].concat(_toConsumableArray(oldItemsWithoutNewItems), _toConsumableArray(action.items));
        if (checkIsValidSelection(newItems, isMultiple, multipleItemsLimit)) {
          throw new Error('useSelectedItemsReducer ADD_SELECTED_ITEMS: cannot select more than one item with single select.');
        }
        return _objectSpread(_objectSpread({}, state), {}, {
          items: newItems
        });
      }
    case UPDATE_SELECTED_ITEMS:
      {
        var updatedSelectedItems = _toConsumableArray(items);
        var _iterator = _createForOfIteratorHelper(action.items),
          _step;
        try {
          var _loop = function _loop() {
            var updatedItem = _step.value;
            var updatedItemIndex = updatedSelectedItems.findIndex(function (selectedItem) {
              return selectedItem.type === updatedItem.type && selectedItem.id === updatedItem.id;
            });
            if (updatedItemIndex > -1) {
              updatedSelectedItems[updatedItemIndex] = updatedItem;
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return _objectSpread(_objectSpread({}, state), {}, {
          items: updatedSelectedItems
        });
      }
    case REMOVE_SELECTED_ITEMS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: filterOutSelectedItems(action.itemsIdsWithTypes, items)
      });
    case TOGGLE_SELECTED_ITEMS:
      {
        var oldItemsWithoutDeselectedItems = filterOutSelectedItems(action.items, items);
        var newItemsWithoutDeselectedItems = filterOutSelectedItems(items, action.items);
        var _newItems = [].concat(_toConsumableArray(oldItemsWithoutDeselectedItems), _toConsumableArray(newItemsWithoutDeselectedItems));
        if (checkIsValidSelection(_newItems, isMultiple, multipleItemsLimit)) {
          throw new Error('useSelectedItemsReducer ADD_SELECTED_ITEMS: cannot select more than one item with single select.');
        }
        return _objectSpread(_objectSpread({}, state), {}, {
          items: _newItems
        });
      }
    case CLEAR_SELECTED_ITEMS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: []
      });
    case CHANGE_MULTIPLE_SETTING:
      if (!action.isMultiple && items.length > 1) {
        throw new Error('useSelectedItemsReducer CHANGE_MULTIPLE_SETTING: cannot set to single select when multiple items are selected.');
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        isMultiple: action.isMultiple
      });
    default:
      throw new Error();
  }
};
var useSelectedItemsReducer = function useSelectedItemsReducer(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    isMultiple = _ref.isMultiple,
    multipleItemsLimit = _ref.multipleItemsLimit;
  var initialState = {
    isMultiple: isMultiple,
    multipleItemsLimit: multipleItemsLimit,
    items: items
  };
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(selectedItemsReducer, initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    selectedItems = _useReducer2[0].items,
    dispatchSelectedItemsAction = _useReducer2[1];
  return {
    selectedItems: selectedItems,
    dispatchSelectedItemsAction: dispatchSelectedItemsAction
  };
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js"
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js ***!
  \**********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSelectedLocationsReducer: () => (/* binding */ useSelectedLocationsReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var initialState = [];
var selectedLocationsReducer = function selectedLocationsReducer(state, action) {
  switch (action.type) {
    case 'ADD_SELECTED_LOCATION':
      return [].concat(_toConsumableArray(state), [{
        location: action.location,
        permissions: action.permissions
      }]);
    case 'REMOVE_SELECTED_LOCATION':
      return state.filter(function (selectedItem) {
        return selectedItem.location.id !== action.id;
      });
    case 'ADD_SELECTED_LOCATIONS':
      return action.locations.reduce(function (selectedLocations, location) {
        return [].concat(_toConsumableArray(selectedLocations), [{
          location: location
        }]);
      }, state);
    case 'CLEAR_SELECTED_LOCATIONS':
      return [];
    case 'REPLACE_SELECTED_LOCATIONS':
      return action.locations;
    default:
      throw new Error();
  }
};
var useSelectedLocationsReducer = function useSelectedLocationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(selectedLocationsReducer, state),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    selectedLocations = _useReducer2[0],
    dispatchSelectedLocationsAction = _useReducer2[1];
  return [selectedLocations, dispatchSelectedLocationsAction];
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js"
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js ***!
  \*************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AGGREGATIONS_LIMIT: () => (/* binding */ AGGREGATIONS_LIMIT),
/* harmony export */   QUERY_LIMIT: () => (/* binding */ QUERY_LIMIT),
/* harmony export */   addBookmark: () => (/* binding */ addBookmark),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   fetchAdminConfig: () => (/* binding */ fetchAdminConfig),
/* harmony export */   findContentInfo: () => (/* binding */ findContentInfo),
/* harmony export */   findLocationsById: () => (/* binding */ findLocationsById),
/* harmony export */   findLocationsByParentLocationId: () => (/* binding */ findLocationsByParentLocationId),
/* harmony export */   findLocationsBySearchQuery: () => (/* binding */ findLocationsBySearchQuery),
/* harmony export */   findSuggestions: () => (/* binding */ findSuggestions),
/* harmony export */   loadAccordionData: () => (/* binding */ loadAccordionData),
/* harmony export */   loadBookmarks: () => (/* binding */ loadBookmarks),
/* harmony export */   loadContentInfo: () => (/* binding */ loadContentInfo),
/* harmony export */   loadContentTypes: () => (/* binding */ loadContentTypes),
/* harmony export */   loadLocationsWithPermissions: () => (/* binding */ loadLocationsWithPermissions),
/* harmony export */   removeBookmark: () => (/* binding */ removeBookmark)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/notification.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js");
/* harmony import */ var _common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helpers/request.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
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




var DEFAULT_INSTANCE_URL = window.location.origin;
var HEADERS_CREATE_VIEW = {
  Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
  'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1'
};
var ENDPOINT_CREATE_VIEW = '/api/ibexa/v2/views';
var ENDPOINT_BOOKMARK = '/api/ibexa/v2/bookmark';
var ENDPOINT_LOCATION = '/api/ibexa/v2/module/universal-discovery/location';
var ENDPOINT_ACCORDION = '/api/ibexa/v2/module/universal-discovery/accordion';
var ENDPOINT_LOCATION_LIST = '/api/ibexa/v2/module/universal-discovery/locations';
var QUERY_LIMIT = 50;
var AGGREGATIONS_LIMIT = 4;
var addLanguageCodeToCreateViewEndpoint = function addLanguageCodeToCreateViewEndpoint(body, languageCode) {
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getAdminUiConfig)();
  body.ViewInput.languageCode = languageCode !== null && languageCode !== void 0 ? languageCode : adminUiConfig.languages.priority[0];
};
var showErrorNotificationAbortWrapper = function showErrorNotificationAbortWrapper(error) {
  if ((error === null || error === void 0 ? void 0 : error.name) === 'AbortError') {
    return;
  }
  return (0,_common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.showErrorNotification)(error);
};
var mapSubitems = function mapSubitems(subitems) {
  return subitems.locations.map(function (location) {
    var mappedSubitems = {
      location: location.Location
    };
    if (subitems.versions) {
      var version = subitems.versions.find(function (_ref) {
        var Version = _ref.Version;
        return Version.VersionInfo.Content._href === location.Location.Content._href;
      });
      mappedSubitems.version = version.Version;
    }
    return mappedSubitems;
  });
};
var findLocationsByParentLocationId = function findLocationsByParentLocationId(_ref2, callback) {
  var token = _ref2.token,
    siteaccess = _ref2.siteaccess,
    accessToken = _ref2.accessToken,
    parentLocationId = _ref2.parentLocationId,
    _ref2$limit = _ref2.limit,
    limit = _ref2$limit === void 0 ? QUERY_LIMIT : _ref2$limit,
    _ref2$offset = _ref2.offset,
    offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
    _ref2$sortClause = _ref2.sortClause,
    sortClause = _ref2$sortClause === void 0 ? 'DatePublished' : _ref2$sortClause,
    _ref2$sortOrder = _ref2.sortOrder,
    sortOrder = _ref2$sortOrder === void 0 ? 'ascending' : _ref2$sortOrder,
    _ref2$gridView = _ref2.gridView,
    gridView = _ref2$gridView === void 0 ? false : _ref2$gridView,
    _ref2$instanceUrl = _ref2.instanceUrl,
    instanceUrl = _ref2$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref2$instanceUrl;
  var url = "".concat(instanceUrl).concat(ENDPOINT_LOCATION, "/").concat(parentLocationId);
  if (gridView) {
    url += '/gridview';
  }
  var request = new Request("".concat(url, "?limit=").concat(limit, "&offset=").concat(offset, "&sortClause=").concat(sortClause, "&sortOrder=").concat(sortOrder), {
    method: 'GET',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var _response$LocationDat = response.LocationData,
      bookmarked = _response$LocationDat.bookmarked,
      location = _response$LocationDat.location,
      permissions = _response$LocationDat.permissions,
      subitems = _response$LocationDat.subitems,
      version = _response$LocationDat.version;
    var subitemsData = mapSubitems(subitems);
    var locationData = {
      location: location ? location.Location : null,
      version: version ? version.Version : null,
      totalCount: subitems.totalCount,
      subitems: subitemsData,
      bookmarked: bookmarked,
      permissions: permissions,
      parentLocationId: parentLocationId
    };
    callback(locationData);
  })["catch"](showErrorNotificationAbortWrapper);
};
var loadAccordionData = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref3, callback) {
    var token, siteaccess, accessToken, parentLocationId, _ref3$limit, limit, _ref3$sortClause, sortClause, _ref3$sortOrder, sortOrder, _ref3$gridView, gridView, _ref3$rootLocationId, rootLocationId, _ref3$instanceUrl, instanceUrl, url, request;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          token = _ref3.token, siteaccess = _ref3.siteaccess, accessToken = _ref3.accessToken, parentLocationId = _ref3.parentLocationId, _ref3$limit = _ref3.limit, limit = _ref3$limit === void 0 ? QUERY_LIMIT : _ref3$limit, _ref3$sortClause = _ref3.sortClause, sortClause = _ref3$sortClause === void 0 ? 'DatePublished' : _ref3$sortClause, _ref3$sortOrder = _ref3.sortOrder, sortOrder = _ref3$sortOrder === void 0 ? 'ascending' : _ref3$sortOrder, _ref3$gridView = _ref3.gridView, gridView = _ref3$gridView === void 0 ? false : _ref3$gridView, _ref3$rootLocationId = _ref3.rootLocationId, rootLocationId = _ref3$rootLocationId === void 0 ? 1 : _ref3$rootLocationId, _ref3$instanceUrl = _ref3.instanceUrl, instanceUrl = _ref3$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref3$instanceUrl;
          url = "".concat(instanceUrl).concat(ENDPOINT_ACCORDION, "/").concat(parentLocationId);
          if (gridView) {
            url += '/gridview';
          }
          request = new Request("".concat(url, "?limit=").concat(limit, "&sortClause=").concat(sortClause, "&sortOrder=").concat(sortOrder, "&rootLocationId=").concat(rootLocationId), {
            method: 'GET',
            headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
              token: token,
              siteaccess: siteaccess,
              accessToken: accessToken,
              extraHeaders: {
                Accept: 'application/json'
              }
            }),
            mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
              instanceUrl: instanceUrl
            }),
            credentials: 'same-origin'
          });
          fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
            var data = response.AccordionData;
            var mappedItems = data.breadcrumb.map(function (item) {
              var location = item.Location;
              var itemData = data.columns[location.id];
              var mappedItem = {
                location: location,
                totalCount: itemData ? itemData.subitems.totalCount : undefined,
                subitems: itemData ? mapSubitems(itemData.subitems) : [],
                parentLocationId: location.id,
                collapsed: !data.columns[location.id]
              };
              return mappedItem;
            });
            var rootLocationData = data.columns[1];
            var lastLocationData = data.columns[parentLocationId];
            if (rootLocationData) {
              mappedItems.unshift({
                totalCount: rootLocationData ? rootLocationData.subitems.totalCount : undefined,
                subitems: rootLocationData ? mapSubitems(rootLocationData.subitems) : [],
                parentLocationId: 1,
                collapsed: false
              });
            }
            mappedItems.push({
              location: lastLocationData.location.Location,
              version: lastLocationData.version.Version,
              totalCount: lastLocationData ? lastLocationData.subitems.totalCount : undefined,
              subitems: lastLocationData ? mapSubitems(lastLocationData.subitems) : [],
              bookmarked: lastLocationData.bookmarked,
              permissions: lastLocationData.permissions,
              parentLocationId: parentLocationId
            });
            callback(mappedItems);
          })["catch"](showErrorNotificationAbortWrapper);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function loadAccordionData(_x, _x2) {
    return _ref4.apply(this, arguments);
  };
}();
var findLocationsBySearchQuery = function findLocationsBySearchQuery(_ref5, callback) {
  var token = _ref5.token,
    siteaccess = _ref5.siteaccess,
    accessToken = _ref5.accessToken,
    query = _ref5.query,
    aggregations = _ref5.aggregations,
    filters = _ref5.filters,
    _ref5$sortClause = _ref5.sortClause,
    sortClause = _ref5$sortClause === void 0 ? 'DatePublished' : _ref5$sortClause,
    _ref5$sortOrder = _ref5.sortOrder,
    sortOrder = _ref5$sortOrder === void 0 ? 'ascending' : _ref5$sortOrder,
    _ref5$limit = _ref5.limit,
    limit = _ref5$limit === void 0 ? QUERY_LIMIT : _ref5$limit,
    _ref5$offset = _ref5.offset,
    offset = _ref5$offset === void 0 ? 0 : _ref5$offset,
    _ref5$languageCode = _ref5.languageCode,
    languageCode = _ref5$languageCode === void 0 ? null : _ref5$languageCode,
    _ref5$instanceUrl = _ref5.instanceUrl,
    instanceUrl = _ref5$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref5$instanceUrl,
    _ref5$useAlwaysAvaila = _ref5.useAlwaysAvailable,
    useAlwaysAvailable = _ref5$useAlwaysAvaila === void 0 ? true : _ref5$useAlwaysAvaila;
  var body = {
    ViewInput: {
      identifier: "udw-locations-by-search-query-".concat(encodeURIComponent(query.FullTextCriterion)),
      "public": false,
      useAlwaysAvailable: useAlwaysAvailable,
      LocationQuery: {
        FacetBuilders: {},
        SortClauses: sortClause && sortOrder ? _defineProperty({}, sortClause, sortOrder) : {},
        Query: query,
        Aggregations: aggregations,
        Filters: filters,
        limit: limit,
        offset: offset
      }
    }
  };
  addLanguageCodeToCreateViewEndpoint(body, languageCode);
  var abortController = new AbortController();
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_CREATE_VIEW), {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_CREATE_VIEW
    }),
    body: JSON.stringify(body),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin',
    signal: abortController.signal
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var _response$View$Result = response.View.Result,
      count = _response$View$Result.count,
      searchAggregations = _response$View$Result.aggregations,
      searchHits = _response$View$Result.searchHits;
    var items = searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Location;
    });
    callback({
      items: items,
      aggregations: searchAggregations,
      count: count
    });
  })["catch"](showErrorNotificationAbortWrapper);
  return {
    abortController: abortController
  };
};
var findLocationsById = function findLocationsById(_ref7, callback) {
  var token = _ref7.token,
    siteaccess = _ref7.siteaccess,
    accessToken = _ref7.accessToken,
    id = _ref7.id,
    _ref7$noLanguageCode = _ref7.noLanguageCode,
    noLanguageCode = _ref7$noLanguageCode === void 0 ? false : _ref7$noLanguageCode,
    _ref7$useAlwaysAvaila = _ref7.useAlwaysAvailable,
    useAlwaysAvailable = _ref7$useAlwaysAvaila === void 0 ? undefined : _ref7$useAlwaysAvaila,
    _ref7$limit = _ref7.limit,
    limit = _ref7$limit === void 0 ? QUERY_LIMIT : _ref7$limit,
    _ref7$offset = _ref7.offset,
    offset = _ref7$offset === void 0 ? 0 : _ref7$offset,
    _ref7$instanceUrl = _ref7.instanceUrl,
    instanceUrl = _ref7$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref7$instanceUrl;
  var body = {
    ViewInput: {
      identifier: "udw-locations-by-id-".concat(id),
      "public": false,
      LocationQuery: {
        FacetBuilders: {},
        SortClauses: {
          SectionIdentifier: 'ascending'
        },
        Filter: {
          LocationIdCriterion: id
        },
        limit: limit,
        offset: offset
      },
      useAlwaysAvailable: useAlwaysAvailable
    }
  };
  if (useAlwaysAvailable !== undefined) {
    body.ViewInput.useAlwaysAvailable = useAlwaysAvailable;
  }
  if (!noLanguageCode) {
    addLanguageCodeToCreateViewEndpoint(body);
  }
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_CREATE_VIEW), {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_CREATE_VIEW
    }),
    body: JSON.stringify(body),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Location;
    });
    callback(items);
  })["catch"](showErrorNotificationAbortWrapper);
};
var findContentInfo = function findContentInfo(_ref8, callback) {
  var token = _ref8.token,
    siteaccess = _ref8.siteaccess,
    accessToken = _ref8.accessToken,
    contentId = _ref8.contentId,
    _ref8$limit = _ref8.limit,
    limit = _ref8$limit === void 0 ? QUERY_LIMIT : _ref8$limit,
    _ref8$offset = _ref8.offset,
    offset = _ref8$offset === void 0 ? 0 : _ref8$offset,
    _ref8$instanceUrl = _ref8.instanceUrl,
    instanceUrl = _ref8$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref8$instanceUrl;
  var body = {
    ViewInput: {
      identifier: "udw-load-content-info-".concat(contentId),
      "public": false,
      ContentQuery: {
        FacetBuilders: {},
        SortClauses: {},
        Filter: {
          ContentIdCriterion: "".concat(contentId)
        },
        limit: limit,
        offset: offset
      }
    }
  };
  addLanguageCodeToCreateViewEndpoint(body);
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_CREATE_VIEW), {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_CREATE_VIEW
    }),
    body: JSON.stringify(body),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Content;
    });
    callback(items);
  })["catch"](showErrorNotificationAbortWrapper);
};
var loadBookmarks = function loadBookmarks(_ref9, callback) {
  var token = _ref9.token,
    siteaccess = _ref9.siteaccess,
    accessToken = _ref9.accessToken,
    limit = _ref9.limit,
    offset = _ref9.offset,
    _ref9$instanceUrl = _ref9.instanceUrl,
    instanceUrl = _ref9$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref9$instanceUrl;
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_BOOKMARK, "?limit=").concat(limit, "&offset=").concat(offset), {
    method: 'GET',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTypeInfoList+json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var count = response.BookmarkList.count;
    var items = response.BookmarkList.items.map(function (item) {
      return item.Location;
    });
    callback({
      count: count,
      items: items
    });
  })["catch"](showErrorNotificationAbortWrapper);
};
var toggleBookmark = function toggleBookmark(_ref0, callback, method) {
  var siteaccess = _ref0.siteaccess,
    token = _ref0.token,
    accessToken = _ref0.accessToken,
    locationId = _ref0.locationId,
    _ref0$instanceUrl = _ref0.instanceUrl,
    instanceUrl = _ref0$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref0$instanceUrl;
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_BOOKMARK, "/").concat(locationId), {
    method: method,
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponseStatus).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var addBookmark = function addBookmark(options, callback) {
  toggleBookmark(options, callback, 'POST');
};
var removeBookmark = function removeBookmark(options, callback) {
  toggleBookmark(options, callback, 'DELETE');
};
var loadContentTypes = function loadContentTypes(_ref1, callback) {
  var token = _ref1.token,
    siteaccess = _ref1.siteaccess,
    accessToken = _ref1.accessToken,
    _ref1$instanceUrl = _ref1.instanceUrl,
    instanceUrl = _ref1$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref1$instanceUrl;
  var request = new Request("".concat(instanceUrl, "/api/ibexa/v2/content/types"), {
    method: 'GET',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTypeInfoList+json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var createDraft = function createDraft(_ref10, callback) {
  var token = _ref10.token,
    siteaccess = _ref10.siteaccess,
    accessToken = _ref10.accessToken,
    contentId = _ref10.contentId,
    _ref10$instanceUrl = _ref10.instanceUrl,
    instanceUrl = _ref10$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref10$instanceUrl;
  var request = new Request("".concat(instanceUrl, "/api/ibexa/v2/content/objects/").concat(contentId, "/currentversion"), {
    method: 'COPY',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.VersionUpdate+json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var loadContentInfo = function loadContentInfo(_ref11, callback) {
  var token = _ref11.token,
    siteaccess = _ref11.siteaccess,
    accessToken = _ref11.accessToken,
    contentId = _ref11.contentId,
    _ref11$noLanguageCode = _ref11.noLanguageCode,
    noLanguageCode = _ref11$noLanguageCode === void 0 ? false : _ref11$noLanguageCode,
    _ref11$useAlwaysAvail = _ref11.useAlwaysAvailable,
    useAlwaysAvailable = _ref11$useAlwaysAvail === void 0 ? undefined : _ref11$useAlwaysAvail,
    _ref11$limit = _ref11.limit,
    limit = _ref11$limit === void 0 ? QUERY_LIMIT : _ref11$limit,
    _ref11$offset = _ref11.offset,
    offset = _ref11$offset === void 0 ? 0 : _ref11$offset,
    signal = _ref11.signal,
    _ref11$instanceUrl = _ref11.instanceUrl,
    instanceUrl = _ref11$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref11$instanceUrl;
  var body = {
    ViewInput: {
      identifier: "udw-load-content-info-".concat(contentId),
      "public": false,
      ContentQuery: {
        FacetBuilders: {},
        SortClauses: {},
        Filter: {
          ContentIdCriterion: "".concat(contentId)
        },
        limit: limit,
        offset: offset
      },
      useAlwaysAvailable: useAlwaysAvailable
    }
  };
  if (useAlwaysAvailable !== undefined) {
    body.ViewInput.useAlwaysAvailable = useAlwaysAvailable;
  }
  if (!noLanguageCode) {
    addLanguageCodeToCreateViewEndpoint(body);
  }
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_CREATE_VIEW), {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_CREATE_VIEW
    }),
    body: JSON.stringify(body),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request, {
    signal: signal
  }).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Content;
    });
    callback(items);
  })["catch"](showErrorNotificationAbortWrapper);
};
var loadLocationsWithPermissions = function loadLocationsWithPermissions(_ref12, callback) {
  var token = _ref12.token,
    siteaccess = _ref12.siteaccess,
    accessToken = _ref12.accessToken,
    locationIds = _ref12.locationIds,
    signal = _ref12.signal,
    _ref12$instanceUrl = _ref12.instanceUrl,
    instanceUrl = _ref12$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref12$instanceUrl;
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_LOCATION_LIST, "?locationIds=").concat(locationIds), {
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.VersionUpdate+json'
      }
    }),
    method: 'GET',
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request, {
    signal: signal
  }).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var fetchAdminConfig = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_ref13) {
    var token, siteaccess, accessToken, _ref13$instanceUrl, instanceUrl, request, adminUiData, adminUiConfig;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          token = _ref13.token, siteaccess = _ref13.siteaccess, accessToken = _ref13.accessToken, _ref13$instanceUrl = _ref13.instanceUrl, instanceUrl = _ref13$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref13$instanceUrl;
          request = new Request("".concat(instanceUrl, "/api/ibexa/v2/application-config"), {
            method: 'GET',
            headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
              token: token,
              siteaccess: siteaccess,
              accessToken: accessToken,
              extraHeaders: {
                Accept: 'application/json'
              }
            }),
            mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
              instanceUrl: instanceUrl
            }),
            credentials: 'same-origin'
          });
          _context2.n = 1;
          return fetch(request);
        case 1:
          adminUiData = _context2.v;
          _context2.n = 2;
          return adminUiData.json();
        case 2:
          adminUiConfig = _context2.v;
          return _context2.a(2, adminUiConfig.ApplicationConfig);
      }
    }, _callee2);
  }));
  return function fetchAdminConfig(_x3) {
    return _ref14.apply(this, arguments);
  };
}();
var findSuggestions = function findSuggestions(_ref15, callback) {
  var siteaccess = _ref15.siteaccess,
    token = _ref15.token,
    parentLocationId = _ref15.parentLocationId,
    accessToken = _ref15.accessToken,
    _ref15$instanceUrl = _ref15.instanceUrl,
    instanceUrl = _ref15$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref15$instanceUrl;
  var body = {
    ViewInput: {
      identifier: 'view_with_aggregation',
      LocationQuery: {
        // '0' is a proper choice here because aggregation will still provide proper results.
        // We care only about the aggregation itself, not about fetching records.
        limit: 0,
        offset: 0,
        Filter: {
          ParentLocationIdCriterion: parentLocationId
        },
        Aggregations: [{
          ContentTypeTermAggregation: {
            name: 'suggestions',
            limit: AGGREGATIONS_LIMIT
          }
        }]
      }
    }
  };
  addLanguageCodeToCreateViewEndpoint(body);
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: _objectSpread({}, HEADERS_CREATE_VIEW)
    }),
    body: JSON.stringify(body),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js"
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js ***!
  \***************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveTabContext: () => (/* binding */ ActiveTabContext),
/* harmony export */   AllowConfirmationContext: () => (/* binding */ AllowConfirmationContext),
/* harmony export */   AllowRedirectsContext: () => (/* binding */ AllowRedirectsContext),
/* harmony export */   AllowedContentTypesContext: () => (/* binding */ AllowedContentTypesContext),
/* harmony export */   BlockFetchLocationHookContext: () => (/* binding */ BlockFetchLocationHookContext),
/* harmony export */   CancelContext: () => (/* binding */ CancelContext),
/* harmony export */   ConfirmContext: () => (/* binding */ ConfirmContext),
/* harmony export */   ConfirmItemsContext: () => (/* binding */ ConfirmItemsContext),
/* harmony export */   ContainersOnlyContext: () => (/* binding */ ContainersOnlyContext),
/* harmony export */   ContentOnTheFlyConfigContext: () => (/* binding */ ContentOnTheFlyConfigContext),
/* harmony export */   ContentOnTheFlyDataContext: () => (/* binding */ ContentOnTheFlyDataContext),
/* harmony export */   ContentTypesInfoMapContext: () => (/* binding */ ContentTypesInfoMapContext),
/* harmony export */   ContentTypesMapContext: () => (/* binding */ ContentTypesMapContext),
/* harmony export */   CreateContentWidgetContext: () => (/* binding */ CreateContentWidgetContext),
/* harmony export */   CurrentViewContext: () => (/* binding */ CurrentViewContext),
/* harmony export */   DropdownPortalRefContext: () => (/* binding */ DropdownPortalRefContext),
/* harmony export */   EditOnTheFlyDataContext: () => (/* binding */ EditOnTheFlyDataContext),
/* harmony export */   GridActiveLocationIdContext: () => (/* binding */ GridActiveLocationIdContext),
/* harmony export */   LoadedLocationsMapContext: () => (/* binding */ LoadedLocationsMapContext),
/* harmony export */   MarkedLocationIdContext: () => (/* binding */ MarkedLocationIdContext),
/* harmony export */   MultipleConfigContext: () => (/* binding */ MultipleConfigContext),
/* harmony export */   RestInfoContext: () => (/* binding */ RestInfoContext),
/* harmony export */   RootLocationIdContext: () => (/* binding */ RootLocationIdContext),
/* harmony export */   SNACKBAR_ACTIONS: () => (/* binding */ SNACKBAR_ACTIONS),
/* harmony export */   SORTING_OPTIONS: () => (/* binding */ SORTING_OPTIONS),
/* harmony export */   SearchTextContext: () => (/* binding */ SearchTextContext),
/* harmony export */   SelectedItemsContext: () => (/* binding */ SelectedItemsContext),
/* harmony export */   SelectedLocationsContext: () => (/* binding */ SelectedLocationsContext),
/* harmony export */   SelectionConfigContext: () => (/* binding */ SelectionConfigContext),
/* harmony export */   SnackbarActionsContext: () => (/* binding */ SnackbarActionsContext),
/* harmony export */   SortOrderContext: () => (/* binding */ SortOrderContext),
/* harmony export */   SortingContext: () => (/* binding */ SortingContext),
/* harmony export */   StartingLocationIdContext: () => (/* binding */ StartingLocationIdContext),
/* harmony export */   SuggestionsStorageContext: () => (/* binding */ SuggestionsStorageContext),
/* harmony export */   TabsConfigContext: () => (/* binding */ TabsConfigContext),
/* harmony export */   TabsContext: () => (/* binding */ TabsContext),
/* harmony export */   TitleContext: () => (/* binding */ TitleContext),
/* harmony export */   UDWContext: () => (/* binding */ UDWContext),
/* harmony export */   VIEWS: () => (/* binding */ VIEWS),
/* harmony export */   ViewContext: () => (/* binding */ ViewContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/helpers/deep.clone.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _hooks_useLoadedLocationsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useLoadedLocationsReducer */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js");
/* harmony import */ var _hooks_useSelectedLocationsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useSelectedLocationsReducer */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _hooks_useSelectedItemsReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useSelectedItemsReducer */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedItemsReducer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _document$querySelect, _document$querySelect2;
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











var _window = window,
  document = _window.document;
var CLASS_SCROLL_DISABLED = 'ibexa-scroll-disabled';
var SEARCH_TAB_ID = 'search';
var defaultRestInfo = {
  accsessToken: null,
  instanceUrl: window.location.origin,
  token: (_document$querySelect = document.querySelector('meta[name="CSRF-Token"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content,
  siteaccess: (_document$querySelect2 = document.querySelector('meta[name="SiteAccess"]')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.content
};
var SORTING_OPTIONS = [{
  value: 'date:asc',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__option-label"
    }, Translator.trans(/*@Desc("Date")*/'sorting.date.label', {}, 'ibexa_universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "back",
      extraClasses: "c-simple-dropdown__arrow-down ibexa-icon--tiny-small"
    }));
  },
  selectedLabel: function selectedLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__option-label"
    }, Translator.trans(/*@Desc("Sort by date")*/'sorting.date.selected_label', {}, 'ibexa_universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "back",
      extraClasses: "c-simple-dropdown__arrow-down ibexa-icon--tiny-small"
    }));
  },
  sortClause: 'DatePublished',
  sortOrder: 'ascending'
}, {
  value: 'date:desc',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__option-label"
    }, Translator.trans(/*@Desc("Date")*/'sorting.date.label', {}, 'ibexa_universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "back",
      extraClasses: "c-simple-dropdown__arrow-up ibexa-icon--tiny-small"
    }));
  },
  selectedLabel: function selectedLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__option-label"
    }, Translator.trans(/*@Desc("Sort by date")*/'sorting.date.selected_label', {}, 'ibexa_universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "back",
      extraClasses: "c-simple-dropdown__arrow-up ibexa-icon--tiny-small"
    }));
  },
  sortClause: 'DatePublished',
  sortOrder: 'descending'
}, {
  value: 'name:asc',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Name A-Z")*/'sorting.name.asc.label', {}, 'ibexa_universal_discovery_widget');
  },
  selectedLabel: function selectedLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Sort by name A-Z")*/'sorting.name.asc.selected_label', {}, 'ibexa_universal_discovery_widget');
  },
  sortClause: 'ContentName',
  sortOrder: 'ascending'
}, {
  value: 'name:desc',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Name Z-A")*/'sorting.name.desc.label', {}, 'ibexa_universal_discovery_widget');
  },
  selectedLabel: function selectedLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Sort by name Z-A")*/'sorting.name.desc.selected_label', {}, 'ibexa_universal_discovery_widget');
  },
  sortClause: 'ContentName',
  sortOrder: 'descending'
}];
var VIEWS = [{
  value: 'finder',
  iconName: 'panels',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Panels view")*/'sorting.panels.view', {}, 'ibexa_universal_discovery_widget');
  }
}, {
  value: 'grid',
  iconName: 'view-grid',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Grid view")*/'sorting.grid.view', {}, 'ibexa_universal_discovery_widget');
  }
}, {
  value: 'tree',
  iconName: 'content-tree',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Tree view")*/'sorting.tree.view', {}, 'ibexa_universal_discovery_widget');
  }
}];
var SNACKBAR_ACTIONS = {
  INSERT: 'insert',
  DUPLICATE: 'duplicate',
  EDIT: 'edit',
  DOWNLOAD: 'download',
  DELETE: 'delete',
  TOGGLE_SELECTION: 'toggleSelection'
};
var UDWContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var RestInfoContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var AllowRedirectsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var AllowConfirmationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentTypesMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentTypesInfoMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var MultipleConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContainersOnlyContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var AllowedContentTypesContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ActiveTabContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TabsConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TabsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TitleContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CancelContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ConfirmContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ConfirmItemsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SortingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SortOrderContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CurrentViewContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var MarkedLocationIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var StartingLocationIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var LoadedLocationsMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var RootLocationIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectedLocationsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectionConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectedItemsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CreateContentWidgetContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentOnTheFlyDataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentOnTheFlyConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var EditOnTheFlyDataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var BlockFetchLocationHookContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SearchTextContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DropdownPortalRefContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SuggestionsStorageContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var GridActiveLocationIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SnackbarActionsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ViewContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var UniversalDiscoveryModule = function UniversalDiscoveryModule(props) {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
  var restInfo = props.restInfo;
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getAdminUiConfig)();
  var tabs = adminUiConfig.universalDiscoveryWidget.tabs;
  var defaultMarkedLocationId = props.startingLocationId || props.rootLocationId;
  var abortControllerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var dropdownPortalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      activeTab: props.activeTab,
      previousActiveTab: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    _useState2$ = _useState2[0],
    activeTab = _useState2$.activeTab,
    previousActiveTab = _useState2$.previousActiveTab,
    setActiveTabsData = _useState2[1];
  var setActiveTab = function setActiveTab(activeTabNew) {
    return setActiveTabsData(function (_ref) {
      var activeTabOld = _ref.activeTab;
      return {
        activeTab: activeTabNew,
        previousActiveTab: activeTabOld
      };
    });
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeSortClause),
    _useState4 = _slicedToArray(_useState3, 2),
    sorting = _useState4[0],
    setSorting = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeSortOrder),
    _useState6 = _slicedToArray(_useState5, 2),
    sortOrder = _useState6[0],
    setSortOrder = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeView),
    _useState8 = _slicedToArray(_useState7, 2),
    currentView = _useState8[0],
    setCurrentView = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultMarkedLocationId !== 1 ? defaultMarkedLocationId : null),
    _useState0 = _slicedToArray(_useState9, 2),
    markedLocationId = _useState0[0],
    setMarkedLocationId = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    createContentVisible = _useState10[0],
    setCreateContentVisible = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    contentOnTheFlyData = _useState12[0],
    setContentOnTheFlyData = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    editOnTheFlyData = _useState14[0],
    setEditOnTheFlyData = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    contentTypesInfoMap = _useState16[0],
    setContentTypesInfoMap = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.startingLocationId && props.startingLocationId !== 1 && props.startingLocationId !== props.rootLocationId),
    _useState18 = _slicedToArray(_useState17, 2),
    isFetchLocationHookBlocked = _useState18[0],
    setIsFetchLocationHookBlocked = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    searchText = _useState20[0],
    setSearchText = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState22 = _slicedToArray(_useState21, 2),
    suggestionsStorage = _useState22[0],
    setSuggestionsStorage = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(markedLocationId),
    _useState24 = _slicedToArray(_useState23, 2),
    gridActiveLocationId = _useState24[0],
    setGridActiveLocationId = _useState24[1];
  var _useLoadedLocationsRe = (0,_hooks_useLoadedLocationsReducer__WEBPACK_IMPORTED_MODULE_5__.useLoadedLocationsReducer)([{
      parentLocationId: props.rootLocationId,
      subitems: []
    }]),
    _useLoadedLocationsRe2 = _slicedToArray(_useLoadedLocationsRe, 2),
    loadedLocationsMap = _useLoadedLocationsRe2[0],
    dispatchLoadedLocationsAction = _useLoadedLocationsRe2[1];
  var _useSelectedLocations = (0,_hooks_useSelectedLocationsReducer__WEBPACK_IMPORTED_MODULE_6__.useSelectedLocationsReducer)(),
    _useSelectedLocations2 = _slicedToArray(_useSelectedLocations, 2),
    selectedLocations = _useSelectedLocations2[0],
    dispatchSelectedLocationsAction = _useSelectedLocations2[1];
  var _useSelectedItemsRedu = (0,_hooks_useSelectedItemsReducer__WEBPACK_IMPORTED_MODULE_10__.useSelectedItemsReducer)({
      isMultiple: props.multiple,
      multipleItemsLimit: props.multipleItemsLimit
    }),
    selectedItems = _useSelectedItemsRedu.selectedItems,
    dispatchSelectedItemsAction = _useSelectedItemsRedu.dispatchSelectedItemsAction;
  var activeTabConfig = tabs.find(function (tab) {
    return tab.id === activeTab;
  });
  var Tab = activeTabConfig.component;
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
    'm-ud': true,
    'm-ud--locations-selected': !!selectedLocations.length && props.allowConfirmation
  });
  var selectionConfigValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var _props$deselectAlertT;
    var deselectAlertTitle = (_props$deselectAlertT = props.deselectAlertTitle) !== null && _props$deselectAlertT !== void 0 ? _props$deselectAlertT : Translator.trans(/*@Desc("Items already added to the list are marked as selected and unable to deselect.")*/'init_selected_locations.alert.title', {}, 'ibexa_universal_discovery_widget');
    return {
      isInitLocationsDeselectionBlocked: props.isInitLocationsDeselectionBlocked,
      initSelectedLocationsIds: props.selectedLocations,
      initSelectedItems: props.initSelectedItems,
      deselectAlertTitle: deselectAlertTitle
    };
  }, []);
  var loadPermissions = function loadPermissions() {
    var locationIds = selectedLocations.filter(function (item) {
      return !item.permissions;
    }).map(function (item) {
      return item.location.id;
    }).join(',');
    if (!locationIds) {
      return Promise.resolve(null);
    }
    return new Promise(function (resolve) {
      (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadLocationsWithPermissions)(_objectSpread(_objectSpread({}, restInfo), {}, {
        locationIds: locationIds,
        signal: abortControllerRef.current.signal
      }), function (response) {
        return resolve(response);
      });
    });
  };
  var loadVersions = function loadVersions() {
    var signal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var locationsWithoutVersion = selectedLocations.filter(function (selectedItem) {
      return !selectedItem.location.ContentInfo.Content.CurrentVersion.Version;
    });
    if (!locationsWithoutVersion.length) {
      return Promise.resolve([]);
    }
    var contentIds = locationsWithoutVersion.map(function (item) {
      return item.location.ContentInfo.Content._id;
    }).join(',');
    return new Promise(function (resolve) {
      (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadContentInfo)(_objectSpread(_objectSpread({}, restInfo), {}, {
        noLanguageCode: true,
        useAlwaysAvailable: true,
        contentId: contentIds,
        signal: signal
      }), function (response) {
        return resolve(response);
      });
    });
  };
  var contentTypesMapGlobal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return Object.values(adminUiConfig.contentTypes).reduce(function (contentTypesMap, contentTypesGroup) {
      contentTypesGroup.forEach(function (contentType) {
        contentTypesMap[contentType.href] = contentType;
      });
      return contentTypesMap;
    }, {});
  }, [adminUiConfig.contentTypes]);
  var onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var selection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : selectedLocations;
    loadVersions().then(function (locationsWithVersions) {
      var clonedSelectedLocation = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(selection);
      if (Array.isArray(locationsWithVersions)) {
        locationsWithVersions.forEach(function (content) {
          var clonedLocation = clonedSelectedLocation.find(function (clonedItem) {
            return clonedItem.location.ContentInfo.Content._id === content._id;
          });
          if (clonedLocation) {
            clonedLocation.location.ContentInfo.Content.CurrentVersion.Version = content.CurrentVersion.Version;
          }
        });
      }
      var updatedLocations = clonedSelectedLocation.map(function (selectedItem) {
        var clonedLocation = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedItem.location);
        var contentType = clonedLocation.ContentInfo.Content.ContentType;
        clonedLocation.ContentInfo.Content.ContentTypeInfo = contentTypesInfoMap[contentType._href];
        return clonedLocation;
      });
      props.onConfirm(updatedLocations);
    });
  }, [selectedLocations, contentTypesInfoMap, props.onConfirm]);
  var onItemsConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var selection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : selectedItems;
    return props.onItemsConfirm(selection);
  }, [selectedItems, props.onItemsConfirm]);
  var makeSearch = function makeSearch(value) {
    if (activeTab !== SEARCH_TAB_ID) {
      setActiveTab('search');
    }
    setSearchText(value);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _adminUiConfig$univer;
    var addContentTypesInfo = function addContentTypesInfo(contentTypes) {
      setContentTypesInfoMap(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), contentTypes);
      });
    };
    var handleLoadContentTypes = function handleLoadContentTypes(response) {
      var contentTypesMap = response.ContentTypeInfoList.ContentType.reduce(function (contentTypesList, item) {
        contentTypesList[item._href] = item;
        return contentTypesList;
      }, {});
      addContentTypesInfo(contentTypesMap);
    };
    (_adminUiConfig$univer = adminUiConfig.universalDiscoveryWidget.contentTypesLoaders) === null || _adminUiConfig$univer === void 0 || _adminUiConfig$univer.forEach(function (contentTypesLoader) {
      return contentTypesLoader(addContentTypesInfo);
    });
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadContentTypes)(restInfo, handleLoadContentTypes);
    document.body.dispatchEvent(new CustomEvent('ibexa-udw-opened'));
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_8__.parse)(document.querySelector('.c-udw-tab'));
    return function () {
      document.body.dispatchEvent(new CustomEvent('ibexa-udw-closed'));
      (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_8__.hideAll)();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!props.selectedLocations.length) {
      return;
    }
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.findLocationsById)(_objectSpread(_objectSpread({}, restInfo), {}, {
      noLanguageCode: true,
      useAlwaysAvailable: true,
      id: props.selectedLocations.join(','),
      limit: props.selectedLocations.length
    }), function (locations) {
      var mappedLocation = props.selectedLocations.map(function (locationId) {
        var location = locations.find(function (_ref2) {
          var id = _ref2.id;
          return id === parseInt(locationId, 10);
        });
        return {
          location: location
        };
      });
      dispatchSelectedLocationsAction({
        type: 'REPLACE_SELECTED_LOCATIONS',
        locations: mappedLocation
      });
    });
  }, [props.selectedLocations]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _abortControllerRef$c;
    (_abortControllerRef$c = abortControllerRef.current) === null || _abortControllerRef$c === void 0 || _abortControllerRef$c.abort();
    abortControllerRef.current = new AbortController();
    Promise.all([loadPermissions(), loadVersions(abortControllerRef.current.signal)]).then(function (response) {
      var _response = _slicedToArray(response, 2),
        locationsWithPermissions = _response[0],
        locationsWithVersions = _response[1];
      if (!(locationsWithPermissions !== null && locationsWithPermissions !== void 0 && locationsWithPermissions.LocationList.locations.length) && !locationsWithVersions.length) {
        return;
      }
      var clonedSelectedLocation = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedLocations);
      locationsWithPermissions.LocationList.locations.forEach(function (item) {
        var locationWithoutPermissions = clonedSelectedLocation.find(function (selectedItem) {
          return selectedItem.location.id === item.location.Location.id;
        });
        if (locationWithoutPermissions) {
          locationWithoutPermissions.permissions = item.permissions;
        }
      });
      locationsWithVersions.forEach(function (content) {
        var clonedLocation = clonedSelectedLocation.find(function (clonedItem) {
          return clonedItem.location.ContentInfo.Content._id === content._id;
        });
        if (clonedLocation) {
          clonedLocation.location.ContentInfo.Content.CurrentVersion.Version = content.CurrentVersion.Version;
        }
      });
      dispatchSelectedLocationsAction({
        type: 'REPLACE_SELECTED_LOCATIONS',
        locations: clonedSelectedLocation
      });
    });
    return function () {
      var _abortControllerRef$c2;
      (_abortControllerRef$c2 = abortControllerRef.current) === null || _abortControllerRef$c2 === void 0 || _abortControllerRef$c2.abort();
    };
  }, [selectedLocations]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.body.classList.add(CLASS_SCROLL_DISABLED);
    return function () {
      document.body.classList.remove(CLASS_SCROLL_DISABLED);
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (currentView === 'grid') {
      if (loadedLocationsMap[loadedLocationsMap.length - 1]) {
        loadedLocationsMap[loadedLocationsMap.length - 1].subitems = [];
      }
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: loadedLocationsMap
      });
    } else if ((currentView === 'finder' || currentView === 'tree') && !!markedLocationId && markedLocationId !== loadedLocationsMap[loadedLocationsMap.length - 1].parentLocationId && loadedLocationsMap[loadedLocationsMap.length - 1].subitems.find(function (subitem) {
      return subitem.location.id === markedLocationId;
    })) {
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: {
          parentLocationId: markedLocationId,
          subitems: []
        }
      });
    }
  }, [currentView]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!props.startingLocationId || props.startingLocationId === _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.SYSTEM_ROOT_LOCATION_ID || props.startingLocationId === props.rootLocationId) {
      return;
    }
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadAccordionData)(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: props.startingLocationId,
      sortClause: sorting,
      sortOrder: sortOrder,
      gridView: currentView === 'grid',
      rootLocationId: props.rootLocationId
    }), function (locationsMap) {
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: locationsMap
      });
      setMarkedLocationId(props.startingLocationId);
      setIsFetchLocationHookBlocked(false);
    });
  }, [props.startingLocationId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var locationsMap = loadedLocationsMap.map(function (loadedLocation) {
      loadedLocation.subitems = [];
      return loadedLocation;
    });
    dispatchLoadedLocationsAction({
      type: 'SET_LOCATIONS',
      data: locationsMap
    });
  }, [sorting, sortOrder]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (currentView === 'grid') {
      setGridActiveLocationId(markedLocationId !== null && markedLocationId !== void 0 ? markedLocationId : defaultMarkedLocationId);
    }
  }, [currentView]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UDWContext.Provider, {
    value: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RestInfoContext.Provider, {
    value: restInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlockFetchLocationHookContext.Provider, {
    value: [isFetchLocationHookBlocked, setIsFetchLocationHookBlocked]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AllowRedirectsContext.Provider, {
    value: props.allowRedirects
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AllowConfirmationContext.Provider, {
    value: props.allowConfirmation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentTypesInfoMapContext.Provider, {
    value: contentTypesInfoMap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentTypesMapContext.Provider, {
    value: contentTypesMapGlobal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MultipleConfigContext.Provider, {
    value: [props.multiple, props.multipleItemsLimit]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContainersOnlyContext.Provider, {
    value: props.containersOnly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AllowedContentTypesContext.Provider, {
    value: props.allowedContentTypes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SnackbarActionsContext.Provider, {
    value: props.snackbarEnabledActions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActiveTabContext.Provider, {
    value: [activeTab, setActiveTab, previousActiveTab, props.activeTab]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabsContext.Provider, {
    value: tabs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabsConfigContext.Provider, {
    value: props.tabsConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TitleContext.Provider, {
    value: props.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CancelContext.Provider, {
    value: props.onCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ConfirmContext.Provider, {
    value: onConfirm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ConfirmItemsContext.Provider, {
    value: onItemsConfirm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SortingContext.Provider, {
    value: [sorting, setSorting]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SortOrderContext.Provider, {
    value: [sortOrder, setSortOrder]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CurrentViewContext.Provider, {
    value: [currentView, setCurrentView]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewContext.Provider, {
    value: {
      views: VIEWS
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MarkedLocationIdContext.Provider, {
    value: [markedLocationId, setMarkedLocationId]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StartingLocationIdContext.Provider, {
    value: props.startingLocationId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GridActiveLocationIdContext.Provider, {
    value: [gridActiveLocationId, setGridActiveLocationId]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadedLocationsMapContext.Provider, {
    value: [loadedLocationsMap, dispatchLoadedLocationsAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RootLocationIdContext.Provider, {
    value: props.rootLocationId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectionConfigContext.Provider, {
    value: selectionConfigValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedItemsContext.Provider, {
    value: {
      selectedItems: selectedItems,
      dispatchSelectedItemsAction: dispatchSelectedItemsAction
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedLocationsContext.Provider, {
    value: [selectedLocations, dispatchSelectedLocationsAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CreateContentWidgetContext.Provider, {
    value: [createContentVisible, setCreateContentVisible]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SuggestionsStorageContext.Provider, {
    value: [suggestionsStorage, setSuggestionsStorage]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentOnTheFlyDataContext.Provider, {
    value: [contentOnTheFlyData, setContentOnTheFlyData]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentOnTheFlyConfigContext.Provider, {
    value: props.contentOnTheFly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditOnTheFlyDataContext.Provider, {
    value: [editOnTheFlyData, setEditOnTheFlyData]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchTextContext.Provider, {
    value: [searchText, setSearchText, makeSearch]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DropdownPortalRefContext.Provider, {
    value: dropdownPortalRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tab, null)))))))))))))))))))))))))))))))))))))));
  /* eslint-enable max-len */
};
UniversalDiscoveryModule.propTypes = {
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onItemsConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  rootLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  startingLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  multipleItemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  containersOnly: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  allowedContentTypes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  activeSortClause: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  activeSortOrder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  activeView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  contentOnTheFly: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    allowedLanguages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    allowedLocations: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    preselectedLocation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    preselectedContentType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    hidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
    autoConfirmAfterPublish: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
  }).isRequired,
  tabsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
    priority: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
    hidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
  })).isRequired,
  selectedLocations: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  initSelectedItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  isInitLocationsDeselectionBlocked: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  deselectAlertTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  allowRedirects: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  allowConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  restInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    token: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    siteaccess: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    accsessToken: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    instanceUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  snackbarEnabledActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
UniversalDiscoveryModule.defaultProps = {
  onItemsConfirm: function onItemsConfirm() {},
  onCancel: null,
  activeTab: 'browse',
  rootLocationId: 1,
  startingLocationId: null,
  multiple: false,
  multipleItemsLimit: 1,
  containersOnly: false,
  activeSortClause: 'date',
  activeSortOrder: 'ascending',
  activeView: 'finder',
  selectedLocations: [],
  initSelectedItems: [],
  isInitLocationsDeselectionBlocked: false,
  deselectAlertTitle: null,
  restInfo: defaultRestInfo,
  snackbarEnabledActions: Object.values(SNACKBAR_ACTIONS)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UniversalDiscoveryModule);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg"
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg ***!
  \************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/about-info.31a3b8ee.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg"
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/about.d648fc1f.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg"
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/approved.8dcddbcc.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/article.87d9802e.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/back.daf9f5e9.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/blog.1bbae791.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/blog_post.4509899b.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg"
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg ***!
  \************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/caret-down.f72f2589.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg"
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/caret-up.c2ba7f03.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/checkmark.6bbaed08.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg"
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg ***!
  \**************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/circle-close.cf4e3719.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg"
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg ***!
  \**************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/content-tree.513377cf.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/create.948e3424.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/date.51e2752f.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/discard.7ab1b667.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg"
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/download.40d98643.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/drag.9b430792.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/duplicate.4961d378.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/edit.4fa25121.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg"
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg ***!
  \*************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/expand-left.251d3a23.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/fields.22fbf40a.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/file.f6e0bf0b.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/filters.59e95d7d.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/folder.977267fb.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/form.015bc963.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/gallery.7e496553.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg"
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/image.c05d71e7.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg"
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg ***!
  \**************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/landing_page.2e7e2424.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/notice.9e08cc1f.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/options.15578e01.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg"
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/place.d190c3f6.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/product.aa6dd0a1.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/qa-form.9e25b46c.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/search.548ac5f3.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/spinner.ab67bf41.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg"
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg ***!
  \********************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/system-information.d0dbc17c.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg"
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/trash.d1555488.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg"
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg ***!
  \**************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/upload-image.09f70b0c.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg"
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/upload.2c5ac915.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/user.19743a46.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg"
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg ***!
  \************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/user_group.82314755.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg"
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/video.c5fb6c8f.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/view-grid.1b49c5a6.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/view-list.2752b827.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg"
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/view.6c174a86.svg";

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/warning.449e4631.svg";

/***/ },

/***/ "prop-types"
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
(module) {

module.exports = PropTypes;

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = React;

/***/ },

/***/ "react-dom"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = ReactDOM;

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/config.loader.js"));
/******/ }
]);