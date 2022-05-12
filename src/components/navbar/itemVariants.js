import React from 'react'

export const itemVariants = () => {
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
