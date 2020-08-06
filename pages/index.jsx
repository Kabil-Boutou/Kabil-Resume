import React from 'react'
import { NextSeo } from 'next-seo'
import { Box, Heading, Flex, Stack, Avatar, SimpleGrid } from '@chakra-ui/core'

import Feature from 'components/HalfContent'
import WorkExp from 'components/WorkExp'
import Slider from 'components/Slider'
import { useStateValue } from 'context/GlobalContext'
import _List from 'components/_List'
import Paragraph from 'components/Paragraph'

const url = `${process.env.url}`
const title = 'About Me – Kabil Boutou'

const About = () => {
  const [{ lang_content }] = useStateValue()

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
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
          p="2% 3%"
          borderRadius="10px"
        >
          <Avatar mb={5} alignItems="flex-center" size="2xl" name="Kabil Boutou" src="/assets/people/kabilB.jpg" />

          <Paragraph title={lang_content.intro.title} desc={lang_content.intro.desc} />

          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} mb={4} id="columns_print">
            <_List title={lang_content.domaines.title} items={lang_content.domaines.items} />
            <_List title={lang_content.skills.title} items={lang_content.skills.items} />
          </SimpleGrid>

          <Box>
            <Heading letterSpacing="tight" mb={2} as="h1" size="xl" textAlign="center">
              Work Experience
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
        <Feature title={lang_content.about.title} desc={lang_content.about.desc} />
      </Stack>
    </>
  )
}

export default About
