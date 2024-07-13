import React from 'react'
import MainHand from "../assets/HandHeldImages/Handheld1.jpg";
import Hand1 from "../assets/HandHeldImages/Handheld2.jpg";
import Hand2 from "../assets/HandHeldImages/Handheld3.jpg";
import Hand3 from "../assets/HandHeldImages/Handheld4.jpg";
import Hand4 from "../assets/HandHeldImages/Handheld5.jpg";
// import Footer from '../Components/Footer';


const AboutUs = () => {

    const data = [
        {
          heading: "Public Safety",
          Paragraph: "A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography.",
          btn: "GET STARTED",
          img: Hand1,
          reverse: false,
        },
        {
          heading: "Geospatial",
          Paragraph: "Our drone services provide you with a skilled UAV pilot that will provide drone videography.",
          btn: "GET STARTED",
          img: Hand2,
          reverse: false,
        },
        {
          heading: "Electricity",
          Paragraph: "Professionally cultivate one-to-one customer service with robust ideas dynamically innovate.",
          btn: "GET STARTED",
          img: Hand3,
          reverse: false,
        },
        {
          heading: "Oil and Gas",
          Paragraph: "Engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive.",
          btn: "GET STARTED",
          img: Hand4,
          reverse: false,
        },
      ];

  return (
    <>
    <div className=''>

    <div className='relative w-full h-[60vh]'>
  <img src={MainHand} alt="" className='absolute inset-0 w-full h-full object-cover' />
  <div className='absolute inset-0 flex flex-col items-center text-center'>
    <h1 className='text-bold text-6xl leading-snug max-w-8xl text-white'>DJI AVATA 2</h1>
    <p className='text-[18px] mx-auto max-w-md text-gray-200'>All Thrills No Frills</p>
    <p className='mt-2 text-bold text-blue-400'>Buy Now</p>
  </div>
</div>
    <div className=''>

    <div>
        <section className='w-full h-[80vh] bg-white flex-col justify-center items-center'>
        <div className='flex flex-col justify-evenly h-[22vh]'>

        <h1 className='text-xl font-bold'>AERIAL PHOTOGRAPHY</h1>
        <h1 className='text-6xl font-bold '>We Are Drone Pilots</h1>

        <p className='w-[30vw] text-xl leading-8'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further.</p>
 
        </div>
        <div className='grid grid-cols-2 w-[30vw] gap-10'>
        {
            data.map((item, index) => (

                <div className='bg-white flex flex-col justify-start items-start gap-y-5'>
                <h1 className='font-semibold text-2xl'>{item.heading}</h1>
                <p className='font-normal text-md'>{item.Paragraph}</p>
            </div>
        )
            )
        }
        </div>
    </section>
    </div>

    </div>

    </div>
    

    </>
  )
}

export default AboutUs