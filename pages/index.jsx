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
import { useStateValue } from 'context/GlobalContext'

const url = `${process.env.url}/about`
const title = 'About Me – Kabil Boutou'
const Experiences = [
  {
    tasks: [
      'Analyze customer needs and expectations',
      'Provide proposals in sprint planning',
      'Establish a working method with the team',
      'Design and realization of the solution in question',
      'Animat demonstrations',
    ],
    intro: ``,
    ItStack: ``,
  },
  { tasks: [], intro: ``, ItStack: `` },

  { tasks: [], intro: ``, ItStack: `` },
  { tasks: [], intro: ``, ItStack: `` },
  {
    tasks: [],
    intro: `
    Web sites development and deployment on behalf of the agency's clients,
    creat and adapt ERP modules such as accounting for clients bills and managing employes vecations.
    Recruting and helping interns.`,
    ItStack: `NodeJS, ExpressJS, HandelbarsJS, ReactJS, Redux, FireBase, PasportJS, REST API, KeystoneJS, SocketIO, PayPal
    API, JQuery, MongoDB, Mongoose, Slack, BitBucket.`,
  },
]
const About = () => {
  const [state] = useStateValue()
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
                <Text color={theme.fontColors[colorMode]} textAlign="justify">
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
                  <ListItem>Next.Js, React.Js, Apollo client, Prisma2</ListItem>
                  <ListItem>Node.Js, Express.Js, KnexJs, GraphQL</ListItem>
                  <ListItem>PostgreSQL, MonogoDB, Firebase</ListItem>
                  <ListItem>Vercel, AWS, DigitalOcean</ListItem>
                  <ListItem>WordPress, Strapi</ListItem>
                  <ListItem>PM2, Nginx</ListItem>
                  <ListItem>Git, Trello, Jira</ListItem>
                  <ListItem>Scrum / Kanban Framework</ListItem>
                </List>
              </Box>
            </SimpleGrid>
            <Divider borderColor={theme.fontColors[colorMode]} />
            <Box>
              <Heading letterSpacing="tight" mb={2} as="h1" size="xl" textAlign="center">
                Work Experience
              </Heading>
              {state.lang_content.workExp.map((we, key) => {
                return (
                  <WorkExp
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
              {/*     <WorkExp
                logo="sg.png"
                logoAlt="Societe Generale"
                post="Web Dev"
                inc="Societe Generale"
                period="Aug 2019 - Jul 2020"
                tasks={Experiences[1].tasks}
                intro={Experiences[1].intro}
                stack={Experiences[1].ItStack}
              /> */}
              {/* 
              <WorkExp
                logo="Saham.png"
                logoName="Saham"
                post="Web Dev"
                ent="Saham Group"
                time="Aug 2018 - Jun 2020"
                tasks={Experiences[2].tasks}
                intro={Experiences[2].intro}
                ItStack={Experiences[2].ItStack}
              />
              <WorkExp
                logo="Maltem.png"
                logoName="Maltem"
                post="Consultant"
                ent="Maltem Africa"
                time="May 2018 - present"
                tasks={Experiences[3].tasks}
                intro={Experiences[3].intro}
                ItStack={Experiences[3].ItStack}
              />
              <WorkExp
                logo="uf.jpg"
                logoName="Urban Fusion"
                post="Web Dev"
                ent="Urban Fusion"
                time="Mar 2017 - Apr 2018"
                tasks={Experiences[4].tasks}
                intro={Experiences[4].intro}
                ItStack={Experiences[4].ItStack}
              /> */}
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
