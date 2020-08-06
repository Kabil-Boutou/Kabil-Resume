import React from 'react'
import { Flex, IconButton, Button, useColorMode, Box } from '@chakra-ui/core'

import { upperFirstLetter } from 'utils'
import { useStateValue } from 'context/GlobalContext'
import { CHANGE_LANG } from 'utils/consts'

const Footer = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const [state, dispatch] = useStateValue()
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
        />
        <Button aria-label="Switch langue" onClick={switchLang} w={4} mr={3}>
          {upperFirstLetter(state.lang)}
        </Button>
        <IconButton aria-label="Sharing network" icon="share" onClick={toggleColorMode} />
      </Box>
    </Flex>
  )
}
export default Footer
