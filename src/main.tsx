import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import ProjectsSection from './app/components/ProjectsSection'
import CertificationsSection from './app/components/CertificationsSection'

const techRootElement = document.getElementById('tech-react-root')
const projectsRootElement = document.getElementById('projects-react-root')
const certificationsRootElement = document.getElementById('certifications-react-root')
;(window as any).__TechStackMainExecuted = true

if (techRootElement) {
  ReactDOM.createRoot(techRootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  ;(window as any).__TechStackMounted = true
}

if (projectsRootElement) {
  ReactDOM.createRoot(projectsRootElement).render(
    <React.StrictMode>
      <ProjectsSection />
    </React.StrictMode>
  )
  ;(window as any).__ProjectsSectionMounted = true
}

if (certificationsRootElement) {
  ReactDOM.createRoot(certificationsRootElement).render(
    <React.StrictMode>
      <CertificationsSection />
    </React.StrictMode>
  )
  ;(window as any).__CertificationsSectionMounted = true
}
