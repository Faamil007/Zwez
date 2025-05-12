import { FiArrowRight, FiMessageSquare, FiMail, FiPhone } from "react-icons/fi";
import { services } from '../App.jsx';

export default function ContactForm({ formRef }) {
  const contactMethods = [
    {
      icon: <FiMail className="contact-icon" />,
      link: "mailto:contactzwez@gmail.com",
      text: "contactzwez@gmail.com",
      className: "contact-method"
    },
    {
      icon: <FiPhone className="contact-icon" />,
      link: "tel:+971503881148",
      text: "+971 50 388 1148",
      className: "contact-method"
    },
    {
      icon: <FiMessageSquare className="contact-icon" />,
      link: "https://wa.me/+971503881148",
      text: "WhatsApp Chat",
      className: "contact-method whatsapp",
      extraProps: { target: "_blank", rel: "noopener noreferrer" }
    }
  ];

  return (
    <section className="contact-section" ref={formRef}id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Ready to book a service or have questions? We're here to help.
          </p>
          
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className={method.className}
                {...method.extraProps || {}}
              >
                {method.icon}
                {method.text}
              </a>
            ))}
          </div>
        </div>
        
        <form
          className="contact-form"
          id="requestForm"
          action="https://formsubmit.co/mohamedfaamil@gmail.com"
          method="POST"
        >
          <h2 className="form-title">Service Request Form</h2>
          
          {[
            {
              id: "name",
              label: "Your Name",
              type: "text",
              placeholder: "Enter your name"
            },
            {
              id: "email",
              label: "Email Address",
              type: "email",
              placeholder: "Enter your email"
            }
          ].map((field) => (
            <div key={field.id} className="form-group">
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                required
                placeholder={field.placeholder}
              />
            </div>
          ))}
          
          <div className="form-group">
            <label htmlFor="service">Service Needed</label>
            <select id="service" name="service" required>
              <option value="">Select a service</option>
              {Object.entries(services).map(([category, items]) => (
                <optgroup key={category} label={category}>
                  {items.map((service, index) => (
                    <option
                      key={`${category}-${index}`}
                      value={`${category} - ${service.name}`}
                    >
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
  );
}