(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-dashboard-blocks-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/sidebar/instant.filter.js"
/*!**************************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/sidebar/instant.filter.js ***!
  \**************************************************************************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var filterTimeout;
  var SELECTOR_ITEM = '.ibexa-instant-filter__group-item';
  var timeout = 200;
  var filters = doc.querySelectorAll('.ibexa-instant-filter');
  var toggleGroupDisplay = function toggleGroupDisplay(group) {
    var areChildrenHidden = _toConsumableArray(group.querySelectorAll(SELECTOR_ITEM)).every(function (item) {
      return item.hasAttribute('hidden');
    });
    group.toggleAttribute('hidden', areChildrenHidden);
  };
  var filterItems = function filterItems(itemsMap, groups, event) {
    window.clearTimeout(filterTimeout);
    filterTimeout = window.setTimeout(function () {
      var query = event.target.value.toLowerCase();
      var results = itemsMap.filter(function (item) {
        return item.label.includes(query);
      });
      itemsMap.forEach(function (item) {
        return item.element.setAttribute('hidden', true);
      });
      results.forEach(function (item) {
        return item.element.removeAttribute('hidden');
      });
      groups.forEach(toggleGroupDisplay);
    }, timeout);
  };
  var initFilter = function initFilter(filter) {
    var filterInput = filter.querySelector('.ibexa-instant-filter__input');
    var groups = _toConsumableArray(filter.querySelectorAll('.ibexa-instant-filter__group'));
    var items = _toConsumableArray(filter.querySelectorAll(SELECTOR_ITEM));
    var itemsMap = items.reduce(function (total, item) {
      return [].concat(_toConsumableArray(total), [{
        label: item.textContent.toLowerCase(),
        element: item
      }]);
    }, []);
    filterInput.addEventListener('change', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('blur', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keyup', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    }, false);
  };
  doc.body.addEventListener('ibexa-instant-filters:add-group', function (event) {
    var filterContainer = event.detail.container.closest('.ibexa-instant-filter');
    initFilter(filterContainer);
  });
  filters.forEach(initFilter);
})(window, window.document);

/***/ },

/***/ "./vendor/ibexa/activity-log/src/bundle/Resources/public/js/recent.activity.block.js"
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/activity-log/src/bundle/Resources/public/js/recent.activity.block.js ***!
  \*******************************************************************************************/
() {

(function (global, doc, Routing, _activityBlock$queryS, _activityBlock$queryS2) {
  var CONTENT_ITEM_NAME_CLASS = '.ibexa-al-block__content-name';
  var CONTENT_PARENT_NAME_CLASS = '.ibexa-al-block__content-info-id';
  var TILE_ITEM_CLASS = '.ibexa-al-block__tile';
  var activityBlock = doc.querySelector('.ibexa-al-block');
  var MAX_LETTERS_LENGTH = 100;
  var TILE_PADDING = 24;
  var allActivityBtn = activityBlock === null || activityBlock === void 0 ? void 0 : activityBlock.querySelector('.ibexa-al-block__all-activity-btn');
  var contentNames = (_activityBlock$queryS = activityBlock === null || activityBlock === void 0 ? void 0 : activityBlock.querySelectorAll("".concat(CONTENT_ITEM_NAME_CLASS, ", ").concat(CONTENT_PARENT_NAME_CLASS))) !== null && _activityBlock$queryS !== void 0 ? _activityBlock$queryS : [];
  var showMoreBtns = (_activityBlock$queryS2 = activityBlock === null || activityBlock === void 0 ? void 0 : activityBlock.querySelectorAll('.ibexa-al-block__show-more-btn')) !== null && _activityBlock$queryS2 !== void 0 ? _activityBlock$queryS2 : [];
  var goToActivityLog = function goToActivityLog() {
    window.location.href = Routing.generate('ibexa.activity_log.list');
  };
  var resizeContentName = function resizeContentName(items) {
    items.forEach(function (contentName) {
      var tile = contentName.closest(TILE_ITEM_CLASS);
      if (tile.clientWidth - TILE_PADDING < contentName.offsetWidth) {
        contentName.classList.add('ibexa-al-block__content-name--overflowed');
      }
    });
  };
  var initRecentActivityBlock = function initRecentActivityBlock() {
    resizeContentName(contentNames);
  };
  contentNames.forEach(function (contentName) {
    var text = contentName.textContent;
    if (text.length > MAX_LETTERS_LENGTH) {
      var truncatedText = "".concat(text.substring(0, MAX_LETTERS_LENGTH).trim(), "...");
      contentName.textContent = truncatedText;
    }
  });
  allActivityBtn === null || allActivityBtn === void 0 || allActivityBtn.addEventListener('click', goToActivityLog, false);
  global.addEventListener('resize', function () {
    return resizeContentName(contentNames);
  }, false);
  showMoreBtns.forEach(function (showMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
      var tile = showMoreBtn.closest(TILE_ITEM_CLASS);
      var collapsibleList = tile.querySelector('.ibexa-al-block__collapsible-list');
      var collapsibleItems = collapsibleList.querySelectorAll("".concat(CONTENT_ITEM_NAME_CLASS, ", ").concat(CONTENT_PARENT_NAME_CLASS));
      resizeContentName(collapsibleItems);
    }, false);
  }, false);
  initRecentActivityBlock();
})(window, window.document, window.Routing);

