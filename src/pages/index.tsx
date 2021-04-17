import { Center, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { Banner } from '../components/Banner'
import { Error } from '../components/Error'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'
import { TravelTypes } from '../components/TravelTypes'

const MotionFlex = motion(Flex)

export default function Home() {
  return (
    <MotionFlex
      direction="column"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Error />
      <Header />
      <Banner />
      <TravelTypes/>

      <Center textAlign="center" fontSize={[20,36]} fontWeight="medium" mb={50}>
        Vamos nessa? <br/>Então escolha seu continente
      </Center>

      <Slider />

    </MotionFlex>
  )
}
