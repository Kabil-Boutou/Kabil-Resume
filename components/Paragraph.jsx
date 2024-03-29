import { Box, Heading, useColorMode, useTheme, Text } from '@chakra-ui/react'

export default function Paragraph({ title, desc }) {
  const { colorMode } = useColorMode()
  const theme = useTheme()

  return (
    <Box mb={4} textAlign={theme.titles.textAlign}>
      <Heading letterSpacing="tight" mb={2} as="h1" size="xl">
        {title}
      </Heading>
      <Text color={theme.fontColors[colorMode]} textAlign="justify">
        {desc}
      </Text>
    </Box>
  )
}
