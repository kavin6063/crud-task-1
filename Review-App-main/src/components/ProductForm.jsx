import { useContext, useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import Alert from "../components/shared/Alert";
import ProductContext from "../context/ProductContext";

const ProductForm = () => {
  const { addProduct, productEdit, updateProduct } = useContext(ProductContext);

  const [text, setText] = useState("");
  const [category, setCategory] = useState("vegetable");
  const [description, setDescription] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (productEdit.edit === true) {
      setText(productEdit.item.text);
      setCategory(productEdit.item.category || "vegetable");
      setDescription(productEdit.item.description || "");
      setOldPrice(productEdit.item.oldPrice || "");
      setNewPrice(productEdit.item.newPrice || "");
      setIsAvailable(productEdit.item.isAvailable || false);
    } else {
      resetForm();
    }
  }, [productEdit]);

  useEffect(() => {
    // Enable button only if all required fields are filled
    setBtnDisable(!text || !description || oldPrice === "" || newPrice === "");
  }, [text, category, description, oldPrice, newPrice]);

  const resetForm = () => {
    setText("");
    setCategory("vegetable");
    setDescription("");
    setOldPrice("");
    setNewPrice("");
    setIsAvailable(false);
    setBtnDisable(true);
  };

  const handleTextChange = (e) => setText(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleOldPriceChange = (e) => setOldPrice(e.target.value);
  const handleNewPriceChange = (e) => setNewPrice(e.target.value);
  const handleAvailabilityChange = (e) => setIsAvailable(e.target.checked);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      text,
      category,
      description,
      oldPrice,
      newPrice,
      isAvailable,
    };

    if (productEdit.edit === true) {
      updateProduct(productEdit.item.id, newProduct);
    } else {
      addProduct(newProduct);
    }

    resetForm();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <>
      <div className="container mx-auto flex flex-row items-center justify-center">
        {showAlert && (
          <Alert
            message={"Your Product"}
            actionMessage={"Added successfully!"}
            version={"#0f766e"}
          />
        )}
      </div>
      <div className="flex flex-row items-center justify-center mt-8">
        <Card>
          <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-[#0c4a6e] dark:text-[#92b1e4] text-xl">
              Add your Products
            </h3>
            <div className="flex flex-col gap-3 mt-8">
              <input
                type="text"
                value={text}
                onChange={handleTextChange}
                className="px-3 py-3 text-lg w-full font-bold rounded-lg border focus:outline focus:outline-2 bg-[#ffffff] dark:bg-gray-800"
                placeholder="Product Name"
              />
              <select
                value={category}
                onChange={handleCategoryChange}
                className="px-3 py-3 text-lg w-full font-bold rounded-lg border focus:outline focus:outline-2 bg-[#ffffff] dark:bg-gray-800"
              >
                <option value="vegetable">Vegetable</option>
                <option value="fruit">Fruit</option>
              </select>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                className="px-3 py-3 text-lg w-full font-bold rounded-lg border focus:outline bg-[#ffffff] dark:bg-gray-800"
                placeholder="Description"
              />
              <input
                type="number"
                value={oldPrice}
                onChange={handleOldPriceChange}
                className="px-3 py-3 text-lg w-full font-bold rounded-lg border focus:outline bg-[#ffffff] dark:bg-gray-800"
                placeholder="Old Price"
              />
              <input
                type="number"
                value={newPrice}
                onChange={handleNewPriceChange}
                className="px-3 py-3 text-lg w-full font-bold rounded-lg border focus:outline bg-[#ffffff] dark:bg-gray-800"
                placeholder="New Price"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isAvailable}
                  onChange={handleAvailabilityChange}
                  className="mr-2"
                />
                <label>Available</label>
              </div>
              <Button isDisabled={btnDisable} version="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default ProductForm;
