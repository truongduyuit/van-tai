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
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaFilePdf,
  FaHome,
  FaTruckMoving,
  FaHeadphones,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AdminPagePath } from "../../contants/pagePath";
import { setPageName } from "../../redux/pageSlide";
import { RootState } from "../../redux/store";

const NavItem: React.FC<
  {
    icon?: As<any>;
    url: string;
  } & BoxProps
> = ({ ...props }) => {
  const { icon, url, children, ...rest } = props;

  const dispatch = useDispatch();
  const _pageName = useSelector((state: RootState) => state.page.name);

  return (
    <Link href={url} passHref>
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        bgColor={url === _pageName ? "secondary" : "primary"}
        _hover={{
          bgColor: "secondary",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        borderTopRightRadius=".5rem"
        borderBottomRightRadius=".5rem"
        onClick={() => dispatch(setPageName(url))}
        {...rest}
      >
        {icon && <Icon mx="2" boxSize="4" as={icon} />}
        {children}
      </Flex>
    </Link>
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
      bgColor="primary"
      color="#fff"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Box>Logo</Box>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        aria-label="Main Navigation"
      >
        <NavItem icon={FaHome} url={AdminPagePath.dashboard}>
          Bảng điều khiển
        </NavItem>
        <NavItem icon={FaTruckMoving} url={AdminPagePath.service}>
          Dịch vụ
        </NavItem>
        <NavItem icon={FaFilePdf} url={AdminPagePath.post}>
          Bài viết
        </NavItem>
        <NavItem icon={FaHeadphones} url={AdminPagePath.contactInfo}>
          Thông tin liên hệ
        </NavItem>
      </Flex>
    </Box>
  );
};

export const Sidebar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
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
