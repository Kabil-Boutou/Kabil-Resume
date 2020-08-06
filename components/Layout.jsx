import React from 'react'
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core'
import dynamic from 'next/dynamic'

import Meta from 'components/Meta'
import GlobalTheme from 'styles/GlobalTheme'
import GlobalStyle from 'styles/GlobalStyle'
const Header = dynamic(() => import('components/Header'), { ssr: false })
const Footer = dynamic(() => import('components/Footer'), { ssr: false })

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
