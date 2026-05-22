export type Deal = {
  id: number;
  slug: string;
  title: string;
  description: string;
  outcome: string;
  badge: string;
  category: string;
  platform: "Expertnaire" | "Selar";
  priceNote: string;
  affiliateUrl: string;
  image: string;
  featured?: boolean;
  audience: string;
  bestFor: string[];
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