import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BottomBar } from "./bottomBar";
import { Items } from "./items";

const MotionFlex = motion(Flex)

const stagger = {
  animate: {
    transition: {
      staggerChildren: .12
    }
  }
}

export function TravelTypes() {
  return(
    <MotionFlex
        w="100%"
        maxW={1160}
        mx="auto"
        h={{base: "192px", md: "305px"}}
        mb={50}
        justify="space-around"
        position="relative"
        align="center"
        flexWrap="wrap"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <Items title="vida noturna" src="/cocktail.svg"/>
        <Items title="praia" src="/surf.svg"/>
        <Items title="moderno" src="/building.svg"/>
        <Items title="clássico" src="/classic.svg"/>
        <Items title="e mais..." src="/earth.svg"/>

        <BottomBar />
      </MotionFlex>
  )
}