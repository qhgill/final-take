import { StaticImageData } from "next/image";

export interface Option {
  title: string;
  icon: StaticImageData;
  description: string;
  placeholder: string;
  answers: Choice[];
  selectionView: number; // 1 for carousel
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

export interface Choice {
  id: number;
  title: string;
  description: string;
  price: number;
  sustain: number;
  profit: number;
}
