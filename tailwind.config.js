/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "300px",
        tablet: "800px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
