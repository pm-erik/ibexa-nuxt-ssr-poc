(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-order-management-js"],{

/***/ "./vendor/ibexa/order-management/src/bundle/Resources/public/js/filters.action.btns.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/order-management/src/bundle/Resources/public/js/filters.action.btns.js ***!
  \*********************************************************************************************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var containers = doc.querySelectorAll('.ibexa-adaptive-filters');
  containers.forEach(function (container) {
    var clearBtn = container.querySelector('.ibexa-adaptive-filters__clear-btn');
    var applyBtn = container.querySelector('.ibexa-adaptive-filters__submit-btn');
    var dropdownNodes = _toConsumableArray(container.querySelectorAll('.ibexa-dropdown'));
    var textInputNodes = _toConsumableArray(container.querySelectorAll('.ibexa-input--text'));
    var datePickerNodes = _toConsumableArray(container.querySelectorAll('.ibexa-picker'));
    var originalValuesMap = new Map();
    var dropdownSelectionsEqual = function dropdownSelectionsEqual(selection1, selection2) {
      if (selection1.length !== selection2.length) {
        return false;
      }
      for (var i = 0; i < selection1.length; ++i) {
        if (selection1[i] !== selection2[i]) return false;
      }
      return true;
    };
    var checkFieldsValuesChanged = function checkFieldsValuesChanged() {
      var checkIsTextInputValueChanged = function checkIsTextInputValueChanged(textInputNode) {
        var value = textInputNode.value;
        var originalValue = originalValuesMap.get(textInputNode);
        return value !== originalValue;
      };
      var checkIsDropdownValueChanged = function checkIsDropdownValueChanged(dropdownNode) {
        var dropdown = dropdownNode.ibexaInstance;
        var value = _toConsumableArray(dropdown.getSelectedItems()).map(function (item) {
          return item.value;
        });
        var originalValue = originalValuesMap.get(dropdown);
        return !dropdownSelectionsEqual(value, originalValue);
      };
      var checkIsDatePickerValueChanged = function checkIsDatePickerValueChanged(datePickerNode) {
        var _datePickerInput$data;
        var datePickerInput = datePickerNode.querySelector('.ibexa-picker__input');
        var value = (_datePickerInput$data = datePickerInput.dataset.timestamp) !== null && _datePickerInput$data !== void 0 ? _datePickerInput$data : '';
        var originalValue = originalValuesMap.get(datePickerNode);
        return value !== originalValue;
      };
      return textInputNodes.some(checkIsTextInputValueChanged) || dropdownNodes.some(checkIsDropdownValueChanged) || datePickerNodes.some(checkIsDatePickerValueChanged);
    };
    var checkAreFiltersCleared = function checkAreFiltersCleared() {
      var checkIsDropdownCleared = function checkIsDropdownCleared(dropdownNode) {
        var isDisabled = dropdownNode.classList.contains('ibexa-dropdown--disabled');
        var selectNode = dropdownNode.querySelector('.ibexa-input--select');
        var dropdown = dropdownNode.ibexaInstance;
        return isDisabled || (dropdown.canSelectOnlyOne ? selectNode.selectedIndex === 0 : selectNode.selectedIndex === -1);
      };
      var checkIsTextInputCleared = function checkIsTextInputCleared(textInputNode) {
        return textInputNode.disabled || textInputNode.value === '';
      };
      var checkIsDatePickerCleared = function checkIsDatePickerCleared(datePickerNode) {
        var _datePickerInput$data2;
        var datePickerInput = datePickerNode.querySelector('.ibexa-picker__input');
        var isDisabled = datePickerInput.disabled;
        var value = (_datePickerInput$data2 = datePickerInput.dataset.timestamp) !== null && _datePickerInput$data2 !== void 0 ? _datePickerInput$data2 : '';
        return isDisabled || value === '';
      };
      return textInputNodes.every(checkIsTextInputCleared) && dropdownNodes.every(checkIsDropdownCleared) && datePickerNodes.every(checkIsDatePickerCleared);
    };
    var clearForm = function clearForm() {
      textInputNodes.forEach(function (textInputNode) {
        if (!textInputNode.disabled) {
          textInputNode.value = '';
        }
      });
      dropdownNodes.forEach(function (dropdownNode) {
        var isDisabled = dropdownNode.classList.contains('ibexa-dropdown--disabled');
        if (!isDisabled) {
          var dropdown = dropdownNode.ibexaInstance;
          if (dropdown.canSelectOnlyOne) {
            var select = dropdownNode.querySelector('.ibexa-dropdown__source select');
            var firstOption = dropdownNode.querySelector('.ibexa-dropdown__source option');
            var isFirstOptionSelected = select.value === firstOption.value;
            if (!isFirstOptionSelected) {
              dropdown.selectFirstOption();
            }
          } else {
            dropdown.clearCurrentSelection();
          }
        }
      });
      datePickerNodes.forEach(function (datePickerNode) {
        var datePickerInput = datePickerNode.querySelector('.ibexa-picker__input');
        var isDisabled = datePickerInput.disabled;
        if (!isDisabled) {
          datePickerInput._flatpickr.clear();
        }
      });
    };
    var handleFormClear = function handleFormClear() {
      clearForm();
      clearBtn.disabled = true;
      applyBtn.disabled = !checkFieldsValuesChanged();
      applyBtn.click();
    };
    var handleInputChange = function handleInputChange() {
      clearBtn.disabled = checkAreFiltersCleared();
      applyBtn.disabled = !checkFieldsValuesChanged();
    };
    dropdownNodes.forEach(function (dropdownNode) {
      var dropdown = dropdownNode.ibexaInstance;
      var originalValue = _toConsumableArray(dropdown.getSelectedItems()).map(function (item) {
        return item.value;
      });
      originalValuesMap.set(dropdown, originalValue);
    });
    textInputNodes.forEach(function (textInputNode) {
      var originalValue = textInputNode.value;
      originalValuesMap.set(textInputNode, originalValue);
    });
    datePickerNodes.forEach(function (datePickerNode) {
      var _datePickerInput$data3;
      var datePickerInput = datePickerNode.querySelector('.ibexa-picker__input');
      var originalValue = (_datePickerInput$data3 = datePickerInput.dataset.timestamp) !== null && _datePickerInput$data3 !== void 0 ? _datePickerInput$data3 : '';
      originalValuesMap.set(datePickerNode, originalValue);
    });
    if (applyBtn) {
      applyBtn.disabled = true;
    }
    if (clearBtn) {
      clearBtn.disabled = checkAreFiltersCleared();
      clearBtn.addEventListener('click', handleFormClear, false);
    }
    dropdownNodes.forEach(function (dropdownNode) {
      var select = dropdownNode.querySelector('.ibexa-input--select');
      select.addEventListener('change', handleInputChange, false);
    });
    textInputNodes.forEach(function (textInputNode) {
      return textInputNode.addEventListener('input', handleInputChange, false);
    });
    datePickerNodes.forEach(function (datePickerNode) {
      var datePickerInput = datePickerNode.querySelector('.ibexa-picker__input');
      datePickerInput.addEventListener('input', handleInputChange, false);
    });
  });
})(window, window.document);

