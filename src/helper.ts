var crypto = require('crypto');

export function QrlAddressValidator(addr: string): boolean {
    if (addr.length != 79)
        return false;

    var address = addr.substring(1);
    var addr_buff = new Buffer(address, 'hex');

    const hash = crypto.createHash('sha256').update(addr_buff.slice(0, 35));

    return hash.digest('hex').slice(56) === addr_buff.slice(35).toString('hex')
}
