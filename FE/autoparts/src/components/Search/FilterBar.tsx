import React, { useState } from "react";
import Dropdown from "../common/Dropdown";
import { DropdownOption } from "../../types";

type Props = {
  yearOptions: DropdownOption[];
  brandOptions: DropdownOption[];
  modelOptions: DropdownOption[];
  partOptions: DropdownOption[];
  
  onFilterChange: (filters: {
    year: string[];
    brand: string[];
    model: string[];
    part: string[];
  }) => void;
};

const FilterBar: React.FC<Props> = ({
  yearOptions,
  brandOptions,
  modelOptions,
  partOptions,
  onFilterChange,
}) => {
  const [filters, setFilters] = useState<{
    year: string[];
    brand: string[];
    model: string[];
    part: string[];
  }>({
    year: [],
    brand: [],
    model: [],
    part: [],
  });

  const handleSelectChange = (
    key: keyof typeof filters,
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
    key: keyof typeof filters,
    value: string
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
        <Dropdown options={yearOptions} key="year" />
        <Dropdown options={brandOptions} key="brand" />
        <Dropdown options={modelOptions} key="model" />
        <Dropdown options={partOptions} key="part" />
      </div>
    </div>
  );
};

export default FilterBar;
