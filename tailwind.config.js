/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '.index.html',
    './src/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {},
    colors:{
      'bg':'#F3F3F3',
      'fg':'#222222',
      'secondary':'#FFFFFF',
      'primary':'#4A0B01',
      'accent':'#48D9F0'
    }
  },
  plugins: [],
}

