"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/* eslint import/prefer-default-export: 0 */
var TransferTransaction =
/*#__PURE__*/
function () {
  function TransferTransaction(addressesTo, amounts, fee, publicKey, signature, transactionHash, masterAddress) {
    (0, _classCallCheck2["default"])(this, TransferTransaction);
    this.masterAddress = masterAddress;
    this.fee = fee;
    this.publicKey = publicKey;
    this.signature = signature;
    this.transactionHash = transactionHash;
    this.addressesTo = addressesTo;
    this.amounts = amounts;
  }

  (0, _createClass2["default"])(TransferTransaction, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        masterAddress: this.masterAddress,
        fee: this.fee,
        publicKey: this.publicKey,
        signature: this.signature,
        transactionHash: this.transactionHash,
        addressesTo: this.addressesTo,
        amounts: this.amounts
      };
    }
  }]);
  return TransferTransaction;
}();

exports.TransferTransaction = TransferTransaction;
//# sourceMappingURL=TransferTransaction.js.map