/***/ },

/***/ "./vendor/ibexa/dashboard/src/bundle/Resources/public/js/blocks/quick.actions.js"
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/dashboard/src/bundle/Resources/public/js/blocks/quick.actions.js ***!
  \***************************************************************************************/
() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Routing) {
  var udwRoot = null;
  var udwContainer = doc.getElementById('react-udw');
  var quickActionUDWTrigers = doc.querySelectorAll('.ibexa-db-quick-actions [data-udw-config]');
  var onConfirm = function onConfirm(items) {
    closeUDW();
    global.location.href = Routing.generate('ibexa.content.view', {
      contentId: items[0].ContentInfo.Content._id,
      locationId: items[0].id
    });
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var triggerBtn = event.currentTarget;
    var _triggerBtn$dataset = triggerBtn.dataset,
      title = _triggerBtn$dataset.udwTitle,
      udwConfig = _triggerBtn$dataset.udwConfig;
    var config = JSON.parse(udwConfig);
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      activeTab: 'create',
      title: title
    }, config)));
  };
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  quickActionUDWTrigers.forEach(function (tiggerBtn) {
    tiggerBtn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Routing);

/***/ },

/***/ "./vendor/ibexa/dashboard/src/bundle/Resources/public/js/dashboard.blocks.js"
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/dashboard/src/bundle/Resources/public/js/dashboard.blocks.js ***!
  \***********************************************************************************/
() {



/***/ },

/***/ "./vendor/ibexa/order-management/src/bundle/Resources/public/js/orders.status.block.js"
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/order-management/src/bundle/Resources/public/js/orders.status.block.js ***!
  \*********************************************************************************************/
() {

(function (global, doc, ibexa, Translator) {
  var DoughnutChart = ibexa.core.chart.DoughnutChart;
  var ORDER_COLORS = new Map([['pending', '#FCAE42'], ['processing', '#47BEDB'], ['completed', '#00A42B'], ['cancelled', '#5A5A5D']]);
  var previewMode = doc.querySelector('.ibexa-db-main-container.ibexa-db-preview');
  var renderOrderStatusCharts = function renderOrderStatusCharts() {
    var chartsContainer = doc.querySelectorAll('.ibexa-chart.ibexa-chart--orders-status');
    if (!chartsContainer.length) {
      return;
    }
    chartsContainer.forEach(function (chartContainer) {
      renderOrderStatusChart(chartContainer);
    });
  };
  var renderOrderStatusChart = function renderOrderStatusChart(chartContainer) {
    var chartDataRaw = chartContainer.dataset.chartData;
    var chartData = JSON.parse(chartDataRaw);
    var labels = Object.values(chartData).map(function (_ref) {
      var label = _ref.label;
      return label;
    });
    var statuses = Object.values(chartData).map(function (_ref2) {
      var status = _ref2.status;
      return status;
    });
    var datasetLabel = Translator.trans(/*@Desc("Orders")*/'dashboard.orders_status.dataset_label', {}, 'ibexa_dashboard');
    var graphColors = statuses.map(function (status) {
      return ORDER_COLORS.get(status) || '#FCAE42';
    });
    var data = {
      ref: chartContainer,
      chartName: 'orders-status',
      datasets: [{
        legend: labels,
        label: " ".concat(datasetLabel),
        data: Object.values(chartData).map(function (_ref3) {
          var count = _ref3.count;
          return count;
        }),
        backgroundColor: graphColors
      }],
      labels: labels
    };
    var options = {
      cutout: 180
    };
    var chart = new DoughnutChart(data, options);
    chart.render();
  };
  if (!previewMode) {
    return renderOrderStatusCharts();
  }
  doc.body.addEventListener('ibexa-post-update-blocks-preview', function (_ref4) {
    var detail = _ref4.detail;
    var blockIds = detail.blockIds;
    blockIds.forEach(function (blockId) {
      var block = doc.querySelector("[data-ez-block-id=\"".concat(blockId, "\""));
      var chartContainer = block.querySelector('.ibexa-chart.ibexa-chart--orders-status');
      if (!chartContainer) {
        return;
      }
      renderOrderStatusChart(chartContainer);
    });
  });
  window.parent.document.body.addEventListener('ibexa-pb-app-iframe-loaded', function () {
    setTimeout(function () {
      renderOrderStatusCharts();
    }, 0);
  });
})(window, window.document, window.ibexa, window.Translator);

/***/ },

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/dashboard/blocks/top_clicks.js"
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/dashboard/blocks/top_clicks.js ***!
  \****************************************************************************************************/
