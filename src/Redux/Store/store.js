import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slice/userSlice";
import counterSlice from "../Slice/counterSlice";
import todoSlice from "../Slice/todoSlice";
import { productApi } from "../Slice/productSlice";
import loginSlice from "../Slice/loginSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    counter: counterSlice,
    todo: todoSlice,
    login: loginSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApi.middleware);
  },
});
export default store;
