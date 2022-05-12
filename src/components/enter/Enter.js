import React from 'react'
import './Enter.css'
import { motion, AnimatePresence } from 'framer-motion'
import EnterImage from '../../utilities/enter-image.png'

function Enter() {
  const Parent = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit4: { opacity: 0, transition: { duration: 0.4 } },
  }
  const LeftRight = {
    hidden: { opacity: 0, y: '100vh' },
    visible: { opacity: 1, y: '0', transition: { delay: 1, duration: 0.5 } },
  }
  const Bottom = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: '0', transition: { delay: 1.5, duration: 0.5 } },
  }
  const Top = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: '0', transition: { delay: 1.65, duration: 0.5 } },
  }
  const Center = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'FadeIn', duration: 0.5 },
    },
  }
  return (
    <motion.main
      variants={Parent}
      initial="hidden"
      animate="visible"
      exit="exit4"
      className="absolute z-[10000] top-0 left-0 min-h-screen w-screen enter-main bg-white flex justify-center items-center"
    >
      <section className="enter-content">
        <motion.div variants={LeftRight} className="right"></motion.div>
        <motion.div variants={LeftRight} className="left"></motion.div>
        <motion.div variants={Top} className="top"></motion.div>
        <motion.div variants={Bottom} className="bottom"></motion.div>
        <motion.img
          className="w-[380px]"
          variants={Center}
          src={EnterImage}
          alt="Ooak Image"
        />
      </section>
    </motion.main>
  )
}
export default Enter
