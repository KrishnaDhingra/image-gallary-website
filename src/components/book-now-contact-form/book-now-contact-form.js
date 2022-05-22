import React, { useState } from 'react'
import './book-now-contact-form.css'
import { CgClose } from 'react-icons/cg'
import { v4 as uuidv4 } from 'uuid'

function BookNowContactForm() {
  const [event, setEvent] = useState([uuidv4()])

  const addEvent = () => {
    setEvent([...event, uuidv4()])
    console.log(event)
  }
  const removeEvent = (value) => {
    const filteredEvents = event.filter((item) => item != value)
    setEvent(filteredEvents)
  }
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
          <input required={true} type="text" placeholder="First Name" />
          <input required={true} type="text" placeholder="Last Name" />
          <input required={true} type="text" placeholder="Country Code *" />
          <input required={true} type="text" placeholder="Phone Number*" />
          <input
            required={true}
            type="text"
            placeholder="Whatsapp Country Code*"
          />
          <input required={true} type="text" placeholder="Whatsapp Number" />
          <input
            required={true}
            type="email"
            className="email"
            placeholder="E-mail*"
          />
          <input required={true} type="text" placeholder="City" />
          <input required={true} type="text" placeholder="State" />
          <div className="radio-group px-[1.1rem] flex gap-6">
            <div>
              <input
                required={true}
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
                required={true}
                type="radio"
                id="individual"
                name="event-type"
                value="individual"
              />
              <label htmlFor="individual">Individual</label>
            </div>
          </div>
          <input required={true} type="text" placeholder="Groom Name" />
          <input required={true} type="text" placeholder="Bride Name" />
          <div className="kind-of-event-form">
            {event.map((item, index) => {
              return (
                <KindOfEventForm
                  item={item}
                  index={index}
                  removeEvent={removeEvent}
                />
              )
            })}
            <div onClick={addEvent} className="add-event-button">
              Add Event
            </div>
          </div>
          <div className="not-a-robot py-[0.8rem] rounded-[0.5rem] flex items-center gap-3 border-2 border-white px-[1.1rem]">
            <input
              required={true}
              type="checkbox"
              name="not-a-robot"
              id="not-a-robot"
            />
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
function KindOfEventForm({ index, item, removeEvent }) {
  return (
    <form className={`${index != 0 && 'mt-[3.5rem]'} relative`}>
      {index != 0 && (
        <CgClose
          onClick={() => removeEvent(item)}
          className="absolute right-[40px] text-2xl"
        />
      )}
      <div className="flex flex-col gap-3 text-[14px] select-input-container">
        <p>Let us know what kind of event it is</p>
        <input required={true} type="text" placeholder="Select" />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="event-date">Event Date</label>
        <input required={true} type="date" id="event-date" />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="event-time">Event Time</label>
        <input required={true} type="datetime-local" id="event-time" />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="event-location">Event Location</label>
        <input required={true} type="text" id="event-location" />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="event-venue">Event Venue</label>
        <input required={true} type="text" id="event-venue" />
      </div>
      <div className="flex flex-col gap-3 crowd-strength-container">
        <label htmlFor="crowd-strength">Crowd Strength</label>
        <input required={true} type="text" id="crowd-strength" />
      </div>
    </form>
  )
}
export default BookNowContactForm
