import { Filter } from "lucide-react";
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

  // Group trips by name
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
        className="lg:hidden fixed bottom-5 right-5 bg-terracotta-500 hover:bg-terracotta-600 text-parchment-50 p-3 rounded-full shadow-warm z-50 transition"
        onClick={() => setOpen(!open)}
        aria-label="Filter trips"
      >
        <Filter size={20} />
      </button>

      {/* Mobile pop-up */}
      {open && (
        <div
          className="fixed inset-0 bg-ink-900/55 backdrop-blur-sm z-40 flex justify-center items-center lg:hidden p-5"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-parchment-50 rounded-xl shadow-warm w-full max-w-md max-h-[80%] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-5 py-4 border-b rule-parchment sticky top-0 bg-parchment-50">
              <h3 className="font-display text-xl text-ink-900">Filter trips</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-ink-400 hover:text-ink-900 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col p-2">
              <LegendItem
                onClick={() => {
                  onTripClick(null);
                  setOpen(false);
                }}
                active={!selectedTrip}
                label="All trips"
              />
              {groupedTrips.map((group) => (
                <LegendItem
                  key={group.name}
                  color={group.color}
                  label={group.name}
                  count={group.trips.length}
                  active={selectedTrip && selectedTrip.name === group.name}
                  onClick={() => {
                    onTripClick(group);
                    setOpen(false);
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:flex flex-col bg-parchment-50 border-l rule-parchment w-72 max-h-full overflow-y-auto">
        <div className="px-5 py-4 border-b rule-parchment">
          <h3 className="font-display text-xl text-ink-900">Filter trips</h3>
          <p className="mt-1 text-xs text-ink-400">
            Tap a trip to highlight it on the map
          </p>
        </div>
        <ul className="flex flex-col p-2">
          <LegendItem
            onClick={() => onTripClick(null)}
            active={!selectedTrip}
            label="All trips"
          />
          {groupedTrips.map((group) => (
            <LegendItem
              key={group.name}
              color={group.color}
              label={group.name}
              count={group.trips.length}
              active={selectedTrip && selectedTrip.name === group.name}
              onClick={() => onTripClick(group)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

function LegendItem({ color, label, count, active, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition ${
          active
            ? "bg-terracotta-500/10 text-ink-900"
            : "text-ink-500 hover:bg-ink-900/5 hover:text-ink-900"
        }`}
      >
        {color ? (
          <span
            className="w-3 h-3 rounded-full shrink-0"
            style={{ backgroundColor: color }}
          />
        ) : (
          <span className="w-3 h-3 rounded-full shrink-0 bg-ink-400/40" />
        )}
        <span className="text-sm font-medium flex-1 truncate">{label}</span>
        {count > 1 && (
          <span className="text-xs text-ink-400">×{count}</span>
        )}
      </button>
    </li>
  );
}

export default Legend;
