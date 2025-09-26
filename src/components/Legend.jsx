import { useState } from "react";
import { Filter } from "lucide-react"; // nice filter icon
import { useEffect } from "react";

const Legend = ({ trips, onTripClick, selectedTrip, open, setOpen }) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);
  // Group trips by name, but keep arrays of trips
  const groupedTrips = Array.from(
    trips.reduce((map, trip) => {
      if (!map.has(trip.name)) {
        map.set(trip.name, { name: trip.name, color: trip.color, trips: [trip] });
      } else {
        map.get(trip.name).trips.push(trip);
      }
      return map;
    }, new Map())
  ).map(([_, group]) => group);

  return (
    <>
      {/* Mobile floating button */}
      <button
        className="lg:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
        onClick={() => setOpen(!open)}   // toggle open/close
      >
        <Filter size={20} />
      </button>

      {/* Mobile pop-up */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-center items-center lg:hidden"
          onClick={() => setOpen(false)} // close on backdrop click
        >
          <div
            className="bg-white rounded-lg shadow-lg w-[90%] max-h-[80%] p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // don’t close if clicking inside
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold">Trip Filters</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-600 hover:text-black"
              >
                ✕
              </button>
            </div>

            <ul className="flex flex-col space-y-2">
              {groupedTrips.map((group) => (
                <li
                  key={group.name}
                  className={`flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 ${
                    selectedTrip && selectedTrip.name === group.name
                      ? "bg-blue-100"
                      : ""
                  }`}
                  onClick={() => {
                    onTripClick(group);
                    setOpen(false);
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: group.color }}
                  />
                  <span className="text-sm">{group.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:block p-4 bg-white shadow-lg rounded-lg max-w-xs self-start overflow-y-auto max-h-[400px] w-full">
        <h3 className="text-lg font-bold mb-2">Trip Legend</h3>
        <ul className="flex flex-col space-y-2">
          {groupedTrips.map((group) => (
            <li
              key={group.name}
              className={`flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-100 ${
                selectedTrip && selectedTrip.name === group.name
                  ? "bg-blue-100"
                  : ""
              }`}
              onClick={() => onTripClick(group)}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: group.color }}
              />
              <span className="text-sm lg:text-base">
                {group.name}
                {group.trips.length > 1 && ` (${group.trips.length})`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Legend;
