import React from 'react'
import './book-now-slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'

function BookNowSlider() {
  const items = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
  ]

  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      centeredSlidesBounds={true}
      slidesPerView={'auto'}
      spaceBetween={25}
      pagination={true}
      modules={[Pagination]}
      className="book-now-swiper"
    >
      {items.map((item, index) => {
        return (
          <SwiperSlide className="book-now-swiper-slide">
            <img src={item} alt={`Slider Image ${index}`} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default BookNowSlider
