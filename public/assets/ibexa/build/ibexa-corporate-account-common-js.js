(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-corporate-account-common-js"],{

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js"
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserInvitationModal: () => (/* binding */ UserInvitationModal)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _window = window,
  ibexa = _window.ibexa,
  Translator = _window.Translator;
var UserInvitationModal = /*#__PURE__*/function () {
  function UserInvitationModal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, UserInvitationModal);
    if (!options.modal) {
      throw new Error('No valid modal option provided');
    }
    this.modal = options.modal;
    this.stickyTopContainer = this.modal.querySelector('.ibexa-user-invitation-modal__sticky-top');
    this.searchInput = this.modal.querySelector('.ibexa-user-invitation-modal__search-input');
    this.searchBtn = this.modal.querySelector('.ibexa-input-text-wrapper__action-btn--search');
    this.searchNoEntries = this.modal.querySelector('.ibexa-user-invitation-modal__search-no-entries');
    this.badFileAlert = this.modal.querySelector('.ibexa-user-invitation-modal__bad-file-alert');
    this.badFileAlertCloseBtn = this.badFileAlert.querySelector('.ibexa-alert__close-btn');
    this.issuesAlert = this.modal.querySelector('.ibexa-user-invitation-modal__issues-alert');
    this.issuesAlertIssuesContainer = this.modal.querySelector('.ibexa-user-invitation-modal__issues-alert-issues');
    this.issuesAlertCloseBtn = this.issuesAlert.querySelector('.ibexa-alert__close-btn');
    this.goToNextIssueBtn = this.issuesAlert.querySelector('.ibexa-user-invitation-modal__next-issue-btn');
    this.addNextBtn = this.modal.querySelector('.ibexa-user-invitation-modal__add-next-btn');
    this.entriesContainer = this.modal.querySelector('.ibexa-user-invitation-modal__entries');
    this.entryPrototype = this.entriesContainer.dataset.prototype;
    this.fileUploadMessage = this.modal.querySelector('.ibexa-user-invitation-modal__upload-file-message');
    this.dropZone = this.modal.querySelector('.ibexa-user-invitation-modal__drop');
    this.uploadLocalFileBtn = this.modal.querySelector('.ibexa-user-invitation-modal__file-select');
    this.fileInput = this.modal.querySelector('.ibexa-user-invitation-modal__file-input');
    this.fakeSubmitBtn = this.modal.querySelector('.ibexa-user-invitation-modal__fake-submit-btn');
    this.realSubmitBtn = this.modal.querySelector('.ibexa-user-invitation-modal__real-submit-btn');
    this.form = this.modal.querySelector('.ibexa-user-invitation-modal__form');
    this.lastScrolledToEntryWithIssue = null;
    this.attachEntryListeners = this.attachEntryListeners.bind(this);
    this.preventDefaultAction = this.preventDefaultAction.bind(this);
    this.handleEntryAdd = this.handleEntryAdd.bind(this);
    this.handleEntryDelete = this.handleEntryDelete.bind(this);
    this.handleDropUpload = this.handleDropUpload.bind(this);
    this.handleInputUpload = this.handleInputUpload.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.scrollToNextIssue = this.scrollToNextIssue.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  return _createClass(UserInvitationModal, [{
    key: "processCSVInvitationFile",
    value: function processCSVInvitationFile(file) {
      throw new Error('processCSVInvitationFile should be overridden in subclass.');
    }
  }, {
    key: "countFilledLinesInFile",
    value: function countFilledLinesInFile(file) {
      return file.text().then(function (text) {
        var nonEmptyLineRegexp = /^([^\r\n]+)$/gm;
        var matchedData = _toConsumableArray(text.matchAll(nonEmptyLineRegexp));
        return matchedData.length;
      });
    }
  }, {
    key: "resetEntry",
    value: function resetEntry(entry) {
      this.toggleInvalidEmailState(entry, {
        isEmptyError: false,
        isInvalidFormatError: false
      });
      this.toggleDuplicateEntryState(entry, false);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "isEntryEmpty",
    value: function isEntryEmpty(entry) {
      throw new Error('isEntryEmpty should be overridden in subclass.');
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "checkEntryMatchesSearch",
    value: function checkEntryMatchesSearch(entry, searchText) {
      throw new Error('checkEntryMatchesSearch should be overridden in subclass.');
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "checkIsEntryDuplicate",
    value: function checkIsEntryDuplicate(invitationData, entryToCompare) {
      throw new Error('checkIsEntryDuplicate should be overridden in subclass.');
    }
  }, {
    key: "checkHasEntryIssue",
    value: function checkHasEntryIssue(entry) {
      var hasEmptyEmailIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-email-empty');
      var hasInvalidEmailIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-email-invalid-format');
      var hasDuplicateIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-duplicate');
      return hasEmptyEmailIssue || hasInvalidEmailIssue || hasDuplicateIssue;
    }
  }, {
    key: "findDuplicateEntry",
    value: function findDuplicateEntry(invitationData, entriesToCompare) {
      var _iterator = _createForOfIteratorHelper(entriesToCompare),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entryToCompare = _step.value;
          if (this.checkIsEntryDuplicate(invitationData, entryToCompare)) {
            return entryToCompare;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }, {
    key: "toggleIssueNode",
    value: function toggleIssueNode(entry, issueNode, show, position, template) {
      var entryIssuesContainer = entry.querySelector('.ibexa-user-invitation-modal__entry-issues');
      if (show) {
        if (!issueNode) {
          entryIssuesContainer.insertAdjacentHTML(position, template);
        }
      } else {
        if (issueNode) {
          issueNode.remove();
        }
      }
    }
  }, {
    key: "toggleDuplicateEntryState",
    value: function toggleDuplicateEntryState(entry, isDuplicate) {
      var duplicateEntryIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-duplicate');
      var issueDuplicateInfoTemplate = this.entriesContainer.dataset.issueDuplicateInfoTemplate;
      this.toggleIssueNode(entry, duplicateEntryIssueNode, isDuplicate, 'beforeend', issueDuplicateInfoTemplate);
    }
  }, {
    key: "toggleInvalidEmailState",
    value: function toggleInvalidEmailState(entry, _ref) {
      var isEmptyError = _ref.isEmptyError,
        isInvalidFormatError = _ref.isInvalidFormatError;
      var emptyEmailIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-email-empty');
      var invalidEmailIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-email-invalid-format');
      var _this$entriesContaine = this.entriesContainer.dataset,
        issueInvalidEmailTemplate = _this$entriesContaine.issueInvalidEmailTemplate,
        issueEmptyEmailTemplate = _this$entriesContaine.issueEmptyEmailTemplate;
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      emailInput.classList.toggle('is-invalid', isEmptyError || isInvalidFormatError);
      this.toggleIssueNode(entry, emptyEmailIssueNode, isEmptyError, 'afterbegin', issueEmptyEmailTemplate);
      this.toggleIssueNode(entry, invalidEmailIssueNode, isInvalidFormatError, 'afterbegin', issueInvalidEmailTemplate);
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(emailInput) {
      var isEmpty = !emailInput.value.trim();
      if (isEmpty) {
        return {
          isEmptyError: isEmpty,
          isInvalidFormatError: false
        };
      }
      var isValid = ibexa.errors.emailRegexp.test(emailInput.value);
      return {
        isEmptyError: false,
        isInvalidFormatError: !isValid
      };
    }
  }, {
    key: "validateEntryEmail",
    value: function validateEntryEmail(entry) {
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      var errors = this.validateEmail(emailInput);
      this.toggleInvalidEmailState(entry, errors);
      this.manageIssuesAlert();
      return errors.isEmptyError || errors.isInvalidFormatError;
    }
  }, {
    key: "handleEmailValidation",
    value: function handleEmailValidation(event) {
      var emailInput = event.currentTarget;
      var entry = emailInput.closest('.ibexa-user-invitation-modal__entry');
      this.validateEntryEmail(entry);
    }
  }, {
    key: "prepareIssuesAlert",
    value: function prepareIssuesAlert(emptyEmailsCount, invalidEmailsCount, duplicateEntryCount) {
      var messages = [];
      if (emptyEmailsCount) {
        var emptyEmailsMessage = Translator.trans(/*@Desc("Empty emails (%count%)")*/'modal.entry_issues.alert.empty_emails', {
          count: emptyEmailsCount
        }, 'ibexa_user_invitation');
        messages.push(emptyEmailsMessage);
      }
      if (invalidEmailsCount) {
        var invalidEmailsMessage = Translator.trans(/*@Desc("Invalid emails (%count%)")*/'modal.entry_issues.alert.invalid_emails', {
          count: invalidEmailsCount
        }, 'ibexa_user_invitation');
        messages.push(invalidEmailsMessage);
      }
      if (duplicateEntryCount) {
        var duplicatedEmailsMessage = Translator.trans(/*@Desc("Duplicated emails (%count%)")*/'modal.entry_issues.alert.duplicate_emails', {
          count: duplicateEntryCount
        }, 'ibexa_user_invitation');
        messages.push(duplicatedEmailsMessage);
      }
      this.issuesAlertIssuesContainer.innerText = messages.join(' | ');
    }
  }, {
    key: "manageIssuesAlert",
    value: function manageIssuesAlert() {
      var emptyEmailsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-email-empty').length;
      var invalidEmailsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-email-invalid-format').length;
      var duplicateEntryCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-duplicate').length;
      var isAnyIssue = emptyEmailsCount || invalidEmailsCount || duplicateEntryCount;
      if (isAnyIssue) {
        this.prepareIssuesAlert(emptyEmailsCount, invalidEmailsCount, duplicateEntryCount);
      }
      this.toggleIssuesAlert(isAnyIssue);
    }
  }, {
    key: "toggleIssuesAlert",
    value: function toggleIssuesAlert(show) {
      this.issuesAlert.classList.toggle('ibexa-user-invitation-modal__issues-alert--hidden', !show);
    }
  }, {
    key: "toggleBadFileAlert",
    value: function toggleBadFileAlert(show) {
      this.badFileAlert.classList.toggle('ibexa-user-invitation-modal__bad-file-alert--hidden', !show);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "addEntry",
    value: function addEntry() {
      var isFileRelated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var invitationData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var entryPrototypeRendered = this.entryPrototype.replaceAll('__name__', this.entryCounter);
      this.entryCounter = this.entryCounter + 1;
      this.entriesContainer.insertAdjacentHTML('beforeend', entryPrototypeRendered);
      var insertedEntry = this.entriesContainer.querySelector(':scope > :last-child');
      if (isFileRelated) {
        insertedEntry.classList.add('ibexa-user-invitation-modal__entry--file-related');
      }
      this.attachEntryListeners(insertedEntry);
      document.body.dispatchEvent(new CustomEvent('ibexa-inputs:added'));
      return {
        insertedEntry: insertedEntry
      };
    }
  }, {
    key: "deleteEntry",
    value: function deleteEntry(entry) {
      var isForceRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var entryNodes = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      var isLastEntry = entryNodes.length === 1;
      if (isLastEntry && !isForceRemove) {
        this.resetEntry(entry);
      } else {
        if (entry === this.lastScrolledToEntryWithIssue) {
          this.lastScrolledToEntryWithIssue = this.lastScrolledToEntryWithIssue.previousElementSibling;
        }
        entry.remove();
      }
    }
  }, {
    key: "deleteTrailingEntriesIfEmpty",
    value: function deleteTrailingEntriesIfEmpty() {
      var lastEntry = this.entriesContainer.querySelector(':scope > :last-child');
      if (!lastEntry) {
        return;
      }
      if (this.isEntryEmpty(lastEntry)) {
        this.deleteEntry(lastEntry, true);
        this.deleteTrailingEntriesIfEmpty();
        this.manageIssuesAlert();
        this.updateModalTitle();
      }
    }
  }, {
    key: "handleEntryAdd",
    value: function handleEntryAdd() {
      this.addEntry();
      this.manageIssuesAlert();
      this.updateModalTitle();
    }
  }, {
    key: "handleEntryDelete",
    value: function handleEntryDelete(event) {
      var deleteBtn = event.currentTarget;
      var entry = deleteBtn.closest('.ibexa-user-invitation-modal__entry');
      this.deleteEntry(entry);
      this.manageIssuesAlert();
      this.updateModalTitle();
    }
  }, {
    key: "attachEntryListeners",
    value: function attachEntryListeners(entry) {
      var deleteEntryBtn = entry.querySelector('.ibexa-user-invitation-modal__entry-delete-btn');
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      deleteEntryBtn.addEventListener('click', this.handleEntryDelete, false);
      emailInput.addEventListener('blur', this.handleEmailValidation, false);
    }
  }, {
    key: "getNextEntryWithIssue",
    value: function getNextEntryWithIssue() {
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      var firstEntryWithIssue = _toConsumableArray(entries).find(this.checkHasEntryIssue);
      if (!firstEntryWithIssue) {
        return;
      }
      var nextEntryWithIssue = null;
      if (!this.lastScrolledToEntryWithIssue) {
        nextEntryWithIssue = firstEntryWithIssue;
      } else {
        var currentlyCheckedEntry = this.lastScrolledToEntryWithIssue;
        while (currentlyCheckedEntry.nextElementSibling) {
          currentlyCheckedEntry = currentlyCheckedEntry.nextElementSibling;
          if (this.checkHasEntryIssue(currentlyCheckedEntry)) {
            nextEntryWithIssue = currentlyCheckedEntry;
            break;
          }
        }
        if (!nextEntryWithIssue) {
          nextEntryWithIssue = firstEntryWithIssue;
        }
      }
      return nextEntryWithIssue;
    }
  }, {
    key: "scrollToNextIssue",
    value: function scrollToNextIssue() {
      var nextEntryWithIssue = this.getNextEntryWithIssue();
      var scrollTopOffset = this.stickyTopContainer.offsetHeight;
      var entryScrollPosition = nextEntryWithIssue.getBoundingClientRect().top + window.pageYOffset - scrollTopOffset;
      this.modal.scrollTo({
        top: entryScrollPosition,
        behavior: 'smooth'
      });
      this.lastScrolledToEntryWithIssue = nextEntryWithIssue;
    }
  }, {
    key: "searchEntries",
    value: function searchEntries(searchText) {
      var _this = this;
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      entries.forEach(function (entry) {
        var doesEntryMatchSearch = _this.checkEntryMatchesSearch(entry, searchText);
        entry.classList.toggle('ibexa-user-invitation-modal__entry--not-matching-search', !doesEntryMatchSearch);
      });
    }
  }, {
    key: "toggleSearchNoEntriesBasedOnSearch",
    value: function toggleSearchNoEntriesBasedOnSearch() {
      var isAnyEntryShowed = !!this.modal.querySelectorAll('.ibexa-user-invitation-modal__entry:not(.ibexa-user-invitation-modal__entry--not-matching-search)').length;
      this.searchNoEntries.classList.toggle('ibexa-user-invitation-modal__search-no-entries--hidden', isAnyEntryShowed);
    }
  }, {
    key: "toggleUpload",
    value: function toggleUpload(isForceHide) {
      this.fileUploadMessage.classList.toggle('ibexa-user-invitation-modal__upload-file-message--hidden', isForceHide);
      this.dropZone.classList.toggle('ibexa-user-invitation-modal__drop--hidden', isForceHide);
    }
  }, {
    key: "showUploadedFileNotification",
    value: function showUploadedFileNotification(fileName) {
      var message = Translator.trans(/*@Desc("File %fileName% was uploaded")*/'modal.file_uploaded.message', {
        fileName: fileName
      }, 'ibexa_user_invitation');
      ibexa.helpers.notification.showInfoNotification(message);
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      var _this2 = this;
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      entries.forEach(function (entry) {
        return _this2.deleteEntry(entry);
      });
      this.manageIssuesAlert();
      this.updateModalTitle();
      this.toggleUpload(false);
    }
  }, {
    key: "preventDefaultAction",
    value: function preventDefaultAction(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "handleInvitationFile",
    value: function () {
      var _handleInvitationFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(file) {
        var _this3 = this;
        var numberOfNonEmptyLines, invitationsData, entriesBeforeFileAdded;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this.toggleUpload(true);
              this.showUploadedFileNotification(file.name);
              _context.n = 1;
              return this.countFilledLinesInFile(file);
            case 1:
              numberOfNonEmptyLines = _context.v;
              _context.n = 2;
              return this.processCSVInvitationFile(file);
            case 2:
              invitationsData = _context.v;
              if (!(numberOfNonEmptyLines === 0 || numberOfNonEmptyLines !== invitationsData.length)) {
                _context.n = 3;
                break;
              }
              this.toggleBadFileAlert(true);
              this.toggleUpload(false);
              return _context.a(2);
            case 3:
              this.toggleBadFileAlert(false);
              this.deleteTrailingEntriesIfEmpty();
              entriesBeforeFileAdded = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
              invitationsData.forEach(function (invitationData) {
                var duplicateEntry = _this3.findDuplicateEntry(invitationData, entriesBeforeFileAdded);
                if (duplicateEntry) {
                  _this3.toggleDuplicateEntryState(duplicateEntry, true);
                  _this3.manageIssuesAlert();
                } else {
                  var _this3$addEntry = _this3.addEntry(true, invitationData),
                    insertedEntry = _this3$addEntry.insertedEntry;
                  _this3.validateEntryEmail(insertedEntry);
                }
              });
              this.updateModalTitle();
            case 4:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function handleInvitationFile(_x) {
        return _handleInvitationFile.apply(this, arguments);
      }
      return handleInvitationFile;
    }()
  }, {
    key: "handleInputUpload",
    value: function handleInputUpload(event) {
      this.preventDefaultAction(event);
      var file = this.fileInput.files[0];
      if (file) {
        this.handleInvitationFile(file);
      }
    }
  }, {
    key: "handleDropUpload",
    value: function handleDropUpload(event) {
      this.preventDefaultAction(event);
      var file = event.dataTransfer.files[0];
      if (file) {
        this.handleInvitationFile(file);
      }
    }
  }, {
    key: "handleSearch",
    value: function handleSearch() {
      this.searchEntries(this.searchInput.value);
      this.toggleSearchNoEntriesBasedOnSearch();
    }
  }, {
    key: "updateModalTitle",
    value: function updateModalTitle() {
      var titleNode = this.modal.querySelector('.modal-title');
      var invitationsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry').length;
      titleNode.innerText = Translator.trans(/*@Desc("Invite members (%invitations_count%)")*/'modal.title', {
        invitations_count: invitationsCount
      }, 'ibexa_user_invitation');
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;
      var ENTER_KEY_CODE = 13;
      this.initialEntries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      this.entryCounter = this.initialEntries.length;
      this.initialEntries.forEach(function (initialEntry) {
        _this4.attachEntryListeners(initialEntry);
        var emailInput = initialEntry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
        var isEmailEmpty = !emailInput.value;
        if (!isEmailEmpty) {
          _this4.validateEntryEmail(initialEntry);
        }
      });
      this.modal.addEventListener('shown.bs.modal', function () {
        window.addEventListener('drop', _this4.preventDefaultAction, false);
        window.addEventListener('dragover', _this4.preventDefaultAction, false);
      });
      this.modal.addEventListener('hidden.bs.modal', function () {
        window.removeEventListener('drop', _this4.preventDefaultAction, false);
        window.removeEventListener('dragover', _this4.preventDefaultAction, false);
        _this4.clearForm();
      });
      this.addNextBtn.addEventListener('click', this.handleEntryAdd, false);
      this.dropZone.addEventListener('drop', this.handleDropUpload, false);
      this.uploadLocalFileBtn.addEventListener('click', function (event) {
        event.preventDefault();
        _this4.fileInput.value = '';
        _this4.fileInput.click();
      }, false);
      this.fileInput.addEventListener('change', this.handleInputUpload, false);
      this.badFileAlertCloseBtn.addEventListener('click', function () {
        return _this4.toggleBadFileAlert(false);
      }, false);
      this.issuesAlertCloseBtn.addEventListener('click', function () {
        return _this4.toggleIssuesAlert(false);
      }, false);
      this.goToNextIssueBtn.addEventListener('click', this.scrollToNextIssue, false);
      this.searchInput.addEventListener('keyup', this.handleSearch, false);
      this.searchBtn.addEventListener('keyup', this.handleSearch, false);
      this.fakeSubmitBtn.addEventListener('click', function () {
        var allEntries = _toConsumableArray(_this4.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry'));
        var isFormValid = allEntries.map(function (entry) {
          return _this4.validateEntryEmail(entry);
        }).every(function (isError) {
          return !isError;
        });
        if (isFormValid) {
          _this4.realSubmitBtn.click();
        }
      }, false);
      this.updateModalTitle();
      this.form.addEventListener('keydown', function (event) {
        if (event.keyCode === ENTER_KEY_CODE) {
          event.preventDefault();
        }
      }, false);
    }
  }]);
}();

/***/ },

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/bulk.delete.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/bulk.delete.js ***!
  \*********************************************************************************************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var deleteBtn = doc.querySelector('.ibexa-ca-bulk-delete__delete-btn');
  if (!deleteBtn) {
    return;
  }
  var deleteCheckboxes = doc.querySelectorAll('.ibexa-ca-bulk-delete__checkbox');
  var setRemoveButtonState = function setRemoveButtonState() {
    var isAnyCheckboxSelected = _toConsumableArray(deleteCheckboxes).some(function (checkbox) {
      return checkbox.checked;
    });
    deleteBtn.disabled = !isAnyCheckboxSelected;
  };
  deleteCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', setRemoveButtonState, false);
  });
  setRemoveButtonState();
})(window, window.document);

/***/ },

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invitation.table.js"
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invitation.table.js ***!
  \**************************************************************************************************/
() {

(function (global, doc, ibexa, Translator, bootstrap) {
  var COPY_TOOLTIP_TIMEOUT = 3000;
  var table = doc.querySelector('.ibexa-ca-invitation-table');
  if (!table) {
    return;
  }
  var resendForm = doc.querySelector('form[name="ibexa_user_invitation_resend-form"]');
  var resendHashInput = resendForm.querySelector('#ibexa_user_invitation_resend-form');
  var reinviteForm = doc.querySelector('form[name="ibexa_user_invitation_reinvite-form"]');
  var reinviteHashInput = reinviteForm.querySelector('#ibexa_user_invitation_reinvite-form');
  var copyLinkBtns = table.querySelectorAll('.ibexa-ca-invitation-table__copy-link-btn');
  var reinviteBtns = table.querySelectorAll('.ibexa-ca-invitation-table__reinvite-btn');
  var resendBtns = table.querySelectorAll('.ibexa-ca-invitation-table__resend-btn');
  var handleCopyLink = function handleCopyLink(event) {
    var btn = event.currentTarget;
    var btnTooltip = bootstrap.Tooltip.getOrCreateInstance(btn);
    var link = btn.dataset.link;
    if (!global.navigator.clipboard) {
      ibexa.helpers.notification.showErrorNotification(Translator.trans(/*@Desc("Cannot copy invitation link due to browser limitations.")*/'table.invitations.actions.copy_link.copy_clipboard_error', {}, 'ibexa_corporate_account'));
      return;
    }
    var copiedTooltipTitle = Translator.trans(/*@Desc("Copied!")*/'table.invitations.actions.copy_link.copied_tooltip.title', {}, 'ibexa_corporate_account');
    var originalTooltipTitle = btn.dataset.bsOriginalTitle;
    global.navigator.clipboard.writeText(link);
    btn.dataset.bsOriginalTitle = copiedTooltipTitle;
    btnTooltip.show();
    setTimeout(function () {
      btnTooltip.hide();
      btn.dataset.bsOriginalTitle = originalTooltipTitle;
    }, COPY_TOOLTIP_TIMEOUT);
  };
  var handleReinvite = function handleReinvite(event) {
    var btn = event.currentTarget;
    var inviteHash = btn.dataset.inviteHash;
    reinviteHashInput.value = inviteHash;
    reinviteForm.submit();
  };
  var handleResend = function handleResend(event) {
    var btn = event.currentTarget;
    var inviteHash = btn.dataset.inviteHash;
    resendHashInput.value = inviteHash;
    resendForm.submit();
  };
  copyLinkBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleCopyLink, false);
  });
  reinviteBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleReinvite, false);
  });
  resendBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleResend, false);
  });
})(window, window.document, window.ibexa, window.Translator, window.bootstrap);

