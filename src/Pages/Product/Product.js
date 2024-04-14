import React from "react";
import "./Product.scss";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../../Redux/Slice/productSlice";
const Product = () => {
  const { data: allProduct, isError, isLoading } = useGetAllProductsQuery();
  const { data: getProduct } = useGetProductQuery("apple");
  console.log(allProduct);
  console.log("get", getProduct);
  return (
    <div className="Product" data-testid="Product">
      {allProduct?.products?.map((item) => {
        return (
          <p key={item.tite}>
            {item.id}.&nbsp;{item.title}
          </p>
        );
      })}
    </div>
  );
};
export default Product;
