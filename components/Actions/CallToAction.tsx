import React from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
  BoxProps,
  Center,
} from "@chakra-ui/react";

export const CallToAction: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box px={4} py={20} textAlign={{ base: "left", md: "center" }} {...props}>
      <chakra.span
        fontSize={{ base: "3xl", sm: "4xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        mb={6}
      >
        <chakra.span display="block">
          Bạn đã sẵn sàng trở thành khách hàng của chúng tôi ?
        </chakra.span>
      </chakra.span>
      <Stack
        justifyContent={{ base: "left", md: "center" }}
        direction={{ base: "column", sm: "row" }}
        spacing={2}
        mt={2}
      >
        <Box display="inline-flex" rounded="md" shadow="md">
          <Link
            w="full"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            my={2}
          >
            Đặt xe ngay
          </Link>
        </Box>
        <Box ml={3} display="inline-flex" rounded="md" shadow="md">
          <Link
            w="full"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            rounded="md"
            color="brand.800"
            bg="white"
            _hover={{
              bg: "brand.700",
            }}
          >
            Tham khảo thêm
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};
