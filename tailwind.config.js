/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       main:  '#0078B8',
       hover: '#025582',  // تخصيص اللون الأزرق المخصص
      },
    },
  },
  plugins: [],
}
