import { getDownloadURL, listAll } from 'firebase/storage'

export const getCarouselImages = (imagesListRef) => {
  let imagesUrls = []
  listAll(imagesListRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        imagesUrls.push(url)
      })
    })
  })
  return imagesUrls
}
