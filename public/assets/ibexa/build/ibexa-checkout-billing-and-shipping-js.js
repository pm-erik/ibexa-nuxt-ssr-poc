"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-checkout-billing-and-shipping-js"],{

/***/ "./vendor/ibexa/checkout/src/bundle/Resources/public/js/billing.and.shipping.address.step.js"
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/checkout/src/bundle/Resources/public/js/billing.and.shipping.address.step.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_billing_and_shipping_address_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/billing.and.shipping.address.js */ "./vendor/ibexa/checkout/src/bundle/Resources/public/js/component/billing.and.shipping.address.js");

(function (global, doc) {
  var container = doc.querySelector('.ibexa-checkout__addresses-form');
  if (!container) {
    return;
  }
  var billingAndShipping = new _component_billing_and_shipping_address_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: container
  });
  billingAndShipping.init();
})(window, window.document);

/***/ },

/***/ "./vendor/ibexa/checkout/src/bundle/Resources/public/js/component/billing.and.shipping.address.js"
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/checkout/src/bundle/Resources/public/js/component/billing.and.shipping.address.js ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BillingAndShipping)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FORM_ELEMENT_TAGS = ['input', 'select', 'textarea'];
var BillingAndShipping = /*#__PURE__*/function () {
  function BillingAndShipping(options) {
    _classCallCheck(this, BillingAndShipping);
    this.container = options.container;
    this.copyCheckbox = this.container.querySelector('[data-ibexa-address-selector]');
    this.attachCopyBillingAddressListener = this.attachCopyBillingAddressListener.bind(this);
    this.setInitialFormDisabledState = this.setInitialFormDisabledState.bind(this);
    this.setFormDisabledState = this.setFormDisabledState.bind(this);
  }
  return _createClass(BillingAndShipping, [{
    key: "init",
    value: function init() {
      this.setInitialFormDisabledState();
      this.attachCopyBillingAddressListener();
    }
  }, {
    key: "setInitialFormDisabledState",
    value: function setInitialFormDisabledState() {
      if (!this.copyCheckbox) {
        return;
      }
      this.setFormDisabledState();
    }
  }, {
    key: "setFormDisabledState",
    value: function setFormDisabledState() {
      var ibexaAddressSelector = this.copyCheckbox.dataset.ibexaAddressSelector;
      var selectAddress = this.container.querySelector(ibexaAddressSelector);
      var isChecked = this.copyCheckbox.checked;
      if (FORM_ELEMENT_TAGS.includes(selectAddress.tagName.toLowerCase())) {
        selectAddress.disabled = isChecked;
      } else {
        var formElements = selectAddress.querySelectorAll(FORM_ELEMENT_TAGS.join(','));
        formElements.forEach(function (formElement) {
          formElement.disabled = isChecked;
        });
      }
    }
  }, {
    key: "attachCopyBillingAddressListener",
    value: function attachCopyBillingAddressListener() {
      var _this = this;
      if (!this.copyCheckbox) {
        return;
      }
      this.copyCheckbox.addEventListener('change', function () {
        _this.setFormDisabledState();
      });
    }
  }]);
}();


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/checkout/src/bundle/Resources/public/js/billing.and.shipping.address.step.js"));
/******/ }
]);