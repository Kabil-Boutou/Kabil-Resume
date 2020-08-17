import React from 'react'
import { Box, IconButton, useColorMode, Flex, Link, SimpleGrid } from '@chakra-ui/core'
import styled from '@emotion/styled'

import ScrollMeter from 'components/Scrollmter'
import { EMAIL, PHONE } from 'utils/consts'
export default function Header() {
  const { colorMode } = useColorMode()

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;
  `
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(0, Ø, 0, 0.8)',
  }
  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="770px"
      width="100%"
      bg={navBgColor[colorMode]}
      as="nav"
      p={8}
      mt={[0, 8]}
      mb={8}
      mx="auto"
      id="header"
    >
      <Box>
        <Link href="https://github.com/Kabil-Boutou" title="GitHub" isExternal>
          <IconButton aria-label="GitHub" icon="github" size="lg" color="gray.500" variant="ghost" />
        </Link>
        <Link href="https://www.linkedin.com/in/kabil-boutou-8682bb129/" title="LinkedIn" isExternal>
          <IconButton aria-label="LinkedIn" icon="linkedin" size="lg" color="gray.500" variant="ghost" />
        </Link>
        <Link href={`mailto:${EMAIL}`} title="Email">
          <IconButton aria-label="Email" icon="mail" size="lg" color="gray.500" variant="ghost" />
        </Link>
        <Link href={`tel:${PHONE}`} title="phone">
          <IconButton aria-label="Phone" icon="phone" color="gray.500" variant="ghost" outline />
        </Link>
      </Box>
      <SimpleGrid columns={2} spacing={3}>
        <IconButton aria-label="download" icon="download" color="tomato" onClick={() => window.print()} />
        <ScrollMeter />
        {/*    <NextLink href="/dashboard" passHref>
          <Button as="a" variant="ghost" p={[1, 4]}>
            Dashboard
          </Button>
        </NextLink>
     */}
      </SimpleGrid>
    </StickyNav>
  )
}
