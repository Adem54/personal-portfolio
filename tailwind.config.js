/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen-90":"90vh",
        "screen-10":"10vh",
      },
      screens:{
        "sm":"480px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280",
      },
      spacing:{
        "big":"42rem"
      }

    },
  },
  plugins: [],
}
