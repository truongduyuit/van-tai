import {
  As,
  Box,
  BoxProps,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { HiCode } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

const NavItem: React.FC<
  {
    icon?: As<any>;
  } & BoxProps
> = ({ ...props }) => {
  const { icon, children, ...rest } = props;

  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color="gray.400"
      _hover={{
        bg: "gray.900",
        color: "gray.200",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: "gray.300",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

const SidebarContent: React.FC<BoxProps> = ({ ...props }) => {
  const integrations = useDisclosure();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Box>Logo</Box>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome}>Bảng điều khiển</NavItem>
        <NavItem icon={MdHome}>Dịch vụ</NavItem>
        <NavItem icon={MdHome}>Bài viết</NavItem>
        <NavItem icon={MdHome}>Đơn vận chuyển</NavItem>
        <NavItem icon={MdHome}>Liên hệ</NavItem>
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Integrations
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={integrations.isOpen ? "rotate(90deg)" : "auto"}
          />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl="12" py="2">
            Shopify
          </NavItem>
          <NavItem pl="12" py="2">
            Slack
          </NavItem>
          <NavItem pl="12" py="2">
            Zapier
          </NavItem>
        </Collapse>
      </Flex>
    </Box>
  );
};

export const Sidebar: React.FC = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
    </>
  );
};
