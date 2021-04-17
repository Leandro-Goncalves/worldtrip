import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Item } from './item';
import { Dots } from './dots';
import { Arrow } from './arrow';

export function Slider() {
  return(
    <Flex
      h={[250, 450]}
      mb={50}
      w="100%"
      maxW={1240}
      mx="auto"
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        renderIndicator={(e, isSelected)=> <Dots event={e} isSelected={isSelected}/>}
        renderArrowPrev={(e, isVisible)=> <Arrow isVisible={isVisible} event={e} />}
        renderArrowNext={(e, isVisible)=> <Arrow isVisible={isVisible} event={e} isRight/>}
      >
        <Item
          title="Europa"
          subTitle="O continente mais antigo."
          image="/continents/europa.png"
          href="/continents/europa"
        />
        <Item
          title="África"
          subTitle="Pluralidade étnica e cultural."
          image="/continents/africa.png"
          href="/continents/africa"
        />
        <Item
          title="Ásia"
          subTitle="O maior dos continentes."
          image="/continents/asia.png"
          href="/continents/asia"
        />
        <Item
          title="América do Sul"
          subTitle="Biodiversidade."
          image="/continents/southAmerica.png"
          href="/continents/southAmerica"
        />
        <Item
          title="América do Norte"
          subTitle="O continente mais seguro."
          image="/continents/northAmerica.png"
          href="/continents/northAmerica"
        />
        <Item
          title="Oceania"
          subTitle="O continente mais antigo."
          image="/continents/oceania.png"
          href="/continents/oceania"
        />
      </Carousel>
    </Flex>
  )
}