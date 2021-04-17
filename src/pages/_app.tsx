import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} key={router.route}/>
      </ChakraProvider>
    </AnimatePresence>
  )
}

export default MyApp
