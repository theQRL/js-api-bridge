export class TransferTransaction {
  constructor(public addressesTo: Array<string>,
              public amounts: Array<number>,
              public fee: number,
              public publicKey: string,
              public signature: string,
              public transactionHash: string,
              public masterAddress: string) {
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
      amounts: this.amounts,
    }
  }
}
