import React from 'react'
import { Box, Heading, useColorMode, useTheme, Text } from '@chakra-ui/core'

export default function Paragraph({ title, desc }) {
  const { colorMode } = useColorMode()
  const theme = useTheme()

  return (
    <Box mb={4} textAlign="center">
      <Heading letterSpacing="tight" mb={2} as="h1" size="xl">
        {title}
      </Heading>
      <Text color={theme.fontColors[colorMode]} textAlign="justify">
        {desc}
      </Text>
    </Box>
  )
}
