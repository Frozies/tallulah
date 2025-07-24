/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tie-dye-pink': '#FF6F91',
        'tie-dye-orange': '#FFB86F',
        'tie-dye-purple': '#A259F7',
        'grass-green': '#7BE495',
        'sky-blue': '#6EC6FF',
        'sunflower-yellow': '#FFE156',
        'tie-dye-deep-purple': '#4B2067',
        'tie-dye-deep-blue': '#1A237E',
      },
      fontFamily: {
        heading: ['"Fredoka One"', 'cursive'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'tie-dye': 'radial-gradient(circle at 20% 20%, #FF6F91 0%, #FFB86F 25%, #A259F7 50%, #6EC6FF 75%, #FFE156 100%)',
        'tie-dye-night': 'radial-gradient(circle at 80% 80%, #4B2067 0%, #1A237E 50%, #A259F7 100%)',
      },
      keyframes: {
        'pulse-tiedye': {
          '0%, 100%': { filter: 'brightness(1) saturate(1)' },
          '50%': { filter: 'brightness(1.1) saturate(1.2)' },
        },
      },
      animation: {
        'pulse-tiedye': 'pulse-tiedye 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 