/***/ },

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invite.members.js"
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invite.members.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_user_invitation_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

(function (global, doc, ibexa) {
  var modal = doc.querySelector('.ibexa-ca-invite-members');
  if (!modal) {
    return;
  }
  var UserGroupInvitationModal = /*#__PURE__*/function (_UserInvitationModal) {
    function UserGroupInvitationModal() {
      _classCallCheck(this, UserGroupInvitationModal);
      return _callSuper(this, UserGroupInvitationModal, arguments);
    }
    _inherits(UserGroupInvitationModal, _UserInvitationModal);
    return _createClass(UserGroupInvitationModal, [{
      key: "processCSVInvitationFile",
      value: function processCSVInvitationFile(file) {
        return file.text().then(function (text) {
          var lineRegexp = /^([^;\r\n]+);([^;\r\n]+)$/gm;
          var matchedData = _toConsumableArray(text.matchAll(lineRegexp));
          var invitationsData = matchedData.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
              email = _ref2[1],
              role = _ref2[2];
            return {
              email: email,
              role: role
            };
          });
          return invitationsData;
        });
      }
    }, {
      key: "resetEntry",
      value: function resetEntry(entry) {
        _superPropGet(UserGroupInvitationModal, "resetEntry", this, 3)([entry]);
        var emailInput = entry.querySelector('.ibexa-ca-invite-members__entry-email');
        var dropdownNode = entry.querySelector('.ibexa-dropdown');
        var dropdownOptionsCount = dropdownNode.querySelectorAll('.ibexa-input--select option').length;
        var dropdown = ibexa.helpers.objectInstances.getInstance(dropdownNode);
        emailInput.value = null;
        if (dropdownOptionsCount > 0) {
          dropdown.selectFirstOption();
        }
      }
    }, {
      key: "isEntryEmpty",
      value: function isEntryEmpty(entry) {
        var emailInput = entry.querySelector('.ibexa-ca-invite-members__entry-email');
        var dropdownNode = entry.querySelector('.ibexa-dropdown');
        var dropdown = ibexa.helpers.objectInstances.getInstance(dropdownNode);
        var dropdownSelectedOption = dropdown.getSelectedItems()[0];
        var dropdownFirstOption = dropdownNode.querySelector('.ibexa-dropdown__source option');
        return !emailInput.value && dropdownSelectedOption === dropdownFirstOption;
      }
    }, {
      key: "addEntry",
      value: function addEntry() {
        var _invitationData$email, _invitationData$role;
        var isFileRelated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var invitationData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var addEntryData = _superPropGet(UserGroupInvitationModal, "addEntry", this, 3)([isFileRelated, invitationData]);
        var insertedEntry = addEntryData.insertedEntry;
        var email = (_invitationData$email = invitationData === null || invitationData === void 0 ? void 0 : invitationData.email) !== null && _invitationData$email !== void 0 ? _invitationData$email : null;
        var role = (_invitationData$role = invitationData === null || invitationData === void 0 ? void 0 : invitationData.role) !== null && _invitationData$role !== void 0 ? _invitationData$role : null;
        var emailInput = insertedEntry.querySelector('.ibexa-ca-invite-members__entry-email');
        var dropdownContainer = insertedEntry.querySelector('.ibexa-dropdown');
        var dropdown = new ibexa.core.Dropdown({
          container: dropdownContainer
        });
        dropdown.init();
        var optionToSelect = role ? dropdownContainer.querySelector(".ibexa-dropdown__item[data-value=\"".concat(role, "\"")) : null;
        if (optionToSelect) {
          dropdown.selectOption(role);
        }
        emailInput.value = email;
        return addEntryData;
      }
    }, {
      key: "checkEntryMatchesSearch",
      value: function checkEntryMatchesSearch(entry, searchText) {
        var emailInput = entry.querySelector('.ibexa-ca-invite-members__entry-email');
        var email = emailInput.value;
        return email.includes(searchText);
      }
    }, {
      key: "checkIsEntryDuplicate",
      value: function checkIsEntryDuplicate(invitationData, entryToCompare) {
        var entryToCompareEmailInput = entryToCompare.querySelector('.ibexa-ca-invite-members__entry-email');
        return invitationData.email === entryToCompareEmailInput.value;
      }
    }]);
  }(_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_user_invitation_modal__WEBPACK_IMPORTED_MODULE_0__.UserInvitationModal);
  var userInvitationModal = new UserGroupInvitationModal({
    modal: modal
  });
  userInvitationModal.init();
})(window, window.document, window.ibexa);

