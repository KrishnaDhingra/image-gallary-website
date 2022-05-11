import React, { useEffect, useRef } from 'react'

function WeddingMore({ weddingMoreVisible }) {
  const scrollRef = useRef()

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [weddingMoreVisible])

  return (
    <section className="my-[5rem] px-4 sm:px-6" ref={scrollRef}>
      <h1 className="text-[48px] font-semibold">Wedding Photography</h1>
      <p className="mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nam
        labore totam est temporibus magnam, modi a officia laudantium. Corrupti
        debitis optio provident perferendis porro nemo eum numquam iste vitae!
      </p>
    </section>
  )
}
export default WeddingMore
