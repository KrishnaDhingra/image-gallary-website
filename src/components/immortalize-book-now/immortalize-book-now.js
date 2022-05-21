import React from 'react'
import { IoMailOpen } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import './immortalize-book-now.css'

function ImmortalizeBookNow() {
  return (
    <section className="max-w-[1150px] w-[95%] mx-auto items-center flex flex-col gap-[3.5rem] md:gap-[5.125rem] mt-[7rem]">
      <h1 className="immortalize-book-now-heading relative text-center text-[24px] md:text-[48px] font-semibold">
        Immortalize Your Most Memorable Day
      </h1>
      <p className="text-center px-6 md:px-32">
        We have the best job in the world, celebrating love! At One of a kind
        Photography, We are dedicated to capturing some of the best moments in
        people's lives, and we understand that to be an incredible privilege.
        You can rest assured that we have put a tremendous amount of work into
        developing a system that takes all the stress off of you. It's your day,
        we want you to enjoy it!
      </p>
      <div className="flex flex-col justify-center items-center sm:flex-row gap-4 md:gap-24 text-sm md:text-xl font-semibold">
        <span>
          <BsFillTelephoneFill className="inline-block mr-4" />
          +91 96773 62524
        </span>
        <span>
          <IoMailOpen className="inline-block mr-4" />
          vikas@ooak.photography
        </span>
      </div>
    </section>
  )
}
export default ImmortalizeBookNow
