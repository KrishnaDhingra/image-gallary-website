import React, { useState } from 'react'
import VideosImagesCarousel from '../components/videos-images-carousel/videos-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'

function Videos() {
  const [videosMoreVisible, setVideosMoreVisible] = useState(false)

  const items = ['Videos1', 'Videos2', 'Videos3', 'Videos4']
  return (
    <div className="flex flex-col gap-4">
      <VideosImagesCarousel
        visible={videosMoreVisible}
        items={items}
        defaultHeading={'Outdoor'}
      />
      <WeddingFooter setMoreVisible={setVideosMoreVisible} />
      {videosMoreVisible && <OutdoorMore setMoreVisible={videosMoreVisible} />}
    </div>
  )
}
export default Videos
