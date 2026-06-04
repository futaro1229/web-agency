const plans = [
  {
    name: "Starter",
    price: "$1,499",
    period: "one-time",
    description: "Essential web presence for new or solo local businesses.",
    features: [
      "Up to 5 custom pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "2 revision rounds",
      "14-day delivery",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$2,999",
    period: "one-time",
    description: "Our most popular package for businesses ready to scale leads.",
    features: [
      "Everything in Starter",
      "High-converting landing page",
      "Google Business optimization",
      "Analytics & heatmap setup",
      "Copywriting support",
      "4 revision rounds",
      "10-day priority delivery",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "AI Pro",
    price: "$4,999",
    period: "one-time",
    description: "Full website plus AI features that work while you sleep.",
    features: [
      "Everything in Growth",
      "AI chat assistant on site",
      "Smart lead qualification",
      "Automated follow-up emails",
      "Content personalization",
      "30-day post-launch support",
      "Unlimited revisions (30 days)",
    ],
    highlighted: false,
    cta: "Go AI Pro",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Transparent packages, no surprises
          </h2>
          <p className="mt-4 text-slate-400">
            Fixed project pricing in USD. Custom quotes available for multi-location
            or enterprise needs.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? "border border-accent/40 bg-gradient-to-b from-accent/10 to-ink-900 shadow-glow ring-1 ring-accent/20"
                  : "glass"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wide text-ink-950">
                  Best value
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-white">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-slate-500">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-slate-400">{plan.description}</p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3.5 text-center text-sm font-bold transition ${
                  plan.highlighted
                    ? "bg-accent text-ink-950 hover:bg-accent-glow hover:shadow-glow"
                    : "border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
