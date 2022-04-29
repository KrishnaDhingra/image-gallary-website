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
        duration: 0.3,
      },
    },
    exit: {
      x: '-100%',
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
          <h1
            onClick={onSelect}
            className="text-white font-semibold what-happening-text"
          >
            What's Happening
          </h1>

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
  return (
    <section className="popup-sidebar flex flex-col justify-between h-screen">
      <CgClose className="text-white text-2xl" />
      <div className="flex flex-col gap-4 sidebar-bottom items-center">
        {/* <span className="sidebar-text text-white text-sm">
        Follow OOAK Photography
      </span> */}
        <BsInstagram className="text-white text-md" />
        <FiFacebook className="text-white text-xl" />
        <FiTwitter className="text-white text-md" />
      </div>
    </section>
  )
}

const Article = () => {
  return (
    <article className="flex flex-col gap-4">
      <img src={SideBarImage} alt="" />
      <h2 className="font-bold">Header 1 - Lorem Ispum</h2>
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
    </article>
  )
}
export default WhatHappeningSidePopup
