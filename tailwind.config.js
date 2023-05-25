/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          color: '#9333EA',
          light: '#a855f7',
          lighter: '#c084fc',
        },
        neutrals: {
          bg: '#09090B',
          surface: '#18181b',
          stroke: '#3f3f46',
          closebtn: '#a1a1aa',
          pri: '#f9fafb',
          sec: '#e4e4e7',
        },
      },
    },
  },
  plugins: [],
}
