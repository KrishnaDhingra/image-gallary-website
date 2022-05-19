import React from 'react'
import BookNowTopSection from '../components/book-now-top-section/book-now-top-section'
import BookNowContactForm from '../components/book-now-contact-form/book-now-contact-form'
import BookNowSlider from '../components/book-now-slider/book-now-slider'
import BookNowFoundersNote from '../components/book-now-founders-note/book-now-founders-note'
function BookNow() {
  return (
    <main>
      <BookNowTopSection />
      <BookNowContactForm />
      <BookNowSlider />
      <BookNowFoundersNote />
    </main>
  )
}
export default BookNow
