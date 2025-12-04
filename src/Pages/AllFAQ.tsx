import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import { useFAQStore } from "../Store/useFAQStore";
import type { FAQ } from "../types";

function AllFAQs() {
  const { faq, loading, fetchFAQs } = useFAQStore();

  useEffect(() => {
    fetchFAQs();
  }, [fetchFAQs]);

  if (loading) {
    return (
      <p className="text-center text-white py-10">
        Loading FAQs...
      </p>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="w-[90%] mx-auto px-4 py-3">
        <h1 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faq.map((item: FAQ) => (
            <div
              key={item.id}
              className="bg-[#1A1A1A] border border-gray-600/30 rounded-xl p-4 text-white"
            >
              {/* Question */}
              <h4 className="text-lg font-semibold mb-2">{item.question}</h4>

              {/* Answer */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AllFAQs;
