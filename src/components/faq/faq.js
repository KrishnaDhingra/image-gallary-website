import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import './faq.css'

function FAQ() {
  const data = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque',
    },
  ]
  return (
    <AnimateSharedLayout>
      <div className="hidden lg:block circle circle1"></div>
      <div className="hidden lg:block circle circle2"></div>
      <motion.section className="faq-container">
        <h1>FAQ</h1>
        <p className="text-center">
          Find your answers for the most asked questions
        </p>

        <div className="faq-inner">
          <motion.ul layout>
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
