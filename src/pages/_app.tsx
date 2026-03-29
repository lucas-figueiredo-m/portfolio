import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <div className={`${inter.variable} ${inter.className}`}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
