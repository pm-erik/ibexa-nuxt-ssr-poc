(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-product-variants-tab-js"],{

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

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/bundles/ibexaadminui/js/scripts/filters.action.btns.js"));
/******/ }
]);