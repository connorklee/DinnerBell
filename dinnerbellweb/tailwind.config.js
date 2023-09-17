import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'light-green': '#5cdb95',
      'dark-green': '#379683',
      'white': '#ffffff',
      'text-blue': '#264a6e',
      'text-seashell': '#fbfcf6'

    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}
