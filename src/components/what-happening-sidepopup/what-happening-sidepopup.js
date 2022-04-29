import React from 'react'
import { motion } from 'react'
import Backdrop from '../backdrop'
import './what-happening-sidepopup.css'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'

function WhatHappeningSidePopup() {
  return (
    <Backdrop>
      <main className="sidepopup-container flex">
        <section className="popup-sidebar flex flex-col justify-between h-screen">
          <CgClose className="text-white text-2xl" />
          <div className="flex flex-col gap-4 sidebar-bottom">
            {/* <span className="sidebar-text text-white text-sm">
              Follow OOAK Photography
            </span> */}
            <BsInstagram className="text-white text-xl" />
            <FiFacebook className="text-white text-2xl" />
            <FiTwitter className="text-white text-xl" />
          </div>
        </section>

        <section className="popup-main-content">
          <h1 className="text-white font-semibold">What's Happening</h1>
        </section>
      </main>
    </Backdrop>
  )
}
export default WhatHappeningSidePopup
