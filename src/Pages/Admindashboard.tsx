import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePropertyStore } from "../Store/usePropertyStore";
import type { Property } from "../types";

function Admindashboard() {
  const navigate = useNavigate();
  const { properties, fetchProperties } = usePropertyStore();
  // state used for success messages and deletion only
  const [message, setMessage] = useState("");


  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }

    fetchProperties();
  }, [fetchProperties, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  // form-related state and handlers have been moved to a dedicated page

  // navigate to editing page when the user wants to add/edit a property
  const handleEdit = (property: Property) => {
    navigate("/property-form", { state: { property } });
  };
  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this property?")) {
      try {
        // Remove from local store
        const updatedProperties = properties.filter((p) => p.id !== id);
        localStorage.setItem("properties", JSON.stringify(updatedProperties));

        setMessage("Property deleted successfully!");
        // Refresh the list
        fetchProperties();
        setTimeout(() => setMessage(""), 3000);
      } catch (error) {
        setMessage("Error deleting property");
        console.error(error);
      }
    }
  };

  // no cancel needed in dashboard now
  return (
    <div className="">
      <Navbar/>
      <div className=" p-5 md:p-8">
        {/* Header */}
        <div className=" bg-black/30 rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
          >
            Logout
          </button>
        </div>
  
        {/* Success/Error Message */}
        {message && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
            {message}
          </div>
        )}
  
        <div className="w-full mx-auto">
          {/* Add Button */}
          <div className="mb-6">
            <button
              onClick={() => navigate("/property-form")}
              className="px-6 py-2 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              + Add New Property
            </button>
          </div>

  
          {/* Properties Table */}
          <div className=" rounded-lg shadow-md p-8 bg-black/30">
            <h2 className="text-2xl font-bold border-b-2 border-purple-600 pb-4 mb-6">
              Properties ({properties.length})
            </h2>
  
            {properties.length === 0 ? (
              <p className="text-gray-600 text-center py-8">No properties found</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className=" border-b">
                      <th className="px-6 py-3 text-left text-sm font-semibold ">ID</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold ">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold ">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold ">Location</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold ">Price</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold ">Bedrooms</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold ">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((property) => (
                      <tr key={property.id} className="border-b hover:bg-gray-700 transition">
                        <td className="px-6 py-4 ">{property.id}</td>
                        <td className="px-6 py-4 ">{property.name}</td>
                        <td className="px-6 py-4 ">{property.type}</td>
                        <td className="px-6 py-4 ">
                          {property.location.area}, {property.location.city}
                        </td>
                        <td className="px-6 py-4 ">${property.price.toLocaleString()}</td>
                        <td className="px-6 py-4 ">{property.bedrooms}</td>
                        <td className="px-6 py-4 flex gap-2">
                          <button
                            onClick={() => handleEdit(property)}
                            className="px-3 py-1 bg-[#703BF7] hover:bg-[#5c2fe0] text-white text-sm font-semibold rounded transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(property.id)}
                            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Admindashboard;
