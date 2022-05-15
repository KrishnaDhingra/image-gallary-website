import React, { useState } from 'react'
import './videos-images-carousel.css'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

function VideosImagesCarousel({
  setHappilyIndexCounter,
  setHappilyVisible,
  visible,
  items,
  defaultHeading,
}) {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
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
          className="VideosImagesCarousel"
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
                onClick={() => {
                  setHappilyIndexCounter(index)
                  setHappilyVisible(true)
                }}
                onMouseLeave={() => setIsVisible(true)}
                whileHover={{
                  width: '220px',
                  transition: { duration: 0.4 },
                }}
                className="videos-image"
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
      className="videos-heading"
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
      className="videos-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
    >
      {content}
    </motion.h1>
  )
}
export default VideosImagesCarousel
