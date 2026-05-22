export type Platform = "Expertnaire" | "Selar";

export type Deal = {
  id: number;
  slug: string;
  title: string;
  description: string;
  outcome: string;
  badge: string;
  category: string;
  platform: Platform;
  priceNote: string;
  affiliateUrl: string;
  image: string;
  featured?: boolean;
  audience: string;
  bestFor: string[];
  benefits: string[];
  whyPick: string;
  caution?: string;
};

export type Category = {
  name: string;
  description: string;
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  image: string;
};

export type Goal = {
  title: string;
  description: string;
  products: string[];
};
