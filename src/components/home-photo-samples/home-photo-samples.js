import React from 'react'
import './home-photo-samples.css'
import SamplePhoto from '../../utilities/sample-photo.png'

function HomePhotoSamples() {
  return (
    <section className="main-samples-container">
      <div className="background"></div>
      <div className="content-container">
        <p className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis
        </p>
        <div className="sample-image-container">
          <img src={SamplePhoto} alt="" />
        </div>
      </div>
    </section>
  )
}
export default HomePhotoSamples
