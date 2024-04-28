const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "border-primary": "#0f0f0f"
      },
      container: {
        center: true,
        padding: "1.5rem"
      },
    },
  },
  plugins: [nextui({
    layout: {
      radius: {
        medium: "8px"
      },
    }
  })],
}
