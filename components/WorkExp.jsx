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

import { useStateValue } from 'context/GlobalContext'

export default function WorkExp({ logoAlt, logo, post, inc, period, intro, tasks, stack }) {
  const [{ lang_content }] = useStateValue()
  const { colorMode } = useColorMode()
  const theme = useTheme()

  return (
    <Box textAlign="justify">
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

      <Text color={theme.fontColors[colorMode]} mb={2}>
        <Icon name="chevron-right" color="tomato" /> {intro}
      </Text>

      <List color={theme.fontColors[colorMode]} mb={2}>
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
        <Text color="tomato" mb={2}>
          {lang_content.tech_stack} :
        </Text>
        <Text color={theme.fontColors[colorMode]}>
          <Icon name="chevron-right" color={colorMode} mr={1} />
          {stack}
        </Text>
      </Box>
    </Box>
  )
}
