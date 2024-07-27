import React, { useState } from "react";
import MainHand from "../assets/Contactimg.jpg";
import Footer from "../Components/Footer";
import { BsMeta } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { FaSquare } from "react-icons/fa";

const ContactUs = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleContact = async (e) => {
    e.preventDefault();

    let requestData = {
      eventID: "1001",
      addInfo: {
        UserName: userName,
        Email: email,
        Phone: phone,
        Topic: topic,
        Message: message,
        Address: address,
      },
    };

    try {
      const response = await fetch("http://localhost:2005/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");

      if (response.ok && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Sign Up Successful!");
        setIsSignedUp(true);
      } else {
        alert(data.rData.rMessage || "Invalid Credentials!");
        setIsSignedUp(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to sign up.");
    }
  };

  return (
    <>
      <div className="relative w-full h-[60vh]">
        <img
          src={MainHand}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center text-center">
          <h1 className="text-6xl mr-[30%] mt-[10%] leading-snug max-w-8xl text-gray-700">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="flex flex-col-2 justify-around h-[100vh] w-full md:w-full px-60 py-32">
        <div className="w-[52vw] flex-col space-y-5 h-[0vh]">
          <h1 className="text-base font-semibold">AERIAL PHOTOGRAPHY</h1>
          <h1 className="text-6xl font-bold">Follow Us, Like Us</h1>
          <p className="text-xl leading-7 w-[35vw]">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing solely on the
            bottom line.
          </p>
          <div className="flex justify-start gap-10 mt-20 rounded-full">
            <FaSquare size={60} />
            <ImYoutube size={60} />
            <BsMeta size={60} />
          </div>
        </div>
        <form onSubmit={handleContact} className="w-full max-w-2xl bg-white rounded-full px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-lg font-xl mb-2" htmlFor="name">
              UserName
            </label>
            <input
              className="appearance-none border border-gray-400 rounded-full w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-xl mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border border-gray-400 rounded-full w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-xl mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="appearance-none border border-gray-400 rounded-full w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-xl mb-2" htmlFor="Topic">
              Topic
            </label>
            <input
              className="appearance-none border border-gray-400 rounded-full w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-xl mb-2" htmlFor="Message">
              Message
            </label>
            <input
              className="appearance-none border border-gray-400 rounded-full w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-xl mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              className="appearance-none border border-gray-400 rounded-full w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              rows="2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-xl py-3 px-12 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SEND
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
