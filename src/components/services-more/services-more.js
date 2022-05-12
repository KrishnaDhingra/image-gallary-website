import React, { useEffect, useRef } from 'react'
import WhoAreWe from '../who-are-we/who-are-we'
function ServicesMore({ setMoreVisible }) {
  const scrollRef = useRef()

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [setMoreVisible])

  return (
    <div ref={scrollRef}>
      <WhoAreWe ref={scrollRef} />
    </div>
  )
}
export default ServicesMore
