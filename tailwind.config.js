/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opens: ["Open sans", "sans-serif"],
      },
      colors: {
        primary: "#fff",
        theme1: "#9acd32",
        theme2: "#2196F3",
        theme3: "#ffb400",
      },
      fontWeight: {
        800: "800",
      },
      keyframes: {
        moveIn: {
          "0%": { transform: "translate(-10px)" },
          "100%": { transform: "translate(0)" },
        },
        drop: {
          "0%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
