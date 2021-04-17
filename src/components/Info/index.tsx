import { Flex, Text, Box, HStack, Tooltip, Icon } from "@chakra-ui/react";
import { Items } from "./items";
import { Banner } from "./banner";
import { Description } from "./description";
import { CityItems } from './cityItems';

interface city {
  city: string
  country: string
  img: string
  flag: string
}

interface InfoProps {
  data: {
    title: string
    backdrop: string
    description: string
    countries: number
    languages: number
    hundredMoreCities: city[]
  }
}

export function Info({data}:InfoProps) {

  return(
    <>
      <Banner backdrop={data.backdrop}>
        {data.title}
      </Banner>
      <Box
        maxW={1120}
        px="16px"
        mx="auto"
        w="100%"
        mb="35px"
      >
        <Box
          py={["24px", "80px"]}
          display={["block","block", "flex"]}
        >
          <Description>
            {data.description}
          </Description>
          
          <Items
            data={data}
          />

        </Box>

        <Text
          fontSize={["24px","36px"]}
          fontWeight="medium"
          mb={["20px", "40px"]}
        >
          Cidades +100
        </Text>
        <CityItems hundredMoreCities={data.hundredMoreCities}/>
      </Box>
    </>
  )
}