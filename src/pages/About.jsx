import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
      <Title text1={"About"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6  md:w-2/4 text-gray-600">
          <p className="">Welcome to [Your Store Name], your go-to destination for all things [fashion/tech/home essentials/etc.]</p>
          <p className="">We are committed to providing you with the best quality products at unbeatable prices, with a focus on affordability, style, and customer satisfaction.</p>
       <b className='text-gray-800 bold'>OUR MISSION</b>
       <p>At [Your Store Name], our mission is to deliver happiness through every package. We work tirelessly to curate a collection of high-quality products that suit your lifestyle. From [fashionable clothing and accessories] to [cutting-edge gadgets], we offer a wide variety of products for every taste and budget.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY" } text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='text-gray-400'>Quality Assurance:</b>
          <p> We are committed to delivering products and services of the highest quality.It is a vital component of maintaining customer satisfaction and trust. </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='text-gray-400'>Convenience:</b>
          <p>Convenience refers to the ease and simplicity that a product, service, or process provides to users or customers, reducing effort and time spent. </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b className='text-gray-400'>   Exceptional Customer Service:</b>
          <p> Customers are at the heart of everything we do. We believe in providing not just good service, but exceptional service that leaves a lasting impression.</p>
        </div>
       
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About
