import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/styles';
import L from 'leaflet';

const createCustomIcon = (color) =>
  L.divIcon({
    className: 'custom-marker-icon',
    html: `<div style="
      background-color: ${color};
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid #fbf7ec;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
    "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });

const createClusterIcon = (cluster) => {
  const count = cluster.getChildCount();
  return L.divIcon({
    className: '',
    html: `<div class="custom-cluster-icon">${count}</div>`,
    iconSize: [32, 32],
  });
};

const TravelMap = ({ trips = [], legendOpen = false }) => {
  return (
    <MapContainer
      className="h-full w-full z-0"
      center={[25, 10]}
      zoom={2}
      minZoom={2}
      maxZoom={12}
      worldCopyJump
      scrollWheelZoom={!legendOpen}
      dragging={!legendOpen}
      doubleClickZoom={!legendOpen}
      zoomControl={!legendOpen}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      <MarkerClusterGroup
        iconCreateFunction={createClusterIcon}
        spiderfyOnMaxZoom
        showCoverageOnHover={false}
        maxClusterRadius={36}
        spiderLegPolylineOptions={{
          weight: 1.5,
          color: '#c45a3e',
          opacity: 0.6,
        }}
      >
        {trips.map((trip) =>
          trip.cities.map((city, i) => (
            <Marker
              key={`${trip.name}-${trip.year}-${i}`}
              position={[city.lat, city.lng]}
              icon={createCustomIcon(trip.color)}
            >
              <Popup>
                <strong>{city.city}</strong>
                <br />
                <span style={{ color: '#5a6373' }}>
                  {city.country} · {trip.name} ({trip.year})
                </span>
              </Popup>
            </Marker>
          ))
        )}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default TravelMap;
