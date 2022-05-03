import React, { useState } from 'react'
import './Navbar.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRegBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'
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
    { text: 'About us', redirect: '/' },
    { text: 'Jobs', redirect: '/' },
    { text: 'Location', redirect: '/' },
    { text: 'Book Now', redirect: '/' },
    { text: 'FAQ', redirect: '/faq' },
    { text: 'Blog', redirect: '/' },
    { text: 'Pricing', redirect: '/' },
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
                      <motion.li
                        onClick={() => setNavbarVisible(false)}
                        key={link}
                        variants={item}
                      >
                        <Link to={link.redirect}>
                          <span>{link.text}</span>
                        </Link>
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
