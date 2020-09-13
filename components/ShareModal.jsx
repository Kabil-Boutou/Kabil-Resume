import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Divider,
  SimpleGrid,
  Link,
  useColorMode,
  useTheme,
} from '@chakra-ui/core'
import { useStateValue } from 'context/GlobalContext'

export default function ShareModal({ isOpen, onClose }) {
  const [{ lang_content }] = useStateValue()
  const { colorMode } = useColorMode()
  const theme = useTheme()

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered preserveScrollBarGap>
        <ModalOverlay />
        <ModalContent bg={theme.modal.bg[colorMode]} borderRadius={20} maxW={200}>
          <ModalHeader>{lang_content.share}</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <SimpleGrid columns={2} spacing={2} p={8} textAlign="justify">
              <Link
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.kboutou.me&title=&summary=&source="
                title="Linkedin"
                isExternal
              >
                <IconButton aria-label="Linkedin" icon="linkedin" variant="ghost" maxW={30} />
              </Link>
              <Link href="https://twitter.com/home?status=https://www.kboutou.me" title="twitter" isExternal>
                <IconButton aria-label="Twitter" icon="twitter" variant="ghost" maxW={30} />
              </Link>
              <Link
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.kboutou.me"
                title="Facebook"
                isExternal
              >
                <IconButton aria-label="Facebook" icon="facebook" variant="ghost" maxW={30} />
              </Link>
              <Link href="mailto:info@example.com?&subject=&body=https://www.kboutou.me" title="Mail" isExternal>
                <IconButton aria-label="Email" icon="mail" variant="ghost" maxW={30} />
              </Link>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
