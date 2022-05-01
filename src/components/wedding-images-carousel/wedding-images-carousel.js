import React, { useState } from 'react'
import './wedding-images-carousel.css'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

function WeddingImagesCarousel() {
  const [selected, setSelected] = useState('')
  const [isVisible, setIsVisible] = useState(true)
  const items = [
    'Hindu',
    'Muslim',
    'Buddhist',
    'Jain',
    'Sikh',
    'Hindu',
    'Muslim',
  ]
  return (
    <AnimateSharedLayout>
      <motion.section layout className="WeddingImagesCarousel">
        {items.map((item) => {
          return (
            <motion.div
              layout
              onMouseEnter={() => {
                setIsVisible(false)
                setSelected(item)
              }}
              onMouseLeave={() => setIsVisible(true)}
              whileHover={{ width: '200px', transition: { duration: 0.4 } }}
              className="wedding-image"
            ></motion.div>
          )
        })}
      </motion.section>

      <AnimatePresence>
        {isVisible ? <DefaultHeading /> : <Heading content={selected} />}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
function DefaultHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
    >
      Photographs
    </motion.h1>
  )
}
function Heading({ content }) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
    >
      {content}
    </motion.h1>
  )
}
export default WeddingImagesCarousel
