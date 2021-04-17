import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next"
import { Header } from "../../components/Header"
import { Info } from "../../components/Info";

interface city {
  city: string
  country: string
  img: string
  flag: string
}

interface PostProps {
  data: {
    title: string
    backdrop: string
    description: string
    countries: number
    languages: number
    hundredMoreCities: city[]
  }
}

const MotionBox = motion(Box)

export default function Post({data}:PostProps) {

  return(
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Header/>
      <Info data={data}/>
    </MotionBox>
  )
}

export const getServerSideProps:GetServerSideProps = async ({ req, params }) => {

  const { slug } = params;

  const mockDb = {
    europa:{
      title: "Europa",
      description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
      countries:50,
      languages:60,
      backdrop: "http://localhost:3000/europe/backdrop.svg",
      hundredMoreCities:[
        {
          city: "Londres",
          country: "Reino Unido",
          img:"http://localhost:3000/europe/londres.svg",
          flag:"http://localhost:3000/europe/flag.svg"
        },
        {
          city: "Londres",
          country: "Reino Unido",
          img:"http://localhost:3000/europe/londres.svg",
          flag:"http://localhost:3000/europe/flag.svg"
        },
        {
          city: "Londres",
          country: "Reino Unido",
          img:"http://localhost:3000/europe/londres.svg",
          flag:"http://localhost:3000/europe/flag.svg"
        },
        {
          city: "Londres",
          country: "Reino Unido",
          img:"http://localhost:3000/europe/londres.svg",
          flag:"http://localhost:3000/europe/flag.svg"
        },
        {
          city: "Londres",
          country: "Reino Unido",
          img:"http://localhost:3000/europe/londres.svg",
          flag:"http://localhost:3000/europe/flag.svg"
        },
      ] 
    }
  }

  const data = mockDb[String(slug)]

  if(!data) {
    return {
      redirect: {
        destination: '/?error=Destino não encontrado !',
        permanent: false
      }
    }
  }

  return({
    props:{
      data
    }
 })
}