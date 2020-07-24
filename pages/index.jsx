import React from 'react'
import { NextSeo } from 'next-seo'
import {
  useColorMode,
  useTheme,
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  SimpleGrid,
  Divider,
  List,
  ListItem,
} from '@chakra-ui/core'

import Container from 'components/Container'
import Feature from 'components/HalfContent'
import WorkExp from 'components/WorkExp'

const url = `${process.env.url}/about`
const title = 'About Me – Kabil Boutou'

const About = () => {
  const { colorMode } = useColorMode()
  const theme = useTheme()

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
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            maxWidth="700px"
            borderWidth="1px"
            p="2%"
            borderRadius="10px"
          >
            <Avatar mb={5} alignItems="flex-center" size="2xl" name="Kabil Boutou" src="https://bit.ly/sage-adebayo" />
            <SimpleGrid columns={2} spacing={10}>
              <Box mb={4} textAlign="center">
                <Heading letterSpacing="tight" mb={2} as="h1" size="xl">
                  Introduction
                </Heading>
                <Text color={theme.fontColors[colorMode]}>
                  Evolving my decision-making skills has always been one of my ultimate goals, I always seek for
                  learning from more experienced people and share my humbled knowledge with the ones whom needs it.
                  <br />
                  <Text as="cite">
                    «In addition to his technical skills, Kabil is a trusted person, committed and engaged to his work.»
                    - Oliver BRONZINI • CEO MALTEM AFRICA
                  </Text>
                </Text>
              </Box>
              <Box mb={4}>
                <Heading letterSpacing="tight" mb={2} as="h1" size="xl" textAlign="center">
                  Skills
                </Heading>
                <List styleType="disc" color={theme.fontColors[colorMode]}>
                  <ListItem>Next.Js, React.Js, Apollo client, Prisma</ListItem>
                  <ListItem>Node.Js, Express.Js, KnexJs, GraphQL</ListItem>
                  <ListItem>PostgreSQL, MonogoDB, Firebase</ListItem>
                  <ListItem>WordPress, Strapi</ListItem>
                  <ListItem>Git, Trello, Jira</ListItem>
                  <ListItem>PM2, Nginx</ListItem>
                  <ListItem>Vercel, AWS, DigitalOcean</ListItem>
                </List>
              </Box>
            </SimpleGrid>
            <Divider borderColor={theme.fontColors[colorMode]} />
            <Box>
              <Heading letterSpacing="tight" mb={2} as="h1" size="xl" textAlign="center">
                Work Experience
              </Heading>
              <WorkExp logo="Eqdom.png" logoName="Eqdom" post="Full Stack" ent="Eqdom" time="Jul 2020 - present" />
              <WorkExp
                logo="sg.png"
                logoName="Societe Generale"
                post="Web Dev"
                ent="Societe Generale"
                time="Aug 2019 - Jul 2020"
              />
              <WorkExp logo="Saham.png" logoName="Saham" post="Web Dev" ent="Saham Group" time="Aug 2018 - Jun 2020" />
              <WorkExp
                logo="Maltem.png"
                logoName="Maltem"
                post="Consultant"
                ent="Maltem Africa"
                time="May 2018 - present"
              />
              <WorkExp
                logo="uf.jpg"
                logoName="Urban Fusion"
                post="Web Dev"
                ent="Urban Fusion"
                time="Mar 2017 - Apr 2018"
              />
            </Box>
          </Flex>
        </Stack>

        <Stack isInline spacing={8} align="center" m="0 auto 4rem auto" maxWidth="700px">
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
