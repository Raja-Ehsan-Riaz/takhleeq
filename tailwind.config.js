/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#6a4dbb",
      },
      keyframes: {
        'jiggle': {
          "0%": { transform: "scale(0.8) ", opacity: "0" },
          "50%": { transform: "scale(1.2) ", opacity: "1" },
          "100%": { transform: "scale(1) " },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'popup': "jiggle 1s ease-in-out forwards",
        'infinite-scroll': 'infinite-scroll 80s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
