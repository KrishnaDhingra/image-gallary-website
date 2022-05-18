import React, { useState } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import WeddingMore from '../components/wedding-more/wedding-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'

function Wedding() {
  const [weddingMoreVisible, setWeddingMoreVisible] = useState(false)
  const items = [
    {
      image: 'https://swiperjs.com/demos/images/nature-1.jpg',
      text: 'Wedding1',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-2.jpg',
      text: 'Wedding2',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-3.jpg',
      text: 'Wedding3',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-4.jpg',
      text: 'Wedding4',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-5.jpg',
      text: 'Wedding5',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-7.jpg',
      text: 'Wedding6',
    },
  ]
  return (
    <div className="flex flex-col gap-4">
      <WeddingImagesCarousel
        visible={weddingMoreVisible}
        items={items}
        defaultHeading={'Wedding'}
      />
      <WeddingFooter setMoreVisible={setWeddingMoreVisible} />
      {weddingMoreVisible && (
        <WeddingMore weddingMoreVisible={weddingMoreVisible} />
      )}
    </div>
  )
}
export default Wedding
