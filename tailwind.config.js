/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^(bg|border|text)-(blue|purple|pink|green|orange|gray|yellow)-(50|100|200|500|600|700|800|900)$/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}