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

/* 


<!-- Sharingbutton Facebook -->
<a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="">
  <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
    </div>
  </div>
</a>

<!-- Sharingbutton E-Mail -->
<a class="resp-sharing-button__link" href="mailto:?subject=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;body=http%3A%2F%2Fsharingbuttons.io" target="_self" rel="noopener" aria-label="">
  <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg>
    </div>
  </div>
</a>

<!-- Sharingbutton LinkedIn -->
<a class="resp-sharing-button__link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fsharingbuttons.io&amp;title=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;summary=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;source=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="">
  <div class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"/></svg>
    </div>
  </div>
</a>

<!-- Sharingbutton WhatsApp -->
<a class="resp-sharing-button__link" href="whatsapp://send?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.%20http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="">
  <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"/></svg>
    </div>
  </div>
</a>
*/
