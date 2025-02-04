import { useState } from 'react';
import Map from './Map';
import Legend from './Legend';

const Dashboard = () => {
  const trips = [
    {
      name: '2024 Winter Trip',
      cities: [
        { country: "Belgium", city: "Brussels", lat: 50.850346, lng: 4.351721 },
        { country: "Belgium", city: "Bruges", lat: 51.2093, lng: 3.2247 },
        { country: "Belgium", city: "Dinant", lat: 50.260658, lng: 4.912170 },
        { country: "Germany", city: "Aachen", lat: 50.775345, lng: 6.083887 },
        { country: "Germany", city: "Monschau", lat: 50.5549, lng: 6.2401 },
        { country: "Belgium", city: "Liege", lat: 50.643960, lng: 5.570740 },
        { country: "Luxembourg", city: "Luxembourg", lat: 49.611277, lng: 6.129799 },
      ],
    },
    {
      name: 'Upcoming Trip to Australia',
      cities: [
        { city: 'Batemans Bay', country: 'Australia', lat: -35.707218, lng: 150.178289 },
        { city: 'Canberra', country: 'Australia', lat: -35.297591, lng: 149.101268 },
        { city: 'Sydney', country: 'Australia', lat: -33.889038, lng: 151.205039 },
        { city: 'Yamba', country: 'Australia', lat: -29.440000, lng: 153.359444 },
        { city: 'Byron Bay', country: 'Australia', lat: -28.648333, lng: 153.617778 },
        { city: 'Brisbane', country: 'Australia', lat: -27.468968, lng: 153.023499 },
        { city: 'Noosa', country: 'Australia', lat: -26.318141, lng: 152.931409 },
        { city: 'Rainbow Beach', country: 'Australia', lat: -25.903842, lng: 153.090663 },
        { city: "K'gari", country: 'Australia', lat: -25.246720, lng: 153.146804},
        { city: 'Hervey Bay', country: 'Australia', lat: -25.298578, lng: 152.853522 },
        { city: 'Airlie Beach', country: 'Australia', lat: -20.272494, lng: 148.718147 },
        { city: 'Whitsunday Islands', country: 'Australia', lat: -20.241647, lng: 148.971305 },
        { city: "Magnetic Island", country: 'Australia', lat: -19.142142, lng: 146.833549 },
        { city: 'Mission Beach', country: 'Australia', lat: -17.868256, lng: 146.106663 },
        { city: 'Cairns', country: 'Australia', lat: -16.923504, lng: 145.773296 },
        { city: 'Port Douglas', country: 'Australia', lat: -16.484598, lng: 145.463629 },
      ],
    },
    {
      name: '2022 Summer Interrail',
      cities: [
        { city: 'Colmar', country: 'France', lat: 48.077752, lng: 7.357964 },
        { city: 'Paris', country: 'France', lat: 48.853495, lng: 2.348391 },
        { country: "Belgium", city: "Brussels", lat: 50.850346, lng: 4.351721 },
        { city: 'Amsterdam', country: 'Netherlands', lat: 52.372707, lng: 4.890976 },
        { city: 'Berlin', country: 'Germany', lat: 52.517037, lng: 13.388860 },
        { city: 'Prague', country: 'Czechia', lat: 50.059629, lng: 14.446459 },
        { city: 'Vienna', country: 'Austria', lat: 48.208354, lng: 16.372504},
        { city: 'Ljubljana', country: 'Slovenia', lat: 46.049432, lng: 14.506330 },
        { city: 'Bled', country: 'Slovenia', lat: 46.368420, lng: 14.110060 },
        { city: 'Lauterbrunnen', country: 'Switzerland', lat: 46.593904, lng: 7.907802 },
        { city: 'Geneva', country: 'Switzerland', lat: 46.225651, lng: 6.143921 },
        { city: 'Sitges', country: 'Spain', lat: 41.236671, lng: 1.822814 },
      ],
    },
    {
      name: '2022 Winter Interrail',
      cities: [
        { city: 'Nuremberg', country: 'Germany', lat: 49.453872, lng: 11.077298 },
        { city: 'Rothenburg Ob Der Tauber', country: 'Germany', lat: 49.376271, lng: 10.178318 },
        { city: "Salzburg", country: "Austria", lat: 47.798135, lng: 13.046481 },
        { city: 'Hallstatt', country: 'Austria', lat: 47.562170, lng: 13.648670 },
        { city: 'Innsbruck', country: 'Austria', lat: 47.265430, lng: 11.392769 },
        { city: 'Venice', country: 'Italy', lat: 45.437191, lng: 12.334590 },
      ],
    },
    {
      name: '2024 Italy Trip',
      cities: [
        { city: 'Rome', country: 'Italy', lat: 41.893320, lng: 12.482932 },
        { city: "Vatican City", country: "Vatican", lat: 41.903411, lng: 12.452853 },
        { city: "Torre del Greco", country: "Italy", lat: 40.787921, lng: 14.368281 },
        { city: 'Pompei', country: 'Italy', lat: 40.749127, lng: 14.500642 },
        { city: 'Sorrento', country: 'Italy', lat: 40.624906, lng: 14.374836 },
      ],
    },
    {
      name: '2022 USA Trip',
      cities: [
        { city: 'Boston, Massachusetts', country: 'USA', lat: 42.355433, lng: -71.060511 },
        { city: "Salem, Massachusetts", country: "USA", lat: 42.519529, lng: -70.896723 },
        { city: "Provincetown, Massachusetts", country: "USA", lat: 42.052561, lng: -70.185864 },
        { city: 'New York City, New York', country: 'USA', lat: 40.712728, lng: -74.006015 },
        { city: "Lincoln, New Hampshire", country: "USA", lat: 44.045750, lng: -71.670598 },
      ],
    },
    {
      name: 'Other',
      cities: [
        { city: 'London', country: 'United Kingdom', lat: 51.505409, lng: -0.125999 },
        { city: "Liverpool", country: "United Kingdom", lat: 53.406953, lng: -2.992401 },
        { city: "Stockholm", country: "Sweden", lat: 59.322821, lng: 18.067703 },
        { city: 'Munich', country: 'Germany', lat: 48.137108, lng: 11.575382 },
        { city: 'Stuttgart', country: 'Germany', lat: 48.778449, lng: 9.180013 },
        { city: 'Zwiesel', country: 'Germany', lat: 49.013027, lng: 13.230762 },
        { city: "Gran Canaria", country: "Spain", lat: 27.958000, lng: -15.606231 },
        { city: "Tenerife", country: "Spain", lat: 28.293578, lng: -16.621447 },
        { city: 'Barcelona', country: 'Spain', lat: 41.757870, lng: 2.031182 },
        { city: 'Madrid', country: 'Spain', lat: 40.416215, lng: -3.707199 },
        { city: "Malaga", country: "Spain", lat: 36.721508, lng: -4.421911 },
        { city: "Lloret De Mar", country: "Spain", lat: 41.697350, lng: 2.839239 },
        { city: "Salou", country: "Spain", lat: 41.076819, lng: 1.144041 },
        { city: 'Ginestas', country: 'France', lat: 43.267576, lng: 2.872236 },
        { city: 'Marrakesh', country: 'Morocco', lat: 31.625826, lng: -7.989161 },
        { city: "Gibraltar", country: "Gibraltar", lat: 36.128593, lng: -5.347476 },
        { city: "Budapest", country: "Hungary", lat: 47.497994, lng: 19.040359 },
        { city: 'Bordeaux', country: 'France', lat: 44.841438, lng: -0.579185 },
      ],
    },
  ];

  // Define permanent colors for each trip
  const tripColors = {
    '2024 Winter Trip': '#ff5733',
    'Upcoming Trip to Australia': '#33a8ff',
    '2022 Summer Interrail': '#8e44ad',
    '2022 Winter Interrail': '#32cd32',
    '2024 Italy Trip': '#ffd700',
    '2022 USA Trip': '#009698',
    'Other': '#dc143c',
  };

  // State to track the currently selected trip
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleTripClick = (trip) => {
    if (selectedTrip && selectedTrip.name === trip.name) {
      // If the same trip is clicked again, deselect it
      setSelectedTrip(null);
    } else {
      // Otherwise, set the clicked trip as selected
      setSelectedTrip(trip);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <main className="flex-grow flex flex-col lg:flex-row lg:gap-6 gap-4">
        
        <Map trips={selectedTrip ? [selectedTrip] : trips} tripColors={tripColors} />
        <Legend trips={trips} tripColors={tripColors} onTripClick={handleTripClick} selectedTrip={selectedTrip} />
      </main>
    </div>
  );
};

export default Dashboard;
