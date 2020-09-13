import React from 'react'
import { Box, Heading, List, ListItem, useTheme, useColorMode } from '@chakra-ui/core'

export default function _List({ title, items }) {
  const { colorMode } = useColorMode()
  const theme = useTheme()

  return (
    <Box mb={4} className="print_bloc">
      <Heading letterSpacing="tight" mb={2} as="h1" size="xl" textAlign={theme.titles.textAlign}>
        {title}
      </Heading>
      <List styleType="disc" color={theme.fontColors[colorMode]}>
        {items.map((item, key) => {
          return <ListItem key={key}>{item}</ListItem>
        })}
      </List>
    </Box>
  )
}
