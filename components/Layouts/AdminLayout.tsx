import { Box } from "@chakra-ui/react";
import { Sidebar } from "../Sidebar";

const AdminLayout: React.FC = ({ children }) => {
  return (
    <Box as="section" bg="#fff" minH="100vh">
      <Sidebar />

      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Box as="main" p="4">
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p={5}>{children}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { AdminLayout };
