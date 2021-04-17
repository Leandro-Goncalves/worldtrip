import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Link from 'next/link'

interface ItemProps {
  title: string;
  subTitle: string;
  image: string;
  href: string
}

export function Item({ title, subTitle, image, href }:ItemProps) {
  return(
    <Link href={href} passHref>
      <Flex
        justify="center"
        align="center"
        as="a"
        w="100%"
        h={[250, 450]}
      >
        <Image
          src={image}
          h="100%"
          objectFit="none"
        />
        <Box
          position="absolute"
          zIndex={2}
        >
          <Stack spacing={4}>
            <Text
              fontSize={[24, 48]}
              fontWeight="bold"
              color="white"
            >
              {title}
            </Text>
            <Text
              fontSize={[14, 24]}
              fontWeight="bold"
              color="white"
            >
              {subTitle}
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Link>
  )
}