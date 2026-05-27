import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiGithub,
  SiReact,
  SiTypescript,
  SiCss,
  SiMysql,
  SiSequelize,
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiHtml5,
  SiFigma,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from 'react-icons/si'
import { projects } from '../data/projects'
import './ProjectDetail.css'

const techIconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  TypeScript: SiTypescript,
  React: SiReact,
  CSS: SiCss,
  MySQL: SiMysql,
  Sequelize: SiSequelize,
  JavaScript: SiJavascript,
  Python: SiPython,
  Java: SiOpenjdk,
  HTML: SiHtml5,
  Figma: SiFigma,
  'Node.js': SiNodedotjs,
  MongoDB: SiMongodb,
  Express: SiExpress,
}

function getTechIcon(tech: string) {
  return techIconMap[tech] || SiReact
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    if (!toast) return
    const timeout = window.setTimeout(() => setToast(null), 2800)
    return () => window.clearTimeout(timeout)
  }, [toast])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const project = projects.find((p) => p.slug === slug)
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  if (!project) {
    return (
      <motion.main
        className="project-detail-shell"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="project-detail-loading">
          <p>Proyecto no encontrado</p>
          <button onClick={() => navigate('/')} className="back-button">
            ← Volver al portfolio
          </button>
        </div>
      </motion.main>
    )
  }

  const handleVisit = () => {
    if (project.deploy) {
      window.open(project.deploy, '_blank', 'noreferrer')
    } else {
      setToast('En desarrollo, todavía no hay una vista previa')
    }
  }

  const handleDownload = () => {
    if (project.download) {
      window.open(project.download, '_blank')
    }
  }

  const handleGitHub = () => {
    window.open(project.github, '_blank', 'noreferrer')
  }

  return (
    <motion.main
      className="project-detail-shell"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Header con botón atrás */}
      <div className="project-detail-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← Volver al portfolio
        </button>
      </div>

      {/* Contenedor principal */}
      <div className="project-detail-container">
        {/* Sección Hero */}
        <motion.section
          className="project-detail-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="project-hero-content">
            <div className="project-hero-text">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-short-description">{project.shortDescription}</p>

              {/* Tecnologías */}
              <div className="project-technologies">
                {project.technologies.map((tech) => {
                  const Icon = getTechIcon(tech)
                  return (
                    <div key={tech} className="project-tech-item" title={tech}>
                      <Icon size={20} color="currentColor" />
                      <span>{tech}</span>
                    </div>
                  )
                })}
              </div>

              {/* Botones */}
              <div className="project-actions">
                {project.download ? (
                  <button onClick={handleDownload} className="project-button primary">
                    Descargar
                  </button>
                ) : (
                  <button onClick={handleVisit} className="project-button primary">
                    Visitar
                  </button>
                )}
                <button onClick={handleGitHub} className="project-button secondary">
                  <SiGithub size={18} />
                  Repositorio
                </button>
              </div>

              {/* Metadata */}
              <div className="project-metadata">
                <div className="meta-item">
                  <span className="meta-label">Duración</span>
                  <p>{project.duration}</p>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Participantes</span>
                  <div className="participants-list">
                    {project.participants.map((participant) => (
                      <a
                        key={participant.name}
                        href={participant.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="participant-link"
                      >
                        {participant.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen destacada */}
            <motion.div
              className="project-hero-image"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="hero-image"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Carrusel de imágenes */}
        {project.images.length > 1 && (
          <motion.section
            className="project-carousel-section"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="section-title">Galería</h2>
            <div className="project-carousel">
              <div className="carousel-images">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={project.images[activeImageIndex]}
                    alt={`${project.title} - Imagen ${activeImageIndex + 1}`}
                    className="carousel-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails */}
              <div className="carousel-thumbnails">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`carousel-thumbnail ${activeImageIndex === index ? 'active' : ''}`}
                    aria-label={`Imagen ${index + 1}`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Descripción larga */}
        <motion.section
          className="project-info-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="info-grid full-width">
            <div className="info-column">
              <h2 className="section-title">Descripción</h2>
              <p className="project-description">{project.longDescription}</p>
            </div>
          </div>
        </motion.section>

        {/* Navegación entre proyectos */}
        {(previousProject || nextProject) && (
          <motion.section
            className="project-navigation"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          >
            {previousProject && (
              <button
                onClick={() => navigate(`/projects/${previousProject.slug}`)}
                className="nav-button nav-previous"
              >
                <span className="nav-label">Proyecto anterior</span>
                <span className="nav-title">{previousProject.title}</span>
                <span className="nav-arrow">←</span>
              </button>
            )}
            {nextProject && (
              <button
                onClick={() => navigate(`/projects/${nextProject.slug}`)}
                className="nav-button nav-next"
              >
                <span className="nav-label">Siguiente proyecto</span>
                <span className="nav-title">{nextProject.title}</span>
                <span className="nav-arrow">→</span>
              </button>
            )}
          </motion.section>
        )}
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast-notification"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  )
}
