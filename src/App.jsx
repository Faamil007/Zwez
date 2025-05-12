import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import CategorySection from "./components/CategorySection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import { FiMessageSquare } from "react-icons/fi";
import "./global.css";
import Footer from "./components/Footer";


export const services = {
  "Personal Assistance Service": [
    { name: "Grocery/pharmacy purchases within Al Qusais", price: "AED 5", popular: true },
    { name: "Courier or document pickup/drop (Al Qusais only)", price: "AED 5" },
    { name: "Reminder calls & schedule planning", price: "AED 5" },
    { name: "Gift purchasing and hand delivery", price: "AED 10" },
    { name: "Event/party help (setup/pickup within the area)", price: "AED 50" },
    { name: "Water can or gas cylinder order coordination", price: "AED 3" },
    { name: "Airport pickup coordination (scheduling, not driving)", price: "Variable" },
    { name: "Lost item recovery support", price: "AED 20" }
  ],
  " Tech Savvy Service": [
    { name: "Mobile/PC/laptop setup & troubleshooting", price: "AED 20", popular: true },
    { name: "App and software installation", price: "AED 10" },
    { name: "Connecting printers, Wi-Fi, smart devices", price: "AED 5" },
    { name: "Data backup support", price: "AED 10" },
    { name: "Email setup and cloud storage configuration", price: "AED 5" },
    { name: "Online form filling, exam application help", price: "AED 10" },
    { name: "Research assistance (e.g., finding services or products)", price: "AED 5" },
    { name: "ATS-friendly resume formatting & LinkedIn optimization", price: "AED 10" },
    { name: "International flight/train/bus booking", price: "AED 10" },
    { name: "PayLater, Tamara, Tabby support", price: "AED 10" }
  ],
  "Custom Service (Other)": [
    { name: "Website domain booking and basic hosting support", price: "AED 20" },
    { name: "Online shopping help and payment walkthrough", price: "AED 5" },
    { name: "Small quantity house shifting or item organization", price: "Flexible", popular: true },
    { name: "Social media profile cleanup (basic photo/video editing)", price: "AED 20" },
    { name: "Document formatting, scanning & PDF conversion", price: "AED 5" },
    { name: "Payment troubleshooting (PayPal, Wise, etc.)", price: "AED 10" },
    { name: "Vendor coordination (plumber, AC repair, etc.)", price: "AED 3" }
  ],
};

export const testimonials = [
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
    "Personal Assistance Service": useRef(null),
    " Tech Savvy Service": useRef(null),
    "Custom Service (Other)": useRef(null),
    "Custom Tasks": useRef(null),
  };
  const formRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
  const favicon = document.querySelector("link[rel~='icon']");
  if (darkMode) {
    favicon.href = '/dark-favicon.ico';
  } else {
    favicon.href = '/light-favicon.ico';
  }
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
      <Footer />
    </div>
  );
}


