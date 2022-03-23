import Navbar from "../Navigations/Navbar";
import { FacebookPlugin } from "../Socials";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <FacebookPlugin />
      <Navbar />
      {children}
    </>
  );
};
