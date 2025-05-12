import React from "react";

export default function CategorySection({ services, scrollToForm, refs }) {
  return (
    <>
      {Object.entries(services).map(([category, items]) => (
        <section 
          key={category} 
          className="category-section" 
          ref={refs[category]}
        >
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">{category}</h2>
            <p className="section-subtitle">
              Professional solutions for your needs
            </p>
          </div>
          
          {/* Services Table */}
          <div className="service-table-container">
            <div className="service-table">
              {items.map((service, index) => (
                <div 
                  key={`${category}-${index}`} 
                  className={`service-row ${service.popular ? 'popular' : ''}`}
                >
                  {/* Service Info */}
                  <div className="service-info">
                    <h3 className="service-name">{service.name}</h3>
                    {service.popular && (
                      <span className="popular-badge">Most Popular</span>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="service-details">
                    <span className="service-price">{service.price}</span>
                    <span className="service-time">{service.time}</span>
                  </div>

                  {/* Action Button */}
                  <button 
                    className="service-book" 
                    onClick={scrollToForm}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}