/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Views/**/*.cshtml',   // Include your Razor views
    './wwwroot/js/**/*.js',  // Include your JavaScript files if needed
  ],
  theme: {
    extend: {},
    fontFamily: {
      'tiempos-text': ['Tiempos-Text', 'sans-serif'],
      'tiempos-head': ['Tiempos-Headline', 'sans-serif'],
      'neue-grotesk': ['neue-haas-grotesk-display', 'sans-serif'],
    }
  },
  plugins: [],
}

