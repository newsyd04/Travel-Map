import { useState, useMemo } from "react";
import CountryCard from "./CountryCard";

const CountriesGallery = ({ trips }) => {

  // Flatten trips -> countries
  const countries = useMemo(() => {
    const data = [];
    trips.forEach(trip => {
      trip.cities.forEach(city => {
        const existing = data.find(
          d => d.country === city.country && d.year === trip.year
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

  // Get groups as a sorted array of [groupLabel, items] pairs
  const groupEntries = useMemo(() => {

   const map = new Map();
    countries.forEach(c => {
      const key = c.year ?? "Unknown"; // could be number or "Unknown"
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(c);
    });

    // Sort: newest -> oldest, "Unknown" last
    return Array.from(map.entries())
      .sort(([a], [b]) => {
        if (a === "Unknown") return 1;
        if (b === "Unknown") return -1;
        return Number(b) - Number(a);
      })
      .map(([key, items]) => [String(key), items]); // ensure label is a string
  }, [countries]);

  return (
    <div className="mx-80 p-6">


      {/* Render Groups */}
    {groupEntries.map(([group, items]) => (
    <div key={group} className="mb-8">
        <h2
        className={`text-xl font-bold mb-3 text-blue-700 text-center border-b border-gray-300 pb-2"
        }`}
        >
        {group}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
