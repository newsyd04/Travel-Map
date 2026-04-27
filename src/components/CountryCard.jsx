import ReactCountryFlag from "react-country-flag";

const CountryCard = ({ country, cities, year, code }) => {
  return (
    <div className="bg-parchment-50 border rule-parchment rounded-xl p-4 flex flex-col items-center text-center transition hover:border-terracotta-500/40 hover:shadow-warm">
      <ReactCountryFlag
        countryCode={code}
        svg
        style={{ width: "2.4em", height: "1.7em" }}
        className="mb-3 rounded-sm shadow-ring"
      />
      <h4 className="font-display text-lg text-ink-900 leading-tight">
        {country}
      </h4>
      <p className="mt-1 text-xs text-ink-400 leading-snug">
        {cities.length} {cities.length === 1 ? "city" : "cities"} · {year}
      </p>
      <p className="mt-2 text-[11px] text-ink-500/80 leading-relaxed line-clamp-2">
        {cities.join(", ")}
      </p>
    </div>
  );
};

export default CountryCard;
