// import {AxiosResponse} from 'axios';
const axios = require("axios");

import {TransferTransaction} from "./transactions/TransferTransaction";
export {TransferTransaction} from "./transactions/TransferTransaction";
export {QrlAddressValidator} from "./helper";

const url = require('url');
export class QrlAPI {
  constructor(endpoint) {
    axios.defaults.baseURL = url.resolve(endpoint, '/api');
  }

  async GetVersion() {
    return await axios.get('/GetVersion').then((response) => {
      return response.data;
    });
  }

  async GetEstimatedNetworkFee() {
    return await axios.get('/GetEstimatedNetworkFee').then((response) => {
      return response.data;
    });
  }

  async BroadcastTransferTx(transferTx) {
    return await axios.post('/BroadcastTransferTx', transferTx.toJSON()).then((response) => {
      return response.data;
    });
  }

  async GetBalance(address) {
    return await axios.get('/GetBalance', {params: {'address': address}}).then((response) => {
      return response.data;
    });
  }

  async GetAddressState(address) {
    return await axios.get('/GetAddressState', {params: {'address': address}}).then((response) => {
      return response.data;
    });
  }

  async GetHeight() {
    return await axios.get('/GetHeight').then((response) => {
      return response.data;
    });
  }
}
