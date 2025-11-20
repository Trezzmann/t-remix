import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectGrid.css';

interface Project {
  id: string;
  title: string;
  category: string;
  url: string;
  color: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Unifiers of Japan',
    category: 'website, interaction, illustration',
    url: '/project/unifiers-of-japan',
    color: '#ff6b6b',
    icon: '🇯🇵'
  },
  {
    id: '2',
    title: 'Axle',
    category: 'brand identity, uiux, illustration',
    url: '/project/axle',
    color: '#4ecdc4',
    icon: '⚙️'
  },
  {
    id: '3',
    title: 'PlayYourCourt',
    category: 'brand identity, uiux, website',
    url: '/project/playyourcourt',
    color: '#ffd93d',
    icon: '🎾'
  },
  {
    id: '4',
    title: 'Sputnik',
    category: 'brand identity, logo design',
    url: '/project/sputnik',
    color: '#6c5ce7',
    icon: '🛰️'
  },
  {
    id: '5',
    title: 'Kaisen Seafood',
    category: 'brand identity, illustration',
    url: '/project/kaisen-seafood',
    color: '#ff7675',
    icon: '🦐'
  },
  {
    id: '6',
    title: 'Open School',
    category: 'brand identity, uiux, illustration',
    url: '/project/open-school-app',
    color: '#00b894',
    icon: '📚'
  },
  {
    id: '7',
    title: 'Animals and Climate',
    category: 'website, interaction, illustration',
    url: '/project/animals-and-climate',
    color: '#0984e3',
    icon: '🌍'
  },
  {
    id: '8',
    title: 'Holiday Everyday',
    category: 'packaging, apparel',
    url: '/project/holiday-everyday-socks',
    color: '#fd79a8',
    icon: '🧦'
  }
];

const ProjectGrid: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section className="project-grid">
      <div className="project-grid-container">
        <motion.div 
          className="projects"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="project-item"
            >
              <a href={project.url} className="project-link">
                <motion.div 
                  className="project-content"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="project-image"
                    animate={{
                      background: hoveredId === project.id 
                        ? `linear-gradient(135deg, ${project.color}40, ${project.color}20)`
                        : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="project-icon"
                      animate={{
                        scale: hoveredId === project.id ? 1.2 : 1,
                        rotate: hoveredId === project.id ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.icon}
                    </motion.div>
                    <motion.div 
                      className="project-shimmer"
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </motion.div>

                  <motion.div 
                    className="project-info"
                    animate={{
                      color: hoveredId === project.id ? project.color : '#000'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 
                      className="project-title"
                      animate={{
                        letterSpacing: hoveredId === project.id ? '0.5px' : '0px'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="project-category"
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0.6,
                        color: hoveredId === project.id ? project.color : '#999'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.category}
                    </motion.p>
                  </motion.div>

                  <motion.div 
                    className="project-arrow"
                    animate={{
                      x: hoveredId === project.id ? 5 : 0,
                      opacity: hoveredId === project.id ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;
