import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './counter.css'

function Counter() {
  const { ref, inView } = useInView({ threshold: 0.4 })

  useEffect(() => {
    if (inView) {
      const counters = document.querySelectorAll('.counter')

      counters.forEach((counter) => {
        counter.innerHTML = 0
        const updateCounter = () => {
          const targetCount = +counter.getAttribute('data-target')

          const startingCount = Number(counter.innerHTML)
          const increment = targetCount / 20

          if (startingCount < targetCount) {
            counter.innerHTML = Math.round(startingCount + increment)
            setTimeout(updateCounter, 40)
          } else {
            counter.innerHTML = targetCount
          }
        }

        updateCounter()
      })
    }
  })
  return (
    <section ref={ref} className="counter-container">
      <div>
        <h1 className="counter" data-target="100">
          100
        </h1>
        <p>Project Completed</p>
      </div>
      <div>
        <h1 className="counter" data-target="500">
          500
        </h1>
        <p>Happy Clients</p>
      </div>
      <div>
        <h1 className="counter" data-target="100">
          100
        </h1>
        <p>Destinations</p>
      </div>
    </section>
  )
}
export default Counter
