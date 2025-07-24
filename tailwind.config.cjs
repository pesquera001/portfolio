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
        'cobalt-blue': '#F5F5F7',
        'cobalt-blue-alt': '#EDEDF0',
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