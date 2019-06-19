"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TransferTransaction", {
  enumerable: true,
  get: function get() {
    return _TransferTransaction.TransferTransaction;
  }
});
Object.defineProperty(exports, "QrlAddressValidator", {
  enumerable: true,
  get: function get() {
    return _helper.QrlAddressValidator;
  }
});
exports.QrlAPI = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _TransferTransaction = require("./transactions/TransferTransaction");

var _helper = require("./helper");

// import {AxiosResponse} from 'axios';
var axios = require("axios");

var url = require('url');

var QrlAPI =
/*#__PURE__*/
function () {
  function QrlAPI(endpoint) {
    (0, _classCallCheck2["default"])(this, QrlAPI);
    axios.defaults.baseURL = url.resolve(endpoint, '/api');
  }

  (0, _createClass2["default"])(QrlAPI, [{
    key: "GetVersion",
    value: function () {
      var _GetVersion = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/GetVersion').then(function (response) {
                  return response.data;
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function GetVersion() {
        return _GetVersion.apply(this, arguments);
      }

      return GetVersion;
    }()
  }, {
    key: "GetEstimatedNetworkFee",
    value: function () {
      var _GetEstimatedNetworkFee = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/GetEstimatedNetworkFee').then(function (response) {
                  return response.data;
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function GetEstimatedNetworkFee() {
        return _GetEstimatedNetworkFee.apply(this, arguments);
      }

      return GetEstimatedNetworkFee;
    }()
  }, {
    key: "BroadcastTransferTx",
    value: function () {
      var _BroadcastTransferTx = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(transferTx) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post('/BroadcastTransferTx', transferTx.toJSON()).then(function (response) {
                  return response.data;
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function BroadcastTransferTx(_x) {
        return _BroadcastTransferTx.apply(this, arguments);
      }

      return BroadcastTransferTx;
    }()
  }, {
    key: "GetBalance",
    value: function () {
      var _GetBalance = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(address) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get('/GetBalance', {
                  params: {
                    'address': address
                  }
                }).then(function (response) {
                  return response.data;
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function GetBalance(_x2) {
        return _GetBalance.apply(this, arguments);
      }

      return GetBalance;
    }()
  }, {
    key: "GetAddressState",
    value: function () {
      var _GetAddressState = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(address) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.get('/GetAddressState', {
                  params: {
                    'address': address
                  }
                }).then(function (response) {
                  return response.data;
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function GetAddressState(_x3) {
        return _GetAddressState.apply(this, arguments);
      }

      return GetAddressState;
    }()
  }, {
    key: "GetHeight",
    value: function () {
      var _GetHeight = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6() {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios.get('/GetHeight').then(function (response) {
                  return response.data;
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function GetHeight() {
        return _GetHeight.apply(this, arguments);
      }

      return GetHeight;
    }()
  }]);
  return QrlAPI;
}();

exports.QrlAPI = QrlAPI;
//# sourceMappingURL=client.js.map