import type { Category, Deal, Feature, Goal } from "@/types/deal";

export const deals: Deal[] = [
  {
    id: 1,
    slug: "amap",
    title: "Affiliate Marketing Accelerator Program (AMAP)",
    description:
      "A practical affiliate marketing program covering funnels, organic traffic, paid traffic, content, WhatsApp, TikTok, LinkedIn, Facebook, and sales systems.",
    outcome:
      "Learn affiliate marketing systems, customer acquisition, funnels, and traffic strategies.",
    badge: "Top Pick",
    category: "Affiliate Marketing",
    platform: "Expertnaire",
    priceNote: "₦30,000",
    affiliateUrl: "https://app.expertnaire.com/product/8653858523/7419346916",
    image: "/products/amap.jpg",
    featured: true,
    audience: "Beginners, students, job seekers, affiliates, and digital marketers.",
    bestFor: ["Affiliate systems", "Funnels", "Traffic", "WhatsApp marketing"],
    benefits: [
      "Covers organic and paid traffic systems.",
      "Includes funnel, content, WhatsApp and social selling lessons.",
      "Strong fit for people who want to understand affiliate marketing properly.",
    ],
    whyPick:
      "AMAP is the strongest entry product for people who want to understand affiliate marketing, funnels and traffic before promoting other offers.",
    caution:
      "This is not a guaranteed income product. It requires learning, testing and consistent implementation.",
  },
  {
    id: 2,
    slug: "monetize-your-knowledge",
    title: "Monetize Your Knowledge in 30 Days or Less",
    description:
      "A digital product academy for turning knowledge, skills, or professional experience into a sellable online product without heavy tech skills.",
    outcome:
      "Package your knowledge into digital products, courses, templates, and scalable offers.",
    badge: "Creator Economy",
    category: "Digital Products",
    platform: "Expertnaire",
    priceNote: "₦100,500",
    affiliateUrl: "https://app.expertnaire.com/product/8653858523/8373430183",
    image: "/products/monetize-knowledge.jpg",
    featured: true,
    audience: "Professionals, creators, coaches, consultants, entrepreneurs, and experts.",
    bestFor: ["Digital products", "Course creation", "Knowledge monetization"],
    benefits: [
      "Helps users package existing knowledge into sellable offers.",
      "Good fit for experts, consultants and creators.",
      "Supports a premium, education-focused platform positioning.",
    ],
    whyPick:
      "This product adds authority to Deal Radar NG because it focuses on building digital products, not just chasing short-term income.",
    caution:
      "Best for people who already have knowledge, experience or a skill they can package.",
  },
  {
    id: 3,
    slug: "ghostwriting-earning-vault",
    title: "The Ghostwriting Earning Vault",
    description:
      "A ghostwriting and remote writing offer focused on writing skills, AI-powered writing, client acquisition, and digital income through writing.",
    outcome:
      "Learn ghostwriting systems, remote writing income, and client acquisition strategies.",
    badge: "Remote Writing",
    category: "Ghostwriting",
    platform: "Expertnaire",
    priceNote: "₦40,000",
    affiliateUrl: "https://app.expertnaire.com/product/8653858523/8602159383",
    image: "/products/ghostwriting-vault.jpg",
    featured: false,
    audience: "Writers, students, freelancers, introverts, and remote-work beginners.",
    bestFor: ["Ghostwriting", "AI writing", "Client acquisition"],
    benefits: [
      "Strong remote-work angle.",
      "Clear fit for writing, AI and freelance positioning.",
      "Useful for people who prefer skill-based online work.",
    ],
    whyPick:
      "Ghostwriting is a strong niche because it connects online income with an actual skill people can practice and improve.",
    caution:
      "Writing opportunities depend on skill, portfolio, outreach and consistency.",
  },
  {
    id: 4,
    slug: "fully-funded-scholarships",
    title: "A to Z Guide To Securing Fully Funded Scholarships",
    description:
      "A scholarship guide for Nigerians targeting fully funded opportunities in Canada and the USA through better school selection and application positioning.",
    outcome:
      "Learn scholarship research, document packaging, and international study application strategy.",
    badge: "Study Abroad",
    category: "Career & Relocation",
    platform: "Expertnaire",
    priceNote: "₦67,000",
    affiliateUrl: "https://app.expertnaire.com/product/8653858523/8501429130",
    image: "/products/scholarships.jpg",
    featured: false,
    audience: "Graduates, students, professionals, and relocation-focused Nigerians.",
    bestFor: ["Scholarships", "Canada/USA study", "Application strategy"],
    benefits: [
      "Targets a strong Nigerian demand: funded study abroad routes.",
      "Focuses on application strategy and document positioning.",
      "Adds career and relocation diversity to the platform.",
    ],
    whyPick:
      "Scholarships are a practical, high-intent category for visitors looking beyond short-term online income.",
    caution:
      "No scholarship outcome is guaranteed. Users still need strong applications and real effort.",
  },
  {
    id: 5,
    slug: "canada-job-blueprint",
    title: "The SIMPLE Step-by-Step Blueprint to Getting a Job in Canada",
    description:
      "A Canada work permit and job-search handbook focused on finding genuine jobs, avoiding scams, and understanding Canada work pathways.",
    outcome:
      "Learn practical Canada job search and work-permit preparation strategies.",
    badge: "Canada Jobs",
    category: "Career & Relocation",
    platform: "Expertnaire",
    priceNote: "₦35,000",
    affiliateUrl: "https://app.expertnaire.com/product/8653858523/7569749927",
    image: "/products/canada-blueprint.jpg",
    featured: false,
    audience: "Nigerians exploring Canada work, relocation, and genuine job pathways.",
    bestFor: ["Canada jobs", "Work permit", "Relocation planning"],
    benefits: [
      "Addresses fake-job and agent-risk fears.",
      "Focused on work-permit and job-search education.",
      "Strong emotional demand for Nigerian relocation audiences.",
    ],
    whyPick:
      "This product fits the career mobility side of Deal Radar NG and should be marketed carefully with no fake guarantees.",
    caution:
      "Relocation rules change. Users should verify current immigration requirements before acting.",
  },
  {
    id: 6,
    slug: "virtual-assistant-dollar-program",
    title: "Virtual Assistant Dollar Program",
    description:
      "A remote work training program teaching virtual assistant skills, client acquisition, Upwork, Fiverr, LinkedIn, and dollar payment systems.",
    outcome:
      "Learn virtual assistant skills and ways to work with international clients remotely.",
    badge: "Remote Work",
    category: "Freelancing",
    platform: "Expertnaire",
    priceNote: "₦20,000",
    affiliateUrl: "https://app.expertnaire.com/product/8653858523/7521886367",
    image: "/products/virtual-assistant.jpg",
    featured: true,
    audience: "Beginners, graduates, stay-at-home parents, freelancers, and remote-work seekers.",
    bestFor: ["Virtual assistance", "Remote clients", "Dollar income skills"],
    benefits: [
      "Clear beginner-friendly remote-work path.",
      "Covers client platforms and positioning.",
      "Works well for Meta ad audiences interested in freelancing.",
    ],
    whyPick:
      "Virtual assistance is easier to explain and more trustable than vague online income claims.",
    caution:
      "Remote work requires service skill, outreach, patience and client communication.",
  },
  {
    id: 7,
    slug: "germany-work-visa-made-easy",
    title: "Germany Work Visa Made Easy",
    description:
      "A Germany work visa guide focused on relocation preparation, visa route education, job-market understanding, and application guidance.",
    outcome:
      "Understand Germany work visa opportunities and relocation preparation steps.",
    badge: "Germany Visa",
    category: "Career & Relocation",
    platform: "Expertnaire",
    priceNote: "₦37,950",
    affiliateUrl: "https://app.expertnaire.com/product/8653858523/8305665545",
    image: "/products/germany-work-visa.jpg",
    featured: false,
    audience: "Africans exploring Germany work and relocation opportunities.",
    bestFor: ["Germany relocation", "Work visa", "Career mobility"],
    benefits: [
      "Adds a non-Canada relocation angle.",
      "Strong international career theme.",
      "Useful for visitors comparing relocation resources.",
    ],
    whyPick:
      "Germany work guidance broadens the relocation category beyond Canada and scholarships.",
    caution:
      "Visa rules are sensitive. Visitors should confirm requirements from official sources before taking action.",
  },
  {
    id: 8,
    slug: "cpl-marketing-success-course",
    title: "CPL Marketing Success Course",
    description:
      "A cost-per-lead marketing course focused on earning through lead generation, CPA/CPL offers, email marketing, and performance marketing systems.",
    outcome:
      "Learn lead generation, CPL marketing, and performance advertising systems.",
    badge: "Lead Gen",
    category: "Marketing & Advertising",
    platform: "Expertnaire",
    priceNote: "₦30,000",
    affiliateUrl: "https://app.expertnaire.com/product/8653858523/7439018015",
    image: "/products/cpl-marketing.jpg",
    featured: false,
    audience: "Affiliate marketers, media buyers, lead generation beginners, and digital marketers.",
    bestFor: ["CPL", "Lead generation", "Email marketing"],
    benefits: [
      "Introduces a different affiliate model beyond direct selling.",
      "Good fit for advanced users interested in lead generation.",
      "Supports the marketing education side of the platform.",
    ],
    whyPick:
      "CPL marketing gives Deal Radar NG a more advanced marketing product for users who want performance-based systems.",
    caution:
      "CPL and CPA approvals, payouts and offers vary by network and country.",
  },
  {
    id: 9,
    slug: "tgps",
    title: "The Ghostwriting Profit System (TGPS)",
    description:
      "A Selar ghostwriting course covering AI writing, outsourcing, editing, payment setup, writing platforms, and remote writing opportunities.",
    outcome:
      "Learn how to build a ghostwriting skill path using writing, AI, outsourcing, and client platforms.",
    badge: "Popular",
    category: "Ghostwriting",
    platform: "Selar",
    priceNote: "₦40,000",
    affiliateUrl: "http://coachannieg.selar.com/1m51b8468h?affiliate=u2jt",
    image: "/products/tgps.jpg",
    featured: true,
    audience: "Writers, students, freelancers, and people interested in remote writing.",
    bestFor: ["Ghostwriting", "AI writing", "Outsourcing"],
    benefits: [
      "Strong sales and review proof from Selar.",
      "Good fit for AI writing and remote writing positioning.",
      "Useful alternative to the Expertnaire ghostwriting offer.",
    ],
    whyPick:
      "TGPS is a proven Selar ghostwriting product with strong demand signals.",
    caution:
      "Users should treat ghostwriting as a skill path, not instant money.",
  },
  {
    id: 10,
    slug: "upwork-mastermind-bootcamp",
    title: "The Upwork Mastermind Bootcamp",
    description:
      "A freelancing bootcamp for learning how to start positioning for online jobs and freelance opportunities through Upwork.",
    outcome:
      "Learn Upwork freelancing basics and remote work positioning.",
    badge: "Freelancing",
    category: "Freelancing",
    platform: "Selar",
    priceNote: "₦20,000",
    affiliateUrl: "https://selar.com/p/aona?affiliate=pubi",
    image: "/products/upwork.jpg",
    featured: false,
    audience: "Freelancing beginners, students, and remote-work seekers.",
    bestFor: ["Upwork", "Freelancing", "Remote work"],
    benefits: [
      "Simple, clear freelancing proposition.",
      "Good product for remote-work category depth.",
      "Pairs well with VA and ghostwriting offers.",
    ],
    whyPick:
      "Upwork is a recognizable route for users who want freelancing opportunities.",
    caution:
      "Freelancing success depends on skill, profile quality, proposals and persistence.",
  },
  {
    id: 11,
    slug: "amazon-kdp-triple-h-formula",
    title: "Amazon KDP Triple H Formula",
    description:
      "A self-publishing course covering Amazon KDP, book research, content creation, formatting, publishing, and launch strategy.",
    outcome:
      "Learn digital publishing and Amazon KDP self-publishing systems.",
    badge: "Publishing",
    category: "Digital Products",
    platform: "Selar",
    priceNote: "₦25,000",
    affiliateUrl: "https://selar.com/p/zrma?affiliate=duj4",
    image: "/products/amazon-kdp.jpg",
    featured: false,
    audience: "Writers, creators, side-hustlers, and digital product builders.",
    bestFor: ["Amazon KDP", "Publishing", "Book creation"],
    benefits: [
      "Strong existing proof from Selar.",
      "Evergreen digital publishing angle.",
      "Good fit for creators and writers.",
    ],
    whyPick:
      "Amazon KDP gives the platform a publishing product that is different from freelancing and relocation.",
    caution:
      "Publishing results vary based on niche, quality, research and marketing.",
  },
  {
    id: 12,
    slug: "master-grant-writing",
    title: "Master Grant Writing in 4 Weeks",
    description:
      "A professional grant writing course for business owners, NGOs, freelancers, and professionals who want to learn grant proposal systems.",
    outcome:
      "Learn grant writing, proposal structure, funder research, and grant application strategy.",
    badge: "Professional",
    category: "Professional Growth",
    platform: "Selar",
    priceNote: "₦50,000",
    affiliateUrl: "http://selar.com/277i29?affiliate=qgyz",
    image: "/products/grant-writing.jpg",
    featured: false,
    audience: "Business owners, NGO workers, consultants, freelancers, and professionals.",
    bestFor: ["Grant writing", "Business funding", "Professional skills"],
    benefits: [
      "Professional, higher-trust audience.",
      "Useful for NGOs, business owners and consultants.",
      "Makes Deal Radar NG look more serious than pure hustle offers.",
    ],
    whyPick:
      "Grant writing adds a professional development product that can attract a more serious buyer profile.",
    caution:
      "Grant success depends on eligibility, proposal quality and funder requirements.",
  },
];

