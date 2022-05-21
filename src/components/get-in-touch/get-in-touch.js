import React from 'react'
import './get-in-touch.css'
import GetInTouchImage from '../../utilities/pricing-big-image2.png'
import { BsMailbox2 } from 'react-icons/bs'
import { IoMailOpen } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'

function GetInTouch() {
  return (
    <section className="get-in-touch-container flex flex-col gap-12">
      <h1 className="get-in-touch-heading text-center">Get In Touch</h1>
      <div className="main-content px-8 md:px-0">
        <div>
          <h1 className="text-[24px] md:text[36px] one-of-a-kind-heading font-semibold mb-4">
            One of a kind Photography
          </h1>
          <p>
            We have worls-class, flexible support via live chat, email and hone.
            We guarantee that you’ll be able to have any issue resolved within
            24 hours.
          </p>
          <div className="social-info-container flex flex-col gap-6 text-md mt-7">
            <a href="#" className="flex gap-4 items-center">
              <BsMailbox2 />
              <span>Banaswadi, Bangalore - 560033</span>
            </a>
            <a href="#" className="flex gap-4 items-center">
              <IoMailOpen />
              <span>vikas@ooak.photography</span>
            </a>
            <a href="#" className="flex gap-4 items-center">
              <BsFillTelephoneFill />
              <span>+91 9677362524</span>
            </a>
          </div>
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
