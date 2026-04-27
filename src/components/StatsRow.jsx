import { Globe2, MapPin, Compass, Plane } from "lucide-react";
import trips from "../data/trips.json";

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center bg-parchment-50 rounded-xl border rule-parchment shadow-warm p-6">
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-terracotta-500/10 text-terracotta-500 mb-3">
      <Icon size={20} aria-hidden />
    </div>
    <p className="font-antonio text-4xl md:text-5xl font-bold text-ink-900 leading-none">
      {value}
    </p>
    <h3 className="mt-2 text-xs uppercase tracking-widest text-ink-400 font-semibold">
      {label}
    </h3>
  </div>
);

const StatsRow = () => {
  const allCities = trips.flatMap((t) => t.cities);
  const countries = new Set(allCities.map((c) => c.country)).size;
  const cities = new Set(allCities.map((c) => c.city)).size;
  const continents = new Set(allCities.map((c) => c.continent)).size;
  const totalTrips = trips.length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 my-10 md:my-14">
      <StatCard icon={Globe2} label="Countries" value={countries} />
      <StatCard icon={MapPin} label="Cities" value={cities} />
      <StatCard icon={Compass} label="Continents" value={continents} />
      <StatCard icon={Plane} label="Trips" value={totalTrips} />
    </div>
  );
};

export default StatsRow;
