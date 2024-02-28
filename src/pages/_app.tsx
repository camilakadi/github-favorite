import "@/styles/globals.css";
import "@/styles/languages-color.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const montserrat = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={montserrat.className} {...pageProps} />;
}
