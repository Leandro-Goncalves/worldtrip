import { Box, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import { Item } from "./item";

interface city {
  city: String
  country: String
  img: String
  flag: String
}

interface ItensProps {
  data: {
    countries: number
    languages: number
    hundredMoreCities: city[]
  }
}

export function Items({data}:ItensProps) {

  const MoreCities = data.hundredMoreCities.length

  return(
    <HStack
      spacing="42px"
      mx="auto"
    >

      <Item value={data.countries}>
        <Text
          fontSize={["18px", "24px"]}
          fontWeight={["regular", "semibold"]}
          lineHeight="0"
        >
          países
        </Text>
      </Item>

      <Item value={data.languages}>
        <Text
          fontSize={["18px", "24px"]}
          fontWeight={["regular", "semibold"]}
          lineHeight="0"
        >
          línguas
        </Text>
      </Item>

      <Item value={MoreCities}>
        <Text
          fontSize={["18px", "24px"]}
          fontWeight={["regular", "semibold"]}
          lineHeight="0"
        >
          <Text
            fontSize={["18px", "24px"]}
            fontWeight={["regular", "semibold"]}
            lineHeight="0"
            position="relative"
          >
            cidades +100
            <Tooltip
              label="Cidades entre as 100 mais visitadas"
              hasArrow
            >
              <Icon
                fontSize="18px"
                ml="5px"
                color="gray.300"
                position="absolute"
                top="-15px  "
              />
            </Tooltip>
          </Text>
        </Text>
      </Item>

    </HStack>
  )
}