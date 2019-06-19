"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QrlAddressValidator = QrlAddressValidator;

/* eslint import/prefer-default-export: 0 */
// TODO: refactor to use validate-qrl-address
var crypto = require('crypto');

function QrlAddressValidator(addr) {
  if (addr.length !== 79) return false;
  var address = addr.substring(1);
  var addrBuff = Buffer.from(address, 'hex');
  var hash = crypto.createHash('sha256').update(addrBuff.slice(0, 35));
  return hash.digest('hex').slice(56) === addrBuff.slice(35).toString('hex');
}
//# sourceMappingURL=helper.js.map