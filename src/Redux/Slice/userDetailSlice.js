import { createSlice } from "@reduxjs/toolkit";
const useDetailSlice = createSlice({
  name: "user detils",
  initialState: {
    userName: "sdsd",
  },
  reducers: {
    getUserName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { getUserName } = useDetailSlice.actions;
export default useDetailSlice.reducer;
