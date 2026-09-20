/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, not clinical. Cream paper, garden green, the terracotta of a
        // kulhad and the red earth between tea rows.
        cream: {
          DEFAULT: "#FBF7F0",
          100: "#F6EFE3",
          200: "#EFE5D4",
          300: "#E3D6C0",
        },
        garden: {
          50: "#EEF3EC",
          100: "#D6E2D2",
          200: "#A8C1A1",
          300: "#6E8F68",
          400: "#4A6E45",
          500: "#2F4A36",
          600: "#243A2A",
          700: "#1A2A1F",
        },
        clay: {
          100: "#F3DFD2",
          200: "#E2BBA1",
          300: "#C98356",
          400: "#B5643C",
          500: "#96502F",
        },
        bark: {
          DEFAULT: "#33291F",
          70: "#5C5043",
          50: "#7A6D5D",
          30: "#A89B89",
          15: "#CFC4B2",
        },
        saffron: "#C9962B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Karla", "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        "d-sm": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "d-md": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "d-lg": ["clamp(2.75rem, 5.5vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        // Soft, not sharp. Nothing on this site has a hard 90-degree corner.
        soft: "0.625rem",
        card: "1rem",
        plate: "1.5rem",
      },
      boxShadow: {
        lift: "0 1px 2px rgba(51,41,31,0.04), 0 8px 24px -8px rgba(51,41,31,0.10)",
        "lift-lg": "0 2px 4px rgba(51,41,31,0.04), 0 18px 40px -12px rgba(51,41,31,0.16)",
      },
      maxWidth: {
        measure: "36rem",
        shell: "80rem",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
