import React, { useState } from "react";
import Select from "react-select"; // Import react-select

const Search: React.FC = () => {
  const [year, setYear] = useState<number | null>(null); // State for year
  const [make, setMake] = useState<string | null>(null); // State for make
  const [part, setPart] = useState<string | null>(null); // State for part
  const [model, setModel] = useState<string | null>(null); // State for model

  const years = [
    { value: 203, label: "203" },
    { value: 122, label: "122" },
    { value: 233, label: "233" },
  ]; // Sample years

  const makes = [
    { value: "Toyota", label: "Toyota" },
    { value: "Honda", label: "Honda" },
    { value: "Ford", label: "Ford" },
  ]; // Sample makes

  const models = [
    { value: "Camry", label: "Camry" },
    { value: "Civic", label: "Civic" },
    { value: "Mustang", label: "Mustang" },
  ]; // Sample models

  const parts = [
    { value: "Engine", label: "Engine" },
    { value: "Brakes", label: "Brakes" },
    { value: "Transmission", label: "Transmission" },
  ]; // Sample parts

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle the search
    console.log("Selected year:", year);
    console.log("Selected make:", make);
    console.log("Selected model:", model);
    console.log("Selected part:", part);
  };

  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-8">
        <h2 className="text-center text-2xl font-bold text-[#1b3b77] mb-6">
          FIND YOUR PART NOW!
        </h2>

        {/* Dropdowns */}
        <form onSubmit={handleSearch}>
          <div className="mb-4">
            <Select
              placeholder="Select The Year of Manufacture"
              options={years}
              value={year}
              onChange={(selectedOption) => setYear(selectedOption)}
              className="text-gray-600"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "#1b3b77",
                  "&:hover": { borderColor: "#a49563" },
                }),
              }}
            />
          </div>

          <div className="mb-4">
            <Select
              placeholder="Select Your Make"
              options={makes}
              value={make}
              onChange={(selectedOption) => setMake(selectedOption)}
              className="text-gray-600"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "#1b3b77",
                  "&:hover": { borderColor: "#a49563" },
                }),
              }}
            />
          </div>

          <div className="mb-4">
            <Select
              placeholder="Select Your Model"
              options={models}
              value={model}
              onChange={(selectedOption) => setModel(selectedOption)}
              className="text-gray-600"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "#1b3b77",
                  "&:hover": { borderColor: "#a49563" },
                }),
              }}
            />
          </div>

          <div className="mb-4">
            <Select
              placeholder="Select Your Part"
              options={parts}
              value={part}
              onChange={(selectedOption) => setPart(selectedOption)}
              className="text-gray-600"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "#1b3b77",
                  "&:hover": { borderColor: "#a49563" },
                }),
              }}
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-[#0f1c35] text-white font-semibold rounded-lg hover:bg-[#1b3b77] transition duration-300"
          >
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
