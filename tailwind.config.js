/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1", // Light gray color
        },
        black: {
          DEFAULT: "#000", // Default black
          500: "#1D2235", // Darker black for specific use
        },
        blue: {
          500: "#2b77e7", // Custom blue color
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"], // Custom font
        poppins: ['Poppins', "sans-serif"], // Another custom font
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', // Custom box shadow for cards
      },
    },
  },
  plugins: [],
}
