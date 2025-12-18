import Navbar from "../Components/Navbar";
import { useParams } from "react-router";
import {FiMapPin} from "react-icons/fi";
import { usePropertyStore } from "../Store/usePropertyStore";

const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-");

function PropertyDetails() {
  const { name } = useParams();
  const { properties } = usePropertyStore();

  const property = properties.find(
    (p) => slugify(p.name) === name
  );

  if (!property) {
    return (
      <p className="text-center text-white py-10">
        Property not found
      </p>
    );
  }

  return (
   <div>
    <Navbar />
      <div className="mx-auto ">
        {/* Left: Name + Location */}
        <div className="md:flex gap-3 items-center px-4 py-6 whitespace-nowrap">
          <h1 className="text-2xl font-semibold mb-1 ">
            {property.name}
          </h1>
          <div className="flex justify-between md:items-center w-full mt-4 md:mt-0">
            <p className="text-sm border border-gray-600/30 rounded-sm px-2 py-1 inline-flex items-center gap-2">
              <FiMapPin />
              {property.location}
            </p>
          
  
          {/* Right: Price */}
          <div className="flex  md:flex-col items-center md:items-start">
            <p className="text-xs text-gray-400">Price</p>
            <p className="text-2xl font-semibold">
              {property.price}
            </p>
          </div>
        </div>
        </div>
      </div>

   </div>
  );
}

export default PropertyDetails;
