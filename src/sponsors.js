"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcCash = exports.rusSponsors = exports.unsafeSponsor = exports.euSponsors = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

var _sponsors$cash = _toArray(sponsors.cash),
    sum = _sponsors$cash.slice(0),
    _sponsors$eu = _toArray(sponsors.eu),
    euSponsors = _sponsors$eu.slice(0),
    _sponsors$eu2 = _slicedToArray(sponsors.eu, 1),
    unsafeSponsor = _sponsors$eu2[0],
    _sponsors$rus = _toArray(sponsors.rus),
    rusSponsors = _sponsors$rus.slice(0);

exports.rusSponsors = rusSponsors;
exports.unsafeSponsor = unsafeSponsor;
exports.euSponsors = euSponsors;
var calcCash = sum.reduce(function (total, value) {
  return total + value;
});
exports.calcCash = calcCash;