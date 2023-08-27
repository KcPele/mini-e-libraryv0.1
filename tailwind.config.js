/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/assets/images/home-cross-background.png')",
      },
      screens: {
        nav: "880px",
      },
      colors: {
        cusgreen: "#4fc18f",
      },
    },
  },
  plugins: [require("daisyui")],
};
