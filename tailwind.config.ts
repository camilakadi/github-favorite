import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/contents/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color-light': 'var(--primaryColorLight)',
        'primary-color': 'var(--primaryColor)',
        'primary-color-dark': 'var(--primaryColorDark)',
        'placeholder-color': 'var(--placeholderColor)',
        'gray-neutral-color': 'var(--grayNeutralColor)',
        'gray-dark-color': 'var(--grayDarkColor)',
        'white-background-light-color': 'var(--whiteBackgroundLightColor)',
        'white-background-matte-color': 'var(--whiteBackgroundMatteColor)',
        'border-line-color': 'var(--borderLineColor)',
        'success-color': 'var(--successColor)',
        'warning-color': 'var(--warningColor)',
        'danger-color': 'var(--dangerColor)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
