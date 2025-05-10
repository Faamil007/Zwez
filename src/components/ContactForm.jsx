import {FiArrowRight, FiMessageSquare, FiMail, FiPhone } from "react-icons/fi";
import { services } from '../App.jsx'; // adjust the path as needed


export default function ContactForm({ formRef }) {
  return (
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
  )
}
