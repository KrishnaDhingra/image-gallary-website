import React, { useState, useEffect } from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import Enter from './components/enter/Enter'
import Navbar from './components/navbar/Navbar'
import WhatHappeningSidePopup from './components/what-happening-sidepopup/what-happening-sidepopup'
import Home from './pages/home'
import FAQ from './components/faq/faq'
import Wedding from './pages/wedding'
import Services from './pages/services'
import Gallery from './pages/gallery'
import Outdoor from './pages/outdoor'
import Blog from './components/blog/blog'
import Pricing from './components/pricing/pricing'
import Footer from './components/footer/footer'
import AboutUs from './pages/aboutUs'
import Videos from './pages/videos'
import Careers from './components/careers/careers'
import GetInTouchChennai from './pages/get-in-touch-chennai'
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
          <Enter key="enter-animation" />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enter" element={<Enter />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/careers" element={<Careers />} />
            <Route
              path="/get-in-touch-chennai"
              element={<GetInTouchChennai />}
            />
          </Routes>
        )}
      </AnimatePresence>

      <Footer />
    </BrowserRouter>
  )
}

export default App
