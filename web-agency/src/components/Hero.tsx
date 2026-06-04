const stats = [
  { value: "120+", label: "Sites launched" },
  { value: "4.9", label: "Client rating" },
  { value: "14d", label: "Avg. delivery" },
];

export default function Hero() {
  return (
    <section className="relative px-5 pb-20 pt-32 lg:px-8 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Built for local businesses · US · UK · CA · AU · JP
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Websites that turn{" "}
            <span className="text-gradient">neighbors into customers</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Remote Growth Studio designs premium websites, high-converting landing
            pages, and AI-powered experiences—so your local business stands out
            and scales online.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-accent px-8 py-4 text-center text-sm font-bold text-ink-950 shadow-glow transition hover:bg-accent-glow sm:w-auto"
            >
              Start Your Project
            </a>
            <a
              href="#pricing"
              className="w-full rounded-full border border-white/15 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
            >
              View Pricing
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl px-6 py-5 text-center"
            >
              <p className="font-display text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl animate-float">
          <div className="glass overflow-hidden rounded-2xl shadow-glow ring-1 ring-white/10">
            <div className="flex items-center gap-2 border-b border-white/10 bg-ink-900/80 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400/80" />
              <span className="ml-3 text-xs text-slate-500">
                remotegrowth.studio — preview
              </span>
            </div>
            <div className="grid gap-px bg-white/5 p-6 sm:grid-cols-3 sm:p-8">
              <div className="rounded-xl bg-gradient-to-br from-accent/20 to-transparent p-5 sm:col-span-2">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  Hero
                </p>
                <div className="mt-3 h-3 w-3/4 rounded bg-white/20" />
                <div className="mt-2 h-2 w-1/2 rounded bg-white/10" />
                <div className="mt-6 h-8 w-28 rounded-full bg-accent/40" />
              </div>
              <div className="space-y-3">
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="h-2 w-full rounded bg-white/15" />
                  <div className="mt-2 h-2 w-2/3 rounded bg-white/10" />
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="h-2 w-full rounded bg-white/15" />
                  <div className="mt-2 h-2 w-2/3 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
