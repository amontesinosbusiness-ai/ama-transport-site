import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
        body: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        background: "#030712",
        foreground: "#e7f5ff",
        accent: "#3ddcff",
        card: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        glow: "0 0 30px rgba(61, 220, 255, 0.25)",
        glass: "0 10px 50px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.06)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(61,220,255,0.25) 1px, transparent 0)",
        glow: "linear-gradient(120deg, rgba(61,220,255,0.12), rgba(0,122,255,0.05))"
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" }
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 0 0 rgba(61,220,255,0.25)" },
          "70%": { boxShadow: "0 0 0 14px rgba(61,220,255,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(61,220,255,0)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
