/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heading: "52px",
      },
      lineHeight: {
        heading: "64px",
        subHeading: "40px",
      },
      colors: {
        steelBlue: "#007fed",
        fadedBlack: "#111111",
        fadedLightBlack: "#222222",
        gray: "#767676",
        green: "#e8fff7",
        lightBlue: "#e0f2ff",
        yellow: "#fffce0",
        gradientBlueStart: "#2f80ed",
        gradientBlueStop: "#1b65c8",
        gradientHoverBlue: "#246ccc",
        gradientHoverBlueStop: "#0f4286",
        lighterBlue: "#e4f3ff",
      },
      boxShadow: {
        custom: "0 -3px 20px 0 #e9e8ea",
      },
      screens: {
        "max-lg": { max: "1023px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "548px" },
        "min-2xl": { min: "800px" },
        "min-3xl": { min: "1000px" },
      },
    },
  },
  plugins: [],
};
