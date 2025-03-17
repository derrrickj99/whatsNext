import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterComponent from './RouterComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterComponent>
    </RouterComponent>
  </StrictMode>,
)
