import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import ProjectsSection from './app/components/ProjectsSection'

const techRootElement = document.getElementById('tech-react-root')
const projectsRootElement = document.getElementById('projects-react-root')
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
