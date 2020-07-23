import React from 'react'
import { Box, Avatar, Flex, Divider, Text, useTheme, useColorMode, Icon, List, ListItem } from '@chakra-ui/core'

export default function WorkExp({ logoName, logo, post, ent, time, tasks }) {
  const { colorMode } = useColorMode()
  const theme = useTheme()
  return (
    <Box>
      <Flex>
        <Avatar name={logoName} src={`/assets/inc/${logo}`} color="tomato" size="sm" />
        <Text fontSize="xl" ml="2" color={theme.fontColors[colorMode]}>
          <span>{ent}</span>
        </Text>
      </Flex>
      <Flex m="2">
        <span>{post}</span>
        {/*  <Divider orientation="vertical" />
         */}
        <Divider borderColor="tomato" orientation="vertical" />
        <span>
          <Text color="tomato">{time}</Text>
        </span>
      </Flex>
      <Text color={theme.fontColors[colorMode]} mb={4}>
        {tasks}
        <Icon name="chevron-right" color="tomato" /> Hey, I’m Lee. I live in Des Moines, IA and I’m a Senior Software
        Engineer at&nbsp; , a $10B grocery tech com pany in the Midwest. As a tech lead, my primary focus is developing
        Aisles Online, Hy-Vee’s e-commerce grocery shopping platform – which serves millions of customers every year. I
        also help maintain our internal component library.
      </Text>
      <Text color={theme.fontColors[colorMode]} mb={4}>
        <List>
          {[...new Array(5)].map((_, key) => {
            return <ListItem key={key}> React</ListItem>
          })}
        </List>
      </Text>
    </Box>
  )
}
