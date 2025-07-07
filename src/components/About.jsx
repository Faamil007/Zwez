import React, { useEffect, useRef } from "react";
import { FiUsers, FiZap, FiDollarSign, FiChevronRight } from "react-icons/fi";
import { motion, useAnimation, useInView } from "framer-motion";
import "../css/About.css";

export default function About() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(67, 97, 238, 0.25)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="about-section"
      ref={sectionRef}
      id="about"
    >
      <div className="content">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="content-inner"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Our <span className="gradient-text">Story</span>
          </motion.h2>

          <motion.div className="student-story" variants={itemVariants}>
            <motion.div 
              className="image-container"
              initial={{ x: -50, opacity: 0 }}
              animate={controls}
              variants={{
                visible: { x: 0, opacity: 1, transition: { delay: 0.4 } }
              }}
            >
              <img 
                src="/team-photo.png" 
                alt="Our student team" 
                className="team-photo"
              />
              <div className="image-reflection"></div>
            </motion.div>

            <motion.div 
              className="story-text"
              variants={itemVariants}
              transition={{ delay: 0.6 }}
            >
              <motion.h3 
                className="text-gradient"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Why We Created ZWEZ
              </motion.h3>
              
              <motion.p variants={itemVariants}>
              Technology is supposed to make life easier — but for many, it often does the opposite. Whether it’s navigating confusing forms, building a website, or just needing help with small tasks, we noticed one thing: people are overwhelmed.              </motion.p>
              
              
              <motion.p variants={itemVariants}>
              That’s where Zwez was born.
              </motion.p>

              <motion.p variants={itemVariants}>
              We’re a group of college students in Dubai, passionate about making everyday tasks simpler. From website development to filling out online applications, we use our knowledge and skills to help others — while gaining real experience and earning a side income to support our student lives.              </motion.p>
              

              <motion.ul className="about-list">
                {[
                  "🧠 Simplify tech for everyone, especially non-tech-savvy individuals",
                  "🤝 Offer trustworthy help that feels like a friend, not a transaction",
                  "🎓 Gain hands-on experience while studying full-time",
                  "💸 Build a meaningful hustle that supports our education"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    initial="hidden"
                    animate={controls}
                    transition={{ delay: 0.8 + index * 0.15 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {item}
                    <FiChevronRight className="list-arrow" />
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.p variants={itemVariants}>
              We believe in growing through real work, honest service, and mutual trust — a win-win for both you and us.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="student-advantages"
            variants={containerVariants}
          >
            {[
              {
                icon: <FiUsers />,
                title: "Tech Help by Real People",
                text: "Our team understands your daily struggles and offers practical support."
              },
              {
                icon: <FiZap />,
                title: "Smart & Fast Solutions",
                text: "We use the latest tools and know-how to solve your tech headaches quickly."
              },
              {
                icon: <FiDollarSign />,
                title: "Affordable & Honest",
                text: "Transparent pricing, no hidden costs — designed to fit within your budget."
              }
            ].map((advantage, index) => (
              <motion.div 
  key={index}
  className="advantage-card"
  initial="hidden"
  animate={controls}
  custom={index}
  transition={{ delay: 1.2 + index * 0.1 }}
  whileHover="hover"
  variants={cardVariants}  // Removed the duplicate variants prop
>
  <div className="card-inner">
    <div className="advantage-icon-container">
      {advantage.icon}
      <div className="icon-pulse"></div>
    </div>
    <h4>{advantage.title}</h4>
    <p>{advantage.text}</p>
    <div className="card-hover-effect"></div>
  </div>
</motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}