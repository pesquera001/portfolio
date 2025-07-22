module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        'steel-gray': '#43494F',
        'light-steel-gray': '#6C757D',
        'cobalt-blue': '#2176FF',
        'cobalt-blue-alt': '#1577D9',
        'metallic-silver': '#B2B8BD',
        'light-gray': '#F3F4F6',
        'deep-navy-blue': '#181C24',
        'border-gray': '#23272F',
        'card-navy': '#23272F',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
}; 