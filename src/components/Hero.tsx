import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const words = [
    { text: 'The', delay: 0.2 },
    { text: 'design', delay: 0.4 },
    { text: 'studio', delay: 0.6 }
  ];

  const subtitleWords = [
    { text: 'for', delay: 0.8 },
    { text: 'mission-driven', delay: 1.0 },
    { text: 'brands', delay: 1.2 }
  ];

  return (
    <section className="hero">
      <motion.div 
        className="hero-blobs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div 
          className="hero-blob-1"
          animate={{ 
            y: [0, 30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="hero-blob-2"
          animate={{ 
            y: [0, -40, 0],
            x: [0, -25, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          {words.map((word, i) => (
            <span key={i} className="hero-title-word">
              <motion.span 
                className="hero-title-char"
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: word.delay, 
                  duration: 0.7,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.h2 className="hero-subtitle" variants={itemVariants}>
          {subtitleWords.map((word, i) => (
            <span key={i} className="hero-title-word">
              <motion.span 
                className="hero-title-char"
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: word.delay, 
                  duration: 0.7,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <motion.div 
          className="hero-scroll"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          variants={itemVariants}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
          <motion.svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M12 5v10M12 15l4-4M12 15l-4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        </motion.div>

        <motion.div 
          className="hero-accent"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
