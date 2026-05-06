(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-search-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js"
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js ***!
  \**********************************************************************************************/
() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
(function (global, doc, ibexa, flatpickr, React, ReactDOM) {
  var _this = this;
  var _ibexa$helpers$text = ibexa.helpers.text,
    escapeHTML = _ibexa$helpers$text.escapeHTML,
    escapeHTMLAttribute = _ibexa$helpers$text.escapeHTMLAttribute;
  var dangerouslySetInnerHTML = ibexa.helpers.dom.dangerouslySetInnerHTML;
  var getInstance = ibexa.helpers.objectInstances.getInstance;
  var getUsersTimeout;
  var SELECTOR_TAG = '.ibexa-tag';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var filters = doc.querySelector('.ibexa-filters');
  var clearBtn = filters.querySelector('.ibexa-btn--clear');
  var applyBtn = filters.querySelector('.ibexa-btn--apply');
  var contentTypeSelect = doc.querySelector('.ibexa-filters__item--content-type .ibexa-filters__select');
  var sectionSelect = doc.querySelector('.ibexa-filters__item--section .ibexa-filters__select');
  var lastModifiedSelectNode = doc.querySelector('.ibexa-filters__item--modified .ibexa-filters__select');
  var lastModifiedSelect = getInstance(lastModifiedSelectNode);
  var lastModifiedDateRangeNode = doc.querySelector('.ibexa-filters__item--modified .ibexa-date-time-range-single');
  var lastModifiedDateRange = getInstance(lastModifiedDateRangeNode);
  var _lastModifiedDateRang = lastModifiedDateRangeNode.dataset,
    lastModifiedPeriodSelector = _lastModifiedDateRang.periodSelector,
    lastModifiedStartSelector = _lastModifiedDateRang.startSelector,
    lastModifiedEndSelector = _lastModifiedDateRang.endSelector;
  var lastModifiedPeriod = doc.querySelector(lastModifiedPeriodSelector);
  var lastModifiedStartDate = doc.querySelector(lastModifiedStartSelector);
  var lastModifiedEndDate = doc.querySelector(lastModifiedEndSelector);
  var lastCreatedSelectNode = doc.querySelector('.ibexa-filters__item--created .ibexa-filters__select');
  var lastCreatedSelect = getInstance(lastCreatedSelectNode);
  var lastCreatedDateRangeNode = doc.querySelector('.ibexa-filters__item--created .ibexa-date-time-range-single');
  var lastCreatedDateRange = getInstance(lastCreatedDateRangeNode);
  var _lastCreatedDateRange = lastCreatedDateRangeNode.dataset,
    lastCreatedPeriodSelector = _lastCreatedDateRange.periodSelector,
    lastCreatedStartDateSelector = _lastCreatedDateRange.startSelector,
    lastCreatedEndDateSelector = _lastCreatedDateRange.endSelector;
  var lastCreatedPeriod = doc.querySelector(lastCreatedPeriodSelector);
  var lastCreatedStartDate = doc.querySelector(lastCreatedStartDateSelector);
  var lastCreatedEndDate = doc.querySelector(lastCreatedEndDateSelector);
  var creatorInput = doc.querySelector('.ibexa-filters__item--creator .ibexa-input');
  var searchCreatorInput = doc.querySelector('#search_creator');
  var usersList = doc.querySelector('.ibexa-filters__item--creator .ibexa-filters__user-list');
  var contentTypeCheckboxes = doc.querySelectorAll('.ibexa-content-type-selector__item [type="checkbox"]');
  var selectSubtreeBtn = doc.querySelector('.ibexa-filters__item--subtree .ibexa-tag-view-select__btn-select-path');
  var subtreeInput = doc.querySelector('#search_subtree');
  var showMoreBtns = doc.querySelectorAll('.ibexa-content-type-selector__show-more');
  var clearFilters = function clearFilters(event) {
    event.preventDefault();
    var option = contentTypeSelect.querySelector('option');
    var defaultText = option.dataset["default"];
    var lastModifiedDataRange = doc.querySelector(lastModifiedSelectNode.dataset.targetSelector);
    var lastCreatedDataRange = doc.querySelector(lastCreatedSelectNode.dataset.targetSelector);
    var lastModifiedEnd = doc.querySelector(lastModifiedDataRange.dataset.endSelector);
    var lastCreatedEnd = doc.querySelector(lastCreatedDataRange.dataset.endSelector);
    option.innerHTML = defaultText;
    contentTypeCheckboxes.forEach(function (checkbox) {
      checkbox.removeAttribute('checked');
      checkbox.checked = false;
    });
    if (sectionSelect) {
      sectionSelect[0].selected = true;
    }
    lastModifiedSelectNode[0].selected = true;
    lastCreatedSelectNode[0].selected = true;
    lastModifiedSelectNode.querySelector('option').selected = true;
    lastModifiedPeriod.value = '';
    lastModifiedEnd.value = '';
    lastCreatedPeriod.value = '';
    lastCreatedEnd.value = '';
    subtreeInput.value = '';
    handleResetUser();
    event.target.closest('form').submit();
  };
  var toggleDisabledStateOnApplyBtn = function toggleDisabledStateOnApplyBtn() {
    var contentTypeOption = contentTypeSelect.querySelector('option');
    var isContentTypeSelected = contentTypeOption.innerHTML !== contentTypeOption.dataset["default"];
    var isSectionSelected = sectionSelect ? !!sectionSelect.value : false;
    var isCreatorSelected = !!searchCreatorInput.value;
    var isSubtreeSelected = !!subtreeInput.value.trim().length;
    var isModifiedSelected = !!lastModifiedSelectNode.value;
    var isCreatedSelected = !!lastCreatedSelectNode.value;
    if (lastModifiedSelectNode.value === 'custom_range') {
      var lastModifiedStartDateValue = lastModifiedStartDate.value;
      var lastModifiedEndDateValue = lastModifiedEndDate.value;
      if (!lastModifiedStartDateValue || !lastModifiedEndDateValue) {
        isModifiedSelected = false;
      }
    }
    if (lastCreatedSelectNode.value === 'custom_range') {
      var lastCreatedStartDateValue = lastCreatedStartDate.value;
      var lastCreatedEndDateValue = lastCreatedEndDate.value;
      if (!lastCreatedStartDateValue || !lastCreatedEndDateValue) {
        isCreatedSelected = false;
      }
    }
    var isEnabled = isContentTypeSelected || isSectionSelected || isModifiedSelected || isCreatedSelected || isCreatorSelected || isSubtreeSelected;
    var methodName = isEnabled ? 'removeAttribute' : 'setAttribute';
    applyBtn[methodName]('disabled', !isEnabled);
  };
  var toggleDatesSelectVisibility = function toggleDatesSelectVisibility(event, select, dateRange) {
    var datesRangeNode = doc.querySelector(event.target.dataset.targetSelector);
    if (select.value !== 'custom_range') {
      dateRange.toggleHidden(true);
      dateRange.clearDates();
      doc.querySelector(datesRangeNode.dataset.periodSelector).value = event.target.value;
      toggleDisabledStateOnApplyBtn();
      return;
    }
    dateRange.toggleHidden(false);
  };
  var filterByContentType = function filterByContentType() {
    var selectedCheckboxes = _toConsumableArray(contentTypeCheckboxes).filter(function (checkbox) {
      return checkbox.checked;
    });
    var contentTypesText = selectedCheckboxes.map(function (checkbox) {
      return escapeHTML(checkbox.dataset.name);
    }).join(', ');
    var _contentTypeSelect = _slicedToArray(contentTypeSelect, 1),
      option = _contentTypeSelect[0];
    var defaultText = option.dataset["default"];
    dangerouslySetInnerHTML(option, contentTypesText || defaultText);
    toggleDisabledStateOnApplyBtn();
  };
  var getUsersList = function getUsersList(value) {
    var body = JSON.stringify({
      ViewInput: {
        identifier: "find-user-by-name-".concat(encodeURIComponent(value)),
        "public": false,
        ContentQuery: {
          FacetBuilders: {},
          SortClauses: {},
          Query: {
            FullTextCriterion: "".concat(value, "*"),
            ContentTypeIdentifierCriterion: creatorInput.dataset.contentTypeIdentifiers.split(',')
          },
          limit: 50,
          offset: 0
        }
      }
    });
    var request = new Request('/api/ibexa/v2/views', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
        'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: body,
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      return response.json();
    }).then(showUsersList);
  };
  var createUsersListItem = function createUsersListItem(user) {
    var userNameHtmlEscaped = escapeHTML(user.TranslatedName);
    var userNameHtmlAttributeEscaped = escapeHTMLAttribute(user.TranslatedName);
    return "<li data-id=\"".concat(user._id, "\" data-name=\"").concat(userNameHtmlAttributeEscaped, "\" class=\"ibexa-filters__user-item\">").concat(userNameHtmlEscaped, "</li>");
  };
  var showUsersList = function showUsersList(data) {
    var hits = data.View.Result.searchHits.searchHit;
    var users = hits.reduce(function (total, hit) {
      return total + createUsersListItem(hit.value.Content);
    }, '');
    var methodName = users ? 'addEventListener' : 'removeEventListener';
    dangerouslySetInnerHTML(usersList, users);
    usersList.classList.remove('ibexa-filters__user-list--hidden');
    doc.querySelector('body')[methodName]('click', _handleClickOutsideUserList, false);
  };
  var handleTyping = function handleTyping(event) {
    var value = event.target.value.trim();
    window.clearTimeout(getUsersTimeout);
    if (value.length > 2) {
      getUsersTimeout = window.setTimeout(getUsersList.bind(null, value), 200);
    } else {
      usersList.classList.add('ibexa-filters__user-list--hidden');
      doc.querySelector('body').removeEventListener('click', _handleClickOutsideUserList, false);
    }
  };
  var handleSelectUser = function handleSelectUser(event) {
    searchCreatorInput.value = event.target.dataset.id;
    usersList.classList.add('ibexa-filters__user-list--hidden');
    creatorInput.value = event.target.dataset.name;
    doc.querySelector('body').removeEventListener('click', _handleClickOutsideUserList, false);
    toggleDisabledStateOnApplyBtn();
  };
  var handleResetUser = function handleResetUser() {
    searchCreatorInput.value = '';
    creatorInput.value = '';
    creatorInput.removeAttribute('disabled');
    toggleDisabledStateOnApplyBtn();
  };
  var _handleClickOutsideUserList = function handleClickOutsideUserList(event) {
    if (event.target.closest('.ibexa-filters__item--creator')) {
      return;
    }
    creatorInput.value = '';
    usersList.classList.add('ibexa-filters__user-list--hidden');
    doc.querySelector('body').removeEventListener('click', _handleClickOutsideUserList, false);
  };
  var removeSearchTag = function removeSearchTag(event) {
    var tag = event.currentTarget.closest(SELECTOR_TAG);
    var form = event.currentTarget.closest('form');
    ibexa.helpers.tooltips.hideAll();
    tag.remove();
    form.submit();
  };
  var clearContentType = function clearContentType(event) {
    var checkbox = doc.querySelector(event.currentTarget.dataset.targetSelector);
    checkbox.checked = false;
    removeSearchTag(event);
  };
  var clearSection = function clearSection(event) {
    sectionSelect[0].selected = true;
    removeSearchTag(event);
  };
  var clearSubtree = function clearSubtree(event) {
    subtreeInput.value = '';
    removeSearchTag(event);
  };
  var clearDataRange = function clearDataRange(event, select, dateRange) {
    select.clearCurrentSelection();
    dateRange.clearDates();
    dateRange.toggleHidden(true);
    removeSearchTag(event);
  };
  var clearCreator = function clearCreator(event) {
    handleResetUser();
    removeSearchTag(event);
  };
  var clearSearchTagBtnMethods = {
    section: function section(event) {
      return clearSection(event);
    },
    subtree: function subtree(event) {
      return clearSubtree(event);
    },
    creator: function creator(event) {
      return clearCreator(event);
    },
    'content-types': function contentTypes(event) {
      return clearContentType(event);
    },
    'last-modified': function lastModified(event) {
      return clearDataRange(event, lastModifiedSelect, lastModifiedDateRange);
    },
    'last-created': function lastCreated(event) {
      return clearDataRange(event, lastCreatedSelect, lastCreatedDateRange);
    }
  };
  var showMoreContentTypes = function showMoreContentTypes(event) {
    var btn = event.currentTarget;
    var contentTypesList = btn.closest('.ibexa-content-type-selector__list-wrapper').querySelector('.ibexa-content-type-selector__list[hidden]');
    btn.setAttribute('hidden', true);
    contentTypesList.removeAttribute('hidden');
  };
  var selectSubtreeWidget = new ibexa.core.TagViewSelect({
    fieldContainer: doc.querySelector('.ibexa-filters__item--subtree')
  });
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var confirmSubtreeUDW = function confirmSubtreeUDW(data) {
    ibexa.helpers.tagViewSelect.buildItemsFromUDWResponse(data, function (item) {
      return item.pathString;
    }, function (items) {
      selectSubtreeWidget.addItems(items, true);
      closeUDW();
    });
  };
  var openSubtreeUDW = function openSubtreeUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: confirmSubtreeUDW.bind(_this),
      onCancel: closeUDW,
      multiple: true
    }, config)));
  };
  filterByContentType();
  clearBtn.addEventListener('click', clearFilters, false);
  if (sectionSelect) {
    sectionSelect.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  }
  var _loop = function _loop(tagType) {
    var tagBtns = doc.querySelectorAll(".ibexa-tag__remove-btn--".concat(tagType));
    tagBtns.forEach(function (btn) {
      return btn.addEventListener('click', clearSearchTagBtnMethods[tagType], false);
    });
  };
  for (var tagType in clearSearchTagBtnMethods) {
    _loop(tagType);
  }
  lastModifiedPeriod.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  lastModifiedStartDate.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  lastModifiedEndDate.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  lastCreatedPeriod.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  lastCreatedStartDate.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  lastCreatedEndDate.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  subtreeInput.addEventListener('change', toggleDisabledStateOnApplyBtn, false);
  lastModifiedSelectNode.addEventListener('change', function (event) {
    return toggleDatesSelectVisibility(event, lastModifiedSelectNode, lastModifiedDateRange);
  }, false);
  lastCreatedSelectNode.addEventListener('change', function (event) {
    return toggleDatesSelectVisibility(event, lastCreatedSelectNode, lastCreatedDateRange);
  }, false);
  creatorInput.addEventListener('keyup', handleTyping, false);
  usersList.addEventListener('click', handleSelectUser, false);
  contentTypeCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', filterByContentType, false);
  });
  showMoreBtns.forEach(function (showMoreBtn) {
    return showMoreBtn.addEventListener('click', showMoreContentTypes, false);
  });
  selectSubtreeBtn.addEventListener('click', openSubtreeUDW, false);
})(window, window.document, window.ibexa, window.flatpickr, window.React, window.ReactDOM);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js"
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js ***!
  \**************************************************************************************/
