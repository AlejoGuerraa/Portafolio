import React from 'react';
import { motion } from 'framer-motion';
import './TechPlanet.css';

const TechPlanet = ({ tech }) => {
  return (
    <motion.div
      className="tech-planet"
      whileHover={{ scale: 1.2 }}
      onHoverStart={() => console.log(`Hovered on ${tech.name}`)}
    >
      <i className={`icon ${tech.icon}`}></i>
    </motion.div>
  );
};

export default TechPlanet;
