import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import {fuchsia} from "tailwindcss/colors";

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider attribute="class">
        <NextNProgress color={fuchsia[500]} height={4} />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
  
  export default MyApp;