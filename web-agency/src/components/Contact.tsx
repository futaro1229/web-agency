import { type ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  business: string;
  service: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  business: "",
  service: "website-design",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Tell us a bit about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  const update =
    (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  return (
    <section id="contact" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s grow your business online
            </h2>
            <p className="mt-4 text-slate-400">
              Tell us about your project. We typically respond within one business
              day with next steps and a tailored quote.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a
                  href="mailto:futaro.1229@gmail.com"
                  className="transition hover:text-accent"
                >
                  futaro.1229@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Mon–Fri · 9am–6pm EST
              </li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-white">
                  Message received!
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Thanks for reaching out. We&apos;ll be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-accent hover:text-accent-glow"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      className="w-full rounded-xl border border-white/10 bg-ink-900/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                      placeholder="Jane Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      className="w-full rounded-xl border border-white/10 bg-ink-900/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                      placeholder="you@business.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Business name
                  </label>
                  <input
                    id="business"
                    type="text"
                    value={form.business}
                    onChange={update("business")}
                    className="w-full rounded-xl border border-white/10 bg-ink-900/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                    placeholder="Your Local Business"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Service interested in
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className="w-full rounded-xl border border-white/10 bg-ink-900/50 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="website-design">Website Design</option>
                    <option value="landing-page">Landing Page Design</option>
                    <option value="ai-development">AI Website Development</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className="w-full resize-none rounded-xl border border-white/10 bg-ink-900/50 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell us about your goals, timeline, and location..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent py-4 text-sm font-bold text-ink-950 transition hover:bg-accent-glow hover:shadow-glow"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
