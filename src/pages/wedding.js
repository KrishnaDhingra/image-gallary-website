import React, { useState, useEffect } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import WeddingMore from '../components/wedding-more/wedding-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { doc, getDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'

function Wedding() {
  const [weddingMoreVisible, setWeddingMoreVisible] = useState(false)
  const [hoverText, setHoverText] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  const imagesListRef = ref(storage, 'wedding/')
  const hoverTextDocRef = doc(db, 'wedding-hover-text', 'wedding-hover-text')

  useEffect(() => {
    const getHoverText = async () => {
      const docSnap = await getDoc(hoverTextDocRef)
      docSnap.data().forEach((item) => {
        console.log(item)
      })
    }

    const getImages = () => {
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
        items={imageUrls}
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
