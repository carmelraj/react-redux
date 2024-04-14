import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productApi } from "./Redux/Slice/productSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={productApi}> */}
      <App />
      {/* </ApiProvider> */}
    </Provider>
  </React.StrictMode>
);
