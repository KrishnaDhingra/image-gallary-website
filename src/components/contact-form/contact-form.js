import React from 'react'
import './contact-form.css'

function ContactForm() {
  return (
    <section className="rounded-3xl md:rounded-t-3xl contact-container">
      <div className="contact gap-[3rem] lg:gap-[10rem]">
        <div className="flex flex-col gap-8">
          <h2 className="contact-heading font-semibold">Contact Form</h2>
          <p className="contact-summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae
          </p>
        </div>

        <form action="" className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Phone" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Bride Name" />
          <input type="text" placeholder="Groom Name" />
          <div className="radio-group px-[1.1rem] flex flex-col gap-2">
            <p className="text-sm mb-1">Let us know what kind of event it is</p>
            <div>
              <input
                type="radio"
                className="radio-button"
                id="wedding"
                name="event-type"
                value="wedding"
              />
              <label htmlFor="wedding">Wedding</label>
            </div>
            <div>
              <input
                type="radio"
                id="reception"
                name="event-type"
                value="reception"
              />
              <label htmlFor="reception">Reception</label>
            </div>
            <div>
              <input
                type="radio"
                id="engagement"
                name="event-type"
                value="engagement"
              />
              <label htmlFor="engagement">Engagement</label>
            </div>
            <div>
              <input type="radio" id="other" name="event-type" value="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <input type="text" placeholder="Location" className="location" />
          <input type="date" placeholder="Date and Time" />
          <input type="text" placeholder="Venue" />
          <input
            className="description"
            type="text"
            placeholder="Description"
          />

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
export default ContactForm