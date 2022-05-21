import React from 'react'
import ContactForm from '../components/contact-form/contact-form'
import GetInTouch from '../components/get-in-touch/get-in-touch'
// import GetInTouchMap from '../components/get-in-touch-map/get-in-touch-map'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
function GetInTouchBangalore() {
  const items = [
    {
      image: 'https://swiperjs.com/demos/images/nature-1.jpg',
      text: 'Wedding1',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-2.jpg',
      text: 'Wedding2',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-3.jpg',
      text: 'Wedding3',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-4.jpg',
      text: 'Wedding4',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-5.jpg',
      text: 'Wedding5',
    },
    {
      image: 'https://swiperjs.com/demos/images/nature-7.jpg',
      text: 'Wedding6',
    },
  ]

  return (
    <main className="flex flex-col">
      <GetInTouch />
      <ContactForm />
      <h1 className="text-center md:text-left md:ml-28 my-[6rem] text-[24px] md:text-[36px] font-semibold">
        Wedding photographers in Bangalore
      </h1>
      <WeddingImagesCarousel items={items} defaultHeading={'Wedding'} />
      {/* <GetInTouchMap /> */}
    </main>
  )
}
export default GetInTouchBangalore
