import { Image, Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface BannerProps {
  backdrop: string
  children: string
}

export function Banner({ children, backdrop }:BannerProps) {
  return(
    <Flex
      position="relative"
      justify="center"
      align="center"
    >
      <Image src={backdrop} w="100%"/>
      <Text
        fontSize={["35px","50px"]}
        fontWeight="semibold"
        position="absolute"
        bottom={[null,"20px"]}
        left={[null,"150px"]}
        color="white"
      >
        {children}
      </Text>
    </Flex>
  )
}