import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types"; // Import PropTypes for type checking
import "../css/Testimonials.css";

export default function Testimonials({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance for navigation
  const minSwipeDistance = 50;

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]); // Include nextTestimonial in the dependency array

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextTestimonial();
    if (isRightSwipe) prevTestimonial();
    
    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-header">
        <h2 className="section-title">Client Experiences</h2>
        <p className="section-subtitle">What our customers say about us</p>
      </div>
      
      <div 
        className="testimonials-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="testimonials-grid" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-meta">
                  <p className="testimonial-author">— {testimonial.author}</p>
                  {testimonial.role && (
                    <p className="testimonial-role">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-button prev" 
          onClick={prevTestimonial} 
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button 
          className="carousel-button next" 
          onClick={nextTestimonial} 
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Optional indicators/dots */}
      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="testimonials-deco testimonials-deco-1"></div>
      <div className="testimonials-deco testimonials-deco-2"></div>
    </section>
  );
}

// PropTypes for type checking
Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      role: PropTypes.string,
    })
  ).isRequired,
};
