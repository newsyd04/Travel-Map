import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Helper function to create a custom icon with a given color
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-marker-icon',
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
    iconSize: [20, 20],
  });
};

const Map = ({ trips = [], tripColors }) => {
  return (
    <MapContainer className="h-80 lg:h-[80vh] flex-1 w-full" center={[51.2093, 3.2247]} zoom={5}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Display cities from trips with permanent colors */}
      {trips.map((trip) =>
        trip.cities.map((city, cityIndex) => (
          <Marker
            key={`${trip.name}-${cityIndex}`}
            position={[city.lat, city.lng]}
            icon={createCustomIcon(tripColors[trip.name])}
          >
            <Popup>{`${city.city}, ${city.country} (${trip.name})`}</Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
};

export default Map;
