import React from 'react';
import './OtherTechnologies.css';

const OtherTechnologies = () => {
  const others = [
    { name: 'Unity', icon: 'SiUnity' },
    { name: 'Git', icon: 'SiGit' },
    { name: 'Canva', icon: 'SiCanva' },
    { name: 'Word', icon: 'SiMicrosoftword' },
    { name: 'Excel', icon: 'SiMicrosoftexcel' },
    { name: 'PowerPoint', icon: 'SiMicrosoftpowerpoint' },
  ];

  return (
    <div className="other-technologies">
      {others.map((tech, index) => (
        <div key={index} className="tech-card">
          <i className={`icon ${tech.icon}`}></i>
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default OtherTechnologies;
