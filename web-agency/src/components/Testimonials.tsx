const testimonials = [
  {
    quote:
      "Our booking page went live in two weeks and appointments jumped 40% in the first month. They understood our neighborhood market perfectly.",
    name: "Sarah Mitchell",
    role: "Owner, Bloom & Blade Salon",
    location: "Austin, TX",
    rating: 5,
  },
  {
    quote:
      "The AI chat handles after-hours enquiries so we wake up to qualified leads. Professional, fast, and worth every penny.",
    name: "James O'Brien",
    role: "Director, O'Brien Plumbing",
    location: "Dublin, Ireland",
    rating: 5,
  },
  {
    quote:
      "We needed a landing page for our new café location—clean design, loads fast on mobile, and our ad cost per lead dropped significantly.",
    name: "Priya Sharma",
    role: "Co-founder, Harbor Roast Coffee",
    location: "Vancouver, BC",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Client stories
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Trusted by local businesses worldwide
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="glass flex flex-col rounded-2xl p-8"
            >
              <Stars count={item.rating} />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/10 pt-6">
                <p className="font-display font-semibold text-white">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">{item.role}</p>
                <p className="mt-0.5 text-xs text-accent/80">{item.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
