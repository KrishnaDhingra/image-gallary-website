import React from 'react'
import './wedding-footer.css'
import { Link } from 'react-router-dom'

function WeddingFooter({ setMoreVisible }) {
  return (
    <footer className="wedding-footer hidden sm:flex pb-8">
      <Link to="/services">Services</Link>
      <Link to="/gallery">Gallery</Link>
      <a onClick={() => setMoreVisible(true)}>Discover More +</a>
      <Link to="/outdoor">Outdoor</Link>
      <Link to="/services">Videos</Link>
    </footer>
  )
}
export default WeddingFooter
