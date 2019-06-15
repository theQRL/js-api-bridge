import {AxiosResponse} from 'axios';
const axios = require("axios");

import {TransferTransaction} from "./transactions/TransferTransaction";
export {TransferTransaction} from "./transactions/TransferTransaction";
export {QrlAddressValidator} from "./helper";

const url = require('url');
export class QrlAPI {
  constructor(public endpoint: string) {
    axios.defaults.baseURL = url.resolve(endpoint, '/api');
  }

  async GetVersion() {
    return await axios.get('/GetVersion').then(function(response: AxiosResponse) {
      return response.data;
    });
  }

  async GetEstimatedNetworkFee() {
    return await axios.get('/GetEstimatedNetworkFee').then(function(response: AxiosResponse) {
      return response.data;
    });
  }

  async BroadcastTransferTx(transferTx: TransferTransaction) {
    return await axios.post('/BroadcastTransferTx', transferTx.toJSON()).then(function(response: AxiosResponse) {
      return response.data;
    });
  }

  async GetBalance(address: string) {
    return await axios.get('/GetBalance', {params: {'address': address}}).then(function(response: AxiosResponse) {
      return response.data;
    });
  }

  async GetAddressState(address: string) {
    return await axios.get('/GetAddressState', {params: {'address': address}}).then(function(response: AxiosResponse) {
      return response.data;
    });
  }

  async GetHeight() {
    return await axios.get('/GetHeight').then(function(response: AxiosResponse) {
      return response.data;
    });
  }
}
