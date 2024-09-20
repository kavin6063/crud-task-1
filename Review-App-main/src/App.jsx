import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductLength from "./components/ProductLength";
import ProductForm from "./components/ProductForm";

import { ProductProvider } from "./context/ProductContext";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ProductProvider>
        <Header />

        <div className="container">
          <ProductForm />

          <ProductLength />

          <ProductList />
        </div>
      </ProductProvider>
    </>
  );
};

export default App;
