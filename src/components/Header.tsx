import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      pointerEvents: 'none' as const
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto' as const,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <a href="/">
            <span className="logo-text">Tofu</span>
            <span className="logo-dot"></span>
          </a>
        </motion.div>
        
        <nav className="nav">
          {['All work', 'About', 'Contact', 'Press'].map((item, i) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="nav-link"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="hamburger"
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          ></motion.span>
          <motion.span 
            className="hamburger"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          ></motion.span>
          <motion.span 
            className="hamburger"
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          ></motion.span>
        </motion.button>

        <motion.div 
          className="mobile-menu"
          variants={menuVariants}
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
        >
          {['All work', 'About', 'Contact', 'Press'].map((item, i) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="mobile-nav-link"
              initial={{ opacity: 0, x: -20 }}
              animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
