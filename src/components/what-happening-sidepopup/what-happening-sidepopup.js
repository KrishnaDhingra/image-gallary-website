import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from '../backdrop'
import './what-happening-sidepopup.css'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import SideBarImage from '../../utilities/sidebar-image.png'

function WhatHappeningSidePopup({ onSelect }) {
  const main = {
    hidden: { x: '-100%' },
    visible: {
      x: '0%',
      transition: {
        ease: 'easeOut',
        duration: 0.4,
      },
    },
    exit: {
      x: '-100%',
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <Backdrop onSelect={onSelect}>
      <motion.main
        onClick={(e) => e.stopPropagation()}
        variants={main}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="sidepopup-container flex"
      >
        <SideBar />

        <section className="popup-main-content">
          <h2
            onClick={onSelect}
            className="text-white font-semibold what-happening-text"
          >
            What's Happening
          </h2>

          <div className="flex flex-col gap-20">
            {[1, 2, 3, 4].map((element) => {
              return <Article key={element} />
            })}
          </div>
        </section>
      </motion.main>
    </Backdrop>
  )
}

const SideBar = () => {
  const item = {
    hidden: { x: '-40%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
        delay: 0.35,
      },
    },
    exit: {
      x: '-40%',
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.section
      variants={item}
      className="popup-sidebar flex flex-col justify-between h-screen"
    >
      <CgClose className="text-white text-md" />
      <div className="flex flex-col gap-7 sidebar-bottom items-center">
        {/* <span className="sidebar-text text-white text-sm">
        Follow OOAK Photography
      </span> */}
        <BsInstagram className="text-white text-xs sm:text-sm" />
        <FiFacebook className="text-white text-sm sm:text-md" />
        <FiTwitter className="text-white text-xs sm:text-sm" />
      </div>
    </motion.section>
  )
}

const Article = () => {
  const item = {
    hidden: { x: '-10%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
        delay: 0.2,
      },
    },
    exit: {
      x: '-10%',
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.article variants={item} className="flex flex-col gap-4">
      <img src={SideBarImage} alt="" />
      <h3 className="font-bold">Header 1 - Lorem Ispum</h3>
      <p className="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        suscipit deleniti ad unde quo, nulla temporibus, fugit voluptatum
        assumenda mollitia quisquam est aperiam voluptas doloremque magnam eius
        dolor sunt error! Maiores recusandae aperiam id nesciunt ad, dignissimos
        praesentium facere placeat deserunt quidem provident accusamus veniam ex
        suscipit, non aliquam sapiente perferendis consectetur officiis earum
        maxime autem! Et, aperiam. Consequatur dolores doloribus perferendis
        dolor corrupti ut nemo sint quaerat fugiat quam.
      </p>
    </motion.article>
  )
}
export default WhatHappeningSidePopup
