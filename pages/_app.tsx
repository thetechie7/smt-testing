import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../components/Auth/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
