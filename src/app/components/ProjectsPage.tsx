import { useNavigate } from 'react-router-dom'
import ProjectsSection from './ProjectsSection'

export default function ProjectsPage() {
  const navigate = useNavigate()

  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-header">
          <p className="section-label">Proyectos</p>
          <h1>Todos los proyectos</h1>
          <p className="section-description">
            Revisa cada proyecto en una página dedicada y vuelve al portfolio cuando quieras.
          </p>
        </div>
        <button type="button" className="button button-secondary" onClick={() => navigate('/')}>
          Volver al portfolio
        </button>
      </section>

      <ProjectsSection />
    </main>
  )
}
