/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/assets/images/header-image.png')",
        footer:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) -377.25%, #008000 100%)        ",
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
