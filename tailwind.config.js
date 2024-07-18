/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      orange: colors.orange,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        "sans-phudu": ["Phudu", ...defaultTheme.fontFamily.sans],
        "sans-josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        "sans-actor": ["Actor", ...defaultTheme.fontFamily.sans],
        "sans-average": ["Average Sans", ...defaultTheme.fontFamily.sans],
        "sans-karla": ["Karla", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
