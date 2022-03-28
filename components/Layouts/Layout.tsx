import { Box } from "@chakra-ui/react";
import { Footer } from "../Footers";
import Navbar from "../Navigations/Navbar";
import { FacebookPlugin } from "../Socials";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <FacebookPlugin />
      <Navbar />
      <Box zIndex={1}>{children}</Box>
      <Footer />
    </>
  );
};
