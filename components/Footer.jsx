import { Flex, IconButton, useColorMode, Box, useDisclosure } from '@chakra-ui/react'

import ShareModal from 'components/ShareModal'

export default function Footer() {
  const { toggleColorMode, colorMode } = useColorMode()
  const { onOpen, isOpen, onClose } = useDisclosure()

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
        <IconButton aria-label="Sharing network" icon="share" onClick={onOpen} variant="ghost" />
      </Box>
      <ShareModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
