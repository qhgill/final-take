export interface Option {
  title: string;
  description: string;
  answers: Choice[];
  selectionView: number; // 1 for ticketcarousel, 2 for framecarouel, 3 for clapper carouel, 4 for billboard carousel, 5 for 2 tickets, 6 for 2 lights
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

export const formatPrice = (num: number): string => {
  if (num >= 1_000_000)
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return num.toString();
};
