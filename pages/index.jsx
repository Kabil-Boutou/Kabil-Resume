import React from 'react'
import { Box, Heading, Flex, Stack, Avatar, SimpleGrid, Text, useTheme, useColorMode } from '@chakra-ui/core'

import FancyBox from 'components/FancyBox'
import WorkExp from 'components/WorkExp'
import Slider from 'components/Slider'
import { useStateValue } from 'context/GlobalContext'
import _List from 'components/_List'
import Paragraph from 'components/Paragraph'
import { FULL_NAME, EMAIL, PHONE } from 'utils/consts'
import SoundCloud from 'components/SoundCloud'

export default function Index() {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  const [{ lang, lang_content }] = useStateValue()

  return (
    <>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 2rem auto"
        maxWidth="700px"
        border={1}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          maxWidth="700px"
          borderWidth="1px"
          p="2% 2%"
          borderRadius="10px"
        >
          <Box display="flex" justifyContent="space-between" w="100%" m="1rem">
            <Avatar
              size="2xl"
              name={FULL_NAME}
              src={`/assets/people/kabilB_${lang}.png`}
              bg={theme.colors[colorMode]}
            />
            <Box m="auto 0">
              <Text fontWeight="bold">{FULL_NAME}</Text>
              <Text>{EMAIL}</Text>
              <Text>{PHONE}</Text>
              <Text>{lang_content.city}</Text>
            </Box>
          </Box>

          <Paragraph title={lang_content.intro.title} desc={lang_content.intro.desc} />

          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} mb={4} id="columns_print">
            <_List title={lang_content.domaines.title} items={lang_content.domaines.items} />
            <_List title={lang_content.skills.title} items={lang_content.skills.items} />
          </SimpleGrid>

          <Box>
            <Heading letterSpacing="tight" mb={2} as="h1" size="xl" textAlign={theme.titles.textAlign}>
              {lang_content.work_exp}
            </Heading>
            {lang_content.workExp.map((we, key) => {
              return (
                <WorkExp
                  key={key}
                  inc={we.inc}
                  logo={we.logo}
                  logoAlt={we.logoAlt}
                  post={we.post}
                  period={we.period}
                  intro={we.intro}
                  tasks={we.tasks}
                  stack={we.stack}
                />
              )
            })}
          </Box>
        </Flex>
      </Stack>

      <Stack id="quotes">
        <Flex justifyContent="center" flexDirection="column" alignItems="center">
          <Slider />
        </Flex>
      </Stack>

      <Stack id="others" isInline spacing={8} textAlign="justify" m="4rem auto 4rem auto" maxWidth="700px">
        <FancyBox title={lang_content.about.title} desc={lang_content.about.desc} />
      </Stack>
      <SoundCloud />
    </>
  )
}
