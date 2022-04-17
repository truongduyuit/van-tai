import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Loading } from "../components";
import store from "../redux/store";
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
  btnText: "#fff",
  btnBg: "#2185d0",
};

const theme = extendTheme({ colors });
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
