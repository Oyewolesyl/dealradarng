import PageHero from "@/components/PageHero";

const softwareSections = [
  {
    title: "AI writing and productivity",
    body:
      "Software that helps creators, freelancers and business owners plan content, write faster, summarize research, organize workflows and improve daily output.",
    examples: ["AI writing assistants", "Research tools", "Meeting notes", "Productivity dashboards"],
  },
  {
    title: "Creator platforms and course tools",
    body:
      "Tools for building audiences, selling digital products, hosting courses, publishing templates and managing creator-led businesses.",
    examples: ["Course platforms", "Checkout tools", "Community platforms", "Digital product delivery"],
  },
  {
    title: "Business software and automation",
    body:
      "Useful SaaS tools for email marketing, analytics, customer support, task tracking, automations and operating an online business.",
    examples: ["Email marketing", "CRM tools", "Analytics", "Automation tools"],
  },
  {
    title: "Useful software discounts",
    body:
      "When relevant discounts or affiliate offers are available, this page can list them with clear notes on who they are useful for.",
    examples: ["Startup discounts", "Creator plans", "Student-friendly tools", "Freelancer software"],
  },
];

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-black">
      <PageHero
        label="Software"
        title="Software deals and tools for digital workers"
        description="A curated software section for creators, freelancers, business owners, students and online workers who need useful tools, not random empty listings."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {softwareSections.map((section) => (
            <article key={section.title} className="rounded-[2rem] bg-white p-6 shadow-xl sm:p-8">
              <h2 className="text-3xl font-black">{section.title}</h2>
              <p className="mt-4 leading-8 text-black/65">{section.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {section.examples.map((example) => (
                  <span key={example} className="rounded border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-black text-black/65">
                    {example}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] bg-black p-6 text-white sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#10B981]">
            Software section direction
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            The software page is now structured for real curated offers.
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/65">
            Add software only when it clearly helps the Deal Radar NG audience: creators, freelancers, business owners, students and online workers. Each future software listing should explain the use case, who it is for, what problem it solves and whether there is a discount or affiliate link.
          </p>
        </div>
      </section>
    </main>
  );
}
