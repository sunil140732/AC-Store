import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-4 mt-5 shadow">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>ACStore</h5>
            <p>Your one-step shop for all the latest products.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop" >Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about" >About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" >Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                📞 <a href="tel:+919652861548">+91 9652861548</a>
              </li>
              <li>
                ✉️ <a href="mailto:sunil.vdm2002@gmail.com">sunil.vdm2002@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com"  target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com"  target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} ACStore. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

