import React from 'react'
import './Navbar.css'
import Bell from '../../utilities/navbar-bell.svg'
import Logo from '../../utilities/navbar-logo.svg'

function Navbar() {
  return (
    <nav>
      <ul>
        <section className="sm:px-[2rem] lg:px-[4.2rem]">
          <li>
            <a href="">
              <span>About us</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Jobs</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Location</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Book Now</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>FAQ</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Pricing</span>
            </a>
          </li>
        </section>
      </ul>

      <section className="px-[1rem] sm:px-[2rem] lg:px-[4.2rem]">
        <div className="bell">
          <img src={Bell} alt="" />
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </section>
    </nav>
  )
}
export default Navbar