/***/ },

/***/ "./vendor/ibexa/order-management/src/bundle/Resources/public/js/orders.list.sorting.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/order-management/src/bundle/Resources/public/js/orders.list.sorting.js ***!
  \*********************************************************************************************/
() {

(function (global, doc) {
  var searchForm = doc.querySelector('.ibexa-om-orders-filters');
  var searchSortOrderSelect = doc.querySelector('.ibexa-om-orders-filters__sort-order-select');
  var listSortOrderSelect = doc.querySelector('.ibexa-om-orders-list__sort-order-select');
  var sortResults = function sortResults(_ref) {
    var currentTarget = _ref.currentTarget;
    var sortOrderValue = currentTarget.value;
    searchSortOrderSelect.value = sortOrderValue;
    searchForm.submit();
  };
  if (searchSortOrderSelect && listSortOrderSelect) {
    listSortOrderSelect.addEventListener('change', sortResults, false);
  }
})(window, window.document);

/***/ },

/***/ "./vendor/ibexa/order-management/src/bundle/Resources/public/js/total.value.filter.js"
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/order-management/src/bundle/Resources/public/js/total.value.filter.js ***!
  \********************************************************************************************/
() {

(function (global, doc, ibexa, Translator) {
  var form = doc.querySelector('form[name="order_search"]');
  if (!form) {
    return;
  }
  var totalValueInputMin = form.querySelector('.ibexa-om-orders-filters__price-wrapper--min .ibexa-input--text');
  var totalValueInputMax = form.querySelector('.ibexa-om-orders-filters__price-wrapper--max .ibexa-input--text');
  var currencyDropdownNode = form.querySelector('.ibexa-om-orders-filters__currency-wrapper .ibexa-dropdown');
  var currencyDropdownSelect = currencyDropdownNode.querySelector('.ibexa-input');
  var currencyDropdown = currencyDropdownNode.ibexaInstance;
  var clearBtn = form.querySelector('.ibexa-adaptive-filters__clear-btn');
  var wasCurrencyNotificationShowedBefore = false;
  var wasCurrencyInvalidClassAddedBefore = false;
  var checkIsCurrencySelected = function checkIsCurrencySelected() {
    return currencyDropdown.getSelectedItems()[0].value !== '';
  };
  var focusCurrencyDropdown = function focusCurrencyDropdown() {
    currencyDropdownSelect.focus();
  };
  var toggleCurrencyDropdownInvalidState = function toggleCurrencyDropdownInvalidState(isInvalid) {
    currencyDropdownNode.classList.toggle('is-invalid', isInvalid);
    wasCurrencyInvalidClassAddedBefore = wasCurrencyInvalidClassAddedBefore || isInvalid;
  };
  var toggleCurrencyNotification = function toggleCurrencyNotification() {
    if (wasCurrencyNotificationShowedBefore) {
      return;
    }
    var message = Translator.trans(/*@Desc("Select currency to filter by total value.")*/'orders.list.filters.no_currency_selected.notification.message', {}, 'ibexa_order_management_ui');
    ibexa.helpers.notification.showInfoNotification(message);
    wasCurrencyNotificationShowedBefore = true;
  };
  var checkIsTotalValueWithCurrencyInvalid = function checkIsTotalValueWithCurrencyInvalid() {
    var isTotalValueFilled = totalValueInputMin.value !== '' || totalValueInputMax.value !== '';
    var isCurrencySelected = checkIsCurrencySelected();
    return isTotalValueFilled && !isCurrencySelected;
  };
  var handleFormSubmit = function handleFormSubmit(event) {
    var isTotalValueWithCurrencyInvalid = checkIsTotalValueWithCurrencyInvalid();
    if (isTotalValueWithCurrencyInvalid) {
      event.preventDefault();
      toggleCurrencyDropdownInvalidState(true);
      toggleCurrencyNotification();
    }
  };
  var handleFormClear = function handleFormClear() {
    toggleCurrencyDropdownInvalidState(false);
  };
  var handleCurrencyChange = function handleCurrencyChange() {
    var isTotalValueWithCurrencyInvalid = checkIsTotalValueWithCurrencyInvalid();
    toggleCurrencyDropdownInvalidState(isTotalValueWithCurrencyInvalid);
  };
  var handleTotalValueFocus = function handleTotalValueFocus() {
    if (!wasCurrencyInvalidClassAddedBefore) {
      return;
    }
    var isTotalValueWithCurrencyInvalid = checkIsTotalValueWithCurrencyInvalid();
    toggleCurrencyDropdownInvalidState(isTotalValueWithCurrencyInvalid);
  };
  var handleTotalValueBlur = function handleTotalValueBlur() {
    var isTotalValueFilled = totalValueInputMin.value !== '' || totalValueInputMax.value !== '';
    if (isTotalValueFilled) {
      setTimeout(function () {
        var currentlyFocusedElement = doc.activeElement;
        var isAnyTotalValueInputFocused = currentlyFocusedElement === totalValueInputMin || currentlyFocusedElement === totalValueInputMax;
        if (isAnyTotalValueInputFocused) {
          return;
        }
        var isCurrencySelected = checkIsCurrencySelected();
        if (!isCurrencySelected) {
          focusCurrencyDropdown();
          if (wasCurrencyInvalidClassAddedBefore) {
            toggleCurrencyDropdownInvalidState(true);
          }
        }
      });
      return;
    }
    toggleCurrencyDropdownInvalidState(false);
  };
  form.addEventListener('submit', handleFormSubmit, false);
  currencyDropdownSelect.addEventListener('change', handleCurrencyChange, false);
  totalValueInputMin.addEventListener('blur', handleTotalValueBlur, false);
  totalValueInputMax.addEventListener('blur', handleTotalValueBlur, false);
  totalValueInputMin.addEventListener('focus', handleTotalValueFocus, false);
  totalValueInputMax.addEventListener('focus', handleTotalValueFocus, false);
  clearBtn.addEventListener('blur', handleFormClear, false);
})(window, window.document, window.ibexa, window.Translator);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/order-management/src/bundle/Resources/public/js/orders.list.sorting.js"), __webpack_exec__("./vendor/ibexa/order-management/src/bundle/Resources/public/js/filters.action.btns.js"), __webpack_exec__("./vendor/ibexa/order-management/src/bundle/Resources/public/js/total.value.filter.js"));
/******/ }
]);