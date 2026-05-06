(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-payment-view-js"],{

/***/ "./vendor/ibexa/payment/src/bundle/Resources/public/js/state.transition.js"
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/payment/src/bundle/Resources/public/js/state.transition.js ***!
  \*********************************************************************************/
() {

(function (global, doc, Translator) {
  var transitionModal = doc.querySelector('.ibexa-modal--state-transition-confirmation');
  var transitionModalBody = transitionModal.querySelector('.modal-body');
  var confirmBtn = transitionModal.querySelector('.ibexa-btn--confirm');
  var transitionForm = doc.querySelector('.ibexa-state-transition-form');
  var transitionSelect = transitionForm.querySelector('.ibexa-state-transition-form__select');
  var selectedTransition;
  confirmBtn.addEventListener('click', function () {
    transitionSelect.value = selectedTransition;
    transitionForm.submit();
  }, false);
  transitionModal.addEventListener('show.bs.modal', function (_ref) {
    var relatedTarget = _ref.relatedTarget;
    var status = relatedTarget.dataset.transitionTarget;
    transitionModalBody.innerHTML = Translator.trans(/*@Desc("Change payment status to %status%?")*/'ibexa.state.transition.modal.transition.body', {
      status: status
    }, 'ibexa_payment_ui');
    selectedTransition = relatedTarget.dataset.transition;
  }, false);
})(window, window.document, window.Translator);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/payment/src/bundle/Resources/public/js/state.transition.js"));
/******/ }
]);