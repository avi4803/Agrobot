/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'salmon': '#f77062',
        'indianred': '#c0574c',
        'snowwhite': '#fff7f7',
        'tomato': '#ff5957',
        'goldenrod': '#f0981a',
        'voilet': '#ff5957',
        'mediumpurple': '#a85efa',
        'palegreen': '#84fab0',
        'lightsky': '#84fab0',
      }
    },
  },
  plugins: [],
}

