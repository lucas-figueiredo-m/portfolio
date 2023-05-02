import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { theme, GlobalStyles } from "@styles";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const nextUiTheme = createTheme({
  type: "dark",
  theme,
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const analytics = getAnalytics(app);

      const logScreenChange = (url: any) => {
        logEvent(analytics, "page_view", {
          page_title: url,
          page_location: url,
          page_path: url,
        });
      };

      routers.events.on("routeChangeComplete", logScreenChange);

      logEvent(analytics, "page_view", {
        page_title: routers.pathname,
        page_location: routers.pathname,
        page_path: routers.pathname,
      });

      return () => {
        routers.events.off("routeChangeComplete", logScreenChange);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider theme={nextUiTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </NextUIProvider>
    </ThemeProvider>
  );
};

export default App;
