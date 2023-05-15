/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "1px": "0 0 0 1px",
      },
      letterSpacing: {
        sm: "-.016em",
        md: "-.025em",
        lg: "-.03em",
        xl: "-.0435em",
      },
      textIndent: {
        md: "-.018em",
        lg: "-.019em",
        xl: "-.023em",
      },
      fontSize: {
        xs: [
          "15px",
          {
            lineHeight: 1,
          },
        ],
        sm: [
          "19px",
          {
            lineHeight: 1.2,
            letterSpacing: "-.016em",
          },
        ],
        xm: [
          "21px",
          {
            lineHeight: 1.2,
            letterSpacing: "-.016em",
          },
        ],
        md: [
          "28px",
          {
            letterSpacing: "-.025em",
            textIndent: "-.018em",
            lineHeight: 1.2,
          },
        ],
        lg: [
          "32px",
          {
            letterSpacing: "-.03em",
            textIndent: "-.019em",
            lineHeight: 1.2,
          },
        ],
        xl: [
          "45px",
          {
            letterSpacing: "-.0435em",
            textIndent: "0.023em",
            lineHeight: 1.2,
          },
        ],
      },
    },
  },
  plugins: [],
};
