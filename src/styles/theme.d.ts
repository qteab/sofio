/* eslint-disable no-unused-vars */
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      skyBlue: string;
      oceanBlue: string;
      teal: string;
      midnight: string;
      tangerine: string;
    };
    spacing: {
      none: string;
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      auto: string;
    };
    breakpoints: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    align: {
      start: string;
      center: string;
      end: string;
    };
    justify: {
      start: string;
      center: string;
      end: string;
      even: string;
      around: string;
      between: string;
    };
  }
}
