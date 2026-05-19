import type { ComponentType } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiUnity,
  SiPython,
  SiFigma,
  SiCanva,
  SiGit,
  SiGithub,
  SiStreamlit,
  SiGoogle,
} from 'react-icons/si'
import type { Certification } from '../data/certifications'

const techIconMap: Record<string, ComponentType<{ size?: number; color?: string }>> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  Unity: SiUnity,
  Python: SiPython,
  Figma: SiFigma,
  Canva: SiCanva,
  Git: SiGit,
  GitHub: SiGithub,
  Streamlit: SiStreamlit,
  Gemini: SiGoogle,
}

function techIcon(name: string) {
  return techIconMap[name] || SiGithub
}

export function CertificationModal({
  certification,
  open,
  onClose,
}: {
  certification: Certification | null
  open: boolean
  onClose: () => void
}) {
  if (!certification) return null

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="certification-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={onClose}
        >
          <motion.div
            className="certification-modal"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="certification-modal-close" type="button" onClick={onClose} aria-label="Cerrar certificación">
              ×
            </button>
            <div className="certification-modal-body">
              <div className="certification-modal-left">
                <img
                  className="certification-modal-image"
                  src={certification.image}
                  alt={certification.title}
                />
              </div>
              <div className="certification-modal-right">
                <span className="certification-meta-label">Certificación</span>
                <h2>{certification.title}</h2>
                <p className="certification-description">{certification.description}</p>
                <div className="certification-details">
                  <div>
                    <span className="certification-meta-label">Empresa</span>
                    <p>{certification.company}</p>
                  </div>
                  <div>
                    <span className="certification-meta-label">Duración</span>
                    <p>{certification.duration}</p>
                  </div>
                  {certification.id ? (
                    <div>
                      <span className="certification-meta-label">ID</span>
                      <p>{certification.id}</p>
                    </div>
                  ) : null}
                </div>

                <div>
                  <span className="certification-meta-label">Tecnologías</span>
                  <div className="certification-tech-list">
                    {certification.technologies.length > 0 ? (
                      certification.technologies.map((technology) => {
                        const Icon = techIcon(technology)
                        return (
                          <div className="certification-tech-pill" key={technology} title={technology}>
                            <Icon size={18} color="currentColor" />
                            <span>{technology}</span>
                          </div>
                        )
                      })
                    ) : (
                      <span className="certification-no-tech">Ninguna</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
