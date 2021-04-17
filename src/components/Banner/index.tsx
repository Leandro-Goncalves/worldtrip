import { Flex, Image } from "@chakra-ui/react";
import { AirPlane } from "./airPlane";
import { Text } from "./text";

export function Banner() {
  return(
    <Flex
      bgImage="url('./banner.svg')"
      h={["163px","400px"]}
      w="100%"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
    >
      <Text/>
      <AirPlane/>
    </Flex> 
  );
}