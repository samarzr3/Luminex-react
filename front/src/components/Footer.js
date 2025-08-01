import React from "react";
import { 
  IoLogoFacebook, 
  IoLogoTwitter, 
  IoLogoInstagram, 
  IoLogoPinterest 
} from "react-icons/io";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">

          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./imagesL/logo-removebg-preview.png" alt="Casmart logo" />
            </a>

            <p className="footer-text">
              GlowAura is a captivating theme presenting a dazzling collection of uniquely crafted Glow Lamps,
              illuminating your space with contemporary elegance. From ambient glows to vibrant hues, GlowAura
              offers a complete spectrum of lighting solutions to enhance every corner of your home
            </p>

           <ul className="social-list">
  <li><a href="#" className="social-link"><IoLogoFacebook /></a></li>
  <li><a href="#" className="social-link"><IoLogoTwitter /></a></li>
  <li><a href="#" className="social-link"><IoLogoInstagram /></a></li>
  <li><a href="#" className="social-link"><IoLogoPinterest /></a></li>
</ul>
          </div>

          <ul className="footer-list">
            <li><p className="footer-list-title">Information</p></li>
            <li><a href="#" className="footer-link">About Company</a></li>
            <li><a href="#" className="footer-link">Payment Type</a></li>
            <li><a href="#" className="footer-link">Awards Winning</a></li>
            <li><a href="#" className="footer-link">World Media Partner</a></li>
            <li><a href="#" className="footer-link">Become an Agent</a></li>
            <li><a href="#" className="footer-link">Refund Policy</a></li>
          </ul>

          <ul className="footer-list">
            <li><p className="footer-list-title">Category</p></li>
            <li><a href="#" className="footer-link">Tree Night Light</a></li>
            <li><a href="#" className="footer-link">Glow Lamp</a></li>
            <li><a href="#" className="footer-link">Glass table Lamp</a></li>
            <li><a href="#" className="footer-link">3Dstars Light Lamp</a></li>
            <li><a href="#" className="footer-link">romantic Lamp</a></li>
            <li><a href="#" className="footer-link">Moon Lamp</a></li>
          </ul>

          <ul className="footer-list">
            <li><p className="footer-list-title">Help & Support</p></li>
            <li><a href="#" className="footer-link">Dealers & Agents</a></li>
            <li><a href="#" className="footer-link">FAQ Information</a></li>
            <li><a href="#" className="footer-link">Return Policy</a></li>
            <li><a href="#" className="footer-link">Shipping & Delivery</a></li>
            <li><a href="#" className="footer-link">Order Tranking</a></li>
            <li><a href="#" className="footer-link">List of Shops</a></li>
          </ul>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="#">codewithsadee</a>. All Rights Reserved
          </p>

          <ul className="footer-bottom-list">
            <li><a href="#" className="footer-bottom-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-bottom-link">Terms & Conditions</a></li>
            <li><a href="#" className="footer-bottom-link">Sitemap</a></li>
          </ul>

          <div className="payment">
            <p className="payment-title">We Support</p>
            <img src="/images/payment-img.png" alt="Online payment logos" className="payment-img" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
