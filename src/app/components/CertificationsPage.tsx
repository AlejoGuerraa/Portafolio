import { useState } from 'react'
import { certifications } from '../data/certifications'
import { CertificationModal } from './CertificationModal'
import './Certifications.css'

export default function CertificationsPage() {
  const [activeCertification, setActiveCertification] = useState<
    (typeof certifications)[number] | null
  >(null)

  return (
    <main className="certifications-page-shell">
      <div className="certifications-page-header">
        <div>
          <p className="section-label">Certificaciones</p>
          <h1>Todo el archivo de certificaciones</h1>
          <p className="section-description">
            Cada certificado con el mismo estilo refinado de la sección principal. Navega, explora y abre cualquiera para ver los detalles.
          </p>
        </div>
        <a className="certifications-view-all certifications-back-link" href="./">
          Volver al portfolio
        </a>
      </div>

      <div className="certifications-page-grid">
        {certifications.map((certification) => (
          <button
            key={certification.slug}
            type="button"
            className="cert-page-card"
            onClick={() => setActiveCertification(certification)}
            aria-label={`Ver detalles de ${certification.title}`}
          >
            <img className="cert-page-image" src={certification.image} alt={certification.title} />
            <div className="cert-page-body">
              <p className="cert-page-company">{certification.company}</p>
              <h3>{certification.title}</h3>
              <p className="cert-page-duration">{certification.duration}</p>
            </div>
          </button>
        ))}
      </div>

      <CertificationModal
        certification={activeCertification}
        open={Boolean(activeCertification)}
        onClose={() => setActiveCertification(null)}
      />
    </main>
  )
}
