/******/ (() => { // webpackBootstrap
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/store.notice.card.js ***!
  \*************************************************************************************/
(function (global, doc) {
  var closeButtons = doc.querySelectorAll('.ibexa-store-notice-card__close-btn');
  var handleClose = function handleClose(_ref) {
    var currentTarget = _ref.currentTarget;
    var noticeCard = currentTarget.closest('.ibexa-store-notice-card');
    noticeCard.remove();
  };
  closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener('click', handleClose, false);
  });
})(window, window.document);
/******/ })()
;