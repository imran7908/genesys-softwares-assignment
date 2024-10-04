/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { "3xl": "1792px" },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          1: "#060606",
          2: "#9B9B9B",
          3: "#111111",
        },
      },
    },
  },
  plugins: [],
};
