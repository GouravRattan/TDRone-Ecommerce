import React from 'react'
import MainHand from "../assets/HandHeldImages/Handheld1.jpg";
import Footer from '../Components/Footer';
import { BsMeta } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";





const ContactUs = () => {
  return  <>
<div className='relative w-full h-[60vh]'>
  <img src={MainHand} alt="" className='absolute inset-0 w-full h-full object-cover' />
  <div className='absolute inset-0 flex flex-col items-center text-center'>
    <h1 className='text-bold text-6xl leading-snug max-w-8xl text-white'>DJI AVATA 2</h1>
    <p className='text-[18px] mx-auto max-w-md text-gray-200'>All Thrills No Frills</p>
    <p className='mt-2 text-bold text-blue-400'>Buy Now</p>

  </div>
</div> 

<div className="flex flex-col-2 justify-around h-[100vh] w-full md:w-full px-60 py-32">
    <div className='w-[52vw] flex-col space-y-5 h-[0vh]'>
      <h1 className="text-base font-semibold">AERIAL PHOTOGRAPHY</h1>
      <h1 className="text-6xl font-bold">Follow Us, Like Us</h1>
      <p className="text-xl leading-7 w-[35vw]">
Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
      </p>
      <div className='flex justify-start gap-10 mt-20 rounded-full' >
        <FaSquareXTwitter  size={60}/>
        <ImYoutube size={60}/>
        <BsMeta size={60}/>
      </div>
      </div>
      <form className="w-full max-w-2xl bg-white rounded-full px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <label className="block text-lg font-xl mb-2" htmlFor="name">
            Your Name (required)
          </label>
          <input
            className=" appearance-none border border-gray-400 rounded-full w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block  text-gray-700 text-lg font-xl mb-2" htmlFor="email">
            Your Email (required)
          </label>
          <input
            className=" appearance-none border border-gray-400 rounded-full w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-xl text-lg mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className=" appearance-none border border-gray-400 rounded-full w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-xl mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            className=" appearance-none border border-gray-400 rounded-2xl w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="10"
            
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-xl py-3 px-12 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            SEND
          </button>
        </div>
      </form>
    </div>

    <Footer />
    
</>
}

export default ContactUs