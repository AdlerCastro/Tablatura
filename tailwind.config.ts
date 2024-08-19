import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Fonts
      fontFamily: {
        sans: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)']
      },
      // Grid
      gridTemplateRows: {
        app: 'min-content max-content',
        Frets: '96px 6px 96px 6px 96px 6px 96px',
      },
      gridTemplateColumns: {
        Neck: 'repeat(4, minmax(0, 1fr))',
      },
      // Size
      height: {
        main: 'calc(100% - 160px)'
      },
      // Spacing
      spacing: {
        mr: "4px" 
      },
      // Animation
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
export default config;
