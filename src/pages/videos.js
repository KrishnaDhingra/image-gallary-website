import React, { useState, useEffect } from 'react'
import VideosImagesCarousel from '../components/videos-images-carousel/videos-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import HappilyEverAfter from '../components/happily-ever-after/happily-ever-after'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { storage } from '../firebase'
function Videos() {
  const [happilyIndexCounter, setHappilyIndexCounter] = useState(0)
  const [happilyVisible, setHappilyVisible] = useState(false)
  const [happilyMoreVisible, setHappilyMoreVisible] = useState(false)

  const [imageUrls, setImageUrls] = useState([])

  const imagesListRef = ref(storage, 'videos/')

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
      {happilyVisible ? (
        <HappilyEverAfter items={imageUrls} index={happilyIndexCounter} />
      ) : (
        // pass all the videos here that have been fethced from firebase and also pass props that will help select the index of the video that have been selected
        <VideosImagesCarousel
          setHappilyIndexCounter={setHappilyIndexCounter}
          setHappilyVisible={setHappilyVisible}
          visible={happilyMoreVisible}
          items={imageUrls}
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
