const { QrlAddressValidator } = require('../dist/helper.js');

const { expect } = require('chai');
const { assert } = require('chai');
const { QrlAPI } = require('../dist/client.js');

let v = null;
let result = null;

const TESTaddress = 'Q0109003493192e08affe87d57e254df3e15be3b8709a40f07e0fc550de60696c2d0333f7070e1d';
const TESTendpoint = 'https://brooklyn.theqrl.org';

describe('Helper functions', () => {
  describe('QrlAddressValidator function', () => {
    it('should return true: argument is a valid address', function() {
      result = QrlAddressValidator('Q01070050d31c7f123995f097bc98209e9231d663dc26e06085df55dc2f6afe3c2cd62e8271a6bd');
      expect(result).to.equal(true);
    });
    it('should return false: argument is NOT a valid address', function() {
      result = QrlAddressValidator('A01070050d31c7f123995f097bc98209e9231d663dc26e06085df55dc2f6afe3c2cd62e8271a6bd');
      expect(result).to.equal(false);
    });
    it('should return false: argument is NOT a valid address', function() {
      result = QrlAddressValidator('Q01070050d31c7f12399cd62e8271a6bd');
      expect(result).to.equal(false);
    });
    it('should return false: argument is NOT a valid address', function() {
      result = QrlAddressValidator('Q03070050d31c7f123995f097bc98209e9231d663dc26e06085df55dc2f6afe3c2cd62e8271a6bd');
      expect(result).to.equal(false);
    });
    it('should return false: argument is NOT a valid address', function() {
      result = QrlAddressValidator('Q01070050d31c7f123995f097bc98209e9231d663dc26e06185df55dc2f6afe3c2cd62e8271a6bd');
      expect(result).to.equal(false);
    });
    it('should return false: argument is NOT a valid address', function() {
      result = QrlAddressValidator('Q13070050d31c7f123995f097bc98209e9231d663dc26e06085df55dc2f6afe3c2cd62e8271a6bd');
      expect(result).to.equal(false);
    });
  });
});

describe('API calls', () => {
  describe('GetVersion API call', () => {
    before(async () => {
      v = await new QrlAPI(TESTendpoint);
      result = await v.GetVersion();
    });
    it('Should not report an error', async () => {
      assert.equal(result.error, 0);
    });
    it('Should report client version 0.1.0 go', async () => {
      assert.equal(result.data.version, '0.1.0 go');
    });
  });
  describe('GetVersion API call', () => {
    before(async () => {
      v = await new QrlAPI(TESTendpoint);
      result = await v.GetEstimatedNetworkFee();
    });
    it('Should not report an error', async () => {
      assert.equal(result.error, 0);
    });
    it('Fee is greater than zero', async () => {
      assert.isAbove(parseInt(result.data.fee, 10), 0);
    });
  });
  describe('GetBalance API call', () => {
    before(async () => {
      v = await new QrlAPI(TESTendpoint);
      result = await v.GetBalance(TESTaddress);
    });
    it('Should not report an error', async () => {
      assert.equal(result.error, 0);
    });
    it('Balance of account is greater than zero', async () => {
      assert.isAbove(parseInt(result.data.balance, 10), 0);
    });
  });
  describe('GetAddressState API call', () => {
    before(async () => {
      v = await new QrlAPI(TESTendpoint);
      result = await v.GetAddressState(TESTaddress);
    });
    it('Should not report an error', async () => {
      assert.equal(result.error, 0);
    });
    it('AddressState of account is greater than zero', async () => {
      assert.isAbove(parseInt(result.data.balance, 10), 0);
    });
    it('Address of result should match that of input', async () => {
      assert.equal(result.data.address, TESTaddress);
    });
    it('Nonce should be >0', async () => {
      assert.isAbove(parseInt(result.data.nonce, 10), 0);
    });
  });
  describe('GetHeight API call', () => {
    before(async () => {
      v = await new QrlAPI(TESTendpoint);
      result = await v.GetHeight(TESTaddress);
    });
    it('Should not report an error', async () => {
      assert.equal(result.error, 0);
    });
    it('Height is reported as greater than 500,000', async () => {
      assert.isAbove(result.data.height, 500000);
    });
  });
});
