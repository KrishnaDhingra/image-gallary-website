import React from 'react'
import HomeTopBar from '../components/home-top-bar/HomeTopBar'
import HomeBigButton from '../components/HomeBigButton/homebigbutton'
import Counter from '../components/counter/counter'
function Home() {
  return (
    <div className="flex flex-col mt-[6rem] sm:mt-[10rem]">
      <HomeTopBar />
      <HomeBigButton />
      <Counter />
    </div>
  )
}
export default Home
