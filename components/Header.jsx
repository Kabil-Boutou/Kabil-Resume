import React from 'react'
import dynamic from 'next/dynamic'
import {
  Box,
  IconButton,
  useColorMode,
  Flex,
  Link,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  Text,
  useTheme,
} from '@chakra-ui/core'
import styled from '@emotion/styled'

import ScrollMeter from 'components/ScrollMeter'
import { EMAIL, PHONE, LINKEDIN, GITHUB, CHANGE_LANG } from 'utils/consts'
import { isMobileDevice } from 'utils'
import { useStateValue } from 'context/GlobalContext'

const Resume = dynamic(() => import('components/Resume'), {
  ssr: false,
})
export default function Header() {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  const [state, dispatch] = useStateValue()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const switchLang = () => {
    if (state.lang === 'fr') dispatch({ type: CHANGE_LANG, lang: 'en', lang_visual: 'En/Fr' })
    else dispatch({ type: CHANGE_LANG, lang: 'fr', lang_visual: 'Fr/En' })
  }

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
      mx="auto"
      id="header"
    >
      <Box>
        <Link href={GITHUB} title="GitHub" isExternal>
          <IconButton aria-label="GitHub" icon="github" size="lg" color="gray.500" variant="ghost" />
        </Link>
        <Link href={LINKEDIN} title="LinkedIn" isExternal>
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
        {window !== undefined && isMobileDevice() ? (
          <>
            <Button aria-label="Switch langue" onClick={switchLang} w={4} variant="ghost">
              <Text color={theme.fontColors[colorMode]} fontSize="sm">
                {state.lang_visual}
              </Text>
            </Button>
            <ScrollMeter />
          </>
        ) : (
          <>
            <IconButton aria-label="download" icon="download" color="tomato" onClick={onOpen} />
            <Button aria-label="Switch langue" onClick={switchLang} w={4} variant="ghost">
              <Text color={theme.fontColors[colorMode]} fontSize="sm">
                {state.lang_visual}
              </Text>
            </Button>
          </>
        )}
      </SimpleGrid>
      {window !== undefined && !isMobileDevice() && (
        <Modal onClose={onClose} isOpen={isOpen} size="xl">
          <ModalOverlay />
          <ModalContent style={{ backgroundColor: 'transparent' }}>
            <ModalBody>
              <Resume />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </StickyNav>
  )
}
