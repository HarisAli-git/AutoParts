import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select"; // Import react-select
import { Option } from "../types";
import { getSearchOptions } from "../services";
import { makeSelectOptions } from "../utilities";

const Search: React.FC = () => {
  const [year, setYear] = useState<Option | null>(null); // State for year
  const [brand, setBrand] = useState<Option | null>(null); // State for make
  const [model, setModel] = useState<Option | null>(null); // State for model
  const [mainCategory, setMainCategory] = useState<Option | null>(null); // State for part

  const [yearOptions, setYearOptions] = useState<Option[]>([]); // State for year
  const [brandOptions, setBrandOptions] = useState<Option[]>([]); // State for make
  const [modelOptions, setModelOptions] = useState<Option[]>([]); // State for model
  const [mainCategoryOptions, setMainCategoryOptions] = useState<Option[]>([]); // State for part

  const fetchOptions = async () => {
    const response = await getSearchOptions();
    if (response.data) {
      setYearOptions(makeSelectOptions(response.data.year));
      setBrandOptions(makeSelectOptions(response.data.brand));
      setModelOptions(makeSelectOptions(response.data.model));
      setMainCategoryOptions(makeSelectOptions(response.data.main_category));
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle the search
    console.log("Selected year:", year);
    console.log("Selected Brand:", brand);
    console.log("Selected model:", model);
    console.log("Selected main catgeory:", mainCategory);
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
              options={yearOptions}
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
              placeholder="Select Your Brand"
              options={brandOptions}
              value={brand}
              onChange={(selectedOption) => setBrand(selectedOption)}
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
              options={modelOptions}
              value={model}
              onChange={(selectedOption: SingleValue<Option>) =>
                setModel(selectedOption)
              }
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
              options={mainCategoryOptions}
              value={mainCategory}
              onChange={(selectedOption) => setMainCategory(selectedOption)}
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
