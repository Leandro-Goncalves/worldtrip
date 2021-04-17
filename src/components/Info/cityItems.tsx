import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { CityItem } from "./cityItem";

interface city {
  city: string
  country: string
  img: string
  flag: string
}

interface CityItemsProps {
  hundredMoreCities: city[]
}

export function CityItems({ hundredMoreCities }:CityItemsProps) {
  return(
    
    <SimpleGrid
      columns={4}
      gap={["20px","45px"]}
      minChildWidth={230}
    >
      {hundredMoreCities.map((item, key) => (
        <CityItem key={key} data={item}/> 
      ))}
    </SimpleGrid>
  )
}