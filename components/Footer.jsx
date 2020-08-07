import React from 'react'
import { Flex, IconButton, Button, useColorMode, Box, Text, useDisclosure } from '@chakra-ui/core'

import { upperFirstLetter } from 'utils'
import { useStateValue } from 'context/GlobalContext'
import { CHANGE_LANG } from 'utils/consts'
import ShareModal from 'components/ShareModal'
import { useTheme } from 'emotion-theming'
const Footer = () => {
  const [state, dispatch] = useStateValue()
  const { toggleColorMode, colorMode } = useColorMode()
  const { onOpen, isOpen, onClose } = useDisclosure()
  const theme = useTheme()
  const switchLang = () => {
    if (state.lang === 'fr') dispatch({ type: CHANGE_LANG, lang: 'en' })
    else dispatch({ type: CHANGE_LANG, lang: 'fr' })
  }
  return (
    <Flex align="center" mb={4} direction="column" id="footer">
      <Box>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          onClick={toggleColorMode}
          mr={3}
          variant="ghost"
        />
        <Button aria-label="Switch langue" onClick={switchLang} w={4} mr={3} variant="ghost">
          <Text color={theme.fontColors[colorMode]}>{upperFirstLetter(state.lang)}</Text>
        </Button>
        <IconButton aria-label="Sharing network" icon="share" onClick={onOpen} variant="ghost" />
      </Box>
      <ShareModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
export default Footer
