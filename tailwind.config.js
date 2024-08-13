/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        text: "0 0 1px rgba(0, 0, 0, 0.75)",
      },
      height: {
        "10vh": "10vh",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-border": {
            "text-shadow":
              "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
