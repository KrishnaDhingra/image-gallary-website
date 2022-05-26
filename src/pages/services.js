import React, { useState, useEffect } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import ServicesMore from '../components/services-more/services-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { storage } from '../firebase'

function Services() {
  const [servicesMoreVisible, setServicesMoreVisible] = useState(false)

  const [imageUrls, setImageUrls] = useState([])

  const imagesListRef = ref(storage, 'services/')

  useEffect(() => {
    console.log(imageUrls)
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url])
        })
      })
    })
  }, [])
  return (
    <div className="flex flex-col gap-4">
      <WeddingImagesCarousel
        visible={servicesMoreVisible}
        items={imageUrls}
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
