/** @type {import('tailwindcss').Config} */
module.exports = { 
  // content: [
  // "./app/**/*.{js,ts,jsx,tsx,mdx}",
  // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  // "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // // Or if using `src` directory:
  // "./src/**/*.{js,ts,jsx,tsx,mdx}",
// ]
purge: ['./pages/**/*.{js,ts,jsx,tsx}', // Add any other files that use Tailwind classes
'./components/**/*.{js,ts,jsx,tsx}', // Add any other files that use Tailwind classes
'./styles/**/*.css', // Include your CSS files
],
darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},

  plugins: [],
}

