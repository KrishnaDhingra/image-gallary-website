import React from 'react'
import './HomeTopBar.css'
import SideBarImage from '../../utilities/sidebar-image.png'
import { Link } from 'react-router-dom'

function HomeTopBar() {
  return (
    <section className="home-top-bar-main-container">
      <div className="left flex flex-col justify-center">
        <h1 className="heading m-0">Lorem Ispum</h1>
        <p className="text-md m-0 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe
          iusto libero nam eos molestias.
        </p>
        <Link to="/wedding">
          <button className="start">Start</button>
        </Link>
        <a href="" className="mt-3">
          <span className="text-md discover-more">Discover More</span>
        </a>
      </div>
      <div className="right">
        <div className="relative ">
          <img className="" src={SideBarImage} alt="" />
        </div>
      </div>
    </section>
  )
}
export default HomeTopBar
