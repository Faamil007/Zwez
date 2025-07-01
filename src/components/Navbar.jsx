import React from "react";
import { FiArrowRight, FiMenu } from "react-icons/fi";
import '../css/Navbar.css'; 

export default function Navbar({
  services,
  activeCategory,
  setActiveCategory,
  scrollToSection,
  scrollToForm,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="logo-text">Zwez</span>
          <span className="logo-dot">.</span>
        </div>

        {/* Desktop Links */}
        <div className="nav-links">
          {Object.keys(services).map((category) => (
            <button
              key={category}
              onClick={() => scrollToSection(category)}
              className={`nav-link ${
                activeCategory === category ? 'active' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-actions">


          {/* Request Service CTA */}
          <button className="cta-button" onClick={scrollToForm}>
            Request Service <FiArrowRight />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FiMenu
              className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
              size={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {Object.keys(services).map((category) => (
          <button
            key={category}
            onClick={() => scrollToSection(category)}
            className={`mobile-link ${
              activeCategory === category ? 'active' : ''
            }`}
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