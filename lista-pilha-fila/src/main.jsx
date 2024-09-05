import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Fila } from './components/fila'
import { Pilha } from './components/pilha'
import './components/style/styledGlobal.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='main'>
    <Fila />
    <Pilha />
    </div>
  </StrictMode>,
)
