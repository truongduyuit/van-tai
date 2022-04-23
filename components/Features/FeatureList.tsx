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
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import { Feature } from ".";
import { TextHeader } from "..";

export const FeatureList: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Flex flexDir="column" justify="center" h="100vh" {...props} id="tham-khao">
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, lg: 2 }}
        spacingY={{ base: 10, lg: 32 }}
        spacingX={{ base: 10, lg: 24 }}
      >
        <Box>
          <TextHeader mb={3} textAlign={{ base: "center", sm: "left" }}>
            Chúng tôi cam kết
          </TextHeader>
          <chakra.p
            mb={3}
            fontSize={{ base: "lg", md: "xl" }}
            textAlign={{ base: "center", sm: "left" }}
            color={useColorModeValue("gray.600", "gray.500")}
          >
            Đem lại trải nghiệm tuyệt vời cho khách hàng bằng những dịch vụ tốt
            nhất với chi phí hợp lý, đảm bảo chất lượng hàng hóa, nhanh chóng và
            tiết kiệm, ...
          </chakra.p>
          <Link href="/lien-he" passHref>
            <Button
              as="a"
              variant="outline"
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bgColor="primary"
              color="textSecondary"
              _hover={{
                bgColor: "textSecondary",
                color: "primary",
              }}
              mt={3}
              borderRadius="2rem"
            >
              Đặt xe ngay
            </Button>
          </Link>
        </Box>
        <VStack direction="column" flexGrow={1} spacing={5} alignItems="start">
          <Feature>Thực hiện cam kết như thỏa thuận</Feature>
          <Feature>Đảm bảo hàng hóa an toàn</Feature>
          <Feature>Thời gian vận chuyển nhanh, chính xác</Feature>
          <Feature>Chi phí vận chuyển hợp lý</Feature>
          <Feature>Chịu trách nhiệm đền bù thiệt hại</Feature>
          <Feature>Bảo mật thông tin khách hàng</Feature>
          <Feature>Hỗ trợ yêu cầu phát sinh</Feature>
        </VStack>
      </SimpleGrid>
    </Flex>
  );
};
