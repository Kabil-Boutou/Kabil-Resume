import React from 'react'
import { Flex, IconButton, Button, useColorMode } from '@chakra-ui/core'

import { upperFirstLetter } from 'utils'
import { useStateValue } from 'context/GlobalContext'
import { CHANGE_LANG } from 'utils/consts'
//import NowPlaying from './NowPlaying'

const Footer = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const [state, dispatch] = useStateValue()
  const switchLang = () => {
    if (state.lang === 'fr') dispatch({ type: CHANGE_LANG, lang: 'en' })
    else dispatch({ type: CHANGE_LANG, lang: 'fr' })
  }
  return (
    <Flex align="center" mb={4} direction="column">
      {/*   <NowPlaying /> */}
      <div>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          onClick={toggleColorMode}
          mr={3}
        />
        <Button aria-label="Switch langue" onClick={switchLang} w={4}>
          {upperFirstLetter(state.lang)}
        </Button>
      </div>
    </Flex>
  )
}
export default Footer
