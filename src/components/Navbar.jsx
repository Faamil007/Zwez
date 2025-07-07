import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import '../css/Navbar.css';

export default function Navbar({
  services,
  activeCategory,
  setActiveCategory,
  scrollToSection,
  scrollToForm,
  menuOpen,
  setMenuOpen,
}) {
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      color: "#4361ee",
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      className={`navbar ${menuOpen ? 'open' : ''}`}
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-container">
        {/* Logo */}
        <motion.div
          className="logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMenuOpen(false);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">Zwez</span>
          <motion.span 
            className="logo-dot"
            animate={{ 
              opacity: [0.8, 1, 0.8],
              transition: { duration: 2, repeat: Infinity }
            }}
          >.</motion.span>
        </motion.div>

        {/* Desktop Links */}
        <motion.div className="nav-links">
          {Object.keys(services).map((category, i) => (
            <motion.button
              key={category}
              onClick={() => {
                scrollToSection(category);
                setActiveCategory(category);
              }}
              className={`nav-link ${
                activeCategory === category ? 'active' : ''
              }`}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileHover="hover"
            >
              {category}
              <motion.span 
                className="nav-link-underline"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: activeCategory === category ? 1 : 0,
                  backgroundColor: activeCategory === category ? '#4361ee' : '#f72585'
                }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Actions */}
        <div className="nav-actions">
          {/* Request Service CTA */}
          <motion.button 
            className="cta-button"
            onClick={() => {
              scrollToForm();
              setMenuOpen(false);
            }}
            whileHover={{
              y: -3,
              boxShadow: "0 8px 20px rgba(67, 97, 238, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Request Service <FiArrowRight className="button-icon" />
            <span className="button-glow"></span>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
      

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            {Object.keys(services).map((category, i) => (
              <motion.button
                key={category}
                onClick={() => {
                  scrollToSection(category);
                  setActiveCategory(category);
                  setMenuOpen(false);
                }}
                className={`mobile-link ${
                  activeCategory === category ? 'active' : ''
                }`}
                variants={mobileItemVariants}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                custom={i}
              >
                {category}
                <motion.span 
                  className="mobile-link-indicator"
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: activeCategory === category ? 1 : 0,
                    backgroundColor: activeCategory === category ? '#4361ee' : '#f72585'
                  }}
                />
              </motion.button>
            ))}
            <motion.button 
              className="mobile-cta"
              onClick={() => {
                scrollToForm();
                setMenuOpen(false);
              }}
              variants={mobileItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Service <FiArrowRight />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

