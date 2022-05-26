import { getDocs } from 'firebase/firestore'

export const getCarouselHoverText = async (hoverTextRef) => {
  let querySnapshot = await getDocs(hoverTextRef)

  let hoverText = []
  querySnapshot.forEach((doc) => {
    hoverText.push(doc.data().text)
  })
  return hoverText
}
