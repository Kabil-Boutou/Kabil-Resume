import React from 'react'
import { Box, Flex } from '@chakra-ui/core'
import Container from 'components/Container'

const Home = () => (
  <Box as="main">
    <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
      <Container></Container>
    </Flex>
  </Box>
)

export default Home
