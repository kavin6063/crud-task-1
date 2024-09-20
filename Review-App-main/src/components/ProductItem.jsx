import { useContext } from "react";
import Card from "./shared/Card";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

import ProductContext from "../context/ProductContext";

const ProductItem = ({ item }) => {
  const { handleDeleteClick, editProduct } = useContext(ProductContext);

  const isIncomplete =
    !item.text ||
    !item.category ||
    !item.description ||
    item.oldPrice === undefined ||
    item.newPrice === undefined;

  return (
    <Card>
      <div className="flex flex-row justify-between">
        <div className="text-lg font-semibold text-[#27272a] dark:text-[#fafaf9]">
          {isIncomplete ? (
            <span className="text-red-500">
              Product information is incomplete
            </span>
          ) : (
            <>
              <div>{item.text}</div>
              <div className="text-lg font-semibold text-[#27272a] dark:text-[#fafaf9]">
                {item.isAvailable ? "(Available)" : "(Not Available)"}
              </div>
              <div>{item.category}</div>
              <div>{item.description}</div>
              <div>Old Price: {item.oldPrice}</div>
              <div>New Price: {item.newPrice}</div>
            </>
          )}
        </div>
        <div className="flex flex-row gap-7">
          <button
            className="edit p-2 flex items-center justify-end bg-white dark:bg-slate-900 shadow-custom-light rounded-xl"
            onClick={() => editProduct(item)}
            disabled={isIncomplete} // Disable edit if incomplete
          >
            <MdModeEditOutline
              className="text-[#bb3e0d] hover:text-[#fa5818]"
              size={"23px"}
            />
          </button>
          <button
            className="delete p-2 flex items-center justify-end bg-white dark:bg-slate-900 shadow-custom-light rounded-xl"
            onClick={() => handleDeleteClick(item)}
            disabled={isIncomplete} // Disable delete if incomplete
          >
            <FaRegTrashAlt
              className="text-[#a81b1b] hover:text-[#ec1c1c]"
              size={"22px"}
            />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
