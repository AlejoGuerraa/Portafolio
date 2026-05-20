import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'

const techRootElement = document.getElementById('tech-react-root')

if (techRootElement) {
  ReactDOM.createRoot(techRootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

