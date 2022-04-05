import { Box, BoxProps, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { TextHeader } from "../Commons";
import { StatsCard } from "./StatsCard";

export const Statistic: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Flex flexDir="column" justify="center" h="100vh" {...props}>
      <TextHeader my={5}>
        Chúng tôi có nhiều năm kinh nghiệm trong lĩnh vực vận tải
      </TextHeader>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Khách hàng"}
          stat={"5000"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"Dịch vụ"}
          stat={"3"}
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"Chuyến vận chuyển"}
          stat={"133"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
    </Flex>
  );
};
