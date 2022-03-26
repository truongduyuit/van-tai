import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Logo, SocialButton } from "..";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="bold" fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

type Props = {};

export const Footer: React.FC<Props> = ({ ...props }) => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              Theo dõi chúng tôi ở các mạng xã hội bên dưới nhé ! Có nhiều hay
              ho lắm đó
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Giới thiệu</ListHeader>
            <Link href={"#"}>Về chúng tôi</Link>
            <Link href={"#"}>Dịch vụ</Link>
            <Link href={"#"}>Tham khảo</Link>
            <Link href={"#"}>Thành tựu</Link>
            <Link href={"#"}>Cam kết</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Hỗ trợ</ListHeader>
            <Link href={"#"}>Đặt xe</Link>
            <Link href={"#"}>Tìm xe</Link>
            <Link href={"#"}>Góp ý</Link>
            <Link href={"#"}>Liên hệ</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>
              Nhập số điện thoại, chúng tôi sẽ liên hệ hỗ trợ bạn sớm nhất...
            </ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Nhập số điện thoại"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
