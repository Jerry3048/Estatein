import Navbar from "../Components/Navbar.tsx";
import { useEffect } from "react";
import { usePropertyStore } from "../Store/usePropertyStore.ts";
import type { Property } from "../types.ts";

function AllProperties() {
  const { properties, loading, fetchProperties } = usePropertyStore();

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  if (loading) return <p className="text-center text-white py-10">Loading properties...</p>;

  return (
    <div>
      <Navbar />
      <div className="w-[90%] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">All Properties</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((item: Property) => (
            <div key={item.id} className="bg-[#1A1A1A] border border-gray-700 rounded-xl p-5 text-white">
              <div className="flex justify-center mb-4">
                <img src={item.img} alt={item.name} className="w-full h-44 object-cover rounded-lg" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{item.description}</p>

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
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{item.price}</span>
                <button className="bg-[#703BF7] text-white px-3 py-1 rounded text-sm">View Property</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProperties;
