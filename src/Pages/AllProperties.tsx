import Navbar from "../Components/Navbar.tsx";
import { useEffect } from "react";
import { usePropertyStore } from "../Store/usePropertyStore.ts";
import type { Property } from "../types.ts";
import PropertyCard from "../Components/Propertycard.tsx";
import  Footer from "../Components/Footer";

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
           <PropertyCard key={item.id} property={item} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AllProperties;
