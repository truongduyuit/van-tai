import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AdminPagePath } from "../../../contants/pagePath";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [phone, setPhone] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const handleAdminLogin = async () => {
    const result = await axios.post("/api/admin/login", {
      phone,
      password,
    });

    const { success, data } = result.data;
    if (result.data && success) {
      const { accessToken, refreshToken } = data;
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);

      router.push(`/admin/${AdminPagePath.dashboard}`);
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="gray.50">
      <Box rounded={"lg"} boxShadow={"lg"} p={5} w="20rem">
        <FormControl>
          <FormLabel>Số điện thoại</FormLabel>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <FormControl my={3}>
          <FormLabel>Mật khẩu</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </FormControl>
        <Button
          bg="blue.400"
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          mt={5}
          w="100%"
          onClick={handleAdminLogin}
        >
          Đăng nhập
        </Button>
      </Box>
    </Flex>
  );
};

export { LoginPage };
