import React from 'react'
import './wedding-footer.css'
import { Link } from 'react-router-dom'

function WeddingFooter({ setMoreVisible }) {
  const relative_path = window.location.pathname

  return (
    <footer className="relative wedding-footer justify-center justify-evenly mt-4 sm:mt-0 sm:gap-[0] sm:justify-between flex pb-8">
      {relative_path === '/wedding' ? (
        <Link to="/services">Services</Link>
      ) : (
        <Link to="/wedding">Wedding</Link>
      )}
      {relative_path === '/wedding' || relative_path === '/services' ? (
        <Link to="/gallery">Gallery</Link>
      ) : (
        <Link to="/services">Services</Link>
      )}
      <p
        className="discover-more-text font-semibold absolute sm:font-normal sm:relative"
        onClick={() => setMoreVisible(true)}
      >
        Discover More +
      </p>
      {relative_path === '/wedding' ||
      relative_path === '/services' ||
      relative_path === '/gallery' ? (
        <Link to="/outdoor">Outdoor</Link>
      ) : (
        <Link to="/gallery">Gallery</Link>
      )}
      {relative_path === '/videos' ? (
        <Link to="/outdoor">Outdoor</Link>
      ) : (
        <Link to="/videos">Videos</Link>
      )}
    </footer>
  )
}
export default WeddingFooter
