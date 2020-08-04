import React from 'react'
import { Box, Avatar, Text } from '@chakra-ui/core'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import { useStateValue } from 'context/GlobalContext'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
  const [state] = useStateValue()
  return (
    <AutoplaySlider
      className="awsome-slider"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      {state.lang_content.quotes.map((quote, key) => {
        return (
          <Box key={key} textAlign="justify">
            <Avatar size="lg" name={quote.name} src={quote.avatar} />
            <Text fontSize="2xs">{quote.name}</Text>
            <Text fontSize="xs" fontWeight={100} mb={3} color="tomato">
              {quote.position}
            </Text>
            <Text as="blockquote" fontStyle="italic" maxW={400} fontWeight={300}>
              {quote.quote}
            </Text>
          </Box>
        )
      })}
    </AutoplaySlider>
  )
}
export default Slider
