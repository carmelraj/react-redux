import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    },
    customIncrement(state, acion) {
      state.count += acion.payload;
    },
  },
});

export const { increment, decrement, reset, customIncrement } =
  counterSlice.actions;
export default counterSlice.reducer;
