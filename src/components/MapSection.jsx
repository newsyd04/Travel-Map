import Dashboard from './Dashboard';
import map from '../assets/MapChart_Map.png';

const MapSection = ({ showInteractive }) => {
  return (
    <div className="flex justify-center p-4 mx-96 border-2 border-gray-300 rounded-lg bg-white w-full max-w-5xl">
      <div className="w-full h-64 sm:h-[200px] lg:h-[400px]">
        {!showInteractive ? (
          <img
            src={map}
            alt="World Map"
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default MapSection;
