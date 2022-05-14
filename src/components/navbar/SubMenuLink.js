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
            className="relative sm:absolute top-[123%] sm:left-[-10%] text-white flex flex-col my-3 sm:my-0 sm:flex-row gap-3"
          >
            {['Chennai', 'Coimabatore', 'Bangalore'].map((item) => {
              return (
                <motion.span
                  className="text-sm text-center"
                  variants={itemVariants()}
                >
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
export default SubMenuLink
