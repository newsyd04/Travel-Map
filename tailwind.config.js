/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Travel-journal palette
        parchment: {
          50: "#fbf7ec",
          100: "#f5efde",
          200: "#ebdfc4",
          300: "#dec8a3",
        },
        ink: {
          400: "#5a6373",
          500: "#3a4150",
          800: "#1f2532",
          900: "#141822",
        },
        terracotta: {
          400: "#d77657",
          500: "#c45a3e",
          600: "#a8472f",
        },
        gold: {
          400: "#e6b837",
          500: "#d4a017",
          600: "#a17710",
        },
      },
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: "0.18em",
      },
      boxShadow: {
        warm: "0 8px 28px rgba(38, 22, 12, 0.08)",
        ring: "0 0 0 1px rgba(31, 37, 50, 0.06)",
      },
    },
  },
  plugins: [],
}
