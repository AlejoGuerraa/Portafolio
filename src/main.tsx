import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { ContactForm } from './app/components/ContactForm'

// Mount main React App (tech / projects / certifications)
const appRootElement = document.getElementById('app-root')
if (appRootElement) {
  console.log('[main] mounting App into #app-root', { found: !!appRootElement })
  ReactDOM.createRoot(appRootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// Mount ContactForm into the static index.html container
const contactRoot = document.getElementById('contact-form-root')
if (contactRoot) {
  console.log('[main] mounting ContactForm into #contact-form-root', { found: !!contactRoot })
  ReactDOM.createRoot(contactRoot).render(
    <React.StrictMode>
      <ContactForm />
    </React.StrictMode>
  )
}

