import React, { useState } from 'react'
import OutdoorImagesCarousel from '../components/outdoor-images-carousel/outdoor-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'

function Outdoor() {
  const [outdoorMoreVisible, setOutdoorMoreVisible] = useState(false)

  const items = [
    {
      image: 'https://swiperjs.com/demos/images/nature-1.jpg',
      text: 'Outdoor1',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-2.jpg',
      text: 'Outdoor2',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-3.jpg',
      text: 'Outdoor3',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-4.jpg',
      text: 'Outdoor4',
    },
  ]
  return (
    <div className="flex flex-col gap-4">
      <OutdoorImagesCarousel
        visible={outdoorMoreVisible}
        items={items}
        defaultHeading={'Outdoor'}
      />
      <WeddingFooter setMoreVisible={setOutdoorMoreVisible} />
      {outdoorMoreVisible && (
        <OutdoorMore setMoreVisible={outdoorMoreVisible} />
      )}
    </div>
  )
}
export default Outdoor
