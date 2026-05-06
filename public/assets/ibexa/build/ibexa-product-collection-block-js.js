(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-collection-block-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.collection.block.js"
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.collection.block.js ***!
  \*************************************************************************************************/
() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, Translator) {
  var escapeHTML = ibexa.helpers.text.escapeHTML;
  var dangerouslyInsertAdjacentHTML = ibexa.helpers.dom.dangerouslyInsertAdjacentHTML;
  var collections = doc.querySelectorAll('.ibexa-pb-product-collection');
  var FIRST_PRODUCT_ID = 0;
  var INIT_PRODUCTS_LIST_LENGTH = 0;
  var PRODUCTS_LIST_NO_ITEMS_CLASS = 'ibexa-pb-product-collection__list-wrapper--no-items';
  var ERROR_HIDDEN_CLASS = 'ibexa-pb-product-collection__error--hidden';
  var Collection = /*#__PURE__*/function () {
    "use strict";

    function Collection(collection) {
      _classCallCheck(this, Collection);
      this.draggableInstance = null;
      this.collection = collection;
      this.collectionListHeader = collection.querySelector('.ibexa-pb-product-collection__list-header');
      this.selectProductBtn = collection.querySelector('.ibexa-pb-product-collection__select-product-btn');
      this.addProductBtn = collection.querySelector('.ibexa-pb-product-collection__add-product-btn');
      this.collectionListWrapper = collection.querySelector('.ibexa-pb-product-collection__list-wrapper');
      this.collectionList = collection.querySelector('.ibexa-pb-product-collection__list');
      this.collectionListItems = this.collectionList.querySelectorAll('.ibexa-pb-product-collection-item');
      this.hiddenInputsList = collection.querySelector('.ibexa-pb-product-collection__hidden-inputs-list');
      this.productCodeInput = collection.querySelector('.ibexa-pb-product-collection__product-code-input');
      this.productsSelectorModuleRootNode = collection.querySelector('.ibexa-pc-product-selector__module-root');
      this.prepareRequest = this.prepareRequest.bind(this);
      this.fetchRequest = this.fetchRequest.bind(this);
      this.loadProduct = this.loadProduct.bind(this);
      this.loadLocationsList = this.loadLocationsList.bind(this);
      this.loadLocation = this.loadLocation.bind(this);
      this.updateListCounter = this.updateListCounter.bind(this);
      this.toggleError = this.toggleError.bind(this);
      this.checkIfProductExist = this.checkIfProductExist.bind(this);
      this.checkAndAddProduct = this.checkAndAddProduct.bind(this);
      this.attachListenersToProduct = this.attachListenersToProduct.bind(this);
      this.removeProduct = this.removeProduct.bind(this);
      this.addProduct = this.addProduct.bind(this);
      this.processAddProduct = this.processAddProduct.bind(this);
      this.sortInputs = this.sortInputs.bind(this);
      this.initProductCollection = this.initProductCollection.bind(this);
      this.isSelectBtnAvailable = this.isSelectBtnAvailable.bind(this);
    }
    return _createClass(Collection, [{
      key: "prepareRequest",
      value: function prepareRequest(url, requestOptions) {
        var token = document.querySelector('meta[name="CSRF-Token"]').content;
        var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
        return new Request(url, _objectSpread(_objectSpread({
          mode: 'same-origin',
          credentials: 'same-origin'
        }, requestOptions), {}, {
          headers: _objectSpread({
            'X-Siteaccess': siteaccess,
            'X-CSRF-Token': token
          }, requestOptions.headers)
        }));
      }
    }, {
      key: "fetchRequest",
      value: function fetchRequest(request) {
        return fetch(request).then(function (response) {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(response);
        });
      }
    }, {
      key: "loadProduct",
      value: function loadProduct(productCode) {
        var request = this.prepareRequest("/api/ibexa/v2/product/catalog/products/".concat(productCode), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/vnd.ibexa.api.ProductGet+json',
            Accept: 'application/json'
          }
        });
        return this.fetchRequest(request);
      }
    }, {
      key: "loadLocationsList",
      value: function loadLocationsList(contentId) {
        var request = this.prepareRequest("/api/ibexa/v2/content/objects/".concat(contentId, "/locations"), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/vnd.ibexa.api.LocationList+json',
            Accept: 'application/json'
          }
        });
        return this.fetchRequest(request);
      }
    }, {
      key: "loadLocation",
      value: function loadLocation(url) {
        var request = this.prepareRequest(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/vnd.ibexa.api.Location+json',
            Accept: 'application/json'
          }
        });
        return this.fetchRequest(request);
      }
    }, {
      key: "updateListCounter",
      value: function updateListCounter() {
        var collectionLength = this.collectionList.children.length;
        var listTitle = Translator.trans(/*@Desc("Product list (%count%)")*/'product.collection.product_list', {
          count: collectionLength
        }, 'ibexa_page_builder_block');
        this.collectionListHeader.innerText = listTitle;
      }
    }, {
      key: "toggleError",
      value: function toggleError(errorType) {
        var errors = this.collection.querySelectorAll('.ibexa-pb-product-collection__error');
        errors.forEach(function (error) {
          return error.classList.add(ERROR_HIDDEN_CLASS);
        });
        if (errorType) {
          var errorContainer = this.collection.querySelector(".ibexa-pb-product-collection__error--".concat(errorType));
          errorContainer.classList.remove(ERROR_HIDDEN_CLASS);
        }
      }
    }, {
      key: "checkIfProductExist",
      value: function checkIfProductExist(productCode) {
        var productInputs = _toConsumableArray(this.hiddenInputsList.querySelectorAll('input.ibexa-pb-product-collection-item__input'));
        var isProductAdded = productInputs.some(function (input) {
          return input.value === productCode;
        });
        return isProductAdded;
      }
    }, {
      key: "checkAndAddProduct",
      value: function checkAndAddProduct(productCode) {
        var _this = this;
        if (this.checkIfProductExist(productCode)) {
          return;
        }
        this.loadProduct(productCode).then(function (result) {
          if (!result) {
            return;
          }
          if (result.Product.isVariant) {
            _this.toggleError('cannot-add-variant');
            return;
          }
          var _result$Product = result.Product,
            name = _result$Product.name,
            identifier = _result$Product.ProductType.identifier,
            _result$Product$Conte = _result$Product.Content,
            _result$Product$Conte2 = _result$Product$Conte === void 0 ? {} : _result$Product$Conte,
            contentId = _result$Product$Conte2._id;

          //for remote PIM scenario we don't have access to Content, thus contentId and locationId are not used anywhere
          if (contentId === undefined) {
            _this.addProduct(productCode, name, identifier, '');
            return;
          }
          _this.loadLocationsList(contentId).then(function (locationList) {
            var _locationList$Locatio = _slicedToArray(locationList.LocationList.Location, 1),
              locationOptions = _locationList$Locatio[0];
            _this.loadLocation(locationOptions._href).then(function (location) {
              var id = location.Location.id;
              _this.addProduct(productCode, name, identifier, contentId, id);
            });
          });
        })["catch"](function (response) {
          if (response.status === 404) {
            _this.toggleError('not-found');
          } else {
            var error = new Error(response.statusText);
            ibexa.helpers.notification.showErrorNotification(error);
          }
        });
      }
    }, {
      key: "attachListenersToProduct",
      value: function attachListenersToProduct(item, hiddenItem) {
        var _this2 = this;
        item.querySelector('.ibexa-btn--trash').addEventListener('click', function (event) {
          return _this2.removeProduct(event, item, hiddenItem);
        }, false);
      }
    }, {
      key: "removeProduct",
      value: function removeProduct(event, product, hiddenItem) {
        event.preventDefault();
        var productCode = product.dataset.productCode;
        product.remove();
        hiddenItem.remove();
        this.updateListCounter();
        if (this.hiddenInputsList.children.length <= INIT_PRODUCTS_LIST_LENGTH) {
          this.collectionListWrapper.classList.add(PRODUCTS_LIST_NO_ITEMS_CLASS);
        }
        this.productsSelectorModuleRootNode.dispatchEvent(new CustomEvent('ibexa-pc-product-selector:manually-removed-product', {
          detail: {
            productCode: productCode
          }
        }));
      }
    }, {
      key: "addProduct",
      value: function addProduct(productCode, name, productType, contentId, locationId) {
        this.toggleError();
        var _this$collectionListW = this.collectionListWrapper.dataset,
          productTemplate = _this$collectionListW.productTemplate,
          nextIndexId = _this$collectionListW.nextIndexId;
        var index = parseInt(nextIndexId, 10) || FIRST_PRODUCT_ID;
        var filledProductTemplate = productTemplate.replaceAll('__name__', index);
        this.hiddenInputsList.insertAdjacentHTML('beforeend', filledProductTemplate);
        var hiddenProductItem = this.hiddenInputsList.lastElementChild;
        var hiddenProductInput = hiddenProductItem.querySelector('input');
        hiddenProductItem.dataset.id = index;
        hiddenProductInput.value = productCode;
        this.productCodeInput.value = '';
        this.addProductBtn.disabled = true;
        this.collectionListWrapper.dataset.nextIndexId = index + 1;
        var productNameHtmlEscaped = escapeHTML(name);
        var productCodeHtmlEscaped = escapeHTML(productCode);
        var productTypeHtmlEscaped = escapeHTML(productType);
        var itemTemplate = this.collectionList.dataset.itemTemplate;
        var renderedItem = itemTemplate.replaceAll('__product_name__', productNameHtmlEscaped).replaceAll('__product_code__', productCodeHtmlEscaped).replaceAll('__product_type__', productTypeHtmlEscaped).replaceAll('__location_id__', locationId).replaceAll('__content_id__', contentId).replaceAll('__id__', index);
        dangerouslyInsertAdjacentHTML(this.collectionList, 'beforeend', renderedItem);
        this.collectionListWrapper.classList.remove(PRODUCTS_LIST_NO_ITEMS_CLASS);
        var addedProductRow = this.collectionList.lastElementChild;
        this.attachListenersToProduct(addedProductRow, hiddenProductItem);
        this.draggableInstance.reinit(addedProductRow);
        ibexa.helpers.ellipsis.middle.parse(this.collectionList);
        var itemActionsMenuContainer = addedProductRow.querySelector('.ibexa-embedded-item-actions__menu');
        var itemActionsTriggerElement = addedProductRow.querySelector('.ibexa-embedded-item-actions__menu-trigger-btn');
        doc.body.dispatchEvent(new CustomEvent('ibexa-embedded-item:create-dynamic-menu', {
          detail: {
            contentId: contentId,
            locationId: locationId,
            productCode: productCode,
            menuTriggerElement: itemActionsTriggerElement,
            menuContainer: itemActionsMenuContainer
          }
        }));
        this.updateListCounter();
      }
    }, {
      key: "processAddProduct",
      value: function processAddProduct() {
        var newProductCode = this.productCodeInput.value.trim();
        if (this.checkIfProductExist(newProductCode)) {
          this.toggleError('already-added');
          return;
        }
        this.productsSelectorModuleRootNode.dispatchEvent(new CustomEvent('ibexa-pc-product-selector:manually-added-product', {
          detail: {
            productCode: newProductCode
          }
        }));
      }
    }, {
      key: "sortInputs",
      value: function sortInputs() {
        var _this3 = this;
        var listItems = _toConsumableArray(this.collectionList.querySelectorAll('.ibexa-pb-product-collection-item'));
        var hiddenListItems = _toConsumableArray(this.hiddenInputsList.querySelectorAll('.ibexa-pb-product-collection__item'));
        if (listItems.length === hiddenListItems.length) {
          var idOrder = listItems.map(function (item) {
            return item.dataset.id;
          });
          idOrder.forEach(function (id, index) {
            var hiddenInputsListItem = hiddenListItems.find(function (item) {
              return item.dataset.id === id;
            });
            _this3.hiddenInputsList.insertBefore(hiddenInputsListItem, _this3.hiddenInputsList.childNodes[index]);
          });
        }
      }
    }, {
      key: "initProductCollection",
      value: function initProductCollection() {
        var _this4 = this;
        this.draggableInstance = new CollectionDraggable({
          itemsContainer: this.collectionList,
          selectorItem: '.ibexa-pb-product-collection-item',
          selectorPlaceholder: '.ibexa-pb-product-collection-placeholder'
        }, {
          sortInputs: this.sortInputs
        });
        this.collectionListItems.forEach(function (listItem) {
          var productCode = listItem.dataset.id;
          var hiddenItem = _toConsumableArray(_this4.hiddenInputsList.children).find(function (item) {
            return item.dataset.id === productCode;
          });
          _this4.attachListenersToProduct(listItem, hiddenItem);
        });
        this.draggableInstance.init();
        this.addProductBtn.addEventListener('click', this.processAddProduct, false);
        this.productCodeInput.addEventListener('input', function (event) {
          _this4.addProductBtn.disabled = event.target.value.trim() === '';
        }, false);
        this.addProductBtn.disabled = !this.productCodeInput.value;
        if (this.hiddenInputsList.children.length <= INIT_PRODUCTS_LIST_LENGTH) {
          this.collectionListWrapper.classList.add(PRODUCTS_LIST_NO_ITEMS_CLASS);
        }
        document.body.addEventListener('ibexa-pc-product-selector:selected-products-changed', function (_ref) {
          var detail = _ref.detail;
          var selectedProductsItems = detail.selectedProductsItems,
            type = detail.type;
          if (type === 'deselected') {
            return;
          }
          selectedProductsItems.forEach(function (selectedProduct) {
            _this4.checkAndAddProduct(selectedProduct.productCode);
          });
        });
      }
    }, {
      key: "isSelectBtnAvailable",
      value: function isSelectBtnAvailable() {
        return this.selectProductBtn !== null;
      }
    }]);
  }();
  var CollectionDraggable = /*#__PURE__*/function (_ibexa$core$Draggable) {
    "use strict";

    function CollectionDraggable(config) {
      var _this5;
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        sortInputs = _ref2.sortInputs;
      _classCallCheck(this, CollectionDraggable);
      _this5 = _callSuper(this, CollectionDraggable, [config]);
      _this5.sortInputs = sortInputs;
      return _this5;
    }
    _inherits(CollectionDraggable, _ibexa$core$Draggable);
    return _createClass(CollectionDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        _superPropGet(CollectionDraggable, "onDrop", this, 3)([]);
        this.sortInputs();
      }
    }, {
      key: "reinit",
      value: function reinit(renderedItem) {
        _superPropGet(CollectionDraggable, "reinit", this, 3)([]);
        this.triggerHighlight(renderedItem);
      }
    }]);
  }(ibexa.core.Draggable);
  collections.forEach(function (collection) {
    var collectionInstance = new Collection(collection);
    collectionInstance.initProductCollection();
  });
})(window, window.document, window.ibexa, window.Translator);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.collection.block.js"));
/******/ }
]);