import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Script
        async
        strategy="beforeInteractive"
        src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
      />
      <Script
        async
        strategy="beforeInteractive"
        src="assets/js/jquery.min.js"
      />
      <Script
        async
        strategy="beforeInteractive"
        src="assets/js/jquery.scrollex.min.js"
      />
      <Script
        async
        strategy="beforeInteractive"
        src="assets/js/jquery.scrolly.min.js"
      />
      <Script
        async
        strategy="beforeInteractive"
        src="assets/js/browser.min.js"
      />
      <Script
        async
        strategy="beforeInteractive"
        src="assets/js/breakpoints.min.js"
      />
      <Script async strategy="beforeInteractive" src="assets/js/util.js" />
      <Script async strategy="beforeInteractive" src="assets/js/main.js" />
    </Html>
  );
}
