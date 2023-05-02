import React from "react";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { theme, GlobalStyles } from "@styles";
import { NextUIProvider, createTheme } from "@nextui-org/react";

const nextUiTheme = createTheme({
  type: "dark",
  theme,
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <NextUIProvider theme={nextUiTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </NextUIProvider>
  </ThemeProvider>
);

export default App;
