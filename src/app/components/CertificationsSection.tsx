import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { certifications } from '../data/certifications'
import './Certifications.css'

export default function CertificationsSection() {
  const navigate = useNavigate()
  const trackItems = useMemo(() => [...certifications, ...certifications], [])

  return (
    <section className="certifications-shell" aria-labelledby="certifications-heading">
      <div className="certifications-header">
        <div>
          <p className="section-label">Certificaciones</p>
          <h2 id="certifications-heading">Reconocimientos recientes</h2>
        </div>
        <button
          type="button"
          className="certifications-view-all"
          onClick={() => navigate('/certifications')}
        >
          Ver todo
        </button>
      </div>

      <div className="certifications-carousel">
        <div className="certifications-track">
          {trackItems.map((certification, index) => (
            <button
              key={`${certification.slug}-${index}`}
              type="button"
              className="cert-card"
              onClick={() => navigate(`/certifications/${certification.slug}`)}
              aria-label={`Ver detalles de ${certification.title}`}
            >
              <img
                className="cert-card-image"
                src={certification.image}
                alt={`${certification.title} certificado`}
              />
              <div className="cert-card-content">
                <h3>{certification.title}</h3>
                <p>{certification.company}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
