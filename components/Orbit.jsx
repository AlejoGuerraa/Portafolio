import React from 'react';
import TechPlanet from './TechPlanet';
import './Orbit.css';

const Orbit = ({ type }) => {
  const techs = {
    backend: [
      { name: 'Node.js', icon: 'SiNodeDotJs', level: 40, project: 'KnowBeat' },
      { name: 'Express', icon: 'SiExpress', level: 80, project: 'NextRead' },
      { name: 'MySQL', icon: 'SiMysql', level: 80, project: 'TuBuffet' },
      { name: 'Sequelize', icon: 'SiSequelize', level: 65, project: 'CampuScore' },
    ],
    frontend: [
      { name: 'HTML', icon: 'SiHtml5', level: 85, project: 'NextRead' },
      { name: 'CSS', icon: 'SiCss3', level: 60, project: 'NextRead' },
      { name: 'React', icon: 'SiReact', level: 80, project: 'TuBuffet' },
      { name: 'Figma', icon: 'SiFigma', level: 70, project: 'KnowBeat' },
    ],
    languages: [
      { name: 'C', icon: 'SiC', level: 50 },
      { name: 'JavaScript', icon: 'SiJavascript', level: 75, project: 'NextRead' },
      { name: 'Python', icon: 'SiPython', level: 75, project: 'Chat-bot' },
      { name: 'Java', icon: 'SiJava', level: 70, project: 'IPVision' },
      { name: 'C#', icon: 'SiCsharp', level: 40 },
    ],
  };

  return (
    <div className={`orbit orbit-${type}`}>
      {techs[type].map((tech, index) => (
        <TechPlanet key={index} tech={tech} />
      ))}
    </div>
  );
};

export default Orbit;
