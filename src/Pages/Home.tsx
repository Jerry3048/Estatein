import Navbar from "../Components/Navbar"
import hero from "/logo/Image.png"
import centerLogo from "/logo/Sub Container.png"
import PropertySection from "../Components/PropertySection";
import CommentSection from "../Components/CommentSection";
import FAQSection from "../Components/FAQSection";
import Footer from "../Components/Footer";


function Home() {
 

   const services = [
    {
      img: "/logo/servicecontainer/Icon Container (1).png",
      text: "Find Your Dream Home",
    },
    {
      img: "/logo/servicecontainer/Icon Container.png",
      text: "Unlock Property Value",
    },
    {
      img: "/logo/servicecontainer/Icon Container (2).png",
      text: "Effortless Property Management",
    },
    {
      img: "/logo/servicecontainer/Icon Container (3).png",
      text: "Smart Investment. Informed Decision",
    },
  ];

  return (
    <div className="">
      <Navbar />
      <section className="relative flex flex-col sm:flex-row">

        {/* CENTER FLOATING IMAGE */}
        <div className="hidden sm:block absolute left-[52%] top-1/3 -translate-x-1/2 -translate-y-1/2 z-20">
          <img src={centerLogo} alt="Center Logo" className="w-23 h-auto" />
        </div>

        {/* LEFT SECTION */}
        <div className="flex-1 bg-black/30 flex flex-col justify-center px-8 py-10 space-y-6 z-10 order-last md:order-first">
          <h1 className="text-white md:text-4xl text-3xl">
            Discover Your Dream Property with Estatein
          </h1>

          <p className="text-gray-400 text-[12px] max-w-[95%]">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>

          <div className="flex space-x-4">
            <button className="bg-black/30 border border-gray-600/30 text-white px-4 py-2 rounded text-sm">
              Learn More
            </button>
            <button className="bg-[#703BF7] text-white px-4 py-2 rounded text-sm">
              Browse Properties
            </button>
          </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center text-center md:text-left w-full">
                <div className="bg-[#1A1A1A] border border-gray-600/30 text-white px-4 py-3 rounded w-full">
                  <p className="text-lg font-semibold">200+</p>
                  <p className="text-sm text-gray-400">Happy customers</p>
                </div>
                <div className="bg-[#1A1A1A] border border-gray-600/30 text-white px-4 py-3 rounded w-full">
                  <p className="text-lg font-semibold">10k+</p>
                  <p className="text-sm text-gray-400">Properties for Clients</p>
                </div>
                <div className="bg-[#1A1A1A] border border-gray-600/30 text-white px-4 py-3 rounded w-full col-span-2 md:col-span-1">
                  <p className="text-lg font-semibold">16+</p>
                  <p className="text-sm text-gray-400">Years of Experience</p>
                </div>
              </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          className="flex-1 relative flex justify-center items-center z-10 order-first sm:order-last m-7 sm:m-0 bg-purple-800/5"
          style={{
            backgroundImage: "url('/logo/Abstract Design.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            
          }}
        >
          <img
            src={hero}
            alt="Hero"
            className="w-full shadow-lg object-cover transition-all duration-300 ease-in-out rounded-2xl sm:rounded-none max-h-[500px] h-full"
          />
          {/* CENTER LOGO for small screens: positioned at bottom-left of the image */}
          <div className="sm:hidden absolute left-0 bottom-[-10%] z-20 ">
            <img
              src={centerLogo}
              alt="Center Logo"
              className="w-18 h-auto transition-all duration-300 ease-in-out rounded-md shadow-md "
            />
          </div>
        </div>
      </section>

      <section className="px-2 py-2 bg-black/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            
            {/* BOX ITEM */}
            {services.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#1A1A1A] border border-gray-600/30 rounded-xl p-6 flex flex-col items-center hover:scale-[1.02] transition"
              >
                {/* Arrow at top-right */}
                <div className="absolute top-3 right-3">
                  <img
                  src="/logo/Vector 431.png"
                  alt="top arrow"
                  className="w-3 h-3 object-contain mb-3"
                />
                </div>

                {/* Center Image */}
                <img
                  src={item.img}
                  alt="Icon"
                  className="w-13 h-13 object-contain mb-3"
                />

                {/* Text */}
                <p className="text-white text-center text-sm">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
      </section>

      <section className="bg-black/30 pb-5">
        <PropertySection />
      </section>
      <section className="bg-black/30 pb-5">
        <CommentSection/>
      </section>
      <section className="bg-black/30 pb-15">
        <FAQSection/>
      </section>
      <section className="bg-black/30">
        <Footer/>
      </section> 
    </div>
  )
}

export default Home