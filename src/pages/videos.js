import React, { useState, useEffect } from 'react'
import VideosImagesCarousel from '../components/videos-images-carousel/videos-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import HappilyEverAfter from '../components/happily-ever-after/happily-ever-after'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'
import { db, storage } from '../firebase'

function Videos() {
  const [happilyIndexCounter, setHappilyIndexCounter] = useState(0)
  const [happilyVisible, setHappilyVisible] = useState(false)
  const [happilyMoreVisible, setHappilyMoreVisible] = useState(false)

  const [hoverText, setHoverText] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  const imagesListRef = ref(storage, 'videos/')
  const hoverTextRef = collection(db, 'wedding-hover-text')

  useEffect(() => {
    const getHoverText = async () => {
      let querySnapshot = await getDocs(hoverTextRef)

      let hoverText = []
      querySnapshot.forEach((doc) => {
        hoverText.push(doc.data().text)
      })
      setHoverText(hoverText)
    }
    const getImages = () => {
      setImageUrls([])
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url])
          })
        })
      })
    }
    getHoverText()
    getImages()
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
          images={imageUrls}
          hoverText={hoverText}
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
