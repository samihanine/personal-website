import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default appWithTranslation(App);
