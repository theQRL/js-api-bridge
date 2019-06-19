/* eslint import/prefer-default-export: 0 */

export class TransferTransaction {
  constructor(addressesTo, amounts, fee, publicKey, signature, transactionHash, masterAddress) {
    this.masterAddress = masterAddress;
    this.fee = fee;
    this.publicKey = publicKey;
    this.signature = signature;
    this.transactionHash = transactionHash;
    this.addressesTo = addressesTo;
    this.amounts = amounts;
  }

  toJSON() {
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
}
