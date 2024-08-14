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
      },
      gridTemplateColumns: {
        Neck: 'repeat(4, minmax(0, 1fr))',
        Frets: '96px 6px 96px 6px 96px 6px 96px',
      },
    },
  },
  plugins: [],
};
export default config;
