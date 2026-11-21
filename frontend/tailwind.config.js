
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shromik: {
          navy: "#101C2C",
          dark: "#0B1421",
          amber: "#F59E0B",
          gold: "#FBBF24",
          green: "#16A34A",
          light: "#F8FAFC",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        bangla: ["Hind Siliguri", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px rgba(245,158,11,0.16)",
      },
    },
  },
  plugins: [],
};
