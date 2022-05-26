import React, { useState, useEffect } from 'react'
import OutdoorImagesCarousel from '../components/outdoor-images-carousel/outdoor-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { storage } from '../firebase'

function Outdoor() {
  const [outdoorMoreVisible, setOutdoorMoreVisible] = useState(false)

  const [imageUrls, setImageUrls] = useState([])

  const imagesListRef = ref(storage, 'outdoor/')

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
      <OutdoorImagesCarousel
        visible={outdoorMoreVisible}
        items={imageUrls}
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
