/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opens: ["Open sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#fff",
        theme1: "#9acd32",
        theme2: "#2196F3",
        theme3: "#ffb400",
      },
      fontWeight: {
        800: "800",
        900: "900",
      },
      keyframes: {
        moveIn: {
          "0%": { transform: "translate(-16px)", opacity: "0" },
          "100%": { transform: "translate(0)", opacity: "1" },
        },
        push: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        drop: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        push: "push .8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
