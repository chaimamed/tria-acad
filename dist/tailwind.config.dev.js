"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _defineProperty({
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  safelist: ['text-white', 'bg-gradient-to-r', 'from-[#FF6B00]', 'via-[#B388EB]', 'to-[#7F00FF]', 'text-transparent', 'bg-clip-text'],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81)",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81)",
      none: "none"
    },
    colors: {
      transparent: "transparent",
      black: {
        500: "#4F5655",
        600: "#0B132A"
      },
      orange: {
        100: "#FFECEC",
        500: "#F53855"
      },
      green: {
        500: "#2FAB73"
      },
      white: {
        300: "#F8F8F8",
        500: "#fff"
      },
      gray: {
        100: "#EEEFF2",
        400: "#AFB5C0",
        500: "#DDDDDD"
      }
    },
    extend: {}
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"]
    }
  },
  plugins: []
}, "safelist", ['bg-gradient-to-r', 'from-[#FF6B00]', 'via-[#B388EB]', 'to-[#7F00FF]', 'text-transparent', 'bg-clip-text']);