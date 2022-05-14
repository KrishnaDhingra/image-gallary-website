import React from 'react'
import AboutUsTopSectionImage from '../../utilities/pricing-big-image2.png'
import './about-us-top-section.css'

function AboutUsTopSection() {
  return (
    <section className="about-us-top-section-container flex flex-col gap-12">
      <h1 className="about-us-heading text-center">About Us</h1>
      <div className="main-content">
        <p>
          Together with our photographers and video makers, we deliver photo-
          and video services for you We have a beautiful and spacious photo
          studio. This is ideal for photographing pack shots, paintings,
          products or people. Different backgrounds are available, daylight
          comes in sideways and there is an extensive flash installation. We
          seek out the best photographers for your assignments and find the
          right photo for your story
        </p>

        <img
          className="w-full object-cover aspect-video rounded-2xl"
          src={AboutUsTopSectionImage}
          alt="About Us Photo"
        />
      </div>
    </section>
  )
}
export default AboutUsTopSection
