
import React, { useState } from "react";
import {
  IoEyeOutline,
  IoBagHandleOutline,
  IoHeartOutline,
  IoCloseOutline
} from "react-icons/io5";

const products = [
  {
    title: "Aurora Lamp",
    image: "/imagesL/home.webp",
    price: "48.75",
    oldPrice: "65.00",
    badge: "-25%",
    badgeColor: "red",
  },
  {
    title: "Glow Lamp",
    image: "./imagesL/9.jpg",
    price: "71.00",
    badge: "New",
    badgeColor: "green",
  },
  {
    title: "Smart Moon Lamp",
    image: "./imagesL/smart.jpg",
    price: "32.00",
  },
  {
    title: "Moon Lamp",
    image: "./imagesL/images.jpg",
    price: "84.00",
  },
  {
    title: "Casper Lamp",
    image: "./imagesL/casper.webp",
    price: "30.00",
    oldPrice: "38.00",
  },
  {
    title: "Heart Lamp",
    image: "./imagesL/3.jpg",
    price: "85.00",
    oldPrice: "99.00",
  },
   {
    title: "Heart Lamp",
    image: "./imagesL/3.jpg",
    price: "85.00",
    oldPrice: "99.00",
  },
   {
    title: "Casper Lamp",
    image: "./imagesL/casper.webp",
    price: "30.00",
    oldPrice: "38.00",
  },
];

function ProductSection({ cart, setCart, wishlist, setWishlist }) {
  const [showCart, setShowCart] = useState(false);
  const iconSize = 22;

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setShowCart(true);
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.title === product.title);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.title !== product.title));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const handleRemoveFromCart = (title) => {
    const index = cart.findIndex((item) => item.title === title);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <section className="section product">
      <div className="container">
        <h2 className="h2 section-title">Featured Products</h2>

        {showCart && (
          <div className="cart-dropdown" style={{ background: '#fff', padding: '1rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '5px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong>Your Cart</strong>
              <button onClick={() => setShowCart(false)} style={{ background: 'none', border: 'none', fontSize: '1.2rem' }}>
                <IoCloseOutline />
              </button>
            </div>
            {cart.length === 0 ? (
              <p style={{ marginTop: '1rem' }}>Your cart is empty.</p>
            ) : (
              <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
                {cart.map((item, i) => (
                  <li key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>{item.title}</span>
                    <span>
                      £{item.price}
                      <button
                        onClick={() => handleRemoveFromCart(item.title)}
                        style={{ marginLeft: '1rem', color: 'red', background: 'none', border: 'none' }}
                      >
                        Remove
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <ul className="product-list">
          {products.map((product, index) => (
            <li key={index}>
              <div className="product-card">
                <figure className="card-banner">
                  <a href="#">
                    <img src={product.image} alt={product.title} className="w-100" />
                  </a>
                  {product.badge && (
                    <div className={`card-badge ${product.badgeColor}`}>{product.badge}</div>
                  )}
                  <div className="card-actions">
                    <button className="card-action-btn" aria-label="Quick view">
                      <IoEyeOutline size={iconSize} />
                    </button>
                    <button className="card-action-btn cart-btn" onClick={() => handleAddToCart(product)}>
                      <IoBagHandleOutline size={iconSize} />
                      <p>Add to Cart</p>
                    </button>
                    <button className="card-action-btn" onClick={() => toggleWishlist(product)}>
                      <IoHeartOutline size={iconSize} />
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <h3 className="h4 card-title">
                    <a href="#">{product.title}</a>
                  </h3>
                  <div className="card-price">
                    <data value={product.price}>£{product.price}</data>
                    {product.oldPrice && (
                      <data style={{ marginLeft: 5 }}>£{product.oldPrice}</data>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="view-all-wrapper" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn btn-outline">View All Products</button>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
