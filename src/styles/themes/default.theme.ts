import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    white: "#FFFFFF",
    black: "#0E0F0F",
    skyBlue: "#D6E6EA",
    oceanBlue: "#B3CBD0",
    teal: "#8AADB5",
    midnight: "#313B48",
    tangerine: "#FF9E00",
  },

  spacing: {
    none: "0",
    xxs: "2px",
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "24px",
    xl: "32px",
    xxl: "40px",
    "3xl": "48px",
    "4xl": "56px",
    "5xl": "64px",
    "6xl": "72px",
    "7xl": "80px",
    auto: "auto",
  },

  breakpoints: {
    xs: "320px",
    s: "576px",
    m: "768px",
    l: "820px",
    xl: "1200px",
    xxl: "1300px",
  },

  align: {
    start: "flex-start",
    center: "center",
    end: "flex-end",
  },

  justify: {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    even: "space-evenly",
    around: "space-around",
    between: "space-between",
  },
};

export default defaultTheme;
