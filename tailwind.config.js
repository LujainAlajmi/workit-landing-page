/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-sm": "url('./assets/images/bg-sm.svg')",
        "bg-md": "url('./assets/images/bg-md.svg')",
        "bg-lg": "url('./assets/images/bg-lg.svg')",
        "bg-sm-2": "url('./assets/images/bg-sm-2.svg')",
        "bg-md-2": "url('./assets/images/bg-md-2.svg')",
        "bg-lg-2": "url('./assets/images/bg-lg-2.svg')",
      },
    },
  },
  plugins: [],
};
