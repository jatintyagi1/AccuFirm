import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import Apps from './app/index.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps />
  </StrictMode>,
)
