import { theme, Flex, Image, Stack, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CityItemProps {
  data: {
    img: string;
    city: string;
    country: string;
    flag: string;
  }
}

const MotionBox = motion(Box)

export function CityItem({ data }:CityItemProps) {
  return(
    <MotionBox
      w="256px"
      h="279px"
      borderRadius="4px"
      boxShadow={`0px 0px 0px 1px ${theme.colors.yellow[300]} inset`}
      mx="auto"
      whileHover={{ scale: 1.1}}
    >
      <Image
        src={data.img}
        h="173"
      />
      <Flex
        px="24px"
        py="18px"
        justify="space-between"
        align="center"
      >
        <Stack>
          <Text
            fontSize="20px"
            fontWeight="semibold"
            fontFamily="Barlow"
          >{data.city}</Text>
          <Text
            fontSize="16px"
            fontWeight="medium"
            fontFamily="Barlow"
            color="gray.300"
          >{data.country}</Text>
        </Stack>
        <Image
          src={data.flag}
          w="30px"
          h="30px"
          borderRadius="50%"
        />
      </Flex>
    </MotionBox>
  )
}