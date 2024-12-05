import { DropdownOption, featureItem, product, dropdownFilters } from "../types";
import { ReactNode } from "react";

export interface switchProps {
  value: number | string;
  children: ReactNode;
}

export interface caseProps {
  case: number | string;
  children: ReactNode;
}

export interface defaultProps {
  children: ReactNode;
}

export interface headerProps {
  title: string;
  bg_pic: string;
  subtitle: string;
  call_us_at: string;
  description: string;
}

export interface featureBarProps {
  data: featureItem[];
  isPartsPage: boolean;
}

export interface ProductsGridProps {
  products: product[];
}

export interface productCardProps {
  product: product;
}

export interface dropdownOptions<Key extends keyof dropdownFilters> {
  keyProp: Key; 
  filters: dropdownFilters;
  options: DropdownOption[];
  handleRemoveChip: (key: string, value: string) => void;
  handleSelectChange: (key: string, value: string) => void;
}

export interface filterBarProps {
  partOptions: DropdownOption[];
  yearOptions: DropdownOption[];
  brandOptions: DropdownOption[];
  modelOptions: DropdownOption[];
  
  onFilterChange: (filters: dropdownFilters) => void;
}