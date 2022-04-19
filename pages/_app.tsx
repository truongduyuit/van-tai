import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Loading } from "../components";
import store from "../redux/store";
import "../styles/globals.css";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      bg: "#F3F2F5",
      primary: "#319795",
      secondary: "#285E61",
      textPrimary: "#000",
      textSecondary: "#fff",
      warning: "#ffc107",
      danger: "#dc3545",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AppChild Component={Component} pageProps={pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

function AppChild({ Component, pageProps }: any) {
  return (
    <Box id="body-container">
      <Component {...pageProps} />
      <Loading />
    </Box>
  );
}

export default MyApp;
