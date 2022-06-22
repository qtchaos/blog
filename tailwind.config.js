/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'chandramaya': ['"Chandramaya"']
      },
      colors: {
        /* https://coolors.co/ebe9e9-f3f8f2-fee7d7-b2bba0 */
        'platinum': '#ebe9e9',
        'cream': '#f3f8f2',
        'champagne': '#fee7d7',
        'laurel': '#b2bba0',
        'highlight': '#818f66'
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
