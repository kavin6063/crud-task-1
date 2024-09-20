import React from "react";
import ProductItem from "./ProductItem";

import ProductContext from "../context/ProductContext";
import ConfirmationModal from "./shared/ConfirmationModal";
import { useContext } from "react";

const ProductList = () => {
  const { product, showModal, handleCloseModal, handleConfirmDelete } =
    useContext(ProductContext);

  if (product.length === 0) {
    return <p className="text-[24px] text-orange-600">No product yet</p>;
  }

  return (
    <div className="feedback-list">
      {product.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
      <ConfirmationModal
        title={"Are You Sure?"}
        subText={"Do you want to delete the product ?"}
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ProductList;
