import React from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import "../css/Hero.css"; 

export default function Hero({ scrollToForm }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Premium On-Demand 
          <span className="highlight"> Services </span> 
          in Dubai
        </h1>
        <p className="hero-subtitle">
          "Your personal techie, assistant, and problem-solver – all in one call."
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
      <img 
        src="/hero-image.jpg" 
        alt="Zwez Services Team in Dubai" 
        className="hero-image"
        loading="eager"
      />
    </header>
  );
}
