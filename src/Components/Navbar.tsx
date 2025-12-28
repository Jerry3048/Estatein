import { NavLink } from "react-router";
import text from "/logo/Text.png";
import logo from "/logo/Logo.png";
import Hanburger from "/logo/Icon.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/Service" },
  ];

  return (
    <div className="bg-[#1A1A1A]">
      {/* Top small bar */}
      <div
        className="text-white bg-[#1A1A1A] h-10 flex items-center justify-between px-4 sm:px-10 w-full"
        style={{
          backgroundImage: "url('/logo/Abstract Design.png')",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center lg:ml-[40%] sm:ml-[20%] items-center">
          <img src={text} alt="Logo" className="h-5 mr-2 w-[70%]" />
          <NavLink to="#" className="underline text-sm hidden sm:block">
            Learn More
          </NavLink>
        </div>

        <button className="bg-gray-500 w-5 h-5 rounded-full flex justify-center items-center">
          X
        </button>
      </div>
      <hr className="h-px bg-gray-600 border-0 w-full" />

      {/* MAIN NAVBAR */}
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-white text-[20px] font-bold">
            <img src={logo} alt="logo" className="h-10" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-6 items-center text-white 2xl:text-[18px] sm:text-[14px]">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-[#F6FBE9] ${
                    isActive
                      ? "p-2 px-3 bg-black/30 border border-gray-600/30 rounded-md"
                      : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden sm:block">
            <button className="bg-black/30 border border-gray-600/30 text-white py-2 px-4 rounded-md">
              Contact Us
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <img src={Hanburger} alt="mobile menu" className="w-7" />
            </button>
          </div>

          {/* MOBILE MENU */}
         {isOpen && (
          <div
            className={`fixed top-12 right-0 w-[55%] bg-[#1A1A1A] backdrop-blur-lx 
            text-white p-6 rounded-xl shadow-xl z-50 
            flex flex-col items-start space-y-4 transition duration-300`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl absolute top-3 right-5"
            >
              ✕
            </button>

            {/* Menu Items */}
            <div className="flex flex-col space-y-4 w-full mt-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-[17px] ${
                      isActive ? "text-[#703BF7] font-semibold" : "hover:text-purple-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Purple Contact Button */}
              <button className=" bg-[#703BF7] hover:bg-purple-600 text-white  rounded-md font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
      <hr className="h-px bg-gray-600 border-0 w-full" />
    </div>
  );
};

export default Navbar;