import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import CategorySection from "./components/CategorySection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";
import CoreValues from "./components/CoreValues";
import { FiMessageSquare } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import "./global.css";
import "./mobile.css";
import "./css/3DEffects.css";
import "./css/Footer.css";
import "./css/GlassCard.css";
import "./css/HoverEffects.css";
import "./css/ScrollAnime.css";
import "./css/WhatsApp.css";
import "./css/ScrollAnime.css";

// =================== Service Data ===================
export const services = {
  "Tech Savvy Service": [
    { 
      name: "Website Development with SEO & Hosting",
      icon: "🌐"
    },
    { 
      name: "App development (Android/iOS) with ASO & Deploying",
      icon: "📱"
    },
    { 
      name: "Social media management & marketing",
      icon: "📢"
    },
    { 
      name: "ATS-friendly resume formatting & LinkedIn optimization",
      icon: "📄"
    },
  ],
  "Personal Assistance Service": [
    { 
      name: "Online form filling, exam application help",
      icon: "📝"
    },
    { 
      name: "Research assistance (e.g., finding services or products)",
      icon: "🔍"
    },
    { 
      name: "International flight/train/bus booking",
      icon: "✈️"
    },
    { 
      name: "Small quantity house shifting or item organization",
      icon: "🏠"
    },
  ],
};

// =================== Testimonial Data ===================
export const testimonials = [
  {
    quote:
      "Zwez's team helped me set up a score board as per my requests, in record time. I was impressed with their attention to detail and professionalism.",
    author: "Aba Rich, Event Organizer at Grace Family Int. Ministries",
    avatar: "/avatars/avatar1.jpg"
  },
  {
    quote:
      "I got stuck in the middle of the road and contacted Zwez. Help arrived within minutes. Their quick response and efficiency made a stressful situation much easier.",
    author: "Abdul Rahman, Owner of Aqua Pools Trading LLC.",
    avatar: "/avatars/avatar2.jpg"
  },
];

// =================== Main Component ===================
export default function ZwezServices() {
  const refs = {
    "Personal Assistance Service": useRef(null),
    "Tech Savvy Service": useRef(null),
    "Custom Service (Other)": useRef(null),
    "Custom Tasks": useRef(null),
  };

  const formRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const lastScrollY = useRef(0);

  // Force dark mode on first render
  useEffect(() => {
    document.body.classList.add("dark");
    const favicon = document.querySelector("link[rel~='icon']");
    if (favicon) favicon.href = "/dark-favicon.ico";

    // Scroll progress indicator
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      
      // Determine scroll direction
      setIsScrollingDown(scrollTop > lastScrollY.current);
      lastScrollY.current = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    setActiveCategory(section);
    refs[section].current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
    setMenuOpen(false);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "center"
    });
    setMenuOpen(false);
  };

  // Scroll indicator animation variants
  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="app">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="scroll-progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", damping: 15 }}
      />

      {/* Scroll Direction Indicator */}
      <AnimatePresence>
        {scrollProgress > 5 && scrollProgress < 95 && (
          <motion.div
            className={`scroll-direction-indicator ${isScrollingDown ? 'down' : 'up'}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={scrollIndicatorVariants}
          >
            {isScrollingDown ? '↓' : '↑'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button with Enhanced Animation */}
      <motion.a
        href="https://wa.me/+971503881148"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1.5 }
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 5px 15px rgba(37, 211, 102, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FiMessageSquare className="whatsapp-icon" />
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { delay: 1.8 }
          }}
        >
          Chat Now
        </motion.span>
        <div className="whatsapp-pulse"></div>
      </motion.a>

      {/* Website Sections with Scroll-triggered Animations */}
      <Navbar
        {...{
          services,
          activeCategory,
          setActiveCategory,
          scrollToSection,
          scrollToForm,
          menuOpen,
          setMenuOpen,
          scrollProgress
        }}
      />
      
      <Hero scrollToForm={scrollToForm} />
      
      <About />
      
      <CoreValues />
      
      <ServicesGrid {...{ services, scrollToSection, refs }} />
      
      <CategorySection {...{ services, scrollToForm, refs }} />
      
      <Testimonials testimonials={testimonials} />
      
      <ContactForm formRef={formRef} />
      
      <Footer />
    </div>
  );
}