/***/ },

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/tucked.menu.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/tucked.menu.js ***!
  \*********************************************************************************************/
() {

(function (global, doc, ibexa, Popper) {
  var tuckedMenus = doc.querySelectorAll('.ibexa-ca-tucked-menu');
  tuckedMenus.forEach(function (tuckedMenu) {
    var tuckedMenuBtn = tuckedMenu.querySelector('.ibexa-ca-tucked-menu__btn');
    var popupMenu = tuckedMenu.querySelector('.ibexa-popup-menu');
    var popperInstance = Popper.createPopper(tuckedMenuBtn, popupMenu, {
      placement: 'bottom-end'
    });
    var _handleClickOutsidePopup = function handleClickOutsidePopup(event) {
      var isClickInsideTuckedMenu = event.target.closest('.ibexa-ca-tucked-menu') === tuckedMenu;
      if (isClickInsideTuckedMenu) {
        return;
      }
      popupMenu.classList.add('ibexa-popup-menu--hidden');
      doc.removeEventListener('click', _handleClickOutsidePopup, false);
    };
    var handleBtnClick = function handleBtnClick() {
      var isPopupOpened = !popupMenu.classList.contains('ibexa-popup-menu--hidden');
      if (isPopupOpened) {
        popupMenu.classList.add('ibexa-popup-menu--hidden');
        doc.removeEventListener('click', _handleClickOutsidePopup, false);
      } else {
        popupMenu.classList.remove('ibexa-popup-menu--hidden');
        popperInstance.update();
        doc.addEventListener('click', _handleClickOutsidePopup, false);
      }
    };
    tuckedMenuBtn.addEventListener('click', handleBtnClick, false);
  });
})(window, window.document, window.ibexa, window.Popper);

/***/ },

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/update.default.shipping.address.js"
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/update.default.shipping.address.js ***!
  \*****************************************************************************************************************/
