import React, { useState } from 'react'
import NextLink from 'next/link'
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/core'
import styled from '@emotion/styled'

import Footer from './Footer'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [lang, setLang] = useState('En')

  const bgColor = {
    light: 'white',
    dark: '#000',
  }
  const primarytextColor = {
    light: 'black',
    dark: 'white',
  }
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(0, Ø, 0, 0.8)',
  }
  const switchLang = () => {
    if (lang === 'Fr') setLang('En')
    else setLang('Fr')
  }
  return (
    <>
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
      >
        <Box>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? 'sun' : 'moon'}
            onClick={toggleColorMode}
            mr={3}
          />
          <Button aria-label="Switch langue" onClick={switchLang} w={4}>
            {lang}
          </Button>
        </Box>
        <Box>
          <NextLink href="/dashboard" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Dashboard
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Blog
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  )
}

export default Container
