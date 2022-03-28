import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layouts/Layout";
import "../styles/globals.css";

const colors = {
  light: {
    bg: "#fff",
    text: "#1A202C",
    highlight: "#2185d0",
    sub: "#2185d0",
  },
  dark: {
    bg: "#1A202C",
    text: "#fff",
    highlight: "#2185d0",
    sub: "#2185d0",
  },
};

const theme = extendTheme({ colors });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
