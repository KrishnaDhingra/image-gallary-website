import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { data } from './faq-data'
import './faq.css'

function FAQ() {
  const parentVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.6 } },
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
    <AnimateSharedLayout>
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
      <motion.section
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="faq-container my-[2rem] md:my-[5rem]"
      >
        <motion.h1
          className="text-[48px] md:text-[60px]"
          variants={childrenVariants}
        >
          FAQ
        </motion.h1>
        <motion.p
          variants={childrenVariants}
          className="text-center px-2 sm:px-0 "
        >
          Find your answers for the most asked questions
        </motion.p>

        <div className="faq-inner">
          <motion.ul variants={childrenVariants} layout>
            {data.map((element) => {
              return (
                <Item question={element.question} answer={element.answer} />
              )
            })}
          </motion.ul>
        </div>
      </motion.section>
    </AnimateSharedLayout>
  )
}

function Item({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.li layout>
      <motion.div
        layout="position"
        className="question-container"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{question}</p>
        <button>{isOpen ? '-' : '+'}</button>
      </motion.div>
      <AnimatePresence>{isOpen && <Content answer={answer} />}</AnimatePresence>
    </motion.li>
  )
}
function Content({ answer }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="answer"
    >
      {answer}
    </motion.p>
  )
}
export default FAQ
