/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beelio: {
          primary: "#0A2A43",
          primaryLight: "#0F3C5C",
          primaryDark: "#051A2C",
          accent: "#00C2A8",
          accentDark: "#008F7C",
          bg: "#F6F9FC",
          surface: "#FFFFFF",
          text: "#0A2A43",
          textSecondary: "#4A5A6A",
          border: "#E1E6EB",
        },
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