export const featuredDeals = deals.filter((deal) => deal.featured);

export const categories: Category[] = [
  {
    name: "Affiliate Marketing",
    description:
      "Learn affiliate systems, paid traffic, digital sales and customer acquisition.",
    label: "Funnels & sales",
    href: "/deals?category=Affiliate%20Marketing",
  },
  {
    name: "Digital Products",
    description:
      "Discover courses focused on monetizing knowledge, publishing and creator businesses.",
    label: "Creator economy",
    href: "/deals?category=Digital%20Products",
  },
  {
    name: "Freelancing",
    description:
      "Remote work opportunities, Upwork strategies, virtual assistance and client acquisition.",
    label: "Remote work",
    href: "/deals?category=Freelancing",
  },
  {
    name: "Career & Relocation",
    description:
      "Scholarships, Canada job resources, Germany work guidance and international opportunities.",
    label: "Move smarter",
    href: "/deals?category=Career%20%26%20Relocation",
  },
  {
    name: "Marketing & Advertising",
    description:
      "Lead generation, CPL, paid traffic and performance marketing systems.",
    label: "Lead generation",
    href: "/deals?category=Marketing%20%26%20Advertising",
  },
  {
    name: "Professional Growth",
    description:
      "Grant writing, consulting, business development and advanced professional skills.",
    label: "Business skills",
    href: "/deals?category=Professional%20Growth",
  },
];

