import Navbar from "../Components/Navbar";
import { useParams } from "react-router";
import { FiMapPin, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { usePropertyStore } from "../Store/usePropertyStore";
import { useState, useEffect } from "react";
import { FaBed, FaBath, FaHome, FaBolt  } from "react-icons/fa";
import FAQSection from "../Components/FAQSection";
import Footer from "../Components/Footer";

const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-");

function PropertyDetails() {
  const { name } = useParams();
  const { properties } = usePropertyStore();

  const property = properties.find((p) => slugify(p.name) === name);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState(window.innerWidth < 768 ? 1 : 2);

  useEffect(() => {
    const handleResize = () => {
      setStep(window.innerWidth < 768 ? 1 : 2);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!property) {
    return (
      <div className="bg-black/30 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white mb-4">Property Not Found</h1>
          <p className="text-gray-400">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

   const getProfitMultiplier = (price:number) => {
    if (price < 50000) {
    return 1.12;
    }
    else if (price < 200000) {
    return 1.2;
    }
    else {
    return 1.05;
    }
   };

  const images = property?.images || [];
  
  // Responsive: show 1 image on small screens, 2 on md+
  const visibleImages = images.slice(
    currentIndex,
    currentIndex + step
  );

  const nextImages = () => {
    if (currentIndex + step < images.length) {
      setCurrentIndex(currentIndex + step);
    }
  };

  const prevImages = () => {
    if (currentIndex - step >= 0) {
      setCurrentIndex(currentIndex - step);
    }
  };
const finalPrice = property?.price ? property.price * getProfitMultiplier(property.price) : 0;
  return (
    <div className="bg-black/30">
      <Navbar />

      <div className="mx-auto">
        {/* Name, Location & Price Section */}
        <div className="md:flex gap-3 items-center px-4 py-6 whitespace-nowrap">
          <h1 className="text-2xl font-semibold mb-1">{property?.name}</h1>

          <div className="flex justify-between md:items-center w-full mt-4 md:mt-0">
            {/* Location */}
            <p className="text-sm border border-gray-600/30 rounded-sm px-2 py-1 inline-flex items-center gap-2">
              <FiMapPin />
              {property && [property.location.area, property.location.city, property.location.state].join(", ")}
            </p>

            {/* Price */}
            <div className="flex md:flex-col items-center md:items-start">
              <p className="text-xs text-gray-400">Price</p>
              <p className="text-2xl font-semibold">₦{finalPrice}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="px-4 pb-10">
        <div className="p-5 border border-gray-600/30 rounded-xl bg-[#1A1A1A]">
          {/* Thumbnail Row */}
          <div className="flex gap-3 overflow-x-auto mb-6 p-2 border border-gray-600/30 rounded-xl bg-black/20">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setCurrentIndex(index)}
                className={`h-30 w-30 md:w-full object-cover rounded-lg cursor-pointer border ${
                  index === currentIndex ? "border-[#703BF7]" : "border-gray-600/30"
                }`}
              />
            ))}
          </div>
  
          {/* Main Image Display */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-full h-[450px] object-cover rounded-xl"
                />
              ))}
            </div>
  
            {/* Controls */}
            <div className="flex justify-center items-center mt-4 gap-4 bg-black/20 p-1 rounded-full w-fit mx-auto">
              <button
                onClick={prevImages}
                disabled={currentIndex === 0}
                className="p-2 rounded-full border border-gray-600 disabled:opacity-30 bg-[#1A1A1A]"
              >
                <FiChevronLeft size={15} />
              </button>
  
              {/* Progress Indicators */}
              <div className="flex gap-1">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-0.5 border-t-3 ${
                      idx === currentIndex ? "border-[#703BF7]" : "border-gray-400 border-t"
                    }`}
                  />
                ))}
              </div>
  
              <button
                onClick={nextImages}
                disabled={currentIndex >= images.length - step}
                className="p-2 rounded-full border border-gray-600 disabled:opacity-30 bg-[#1A1A1A]"
              >
                <FiChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* Property Video Section */}
       {property?.videoUrl && (
          <div className="px-4 pb-10">
            <div className="p-5 border border-gray-600/30 rounded-xl bg-[#1A1A1A]">
              <h2 className="text-2xl font-semibold mb-4">
                Property Video Tour
              </h2>

              <div className="relative w-full h-[70vh] aspect-video rounded-xl overflow-hidden border border-gray-600/30 bg-black">
                <video
                  src={property.videoUrl}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="md:flex justify-between gap-6 w-[97%] mx-auto mb-10 md:flex-row flex-col space-y-6 md:space-y-0">
      <div className="px-4 py-10 border border-gray-600/30 rounded-xl flex-1 h-fit">
          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Description</h2>
            <p className="text-gray-300 leading-relaxed">
              {property?.description}</p>
          </div>
  
          {/* Property Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-gray-600/30 pt-2">
            <div className="flex flex-col px-2 ">
              <span className="text-gray-400 mt-1 flex items-center gap-1"><FaBed/>Bedrooms</span>
              <span className="text-xl font-semibold">{property?.bedrooms}</span> 
            </div>
            <div className="flex flex-col border-l border-gray-600/30 px-2">
               <span className="text-gray-400 mt-1 flex items-center gap-1"><FaBath /> Bathrooms</span>
              <span className="text-xl font-semibold">{property?.bathrooms}</span>
            </div>
             <div className="flex flex-col sm:border-l border-gray-600/30 px-2">
               <span className="text-gray-400 mt-1 flex  items-center gap-1"><FaHome/>Type</span>
              <span className="text-xl font-semibold">{property?.type}</span>
            </div>
          </div>
      </div>

      {/* Key Features */}
      <div className="px-4 py-6 border border-gray-600/30 rounded-xl flex-1 space-y-3 h-fit">
        <h2 className="text-2xl font-semibold mb-3">Key Features and Amenities</h2>
        <ul className="space-y-4">
          {property?.keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 border-[#703BF7] border-l pl-2 bg-linear-to-r from-black/20 to-neutral  p-2">
              <span className="text-white">< FaBolt  /></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      </section>

      <section className="md:flex justify-between w-[97%] mx-auto">
        <div className="flex-1 flex flex-col  px-5 space-y-3 z-10 mb-6 ">
          <img
            src="/logo/Abstract Design (1).png"
            alt="Icon"
            className="w-13 h-13 object-contain"
          />

          <h1 className="text-white md:text-4xl text-3xl">Inquire About {property?.name} </h1>

          <p className="text-gray-400 text-[14px] max-w-[95%]">
           Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
          </p>
        </div>

        <div className=" p-6 bg-[#1A1A1A] border border-gray-600/30 rounded-xl text-white flex-2">
          <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>

          <form className="space-y-5">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm mb-1 block">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full bg-gray-600/30 border border-gray-600/30 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#703BF7]"
                />
              </div>

              <div>
                <label className="text-sm mb-1 block">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full bg-gray-600/30 border border-gray-600/30 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#703BF7]"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full bg-gray-600/30 border border-gray-600/30 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#703BF7]"
                />
              </div>

              <div>
                <label className="text-sm mb-1 block">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full bg-gray-600/30 border border-gray-600/30 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#703BF7]"
                />
              </div>
            </div>

            {/* Selected Property */}
            <div>
              <label className="text-sm mb-1 block">Selected Property</label>
              <input
                type="text"
                value={`${property?.name}, ${property?.location}`}
                readOnly
                className="w-full border border-gray-600/30 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm mb-1 block">Message</label>
              <textarea
                rows={4}
                placeholder="Enter your Message here..."
                className="w-full bg-gray-600/30 border border-gray-600/30 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#703BF7]"
              />
            </div>

            {/* Agreement */}
              <div className="sm:col-span-2 flex items-center gap-3">
                <input type="checkbox" className="mt-0.5" />
                <p className="text-gray-400 text-sm">
                  I agree with the <span className="text-white underline">Terms</span> and{" "}
                  <span className="text-white underline">Policy</span>
                </p>
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2 flex items-center justify-end">
                <button
                  type="submit"
                  className="bg-[#703BF7] hover:bg-[#5c2fe0] transition text-white px-4 py-3 rounded-lg font-medium"
                >
                  Send Your Message
                </button>
              </div>
          </form>
        </div>
      </section>
      <FAQSection/>
      <div className="pt-5"><Footer/></div>
    </div>
  );
}

export default PropertyDetails;
