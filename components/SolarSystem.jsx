import React from 'react';
import { motion } from 'framer-motion';
import Orbit from './Orbit';
import './SolarSystem.css';

const SolarSystem = () => {
  return (
    <div className="solar-system">
      <div className="core">
        <motion.div
          className="core-glow"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {'</>'}
        </motion.div>
      </div>
      <Orbit type="backend" />
      <Orbit type="frontend" />
      <Orbit type="languages" />
    </div>
  );
};

export default SolarSystem;
