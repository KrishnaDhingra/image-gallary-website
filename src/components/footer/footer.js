import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { BsMailbox2 } from 'react-icons/bs'
import { IoMailOpen } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import FooterLogo from '../../utilities/enter-image.png'

function Footer() {
  return (
    <footer className="home-footer px-[3rem] xl:px-[6.375rem]">
      <div className="footer-top gap-[4rem] xl:gap-[8rem]">
        <div>
          <img
            src={FooterLogo}
            className="inline-block w-[17rem] mt-[-5rem] mb-[-4.9rem] ml-[-2.4rem]"
            alt=""
            srcset=""
          />
          <p>
            Every wedding has its own unique sense of style and personality, our
            cinematic approach is to be non-directorial and more observative
            while making our clients feel inspired, relaxed, and connected
          </p>
          <div className="flex gap-6">
            <a href="#">
              <BsInstagram className="cursor-pointer" />
            </a>
            <a href="#">
              <FiFacebook className="cursor-pointer" />
            </a>
            <a href="#">
              <FiTwitter className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div>
          <h3>Contacts</h3>
          <div>
            <a href="#">
              <BsMailbox2 />
              <span>Banaswadi, Bangalore - 560033</span>
            </a>
            <a href="#">
              <IoMailOpen />
              <span>vikas@ooak.photography</span>
            </a>
            <a href="#">
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
              return (
                <a className="cursor-pointer" key={element} href="#">
                  {element}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="bottom">
        <span className="copyright">
          Copyright © 2022 OOAK. All rights reserved
        </span>
        <div className="hidden xl:flex gap-[2.5rem]">
          {[
            'Weddings',
            'Engagement',
            'Birthdays',
            'Baby Shower',
            'Special Occassion',
          ].map((element) => {
            return (
              <a className="cursor-pointer" key={element} herf="#">
                {element}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
export default Footer
