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
violet:'#4c1d95',
// darkBlue:


      },
      width: {
        '128': '36rem',   // Custom width class for w-128
        '144': '36rem',   // Custom width class for w-144
      },
      height: {
        '128': '30rem',   // Custom height class for h-128
        '144': '20rem',   // Custom height class for h-144
      },
      backgroundImage: {
        pageBg:"url('/landscape.jpg')",
        cardpageBg:"url('/japan.jpg')",
      },
      // fontFamily: {
      //   prompt: ['Prompt', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
export default config;
