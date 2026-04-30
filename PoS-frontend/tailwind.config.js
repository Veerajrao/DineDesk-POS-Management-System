/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbarHide,
    function ({ addUtilities }) {
      const newUtilities = {
          ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
      },
      ".no-scrollbar":{
        "-ms-overflow-style":"none",
        "scrollbar-width": "none",
      },
  };
  addUtilities (newUtilities);
  },
  ],
}
