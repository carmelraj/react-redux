"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetProductQuery = exports.useGetAllProductsQuery = exports.productApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var productApi = (0, _react.createApi)({
  reducerPath: "productApi",
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: "https://dummyjson.com"
  }),
  endpoints: function endpoints(builder) {
    return {
      getAllProducts: builder.query({
        query: function query() {
          return "products";
        }
      }),
      getProduct: builder.query({
        query: function query(product) {
          return "products/search?q=".concat(product);
        }
      })
    };
  }
});
exports.productApi = productApi;
var useGetAllProductsQuery = productApi.useGetAllProductsQuery,
    useGetProductQuery = productApi.useGetProductQuery;
exports.useGetProductQuery = useGetProductQuery;
exports.useGetAllProductsQuery = useGetAllProductsQuery;