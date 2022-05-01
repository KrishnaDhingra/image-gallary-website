import React, { useState } from 'react'
import './Navbar.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRegBell } from 'react-icons/fa'
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
        duration: 0.3,
        staggerChildren: 0.09,
      },
    },
    exit: {
      y: '-100%',
      transition: {
        ease: 'easeOut',
        duration: 0.4,
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
                <section className="sm:px-[1rem] lg:px-[3rem]">
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
          <FaRegBell
            className="bell text-2xl"
            data-visible={navbarVisible}
            onClick={() => {
              setNavbarVisible(false)
              setSideBarVisible(!sidebarVisible)
            }}
          />
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div
            className="hamburger"
            data-visible={navbarVisible}
            onClick={() => {
              setSideBarVisible(false)
              setNavbarVisible(!navbarVisible)
            }}
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
