/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Gelasio: ["var(--gelasio-font)"],
        Cormorant: ["var(--cormorant-font)"],
      },
    },
  },
  plugins: [],
};
