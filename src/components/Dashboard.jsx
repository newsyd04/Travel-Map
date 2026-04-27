import { useState } from 'react';
import TravelMap from './TravelMap';
import Legend from './Legend';
import trips from '../data/trips.json';

const Dashboard = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [legendOpen, setLegendOpen] = useState(false);

  const handleTripClick = (group) => {
    if (group === null) {
      setSelectedGroup(null);
      return;
    }
    setSelectedGroup(
      selectedGroup && selectedGroup.name === group.name ? null : group
    );
  };

  return (
    <div className="flex h-full w-full">
      <div className="flex-1 min-w-0">
        <TravelMap
          trips={selectedGroup ? selectedGroup.trips : trips}
          legendOpen={legendOpen}
        />
      </div>
      <Legend
        trips={trips}
        onTripClick={handleTripClick}
        selectedTrip={selectedGroup}
        open={legendOpen}
        setOpen={setLegendOpen}
      />
    </div>
  );
};

export default Dashboard;
