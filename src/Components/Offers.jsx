import React from "react";
import AboutInner from "../assets/About images/About-Inner.jpg";
import AboutInner2 from "../../src/assets/About images/About-Inner-2.jpg";
import AboutInner3 from "../assets/About images/About-Inner-3.jpg";
import Footer from "./Footer";

const Offers = () => {
  const data = [
    {
      paragraph: "Private Parties, Ceremonies, Weddings",
      subParagraph: "Private Parties, Ceremonies, Weddings",
      btn: "GET STARTED",
      img: AboutInner,
      reverse: false,
    },
    {
      paragraph: "Travel Vlogs, Commercials & Videos",
      subParagraph: "Unique bird’s eye view can be a big plus for videos",
      btn: "GET STARTED",
      img: AboutInner2,
      reverse: true,
    },
    {
      paragraph: "Outside Venues, Concerts, Festivals",
      subParagraph: "Drones can deliver objects onto a stage - various requests",
      btn: "GET STARTED",
      img: AboutInner3,
      reverse: false,
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <section key={index} className="px-3 py-5 bg-neutral-100 lg:py-10">
          <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
            {item.reverse ? (
              <>
                <div className="order-1 lg:order-2">
                  <img
                    className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                  <p className="w-[40vw] font-semibold md:flex justify-center items-center text-6xl text-center text-zinc-500">
                    {item.paragraph}
                  </p>
                  <p className="mt-2 text-sm md:text-lg">{item.subParagraph}</p>
                  <button className="text-lg md:text-xs font-bold bg-zinc-100  border-[2px] border-black rounded-3xl py-3 px-14 mt-10">
                    {item.btn}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="order-1 lg:order-1">
                  <img
                    className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="order-2 lg:order-2 flex flex-col justify-center items-center">
                  <p className="w-[40vw] font-semibold md:flex justify-center items-center text-6xl text-center text-zinc-500">
                    {item.paragraph}
                  </p>
                  <p className="mt-2 text-sm md:text-lg">{item.subParagraph}</p>
                  <button className="text-lg md:text-xs font-bold bg-zinc-100  border-[2px] border-black rounded-3xl py-3 px-14 mt-10">
                    {item.btn}
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
};

export default Offers;
