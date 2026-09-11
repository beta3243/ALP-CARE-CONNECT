import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./emails/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F7F5",
        mist: "#FCFCFB",
        slate: {
          deep: "#16202A",
        },
        charcoal: "#475569",
        sage: {
          DEFAULT: "#6FAFA6",
          soft: "#8FC3BB",
          deep: "#4E8F86",
        },
        sand: "#D9D2C7",

        /**
         * The logo's own colours, sampled from the ALP CareConnect artwork.
         * These are deliberately more saturated than the ambient site palette:
         * the mark is the one place the brand speaks at full strength, and it
         * anchors the muted slate/sage surfaces around it.
         */
        brand: {
          navy: "#17406F",
          "navy-deep": "#122F52",
          teal: "#1B9172",
          "teal-light": "#3FB08F",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid type scale — clamp(min, preferred, max)
        "fluid-hero": ["clamp(2.5rem, 1.2rem + 5.4vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        "fluid-h2": ["clamp(1.9rem, 1.1rem + 3vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "fluid-h3": ["clamp(1.35rem, 1rem + 1.2vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "fluid-lead": ["clamp(1.0625rem, 0.95rem + 0.55vw, 1.375rem)", { lineHeight: "1.55" }],
        "fluid-body": ["clamp(1rem, 0.96rem + 0.2vw, 1.125rem)", { lineHeight: "1.7" }],
        label: ["0.8125rem", { lineHeight: "1.2", letterSpacing: "0.16em" }],
      },
      maxWidth: {
        shell: "80rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glass: "0 1px 1px rgba(255,255,255,0.5) inset, 0 18px 50px -22px rgba(22,32,42,0.22)",
        "glass-lg": "0 1px 1px rgba(255,255,255,0.6) inset, 0 34px 80px -30px rgba(22,32,42,0.3)",
        lift: "0 28px 70px -32px rgba(22,32,42,0.34)",
      },
      backdropBlur: {
        glass: "20px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "ambient-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.07)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "ambient-drift": "ambient-drift 26s cubic-bezier(0.45,0,0.55,1) infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
