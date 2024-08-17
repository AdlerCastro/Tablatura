import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)']
      },
      gridTemplateRows: {
        app: 'min-content max-content',
        Frets: '96px 6px 96px 6px 96px 6px 96px',
      },
      gridTemplateColumns: {
        Neck: 'repeat(4, minmax(0, 1fr))',
      },
      height: {
        main: 'calc(100% - 160px)'
      },
      spacing: {
        mr: "4px" 
      }
    },
  },
  
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
export default config;
