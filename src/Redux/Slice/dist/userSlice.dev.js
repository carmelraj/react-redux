"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getUSers = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUSers = (0, _toolkit.createAsyncThunk)("users/getUsers", function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _axios["default"].get("https://jsonplaceholder.typicode.com/users").then(function (response) {
            return response.data;
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.getUSers = getUSers;
var userSlice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: {
    users: [],
    loading: false
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(getUSers.pending, function (state) {
      state.loading = true;
    }).addCase(getUSers.fulfilled, function (state, action) {
      state.loading = false;
      state.users = action.payload;
    }).addCase(getUSers.rejected, function (state, action) {
      state.loading = false;
    });
  }
});
var _default = userSlice.reducer; // builder.getUSers()=>{
// }
// [getUSers.fulfilled]: (state, action) => {
//   state.loading = false;
//   state.users = action.payload;
// },
// [getUSers.rejected]: (state, acion) => {
//   state.loading = false;
// },

exports["default"] = _default;