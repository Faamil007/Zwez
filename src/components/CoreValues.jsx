import React from "react";
import { FiEye, FiTarget, FiUsers } from "react-icons/fi";

export default function CoreValues() {
  return (
    <section className="core-values">
      <div className="values-container">
        <div className="value-card vision">
          <div className="icon-wrapper">
            <FiEye className="value-icon" />
          </div>
          <h3>Our Vision</h3>
          <p>Empowering Dubai's youth through practical entrepreneurship while delivering affordable, tech-driven solutions</p>
        </div>

        <div className="value-card mission">
          <div className="icon-wrapper">
            <FiTarget className="value-icon" />
          </div>
          <h3>Our Mission</h3>
          <p>Provide reliable, student-priced services that help residents reclaim their time</p>
        </div>

        <div className="value-card why-us">
          <div className="icon-wrapper">
            <FiUsers className="value-icon" />
          </div>
          <h3>Why Choose Us</h3>
          <p>Gen-Z problem solvers combining tech savvy with personal understanding of student needs</p>
        </div>
      </div>
    </section>
  );
}