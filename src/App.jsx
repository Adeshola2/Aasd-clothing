import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import OrderForm from "./components/OrderForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity
} from "./utils/cart";

function App() {

  const [page, setPage] = useState("home");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState(getCart());

  const navigate = (newPage) => {
    setPage(newPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleAddToCart = (product) => {

    const updatedCart = addToCart(product);

    setCart(updatedCart);

    alert(`${product.name} has been added to your cart.`);
  };

  const handleRemove = (productId) => {

    const updatedCart = removeFromCart(productId);

    setCart(updatedCart);
  };

  const handleUpdateQuantity = (productId, quantity) => {

    const updatedCart = updateQuantity(
      productId,
      quantity
    );

    setCart(updatedCart);
  };

  const viewProduct = (product) => {

    setSelectedProduct(product);

    setPage("product");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Navbar
        navigate={navigate}
        cartCount={cart.reduce(
          (total, item) => total + item.quantity,
          0
        )}
      />

      {page === "home" && (
        <>
          <Hero navigate={navigate} />
          <About />
          <Categories navigate={navigate} />
          <Products
            onAddToCart={handleAddToCart}
            onViewProduct={viewProduct}
            limit={6}
          />
          <Services />
          <Reviews />
          <OrderForm />
          <Contact />
        </>
      )}

      {page === "products" && (
        <Products
          onAddToCart={handleAddToCart}
          onViewProduct={viewProduct}
        />
      )}

      {page === "product" && selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          navigate={navigate}
        />
      )}

      {page === "cart" && (
        <Cart
          cart={cart}
          onRemove={handleRemove}
          onUpdateQuantity={handleUpdateQuantity}
          navigate={navigate}
        />
      )}

      {page === "checkout" && (
        <Checkout
          cart={cart}
          navigate={navigate}
        />
      )}

      {page === "order" && (
        <OrderForm />
      )}

      {page === "contact" && (
        <Contact />
      )}

      <Footer navigate={navigate} />
    </>
  );
}

export default App;