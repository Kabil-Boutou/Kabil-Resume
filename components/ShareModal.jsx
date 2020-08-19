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
} from '@chakra-ui/core'
import { useStateValue } from 'context/GlobalContext'

export default function ShareModal({ isOpen, onClose }) {
  const [{ lang_content }] = useStateValue()
  const { colorMode } = useColorMode()

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered preserveScrollBarGap>
        <ModalOverlay />
        <ModalContent bg={colorMode === 'dark' ? 'gray.900' : 'gray.300'} borderRadius={20} maxW={200}>
          <ModalHeader>{lang_content.share}</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <SimpleGrid columns={2} spacing={2} p={8} textAlign="justify">
              <Link
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fsharingbuttons.io&amp;title=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;summary=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;source=http%3A%2F%2Fsharingbuttons.io"
                title="Linkedin"
                isExternal
              >
                <IconButton aria-label="Linkedin" icon="linkedin" variant="ghost" maxW={30} />
              </Link>
              <Link
                href="whatsapp://send?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.%20http%3A%2F%2Fsharingbuttons.io"
                title="Whatsapp"
                isExternal
              >
                <IconButton aria-label="Whatsapp" icon="whatsapp" variant="ghost" maxW={30} />
              </Link>
              <Link
                href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io"
                title="Facebook"
                isExternal
              >
                <IconButton aria-label="Facebook" icon="facebook" variant="ghost" maxW={30} />
              </Link>
              <Link
                href="mailto:?subject=Kabil%20Boutou%20Portfolio.&amp;body=http%3A%2F%2Fsharingbuttons.io"
                title="Mail"
                isExternal
              >
                <IconButton aria-label="Email" icon="mail" variant="ghost" maxW={30} />
              </Link>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
