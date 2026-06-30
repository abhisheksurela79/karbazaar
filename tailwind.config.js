/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        xs: "clamp(0.5rem, 1vw, 0.75rem)",
        sm: "clamp(0.75rem, 1.5vw, 1rem)",
        md: "clamp(1rem, 2vw, 1.5rem)",
        lg: "clamp(1.5rem, 3vw, 2.5rem)",
        xl: "clamp(2rem, 5vw, 4rem)",
        "2xl": "clamp(3rem, 7vw, 6rem)",
        "3xl": "clamp(4rem, 9vw, 8rem)",
        4.5: "1.125rem",
      },
      colors: {
        background: "#f7f5f3",
        primary: "#1daa61",
        "muted-foreground": "#667781",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
      },
      fontSize: {
        '2xs': ["clamp(0.563rem, 2.3vw, 0.688rem)"],
        xs: ["clamp(11px, 2vw, 13px)"],
        sm: ["clamp(13px, 2vw, 14px)"],
        md: ["clamp(14px, 5vw, 16px)"],
        lg: ["clamp(14px, 5vw, 24px)"],
      },
      screens: {
        xs: '390px',
      }
    },
  },
  plugins: [],
};
