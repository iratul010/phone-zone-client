/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mobileZoneTheme: {
          primary: "#1FB2A6",

          secondary: "#ffe4c4",

          accent: "#3A4256",

          neutral: "#3D4451",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
