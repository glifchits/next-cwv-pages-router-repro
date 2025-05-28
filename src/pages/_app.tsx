import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useReportWebVitals } from "next/web-vitals";

export default function App({ Component, pageProps }: AppProps) {
  useReportWebVitals((metric) => {
    console.log("NEXT CWV", metric.name, metric.value, metric);
  });
  return <Component {...pageProps} />;
}
