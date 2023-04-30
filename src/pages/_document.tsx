import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useEffect } from "react";
import { theme } from "../styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta name="theme-color" content={theme.colors.primary} />
        <meta
          name="msapplication-navbutton-color"
          content={theme.colors.primary}
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={theme.colors.primary}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
