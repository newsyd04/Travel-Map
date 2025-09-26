// Dashboard.jsx
import { useState } from 'react';
import TravelMap from './TravelMap';
import Legend from './Legend';
import trips from '../data/trips.json';

const Dashboard = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [legendOpen, setLegendOpen] = useState(false);  // <-- NEW

  const handleTripClick = (group) => {
    setSelectedGroup(
      selectedGroup && selectedGroup.name === group.name ? null : group
    );
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <main className="flex-grow flex flex-col lg:flex-row lg:gap-6 gap-4">
        <TravelMap
          trips={selectedGroup ? selectedGroup.trips : trips}
          legendOpen={legendOpen}   // <-- pass down
        />
        <Legend
          trips={trips}
          onTripClick={handleTripClick}
          selectedTrip={selectedGroup}
          open={legendOpen}
          setOpen={setLegendOpen}   // <-- let Legend control it
        />
      </main>
    </div>
  );
};

export default Dashboard;
