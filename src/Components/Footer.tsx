import logo from "/logo/Logo.png"; 
import Entericon from "/logo/Send.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
        <div className=" bg-black/20 p-10"
            style={{
              backgroundImage: "url('/logo/CTA.png')",
            }}
        >
            <div className="sm:flex justify-between items-center space-y-6 sm:space-y-0">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold">Start Your Real Estate Journey Today</h1>
              <p className="text-gray-400 w-[90%]">
                Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
              </p>
            </div>
    
             <button className="bg-[#703BF7] text-white px-3 py-2 rounded text-sm sm:w-[30%] w-full">
               Explore Properties
            </button>
          </div>  
        </div>
        <hr className=" border-gray-600/30 border" />


        <div className="p-8 lg:flex space-y-10 lg:space-y-0 justify-between">
          <div className="mr-[5%]  space-y-4">
            <img src={logo} alt="logo" className="h-8" />
            <form className="flex items-center p-2 rounded overflow-hidden border border-gray-600/30 lg:w-[250px] w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-white outline-none w-full "
              />
              <button type="submit" className="flex items-center justify-center">
                <img src={Entericon} alt="enter" className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="w-full lg:w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:gap-8 lg:gap-4 h-fit divide-x md:divide-x-0 divide-gray-700/30">
              {/* COLUMN 1 — Home */}
                <div className="p-4">
                  <h3 className="text-gray-400 font-semibold mb-5">Home</h3>
                  <ul className="space-y-5 text-sm">
                    <li className="hover:text-white cursor-pointer">Hero Section</li>
                    <li className="hover:text-white cursor-pointer">Features</li>
                    <li className="hover:text-white cursor-pointer">Properties</li>
                    <li className="hover:text-white cursor-pointer">Testimonials</li>
                    <li className="hover:text-white cursor-pointer">FAQ</li>
                  </ul>
                  <hr className="my-4 border-gray-600/30 md:hidden" />
                </div>

                {/* COLUMN 2 — About Us */}
                <div className="p-4">
                  <h3 className="text-gray-400 font-semibold mb-5">About Us</h3>
                  <ul className="space-y-5 text-sm">
                    <li className="hover:text-white cursor-pointer">Our Story</li>
                    <li className="hover:text-white cursor-pointer">Our Work</li>
                    <li className="hover:text-white cursor-pointer">How It Works</li>
                    <li className="hover:text-white cursor-pointer">Our Team</li>
                    <li className="hover:text-white cursor-pointer">Our Clients</li>
                  </ul>
                  <hr className="my-4 border-gray-600/30 md:hidden" />
                </div>

                {/* COLUMN 3 — Properties */}
                <div className="p-4">
                  <h3 className="text-gray-400 font-semibold mb-5">Properties</h3>
                  <ul className="space-y-5 text-sm">
                    <li className="hover:text-white cursor-pointer">Portfolio</li>
                    <li className="hover:text-white cursor-pointer">Categories</li>
                  </ul>
                  <hr className="my-4 border-gray-600/30 md:hidden" />

                  <div className="p-4 sm:hidden">
                    <h3 className="text-gray-400 font-semibold mb-5">Contact Us</h3>
                    <ul className="space-y-5 text-sm">
                      <li className="hover:text-white cursor-pointer">Contact Form</li>
                      <li className="hover:text-white cursor-pointer">Our Offices</li>
                    </ul>
                    <hr className="my-4 border-gray-600/30 md:hidden" />
                  </div>
                </div>

                {/* COLUMN 4 — Services */}
                <div className="p-4">
                  <h3 className="text-gray-400 font-semibold mb-5">Services</h3>
                  <ul className="space-y-5 text-sm">
                    <li className="hover:text-white cursor-pointer">Valuation Mastery</li>
                    <li className="hover:text-white cursor-pointer">Strategic Marketing</li>
                    <li className="hover:text-white cursor-pointer">Negotiation Wizardry</li>
                    <li className="hover:text-white cursor-pointer">Closing Success</li>
                    <li className="hover:text-white cursor-pointer">Property Management</li>
                  </ul>
                  <hr className="my-4 border-gray-600/30 md:hidden" />
                </div>

                {/* COLUMN 5 — Contact Us (shows on tablet and desktop) */}
                <div className="p-4 hidden sm:block">
                  <h3 className="text-gray-400 font-semibold mb-5">Contact Us</h3>
                  <ul className="space-y-5 text-sm">
                    <li className="hover:text-white cursor-pointer">Contact Form</li>
                    <li className="hover:text-white cursor-pointer">Our Offices</li>
                  </ul>
                  <hr className="my-4 border-gray-600/30 md:hidden" />
                </div>

              </div>
            </div>


        <div className="w-full bg-[#1A1A1A]  py-4">
          <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Left side: Year and Terms */}
            <div className="text-gray-400 text-sm flex flex-col md:flex-row items-center gap-2">
              <span>© {currentYear} Estatein. All rights reserved.</span>
              <a href="/terms" className="hover:text-white">
                Terms & Conditions
              </a>
            </div>

            {/* Right side: Social Media Icons */}
            <div className="flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white rounded-full w-8 h-8 bg-black items-center justify-center flex p-2">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white rounded-full w-8 h-8 bg-black items-center justify-center flex">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white rounded-full w-8 h-8 bg-black items-center justify-center flex">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white rounded-full w-8 h-8 bg-black items-center justify-center flex">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Footer