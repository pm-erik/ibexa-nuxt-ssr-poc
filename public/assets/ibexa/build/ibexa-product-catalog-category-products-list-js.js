(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-category-products-list-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/filters.action.btns.js"
/*!***********************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/filters.action.btns.js ***!
  \***********************************************************************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa) {
  var containers = doc.querySelectorAll('.ibexa-adaptive-filters');
  containers.forEach(function (container) {
    var clearBtn = container.querySelector('.ibexa-adaptive-filters__clear-btn');
    var applyBtn = container.querySelector('.ibexa-adaptive-filters__submit-btn');
    var dropdownNodes = _toConsumableArray(container.querySelectorAll('.ibexa-dropdown'));
    var textInputNodes = _toConsumableArray(container.querySelectorAll('.ibexa-input--text'));
    var dateInputNodes = _toConsumableArray(container.querySelectorAll('.ibexa-input--date'));
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
      return dropdownNodes.some(function (dropdownNode) {
        var dropdown = dropdownNode.ibexaInstance;
        var value = _toConsumableArray(dropdown.getSelectedItems()).map(function (item) {
          return item.value;
        });
        var originalValue = originalValuesMap.get(dropdown);
        return !dropdownSelectionsEqual(value, originalValue);
      }) || textInputNodes.some(function (textInputNode) {
        var value = textInputNode.value;
        var originalValue = originalValuesMap.get(textInputNode);
        return value !== originalValue;
      });
    };
    var checkAreFiltersCleared = function checkAreFiltersCleared() {
      return textInputNodes.every(function (textInputNode) {
        return textInputNode.disabled || textInputNode.value === '';
      }) && dropdownNodes.every(function (dropdownNode) {
        var isDisabled = dropdownNode.classList.contains('ibexa-dropdown--disabled');
        var selectNode = dropdownNode.querySelector('.ibexa-input--select');
        var dropdown = dropdownNode.ibexaInstance;
        return isDisabled || (dropdown.canSelectOnlyOne ? selectNode.selectedIndex === 0 : selectNode.selectedIndex === -1);
      });
    };
    var clearForm = function clearForm() {
      textInputNodes.forEach(function (textInputNode) {
        if (!textInputNode.disabled) {
          textInputNode.value = '';
        }
      });
      dateInputNodes.forEach(function (dateInputNode) {
        if (!dateInputNode.disabled) {
          var datePickerNode = dateInputNode.closest('.ibexa-picker');
          if (datePickerNode) {
            var datePickerInstance = ibexa.helpers.objectInstances.getInstance(datePickerNode);
            datePickerInstance.clear();
          }
          var dateTimeRangeSingleNode = dateInputNode.closest('.ibexa-date-time-range-single');
          if (dateTimeRangeSingleNode) {
            var dateTimeRangeSingleInstance = ibexa.helpers.objectInstances.getInstance(dateTimeRangeSingleNode);
            dateTimeRangeSingleInstance.clearDates();
          }
        }
      });
      dropdownNodes.forEach(function (dropdownNode) {
        var isDisabled = dropdownNode.classList.contains('ibexa-dropdown--disabled');
        if (!isDisabled) {
          var dropdown = dropdownNode.ibexaInstance;
          if (dropdown.canSelectOnlyOne) {
            dropdown.selectFirstOption();
          } else {
            dropdown.clearCurrentSelection();
          }
        }
      });
    };
    var handleFormClear = function handleFormClear() {
      clearForm();
      if (clearBtn) {
        clearBtn.disabled = true;
      }
      if (applyBtn) {
        applyBtn.disabled = !checkFieldsValuesChanged();
        applyBtn.click();
      }
    };
    var handleInputChange = function handleInputChange() {
      if (clearBtn) {
        clearBtn.disabled = checkAreFiltersCleared();
      }
      if (applyBtn) {
        applyBtn.disabled = !checkFieldsValuesChanged();
      }
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
  });
})(window, window.document, window.ibexa);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/base.list.js"
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/base.list.js ***!
  \**********************************************************************************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var inputsTriggeringSubmitOnChange = doc.querySelectorAll('.ibexa-pc-search__input--trigger-submit-after-change');
  var removeBtn = doc.querySelector('.ibexa-pc-data-grid__delete-btn');
  var copyBtns = doc.querySelectorAll('.ibexa-pc-data-grid__copy-btn');
  var markRowCheckboxes = doc.querySelectorAll('.ibexa-pc-data-grid__mark-row-checkbox');
  var searchForm = doc.querySelector('.ibexa-pc-search__form');
  var searchSortOrderSelect = doc.querySelector('.ibexa-pc-search__sort-order-select');
  var dataGridSortOrderSelect = doc.querySelector('.ibexa-pc-data-grid__sort-order-select');
  var setRemoveBtnState = function setRemoveBtnState() {
    var isAnyCheckboxSelected = _toConsumableArray(markRowCheckboxes).some(function (checkbox) {
      return checkbox.checked;
    });
    removeBtn.toggleAttribute('disabled', !isAnyCheckboxSelected);
  };
  var sortResults = function sortResults(_ref) {
    var currentTarget = _ref.currentTarget;
    var sortOrderValue = currentTarget.value;
    searchSortOrderSelect.value = sortOrderValue;
    searchForm.submit();
  };
  var setSourceIdValue = function setSourceIdValue(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var _currentTarget$datase = currentTarget.dataset,
      copySourceId = _currentTarget$datase.copySourceId,
      targetInputSelector = _currentTarget$datase.targetInputSelector;
    var targetInput = doc.querySelector(targetInputSelector);
    targetInput.value = copySourceId;
  };
  markRowCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', setRemoveBtnState, false);
  });
  inputsTriggeringSubmitOnChange.forEach(function (input) {
    input.addEventListener('change', function () {
      searchForm.submit();
    }, false);
  });
  copyBtns.forEach(function (copyBtn) {
    copyBtn.addEventListener('click', setSourceIdValue, false);
  });
  if (searchSortOrderSelect && dataGridSortOrderSelect) {
    dataGridSortOrderSelect.addEventListener('change', sortResults, false);
  }
})(window, window.document);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/category.list.js"
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/category.list.js ***!
  \**************************************************************************************/
() {

(function (global, doc) {
  var FORM_SELECTOR = '[name="taxonomy_product_assign"]';
  var PRODUCT_SELECTOR_INPUT_ID = '#taxonomy_product_assign_product_selector';
  var form = doc.querySelector(FORM_SELECTOR);
  if (!form) {
    return;
  }
  var productSelectorInput = form.querySelector(PRODUCT_SELECTOR_INPUT_ID);
  doc.body.addEventListener('ibexa-pc-product-selector:selected-products-changed', function (_ref) {
    var detail = _ref.detail;
    var selectedProductsItems = detail.selectedProductsItems;
    var productData = selectedProductsItems.map(function (_ref2) {
      var productCode = _ref2.productCode,
        productVariants = _ref2.productVariants;
      return {
        productCode: productCode,
        productVariants: productVariants
      };
    });
    productSelectorInput.value = JSON.stringify(productData);
    form.submit();
  });
})(window, window.document);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.list.filters.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.list.filters.js ***!
  \*********************************************************************************************/
() {

(function (global, doc, ibexa) {
  var filtersNode = doc.querySelector('.ibexa-pc-search--products-list');
  if (!filtersNode) {
    return;
  }
  var getInstance = ibexa.helpers.objectInstances.getInstance;
  var createdDropdownInputNode = doc.querySelector('#product_search_created_at');
  var createdDateTimeRangeNode = filtersNode.querySelector('.ibexa-pc-product-list-filters__created-at-date-time-range');
  var createdDateTimeRange = getInstance(createdDateTimeRangeNode);
  var toggleDatesSelectVisibility = function toggleDatesSelectVisibility(event, dateTimeRange) {
    var datesRangeNode = doc.querySelector('.ibexa-pc-product-list-filters__created-at-date-time-range');
    if (event.target.value !== 'custom_range') {
      dateTimeRange.toggleHidden(true);
      dateTimeRange.clearDates();
      doc.querySelector(datesRangeNode.dataset.periodSelector).value = event.target.value;
      return;
    }
    dateTimeRange.toggleHidden(false);
  };
  createdDropdownInputNode.addEventListener('change', function (event) {
    return toggleDatesSelectVisibility(event, createdDateTimeRange);
  }, false);
})(window, window.document, window.ibexa);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/base.list.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/category.list.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.list.filters.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/filters.action.btns.js"));
/******/ }
]);