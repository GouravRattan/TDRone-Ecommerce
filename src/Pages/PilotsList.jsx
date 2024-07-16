import React from 'react'
import MainHand from "../assets/HandHeldImages/Handheld1.jpg";
import Hand1 from "../assets/HandHeldImages/Handheld2.jpg";
import Hand2 from "../assets/HandHeldImages/Handheld3.jpg";
import Hand3 from "../assets/HandHeldImages/Handheld4.jpg";
import Hand4 from "../assets/HandHeldImages/Handheld5.jpg";
import t1 from "../assets/Drivers Img/team_01.jpg"
import t2 from "../assets/Drivers Img/team_02.jpg"
import t3 from "../assets/Drivers Img/team_03.jpg"
import t4 from "../assets/Drivers Img/team_04.jpg"
import { PiFanFill } from "react-icons/pi";
import { GrTarget } from "react-icons/gr";
import { TbLicense, TbTargetArrow} from "react-icons/tb";
import {AiOutlineFileDone } from "react-icons/ai"
import { LiaSuitcaseSolid } from "react-icons/lia";
import Driver2 from "../assets/Drivers Img/Driver2.png"
import { FaAffiliatetheme, FaNfcSymbol } from 'react-icons/fa6';
import { GiDeliveryDrone } from 'react-icons/gi';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
// import ConatctUs from "../Pages/ContactUs"
import AboutUs from "../Pages/AboutUs"

