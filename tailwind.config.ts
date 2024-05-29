import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
darkRed:"#fca5a5",
mediumRed:"#fee2e2",


      },
      backgroundImage: {
        pageBg:"url('/landscape.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
