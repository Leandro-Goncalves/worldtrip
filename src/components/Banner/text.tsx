import { Flex, Stack, Text as ChakraText } from "@chakra-ui/react";

export function Text() {
  return(
    <Flex
      pl={["16px","140px"]}
      h="100%"
      justify="center"
      flexDirection="column"
      maxW="700px"
    >
      <Stack
        spacing={["8px","20px"]}
      >
        <ChakraText
          color="white"
          fontSize={["20px","36px"]}
          fontWeight="medium"
        >
          5 Continentes,<br/>
          infinitas possibilidades.
        </ChakraText>
        <ChakraText
          color="gray.100"
          fontSize={["14px","20px"]}
          fontWeight="400"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </ChakraText>
      </Stack>
    </Flex>
  )
}