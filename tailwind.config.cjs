/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const gray = {
  10: '#E0E5DC',
  20: '#BFBFB8'
};
const brown = {
  90: '#453C29'
};
const secondary = '';
const tertiary = '';
const background = '#f6f3f4';
const semiTransparent = 'rgb(60,58,58,35%)';
const heroBackground = 'rgb(47,38,32,50%)';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans Variable"', defaultTheme.fontFamily.sans],
        // space: ['"Space Grotesk Variable"', defaultTheme.fontFamily.sans],
        'red-hat': ['"Red Hat Display Variable"', defaultTheme.fontFamily.sans]
      },
      colors: {
        background: background,
        'semi-transparent': semiTransparent,
        'hero-background': heroBackground,
        gray: {
          10: gray[10],
          20: gray[20]
        },
        brown: {
          90: brown[90]
        }
      }
    }
  },
  plugins: []
};
