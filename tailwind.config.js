/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height:{
        99: '37rem',
        97: '29rem',
      },
      backgroundImage: {
        'about-img-right': "url('./src/assets/image/aboutBG/solutions-hero-green-bg.15753edf.svg')",
        'about-img-left': "url('./src/assets/image/aboutBG/solutions-hero-royalBlue-bg.e6aa17e0.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