() {

(function (global, doc) {
  var updateDefaultShippingAddress = function updateDefaultShippingAddress(event) {
    doc.querySelector('#company_update_default_shipping_address_address').value = event.target.value;
    doc.querySelector('form[name="company_update_default_shipping_address"]').submit();
  };
  doc.querySelectorAll('input[name="updateDefaultShippingAddress"]').forEach(function (input) {
    return input.addEventListener('change', updateDefaultShippingAddress, false);
  });
})(window, window.document);

/***/ },

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.role.change.js"
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.role.change.js ***!
  \**************************************************************************************************/
() {

(function (global, doc, ibexa, bootstrap) {
  var modal = doc.querySelector('.ibexa-ca-user-role-change-modal');
  if (!modal) {
    return;
  }
  var bootstrapModalInstance = bootstrap.Modal.getOrCreateInstance(modal);
  var userIdInput = modal.querySelector('#member_role_change_member_user');
  var companyIdInput = modal.querySelector('#member_role_change_member_company');
  var roleSelect = modal.querySelector('#member_role_change_new_role');
  var roleDropdownNode = roleSelect.closest('.ibexa-dropdown');
  var roleDropdownInstance = ibexa.helpers.objectInstances.getInstance(roleDropdownNode);
  var userChangeRoleBtns = doc.querySelectorAll('.ibexa-ca-user-change-role-btn');
  var prepareModal = function prepareModal(userId, companyId, currentRoleId) {
    userIdInput.value = userId;
    companyIdInput.value = companyId;
    roleDropdownInstance.selectOption(currentRoleId);
  };
  var handleUserRoleChange = function handleUserRoleChange(event) {
    var btn = event.currentTarget;
    var _btn$dataset = btn.dataset,
      userId = _btn$dataset.userId,
      companyId = _btn$dataset.companyId,
      currentRoleId = _btn$dataset.currentRoleId;
    prepareModal(userId, companyId, currentRoleId);
    bootstrapModalInstance.show();
  };
  userChangeRoleBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleUserRoleChange, false);
  });
})(window, window.document, window.ibexa, window.bootstrap);

