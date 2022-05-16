import React from 'react'
import './homebigbutton.css'
import { Link } from 'react-router-dom'

function HomeBigButton() {
  return (
    <Link to="/wedding" className="homebigbutton text-center">
      Click to enter into the beautiful world of photography
    </Link>
  )
}
export default HomeBigButton
