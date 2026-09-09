import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Hex literal para que os modificadores de opacidade (/80, /90) do
        // Tailwind funcionem. As variáveis CSS em globals.css seguem para os
        // usos diretos (bg-navy-texture, ::selection, focus, etc.).
        navy: {
          DEFAULT: "#16233f",
          primary: "#16233f",
          dark: "#0e1729",
        },
        blue: {
          secondary: "#1e3557",
          nascente: "#2f5a86",
        },
        gold: {
          DEFAULT: "#b89558",
          primary: "#b89558",
          light: "#d4b47a",
        },
        silver: "#eae6dc",
        offwhite: "#f7f5ef",
        sparkling: "#9e2828",
        ink: "#16233f",
        muted: "#687083",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
        prose: "68ch",
      },
      borderRadius: {
        card: "0.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(22, 35, 63, 0.12)",
        card: "0 2px 18px -8px rgba(22, 35, 63, 0.15)",
        raised: "0 20px 50px -20px rgba(22, 35, 63, 0.30)",
      },
      letterSpacing: {
        brand: "0.18em",
        wideish: "0.08em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
