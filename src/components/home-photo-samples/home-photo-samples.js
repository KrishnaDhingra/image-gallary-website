import React from 'react'
import './home-photo-samples.css'
import SamplePhoto from '../../utilities/sample-photo.png'

function HomePhotoSamplesContainer() {
  return (
    <section className="main-samples-container mb-[46rem]">
      {[1, 2, 3, 4].map((item) => {
        return (
          <div className="samples-inner">
            <div className="background"></div>
            <div className="content-container px-8 md:px-12 md:gap-[3.5rem] xl:gap-0 xl:px-[4.5rem]">
              <div className="flex flex-col gap-4">
                <h3 className="content-heading font-semibold text-[20px]">
                  Candid Photography
                </h3>
                <p className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis
                </p>
                <h3 className="discover font-semibold text-[20px]">
                  Discover +
                </h3>
              </div>
              <div className="sample-image-container">
                <img src={SamplePhoto} alt="" />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
function HomePhotoSample() {
  return (
    <div className="samples-inner">
      <div className="background"></div>
      <div className="content-container px-8 md:px-12 md:gap-[3.5rem] xl:gap-0 xl:px-[4.5rem]">
        <div className="flex flex-col gap-4">
          <h3 className="content-heading font-semibold text-[20px]">
            Candid Photography
          </h3>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis
          </p>
          <h3 className="discover font-semibold text-[20px]">Discover +</h3>
        </div>
        <div className="sample-image-container">
          <img src={SamplePhoto} alt="" />
        </div>
      </div>
    </div>
  )
}
export default HomePhotoSamplesContainer
