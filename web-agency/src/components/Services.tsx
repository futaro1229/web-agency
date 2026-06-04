const services = [
  {
    title: "Website Design",
    description:
      "Custom, brand-aligned websites that build trust with your community—from salons and clinics to contractors and cafés.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Landing Page Design",
    description:
      "Focused pages built to convert—perfect for promos, new locations, lead magnets, and paid ad campaigns.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "AI Website Development",
    description:
      "Smart chat, personalized content, and automation that saves your team time while delighting visitors 24/7.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            What we do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Everything your local brand needs online
          </h2>
          <p className="mt-4 text-slate-400">
            We partner with local businesses in Japan, English-speaking markets, and
            beyond—anyone who wants a polished digital presence without the agency
            overhead.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group glass rounded-2xl p-8 transition hover:border-accent/30 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition group-hover:bg-accent/20">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
