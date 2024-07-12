// import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import p1 from "../../assets/Products/p1.png";
import p2 from "../../assets/Products/p2.png";
import p3 from "../../assets/Products/p3.png";
import p4 from "../../assets/Products/p4.png";
import p5 from "../../assets/Products/p5.png";
import p6 from "../../assets/Products/p6.png";
import p7 from "../../assets/Products/p7.png";
import p8 from "../../assets/Products/p8.png";
import p9 from "../../assets/Products/p9.png";
import p10 from "../../assets/Products/p10.png";
import p11 from "../../assets/Products/p11.png";
import p12 from "../../assets/Products/p12.png";
import p13 from "../../assets/Products/p13.png";
import p14 from "../../assets/Products/p14.png";

import React from 'react'

const Products = () => {

  // const {activepage} = useParams();

  // alert(activepage)
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };


  const data = [
    {
      img: p1, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    {
      img: p2, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    {
      img: p3, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    }, {
      img: p4, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    {
      img: p5, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    }, 
    {
      img: p6, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    {
      img: p7, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    {
      img: p8, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    {
      img: p9, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    {
      img: p10, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    {
      img: p11, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    {
      img: p12, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    {
      img: p13, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    }, 
    {
      img: p14, // Update the path to your images
      name: "DJI Mavic 3 Pro",
      desc: "4/3 CMOS Hasselblad Camera | Dual Tele Cameras | Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission",
      price: "200$"
    },
    
  ]

  return (
<>

<div className='w-full h-[20vh] flex-col justify-center items-center text-center m-5'>
        <h1 className='text-bold text-6xl leading-loose max-w-8xl'>Camera Drones</h1>
        <p className='text-[18px] mx-auto max-w-md text-gray-600'>Capture your moments from above with a mini drone, FPV, or professional aerial camera.</p>
      </div>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 m-10">
      {
        data.map((item, index) => {
          return (
            <div key={index} className="relative text-gray-700 bg-white rounded-xl shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={item.img}
                  alt="card-image" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {item.name}
                  </p>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {item.price}
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  {item.desc}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  type="button" 
                    onClick={() => handleAddToCart(item)} >
                  Add to Cart
                </button>
              </div>
            </div>
          )
        })
      }
    </div>

    <div className="m-10">
        <h2 className="text-2xl mb-4">Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default Products






























// const Products = () => {



//     const data = [
//         {
//           heading: "DJI Mavic 3 Pro",
//           Paragraph: "Inspiration in Focus",
//           btn: "GET STARTED",
//           img: Drone1,
//           reverse: false,
//         },
//         {
//           heading: "DJI Mini 4 Pro",
//           Paragraph: "Mini to the Max",
//           btn: "GET STARTED",
//           img: Drone2,
//           reverse: false,
//         },
//         {
//           heading: "DJI Air 3",
//           Paragraph: "Double Up",
//           btn: "GET STARTED",
//           img: Drone3,
//           reverse: false,
//         },
//         {
//           heading: "DJI Inspire 3",
//           Paragraph: "Master the Unseen",
//           btn: "GET STARTED",
//           img: Drone4,
//           reverse: false,
//         },
//       ];

//   return (
//     <div> <section className="px-3 lg:py-1">
//     <div className="grid lg:grid-cols-2 gap-10 m-10">
//       {data.map((item, index) => (
//         <div key={index} className={`lg:order-${item.reverse ? '2' : '1'}`}>

//           <div className='absolute h-[20vh] flex-col w-[45vw] justify-center items-center text-center'>
//             <h1 className='text-bold text-6xl leading-snug max-w-8xl'>{item.heading}</h1>
//             <p className='text-[18px] mx-auto max-w-md text-gray-600'>{item.Paragraph}</p>
//             <p className=' mt-2 text-bold text-blue-400'>Buy Now</p>
//           </div>

//           <img
//             className="w-full h-auto lg:max-w-[46vw] lg:h-[500px] object-cover"
//             src={item.img}
//             alt=""
//           />
//         </div>
//       ))}
//     </div>
//   </section>
//  </div>
//   )
// }

// export default Products