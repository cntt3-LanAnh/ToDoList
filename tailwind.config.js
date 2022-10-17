/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/modules/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          hover: 'var(--primary-color-hover)',
        },
        secondary: 'var(--secondary-color)',
        gray: 'var(--gray-color)',
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
    screens: {
      xl: { max: '1367px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  corePlugins: {
    preflight: false,
  },
  mode: 'jit',
};
