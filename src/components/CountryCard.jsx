import React from 'react';
import ReactCountryFlag from "react-country-flag";

const CountryCard = ({ country, cities, year, code }) => {
  return (
    <div className="bg-white border-gray-200 border-2 rounded-lg p-4 flex flex-col items-center text-center">
      <ReactCountryFlag
        countryCode={code}
        svg
        style={{ fontSize: "2em" }}
        className="mb-2"
      />
      <h2 className="text-lg font-bold">{country}</h2>
      <p className="text-sm text-gray-600">{cities.join(", ")}</p>
      <p className="text-xs text-gray-500 mt-1">Visited in {year}</p>
    </div>
  );
};

export default CountryCard;