export const features: Feature[] = [
  {
    title: "Remote Work & Freelancing",
    description:
      "Explore opportunities in ghostwriting, virtual assistance, Upwork freelancing and remote digital work.",
    image: "/sections/remote-work.jpg",
  },
  {
    title: "Digital Skills & Online Business",
    description:
      "Learn practical skills including affiliate marketing, publishing, content creation and digital product systems.",
    image: "/sections/digital-skills.jpg",
  },
  {
    title: "Career & Relocation Resources",
    description:
      "Access scholarship resources, Canada job pathways, Germany work guidance and international career opportunities.",
    image: "/sections/relocation.jpg",
  },
];

export const goals: Goal[] = [
  {
    title: "Start Freelancing",
    description: "Upwork, virtual assistance and ghostwriting opportunities.",
    products: ["Upwork Mastermind", "Virtual Assistant Dollar Program", "Ghostwriting"],
  },
  {
    title: "Build Online Income",
    description: "Affiliate marketing, knowledge monetization and writing-based digital income.",
    products: ["AMAP", "Monetize Your Knowledge", "TGPS"],
  },
  {
    title: "Publish Digital Products",
    description: "Turn knowledge, books and content into sellable digital products.",
    products: ["Amazon KDP", "Monetize Your Knowledge"],
  },
  {
    title: "Work Abroad",
    description: "Explore career and relocation resources for Canada, USA and Germany.",
    products: ["Canada Blueprint", "Germany Visa", "Scholarships"],
  },
  {
    title: "Learn Marketing",
    description: "Affiliate systems, CPL marketing, paid traffic and lead generation.",
    products: ["AMAP", "CPL Marketing"],
  },
  {
    title: "Professional Development",
    description: "Grant writing, business growth and professional knowledge monetization.",
    products: ["Grant Writing", "MYK"],
  },
];

export const platforms = ["All", "Expertnaire", "Selar"] as const;

export const dealCategories = ["All", ...Array.from(new Set(deals.map((deal) => deal.category)))] as const;

export function getDealBySlug(slug: string) {
  return deals.find((deal) => deal.slug === slug);
}

export function getRelatedDeals(current: Deal) {
  return deals
    .filter((deal) => deal.slug !== current.slug)
    .filter((deal) => deal.category === current.category || deal.platform === current.platform)
    .slice(0, 3);
}
