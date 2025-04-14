/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode via class
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/steve-johnson.jpg')", // Add your image path here
      },
      colors: {
        light: {
          background: "#F9FAFB", // Very light gray
          text: "#111827", // Almost black
          primary: "#6366F1", // Indigo
          accent: "#F97316", // Orange
        },
        dark: {
          background: "#111827", // Dark navy
          text: "#F9FAFB", // White
          primary: "#818CF8", // Softer Indigo
          accent: "#FB923C", // Lighter Orange
        },
        animation: {
          bounce: "bounce 2s infinite",
        },
        keyframes: {
          bounce: {
            "0%, 100%": {
              transform: "translateY(-25%)",
              animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
            },
            "50%": {
              transform: "translateY(0)",
              animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
            },
          },
        },
        animation: {
          "fade-in": "fadeIn 0.3s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0", transform: "translateY(-20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
        },
      },
    },
  },
  plugins: [],
};
