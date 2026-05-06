/******/ (() => { // webpackBootstrap
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/store.product.list.filters.js ***!
  \**********************************************************************************************/
(function (global, doc, localStorage) {
  var formSelects = doc.querySelectorAll('.ibexa-store-form .ibexa-store-select');
  var formChoices = doc.querySelectorAll('.ibexa-store-form .ibexa-store-choice input');
  var formTextInputs = doc.querySelectorAll('.ibexa-store-form .ibexa-store-input');
  var filterLabels = doc.querySelectorAll('.ibexa-store-filter__label');
  var moreBtnsElements = doc.querySelectorAll('.ibexa-store-filters .ibexa-store-filter__more-btn');
  var IBEXA_STORE_FILTERS_MORE_BTNS_STATE = 'ibexa-store-filters-more-btns-state';
  var submitForm = function submitForm() {
    this.form.submit();
  };
  var submitOnClear = function submitOnClear(event) {
    var isClearBtnClickEvent = event instanceof InputEvent;
    if (isClearBtnClickEvent) {
      return;
    }
    submitForm.call(this);
  };
  var toggleFilter = function toggleFilter(_ref) {
    var filterLabel = _ref.currentTarget;
    var filter = filterLabel.closest('.ibexa-store-filter');
    filter.classList.toggle('ibexa-store-filter--collapsed');
  };
  var getMoreBtns = function getMoreBtns() {
    var _JSON$parse;
    var data = (_JSON$parse = JSON.parse(localStorage.getItem(IBEXA_STORE_FILTERS_MORE_BTNS_STATE))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
    return data;
  };
  var setMoreBtns = function setMoreBtns(data) {
    localStorage.setItem(IBEXA_STORE_FILTERS_MORE_BTNS_STATE, JSON.stringify(data));
  };
  var changeMoreBtnLabel = function changeMoreBtnLabel(moreBtn, isExpanded) {
    var _moreBtn$dataset = moreBtn.dataset,
      showMore = _moreBtn$dataset.showMore,
      showLess = _moreBtn$dataset.showLess;
    if (isExpanded) {
      moreBtn.innerHTML = showLess;
    } else {
      moreBtn.innerHTML = showMore;
    }
  };
  var toggleCheckboxVisibility = function toggleCheckboxVisibility(moreBtn, isExpanded) {
    var filterContainer = moreBtn.closest('.ibexa-store-filter');
    var filterChoices = filterContainer.querySelectorAll('.ibexa-store-choice.ibexa-store-choice--more');
    filterChoices.forEach(function (filterChoice) {
      return filterChoice.classList.toggle('ibexa-store-choice--hidden', !isExpanded);
    });
  };
  var moreBtnToggle = function moreBtnToggle(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var moreBtns = getMoreBtns();
    var filterTitleName = currentTarget.dataset.typeName;
    var moreBtnIndex = moreBtns.findIndex(function (_ref3) {
      var type = _ref3.type;
      return type === filterTitleName;
    });
    if (moreBtnIndex >= 0) {
      moreBtns[moreBtnIndex].isExpanded = !moreBtns[moreBtnIndex].isExpanded;
    } else {
      moreBtns.push({
        type: filterTitleName,
        isExpanded: true
      });
    }
    setMoreBtns(moreBtns);
    var isExpanded = moreBtnIndex !== -1 ? moreBtns[moreBtnIndex].isExpanded : true;
    toggleCheckboxVisibility(currentTarget, isExpanded);
    changeMoreBtnLabel(currentTarget, isExpanded);
  };
  var initMoreBtn = function initMoreBtn(moreBtn) {
    var moreBtns = getMoreBtns();
    var filterTitleName = moreBtn.dataset.typeName;
    var moreBtnIndex = moreBtns.findIndex(function (_ref4) {
      var type = _ref4.type;
      return type === filterTitleName;
    });
    if (moreBtnIndex === -1) {
      return;
    }
    var isExpanded = moreBtns[moreBtnIndex].isExpanded;
    toggleCheckboxVisibility(moreBtn, isExpanded);
    changeMoreBtnLabel(moreBtn, isExpanded);
  };
  formSelects.forEach(function (formSelect) {
    return formSelect.addEventListener('change', submitForm, false);
  });
  formChoices.forEach(function (formChoice) {
    return formChoice.addEventListener('change', submitForm, false);
  });
  formTextInputs.forEach(function (formTextInput) {
    formTextInput.addEventListener('change', submitForm, false);
    formTextInput.addEventListener('input', submitOnClear, false);
  });
  filterLabels.forEach(function (filterLabel) {
    return filterLabel.addEventListener('click', toggleFilter, false);
  });
  moreBtnsElements.forEach(function (moreBtnElement) {
    moreBtnElement.addEventListener('click', moreBtnToggle, false);
    initMoreBtn(moreBtnElement);
  });
})(window, window.document, window.localStorage);
/******/ })()
;