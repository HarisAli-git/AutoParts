import React from "react";

const Search: React.FC = () => {
  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-8">
        <h2 className="text-center text-2xl font-bold text-[#a49563] mb-6">
          FIND YOUR PART NOW!
        </h2>

        {/* Dropdowns */}
        <form>
          <div className="mb-4">
            <select className="w-full p-3 border border-[#a49563] rounded-md text-gray-600 focus:outline-none focus:ring focus:border-[#a49563]">
              <option>Select The Year of Manufacture</option>
            </select>
          </div>

          <div className="mb-4">
            <select className="w-full p-3 border border-[#a49563] rounded-md text-gray-600 focus:outline-none focus:ring focus:border-[#a49563]">
              <option>Select Your Make</option>
            </select>
          </div>

          <div className="mb-4">
            <select className="w-full p-3 border border-[#a49563] rounded-md text-gray-600 focus:outline-none focus:ring focus:border-[#a49563]">
              <option>Select Your Model</option>
            </select>
          </div>

          <div className="mb-4">
            <select className="w-full p-3 border border-[#a49563] rounded-md text-gray-600 focus:outline-none focus:ring focus:border-[#a49563]">
              <option>Select Your Part</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-[#d1c188] text-black font-semibold rounded-lg hover:bg-[#a49563] transition duration-300"
          >
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
