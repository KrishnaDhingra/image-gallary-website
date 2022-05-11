import React from 'react'
import HomeTopBar from '../components/home-top-bar/HomeTopBar'
import HomeBigButton from '../components/HomeBigButton/homebigbutton'
import Counter from '../components/counter/counter'
import WhoAreWe from '../components/who-are-we/who-are-we'
import HomePhotoSamplesContainer from '../components/home-photo-samples/home-photo-samples'
import Footer from '../components/footer/footer'
function Home() {
  return (
    <div className="relative flex flex-col mt-[6rem] sm:mt-[9rem]">
      <HomeTopBar />
      <HomeBigButton />
      <Counter />
      <WhoAreWe />
      <HomePhotoSamplesContainer />
      <Footer />
    </div>
  )
}
export default Home
