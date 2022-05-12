import React, { useState } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import ServicesMore from '../components/services-more/services-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'

function Services() {
  const [servicesMoreVisible, setServicesMoreVisible] = useState(false)

  const items = ['Krishna', 'Khushi', 'Sachin', 'Dhingra']
  return (
    <div className="flex flex-col gap-4">
      <WeddingImagesCarousel
        visible={servicesMoreVisible}
        items={items}
        defaultHeading={'Services'}
      />
      <WeddingFooter setMoreVisible={setServicesMoreVisible} />
      {servicesMoreVisible && (
        <ServicesMore setMoreVisible={servicesMoreVisible} />
      )}
    </div>
  )
}
export default Services
