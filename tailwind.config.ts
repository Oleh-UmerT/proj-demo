import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "var(--color-body)",
        bar: "var(--color-bar)",
        header: "var(--color-header)",
        footer: "var(--color-footer)",
        white: "var(--color-white)",
        "text-secondary": "var(--color-text-secondary)",
        input: "var(--color-input)",
        gray1: "var(--color-gray1)",
        gray2: "var(--color-gray2)",
        gray3: "var(--color-gray3)",
        dark: "var(--color-dark)",
        dark2: "var(--color-dark2)",
        orange: "var(--color-orange)",
        "orange-hover": "var(--color-orange-hover)",
        yellow: "var(--color-yellow)",
        "yellow-hover": "var(--color-yellow-hover)",
        notify: "var(--color-notify)",
        "notify-border": "var(--color-notify-border)",
        "green-bg": "var(--color-green-bg)",
        "l-green": "var(--color-light-green)",
        green: "var(--color-green)",
        "green-hover": "var(--color-green-hover)",
        "l-blue": "var(--color-light-blue)",
        blue: "var(--color-blue)",
      },
    },
  },
  plugins: [],
};
export default config;
