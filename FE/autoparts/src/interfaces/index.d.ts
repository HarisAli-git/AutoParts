import { IconType } from "react-icons";
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

export interface featureItem {
  title: string;
  icon: IconType;
  description?: string;
}

export interface headerProps {
  title: string;
  bg_pic: string;
  subtitle: string;
  call_us_at: string;
  description: string;
}
