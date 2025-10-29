/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        brand: {
          blue: "#1E3A8A",   // deep hospital blue
          teal: "#14B8A6",   // modern teal
          green: "#22C55E",  // fresh green
          light: "#F0F9FF",  // soft light background
          dark: "#0F172A",   // dark mode bg
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.15)",
        glow: "0 0 25px rgba(34,197,94,0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 1.5s ease-in forwards",
        blob: "blob 12s infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin-reverse 25s linear infinite",
        "pulse-slow": "pulse 6s ease-in-out infinite",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
