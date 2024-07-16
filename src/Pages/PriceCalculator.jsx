import React from 'react'
import MainHand from "../assets/HandHeldImages/Handheld1.jpg";
import { useState } from 'react';


const PriceCalculator = () => {

    const [showAdditionalForm, setShowAdditionalForm] = useState(false);

  const handleNextClick = () => {
    setShowAdditionalForm(true);
  };
  return (
    <>
    <div>
        <div className='relative w-full h-[60vh]'>
    <img src={MainHand} alt="" className='absolute inset-0 w-full h-full object-cover' />
    <div className='absolute inset-0 flex flex-col items-center text-center'>
      <h1 className='text-bold text-6xl leading-snug max-w-8xl text-white'>DJI AVATA 2</h1>
      <p className='text-[18px] mx-auto max-w-md text-gray-200'>All Thrills No Frills</p>
      <p className='mt-2 text-bold text-blue-400'>Buy Now</p>
    </div>
  </div>
  </div>
  <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">

  <form className="w-full max-w-3xl bg-white p-8 rounded shadow-md">
        <div className="mb-4 flex gap-20 items-center w-full">
          <label className=" flex justify-center items-center text-gray-700 text-lg mb-2" htmlFor="video">
            Video
          </label>
          <select
            id="video"
            className="flex justify-center items-center text-center appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Hd videos</option>
            <option>4k videos</option>
            <option>Video Editing</option>
          </select>
        </div>

        <div className="mb-4 flex gap-20 items-start w-full">
          <label className=" text-gray-700 text-lg mb-2" htmlFor="photography">
            Photography
          </label>
          <select
            id="photography"
            className=" appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>5-15 drone pictures</option>
            <option>More than 20 drone pictures</option>
            <option>Color correction</option>
          </select>
        </div>

        <div className="mb-4 flex gap-20 items-start w-full">
          <label className="block text-gray-700 text-lg mb-2" htmlFor="rentEquipment">
            Rent Equipment
          </label>
          <select
            id="rentEquipment"
            className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="mb-4 flex gap-20 items-start w-full">
          <label className="block text-gray-700 text-lg mb-2" htmlFor="dronePilots">
            Drone Pilots
          </label>
          <input
            id="dronePilots"
            type="text"
            className="appearance-none border border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4 flex gap-20 items-start w-full">
          <label className="block text-gray-700 text-lg mb-2" htmlFor="hours">
            Hours
          </label>
          <input
            id="hours"
            type="text"
            className="appearance-none border border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4 flex gap-20 items-start w-full">
          <label className="block text-gray-700 text-lg mb-2" htmlFor="droneLicense">
            Drone License
          </label>
          <div className="flex items-center">
            <input
              id="droneLicense"
              type="checkbox"
              className="appearance-none h-6 w-6 rounded-full border border-gray-400 checked:bg-blue-500 focus:outline-none focus:shadow-outline"
            />
            <span className="ml-2 text-gray-700 text-lg">Yes</span>
          </div>
        </div>

        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleNextClick}
        >
          Next
        </button>
      </form>

  {showAdditionalForm && (
    <form className="w-full max-w-lg bg-white p-8 rounded shadow-md mt-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-lg mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="appearance-none border border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-lg mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="appearance-none border border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-lg mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          type="text"
          className="appearance-none border border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-lg mb-2" htmlFor="address">
          Address
        </label>
        <input
          id="address"
          type="text"
          className="appearance-none border border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-lg mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="appearance-none border border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  )}
</div>
  </>
  )
}

export default PriceCalculator