import { HashRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import TechStackSection from './components/TechStackSection'
import ProjectsSection from './components/ProjectsSection'
import ProjectDetail from './components/ProjectDetail'
import CertificationsSection from './components/CertificationsSection'
import CertificationsPage from './components/CertificationsPage'
import CertificationDetail from './components/CertificationDetail'

function HomePage() {
  return (
    <div>
      <div className="size-full flex items-center justify-center">
        <TechStackSection />
      </div>
      <div id="projects-react-root">
        <ProjectsSection />
      </div>
      <div id="certifications-react-root">
        <CertificationsSection />
      </div>
    </div>
  )
}

export default function App() {
  window.__AppRendered = true

  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/certifications/:slug" element={<CertificationDetail />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  )
}