import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "@next/font/google";
import type { AppProps } from "next/app";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jakarta.className}>
      <Component {...pageProps} />;
    </main>
  );
}
