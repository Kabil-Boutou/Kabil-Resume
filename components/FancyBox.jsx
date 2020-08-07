import React from 'react'
import { Box, Heading, Text, useColorMode, useTheme } from '@chakra-ui/core'

export default function HalfContent({ title, desc, ...rest }) {
  const { colorMode } = useColorMode()
  const theme = useTheme()

  return (
    <Box p={5} shadow="md" flex="1" rounded="md" {...rest} color={theme.fontColors[colorMode]}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}
