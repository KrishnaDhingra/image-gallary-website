import React from 'react'
import { motion } from 'framer-motion'
import PricingBigImage from './pricing-big-image'
import WhatYouGetChart from './what-you-get-chart'
import './pricing.css'

function Pricing() {
  const parentVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.7 } },
  }
  const childrenVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.6, 0, 0.1, 1], duration: 0.6 },
    },
  }
  const circleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2 } },
  }

  return (
    <motion.main
      className="pricing-container my-[2rem] md:my-[4rem]"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:block circle circle1"
      ></motion.div>
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:block circle circle2"
      ></motion.div>
      <motion.h1
        variants={childrenVariants}
        className="pricing-heading text-[48px] md:text-[60px]"
      >
        Pricing
      </motion.h1>
      <motion.p variants={childrenVariants} className="text-center mx-3">
        Find your answers for the most asked questions
      </motion.p>
      <motion.section className="pricing-inner" variants={childrenVariants}>
        <article className="basic-package">
          <p className="top-banner">Basic Package</p>
          <div className="pricing-content-container">
            <div className="my-[2rem]">
              <h1 className="basic-package-price font-semibold">
                ₹2.45 <h3 className="inline">Lakh</h3>
              </h1>
              <h4 className="basic-package-price">$3192 | €2865</h4>
            </div>
            <p className="my-4 basic-package-points-heading">Inclusive of</p>
            <BasicPackagePoints />

            <button className="basic-package-button">Book Now</button>
          </div>
        </article>

        <article className="customized-package">
          <p className="top-banner">Customized Package</p>
          <div className="pricing-content-container">
            <h1 className="font-semibold text-[36px] ">Let's Talk</h1>
            <p className=" my-3">
              Everything in basic, Plus Best for covering all Events
            </p>
            <CustomizedPackagePoints />
            <button>Get Quote</button>
          </div>
        </article>
      </motion.section>

      {/* <PricingBigImage /> */}

      <WhatYouGetChart />
    </motion.main>
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
    <ul className="basic-package-points-container">
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
        return <li key={item}>{item}</li>
      })}
    </ul>
  )
}
export default Pricing
