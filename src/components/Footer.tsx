import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <footer className="footer">
      <motion.div 
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="footer-cta" variants={itemVariants}>
          <motion.h2 
            className="footer-title"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Have a project? Let's chat.
          </motion.h2>
          <motion.a 
            href="/contact" 
            className="footer-cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 107, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Contact us now
          </motion.a>
        </motion.div>
        
        <motion.div className="footer-links" variants={itemVariants}>
          <div className="footer-column">
            {['All work', 'About us', 'Contact us', 'Tofu merch'].map((item, i) => (
              <motion.a
                key={item}
                href={item === 'Tofu merch' ? 'https://shoptofudesign.framer.website/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="footer-link"
                target={item === 'Tofu merch' ? '_blank' : undefined}
                rel={item === 'Tofu merch' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5, color: '#ff6b6b' }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div className="footer-bottom" variants={itemVariants}>
          <p className="footer-values">
            We're big on our values both as people and as a studio. If you like our designs, you can also shop our{' '}
            <motion.a 
              href="https://shoptofudesign.framer.website/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-merch-link"
              whileHover={{ color: '#ff6b6b' }}
            >
              merch
            </motion.a>
            .
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
