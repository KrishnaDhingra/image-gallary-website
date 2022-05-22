import React from 'react'
import HomeTopBar from '../components/home-top-bar/HomeTopBar'
import HomeBigButton from '../components/HomeBigButton/homebigbutton'
import Counter from '../components/counter/counter'
import WhoAreWe from '../components/who-are-we/who-are-we'
import HomePhotoSamplesContainer from '../components/home-photo-samples/home-photo-samples'
import Testimonials from '../components/testimonials/testimonials'
function Home() {
  return (
    <div className="relative flex flex-col mt-[3rem] sm:mt-[6rem]">
      <HomeTopBar />
      <HomeBigButton />
      <Counter />
      <WhoAreWe />
      <HomePhotoSamplesContainer />
      <Testimonials />
    </div>
  )
}
export default Home
