import { Box, Flex, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React from 'react';
import { Logo } from './Logo';
import {IoIosArrowBack} from 'react-icons/io'

export function Header() {

  const { asPath, back } = useRouter();

  return(
    <Flex
      w="100%"
      as="header"
      h={["50px","100px"]}
      align="center"
      justify="center"
    >
      <Flex
        h="100%"
        w="100%"
        maxW={1158}
        justify="center"
        align="center"
        position="relative"
      >
        {asPath !== "/" && (
          <Box
            position="absolute"
            left="16px"
            as="button"
            onClick={back}
          >
            <Icon
              as={IoIosArrowBack}
              fontSize={[18,30]}
            />
          </Box>
        )}
        <Logo />
      </Flex>

    </Flex>
  );
}