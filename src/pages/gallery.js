import React, { useState } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import GalleryMore from '../components/gallery-more/gallery-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'

function Gallery() {
  const [galleryMoreVisible, setGalleryMoreVisible] = useState(false)

  const items = [
    {
      image: 'https://swiperjs.com/demos/images/nature-1.jpg',
      text: 'Gallery1',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-2.jpg',
      text: 'Gallery2',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-3.jpg',
      text: 'Gallery3',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-4.jpg',
      text: 'Gallery4',
    },
  ]
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
