import { ReactNode } from "react";

export interface NavItem {
  name: string;
  path: string;
  Icon?: () => JSX.Element;
  level: number;
  children?: NavItem[];
}

export interface AMC {
  id: number;
  amccode: string;
  customer: string;
  company: string;
  contactnumber: string;
  amcrange: string;
  amcdaysover: number;
}
