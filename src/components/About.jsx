import React, { useEffect, useRef, useState } from "react";
import { FiUsers, FiZap, FiDollarSign } from "react-icons/fi";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <section 
      className={`about-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      id="about"
    >
      <div className="content">
        <h2 className="section-title">Our Story</h2>

        <div className="student-story">
          <img 
            src="/team-photo.jpg" 
            alt="Our student team" 
            className="team-photo" 
          />
          <div className="story-text">
            <h3>Why We Created ZWEZ</h3>
            <p>
              In today's fast-paced, tech-heavy world, even everyday tasks can become overwhelming — especially for those who aren't familiar with rapidly evolving technology. That's where we come in.
            </p>
            <p>
              That's why we started ZWEZ — a group of college students in Dubai using our knowledge to make life easier for you. While helping others with tech, we gain experience and earn a little side income to manage our student life. It's practical, helpful, and driven by purpose.
            </p>
            <ul className="about-list">
              <li>🧠 Simplify technology for everyday people</li>
              <li>🤝 Offer trusted, friendly, and affordable support</li>
              <li>🎓 Gain real-world experience while managing our education</li>
              <li>💸 Make a small income to support our student life</li>
            </ul>
            <p>
              We grow through your support — a community-based exchange of help and trust.            
            </p>
          </div>
        </div>

        <div className="student-advantages">
          <div className="advantage-card">
            <FiUsers className="advantage-icon" />
            <h4>Tech Help by Real People</h4>
            <p>Our team understands your daily struggles and offers practical support.</p>
          </div>
          
          <div className="advantage-card">
            <FiZap className="advantage-icon" />
            <h4>Smart & Fast Solutions</h4>
            <p>We use the latest tools and know-how to solve your tech headaches quickly.</p>
          </div>
          
          <div className="advantage-card">
            <FiDollarSign className="advantage-icon" />
            <h4>Affordable & Honest</h4>
            <p>Transparent pricing, no hidden costs — designed to fit within your budget.</p>
          </div>
        </div>
      </div>
    </section>
  );
}