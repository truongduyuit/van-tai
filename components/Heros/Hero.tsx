import {
  Box,
  BoxProps,
  chakra,
  Container,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import lotWeb, { AnimationItem } from "lottie-web";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import TruckAnimation from "../../animations/truck_bg-fff.json";

export const Hero: React.FC<BoxProps> = ({ ...props }) => {
  useEffect(() => {
    let animation: AnimationItem;
    const element = document.getElementById(`hero_truck`);

    if (element) {
      animation = lotWeb.loadAnimation({
        container: element, // Required
        animationData: TruckAnimation, // Required
        renderer: "svg", // Required
        loop: true, // Optional
        autoplay: true, // Optional
      });
      animation.play();
    }
    return () => {
      animation?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.com/libraries/bodymovin"
        type="text/javascript"
      ></Script>

      <Container maxW="7xl" mx="auto">
        <SimpleGrid columns={{ base: 1, md: 2 }} {...props}>
          <Box
            pos="relative"
            pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
            maxW={{ lg: "2xl" }}
            w={{ lg: "full" }}
            zIndex={1}
            border="solid 1px transparent"
          >
            <Box mx="auto" mt={{ base: 10, sm: 12, md: 16, lg: 20 }}>
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
                >
                  <chakra.span color="text">
                    Ưu tiên số 1 của chúng tôi là
                  </chakra.span>
                  <chakra.span color="highlight">
                    {" "}
                    tiết kiệm thời gian{" "}
                  </chakra.span>
                  <chakra.span color="text">và</chakra.span>
                  <chakra.span color="highlight"> tiền bạc </chakra.span>
                  <chakra.span
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
                  Vận chuyển nhanh chóng, đáng tin cậy, giá cả phải chăng. Hỗ
                  trợ khách hàng 24/7 ...
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
                      fontSize={{ base: "md", md: "lg" }}
                      border="solid 1px highlight"
                      color="text"
                      _hover={{ bg: "whiteAlpha.900", color: "highlight" }}
                      px={{ base: 8, md: 10 }}
                      py={{ base: 3, md: 4 }}
                      cursor="pointer"
                      borderRadius="2rem"
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
                        border="solid 1px highlight"
                        fontSize={{ base: "md", md: "lg" }}
                        rounded="md"
                        color="whiteAlpha.900"
                        bg="light.highlight"
                        _hover={{ bg: "whiteAlpha.900", color: "highlight" }}
                        cursor="pointer"
                        borderRadius="2rem"
                      >
                        Liên hệ ngay
                      </chakra.a>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box id="hero_truck" mt={-10}></Box>
        </SimpleGrid>
      </Container>
    </>
  );
};
