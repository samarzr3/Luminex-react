
import React from "react";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-card">
          <h3 className="card-title">Subscribe Newsletter</h3>
          <p className="card-text">Get 10% discount with Email Newsletter</p>
          <form className="card-form">
            <div className="input-wrapper">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" name="email_address" placeholder="Enter your email" required className="input-field" />
            </div>
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;