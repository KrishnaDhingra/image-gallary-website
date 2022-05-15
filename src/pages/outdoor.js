import React, { useState } from 'react'
import OutdoorImagesCarousel from '../components/outdoor-images-carousel/outdoor-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'

function Outdoor() {
  const [outdoorMoreVisible, setOutdoorMoreVisible] = useState(false)

  const items = ['Outdoor1', 'Outdoor2', 'Outdoor3', 'Outdoor4']
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
