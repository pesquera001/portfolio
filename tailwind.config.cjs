module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        mono: ["IBM Plex Mono"],
      },
      colors: {
        'steel-gray': '#232a32',
        'light-steel-gray': '#232a32',
        'cobalt-blue': '#FFFFFF',
        'cobalt-blue-alt': '#F8F9FA',
        'bright-blue': '#00B2FF',
        'metallic-silver': '#B2B8BD',
        'light-gray': '#F3F4F6',
        'deep-navy-blue': '#181C24',
        'border-gray': '#23272F',
        'card-navy': '#23272F',
      },
      borderRadius: {
        'lg': '0px',
        'xl': '0px',
        '2xl': '0px',
      },
    },
  },
  plugins: [],
}; 