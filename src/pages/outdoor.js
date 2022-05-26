import React, { useState, useEffect } from 'react'
import OutdoorImagesCarousel from '../components/outdoor-images-carousel/outdoor-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import { ref } from 'firebase/storage'
import { collection } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { getCarouselHoverText } from '../functions/getCarouselHoverText'
import { getCarouselImages } from '../functions/getCarouselImages'

function Outdoor() {
  const [outdoorMoreVisible, setOutdoorMoreVisible] = useState(false)

  const [hoverText, setHoverText] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  const imagesListRef = ref(storage, 'wedding/')
  const hoverTextRef = collection(db, 'wedding-hover-text')

  useEffect(() => {
    setHoverText(getCarouselHoverText(hoverTextRef))
    setImageUrls(getCarouselImages(imagesListRef))
  }, [])
  return (
    <div className="flex flex-col gap-4">
      <OutdoorImagesCarousel
        visible={outdoorMoreVisible}
        images={imageUrls}
        hoverText={hoverText}
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
