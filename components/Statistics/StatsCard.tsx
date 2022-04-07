import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import CountUp from "react-countup";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, stat, icon }) => {
  const [isFinished, setIsFinished] = useState<boolean>(false);

  return (
    <CountUp
      start={0}
      end={+stat}
      duration={2.5}
      decimals={0}
      delay={0}
      onEnd={() => setIsFinished(true)}
    >
      {({ countUpRef }) => (
        <Stat
          px={{ base: 2, md: 4 }}
          py={"5"}
          shadow={"xl"}
          border={"1px solid"}
          rounded={"lg"}
        >
          <Flex justifyContent={"space-between"}>
            <Box pl={{ base: 2, md: 4 }}>
              <StatLabel fontWeight={"medium"} isTruncated>
                {title}
              </StatLabel>
              <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
                <span ref={countUpRef}></span>
                {isFinished && "+"}
              </StatNumber>
            </Box>
            <Box my={"auto"} alignContent={"center"}>
              {icon}
            </Box>
          </Flex>
        </Stat>
      )}
    </CountUp>
  );
};
