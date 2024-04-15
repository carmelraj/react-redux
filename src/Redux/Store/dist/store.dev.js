"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _userSlice = _interopRequireDefault(require("../Slice/userSlice"));

var _counterSlice = _interopRequireDefault(require("../Slice/counterSlice"));

var _todoSlice = _interopRequireDefault(require("../Slice/todoSlice"));

var _productSlice = require("../Slice/productSlice");

var _loginSlice = _interopRequireDefault(require("../Slice/loginSlice"));

var _userDetailSlice = _interopRequireDefault(require("../Slice/userDetailSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var store = (0, _toolkit.configureStore)({
  reducer: _defineProperty({
    user: _userSlice["default"],
    counter: _counterSlice["default"],
    todo: _todoSlice["default"],
    login: _loginSlice["default"],
    userDetails: _userDetailSlice["default"]
  }, _productSlice.productApi.reducerPath, _productSlice.productApi.reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_productSlice.productApi.middleware);
  }
});
var _default = store;
exports["default"] = _default;