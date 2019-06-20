/* eslint import/prefer-default-export: 0 */

const validate = require('@theqrl/validate-qrl-address').hexString;

export function QrlAddressValidator(addr) {
  return validate(addr).result;
}
