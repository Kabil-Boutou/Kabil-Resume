import React from 'react'
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core'

import Meta from 'components/Meta'
import Header from 'components/Header'
import Footer from 'components/Footer'
import GlobalTheme from 'styles/GlobalTheme'
import GlobalStyle from 'styles/GlobalStyle'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Meta />
      <ColorModeProvider value="dark">
        <GlobalStyle>
          <Header />
          {children}
          <Footer />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default Layout
