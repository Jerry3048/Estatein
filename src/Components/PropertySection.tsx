import { useEffect,useState } from "react";
import { usePropertyStore } from "../Store/usePropertyStore.ts";
import type { Property } from "../types";
import { NavLink } from "react-router";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function PropertySection() {
  const {properties,loading,page,ITEMS_PER_PAGE,fetchProperties,nextPage,prevPage,} = usePropertyStore();
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  // Loading State
  if (loading) {
    return <p className="text-center text-white py-10">Loading properties...</p>;
  }

  // Pagination Calculations
  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);

  const currentProperties: Property[] = properties.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  // Word limiter
 function truncateWords(text: string, limit: number): string {
  const words = text.split(" ");
  return words.length <= limit
    ? text
    : words.slice(0, limit).join(" ");
}

  return (
   <div className="w-[90%] mx-auto py-10 md:py-4">
     <div>
          <img
              src="/logo/Abstract Design (1).png"
              alt="Icon"
              className="w-13 h-13 object-contain"
            />
          <div className="flex justify-between items-center mb-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold">Featured Properties</h1>
          <p className="text-gray-400 w-full">
            Explore our handpicked selection of featured properties.
          </p>
        </div>

        <NavLink
          to="/AllProperties"
          className="text-[#703BF7] border border-[#703BF7] px-4 py-2 rounded hover:bg-[#703BF7] hover:text-white transition text-center hidden md:block"
        >
          View All
        </NavLink>
      </div>  
       </div>
      <div className="px-2 py-4">
        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {currentProperties.map((item) => (
            <div
              key={item.id}
              className="bg-[#1A1A1A] border border-gray-700 rounded-xl p-5 text-white"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
  
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
  
            <p className="text-sm text-gray-300 mb-4">
              {expanded[item.id]
                ? item.description
                : truncateWords(item.description, 8)}

              {item.description.split(" ").length > 8 && (
                <button
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }))
                  }
                  className="text-[#703BF7] ml-2 hover:underline"
                >
                  {expanded[item.id] ? "Show less" : "... Read more"}
                </button>
              )}  
            </p>

            <div className="grid grid-cols-2 xl:grid-cols-3 mb-4 w-fit gap-2">
                <p className="border rounded-2xl px-2 border-gray-700 whitespace-nowrap text-center w-fit">
                  🛏 {item.bedrooms} Beds
                </p>

                <p className="border rounded-2xl px-2 border-gray-700 whitespace-nowrap text-center w-fit">
                  🛁 {item.bathrooms} Baths
                </p>

                <p className="border rounded-2xl px-2 border-gray-700 whitespace-nowrap text-center col-span-2 lg:col-span-1 w-fit">
                  🏡 {item.type}
                </p>
            </div>
  
              {/* Price + Button */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{item.price}</span>
  
                <button className="bg-[#703BF7] text-white px-3 py-1 rounded text-sm">
                  View Property
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-4 border-gray-700" />
  
        {/* Pagination */}
        <div className="flex justify-between items-center  text-white">
          <p className="text-sm">
            {page + 1} of {totalPages}
          </p>
          <NavLink
            to="/AllProperties"
            className="text-[#703BF7] border border-[#703BF7] px-4 py-2 rounded hover:bg-[#703BF7] hover:text-white transition text-center w-[120px] md:hidden"
          >
            View All
          </NavLink>

          <div className="flex gap-4">
            <button
              onClick={prevPage}
              className="px-2 py-2 border border-gray-500 rounded-full disabled:opacity-30 bg-gray-600 "
              disabled={page === 0}
            >
                <FiArrowLeft size={20} />
            </button>
    
            <button
              onClick={nextPage}
              className="px-2 py-2 border border-gray-500 rounded-full disabled:opacity-30 bg-gray-600"
              disabled={page >= totalPages - 1}
            >
                <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
   </div>
  );
}

export default PropertySection;
