import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'
import './Certifications.css'

export default function CertificationsPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.main
      className="certifications-page-shell"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="certifications-page-header">
        <div>
          <p className="section-label">Certificaciones</p>
          <h1>Todo el archivo de certificaciones</h1>
          <p className="section-description">
            Cada certificado con el mismo estilo refinado de la sección principal. Navega, explora y abre cualquiera para ver los detalles.
          </p>
        </div>
        <button
          type="button"
          className="certifications-view-all certifications-back-link"
          onClick={() => navigate('/')}
        >
          Volver al portfolio
        </button>
      </div>

      <div className="certifications-page-grid">
        {certifications.map((certification) => (
          <motion.button
            key={certification.slug}
            type="button"
            className="cert-page-card"
            onClick={() => navigate(`/certifications/${certification.slug}`)}
            aria-label={`Ver detalles de ${certification.title}`}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <img className="cert-page-image" src={certification.image} alt={certification.title} />
            <div className="cert-page-body">
              <p className="cert-page-company">{certification.company}</p>
              <h3>{certification.title}</h3>
              <p className="cert-page-duration">{certification.duration}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.main>
  )
}
