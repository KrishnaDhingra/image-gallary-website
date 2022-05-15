import React, { useState } from 'react'
import './outdoor-images-carousel.css'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

function OutdoorImagesCarousel({ visible, items, defaultHeading }) {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  }
  const [selected, setSelected] = useState('')

  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimateSharedLayout>
      <div key={visible} className="flex flex-col items-center gap-24">
        <motion.section
          layout
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="OutdoorImagesCarousel"
        >
          {items.map((item, index) => {
            return (
              <motion.div
                layout
                key={index}
                onMouseEnter={() => {
                  setIsVisible(false)
                  setSelected(item)
                }}
                onMouseLeave={() => setIsVisible(true)}
                whileHover={{
                  width: '220px',
                  transition: { duration: 0.4 },
                }}
                className="outdoors-image"
              ></motion.div>
            )
          })}
        </motion.section>
        <AnimatePresence>
          {isVisible ? (
            <DefaultHeading text={defaultHeading} />
          ) : (
            <Heading content={selected} />
          )}
        </AnimatePresence>
      </div>
    </AnimateSharedLayout>
  )
}
function DefaultHeading({ text }) {
  return (
    <motion.h1
      className="outdoor-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
    >
      {text}
    </motion.h1>
  )
}
function Heading({ content }) {
  return (
    <motion.h1
      className="outdoor-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
    >
      {content}
    </motion.h1>
  )
}
export default OutdoorImagesCarousel
