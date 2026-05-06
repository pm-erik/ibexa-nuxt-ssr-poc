/******/ (() => { // webpackBootstrap
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/store.product.slider.js ***!
  \****************************************************************************************/
(function (global, doc) {
  var currentVisibleThumbnail = 1;
  var visibleThumbnailsCount = 4;
  var sliderContainer = doc.querySelector('.ibexa-store-product-slider');
  if (!sliderContainer) {
    return;
  }
  var productThumbnails = sliderContainer.querySelectorAll('.ibexa-store-product-slider__thumbnail');
  var thumbnailsContainer = sliderContainer.querySelector('.ibexa-store-product-slider__thumbnails');
  var imagePreview = sliderContainer.querySelector('.ibexa-store-product-slider__image-preview img');
  var selectPrevThumbnailBtn = sliderContainer.querySelector('.ibexa-store-product-slider__preview-wrapper .ibexa-store-product-slider__control--prev');
  var selectNextThumbnailBtn = sliderContainer.querySelector('.ibexa-store-product-slider__preview-wrapper .ibexa-store-product-slider__control--next');
  var showPrevThumbnailBtn = sliderContainer.querySelector('.ibexa-store-product-slider__controls-wrapper .ibexa-store-product-slider__control--prev');
  var showNextThumbnailBtn = sliderContainer.querySelector('.ibexa-store-product-slider__controls-wrapper .ibexa-store-product-slider__control--next');
  var translateStep = 120;
  var thumbnailsCount = productThumbnails.length;
  var setNewMiniature = function setNewMiniature(oldThumbnail, newThumbnail) {
    var imageThumbnail = newThumbnail.querySelector('img');
    oldThumbnail.classList.remove('ibexa-store-product-slider__thumbnail--active');
    newThumbnail.classList.add('ibexa-store-product-slider__thumbnail--active');
    imagePreview.src = imageThumbnail.src;
  };
  var selectThumbnail = function selectThumbnail(_ref) {
    var currentTarget = _ref.currentTarget;
    var activeThumbnail = sliderContainer.querySelector('.ibexa-store-product-slider__thumbnail--active');
    setNewMiniature(activeThumbnail, currentTarget);
  };
  var selectPrevThumbnail = function selectPrevThumbnail() {
    var activeThumbnail = sliderContainer.querySelector('.ibexa-store-product-slider__thumbnail--active');
    if (activeThumbnail.previousElementSibling) {
      setNewMiniature(activeThumbnail, activeThumbnail.previousElementSibling);
    }
  };
  var selectNextThumbnail = function selectNextThumbnail() {
    var activeThumbnail = sliderContainer.querySelector('.ibexa-store-product-slider__thumbnail--active');
    if (activeThumbnail.nextElementSibling) {
      setNewMiniature(activeThumbnail, activeThumbnail.nextElementSibling);
    }
  };
  var showPrevThumbnail = function showPrevThumbnail() {
    var isFirstThumbnailVisible = currentVisibleThumbnail === 0;
    if (isFirstThumbnailVisible) {
      return;
    }
    var transform = "translateY(-".concat(translateStep * --currentVisibleThumbnail, "px)");
    thumbnailsContainer.style.transform = transform;
  };
  var showNextThumbnail = function showNextThumbnail() {
    var isLastThumbnailVisible = thumbnailsCount - visibleThumbnailsCount === currentVisibleThumbnail;
    if (isLastThumbnailVisible) {
      return;
    }
    var transform = "translateY(-".concat(translateStep * ++currentVisibleThumbnail, "px)");
    thumbnailsContainer.style.transform = transform;
  };
  productThumbnails.forEach(function (productThumbnail) {
    return productThumbnail.addEventListener('click', selectThumbnail, false);
  });
  selectPrevThumbnailBtn.addEventListener('click', selectPrevThumbnail, false);
  selectNextThumbnailBtn.addEventListener('click', selectNextThumbnail, false);
  showPrevThumbnailBtn.addEventListener('click', showPrevThumbnail, false);
  showNextThumbnailBtn.addEventListener('click', showNextThumbnail, false);
})(window, window.document);
})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/variant.select.js ***!
  \**********************************************************************************/
(function (global, doc) {
  var variantSelectorNode = doc.querySelector('#add_to_cart_variant');
  if (!variantSelectorNode) {
    return;
  }
  var variantSelectorForm = variantSelectorNode.closest('form');
  var showVariantPage = function showVariantPage() {
    var selectedVariantCode = variantSelectorNode.value;
    if (!selectedVariantCode) {
      return;
    }
    var variantViewLinkTemplate = variantSelectorForm.dataset.productVariantViewLinkTemplate;
    var variantViewLink = variantViewLinkTemplate.replace('__variant_code__', selectedVariantCode);
    variantSelectorForm.action = variantViewLink;
    variantSelectorForm.submit();
  };
  variantSelectorNode.addEventListener('change', showVariantPage, false);
})(window, window.document);
})();

/******/ })()
;