import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import SamplePhoto from '../../utilities/sidebar-image.png'
import './testimonials.css'

function Testimonials() {
  return (
    <main className="testimonials-container mx-auto">
      <article className="px-4 md:px-0 col-start-1 col-end-2">
        <h1 className="text-[48px] lg:text-[60px] font-semibold">
          Who they say?
        </h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis
        </p>
      </article>

      <div className="testimonial flex flex-col sm:flex-row gap-8">
        <IoIosArrowBack className="hidden sm:inline shrink-0 text-xl hover:text-gray-400" />
        <img
          className="self-start m-auto max-w-[19rem] sm:max-w-[13rem] lg:max-w-[17rem] object-cover aspect-video sm:aspect-square"
          src={SamplePhoto}
          alt=""
        />
        {/* this div will take affect only in small screens because only in the small screens will beg the arrows visible */}
        <div className="flex gap-6">
          <IoIosArrowBack className="inline sm:hidden shrink-0 text-xl hover:text-gray-400" />
          <div className="flex flex-col gap-2 justify-center">
            {/* these arrows will appear in the mobile view */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing lit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis
            </p>
            <h3 className="font-semibold">Ramya</h3>
          </div>
          <IoIosArrowForward className="inline sm:hidden shrink-0 text-xl hover:text-gray-400" />
        </div>
        {/* these arrows will disappear in mobile view */}
        <IoIosArrowForward className="hidden sm:inline shrink-0 text-xl hover:text-gray-400" />
      </div>
    </main>
  )
}
export default Testimonials
