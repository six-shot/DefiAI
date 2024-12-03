/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "btn-gradient":
          "linear-gradient(95deg, #8f259b 4.66%, #e511ff 63.88%, #8f259b 116.4%)",
      },
    },
  },
  plugins: [],
};
