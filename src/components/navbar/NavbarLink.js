import React from 'react'
import { Link } from 'react-router-dom'
import { itemVariants } from './itemVariants'
import { motion } from 'framer-motion'
function NavbarLink({ onClick, text, redirect }) {
  return (
    <motion.li onClick={onClick} variants={itemVariants()}>
      <Link to={redirect}>
        <span className="font-semibold">{text}</span>
      </Link>
    </motion.li>
  )
}

export default NavbarLink
