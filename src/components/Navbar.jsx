import React from "react";
import { FiSun, FiMoon, FiArrowRight } from "react-icons/fi";

export default function Navbar({ services, activeCategory, setActiveCategory, scrollToSection, scrollToForm, darkMode, setDarkMode, menuOpen, setMenuOpen }) {
  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-text">Zwez</span>
          <span className="logo-dot">.</span>
        </div>

        <div className="nav-links">
          {Object.keys(services).map((category) => (
            <button
              key={category}
              onClick={() => scrollToSection(category)}
              className={`nav-link ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button className="cta-button" onClick={scrollToForm}>
            Request Service <FiArrowRight />
          </button>
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {Object.keys(services).map((category) => (
          <button
            key={category}
            onClick={() => scrollToSection(category)}
            className={`mobile-link ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
        <button className="mobile-cta" onClick={scrollToForm}>
          Request Service
        </button>
      </div>
    </nav>
  );
}
