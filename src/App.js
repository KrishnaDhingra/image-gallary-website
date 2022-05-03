import './App.css'
import Enter from './components/enter/Enter'
import Navbar from './components/navbar/Navbar'
import WhatHappeningSidePopup from './components/what-happening-sidepopup/what-happening-sidepopup'
import Home from './pages/home'
import FAQ from './components/faq/faq'
import Wedding from './pages/wedding'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/wedding" element={<Wedding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
