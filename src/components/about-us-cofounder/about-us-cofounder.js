import React from 'react'
import './about-us-cofounder.css'
import AboutUsCoFounderImage from '../../utilities/pricing-big-image2.png'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

function AboutUsCoFounder({ heading, text }) {
  return (
    <section className="aboutus-cofounder-container rounded-3xl md:rounded-t-3xl">
      <div className="inner-container flex flex-col gap-[3rem]">
        <h1 className="text-[24px] text-center md:text-left md:text-[36px] font-semibold">
          {heading}
        </h1>
        <div className="inner-container-content px-8 md:px-0">
          <div className="flex flex-col gap-8 items-center">
            <div className="bg-white h-[170px] w-[170px] rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={AboutUsCoFounderImage}
                alt=""
              />
            </div>
            <div className="flex gap-7">
              <BsInstagram className="cursor-pointer" />
              <FiFacebook className="cursor-pointer" />
              <FiTwitter className="cursor-pointer" />
            </div>
          </div>
          <p className="leading-[30px]">{text}</p>
        </div>
      </div>
    </section>
  )
}
export default AboutUsCoFounder
