import React from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export default function Hero({ scrollToForm }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Premium On-Demand 
          <span className="highlight"> Services</span> 
          in Dubai
        </h1>
        <p className="hero-subtitle">
          Reliable, professional help for your tech, home, errands and special requests
        </p>
        <div className="hero-actions">
          <button className="primary-button" onClick={scrollToForm}>
            Book a Service <FiArrowRight />
          </button>
          <a href="tel:+971503881148" className="secondary-button">
            <FiPhone /> Call Now
          </a>
        </div>
      </div>
      <div className="hero-image"></div>
    </header>
  );
}
