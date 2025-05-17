// src/components/Footer.js
import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-container">

        <div className="footer-left">
          <h3>Zwez Services</h3>
          <p>
            At Zwez Services, we’re all about making life a little easier. We offer hassle-free, time-saving assistance to help you manage your day efficiently — from errands to tech support and personal tasks.
          </p>
          <p>
            What makes us different? Zwez is run by ambitious teens turning a small side hustle into something meaningful — built on connection, not just business.
          </p>
          <p>
            Our goal? To be more than just a service — to be trusted friends who’ve earned your confidence, because trust is everything.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#contact">Contact Form</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li><FaPhoneAlt /> +971 50 388 1148</li>
              <li><FaEnvelope /> contact@zwez.online</li>
              <li><FaWhatsapp /> <a href="https://wa.me/+971503881148" target="_blank" rel="noreferrer">Chat on WhatsApp</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Zwez. All rights reserved.
      </div>
    </footer>
  );
}
