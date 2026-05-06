(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-taxonomy-limitation-picker-js"],{

/***/ "./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/admin.taxonomy.limitation.picker.js"
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/admin.taxonomy.limitation.picker.js ***!
  \**************************************************************************************************/
() {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var selectedTaxonomiesInput = doc.querySelector('.ibexa-update-policy--action .ibexa-dropdown__source .ibexa-input');
  var allTaxonomiesEntries = doc.querySelectorAll('.ibexa-taxonomy-limitation-picker__taxonomy-entry');
  var valueInput = doc.querySelector('.ibexa-taxonomy-limitation-picker__value input[type="hidden"]');
  var getAllValues = function getAllValues() {
    var values = _toConsumableArray(allTaxonomiesEntries).reduce(function (output, entry) {
      if (entry.hidden) {
        return output;
      }
      var input = entry.querySelector('input[data-taxonomy]');
      return [].concat(_toConsumableArray(output), _toConsumableArray(input.value.split(',')));
    }, []);
    return values.filter(function (value) {
      return value;
    }).join(',');
  };
  selectedTaxonomiesInput.addEventListener('change', function (event) {
    var selectedTaxonomies = _toConsumableArray(event.target.selectedOptions).map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    allTaxonomiesEntries.forEach(function (entry) {
      entry.hidden = !selectedTaxonomies.includes(entry.dataset.id);
    });
    valueInput.value = getAllValues();
  });
  allTaxonomiesEntries.forEach(function (entry) {
    var input = entry.querySelector('input[data-taxonomy]');
    input.addEventListener('change', function () {
      valueInput.value = getAllValues();
    });
  });
})(window, window.document);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/admin.taxonomy.limitation.picker.js"));
/******/ }
]);