() {

(function (global, doc) {
  var headerSearchInput = doc.querySelector('.ibexa-global-search__input');
  var headerSearchSubmitBtn = doc.querySelector('.ibexa-main-header .ibexa-input-text-wrapper__action-btn--search');
  var searchForm = doc.querySelector('.ibexa-search-form');
  var searchInput = doc.querySelector('.ibexa-search-form__search-input');
  var languageSelector = doc.querySelector('.ibexa-filters__item--language-selector .ibexa-filters__select');
  var submitForm = function submitForm() {
    searchInput.value = headerSearchInput.value;
    searchForm.submit();
  };
  var handleHeaderSearchBtnClick = function handleHeaderSearchBtnClick(event) {
    event.preventDefault();
    submitForm();
  };
  headerSearchInput.value = searchInput.value;
  headerSearchSubmitBtn.addEventListener('click', handleHeaderSearchBtnClick, false);
  languageSelector === null || languageSelector === void 0 || languageSelector.addEventListener('change', submitForm, false);
})(window, document);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.sorting.js"
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.sorting.js ***!
  \**********************************************************************************************/
() {

(function (global, doc) {
  var searchForm = doc.querySelector('.ibexa-search-form');
  var searchSortOrderSelect = doc.querySelector('.ibexa-search-form__sort-order-select');
  if (searchSortOrderSelect) {
    searchSortOrderSelect.addEventListener('change', function () {
      searchForm.submit();
    }, false);
  }
})(window, window.document);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js ***!
  \*********************************************************************************************/
() {

(function (global, doc, bootstrap, ibexa, Translator, Routing) {
  var FORM_EDIT = 'form.ibexa-edit-content-form';
  var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
  var editVersion = function editVersion(event) {
    var versionEditForm = doc.querySelector(FORM_EDIT);
    var versionEditFormName = versionEditForm.name;
    var _event$currentTarget$ = event.currentTarget.dataset,
      contentId = _event$currentTarget$.contentId,
      versionNo = _event$currentTarget$.versionNo,
      languageCode = _event$currentTarget$.languageCode,
      withConfirm = _event$currentTarget$.withConfirm;
    var contentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[content_info]\"]"));
    var versionInfoContentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][content_info]\"]"));
    var versionInfoVersionNoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][version_no]\"]"));
    var languageInput = versionEditForm.querySelector("#".concat(versionEditFormName, "_language_").concat(languageCode));
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode
    });
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans(/*@Desc("You don't have permission to edit this Content item")*/'content.edit.permission.error', {}, 'ibexa_content');
    var submitVersionEditForm = function submitVersionEditForm() {
      contentInfoInput.value = contentId;
      versionInfoContentInfoInput.value = contentId;
      versionInfoVersionNoInput.value = versionNo !== undefined ? versionNo : null;
      languageInput.checked = true;
      versionEditForm.submit();
    };
    var addDraft = function addDraft() {
      submitVersionEditForm();
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
    };
    var showModal = function showModal(modalHtml) {
      var wrapper = doc.querySelector('.ibexa-modal-wrapper');
      wrapper.innerHTML = modalHtml;
      var conflictModal = doc.querySelector('#version-draft-conflict-modal');
      var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
      if (addDraftButton) {
        addDraftButton.addEventListener('click', addDraft, false);
      }
      wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
        return btn.addEventListener('click', function (wrapperBtnEvent) {
          return wrapperBtnEvent.preventDefault();
        }, false);
      });
      bootstrap.Modal.getOrCreateInstance(conflictModal).show();
      conflictModal.addEventListener('hide.bs.modal', function () {
        doc.body.dispatchEvent(new CustomEvent('ibexa:edit-content-reset-language-selector'));
      });
    };
    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(checkVersionDraftLink, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }
      throw new Error(errorMessage);
    };
    var handleDraftConflict = function handleDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        response.text().then(showModal);
      } else if (response.status === 403) {
        response.text().then(showErrorNotification);
      } else if (response.status === 200) {
        if (!withConfirm) {
          submitVersionEditForm();
        }
      }
    };
    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleDraftConflict)["catch"](showErrorNotification);
  };
  doc.querySelectorAll('.ibexa-btn--content-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.bootstrap, window.ibexa, window.Translator, window.Routing);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js"
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js ***!
  \*************************************************************************************************/
() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa) {
  var EditTranslation = /*#__PURE__*/function () {
    "use strict";

    function EditTranslation(config) {
      _classCallCheck(this, EditTranslation);
      this.container = config.container;
      this.toggler = config.container.querySelector('.ibexa-btn--translations-list-toggler');
      this.extraActionsContainer = config.container.querySelector('.ibexa-extra-actions');
      this.closeBtn = config.container.querySelector('.ibexa-extra-actions__close-btn');
      this.confirmBtn = config.container.querySelector('.ibexa-extra-actions__confirm-btn');
      this.languagesBtns = config.container.querySelectorAll('.ibexa-btn--select-language');
      this.backdrop = config.backdrop;
      this.tableNode = null;
      this.hideExtraActionPanel = this.hideExtraActionPanel.bind(this);
      this.showExtraActionPanel = this.showExtraActionPanel.bind(this);
      this.setActiveLanguage = this.setActiveLanguage.bind(this);
      this.resetLanguageSelector = this.resetLanguageSelector.bind(this);
      this.setPosition = this.setPosition.bind(this);
    }
    return _createClass(EditTranslation, [{
      key: "setPosition",
      value: function setPosition() {
        var topOffset = parseInt(this.extraActionsContainer.dataset.topOffset, 10);
        var topPosition = window.scrollY > topOffset ? 0 : topOffset - window.scrollY;
        var height = window.scrollY > topOffset ? window.innerHeight : window.innerHeight + window.scrollY - topOffset;
        this.extraActionsContainer.style.top = "".concat(topPosition, "px");
        this.extraActionsContainer.style.height = "".concat(height, "px");
      }
    }, {
      key: "hideExtraActionPanel",
      value: function hideExtraActionPanel() {
        if (this.tableNode) {
          this.tableNode.classList.add('ibexa-table--last-column-sticky');
          this.tableNode = null;
        }
        this.backdrop.hide();
        this.extraActionsContainer.classList.add('ibexa-extra-actions--hidden');
        this.closeBtn.removeEventListener('click', this.hideExtraActionPanel, false);
      }
    }, {
      key: "showExtraActionPanel",
      value: function showExtraActionPanel(_ref) {
        var currentTarget = _ref.currentTarget;
        this.extraActionsContainer.classList.remove('ibexa-extra-actions--hidden');
        this.tableNode = currentTarget.closest('.ibexa-table--last-column-sticky');
        if (this.tableNode) {
          this.tableNode.classList.remove('ibexa-table--last-column-sticky');
        }
        this.setPosition();
        this.backdrop.show();
        this.closeBtn.addEventListener('click', this.hideExtraActionPanel, false);
        ibexa.helpers.tooltips.hideAll();
      }
    }, {
      key: "setActiveLanguage",
      value: function setActiveLanguage(event) {
        var _event$currentTarget$ = event.currentTarget.dataset,
          contentId = _event$currentTarget$.contentId,
          languageCode = _event$currentTarget$.languageCode;
        this.confirmBtn.dataset.contentId = contentId;
        this.confirmBtn.dataset.languageCode = languageCode;
        this.confirmBtn.disabled = false;
        this.languagesBtns.forEach(function (btn) {
          return btn.classList.remove('ibexa-btn--active');
        });
        event.currentTarget.classList.add('ibexa-btn--active');
      }
    }, {
      key: "resetLanguageSelector",
      value: function resetLanguageSelector() {
        this.confirmBtn.dataset.contentId = null;
        this.confirmBtn.dataset.languageCode = null;
        this.confirmBtn.disabled = true;
        this.languagesBtns.forEach(function (btn) {
          return btn.classList.remove('ibexa-btn--active');
        });
      }
    }, {
      key: "init",
      value: function init() {
        var _this = this;
        this.toggler.addEventListener('click', this.showExtraActionPanel, false);
        this.languagesBtns.forEach(function (btn) {
          btn.addEventListener('click', _this.setActiveLanguage, false);
        });
        document.body.addEventListener('ibexa:edit-content-reset-language-selector', this.resetLanguageSelector, false);
      }
    }]);
  }();
  var translationSelectors = doc.querySelectorAll('.ibexa-translation-selector');
  translationSelectors.forEach(function (translationSelector) {
    var backdrop = new ibexa.core.Backdrop();
    var editTranslation = new EditTranslation({
      container: translationSelector,
      backdrop: backdrop
    });
    editTranslation.init();
  });
})(window, document, window.ibexa);

