import React, { useState, useEffect } from 'react'
import OutdoorImagesCarousel from '../components/outdoor-images-carousel/outdoor-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'
import { db, storage } from '../firebase'

function Outdoor() {
  const [outdoorMoreVisible, setOutdoorMoreVisible] = useState(false)

  const [hoverText, setHoverText] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  const imagesListRef = ref(storage, 'outdoor/')
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
