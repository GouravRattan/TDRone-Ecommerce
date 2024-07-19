import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-stone-100 overflow-hidden">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap  ">
        <h1 className='text-[15vw] leading-none font-["Founders Grotask"] uppercase mb-[2vw] pt-5 font-bold'>
          We are the Next Gen
        </h1>
        <h1 className='text-[15vw] leading-none font-["Founders Grotask"] uppercase mb-[2vw] pt-5 font-medium'>
          We are the Next Gen
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
