/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"var(--primary-color)",
        secondary:"var(--sec-color)",
        textColor:"var(--text-color)",
        accentOne:"var(--accent-one-color)",
        accentTwo:"var(--accent-two-color)",
      },
    },
  },
  plugins: [],
};
