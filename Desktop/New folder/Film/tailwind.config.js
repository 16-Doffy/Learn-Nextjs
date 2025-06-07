/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Theo dõi các file trong thư mục pages
    "./components/**/*.{js,ts,jsx,tsx}", // Theo dõi các file trong thư mục components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}