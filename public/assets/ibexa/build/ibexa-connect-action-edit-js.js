"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-connect-action-edit-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/object.instances.js"
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/object.instances.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearInstance: () => (/* binding */ clearInstance),
/* harmony export */   getInstance: () => (/* binding */ getInstance),
/* harmony export */   setInstance: () => (/* binding */ setInstance)
/* harmony export */ });
var setInstance = function setInstance(domElement, instance) {
  if (domElement.ibexaInstance) {
    throw new Error('Instance for this DOM element already exists!');
  }
  domElement.ibexaInstance = instance;
};
var getInstance = function getInstance(domElement) {
  return domElement.ibexaInstance;
};
var clearInstance = function clearInstance(domElement) {
  delete domElement.ibexaInstance;
};


/***/ },

/***/ "./vendor/ibexa/connect/src/bundle/Resources/public/js/action.edit.handler.js"
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/connect/src/bundle/Resources/public/js/action.edit.handler.js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_object_instances__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/object.instances */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/object.instances.js");

(function (global, doc) {
  var connectHandlerContainer = doc.querySelector('.ibexa-connect-action-edit-handler-options');
  if (!connectHandlerContainer) {
    return;
  }
  var connectHandlerRows = connectHandlerContainer.querySelectorAll('.ibexa-connect-action-edit-handler-options__row');
  var changeRowState = function changeRowState(event) {
    var visibleFormGroup = connectHandlerContainer.querySelector('.ibexa-connect-action-edit-handler-options__form-group:not([hidden])');
    var optionRow = event.currentTarget.closest('.ibexa-connect-action-edit-handler-options__row');
    var formGroup = optionRow.querySelector('.ibexa-connect-action-edit-handler-options__form-group');
    if (visibleFormGroup === formGroup) {
      return;
    }
    var visibleDropdown = visibleFormGroup.querySelector('.ibexa-dropdown');
    var visibleDropdownInstance = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_object_instances__WEBPACK_IMPORTED_MODULE_0__.getInstance)(visibleDropdown);
    visibleFormGroup.hidden = true;
    formGroup.hidden = false;
    visibleDropdownInstance.clearCurrentSelection();
    visibleDropdownInstance.selectOption('');
  };
  connectHandlerRows.forEach(function (connectHandlerRow) {
    var radioInput = connectHandlerRow.querySelector('.ibexa-connect-action-edit-handler-options__row-group--selector .ibexa-input--radio');
    radioInput.addEventListener('click', changeRowState, false);
  });
})(window, window.document);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/connect/src/bundle/Resources/public/js/action.edit.handler.js"));
/******/ }
]);