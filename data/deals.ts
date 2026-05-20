import type { Category, Deal, Feature } from "@/types/deal";

export const deals: Deal[] = [
  { id: "ai-tools", title: "AI Tools", category: "AI Tools", platform: "PartnerStack", description: "Software and AI tools for writing, research, automation, content, and business productivity.", badge: "Trending", priceNote: "Software deals and trials", affiliateUrl: "/deals" },
  { id: "business-courses", title: "Business Skill Programs", category: "Digital Courses", platform: "Expertnaire", description: "Digital programs and skill-based offers for business, sales, marketing, and online work.", badge: "High Commission", priceNote: "Digital product offers", affiliateUrl: "/deals" },
  { id: "creator-products", title: "Creator Digital Products", category: "Digital Products", platform: "Selar", description: "Templates, creator resources, digital products, online assets, and practical downloads.", badge: "New", priceNote: "Creator marketplace", affiliateUrl: "/deals" }
];

export const categories: Category[] = [
  { name: "AI Tools", description: "Writing, automation, research, content, and workflow tools.", count: "12 planned" },
  { name: "Software", description: "Business software, SaaS tools, and online platforms.", count: "15 planned" },
  { name: "Digital Courses", description: "Skill-based programs, trainings, and digital education.", count: "10 planned" },
  { name: "Templates", description: "Business, design, creator, productivity, and marketing templates.", count: "8 planned" },
  { name: "Marketing Tools", description: "Tools for growth, content, ads, funnels, and sales systems.", count: "9 planned" },
  { name: "Productivity", description: "Apps and systems that help people work faster and stay organized.", count: "11 planned" }
];

export const features: Feature[] = [
  { title: "Curated digital deals", description: "A cleaner way to discover useful online products without searching across many platforms." },
  { title: "Software-first discovery", description: "Built around tools, digital products, services, and offers that online users actually need." },
  { title: "Simple buying path", description: "Each deal leads users clearly from discovery to the offer page without unnecessary confusion." }
];
