import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRegBell } from 'react-icons/fa'
import { BiHomeAlt } from 'react-icons/bi'
import { ulVariants } from './ulVariants'
import Logo from '../../utilities/enter-image.png'
import Backdrop from '../backdrop'
import NavbarLink from './NavbarLink'
import SubMenuLink from './SubMenuLink'
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

  return (
    <>
      <nav className="z-100">
        <AnimatePresence>
          {navbarVisible && (
            <Backdrop onSelect={toggleNavbarVisibility}>
              <motion.ul
                onClick={(e) => e.stopPropagation()}
                variants={ulVariants}
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
          <div className="flex relative">
            <FaRegBell
              className="bell text-2xl cursor-pointer"
              data-visible={navbarVisible}
              onClick={() => {
                setNavbarVisible(false)
                setSideBarVisible(!sidebarVisible)
              }}
            />

            <Link to="/">
              <BiHomeAlt
                className="home-icon shrink-0 text-white text-2xl absolute top-0 left-[170%] sm:left-[200%]"
                onClick={() => {
                  setNavbarVisible(false)
                }}
              />
            </Link>
          </div>
          <Link to="/">
            <div className="logo">
              <img className="max-w-[9rem]" src={Logo} alt="" />
            </div>
          </Link>
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
export default Navbar
