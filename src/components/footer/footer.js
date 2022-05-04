import React from 'react'
import './footer.css'
// import FooterLogo from './footer-logo.png'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { BsMailbox2 } from 'react-icons/bs'
import { IoMailOpen } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="home-footer">
      <div className="footer-top">
        <div>
          {/* <FooterLogo /> */}
          <p>
            Every wedding has its own unique sense of style and personality, our
            cinematic approach is to be non-directorial and more observative
            while making our clients feel inspired, relaxed, and connected
          </p>
          <div className="flex gap-6">
            <BsInstagram />
            <FiFacebook />
            <FiTwitter />
          </div>
        </div>
        <div>
          <h3>Contacts</h3>
          <div>
            <a href="">
              <BsMailbox2 />
              <span>Banaswadi, Bangalore - 560033</span>
            </a>
            <a href="">
              <IoMailOpen />
              <span>vikas@ooak.photography</span>
            </a>
            <a href="">
              <BsFillTelephoneFill />
              <span>+91 9677362524</span>
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Lines</h3>
          <div>
            {[
              'Weddings',
              'Services',
              'Gallery',
              'Videos',
              'About Us',
              'Contact Us',
            ].map((element) => {
              return <a key={element}>{element}</a>
            })}
          </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="bottom">
        <span className="copyright">
          Copyright © 2022 OOAK. All rights reserved
        </span>
        <div>
          {[
            'Weddings',
            'Engagement',
            'Birthdays',
            'Baby Shower',
            'Special Occassion',
          ].map((element) => {
            return <a key={element}>{element}</a>
          })}
        </div>
      </div>
    </footer>
  )
}
export default Footer
