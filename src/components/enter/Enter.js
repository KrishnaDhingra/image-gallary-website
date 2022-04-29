import React from 'react'
import './Enter.css'
import OoakImage from '../../utilities/ooak-image.svg'

function Enter() {
  return (
    <main className="min-h-screen w-screen enter-main bg-[#0e1630] flex justify-center items-center">
      <section className="enter-content">
        <img src={OoakImage} alt="Ooak Image" />
      </section>
    </main>
  )
}
export default Enter
