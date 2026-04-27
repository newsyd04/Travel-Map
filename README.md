# Travel-Map

Interactive travel journal · countries visited, cities walked, and the routes that connected them.

Live: <https://newsyd04.github.io/Travel-Map/>

## Stack

- React 18 + Vite + Tailwind CSS
- [`react-leaflet`](https://react-leaflet.js.org/) on top of Leaflet, with CARTO Voyager tiles
- [`react-country-flag`](https://github.com/danalloway/react-country-flag) for the country gallery
- [`lucide-react`](https://lucide.dev/) icons
- Trips data is hand-curated in [`src/data/trips.json`](./src/data/trips.json) · one entry per trip with name, year, color, and a list of `{ city, country, countryCode, continent, lat, lng }`

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/Travel-Map/
npm run build
npm run preview
```

## Adding a new trip

Open [`src/data/trips.json`](./src/data/trips.json) and append:

```json
{
  "name": "Trip name 2026",
  "year": 2026,
  "color": "#c45a3e",
  "cities": [
    {
      "city": "City",
      "country": "Country",
      "countryCode": "IE",
      "continent": "Europe",
      "lat": 53.3498,
      "lng": -6.2603
    }
  ]
}
```

The map markers, stats row, and country gallery all derive from this one file.

## Deployment

Deploys to GitHub Pages from the `main` branch via [`gh-pages`](https://github.com/tschaub/gh-pages):

```bash
npm run deploy
```

Vite's `base: '/Travel-Map/'` matters · don't drop it.