const PilotsList = () => {

    const data = [
        {
          heading: "Public Safety",
          Paragraph: "A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography.",
          btn: "GET STARTED",
          img: Hand1,
          reverse: false,
          icon: <PiFanFill   size={25}/>
        },
        {
          heading: "Geospatial",
          Paragraph: "Our drone services provide you with a skilled UAV pilot that will provide drone videography.",
          btn: "GET STARTED",
          img: Hand2,
          reverse: false,
          icon: <GrTarget size={25} />
        },
        {
          heading: "Electricity",
          Paragraph: "Professionally cultivate one-to-one customer service with robust ideas dynamically innovate.",
          btn: "GET STARTED",
          img: Hand3,
          reverse: false,
          icon: <TbLicense   size={25}/>
        },
        {
          heading: "Oil and Gas",
          Paragraph: "Engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive.",
          btn: "GET STARTED",
          img: Hand4,
          reverse: false,
          icon: <LiaSuitcaseSolid   size={25}/>
        },
      ];

      const data2 = [{
        heading: "SATISFIED CLIENTS",
          Paragraph: "Everage agile frameworks to provide a robust synopsis for high level overviews drone pilots.",  
          icon: <TbTargetArrow   size={60}/>
      },{
        heading: "PROJECT DONE",
          Paragraph: "Organically grow the holistic world view of disruptive innovation via workplace diversity purpose.",  
          icon: <AiOutlineFileDone  size={60}/>
      },{
        heading: "FLIGHT TIME",
          Paragraph: "Bring to the table win-win survival strategies to ensure proactive video domination.",  
          icon: <FaNfcSymbol   size={60}/>
      },{
        heading: "4K RESOLUTION",
          Paragraph: "Capitalize on low hanging fruit to identify a ballpark value added activity to driving test.",  
          icon: <GiDeliveryDrone   size={60}/>
      },
    
    ]

    const pilot = [
      {
        heading: "SATISFIED CLIENTS",
          Paragraph: "Everage agile frameworks to provide a robust synopsis for high level overviews drone pilots.",
          img: t1,
          designation : "Photographer"
      },{
        heading: "PROJECT DONE",
          Paragraph: "Organically grow the holistic world view of disruptive innovation via workplace diversity purpose.",
          img: t2,
          designation : "Pilot"
      },{
        heading: "FLIGHT TIME",
          Paragraph: "Bring to the table win-win survival strategies to ensure proactive video domination.",
          img: t3,
          designation : "Pilot"
      },{
        heading: "4K RESOLUTION",
          Paragraph: "Capitalize on low hanging fruit to identify a ballpark value added activity to driving test.",
          img: t4,
          designation : "Pilot"
      },
      {
        heading: "SATISFIED CLIENTS",
          Paragraph: "Everage agile frameworks to provide a robust synopsis for high level overviews drone pilots.",
          img: t1,
          designation : "Photographer"
      },{
        heading: "PROJECT DONE",
          Paragraph: "Organically grow the holistic world view of disruptive innovation via workplace diversity purpose.",
          img: t2,
          designation : "Pilot"
      },{
        heading: "FLIGHT TIME",
          Paragraph: "Bring to the table win-win survival strategies to ensure proactive video domination.",
          img: t3,
          designation : "Pilot"
      },{
        heading: "4K RESOLUTION",
          Paragraph: "Capitalize on low hanging fruit to identify a ballpark value added activity to driving test.",
          img: t4,
          designation : "Pilot"
      },{
        heading: "PROJECT DONE",
          Paragraph: "Organically grow the holistic world view of disruptive innovation via workplace diversity purpose.",
          img: t2,
          designation : "Pilot"
      },{
        heading: "FLIGHT TIME",
          Paragraph: "Bring to the table win-win survival strategies to ensure proactive video domination.",
          img: t3,
          designation : "Pilot"
      },{
        heading: "4K RESOLUTION",
          Paragraph: "Capitalize on low hanging fruit to identify a ballpark value added activity to driving test.",
          img: t4,
          designation : "Pilot"
      },
    ]
    
  return (<>
    <div className=''>

    <div className='relative w-full h-[60vh]'>
  <img src={MainHand} alt="" className='absolute inset-0 w-full h-full object-cover' />
  <div className='absolute inset-0 flex flex-col items-center text-center'>
    <h1 className='text-bold text-6xl leading-snug max-w-8xl text-white'>DJI AVATA 2</h1>
    <p className='text-[18px] mx-auto max-w-md text-gray-200'>All Thrills No Frills</p>
    <p className='mt-2 text-bold text-blue-400'>Buy Now</p>
  </div>
</div>

<div className="flex w-full justify-between items-center bg-gray-200 h-[70vh] ">
 
  <section className="relative h-[60vh] flex flex-col justify-center items-start pl-80 flex-grow text-gray-700 -mt-10">
    <div className="flex flex-col justify-evenly h-[30vh] w-full md:w-[40vw]">
      <h1 className="text-base font-semibold">AERIAL PHOTOGRAPHY</h1>
      <h1 className="text-6xl font-bold">We Are Licenced Drone Pilots & Aerial Photography Professionals</h1>
      <p className="text-xl mt-10">
      Capturing the moments through photography preserve them through time and holds them in memories. Drone photography can provide a bird’s eye view. The production of elevation data and orthomosaics
      </p>
    <Link to="/AboutUs" className='bg-blue-300 w-52 py-2 border rounded-full mt-10 text-center'>CONTACT US</Link> 
    </div>
    
  </section>

  <div className="flex-shrink-0 pt-24 w-[30vw] bg-gary-200">
    <img src={Driver2} alt="" />
  </div>

  <div  className='w-full flex justify-center text-center my-20'>
  </div>

  
</div>



<div className=' w-full bg-white min-h-[80vh]'>
  <div className=' inset-0 flex flex-col items-center my-20 text-center'>
    <h1 className='font-bold text-2xl leading-snug max-w-8xl text-gray-800'>Our Experience & Measures</h1>
    <p className='text-5xl mx-auto text-gray-400 font-medium'>Our Dedicated Team</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 w-full min-h-[80vh] px-60">
    {pilot.map((item, index) => (
      <div key={index} className="flex flex-col justify-start items-center text-center px-4 py-2 overflow-hidden">
        <div className="flex items-center justify-center bg-gray-200 rounded-full overflow-hidden w-60 h-60">
          <img src={item.img} alt="" className="w-full h-full object-cover" />
        </div>
        <span>{item.designation}</span>
        <h1 className="text-xs font-bold mt-5">{item.heading}</h1>
        <p className="font-normal text-md leading-normal mt-3 w-[15vw]">{item.Paragraph}</p>
      </div>
    ))}
  </div>
  
  <div  className='w-full flex justify-center text-center my-20'>
    <Link to="/ContactUs" className='bg-blue-300 w-52 py-2 border rounded-full'>CONTACT US</Link> 
  </div>
</div>

<Footer />

    </div>  
    </>
  )
}

export default PilotsList