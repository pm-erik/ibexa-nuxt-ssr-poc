/******/ (() => { // webpackBootstrap
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/store.popup.menu.js ***!
  \************************************************************************************/
(function (global, doc) {
  var popupMenus = doc.querySelectorAll('.ibexa-store-popup-menu');
  if (!popupMenus.length) {
    return;
  }
  var toggleMenu = function toggleMenu(_ref) {
    var currentTarget = _ref.currentTarget;
    var popupMenu = currentTarget.closest('.ibexa-store-popup-menu');
    popupMenu.classList.toggle('ibexa-store-popup-menu--collapsed');
  };
  popupMenus.forEach(function (popupMenu) {
    return popupMenu.querySelector('.ibexa-store-popup-menu__toggler').addEventListener('click', toggleMenu, false);
  });
})(window, window.document);
})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/store.tucked.menu.js ***!
  \*************************************************************************************/
(function (global, doc) {
  var tuckedMenus = doc.querySelectorAll('.ibexa-store-tucked-menu');
  tuckedMenus.forEach(function (tuckedMenu) {
    var tuckedMenuBtn = tuckedMenu.querySelector('.ibexa-store-tucked-menu__btn');
    var popupMenu = tuckedMenu.querySelector('.ibexa-store-tucked-menu__popup-menu');
    var _handleClickOutsidePopup = function handleClickOutsidePopup(event) {
      var isClickInsideTuckedMenu = event.target.closest('.ibexa-store-tucked-menu') === tuckedMenu;
      if (isClickInsideTuckedMenu) {
        return;
      }
      popupMenu.classList.add('ibexa-store-tucked-menu__popup-menu--hidden');
      doc.removeEventListener('click', _handleClickOutsidePopup, false);
    };
    var handleBtnClick = function handleBtnClick() {
      var isPopupOpened = !popupMenu.classList.contains('ibexa-store-tucked-menu__popup-menu--hidden');
      popupMenu.classList.toggle('ibexa-store-tucked-menu__popup-menu--hidden', isPopupOpened);
      if (isPopupOpened) {
        doc.removeEventListener('click', _handleClickOutsidePopup, false);
      } else {
        doc.addEventListener('click', _handleClickOutsidePopup, false);
      }
    };
    tuckedMenuBtn.addEventListener('click', handleBtnClick, false);
  });
})(window, window.document, window.ibexa, window.Popper);
})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/store.sort.order.select.js ***!
  \*******************************************************************************************/
(function (global, doc) {
  var sortOrderSelects = doc.querySelectorAll('.ibexa-store-sort-order-select');
  sortOrderSelects.forEach(function (sortOrderSelect) {
    var originalSelectSelector = sortOrderSelect.dataset.originalSelectSelector;
    var originalSelect = document.querySelector(originalSelectSelector);
    var form = originalSelect.closest('form');
    var sortResults = function sortResults() {
      var sortOrderValue = sortOrderSelect.value;
      originalSelect.value = sortOrderValue;
      form.submit();
    };
    sortOrderSelect.addEventListener('change', sortResults, false);
  });
})(window, window.document);
})();

/******/ })()
;