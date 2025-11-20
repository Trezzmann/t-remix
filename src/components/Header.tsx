import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['All work', 'About', 'Contact', 'Press'];

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
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

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/">
            <span className="logo-text">Kipa</span>
            <motion.span 
              className="logo-dot"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </a>
        </motion.div>
        
        <nav className="nav">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="nav-link"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              whileHover={{ color: 'var(--accent)' }}
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
          />
          <motion.span 
            className="hamburger"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span 
            className="hamburger"
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </motion.button>

        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          pointerEvents={isMenuOpen ? 'auto' : 'none'}
        >
          {navItems.map((item, i) => (
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
    </motion.header>
  );
};

export default Header;
