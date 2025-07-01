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

import "./global.css";
import "./mobile.css";
import "./css/3DEffects.css";
import "./css/Footer.css";
import "./css/GlassCard.css";
import "./css/HoverEffects.css";
import "./css/ScrollAnime.css";
import "./css/WhatsApp.css";

// =================== Service Data ===================
export const services = {
  "Tech Savvy Service": [
    { name: "Website Development with SEO & Hosting" },
    { name: "App development (Android/iOS) with ASO & Deploying" },
    { name: "Social media management & marketing" },
    { name: "ATS-friendly resume formatting & LinkedIn optimization" },
  ],
  "Personal Assistance Service": [
    { name: "Online form filling, exam application help" },
    { name: "Research assistance (e.g., finding services or products)" },
    { name: "International flight/train/bus booking" },
    { name: "Small quantity house shifting or item organization" },
  ],
};

// =================== Testimonial Data ===================
export const testimonials = [
  {
    quote:
      "Zwez's team helped me set up a score board as per my requests, in record time. I was impressed with their attention to detail and professionalism.",
    author: "Aba Rich, Event Organizer at Grace Family Int. Ministries",
  },
  {
    quote:
      "I got stuck in the middle of the road and contacted Zwez. Help arrived within minutes. Their quick response and efficiency made a stressful situation much easier.",
    author: "Abdul Rahman, Owner of Aqua Pools Trading LLC.",
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

  // Force dark mode on first render
  useEffect(() => {
    document.body.classList.add("dark");

    const favicon = document.querySelector("link[rel~='icon']");
    if (favicon) favicon.href = "/dark-favicon.ico";
  }, []);

  const scrollToSection = (section) => {
    setActiveCategory(section);
    refs[section].current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+971503881148"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMessageSquare className="whatsapp-icon" />
        <span>Chat Now</span>
      </a>

      {/* Website Sections */}
      <Navbar
        {...{
          services,
          activeCategory,
          setActiveCategory,
          scrollToSection,
          scrollToForm,
          menuOpen,
          setMenuOpen,
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
