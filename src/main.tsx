import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'

const rootElement = document.getElementById('tech-react-root')
;(window as any).__TechStackMainExecuted = true

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  ;(window as any).__TechStackMounted = true
}
