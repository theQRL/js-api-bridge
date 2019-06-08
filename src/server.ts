import {AxiosResponse} from 'axios';
const axios = require("axios");

import {TransferTransaction} from "./transactions/TransferTransaction";


export class QrlAPI {
  constructor(public endpoint: string) {
    axios.defaults.baseURL = endpoint;
  }

  async GetVersion() {
    return await axios.get('/GetVersion').then(function(response: AxiosResponse) {
      return response.data;
    });
  }

  async BroadcastTransferTx(transferTx: TransferTransaction) {
    return await axios.post('/BroadcastTransferTx', transferTx.toJSON()).then(function(response: AxiosResponse) {
      return response.data;
    });
  }

}
