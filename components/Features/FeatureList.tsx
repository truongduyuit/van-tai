import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Button,
  VStack,
  Container,
  BoxProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { Feature } from ".";

export const FeatureList: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      px={8}
      py={20}
      mx="auto"
      border={`1px solid ${useColorModeValue("brand.800", "brand.800")}`}
      h="100vh"
    >
      <Container maxW="7xl">
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              textAlign={{ base: "center", sm: "left" }}
              color="text"
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Chúng tôi cam kết
            </chakra.h2>
            <chakra.p
              mb={3}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Đem lại trải nghiệm tuyệt vời cho khách hàng bằng những dịch vụ
              tốt nhất với chi phí hợp lý, đảm bảo chất lượng hàng hóa, nhanh
              chóng và tiết kiệm, ...
            </chakra.p>
            <Link href="/lien-he" passHref>
              <Button
                as="a"
                variant="solid"
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bgColor="btnBg"
                color="btnText"
                _hover={{
                  bgColor: "btnText",
                  color: "btnBg",
                }}
                mt={3}
              >
                Đặt xe ngay
              </Button>
            </Link>
          </Box>
          <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <Feature>Thực hiện cam kết như thỏa thuận</Feature>
            <Feature>Đảm bảo hàng hóa an toàn</Feature>
            <Feature>Thời gian vận chuyển nhanh, chính xác</Feature>
            <Feature>Chi phí vận chuyển hợp lý</Feature>
            <Feature>Chịu trách nhiệm đền bù thiệt hại</Feature>
            <Feature>Bảo mật thông tin khách hàng</Feature>
            <Feature>Hỗ trợ yêu cầu phát sinh</Feature>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
