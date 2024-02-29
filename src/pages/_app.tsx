import { OctokitProvider } from "@/contexts/OctokitContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { UserProvider } from "@/contexts/UserContext";
import "@/styles/globals.css";
import "@/styles/languages-color.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OctokitProvider>
      <SearchProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </SearchProvider>
    </OctokitProvider>
  );
}
