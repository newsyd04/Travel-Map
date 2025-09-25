import { useState } from 'react';
import MapSection from './components/MapSection';
import ToggleSwitch from './components/ToggleSwitch';
import StatsRow from './components/StatsRow';
import CountriesGallery from "./components/CountriesGallery";
import trips from "./data/trips.json";

function App() {
  const [showInteractive, setShowInteractive] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <header className="text-4xl font-antonio font-bold m-6">
        My Travels
      </header>

      <MapSection showInteractive={showInteractive} />
      <ToggleSwitch
        checked={showInteractive}
        onChange={() => setShowInteractive(!showInteractive)}
      />
      <StatsRow />
      <CountriesGallery trips={trips} />
    </div>
  );
}

export default App;
