/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class'],
  theme: {
    colors: {
      'dark-blue': '#2b3945',
      'very-dark-blue': '#202c37',
      'very-dark-blue2': '#111517',
      'dark-gray': '#858585',
      'very-light-gray': '#fafafa',
      white: '#fff'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        nonitoSans: ['var(--font-nonito-sans)']
      }
    }
  },
  plugins: []
}
