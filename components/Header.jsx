import dynamic from 'next/dynamic'
import {
  Box,
  IconButton,
  useColorMode,
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
  Spinner,
  Flex,
} from '@chakra-ui/react'

import ScrollMeter from 'components/ScrollMeter'
import { StickyNav, iconProps } from 'components/styles/header'
import { EMAIL, PHONE, LINKEDIN, GITHUB, CHANGE_LANG } from 'utils/consts'
import { isMobileDevice } from 'utils'
import { useStateValue } from 'context/GlobalContext'

const Resume = dynamic(() => import('components/Resume'), {
  ssr: false,
  loading: function LoadingResume() {
    return (
      <Flex justifyContent="center" alignItems="center" h="100vh">
        <Spinner color="tomato" />
      </Flex>
    )
  },
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

  const ButtonLangSwitch = () => {
    return (
      <Button aria-label="Switch langue" onClick={switchLang} w={4} variant="ghost">
        <Text color={theme.fontColors[colorMode]} fontSize="sm">
          {state.lang_visual}
        </Text>
      </Button>
    )
  }

  return (
    <StickyNav as="nav" bg={theme.colors.navBgColor[colorMode]} id="header">
      <Box>
        <Link href={GITHUB} title="GitHub" isExternal>
          <IconButton aria-label="GitHub" icon="github" {...iconProps} />
        </Link>
        <Link href={LINKEDIN} title="LinkedIn" isExternal>
          <IconButton aria-label="LinkedIn" icon="linkedin" {...iconProps} />
        </Link>
        <Link href={`mailto:${EMAIL}`} title="Email">
          <IconButton aria-label="Email" icon="mail" {...iconProps} />
        </Link>
        <Link href={`tel:${PHONE}`} title="phone">
          <IconButton aria-label="Phone" icon="number" {...iconProps} />
        </Link>
      </Box>
      <SimpleGrid columns={2} spacing={3}>
        {window !== undefined && isMobileDevice() ? (
          <>
            <ButtonLangSwitch />
            <ScrollMeter />
          </>
        ) : (
          <>
            <IconButton aria-label="download" icon="download" color="tomato" onClick={onOpen} />
            <ButtonLangSwitch />
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
