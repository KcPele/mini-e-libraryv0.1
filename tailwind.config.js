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
        logoGradient: "linear-gradient(0deg, #008000, #008000)",
      },
    },
  },
  plugins: [require("daisyui")],
};
