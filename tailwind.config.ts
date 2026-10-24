import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ks: {
          ink: "var(--ks-ink)",
          paper: "var(--ks-paper)",
          fog: "var(--ks-fog)",
          placeholder: "var(--ks-placeholder)",
          line: "var(--ks-line)",
          "line-strong": "var(--ks-line-strong)",
          body: "var(--ks-body)",
          muted: "var(--ks-muted)",
          "on-dark": "var(--ks-on-dark)",
          "on-dark-muted": "var(--ks-on-dark-muted)",
          accent: "var(--ks-accent)",
          "accent-on-dark": "var(--ks-accent-on-dark)",
        },
        brand: {
          navy: "#1A1A2E",
          red: "#E63946",
          light: "#F8F9FA",
          dark: "#0D0D0D",
          muted: "#6C757D",
          whatsapp: "#25D366",
        },
      },
      fontFamily: {
        "ks-sans": "var(--ks-font-sans)",
        "ks-mono": "var(--ks-font-mono)",
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "ks-h1": "var(--ks-h1)",
        "ks-h2": "var(--ks-h2)",
        "ks-h3": "var(--ks-h3)",
        "ks-body": "var(--ks-body-size)",
        "ks-label": "var(--ks-label-size)",
      },
      spacing: {
        "ks-gutter": "var(--ks-gutter)",
        "ks-section": "var(--ks-section-y)",
        "ks-tap": "var(--ks-tap)",
        "ks-btn": "var(--ks-btn-h)",
      },
      maxWidth: {
        "ks-container": "var(--ks-container)",
      },
      borderRadius: {
        ks: "var(--ks-radius)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
