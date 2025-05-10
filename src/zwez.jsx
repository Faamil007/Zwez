import React, { useEffect, useRef, useState } from "react";
import { FiSun, FiMoon, FiArrowRight, FiCheck, FiMessageSquare, FiMail, FiPhone } from "react-icons/fi";
import "./index.css";

const services = {
    "Tech Services": [
        { name: "Device Setup", price: "AED 50", time: "15 mins", popular: true },
        { name: "WiFi/Router Fix", price: "AED 60", time: "30 mins" },
        { name: "Software Help", price: "AED 45", time: "25 mins" }
    ],
  "Errands & Delivery": [
    { name: "Grocery Drop", price: "AED 30", time: "60 mins", popular: true },
    { name: "Parcel Pickup", price: "AED 40", time: "45 mins" },
    { name: "Pharmacy Run", price: "AED 35", time: "40 mins" }
  ],
  "Home Services": [
    { name: "TV Mounting", price: "AED 70", time: "90 mins" },
    { name: "Furniture Assembly", price: "AED 100", time: "2 hrs", popular: true },
    { name: "Light Installation", price: "AED 55", time: "45 mins" }
  ],
  "Custom Tasks": [
    { name: "Consultation", price: "AED 20", time: "15 mins" },
    { name: "Urgent Assistance", price: "AED 100", time: "On demand", popular: true },
    { name: "Personal Shopper", price: "AED 80", time: "Flexible" }
  ]
};

const testimonials = [
  {
    quote: "Zwez saved me when my internet went down before an important meeting. Fast and professional!",
    author: "Sarah K., Business Owner"
  },
  {
    quote: "The furniture assembly was done perfectly in half the time it would have taken me.",
    author: "Ahmed R., Resident"
  },
  {
    quote: "Reliable grocery delivery every time. I use their service weekly now.",
    author: "Mariam S., Busy Parent"
  }
];

export default function ZwezServices() {
  const refs = {
    "Tech Services": useRef(null),
    "Errands & Delivery": useRef(null),
    "Home Services": useRef(null),
    "Custom Tasks": useRef(null),
  };
  const formRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollToSection = (section) => {
    setActiveCategory(section);
    refs[section].current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/+971503881148" 
        className="whatsapp-float"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FiMessageSquare className="whatsapp-icon" />
        <span>Chat Now</span>
      </a>

      {/* Navigation */}
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
        
        {/* Mobile Menu */}
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

      {/* Hero Section */}
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
            <a 
              href="tel:+971503881148" 
              className="secondary-button"
            >
              <FiPhone /> Call Now
            </a>
          </div>
        </div>
        <div className="hero-image"></div>
      </header>

      {/* Services Grid */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Quick solutions for your everyday needs</p>
        </div>
        
        <div className="services-grid">
          {Object.entries(services).map(([category, items]) => (
            <div 
              key={category} 
              className="service-card"
              onClick={() => scrollToSection(category)}
              ref={refs[category]}
            >
              <div className="card-content">
                <h3 className="card-title">{category}</h3>
                <ul className="service-list">
                  {items.slice(0, 2).map((service, index) => (
                    <li key={index} className="service-item">
                      <FiCheck className="check-icon" />
                      {service.name}
                    </li>
                  ))}
                </ul>
                <button className="card-button">
                  View All <FiArrowRight />
                </button>
              </div>
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Services */}
      {Object.entries(services).map(([category, items]) => (
        <section key={category} className="category-section" ref={refs[category]}>
          <div className="section-header">
            <h2 className="section-title">{category}</h2>
            <p className="section-subtitle">Professional solutions for your needs</p>
          </div>
          
          <div className="service-table-container">
            <div className="service-table">
              {items.map((service, index) => (
                <div 
                  key={index} 
                  className={`service-row ${service.popular ? 'popular' : ''}`}
                >
                  <div className="service-info">
                    <h3 className="service-name">{service.name}</h3>
                    {service.popular && (
                      <span className="popular-badge">Most Popular</span>
                    )}
                  </div>
                  <div className="service-details">
                    <span className="service-price">{service.price}</span>
                    <span className="service-time">{service.time}</span>
                  </div>
                  <button className="service-book" onClick={scrollToForm}>
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">Client Experiences</h2>
          <p className="section-subtitle">What our customers say about us</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">— {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section" ref={formRef}>
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">
              Ready to book a service or have questions? We're here to help.
            </p>
            
            <div className="contact-methods">
              <a href="mailto:mohamedfaamil@gmail.com" className="contact-method">
                <FiMail className="contact-icon" />
                mohamedfaamil@gmail.com
              </a>
              <a href="tel:+971503881148" className="contact-method">
                <FiPhone className="contact-icon" />
                +971 50 388 1148
              </a>
              <a 
                href="https://wa.me/+971503881148" 
                className="contact-method whatsapp"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiMessageSquare className="contact-icon" />
                WhatsApp Chat
              </a>
            </div>
          </div>
          
          <form 
            className="contact-form"
            id="requestForm"
            action="https://formsubmit.co/mohamedfaamil@gmail.com"
            method="POST"
          >
            <h2 className="form-title">Service Request Form</h2>
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Enter your name" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="Enter your email" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" required>
                <option value="">Select a service</option>
                {Object.entries(services).map(([category, items]) => (
                  <optgroup key={category} label={category}>
                    {items.map((service, index) => (
                      <option key={index} value={`${category} - ${service.name}`}>
                        {service.name} ({service.price})
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Details</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                placeholder="Describe what you need help with..."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Request <FiArrowRight />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="logo-text">Zwez</span>
              <span className="logo-dot">.</span>
            </div>
            <p className="footer-slogan">
              Premium on-demand services in Dubai
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3 className="link-title">Services</h3>
              {Object.keys(services).map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToSection(category)}
                  className="footer-link"
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="link-group">
              <h3 className="link-title">Contact</h3>
              <a href="mailto:mohamedfaamil@gmail.com" className="footer-link">
                Email Us
              </a>
              <a href="tel:+971503881148" className="footer-link">
                Call Us
              </a>
              <a 
                href="https://wa.me/+971503881148" 
                className="footer-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Zwez Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}