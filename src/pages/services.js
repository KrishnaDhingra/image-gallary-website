import React, { useState, useEffect } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import ServicesMore from '../components/services-more/services-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import { ref } from 'firebase/storage'
import { collection } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { getCarouselHoverText } from '../functions/getCarouselHoverText'
import { getCarouselImages } from '../functions/getCarouselImages'

function Services() {
  const [servicesMoreVisible, setServicesMoreVisible] = useState(false)

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
        visible={servicesMoreVisible}
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Services'}
      />
      <WeddingFooter setMoreVisible={setServicesMoreVisible} />
      {servicesMoreVisible && (
        <ServicesMore setMoreVisible={servicesMoreVisible} />
      )}
    </div>
  )
}
export default Services
