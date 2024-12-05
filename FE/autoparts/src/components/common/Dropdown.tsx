import { dropdownFilters } from "../../types";
import { dropdownOptions } from "../../interfaces";

const Dropdown = <Key extends keyof dropdownFilters>({
  filters,
  options,
  keyProp,
  handleRemoveChip,
  handleSelectChange,
}: dropdownOptions<Key>) => {
  return (
    <div>
      <select
        className="border border-gray-300 rounded-md p-2 mb-2 w-full"
        onChange={(e) => {
          if (e.target.value) handleSelectChange(keyProp, e.target.value);
        }}
        value=""
      >
        <option value="">Select {keyProp}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Chips for this dropdown */}
      <div className="flex flex-wrap gap-2 mb-4">
        {filters[keyProp].map((value) => (
          <div
            key={value}
            className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm"
          >
            <span>{value}</span>
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => handleRemoveChip(keyProp, value)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;