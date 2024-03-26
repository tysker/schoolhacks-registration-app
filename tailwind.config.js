/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      height: {
        screen: '100dvh', // 100% viewport height
      },
    },
    height: {
      screen: '100dvh',
    },
  },
  plugins: [],
};
