/******/ (() => { // webpackBootstrap
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/store.order.list.filters.js ***!
  \********************************************************************************************/
(function (global, doc) {
  var filters = doc.querySelector('.ibexa-store-order-list__filters');
  if (!filters) {
    return;
  }
  var createdAtMin = filters.querySelector('[name="order_search[created_at_data][min]"]');
  var createdAtMax = filters.querySelector('[name="order_search[created_at_data][max]"]');
  var createdAtMinDummy = filters.querySelector('.ibexa-store-order-list__filters-created-at-min');
  var createdAtMaxDummy = filters.querySelector('.ibexa-store-order-list__filters-created-at-max');
  var setDummyInput = function setDummyInput(dummyInput, realInput) {
    if (!realInput.value) {
      return;
    }
    var timestamp = realInput.value * 1000;
    var date = new Date(timestamp);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    dummyInput.value = date.toISOString().slice(0, 16);
  };
  var fillRealDateInput = function fillRealDateInput(dummyInput, realInput) {
    var date = new Date(dummyInput.value);
    var timestamp = date.getTime();
    realInput.value = timestamp / 1000;
  };
  setDummyInput(createdAtMinDummy, createdAtMin);
  setDummyInput(createdAtMaxDummy, createdAtMax);
  createdAtMinDummy.addEventListener('change', function () {
    return fillRealDateInput(createdAtMinDummy, createdAtMin);
  }, false);
  createdAtMaxDummy.addEventListener('change', function () {
    return fillRealDateInput(createdAtMaxDummy, createdAtMax);
  }, false);
})(window, window.document);
/******/ })()
;