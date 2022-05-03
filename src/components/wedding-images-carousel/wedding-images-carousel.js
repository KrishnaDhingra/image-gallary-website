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
      <div className="flex flex-col items-center gap-24">
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
                whileHover={{
                  width: '200px',
                  transition: { duration: 0.5 },
                }}
                className="wedding-image"
              ></motion.div>
            )
          })}
        </motion.section>
        <AnimatePresence>
          {isVisible ? <DefaultHeading /> : <Heading content={selected} />}
        </AnimatePresence>
      </div>
    </AnimateSharedLayout>
  )
}
function DefaultHeading() {
  return (
    <motion.h1
      className="wedding-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
    >
      Weddings
    </motion.h1>
  )
}
function Heading({ content }) {
  return (
    <motion.h1
      className="wedding-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
    >
      {content}
    </motion.h1>
  )
}
export default WeddingImagesCarousel
