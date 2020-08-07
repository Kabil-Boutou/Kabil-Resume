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
  Button,
} from '@chakra-ui/core'

export default function ShareModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered preserveScrollBarGap>
        <ModalOverlay />
        <ModalContent bg="gray.900" borderRadius={20}>
          <ModalHeader>Share</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <SimpleGrid columns={2} spacing={2} p={8} textAlign="justify">
              <Button leftIcon="mail" variant="ghost" minW={100}></Button>
              <Button leftIcon="mail" variant="ghost" minW={100}></Button>
              <IconButton aria-label="Facebook" icon="facebook" />
              <Button leftIcon="mail" variant="ghost" minW={100}></Button>
              {/*    <Box>
                <Link href="https://github.com/Kabil-Boutou" title="GitHub" isExternal>
                  <IconButton aria-label="GitHub" icon="github" size="lg" color="gray.300" variant="ghost" />
                </Link>
                Whatsapp
              </Box>
              
              <Box>
                <Link href="https://github.com/Kabil-Boutou" title="GitHub" isExternal>
                  <IconButton aria-label="GitHub" icon="github" size="lg" color="gray.300" variant="ghost" />
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link href="https://github.com/Kabil-Boutou" title="GitHub" isExternal>
                  <IconButton aria-label="GitHub" icon="github" size="lg" color="gray.300" variant="ghost" />
                  Linkedin
                </Link>
              </Box>
              <Box>
                <Link
                  href="mailto:?subject=Kabil%20Boutou%20Portfolio.&amp;body=http%3A%2F%2Fsharingbuttons.io"
                  title="Mail"
                  isExternal
                >
                  <IconButton aria-label="Mail" icon="mail" size="lg" color="gray.300" variant="ghost" />
                  Email
                </Link>
              </Box>
            */}{' '}
            </SimpleGrid>
          </ModalBody>

          {/*   <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}
