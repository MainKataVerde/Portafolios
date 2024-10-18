/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframe: {
        subir: {
          "0%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-100px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
