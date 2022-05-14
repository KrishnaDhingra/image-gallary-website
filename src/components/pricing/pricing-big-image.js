import React, { useState } from 'react'
import './pricing-big-image.css'
import PricingBigImage1 from '../../utilities/pricing-big-image1.png'
import PricingBigImage2 from '../../utilities/pricing-big-image2.png'

function PricingBigImage() {
  const images = [
    PricingBigImage1,
    PricingBigImage2,
    PricingBigImage1,
    PricingBigImage2,
    PricingBigImage1,
    PricingBigImage2,
  ]
  const [imageCounter, setImageCounter] = useState(0)

  setInterval(() => {
    if (imageCounter !== images.length - 1) {
      setImageCounter(imageCounter + 1)
      return
    }
    // setImageCounter(0)
  }, 4000)
  return (
    <div className="container-slider">
      {images.map((obj, index) => {
        return (
          <div
            key={obj}
            className={imageCounter === index ? 'slide active-anim' : 'slide'}
          >
            <img src={images[imageCounter]} />
          </div>
        )
      })}
    </div>
  )
}
export default PricingBigImage
