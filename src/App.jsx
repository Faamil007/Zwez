import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import CategorySection from "./components/CategorySection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import { FiMessageSquare } from "react-icons/fi";
import "./global.css";

export const services = {
  "Tech Services": [
    { name: "Device Setup", price: "AED 50", time: "15 mins", popular: true },
    { name: "WiFi/Router Fix", price: "AED 60", time: "30 mins" },
    { name: "Software Help", price: "AED 45", time: "25 mins" }
  ],
  "Errands & Delivery": [
    { name: "Grocery Drop", price: "AED 30", time: "60 mins", popular: true },
    { name: "Parcel Pickup", price: "AED 40", time: "45 mins" },
    { name: "Pharmacy Run", price: "AED 35", time: "40 mins" }
  ],
  "Home Services": [
    { name: "TV Mounting", price: "AED 70", time: "90 mins" },
    { name: "Furniture Assembly", price: "AED 100", time: "2 hrs", popular: true },
    { name: "Light Installation", price: "AED 55", time: "45 mins" }
  ],
};

const testimonials = [
  {
    quote: "Zwez saved me when my internet went down before an important meeting. Fast and professional!",
    author: "Sarah K., Business Owner"
  },
  {
    quote: "The furniture assembly was done perfectly in half the time it would have taken me.",
    author: "Ahmed R., Resident"
  },
  {
    quote: "Reliable grocery delivery every time. I use their service weekly now.",
    author: "Mariam S., Busy Parent"
  }
];

export default function ZwezServices() {
  const refs = {
    "Tech Services": useRef(null),
    "Errands & Delivery": useRef(null),
    "Home Services": useRef(null),
    "Custom Tasks": useRef(null),
  };
  const formRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

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
      <a href="https://wa.me/+971503881148" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FiMessageSquare className="whatsapp-icon" />
        <span>Chat Now</span>
      </a>

      <Navbar {...{ services, activeCategory, setActiveCategory, scrollToSection, scrollToForm, darkMode, setDarkMode, menuOpen, setMenuOpen }} />
      <Hero scrollToForm={scrollToForm} />
      <ServicesGrid {...{ services, scrollToSection, refs }} />
      <CategorySection {...{ services, scrollToForm, refs }} />
      <Testimonials testimonials={testimonials} />
      <ContactForm formRef={formRef} />
    </div>
  );
}
