

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#fff',
          100: '#f5f5f5',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111'
        },
        primary: {
          100: "#ffd5d5",
          200: "#ffacac",
          300: "#ff8282",
          400: "#ff5959",
          500: "#ff2f2f",
          600: "#cc2626",
          700: "#991c1c",
          800: "#661313",
          900: "#330909"
},
        secondary: {
          0: '#fff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111'
        }
      },
      animation: {
        fadeIn: "fadeIn .5s ease forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: 'translate(50px)'  },
          "100%": { opacity: 1, transform: 'translate(0px)' }
        }
      }
    },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("tailwindcss-animation-delay"),
  ],
}