(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-shipping-edit-js"],{

/***/ "./vendor/ibexa/shipping/src/bundle/Resources/public/js/edit.form.validator.js"
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/shipping/src/bundle/Resources/public/js/edit.form.validator.js ***!
  \*************************************************************************************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa) {
  var editForm = doc.querySelector('.ibexa-shipping-edit__form');
  var submitBtn = editForm.querySelector('.ibexa-shipping-edit__submit-btn');
  var inputsToValidate = _toConsumableArray(editForm.querySelectorAll('.ibexa-input[required]'));
  var scrollToInvalidInput = function scrollToInvalidInput() {
    var firstInvalidInput = editForm.querySelector('.ibexa-input.is-invalid');
    firstInvalidInput === null || firstInvalidInput === void 0 || firstInvalidInput.focus();
  };
  var validateField = function validateField(input) {
    var field = input.closest('.form-group');
    return ibexa.helpers.formValidation.validateIsEmptyField(field);
  };
  var validateForm = function validateForm(event) {
    event.preventDefault();
    var isFormValid = inputsToValidate.map(validateField).every(function (_ref) {
      var isValid = _ref.isValid;
      return isValid;
    });
    if (isFormValid) {
      editForm.submit();
    } else {
      scrollToInvalidInput();
    }
  };
  var attachTriggerToValidateFields = function attachTriggerToValidateFields() {
    inputsToValidate.forEach(function (input) {
      if (input.tagName.toLowerCase() === 'select') {
        input.addEventListener('change', function () {
          return validateField(input);
        }, false);
      } else {
        input.addEventListener('blur', function () {
          return validateField(input);
        }, false);
      }
    });
  };
  attachTriggerToValidateFields();
  submitBtn.addEventListener('click', validateForm, false);
})(window, window.document, window.ibexa);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/shipping/src/bundle/Resources/public/js/edit.form.validator.js"));
/******/ }
]);