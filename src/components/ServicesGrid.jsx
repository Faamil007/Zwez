import React from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function ServicesGrid({ services, scrollToSection, refs }) {
  return (
    <section className="services-section" id="services">
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
  );
}
