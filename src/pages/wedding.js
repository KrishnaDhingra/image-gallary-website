import React, { useState } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import WeddingMore from '../components/wedding-more/wedding-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'

function Wedding() {
  const [weddingMoreVisible, setWeddingMoreVisible] = useState(false)

  const items = [
    'Hindu',
    'Muslim',
    'Buddhist',
    'Jain',
    'Sikh',
    'Hindu',
    'Muslim',
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
