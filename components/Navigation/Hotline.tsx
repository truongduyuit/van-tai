import { PhoneIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Center, Icon } from "@chakra-ui/react";

export const Hotline: React.FC<BoxProps> = ({ ...rest }) => {
  return (
    <Center>
      <Box as="h5" w="12rem">
        <Icon as={PhoneIcon} mx={1} w={3} h={3} />
        Hotline:
        <Box as="h1" mx={3} color="pink.500" display="inline-block">
          1900 1900
        </Box>
      </Box>
    </Center>
  );
};
