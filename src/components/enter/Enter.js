import React from 'react'
import './Enter.css'
import OoakImage from '../../utilities/ooak-image.svg'

function Enter() {
  return (
    <main className="absolute top-0 left-0 z-[1000] min-h-screen w-screen enter-main bg-[#0e1630] flex justify-center items-center">
      <section className="enter-content">
        <div className="right"></div>
        <div className="left"></div>
        <div className="top"></div>
        <div className="bottom"></div>
        <img src={OoakImage} alt="Ooak Image" />
      </section>
    </main>
  )
}
export default Enter
