import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { AdminPagePath } from "../../contants/pagePath";
import { Sidebar } from "../Sidebar";

const AdminLayout: React.FC<{ name?: string; page?: string }> = ({
  children,
  name,
}) => {
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push(`/admin/${AdminPagePath.login}`);
  };

  return (
    <Box as="section" bg="#fff" minH="100vh">
      <Sidebar onClose={onClose} isOpen={isOpen} />

      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          borderBottomWidth="1px"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="sm"
          />

          <Flex align="center" justify="flex-end" w="full">
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">{name ?? "admin"}</Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        <Box as="main" p="4">
          <Box borderWidth="4px" borderStyle="dashed" rounded="md">
            <Box p={5}>{children}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { AdminLayout };
