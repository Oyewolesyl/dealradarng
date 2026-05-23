import PageHero from "@/components/PageHero";

const toolGroups = [
  {
    title: "Content & writing",
    description:
      "Tools for writing, editing, research, publishing and content production.",
    tools: [
      "AI-assisted writing for article outlines, emails and ad angles.",
      "Grammar, editing and clarity tools for cleaner product reviews.",
      "Research tools for checking claims before recommending offers.",
      "Publishing tools for turning notes into pages, PDFs and lead magnets.",
    ],
  },
  {
    title: "Design & assets",
    description:
      "Tools for graphics, landing pages, brand assets and product visuals.",
    tools: [
      "Logo, banner and thumbnail design resources.",
      "Landing page builders for testing affiliate offers quickly.",
      "Image compression tools for faster website loading.",
      "Product mockup and screenshot tools for cleaner review pages.",
    ],
  },
  {
    title: "Business operations",
    description:
      "Tools for email, analytics, funnels, task tracking and payment workflows.",
    tools: [
      "Email list tools for building owned traffic beyond social platforms.",
      "Analytics tools for tracking clicks, conversions and campaign results.",
      "Task management tools for offers, funnels, ad tests and reviews.",
      "Payment, checkout and documentation tools for business operations.",
    ],
  },
  {
    title: "Affiliate workflow",
    description:
      "Tools that help Deal Radar NG manage offers from research to publishing.",
    tools: [
      "Offer research checklist for choosing products worth listing.",
      "Review page templates for product detail pages.",
      "Ad testing spreadsheet for Meta campaign experiments.",
      "Tracking links and click records for measuring buyer interest.",
    ],
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-black">
      <PageHero
        label="Tools"
        title="Useful tools for online work and affiliate operations"
        description="A practical resource page for creators, freelancers, students, business owners and Deal Radar NG visitors who need better tools for content, design, productivity, tracking and online business execution."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {toolGroups.map((group) => (
            <article key={group.title} className="rounded-[2rem] bg-white p-6 shadow-xl sm:p-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#059669]">
                Tool category
              </p>
              <h2 className="text-3xl font-black">{group.title}</h2>
              <p className="mt-4 leading-8 text-black/65">{group.description}</p>

              <ul className="mt-6 space-y-3">
                {group.tools.map((tool) => (
                  <li key={tool} className="rounded-2xl border border-black/5 bg-[#F5F5F2] px-4 py-3 text-sm font-semibold leading-6 text-black/70">
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] bg-black p-6 text-white sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#10B981]">
            How this page will be used
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            This page should become a curated tool directory, not an empty placeholder.
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/65">
            Every tool listed here should help the audience do something practical: write better content, build pages, design assets, track results, manage campaigns, organize business tasks or improve online work productivity. Software offers can later be connected to affiliate links when suitable deals are available.
          </p>
        </div>
      </section>
    </main>
  );
}
