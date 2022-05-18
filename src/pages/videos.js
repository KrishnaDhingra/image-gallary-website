import React, { useState } from 'react'
import VideosImagesCarousel from '../components/videos-images-carousel/videos-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import HappilyEverAfter from '../components/happily-ever-after/happily-ever-after'
function Videos() {
  const [happilyIndexCounter, setHappilyIndexCounter] = useState(0)
  const [happilyVisible, setHappilyVisible] = useState(false)
  const [happilyMoreVisible, setHappilyMoreVisible] = useState(false)

  // fetch all the videos from firebase here
  const items = [
    {
      image: 'https://swiperjs.com/demos/images/nature-1.jpg',
      text: 'Videos1',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-2.jpg',
      text: 'Videos2',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-3.jpg',
      text: 'Videos3',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-4.jpg',
      text: 'Videos4',
    },
  ]
  return (
    <div className="flex flex-col gap-4">
      {happilyVisible ? (
        <HappilyEverAfter items={items} index={happilyIndexCounter} />
      ) : (
        // pass all the videos here that have been fethced from firebase and also pass props that will help select the index of the video that have been selected
        <VideosImagesCarousel
          setHappilyIndexCounter={setHappilyIndexCounter}
          setHappilyVisible={setHappilyVisible}
          visible={happilyMoreVisible}
          items={items}
          defaultHeading={'Videos'}
        />
      )}
      <WeddingFooter setMoreVisible={setHappilyMoreVisible} />
      {happilyMoreVisible && (
        <OutdoorMore setMoreVisible={happilyMoreVisible} />
      )}
    </div>
  )
}
export default Videos
