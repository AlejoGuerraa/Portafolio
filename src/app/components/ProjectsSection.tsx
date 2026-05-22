import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { SiGithub } from 'react-icons/si'
import { projects } from '../data/projects'
import './ProjectsSection.css'

export default function ProjectsSection() {
  const navigate = useNavigate()

  return (
    <div className="projects-shell">
      <div className="section-header">
        <p className="section-label">Mis proyectos</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            className="project-card"
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <button
              type="button"
              className="project-preview"
              onClick={() => navigate(`/projects/${project.slug}`)}
              aria-label={`Ver detalles de ${project.title}`}
            >
              <img src={project.images[0]} alt={`${project.title} portada`} />
            </button>
            <div className="project-content">
              <div>
                {['nextread', 'ipvision', 'tubuffet', 'knowbeat'].includes(project.slug) && (
                  <p className="project-label">Proyecto destacado</p>
                )}
                <h3>{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
              </div>

              <div className="project-actions">
                <button
                  type="button"
                  className="project-button"
                  onClick={() => navigate(`/projects/${project.slug}`)}
                >
                  Visitar
                </button>
                <a
                  className="project-icon-button"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub del proyecto"
                >
                  <SiGithub size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
