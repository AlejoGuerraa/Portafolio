import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
import './ProjectsSection.css'

interface Participant {
  name: string
  github: string
}

interface ProjectItem {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  technologies: string[]
  participants: Participant[]
  duration: string
  github: string
  deploy?: string
  images: string[]
  download?: string
}

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

const projects: ProjectItem[] = [
  {
    slug: 'aquanova',
    title: 'Aquanova',
    shortDescription: 'Página web para catálogo de domotización y construcción de piletas.',
    longDescription:
      'Página web hecha con React que muestra el servicio y catálogo de Aquanova, una marca que realiza presupuestos y construcciones de piletas, así como su refaccionamiento y domotización.',
    technologies: ['TypeScript', 'React', 'Figma', 'CSS'],
    participants: [
      { name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' },
      { name: 'Santino Martinez', github: 'https://github.com/Santino7537' },
    ],
    duration: 'Mayo - Junio (2026)',
    github: 'https://github.com/AlejoGuerraa/Aquanova',
    deploy: 'https://aquanova-three.vercel.app',
    images: ['/assets/images/proyectos/Aquanova/Portada.jpeg'],
  },
  {
    slug: 'campuscore',
    title: 'CampuScore',
    shortDescription: 'Gestión académica con un sistema de conejos como recompensas.',
    longDescription:
      'CampuScore es una plataforma académica que permite administrar alumnos, materias y calificaciones, incluyendo rankings, estadísticas y alertas automáticas. Como elemento distintivo, el proyecto añade un sistema experimental de conejos virtuales y logros basado en el desempeño de cada estudiante.',
    technologies: ['React', 'CSS', 'MySQL', 'Express', 'Sequelize', 'JavaScript'],
    participants: [{ name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' }],
    duration: 'Octubre - Diciembre (2025)',
    github: 'https://github.com/AlejoGuerraa/CampuScore',
    deploy: 'https://campuscore-gilt.vercel.app/',
    images: ['/assets/images/proyectos/CampuScore/Portada.png'],
  },
  {
    slug: 'chatbot',
    title: 'Chatbot',
    shortDescription:
      'Asistente virtual interactivo para explorar interfaces conversacionales de aprendizaje.',
    longDescription:
      'Chatbot web diseñado para responder de manera interactiva a distintos mensajes del usuario. Fue desarrollado con fines educativos dentro de Talento Tech, priorizando una estructura simple, clara y fácil de desplegar para explorar el funcionamiento de asistentes virtuales.',
    technologies: ['Python'],
    participants: [{ name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' }],
    duration: 'Marzo - Julio (2025)',
    github: 'https://github.com/AlejoGuerraa/Chat-bot',
    images: ['/assets/images/proyectos/Chatbot/Portada.png'],
  },
  {
    slug: 'ipvision',
    title: 'IPVision',
    shortDescription:
      'Scanner de IPs y análisis de conexiones para monitoreo de redes y exportación de resultados.',
    longDescription:
      'Proyecto orientado al monitoreo y análisis de redes, combinando un scanner de IPs con un módulo similar a Netstat para visualizar conexiones activas, puertos, protocolos y procesos asociados. Incluye filtros, estadísticas y exportación de resultados.',
    technologies: ['Java'],
    participants: [{ name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' }],
    duration: 'Julio - Agosto (2025)',
    github: 'https://github.com/AlejoGuerraa/IPVision',
    download: '/assets/ejecutables/IPVision.jar',
    images: ['/assets/images/proyectos/IPVision/Portada.png', '/assets/images/proyectos/IPVision/Inicio 1.JPG', '/assets/images/proyectos/IPVision/Resultados 1.JPG'],
  },
  {
    slug: 'knowbeat',
    title: 'KnowBeat',
    shortDescription:
      'Plataforma social musical con clases, ejercicios y comunidad de aprendizaje.',
    longDescription:
      'Sitio web educativo y social enfocado en la enseñanza musical, permitiendo a los usuarios aprender teoría y práctica mediante clases guiadas, ejercicios personalizados y seguimiento de progreso. Además, incorpora funciones de red social como publicaciones, mensajería, grupos y sistema de interacción entre usuarios para fomentar el aprendizaje colaborativo.',
    technologies: ['React', 'MongoDB', 'MySQL', 'JavaScript', 'Express', 'Figma'],
    participants: [
      { name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' },
      { name: 'Renata Gallucci', github: 'https://github.com/Renaaa189' },
      { name: 'Santino Martinez', github: 'https://github.com/Santino7537' },
      { name: 'Esteban Gonzalez', github: 'https://github.com/EstebanGonzalez20' },
    ],
    duration: 'Abril - En proceso (2026)',
    github: 'https://github.com/Santino7537/Knowbeat',
    images: ['/assets/images/proyectos/KnowBeat/Portada.png'],
  },
  {
    slug: 'nextread',
    title: 'NextRead',
    shortDescription:
      'Red social para lectores con recomendaciones, reseñas y comunidad activa.',
    longDescription:
      'Red social enfocada en la lectura, donde los usuarios pueden explorar libros, crear reseñas, organizar listas personalizadas y seguir a otros lectores. La plataforma incorpora notificaciones en tiempo real, perfiles personalizables y elementos de gamificación para generar una experiencia más dinámica e interactiva alrededor de los libros.',
    technologies: ['CSS', 'React', 'JavaScript', 'MySQL', 'Node.js', 'Express'],
    participants: [
      { name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' },
      { name: 'Renata Gallucci', github: 'https://github.com/Renaaa189' },
      { name: 'Carolina Mendez', github: 'https://github.com/caroMendezz' },
      { name: 'Sofia Power', github: 'https://github.com/Sofipow-007' },
      { name: 'Agustin Rivera', github: 'https://github.com/AgustinR55' },
    ],
    duration: 'Julio - Noviembre (2026)',
    github: 'https://github.com/AlejoGuerraa/nextRead',
    images: ['/assets/images/proyectos/NextRead/Portada.png'],
  },
  {
    slug: 'tubuffet',
    title: 'TuBuffet',
    shortDescription:
      'Aplicación escolar para pedidos anticipados, reduciendo filas y mejorando la gestión.',
    longDescription:
      'Esta propuesta busca mejorar la organización de los comercios gastronómicos escolares mediante una plataforma de pedidos digitales. El sistema permite a los usuarios realizar compras desde el celular, mientras que padres y administradores pueden controlar gastos, pedidos, stock y ventas en tiempo real.',
    technologies: ['React', 'React Native', 'SQL', 'JavaScript', 'Figma', 'Express'],
    participants: [
      { name: 'Alejo Guerra', github: 'https://github.com/AlejoGuerraa' },
      { name: 'Renata Gallucci', github: 'https://github.com/Renaaa189' },
    ],
    duration: 'Abril - En proceso (2026)',
    github: 'https://github.com/Renaaa189/TuBuffet',
    images: ['/assets/images/proyectos/TuBuffet/Portada.png'],
  },
]

function getTechIcon(tech: string) {
  return techIconMap[tech] || SiReact
}

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null)
  const [activeImage, setActiveImage] = useState(0)
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    if (!toast) return
    const timeout = window.setTimeout(() => setToast(null), 2800)
    return () => window.clearTimeout(timeout)
  }, [toast])

  const openModal = (project: ProjectItem) => {
    setActiveProject(project)
    setActiveImage(0)
  }

  const closeModal = () => {
    setActiveProject(null)
    setActiveImage(0)
  }

  const notify = (message: string) => {
    setToast(message)
  }

  const handleVisit = (project: ProjectItem) => {
    if (project.deploy) {
      window.open(project.deploy, '_blank', 'noreferrer')
      return
    }

    if (project.download) {
      window.location.href = project.download
      return
    }

    notify('En desarrollo, todavía no hay una vista previa')
  }

  const changeImage = (direction: 'next' | 'prev') => {
    if (!activeProject) return
    const count = activeProject.images.length
    setActiveImage((current) => {
      if (direction === 'next') return (current + 1) % count
      return (current - 1 + count) % count
    })
  }

  return (
    <div className="projects-shell">
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            className="project-card"
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <button type="button" className="project-preview" onClick={() => openModal(project)}>
              <img src={project.images[0]} alt={`${project.title} portada`} />
            </button>
            <div className="project-content">
              <div>
                <p className="project-label">Proyecto destacado</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
              </div>

              <div className="project-actions">
                {project.download ? (
                  <a className="project-button" href={project.download} download>
                    Descargar
                  </a>
                ) : (
                  <button type="button" className="project-button" onClick={() => handleVisit(project)}>
                    Visitar
                  </button>
                )}
                <a className="project-icon-button" href={project.github} target="_blank" rel="noreferrer">
                  <SiGithub size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal} aria-label="Cerrar modal">
                ×
              </button>
              <div className="modal-body">
                <div className="modal-left">
                  <div className="modal-gallery">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeProject.images[activeImage]}
                        src={activeProject.images[activeImage]}
                        alt={`${activeProject.title} vista ${activeImage + 1}`}
                        className="modal-image"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.24, ease: 'easeOut' }}
                      />
                    </AnimatePresence>
                  </div>
                  {activeProject.images.length > 1 && (
                    <div className="gallery-controls">
                      <button type="button" onClick={() => changeImage('prev')} aria-label="Imagen anterior">
                        ‹
                      </button>
                      <span>{`${activeImage + 1} / ${activeProject.images.length}`}</span>
                      <button type="button" onClick={() => changeImage('next')} aria-label="Imagen siguiente">
                        ›
                      </button>
                    </div>
                  )}
                </div>

                <div className="modal-right">
                  <p className="project-label">Ficha del proyecto</p>
                  <h2>{activeProject.title}</h2>
                  <p className="modal-description">{activeProject.longDescription}</p>

                  <div className="modal-meta">
                    <div>
                      <span className="meta-label">Duración</span>
                      <p>{activeProject.duration}</p>
                    </div>
                    <div>
                      <span className="meta-label">Participantes</span>
                      <div className="project-participants">
                        {activeProject.participants.map((member) => (
                          <a
                            key={member.github}
                            href={member.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-participant"
                          >
                            {member.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="modal-tech">
                    {activeProject.technologies.map((tech) => {
                      const Icon = getTechIcon(tech)
                      return (
                        <div key={tech} className="tech-chip" title={tech}>
                          <Icon size={22} color="currentColor" />
                        </div>
                      )
                    })}
                  </div>

                  <div className="modal-actions">
                    {activeProject.download ? (
                      <a className="project-button" href={activeProject.download} download>
                        Descargar
                      </a>
                    ) : (
                      <button type="button" className="project-button" onClick={() => handleVisit(activeProject)}>
                        Visitar
                      </button>
                    )}
                    <a className="project-icon-button project-icon-button-large" href={activeProject.github} target="_blank" rel="noreferrer">
                      <SiGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="project-toast"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
