import { Box, Flex, Image, ImgProps, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ItemsProps extends ImgProps {
  title: string,
  src: string
}

const MotionFlex = motion(Flex)

const fadeUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
  }
}

export function Items({ title, src, ...rest }:ItemsProps) {

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    md:false
  });

  if(isDrawerSidebar){
    return(
      <MotionFlex
        h="50px"
        w="145px"
        justify="center"
        align="center"
        variants={fadeUp}
      >
        <Box
          w="10px"
          h="10px"
          borderRadius="50%"
          bgColor="yellow.300"
          mr="8px"
        />
        <Text
          fontSize="18px"
          fontWeight="medium"
        >
          {title}
        </Text>
      </MotionFlex>
    )
  }
  return(
    <MotionFlex
      h="100%"
      w={145}
      justify="center"
      align="center"
      flexDirection="column"
      variants={fadeUp}
    >
      <Image src={src} alt={title} fontSize="20" {...rest}/>
      {title}
    </MotionFlex>
  )
}