/* eslint-disable @typescript-eslint/no-require-imports */
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
        poppins: "'Poppins', system-ui",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-white": "#FFF7EE",
        "light-green": "#E3E986",
        "dark-green": "#005D32",
        "primary-orange": "#F6C021",
      },
    },
    
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
