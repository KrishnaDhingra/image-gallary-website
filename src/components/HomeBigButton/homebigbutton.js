import React from 'react'
import './homebigbutton.css'
import { Link } from 'react-router-dom'

function HomeBigButton() {
  return (
    <Link to="/wedding">
      <button className="homebigbutton">
        Click to enter into the beautiful world of photography
      </button>
    </Link>
  )
}
export default HomeBigButton
