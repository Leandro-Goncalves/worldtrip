import { Box } from "@chakra-ui/react";

export function BottomBar() {
  return(
    <Box
      position="absolute"
      bottom="0"
      h={0.5}
      w={90}
      bg="gray.600"
      ml="auto"
      mr="auto"
      left="0"
      right="0"
    />
  )
}