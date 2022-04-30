import React from 'react'
import { motion } from 'framer-motion'

const Backdrop = ({ children, onSelect }) => {
  return (
    <motion.div
      onClick={() => onSelect()}
      className="top-0 left-0 backdrop z-10 fixed w-screen h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
