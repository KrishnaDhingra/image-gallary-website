import React, { useState } from 'react'
import './Navbar.css'
import { motion, AnimatePresence } from 'framer-motion'
import Bell from '../../utilities/navbar-bell.svg'
import Logo from '../../utilities/navbar-logo.svg'
import Backdrop from '../backdrop'
import WhatHappeningSidePopup from '../what-happening-sidepopup/what-happening-sidepopup'

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false)
  const [sidebarVisible, setSideBarVisible] = useState(false)

  let toggleNavbarVisibility = () => {
    setNavbarVisible(false)
  }
  let toggleSideBarVisibility = () => {
    setSideBarVisible(false)
  }

  const ul = {
    hidden: { y: '-100%' },
    visible: {
      y: '0%',
      transition: {
        ease: 'easeOut',
        duration: 0.2,
        staggerChildren: 0.07,
      },
    },
    exit: {
      y: '-100%',
      transition: {
        ease: 'easeOut',
        duration: 0.2,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      y: -8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
      },
    },
  }

  const navbarLinks = [
    'About us',
    'Jobs',
    'Location',
    'Book Now',
    'FAQ',
    'Blog',
    'Pricing',
  ]
  return (
    <>
      <nav className="z-100">
        <AnimatePresence>
          {navbarVisible && (
            <Backdrop onSelect={toggleNavbarVisibility}>
              <motion.ul
                onClick={(e) => e.stopPropagation()}
                variants={ul}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <section className="sm:px-[2rem] lg:px-[4.2rem]">
                  {navbarLinks.map((link) => {
                    return (
                      <motion.li key={link} variants={item}>
                        <a href="">
                          <span>{link}</span>
                        </a>
                      </motion.li>
                    )
                  })}
                </section>
              </motion.ul>
            </Backdrop>
          )}
        </AnimatePresence>

        <section className="px-[1rem] sm:px-[2rem] lg:px-[3rem]">
          <div
            className="bell"
            data-visible={navbarVisible}
            onClick={() => setSideBarVisible(!sidebarVisible)}
          >
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 5.4087 15.3679 3.88258 14.2426 2.75736C13.1174 1.63214 11.5913 1 10 1C8.4087 1 6.88258 1.63214 5.75736 2.75736C4.63214 3.88258 4 5.4087 4 7C4 14 1 16 1 16H19C19 16 16 14 16 7Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div
            className="hamburger"
            data-visible={navbarVisible}
            onClick={() => setNavbarVisible(!navbarVisible)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </section>
      </nav>
      <AnimatePresence>
        {sidebarVisible && (
          <WhatHappeningSidePopup onSelect={toggleSideBarVisibility} />
        )}
      </AnimatePresence>
    </>
  )
}
export default Navbar
