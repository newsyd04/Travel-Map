import { useState } from 'react';
import Map from './Map';
import Legend from './Legend';
import trips from '../data/trips.json';

const Dashboard = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleTripClick = (trip) => {
    setSelectedTrip(
      selectedTrip && selectedTrip.name === trip.name ? null : trip
    );
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <main className="flex-grow flex flex-col lg:flex-row lg:gap-6 gap-4">
        <Map trips={selectedTrip ? [selectedTrip] : trips} />
        <Legend
          trips={trips}
          onTripClick={handleTripClick}
          selectedTrip={selectedTrip}
        />
      </main>
    </div>
  );
};

export default Dashboard;
