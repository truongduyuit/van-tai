import {
  Box,
  chakra,
  Icon,
  useColorModeValue,
  Image,
  BoxProps,
} from "@chakra-ui/react";
import Link from "next/link";

export const Hero: React.FC<BoxProps> = ({ ...props }) => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box pos="relative" overflow="hidden" bg={bg} {...props}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "brand.700")}
              >
                <chakra.span display="inline">
                  Ưu tiên số 1 của chúng tôi là
                </chakra.span>
                <chakra.span
                  display="inline"
                  color={useColorModeValue("brand.700", "white")}
                >
                  {" "}
                  tiết kiệm thời gian{" "}
                </chakra.span>
                <chakra.span display="inline">và</chakra.span>
                <chakra.span
                  display="inline"
                  color={useColorModeValue("brand.700", "white")}
                >
                  {" "}
                  tiền bạc{" "}
                </chakra.span>
                <chakra.span
                  display="inline"
                  color={useColorModeValue("gray.900", "brand.700")}
                >
                  cho bạn
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="gray.500"
              >
                Vận chuyển nhanh chóng, đáng tin cậy, giá cả phải chăng. Hỗ trợ
                khách hàng 24/7 ...
              </chakra.p>

              <Box
                mt={{ base: 5, sm: 8 }}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "center", lg: "start" }}
                fontWeight="extrabold"
                fontFamily="fantasy"
              >
                <Box rounded="full" shadow="md">
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="white"
                    bg="brand.700"
                    _hover={{ bg: "brand.700" }}
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    cursor="pointer"
                  >
                    Tham khảo
                  </chakra.a>
                </Box>
                <Box mt={[3, 0]} ml={[null, 3]}>
                  <Link href="/lien-he" passHref>
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      px={{ base: 8, md: 10 }}
                      py={{ base: 3, md: 4 }}
                      border="solid 1px"
                      borderColor="brand.900"
                      fontSize={{ base: "md", md: "lg" }}
                      rounded="md"
                      color="brand.700"
                      bg="brand.100"
                      _hover={{ bg: "brand.200" }}
                      cursor="pointer"
                    >
                      Liên hệ ngay
                    </chakra.a>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
        border={{ sm: "solid 1px #ccc", lg: "none" }}
        mt={1}
        mx={{ sm: 5, lg: 0 }}
      >
        <Image
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          alt=""
          src="/truck_and_driver.jpg"
          loading="lazy"
          ml={{ lg: 8 }}
        />
      </Box>
    </Box>
  );
};
