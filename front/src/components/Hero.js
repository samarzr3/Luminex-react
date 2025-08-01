import React from "react";
import "../App.css";
function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage:
          "url('https://www.ikea.com/global/assets/range-categorisation/images/wall-lamps-20504.jpeg?imwidth=500')",
      }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Illuminate Your Space</p>
          <h2 className="h1 hero-title">Radiant Nostalgic Glow</h2>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;