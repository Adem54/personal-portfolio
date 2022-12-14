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
        "screen-70":"70vh",
        "screen-80":"80vh",
        "screen-90":"90vh",
        "screen-10":"10vh",
        "screen-120":"120vh",
      },
      screens:{
        "sm":"480px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280",
      },
      spacing:{
        "big":"42rem"
      },
      fontFamily:{
        'roboto':['Roboto', "sans-serif"]
      },
      colors:{
        "bgworks":"#f5f5f5",
        "worksfilterTitle":"#616161"
      }
      

    },
  },
  plugins: [],
}
