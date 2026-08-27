/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'Noto Sans Arabic', 'ui-sans-serif', 'system-ui'] },
      colors: {
        ink: '#172033',
        mist: '#f5f7fb',
        brand: { 50: '#eef5ff', 500: '#3678f6', 600: '#2563eb', 700: '#1d4ed8' }
      },
      boxShadow: { soft: '0 18px 50px rgba(36, 52, 82, .08)' }
    }
  },
  plugins: []
}