import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/core'

export default function HalfContent({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" flex="1" rounded="md" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}
