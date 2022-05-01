import React from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import WeddingFooter from '../components/wedding-footer/wedding-footer'

function Wedding() {
  return (
    <div className="flex flex-col gap-16">
      <WeddingImagesCarousel />
      <WeddingFooter />
    </div>
  )
}
export default Wedding
