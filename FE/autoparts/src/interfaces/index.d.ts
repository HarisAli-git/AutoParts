import { ReactNode } from "react";
import { featureItem, product } from "../types";

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
