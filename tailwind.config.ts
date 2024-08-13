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
        Neck: '100px 6px 100px 6px 100px 6px',
      },
    },
  },
  plugins: [],
};
export default config;
