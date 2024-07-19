import React from "react";
// import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-400">
      <footer className="text-center">
        <div className="container mx-auto py-8">
          <section className="mb-4">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="md:mx-4 mb-2 md:mb-0">
                <h6 className="uppercase font-bold">
                  <a href="/" className="text-gray-400 hover:text-white">
                    TEDrone
                  </a>
                </h6>
              </div>
              <div className="md:mx-4 mb-2 md:mb-0">
                <h6 className="uppercase font-bold">
                  <a href="/" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </h6>
              </div>
              <div className="md:mx-4 mb-2 md:mb-0">
                <h6 className="uppercase font-bold">
                  <a href="/AboutUs" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </h6>
              </div>
              <div className="md:mx-4 mb-2 md:mb-0">
                <h6 className="uppercase font-bold">
                  <a
                    href="/ContactUs"
                    className="text-gray-400 hover:text-white"
                  >
                    Contacts
                  </a>
                </h6>
              </div>
            </div>
          </section>
          <hr className="border-gray-600 my-3" />
          <section className="mb-8">
            <div className="flex justify-center">
              <div className="lg:w-2/3">
                <p className="text-gray-400">
                  Introducing TEDrone: Elevate Your Shopping Experience! 🛒🚁
                </p>
                <p className="text-gray-400">
                  Welcome to TEDrone, the ultimate destination for drone
                  enthusiasts and tech-savvy shoppers! Our cutting-edge
                  e-commerce platform offers a dazzling array of drones,
                  accessories, and parts, handpicked to suit every need and
                  budget. Whether you're a hobbyist capturing breathtaking
                  aerial shots, a professional seeking the latest in drone
                  technology, or simply looking for a unique gift, TEDrone has
                  you covered.
                </p>
                <p className="text-gray-400">
                  Experience the future of shopping with our seamless interface,
                  detailed product reviews, and expert guidance to help you make
                  informed choices. Join the TEDrone community and soar to new
                  heights with unbeatable prices, exclusive offers, and
                  top-notch customer service.
                </p>
                <p className="text-gray-400">
                  TEDrone: Where innovation meets imagination. Take flight with
                  us today! 🌟✈️
                </p>
              </div>
            </div>
          </section>
          <section className="text-center mb-4 flex justify-center gap-6">
            <a
              href="https://facebook.com/GouravRattan"
              className="text-gray-400 hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size="1.5em" />
            </a>
            <a
              href="https://twitter.com/GouravRattan"
              className="text-gray-400 hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size="1.5em" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              className="text-gray-400 hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle size="1.5em" />
            </a>
            <a
              href="https://www.youtube.com/@GouravIT__"
              className="text-gray-400 hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size="1.5em" />
            </a>
            <a
              href="https://instagram.com/premrattan/"
              className="text-gray-400 hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size="1.5em" />
            </a>
            <a
              href="https://www.linkedin.com/in/gourav-rattan-9bba34245/"
              className="text-gray-400 hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="1.5em" />
            </a>
            <a
              href="https://github.com/GouravRattan/"
              className="text-gray-400 hover:text-white mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="1.5em" />
            </a>
          </section>
          <div className="text-center mb-4 flex-col leading-10">
            <p className="flex items-center justify-center">
              <FaPhone className="mr-2" /> Call us at: +91 9634708314
            </p>
            <p className="flex items-center justify-center">
              <FaEnvelope className="mr-2" /> Mail us at:
              gouravrattan11@gmail.com
            </p>
          </div>
          <div className="text-center py-3 text-gray-400">
            © 2024 Copyright:
            <a
              href="https://TEDrones.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mx-1"
            >
              TEDrone.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
