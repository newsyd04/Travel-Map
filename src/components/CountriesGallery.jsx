import { useMemo } from "react";
import CountryCard from "./CountryCard";

const CountriesGallery = ({ trips }) => {
  // Flatten trips → unique countries-per-year
  const countries = useMemo(() => {
    const data = [];
    trips.forEach((trip) => {
      trip.cities.forEach((city) => {
        const existing = data.find(
          (d) => d.country === city.country && d.year === trip.year
        );
        if (existing) {
          if (!existing.cities.includes(city.city)) {
            existing.cities.push(city.city);
          }
        } else {
          data.push({
            country: city.country,
            cities: [city.city],
            year: trip.year,
            continent: city.continent,
            code: city.countryCode,
          });
        }
      });
    });
    return data;
  }, [trips]);

  // Group by year, sort newest first
  const groupEntries = useMemo(() => {
    const map = new Map();
    countries.forEach((c) => {
      const key = c.year ?? "Earlier";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(c);
    });

    return Array.from(map.entries())
      .sort(([a], [b]) => {
        if (a === "Earlier") return 1;
        if (b === "Earlier") return -1;
        return Number(b) - Number(a);
      })
      .map(([key, items]) => [String(key), items]);
  }, [countries]);

  return (
    <div className="space-y-12">
      {groupEntries.map(([group, items]) => (
        <div key={group}>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px flex-1 bg-ink-900/15" />
            <h3 className="font-display text-2xl md:text-3xl text-ink-900 px-2 whitespace-nowrap">
              {group}
            </h3>
            <span className="h-px flex-1 bg-ink-900/15" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {items.map((c, i) => (
              <CountryCard key={`${c.country}-${c.year}-${i}`} {...c} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountriesGallery;
