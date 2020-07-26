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

export default function WorkExp({ logoAlt, logo, post, inc, period, intro, tasks, stack }) {
  const { colorMode } = useColorMode()
  const theme = useTheme()
  return (
    <Box>
      <Flex>
        <Avatar name={logoAlt} src={`/assets/inc/${logo}`} color="tomato" size="sm" />
        <Text fontSize="xl" ml="2" color={theme.fontColors[colorMode]}>
          <span>{inc}</span>
        </Text>
      </Flex>
      <Flex m="2">
        <span>{post}</span>
        <Divider borderColor="tomato" orientation="vertical" />
        <span>
          <Text color="tomato">{period}</Text>
        </span>
      </Flex>

      <Text color={theme.fontColors[colorMode]} mb={4}>
        <Icon name="chevron-right" color="tomato" /> {intro}
      </Text>

      <List color={theme.fontColors[colorMode]} mb={4}>
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
      <Box mb={4}>
        <Text color="tomato">Technology stack :</Text>
        <Text color={theme.fontColors[colorMode]}>
          <Icon name="chevron-right" color={colorMode} />
          {stack}
        </Text>
      </Box>
    </Box>
  )
}
