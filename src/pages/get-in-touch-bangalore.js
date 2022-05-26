import React, { useState, useEffect } from 'react'
import ContactForm from '../components/contact-form/contact-form'
import GetInTouch from '../components/get-in-touch/get-in-touch'
// import GetInTouchMap from '../components/get-in-touch-map/get-in-touch-map'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'
import { db, storage } from '../firebase'
function GetInTouchBangalore() {
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
    <main className="flex flex-col">
      <GetInTouch />
      <ContactForm />
      <h1 className="text-center md:text-left md:ml-28 my-[6rem] text-[24px] md:text-[36px] font-semibold">
        Wedding photographers in Bangalore
      </h1>
      <WeddingImagesCarousel
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Wedding'}
      />
      {/* <GetInTouchMap /> */}
    </main>
  )
}
export default GetInTouchBangalore
