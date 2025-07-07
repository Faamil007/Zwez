// src/components/Footer.js
import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import "../css/Footer.css";

export default function Footer() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX - e.currentTarget.getBoundingClientRect().left,
      y: e.clientY - e.currentTarget.getBoundingClientRect().top
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };



  return (
    <motion.footer 
      className="premium-footer"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      }}
    >
      <div className="footer-container">
        <motion.div 
          className="footer-left"
          variants={itemVariants}
          whileHover={{
            y: -5,
            transition: { duration: 0.4 }
          }}
        >
          <motion.h3 
            className="footer-title"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <span className="letter-z">Z</span>
            <span className="letter-w">w</span>
            <span className="letter-e">e</span>
            <span className="letter-z">z</span> Services
          </motion.h3>
          
          <motion.p variants={itemVariants}>
          Helping you with what matters — from tech setups to personal assistance and custom solutions.
Built by students. Backed by purpose. Trusted by you.          </motion.p>
        </motion.div>

        <motion.div 
          className="footer-right"
          variants={containerVariants}
        >
          <motion.div 
            className="footer-quick-links"
            variants={itemVariants}
            whileHover="hover"
            initial={{ rotateY: 5 }}
            animate={{ rotateY: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h4 variants={itemVariants}>Quick Links</motion.h4>
            <motion.ul variants={containerVariants}>
              {[
                { text: "Our Services", href: "#services" },
                { text: "Contact Form", href: "#contact" },
                { text: "Testimonials", href: "#testimonials" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 5,
                    transition: { type: "spring", stiffness: 500 }
                  }}
                >
                  <a href={link.href}>
                    <span className="link-arrow"></span>
                    <span className="link-text">{link.text}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="footer-contact"
            variants={itemVariants}
            whileHover="hover"
            initial={{ rotateY: -5 }}
            animate={{ rotateY: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h4 variants={itemVariants}>Contact Us</motion.h4>
            <motion.ul variants={containerVariants}>
              {[
                { icon: <FaPhoneAlt />, 
                  text: "+971 50 388 1148",
                  href: "https://wa.me/+971503881148" },
                { icon: <FaEnvelope />, 
                  text: "contact@zwez.online"
                , href: "mailto:contact@zwez.online?subject=Zwez%20Service%20Inquiry&body=Hi%20Zwez%20Team"},
                { 
                  icon: <FaWhatsapp />, 
                  text: "Chat on WhatsApp",
                  href: "https://wa.me/+971503881148" 
                }
              ].map((contact, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="contact-item"
                  whileHover={{ 
                    x: 5,
                    transition: { type: "spring", stiffness: 500 }
                  }}
                >
                  <span className="contact-icon">{contact.icon}</span>
                  <span className="contact-text">
                    {contact.href ? (
                      <a href={contact.href} target="_blank" rel="noreferrer">
                        {contact.text}
                      </a>
                    ) : (
                      <span>{contact.text}</span>
                    )}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        variants={itemVariants}
      >
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Zwez. All rights reserved.
        </div>
      </motion.div>
    </motion.footer>
  );
}