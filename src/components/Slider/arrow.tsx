import { Box, Icon } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ArrowProps {
  isRight?: boolean
  event: () => void
  isVisible: boolean
}

export function Arrow({isRight, event, isVisible}:ArrowProps) {
  if(!isVisible){
    return(
      <Box
      zIndex="1"
      position="absolute"
      as="button"
      top="0"
      bottom="0"
      mt="0"
      p="5px"
      right={isRight && "0"}
      left={!isRight && "0"}
      outline="none"
      opacity="0"
    >
      <Icon as={isRight ? IoIosArrowForward : IoIosArrowBack} fontSize={[30]} color="yellow.300" opacity="0"/>
    </Box>
    )
  }
  return(
    <Box
      zIndex="1"
      position="absolute"
      as="button"
      top="0"
      bottom="0"
      mt="0"
      p="5px"
      right={isRight && "0"}
      left={!isRight && "0"}
      outline="none"
      onClick={event}
    >
      <Icon as={isRight ? IoIosArrowForward : IoIosArrowBack} fontSize={[30]} color="yellow.300"/>
    </Box>
  )
}