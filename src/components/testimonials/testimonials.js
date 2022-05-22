import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Testimonialdata } from './data.js'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import SamplePhoto from '../../utilities/sidebar-image.png'
import './testimonials.css'

function Testimonials() {
  const [testimonialCounter, setTestimonialCounter] = useState(0)

  const data = Testimonialdata

  const next = () => {
    if (testimonialCounter !== data.length - 1) {
      setTestimonialCounter(testimonialCounter + 1)
      return
    }
    setTestimonialCounter(0)
  }
  const previous = () => {
    if (testimonialCounter !== 0) {
      setTestimonialCounter(testimonialCounter - 1)
      return
    }
    setTestimonialCounter(data.length - 1)
  }
  return (
    <main className="testimonials-container mx-auto">
      <article className="px-4 md:px-0 col-start-1 col-end-2">
        <h1 className="text-[48px] lg:text-[60px] font-semibold">
          What they say?
        </h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis
        </p>
      </article>

      <div className="w-full overflow-hidden testimonial flex flex-col sm:flex-row gap-8">
        <Testimonial
          next={next}
          previous={previous}
          image={data[testimonialCounter].image}
          text={data[testimonialCounter].text}
          fromUser={data[testimonialCounter].fromUser}
        />
      </div>
    </main>
  )
}

function Testimonial({ image, text, fromUser, next, previous }) {
  return (
    <>
      <IoIosArrowBack
        onClick={previous}
        className="hidden sm:inline shrink-0 text-xl hover:text-gray-400"
      />
      <img
        className="self-start m-auto max-h-[19rem] max-w-[19rem] sm:max-w-[13rem] lg:max-w-[17rem] object-cover aspect-video sm:aspect-square"
        src={image}
        alt=""
      />
      {/* this div will take affect only in small screens because only in the small screens will beg the arrows visible */}
      <div className="flex gap-6">
        <IoIosArrowBack
          onClick={previous}
          className="inline sm:hidden shrink-0 text-xl hover:text-gray-400"
        />
        <div className="flex flex-col gap-2 justify-center">
          {/* these arrows will appear in the mobile view */}
          <p>{text}</p>
          <h3 className="font-semibold">{fromUser}</h3>
        </div>
        <IoIosArrowForward
          onClick={next}
          className="inline sm:hidden shrink-0 text-xl hover:text-gray-400"
        />
      </div>
      {/* these arrows will disappear in mobile view */}
      <IoIosArrowForward
        onClick={next}
        className="hidden sm:inline shrink-0 text-xl hover:text-gray-400"
      />
    </>
  )
}
export default Testimonials
