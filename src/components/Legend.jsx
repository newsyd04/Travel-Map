const Legend = ({ trips, tripColors, onTripClick, selectedTrip }) => {
    return (
      <div className="p-4 bg-white shadow-lg rounded-lg max-w-full lg:max-w-xs self-start lg:sticky lg:top-0 overflow-y-auto">
        <h3 className="text-lg font-bold mb-2 text-center lg:text-left">Trip Legend</h3>
        <ul className="flex flex-wrap gap-2 md:flex-row md:space-y-0 md:justify-around lg:flex-col lg:space-y-2 lg:gap-0">
          {trips.map((trip) => (
            <li
              key={trip.name}
              className={`flex items-center space-x-2 cursor-pointer p-2 rounded ${
                selectedTrip && selectedTrip.name === trip.name ? 'bg-blue-100' : ''
              }`}
              onClick={() => onTripClick(trip)}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: tripColors[trip.name] }}
              ></div>
              <span className="text-sm lg:text-base">{trip.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Legend;
  