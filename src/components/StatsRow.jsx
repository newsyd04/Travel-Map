import trips from "../data/trips.json";

const StatCard = ({ title, value }) => (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg border shadow w-full">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-2xl text-gray-800">{value}</p>
  </div>
);

const StatsRow = () => {
  const allCities = trips.flatMap(trip => trip.cities);
  const uniqueCountries = new Set(allCities.map(c => c.country)).size;
  const uniqueCities = new Set(allCities.map(c => c.city)).size;
  const uniqueContinents = new Set(allCities.map(c => c.continent)).size;

  return (
    <div className="grid grid-cols-3 text-center sm:grid-cols-3 gap-4 w-full max-w-5xl px-4 py-6">
      <StatCard title="Countries Visited" value={uniqueCountries} />
      <StatCard title="Cities Visited" value={uniqueCities} />
      <StatCard title="Continents Visited" value={uniqueContinents} />
    </div>
  );
};
export default StatsRow;
