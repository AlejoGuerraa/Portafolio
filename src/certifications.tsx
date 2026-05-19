import React from 'react'
import ReactDOM from 'react-dom/client'
import CertificationsPage from './app/components/CertificationsPage'

const rootElement = document.getElementById('certifications-page-root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <CertificationsPage />
    </React.StrictMode>
  )
}
