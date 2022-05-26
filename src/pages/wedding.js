import React, { useState, useEffect } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import WeddingMore from '../components/wedding-more/wedding-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import { ref } from 'firebase/storage'
import { collection } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { getCarouselHoverText } from '../functions/getCarouselHoverText'
import { getCarouselImages } from '../functions/getCarouselImages'

function Wedding() {
  const [weddingMoreVisible, setWeddingMoreVisible] = useState(false)
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
      <WeddingImagesCarousel
        visible={weddingMoreVisible}
        images={imageUrls}
        hoverText={hoverText}
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
