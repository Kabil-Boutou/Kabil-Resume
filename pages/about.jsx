import React from 'react'
import { NextSeo } from 'next-seo'
import { useColorMode, useTheme, Box, Heading, Text, Flex, Stack, Avatar } from '@chakra-ui/core'

import Container from 'components/Container'
import Feature from 'components/HalfContent'

const url = `${process.env.url}/about`
const title = 'About Me – Kabil Boutou'

const About = () => {
  const { colorMode } = useColorMode()
  const theme = useTheme()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }

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
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          border={1}
        >
          <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" maxWidth="700px">
            {/* <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              About Me
            </Heading> */}
            <Avatar mb={5} alignItems="flex-center" size="2xl" name="Kabil Boutou" src="https://bit.ly/sage-adebayo" />
            <Box borderWidth="1px" p="2%" borderRadius="10px">
              <Text color={theme.fontColors[colorMode]} mb={4}>
                Hey, I’m Lee. I live in Des Moines, IA and I’m a Senior Software Engineer at&nbsp; , a $10B grocery tech
                company in the Midwest. As a tech lead, my primary focus is developing Aisles Online, Hy-Vee’s
                e-commerce grocery shopping platform – which serves millions of customers every year. I also help
                maintain our internal component library.
              </Text>
              <Text color={theme.fontColors[colorMode]} mb={4}>
                At the beginning of 2020, I launched my most ambitious project – a 50+ lesson video course on React and
                Next.js. It’s called&nbsp; , and it’s been my most successful solo-endeavor so far. I'm now building a
                new course called&nbsp;
              </Text>
            </Box>
            <Text color={theme.fontColors[colorMode]} mb={4}>
              I’ve spoken across the country at conferences and meet-ups about front-end development, design, and
              recruiting. I also actively contribute to my blog, which attracts thousands of readers every month. I
              mostly write about development, tech careers, and my personal life. If you'd like to follow along,
              subscribe to&nbsp;
            </Text>
            <Text color={theme.fontColors[colorMode]} mb={4}>
              I grew up in small-town Iowa and went to school at Iowa State, graduating with a degree in Computer
              Engineering. I spend my free time playing music, creating videos, and enjoying time with friends and
              family.
            </Text>
          </Flex>
        </Stack>

        <Stack isInline spacing={8} align="center" spacing={8} m="0 auto 4rem auto" maxWidth="700px">
          <Feature title="Plan Money" desc="The future can be even brighter but a goal without a plan is just a wish" />
          <Feature
            title="Save Money"
            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
          />
        </Stack>
      </Container>
    </>
  )
}

export default About
