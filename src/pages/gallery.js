import React, { useState, useEffect } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import GalleryMore from '../components/gallery-more/gallery-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import { storage } from '../firebase'

function Gallery() {
  const [galleryMoreVisible, setGalleryMoreVisible] = useState(false)

  const [imageUrls, setImageUrls] = useState([])

  const imagesListRef = ref(storage, 'gallery/')

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
        visible={galleryMoreVisible}
        items={imageUrls}
        defaultHeading={'Gallery'}
      />
      <WeddingFooter setMoreVisible={setGalleryMoreVisible} />
      {galleryMoreVisible && (
        <GalleryMore setMoreVisible={galleryMoreVisible} />
      )}
    </div>
  )
}
export default Gallery
