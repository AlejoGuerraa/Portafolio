import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SimpleTooltip from './SimpleTooltip'
import {
  SiHtml5,
  SiCss,
  SiReact,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiSequelize,
  SiC,
  SiJavascript,
  SiPython,
  SiUnity,
  SiGit,
  SiCanva,
  
} from 'react-icons/si'

import './TechStackSection.css'

interface TechItem {
  slug: string
  name: string
  level: string
  project: string
  Icon: React.ComponentType<{ size?: number; color?: string }>
  color: string
}

interface TechGroup {
  title: string
  description: string
  accent: string
  items: TechItem[]
}

// Use the official simple icons from react-icons for Java and C# for consistency

const techGroups: TechGroup[] = [
  {
    title: 'Backend',
    description: '',
    accent: '#7DD56C',
    items: [
      { slug: 'express', name: 'Express', level: '80%', project: 'NextRead', Icon: SiExpress, color: '#FFFFFF' },
      { slug: 'mysql', name: 'MySQL', level: '80%', project: 'TuBuffet', Icon: SiMysql, color: '#00758F' },
      { slug: 'nodejs', name: 'Node.js', level: '40%', project: 'KnowBeat', Icon: SiNodedotjs, color: '#8CC84B' },
      { slug: 'sequelize', name: 'Sequelize', level: '65%', project: 'CampuScore', Icon: SiSequelize, color: '#52B0E7' },
    ],
  },
  {
    title: 'Frontend',
    description: '',
    accent: '#69C7FF',
    items: [
      { slug: 'html', name: 'HTML', level: '85%', project: 'NextRead', Icon: SiHtml5, color: '#E34F26' },
      { slug: 'css', name: 'CSS', level: '60%', project: 'NextRead', Icon: SiCss, color: '#1572B6' },
      { slug: 'react', name: 'React', level: '80%', project: 'TuBuffet', Icon: SiReact, color: '#61DAFB' },
      { slug: 'figma', name: 'Figma', level: '70%', project: 'KnowBeat', Icon: SiFigma, color: '#F24E1E' },
    ],
  },
  {
    title: 'Lenguajes',
    description: '',
    accent: '#FFB86C',
    items: [
      { slug: 'c', name: 'C', level: '50%', project: 'No implementado', Icon: SiC, color: '#A8B9CC' },
      { slug: 'javascript', name: 'JavaScript', level: '75%', project: 'NextRead', Icon: SiJavascript, color: '#F7DF1E' },
      { slug: 'java', name: 'Java', level: '70%', project: 'IPVision', Icon: JavaIcon, color: '#5382A1' },
      { slug: 'python', name: 'Python', level: '75%', project: 'Chat-bot', Icon: SiPython, color: '#3776AB' },
      { slug: 'csharp', name: 'C#', level: '40%', project: 'No implementado', Icon: CSharpIcon, color: '#9B62FF' },
    ],
  },
]

const WordIcon = ({ size = 24, color = '#2B579A' }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" fill={color} />
    <path d="M7 7l2.5 10L12 10l2.5 7L17 7" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ExcelIcon = ({ size = 24, color = '#217346' }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" fill={color} />
    <path d="M7 7l5 5-5 5" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 7l-5 5 5 5" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PowerPointIcon = ({ size = 24, color = '#D24726' }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" fill={color} />
    <circle cx="12" cy="12" r="5" fill="#fff" opacity="0.12" />
    <path d="M11 7h3.5a2.5 2.5 0 0 1 0 5H11v5" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const otherTechnologies = [
  { name: 'Unity', Icon: SiUnity, color: '#FFFFFF' },
  { name: 'Git', Icon: SiGit, color: '#F05033' },
  { name: 'Canva', Icon: SiCanva, color: '#00C4CC' },
  { name: 'Word', Icon: WordIcon, color: '#2B579A' },
  { name: 'Excel', Icon: ExcelIcon, color: '#217346' },
  { name: 'PowerPoint', Icon: PowerPointIcon, color: '#D24726' },
]

// Inline fallback icons for Java and C# (avoid depending on missing exports in react-icons)
const JavaIcon = ({ size = 24, color = '#5382A1' }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="4" fill={color} />
    <path d="M8 9s2-1 4-1 4 1 4 1-1 1-4 1-4-1-4-1z" fill="#fff" opacity="0.9" />
    <path d="M7.5 12.5c1.2.8 3 1 4.5 1s3.3-.2 4.5-1" stroke="#fff" strokeWidth="0.9" fill="none" strokeLinecap="round" />
  </svg>
)

const CSharpIcon = ({ size = 24, color = '#9B62FF' }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="4" fill={color} />
    <text x="50%" y="55%" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">C#</text>
  </svg>
)

function TechBadge({ item }: { item: TechItem }) {
  return (
    <SimpleTooltip
      content={
        <div>
          <strong>{item.name}</strong>
          <div className="tooltip-meta">Nivel {item.level}</div>
          <div className="tooltip-meta">Proyecto: {item.project}</div>
        </div>
      }
    >
      <motion.button
        type="button"
        className="tech-badge"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        aria-label={`${item.name} info`}
      >
        <item.Icon size={40} color="currentColor" />
      </motion.button>
    </SimpleTooltip>
  )
}

export default function TechStackSection() {
  return (
      <section className="tech-section" aria-labelledby="tech-section-title">
        <div className="section-header">
          <h2 id="tech-section-title">Tech Stack</h2>
        </div>
        <div className="tech-headline">
          <div>
            <p className="section-description"></p>
          </div>
        </div>

        <div className="tech-rows">
          {techGroups.map((group) => (
            <div key={group.title} className="tech-row">
              <div className="tech-label">
                <h3>{group.title}</h3>
                <p className="row-description">{group.description}</p>
              </div>

              <div className="tech-items">
                {group.items.map((item) => (
                  <div key={item.slug} className="tech-item">
                    <TechBadge item={item} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="tech-row">
            <div className="tech-label">
              <h3>Otras herramientas</h3>
            </div>
            <div className="tech-items">
              {otherTechnologies.map((tech) => (
                <motion.div key={tech.name} className="other-mini" whileHover={{ y: -6, scale: 1.03 }} transition={{ duration: 0.2 }}>
                  <div className="other-mini-badge">
                    <tech.Icon size={28} color="currentColor" />
                  </div>
                  <span className="other-mini-label">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        
      </section>
  )
}

