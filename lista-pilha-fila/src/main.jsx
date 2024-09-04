import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Fila } from './components/fila'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fila />
  </StrictMode>,
)
