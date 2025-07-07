import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";
import "../css/CategorySection.css";

export default function CategorySection({ services, scrollToForm, refs }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2 }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px -10px rgba(67, 97, 238, 0.3)",
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="category-grid-wrapper" ref={sectionRef}>
      {Object.entries(services).map(([category, items], categoryIndex) => (
        <motion.section
          key={category}
          className="category-section"
          ref={refs[category]}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          custom={categoryIndex}
          transition={{ delay: categoryIndex * 0.2 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <motion.h2 
              className="section-title"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {category}
              <span className="title-underline"></span>
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              variants={itemVariants}
            >
              Professional solutions for your needs
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="service-table-container"
            variants={containerVariants}
          >
            <motion.div className="service-table">
              {items.map((service, index) => (
                <motion.div
                  key={`${category}-${index}`}
                  className={`service-row ${service.popular ? 'popular' : ''}`}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover="hover"
                  variants={cardVariants}
                >
                  <div className="service-info">
                    <motion.h3 
                      className="service-name"
                      whileHover={{ color: "#4361ee" }}
                    >
                      {service.name}
                      {service.popular && (
                        <motion.span 
                          className="popular-badge"
                          whileHover={{ scale: 1.05 }}
                        >
                          <FiStar className="badge-icon" />
                          Most Popular
                        </motion.span>
                      )}
                    </motion.h3>
                  </div>

                  <motion.div 
                    className="service-details"
                    whileHover={{ x: -5 }}
                  >
                    <motion.span 
                      className="service-price"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.price}
                    </motion.span>
                    <span className="service-time">{service.time}</span>
                  </motion.div>

                  <motion.button
                    className="service-book"
                    onClick={scrollToForm}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(67, 97, 238, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                    <FiArrowRight className="button-icon" />
                    <span className="button-glow"></span>
                  </motion.button>
                  <div className="hover-effect"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
}