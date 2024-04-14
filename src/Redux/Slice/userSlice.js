import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUSers = createAsyncThunk("users/getUsers", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    });
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUSers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUSers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUSers.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;

// builder.getUSers()=>{

// }
// [getUSers.fulfilled]: (state, action) => {
//   state.loading = false;
//   state.users = action.payload;
// },
// [getUSers.rejected]: (state, acion) => {
//   state.loading = false;
// },
