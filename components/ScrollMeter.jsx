import { motion, useViewportScroll } from 'framer-motion'
import { Box } from '@chakra-ui/react'

export default function ScrollMeter() {
  const { scrollYProgress } = useViewportScroll()
  return (
    <Box>
      <motion.div className="SM_container">
        <motion.div
          className="SM_item"
          style={{
            scaleY: scrollYProgress,
          }}
        />
      </motion.div>
    </Box>
  )
}
