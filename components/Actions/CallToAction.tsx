import React from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
  BoxProps,
} from "@chakra-ui/react";

export const CallToAction: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Flex w="full" alignItems="center" justifyContent="center" {...props}>
      <Flex
        justify="center"
        bg={useColorModeValue("white", "gray.800")}
        w="full"
      >
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.span
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Bạn đã sẵn sàng</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue("brand.700", "gray.500")}
            >
              trở thành khách hàng của chúng tôi ?
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
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color={useColorModeValue("white", "white")}
                bg={useColorModeValue("brand.700", "brand.700")}
                _hover={{
                  color: useColorModeValue("white", "brand.700"),
                  bg: useColorModeValue("brand.700", "white"),
                }}
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
      </Flex>
    </Flex>
  );
};
