import { PhoneIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Center, Icon } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Hotline: React.FC<BoxProps> = ({ ...rest }) => {
  const _contactInfo = useSelector(
    (state: RootState) => state.contactInfo.contactInfo
  );

  return (
    <Center>
      <Box as="h5" w="15rem">
        <Icon as={PhoneIcon} mx={1} w={3} h={3} />
        Hotline:
        <Box
          as="h1"
          mx={1}
          color="primary"
          display="inline-block"
          fontWeight="bold"
        >
          {_contactInfo?.phone.slice(0, 3) +
            " " +
            _contactInfo?.phone.slice(3, 7) +
            " " +
            _contactInfo?.phone.slice(7)}
        </Box>
      </Box>
    </Center>
  );
};
