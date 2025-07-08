import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import "../css/Hero.css";

export default function Hero({ scrollToForm }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const buttonVariants = {
    hover: {
      y: -5,
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(67, 97, 238, 0.4)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header 
      className="hero"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div 
        className="hero-content"
        variants={itemVariants}
      >
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
          whileHover={{ 
            textShadow: "0 0 20px rgba(67, 97, 238, 0.5)",
            transition: { duration: 0.5 }
          }}
        >
          Premium On-Demand 

          <motion.span 
            className="highlight"
            animate={{
              backgroundPosition: ['0%', '100%'],
              transition: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
          > 
            Services 
          </motion.span> 
           in Dubai
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
          transition={{ delay: 0.3 }}
        >
          "Your personal techie, assistant, and problem-solver – all in one call."
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          variants={containerVariants}
        >
          <motion.button
            className="primary-button"
            onClick={scrollToForm}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Book a Service <FiArrowRight className="button-icon" />
            <span className="button-glow"></span>
          </motion.button>
          
          <motion.a
            href="tel:+971503881148"
            className="secondary-button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FiPhone className="button-icon" /> Call Now
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.img 
        src="/hero-image.webp" 
        alt="Zwez Services Team in Dubai" 
        className="hero-image"
        loading="eager"
        initial={{ opacity: 0, x: 100, rotateY: -20 }}
        animate={isInView ? { 
          opacity: 0.95, 
          x: 0, 
          rotateY: -10,
          transition: { delay: 0.5, duration: 1 } 
        } : {}}
        whileHover={{ 
          opacity: 1,
          rotateY: 0,
          scale: 1.03,
          filter: "drop-shadow(0 15px 30px rgba(67, 97, 238, 0.4)) brightness(1.1) contrast(1.2)"
        }}
      />
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={isInView ? {
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0],
          transition: { delay: 1.5, duration: 2, repeat: Infinity }
        } : {}}
      />
    </motion.header>
  );
}