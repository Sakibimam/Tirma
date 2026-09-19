/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tea: {
          50: "#f3f8f5",
          100: "#e3f0e9",
          200: "#c7e0d3",
          300: "#9ec9b4",
          400: "#6eab90",
          500: "#488d71",
          600: "#36725a",
          700: "#2d5b49",
          800: "#1e3e32",
          900: "#132b23",
          950: "#091712",
        },
        gold: {
          50: "#fdfbf5",
          100: "#faf4e5",
          200: "#f3e5c4",
          300: "#ebd09b",
          400: "#dfb66d",
          500: "#cb9b44",
          600: "#af7d33",
          700: "#8c5e2a",
          800: "#744b27",
          900: "#623e25",
        },
        parchment: {
          50: "#fbf9f5",
          100: "#f5f1e8",
          200: "#ece4d5",
          300: "#dfd2be",
          400: "#ccb89e",
          500: "#b9a083",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        luxury: "0 10px 40px -10px rgba(15, 46, 34, 0.08), 0 2px 10px -2px rgba(15, 46, 34, 0.04)",
        "luxury-hover": "0 20px 50px -12px rgba(15, 46, 34, 0.16), 0 4px 14px -2px rgba(15, 46, 34, 0.06)",
        glow: "0 0 25px rgba(203, 155, 68, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
