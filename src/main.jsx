import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Links from './components/Links-container.jsx'



createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/links" element={<Links />} />
    </Routes>
  </BrowserRouter>
)
