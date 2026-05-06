/******/ (() => { // webpackBootstrap
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/storefront/src/bundle/Resources/public/js/store.address.field.js ***!
  \***************************************************************************************/
(function (global, doc) {
  var addressField = doc.querySelector('.ibexa-store-address');
  if (!addressField) {
    return;
  }
  var formNode = addressField.querySelector('.ibexa-store-address__fields-wrapper');
  var countrySelect = addressField.querySelector('.ibexa-store-select');
  var handleRequest = function handleRequest(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };
  var getTextFromResponse = function getTextFromResponse(response) {
    return handleRequest(response).text();
  };
  var getHtmlFromResponse = function getHtmlFromResponse(response) {
    var range = doc.createRange();
    var formDOMElement = range.createContextualFragment(response);
    return formDOMElement.querySelector('.ibexa-store-address__fields-wrapper');
  };
  var replaceFormOnCountryChange = function replaceFormOnCountryChange(country) {
    var _formNode$dataset = formNode.dataset,
      contentTypeIdentifier = _formNode$dataset.contentTypeIdentifier,
      fieldIdentifier = _formNode$dataset.fieldIdentifier,
      languageCode = _formNode$dataset.languageCode,
      parentLocationId = _formNode$dataset.parentLocationId,
      formName = _formNode$dataset.formName;
    var countryFormLink = "/address/form/".concat(contentTypeIdentifier, "/").concat(fieldIdentifier, "/").concat(languageCode, "/create/").concat(parentLocationId, "/name/").concat(formName, "/country/").concat(country);
    fetch(countryFormLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(getTextFromResponse).then(getHtmlFromResponse).then(function (htmlResponse) {
      formNode.replaceWith(htmlResponse);
    })["catch"](function (error) {
      return console.error(error);
    });
  };
  countrySelect.addEventListener('change', function (_ref) {
    var currentTarget = _ref.currentTarget;
    replaceFormOnCountryChange(currentTarget.value);
  }, false);
})(window, window.document);
/******/ })()
;