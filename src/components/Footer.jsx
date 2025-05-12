// src/components/Footer.js
import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Zwez Services</h3>
          <p>Professional personal and tech support on-demand.</p>
        </div>

        <div className="footer-middle">
          <h4>Contact Us</h4>
          <ul>
            <li><FaPhoneAlt /> +971 50 388 1148</li>
            <li><FaEnvelope /> support@zwez.ae</li>
            <li><FaWhatsapp /> <a href="https://wa.me/+971503881148" target="_blank" rel="noreferrer">Chat on WhatsApp</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#Primary-Button">Contact Form</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Zwez. All rights reserved.
      </div>
    </footer>
  );
}
