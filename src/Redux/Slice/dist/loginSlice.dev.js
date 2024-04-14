"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.loginUser = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loginUser = (0, _toolkit.createAsyncThunk)("user/login", function _callee(credentials, _ref) {
  var rejectWithValue, request, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          rejectWithValue = _ref.rejectWithValue;
          console.log("loginSlice", credentials);

          if (!(credentials.name !== "")) {
            _context.next = 16;
            break;
          }

          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(_axios["default"].post("http://localhost:8000/user", credentials));

        case 6:
          request = _context.sent;
          response = request.data;
          return _context.abrupt("return", response);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](3);
          return _context.abrupt("return", rejectWithValue(_context.t0));

        case 14:
          _context.next = 18;
          break;

        case 16:
          if (!(credentials.name == "")) {
            _context.next = 18;
            break;
          }

          return _context.abrupt("return", credentials.name = "");

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 11]]);
});
exports.loginUser = loginUser;
var loginSlice = (0, _toolkit.createSlice)({
  name: "login",
  initialState: {
    loader: false,
    user: null,
    error: null,
    userName: "",
    userDetails: []
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(loginUser.pending, function (state) {
      state.loader = true;
      state.user = null;
      state.error = null;
    }).addCase(loginUser.fulfilled, function (state, action) {
      state.loader = false;
      state.user = action.payload;
      console.log("state.user", state.user);
      state.error = null;
    }).addCase(loginUser.rejected, function (state, action) {
      state.loader = false;
      state.user = null;

      if (action.error.message === "Request failed with status code 401" || action.error.message === "Request failed with status code 400") {
        state.error = "Invalid username or password";
      } else {
        state.error = action.error.message;
      }

      state.error = action.error.message;
    });
  }
});
var _default = loginSlice.reducer;
exports["default"] = _default;