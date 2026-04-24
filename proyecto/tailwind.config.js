/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#000000",
        main: "#1C8EA6",
        accent: "#8EC3D1",
      },
    },
  },
  plugins: [],
};