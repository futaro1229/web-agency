/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#030712",
          900: "#0a1628",
          800: "#132035",
        },
        accent: {
          DEFAULT: "#3b82f6",
          dim: "#2563eb",
          glow: "#60a5fa",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(96, 165, 250, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(96, 165, 250, 0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.22), transparent)",
        "cool-mesh":
          "radial-gradient(at 20% 30%, rgba(37, 99, 235, 0.12) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(14, 165, 233, 0.1) 0px, transparent 45%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(59, 130, 246, 0.45)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
