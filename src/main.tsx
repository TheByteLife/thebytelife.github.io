import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@picocss/pico/css/pico.red.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
