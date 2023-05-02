import { theme } from "./theme";

export type ThemeProps = typeof theme;

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      support: string;
      complementary: string;
      gradient: string;
      black: string;
      background: string;
      text: string;
      white: string;
      gray: string;
      success: string;
      error: string;
      warn: string;
    };
  }
}
