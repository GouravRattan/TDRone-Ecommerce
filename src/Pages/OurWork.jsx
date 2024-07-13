import React from 'react'
import MainHand from "../assets/HandHeldImages/Handheld1.jpg";
import Hand1 from "../assets/HandHeldImages/Handheld2.jpg";
import Hand2 from "../assets/HandHeldImages/Handheld3.jpg";
import Hand3 from "../assets/HandHeldImages/Handheld4.jpg";
import Hand4 from "../assets/HandHeldImages/Handheld5.jpg";
import Footer from '../Components/Footer';

const OurWork = () => {

    const data = [
        {
          heading: "Public Safety",
          Paragraph: "Better serve your communities with accurate and timely aerial intel.",
          btn: "GET STARTED",
          img: Hand1,
          reverse: false,
        },
        {
          heading: "Geospatial",
          Paragraph: "Map, Model, and Inspect with Drone Solutions Automate Workflows and Digitize Your Assets",
          btn: "GET STARTED",
          img: Hand2,
          reverse: false,
        },
        {
          heading: "Electricity",
          Paragraph: "Visualize remote assets in real-time and improve decisions and safety.",
          btn: "GET STARTED",
          img: Hand3,
          reverse: false,
        },
        {
          heading: "Oil and Gas",
          Paragraph: "Safely inspect and manage equipment and infrastructure.",
          btn: "GET STARTED",
          img: Hand4,
          reverse: false,
        },
      ];

  return (
    <>
    <div className='w-full h-[20vh] flex-col justify-center items-center text-center m-5'>
      <h1 className='text-bold text-6xl leading-loose max-w-8xl'>Camera Drones</h1>
      <p className='text-[18px] mx-auto max-w-md text-gray-600'>Capture your moments from above with a mini drone, FPV, or professional aerial camera.</p>
    </div>

    <div className=' text-white px-5'>
    <div className='w-full absolute h-[20vh] flex-col justify-center items-center text-center'>
              <h1 className='text-bold text-6xl leading-snug max-w-8xl'>DJI AVATA 2</h1>
              <p className='text-[18px] mx-auto max-w-md text-gray-600'>All Thrills No Frills</p>
              <p className=' mt-2 text-bold text-blue-400'>Buy Now</p>
            </div>
      <img src={MainHand} alt="" />
    </div>

    <section className="px-3 lg:py-1">
      <div className="grid lg:grid-cols-2 gap-10 mx-40 my-10">
        {data.map((item, index) => (
          <div key={index} className={`lg:order-${item.reverse ? '2' : '1'}`}>

<div className='relative h-[30vh] w-[45vw] flex flex-col justify-center items-center text-center'>
  <h1 className='text-bold text-neutral-600 text-6xl leading-snug max-w-8xl'>{item.heading}</h1>
  <p className='text-[18px] mx-auto max-w-md text-gray-600'>{item.Paragraph}</p>
  <div className="w-[12vw] mt-5 px-5 py-2 border-[2px] border-zinc-500 flex items-center justify-center rounded-full font-light text-sm capitalize">
    Look At The Projects
  </div>
</div>
            <img
              className="w-full h-auto lg:max-w-[40vw] lg:h-[500px] object-cover"
              src={item.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
    <section className='w-full h-[80vh] bg-neutral-300 flex justify-center items-center'>

        <div className='grid grid-cols-2 gap-10 m-10 w-[60vw]'>

        {
            data.map((item, index) => (
                <div className='w-full grid grid-cols-2'>
            <img
              className="w-full h-auto lg:max-w-[46vw] lg:h-[220px] object-cover"
              src={item.img}
              alt=""
            />

            <div className='bg-white flex flex-col justify-start items-start p-5 gap-y-5 '>
                <h1 className='font-semibold text-2xl'>{item.heading}</h1>
                <p className='font-normal text-md'>{item.Paragraph}</p>
                <button>Learn More</button>
            </div>
            </div>
        )
            )
        }
        </div>
    </section>
    <Footer />
  </>
  )
}

export default OurWork