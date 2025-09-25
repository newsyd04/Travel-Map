import trips from "../data/trips.json";

const StatCard = ({ title, value }) => (
  <div className="flex flex-col items-center bg-white p-4 rounded-lg border-2 w-1/3">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-2xl text-gray-800">{value}</p>
  </div>
);

const StatsRow = () => {
  // Flatten all cities across all trips
  const allCities = trips.flatMap(trip => trip.cities);

  // Unique countries
  const uniqueCountries = new Set(allCities.map(c => c.country)).size;

  // Unique cities
  const uniqueCities = new Set(allCities.map(c => c.city)).size;

  // Unique continents
  const uniqueContinents = new Set(allCities.map(c => c.continent)).size;

  return (
    <div className="flex flex-row justify-center w-full px-96 p-4 gap-4">
      <StatCard title="Countries Visited" value={uniqueCountries} />
      <StatCard title="Cities Visited" value={uniqueCities} />
      <StatCard title="Continents Visited" value={uniqueContinents} />
    </div>
  );
};

export default StatsRow;
