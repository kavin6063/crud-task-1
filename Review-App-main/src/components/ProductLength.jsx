import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const ProductLength = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className="container font-bold  mx-auto">
      <h5 className="mb-5 text-[#0c4a6e] dark:text-[#92b1e4]">
        Length : ({product.length})
      </h5>
    </div>
  );
};

export default ProductLength;
