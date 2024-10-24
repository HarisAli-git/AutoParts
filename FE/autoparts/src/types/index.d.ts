import { IconType } from "react-icons";

export type Option = {
  label: string;
  value: string | number;
};

export interface featureItem {
  title: string;
  icon: IconType;
  description?: string;
}
