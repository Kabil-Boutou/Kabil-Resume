import React from 'react'
import { Button, Box, IconButton, useColorMode, Flex } from '@chakra-ui/core'
import styled from '@emotion/styled'

import { upperFirstLetter } from 'utils'
import { CHANGE_LANG } from 'utils/consts'
import { useStateValue } from 'context/GlobalContext'

export default function Header() {
  const { toggleColorMode, colorMode } = useColorMode()
  const [state, dispatch] = useStateValue()

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;
  `
  const switchLang = () => {
    if (state.lang === 'fr') dispatch({ type: CHANGE_LANG, lang: 'en' })
    else dispatch({ type: CHANGE_LANG, lang: 'fr' })
  }
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
    >
      <Box>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          onClick={toggleColorMode}
          mr={3}
        />
        <Button aria-label="Switch langue" onClick={switchLang} w={4}>
          {upperFirstLetter(state.lang)}
        </Button>
      </Box>
      <Box>
        <Button leftIcon="download" size="md" width="150px" border="1px" borderColor="tomato">
          Download
        </Button>
        {/*    <NextLink href="/dashboard" passHref>
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
        </NextLink> */}
      </Box>
    </StickyNav>
  )
}
