import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
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
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            Have a project? Let's chat.
          </motion.h2>
          
          <motion.div 
            className="footer-cta-wrapper"
            whileHover="hover"
            initial="rest"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 }
            }}
          >
            <motion.a 
              href="/contact" 
              className="footer-cta-button"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <span className="button-text">Contact us now</span>
              <motion.span 
                className="button-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.div 
              className="button-glow"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div className="footer-divider" variants={itemVariants} />
        
        <motion.div className="footer-links" variants={itemVariants}>
          <div className="footer-column">
            {['All work', 'About us', 'Contact us', 'Tofu merch'].map((item, i) => (
              <motion.a
                key={item}
                href={item === 'Tofu merch' ? 'https://shoptofudesign.framer.website/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="footer-link"
                target={item === 'Tofu merch' ? '_blank' : undefined}
                rel={item === 'Tofu merch' ? 'noopener noreferrer' : undefined}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 8, color: '#ff6b6b' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="link-text">{item}</span>
                <motion.span 
                  className="link-underline"
                  layoutId={`footer-underline-${item}`}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div className="footer-bottom" variants={itemVariants}>
          <motion.p 
            className="footer-values"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            We're big on our values both as people and as a studio. If you like our designs, you can also shop our{' '}
            <motion.a 
              href="https://shoptofudesign.framer.website/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-merch-link"
              whileHover={{ color: '#ff6b6b', scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              merch
            </motion.a>
            .
          </motion.p>
          
          <motion.div 
            className="footer-credits"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span>© 2024 Tofu Design Studio</span>
            <motion.span 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="credits-dot"
            >
              •
            </motion.span>
            <span>All rights reserved</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
