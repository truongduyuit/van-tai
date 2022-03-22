import { Container } from "@chakra-ui/react";
import Navbar from "../Navigation/Navbar";
import { FacebookPlugin } from "../Social/Facebook";
import { ZaloPlugin } from "../Social/Zalo";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <FacebookPlugin />
      {/* <ZaloPlugin /> */}
      <Navbar />
      {children}
    </>
  );
};
