import { Box } from "@chakra-ui/react";

const AdminLayout: React.FC = ({ children }) => {
  return (
    <Box as="section" bg="#fff" minH="100vh">
      <Box as="main" p="4">
        {/* Add content here, remove div below  */}
        <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96">
          <Box p={5}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export { AdminLayout };
