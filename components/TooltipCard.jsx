import React from 'react';
import './TooltipCard.css';

const TooltipCard = ({ tech }) => {
  return (
    <div className="tooltip-card">
      <h3>{tech.name}</h3>
      <p>Nivel: {tech.level}%</p>
      {tech.project && <p>Proyecto: {tech.project}</p>}
    </div>
  );
};

export default TooltipCard;
