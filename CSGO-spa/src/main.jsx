import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './app.css'
import './styles/layout.css'
import './styles/typography.css'
import './styles/components.css'
import './styles/nav.css'
import './styles/pages.css'

createRoot(document.getElementById('root')).render(
  <App />
)