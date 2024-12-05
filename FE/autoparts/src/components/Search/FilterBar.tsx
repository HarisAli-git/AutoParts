import React, { useState } from "react";
import Dropdown from "../common/Dropdown";
import { filterBarProps } from "../../interfaces";
import { dropdownFilters } from "../../types";

const FilterBar: React.FC<filterBarProps> = ({
  yearOptions,
  brandOptions,
  modelOptions,
  partOptions,
  onFilterChange,
}) => {
  const [filters, setFilters] = useState<dropdownFilters>({
    year: [],
    part: [],
    brand: [],
    model: [],
  });

  const handleSelectChange = (
    key: keyof dropdownFilters,
    value: string
  ) => {
    setFilters((prev) => {
      const updated = prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value];

      onFilterChange({ ...prev, [key]: updated });
      return { ...prev, [key]: updated };
    });
  };

  const handleRemoveChip = (
    value: string,
    key: keyof dropdownFilters,
  ) => {
    setFilters((prev) => {
      const updated = prev[key].filter((item) => item !== value);
      onFilterChange({ ...prev, [key]: updated });
      return { ...prev, [key]: updated };
    });
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Dropdown filters={filters} handleSelectChange={handleSelectChange} handleRemoveChip={handleRemoveChip} options={yearOptions} keyProp="year" />
        <Dropdown filters={filters} handleSelectChange={handleSelectChange} handleRemoveChip={handleRemoveChip} options={brandOptions} keyProp="brand" />
        <Dropdown filters={filters} handleSelectChange={handleSelectChange} handleRemoveChip={handleRemoveChip} options={modelOptions} keyProp="model" />
        <Dropdown filters={filters} handleSelectChange={handleSelectChange} handleRemoveChip={handleRemoveChip} options={partOptions} keyProp="part" />
      </div>
    </div>
  );
};

export default FilterBar;
