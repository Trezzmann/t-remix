import React from 'react';
import { motion } from 'framer-motion';
import './Testimonial.css';

const Testimonial: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="testimonial">
      <motion.div 
        className="testimonial-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="testimonial-content" variants={itemVariants}>
          <motion.div 
            className="testimonial-number"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            01 /
          </motion.div>
          
          <motion.blockquote 
            className="testimonial-quote"
            variants={itemVariants}
          >
            Tofu designed Paka's new site, and I can't imagine a better partner to have worked with.
          </motion.blockquote>
          
          <motion.cite 
            className="testimonial-author"
            variants={itemVariants}
          >
            Kris Cody, <a href="/project/paka-apparel" className="testimonial-link">Paka</a>
          </motion.cite>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
