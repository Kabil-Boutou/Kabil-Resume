import React from 'react'
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core'

import Meta from 'components/Meta'
import GlobalTheme from 'styles/GlobalTheme'
import GlobalStyle from 'styles/GlobalStyle'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Meta />
      <ColorModeProvider value="dark">
        <GlobalStyle>{children}</GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default Layout
