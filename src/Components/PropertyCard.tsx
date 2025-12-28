import { useState } from "react";
import type { Property } from "../types";
import { NavLink } from "react-router";
import { FaBed, FaBath, FaHome } from "react-icons/fa";

interface PropertyCardProps {
  property: Property;
}

const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-");

function PropertyCard({ property }: PropertyCardProps) {
  const [expanded, setExpanded] = useState(false);

  // Word limiter
  function truncateWords(text: string, limit: number): string {
    const words = text.split(" ");
    return words.length <= limit ? text : words.slice(0, limit).join(" ");
  }

  return (
    <div className="bg-[#1A1A1A] border border-gray-600/30 rounded-xl p-5 text-white">
      {/* Image */}
      <img
        src={property.img}
        alt={property.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {property.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-4">
        {expanded
          ? property.description
          : truncateWords(property.description, 8)}

        {property.description.split(" ").length > 8 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#703BF7] ml-2 hover:underline"
          >
            {expanded ? "Show less" : "... Read more"}
          </button>
        )}
      </p>

      {/* Property Info */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
        <p className="border rounded-2xl px-3 py-1 border-gray-600/30 flex items-center justify-center gap-2 text-xs sm:text-sm">
          <FaBed className="" />
          {property.bedrooms}
        </p>

        <p className="border rounded-2xl px-3 py-1 border-gray-600/30 flex items-center justify-center gap-2 text-xs sm:text-sm">
          <FaBath className="" />
          {property.bathrooms}
        </p>

        <p className="border rounded-2xl px-3 py-1 border-gray-600/30 flex items-center justify-center gap-2 col-span-2 lg:col-span-1 text-xs sm:text-sm">
          <FaHome className="" />
          {property.type}
        </p>
      </div>


      {/* Price + Button */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${(property?.price ?? 0) * 1.2}</span>

         <NavLink
          to={`/properties/${slugify(property.name)}`}
          className="bg-[#703BF7] text-white px-3 py-1 rounded text-sm"
        >
          View Property
        </NavLink>
      </div>
    </div>
  );
}

export default PropertyCard;
