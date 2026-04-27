import MapSection from './components/MapSection';
import StatsRow from './components/StatsRow';
import CountriesGallery from "./components/CountriesGallery";
import trips from "./data/trips.json";

function App() {
  return (
    <div className="min-h-screen bg-parchment-100">
      {/* Hero */}
      <header className="relative pt-16 pb-12 md:pt-24 md:pb-14 overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-terracotta-500 text-xs uppercase tracking-widest font-semibold mb-4">
            <span className="divider-dots">A travel journal</span>
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-ink-900 leading-[0.95]">
            My Travels
          </h1>
          <p className="mt-6 text-ink-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            A record of where I've been · countries visited, cities walked,
            and the routes that connected them.
          </p>
        </div>
      </header>

      {/* Map + stats */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8">
        <MapSection />
        <StatsRow />
      </section>

      {/* Countries gallery */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="text-center mb-10 mt-6">
          <p className="text-terracotta-500 text-xs uppercase tracking-widest font-semibold mb-3">
            Year by year
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink-900">
            Where I've been.
          </h2>
        </div>
        <CountriesGallery trips={trips} />
      </section>

      {/* Footer */}
      <footer className="border-t rule-parchment">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-ink-400">
          <p>© {new Date().getFullYear()} Dara Newsome.</p>
          <a
            href="https://daranewso.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta-500 transition"
          >
            See more at daranewso.me →
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
