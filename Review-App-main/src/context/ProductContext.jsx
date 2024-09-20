import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([
    {
      id: 1,
      text: "Apple",
      category: "fruit",
      description: "Fresh and sweet apples",
      oldPrice: 20,
      newPrice: 15,
    },
  ]);

  const [productEdit, setProductEdit] = useState({
    item: {},
    edit: false,
  });

  const editProduct = (item) => {
    setProductEdit({
      item: item,
      edit: true,
    });
  };
  const [itemToDelete, setItemToDelete] = useState(null);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  // CRUD

  const fetchProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching Product:", error);
    }
  };

  // Add Product
  const addProduct = async (newProduct) => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      const data = await response.json();

      // Update the state with the new product
      setProduct([data, ...product]);
    } catch (error) {
      console.error("Error adding Product:", error);
    }
  };

  // Update Product
  const updateProduct = async (id, updItem) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updItem),
      });
      const data = await response.json();
      setProduct(
        product.map((item) => (item.id === id ? { ...item, ...data } : item))
      );
    } catch (error) {
      console.error("Error updating Product:", error);
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
      setProduct(product.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting Product:", error);
    }
  };
  // handling confirm modal

  const handleDeleteClick = (item) => {
    setItemToDelete(item); // Set the item to be deleted
    setShowModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setItemToDelete(null); // Clear the item to be deleted
  };

  const handleConfirmDelete = async () => {
    if (itemToDelete) {
      await deleteProduct(itemToDelete.id); // Correct the function name here
      setItemToDelete(null);
    }
    setShowModal(false);
    console.log("Product deleted");
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        productEdit,
        editProduct,
        itemToDelete,
        showModal,
        handleDeleteClick,
        handleCloseModal,
        handleConfirmDelete,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
