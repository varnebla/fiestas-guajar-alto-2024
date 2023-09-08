/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const primary = '';
const secondary = '';
const tertiary = '';
const background = '#f6f3f4';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', defaultTheme.fontFamily.sans],
        space: ['"Space Grotesk Variable"', defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: primary,
        secondary: secondary,
        tertiary: tertiary,
        background: background
      }
    }
  },
  plugins: []
};
