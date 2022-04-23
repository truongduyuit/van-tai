import { chakra, Flex, Icon, useColorModeValue } from "@chakra-ui/react";

export const Feature: React.FC = ({ ...props }) => {
  return (
    <Flex>
      <Icon
        boxSize={5}
        mt={1}
        mr={2}
        color="#2185d0"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      <chakra.p
        fontSize="lg"
        color={useColorModeValue("gray.700", "gray.400")}
        {...props}
      />
    </Flex>
  );
};
