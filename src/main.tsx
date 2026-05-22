import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { ContactForm } from './app/components/ContactForm'

// Mount main React App (tech / projects / certifications)
const techRootElement = document.getElementById('tech-react-root')
if (techRootElement) {
  ReactDOM.createRoot(techRootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// Mount ContactForm into the static index.html container
const contactRoot = document.getElementById('contact-form-root')
if (contactRoot) {
  ReactDOM.createRoot(contactRoot).render(
    <React.StrictMode>
      <ContactForm />
    </React.StrictMode>
  )
}

