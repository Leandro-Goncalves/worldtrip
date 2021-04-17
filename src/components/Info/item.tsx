import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ItemProps {
  value: number,
  children: ReactElement
}

export function Item({ value, children }: ItemProps) {
  return(
    <Box
      textAlign="center"
    >
      <Text
        fontSize={["24px", "48px"]}
        fontWeight="semibold"
        color="yellow.300"
        mt={["16px", "0"]}
        mb={["15px", "0"]}
      >
        {value}
      </Text>
      {children}
    </Box>
  )
}