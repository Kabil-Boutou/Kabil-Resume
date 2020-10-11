import React from 'react'
import { Box } from '@chakra-ui/core'

export default function SoundCloud() {
  if (!String(process.env.SOUNDCLOUD_API)) return null
  return (
    <Box maxW={700} m="auto" h={300} mb={20}>
      <iframe
        title="KB_SoundCloud"
        width="100%"
        height="300"
        scrolling="no"
        allow="autoplay"
        src={process.env.SOUNDCLOUD_API}
      ></iframe>
    </Box>
  )
}
