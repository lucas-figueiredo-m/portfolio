import React from "react";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { theme, GlobalStyles } from "@styles";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
