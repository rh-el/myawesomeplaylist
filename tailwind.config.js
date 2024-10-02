/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      RX100: ["RX100"],
    },
    extend: {
      colors: {
        'customblack': "#10100e",
        'customgray': "#2C2C30",
        'customyellow': "#FFFFE3",
        'custompink': '#FDD8D0',
        'customred': '#e74c34'
      }
    },
  },
  plugins: [],
}

