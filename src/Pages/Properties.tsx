import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react";
import { usePropertyStore } from "../Store/usePropertyStore.ts";
import type { Property } from "../types";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function PropertySearchSection() {
  const {
    properties,
    loading,
    page,
    ITEMS_PER_PAGE,
    fetchProperties,
    nextPage,
    prevPage,
    setPage,
  } = usePropertyStore();

  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");

  // NEW: Price range controlled through dropdown
  const [selectedPriceLabel, setSelectedPriceLabel] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 999999999]);
  

  const [filtered, setFiltered] = useState<Property[]>([]);

  const priceOptions = [
    { label: "Any Price", range: [0, 999999999] },
    { label: "Below $100k", range: [0, 100000] },
    { label: "$100k - $300k", range: [100000, 300000] },
    { label: "$300k - $600k", range: [300000, 600000] },
    { label: "$600k - $1M", range: [600000, 1000000] },
    { label: "Above $1M", range: [1000000, 999999999] },
  ];

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  // Filtering
  useEffect(() => {
    const results = properties.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation = location ? p.location === location : true;
      const matchesType = type ? p.type === type : true;
      const matchesBedrooms = bedrooms ? p.bedrooms === Number(bedrooms) : true;
      const matchesYearBuilt = yearBuilt ? p.yearBuilt === Number(yearBuilt) : true;

      const priceNumber = Number(p.price.replace(/[$,]/g, ""));
      const matchesPrice =
        priceNumber >= priceRange[0] && priceNumber <= priceRange[1];

      return (
        matchesSearch &&
        matchesLocation &&
        matchesType &&
        matchesBedrooms &&
        matchesYearBuilt &&
        matchesPrice
      );
    });

    setFiltered(results);
    setPage(0);
  }, [searchTerm, location, type, bedrooms, yearBuilt, priceRange, properties, setPage]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentProperties = filtered.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  // Truncate description
  function truncateWords(text: string, limit: number): string {
    const words = text.split(" ");
    return words.length <= limit ? text : words.slice(0, limit).join(" ");
  }

  // Dropdown unique options
  const uniqueLocations = Array.from(new Set(properties.map(p => p.location)));
  const uniqueTypes = Array.from(new Set(properties.map(p => p.type)));
  const uniqueBedrooms = Array.from(new Set(properties.map(p => p.bedrooms))).sort((a,b) => a-b);
  const uniqueYears = Array.from(new Set(properties.map(p => p.yearBuilt))).sort((a,b) => a-b);

  if (loading) {
    return <p className="text-center text-white py-10">Loading properties...</p>;
  }

  return (
   <div>
    <Navbar/>
        <div className="relative pb-0">
            <div className="bg-linear-to-r from-neutral-600/20 to-black/60 md:p-10 p-5 space-y-6 border-b border-gray-600">
                    <h1 className="text-white md:text-4xl text-3xl">
                    Find Your Dream Property
                </h1>
    
                <p className="text-gray-400 text-[14px] max-w-[95%]">
                    Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey 
                </p> 
            </div>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%]">
              <div className="border-7 border-neutral-800/90 rounded-2xl bg-neutral-700/90">
                <input
                  type="text"
                  placeholder="Search For A Property"
                  className="p-3 flex justify-center items-center placeholder-gray-400 rounded-lg bg-black/70 text-white focus:outline-none border border-gray-600/70 w-full"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
        </div>
       <div className="w-[95%] mx-auto pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 mb-6">
            {/* Location */}
            <div className="border-7 border-neutral-800/90 rounded-2xl bg-neutral-700/90">
              <select
                className="p-2 rounded-lg bg-black/70 text-white focus:outline-none border w-full border-gray-600/70"
                value={location}
                onChange={e => {
                  const val = e.target.value;
                  if (val === '__all__') {
                    setLocation('');
                    return;
                  }
    
                  setLocation(val);
                }}
              >
                <option value="" disabled hidden>Location</option>
                <option value="__all__">All Locations</option>
                {uniqueLocations.map((loc, idx) => (
                  <option key={idx} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
  
          {/* Type */}
          <div className="border-7 border-neutral-800/90 rounded-2xl bg-neutral-700/90">
            <select
              className="p-2 rounded-lg bg-black/70 text-white focus:outline-none border w-full border-gray-600/70"
              value={type}
               onChange={e => {
                  const val = e.target.value;
                  if (val === '__all__') {
                    setType('');
                    return;
                  }
    
                   setType(val);
                }}
            >
               <option value="" disabled hidden>Property Type</option>
                <option value="__all__">All Types</option>
              {uniqueTypes.map((t, idx) => <option key={idx} value={t}>{t}</option>)}
            </select>
          </div>
  
          {/* Bedrooms */}
         <div className="border-7 border-neutral-800/90 rounded-2xl bg-neutral-700/90">
            <select
              className="p-2 rounded-lg bg-black/70 text-white focus:outline-none border w-full border-gray-600/70"
              value={bedrooms}
              onChange={e => {
                  const val = e.target.value;
                  if (val === '__all__') {
                    setBedrooms('');
                    return;
                  }
    
                   setBedrooms(val);
                }}
                >
               <option value="" disabled hidden>Number of Rooms</option>
               <option value="__all__">All Bedrooms</option>
              {uniqueBedrooms.map((b, idx) => <option key={idx} value={b}>{b}</option>)}
            </select>
         </div>
  
          {/* Year Built */}
          <div className="border-7 border-neutral-800/90 rounded-2xl bg-neutral-700/90">
            <select
              className="p-2 rounded-lg bg-black/70 text-white focus:outline-none border w-full border-gray-600/70"
              value={yearBuilt}
               onChange={e => {
                  const val = e.target.value;
                  if (val === '__all__') {
                    setYearBuilt('');
                    return;
                  }
    
                   setYearBuilt(val);
                }}
            >
               <div className="bg-amber-600">
                 <option value="" disabled hidden>Year Built</option>
                 <option value="__all__">All Years</option>
                {uniqueYears.map((y, idx) => <option key={idx} value={y}>{y}</option>)}
               </div>
            </select>
          </div>
  
          {/* PRICE RANGE - SELECT */}
         <div className="border-7 border-neutral-800/90 rounded-2xl bg-neutral-700/90">
            <select
              className="p-2 rounded-lg bg-black/70 text-white focus:outline-none border w-full border-gray-600/70"
              value={selectedPriceLabel}
              onChange={(e) => {
                const label = e.target.value;
                setSelectedPriceLabel(label);
                const opt = priceOptions.find(o => o.label === label);
                if (opt) setPriceRange(opt.range as [number, number]);
              }}
            >
              <option value="" disabled hidden>Price Range</option>
              {priceOptions.map((opt, idx) => (
                <option key={idx} value={opt.label}>{opt.label}</option>
              ))}
            </select>
         </div>
        </div>
  
        {/* Properties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentProperties.map((item) => (
            <div key={item.id} className="bg-[#1A1A1A] border border-gray-600/30 rounded-xl p-5 text-white">
  
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-2" />
  
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
  
              <p className="text-gray-300 text-sm mb-2">
                {truncateWords(item.description, 10)}
              </p>
  
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-4 w-full">
                <p className="border rounded-2xl px-3 py-1 border-gray-600/30 text-center w-full text-xs sm:text-sm wrap-break-words">🛏 {item.bedrooms}</p>
                <p className="border rounded-2xl px-3 py-1 border-gray-600/30 text-center w-full text-xs sm:text-sm wrap-break-words">🛁 {item.bathrooms}</p>
                <p className="border rounded-2xl px-3 py-1 border-gray-600/30 text-center w-full col-span-2 lg:col-span-1 text-xs sm:text-sm wrap-break-words">🏡 {item.type}</p>
              </div>
  
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{item.price}</span>
                <button className="bg-[#703BF7] text-white px-3 py-1 rounded text-sm">View Property</button>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-4 border-gray-600/30" />
  
        {/* Pagination */}
        <div className="flex justify-between items-center text-white mt-6">
          <p className="text-sm">{page + 1} of {totalPages}</p>
  
          <div className="flex gap-4">
            <button
              onClick={prevPage}
              disabled={page === 0}
              className="px-2 py-2 border border-gray-500 rounded-full disabled:opacity-30 bg-gray-600"
            >
              <FiArrowLeft size={20} />
            </button>
  
            <button
              onClick={nextPage}
              disabled={page >= totalPages - 1}
              className="px-2 py-2 border border-gray-500 rounded-full disabled:opacity-30 bg-gray-600"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
   </div>
  );
}

export default PropertySearchSection;
