import { Box, Text } from "@chakra-ui/react";

export function Description({children}) {
  return(
    <Box
      maxW="600px"
    >
      <Text
        fontSize={["14px", "14px", "24px"]}
        fontWeight={400}
        textAlign="justify"
      >
        {children}
      </Text>
    </Box>
  )
}