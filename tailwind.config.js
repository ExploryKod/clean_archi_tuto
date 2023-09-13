/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

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