import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import { useStateValue } from 'context/GlobalContext'
import Quote from './quote'

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
          <React.Fragment key={key}>
            <Quote {...quote} />
          </React.Fragment>
        )
      })}
    </AutoplaySlider>
  )
}
export default Slider
