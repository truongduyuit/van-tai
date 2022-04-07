import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { TextHeader } from "../Commons";

export const Contact: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Flex flexDir="column" {...props}>
      <Center>
        <Box fontWeight="bold" fontSize="1.8rem">
          <TextHeader my={5}>Liên hệ với chúng tôi</TextHeader>
        </Box>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box height={{ base: "300px", md: "450px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6833821870014!2d106.63649851462304!3d10.835524192281438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752948b7a8e9a3%3A0xd75ac510ba18e074!2zNDMgQsO5aSBRdWFuZyBMw6AsIFBoxrDhu51uZyAxMiwgR8OyIFbhuqVwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1649167419224!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{
              border: "2px solid #ccc",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box>
          <VStack spacing={5}>
            <FormControl id="contact-phone">
              <FormLabel>Số điện thoại</FormLabel>
              <InputGroup borderColor="#000">
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.800" />
                </InputLeftElement>
                <Input type="text" size="md" placeholder="Nhập số điện thoại" />
              </InputGroup>
            </FormControl>
            <FormControl id="contact-message">
              <FormLabel>Lời nhắn (nếu có)</FormLabel>
              <Textarea borderColor="#000" placeholder="Nhặp lời nhắn nếu có" />
            </FormControl>
            <FormControl id="name" float="right">
              <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                Yêu cầu hỗ trợ
              </Button>
            </FormControl>
          </VStack>
        </Box>
      </SimpleGrid>
    </Flex>
  );
};