/***/ },

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js ***!
  \*********************************************************************************************/
() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-select-location');
  var udwContainer = doc.getElementById('react-udw');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var udwRoot = null;
  var findLocationsByIdList = function findLocationsByIdList(idList, callback) {
    var body = JSON.stringify({
      ViewInput: {
        identifier: "udw-locations-by-path-string-".concat(idList.join('-')),
        "public": false,
        LocationQuery: {
          FacetBuilders: {},
          SortClauses: {
            SectionIdentifier: 'ascending'
          },
          Filter: {
            LocationIdCriterion: idList.join(',')
          },
          limit: 50,
          offset: 0
        }
      }
    });
    var request = new Request('/api/ibexa/v2/views', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
        'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: body,
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    var errorMessage = Translator.trans(/*@Desc("Cannot find children Locations with ID %idList%")*/'select_location.error', {
      idList: idList.join(',')
    }, 'ibexa_universal_discovery_widget');
    fetch(request).then(ibexa.helpers.request.getJsonFromResponse).then(callback)["catch"](function () {
      return ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  var removeRootFromPathString = function removeRootFromPathString(pathString) {
    var pathArray = pathString.split('/').filter(function (val) {
      return val;
    });
    return pathArray.splice(1, pathArray.length - 1);
  };
  var buildBreadcrumbsString = function buildBreadcrumbsString(viewData) {
    var searchHitList = viewData.View.Result.searchHits.searchHit;
    return searchHitList.map(function (searchHit) {
      return searchHit.value.Location.ContentInfo.Content.TranslatedName;
    }).join(' / ');
  };
  var toggleVisibility = function toggleVisibility(btn, isLocationSelected) {
    var contentBreadcrumbsWrapper = doc.querySelector(btn.dataset.contentBreadcrumbsSelector);
    btn.hidden = isLocationSelected;
    if (contentBreadcrumbsWrapper) {
      contentBreadcrumbsWrapper.hidden = !isLocationSelected;
    }
  };
  var updateBreadcrumbsState = function updateBreadcrumbsState(btn, pathString) {
    var pathStringInput = doc.querySelector(btn.dataset.locationPathInputSelector);
    var contentBreadcrumbsContainer = doc.querySelector(btn.dataset.contentBreadcrumbsSelector);
    var contentBreadcrumbs = contentBreadcrumbsContainer.querySelector('.ibexa-tag__content');
    var contentBreadcrumbsSpinner = contentBreadcrumbsContainer.querySelector('.ibexa-tag__spinner');
    pathStringInput.value = pathString;
    pathStringInput.dispatchEvent(new Event('change'));
    if (!contentBreadcrumbs || !contentBreadcrumbsSpinner) {
      return;
    }
    if (!pathString) {
      contentBreadcrumbs.innerHTML = '';
      contentBreadcrumbs.hidden = true;
    } else {
      contentBreadcrumbsSpinner.hidden = false;
      findLocationsByIdList(removeRootFromPathString(pathString), function (data) {
        contentBreadcrumbs.innerHTML = buildBreadcrumbsString(data);
        contentBreadcrumbsSpinner.hidden = true;
        contentBreadcrumbs.hidden = false;
      });
    }
  };
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(btn, items) {
    closeUDW();
    var _items = _slicedToArray(items, 1),
      pathString = _items[0].pathString;
    updateBreadcrumbsState(btn, pathString);
    toggleVisibility(btn, !!pathString);
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(null, event.currentTarget),
      onCancel: onCancel,
      title: event.currentTarget.dataset.universalDiscoveryTitle,
      multiple: false
    }, config)));
  };
  var clearSelection = function clearSelection(btn) {
    updateBreadcrumbsState(btn, '');
    toggleVisibility(btn, false);
  };
  btns.forEach(function (btn) {
    btn.addEventListener('click', openUDW, false);
    var tag = doc.querySelector(btn.dataset.contentBreadcrumbsSelector);
    var clearBtn = tag.querySelector('.ibexa-tag__remove-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', clearSelection.bind(null, btn), false);
    }
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.filters.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.sorting.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.search.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/select.location.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.translation.edit.js"));
/******/ }
]);