import React from "react";
import "../css/Testimonials.css";

export default function Testimonials({ testimonials }) {
  return (
    <section className="testimonials-section" id="testimonials">
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
  );
}
