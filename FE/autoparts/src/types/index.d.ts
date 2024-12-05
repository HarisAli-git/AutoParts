import { IconType } from "react-icons";

export type Option = {
  label: string;
  value: string | number;
};

export type featureItem = {
  title: string;
  icon: IconType;
  description?: string;
};

export type product = {
  id: int;
  year: int;
  sku: string;
  name: string;
  price: float;
  model: string;
  brand: string;
  category_id: int;
  image_url: string;
  stock_quantity: int;
  description: string;
  subcategory_id: int;
};

export type DropdownOption = {
  label: string;
  value: string | number;
};

export type dropdownFilters = {
  part: string[];
  year: string[];
  brand: string[];
  model: string[];
}

