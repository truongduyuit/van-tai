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
      // shadow="xl"
      bg={useColorModeValue("white", "gray.800")}
      px={8}
      py={20}
      mx="auto"
      border={`1px solid ${useColorModeValue("brand.800", "brand.800")}`}
    >
      <Container maxW="container.xl">
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
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Become a Partner
            </chakra.h2>
            <chakra.p
              mb={3}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Let s put our heads together to build a successful partnership to
              benefit both your customers and your business.
            </chakra.p>
            <Link href="/lien-he" passHref>
              <Button
                as="a"
                variant="solid"
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bgColor={useColorModeValue("gray.500", "gray.500")}
                mt={3}
              >
                Become a Partner
              </Button>
            </Link>
            <Link href="/lien-he" passHref>
              <Button
                as="a"
                variant="solid"
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bgColor={useColorModeValue("gray.500", "gray.500")}
                mx={{ md: 3 }}
                mt={3}
              >
                Become a Partner
              </Button>
            </Link>
          </Box>
          <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <Feature>Email APIs, SMTP Relay, and Webhooks</Feature>
            <Feature>Suppression Management</Feature>
            <Feature>Email Tracking and Analytics</Feature>
            <Feature>99.99% Guaranteed Uptime SLA</Feature>
            <Feature>5 Days of Log Retention</Feature>
            <Feature>Limited 24/7 Ticket Support</Feature>
            <Feature>1 Dedicated IP (Foundation 100k and up)</Feature>
            <Feature>1,000 Email Address Validations</Feature>
            <Feature>Host events together or get your event sponsored</Feature>
            <Feature>Reach 90,000 customers via our integration page</Feature>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
