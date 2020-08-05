import React from 'react'
import { Avatar, Text, Icon, Link } from '@chakra-ui/core'

export default function Quote({ name, linkedin, avatar, position, quote }) {
  return (
    <>
      <Avatar size="lg" name={name} src={avatar} />
      <Text fontSize="2xs">
        {name}
        <Link href={linkedin} ml={1} isExternal>
          <Icon name="external-link" mx="2px" />
        </Link>
      </Text>
      <Text fontSize="xs" fontWeight={100} mb={3} color="tomato">
        {position}
      </Text>
      <Text as="blockquote" fontStyle="italic" maxW={400} fontWeight={300}>
        {quote}
      </Text>
    </>
  )
}
