import React from "react";
import { FiUsers, FiZap, FiDollarSign } from "react-icons/fi";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="content">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">
          From classroom to community service
        </p>

        <div className="student-story">
          <img 
            src="/team-photo.jpg" 
            alt="Our student team" 
            className="team-photo" 
          />
          <div className="story-text">
            <h3>Why We Started ZWEZ</h3>
            <p>
              As college students in Dubai, we noticed how hard it was to balance studies 
              with daily tasks. We created ZWEZ to:
            </p>
            <ul className="about-list">
              <li>📚 Help fellow students/residents save time</li>
              <li>💼 Gain real-world business experience</li>
              <li>🤝 Build trust through reliable service</li>
            </ul>
          </div>
        </div>

        <div className="student-advantages">
          <div className="advantage-card">
            <FiUsers className="advantage-icon" />
            <h4>Peer-to-Peer Help</h4>
            <p>Students helping students - we understand your needs better</p>
          </div>
          
          <div className="advantage-card">
            <FiZap className="advantage-icon" />
            <h4>Tech First Approach</h4>
            <p>Digital natives using latest tools for efficient service</p>
          </div>
          
          <div className="advantage-card">
            <FiDollarSign className="advantage-icon" />
            <h4>No Hidden Fees</h4>
            <p>Transparent pricing that fits student budgets</p>
          </div>
        </div>
      </div>
    </section>
  );
}