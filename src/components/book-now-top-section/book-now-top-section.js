import React from 'react'
import BookNowTopSectionImage from '../../utilities/pricing-big-image2.png'
import './book-now-top-section.css'
function BookNowTopSection() {
  return (
    <section className="book-now-top-section-container flex flex-col gap-12">
      <h1 className="book-now-heading text-center">Book Now</h1>
      <div className="main-content px-8 md:px-0">
        <p>
          We encourage you to reach out so that one of our team members can show
          you exactly what working with One of a kind photography. From wedding
          videography to photography, we work to ensure your experience with us
          is seamless and simple. Your information is never sold and there is no
          pressure to buy.
        </p>

        <img
          className="w-full object-cover aspect-video rounded-2xl"
          src={BookNowTopSectionImage}
          alt="About Us Photo"
        />
      </div>
    </section>
  )
}
export default BookNowTopSection
