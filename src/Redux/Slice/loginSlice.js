import {
  createSlice,
  createAsyncThunk,
  rejectWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    console.log("loginSlice", credentials);

    if (credentials.name !== "") {
      try {
        const request = await axios.post(
          "https://dummyjson.com/auth/login",
          credentials
        );
        const response = request.data;
        return response;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
    //  else if (credentials.name == "") {
    //   return (credentials.name = "");
    // }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loader: false,
    user: null,
    error: null,
    userName: "",
    userDetails: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loader = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loader = false;
        state.user = action.payload;
        console.log("state.user", state.user);
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loader = false;
        state.user = null;
        if (
          action.error.message === "Request failed with status code 401" ||
          action.error.message === "Request failed with status code 400"
        ) {
          state.error = "Invalid username or password";
        } else {
          state.error = action.error.message;
        }
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
