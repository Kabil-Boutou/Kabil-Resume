import React from 'react'
import { Box, Avatar, Text } from '@chakra-ui/core'

export default function Quote() {
  return (
    <Box textAlign="justify">
      <Avatar size="lg" name="Olivier Bronzini" src="https://bit.ly/kent-c-dodds" />
      <Text fontSize="2xs">Olivier Bronzini</Text>
      <Text fontSize="xs" fontWeight={100} mb={3} color="tomato">
        {' '}
        CEO, Maltem Africa
      </Text>
      <Text as="blockquote" fontStyle="italic" maxW={400} fontWeight={300}>
        In addition to his technical skills, Kabil is a trusted person, committed and engaged to his work.
      </Text>
    </Box>
  )
}
