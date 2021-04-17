import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { MouseEvent } from "react"

const MotionBox = motion(Box);

interface DotsProps {
  isSelected: boolean
  event: (e:MouseEvent) => void
}

export function Dots({isSelected, event}:DotsProps) {
  if(isSelected){
    return(
      <MotionBox
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        as="li"
        w={["8px", "16px"]}
        h={["8px", "16px"]}
        bgColor="yellow.300"
        borderRadius="50%"
        display="inline-block"
        mx="8px"
        opacity="1"
      ></MotionBox>
    )
  }

  return(
    <MotionBox
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      _hover={{
        cursor: "pointer"
      }}
      onClick={event}
      as="li"
      w={["8px","16px"]}
      h={["8px","16px"]}
      bgColor="gray.300"
      borderRadius="50%"
      display="inline-block"
      mx="8px"
      opacity="0.3"
    ></MotionBox>
  )
}