import React from 'react'
import {
  Box,
  Avatar,
  Flex,
  Divider,
  Text,
  useTheme,
  useColorMode,
  Icon,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/core'

export default function WorkExp({ logoName, logo, post, ent, time, intro, tasks, ItStack }) {
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
        <Icon name="chevron-right" color="tomato" /> {intro}
      </Text>

      <Text color={theme.fontColors[colorMode]} mb={4}>
        <List>
          {tasks &&
            tasks.map((task, key) => {
              return (
                <ListItem key={key}>
                  <ListIcon icon="chevron-right" color="tomato" />
                  {task}
                </ListItem>
              )
            })}
        </List>
      </Text>
      <Box mb={4}>
        <Text color="tomato">Technology stack :</Text>
        <Text color={theme.fontColors[colorMode]}>{ItStack}</Text>
      </Box>
    </Box>
  )
}
