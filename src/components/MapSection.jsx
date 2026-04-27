import Dashboard from './Dashboard';

const MapSection = () => {
  return (
    <div className="relative bg-parchment-50 rounded-xl border rule-parchment shadow-warm overflow-hidden">
      <div className="w-full h-[420px] md:h-[520px]">
        <Dashboard />
      </div>
    </div>
  );
};

export default MapSection;
