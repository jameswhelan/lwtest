/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // LendWell Design System tokens - update from Figma Variables
        primary: {
          50: "var(--lw-primary-50)",
          100: "var(--lw-primary-100)",
          200: "var(--lw-primary-200)",
          300: "var(--lw-primary-300)",
          400: "var(--lw-primary-400)",
          500: "var(--lw-primary-500)",
          600: "var(--lw-primary-600)",
          700: "var(--lw-primary-700)",
          800: "var(--lw-primary-800)",
          900: "var(--lw-primary-900)",
          950: "var(--lw-primary-950)",
        },
        neutral: {
          50: "var(--lw-neutral-50)",
          100: "var(--lw-neutral-100)",
          200: "var(--lw-neutral-200)",
          300: "var(--lw-neutral-300)",
          400: "var(--lw-neutral-400)",
          500: "var(--lw-neutral-500)",
          600: "var(--lw-neutral-600)",
          700: "var(--lw-neutral-700)",
          800: "var(--lw-neutral-800)",
          900: "var(--lw-neutral-900)",
          950: "var(--lw-neutral-950)",
        },
        success: {
          DEFAULT: "var(--lw-success)",
          light: "var(--lw-success-light)",
        },
        error: {
          DEFAULT: "var(--lw-error)",
          light: "var(--lw-error-light)",
        },
        warning: {
          DEFAULT: "var(--lw-warning)",
          light: "var(--lw-warning-light)",
        },
      },
      fontFamily: {
        sans: ["var(--lw-font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--lw-font-mono)", "monospace"],
      },
      fontSize: {
        "lw-xs": ["var(--lw-text-xs)", { lineHeight: "var(--lw-leading-xs)" }],
        "lw-sm": ["var(--lw-text-sm)", { lineHeight: "var(--lw-leading-sm)" }],
        "lw-base": [
          "var(--lw-text-base)",
          { lineHeight: "var(--lw-leading-base)" },
        ],
        "lw-lg": ["var(--lw-text-lg)", { lineHeight: "var(--lw-leading-lg)" }],
        "lw-xl": ["var(--lw-text-xl)", { lineHeight: "var(--lw-leading-xl)" }],
        "lw-2xl": [
          "var(--lw-text-2xl)",
          { lineHeight: "var(--lw-leading-2xl)" },
        ],
        "lw-3xl": [
          "var(--lw-text-3xl)",
          { lineHeight: "var(--lw-leading-3xl)" },
        ],
      },
      spacing: {
        "lw-1": "var(--lw-space-1)",
        "lw-2": "var(--lw-space-2)",
        "lw-3": "var(--lw-space-3)",
        "lw-4": "var(--lw-space-4)",
        "lw-5": "var(--lw-space-5)",
        "lw-6": "var(--lw-space-6)",
        "lw-8": "var(--lw-space-8)",
        "lw-10": "var(--lw-space-10)",
        "lw-12": "var(--lw-space-12)",
        "lw-16": "var(--lw-space-16)",
      },
      borderRadius: {
        "lw-sm": "var(--lw-radius-sm)",
        "lw-md": "var(--lw-radius-md)",
        "lw-lg": "var(--lw-radius-lg)",
        "lw-xl": "var(--lw-radius-xl)",
        "lw-full": "var(--lw-radius-full)",
      },
      boxShadow: {
        "lw-sm": "var(--lw-shadow-sm)",
        "lw-md": "var(--lw-shadow-md)",
        "lw-lg": "var(--lw-shadow-lg)",
      },
    },
  },
  plugins: [],
};
