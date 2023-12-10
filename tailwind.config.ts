import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',    
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        'prim-clr': 'var(--primary-color)',
        'sec-clr': 'var(--secondary-color)',
        'font-clr': 'var(--font-color)',
        'link-clr': 'var(--link-color)',
        'hover': 'var(--hover-color)',
        'white': 'var(--white-color)',
      },
    },
  },
  // end theme

  plugins: [],
};
export default config;
