import React, { useState, useRef, useEffect } from "react";
import {
  IoPersonOutline,
  IoSearchOutline,
  IoBagHandleOutline,
  IoHeartOutline,
  IoCloseOutline
} from "react-icons/io5";

import "../App.css";

function Header({ cart, wishlist, setCart, setWishlist }) {
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowCartDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleRemoveFromCart = (title) => {
    const index = cart.findIndex((item) => item.title === title);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);

  return (
    <header className="header" data-header>
      <div className="container" style={{ position: 'relative' }}>
        <div className="overlay" data-overlay></div>

        <div className="header-search">
          <input type="search" placeholder="Search Product..." className="input-field" />
          <button className="search-btn" aria-label="Search">
            <IoSearchOutline size="20" />
          </button>
        </div>

        <a href="#" className="logo">
          <img src="/imagesL/logo-removebg-preview.png" alt="Luminex logo" width="130" height="31" />
        </a>

        <div className="header-actions">
          <button className="header-action-btn">
            <IoPersonOutline size="24" />
            <p className="header-action-label">Sign in</p>
          </button>

          <button className="header-action-btn">
            <IoSearchOutline size="24" />
            <p className="header-action-label">Search</p>
          </button>

          <div style={{ position: 'relative' }}>
            <button
              className="header-action-btn"
              onClick={() => setShowCartDropdown((prev) => !prev)}
            >
              <IoBagHandleOutline size="24" />
              <p className="header-action-label">Cart</p>
              <div className="btn-badge green" aria-hidden="true">{cart.length}</div>
            </button>
            {showCartDropdown && (
              <div
                ref={dropdownRef}
                className="cart-box"
                style={{
                  position: "absolute",
                  top: "120%",
                  right: 0,
                  width: "350px",
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                  padding: "20px",
                  zIndex: 1000
                }}
              >
                <div className="cart-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4 style={{ fontWeight: "bold" }}>Shopping Cart</h4>
                  <button onClick={() => setShowCartDropdown(false)} style={{ background: 'none', border: 'none' }}>
                    <IoCloseOutline size={20} />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <p style={{ marginTop: '1rem' }}>Your cart is empty.</p>
                ) : (
                  <ul className="cart-list" style={{ maxHeight: "200px", overflowY: "auto", padding: 0, marginTop: "1rem" }}>
                    {cart.map((item, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                        <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px", marginRight: "10px" }} />
                        <div style={{ flexGrow: 1 }}>
                          <p style={{ marginBottom: 5 }}>{item.title}</p>
                          <strong>£{item.price}</strong>
                        </div>
                        <button
                          onClick={() => handleRemoveFromCart(item.title)}
                          style={{ background: 'none', border: 'none', color: 'red', fontSize: '12px' }}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {cart.length > 0 && (
                  <div style={{ marginTop: "1rem", borderTop: "1px solid #eee", paddingTop: "1rem" }}>
                    <p style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                      <span>Total:</span>
                      <span>£{totalPrice}</span>
                    </p>
                    <button className="btn btn-primary" style={{ marginTop: "1rem", width: "100%" }}>
                      Go to Checkout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <button className="header-action-btn">
            <IoHeartOutline size="24" />
            <p className="header-action-label">Wishlist</p>
            <div className="btn-badge" aria-hidden="true">{wishlist.length}</div>
          </button>
        </div>

        <button className="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="#" className="logo">
              <img src="/images/logo-removebg-preview.png" alt="Luminex logo" width="130" height="31" />
            </a>
            <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
              <IoCloseOutline size="20" />
            </button>
          </div>
          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link">Home</a></li>
            <li><a href="#" className="navbar-link">Shop</a></li>
            <li><a href="#" className="navbar-link">About</a></li>
            <li><a href="#blog" className="navbar-link">Blog</a></li>
            <li><a href="#" className="navbar-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;