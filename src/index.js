"use strict";

var _employers = require("./employers");

var _sponsors = require("./sponsors");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        owner = _ref.owner,
        _ref$director = _ref.director,
        director = _ref$director === void 0 ? 'Victor' : _ref$director,
        cash = _ref.cash,
        emp = _ref.emp;

    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
    this.euSponsors = _sponsors.euSponsors;
    this.rusSponsors = _sponsors.rusSponsors;
    this.unsafeSponsor = _sponsors.unsafeSponsor;
  }

  _createClass(MakeBusiness, [{
    key: "printText",
    value: function printText() {
      console.log("We have a business. Owner: ".concat(this.owner, " , director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp));
      console.log("And we have a sponsors:");
      console.log("".concat(this.euSponsors.join(' '), " ").concat(this.rusSponsors.join(' '), " unexpected sponsor"));
      console.log("Note. Be careful with ".concat(this.unsafeSponsor, ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

var makeBusiness = new MakeBusiness({
  owner: 'Sam',
  cash: _sponsors.calcCash,
  emp: _employers.employersNames
});
makeBusiness.printText();