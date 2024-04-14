"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.customIncrement = exports.reset = exports.decrement = exports.increment = void 0;

var _toolkit = require("@reduxjs/toolkit");

var counterSlice = (0, _toolkit.createSlice)({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: function increment(state) {
      state.count += 1;
    },
    decrement: function decrement(state) {
      state.count -= 1;
    },
    reset: function reset(state) {
      state.count = 0;
    },
    customIncrement: function customIncrement(state, acion) {
      state.count += acion.payload;
    }
  }
});
var _counterSlice$actions = counterSlice.actions,
    increment = _counterSlice$actions.increment,
    decrement = _counterSlice$actions.decrement,
    reset = _counterSlice$actions.reset,
    customIncrement = _counterSlice$actions.customIncrement;
exports.customIncrement = customIncrement;
exports.reset = reset;
exports.decrement = decrement;
exports.increment = increment;
var _default = counterSlice.reducer;
exports["default"] = _default;