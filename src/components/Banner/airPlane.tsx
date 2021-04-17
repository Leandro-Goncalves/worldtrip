import { Box, Image } from "@chakra-ui/react";

export function AirPlane() {
  return(
    <Box
      position="absolute"
      right="140px"
      bottom="-23px"
      transform="rotate(3deg)"
      opacity={["0", "0", "0", "0", "1"]}
    >
      <Image
        src="./airplane.svg"
      />
    </Box>
  )
}