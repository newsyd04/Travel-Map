import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <header className="text-4xl font-bold text-blue-600 m-6">
        Travel Map
      </header>
      <div className="flex flex-col items-center w-full max-w-5xl p-4 gap-4">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
