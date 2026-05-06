"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-product-list-editable-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/sidebar/extra.actions.js"
/*!*************************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/sidebar/extra.actions.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_object_instances__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/object.instances */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/object.instances.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

(function (global, doc, ibexa) {
  var CLASS_HIDDEN = 'ibexa-extra-actions--hidden';
  var CLASS_EXPANDED = 'ibexa-context-menu--expanded';
  var CLASS_PREVENT_SHOW = 'ibexa-extra-actions--prevent-show';
  var closeBtns = doc.querySelectorAll('.ibexa-extra-actions .ibexa-btn--close, .ibexa-extra-actions .ibexa-extra-actions__btn--cancel');
  var btns = _toConsumableArray(doc.querySelectorAll('.ibexa-btn--extra-actions'));
  var menu = doc.querySelector('.ibexa-context-menu');
  var backdrop = new ibexa.core.Backdrop();
  var formsInitialData = new Map();
  var saveInitialFormData = function saveInitialFormData(extraActionsContainer) {
    var extraActionsInputs = extraActionsContainer.querySelectorAll('input, select');
    extraActionsInputs.forEach(function (node) {
      var value = node.type === 'radio' || node.type === 'checkbox' ? node.checked : node.value;
      formsInitialData.set(node, value);
    });
  };
  var restoreInitialFormData = function restoreInitialFormData(extraActionsContainer) {
    if (formsInitialData.size === 0) {
      return;
    }
    var extraActionsInputs = extraActionsContainer.querySelectorAll('input, select');
    extraActionsInputs.forEach(function (node) {
      var value = formsInitialData.get(node);
      var prevValue = node.value;
      if (node.type === 'radio' || node.type === 'checkbox') {
        prevValue = node.checked;
        node.checked = value;
      } else if (node.tagName === 'SELECT') {
        var dropdownContainer = node.closest('.ibexa-dropdown');
        if (dropdownContainer) {
          var dropdownInstance = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_object_instances__WEBPACK_IMPORTED_MODULE_0__.getInstance)(dropdownContainer);
          dropdownInstance.selectOption(value);
        } else {
          node.value = value;
        }
      } else {
        node.value = value;
      }
      if (value !== prevValue) {
        node.dispatchEvent(new CustomEvent('change'));
      }
    });
    formsInitialData.clear();
  };
  var haveHiddenPart = function haveHiddenPart(element) {
    return element.classList.contains(CLASS_HIDDEN) && !element.classList.contains(CLASS_PREVENT_SHOW);
  };
  var removeBackdrop = function removeBackdrop() {
    backdrop.hide();
    doc.body.classList.remove('ibexa-scroll-disabled');
  };
  var closeExtraActions = function closeExtraActions(actions) {
    actions.classList.add(CLASS_HIDDEN);
    if (menu) {
      menu.classList.remove(CLASS_EXPANDED);
    }
    doc.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:after-close'));
    removeBackdrop();
    restoreInitialFormData(actions);
  };
  var dispatchAfterOpenEvent = function dispatchAfterOpenEvent(actions) {
    actions.addEventListener('transitionend', function (event) {
      if (event.propertyName !== 'transform') {
        return;
      }
      doc.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:after-open'));
    }, {
      once: true
    });
  };
  var toggleExtraActionsWidget = function toggleExtraActionsWidget(widgetData) {
    var actions = doc.querySelector(".ibexa-extra-actions[data-actions=\"".concat(widgetData.actions, "\"]"));
    if (widgetData.validate && !parseInt(widgetData.isFormValid, 10)) {
      return;
    }
    var isHidden = haveHiddenPart(actions);
    var focusElement = actions.querySelector(widgetData.focusElement);
    var _detectClickOutside = function detectClickOutside(event) {
      if (event.target.classList.contains('ibexa-backdrop')) {
        closeExtraActions(actions);
        doc.body.removeEventListener('click', _detectClickOutside, false);
      }
    };
    actions.classList.toggle(CLASS_HIDDEN, !isHidden);
    if (menu) {
      menu.classList.toggle(CLASS_EXPANDED, isHidden);
    }
    if (!actions.classList.contains(CLASS_HIDDEN)) {
      dispatchAfterOpenEvent(actions);
      backdrop.show();
      doc.body.addEventListener('click', _detectClickOutside, false);
      doc.body.classList.add('ibexa-scroll-disabled');
      saveInitialFormData(actions);
    } else {
      doc.body.removeEventListener('click', _detectClickOutside);
      removeBackdrop();
      restoreInitialFormData(actions);
    }
    if (focusElement) {
      focusElement.focus();
    }
  };
  var initExtraActionsWidget = function initExtraActionsWidget(dataset) {
    var hashes = window.location.hash.split('#');
    if (hashes.includes(dataset.actions)) {
      toggleExtraActionsWidget(dataset);
    }
  };
  var hideMenu = function hideMenu(btn) {
    var menuBranch = btn.closest('.ibexa-multilevel-popup-menu__branch');
    if (!(menuBranch !== null && menuBranch !== void 0 && menuBranch.menuInstanceElement)) {
      return;
    }
    var menuInstance = ibexa.helpers.objectInstances.getInstance(menuBranch.menuInstanceElement);
    menuInstance.closeMenu();
  };
  btns.forEach(function (btn) {
    var dataset = btn.dataset;
    btn.addEventListener('click', function () {
      toggleExtraActionsWidget(dataset);
      hideMenu(btn);
    }, false);
    initExtraActionsWidget(dataset);
  });
  doc.body.addEventListener('ibexa-extra-actions:toggle-widget', function (event) {
    return toggleExtraActionsWidget(event.detail);
  }, false);
  closeBtns.forEach(function (closeBtn) {
    return closeBtn.addEventListener('click', function (event) {
      closeExtraActions(event.currentTarget.closest('.ibexa-extra-actions'));
    }, false);
  });
})(window, window.document, window.ibexa);

/***/ },

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


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/bundles/ibexaadminui/js/scripts/sidebar/extra.actions.js"));
/******/ }
]);