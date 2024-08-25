/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const flowbite = require("flowbite-react/tailwind");
module.exports = withMT({
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        mono: ['var(--font-oswald)']
      },
      spaces: {
        
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0.3',
            transform: 'translateY(-30px)'},
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'}
          },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out 1'
      }
    },
  },
  plugins: [
    
  ],
});

// module.exports = {
//   purge: {
//     enabled: process.env.NODE_ENV === 'production',
//     content: [
//       './src/**/*.{js,ts,jsx,tsx}',
//     ],
//     options: {
//       safelist: [],
//     },
//   },

//   darkMode: `class`
// };