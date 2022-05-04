import React, { useState, useEffect } from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import Enter from './components/enter/Enter'
import Navbar from './components/navbar/Navbar'
import WhatHappeningSidePopup from './components/what-happening-sidepopup/what-happening-sidepopup'
import Home from './pages/home'
import FAQ from './components/faq/faq'
import Wedding from './pages/wedding'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatePresence>
        {loading ? (
          <Enter />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enter" element={<Enter />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/wedding" element={<Wedding />} />
          </Routes>
        )}
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
