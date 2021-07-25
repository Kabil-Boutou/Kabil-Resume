import { theme as chakraTheme } from '@chakra-ui/react'

import customIcons from 'styles/customIcons'

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  colors: {
    ...chakraTheme.colors,
    light: '#fff',
    dark: '#000',
    navBgColor: {
      light: 'rgba(255, 255, 255, 0.8)',
      dark: 'rgba(0, Ø, 0, 0.8)',
    },
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  fontColors: {
    light: 'gray.700',
    dark: 'silver',
  },
  modal: {
    bg: {
      light: 'gray.300',
      dark: 'gray.900',
    },
  },
  icons: {
    ...chakraTheme.icons,
    ...customIcons,
  },
  titles: {
    textAlign: 'left',
  },
}
export default theme
