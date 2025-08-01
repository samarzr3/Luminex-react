import React, { useEffect, useState , } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceList from "./components/ServiceList";
import CategoryList from "./components/CategoryList";
import ProductSection from "./components/ProductSection";
import BlogSection from "./components/BlogSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div>
      <Header cart={cart} wishlist={wishlist} />
      <main>

        <Hero />
        <ServiceList />
        <CategoryList />
        <ProductSection cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} />
        {/* <BlogSection /> */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
