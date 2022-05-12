import React, { useState } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import GalleryMore from '../components/gallery-more/gallery-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'

function Gallery() {
  const [galleryMoreVisible, setGalleryMoreVisible] = useState(false)

  const items = ['Gallery1', 'Gallery2', 'Gallery3', 'Gallery4']
  return (
    <div className="flex flex-col gap-4">
      <WeddingImagesCarousel
        visible={galleryMoreVisible}
        items={items}
        defaultHeading={'Gallery'}
      />
      <WeddingFooter setMoreVisible={setGalleryMoreVisible} />
      {galleryMoreVisible && (
        <GalleryMore setMoreVisible={galleryMoreVisible} />
      )}
    </div>
  )
}
export default Gallery
