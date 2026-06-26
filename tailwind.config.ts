import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2F3B26",
        "forest-light": "#3D4A32",
        wheat: "#F5EFE0",
        "wheat-dim": "#ECE4D2",
        amber: "#D4972C",
        terracotta: "#B6562F",
        fern: "#7C8A52",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "serif"],
        worksans: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
