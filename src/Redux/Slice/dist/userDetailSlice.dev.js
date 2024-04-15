"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getUserName = void 0;

var _toolkit = require("@reduxjs/toolkit");

var useDetailSlice = (0, _toolkit.createSlice)({
  name: "user detils",
  initialState: {
    userName: "sdsd"
  },
  reducers: {
    getUserName: function getUserName(state, action) {
      state.userName = action.payload;
    }
  }
});
var getUserName = useDetailSlice.actions.getUserName;
exports.getUserName = getUserName;
var _default = useDetailSlice.reducer;
exports["default"] = _default;