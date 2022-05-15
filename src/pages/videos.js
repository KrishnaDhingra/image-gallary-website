import React, { useState } from 'react'
import VideosImagesCarousel from '../components/videos-images-carousel/videos-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import HappilyEverAfter from '../components/happily-ever-after/happily-ever-after'
function Videos() {
  const [happilyIndexCounter, setHappilyIndexCounter] = useState(0)
  const [happilyVisible, setHappilyVisible] = useState(false)
  const [happilyMoreVisible, setHappilyMoreVisible] = useState(false)

  const items = ['Videos1', 'Videos2', 'Videos3']
  return (
    <div className="flex flex-col gap-4">
      {happilyVisible ? (
        <HappilyEverAfter index={happilyIndexCounter} />
      ) : (
        <VideosImagesCarousel
          setHappilyIndexCounter={setHappilyIndexCounter}
          setHappilyVisible={setHappilyVisible}
          visible={happilyMoreVisible}
          index={happilyIndexCounter}
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
