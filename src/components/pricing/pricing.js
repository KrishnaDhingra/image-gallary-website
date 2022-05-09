import React from 'react'
import { motion } from 'framer-motion'
import WhatYouGetChart from './what-you-get-chart'
import './pricing.css'

function Pricing() {
  return (
    <main className="pricing-container">
      <h1 className="pricing-heading">Pricing</h1>
      <p className="text-center">
        Find your answers for the most asked questions
      </p>
      <section className="pricing-inner">
        <article className="basic-package">
          <p className="top-banner">Basic Package</p>
          <div className="pricing-content-container">
            <div className="my-[2rem]">
              <h1 className="font-semibold">
                ₹2.45 <h3 className="inline">Lakh</h3>
              </h1>
              <h4>$3192 | €2865</h4>
            </div>
            <p className="my-4">Inclusive of</p>
            <BasicPackagePoints />

            <button>Book Now</button>
          </div>
        </article>

        <article className="customized-package">
          <p className="top-banner">Basic Package</p>
          <div className="pricing-content-container">
            <h1 className="font-semibold text-[36px] text-white">Let's Talk</h1>
            <p className="text-white my-3">
              Everything in basic, Plus Best for covering all Events
            </p>
            <CustomizedPackagePoints />
            <button>Get Quote</button>
          </div>
        </article>
      </section>

      <WhatYouGetChart />
    </main>
  )
}
function BasicPackagePoints() {
  const points = [
    '2 Events',
    'Candid Photography',
    'Tranditional Photography',
    'Tranditional Video',
    'Wedding Film',
    'Premium album',
  ]
  return (
    <ul>
      {points.map((item) => {
        return <li key={item}>{item}</li>
      })}
    </ul>
  )
}
function CustomizedPackagePoints() {
  const points = [
    'Unlimited',
    'Candid Photography',
    'Tranditional Photography',
    'Tranditional Video',
    'Wedding Film',
    'Luxury album',
    'Cloud Storage',
    'Pre Wedding shoot',
    'Drone',
  ]
  return (
    <ul className="mt-4">
      {points.map((item) => {
        return (
          <li key={item} className="text-white">
            {item}
          </li>
        )
      })}
    </ul>
  )
}
export default Pricing