() {

(function (doc) {
  var popularityDurationSelect = doc.querySelector('.dashboard_popularity_duration');
  if (popularityDurationSelect) {
    popularityDurationSelect.addEventListener('change', function () {
      this.form.submit();
    }, false);
  }
})(window.document);

/***/ },

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.category.block.js"
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.category.block.js ***!
  \***********************************************************************************************/
() {

(function (global, doc, ibexa, Translator) {
  var DoughnutChart = ibexa.core.chart.DoughnutChart;
  var previewMode = doc.querySelector('.ibexa-db-main-container.ibexa-db-preview');
  var renderProductCategoryCharts = function renderProductCategoryCharts() {
    var chartsContainer = doc.querySelectorAll('.ibexa-chart.ibexa-chart--product-category');
    if (!chartsContainer.length) {
      return;
    }
    chartsContainer.forEach(function (chartContainer) {
      renderProductCategoryChart(chartContainer);
    });
  };
  var renderProductCategoryChart = function renderProductCategoryChart(chartContainer) {
    var graphColors = ibexa.adminUiConfig.chartColorPalette;
    var chartDataRaw = chartContainer.dataset.chartData;
    var chartData = JSON.parse(chartDataRaw);
    var labels = Object.values(chartData).map(function (_ref) {
      var label = _ref.label;
      return label;
    });
    var datasetLabel = Translator.trans(/*@Desc("Products")*/'dashboard.products_by_categories.dataset_label', {}, 'ibexa_dashboard');
    var data = {
      ref: chartContainer,
      chartName: 'product-category',
      datasets: [{
        legend: labels,
        label: " ".concat(datasetLabel),
        data: Object.values(chartData).map(function (_ref2) {
          var value = _ref2.value;
          return value;
        }),
        backgroundColor: graphColors
      }],
      labels: labels
    };
    var options = {
      cutout: 180
    };
    var chart = new DoughnutChart(data, options);
    chart.render();
  };
  if (!previewMode) {
    return renderProductCategoryCharts();
  }
  doc.body.addEventListener('ibexa-post-update-blocks-preview', function (_ref3) {
    var detail = _ref3.detail;
    var blockIds = detail.blockIds;
    blockIds.forEach(function (blockId) {
      var block = doc.querySelector("[data-ez-block-id=\"".concat(blockId, "\""));
      var chartContainer = block.querySelector('.ibexa-chart.ibexa-chart--product-category');
      if (!chartContainer) {
        return;
      }
      renderProductCategoryChart(chartContainer);
    });
  });
  window.parent.document.body.addEventListener('ibexa-pb-app-iframe-loaded', function () {
    setTimeout(function () {
      renderProductCategoryCharts();
    }, 0);
  });
})(window, window.document, window.ibexa, window.Translator);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/dashboard/src/bundle/Resources/public/js/dashboard.blocks.js"), __webpack_exec__("./vendor/ibexa/dashboard/src/bundle/Resources/public/js/blocks/quick.actions.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/sidebar/instant.filter.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/dashboard/blocks/top_clicks.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.category.block.js"), __webpack_exec__("./vendor/ibexa/activity-log/src/bundle/Resources/public/js/recent.activity.block.js"), __webpack_exec__("./vendor/ibexa/order-management/src/bundle/Resources/public/js/orders.status.block.js"));
/******/ }
]);