import { StaticImageData } from "next/image";

export interface Option {
  month: number;
  title: string;
  icon: StaticImageData;
  description: string;
  placeholder: string;
}

export interface User {
  month: number;
  budget: number;
  sustStat: number;
  profit: number;
  production: Option[];
  marketing: Option[];
  used: Option[];
}
