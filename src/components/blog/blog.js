import React from 'react'
import TrendingImage from '../../utilities/trending-image.png'
import BlogImage from '../../utilities/blog-image.png'
import { motion } from 'framer-motion'
import './blog.css'

function Blog() {
  return (
    <main className="blog-container my-[2rem] md:my-[5rem] px-8 md:px-0">
      <div className="hidden lg:block circle circle1"></div>
      <div className="hidden lg:block circle circle2"></div>
      <h1 className="trending-heading font-semibold text-[48px] md:text-[60px]">
        Trending
      </h1>
      <article className="trending-container">
        <div>
          <img
            className="trending-image object-cover max-w-[279px] w-full aspect-video rounded-[15px]"
            src={TrendingImage}
            alt=""
          />
        </div>
        <TrendingInfo />
      </article>
      <section className="blog-inner">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <article>
              <div className="mb-6">
                <img
                  className="w-full aspect-video object-cover rounded-[15px]"
                  src={BlogImage}
                  alt=""
                />
              </div>
              <BlogInfo />
            </article>
          )
        })}
      </section>
    </main>
  )
}
function TrendingInfo() {
  return (
    <section className="trending-info">
      <h3 className="text-[14px] sm:text-[20px] font-semibold">
        Category Name
      </h3>
      <h1 className="text-[20px] sm:text-[48px] font-semibold">
        Lorem Ispum Dolor Sit
      </h1>
      <div className="mt-3 bottom-container flex gap-4">
        <div className="bottom-container-circle"></div>
        <div className="bottom-right-container">
          <h4 className="font-medium">Name of the writer</h4>
          <p className="font-medium text-gray-600">Designation</p>
        </div>
      </div>
    </section>
  )
}
function BlogInfo() {
  return (
    <section className="blog-info">
      <h4 className="text-[14px] font-semibold">Category Name</h4>
      <h3 className="text-[20px] font-semibold">Lorem Ispum Dolor Sit</h3>
      <div className="mt-3 bottom-container flex gap-4">
        <div className="bottom-container-circle"></div>
        <div className="bottom-right-container">
          <h4 className="font-medium">Name of the writer</h4>
          <p className="font-medium text-gray-600">Designation</p>
        </div>
      </div>
    </section>
  )
}
export default Blog
