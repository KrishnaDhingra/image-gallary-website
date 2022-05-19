import React from 'react'
import './book-now-founders-note.css'
import AboutUsCoFounderImage from '../../utilities/pricing-big-image2.png'
import FoundersNoteSignatureImage from '../../utilities/founders-note-signature.png'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

function BookNowFoundersNote({}) {
  return (
    <section className="book-now-founders-note-container rounded-3xl md:rounded-t-3xl">
      <div className="inner-container flex flex-col px-8 md:px-0">
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
        <div className="flex flex-col items-center gap-10 md:gap-14">
          <h1 className="relative founders-note-heading text-[24px] text-center md:text-[36px] font-semibold">
            Founders Note
          </h1>
          <p className="leading-[26px]">
            Born in late 2014, One of a kind is a wedding photography and candid
            wedding photography business franchise that is the brainchild of
            Vikas Alagarsamy and Navya, coupled with a mutual love for wedding
            photography and an insatiable curiosity for anything creative. Mr.
            Vikas Alagarsamy was also a Former Founder of Zero gravity
            Photography. We are an internationally acclaimed Candid Wedding
            Photography Studio with an impeccable team of effervescent wedding
            photographers. We like taking the unconventional road and utilizing
            out-of-the-box ideas. Since we love to globetrot whenever possible,
            we would like to capture your momentous occasion that the layman
            calls a wedding in all its glory, making it a picture filled with
            everything that describes your love story and also adding an
            individualistic twist with our candid wedding photography just
            because we know how special this day is for you.
          </p>
          <img src={FoundersNoteSignatureImage} alt="Founder Signature Image" />
        </div>
      </div>
    </section>
  )
}
export default BookNowFoundersNote
