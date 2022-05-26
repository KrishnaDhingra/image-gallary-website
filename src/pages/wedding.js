import React, { useState, useEffect } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import WeddingMore from '../components/wedding-more/wedding-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'
import { db, storage } from '../firebase'

function Wedding() {
  const [weddingMoreVisible, setWeddingMoreVisible] = useState(false)
  const [hoverText, setHoverText] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  const imagesListRef = ref(storage, 'wedding/')
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
