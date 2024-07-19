import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import HeroDrone from "/src/assets/Drones/Hero_Drone.png";
import Marquee from "../Components/Marquee";
import About from "../Components/About";
import Banner from "../Components/Offers";

function Landing() {
  return (
    <div className="w-full h-screen bg-white pt-1">
      <div className="textstructure px-20 mt-20 flex space-between">
        <div>
          {["We Create", "Exclusive Design", "Drones"].map((item, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-fit flex items-end overflow-visible">
                  {index === 1 && (
                    <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] top-9 relative bg-red-500"></div>
                  )}
                  <h1 className=" pt-[2vw] -mb-[1vw] uppercase text-[6vw] leading-[.75] tracking-tighter text-black font-['Founders Grotesk X-Cond'] font-regular">
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" ">
          <img
            className="ml-[5vw] p-10 w-[24vw] rotate-[5deg] "
            src={HeroDrone}
            alt=""
          />
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-40 flex justify-between items-center  text-black py-5 px-20 text-xl font-black">
        {[
          "These are the real game chnager",
          "From starting to end dominationg markets",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="Project items-center gap-5 flex justify-center">
          <div className="px-5 py-2 border-[2px] border-zinc-500 flex items-center justify-center rounded-full font-light text-sm capitalize">
            Look At The Projects
          </div>
          <div className="w-10 h-10 flex justify-center items-center border-[2px] border-zinc-400 rounded-full mt-20 ">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
      <Marquee />
      <About />
      <Banner />
    </div>
  );
}

export default Landing;
