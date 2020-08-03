import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </AutoplaySlider>
)
export default Slider
