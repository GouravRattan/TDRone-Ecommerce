import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGoogle, FaYoutube, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-400">
      <footer className="text-center">
        <div className="container mx-auto py-8">
          <section className="mb-4">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="md:mx-4 mb-2 md:mb-0">
                <h6 className="uppercase font-bold">
                  <a href="/" className="text-gray-400 hover:text-white">TEDrone</a>
                </h6>
              </div>
              <div className="md:mx-4 mb-2 md:mb-0">
                <h6 className="uppercase font-bold">
                  <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                </h6>
              </div>
              <div className="md:mx-4 mb-2 md:mb-0">
                <h6 className="uppercase font-bold">
                  <Link to="/AboutScreen" className="text-gray-400 hover:text-white">About</Link>
                </h6>
              </div>
              <div className="md:mx-4 mb-2 md:mb-0">
                <h6 className="uppercase font-bold">
                  <Link to="/ContactScreen" className="text-gray-400 hover:text-white">Contacts</Link>
                </h6>
              </div>
            </div>
          </section>
          <hr className="border-gray-600 my-3" />
          <section className="mb-8">
            <div className="flex justify-center">
              <div className="lg:w-2/3">
                <p className="text-gray-400">
                  "Imagine a digital music platform where you can access millions of songs, albums, and playlists from various artists and genres, all at your fingertips. Our online song playing app, much like Spotify, offers a seamless and personalized music streaming experience. Discover new releases, create and share playlists, follow your favorite artists, and enjoy curated playlists tailored to your tastes. With features like offline listening, high-quality audio streaming, and cross-device synchronization, you can enjoy your favorite tunes anytime, anywhere. Whether you're in the mood for upbeat tracks to energize your workout or soothing melodies for relaxation, our app provides the ultimate soundtrack to your life."
                </p>
              </div>
            </div>
          </section>
          <section className="text-center mb-4 flex justify-center gap-6">
            <a href="https://facebook.com/Akashkumar" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer"><FaFacebook size="1.5em" /></a>
            <a href="https://twitter.com/58Akash1999" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer"><FaTwitter size="1.5em" /></a>
            <a href="https://mail.google.com/" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer"><FaGoogle size="1.5em" /></a>
            <a href="https://www.youtube.com/channel/UCv39Htmah0SkcwDZUzzTcKg" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer"><FaYoutube size="1.5em" /></a>
            <a href="https://instagram.com/ganga_nagar_united" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer"><FaInstagram size="1.5em" /></a>
            <a href="https://www.linkedin.com/in/akash-kumar-a40b98126/" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer"><FaLinkedin size="1.5em" /></a>
            <a href="https://github.com/Akash581999" className="text-gray-400 hover:text-white mx-2" target="_blank" rel="noopener noreferrer"><FaGithub size="1.5em" /></a>
          </section>
          <div className="text-center mb-4 flex-col leading-10">
            <p className="flex items-center justify-center">
              <FaPhone className="mr-2" /> Call us at: +91 9634708314
            </p>
            <p className="flex items-center justify-center">
              <FaEnvelope className="mr-2" /> Mail us at: akash581999@gmail.com
            </p>
          </div>
          <div className="text-center py-3 text-gray-400">
            © 2024 Copyright:
            <Link to="https://AllTraxs-music.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-1">
              AllTraxs.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