/***/ },

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.status.change.confirmation.modal.js"
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.status.change.confirmation.modal.js ***!
  \***********************************************************************************************************************/
() {

(function (global, doc, bootstrap, Translator) {
  var modal = doc.querySelector('.ibexa-ca-user-status-change-confirmation-modal');
  if (!modal) {
    return;
  }
  var bootstrapModalInstance = bootstrap.Modal.getOrCreateInstance(modal);
  var activateBtn = modal.querySelector('.ibexa-ca-user-status-change-confirmation-modal__activate-btn');
  var deactivateBtn = modal.querySelector('.ibexa-ca-user-status-change-confirmation-modal__deactivate-btn');
  var modalTitleNode = modal.querySelector('.modal-title');
  var questionNode = modal.querySelector('.ibexa-ca-user-status-change-confirmation-modal__question');
  var noteNode = modal.querySelector('.ibexa-ca-user-status-change-confirmation-modal__note');
  var userStatusChangeBtns = doc.querySelectorAll('.ibexa-ca-user-status-change-btn');
  var currentHref = null;
  var toggleUserStatus = function toggleUserStatus() {
    window.location.href = currentHref;
  };
  var prepareModal = function prepareModal(statusChangeType, username, href) {
    currentHref = href;
    if (statusChangeType === 'activate') {
      var modalTitle = Translator.trans(/*@Desc("Activate user")*/'modal.user_status_change.title.activate', {}, 'ibexa_corporate_account');
      var questionText = Translator.trans(/*@Desc("Are you sure you want to activate %username%?")*/'modal.user_status_change.question.activate', {
        username: username
      }, 'ibexa_corporate_account');
      var noteText = Translator.trans(/*@Desc("This user will get access to their account.")*/'modal.user_status_change.note.activate', {
        username: username
      }, 'ibexa_corporate_account');
      modalTitleNode.innerText = modalTitle;
      questionNode.innerText = questionText;
      noteNode.innerText = noteText;
      activateBtn.hidden = false;
      deactivateBtn.hidden = true;
    } else {
      var _modalTitle = Translator.trans(/*@Desc("De-activate user")*/'modal.user_status_change.title.deactivate', {}, 'ibexa_corporate_account');
      var _questionText = Translator.trans(/*@Desc("Are you sure you want to de-activate %username%?")*/'modal.user_status_change.question.deactivate', {
        username: username
      }, 'ibexa_corporate_account');
      var _noteText = Translator.trans(/*@Desc("This user will lose access to their account.")*/'modal.user_status_change.note.deactivate', {
        username: username
      }, 'ibexa_corporate_account');
      modalTitleNode.innerText = _modalTitle;
      questionNode.innerText = _questionText;
      noteNode.innerText = _noteText;
      activateBtn.hidden = true;
      deactivateBtn.hidden = false;
    }
  };
  var handleUserStatusChange = function handleUserStatusChange(event) {
    var btn = event.currentTarget;
    var _btn$dataset = btn.dataset,
      statusChangeType = _btn$dataset.statusChangeType,
      username = _btn$dataset.username,
      href = _btn$dataset.href;
    prepareModal(statusChangeType, username, href);
    bootstrapModalInstance.show();
  };
  userStatusChangeBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleUserStatusChange, false);
  });
  activateBtn.addEventListener('click', toggleUserStatus, false);
  deactivateBtn.addEventListener('click', toggleUserStatus, false);
})(window, window.document, window.bootstrap, window.Translator);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/update.default.shipping.address.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/bulk.delete.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/filters.action.btns.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invitation.table.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invite.members.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/tucked.menu.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.role.change.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.status.change.confirmation.modal.js"));
/******/ }
]);