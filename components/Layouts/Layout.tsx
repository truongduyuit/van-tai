import { Box, BoxProps } from "@chakra-ui/react";
import { Footer } from "../Footers";
import Navbar from "../Navigations/Navbar";
import { FacebookPlugin } from "../Socials";

export const Layout: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <>
      <Box {...rest}>
        {/* <FacebookPlugin /> */}
        <Navbar />
        <Box zIndex={1}>{children}</Box>
      </Box>
      <Footer />
    </>
  );
};
