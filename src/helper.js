/* eslint import/prefer-default-export: 0 */

// TODO: refactor to use validate-qrl-address

const crypto = require('crypto');

export function QrlAddressValidator(addr) {
  if (addr.length !== 79) return false;

  const address = addr.substring(1);
  const addrBuff = Buffer.from(address, 'hex');

  const hash = crypto.createHash('sha256').update(addrBuff.slice(0, 35));

  return hash.digest('hex').slice(56) === addrBuff.slice(35).toString('hex');
}
