import React from 'react'
import { Flex, Link, IconButton } from '@chakra-ui/core'

//import NowPlaying from './NowPlaying'

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    {/*   <NowPlaying /> */}
    <div>
      <Link href="https://github.com/Kabil-Boutou" title="GitHub" isExternal>
        <IconButton aria-label="GitHub" icon="github" size="lg" color="gray.500" variant="ghost" />
      </Link>
      <Link href="https://www.linkedin.com/in/kabil-boutou-8682bb129/" title="LinkedIn" isExternal>
        <IconButton aria-label="LinkedIn" icon="linkedin" size="lg" color="gray.500" variant="ghost" />
      </Link>
      <Link href="mailto:me@kboutou.io" title="Email" isExternal>
        <IconButton aria-label="Email" icon="mail" size="lg" color="gray.500" variant="ghost" />
      </Link>
    </div>
  </Flex>
)

export default Footer
