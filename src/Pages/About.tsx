import Navbar from "../Components/Navbar"
import hero from "/logo/Image (1).png"
import { FaStar, FaUsers, FaShieldAlt,FaGraduationCap } from "react-icons/fa";

type IconType = "star" | "graduation" | "users" | "shield";

interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: IconType; // <- typed here
}


const valuesData:ValueItem[] = [
  {
    id: 1,
    title: "Trust",
    description:
      "Trust is the cornerstone of every successful real estate transaction.",
    icon: "star",
  },
  {
    id: 2,
    title: "Excellence",
    description:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
    icon: "graduation",
  },
  {
    id: 3,
    title: "Client-Centric",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
    icon: "users",
  },
  {
    id: 4,
    title: "Our Commitment",
    description:
      "We are dedicated to providing you with the highest level of service, professionalism",
    icon: "shield",
  },
];



const iconMap = {
  star: <FaStar className="w-12 h-12 text-purple-300 border p-3 rounded-full border-purple-500" />,
  graduation: <FaGraduationCap className="w-12 h-12 text-purple-300 border p-3 rounded-full border-purple-500"  />,
  users: <FaUsers className="w-12 h-12 text-purple-300 border p-3 rounded-full border-purple-500"  />,
  shield: <FaShieldAlt className="w-12 h-12 text-purple-300 border p-3 rounded-full border-purple-500"  />,
};

function About() {
  return (
    <div>
        <Navbar />
        <section className="relative flex flex-col md:flex-row bg-black/30 py-6 px-6 md:px-12 lg:px-20 lg:gap-12 gap-3">
          <div className="flex-1  flex flex-col justify-center space-y-6 z-10 order-last md:order-first">
           <img
              src="/logo/Abstract Design (1).png"
              alt="Icon"
              className="w-13 h-13 object-contain"
            />
          <h1 className="text-white md:text-4xl text-3xl">
            Our Journey
          </h1>

          <p className="text-gray-400 text-[20px] max-w-[95%]">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 items-center text-center lg:text-left w-full">
              <div className="bg-[#1A1A1A] border border-gray-600/30 text-white px-4 py-3 rounded w-full">
                <p className="text-lg font-semibold">200+</p>
                <p className="text-sm text-gray-400">Happy customers</p>
              </div>
              <div className="bg-[#1A1A1A] border border-gray-600/30 text-white px-4 py-3 rounded w-full">
                <p className="text-lg font-semibold">10k+</p>
                <p className="text-sm text-gray-400">Properties for Clients</p>
              </div>
              <div className="bg-[#1A1A1A] border border-gray-600/30 text-white px-4 py-3 rounded w-full col-span-2 lg:col-span-1">
                <p className="text-lg font-semibold">16+</p>
                <p className="text-sm text-gray-400">Years of Experience</p>
              </div>
          </div>    
        </div>

        
        <div className="flex-1 relative order-first md:order-last justify-center items-center flex mx-auto mb-10 sm:mb-0">
          {/* Padding wrapper */}
          <div className="p-8 sm:p-12 relative z-10 border border-gray-600/30 rounded-sm flex justify-center items-center"
          style={{
            backgroundImage: "url('/logo/Abstract Design.png')",
          }}>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-neutral-900/90 rounded-sm -z-10"></div>

            {/* Image */}
            <img
              src={hero}
              alt="Hero"
              className="w-full h-full object-cover rounded-2xl sm:rounded-none max-h-[700px] xl:max-h-[300px] min-w-[300px]"
            />
          </div>
      </div>
    </section>

    <section className="bg-black/30 py-6 px-2 md:px-12 lg:px-20 lg:gap-12 flex flex-col md:flex-row gap-8 md:gap-0">
        {/* LEFT SIDE — 1 PART WIDTH */}
        <div className="flex-1 flex flex-col justify-center px-5 space-y-6 z-10 ">
          <img
            src="/logo/Abstract Design (1).png"
            alt="Icon"
            className="w-13 h-13 object-contain"
          />

          <h1 className="text-white md:text-4xl text-3xl">Our Values</h1>

          <p className="text-gray-400 text-[20px] max-w-[95%]">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>

        {/* RIGHT SIDE — 2 PARTS WIDTH */}
        <div className="border-7 border-neutral-800/30 rounded-3xl h-fit flex-2">
          <div className="flex-2 border border-neutral-700/30 rounded-2xl p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
  
              {valuesData.map((item, index) => (
                <div
                  key={item.id}
                  className={`
                    p-6 space-y-4 border-gray-700/40 border-b 
                    ${index < 2 ? "sm:border-b " : ""}
                    ${index % 2 === 0 ? "sm:border-r" : ""}  
                  `}
                >
                  <div className="flex items-center gap-4">
                    {iconMap[item.icon]}
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  </div>
  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
  
            </div>
          </div>
        </div>
      </section>

  </div>
  )
}

export default About;