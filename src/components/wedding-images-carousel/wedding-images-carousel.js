import React, { useState } from 'react'
import './wedding-images-carousel.css'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

function WeddingImagesCarousel({ visible, items, defaultHeading }) {
  const [selected, setSelected] = useState('')

  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimateSharedLayout>
      <div key={visible} className="flex flex-col items-center gap-24">
        <motion.section layout className="WeddingImagesCarousel">
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
                  width: '200px',
                  transition: { duration: 0.4 },
                }}
                className="wedding-image"
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
      className="wedding-heading"
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
