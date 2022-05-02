import './App.css'
import Enter from './components/enter/Enter'
import Navbar from './components/navbar/Navbar'
import WhatHappeningSidePopup from './components/what-happening-sidepopup/what-happening-sidepopup'
import Home from './pages/home'
import FAQ from './components/faq/faq'
import Wedding from './pages/wedding'
function App() {
  return (
    // <Enter />
    <div>
      <Navbar />
      {/* <FAQ /> */}
      <Home />
      {/* <Wedding /> */}
    </div>
  )
}

export default App
