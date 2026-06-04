const pillars = [
  {
    number: "01",
    title: "Japanese Precision",
    description:
      "Rooted in Japan's monozukuri spirit, we apply uncompromising quality control and meticulous attention to detail—so every layout, interaction, and line of code reflects craft, not compromise.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    ),
  },
  {
    number: "02",
    title: "Reliability",
    description:
      "You get the dependability Japanese business is known for—clear communication, realistic timelines, and delivery you can plan around. We treat deadlines as promises, not suggestions.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    number: "03",
    title: "AI-Driven Efficiency",
    description:
      "We blend artisan-level care with cutting-edge AI in a hybrid production process—faster iteration, smarter workflows, and polished results without cutting corners on quality.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    ),
  },
];

export default function Philosophy() {
  return (
    <section
      id="why-us"
      className="relative border-y border-blue-400/10 bg-ink-900/50 px-5 py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Our Philosophy:{" "}
              <span className="text-gradient">Japanese-led excellence</span>
            </h2>
            <p className="mt-2 text-sm font-medium text-accent-glow">
              A Japanese-led team for local businesses in Japan and abroad
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-400">
              Remote Growth Studio combines the discipline of Japanese craftsmanship
              with modern web strategy—so local businesses across Japan, the US, UK,
              Canada, Australia, and beyond get a partner who cares about precision,
              trust, and intelligent speed in equal measure.
            </p>

            <div className="mt-8 glass rounded-2xl border-l-2 border-l-accent p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-md bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                  EN
                </span>
                <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  日本語
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Bilingual support
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                We provide full support in both Japanese and English. Whether you are
                a local business in Japan or expanding overseas, we combine Japanese
                attention to detail with global design standards to help you grow.
              </p>
              <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-500">
                日本語・英語の両方でフルサポートを提供します。日本国内のローカルビジネスの方も、海外展開を目指す方も、日本の細部へのこだわりとグローバルなデザイン基準を融合させ、あなたのビジネスの成長を支援します。
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-accent/25 bg-accent/5 px-4 py-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                JP
              </span>
              <span className="text-sm text-slate-300">
                US · UK · CA · AU · JP
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:border-accent/25 hover:shadow-glow sm:p-8"
              >
                <div
                  className="pointer-events-none absolute -right-4 -top-6 font-display text-7xl font-extrabold text-white/[0.03] transition group-hover:text-accent/[0.06]"
                  aria-hidden
                >
                  {pillar.number}
                </div>
                <div className="relative flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition group-hover:bg-accent/20">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden
                    >
                      {pillar.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent/80">
                      {pillar.number}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
