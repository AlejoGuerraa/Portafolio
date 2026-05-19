import { useMemo, useState } from 'react'
import { certifications } from '../data/certifications'
import { CertificationModal } from './CertificationModal'
import './Certifications.css'

export default function CertificationsSection() {
  const [activeCertification, setActiveCertification] = useState<
    (typeof certifications)[number] | null
  >(null)
  const [isPaused, setIsPaused] = useState(false)

  const trackItems = useMemo(() => [...certifications, ...certifications], [])

  return (
    <section className="certifications-shell" aria-labelledby="certifications-heading">
      <div className="certifications-header">
        <div>
          <p className="section-label">Certificaciones</p>
          <h2 id="certifications-heading">Reconocimientos recientes</h2>
        </div>
        <a className="certifications-view-all" href="./certificaciones.html">
          Ver todo
        </a>
      </div>

      <div
        className="certifications-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="certifications-track" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {trackItems.map((certification, index) => (
            <button
              key={`${certification.slug}-${index}`}
              type="button"
              className="cert-card"
              onClick={() => setActiveCertification(certification)}
              aria-label={`Abrir ${certification.title}`}
            >
              <img className="cert-card-image" src={certification.image} alt={`${certification.title} certificado`} />
              <div className="cert-card-content">
                <h3>{certification.title}</h3>
                <p>{certification.company}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <CertificationModal
        certification={activeCertification}
        open={Boolean(activeCertification)}
        onClose={() => setActiveCertification(null)}
      />
    </section>
  )
}
