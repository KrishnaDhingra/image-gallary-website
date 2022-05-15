import React, { useState } from 'react'
import './happily-ever-after.css'
import HappilyEverAfterImage from '../../utilities/pricing-big-image2.png'
import HappilyEverAfterImage2 from '../../utilities/trending-image.png'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion'

function HappilyEverAfter({ index }) {
  const [indexCounter, setIndexCounter] = useState(index)

  const items = [
    HappilyEverAfterImage,
    HappilyEverAfterImage2,
    HappilyEverAfterImage,
  ]

  const next = () => {
    if (indexCounter !== items.length - 1) {
      setIndexCounter(indexCounter + 1)
      return
    }
    setIndexCounter(0)
  }
  const previous = () => {
    if (indexCounter !== 0) {
      setIndexCounter(indexCounter - 1)
      return
    }
    setIndexCounter(items.length - 1)
  }
  return (
    <div className="flex flex-col gap-20 mt-[5rem]">
      <section className="mx-auto max-w-[1300px] w-[95%] flex justify-between items-center">
        <IoIosArrowBack onClick={previous} className="text-[2rem]" />
        <img
          src={items[indexCounter]}
          className="happily-ever-after-image"
          alt="Happily Ever After Image"
        />
        <IoIosArrowForward onClick={next} className="text-[2rem]" />
      </section>

      <h1 className="text-[48px] font-semibold text-center mb-3">
        Happily Ever After
      </h1>
    </div>
  )
}

export default HappilyEverAfter
