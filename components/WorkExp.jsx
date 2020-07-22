import React from 'react'
import { Box, Avatar, Flex, Divider, Text, useTheme, useColorMode } from '@chakra-ui/core'

export default function WorkExp({ logo, post, ent, time, tasks }) {
  const { colorMode } = useColorMode()
  const theme = useTheme()
  return (
    <Box>
      <Avatar name={logo} src={`/assets/inc/${logo}.png`} />
      <Flex>
        <span>{post}</span>
        <Divider orientation="vertical" />
        <span>{ent}</span>
        <Divider borderColor="tomato" orientation="vertical" />
        <span>
          <Text color="tomato">{time}</Text>
        </span>
      </Flex>
      <Text color={theme.fontColors[colorMode]} mb={4}>
        {tasks}
        Hey, I’m Lee. I live in Des Moines, IA and I’m a Senior Software Engineer at&nbsp; , a $10B grocery tech company
        in the Midwest. As a tech lead, my primary focus is developing Aisles Online, Hy-Vee’s e-commerce grocery
        shopping platform – which serves millions of customers every year. I also help maintain our internal component
        library.
      </Text>
      <Text color={theme.fontColors[colorMode]} mb={4}>
        At the beginning of 2020, I launched my most ambitious project – a 50+ lesson video course on React and Next.js.
        It’s called&nbsp; , and it’s been my most successful solo-endeavor so far. Im now building a new course
        called&nbsp;
      </Text>
    </Box>
  )
}
