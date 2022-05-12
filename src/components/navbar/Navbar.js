import React, { useState } from 'react'
import './Navbar.css'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { FaRegBell } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
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
        ease: [0.6, 0, 0.1, 1],
        duration: 0.5,
        staggerChildren: 0.09,
      },
    },
    exit: {
      y: '-100%',
      transition: {
        ease: 'easeIn',
        duration: 0.4,
      },
    },
  }

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
                  <NavbarLink
                    onClick={toggleNavbarVisibility}
                    text={'About us'}
                    redirect={'/'}
                  />
                  <NavbarLink
                    onClick={toggleNavbarVisibility}
                    text={'Jobs'}
                    redirect={'/enter'}
                  />
                  <SubMenuLink
                    onClick={toggleNavbarVisibility}
                    text={'Location'}
                    redirect={'/'}
                  />
                  <NavbarLink
                    onClick={toggleNavbarVisibility}
                    text={'Book Now'}
                    redirect={'/'}
                  />
                  <NavbarLink
                    onClick={toggleNavbarVisibility}
                    text={'FAQ'}
                    redirect={'/faq'}
                  />
                  <NavbarLink
                    onClick={toggleNavbarVisibility}
                    text={'Blog'}
                    redirect={'/blog'}
                  />
                  <NavbarLink
                    onClick={toggleNavbarVisibility}
                    text={'Pricing'}
                    redirect={'/pricing'}
                  />
                </section>
              </motion.ul>
            </Backdrop>
          )}
        </AnimatePresence>

        <section className="px-[1rem] sm:px-[2rem] lg:px-[3rem]">
          <FaRegBell
            className="bell text-2xl cursor-pointer"
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
            className="hamburger cursor-pointer"
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

function NavbarLink({ onClick, text, redirect }) {
  return (
    <motion.li onClick={onClick} variants={itemVariants()}>
      <Link to={redirect}>
        <span>{text}</span>
      </Link>
    </motion.li>
  )
}

function SubMenuLink({ onClick, redirect, text }) {
  const [subMenuVisible, setSubMenuVisible] = useState(false)

  const parentVariants = {
    hidden: false,
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }
  return (
    <div className="flex flex-col relative">
      <motion.li className="flex gap-4" variants={itemVariants()}>
        <Link onClick={onClick} to={redirect}>
          <span>{text}</span>
        </Link>
        <IoIosArrowBack
          onClick={() => setSubMenuVisible(!subMenuVisible)}
          className="hover:text-gray-400 text-white -rotate-90"
        />
      </motion.li>
      <AnimatePresence>
        {subMenuVisible && (
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative sm:absolute top-[110%] sm:left-[-10%] text-white flex flex-col my-3 sm:my-0 sm:flex-row gap-3"
          >
            {['Chennai', 'Coimabatore', 'Bangalore'].map((item) => {
              return (
                <motion.span className="text-center" variants={itemVariants()}>
                  {item}
                </motion.span>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const itemVariants = () => {
  return {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
      },
    },
  }
}
export default Navbar
