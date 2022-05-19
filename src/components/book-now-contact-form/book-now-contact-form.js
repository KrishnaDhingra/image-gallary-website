import React from 'react'
import './book-now-contact-form.css'

function BookNowContactForm() {
  return (
    <section className="rounded-3xl md:rounded-t-3xl book-now-contact-container">
      <div className="book-now-contact gap-[3rem] lg:gap-[10rem]">
        <div className="flex flex-col gap-8">
          <h2 className="contact-heading font-semibold">OOAK Enquiry Form</h2>
          <p className="contact-summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae
          </p>
        </div>

        <form action="" className="book-now-contact-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Country Code *" />
          <input type="text" placeholder="Phone Number*" />
          <input type="text" placeholder="Whatsapp Country Code*" />
          <input type="text" placeholder="Whatsapp Number" />
          <input type="email" className="email" placeholder="E-mail*" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <div className="radio-group px-[1.1rem] flex gap-6">
            <div>
              <input
                type="radio"
                className="radio-button"
                id="couple"
                name="event-type"
                value="couple"
              />
              <label htmlFor="couple">Couple</label>
            </div>
            <div>
              <input
                type="radio"
                id="individual"
                name="event-type"
                value="individual"
              />
              <label htmlFor="individual">Individual</label>
            </div>
          </div>
          <input type="text" placeholder="Groom Name" />
          <input type="text" placeholder="Bride Name" />

          <div className="kind-of-event-form">
            <form action="">
              <div className="flex flex-col gap-3 text-[14px] select-input-container">
                <p>Let us know what kind of event it is</p>
                <input type="text" placeholder="Select" />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="event-date">Event Date</label>
                <input type="date" id="event-date" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="event-time">Event Time</label>
                <input type="datetime-local" id="event-time" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="event-location">Event Location</label>
                <input type="text" id="event-location" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="event-venue">Event Venue</label>
                <input type="text" id="event-venue" />
              </div>
              <div className="flex flex-col gap-3 crowd-strength-container">
                <label htmlFor="crowd-strength">Crowd Strength</label>
                <input type="text" id="crowd-strength" />
              </div>
              <button type="submit" className="add-event-button">
                Add Event
              </button>
            </form>
          </div>
          <div className="not-a-robot py-[0.8rem] rounded-[0.5rem] flex items-center gap-3 border-2 border-white px-[1.1rem]">
            <input type="checkbox" name="not-a-robot" id="not-a-robot" />
            <label className="text-sm" htmlFor="not-a-robot">
              I'm not a robot
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}
export default BookNowContactForm
