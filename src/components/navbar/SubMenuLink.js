import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { itemVariants } from './itemVariants'
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
      <motion.li
        onClick={() => setSubMenuVisible(!subMenuVisible)}
        className="flex gap-4"
        variants={itemVariants()}
      >
        <span className="text-white">{text}</span>
        <IoIosArrowBack className="hover:text-gray-400 text-white -rotate-90" />
      </motion.li>
      <AnimatePresence>
        {subMenuVisible && (
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative sm:absolute top-[130%] sm:left-[-20%] text-white flex flex-col my-3 sm:my-0 sm:flex-row gap-3"
          >
            {['Chennai', 'Coimbatore', 'Bangalore'].map((item) => {
              return (
                <motion.div
                  onClick={onClick}
                  className="text-xs text-center"
                  variants={itemVariants()}
                >
                  <Link to={`get-in-touch-${item.toLowerCase()}`}>{item}</Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default SubMenuLink
