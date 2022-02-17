import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { usTheme, brTheme, ptTheme } from "@stitches.config";
import { createGlobalStyle } from "styled-components";
import { SerachStorage } from "@context/SearchContext";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro';
  }

  html, body {
    overflow-x: hidden;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider
        attribute="class"
        defaultTheme="usTheme"
        value={{
          usTheme: usTheme.className,
          brTheme: brTheme.className,
          ptTheme: ptTheme.className,
        }}
      >
        <SerachStorage>
          <Component {...pageProps} />
        </SerachStorage>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
