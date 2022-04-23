import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AdminPagePath } from "../../../contants/pagePath";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/appSlide";

const LoginPage: React.FC = () => {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();

  const [phone, setPhone] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const handleAdminLogin = async () => {
    dispatch(setLoading(true));
    const result = await axios.post("/api/admin/login", {
      phone,
      password,
    });

    const { success, data } = result.data;
    if (result.data && success) {
      const { accessToken, refreshToken } = data;
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);

      dispatch(setLoading(false));
      router.push(`/admin/${AdminPagePath.dashboard}`);
    } else {
      dispatch(setLoading(false));
      toast({
        title: "Đăng nhập không thành công",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
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
