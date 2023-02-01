/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('~/imgs/BG2.jpg')",
        'footer-texture': "url('~/imgs/BG3.jpg')",

    },
  },
  plugins: [],
  
  
}

}
