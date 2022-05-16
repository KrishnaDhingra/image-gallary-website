import React from 'react'
import './get-in-touch.css'
import GetInTouchImage from '../../utilities/pricing-big-image2.png'

function GetInTouch() {
  return (
    <section className="get-in-touch-container flex flex-col gap-12">
      <h1 className="get-in-touch-heading text-center">Careers</h1>
      <div className="main-content">
        <div>
          <h1 className="font-semibold mb-4">Wedding Photographer</h1>
          <p>
            Are you an experienced wedding photographer looking to move to the
            next level in the wedding photography industry? We invite you to
            join our studio to be a part of a larger goal; focus on your
            photography without the hassles of being an independent
            professional. Grow, learn and be inspired while working in the
            company of people who are as passionate about photography as you
            are; be a part of weddings that inspire you to create stories.
          </p>
        </div>

        <img
          className="w-full object-cover aspect-video rounded-2xl"
          src={GetInTouchImage}
          alt="Careers Photo"
        />
      </div>
    </section>
  )
}
export default GetInTouch
