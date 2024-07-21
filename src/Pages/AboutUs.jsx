import React from "react";
import MainHand from "../assets/HandHeldImages/Handheld1.jpg";
import Hand1 from "../assets/HandHeldImages/Handheld2.jpg";
import Hand2 from "../assets/HandHeldImages/Handheld3.jpg";
import Hand3 from "../assets/HandHeldImages/Handheld4.jpg";
import Hand4 from "../assets/HandHeldImages/Handheld5.jpg";
import t1 from "../assets/Drivers Img/team_01.jpg";
import t2 from "../assets/Drivers Img/team_02.jpg";
import t3 from "../assets/Drivers Img/team_03.jpg";
import t4 from "../assets/Drivers Img/team_04.jpg";
import p2 from "../assets/DroneImages/2.png";
import { PiFanFill } from "react-icons/pi";
import { GrTarget } from "react-icons/gr";
import { TbLicense, TbTargetArrow } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";
import { LiaSuitcaseSolid } from "react-icons/lia";
import Driver1 from "../assets/Drivers Img/Driver1.jpg";
import { FaAffiliatetheme, FaNfcSymbol } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

// import Footer from '../Components/Footer';

const AboutUs = () => {
  const data = [
    {
      heading: "Public Safety",
      Paragraph:
        "A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography.",
      btn: "GET STARTED",
      img: Hand1,
      reverse: false,
      icon: <PiFanFill size={25} />,
    },
    {
      heading: "Geospatial",
      Paragraph:
        "Our drone services provide you with a skilled UAV pilot that will provide drone videography.",
      btn: "GET STARTED",
      img: Hand2,
      reverse: false,
      icon: <GrTarget size={25} />,
    },
    {
      heading: "Electricity",
      Paragraph:
        "Professionally cultivate one-to-one customer service with robust ideas dynamically innovate.",
      btn: "GET STARTED",
      img: Hand3,
      reverse: false,
      icon: <TbLicense size={25} />,
    },
    {
      heading: "Oil and Gas",
      Paragraph:
        "Engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive.",
      btn: "GET STARTED",
      img: Hand4,
      reverse: false,
      icon: <LiaSuitcaseSolid size={25} />,
    },
  ];

  const data2 = [
    {
      heading: "SATISFIED CLIENTS",
      Paragraph:
        "Everage agile frameworks to provide a robust synopsis for high level overviews drone pilots.",
      icon: <TbTargetArrow size={60} />,
    },
    {
      heading: "PROJECT DONE",
      Paragraph:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity purpose.",
      icon: <AiOutlineFileDone size={60} />,
    },
    {
      heading: "FLIGHT TIME",
      Paragraph:
        "Bring to the table win-win survival strategies to ensure proactive video domination.",
      icon: <FaNfcSymbol size={60} />,
    },
    {
      heading: "4K RESOLUTION",
      Paragraph:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to driving test.",
      icon: <GiDeliveryDrone size={60} />,
    },
  ];

  const pilot = [
    {
      heading: "SATISFIED CLIENTS",
      Paragraph:
        "Everage agile frameworks to provide a robust synopsis for high level overviews drone pilots.",
      img: t1,
      designation: "Photographer",
    },
    {
      heading: "PROJECT DONE",
      Paragraph:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity purpose.",
      img: t2,
      designation: "Pilot",
    },
    {
      heading: "FLIGHT TIME",
      Paragraph:
        "Bring to the table win-win survival strategies to ensure proactive video domination.",
      img: t3,
      designation: "Pilot",
    },
    {
      heading: "4K RESOLUTION",
      Paragraph:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to driving test.",
      img: t4,
      designation: "Pilot",
    },
  ];

  return (
    <>
      <div className="">
        <div className="relative w-full h-[60vh]">
          <img
            src={MainHand}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center text-center">
            <h1 className="text-bold text-6xl leading-snug max-w-8xl text-white">
              DJI AVATA 2
            </h1>
            <p className="text-[18px] mx-auto max-w-md text-gray-200">
              All Thrills No Frills
            </p>
            <p className="mt-2 text-bold text-blue-400">Buy Now</p>
          </div>
        </div>

        <img className="absolute bottom-10 right-0 z-30 " src={p2} alt="" />
        <div className="flex w-full justify-between items-center ">
          <div className="flex-shrink-0 pt-20 ml-80 w-[28vw] ">
            <img src={Driver1} alt="" />
          </div>
          <section className="relative h-[80vh] bg-white flex flex-col justify-center items-start pl-10 pt-20 flex-grow">
            <div className="flex flex-col justify-evenly h-[30vh] w-full md:w-[30vw]">
              <h1 className="text-base font-semibold">AERIAL PHOTOGRAPHY</h1>
              <h1 className="text-6xl font-bold">We Are Drone Pilots</h1>
              <p className="text-xl">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further.
              </p>
            </div>
            <div className="grid grid-cols-2 w-full md:w-[30vw] gap-10">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white flex flex-col justify-start items-start gap-y-5"
                >
                  <div className="flex items-center">
                    <span className="pt-2 pr-1">{item.icon}</span>
                    <h1 className="font-semibold text-2xl">{item.heading}</h1>
                  </div>
                  <p className="font-normal text-md">{item.Paragraph}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="relative w-full h-[30vw] bg-gray-300">
          <div className="absolute inset-0 flex flex-col items-center mt-32 text-center">
            <h1 className="font-bold text-5xl leading-snug max-w-8xl text-gray-800">
              Our Experience & Measures
            </h1>
            <p className="text-xl mx-auto max-w-xl text-gray-400 font-medium">
              If you want a drone for shooting 4K videos of your concerts, the
              next one is perfectly built just for you.
            </p>
          </div>

          <div className="absolute grid grid-cols-1 md:grid-cols-4 w-full top-[50%] md:mt-5 px-5">
            {data2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center text-center px-4 py-2 overflow-hidden"
              >
                <span className="text-3xl mb-2">{item.icon}</span>
                <h1 className="text-xs font-bold mt-5">{item.heading}</h1>
                <p className="font-normal text-md leading-normal mt-3 w-[15vw]">
                  {item.Paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[40vw] bg-white">
          <div className="absolute inset-0 flex flex-col items-center mt-32 text-center">
            <h1 className="font-bold text-2xl leading-snug max-w-8xl text-gray-800">
              Our Experience & Measures
            </h1>
            <p className="text-5xl mx-auto text-gray-400 font-medium">
              Our Dedicated Team
            </p>
          </div>

          <div className="absolute grid grid-cols-1 md:grid-cols-4 w-full top-[30%] px-60">
            {pilot.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center text-center px-4 py-2 overflow-hidden"
              >
                <div className="flex items-center justify-center bg-gray-200 rounded-full overflow-hidden w-60 h-60">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{item.designation}</span>
                <h1 className="text-xs font-bold mt-5">{item.heading}</h1>
                <p className="font-normal text-md leading-normal mt-3 w-[15vw]">
                  {item.Paragraph}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 w-full flex justify-center">
            <Link
              to="/PilotList"
              className="bg-blue-300 w-52 py-2 border rounded-full text-center"
            >
              Pilot List
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
