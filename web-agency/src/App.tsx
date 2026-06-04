import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Philosophy from "./components/Philosophy";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-grid-pattern bg-[length:64px_64px] opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-hero-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 bg-cool-mesh"
        aria-hidden
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
