import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
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
import { certifications } from '../data/certifications'
import './Certifications.css'

const techIconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
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

function getTechIcon(tech: string) {
  return techIconMap[tech] || SiGithub
}

export default function CertificationDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [certification] = useState<Certification | null>(
    certifications.find((c) => c.slug === slug) || null
  )

  if (!certification) {
    return (
      <motion.div
        className="certification-detail-shell"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="certification-detail-loading">
          <p>Certificación no encontrada</p>
          <button onClick={() => navigate('/')} className="back-button">
            ← Volver
          </button>
        </div>
      </motion.div>
    )
  }

  const allCerts = certifications
  const currentCertIndex = allCerts.findIndex((c) => c.slug === slug)
  const previousCert = currentCertIndex > 0 ? allCerts[currentCertIndex - 1] : null
  const nextCert = currentCertIndex < allCerts.length - 1 ? allCerts[currentCertIndex + 1] : null

  return (
    <motion.main
      className="certification-detail-shell"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="certification-detail-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← Volver al portfolio
        </button>
      </div>

      <div className="certification-detail-container">
        <motion.div
          className="certification-detail-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="certification-detail-image-wrapper">
            <img src={certification.image} alt={certification.title} className="certification-detail-image" />
          </div>
        </motion.div>

        <motion.div
          className="certification-detail-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          <span className="certification-meta-label">Certificación</span>
          <h1 className="certification-detail-title">{certification.title}</h1>

          <div className="certification-detail-meta">
            <div className="meta-block">
              <span className="certification-meta-label">Institución</span>
              <p className="meta-value">{certification.company}</p>
            </div>
            <div className="meta-block">
              <span className="certification-meta-label">Duración</span>
              <p className="meta-value">{certification.duration}</p>
            </div>
            {certification.id && (
              <div className="meta-block">
                <span className="certification-meta-label">ID de Certificación</span>
                <p className="meta-value">{certification.id}</p>
              </div>
            )}
          </div>

          <div className="certification-detail-description">
            <span className="certification-meta-label">Descripción</span>
            <p>{certification.description}</p>
          </div>

          {certification.technologies.length > 0 && (
            <div className="certification-detail-tech">
              <span className="certification-meta-label">Tecnologías</span>
              <div className="certification-tech-list">
                {certification.technologies.map((tech) => {
                  const Icon = getTechIcon(tech)
                  return (
                    <motion.div
                      key={tech}
                      className="certification-tech-pill"
                      title={tech}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={20} color="currentColor" />
                      <span>{tech}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}

          <div className="certification-detail-navigation">
            {previousCert && (
              <button
                onClick={() => navigate(`/certifications/${previousCert.slug}`)}
                className="nav-button nav-button-prev"
              >
                ← {previousCert.title}
              </button>
            )}
            {nextCert && (
              <button
                onClick={() => navigate(`/certifications/${nextCert.slug}`)}
                className="nav-button nav-button-next"
              >
                {nextCert.title} →
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}
