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
