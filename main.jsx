import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import  CeramicsContextProvider  from './Context/CeramicsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CeramicsContextProvider>
    <App />
    </CeramicsContextProvider>
    </BrowserRouter>
   
  </StrictMode>,
)
