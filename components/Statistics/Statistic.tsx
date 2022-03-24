import { Box, BoxProps, chakra, SimpleGrid } from "@chakra-ui/react";
import { StatsCard } from "./StatsCard";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

export const Statistic: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 20 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Chúng tôi có nhiều năm kinh nghiệm trong lĩnh vực vận tải
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Khách hàng"}
          stat={"5,000+"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"Dịch vụ"}
          stat={"3+"}
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"Chuyến vận chuyển"}
          stat={"133+"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
};
