import { Box, BoxProps } from "@chakra-ui/react";

export const TextHeader: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      fontWeight="bold"
      fontSize={{ base: "2rem", md: "2.5rem" }}
      textAlign="center"
      {...props}
    >
      {children}
    </Box>
  );
};
